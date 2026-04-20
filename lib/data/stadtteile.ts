// Bad Vilbel — alle 6 Stadtteile mit Daten aus der Live-Seite

export type Stadtteil = {
  slug: string;
  name: string;
  tagline: string;
  sbahn: string;
  sbahnTime: string;
  sbahnTimeShort: string;
  intro: string;
  bullets: string[];
  charakter: string;
  preise: string;
  priceRange: string;
  characterShort: string;
  neighbors: string[];
};

export const stadtteile: Stadtteil[] = [
  {
    slug: "bad-vilbel-kernstadt",
    name: "Kernstadt",
    tagline: "zentral wohnen nah an Frankfurt",
    sbahn: "S1 & S6 ab Bahnhof Bad Vilbel",
    sbahnTime: "20–22 Minuten nach Frankfurt HBF",
    sbahnTimeShort: "20–22 Min.",
    intro:
      "Die Kernstadt von Bad Vilbel ist das pulsierende Herz der Kurstadt. Hier finden Sie den historischen Marktplatz, den Kurpark, zahlreiche Geschäfte und Restaurants – und die S-Bahn-Station, die Sie in nur 20 Minuten zum Frankfurter Hauptbahnhof bringt. Wer eine Wohnung mieten in Bad Vilbel Kernstadt möchte, entscheidet sich für die beste Lage der Stadt.",
    bullets: [
      "S-Bahn S1 & S6: 20–22 Minuten nach Frankfurt Hauptbahnhof",
      "Mehrere Supermärkte, Drogerien und Fachgeschäfte",
      "Grundschulen, weiterführende Schulen und Kitas in Gehweite",
      "Kurpark, Quellenanlage und Nidda-Auen für Naherholung",
      "Ärztezentren, Apotheken und Krankenhausnähe",
      "Wochenmarkt und vielfältige Gastronomie",
    ],
    charakter:
      "Die Kernstadt ist der lebendigste Stadtteil Bad Vilbels. Der Kurpark mit seiner Quellenanlage, der Wochenmarkt und die Nidda-Auen sorgen für hohe Lebensqualität. Moderne Mehrfamilienhäuser und sanierte Altbauten bieten vielfältige Wohnmöglichkeiten. Die komplette Nahversorgung ist fußläufig erreichbar.",
    preise:
      "Die Kernstadt ist die teuerste Wohnlage in Bad Vilbel mit Mietpreisen zwischen 15 und 17 €/m². Die zentrale Lage, die direkte S-Bahn-Anbindung und die hervorragende Infrastruktur rechtfertigen das höhere Preisniveau. Für eine 3-Zimmer-Wohnung mit 75 m² sollten Sie mit einer Kaltmiete zwischen 1.125 und 1.275 € rechnen.",
    priceRange: "15–17 €/m²",
    characterShort: "Zentral & urban",
    neighbors: ["bad-vilbel-dortelweil", "bad-vilbel-heilsberg"],
  },
  {
    slug: "bad-vilbel-dortelweil",
    name: "Dortelweil",
    tagline: "ruhig wohnen nah an Frankfurt",
    sbahn: "S6 ab Haltestelle Dortelweil",
    sbahnTime: "22–25 Minuten nach Frankfurt HBF",
    sbahnTimeShort: "22–25 Min.",
    intro:
      "Dortelweil ist der größte und einer der beliebtesten Stadtteile von Bad Vilbel. Der historische Ortskern mit Fachwerkhäusern, moderne Neubaugebiete und eine eigene S-Bahn-Station machen Dortelweil besonders attraktiv für Familien und Berufspendler. In nur 22–25 Minuten sind Sie per S-Bahn am Frankfurter Hauptbahnhof.",
    bullets: [
      "Eigene S-Bahn-Station Dortelweil (Linie S6)",
      "Grundschule, mehrere Kindergärten und Krippen",
      "Supermärkte, Bäcker und Nahversorgung im Ort",
      "Sportvereine, Spielplätze und Dortelweiler Park",
      "Historischer Ortskern mit Fachwerkhäusern",
      "Obstwiesen und Feldwege für Naherholung",
    ],
    charakter:
      "Dortelweil vereint historischen Charme mit moderner Wohnqualität. Der Fachwerk-Ortskern, Obstwiesen und die Wetterau-Landschaft prägen das Bild. Gleichzeitig entstehen neue Wohngebiete mit zeitgemäßer Architektur. Der Stadtteil hat eine eigene Identität und bietet alles für den Alltag vor Ort.",
    preise:
      "Die Mietpreise in Dortelweil liegen zwischen 14 und 16 €/m² – leicht unter dem Niveau der Kernstadt, aber mit eigener S-Bahn-Station. Für eine 3-Zimmer-Wohnung mit 75 m² zahlen Sie etwa 1.050 bis 1.200 € Kaltmiete. Neubauwohnungen können auch darüber liegen.",
    priceRange: "14–16 €/m²",
    characterShort: "Familienidylle",
    neighbors: ["bad-vilbel-kernstadt", "bad-vilbel-gronau"],
  },
  {
    slug: "bad-vilbel-heilsberg",
    name: "Heilsberg",
    tagline: "grüne Höhenlage nahe Frankfurt",
    sbahn: "Bus zur S-Bahn-Station Bad Vilbel",
    sbahnTime: "28–30 Minuten nach Frankfurt HBF",
    sbahnTimeShort: "28–30 Min.",
    intro:
      "Heilsberg liegt erhöht am östlichen Rand von Bad Vilbel und bietet traumhafte Ausblicke ins Grüne. Der Stadtteil ist besonders bei Naturliebhabern und Ruhesuchenden beliebt. Streuobstwiesen und Wanderwege beginnen direkt vor der Haustür – und trotzdem ist die S-Bahn in wenigen Busminuten erreichbar.",
    bullets: [
      "Busanbindung zur S-Bahn-Station Bad Vilbel",
      "Kita und Spielplätze im Stadtteil",
      "Streuobstwiesen und Wanderwege direkt erreichbar",
      "Ruhige Wohnstraßen mit überwiegend Einfamilienhäusern",
      "Nahversorgung über Kernstadt (5 Min. Auto/Bus)",
      "Panoramablick über die Nidda-Auen",
    ],
    charakter:
      "Heilsberg besticht durch seine Hanglage mit Weitblick über die Nidda-Auen und die Wetterau. Ruhige Wohnstraßen, viel Grün und eine familiäre Atmosphäre prägen den Stadtteil. Die Bebauung besteht überwiegend aus Einfamilien- und kleinen Mehrfamilienhäusern in gehobener Wohnlage.",
    preise:
      "Die Mietpreise in Heilsberg bewegen sich zwischen 13 und 16 €/m². Die ruhige Höhenlage und der Grünblick machen Heilsberg trotz der etwas weiteren S-Bahn-Entfernung attraktiv. Eine 2-Zimmer-Wohnung mit 55 m² kostet etwa 715 bis 880 € Kaltmiete.",
    priceRange: "13–16 €/m²",
    characterShort: "Grüne Höhenlage",
    neighbors: ["bad-vilbel-kernstadt", "bad-vilbel-massenheim"],
  },
  {
    slug: "bad-vilbel-gronau",
    name: "Gronau",
    tagline: "ländlich wohnen nahe Frankfurt",
    sbahn: "Bus zur S-Bahn-Station Bad Vilbel",
    sbahnTime: "30–35 Minuten nach Frankfurt HBF",
    sbahnTimeShort: "30–35 Min.",
    intro:
      "Gronau liegt nördlich der Kernstadt und besticht durch seine dörfliche Atmosphäre direkt an den Nidda-Auen. Der Stadtteil bietet die günstigsten S-Bahn-nahen Mietpreise in Bad Vilbel und ist ideal für Naturliebhaber, die den Nidda-Radweg und die Feldlandschaft schätzen.",
    bullets: [
      "Busanbindung ins Zentrum von Bad Vilbel",
      "Nidda-Auen und Nidda-Radweg direkt erreichbar",
      "Dorfcharakter mit aktiver Vereinskultur",
      "Grundversorgung im Ort",
      "Radweg-Verbindung nach Frankfurt (ca. 14 km)",
      "Feldlandschaft und Naherholung",
    ],
    charakter:
      "Gronau hat sich seinen dörflichen Charakter bewahrt. Die Nidda-Auen und der Nidda-Radweg verlaufen direkt am Stadtteil vorbei und bieten hervorragende Möglichkeiten für Radfahrer und Spaziergänger. Die Feldlandschaft rund um Gronau lädt zur Erholung ein.",
    preise:
      "Gronau bietet die günstigsten S-Bahn-nahen Mietpreise in Bad Vilbel: zwischen 13 und 15 €/m². Für eine 3-Zimmer-Wohnung mit 75 m² zahlen Sie hier etwa 975 bis 1.125 € Kaltmiete – deutlich günstiger als in der Kernstadt.",
    priceRange: "13–15 €/m²",
    characterShort: "Dörflich & günstig",
    neighbors: ["bad-vilbel-dortelweil", "bad-vilbel-massenheim"],
  },
  {
    slug: "bad-vilbel-massenheim",
    name: "Massenheim",
    tagline: "Weinberge und Wetterau-Tradition",
    sbahn: "Bus zur S-Bahn + B3 Richtung Frankfurt",
    sbahnTime: "35–40 Minuten nach Frankfurt HBF",
    sbahnTimeShort: "35–40 Min.",
    intro:
      "Massenheim liegt im Westen von Bad Vilbel und verbindet ländliche Wetterau-Tradition mit guter Autoanbindung an Frankfurt. Weinberge, Streuobstwiesen und eine aktive Dorfgemeinschaft prägen den Charakter dieses eigenständigen Stadtteils.",
    bullets: [
      "Busanbindung nach Bad Vilbel + B3 Richtung Frankfurt",
      "Eigene Grundschule und Kindergarten",
      "Weinberge und Streuobstwiesen",
      "Aktive Dorfgemeinschaft und Vereine",
      "Nahversorgung mit Bäcker und Lebensmittelgeschäft",
      "Gute Autoanbindung über B3 und A5",
    ],
    charakter:
      "Massenheim hat eine lange Weinbautradition und ist stolz auf seine dörfliche Identität. Die Weinberge und Streuobstwiesen rund um den Ort bieten eine einzigartige Kulturlandschaft. Der Stadtteil verfügt über eine eigene Grundschule und Nahversorgung.",
    preise:
      "Massenheim bietet die günstigsten Mietpreise in Bad Vilbel mit Autoanbindung: zwischen 12 und 15 €/m². Eine 3-Zimmer-Wohnung mit 75 m² kostet hier etwa 900 bis 1.125 € Kaltmiete. Ideal für Familien, die Platz und Natur schätzen.",
    priceRange: "12–15 €/m²",
    characterShort: "Weinberge",
    neighbors: ["bad-vilbel-heilsberg", "bad-vilbel-gronau"],
  },
  {
    slug: "bad-vilbel-soedel",
    name: "Södel",
    tagline: "Dorfidylle im Wetteraukreis",
    sbahn: "Bus nach Bad Vilbel Kernstadt",
    sbahnTime: "35–42 Minuten nach Frankfurt HBF",
    sbahnTimeShort: "35–42 Min.",
    intro:
      "Södel ist der kleinste und nördlichste Ortsteil von Bad Vilbel. Das idyllische Dorf mit seiner Dorfkirche und dem kleinen Teich bietet maximale Ruhe in der Wetterauer Feldlandschaft. Wer eine günstige Wohnung in Bad Vilbel sucht und auf dem Land leben möchte, findet in Södel die seltensten und preiswertesten Angebote.",
    bullets: [
      "Busverbindung nach Bad Vilbel Kernstadt",
      "Dorfkirche und dörfliche Gemeinschaft",
      "Wetterauer Feldlandschaft und Streuobstwiesen",
      "Nahversorgung über Bad Vilbel (10 Min. Auto)",
      "Kleiner Teich und Grünflächen",
      "Ruhe und Abgeschiedenheit vom Stadtleben",
    ],
    charakter:
      "Södel ist ein typisches Wetterau-Dorf mit eigenständigem Charakter. Die Dorfkirche, der kleine Teich und die umgebende Feldlandschaft prägen das Bild. Hier lebt man ruhig und ländlich – mit der Möglichkeit, über Bad Vilbel nach Frankfurt zu pendeln.",
    preise:
      "Södel bietet die günstigsten Mietpreise in Bad Vilbel: zwischen 11 und 14 €/m². Wohnungsangebote sind hier allerdings selten. Eine 2-Zimmer-Wohnung mit 55 m² kostet etwa 605 bis 770 € Kaltmiete.",
    priceRange: "11–14 €/m²",
    characterShort: "Dorfidylle",
    neighbors: ["bad-vilbel-gronau", "bad-vilbel-massenheim"],
  },
];

export const stadtteilBySlug = (slug: string) =>
  stadtteile.find((s) => s.slug === slug);

export const stadtteilSlugs = stadtteile.map((s) => s.slug);
