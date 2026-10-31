// 21st.dev: @bidyut10/date-range-picker-card — Hotel-style Date Range Picker
"use client";

import { forwardRef, useMemo, useState, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["S", "M", "D", "M", "D", "F", "S"] as const;

type DayCell = Readonly<{ day: number; month: number; year: number }>;

function buildMonthCells(year: number, month: number): Array<DayCell | null> {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<DayCell | null> = [];
  for (let i = 0; i < firstDay; i += 1) cells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) cells.push({ day: d, month, year });
  return cells;
}
const toKey = (c: DayCell) => `${c.year}-${c.month}-${c.day}`;
const formatCell = (c: DayCell) =>
  new Date(c.year, c.month, c.day).toLocaleDateString("de-DE", { month: "short", day: "numeric" });

export type DateRangePickerCardProps = Readonly<
  {
    defaultYear?: number;
    defaultMonth?: number;
    onChange?: (start: Date | null, end: Date | null) => void;
  } & ComponentPropsWithoutRef<"div">
>;

export const DateRangePickerCard = forwardRef<HTMLDivElement, DateRangePickerCardProps>(
  ({ className, defaultYear, defaultMonth, onChange, ...props }, ref) => {
    const today = useMemo(() => new Date(), []);
    const [viewYear, setViewYear] = useState(defaultYear ?? today.getFullYear());
    const [viewMonth, setViewMonth] = useState(defaultMonth ?? today.getMonth());
    const [start, setStart] = useState<DayCell | null>(null);
    const [end, setEnd] = useState<DayCell | null>(null);

    const cells = useMemo(() => buildMonthCells(viewYear, viewMonth), [viewYear, viewMonth]);
    const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString("de-DE", { month: "long", year: "numeric" });

    const shiftMonth = (delta: number) => {
      const next = new Date(viewYear, viewMonth + delta, 1);
      setViewYear(next.getFullYear());
      setViewMonth(next.getMonth());
    };

    const selectCell = (cell: DayCell) => {
      if (!start || (start && end)) {
        setStart(cell);
        setEnd(null);
        onChange?.(new Date(cell.year, cell.month, cell.day), null);
        return;
      }
      const sTime = new Date(start.year, start.month, start.day).getTime();
      const cTime = new Date(cell.year, cell.month, cell.day).getTime();
      if (cTime < sTime) {
        setEnd(start);
        setStart(cell);
        onChange?.(new Date(cell.year, cell.month, cell.day), new Date(start.year, start.month, start.day));
      } else {
        setEnd(cell);
        onChange?.(new Date(start.year, start.month, start.day), new Date(cell.year, cell.month, cell.day));
      }
    };

    const inRange = (cell: DayCell) => {
      if (!start || !end) return false;
      const t = new Date(cell.year, cell.month, cell.day).getTime();
      const a = new Date(start.year, start.month, start.day).getTime();
      const b = new Date(end.year, end.month, end.day).getTime();
      return t >= Math.min(a, b) && t <= Math.max(a, b);
    };

    const rangeLabel = start && end
      ? `${formatCell(start)} – ${formatCell(end)}`
      : start ? `${formatCell(start)} – Abreise wählen` : "Reisezeitraum wählen";

    return (
      <div
        ref={ref}
        data-slot="date-range-picker-card"
        className={cn("w-80 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-lg shadow-black/5 select-none", className)}
        {...props}
      >
        <div className="mb-3 flex items-center justify-between">
          <button type="button" aria-label="Vorheriger Monat" onClick={() => shiftMonth(-1)} className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-neutral-500 transition-all duration-200 ease-out hover:bg-neutral-100 active:scale-95">
            <ChevronLeft size={16} />
          </button>
          <p className="text-sm font-semibold text-neutral-900">{monthLabel}</p>
          <button type="button" aria-label="Nächster Monat" onClick={() => shiftMonth(1)} className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-neutral-500 transition-all duration-200 ease-out hover:bg-neutral-100 active:scale-95">
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="mb-3 text-xs text-neutral-500">{rangeLabel}</p>

        <div className="mb-2 grid grid-cols-7 text-center text-[10px] font-medium text-neutral-400">
          {WEEKDAYS.map((label, index) => (<span key={`${label}-${index}`}>{label}</span>))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((cell, index) => {
            if (!cell) return <span key={`empty-${index}`} className="h-9" />;
            const key = toKey(cell);
            const isStart = start && toKey(start) === key;
            const isEnd = end && toKey(end) === key;
            const isBetween = inRange(cell) && !isStart && !isEnd;
            return (
              <button
                key={key}
                type="button"
                onClick={() => selectCell(cell)}
                className={cn(
                  "mx-auto flex h-9 w-9 cursor-pointer items-center justify-center text-sm tabular-nums transition-all duration-200 ease-out active:scale-95",
                  isBetween && "w-full rounded-none bg-neutral-100 text-neutral-800",
                  (isStart || isEnd) && "scale-100 rounded-full bg-neutral-900 font-semibold text-white",
                  !isBetween && !isStart && !isEnd && "rounded-full text-neutral-700 hover:bg-neutral-100",
                )}
              >
                {cell.day}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);
DateRangePickerCard.displayName = "DateRangePickerCard";
