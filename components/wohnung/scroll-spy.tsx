"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Section = { id: string; label: string };

export function ScrollSpy({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Use the topmost visible section
          visible.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="hidden lg:flex sticky top-24 z-10 bg-cream-100/80 backdrop-blur-md rounded-full border border-gold-300/40 px-2 py-1.5 mb-8 shadow-sm self-start">
      <ul className="flex items-center gap-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="relative px-4 py-2 rounded-full text-sm text-ink-700 hover:text-gold-700 transition block"
            >
              {active === s.id && (
                <motion.span
                  layoutId="scroll-spy-active"
                  className="absolute inset-0 rounded-full bg-gold-700"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${active === s.id ? "text-white font-medium" : ""}`}>
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
