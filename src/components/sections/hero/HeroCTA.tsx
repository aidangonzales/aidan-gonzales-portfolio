import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

/**
 * Hero call-to-action buttons.
 * Primary: View Projects (scrolls to #projects)
 * Secondary: Download Resume (opens PDF in new tab)
 *
 * Responsive layout: stacks vertically on mobile, horizontal on tablet+.
 */
export default function HeroCTA() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Link
        href="#projects"
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:text-base"
      >
        View Projects
      </Link>
      <Link
        href={siteConfig.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center rounded-full border-2 border-border px-8 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:text-base"
      >
        Download Resume
      </Link>
    </div>
  );
}
