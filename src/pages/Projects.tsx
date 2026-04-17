import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { PageHeader } from "../components/ui/PageHeader";
import { PROJECTS_DATA } from "../constants/data";

export function Projects() {
  return (
    <PageLayout>
      <PageHeader title="Projects" />

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
    </PageLayout>
  );
}
