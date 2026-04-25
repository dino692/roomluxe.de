import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wohnung mieten Bad Vilbel – privat & provisionsfrei",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.company.legal }],
  creator: site.company.legal,
  publisher: site.company.legal,
  keywords: [
    "Wohnung mieten Bad Vilbel",
    "Mietwohnung Bad Vilbel",
    "Wohnung privat",
    "ohne Makler",
    "ohne Provision",
    "Möblierte Wohnung Frankfurt",
    "Wohnen auf Zeit",
    "Monteurwohnung",
    "Pendeln Frankfurt",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "Wohnung mieten Bad Vilbel – privat & provisionsfrei",
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.company.legal,
      url: site.url,
      logo: `${site.url}/icon`,
      email: site.email,
      telephone: site.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.company.street,
        postalCode: site.company.zip,
        addressLocality: site.company.city,
        addressCountry: "DE",
      },
      founder: site.company.representatives
        .split(/\s*&\s*/)
        .map((n) => ({ "@type": "Person", name: n })),
      areaServed: [
        { "@type": "City", name: "Bad Vilbel" },
        { "@type": "City", name: "Frankfurt am Main" },
        { "@type": "City", name: "Karben" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "de-DE",
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${dmSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page-glow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
