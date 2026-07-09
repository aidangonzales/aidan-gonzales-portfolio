import Section from "@/components/ui/Section";
import { internships } from "@/data/portfolio";

export default function Internships() {
  return (
    <Section
      id="internships"
      eyebrow="Experience"
      title="Internships"
      description="Where I've worked and what I contributed."
      className="bg-surface"
    >
      <ol className="relative space-y-10 border-l border-border pl-8">
        {internships.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            {/* Timeline dot */}
            <span
              aria-hidden="true"
              className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
            />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold tracking-tight">
                {item.role}{" "}
                <span className="text-accent">· {item.company}</span>
              </h3>
              <span className="text-sm font-medium text-muted">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
