import { useState, useEffect } from "react";
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
import { EXPERIENCE_DATA, SKILLS_DATA } from "../constants/data";

export function Portfolio() {
  const [time, setTime] = useState<string>("");
  const [isHoveringTime, setIsHoveringTime] = useState(false);

  useEffect(() => {
    const updateKolkataTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setTime(formatter.format(now));
    };

    updateKolkataTime();
    const interval = setInterval(updateKolkataTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
              <span className="italic text-white hover:underline underline-offset-4">
                Crafting interfaces.
              </span>{" "}
              Junior Software Engineer from Kolkata, India. I especially love to
              tinker with low level system design and{" "}
              <span className="text-white hover:underline underline-offset-4 italic">
                how the world works.
              </span>
            </p>
            <p>
              I have previosly worked on Backend development, mainly with Java
              and Typescript Frameworks like{" "}
              <span className="text-white hover:underline underline-offset-4 italic">
                NestJS, and Spring Boot.
              </span>{" "}
              Check out my work on github and my{" "}
              <Link
                to="/resume"
                className="text-white hover:underline underline-offset-4"
              >
                Resume.
              </Link>
            </p>
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
                Memory and Canvas based interface for LLM chating and context
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
            </div>
          </div>*/}
        </motion.section>

        {/* Blogs Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <Link
            to="/blogs"
            className="text-white/40 hover:text-white transition-colors flex items-center justify-between"
          >
            <h2 className="text-xs uppercase tracking-widest font-medium">
              Blogs
            </h2>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
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
              <span className="italic text-white hover:underline underline-offset-4">
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
          <Link
            to="/talks"
            className="text-white/40 hover:text-white transition-colors flex items-center justify-between"
          >
            <h2 className="text-xs uppercase tracking-widest font-medium">
              Talks
            </h2>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
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
              to="/links"
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
        <div
          className="flex items-center gap-2 cursor-help transition-all duration-300"
          onMouseEnter={() => setIsHoveringTime(true)}
          onMouseLeave={() => setIsHoveringTime(false)}
        >
          <span className="tabular-nums">
            {isHoveringTime ? `${time} IST` : "2026"}
          </span>
          <div className="w-3 h-3 border border-current rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-current rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
}
