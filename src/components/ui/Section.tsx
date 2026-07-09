import type { ReactNode } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type SectionProps = {
  /** Anchor id used for in-page navigation (e.g. "projects"). */
  id: string;
  /** Small label shown above the heading. */
  eyebrow?: string;
  /** Main section heading. */
  title: string;
  /** Optional supporting text under the heading. */
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Consistent, reusable section wrapper. Standalone content blocks
 * (About, Projects, ...) are composed from this so spacing, headings, and
 * scroll anchors stay uniform. It's also a natural seam for adding
 * scroll-triggered animations later.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-12"
        />
        {children}
      </Container>
    </section>
  );
}
