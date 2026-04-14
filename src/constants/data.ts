export const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Backend Developer",
    company: "Resourcio",
    location: "Kolkata, India",
    duration: "2022 - 2025",
    description:
      "Lead backend developer for Apertre Season 2 website, where we use GitHub API and other social media platform for data fetching and integration. This was used to calculate points for the Open Source Contribution tracking system.",
    achievements: {
      "1": "Reduced API response time by 60% through Redis caching optimization",
      "2": "Designed fault-tolerant monolithic architecture",
      "3": "Led team of 4 developers and completed this project in less than one month",
    },
    technologies: [
      "React",
      "Express",
      "NextJs",
      "NestJs",
      "TypeScript",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Open Source Contributor",
    company: "Olake by Datazip",
    location: "Remote",
    duration: "April 2025",
    description:
      "Enhanced MongoDB splitVector operation by implementing retry logic with exponential backoff, improved reliability of data chunking under transient failures, applying principles of fault tolerance, operating systems, and algorithmic optimization.",
    achievements: {
      "1": "Contributed to critical production infrastructure component",
      "2": "Implemented robust error handling patterns",
      "3": "Improved system reliability and performance",
    },
    technologies: ["Java", "Go", "Shell", "Apache Iceberg", "SQL", "AWS S3"],
  },
];

export const SKILLS_DATA = [
  {
    category: "Expert in",
    skills: [
      { name: "Node" },
      { name: "Express" },
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Proficient",
    skills: [
      { name: "Go" },
      { name: "Hono" },
      { name: "FastAPI" },
      { name: "Docker" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "Tooling",
    skills: [
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Terraform" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Kubernetes" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Motion" },
      { name: "Figma" },
      { name: "Shadcn UI" },
      { name: "Radix UI" },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Apertre Website",
    description:
      "Website for an Open Source Event, hosting more than 5000 active users daily, and using GitHub API for tracting PRs and Issues for points.",
    technologies: [
      "NextJS",
      "NestJS",
      "TypeScript",
      "Prisma",
      "Vercel",
      "Postgres",
      "Redis",
    ],
    github: "https://github.com/apertre",
    live: "https://s2apertre.resourcio.in/",
  },
  {
    id: 2,
    title: "Student Chapter Website",
    description:
      "Building Student Chapter of Electrical Engineering's website for hosting events, using Monorepo to have multiple applications.",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "TurboRepo",
      "Vercel",
    ],
    github: "https://github.com/iei-scee-aot/sceeaot-web",
    live: "https://www.sceeaot.in/",
  },
  {
    id: 3,
    title: "Redis from scratch using Go",
    description:
      "Built a Redis clone in Go supporting commands, memory management, protocol compliance, and object-oriented principles.",
    technologies: ["Go", "Linux", "TCP", "Memory"],
    github: "https://github.com/dinocodesx/goredis",
  },
  {
    id: 4,
    title: "Containers from scratch using Go",
    description:
      "Building a container form scratch using Go-Lang to do low level system manipulation and modification.",
    technologies: ["Go", "Linux", "Memory"],
    github: "https://github.com/dinocodesx/containers-from-scratch",
  },
  {
    id: 5,
    title: "Attention is All You Need",
    description:
      "This repository contains the implementation of the seminal paper `Attention is All You Need` by Vaswani et al. (2017), which introduced the Transformer architecture.",
    technologies: ["Python", "HuggingFace", "Transformer", "PyTorch"],
    github: "https://github.com/dinocodesx/attention-is-all-you-need",
  },
  {
    id: 6,
    title: "E-commerce Application using Spring Microservice",
    description:
      "Designed microservices-based e-commerce platform with scalable distributed multi-tier architecture, and optimized backend.",
    technologies: [
      "Java",
      "Spring",
      "Spring Boot",
      "DGS",
      "Postgres",
      "Mongo",
      "Docker",
    ],
    github: "https://github.com/dinocodesx/spring-microservice",
  },
];

export const BLOGS_DATA = [
  {
    id: 1,
    title: "The Art of Minimalist Design",
    date: "March 2026",
    excerpt:
      "Exploring why less is often more in modern web interfaces and how to achieve it. We dive into the psychology of whitespace and the power of intentional constraint.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building with Motion",
    date: "February 2026",
    excerpt:
      "How subtle animations can transform user experience from static to magical. Learn the principles of physics-based motion and when to use (and not use) transitions.",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Typography in the Browser",
    date: "January 2026",
    excerpt:
      "A deep dive into fluid typography and vertical rhythm for the modern web. Understanding how to create a harmonious reading experience across all devices.",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Future of CSS",
    date: "December 2025",
    excerpt:
      "Looking ahead at container queries, layers, and the evolution of styling. How the latest CSS features are changing the way we build layouts.",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "React Server Components: A New Era",
    date: "November 2025",
    excerpt:
      "Understanding the shift in how we think about data fetching and component rendering in the modern React ecosystem.",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Designing for Accessibility",
    date: "October 2025",
    excerpt:
      "Why accessibility is not a feature, but a fundamental requirement. Practical tips for building inclusive web experiences.",
    readTime: "4 min read",
  },
];

export const TALKS_DATA = [
  {
    id: 1,
    title: "Building Scalable Backends with Go",
    event: "GopherCon India",
    date: "March 2026",
    location: "Pune, India",
    description:
      "A deep dive into building high-performance, concurrent backend systems using Go's standard library and minimalist frameworks.",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Open Source Contribution",
    event: "Open Source Summit",
    date: "February 2026",
    location: "Remote",
    description:
      "Discussing the evolution of community-driven development and how tools like the GitHub API are enabling better tracking and recognition.",
    link: "#",
  },
  {
    id: 3,
    title: "Minimalism in Web Engineering",
    event: "Web Directions",
    date: "January 2026",
    location: "Sydney, AU",
    description:
      "Why reducing complexity in your tech stack leads to better performance, maintainability, and user experience.",
    link: "#",
  },
  {
    id: 4,
    title: "Architecting for Performance",
    event: "React India",
    date: "December 2025",
    location: "Goa, India",
    description:
      "Strategies for optimizing React applications, from code-splitting to efficient state management and motion design.",
    link: "#",
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Portfolio Website",
    url: "/",
    description: "Check out my portfolio",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/dinocodesx",
    description: "View my code and contributions",
    icon: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dinocodesx/",
    description: "Connect with me professionally",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://x.com/dinocodesx",
    description: "Thoughts on tech and development",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
  {
    id: 5,
    name: "Email",
    url: "mailto:debarshee.chakraborty.work@gmail.com",
    description: "Get in touch directly",
    icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.001L12 8.773l6.545-4.951h3.819C23.268 3.821 24 4.553 24 5.457z",
  },
  {
    id: 6,
    name: "Medium",
    url: "https://medium.com/@dinocodesx",
    description: "Read my latest blogs on ML and tech",
    icon: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z",
  },
];
