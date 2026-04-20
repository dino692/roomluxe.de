"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { SubRating, Review } from "@/lib/data/wohnungen";

type Props = {
  rating: number;
  reviewCount: number;
  subRatings?: SubRating[];
  distribution?: { stars: 1 | 2 | 3 | 4 | 5; percent: number }[];
  reviews?: Review[];
};

export function RatingsBreakdown({
  rating,
  reviewCount,
  subRatings,
  distribution,
  reviews,
}: Props) {
  return (
    <section className="rounded-3xl bg-cream-50 border border-gold-300/30 shadow-card p-7 sm:p-9">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="eyebrow text-gold-700">Bewertungen</p>
          <div className="mt-3 flex items-baseline gap-3">
            <Star className="size-8 fill-gold-700 text-gold-700 -translate-y-0.5" />
            <span className="font-display text-5xl text-ink-900">{rating.toFixed(2)}</span>
            <span className="text-ink-500 text-lg">/ 5</span>
          </div>
          <p className="mt-2 text-ink-700">
            basierend auf {reviewCount} Airbnb-Bewertungen
          </p>
        </div>
        {distribution && (
          <div className="flex-1 min-w-[220px] max-w-md">
            {distribution.map((d) => (
              <div key={d.stars} className="flex items-center gap-3 text-sm py-1">
                <span className="w-14 flex items-center gap-0.5 text-ink-700">
                  {d.stars} <Star className="size-3 fill-gold-700 text-gold-700" />
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-cream-300 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gold-700"
                  />
                </div>
                <span className="w-12 text-right text-ink-500 text-xs">{d.percent}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sub ratings grid */}
      {subRatings && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-8 mb-8 border-b border-gold-300/30">
          {subRatings.map((sr, i) => (
            <motion.div
              key={sr.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <p className="text-xs text-ink-500 uppercase tracking-wider">{sr.label}</p>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="font-display text-2xl text-ink-900">{sr.value.toFixed(1)}</span>
                <span className="text-ink-500 text-sm">/ 5</span>
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-cream-300 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(sr.value / sr.max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gold-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Reviews list */}
      {reviews && reviews.length > 0 && (
        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name + r.date}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px 0px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="rounded-2xl bg-cream-100/60 border border-gold-300/30 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-gold-700 to-gold-800 grid place-items-center text-white text-sm font-medium">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-medium text-ink-900 leading-tight">{r.name}</p>
                  <p className="text-xs text-ink-500">{r.memberSince}</p>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`size-3 ${j < r.rating ? "fill-gold-700 text-gold-700" : "text-ink-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-xs text-ink-500">{r.date}</p>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">„{r.text}"</p>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
