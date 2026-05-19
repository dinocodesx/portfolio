import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { BLOGS_DATA } from "../constants/data";

export function Blogs() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Blogs | Debarshee Chakraborty"
        description="Reading list and technical blog posts by Debarshee Chakraborty. Deep dives into backend systems, machine learning, and software engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Main content */}
        <div className="space-y-16">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Blogs</h1>
          </motion.div>

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
        </div>
      </div>
    </PageLayout>
  );
}
