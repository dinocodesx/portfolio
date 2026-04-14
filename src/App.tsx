import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
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
              <span className="italic text-white">
                Crafting interfaces and experiences.
              </span>{" "}
              Building polished software and web experiences. Fullstack SWE from
              Kolkata, India.{" "}
              <a
                href="#"
                className="text-white hover:underline underline-offset-4"
              >
                Linear
              </a>
              .
            </p>
            <p>
              In the past I've developed the{" "}
              <a
                href="#"
                className="text-white hover:underline underline-offset-4"
              >
                Vercel
              </a>{" "}
              design system, website, and dashboard.
            </p>
          </div>
        </motion.section>

        {/* Grid Section */}
        <motion.section
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Building */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-medium">
              Building
            </h2>
            <div className="space-y-1">
              <h3 className="text-white font-medium">Craft</h3>
              <p className="text-sm leading-relaxed">
                Implementing interfaces and interactions.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-medium">
              Projects
            </h2>
            <div className="space-y-4">
              <ProjectLink
                title="⌘K"
                description="Composable command menu React component."
              />
              <ProjectLink
                title="Writer"
                description="Plain text editor with a focus on performance."
              />
              <ProjectLink
                title="Next Themes"
                description="Perfect dark mode in Next.js apps."
              />
            </div>
          </div>

          {/* Writing */}
          <div className="space-y-4">
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
          </div>
        </motion.section>

        {/* Blogs Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Blogs
          </h2>
          <div className="flex flex-col space-y-8">
            <BlogLink
              title="The Art of Minimalist Design"
              date="March 2026"
              excerpt="Exploring why less is often more in modern web interfaces and how to achieve it."
            />
            <BlogLink
              title="Building with Motion"
              date="February 2026"
              excerpt="How subtle animations can transform user experience from static to magical."
            />
            <BlogLink
              title="Typography in the Browser"
              date="January 2026"
              excerpt="A deep dive into fluid typography and vertical rhythm for the modern web."
            />
            <BlogLink
              title="The Future of CSS"
              date="December 2025"
              excerpt="Looking ahead at container queries, layers, and the evolution of styling."
            />
          </div>
        </motion.section>

        {/* Now Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">Now</h2>
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              Developing skill through doing, guiltlessly exploring passion and
              interests, imbuing quality. Mindful that{" "}
              <span className="italic text-white">
                everything around me is someone's life work.
              </span>
            </p>
            <p>
              All I want to do is build websites. Typography, motion design,
              copywriting, performance—the web is an endless medium of
              opportunity and creativity of which I've only scratched the
              surface.
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

        {/* Meetup Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Meetup
          </h2>
          <div className="space-y-6">
            <MeetupLink
              title="Design Systems London"
              date="April 20, 2026"
              location="London, UK"
              link="#"
            />
            <MeetupLink
              title="React Conf 2026"
              date="May 12-14, 2026"
              location="San Francisco, CA"
              link="#"
            />
            <MeetupLink
              title="Creative Coding Workshop"
              date="June 05, 2026"
              location="Berlin, DE"
              link="#"
            />
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest font-medium">
            Connect
          </h2>
          <p className="text-[15px]">
            Reach me at{" "}
            <a
              href="https://twitter.com/pacocoursey"
              className="text-white hover:underline underline-offset-4"
            >
              @pacocoursey
            </a>{" "}
            or{" "}
            <a
              href="mailto:p@paco.me"
              className="text-white hover:underline underline-offset-4"
            >
              p@paco.me
            </a>
            .
          </p>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <footer className="w-full max-w-2xl mt-32 flex justify-between items-center text-[11px] uppercase tracking-widest opacity-50">
        <p>Sit with your ambient ambition.</p>
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

function ProjectLink({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-center gap-1">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function WritingLink({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group cursor-pointer">
      <h3 className="text-white font-medium group-hover:underline underline-offset-4">
        {title}
      </h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BlogLink({
  title,
  date,
  excerpt,
}: {
  title: string;
  date: string;
  excerpt: string;
}) {
  return (
    <div className="group cursor-pointer space-y-2">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <span className="text-[10px] uppercase tracking-wider opacity-50 whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-sm leading-relaxed">{excerpt}</p>
    </div>
  );
}

function MeetupLink({
  title,
  date,
  location,
  link,
}: {
  title: string;
  date: string;
  location: string;
  link: string;
}) {
  return (
    <a href={link} className="group block space-y-1">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <span className="text-[10px] uppercase tracking-wider opacity-50 whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-sm opacity-50">{location}</p>
    </a>
  );
}
