import { ImageResponse } from "next/og";
import { stadtteilBySlug } from "@/lib/data/stadtteile";
import { seoHubBySlug } from "@/lib/data/seo-hubs";

export const runtime = "edge";
export const alt = "roomluxe.de";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { slug: string };

export default async function OgImage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const stadtteil = stadtteilBySlug(slug);
  const hub = seoHubBySlug(slug);

  let eyebrow = "Wohnung mieten · Bad Vilbel";
  let title = "Wohnungen in Bad Vilbel";
  let sub = "Privat vermietet · 20 Min. nach Frankfurt";

  if (stadtteil) {
    eyebrow = `Bad Vilbel · ${stadtteil.name}`;
    title = `Wohnung mieten in ${stadtteil.name}`;
    sub = `${stadtteil.sbahnTimeShort} nach Frankfurt · ${stadtteil.priceRange}`;
  } else if (hub) {
    eyebrow = hub.breadcrumbLabel;
    title = hub.h1.length > 70 ? `${hub.h1.slice(0, 67)}…` : hub.h1;
    sub = "Direkt vom privaten Vermieter · ohne Provision";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf6f0",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184, 134, 42, 0.12), transparent 70%)",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#b8862a",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fffdf8",
              fontSize: 40,
              fontStyle: "italic",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            r
          </div>
          <div
            style={{
              color: "#2c2318",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            roomluxe.de
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#b8862a",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "-apple-system, sans-serif",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "#2c2318",
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6e5d44",
            fontSize: 22,
            fontFamily: "-apple-system, sans-serif",
          }}
        >
          <div>{sub}</div>
          <div style={{ color: "#b8862a", fontWeight: 600 }}>roomluxe.de</div>
        </div>
      </div>
    ),
    size,
  );
}
