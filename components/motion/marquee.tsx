"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

export function Marquee({
  children,
  speed = 50, // px / s
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="inline-flex gap-12 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          duration: 6000 / speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="inline-flex gap-12">{children}</div>
        <div className="inline-flex gap-12" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}
