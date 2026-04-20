"use client";

import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  from?: number;
  format?: (n: number) => string;
  duration?: number;
  className?: string;
  suffix?: string;
};

export function Counter({
  to,
  from = 0,
  format,
  duration = 1.6,
  className,
  suffix,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? to : from);
  const rounded = useTransform(mv, (v) => {
    const n = Math.round(v * 100) / 100;
    return format ? format(n) : Number.isInteger(to) ? Math.round(n).toString() : n.toFixed(2);
  });

  useEffect(() => {
    if (!inView || reduce) return;
    const ctrl = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => ctrl.stop();
  }, [inView, mv, to, duration, reduce]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsub = rounded.on("change", (v) => {
      el.textContent = `${v}${suffix ?? ""}`;
    });
    el.textContent = `${reduce ? format?.(to) ?? to : format?.(from) ?? from}${suffix ?? ""}`;
    return unsub;
  }, [rounded, suffix, from, to, format, reduce]);

  return <span ref={ref} className={className} />;
}
