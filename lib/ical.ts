// Minimale iCalendar-Helfer: Parsen externer Feeds (Airbnb/Booking) und
// Generieren eines Export-Feeds (für Synchronisation in andere Plattformen)

export type IcalEvent = {
  uid: string;
  start: Date;
  end: Date;
  summary?: string;
};

/**
 * Parse iCal text → Liste von Events.
 * Bewusst minimal: nur DTSTART, DTEND, UID, SUMMARY für VEVENT-Blöcke.
 */
export function parseIcal(text: string): IcalEvent[] {
  const lines = text
    .replace(/\r\n[ \t]/g, "") // unfold continuation lines
    .split(/\r?\n/);

  const events: IcalEvent[] = [];
  let cur: Partial<IcalEvent> | null = null;

  for (const raw of lines) {
    const line = raw.trim();
    if (line === "BEGIN:VEVENT") cur = {};
    else if (line === "END:VEVENT") {
      if (cur && cur.start && cur.end) events.push(cur as IcalEvent);
      cur = null;
    } else if (cur) {
      const m = /^([A-Z]+)(?:;[^:]*)?:(.+)$/.exec(line);
      if (!m) continue;
      const key = m[1];
      const val = m[2];
      if (key === "DTSTART") cur.start = parseIcalDate(val);
      else if (key === "DTEND") cur.end = parseIcalDate(val);
      else if (key === "UID") cur.uid = val;
      else if (key === "SUMMARY") cur.summary = val;
    }
  }
  return events;
}

function parseIcalDate(value: string): Date {
  // Date-only:    20260415
  // Date-time UTC: 20260415T120000Z
  if (/^\d{8}$/.test(value)) {
    const y = +value.slice(0, 4);
    const m = +value.slice(4, 6) - 1;
    const d = +value.slice(6, 8);
    return new Date(Date.UTC(y, m, d));
  }
  const m = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/.exec(value);
  if (m) {
    return new Date(
      Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]),
    );
  }
  return new Date(value);
}

/** Liefert alle blockierten Tage zwischen start (inkl.) und end (exkl.) als ISO-Date */
export function expandBlockedDates(events: IcalEvent[]): string[] {
  const out = new Set<string>();
  for (const ev of events) {
    const cur = new Date(ev.start);
    while (cur < ev.end) {
      out.add(cur.toISOString().slice(0, 10));
      cur.setUTCDate(cur.getUTCDate() + 1);
    }
  }
  return Array.from(out).sort();
}

/** Generiert ein ICS-File aus blockierten Datumsbereichen */
export function generateIcal({
  prodId,
  events,
}: {
  prodId: string;
  events: { uid: string; startDate: string; endDate: string; summary: string }[];
}): string {
  const now = new Date();
  const dt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");

  const head = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${prodId}//roomluxe.de//DE`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  const body = events.flatMap((e) => [
    "BEGIN:VEVENT",
    `UID:${e.uid}@roomluxe.de`,
    `DTSTAMP:${dt(now)}`,
    `DTSTART;VALUE=DATE:${e.startDate.replace(/-/g, "")}`,
    `DTEND;VALUE=DATE:${e.endDate.replace(/-/g, "")}`,
    `SUMMARY:${e.summary}`,
    "END:VEVENT",
  ]);
  return [...head, ...body, "END:VCALENDAR"].join("\r\n");
}
