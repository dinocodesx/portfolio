import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../constants/animations";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl flex flex-col items-center space-y-8 text-center"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-white font-medium text-5xl">404</h1>
          <p className="text-[15px] text-white/60 leading-relaxed max-w-sm mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest text-white/40 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
        </motion.div>
      </motion.main>
    </div>
  );
}
