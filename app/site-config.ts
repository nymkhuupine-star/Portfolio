export const SITE = {
  name: "Your Name",
  title: "Frontend Developer",
  description:
    "I build fast, accessible interfaces with React and Next.js — clean UI, solid UX, and performance-first.",
  email: "hello@example.com",
  socials: {
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  projects: [
    {
      title: "E-commerce UI",
      description: "A fast storefront UI with responsive layouts and clean UX.",
      tech: ["Next.js", "React", "Tailwind", "TypeScript"],
      liveDemoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Dashboard",
      description: "A data dashboard with reusable components and charts.",
      tech: ["Next.js", "React", "Tailwind"],
      liveDemoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Landing Page",
      description: "A minimal marketing page focused on speed and conversions.",
      tech: ["Next.js", "Tailwind"],
      liveDemoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "API Integration",
      description: "A product search UI powered by a simple Node API.",
      tech: ["Node.js", "API", "Next.js"],
      liveDemoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
  ],
  skills: {
    frontend: ["Next.js", "React", "Tailwind CSS"],
    backend: ["Node.js", "REST APIs"],
    tools: ["Git", "Vercel", "Figma"],
  },
  about:
    "I build clean, responsive web apps with a focus on performance and accessibility. I enjoy turning complex problems into simple interfaces and shipping polished experiences.",
} as const;
