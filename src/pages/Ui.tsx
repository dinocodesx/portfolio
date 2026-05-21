import { BentoCard, PageLayout, SEO } from "@/components/layout";
import { SidebarLink } from "@/components/layout/SidebarLink";
import { itemVariants } from "@/constants/animations";
import { UI_DATA } from "@/data";
import { motion } from "motion/react";

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
            <p className="text-white/40 text-sm max-w-xl">
              A collection of experimental UI components and design patterns
              built with React, Tailwind CSS, and Framer Motion.
            </p>
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
