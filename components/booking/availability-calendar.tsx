"use client";

import { useEffect, useMemo, useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import { de } from "date-fns/locale";
import { differenceInCalendarDays, format, isAfter, isBefore } from "date-fns";
import { RefreshCw, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  wohnungSlug: string;
  minNights: number;
  pricePerNight?: number;
};

type AvailabilityResponse = {
  blockedDates: string[];
  syncedAt: string;
};

export function AvailabilityCalendar({
  wohnungSlug,
  minNights,
  pricePerNight,
}: Props) {
  const [blocked, setBlocked] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [syncedAt, setSyncedAt] = useState<string | null>(null);
  const [range, setRange] = useState<DateRange | undefined>();

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);
    fetch(`/api/availability/${wohnungSlug}`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : { blockedDates: [], syncedAt: new Date().toISOString() }))
      .then((data: AvailabilityResponse) => {
        setBlocked(new Set(data.blockedDates));
        setSyncedAt(data.syncedAt);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [wohnungSlug]);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const blockedDates = useMemo(
    () => Array.from(blocked).map((iso) => new Date(iso + "T00:00:00")),
    [blocked],
  );

  const nights =
    range?.from && range?.to ? differenceInCalendarDays(range.to, range.from) : 0;

  const total = nights && pricePerNight ? nights * pricePerNight : 0;
  const minMet = !range?.from || !range?.to || nights >= minNights;

  // Rangewise check: any blocked day in selected range?
  const rangeHasBlocked = useMemo(() => {
    if (!range?.from || !range?.to) return false;
    for (const d of blockedDates) {
      if (!isBefore(d, range.from) && !isAfter(d, range.to)) return true;
    }
    return false;
  }, [range, blockedDates]);

  const sync = syncedAt ? new Date(syncedAt) : null;

  return (
    <div className="rounded-2xl bg-cream-50 border border-gold-300/40 overflow-hidden">
      <div className="px-5 py-3 flex items-center justify-between border-b border-gold-300/30 bg-cream-100/60">
        <p className="text-sm font-medium text-ink-900">Verfügbarkeit</p>
        <div
          className="flex items-center gap-2 text-xs text-ink-500"
          title={sync ? `Letzte Synchronisation: ${sync.toLocaleString("de-DE")}` : ""}
        >
          <RefreshCw className={`size-3 ${loading ? "animate-spin" : ""} text-gold-700`} />
          <span>
            {loading
              ? "Synchronisiere…"
              : sync
                ? `Sync ${format(sync, "HH:mm 'Uhr'", { locale: de })}`
                : "Live-Sync"}
          </span>
        </div>
      </div>

      <div className="px-2 sm:px-3 pt-2">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          locale={de}
          numberOfMonths={1}
          weekStartsOn={1}
          disabled={[{ before: today }, ...blockedDates]}
          modifiers={{ blocked: blockedDates }}
          modifiersClassNames={{
            blocked:
              "line-through text-ink-300 bg-cream-200/60 cursor-not-allowed",
          }}
          classNames={{
            root: "rdp-rl",
            months: "flex justify-center",
            month_caption: "flex justify-center items-center h-10 capitalize font-medium text-ink-900",
            caption_label: "font-display text-base",
            nav: "absolute right-3 top-3 flex gap-1",
            nav_button: "size-7 grid place-items-center rounded-full hover:bg-cream-300 text-ink-700",
            weekday: "text-[11px] font-medium text-ink-500 uppercase tracking-wider w-9 py-2",
            day: "p-0",
            day_button:
              "size-9 rounded-lg text-sm hover:bg-gold-100 hover:text-gold-800 transition disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed",
            today: "font-bold text-gold-700",
            selected: "!bg-gold-700 !text-white hover:!bg-gold-800",
            range_start: "!bg-gold-700 !text-white !rounded-l-lg",
            range_end: "!bg-gold-700 !text-white !rounded-r-lg",
            range_middle: "!bg-gold-100 !text-ink-900 !rounded-none",
            outside: "text-ink-300",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {range?.from && range?.to ? (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-5 pb-5"
          >
            <div className="rounded-xl bg-cream-100 border border-gold-300/40 p-4">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-ink-500 text-xs uppercase tracking-wider">Check-in</p>
                  <p className="font-medium text-ink-900">
                    {format(range.from, "EEE, d. MMM", { locale: de })}
                  </p>
                </div>
                <div className="text-gold-700">→</div>
                <div className="text-right">
                  <p className="text-ink-500 text-xs uppercase tracking-wider">Check-out</p>
                  <p className="font-medium text-ink-900">
                    {format(range.to, "EEE, d. MMM", { locale: de })}
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gold-300/30 flex items-center justify-between text-sm">
                <span className="text-ink-700">
                  {nights} Nächte
                  {pricePerNight && (
                    <span className="text-ink-500"> · {pricePerNight} €/N</span>
                  )}
                </span>
                {pricePerNight && (
                  <span className="font-display text-lg text-gold-700">
                    ≈ {total} €
                  </span>
                )}
              </div>
              {!minMet && (
                <p className="mt-2 text-xs text-error">
                  Mindestaufenthalt: {minNights} Nächte
                </p>
              )}
              {rangeHasBlocked && (
                <p className="mt-2 text-xs text-error">
                  Im gewählten Zeitraum liegen belegte Tage – bitte anders wählen.
                </p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-5 pb-5 pt-1 text-[11px] text-ink-500 text-center"
          >
            Wählen Sie Check-in und Check-out · Mindestens {minNights} Nächte
          </motion.p>
        )}
      </AnimatePresence>

      {sync && (
        <div className="px-5 pb-4 pt-0 flex items-center justify-center gap-1.5 text-[10px] text-ink-300">
          <CheckCircle2 className="size-3 text-sage-500" />
          Live mit Airbnb-Kalender synchronisiert
        </div>
      )}
    </div>
  );
}
