import Section from "@/components/ui/Section";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Featured Projects"
      description="A selection of my technical projects spanning embedded systems, computer architecture, and hardware/software integration."
    >
      <ProjectGrid />
    </Section>
  );
}
