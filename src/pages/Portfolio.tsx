import { LinkCard, StyledLink } from "@/components/layout";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SEO } from "@/components/layout/SEO";
import { Blogs } from "@/components/portfolio/Blog";
import { Building } from "@/components/portfolio/Building";
import { Experiences } from "@/components/portfolio/Experiences";
import { FooterTime } from "@/components/portfolio/FooterTime";
import { Talks } from "@/components/portfolio/Talks";
import { itemVariants } from "@/constants/animations";
import { BLOGS_DATA, BUILDING_DATA, EXPERIENCE_DATA, TALKS_DATA } from "@/data";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <PageLayout className="space-y-12">
      <SEO
        title="Debarshee Chakraborty | Software Engineer"
        description="Junior Software Engineer from Kolkata specialized in Backend development, Distributed Systems, and Low-level system design. Crafting interfaces and exploring technology."
      />
      {/* Header */}
      <motion.section variants={itemVariants} className="space-y-8">
        <h1 className="text-white font-medium">Debarshee Chakraborty</h1>
        <div className="space-y-3 text-[15px] leading-relaxed">
          <p>
            <span className="italic text-white">Architecting Systems.</span>{" "}
            Junior Software Engineer from Kolkata, India. I love to tinker with
            low level system design and{" "}
            <span className="text-white italic">
              how the world of technology works.
            </span>{" "}
          </p>
          <p>
            Get to know more <StyledLink to="/about">about me</StyledLink>,{" "}
            <StyledLink to="/culture">my background</StyledLink>,{" "}
            <StyledLink to="/community">my community</StyledLink>, and{" "}
            <StyledLink to="/journey">my journeys</StyledLink>. Currently
            checking out and contributing to{" "}
            <StyledLink to="https://github.com/helm/helm">helm</StyledLink>,{" "}
            <StyledLink to="https://github.com/prometheus/prometheus">
              prometheus
            </StyledLink>
            ,{" "}
            <StyledLink to="https://github.com/go-gitea/gitea">
              gitea
            </StyledLink>
            , and{" "}
            <StyledLink to="https://github.com/argoproj/argo-cd">
              argo-cd
            </StyledLink>
            .<Link to="/disclaimer">*</Link>
          </p>
          <p>
            I have previously worked on Backend development, mainly with{" "}
            <span className="text-white italic">
              Golang, Typescript, Java and Python
            </span>{" "}
            with frameworks like{" "}
            <span className="text-white italic">
              Gin, Express(NestJS), Fastify, Spring Boot and FastAPI.
            </span>
          </p>
          <p>
            Check out my work on{" "}
            <StyledLink to="www.github.com/dinocodesx">Github</StyledLink>,
            connect with me on <StyledLink to="/links">Socials</StyledLink> and
            see my <StyledLink to="/resume">Resume.</StyledLink>
          </p>
        </div>
      </motion.section>

      {/* Building, Projects & Case Studies Grid */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8"
      >
        {/* Building */}
        <div className="space-y-6">
          <SectionHeading title="Building" />
          <div className="space-y-4">
            {BUILDING_DATA.map((item) => (
              <Building
                key={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <SectionHeading title="Projects" href="/projects" />
          <div className="space-y-4">
            <LinkCard
              title="Apertre S2 Website"
              description="5000+ daily users — GitHub API for PR and issue tracking."
              link="https://s2.apertre.resourcio.in"
              dimArrow={false}
            />
            <LinkCard
              title="Redis from scratch"
              description="Fast memory caching from scratch using Go from scratch."
              link="https://github.com/dinocodesx/goredis"
              dimArrow={false}
            />
            <LinkCard
              title="Attention is all you need"
              description="Implementation of the Transformer paper from scratch."
              link="https://github.com/dinocodesx/attention-is-all-you-need"
              dimArrow={false}
            />
          </div>
        </div>
      </motion.section>

      {/* Blogs */}
      <motion.section variants={itemVariants} className="space-y-6">
        <SectionHeading title="Blogs" href="/blogs" />
        <div className="flex flex-col space-y-6">
          {BLOGS_DATA.map((blog) => (
            <Blogs key={blog.id} {...blog} />
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section variants={itemVariants} className="space-y-6">
        <SectionHeading title="Experience" />
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <Experiences key={exp.id} {...exp} />
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      {/*<motion.section variants={itemVariants} className="space-y-6">
        <SectionHeading title="Skills" />
        <div className="space-y-5">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCategory key={index} {...skill} />
          ))}
        </div>
      </motion.section>*/}

      {/* Talks */}
      <motion.section variants={itemVariants} className="space-y-6">
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
            <StyledLink to="https://twitter.com/dinocodesx" showIcon>
              @dinocodesx
            </StyledLink>{" "}
            or{" "}
            <StyledLink
              to="mailto:debarshee.chakraborty.work@gmail.com"
              showIcon
            >
              debarshee.chakraborty.work@gmail.com
            </StyledLink>
            .
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {/*<StyledLink to="/links" showIcon className="text-[15px]">
              View all socials
            </StyledLink>*/}
            <StyledLink to="/spotify" showIcon className="text-[15px]">
              Musical Taste
            </StyledLink>
            <StyledLink to="/books" showIcon className="text-[15px]">
              Reading List
            </StyledLink>
            <StyledLink to="/shortcuts" showIcon className="text-[15px]">
              Keyboard Shortcuts
            </StyledLink>
            <StyledLink to="/card" showIcon className="text-[15px]">
              Id Card?
            </StyledLink>
          </div>
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
