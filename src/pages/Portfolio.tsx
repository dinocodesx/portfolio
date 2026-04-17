import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { Projects } from "../components/Projects";
import { Blogs } from "../components/Blogs";
import { Experiences } from "../components/Experiences";
import { SkillCategory } from "../components/Skills";
import { Talks } from "../components/Talks";
import { Building } from "../components/Building";
import { PageLayout } from "../components/ui/PageLayout";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FooterTime } from "../components/FooterTime";
import { SEO } from "../components/ui/SEO";
import {
  EXPERIENCE_DATA,
  SKILLS_DATA,
  TALKS_DATA,
  BLOGS_DATA,
} from "../constants/data";

export function Portfolio() {
  return (
    <PageLayout className="space-y-20">
      <SEO
        title="Debarshee Chakraborty | Software Engineer"
        description="Junior Software Engineer from Kolkata specialized in Backend development, Distributed Systems, and Low-level system design. Crafting interfaces and exploring technology."
      />
      {/* Header */}
      <motion.section variants={itemVariants} className="space-y-8">
        <h1 className="text-white font-medium">Debarshee Chakraborty</h1>
        <div className="space-y-6 text-[15px] leading-relaxed">
          <p>
            <span className="italic text-white">Crafting interfaces.</span>{" "}
            Junior Software Engineer from Kolkata, India. I love to tinker with
            low level system design and{" "}
            <span className="text-white italic">
              how the world of technology works.
            </span>
          </p>
          <p>
            I have previously worked on Backend development, mainly with{" "}
            <span className="text-white italic">
              Golang, Typescript and Java
            </span>{" "}
            with frameworks like{" "}
            <span className="text-white italic">
              Gin, Express(NestJS), and Spring Boot.
            </span>{" "}
            Check out my work on{" "}
            <Link
              to="www.github.com/dinocodesx"
              className="text-white hover:underline underline-offset-4"
            >
              Github
            </Link>
            , connect with me on{" "}
            <Link
              to="/links"
              className="text-white hover:underline underline-offset-4"
            >
              Socials
            </Link>{" "}
            and see my{" "}
            <Link
              to="/resume"
              className="text-white hover:underline underline-offset-4"
            >
              Resume.
            </Link>
          </p>
        </div>
      </motion.section>

      {/* Building, Projects & Case Studies Grid */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
      >
        {/* Building */}
        <div className="space-y-4">
          <SectionHeading title="Building" />
          <div className="space-y-4">
            <Building
              title="OAlpaca Studio"
              description="Memory and Canvas based interface for LLM chating."
              link="https://github.com/dinocodesx/oalpaca-studio"
            />
            <Building
              title="UI"
              description="A Collection of UI components for building LLM chat apps."
              link="/ui"
            />
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <SectionHeading title="Projects" href="/projects" />
          <div className="space-y-4">
            <Projects
              title="Apertre S2 Website"
              description="5000+ daily users — GitHub API for PR and issue tracking."
              github="https://github.com/apertre"
              live="https://s2.apertre.resourcio.in"
            />
            <Projects
              title="Redis from scratch"
              description="Fast memory caching from scratch using Go."
              github="https://github.com/dinocodesx/goredis"
            />
            <Projects
              title="You Need Attention"
              description="Implementation of the Transformer paper."
              github="https://github.com/dinocodesx/attention-is-all-you-need"
            />
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-4">
          <SectionHeading title="Case Studies" href="/system-designs" />
          <div className="space-y-4">
            <Projects
              title="URL Shortener"
              description="Case study on working of Bitly's URL shortener system."
              live="/system-designs/url-shortener"
            />
            <Projects
              title="Message Queue"
              description="Kafka-inspired queue with at-least-once delivery."
              live="/system-designs/message-queue"
            />
            <Projects
              title="Design a Rate Limiter"
              description="Token bucket vs sliding window."
              live="/system-designs/rate-limiter"
            />
          </div>
        </div>
      </motion.section>

      {/* Blogs */}
      <motion.section variants={itemVariants} className="space-y-8">
        <SectionHeading title="Blogs" href="/blogs" />
        <div className="flex flex-col space-y-8">
          {BLOGS_DATA.map((blog) => (
            <Blogs key={blog.id} {...blog} />
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section variants={itemVariants} className="space-y-4">
        <SectionHeading title="Experience" />
        <div className="space-y-4">
          {EXPERIENCE_DATA.map((exp) => (
            <Experiences key={exp.id} {...exp} />
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section variants={itemVariants} className="space-y-8">
        <SectionHeading title="Skills" />
        <div className="space-y-4">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCategory key={index} {...skill} />
          ))}
        </div>
      </motion.section>

      {/* Talks */}
      <motion.section variants={itemVariants} className="space-y-8">
        <SectionHeading title="Talks" href="/talks" />
        <div className="space-y-6">
          {TALKS_DATA.map((talk) => (
            <Talks key={talk.id} {...talk} />
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section variants={itemVariants} className="space-y-8">
        <SectionHeading title="Connect" />
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

      {/* Footer */}
      <footer className="w-full max-w-2xl mt-32 flex justify-between items-center text-[11px] uppercase tracking-widest opacity-50">
        <p>Let's connect and create something extraordinary.</p>
        <FooterTime />
      </footer>
    </PageLayout>
  );
}
