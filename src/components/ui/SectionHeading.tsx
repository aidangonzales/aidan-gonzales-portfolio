type SectionHeadingProps = {
  /** Small label shown above the heading. */
  eyebrow?: string;
  /** Main heading text. */
  title: string;
  /** Optional supporting text under the heading. */
  description?: string;
  className?: string;
};

/**
 * Reusable section heading (eyebrow + title + description).
 * Used by the Section wrapper and by column blocks that need a heading
 * without the full Section container/padding (e.g. the Education/Experience band).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
