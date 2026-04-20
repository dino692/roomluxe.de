"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Expand, Camera } from "lucide-react";

type Img = { src: string; alt: string };

export function LightboxGallery({
  images,
  topRightBadge,
  bottomLeftBadge,
}: {
  images: Img[];
  topRightBadge?: React.ReactNode;
  bottomLeftBadge?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((i) => ({ src: i.src, alt: i.alt }));
  const main = images[0];
  const sub = images.slice(1, 5);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid lg:grid-cols-12 gap-3 h-[420px] sm:h-[540px]">
        {/* Main image */}
        <button
          onClick={() => openAt(0)}
          className="relative lg:col-span-8 rounded-3xl overflow-hidden group"
        >
          <Image
            src={main.src}
            alt={main.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {topRightBadge && (
            <div className="absolute top-5 right-5">{topRightBadge}</div>
          )}
          {bottomLeftBadge && (
            <div className="absolute bottom-5 left-5">{bottomLeftBadge}</div>
          )}
          <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/40 text-white text-xs font-medium backdrop-blur-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition">
            <Expand className="size-3.5" /> Vergrößern
          </span>
        </button>

        {/* Sub grid (2x2) */}
        <div className="lg:col-span-4 grid grid-cols-2 grid-rows-2 gap-3">
          {sub.map((img, i) => {
            const isLast = i === 3 && images.length > 5;
            return (
              <button
                key={i}
                onClick={() => openAt(isLast ? 4 : i + 1)}
                className="relative rounded-2xl overflow-hidden group bg-cream-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                {isLast && (
                  <div className="absolute inset-0 bg-black/55 grid place-items-center text-white">
                    <div className="text-center">
                      <Camera className="mx-auto size-6" />
                      <p className="mt-2 text-sm font-medium">
                        +{images.length - 4} Bilder
                      </p>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Show-all trigger */}
      <div className="mt-4 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openAt(0)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-cream-50 text-ink-900 border border-gold-300/40 text-sm font-medium hover:bg-gold-100 hover:border-gold-700 transition"
        >
          <Camera className="size-4 text-gold-700" />
          Alle {images.length} Bilder ansehen
        </motion.button>
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        carousel={{ finite: false, padding: "32px" }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: "rgba(20, 16, 10, 0.92)" },
        }}
      />
    </>
  );
}
