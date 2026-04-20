// Cron-Endpoint: Synchronisiert iCal-Feeds aller Wohnungen in den DB-Cache.
// Auf Vercel via vercel.json crons aufgerufen.

import { NextRequest, NextResponse } from "next/server";
import { wohnungen } from "@/lib/data/wohnungen";
import { getDb, schema } from "@/lib/db/client";
import { eq } from "drizzle-orm";
import { parseIcal, expandBlockedDates } from "@/lib/ical";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Sichern via CRON_SECRET (Vercel Cron sendet Authorization: Bearer …)
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const db = getDb();
  if (!db) {
    // Keine DB konfiguriert → Sync ist ein No-op. Als 200 antworten,
    // damit der Vercel-Cron nicht jede Minute einen 500er meldet.
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "DATABASE_URL not configured",
    });
  }

  const summary: Record<string, { feeds: number; blocked: number; error?: string }> = {};

  for (const w of wohnungen) {
    if (!w.icalFeeds || w.icalFeeds.length === 0) {
      summary[w.slug] = { feeds: 0, blocked: 0 };
      continue;
    }
    const blocked = new Set<string>();
    let perFeedErrors = 0;
    for (const feed of w.icalFeeds) {
      try {
        const res = await fetch(feed.url, {
          headers: { "user-agent": "roomluxe.de Sync/1.0" },
          cache: "no-store",
        });
        if (!res.ok) {
          perFeedErrors++;
          continue;
        }
        const text = await res.text();
        const events = parseIcal(text);
        for (const d of expandBlockedDates(events)) blocked.add(d);
      } catch (e) {
        console.error("sync feed failed", feed.url, e);
        perFeedErrors++;
      }
    }
    try {
      await db
        .delete(schema.verfuegbarkeit)
        .where(eq(schema.verfuegbarkeit.wohnungSlug, w.slug));
      if (blocked.size > 0) {
        await db.insert(schema.verfuegbarkeit).values(
          Array.from(blocked).map((d) => ({
            wohnungSlug: w.slug,
            blockedDate: d,
            source: w.icalFeeds?.[0]?.name ?? "ical",
          })),
        );
      }
      summary[w.slug] = {
        feeds: w.icalFeeds.length,
        blocked: blocked.size,
        ...(perFeedErrors > 0 ? { error: `${perFeedErrors} feed(s) failed` } : {}),
      };
    } catch (e: unknown) {
      summary[w.slug] = {
        feeds: w.icalFeeds.length,
        blocked: 0,
        error: e instanceof Error ? e.message : "db write failed",
      };
    }
  }

  return NextResponse.json({
    ok: true,
    syncedAt: new Date().toISOString(),
    summary,
  });
}
