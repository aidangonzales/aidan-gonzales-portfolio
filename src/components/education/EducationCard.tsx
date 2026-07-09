type EducationCardProps = {
  university: string;
  location: string;
  dateRange: string;
  degree: string;
  gpa: string;
  relevantCoursework: string[];
  plannedCoursework: string[];
};

/**
 * Education card displaying degree, GPA, and coursework with pill badges.
 * Highlights GPA prominently and groups coursework by relevant/planned.
 */
export default function EducationCard({
  university,
  location,
  dateRange,
  degree,
  gpa,
  relevantCoursework,
  plannedCoursework,
}: EducationCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent">
      {/* Header: University + Location */}
      <div className="mb-2">
        <h3 className="text-xl font-semibold tracking-tight">{university}</h3>
        <p className="text-sm text-muted">
          {location} • {dateRange}
        </p>
      </div>

      {/* Degree */}
      <p className="mb-3 text-base font-medium">{degree}</p>

      {/* GPA - Prominent display */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
        <span className="text-sm font-medium text-muted">GPA:</span>
        <span className="text-lg font-bold text-accent">{gpa}</span>
      </div>

      {/* Relevant Coursework */}
      {relevantCoursework.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">
            Relevant Coursework
          </h4>
          <ul className="flex flex-wrap gap-2">
            {relevantCoursework.map((course) => (
              <li
                key={course}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Planned Coursework */}
      {plannedCoursework.length > 0 && (
        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">
            Planned Coursework
          </h4>
          <ul className="flex flex-wrap gap-2">
            {plannedCoursework.map((course) => (
              <li
                key={course}
                className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
