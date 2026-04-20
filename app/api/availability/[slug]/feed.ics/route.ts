// Exportiert die Belegung einer Wohnung als iCal-Feed,
// damit externe Plattformen (Airbnb, Booking) diese synchronisieren können.

import { NextRequest } from "next/server";
import { wohnungBySlug } from "@/lib/data/wohnungen";
import { getDb, schema } from "@/lib/db/client";
import { eq } from "drizzle-orm";
import { generateIcal } from "@/lib/ical";

export const runtime = "nodejs";
export const revalidate = 60;

type Params = { slug: string };

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const w = wohnungBySlug(slug);
  if (!w) {
    return new Response("not found", { status: 404 });
  }

  // Sammelt blockierte Tage aus DB. Gruppiert konsekutive Tage zu Zeiträumen.
  const dates: string[] = [];
  const db = getDb();
  if (db) {
    try {
      const rows = await db
        .select()
        .from(schema.verfuegbarkeit)
        .where(eq(schema.verfuegbarkeit.wohnungSlug, slug));
      for (const r of rows) dates.push(r.blockedDate);
    } catch (e) {
      console.error("ical export read failed", e);
    }
  }
  dates.sort();

  // Gruppiere konsekutive ISO-Daten zu Bereichen
  type Range = { start: string; end: string };
  const ranges: Range[] = [];
  for (const d of dates) {
    const last = ranges[ranges.length - 1];
    if (last && nextDay(last.end) === d) {
      last.end = d;
    } else {
      ranges.push({ start: d, end: d });
    }
  }

  const icsBody = generateIcal({
    prodId: "roomluxe",
    events: ranges.map((r, i) => ({
      uid: `${slug}-${r.start}-${i}`,
      startDate: r.start,
      endDate: nextDay(r.end), // iCal DTEND ist exklusiv
      summary: "Belegt",
    })),
  });

  return new Response(icsBody, {
    headers: {
      "content-type": "text/calendar; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=300",
    },
  });
}

function nextDay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + 1));
  return dt.toISOString().slice(0, 10);
}
