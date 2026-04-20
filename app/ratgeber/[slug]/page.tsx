import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { ratgeber, ratgeberBySlug } from "@/lib/data/ratgeber";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaBand } from "@/components/sections/cta-band";
import { stadtteile } from "@/lib/data/stadtteile";
import { site } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  return ratgeber.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = ratgeberBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/ratgeber/${slug}` },
  };
}

// Per-Article Body — aus Live-Crawl + Bad Vilbel-Faktenwissen
const bodies: Record<string, () => React.ReactNode> = {
  "mietpreise-bad-vilbel-2025": () => (
    <>
      <p>
        Wer 2026 eine Mietwohnung in Bad Vilbel sucht, fragt sich: Was kostet das eigentlich?
        Die Antwort hängt stark vom Stadtteil, von der Wohnungsgröße und dem Baujahr ab.
        In diesem Ratgeber zeigen wir Ihnen die aktuellen Mietpreise für Bad Vilbel, gegliedert nach Stadtteilen
        und realistischen Wohnungsgrößen.
      </p>
      <h2>Mietpreis-Übersicht 2026 nach Stadtteil</h2>
      <ul>
        {stadtteile.map((s) => (
          <li key={s.slug}>
            <strong>{s.name}:</strong> {s.priceRange} – {s.characterShort}
          </li>
        ))}
      </ul>
      <h2>Beispielrechnung: 75 m² 3-Zimmer-Wohnung</h2>
      <p>
        Für eine typische 3-Zimmer-Wohnung mit 75 m² liegen die Kaltmieten in Bad Vilbel je nach Lage
        zwischen 825 € (Södel) und 1.275 € (Kernstadt). Hinzu kommen Nebenkosten und ggf. eine Kaution.
      </p>
      <h2>Vergleich mit Frankfurt</h2>
      <p>
        Im direkten Vergleich liegt Bad Vilbel deutlich unter dem Frankfurter Mietniveau (14–22 €/m²).
        Bei vergleichbarer S-Bahn-Anbindung und ruhigerer Wohnlage sparen Sie bis zu 5 €/m² Kaltmiete.
      </p>
      <h2>Was beeinflusst den Mietpreis?</h2>
      <ul>
        <li>Stadtteil und S-Bahn-Anbindung</li>
        <li>Baujahr und Modernisierungsstand</li>
        <li>Ausstattung (Balkon, Einbauküche, Stellplatz)</li>
        <li>Energieeffizienzklasse</li>
        <li>Möbliert vs. unmöbliert</li>
      </ul>
    </>
  ),
  "pendeln-bad-vilbel-frankfurt": () => (
    <>
      <p>
        Bad Vilbel ist eine der bestangebundenen Pendlerstädte rund um Frankfurt.
        Mit zwei S-Bahn-Linien (S1 und S6) erreichen Sie das Frankfurter Stadtzentrum schnell und entspannt.
      </p>
      <h2>S-Bahn-Verbindungen im Überblick</h2>
      <ul>
        <li><strong>S6:</strong> Bad Vilbel ↔ Frankfurt Hbf in 22 Minuten, weiter Richtung Frankfurt Süd und Friedberg</li>
        <li><strong>S1:</strong> Bad Vilbel ↔ Frankfurt Hbf in 20 Minuten, weiter Richtung Wiesbaden / Rödermark</li>
        <li><strong>Eigene Station Dortelweil</strong> auf der S6 für Pendler aus dem Norden Bad Vilbels</li>
      </ul>
      <h2>Takt und Pünktlichkeit</h2>
      <p>
        Im Berufsverkehr fährt die S-Bahn alle 15 Minuten. Außerhalb der Stoßzeiten gilt ein 30-Minuten-Takt.
        Die Pünktlichkeit ist auf den Linien S1 und S6 generell hoch, gelegentliche Verspätungen kommen vor allem in den Sommerferien durch Bauarbeiten vor.
      </p>
      <h2>Tickets & Preise</h2>
      <p>
        Bad Vilbel liegt in der RMV-Tarifzone 50. Eine Monatskarte Bad Vilbel ↔ Frankfurt kostet aktuell ca. 90 €.
        Mit dem <strong>Deutschlandticket</strong> für 49 €/Monat fahren Sie in ganz Deutschland im ÖPNV.
      </p>
      <h2>Tipps für Pendler</h2>
      <ul>
        <li>Wohnen in Dortelweil spart 2 Min., da die S6 dort hält</li>
        <li>Nidda-Radweg als Alternative bei schönem Wetter (14 km nach Frankfurt)</li>
        <li>Kostenfreie Park-and-Ride-Plätze am Bahnhof Bad Vilbel</li>
        <li>RMV-App für Echtzeit-Verspätungen</li>
      </ul>
    </>
  ),
  "wohnlagen-bad-vilbel-vergleich": () => (
    <>
      <p>
        Bad Vilbel besteht aus sechs Stadtteilen, die sich in Charakter, Mietpreis und Anbindung deutlich unterscheiden.
        Welcher Stadtteil passt zu Ihren Wünschen? Hier ist unser ausführlicher Vergleich.
      </p>
      <h2>Die Stadtteile im direkten Vergleich</h2>
      {stadtteile.map((s) => (
        <div key={s.slug}>
          <h3>{s.name} – {s.characterShort}</h3>
          <p>{s.intro}</p>
          <p>
            <strong>Mietpreis:</strong> {s.priceRange} · <strong>S-Bahn:</strong> {s.sbahnTimeShort}<br />
            <Link href={`/${s.slug}`} className="text-gold-700 underline">Detailseite zum Stadtteil →</Link>
          </p>
        </div>
      ))}
      <h2>Empfehlungen je nach Lebenssituation</h2>
      <ul>
        <li><strong>Single oder Berufspendler:</strong> Kernstadt oder Dortelweil – nah an der S-Bahn, lebendig.</li>
        <li><strong>Familie:</strong> Dortelweil oder Massenheim – Schulen, Kitas, viel Grün.</li>
        <li><strong>Naturliebhaber:</strong> Heilsberg oder Gronau – ruhig, Aussicht, Nidda-Auen.</li>
        <li><strong>Sparfüchse:</strong> Södel oder Massenheim – günstigste Mieten, ländlich.</li>
      </ul>
    </>
  ),
  "checkliste-besichtigung": () => (
    <>
      <p>
        Eine Wohnungsbesichtigung ist Ihre Chance, sich ein vollständiges Bild von Ihrer zukünftigen Wohnung zu machen.
        Wer mit Plan kommt, übersieht nichts Wichtiges – und kann bei Bedarf gleich vor Ort verhandeln.
      </p>
      <h2>Vor der Besichtigung</h2>
      <ul>
        <li>Wohnungsanzeige genau lesen, Fragen notieren</li>
        <li>Maßband, Taschenlampe, Smartphone für Notizen mitnehmen</li>
        <li>Mieterselbstauskunft, Personalausweis, SCHUFA-Auskunft bereitlegen</li>
        <li>Bei Bedarf Vertrauensperson mitbringen</li>
      </ul>
      <h2>In der Wohnung – worauf achten?</h2>
      <ul>
        <li>Lichtverhältnisse zu verschiedenen Tageszeiten</li>
        <li>Schimmelflecken in Ecken, Fenstern, Bad</li>
        <li>Funktion von Fenstern, Türen, Wasserhähnen, Heizkörpern</li>
        <li>Stromanschlüsse, Lichtschalter, Internetanschluss</li>
        <li>Lautstärke (Straße, Nachbarn, Heizung)</li>
        <li>Energieausweis einsehen</li>
      </ul>
      <h2>Außerhalb der Wohnung</h2>
      <ul>
        <li>Hausflur, Treppenhaus, Briefkasten – sauber und gepflegt?</li>
        <li>Müll- und Fahrradraum vorhanden?</li>
        <li>Einkaufsmöglichkeiten und ÖPNV in der Nähe?</li>
        <li>Parksituation und Stellplatz</li>
      </ul>
      <h2>Fragen an den Vermieter</h2>
      <ul>
        <li>Wie hoch sind die letzten Nebenkostenabrechnungen?</li>
        <li>Welche Renovierungen sind in den nächsten Jahren geplant?</li>
        <li>Wer ist Ansprechpartner bei Schäden?</li>
        <li>Wie funktioniert die Heizung – wer rechnet ab?</li>
      </ul>
    </>
  ),
  "nebenkosten-mietwohnung": () => (
    <>
      <p>
        Die Kaltmiete ist nur ein Teil dessen, was Sie monatlich für Ihre Wohnung zahlen.
        Hinzu kommen die Nebenkosten – auch „Betriebskosten" genannt. Wir erklären, was alles dazugehört
        und worauf Sie als Mieter achten sollten.
      </p>
      <h2>Welche Posten zählen zu den Nebenkosten?</h2>
      <ul>
        <li>Heizkosten und Warmwasser</li>
        <li>Wasser und Abwasser</li>
        <li>Müllabfuhr</li>
        <li>Hausmeister und Hausreinigung</li>
        <li>Grundsteuer</li>
        <li>Versicherungen (Gebäude-, Haftpflicht)</li>
        <li>Allgemeinstrom (Treppenhaus, Außenbeleuchtung)</li>
        <li>Wartungskosten (Aufzug, Rauchmelder etc.)</li>
      </ul>
      <h2>Wie hoch sind die Nebenkosten in Bad Vilbel?</h2>
      <p>
        In Bad Vilbel rechnen Sie pro Monat mit etwa <strong>2,50 bis 3,50 €/m²</strong> für die Nebenkosten.
        Bei einer 75-m²-Wohnung sind das also 185 € bis 265 €. Bei energetisch sanierten Neubauten kann der Wert deutlich niedriger liegen.
      </p>
      <h2>Was Sie als Mieter prüfen sollten</h2>
      <ul>
        <li>Jährliche Abrechnung innerhalb von 12 Monaten verlangen</li>
        <li>Belegeinsicht ist Ihr Recht</li>
        <li>Verteilerschlüssel (Wohnfläche, Personenzahl) prüfen</li>
        <li>Posten wie „Verwaltungskosten" oder „Reparaturen" sind nicht umlagefähig</li>
      </ul>
      <h2>Tipp: Warmmiete statt Kaltmiete vergleichen</h2>
      <p>
        Wenn Sie verschiedene Wohnungen vergleichen, achten Sie immer auf die <strong>Warmmiete</strong> (Kaltmiete + Nebenkosten + Heizung).
        Eine günstige Kaltmiete bedeutet bei alten Heizungen oft hohe Heizkosten – im Endeffekt zahlen Sie mehr.
      </p>
    </>
  ),
};

export default async function RatgeberArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = ratgeberBySlug(slug);
  if (!a) notFound();
  const Body = bodies[slug] ?? (() => <p className="text-ink-500">Inhalt wird in Kürze ergänzt.</p>);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.publishedAt,
    dateModified: a.publishedAt,
    inLanguage: "de-DE",
    mainEntityOfPage: `${site.url}/ratgeber/${a.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/favicon.png` },
    },
    articleSection: a.category,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
      { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${site.url}/ratgeber` },
      { "@type": "ListItem", position: 3, name: a.title, item: `${site.url}/ratgeber/${a.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="px-5 sm:px-8 py-12">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { href: "/", label: "Startseite" },
              { href: "/ratgeber", label: "Ratgeber" },
              { label: a.category },
            ]}
          />
          <Link href="/ratgeber" className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold-700 hover:text-gold-800">
            <ArrowLeft className="size-4" /> Alle Artikel
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-700 font-medium">{a.category}</span>
            <span className="flex items-center gap-1 text-ink-500">
              <Clock className="size-3" /> {a.readTime}
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-ink-900 leading-tight">
            {a.title}
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed">{a.excerpt}</p>

          <div className="mt-10 prose-content [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-ink-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-ink-700 [&_p]:leading-relaxed [&_p]:my-4 [&_ul]:my-4 [&_ul]:space-y-2 [&_li]:text-ink-700 [&_li]:relative [&_li]:pl-5 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2.5 [&_li]:before:size-1.5 [&_li]:before:rounded-full [&_li]:before:bg-gold-700">
            <Body />
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
