import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "roomluxe.de – Wohnung mieten Bad Vilbel privat & provisionsfrei";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
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
              letterSpacing: "-0.01em",
            }}
          >
            roomluxe.de
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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
            Wohnung mieten · Bad Vilbel
          </div>
          <div
            style={{
              color: "#2c2318",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            Persönlich betreut,{" "}
            <span style={{ fontStyle: "italic", color: "#8d6620" }}>
              provisionsfrei
            </span>{" "}
            und sofort verfügbar
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
          <div>Privat vermietet · 20 Min. nach Frankfurt</div>
          <div style={{ color: "#b8862a", fontWeight: 600 }}>roomluxe.de</div>
        </div>
      </div>
    ),
    size,
  );
}
