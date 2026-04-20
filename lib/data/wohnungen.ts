// Wohnungs-Inventar — Code-deploy basiert (kein Admin-Panel)
// Neue Wohnungen hier eintragen → Build & Deploy

export type SubRating = {
  label: string;
  value: number;
  max: 5;
};

export type Review = {
  name: string;
  date: string; // "März 2026"
  rating: number;
  text: string;
  memberSince?: string;
};

export type Host = {
  name: string;
  initials: string;
  superhost: boolean;
  yearsHosting: number;
  responseRate: number; // %
  responseTime: string; // "innerhalb einer Stunde"
  totalReviews: number;
  avgRating: number;
  bio?: string;
};

export type Wohnung = {
  slug: string;
  title: string;
  shortTitle: string;
  stadtteilSlug: string;
  stadtteilName: string;
  zip: string;
  geo: { lat: number; lng: number };
  status: "available" | "rented" | "soon";
  rentMode: "monthly" | "nightly";
  pricePerNight?: number;
  pricePerMonth?: number;
  extraGuestPrice?: number;
  maxGuests: number;
  rooms: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  sizeM2: number;
  floor: string;
  nebenkosten: number;
  kaution: number;
  availableFrom: string;
  minNights: number;
  checkInFrom: string; // "15:00"
  checkOutUntil: string; // "11:00"
  rating: number;
  reviewCount: number;
  subRatings?: SubRating[];
  ratingDistribution?: { stars: 1 | 2 | 3 | 4 | 5; percent: number }[];
  reviews?: Review[];
  host?: Host;
  isFavorite?: boolean;
  amenities: string[];
  amenitiesTotal?: number;
  highlights?: { title: string; body: string; icon?: string }[];
  energyClass: string;
  description: {
    intro: string;
    location: string;
    equipment: string;
    access?: string;
    rules?: string;
  };
  images: { src: string; alt: string }[];
  icalFeeds?: { name: string; url: string }[];
};

export const wohnungen: Wohnung[] = [
  {
    slug: "3-zimmer-kernstadt-balkon",
    title: "Zentral · Kingsize-Bett · WLAN · TV · Balkon · S-Bahn",
    shortTitle: "Zentral · Kingsize-Bett · WLAN · TV · Balkon · S-Bahn",
    stadtteilSlug: "bad-vilbel-kernstadt",
    stadtteilName: "Kernstadt",
    zip: "61118",
    geo: { lat: 50.178, lng: 8.738 },
    status: "available",
    rentMode: "nightly",
    pricePerNight: 99,
    extraGuestPrice: 10,
    maxGuests: 4,
    rooms: 3,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    sizeM2: 75,
    floor: "2. von 4",
    nebenkosten: 0,
    kaution: 0,
    availableFrom: "2026-04-15",
    minNights: 3,
    checkInFrom: "15:00",
    checkOutUntil: "11:00",
    rating: 4.82,
    reviewCount: 74,
    subRatings: [
      { label: "Sauberkeit", value: 4.9, max: 5 },
      { label: "Genauigkeit der Angaben", value: 4.9, max: 5 },
      { label: "Check-in", value: 4.7, max: 5 },
      { label: "Kommunikation", value: 4.8, max: 5 },
      { label: "Lage", value: 4.8, max: 5 },
      { label: "Preis-Leistungs-Verhältnis", value: 4.8, max: 5 },
    ],
    ratingDistribution: [
      { stars: 5, percent: 84 },
      { stars: 4, percent: 15 },
      { stars: 3, percent: 1 },
      { stars: 2, percent: 0 },
      { stars: 1, percent: 0 },
    ],
    reviews: [
      {
        name: "Alex",
        date: "Februar 2026",
        rating: 5,
        memberSince: "5 Jahre auf Airbnb",
        text:
          "Sehr geräumiges und sauberes Apartment mit großer Küche. Die Lage ist super, der Bahnhof ist 5 Minuten zu Fuß entfernt – schnelle Anbindung nach Frankfurt. In wenigen Gehminuten gibt es zusätzlich einen großen kostenlosen Parkplatz.",
      },
      {
        name: "Jacob",
        date: "September 2025",
        rating: 5,
        memberSince: "11 Jahre auf Airbnb",
        text:
          "Die Wohnung ist makellos: super sauber, perfekt ausgestattet und dazu noch in der besten Lage der Stadt. Dino ist der perfekte Gastgeber – stets hilfsbereit und freundlich. Wir kommen sehr gerne wieder.",
      },
      {
        name: "Joana",
        date: "Juni 2025",
        rating: 5,
        memberSince: "3 Jahre auf Airbnb",
        text:
          "Unser Aufenthalt mit drei kleinen Kindern war super. Alles was eine Familie braucht, war vorhanden. Von den Nachbarn haben wir nichts mitbekommen. Die Sauberkeit war beeindruckend – ein wirklich toller Aufenthalt.",
      },
      {
        name: "Iuliia",
        date: "Juni 2025",
        rating: 5,
        memberSince: "1 Jahr auf Airbnb",
        text:
          "Ich war mit allem sehr zufrieden. Die Unterkunft war sehr sauber, großzügig geschnitten und ruhig. Die Verkehrsanbindung zum Frankfurter Hauptbahnhof ist sehr gut. Empfehlenswert!",
      },
      {
        name: "Vanessa",
        date: "Mai 2025",
        rating: 5,
        memberSince: "Neu auf Airbnb",
        text:
          "Der Aufenthalt war sehr schön und es hat an nichts gefehlt. Mir wurde auf Fragen sofort geantwortet, die Wohnung war leicht zu finden und der Check-in unkompliziert. In der Umgebung fehlt es an nichts.",
      },
      {
        name: "Kevin",
        date: "April 2025",
        rating: 4,
        memberSince: "4 Jahre auf Airbnb",
        text:
          "Sehr schöne und gemütliche Unterkunft – alles wie beschrieben, freundlicher Kontakt zum Gastgeber. Die Lage rund um den Kurpark ist wirklich toll und bietet viele Möglichkeiten zum Spazieren.",
      },
    ],
    host: {
      name: "Dino",
      initials: "D",
      superhost: true,
      yearsHosting: 2,
      responseRate: 100,
      responseTime: "innerhalb einer Stunde",
      totalReviews: 109,
      avgRating: 4.74,
      bio:
        "Hallo, ich bin Dino aus Frankfurt am Main. Ich freue mich darauf, Sie in Bad Vilbel willkommen zu heißen – persönlich, unkompliziert und jederzeit erreichbar.",
    },
    isFavorite: true,
    amenities: [
      "WLAN",
      "TV",
      "Einbauküche",
      "Waschmaschine",
      "Trockner",
      "Badewanne",
      "Balkon",
      "Arbeitsplatz",
      "Kingsize-Betten",
      "Schlafsofa",
      "Parkett",
      "Schlüsselbox Check-in",
      "Kostenfreie Parkplätze",
      "Rauchmelder",
    ],
    amenitiesTotal: 47,
    highlights: [
      {
        title: "Eigenständiger Check-in",
        body: "Anreise jederzeit – per Schlüsselbox, auch spät abends.",
        icon: "key",
      },
      {
        title: "Ruhige & praktische Lage",
        body: "Laut Gästen friedlich und einfach zurechtzufinden.",
        icon: "map",
      },
      {
        title: "Arbeitsplatz mit WLAN",
        body: "Eigenes Zimmer mit Schreibtisch und schnellem Internet.",
        icon: "briefcase",
      },
      {
        title: "Blitzsauber",
        body: "Von unseren Gästen durchgehend als besonders sauber bewertet (4,9 / 5).",
        icon: "sparkles",
      },
    ],
    energyClass: "B",
    description: {
      intro:
        "Stilvolle 3-Zimmer-Wohnung in der Kernstadt von Bad Vilbel – nur 5 Gehminuten vom Bahnhof entfernt. Ideal für Geschäftsreisen, Familien-Aufenthalte und alle, die Ruhe mit schneller Frankfurt-Anbindung verbinden möchten.",
      location:
        "Die Wohnung liegt in zentraler Lage, nur 5 Gehminuten vom S-Bahnhof Bad Vilbel entfernt. Mit der S6 erreichen Sie die Frankfurter Messe in rund 25 Minuten, den Frankfurter Hauptbahnhof sogar noch schneller. Kurpark, Einkaufsmöglichkeiten und die Nidda-Auen sind fußläufig erreichbar.",
      equipment:
        "Zwei Schlafzimmer jeweils mit Kingsize-Doppelbett, ein Wohnzimmer mit Schlafsofa, eine voll ausgestattete Einbauküche und ein Bad mit Badewanne. Waschmaschine und Trockner stehen kostenlos zur Verfügung. Der Balkon bietet einen gemütlichen Blick auf die Stadt und Raum zum Entspannen.",
      access:
        "Sie erhalten Zugang zur gesamten Wohnung. Der Check-in erfolgt eigenständig per Schlüsselbox – wir informieren Sie vorab mit allen Details.",
      rules:
        "Check-in ab 15:00 Uhr · Check-out bis 11:00 Uhr · Maximal 4 Gäste · Haustiere nach Absprache.",
    },
    images: [
      {
        src: "/images/wohnung/apt-01.jpg",
        alt: "Wohnzimmer mit Esstisch, Sofa und moderner TV-Wand",
      },
      {
        src: "/images/wohnung/apt-02.jpg",
        alt: "Wohnzimmer mit Schlafsofa und Blick zum Balkon",
      },
      {
        src: "/images/wohnung/apt-03.jpg",
        alt: "Wohnzimmer mit großer TV-Wand, Esstisch und Couchtisch",
      },
      {
        src: "/images/wohnung/apt-04.jpg",
        alt: "Schlafzimmer mit Kingsize-Boxspringbett und Kleiderschrank",
      },
      {
        src: "/images/wohnung/apt-05.jpg",
        alt: "Zweites Schlafzimmer mit Kingsize-Doppelbett",
      },
      {
        src: "/images/wohnung/apt-06.jpg",
        alt: "Zweites Schlafzimmer mit großzügigem Kleiderschrank",
      },
      {
        src: "/images/wohnung/apt-07.jpg",
        alt: "Voll ausgestattete Einbauküche mit Holzarbeitsplatte",
      },
      {
        src: "/images/wohnung/apt-08.jpg",
        alt: "Küche mit Kaffeemaschine, Wasserkocher und Toaster",
      },
      {
        src: "/images/wohnung/apt-09.jpg",
        alt: "Bad mit Badewanne, Waschmaschine und Trockner",
      },
      {
        src: "/images/wohnung/apt-10.jpg",
        alt: "Bereitgestellte Pflegeprodukte im Bad",
      },
      {
        src: "/images/wohnung/apt-11.jpg",
        alt: "Badewanne mit Miele Wasch- und Trockner-Turm",
      },
      {
        src: "/images/wohnung/apt-12.jpg",
        alt: "Überdachter Balkon mit Rattan-Sitzgruppe und Stadtblick",
      },
    ],
    icalFeeds: [
      {
        name: "airbnb",
        url: "https://www.airbnb.de/calendar/ical/1073139348902206203.ics?t=acf5439cb2594426a2b530ba473dcb34",
      },
    ],
  },
];

/**
 * Quelle eines iCal-Feed-Namens — bestimmt das Label im Sync-Status.
 */
export const feedLabels: Record<string, string> = {
  airbnb: "Airbnb",
  booking: "Booking.com",
  vrbo: "VRBO",
  manual: "Manuell",
};

export const wohnungBySlug = (slug: string) =>
  wohnungen.find((w) => w.slug === slug);

export const wohnungenInStadtteil = (stadtteilSlug: string) =>
  wohnungen.filter((w) => w.stadtteilSlug === stadtteilSlug);

export const availableWohnungen = () =>
  wohnungen.filter((w) => w.status === "available");
