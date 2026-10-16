// Live open / closed status in the shop's own time zone, derived from BUSINESS.hours.
import { BUSINESS } from "./business";

const TZ = "America/New_York";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toMinutes(t: string): number | null {
  const m = t.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let h = parseInt(m[1], 10) % 12;
  if (m[3].toUpperCase() === "PM") h += 12;
  return h * 60 + parseInt(m[2], 10);
}

function short(t: string): string {
  // "11:00 PM" -> "11 PM", "11:30 PM" -> "11:30 PM"
  return t.replace(":00", "");
}

export type OpenStatus = { open: boolean; label: string; todayIndex: number };

export function openStatus(now: Date = new Date()): OpenStatus {
  let day = now.getDay();
  let mins = now.getHours() * 60 + now.getMinutes();
  try {
    const p: Record<string, string> = {};
    new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "short", hour: "numeric", minute: "numeric", hour12: false })
      .formatToParts(now)
      .forEach((x) => (p[x.type] = x.value));
    day = DAYS.indexOf(p.weekday);
    mins = (parseInt(p.hour, 10) % 24) * 60 + parseInt(p.minute, 10);
  } catch {}

  const row = BUSINESS.hours.find((h) => h.day === DAYS[day]);
  const todayIndex = BUSINESS.hours.findIndex((h) => h.day === DAYS[day]);
  const o = row ? toMinutes(row.open) : null;
  const c = row ? toMinutes(row.close) : null;

  if (o !== null && c !== null && mins >= o && mins < c) {
    return { open: true, label: `Open now · until ${short(row!.close)}`, todayIndex };
  }
  if (o !== null && mins < o) {
    return { open: false, label: `Opens today at ${short(row!.open)}`, todayIndex };
  }
  const next = BUSINESS.hours.find((h) => h.day === DAYS[(day + 1) % 7]);
  return { open: false, label: next && toMinutes(next.open) !== null ? `Closed · opens ${short(next.open)}` : "Closed now", todayIndex };
}
