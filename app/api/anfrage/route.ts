import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { getDb, schema } from "@/lib/db/client";
import { site } from "@/lib/site";
import { wohnungBySlug } from "@/lib/data/wohnungen";

export const runtime = "nodejs";

const Body = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().nullable(),
  subject: z.string().max(200).optional().nullable(),
  message: z.string().max(5000).optional().nullable(),
  moveInDate: z.string().optional().nullable(),
  dsgvo: z.union([z.literal("on"), z.boolean(), z.literal("true")]).optional(),
  wohnungSlug: z.string().max(128).optional().nullable(),
  // Honeypot: muss leer sein
  website: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const parsed = Body.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder korrekt ausfüllen." },
      { status: 400 },
    );
  }
  const data = parsed.data;
  if (data.website) {
    // Honeypot triggered → silently 200
    return NextResponse.json({ ok: true });
  }

  const wohnung = data.wohnungSlug ? wohnungBySlug(data.wohnungSlug) : null;
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    null;
  const userAgent = req.headers.get("user-agent") ?? null;
  const sourceUrl = req.headers.get("referer");

  // 1) DB-Log
  const db = getDb();
  if (db) {
    try {
      await db.insert(schema.anfragen).values({
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        subject: data.subject ?? null,
        message: data.message ?? null,
        moveInDate: data.moveInDate ?? null,
        wohnungSlug: data.wohnungSlug ?? null,
        sourceUrl: sourceUrl ?? null,
        ip,
        userAgent,
        raw: payload as Record<string, unknown>,
      });
    } catch (e) {
      console.error("DB write failed", e);
    }
  }

  // 2) Mail via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const wohnungLine = wohnung
        ? `Wohnung: ${wohnung.shortTitle} (${wohnung.stadtteilName})\nLink: ${site.url}/wohnung/${wohnung.slug}\n\n`
        : "";
      await resend.emails.send({
        from: process.env.RESEND_FROM ?? "roomluxe.de <noreply@roomluxe.de>",
        to: site.email,
        replyTo: data.email,
        subject: `Neue Anfrage von ${data.name}${wohnung ? ` – ${wohnung.shortTitle}` : ""}`,
        text: [
          `${wohnungLine}Name: ${data.name}`,
          `E-Mail: ${data.email}`,
          data.phone ? `Telefon: ${data.phone}` : null,
          data.subject ? `Betreff: ${data.subject}` : null,
          data.moveInDate ? `Wunschtermin: ${data.moveInDate}` : null,
          "",
          "Nachricht:",
          data.message ?? "(keine Nachricht)",
          "",
          "---",
          `IP: ${ip ?? "?"}`,
          `Quelle: ${sourceUrl ?? "?"}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (e) {
      console.error("Mail send failed", e);
      // Wir antworten trotzdem 200 — DB-Log ist da
    }
  }

  return NextResponse.json({ ok: true });
}
