import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";
import { itemVariants } from "@/constants/animations";
import { STUFFS_DATA } from "@/data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export function Stuffs() {
  return (
    <PageLayout maxWidth="max-w-3xl">
      <SEO
        title="Stuffs | Debarshee Chakraborty"
        description="A collection of various things, experiments, and random cool stuff I've built."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Main content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Some Cool Stuffs</h1>
            <p className="text-white/60 text-sm">
              A collection of random experiments, tools, and things that don't
              quite fit into the projects category but are still worth sharing.
            </p>
          </motion.div>

          <div className="space-y-8">
            {STUFFS_DATA.map((stuff, index) => {
              const displayIndex = (index + 1).toString().padStart(2, "0");
              return (
                <motion.div
                  key={stuff.id}
                  variants={itemVariants}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                        [{displayIndex}]
                      </span>
                      <h2 className="text-white group-hover:text-white/80 transition-colors">
                        {stuff.title}
                      </h2>
                    </div>
                    <div className="flex gap-4 text-white/40">
                      {stuff.github && (
                        <a
                          href={stuff.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          aria-label={`View ${stuff.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {stuff.live && (
                        <a
                          href={stuff.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          aria-label={`Visit ${stuff.title} live website`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
                    {stuff.description}
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
