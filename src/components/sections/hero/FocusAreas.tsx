import { siteConfig } from "@/data/portfolio";

/**
 * Technical focus areas grid.
 * Displays core competencies in a responsive grid (2 cols mobile, 4 desktop).
 * Edit `siteConfig.focusAreas` in portfolio.ts to customize the displayed areas.
 */
export default function FocusAreas() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {siteConfig.focusAreas.map((area) => (
        <div
          key={area}
          className="rounded-lg border border-border bg-surface/50 px-3 py-2.5 text-center text-sm font-medium transition-colors hover:border-accent sm:px-4 sm:py-3 sm:text-base"
        >
          {area}
        </div>
      ))}
    </div>
  );
}
