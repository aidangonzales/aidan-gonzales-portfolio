/**
 * Central place for site content. Swap these placeholders for your real
 * details, then add/remove entries — the UI maps over these arrays, so the
 * page updates automatically.
 */

export const siteConfig = {
  name: "Aidan Gonzales",
  role: "Electrical & Computer Engineering @ UT Austin",
  tagline:
    "I design and build at the intersection of hardware and software — from embedded systems to full-stack web apps.",
  /**
   * Core technical areas displayed in the Hero.
   * Keep these concise (2-4 words each) for clean visual rhythm.
   */
  focusAreas: [
    "Embedded Systems",
    "Computer Architecture",
    "Full-Stack Development",
    "Signal Processing",
  ],
  email: "aidan.gonzales@utexas.edu",
  location: "Austin, TX",
  resumeUrl: "/resume.pdf", // Place your PDF in the public/ folder
  // Used for metadataBase and absolute OG image URLs. Update to your deployed domain.
  url: "https://your-domain.com",
  socials: {
    github: "https://github.com/aidan-gonzales",
    linkedin: "https://www.linkedin.com/in/aidan-gonzales/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short placeholder describing what you built, the problem it solved, and your role. Replace with a real project.",
    tags: ["C++", "Embedded", "STM32"],
    href: "#",
  },
  {
    title: "Project Two",
    description:
      "Another placeholder. Highlight interesting technical decisions and measurable results where you can.",
    tags: ["Python", "Signal Processing"],
    href: "#",
  },
  {
    title: "Project Three",
    description:
      "Placeholder for a web or full-stack project. Mention the stack and what makes it notable.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
];

export type Internship = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const internships: Internship[] = [
  {
    company: "Company Name",
    role: "Software Engineering Intern",
    period: "Summer 2025",
    description:
      "Placeholder summary of your impact — what you owned, the tech you used, and outcomes.",
  },
  {
    company: "Another Company",
    role: "Hardware Engineering Intern",
    period: "Summer 2024",
    description:
      "Placeholder summary. Quantify results where possible (e.g. reduced latency by 30%).",
  },
];

export type Course = {
  code: string;
  title: string;
  description: string;
};

export const coursework: Course[] = [
  {
    code: "EE 306",
    title: "Introduction to Computing",
    description: "Digital logic, assembly, and the LC-3 architecture.",
  },
  {
    code: "EE 312",
    title: "Software Design & Implementation",
    description: "Data structures and object-oriented design in Java.",
  },
  {
    code: "EE 411",
    title: "Circuit Theory",
    description: "Analysis of linear circuits and network theorems.",
  },
  {
    code: "EE 460N",
    title: "Computer Architecture",
    description: "Pipelining, caches, and microarchitecture design.",
  },
];
