import { MetadataRoute } from "next";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";
import { site } from "@/lib/site";

// Realistische lastmod-Daten statt "now" — Google ignoriert Always-now-Sitemaps.
// Bei echter Content-Änderung diese Konstanten anpassen.
const LAUNCH_DATE = new Date("2026-04-19");
const STADTTEIL_CONTENT_DATE = new Date("2026-04-19");
const HUB_CONTENT_DATE = new Date("2026-04-19");
const WOHNUNG_CONTENT_DATE = new Date("2026-04-19");
// Homepage und Ratgeber-Übersicht werden bei jedem Deploy als "aktuell" gewertet,
// aber wir nehmen das jüngste tatsächliche Änderungs-Datum.
const SITE_LAST_UPDATED = new Date("2026-05-05");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/kontakt`, lastModified: LAUNCH_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/ratgeber`, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/seitenuebersicht`, lastModified: SITE_LAST_UPDATED, changeFrequency: "weekly", priority: 0.5 },
    // Note: /impressum and /datenschutz are noindex (legal pages) — not in sitemap.
    ...stadtteile.map((s) => ({
      url: `${site.url}/${s.slug}`,
      lastModified: STADTTEIL_CONTENT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...seoHubs.map((h) => ({
      url: `${site.url}/${h.slug}`,
      lastModified: HUB_CONTENT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...wohnungen.map((w) => ({
      url: `${site.url}/wohnung/${w.slug}`,
      lastModified: WOHNUNG_CONTENT_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...ratgeber.map((a) => ({
      url: `${site.url}/ratgeber/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
