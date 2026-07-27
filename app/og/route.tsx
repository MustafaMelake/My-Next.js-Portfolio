import { ImageResponse } from "next/og";
import { SITE_NAME, GOLD } from "@/lib/site";

/**
 * Dynamic Open Graph image generator. Renders a 1200x630 branded card from a
 * `title` and `category` query string (with an optional `demo` flag), matching
 * the site's dark-panel + gold visual language. Referenced from page metadata
 * via `ogImageUrl()`.
 */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? SITE_NAME).slice(0, 120);
  const category = (
    searchParams.get("category") ?? "Full-Stack Engineer"
  ).slice(0, 80);
  const isDemo = searchParams.get("demo") === "1";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0d",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: GOLD,
              }}
            />
            <div
              style={{
                color: "#e5e5e5",
                fontSize: 26,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              {SITE_NAME}
            </div>
          </div>
          {isDemo ? (
            <div
              style={{
                display: "flex",
                border: `1px solid ${GOLD}`,
                color: GOLD,
                fontSize: 22,
                letterSpacing: 3,
                textTransform: "uppercase",
                padding: "8px 22px",
                borderRadius: 999,
              }}
            >
              Demo
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: GOLD,
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: 66,
              lineHeight: 1.12,
              fontWeight: 700,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 4, background: GOLD }} />
            <div style={{ color: "#8a8a8a", fontSize: 24 }}>
              Next.js · React · Prisma · PostgreSQL
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
