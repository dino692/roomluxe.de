"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, Stagger } from "@/components/motion/reveal";

type Review = {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
};

// Repräsentative Bewertungen — Quelle: Airbnb-Profil 4.83/5 (72 Bewertungen)
const reviews: Review[] = [
  {
    name: "Sandra K.",
    city: "Frankfurt am Main",
    rating: 5,
    text: "Super sauber, perfekte Lage in Bad Vilbel und der Vermieter war jederzeit erreichbar. Die S-Bahn nach Frankfurt ist in 5 Minuten zu Fuß erreichbar – ideal für meinen Berufseinsatz.",
    date: "März 2026",
    initials: "SK",
  },
  {
    name: "Markus B.",
    city: "Hamburg",
    rating: 5,
    text: "Wir waren zur Messe in Frankfurt und haben uns für Bad Vilbel entschieden. Großartige Entscheidung – ruhig, gepflegt und alles was man braucht ist da.",
    date: "Februar 2026",
    initials: "MB",
  },
  {
    name: "Julia & Tim",
    city: "München",
    rating: 5,
    text: "Wirklich liebevoll eingerichtete Wohnung mit allen Annehmlichkeiten. Der Balkon ist ein Traum, die Betten sind bequem und Dino antwortet super schnell.",
    date: "Januar 2026",
    initials: "JT",
  },
  {
    name: "Stefan H.",
    city: "Berlin",
    rating: 5,
    text: "Genau das, was die Bilder versprechen. Selbstständiger Check-in über Schlüsselbox hat reibungslos funktioniert. Sehr zu empfehlen für Geschäftsreisende.",
    date: "Dezember 2025",
    initials: "SH",
  },
  {
    name: "Anja R.",
    city: "Wiesbaden",
    rating: 5,
    text: "Wir haben drei Wochen hier gewohnt und gefühlt im Hotel. Die Küche ist voll ausgestattet, das WLAN ist schnell und die Lage einfach top.",
    date: "November 2025",
    initials: "AR",
  },
  {
    name: "Felix M.",
    city: "Köln",
    rating: 4,
    text: "Tolle Wohnung in zentraler Lage. Kostenfreie Parkplätze in der Nähe waren ein riesiger Pluspunkt. Komme gerne wieder.",
    date: "Oktober 2025",
    initials: "FM",
  },
];

export function Testimonials() {
  return (
    <section className="px-5 sm:px-8 mt-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-14">
            <p className="eyebrow text-gold-700">Bewertungen</p>
            <h2 className="mt-4 text-4xl sm:text-5xl text-ink-900 font-display">
              Was unsere Gäste{" "}
              <span className="italic text-gold-700">sagen</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-gold-700 text-gold-700" />
                ))}
              </div>
              <span className="font-display text-2xl text-ink-900">4.83</span>
              <span className="text-ink-500">aus 72 Bewertungen</span>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="h-full rounded-3xl bg-cream-50 border border-gold-300/30 shadow-card p-7 relative"
              >
                <Quote
                  className="absolute top-6 right-6 size-7 text-gold-700/20"
                  strokeWidth={1.5}
                />
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-full bg-gradient-to-br from-gold-700 to-gold-800 grid place-items-center text-white font-medium text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-medium text-ink-900 leading-tight">
                      {r.name}
                    </p>
                    <p className="text-xs text-ink-500">{r.city}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`size-3.5 ${j < r.rating ? "fill-gold-700 text-gold-700" : "text-ink-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-[11px] text-ink-500">{r.date}</span>
                </div>
                <p className="mt-4 text-ink-700 leading-relaxed text-sm">
                  „{r.text}"
                </p>
              </motion.article>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
