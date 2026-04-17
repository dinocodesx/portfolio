import { motion } from "motion/react";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/ui/PageLayout";
import { PageHeader } from "../components/ui/PageHeader";
import { BLOGS_DATA } from "../constants/data";

export function Blogs() {
  return (
    <PageLayout>
      <PageHeader title="Blogs" />

      <div className="space-y-16">
        {BLOGS_DATA.map((blog) => (
          <motion.div
            key={blog.id}
            variants={itemVariants}
            className="space-y-4 group cursor-pointer"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/40">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <h2 className="text-white font-medium text-lg group-hover:text-white/80 transition-colors">
                {blog.title}
              </h2>
            </div>

            <p className="text-[14px] text-white/60 leading-relaxed max-w-xl">
              {blog.excerpt}
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                Read more —&gt;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
