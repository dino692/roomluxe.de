import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { RatgeberFilteredList } from "@/components/sections/ratgeber-list";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ratgeber – Wohnen in Bad Vilbel",
  description:
    "Mietpreise, Stadtteile, Pendeln und Tipps rund ums Wohnen in Bad Vilbel. Praktische Ratgeber-Artikel von roomluxe.de.",
  alternates: { canonical: "/ratgeber" },
  openGraph: {
    title: "Ratgeber – Wohnen in Bad Vilbel",
    description:
      "Mietpreise, Stadtteile, Pendeln und Tipps rund ums Wohnen in Bad Vilbel.",
    url: `${site.url}/ratgeber`,
    images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: site.name }],
  },
};

export default function RatgeberIndexPage() {
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
          <RatgeberFilteredList />
        </div>
      </section>

      <section className="px-5 sm:px-8 mt-20 mb-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-cream-200 border border-gold-300/40 p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-ink-900">
              Passende Wohnung gefunden?
            </h2>
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
