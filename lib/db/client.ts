// Neon Postgres Client (HTTP — edge-kompatibel)
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let _sql: NeonQueryFunction<false, false> | null = null;
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

/**
 * Lazy-init DB. Returns null wenn DATABASE_URL nicht gesetzt ist
 * (z. B. lokal ohne Neon-Verbindung) — Code muss auf null prüfen.
 */
export function getDb() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  _sql = neon(url);
  _db = drizzle(_sql, { schema });
  return _db;
}

export { schema };
