"use client";

import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { Star, Award, Clock, Wallet } from "lucide-react";

const stats = [
  { icon: Award, value: 4.83, suffix: "/5", label: "Bewertung", sub: "auf Airbnb · 72 Reviews" },
  { icon: Star, value: 100, suffix: "%", label: "Zufriedenheit", sub: "Gäste-Favorit Auszeichnung" },
  { icon: Clock, value: 24, suffix: "h", label: "Antwortzeit", sub: "auf jede Anfrage" },
  { icon: Wallet, value: 0, suffix: " €", label: "Provision", sub: "vom Eigentümer direkt" },
];

export function StatBar() {
  return (
    <section className="px-5 sm:px-8 mt-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2rem] bg-gradient-to-br from-cream-200 via-cream-50 to-gold-100/50 border border-gold-300/40 shadow-card overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gold-300/30">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="p-7 sm:p-8 relative">
                    <Icon className="absolute top-6 right-6 size-5 text-gold-700/40" />
                    <p className="font-display text-4xl sm:text-5xl text-gold-700">
                      <Counter
                        to={s.value}
                        suffix={s.suffix}
                        format={(n) => (Number.isInteger(s.value) ? Math.round(n).toString() : n.toFixed(2))}
                      />
                    </p>
                    <p className="mt-3 font-medium text-ink-900">{s.label}</p>
                    <p className="text-xs text-ink-500 mt-0.5">{s.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
