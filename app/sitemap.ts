import { MetadataRoute } from "next";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/ratgeber`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...stadtteile.map((s) => ({
      url: `${site.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...seoHubs.map((h) => ({
      url: `${site.url}/${h.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...wohnungen.map((w) => ({
      url: `${site.url}/wohnung/${w.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...ratgeber.map((a) => ({
      url: `${site.url}/ratgeber/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
