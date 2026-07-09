import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const alt = `${siteConfig.name} — Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Programmatically generated Open Graph image for social sharing.
 * Dark, minimal, tech-focused layout with a burnt-orange accent.
 * Pulls from `siteConfig`, so it stays in sync with your details.
 */
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
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: accent bar + role */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 8,
              background: "#bf5700",
              borderRadius: 4,
              marginRight: 24,
            }}
          />
          <div
            style={{
              fontSize: 30,
              color: "#ff7a1a",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            {siteConfig.role}
          </div>
        </div>

        {/* Middle: name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              color: "#ffffff",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#9ca3af",
              marginTop: 28,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        {/* Bottom: location + portfolio label */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#6b7280",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.location}</div>
          <div style={{ display: "flex", color: "#ff7a1a", fontWeight: 600 }}>
            Portfolio
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
