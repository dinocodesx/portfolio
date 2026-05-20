import { motion } from "motion/react";
import { itemVariants } from "../../../constants/animations";

/**
 * Renders a standard narrow text block.
 */
export function TextSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-white/60 leading-relaxed text-[15px]">{children}</p>
    </div>
  );
}

/**
 * Renders a wide container that overflows the standard text width.
 * Used for wrapping images or other media.
 */
export function OverflowSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -mx-4 md:-mx-12 lg:-mx-24 my-12 first:mt-0 last:mb-0">
      {children}
    </div>
  );
}

/**
 * A top-level container for a chapter or section.
 * Provides consistent vertical spacing and an optional heading.
 */
export function ContentChapter({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={itemVariants}
      className="space-y-8 py-8 first:pt-0"
    >
      {title && (
        <h2 className="text-white font-medium text-lg mb-6">{title}</h2>
      )}
      <div className="space-y-8">{children}</div>
    </motion.section>
  );
}
