import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";

/**
 * Responsive grid of project cards.
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 *
 * Featured projects span two columns. `grid-flow-dense` lets the remaining
 * single-width cards backfill the gaps next to featured cards so there are
 * no holes in the layout.
 *
 * Data source: src/data/projects.json
 */
export default function ProjectGrid() {
  return (
    <div className="grid grid-flow-dense gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          githubLink={project.githubLink || undefined}
          demoLink={project.demoLink || undefined}
          featured={project.featured}
        />
      ))}
    </div>
  );
}
