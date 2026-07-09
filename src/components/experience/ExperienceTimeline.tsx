type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  dateRange: string;
  bullets: string[];
};

type ExperienceTimelineProps = {
  experiences: ExperienceEntry[];
};

/**
 * Vertical timeline component for experience entries.
 * Displays role, company, date range, and bullet points with a visual timeline.
 */
export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  return (
    <ol className="relative space-y-8 border-l-2 border-border pl-8">
      {experiences.map((exp) => (
        <li key={exp.id} className="relative">
          {/* Timeline dot */}
          <span
            aria-hidden="true"
            className="absolute -left-[2.3rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>

          {/* Content */}
          <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {exp.role}
              </h3>
              <p className="text-base font-medium text-accent">{exp.company}</p>
            </div>
            <span className="text-sm font-medium text-muted">
              {exp.dateRange}
            </span>
          </div>

          {/* Bullet points */}
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {exp.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="flex gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
