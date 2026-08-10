import type { Metadata } from "next";
import Link from "next/link";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seitenübersicht",
  description:
    "Alle Inhalte auf roomluxe.de auf einen Blick — Stadtteile, Wohnformen, Wohnungen und Ratgeber zu Bad Vilbel.",
  alternates: { canonical: "/seitenuebersicht" },
  openGraph: {
    title: "Seitenübersicht – roomluxe.de",
    description: "Alle Seiten von roomluxe.de auf einen Blick.",
    url: `${site.url}/seitenuebersicht`,
    images: [{ url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: site.name }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
    { "@type": "ListItem", position: 2, name: "Seitenübersicht", item: `${site.url}/seitenuebersicht` },
  ],
};

export default function SeitenuebersichtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="px-5 sm:px-8 pt-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb
            items={[
              { href: "/", label: "Startseite" },
              { label: "Seitenübersicht" },
            ]}
          />
          <div className="mt-8">
            <Eyebrow>Alle Inhalte</Eyebrow>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl text-ink-900 leading-tight">
              Seitenübersicht
            </h1>
            <p className="mt-4 text-lg text-ink-700 max-w-2xl">
              Alle Inhalte auf roomluxe.de — Stadtteile, Wohnformen, Wohnungen und Ratgeber rund ums Wohnen in Bad Vilbel.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 mt-16 mb-24">
        <div className="mx-auto max-w-5xl grid gap-12 sm:grid-cols-2">
          <Block title="Hauptseiten">
            <ListLink href="/">Startseite</ListLink>
            <ListLink href="/ratgeber">Ratgeber-Übersicht</ListLink>
            <ListLink href="/kontakt">Kontakt</ListLink>
          </Block>

          <Block title={`Stadtteile in Bad Vilbel (${stadtteile.length})`}>
            {stadtteile.map((s) => (
              <ListLink key={s.slug} href={`/${s.slug}`}>
                {s.name} <span className="text-ink-500 text-xs">· {s.priceRange}</span>
              </ListLink>
            ))}
          </Block>

          <Block title={`Wohnformen & Themen (${seoHubs.length})`}>
            {seoHubs.map((h) => (
              <ListLink key={h.slug} href={`/${h.slug}`}>
                {h.breadcrumbLabel}
              </ListLink>
            ))}
          </Block>

          <Block title={`Ratgeber-Artikel (${ratgeber.length})`}>
            {ratgeber.map((a) => (
              <ListLink key={a.slug} href={`/ratgeber/${a.slug}`}>
                {a.title}
              </ListLink>
            ))}
          </Block>

          {wohnungen.length > 0 && (
            <Block title={`Verfügbare Wohnungen (${wohnungen.length})`}>
              {wohnungen.map((w) => (
                <ListLink key={w.slug} href={`/wohnung/${w.slug}`}>
                  {w.shortTitle}{" "}
                  <span className="text-ink-500 text-xs">· {w.stadtteilName}</span>
                </ListLink>
              ))}
            </Block>
          )}
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl text-gold-700 mb-4">{title}</h2>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function ListLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-ink-800 hover:text-gold-700 transition leading-snug"
      >
        {children}
      </Link>
    </li>
  );
}
