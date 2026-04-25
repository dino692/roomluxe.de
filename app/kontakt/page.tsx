import { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { AnfrageForm } from "@/components/forms/anfrage-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – roomluxe.de Bad Vilbel",
  description: "Schreiben Sie uns oder rufen Sie direkt an. Wir freuen uns auf Sie.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt – roomluxe.de Bad Vilbel",
    description: "Schreiben Sie uns oder rufen Sie direkt an.",
    url: `${site.url}/kontakt`,
  },
};

const realEstateAgentLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${site.url}/#realestate`,
  name: site.name,
  legalName: site.company.legal,
  url: site.url,
  image: `${site.url}/icon`,
  logo: `${site.url}/icon`,
  telephone: site.phoneE164,
  email: site.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.company.street,
    postalCode: site.company.zip,
    addressLocality: site.company.city,
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Bad Vilbel" },
    { "@type": "City", name: "Frankfurt am Main" },
    { "@type": "City", name: "Karben" },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: `${site.url}/kontakt` },
  ],
};

export default function KontaktPage() {
  return (
    <section className="px-5 sm:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
        <div>
          <Eyebrow>Wir freuen uns auf Sie</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl text-ink-900 leading-tight">
            Kontakt <span className="italic text-gold-700">aufnehmen</span>
          </h1>
          <p className="mt-6 text-ink-700 leading-relaxed">
            Sie interessieren sich für eine Wohnung oder haben Fragen?
            Schreiben Sie uns oder rufen Sie direkt an.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`tel:${site.phoneE164}`}
              className="flex items-center gap-4 rounded-2xl bg-cream-50 border border-gold-300/40 p-5 hover:border-gold-700 transition group"
            >
              <span className="size-12 rounded-xl bg-gold-100 grid place-items-center text-gold-700">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-xs text-ink-500 uppercase tracking-wider">Anrufen</p>
                <p className="font-display text-xl text-ink-900 group-hover:text-gold-700 transition">
                  {site.phone}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl bg-cream-50 border border-gold-300/40 p-5 hover:border-gold-700 transition group"
            >
              <span className="size-12 rounded-xl bg-gold-100 grid place-items-center text-gold-700">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-xs text-ink-500 uppercase tracking-wider">E-Mail</p>
                <p className="font-display text-xl text-ink-900 group-hover:text-gold-700 transition">
                  {site.email}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-cream-50 border border-gold-300/40 shadow-card p-8">
          <h2 className="font-display text-2xl text-ink-900 mb-5">
            Nachricht senden
          </h2>
          <AnfrageForm variant="full" />
        </div>
      </div>
    </section>
  );
}
