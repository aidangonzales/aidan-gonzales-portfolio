import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m an Electrical &amp; Computer Engineering student at UT Austin
          with interests spanning embedded systems, computer architecture, and
          software engineering. This is placeholder copy — replace it with your
          own story.
        </p>
        <p>
          When I&apos;m not in the lab or writing code, you can find me [your
          hobbies here]. Based in {siteConfig.location}.
        </p>
      </div>
    </Section>
  );
}
