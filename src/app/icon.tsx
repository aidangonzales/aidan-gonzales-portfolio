import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

// Icon metadata
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

/**
 * Programmatically generated favicon: burnt-orange rounded square with the
 * user's initials. Derived from `siteConfig.name`, so it updates automatically.
 */
export default function Icon() {
  const initials = siteConfig.name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#bf5700",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        {initials}
      </div>
    ),
    { ...size },
  );
}
