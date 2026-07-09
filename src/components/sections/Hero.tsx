import Image from "next/image";
import Container from "@/components/ui/Container";
import SocialLinks from "./hero/SocialLinks";
import FocusAreas from "./hero/FocusAreas";
import HeroCTA from "./hero/HeroCTA";
import { siteConfig } from "@/data/portfolio";

/**
 * Hero section — landing view with name, role, tagline, focus areas, CTAs, social links, and photo.
 * Photo appears at the top level with the name for immediate visibility.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-16 sm:py-20"
    >
      {/* Subtle radial gradient accent — minimalist and tech-focused */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(191,87,0,0.08),transparent)]"
      />

      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Top section: Photo + Name side-by-side, vertically centered */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
            {/* Professional Photo */}
            <div className="shrink-0">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-accent/20 shadow-xl transition-all duration-300 hover:border-accent/40 hover:shadow-2xl sm:h-40 sm:w-40 md:h-48 md:w-48">
                <Image
                  src="/profile-photo.jpg"
                  alt={`${siteConfig.name} - Professional headshot`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                />
              </div>
            </div>

            {/* Name and Role - centered to photo */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="mt-4 text-lg font-medium text-muted sm:text-xl md:text-2xl">
                {siteConfig.role}
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {siteConfig.tagline}
          </p>

          {/* Focus Areas Grid */}
          <div className="mt-8">
            <FocusAreas />
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-10">
            <HeroCTA />
          </div>

          {/* Social Media Links */}
          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>
      </Container>
    </section>
  );
}
