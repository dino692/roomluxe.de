import { NextRequest, NextResponse } from "next/server";
import { wohnungBySlug } from "@/lib/data/wohnungen";
import { getDb, schema } from "@/lib/db/client";
import { eq } from "drizzle-orm";
import { parseIcal, expandBlockedDates } from "@/lib/ical";

export const runtime = "nodejs";
export const revalidate = 60; // 1 min caching (matches cron cadence)

type Params = { slug: string };

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const w = wohnungBySlug(slug);
  if (!w) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  // 1) Versuche DB-Cache zu lesen
  const db = getDb();
  if (db) {
    try {
      const rows = await db
        .select()
        .from(schema.verfuegbarkeit)
        .where(eq(schema.verfuegbarkeit.wohnungSlug, slug));
      if (rows.length > 0) {
        return NextResponse.json({
          blockedDates: rows.map((r) => r.blockedDate),
          syncedAt: rows[0].syncedAt,
          source: "db",
        });
      }
    } catch (e) {
      console.error("verfuegbarkeit DB read failed", e);
    }
  }

  // 2) Fallback: Live von iCal-Feeds holen
  const blocked = new Set<string>();
  let syncedAt = new Date().toISOString();
  for (const feed of w.icalFeeds ?? []) {
    try {
      const res = await fetch(feed.url, {
        next: { revalidate: 60 },
        headers: { "user-agent": "roomluxe.de Sync/1.0" },
      });
      if (!res.ok) continue;
      const text = await res.text();
      const events = parseIcal(text);
      for (const d of expandBlockedDates(events)) blocked.add(d);
      syncedAt = new Date().toISOString();
    } catch (e) {
      console.error("ical fetch failed", feed.name, e);
    }
  }

  return NextResponse.json({
    blockedDates: Array.from(blocked).sort(),
    syncedAt,
    source: "live",
  });
}
