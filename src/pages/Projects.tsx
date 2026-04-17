import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { SEO } from "../components/ui/SEO";
import { PROJECTS_DATA } from "../constants/data";

export function Projects() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Projects | Debarshee Chakraborty"
        description="A showcase of technical projects ranging from distributed systems in Go to cloud-native applications and AI experiments."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Sidebar */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Index
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Projects</h1>
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
                        aria-label={`View ${project.title} on GitHub`}
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
                        aria-label={`Visit ${project.title} live website`}
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
        </div>
      </div>
    </PageLayout>
  );
}
