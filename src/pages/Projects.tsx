import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { Github, ExternalLink } from "lucide-react";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { PROJECTS_DATA } from "../data";

export function Projects() {
  return (
    <PageLayout maxWidth="max-w-3xl">
      <SEO
        title="Projects | Debarshee Chakraborty"
        description="A showcase of technical projects ranging from distributed systems in Go to cloud-native applications and AI experiments."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Main content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Projects</h1>
            <p className="text-white/60 text-sm">
              Some cool and goofy thing i am upto while everyone is having fun
              with their family.
            </p>
          </motion.div>

          <div className="space-y-8">
            {PROJECTS_DATA.map((project, index) => {
              const displayIndex = (index + 1).toString().padStart(2, "0");
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="space-y-2 group cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/40">
                      <span className="font-mono">[{displayIndex}]</span>
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label={`Visit ${project.title} live website`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h2 className="text-white font-medium text-lg group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
