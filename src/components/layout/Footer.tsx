import Link from "next/link";
import Container from "@/components/ui/Container";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { siteConfig } from "@/data/portfolio";

/**
 * Site footer with copyright, social links, and attribution.
 * Simple, clean design that stays out of the way.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
