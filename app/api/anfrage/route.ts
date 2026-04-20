import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { ServerClient as PostmarkClient } from "postmark";
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

  // 2) Mail — Postmark primär, Resend als Fallback
  const wohnungLine = wohnung
    ? `Wohnung: ${wohnung.shortTitle} (${wohnung.stadtteilName})\nLink: ${site.url}/wohnung/${wohnung.slug}\n\n`
    : "";
  const subject = `Neue Anfrage von ${data.name}${wohnung ? ` – ${wohnung.shortTitle}` : ""}`;
  const textBody = [
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
    .join("\n");
  const htmlBody = buildHtmlBody({
    name: data.name,
    email: data.email,
    phone: data.phone ?? undefined,
    subject: data.subject ?? undefined,
    moveInDate: data.moveInDate ?? undefined,
    message: data.message ?? undefined,
    wohnungTitle: wohnung?.shortTitle,
    wohnungStadtteil: wohnung?.stadtteilName,
    wohnungUrl: wohnung ? `${site.url}/wohnung/${wohnung.slug}` : undefined,
    siteUrl: site.url,
    siteName: site.name,
  });

  const postmarkToken = process.env.POSTMARK_SERVER_TOKEN;
  const resendKey = process.env.RESEND_API_KEY;
  let mailSent = false;

  if (postmarkToken) {
    try {
      const client = new PostmarkClient(postmarkToken);
      await client.sendEmail({
        From: process.env.POSTMARK_FROM ?? "noreply@roomluxe.de",
        To: site.email,
        ReplyTo: data.email,
        Subject: subject,
        TextBody: textBody,
        HtmlBody: htmlBody,
        MessageStream: process.env.POSTMARK_STREAM ?? "outbound",
      });
      mailSent = true;
    } catch (e) {
      const err = e as { code?: number; message?: string; statusCode?: number };
      console.error(
        `Postmark send failed | code=${err.code ?? "?"} status=${err.statusCode ?? "?"} msg=${err.message ?? String(e)}`,
      );
    }
  }

  if (!mailSent && resendKey) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM ?? "roomluxe.de <noreply@roomluxe.de>",
        to: site.email,
        replyTo: data.email,
        subject,
        text: textBody,
        html: htmlBody,
      });
    } catch (e) {
      console.error("Resend send failed", e);
      // DB-Log ist da → trotzdem 200
    }
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtmlBody(d: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  moveInDate?: string;
  message?: string;
  wohnungTitle?: string;
  wohnungStadtteil?: string;
  wohnungUrl?: string;
  siteUrl: string;
  siteName: string;
}): string {
  const gold = "#b8862a";
  const goldDark = "#8d6620";
  const ink900 = "#2c2318";
  const ink700 = "#4a3d2c";
  const ink500 = "#6e5d44";
  const cream50 = "#fffdf8";
  const cream200 = "#f0e8da";
  const pageBg = "#faf6f0";

  const e = escapeHtml;
  const row = (label: string, value?: string, isHtml = false) =>
    value
      ? `
      <tr>
        <td style="padding:0 0 6px 0;font-size:12px;font-weight:700;color:${goldDark};text-transform:uppercase;letter-spacing:0.06em;font-family:Georgia,'Times New Roman',serif;">${e(label)}</td>
      </tr>
      <tr>
        <td style="padding:0 0 16px 0;">
          <div style="background:${cream50};border:1px solid ${cream200};border-radius:10px;padding:14px 16px;font-size:15px;color:${ink900};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;word-break:break-word;">${isHtml ? value : e(value)}</div>
        </td>
      </tr>`
      : "";

  const wohnungRow =
    d.wohnungTitle && d.wohnungUrl
      ? row(
          "Interessiert an Wohnung",
          `<strong>${e(d.wohnungTitle)}</strong>${d.wohnungStadtteil ? ` · ${e(d.wohnungStadtteil)}` : ""}<br/><a href="${e(d.wohnungUrl)}" style="color:${gold};text-decoration:underline;">${e(d.wohnungUrl)}</a>`,
          true,
        )
      : "";

  const messageValue = d.message
    ? e(d.message).replace(/\n/g, "<br/>")
    : "<em>(keine Nachricht)</em>";

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Neue Kontaktanfrage</title>
</head>
<body style="margin:0;padding:0;background:${pageBg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${ink900};">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${pageBg};padding:24px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${cream50};border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(44,35,24,0.06);">
        <tr>
          <td style="background:${gold};padding:40px 32px;text-align:center;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,253,248,0.75);margin-bottom:10px;">${e(d.siteName)}</div>
            <h1 style="margin:0;color:${cream50};font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:700;letter-spacing:-0.01em;">Neue Kontaktanfrage</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              ${wohnungRow}
              ${row("Name", d.name)}
              ${row("E-Mail", `<a href="mailto:${e(d.email)}" style="color:${gold};text-decoration:none;">${e(d.email)}</a>`, true)}
              ${row("Telefon", d.phone ?? "Nicht angegeben")}
              ${row("Betreff", d.subject)}
              ${row("Wunschtermin", d.moveInDate)}
              <tr>
                <td style="padding:0 0 6px 0;font-size:12px;font-weight:700;color:${goldDark};text-transform:uppercase;letter-spacing:0.06em;font-family:Georgia,'Times New Roman',serif;">Nachricht</td>
              </tr>
              <tr>
                <td style="padding:0;">
                  <div style="background:${cream50};border:1px solid ${cream200};border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.55;color:${ink700};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">${messageValue}</div>
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;padding-top:20px;border-top:1px solid ${cream200};text-align:center;">
              <p style="margin:0;font-size:12px;color:${ink500};">Antworte direkt auf diese E-Mail, um dem Interessenten zu schreiben.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 24px;text-align:center;background:${pageBg};">
            <p style="margin:0;font-size:11px;color:${ink500};">Diese E-Mail wurde über das Kontaktformular auf <a href="${e(d.siteUrl)}" style="color:${ink700};text-decoration:underline;">${e(d.siteName)}</a> gesendet.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}
