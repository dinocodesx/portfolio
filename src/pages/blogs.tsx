import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";

const BLOGS_DATA = [
  {
    id: 1,
    title: "The Art of Minimalist Design",
    date: "March 2026",
    excerpt:
      "Exploring why less is often more in modern web interfaces and how to achieve it. We dive into the psychology of whitespace and the power of intentional constraint.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building with Motion",
    date: "February 2026",
    excerpt:
      "How subtle animations can transform user experience from static to magical. Learn the principles of physics-based motion and when to use (and not use) transitions.",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Typography in the Browser",
    date: "January 2026",
    excerpt:
      "A deep dive into fluid typography and vertical rhythm for the modern web. Understanding how to create a harmonious reading experience across all devices.",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Future of CSS",
    date: "December 2025",
    excerpt:
      "Looking ahead at container queries, layers, and the evolution of styling. How the latest CSS features are changing the way we build layouts.",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "React Server Components: A New Era",
    date: "November 2025",
    excerpt:
      "Understanding the shift in how we think about data fetching and component rendering in the modern React ecosystem.",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Designing for Accessibility",
    date: "October 2025",
    excerpt:
      "Why accessibility is not a feature, but a fundamental requirement. Practical tips for building inclusive web experiences.",
    readTime: "4 min read",
  },
];

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
