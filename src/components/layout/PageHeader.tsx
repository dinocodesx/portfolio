import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { itemVariants } from "../../constants/animations";

interface PageHeaderProps {
  title: string;
  backTo?: string;
}

/**
 * Back-arrow button + page title heading used on all sub-pages
 * (Blogs, Projects, Talks, etc.).
 */
export function PageHeader({ title, backTo = "/" }: PageHeaderProps) {
  return (
    <motion.div variants={itemVariants} className="flex items-center gap-4">
      <Link
        to={backTo}
        className="p-2 rounded-full hover:bg-white/5 transition-colors group"
        aria-label="Go back to portfolio"
      >
        <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
      </Link>
      <h1 className="text-white font-medium">{title}</h1>
    </motion.div>
  );
}
