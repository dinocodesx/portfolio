import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";
import { BLOGS_DATA } from "../constants/data";


export function Blogs() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl space-y-12"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-white/5 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </Link>
          <h1 className="text-white font-medium">Blogs</h1>
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
      </motion.main>
    </div>
  );
}
