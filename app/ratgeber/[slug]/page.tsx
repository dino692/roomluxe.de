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
  "2-zimmer-vs-3-zimmer-bad-vilbel": () => (
    <>
      <p>
        Eine der häufigsten Fragen beim Wohnungswechsel: Reicht eine 2-Zimmer-Wohnung aus – oder lieber gleich 3 Zimmer?
        In Bad Vilbel ist die Preisdifferenz oft kleiner als erwartet, der Nutzen aber beträchtlich. Wir vergleichen beide Größen
        nach Preis, Fläche, Lebenssituation und Wiederverkaufs- bzw. Weitervermietungspotenzial.
      </p>
      <h2>Fläche & Grundriss im Vergleich</h2>
      <ul>
        <li><strong>2-Zimmer-Wohnung:</strong> meist 45–60 m² – Wohn-/Essbereich + Schlafzimmer</li>
        <li><strong>3-Zimmer-Wohnung:</strong> meist 65–90 m² – Wohnzimmer + Schlafzimmer + Arbeits-/Gästezimmer</li>
      </ul>
      <h2>Mietpreis-Vergleich in Bad Vilbel</h2>
      <p>
        Die Kaltmieten in Bad Vilbel liegen für 2-Zimmer-Wohnungen bei ca. <strong>660 € bis 900 €</strong>, für 3-Zimmer-Wohnungen bei <strong>825 € bis 1.275 €</strong>.
        Pro Quadratmeter ist die 3-Zimmer-Wohnung häufig sogar günstiger – Vermieter kalkulieren kleinere Wohnungen mit höherem Aufschlag.
      </p>
      <h2>Wann reicht eine 2-Zimmer-Wohnung?</h2>
      <ul>
        <li>Single oder Paar ohne Kinderwunsch</li>
        <li>Berufspendler, die nur abends und am Wochenende zuhause sind</li>
        <li>Wer möglichst nah an die S-Bahn ziehen will – kleinere Wohnungen gibt's öfter zentral</li>
      </ul>
      <h2>Wann lohnt sich eine 3-Zimmer-Wohnung?</h2>
      <ul>
        <li>Homeoffice: ein separates Arbeitszimmer ist steuerlich absetzbar</li>
        <li>Paar mit Kinderwunsch – Wohnungssuche mit Baby ist stressig</li>
        <li>Häufiger Besuch aus Frankfurt oder dem Umland</li>
        <li>Hobbys, die Platz brauchen (Musik, Sport, Kreativarbeit)</li>
      </ul>
      <h2>Fazit</h2>
      <p>
        Wer länger als 2 Jahre in der Wohnung bleiben will und Homeoffice macht, sollte direkt zur 3-Zimmer-Variante greifen.
        Die Monatsdifferenz (ca. 150–200 €) amortisiert sich über eingesparte Umzugskosten beim nächsten Wechsel und über die bessere Homeoffice-Pauschale.
      </p>
    </>
  ),
  "pendlerpauschale-bad-vilbel-frankfurt": () => (
    <>
      <p>
        Wer von Bad Vilbel nach Frankfurt pendelt, kann einen erheblichen Betrag steuerlich geltend machen.
        Egal ob Sie mit der S-Bahn, dem Auto oder dem Fahrrad pendeln – die sogenannte Entfernungspauschale (umgangssprachlich „Pendlerpauschale") lohnt sich fast immer.
      </p>
      <h2>Wie viel Kilometer zählt das Finanzamt?</h2>
      <p>
        Entscheidend ist die <strong>einfache Entfernung</strong> zwischen Wohnung und erster Tätigkeitsstätte.
        Von der Kernstadt Bad Vilbel zum Frankfurter Hauptbahnhof sind es ca. <strong>14 km</strong> – unabhängig vom gewählten Verkehrsmittel.
      </p>
      <h2>Aktuelle Sätze 2026</h2>
      <ul>
        <li><strong>0,30 €/km</strong> für die ersten 20 Kilometer</li>
        <li><strong>0,38 €/km</strong> ab dem 21. Kilometer</li>
        <li>Gilt pro Arbeitstag – nicht pro Fahrt</li>
      </ul>
      <h2>Beispielrechnung Bad Vilbel → Frankfurt</h2>
      <p>
        14 km × 0,30 € = <strong>4,20 € pro Arbeitstag</strong>. Bei 220 Arbeitstagen im Jahr sind das <strong>924 €</strong> Werbungskosten.
        Bei einem Grenzsteuersatz von 35 % sparen Sie damit rund <strong>325 € Steuern pro Jahr</strong> – ganz ohne Belege.
      </p>
      <h2>Höhere Pauschale für weiter entfernte Stadtteile</h2>
      <p>
        Aus Södel oder Massenheim sind es je nach Arbeitsplatz 18–22 km. Die ersten 20 km werden mit 0,30 € angesetzt,
        jeder weitere Kilometer mit 0,38 €. Das lohnt sich gerade für Pendler in die südlichen oder östlichen Frankfurter Stadtteile.
      </p>
      <h2>Was Sie zusätzlich absetzen können</h2>
      <ul>
        <li>Deutschlandticket oder Monatskarte (als Werbungskosten)</li>
        <li>Arbeitsmittel, Fortbildungen</li>
        <li>Homeoffice-Pauschale (6 €/Tag, max. 1.260 €/Jahr)</li>
      </ul>
      <h2>Mobilitätsprämie für Geringverdiener</h2>
      <p>
        Wer unter dem Grundfreibetrag verdient und keine Steuern zahlt, kann trotzdem profitieren: Die Mobilitätsprämie erstattet
        14 % der Pauschale ab km 21 als Bargeld. Antrag über die Steuererklärung.
      </p>
    </>
  ),
  "kaution-buergschaft-mietsicherheit": () => (
    <>
      <p>
        Fast jeder Vermieter verlangt beim Einzug eine Mietsicherheit. Was dabei erlaubt ist und welche Form für Sie am besten passt,
        ist gesetzlich geregelt. Ein Überblick für Mieter.
      </p>
      <h2>Wie hoch darf die Kaution maximal sein?</h2>
      <p>
        § 551 BGB erlaubt maximal <strong>drei Nettokaltmieten</strong>. Bei einer Kaltmiete von 800 € dürfen also höchstens 2.400 € verlangt werden.
        Mehr ist unzulässig – egal ob mündlich zugesagt oder im Vertrag vermerkt.
      </p>
      <h2>Kaution in drei Raten zahlen</h2>
      <p>
        Mieter dürfen die Kaution in <strong>drei gleichen monatlichen Raten</strong> zahlen. Die erste Rate ist zu Beginn des Mietverhältnisses fällig,
        die beiden weiteren mit den zwei folgenden Mieten.
      </p>
      <h2>Wo wird die Kaution angelegt?</h2>
      <p>
        Der Vermieter muss die Kaution auf einem <strong>separaten, verpfändeten Mietkautionskonto</strong> anlegen – getrennt von seinem Privatvermögen.
        Zinsen stehen dem Mieter zu. Ein eigenes Konto können Sie auch selbst eröffnen und dem Vermieter verpfänden.
      </p>
      <h2>Alternativen zur Barkaution</h2>
      <ul>
        <li><strong>Bürgschaft:</strong> Eltern, Freunde oder eine Bank bürgen für den Betrag – Sie behalten Ihr Kapital</li>
        <li><strong>Mietkautionsversicherung:</strong> eine Versicherung bürgt gegen Jahresbeitrag (ca. 5 % der Kautionssumme)</li>
        <li><strong>Mietkautionssparbuch:</strong> Sie legen die Kaution selbst an, verpfänden das Sparbuch</li>
      </ul>
      <h2>Rückzahlung am Ende des Mietverhältnisses</h2>
      <p>
        Nach Ende des Mietverhältnisses hat der Vermieter eine angemessene Prüffrist – üblicherweise <strong>3 bis 6 Monate</strong>.
        Einbehalten darf er nur Beträge für konkret belegte Schäden oder offene Nebenkostenabrechnungen.
        Für strittige Nebenkosten darf ein Teilbetrag zurückgehalten werden, der Rest muss ausgezahlt werden.
      </p>
      <h2>Bei roomluxe.de</h2>
      <p>
        Wir arbeiten mit Standardverträgen nach Mieterbund-Muster und akzeptieren Barkaution, Bürgschaft und Mietkautionsversicherung gleichermaßen.
      </p>
    </>
  ),
  "umzug-nach-bad-vilbel-checkliste": () => (
    <>
      <p>
        Ein Umzug ist anstrengend – aber mit einer guten Checkliste reibungsloser. Damit Sie nichts vergessen,
        haben wir die wichtigsten Schritte rund um den Umzug nach Bad Vilbel zusammengestellt.
      </p>
      <h2>8 Wochen vor dem Umzug</h2>
      <ul>
        <li>Mietvertrag alter Wohnung kündigen (i.d.R. 3 Monate Kündigungsfrist)</li>
        <li>Umzugsfirma oder Leih-Transporter anfragen</li>
        <li>Sperrmüll-Termin bei der alten Gemeinde buchen</li>
        <li>Urlaub für Umzugstage einreichen</li>
      </ul>
      <h2>4 Wochen vorher</h2>
      <ul>
        <li>Strom- und Gasvertrag kündigen und neuen Anbieter für Bad Vilbel auswählen</li>
        <li>Internetanschluss für die neue Wohnung beantragen (Unitymedia/Vodafone, Telekom, 1&amp;1 – Verfügbarkeit per PLZ prüfen)</li>
        <li>Nachsendeauftrag bei der Deutschen Post einrichten (6 Monate, ca. 30 €)</li>
        <li>Ummeldung bei der Stadt Bad Vilbel terminieren (Pflicht innerhalb von 14 Tagen nach Einzug)</li>
      </ul>
      <h2>Ummeldung in Bad Vilbel</h2>
      <p>
        Die Ummeldung erfolgt beim <strong>Bürgerbüro der Stadt Bad Vilbel</strong>, Niddastraße 5.
        Termin online vereinbaren. Mitbringen: Personalausweis, Wohnungsgeberbestätigung, ggf. Reisepass, Heiratsurkunde.
        Die Ummeldung ist kostenlos.
      </p>
      <h2>Schulen & Kitas in Bad Vilbel</h2>
      <ul>
        <li><strong>Kitas:</strong> zentrale Anmeldung über den Kita-Navigator der Stadt</li>
        <li><strong>Grundschulen:</strong> Schulbezirks-Prinzip – Zuteilung nach Wohnadresse</li>
        <li><strong>Weiterführende Schulen:</strong> Georg-Büchner-Schule (Gymnasium, IGS), Regenbogenschule (Grundschule Dortelweil)</li>
      </ul>
      <h2>Ärzte & Apotheken</h2>
      <p>
        Bad Vilbel hat mehr als 30 Hausärzte, zahlreiche Fachärzte und 8 Apotheken. Eine komplette Liste führt die KV Hessen
        (arztauskunft-hessen.de). Termin beim Hausarzt vor dem Umzug sichern – gerade die Kinderärzte sind oft monatelang ausgebucht.
      </p>
      <h2>Am Umzugstag</h2>
      <ul>
        <li>Zählerstände alte + neue Wohnung notieren (Strom, Gas, Wasser)</li>
        <li>Übergabeprotokoll gemeinsam mit Vor- und Nachmieter ausfüllen</li>
        <li>Schlüssel zählen und Erhalt quittieren</li>
        <li>Namensschilder an Briefkasten und Klingel</li>
      </ul>
      <h2>Die ersten 2 Wochen</h2>
      <ul>
        <li>Ummeldung beim Bürgerbüro</li>
        <li>Kfz-Ummeldung bei der Zulassungsstelle (Hessen-Kennzeichen bleibt erhalten, falls Sie schon aus Hessen kommen)</li>
        <li>Bank, Versicherungen, Arbeitgeber informieren</li>
        <li>Rundfunkbeitrag: Adresse ändern (rundfunkbeitrag.de)</li>
        <li>Hausarzt, Zahnarzt, Kinderarzt neu wählen</li>
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
      logo: { "@type": "ImageObject", url: `${site.url}/icon` },
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
