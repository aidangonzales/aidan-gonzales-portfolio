import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      {/* Hero is above the fold — no reveal so it's visible instantly. */}
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      {/*
        Education & Experience share a single band section.
        - One container = consistent width/edges with the rest of the site.
        - lg:grid-cols-2 → side-by-side on desktop, stacked on mobile.
        - gap-x-12 gives a real gutter; gap-y-16 spaces them when stacked.
      */}
      <section className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-28">
        <Container className="grid gap-x-12 gap-y-16 lg:grid-cols-2">
          <Reveal>
            <Education />
          </Reveal>
          <Reveal delay={100}>
            <Experience />
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
