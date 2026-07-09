"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  featured?: boolean;
};

/**
 * Interactive project card with mouse-tracking spotlight and 3D tilt effect.
 * - Spotlight: radial gradient follows cursor position
 * - Tilt: card rotates subtly based on mouse position
 * - Hover: lifts card and intensifies effects
 * - Featured: spans two columns and shows a "Featured" badge
 */
export default function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
  featured = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Calculate 3D tilt based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalize to -1...1 range for smooth, responsive tilt
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    // Calculate rotation (max ±12 degrees, feels responsive without being excessive)
    const rotateX = normalizedY * -12;
    const rotateY = normalizedX * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:shadow-2xl ${
        featured ? "sm:col-span-2" : ""
      }`}
      style={{
        ...tiltStyle,
        // Fast transition for tilt so it feels responsive to mouse movement
        transition: "transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Spotlight effect that follows mouse */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(191, 87, 0, 0.15), transparent 40%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content layer */}
      <div className="relative z-10">
        {/* Featured badge */}
        {featured && (
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Featured
          </span>
        )}

        {/* Header: Title + Icon Links */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-3">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label={`View ${title} on GitHub`}
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
            )}
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLinkIcon className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/5"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
