/**
 * Central site configuration. Values come from environment variables so they
 * can be changed per-deployment without touching code; each has a safe default
 * so local development and previews work with zero env setup.
 *
 * Env vars (all optional, all client-safe — hence NEXT_PUBLIC_):
 *   NEXT_PUBLIC_SITE_URL     Canonical production origin, no trailing slash.
 *                            Used for canonical tags, sitemap, and absolute OG
 *                            image URLs (P5).
 *   NEXT_PUBLIC_BOOKING_URL  Cal.com (or similar) booking link. When unset, the
 *                            booking CTAs gracefully fall back to the contact
 *                            section instead of pointing nowhere.
 */

/** Canonical production origin (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mustafamelake-portfolio.vercel.app"
).replace(/\/$/, "");

/** Booking link; empty string means "not configured — fall back to contact". */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

/**
 * Where a "book a call" action should point. Prefers the real booking link,
 * otherwise the on-page/home contact section so the button is never a dead end.
 */
export function bookingHref(fallback = "/#contact"): string {
  return BOOKING_URL || fallback;
}

/** Whether a real booking link is configured (controls CTA copy). */
export const HAS_BOOKING = BOOKING_URL.length > 0;

/**
 * Warm gold accent used across the site's "trust" motifs (see AboutSection).
 * Kept here so new components can reuse the exact brand value.
 */
export const GOLD = "#c9a96a";
