import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";
import { Projects } from "../components/Projects";
import { Writings } from "../components/Writings";
import { Blogs } from "../components/Blogs";
import { Experiences } from "../components/Experiences";
import { SkillCategory } from "../components/Skills";
import { Talks } from "../components/Talks";

const EXPERIENCE_DATA = [
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

const SKILLS_DATA = [
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

export function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl space-y-20"
      >
        {/* Header */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h1 className="text-white font-medium">Debarshee Chakraborty</h1>
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              <span className="italic text-white">Crafting interfaces.</span>{" "}
              Fullstack Software Engineer from Kolkata, India.{" "}
              {/*<a
                href="#"
                className="text-white hover:underline underline-offset-4"
              >
                Linear
              </a>*/}
            </p>
            {/*<p>
              In the past I've developed the{" "}
              <a
                href="#"
                className="text-white hover:underline underline-offset-4"
              >
                Vercel
              </a>{" "}
              design system, website, and dashboard.
            </p>*/}
          </div>
        </motion.section>

        {/* Grid Section */}
        <motion.section
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8"
        >
          {/* Building */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-medium">
              Building
            </h2>
            <div className="space-y-1">
              <h3 className="text-white font-medium">OAlpaca Studio</h3>
              <p className="text-sm leading-relaxed">
                Memory and Canvas based interface for LLM chating and memory
                management.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <Link
              to="/projects"
              className="text-white/40 hover:text-white transition-colors flex items-center justify-between"
            >
              <h2 className="text-xs uppercase tracking-widest font-medium">
                Projects
              </h2>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="space-y-4">
              <Projects
                title="Simple Local Rag"
                description="Retrieval-Augmented Generation (RAG) pipeline using PyTorch and Gemma-7B."
                link="https://github.com/dinocodesx/simple-local-rag"
              />
              <Projects
                title="Redis from scratch using Go"
                description="Building my own redis like key-value database using go lang cause why not.."
                link="https://github.com/dinocodesx/goredis"
              />
              <Projects
                title="Containers from scratch using Go"
                description="Building a container form scratch using Go-Lang to do low level system manipulation and modification."
                link="https://github.com/dinocodesx/containers-from-scratch"
              />
            </div>
          </div>

          {/* Writing */}
          {/*<div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-medium">
              Writing
            </h2>
            <div className="space-y-4">
              <WritingLink
                title="React Hook Getter Pattern"
                description="Simple, efficient React state hook in 50 lines."
              />
              <WritingLink
                title="Redesign 2021"
                description="Return to simplicity."
              />
              <WritingLink
                title="All writing"
                description="Infrequent thoughts on design and code."
              />
            </div>
          </div>*/}
        </motion.section>

        {/* Blogs Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Blogs
          </h2>
          <div className="flex flex-col space-y-8">
            <Blogs
              title="Building a RAG Pipeline from Scratch with PyTorch and Transformers"
              date="October 2024"
              excerpt="Exploring why less is often more in modern web interfaces and how to achieve it."
              link="https://python.plainenglish.io/building-a-rag-pipeline-from-scratch-with-pytorch-and-transformers-b52e5504cde2"
            />
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Experience
          </h2>
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp) => (
              <Experiences key={exp.id} {...exp} />
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Skills
          </h2>
          <div className="space-y-4">
            {SKILLS_DATA.map((skill, index) => (
              <SkillCategory key={index} {...skill} />
            ))}
          </div>
        </motion.section>

        {/* Now Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">Now</h2>
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              Building with intention. I spend my time guiltlessly exploring the
              space between hardware and high-level software, driven by the
              philosophy that{" "}
              <span className="italic text-white">
                everything around me is someone's life work.
              </span>
            </p>
            <p>
              I’m obsessed with the "how" of the web: performance, copywriting,
              and technical SEO. My background in academic research and IoT has
              taught me to value precision—whether I’m managing signal idle
              times in a traffic system or reducing time-to-interactive on a
              React application.
            </p>
            <p>
              Enjoying deep, dark, boring dance music: songs that set the pace
              in the first ten seconds and maintain it for the next ten minutes.{" "}
              <span className="text-white">Deep</span> is a curation of my
              favorites. Soothed by the inherent energy of drum and bass—
              <span className="text-white">Drum</span> has my favorites.
            </p>
          </div>
        </motion.section>

        {/* Talks Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Talks
          </h2>
          <div className="space-y-6">
            <Talks
              title="Machine Learning in Production: Best Practices"
              date="April 20, 2025"
              location="Academy of Technology . Hooghly, WB"
              link="#"
            />
            <Talks
              title="Gemini Genkit API"
              date="October 21, 2025"
              location="MCKV Institute of Engineering . Howrah, WB"
              link="https://github.com/dinocodesx/gemini-genkit-api"
            />
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Connect
          </h2>
          <div className="space-y-4">
            <p className="text-[15px]">
              Reach me at{" "}
              <a
                href="https://twitter.com/dinocodesx"
                className="text-white hover:underline underline-offset-4"
              >
                @dinocodesx
              </a>{" "}
              or{" "}
              <a
                href="mailto:debarshee.chakraborty.work@gmail.com"
                className="text-white hover:underline underline-offset-4"
              >
                debarshee.chakraborty.work@gmail.com
              </a>
              .
            </p>
            <Link
              to="/socials"
              className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4 text-[15px]"
            >
              View all socials <ArrowUpRight className="w-4 h-4 opacity-50" />
            </Link>
          </div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <footer className="w-full max-w-2xl mt-32 flex justify-between items-center text-[11px] uppercase tracking-widest opacity-50">
        <p>Let's connect and create something extraordinary.</p>
        <div className="flex items-center gap-2">
          <span>2026</span>
          <div className="w-3 h-3 border border-current rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-current rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
}
