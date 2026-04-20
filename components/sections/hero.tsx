"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Star, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const heroImages = [
  {
    src: "/images/wohnung/apt-01.jpg",
    alt: "Wohnzimmer mit Esstisch, Sofa und moderner TV-Wand",
    badge: "Wohnzimmer",
  },
  {
    src: "/images/wohnung/apt-12.jpg",
    alt: "Überdachter Balkon mit Rattan-Sitzgruppe und Stadtblick",
    badge: "Balkon",
  },
  {
    src: "/images/wohnung/apt-04.jpg",
    alt: "Schlafzimmer mit Kingsize-Boxspringbett",
    badge: "Schlafzimmer",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yMain = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "20%"]);
  const yOff = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-15%"]);

  return (
    <section ref={ref} className="px-5 sm:px-8 pt-12 sm:pt-20 relative">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 eyebrow"
          >
            <span className="h-px w-8 bg-gold-700" aria-hidden />
            <span>Privat vermietet · Bad Vilbel</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-ink-900 font-display"
          >
            Wohnung mieten
            <span className="block italic text-gold-700 mt-1">
              in Bad Vilbel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg text-ink-700 leading-relaxed max-w-xl"
          >
            Hochwertige Mietwohnungen vom privaten Vermieter – ohne Makler,
            ohne Provision. Persönlich, fair und unkompliziert.
          </motion.p>

          {/* Quick trust line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap items-center gap-4 text-sm text-ink-700"
          >
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-gold-700 text-gold-700" />
              <span className="font-medium">4.83</span>
              <span className="text-ink-500">· 72 Bewertungen</span>
            </span>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-gold-700" />
              <span className="text-ink-700">20 Min. nach Frankfurt</span>
            </span>
            <span className="size-1 rounded-full bg-ink-300" />
            <span className="text-gold-700 font-medium">0 € Provision</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="#wohnungen" size="lg" withArrow>
              Wohnungen entdecken
            </ButtonLink>
            <a
              href={`tel:${site.phoneE164}`}
              className="group inline-flex items-center gap-3 text-ink-900 hover:text-gold-700 transition"
            >
              <span className="size-11 rounded-full bg-cream-50 border border-gold-300/40 grid place-items-center group-hover:border-gold-700 transition">
                <Phone className="size-4 text-gold-700" />
              </span>
              <span>
                <span className="block text-xs text-ink-500">Direkt anrufen</span>
                <span className="block font-medium">{site.phone}</span>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[560px] lg:h-[600px]">
          {/* Main */}
          <motion.div
            style={{ y: yMain }}
            className="absolute top-0 right-0 w-[78%] h-[72%] rounded-[2rem] overflow-hidden shadow-card-lg"
          >
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 78vw, 39vw"
              className="object-cover"
            />
          </motion.div>

          {/* Offset top-left */}
          <motion.div
            style={{ y: yOff }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[20%] left-0 w-[42%] h-[36%] rounded-3xl overflow-hidden shadow-card-lg border-4 border-cream-100"
          >
            <Image
              src={heroImages[2].src}
              alt={heroImages[2].alt}
              fill
              sizes="42vw"
              className="object-cover"
            />
          </motion.div>

          {/* Bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-[8%] w-[44%] h-[32%] rounded-3xl overflow-hidden shadow-card-lg border-4 border-cream-100"
          >
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              fill
              sizes="44vw"
              className="object-cover"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-[12%] right-[6%] px-4 py-2.5 rounded-pill bg-cream-50 shadow-card-lg border border-gold-300/40 text-xs font-semibold tracking-wider uppercase text-ink-900 flex items-center gap-2"
          >
            <span className="size-2 rounded-full bg-sage-500 animate-pulse" />
            Sofort verfügbar
          </motion.div>
        </div>
      </div>
    </section>
  );
}
