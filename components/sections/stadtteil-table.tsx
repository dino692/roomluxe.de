"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { stadtteile } from "@/lib/data/stadtteile";

export function StadtteilTable() {
  return (
    <div className="rounded-3xl bg-cream-50 shadow-card border border-gold-300/30 overflow-hidden">
      <div className="grid grid-cols-12 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-ink-500 bg-cream-200/50 border-b border-gold-300/40">
        <div className="col-span-4 sm:col-span-3">Stadtteil</div>
        <div className="col-span-3 sm:col-span-3">Ø Miete</div>
        <div className="col-span-3 sm:col-span-3">S-Bahn</div>
        <div className="col-span-2 sm:col-span-3 text-right sm:text-left">Charakter</div>
      </div>
      <div className="divide-y divide-gold-300/30">
        {stadtteile.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px 0px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/${s.slug}`}
              className="grid grid-cols-12 px-6 py-4 hover:bg-gold-100/40 transition group items-center"
            >
              <div className="col-span-4 sm:col-span-3 font-medium text-ink-900 group-hover:text-gold-700 flex items-center gap-1.5 transition">
                {s.name}
                <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
              </div>
              <div className="col-span-3 sm:col-span-3 text-ink-700">{s.priceRange}</div>
              <div className="col-span-3 sm:col-span-3 text-ink-700">{s.sbahnTimeShort}</div>
              <div className="col-span-2 sm:col-span-3 text-ink-500 text-right sm:text-left text-sm">
                {s.characterShort}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
