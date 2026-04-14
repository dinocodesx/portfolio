import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";

const PROJECTS_DATA = [
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

export function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl space-y-12"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-white/5 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </Link>
          <h1 className="text-white font-medium">Projects</h1>
        </motion.div>

        <div className="space-y-16">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="space-y-4 group"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-white font-medium text-lg">
                  {project.title}
                </h2>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded bg-white/3 border border-white/5 text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
}
