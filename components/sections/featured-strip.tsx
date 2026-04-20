"use client";

import { Marquee } from "@/components/motion/marquee";
import { Train, Sprout, Home, Coffee, Bike, Wifi } from "lucide-react";

const items = [
  { Icon: Train, label: "S-Bahn S1 & S6 nach Frankfurt" },
  { Icon: Sprout, label: "Kurpark & Nidda-Auen" },
  { Icon: Home, label: "Voll möbliert" },
  { Icon: Coffee, label: "Wochenmarkt vor der Tür" },
  { Icon: Bike, label: "Nidda-Radweg" },
  { Icon: Wifi, label: "Schnelles WLAN inklusive" },
];

export function FeaturedStrip() {
  return (
    <section className="mt-20 py-6 border-y border-gold-300/30 bg-cream-50/50">
      <Marquee speed={40}>
        {items.map(({ Icon, label }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-ink-700 text-sm font-medium"
          >
            <Icon className="size-4 text-gold-700" strokeWidth={2.2} />
            {label}
            <span className="size-1 rounded-full bg-gold-700/40 ml-9" aria-hidden />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
