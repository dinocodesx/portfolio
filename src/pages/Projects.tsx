import { LinkCard } from "@/components/layout/LinkCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";
import { itemVariants } from "@/constants/animations";
import { PROJECTS_DATA } from "@/data";
import { motion } from "motion/react";

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
              const link = project.live || project.github;
              const displayIndex = (index + 1).toString().padStart(2, "0");
              return (
                <motion.div key={project.id} variants={itemVariants}>
                  <LinkCard
                    title={project.title}
                    description={project.description}
                    link={link}
                    dimArrow={false}
                    index={displayIndex}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
