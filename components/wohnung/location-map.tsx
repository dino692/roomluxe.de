"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  lat: number;
  lng: number;
  label: string;
  zip: string;
  stadtteilName: string;
};

export function LocationMap({ lat, lng, label, zip, stadtteilName }: Props) {
  const [loaded, setLoaded] = useState(false);

  const query = `${zip} Bad Vilbel, ${stadtteilName}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&ll=${lat},${lng}&z=14&output=embed&hl=de`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(query)}`;
  const openInMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="rounded-3xl overflow-hidden border border-gold-300/30 shadow-card bg-cream-50 relative">
      {/* Placeholder shown until iframe is ready */}
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center bg-cream-200 z-10">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            <MapPin className="mx-auto size-7 text-gold-700" />
            <p className="mt-2 text-sm text-ink-700 font-medium">Karte wird geladen…</p>
          </motion.div>
        </div>
      )}

      <div className="relative aspect-[16/9]">
        <iframe
          title={`Karte: ${label}`}
          src={embedSrc}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 border-0 grayscale-[0.15] contrast-[1.05]"
        />
      </div>

      <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-3 bg-cream-50 border-t border-gold-300/30">
        <div className="flex items-center gap-3">
          <span className="size-9 rounded-lg bg-gold-100 text-gold-700 grid place-items-center">
            <MapPin className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="font-medium text-ink-900 text-sm">{label}</p>
            <p className="text-xs text-ink-500">{zip} Bad Vilbel · {stadtteilName}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-pill text-xs font-medium bg-gold-700 text-white hover:bg-gold-800 transition"
          >
            <Navigation className="size-3.5" /> Route
          </a>
          <a
            href={openInMapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-pill text-xs font-medium border border-gold-300/60 text-ink-700 hover:text-gold-700 hover:border-gold-700 transition"
          >
            <ExternalLink className="size-3.5" /> Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
