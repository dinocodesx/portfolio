import { Project } from "../types";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Apertre S2 Website",
    description:
      "Hosting more than 5000 active users daily, and using GitHub API for tracting PRs and Issues.",
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
    live: "https://s2.apertre.resourcio.in",
  },
  {
    id: 2,
    title: "Redis from scratch",
    description: "Fast memory caching from scratch using Go.",
    technologies: ["Go", "Linux", "TCP", "Memory"],
    github: "https://github.com/dinocodesx/goredis",
  },
  {
    id: 3,
    title: "You Need Attention",
    description:
      "This repository contains the implementation of the seminal paper `Attention is All You Need` by Vaswani et al. (2017), which introduced the Transformer architecture.",
    technologies: ["Python", "HuggingFace", "Transformer", "PyTorch"],
    github: "https://github.com/dinocodesx/attention-is-all-you-need",
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
    title: "Student Chapter Website",
    description:
      "Student Chapter of Electrical Engineering's website for hosting events.",
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
  {
    id: 7,
    title: "Dinoe Compiler",
    description:
      "A educational, multi-stage compiler for the .dinoe programming language, built from scratch in Rust.",
    technologies: ["Rust", "Compiler", "LLVM", "Language Design"],
    github: "https://github.com/dinocodesx/DINOE-COMPILER",
  },
  {
    id: 8,
    title: "Basic Firewall",
    description:
      "Building a basic firewall from scratch using Rust to filter and manage network traffic.",
    technologies: ["Rust", "Networking", "Security", "Linux"],
    github: "https://github.com/dinocodesx/BASIC-FIREWALL",
  },
  {
    id: 9,
    title: "Custom Email Protocol",
    description:
      "Designing and implementing a custom email protocol for secure and efficient message delivery.",
    technologies: ["Go", "Networking", "TCP/IP", "Security"],
    github: "https://github.com/dinocodesx/CUSTOM-EMAIL-PROTOCOL",
  },
  {
    id: 10,
    title: "Motia",
    description:
      "Polyglot backend framework that unifies API, Background Jobs & AI Agents into a single developer experience.",
    technologies: ["TypeScript", "Node.js", "AI Agents", "Architecture"],
    github: "https://github.com/dinocodesx/MOTIA-DEMO",
  },
  {
    id: 11,
    title: "Poketoons",
    description:
      "Catch pokemons by guessing their names. A fun, locally running game without external API dependencies.",
    technologies: ["TypeScript", "React", "Vite", "Web Design"],
    github: "https://github.com/dinocodesx/POKETOONS",
  },
];
