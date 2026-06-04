import { Project } from "@/types";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Redis from scratch",
    description: "Fast memory caching from scratch using Go.",
    technologies: ["Go", "Linux", "TCP", "Memory"],
    github: "https://github.com/dinocodesx/goredis",
  },
  {
    id: 2,
    title: "Containers from scratch using Go",
    description:
      "Building a container form scratch using Go-Lang to do low level system manipulation and modification.",
    technologies: ["Go", "Linux", "Memory"],
    github: "https://github.com/dinocodesx/containers-from-scratch",
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
    title: "Simple Local RAG",
    description:
      "Building a simple local RAG (Retrieval-Augmented Generation) system using Python, Pytorch and ChromaDB with Cuda.",
    technologies: ["Python", "PyTorch", "ChromaDB", "CUDA"],
    github: "https://github.com/dinocodesx/simple-local-rag",
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
    title: "Hack4Bengal Website",
    description:
      "Website for Hack4Bengal, West Bengal's biggest hackathon and technical event organized by Hack4Bengal Community.",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "TurboRepo",
      "Vercel",
    ],
    github: "https://github.com/hack4bengal/s4-website",
    live: "https://www.hack4bengal.tech/",
  },
  {
    id: 8,
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
    id: 9,
    title: "Dinoe Compiler",
    description:
      "A educational, multi-stage compiler for the .dinoe programming language, built from scratch in Rust.",
    technologies: ["Rust", "Compiler", "LLVM", "Language Design"],
    github: "https://github.com/dinocodesx/DINOE-COMPILER",
  },
  {
    id: 10,
    title: "Basic Firewall",
    description:
      "Building a basic firewall from scratch using Rust to filter and manage network traffic.",
    technologies: ["Rust", "Networking", "Security", "Linux"],
    github: "https://github.com/dinocodesx/BASIC-FIREWALL",
  },
  {
    id: 11,
    title: "Custom Email Protocol",
    description:
      "Designing and implementing a custom email protocol for secure and efficient message delivery.",
    technologies: ["Go", "Networking", "TCP/IP", "Security"],
    github: "https://github.com/dinocodesx/CUSTOM-EMAIL-PROTOCOL",
  },
  {
    id: 12,
    title: "Gemini Genkit API",
    description:
      "A simple API wrapper around the Gemini Genkit SDK, providing a convenient way to interact with the Gemini AI model.",
    technologies: ["TypeScript", "Node.js", "AI Agents", "Gemini"],
    github: "https://github.com/dinocodesx/gemini-genkit-api",
  },
  {
    id: 13,
    title: "Traffic and Vehicle Management",
    description:
      "Using traffic signal cameras for object detection and based on the vehicles of the car it will manage the traffic signals for proper management of time.",
    technologies: [
      "Python",
      "Computer Vision",
      "Traffic Management",
      "Machine Learning",
      "FastAPI",
    ],
    github: "https://github.com/dinocodesx/traffic-and-vehicle-management",
  },
  {
    id: 14,
    title: "API Rate Limiter",
    description:
      "A simple API rate limiter middleware for Golang that uses Redis to limit the number of requests per minute.",
    technologies: ["Go", "Redis", "API", "Rate Limiting"],
    github: "https://github.com/dinocodesx/api-rate-limiter",
  },
  {
    id: 15,
    title: "Load Balancer",
    description:
      "A simple round-robin load balancer written in Go that distributes incoming requests across multiple backend servers.",
    technologies: ["Go", "Load Balancing", "Networking"],
    github: "https://github.com/dinocodesx/round-robin-lb",
  },
];
