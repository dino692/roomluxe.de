// Drizzle Schema — Postgres (Neon)
import {
  pgTable,
  serial,
  text,
  timestamp,
  date,
  varchar,
  jsonb,
  index,
} from "drizzle-orm/pg-core";

// Eingehende Kontaktanfragen / Besichtigungsanfragen
export const anfragen = pgTable(
  "anfragen",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    subject: text("subject"),
    moveInDate: date("move_in_date"),
    message: text("message"),
    wohnungSlug: varchar("wohnung_slug", { length: 128 }),
    sourceUrl: text("source_url"),
    ip: varchar("ip", { length: 64 }),
    userAgent: text("user_agent"),
    status: varchar("status", { length: 32 }).default("new").notNull(), // new | contacted | done | spam
    raw: jsonb("raw"),
  },
  (t) => [
    index("anfragen_created_idx").on(t.createdAt),
    index("anfragen_wohnung_idx").on(t.wohnungSlug),
  ],
);

// Cache der Verfügbarkeits-Daten pro Wohnung
// Wird vom iCal-Sync-Job befüllt; gelesen von /api/availability/:slug
export const verfuegbarkeit = pgTable(
  "verfuegbarkeit",
  {
    id: serial("id").primaryKey(),
    wohnungSlug: varchar("wohnung_slug", { length: 128 }).notNull(),
    blockedDate: date("blocked_date").notNull(),
    source: varchar("source", { length: 64 }).notNull(), // airbnb | booking | manual | …
    syncedAt: timestamp("synced_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("verfuegbarkeit_slug_date_idx").on(t.wohnungSlug, t.blockedDate),
  ],
);

export type Anfrage = typeof anfragen.$inferSelect;
export type NewAnfrage = typeof anfragen.$inferInsert;
export type Verfuegbarkeit = typeof verfuegbarkeit.$inferSelect;
