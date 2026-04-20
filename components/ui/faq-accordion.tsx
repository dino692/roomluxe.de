"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FaqItem } from "@/lib/data/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gold-300/40 rounded-3xl bg-cream-50 shadow-card border border-gold-300/30">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left flex items-center justify-between gap-6 px-6 py-5 group"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink-900 group-hover:text-gold-700 transition">
                {item.q}
              </span>
              <span className="shrink-0 size-8 rounded-full bg-gold-100 text-gold-700 grid place-items-center group-hover:bg-gold-700 group-hover:text-white transition">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-ink-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
