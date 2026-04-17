import { motion } from "motion/react";
import { containerVariants } from "../../constants/animations";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Tailwind max-width class. Defaults to "max-w-2xl". */
  maxWidth?: string;
  /** Extra classes applied to the inner motion.main element. */
  className?: string;
  /** Extra classes applied to the outer wrapper div. */
  centered?: boolean;
}

/**
 * Shared animated page shell used across all top-level pages.
 * Handles the full-height wrapper, centering, padding, and entrance animation.
 */
export function PageLayout({
  children,
  maxWidth = "max-w-2xl",
  className = "",
  centered = false,
}: PageLayoutProps) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center px-6 py-24 md:py-32 ${centered ? "justify-center" : ""}`}
    >
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`w-full ${maxWidth} space-y-12 ${className}`}
      >
        {children}
      </motion.main>
    </div>
  );
}
