import { LinkCard } from "@/components/layout/LinkCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/layout/SEO";
import { SidebarLink } from "@/components/layout/SidebarLink";
import { itemVariants } from "@/constants/animations";
import { STUFFS_DATA } from "@/data";
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
              const link = stuff.live || stuff.github;
              const displayIndex = (index + 1).toString().padStart(2, "0");
              return (
                <motion.div key={stuff.id} variants={itemVariants}>
                  <LinkCard
                    title={stuff.title}
                    description={stuff.description}
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
