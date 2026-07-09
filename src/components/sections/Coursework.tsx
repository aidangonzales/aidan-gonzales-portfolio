import Section from "@/components/ui/Section";
import { coursework } from "@/data/portfolio";

export default function Coursework() {
  return (
    <Section
      id="coursework"
      eyebrow="Schoolwork"
      title="Relevant coursework"
      description="Courses and academic work from my ECE studies at UT Austin."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {coursework.map((course) => (
          <article
            key={course.code}
            className="rounded-xl border border-border p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-semibold text-accent">
                {course.code}
              </span>
              <h3 className="font-semibold tracking-tight">{course.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {course.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
