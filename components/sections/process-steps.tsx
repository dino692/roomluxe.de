"use client";

import { Reveal, Stagger } from "@/components/motion/reveal";
import { Search, MessageSquare, Calendar, Key } from "lucide-react";

const steps = [
  {
    Icon: Search,
    title: "Wohnung wählen",
    body: "Stöbern Sie durch unsere Mietwohnungen in Bad Vilbel und entdecken Sie Ihr neues Zuhause.",
  },
  {
    Icon: MessageSquare,
    title: "Direkt anfragen",
    body: "Schreiben Sie uns über das Formular oder rufen Sie an – wir antworten in der Regel innerhalb von 24 Stunden.",
  },
  {
    Icon: Calendar,
    title: "Besichtigung",
    body: "Wir vereinbaren zeitnah einen Termin – persönlich vor Ort oder digital per Video.",
  },
  {
    Icon: Key,
    title: "Schlüsselübergabe",
    body: "Vertragsunterzeichnung und Übergabe direkt mit dem Eigentümer – ohne Makler.",
  },
];

export function ProcessSteps() {
  return (
    <section className="px-5 sm:px-8 mt-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-14">
            <p className="eyebrow text-gold-700">So einfach geht's</p>
            <h2 className="mt-4 text-4xl sm:text-5xl text-ink-900 font-display">
              In 4 Schritten zu Ihrer{" "}
              <span className="italic text-gold-700">neuen Wohnung</span>
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="relative h-full rounded-3xl bg-cream-50 border border-gold-300/30 p-7 shadow-card group hover:border-gold-700/40 transition">
                <span className="absolute -top-3 -left-3 size-9 rounded-full bg-gold-700 text-white grid place-items-center font-display text-base">
                  {i + 1}
                </span>
                <s.Icon className="size-7 text-gold-700" strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-lg text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
