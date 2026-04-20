"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image, { type ImageProps } from "next/image";
import { useRef } from "react";

type Props = Omit<ImageProps, "fill"> & {
  amount?: number; // 0-1 — how much to translate
  containerClassName?: string;
};

/** Image that subtly translates Y as it scrolls through viewport */
export function ParallaxImage({
  amount = 0.15,
  containerClassName,
  className,
  alt,
  ...img
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : [`${amount * -50}%`, `${amount * 50}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName ?? ""}`}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image
          {...img}
          alt={alt}
          fill
          className={`object-cover ${className ?? ""}`}
        />
      </motion.div>
    </div>
  );
}
