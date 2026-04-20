"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { RatgeberCard } from "@/components/sections/ratgeber-card";
import { ratgeber, ratgeberCategories } from "@/lib/data/ratgeber";

export default function RatgeberIndexPage() {
  const [filter, setFilter] = useState<(typeof ratgeberCategories)[number]>("Alle");
  const list = filter === "Alle" ? ratgeber : ratgeber.filter((a) => a.category === filter);

  return (
    <>
      <section className="px-5 sm:px-8 pt-12">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Ratgeber</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-tight">
            Wohnen <span className="italic text-gold-700">in Bad Vilbel</span>
          </h1>
          <p className="mt-4 text-lg text-ink-700 max-w-2xl">
            Alles was Sie wissen sollten – Mietpreise, Stadtteile, Pendeln nach Frankfurt.
          </p>

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
        </div>
      </section>

      <section className="px-5 sm:px-8 mt-12">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((a) => (
            <RatgeberCard key={a.slug} a={a} />
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 mt-20 mb-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-cream-200 border border-gold-300/40 p-10 sm:p-14 text-center">
            <h3 className="font-display text-3xl sm:text-4xl text-ink-900">
              Passende Wohnung gefunden?
            </h3>
            <p className="mt-4 text-ink-700">Direkt vom Eigentümer – kein Makler.</p>
            <div className="mt-8">
              <ButtonLink href="/mietwohnung-bad-vilbel" size="lg" withArrow>
                Wohnungen ansehen
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
