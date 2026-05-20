import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { itemVariants } from "../constants/animations";
import { PageLayout, SEO, BentoCard } from "../components/layout";
import { UI_DATA } from "../data";

export function UI() {
  const allItems = UI_DATA;

  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Library | Debarshee Chakraborty"
        description="A collection of experimental UI components and design patterns built with React, Tailwind CSS, and Framer Motion."
      />
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Library</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
            {allItems.map((item, i) => (
              <BentoCard key={item.link} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
