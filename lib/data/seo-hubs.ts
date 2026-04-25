// SEO-Hub-Seiten: Daten + Inhalt für die Long-Tail Landing-Pages

export type SeoHub = {
  slug: string;
  category: "wohnform" | "stadt" | "monteur" | "pendler";
  breadcrumbLabel: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  sections: {
    heading: string;
    body?: string;
    bullets?: string[];
  }[];
  ctaPrimary?: string;
  showAllStadtteile?: boolean;
};

export const seoHubs: SeoHub[] = [
  // ---- Hub: Mietwohnungen Bad Vilbel (Hauptseite) ----
  {
    slug: "mietwohnung-bad-vilbel",
    category: "wohnform",
    breadcrumbLabel: "Mietwohnungen",
    h1: "Mietwohnung Bad Vilbel – direkt vom Eigentümer, provisionsfrei",
    intro:
      "Sie suchen eine Mietwohnung in Bad Vilbel? Bei roomluxe.de finden Sie gepflegte Wohnungen in allen Stadtteilen – von der lebhaften Kernstadt über das familienfreundliche Dortelweil bis zum idyllischen Gronau. Direkt vom privaten Vermieter, ohne Makler und ohne Provision.",
    metaTitle:
      "Mietwohnung Bad Vilbel: provisionsfrei vom Eigentümer",
    metaDescription:
      "Mietwohnungen in Bad Vilbel direkt vom privaten Vermieter. Kernstadt, Dortelweil, Heilsberg & mehr. Ohne Makler, ohne Provision, transparent und persönlich.",
    sections: [
      {
        heading: "Warum Bad Vilbel? – Wohnqualität nah an Frankfurt",
        body: "Bad Vilbel gehört zu den beliebtesten Wohnstandorten im Rhein-Main-Gebiet. Die Kurstadt im Wetteraukreis bietet alles, was modernes Wohnen ausmacht: hervorragende S-Bahn-Anbindung nach Frankfurt (20 Minuten), grüne Wohnlagen, den historischen Kurpark und eine komplette Infrastruktur mit Schulen, Ärzten und Einkaufsmöglichkeiten.",
      },
      {
        heading: "Unsere Stadtteile im Überblick",
        body: "Bad Vilbel besteht aus sechs Stadtteilen, die jeweils ihren eigenen Charakter haben. Von der zentralen Kernstadt über das Familienidyll Dortelweil bis zum ländlichen Södel – für jeden Wohnwunsch gibt es die passende Lage.",
      },
      {
        heading: "Mietpreise in Bad Vilbel 2025",
        body: "Die durchschnittlichen Mietpreise in Bad Vilbel liegen zwischen 11 und 17 €/m² – je nach Stadtteil, Ausstattung und Baujahr. Im Vergleich zu Frankfurt (14–22 €/m²) bietet Bad Vilbel deutlich günstigere Mieten bei vergleichbarer Lebensqualität und schneller S-Bahn-Anbindung.",
      },
      {
        heading: "Wohnung mieten ohne Makler – so funktioniert's",
        body: "Bei roomluxe.de vermieten wir als private Eigentümer direkt an Sie. Das spart Ihnen die Maklerprovision von bis zu zwei Nettokaltmieten. Schreiben Sie uns oder rufen Sie an – wir vereinbaren zeitnah einen Besichtigungstermin.",
        bullets: [
          "Anfrage per Telefon, E-Mail oder Kontaktformular",
          "Besichtigung innerhalb weniger Tage",
          "Transparente Konditionen ohne versteckte Kosten",
          "Persönlicher Ansprechpartner von Anfang bis Ende",
        ],
      },
    ],
    showAllStadtteile: true,
  },

  // ---- Möblierte Wohnungen ----
  {
    slug: "moeblierte-wohnungen",
    category: "wohnform",
    breadcrumbLabel: "Möblierte Wohnungen",
    h1: "Möblierte Wohnungen Bad Vilbel – sofort einziehen",
    intro:
      "Sie suchen eine möblierte Wohnung in Bad Vilbel? Bei roomluxe.de finden Sie voll ausgestattete Apartments für Berufspendler, Projektmitarbeiter und alle, die schnell und unkompliziert wohnen wollen – ohne eigene Möbel, ohne Maklerkosten.",
    metaTitle: "Möblierte Wohnungen Bad Vilbel",
    metaDescription:
      "Möblierte Wohnungen in Bad Vilbel direkt vom Vermieter. Voll ausgestattet, sofort einzugsbereit, ideal für Pendler und Projektmitarbeiter.",
    sections: [
      {
        heading: "Voll ausgestattet, sofort einzugsbereit",
        body: "Unsere möblierten Wohnungen sind komplett eingerichtet – von Bett und Küche bis zu Geschirr, Bettwäsche und WLAN. Sie packen nur Ihren Koffer aus.",
      },
      {
        heading: "Ideal für diese Lebenssituationen",
        bullets: [
          "Berufspendler aus Frankfurt mit Wochenend-Wohnsitz",
          "Projektmitarbeiter und Berater auf Zeit",
          "Übergangswohnen während Sanierung oder Umzug",
          "Internationale Fachkräfte und Expats",
        ],
      },
      {
        heading: "Was eine möblierte Wohnung kostet",
        body: "Möblierte Wohnungen werden meist mit einer Pauschale verrechnet, die Miete, Nebenkosten und WLAN einschließt. In Bad Vilbel liegen die Preise je nach Größe und Stadtteil zwischen 800 und 1.800 € warm pro Monat.",
      },
    ],
    showAllStadtteile: true,
  },

  // ---- Möblierte Wohnung Frankfurt-Umgebung ----
  {
    slug: "moeblierte-wohnung-frankfurt-umgebung",
    category: "wohnform",
    breadcrumbLabel: "Möbliert · Frankfurt-Umgebung",
    h1: "Möblierte Wohnung Frankfurt Umgebung – Bad Vilbel als ruhige Alternative",
    intro:
      "Wer Frankfurt arbeitet, aber Ruhe und mehr Wohnfläche wünscht, findet in Bad Vilbel die perfekte Alternative. 20 Minuten mit der S-Bahn vom Hauptbahnhof entfernt – möbliert und sofort verfügbar.",
    metaTitle:
      "Möblierte Wohnung Frankfurt Umgebung – Bad Vilbel",
    metaDescription:
      "Möblierte Wohnungen in Frankfurt-Umgebung. Bad Vilbel: 20 Min. mit der S-Bahn nach Frankfurt HBF, ruhig und voll ausgestattet.",
    sections: [
      {
        heading: "Frankfurt arbeiten, in Bad Vilbel wohnen",
        body: "Die S-Bahn-Linien S1 und S6 bringen Sie in 20 Minuten direkt vom Bahnhof Bad Vilbel zum Frankfurter Hauptbahnhof. Mit der S6 erreichen Sie zusätzlich die Messe in 25 Minuten.",
      },
      {
        heading: "Was unterscheidet uns",
        bullets: [
          "Direkt vom Eigentümer – keine Plattform-Gebühren",
          "Lange Mindestmietdauer ist nicht nötig",
          "Persönlicher Check-in oder Schlüsselbox",
          "Transparente Pauschalpreise",
        ],
      },
    ],
  },

  // ---- Wohnen auf Zeit ----
  {
    slug: "wohnen-auf-zeit",
    category: "wohnform",
    breadcrumbLabel: "Wohnen auf Zeit",
    h1: "Wohnen auf Zeit Bad Vilbel – flexibel & möbliert",
    intro:
      "Wohnen auf Zeit in Bad Vilbel: möblierte Apartments für 1 bis 12 Monate. Ideal für Pendler, Projektmitarbeiter und alle, die übergangsweise eine eigene Wohnung brauchen.",
    metaTitle: "Wohnen auf Zeit Bad Vilbel",
    metaDescription:
      "Möblierte Wohnungen auf Zeit in Bad Vilbel. Flexibel, voll ausgestattet, S-Bahn nach Frankfurt in 20 Min.",
    sections: [
      {
        heading: "Was bedeutet Wohnen auf Zeit?",
        body: "Wohnen auf Zeit ist die Vermietung möblierter Wohnungen mit einer Mietdauer zwischen einigen Wochen und meist maximal einem Jahr. Sie zahlen eine Inklusivmiete, die Möbel, Nebenkosten, oft auch WLAN und Reinigung umfasst.",
      },
      {
        heading: "Wann ist Wohnen auf Zeit sinnvoll?",
        bullets: [
          "Berufliches Projekt oder Trainee-Programm in der Region",
          "Übergangslösung während Hausbau oder Sanierung",
          "Trennung oder Umzug, wenn neue Wohnung erst später frei wird",
          "Probewohnen, bevor man dauerhaft zuzieht",
        ],
      },
    ],
  },

  // ---- Privat vermietet ----
  {
    slug: "privat-vermietet",
    category: "wohnform",
    breadcrumbLabel: "Privat vermietet",
    h1: "Privat vermietete Wohnungen in Bad Vilbel",
    intro:
      "Privat vermietet bedeutet: Sie sprechen direkt mit dem Eigentümer. Kein Makler, keine Plattform, keine Provision. Persönlich, transparent und fair.",
    metaTitle: "Privat vermietete Wohnungen Bad Vilbel",
    metaDescription:
      "Wohnungen direkt vom privaten Eigentümer in Bad Vilbel. Ohne Makler, ohne Provision, persönlich und fair.",
    sections: [
      {
        heading: "Vorteile privater Vermietung",
        bullets: [
          "Keine Maklerprovision (spart bis zu 2 Nettokaltmieten)",
          "Direkte Kommunikation mit dem Entscheider",
          "Schnellere Antworten und kürzere Besichtigungstermine",
          "Transparente Konditionen, keine versteckten Kosten",
        ],
      },
      {
        heading: "So läuft die Anfrage ab",
        body: "Schreiben Sie uns über das Kontaktformular, per E-Mail oder rufen Sie direkt an. Wir melden uns in der Regel innerhalb von 24 Stunden mit einem Besichtigungsvorschlag zurück.",
      },
    ],
  },

  // ---- Kurzzeitvermietung ----
  {
    slug: "kurzzeitvermietung",
    category: "wohnform",
    breadcrumbLabel: "Kurzzeitvermietung",
    h1: "Kurzzeitvermietung Bad Vilbel – tageweise oder für wenige Wochen",
    intro:
      "Sie brauchen eine Unterkunft in Bad Vilbel für ein paar Nächte oder Wochen? Unsere Kurzzeit-Apartments sind vollständig ausgestattet und kurzfristig verfügbar.",
    metaTitle: "Kurzzeitvermietung Bad Vilbel",
    metaDescription:
      "Möblierte Apartments zur Kurzzeitvermietung in Bad Vilbel. Mindestens 3 Nächte, voll ausgestattet, S-Bahn nach Frankfurt.",
    sections: [
      {
        heading: "Mindestens 3 Nächte, maximale Flexibilität",
        body: "Unsere Apartments können Sie ab drei Nächten buchen. Verfügbarkeit, Preise und Bedingungen sehen Sie direkt auf der jeweiligen Wohnungsseite.",
      },
      {
        heading: "Für wen ist Kurzzeitvermietung gedacht?",
        bullets: [
          "Geschäftsreisende und Berater",
          "Messe-Besucher in Frankfurt",
          "Familien-Besuch, der mehr Platz braucht",
          "Übergangs-Wohnen vor Einzug in eine reguläre Mietwohnung",
        ],
      },
    ],
  },

  // ---- Karben ----
  {
    slug: "wohnung-mieten-karben",
    category: "stadt",
    breadcrumbLabel: "Karben",
    h1: "Wohnung mieten Karben – Nachbarstadt von Bad Vilbel",
    intro:
      "Karben grenzt direkt an Bad Vilbel und ist ähnlich gut an Frankfurt angebunden. Falls Sie in Karben suchen, lohnt sich auch ein Blick auf unsere Bad Vilbeler Angebote – nur wenige Minuten entfernt.",
    metaTitle: "Wohnung mieten Karben & Bad Vilbel",
    metaDescription:
      "Mietwohnungen in Karben und Bad Vilbel. Direkt vom privaten Eigentümer, S-Bahn-Anbindung nach Frankfurt.",
    sections: [
      {
        heading: "Karben & Bad Vilbel im Vergleich",
        body: "Beide Städte liegen im Wetteraukreis nördlich von Frankfurt und teilen sich die S-Bahn-Strecke. Karben ist etwas weiter draußen, dafür oft günstiger. Bad Vilbel bietet mehr Infrastruktur und kürzere Wege ins Frankfurter Zentrum.",
      },
      {
        heading: "S-Bahn-Anbindung",
        bullets: [
          "S6 hält in Bad Vilbel, Dortelweil, Groß-Karben und Okarben",
          "20–28 Min. nach Frankfurt HBF, je nach Halt",
          "Tagesticket Frankfurt + Wetteraukreis günstig im RMV-Tarif",
        ],
      },
    ],
  },

  // ---- Frankfurt Nord ----
  {
    slug: "wohnung-mieten-frankfurt-nord",
    category: "stadt",
    breadcrumbLabel: "Frankfurt Nord",
    h1: "Wohnung mieten Frankfurt Nord – günstige Alternativen",
    intro:
      "Wohnungen in Frankfurt Nord werden teurer und seltener. Bad Vilbel grenzt direkt nördlich an Frankfurt und bietet die gleiche S-Bahn-Anbindung – zu deutlich günstigeren Mieten.",
    metaTitle: "Wohnung mieten Frankfurt Nord – Bad Vilbel",
    metaDescription:
      "Sie suchen eine Wohnung in Frankfurt Nord? Bad Vilbel ist die günstige Alternative direkt vor den Toren. 20 Min. mit der S-Bahn ins Zentrum.",
    sections: [
      {
        heading: "Frankfurt Nord vs. Bad Vilbel",
        body: "In Frankfurt Nord (z. B. Bonames, Heddernheim, Eschersheim) zahlen Sie 14–22 €/m². In Bad Vilbel sind es 11–17 €/m² – bei vergleichbarer S-Bahn-Anbindung und ruhigerer Wohnlage.",
      },
      {
        heading: "Was Sie sich sparen",
        bullets: [
          "Bis zu 5 €/m² weniger Kaltmiete",
          "Kein Makler, keine Provision",
          "Mehr Wohnfläche für das gleiche Budget",
          "Ruhe, Grün und kurze Wege",
        ],
      },
    ],
  },

  // ---- Ferienwohnung Bad Vilbel ----
  {
    slug: "ferienwohnung-bad-vilbel",
    category: "wohnform",
    breadcrumbLabel: "Ferienwohnung",
    h1: "Ferienwohnung Bad Vilbel – privat & ruhig nahe Frankfurt",
    intro:
      "Verbringen Sie Ihren Aufenthalt in Bad Vilbel in einer privaten Ferienwohnung – ruhig, voll ausgestattet und in 20 Minuten am Frankfurter Hauptbahnhof.",
    metaTitle: "Ferienwohnung Bad Vilbel",
    metaDescription:
      "Private Ferienwohnungen in Bad Vilbel. Voll ausgestattet, ruhig und schnell in Frankfurt – ideal für Messe, Geschäftsreise oder Kurzurlaub.",
    sections: [
      {
        heading: "Ideal für Frankfurter Messe-Besucher",
        body: "Mit der S6 ab Bad Vilbel erreichen Sie die Frankfurter Messe in nur 25 Minuten. Sie wohnen ruhig, sparen die teuren Messezeit-Hotelpreise und genießen mehr Platz als in jedem Hotelzimmer.",
      },
      {
        heading: "Was die Ferienwohnung enthält",
        bullets: [
          "Komplett möbliert und ausgestattet",
          "WLAN, TV, Küche mit Geschirr und Kaffeemaschine",
          "Handtücher und Bettwäsche inklusive",
          "Schlüsselbox-Check-in oder persönliche Übergabe",
        ],
      },
    ],
  },

  // ---- Monteurwohnungen ----
  {
    slug: "monteurwohnungen",
    category: "monteur",
    breadcrumbLabel: "Monteurwohnungen",
    h1: "Monteurwohnungen Bad Vilbel – günstig, sauber, kurzfristig",
    intro:
      "Sie brauchen eine Monteurwohnung in Bad Vilbel oder Umgebung? Unsere voll ausgestatteten Apartments sind ideal für Handwerker, Bautrupps und Projektmitarbeiter.",
    metaTitle: "Monteurwohnungen Bad Vilbel",
    metaDescription:
      "Monteurwohnungen in Bad Vilbel direkt vom Eigentümer. Sauber, voll ausgestattet, mit Parkplatz und WLAN.",
    sections: [
      {
        heading: "Speziell für Monteure & Handwerker",
        bullets: [
          "Kostenfreie Parkplätze für Transporter und Werkzeug",
          "Schnelles WLAN für Auftragsabwicklung",
          "Waschmaschine und Trockner inklusive",
          "Schlüsselbox-Check-in für späte Anreise",
          "Frühstücks-Ausstattung in der Küche",
          "Direkte Rechnung an Firma oder Privat",
        ],
      },
      {
        heading: "Anbindung an Frankfurt & Wetteraukreis",
        body: "Bad Vilbel ist verkehrsgünstig gelegen: A661 und A5 in 5 Minuten, Frankfurt-Zentrum in 20 Minuten S-Bahn. Ideal für Baustellen im gesamten Rhein-Main-Gebiet.",
      },
    ],
  },

  // ---- Monteurzimmer ----
  {
    slug: "monteurzimmer",
    category: "monteur",
    breadcrumbLabel: "Monteurzimmer",
    h1: "Monteurzimmer Bad Vilbel – einzeln oder im Team",
    intro:
      "Statt enger Pension lieber eigenes Zimmer in einer voll ausgestatteten Wohnung? Unsere Monteurzimmer in Bad Vilbel bieten Komfort und Privatsphäre auch für längere Einsätze.",
    metaTitle: "Monteurzimmer Bad Vilbel",
    metaDescription:
      "Monteurzimmer in Bad Vilbel. Einzeln oder als ganze Wohnung für Team-Belegung – komfortabel, sauber und mit Parkplatz.",
    sections: [
      {
        heading: "Für Einzelne und für Teams",
        body: "Unsere Wohnungen lassen sich einzeln oder als Komplett-Belegung für ein Bautrupp-Team mieten. Sie sparen sich die Pension – und haben eigene Küche, eigenes Bad und ungestörte Pause.",
      },
      {
        heading: "Vorteile gegenüber Pension oder Hotel",
        bullets: [
          "Eigene Küche statt Außer-Haus-Verpflegung",
          "Kostenfreier Parkplatz statt Tiefgaragen-Gebühren",
          "Wäsche-Möglichkeit vor Ort",
          "Längere Mietdauer rabattiert",
        ],
      },
    ],
  },

  // ---- Unterkunft Monteure ----
  {
    slug: "unterkunft-monteure",
    category: "monteur",
    breadcrumbLabel: "Unterkunft Monteure",
    h1: "Unterkunft für Monteure & Firmen im Rhein-Main-Gebiet",
    intro:
      "Suchen Sie eine professionelle Monteur-Unterkunft für Ihr Team oder einzelne Mitarbeiter im Großraum Frankfurt? Wir vermieten direkt an Firmen, mit Rechnung und individuellen Konditionen.",
    metaTitle: "Unterkunft Monteure Frankfurt",
    metaDescription:
      "Firmen-Unterkünfte für Monteure & Bautrupps in Bad Vilbel und Umgebung. Direktvermietung mit Rechnung, ideal für längere Einsätze.",
    sections: [
      {
        heading: "Direkt an Firmen vermietet",
        bullets: [
          "Rechnung mit USt.-Ausweis an Ihre Firma",
          "Längere Belegung bis 12 Monate möglich",
          "Mehrere Wohnungen für größere Teams kombinierbar",
          "Persönlicher Ansprechpartner für Vertragsfragen",
        ],
      },
      {
        heading: "Bad Vilbel als idealer Standort",
        body: "Zentrale Lage zwischen Frankfurt, Wetteraukreis und Main-Kinzig-Kreis. A5, A661, A66 in wenigen Minuten erreichbar.",
      },
    ],
  },

  // ---- S-Bahn Frankfurt Pendler ----
  {
    slug: "wohnung-sbahn-frankfurt",
    category: "pendler",
    breadcrumbLabel: "Wohnung an der S-Bahn",
    h1: "Wohnung an der S-Bahn nach Frankfurt – Pendeln aus Bad Vilbel",
    intro:
      "Sie wollen in Frankfurt arbeiten, aber im Grünen wohnen? Bad Vilbel hat zwei direkte S-Bahn-Anbindungen (S1 und S6) – Sie sind in 20 Minuten am Hauptbahnhof.",
    metaTitle: "Wohnung S-Bahn Frankfurt – Pendeln aus Bad Vilbel",
    metaDescription:
      "Wohnungen mit direkter S-Bahn-Anbindung nach Frankfurt. Bad Vilbel: 20 Min. zum HBF, deutlich günstiger als Frankfurt-Innenstadt.",
    sections: [
      {
        heading: "Zwei S-Bahn-Linien direkt ins Zentrum",
        bullets: [
          "S1: Bad Vilbel → Frankfurt Hbf (20 Min.)",
          "S6: Bad Vilbel → Frankfurt Hbf (22 Min.) → Messe (25 Min.)",
          "Eigene S-Bahn-Station Dortelweil mit S6-Halt",
          "Takt im Berufsverkehr alle 15 Minuten",
        ],
      },
      {
        heading: "Was Pendeln aus Bad Vilbel kostet",
        body: "Eine Monatskarte RMV (Bad Vilbel ↔ Frankfurt) kostet derzeit ca. 90 € – inklusive ÖPNV in beiden Städten. Mit dem Deutschlandticket fahren Sie für 49 € pauschal.",
      },
    ],
    showAllStadtteile: true,
  },
];

export const seoHubBySlug = (slug: string) =>
  seoHubs.find((h) => h.slug === slug);

export const seoHubSlugs = seoHubs.map((h) => h.slug);
