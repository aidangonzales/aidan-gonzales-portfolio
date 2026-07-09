import SectionHeading from "@/components/ui/SectionHeading";
import EducationCard from "@/components/education/EducationCard";
import educationData from "@/data/education.json";

/**
 * Education column block displaying academic background with coursework.
 * Designed to sit in the shared Education/Experience band (see app/page.tsx),
 * so it renders a heading + content without its own container/padding.
 */
export default function Education() {
  return (
    <div id="education" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Education"
        title="Academic Background"
        description="My formal education in Electrical and Computer Engineering."
        className="mb-8"
      />
      <div className="space-y-6">
        {educationData.map((edu) => (
          <EducationCard
            key={edu.id}
            university={edu.university}
            location={edu.location}
            dateRange={edu.dateRange}
            degree={edu.degree}
            gpa={edu.gpa}
            relevantCoursework={edu.relevantCoursework}
            plannedCoursework={edu.plannedCoursework}
          />
        ))}
      </div>
    </div>
  );
}
