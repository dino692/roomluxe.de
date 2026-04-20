"use client";

import { motion } from "motion/react";
import { Award, CheckCircle2, Clock, Star } from "lucide-react";
import type { Host } from "@/lib/data/wohnungen";

export function HostCard({ host }: { host: Host }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-cream-50 border border-gold-300/40 shadow-card p-7"
    >
      <div className="flex items-start gap-5">
        <div className="relative shrink-0">
          <div className="size-20 rounded-full bg-gradient-to-br from-gold-700 to-gold-800 grid place-items-center text-white font-display text-3xl">
            {host.initials}
          </div>
          {host.superhost && (
            <span
              title="Superhost"
              aria-label="Superhost"
              className="absolute -bottom-1 -right-1 size-8 rounded-full bg-cream-50 border-2 border-gold-700 grid place-items-center"
            >
              <Award className="size-4 text-gold-700" fill="currentColor" strokeWidth={1} />
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="eyebrow text-gold-700">Ihr Gastgeber</p>
          <h3 className="mt-1 font-display text-2xl text-ink-900">{host.name}</h3>
          {host.superhost && (
            <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 bg-gold-100 px-2.5 py-1 rounded-full">
              <Award className="size-3" fill="currentColor" strokeWidth={0} /> Superhost
            </span>
          )}
          <p className="mt-4 text-sm text-ink-700 leading-relaxed">{host.bio}</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gold-300/30 grid grid-cols-3 gap-4 text-center">
        <Stat icon={<Star className="size-4" />} label="Bewertung">
          {host.avgRating.toFixed(2)}
          <span className="text-ink-500 text-sm"> / 5</span>
        </Stat>
        <Stat icon={<CheckCircle2 className="size-4" />} label="Antwortrate">
          {host.responseRate}%
        </Stat>
        <Stat icon={<Clock className="size-4" />} label="Antwortet">
          &lt; 1h
        </Stat>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-ink-500">
        <span className="px-2.5 py-1 rounded-full bg-cream-200">
          Seit {host.yearsHosting} Jahren Gastgeber
        </span>
        <span className="px-2.5 py-1 rounded-full bg-cream-200">
          {host.totalReviews} Bewertungen insgesamt
        </span>
      </div>
    </motion.div>
  );
}

function Stat({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-1 text-gold-700 text-xs uppercase tracking-wider">
        {icon}
      </div>
      <p className="mt-1 font-display text-xl text-ink-900 leading-tight">{children}</p>
      <p className="text-xs text-ink-500">{label}</p>
    </div>
  );
}
