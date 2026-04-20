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
