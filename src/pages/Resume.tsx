import { motion } from "motion/react";
import { ArrowLeft, Download, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { PrintStyles } from "../components/PrintStyles";

const RESUME_DATA = {
  name: "Debarshee Chakraborty",
  title: "Backend & Distributed Systems Engineer",
  contact: {
    location: "Kolkata, India",
    email: "debarshee.chakraborty.work@gmail.com",
    phone: "+91-9830989340",
    portfolio: "https://www.dinocodes.in",
    linkedin: "https://linkedin.com/in/dinocodesx",
    github: "https://github.com/dinocodesx",
  },
  experience: [
    {
      role: "Backend Project Development Lead",
      company: "Resourcio - Apertre Website",
      duration: "Jun 2023 – May 2025",
      points: [
        "Architected and deployed a high-traffic distributed web application serving 5,000+ active users, ensuring 99.9% availability during peak open source seasonal traffic.",
        "Refactored leaderboard processing algorithms for distributed consistency, reducing runtime from 4 minutes to 30 seconds (87% performance gain) through advanced query optimization and asynchronous data handling.",
      ],
      tech: "TypeScript, NextJS, NestJS, Prisma, PostgreSQL, GitHub Actions, Docker, Grafana.",
    },
    {
      role: "Open Source Contributor",
      company: "Olake - Datazip",
      duration: "Present",
      points: [
        "Engineered fault-tolerant database replication logic for large-scale data lake ingestion using Apache Iceberg and Amazon S3.",
        "Improved MongoDB chunking and splitVector operations by implementing resilient retry logic with exponential backoff, reducing data replication failures by 99%.",
      ],
      tech: "Go, Java, Shell, SQL, Amazon S3 and Iceberg",
    },
  ],
  skills: [
    {
      category: "Backend & Distributed Systems",
      items:
        "Go, Java (Spring Boot), Python (FastAPI/Django), Node.js (NestJS), Microservices, gRPC, REST APIs, Kafka, Message Queues.",
    },
    {
      category: "Cloud & Platform Engineering",
      items:
        "AWS (EC2, S3, RDS, Lambda), Azure, Docker, Kubernetes (K8s), Terraform (IaC), GitHub Actions (CI/CD), Linux (Bash), Google Cloud, Git.",
    },
    {
      category: "Data & Observability",
      items:
        "PostgreSQL (Query Optimization), MongoDB, Redis, Prometheus, Grafana, OpenTelemetry (Telemetry/Monitoring).",
    },
  ],
  projects: [
    {
      title: "Microservice Ecommerce Application",
      tech: "Java, Spring Boot, Kafka, OpenTelemetry, AWS",
      description:
        "Engineered a scalable microservices platform featuring real-time event-driven messaging via Kafka and a comprehensive observability stack.",
    },
    {
      title: "Redis from scratch using Go",
      tech: "Go, Linux, Memory Management",
      description:
        "Developed a high-performance in-memory distributed storage system in Go, implementing core Redis commands and custom protocol handling (RESP).",
    },
    {
      title: "Agentic RAG Pipeline",
      tech: "Python, PyTorch, CUDA, Gemma-7B",
      description:
        "Architected an end-to-end Retrieval-Augmented Generation (RAG) pipeline integrating vector embeddings and CUDA-accelerated processing.",
    },
  ],
  education: [
    {
      school: "Academy of Technology",
      degree: "B.Tech with Hons. in Engineering",
      duration: "Oct 2022 – Jun 2026",
    },
    {
      school: "Methodist School, Dankuni",
      degree: "Computer Science CISCE",
      duration: "Apr 2012 – Mar 2022",
    },
  ],
};

/** Reusable section heading for the Resume page. */
function ResumeSectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-xs uppercase tracking-widest font-medium text-white/40">
      {title}
    </h2>
  );
}

export function Resume() {
  return (
    <PageLayout className="space-y-16">
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors group"
            aria-label="Go back to portfolio"
          >
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </Link>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            <Download className="w-3 h-3" />
            Download PDF
          </a>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-medium text-white tracking-tight">
            {RESUME_DATA.name}
          </h1>
          <p className="text-white/60">{RESUME_DATA.title}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/40">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              {RESUME_DATA.contact.location}
            </div>
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
            <a
              href={RESUME_DATA.contact.linkedin}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href={RESUME_DATA.contact.github}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.section variants={itemVariants} className="space-y-8">
        <ResumeSectionHeading title="Experience" />
        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-white font-medium">{exp.role}</h3>
                <span className="text-[11px] uppercase tracking-wider text-white/40 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-white/60">{exp.company}</p>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-[14px] text-white/50 leading-relaxed flex gap-3"
                  >
                    <span className="text-white/20 mt-1.5 text-[10px]">●</span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-white/30 italic">
                Stack: {exp.tech}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section variants={itemVariants} className="space-y-8">
        <ResumeSectionHeading title="Skills" />
        <div className="grid gap-6">
          {RESUME_DATA.skills.map((skill, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-[11px] uppercase tracking-widest text-white/30">
                {skill.category}
              </h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Selected Projects */}
      <motion.section variants={itemVariants} className="space-y-8">
        <ResumeSectionHeading title="Selected Projects" />
        <div className="grid gap-8">
          {RESUME_DATA.projects.map((project, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-white font-medium">{project.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">
                {project.description}
              </p>
              <p className="text-[12px] text-white/30 uppercase tracking-wider">
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section variants={itemVariants} className="space-y-8">
        <ResumeSectionHeading title="Education" />
        <div className="space-y-6">
          {RESUME_DATA.education.map((edu, i) => (
            <div key={i} className="flex justify-between items-baseline gap-4">
              <div>
                <h3 className="text-white font-medium">{edu.school}</h3>
                <p className="text-sm text-white/60">{edu.degree}</p>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-white/40 whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        variants={itemVariants}
        className="pt-16 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/20"
      >
        <p>Built with precision.</p>
        <p>© 2026</p>
      </motion.footer>

      <PrintStyles />
    </PageLayout>
  );
}
