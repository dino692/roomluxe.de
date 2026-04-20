"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Star, Users, BedDouble, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import type { Wohnung } from "@/lib/data/wohnungen";
import { useState } from "react";

export function WohnungsCard({ wohnung, priority }: { wohnung: Wohnung; priority?: boolean }) {
  const cover = wohnung.images[0];
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const price = wohnung.rentMode === "nightly"
    ? `${wohnung.pricePerNight} €`
    : `${wohnung.pricePerMonth} €`;
  const unit = wohnung.rentMode === "nightly" ? "/Nacht" : "/Monat";

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      <Link
        href={`/wohnung/${wohnung.slug}`}
        className="group block rounded-3xl bg-cream-50 shadow-card hover:shadow-card-lg border border-gold-300/30 overflow-hidden"
      >
        {/* Bild */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
          <motion.div
            animate={hovered && !reduce ? { scale: 1.06 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* Gradient overlay for legibility of badges */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
            {wohnung.images.length > 1 && (
              <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md">
                +{wohnung.images.length - 1} Bilder
              </span>
            )}
            {wohnung.status === "available" && (
              <span className="ml-auto px-3 py-1 rounded-full bg-sage-500/90 text-white text-xs font-semibold backdrop-blur-md">
                Verfügbar
              </span>
            )}
          </div>

          {/* Bottom badges */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            {wohnung.isFavorite && (
              <span className="px-2.5 py-1 rounded-full bg-cream-50 text-gold-700 text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                Gäste-Favorit
              </span>
            )}
            {wohnung.rating && (
              <span className="ml-auto px-2.5 py-1 rounded-full bg-cream-50/95 text-ink-900 text-xs font-medium flex items-center gap-1 backdrop-blur-md shadow-sm">
                <Star className="size-3 fill-gold-700 text-gold-700" />
                {wohnung.rating}
                <span className="text-ink-500">({wohnung.reviewCount})</span>
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <p className="eyebrow text-gold-700">
              {wohnung.stadtteilName} · Bad Vilbel
            </p>
            <ArrowUpRight
              className={`size-4 text-gold-700 transition ${hovered ? "rotate-45" : ""}`}
              strokeWidth={2.4}
            />
          </div>
          <h3 className="mt-2.5 text-xl text-ink-900 leading-snug font-display">
            {wohnung.shortTitle}
          </h3>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-700">
            <Stat icon={<Users className="size-4" />}>{wohnung.maxGuests} Gäste</Stat>
            <Stat icon={<BedDouble className="size-4" />}>{wohnung.bedrooms} Schlafzi.</Stat>
            <Stat icon={<Bath className="size-4" />}>{wohnung.bathrooms} Bad</Stat>
            <Stat icon={<Maximize2 className="size-4" />}>{wohnung.sizeM2} m²</Stat>
          </div>

          <div className="mt-6 flex items-baseline justify-between border-t border-gold-300/30 pt-5">
            <div>
              <span className="font-display text-2xl text-gold-700">{price}</span>
              <span className="text-sm text-ink-500 ml-1">{unit}</span>
            </div>
            <span className="text-sm text-ink-500 group-hover:text-gold-700 transition">
              Details ansehen →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Stat({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-ink-700">
      <span className="text-gold-700">{icon}</span>
      {children}
    </span>
  );
}
