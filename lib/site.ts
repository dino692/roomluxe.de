// Globale Site-Konstanten — eine Quelle der Wahrheit für Brand-Daten

export const site = {
  name: "roomluxe.de",
  tagline: "Wohnungen Bad Vilbel",
  url: "https://roomluxe.de",
  description:
    "Hochwertige Mietwohnungen vom privaten Vermieter in Bad Vilbel – ohne Makler, ohne Provision. Persönlich, fair und unkompliziert.",
  phone: "+49 69 678 306 125",
  phoneE164: "+496967830 6125".replace(/\s/g, ""),
  email: "kontakt@roomluxe.de",
  company: {
    legal: "DA Vermögensverwaltung GmbH",
    street: "Allerheiligentor 2-4",
    zip: "60311",
    city: "Frankfurt am Main",
    representatives: "Dino Lalic & Jasmina Müller",
  },
} as const;

export type SiteConfig = typeof site;
