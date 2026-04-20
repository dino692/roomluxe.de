"use client";

import { motion } from "motion/react";
import { Key, MapPin, Briefcase, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  key: Key,
  map: MapPin,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

type Highlight = { title: string; body: string; icon?: string };

export function HighlightsStrip({ highlights }: { highlights: Highlight[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {highlights.map((h, i) => {
        const Icon = h.icon ? iconMap[h.icon] ?? Sparkles : Sparkles;
        return (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl bg-cream-50 border border-gold-300/30 p-5 hover:border-gold-700/40 transition"
          >
            <div className="size-10 rounded-xl bg-gold-100 grid place-items-center text-gold-700 mb-3">
              <Icon className="size-5" strokeWidth={1.8} />
            </div>
            <p className="font-display text-base text-ink-900 leading-tight">{h.title}</p>
            <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">{h.body}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
