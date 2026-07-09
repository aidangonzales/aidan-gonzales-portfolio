import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/portfolio";

/**
 * Contact call-to-action section.
 * Encourages visitors to reach out via email or download resume.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-surface py-20 sm:py-28"
    >
      {/* Subtle decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(191,87,0,0.08),transparent)]"
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* Headline */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Connect
          </h2>

          {/* Supporting text */}
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m always open to discussing new projects, opportunities, or
            just chatting about engineering. Feel free to reach out!
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:text-base"
            >
              Send an Email
            </Link>
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-border px-8 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:text-base"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
