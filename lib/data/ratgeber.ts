// Ratgeber-Artikel — Long-form-Content, hier als Stub-Liste mit Meta.
// Volltext-Bodies in app/ratgeber/[slug]/page.tsx (oder MDX) ausgelagert.

export type RatgeberArtikel = {
  slug: string;
  category: "Mieten" | "Lage" | "Pendeln" | "Kosten" | "Tipps";
  readTime: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  cover?: string;
};

export const ratgeber: RatgeberArtikel[] = [
  {
    slug: "mietpreise-bad-vilbel-2025",
    category: "Kosten",
    readTime: "6 Min. Lesezeit",
    title: "Mietpreise Bad Vilbel 2025: Was kostet eine Wohnung?",
    excerpt:
      "Was kostet eine Mietwohnung in Bad Vilbel? Wir zeigen aktuelle Mietpreise nach Stadtteil und Wohnungsgröße.",
    publishedAt: "2026-03-15",
  },
  {
    slug: "pendeln-bad-vilbel-frankfurt",
    category: "Pendeln",
    readTime: "5 Min. Lesezeit",
    title: "Pendeln von Bad Vilbel nach Frankfurt: S-Bahn, Zeiten & Tipps",
    excerpt:
      "S-Bahn-Anbindung, Fahrzeiten und praktische Tipps für alle, die von Bad Vilbel nach Frankfurt pendeln.",
    publishedAt: "2026-03-15",
  },
  {
    slug: "wohnlagen-bad-vilbel-vergleich",
    category: "Lage",
    readTime: "7 Min. Lesezeit",
    title: "Die besten Wohnlagen in Bad Vilbel im Vergleich",
    excerpt:
      "Kernstadt, Dortelweil oder Heilsberg? Wir vergleichen die Stadtteile von Bad Vilbel für Mietinteressenten.",
    publishedAt: "2025-01-20",
  },
  {
    slug: "checkliste-besichtigung",
    category: "Tipps",
    readTime: "4 Min. Lesezeit",
    title: "Wohnung mieten: Checkliste für die Besichtigung",
    excerpt:
      "Worauf sollten Sie bei der Wohnungsbesichtigung achten? Unsere Checkliste hilft Ihnen, nichts zu vergessen.",
    publishedAt: "2025-12-10",
  },
  {
    slug: "nebenkosten-mietwohnung",
    category: "Kosten",
    readTime: "5 Min. Lesezeit",
    title: "Nebenkosten einer Mietwohnung – was steckt dahinter?",
    excerpt:
      "Heizung, Wasser, Müll – was alles in den Nebenkosten steckt und worauf Sie als Mieter achten sollten.",
    publishedAt: "2025-11-22",
  },
  {
    slug: "2-zimmer-vs-3-zimmer-bad-vilbel",
    category: "Mieten",
    readTime: "6 Min. Lesezeit",
    title: "2-Zimmer oder 3-Zimmer-Wohnung in Bad Vilbel – was passt zu mir?",
    excerpt:
      "Preis, Fläche, Nutzungsszenarien: Wir vergleichen 2- und 3-Zimmer-Wohnungen in Bad Vilbel und zeigen, wann welche Größe Sinn ergibt.",
    publishedAt: "2026-04-20",
  },
  {
    slug: "pendlerpauschale-bad-vilbel-frankfurt",
    category: "Pendeln",
    readTime: "6 Min. Lesezeit",
    title: "Pendlerpauschale Bad Vilbel → Frankfurt: So viel Steuer sparen Sie",
    excerpt:
      "Entfernungspauschale, Mobilitätsprämie, Beispielrechnungen: Was Sie als Pendler zwischen Bad Vilbel und Frankfurt steuerlich absetzen können.",
    publishedAt: "2026-04-20",
  },
  {
    slug: "kaution-buergschaft-mietsicherheit",
    category: "Kosten",
    readTime: "5 Min. Lesezeit",
    title: "Kaution, Bürgschaft & Mietsicherheit – was Vermieter verlangen dürfen",
    excerpt:
      "Gesetzliche Höchstgrenzen, zulässige Formen und praktische Tipps: Alles Wichtige zur Mietsicherheit beim Einzug in eine Mietwohnung.",
    publishedAt: "2026-04-20",
  },
  {
    slug: "umzug-nach-bad-vilbel-checkliste",
    category: "Tipps",
    readTime: "7 Min. Lesezeit",
    title: "Umzug nach Bad Vilbel – die komplette Checkliste",
    excerpt:
      "Ummeldung, Schulen, Kitas, Ärzte, Internet: Die komplette Schritt-für-Schritt-Checkliste für Ihren Umzug nach Bad Vilbel.",
    publishedAt: "2026-04-20",
  },
];

export const ratgeberCategories = [
  "Alle",
  "Mieten",
  "Lage",
  "Pendeln",
  "Kosten",
  "Tipps",
] as const;

export const ratgeberBySlug = (slug: string) =>
  ratgeber.find((r) => r.slug === slug);
