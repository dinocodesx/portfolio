import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { itemVariants } from "../../constants/animations";

/**
 * A sidebar navigation link that points back to the index page.
 * Includes the standard "Index" label, an arrow icon, and entrance animations.
 */
export function SidebarLink() {
  return (
    <motion.div variants={itemVariants}>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg sticky top-32"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Index
      </Link>
    </motion.div>
  );
}
