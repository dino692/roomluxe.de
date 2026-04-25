"use client";

import { useState } from "react";
import { RatgeberCard } from "@/components/sections/ratgeber-card";
import { ratgeber, ratgeberCategories } from "@/lib/data/ratgeber";

export function RatgeberFilteredList() {
  const [filter, setFilter] = useState<(typeof ratgeberCategories)[number]>("Alle");
  const list = filter === "Alle" ? ratgeber : ratgeber.filter((a) => a.category === filter);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {ratgeberCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-pill text-sm font-medium transition ${
              filter === c
                ? "bg-gold-700 text-white"
                : "bg-cream-50 text-ink-700 border border-gold-300/40 hover:bg-gold-100 hover:text-gold-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((a) => (
          <RatgeberCard key={a.slug} a={a} />
        ))}
      </div>
    </>
  );
}
