import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import experienceData from "@/data/experience.json";

/**
 * Experience column block displaying work history and roles.
 * Designed to sit in the shared Education/Experience band (see app/page.tsx),
 * so it renders a heading + content without its own container/padding.
 */
export default function Experience() {
  return (
    <div id="experience" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Experience"
        title="Work & Leadership"
        description="My professional experience and leadership roles in engineering teams."
        className="mb-8"
      />
      <ExperienceTimeline experiences={experienceData} />
    </div>
  );
}
