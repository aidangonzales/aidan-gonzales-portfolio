import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { siteConfig } from "@/data/portfolio";

/**
 * Social media links with icon buttons.
 * Displays GitHub and LinkedIn with accessible labels and hover states.
 */
export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <Link
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors hover:text-foreground"
        aria-label="GitHub Profile"
      >
        <GitHubIcon className="h-6 w-6" />
      </Link>
      <Link
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors hover:text-foreground"
        aria-label="LinkedIn Profile"
      >
        <LinkedInIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
