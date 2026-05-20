import { motion } from "motion/react";
import { itemVariants } from "../../../constants/animations";

interface PolaroidItem {
  src: string;
  caption: string;
}

interface PolaroidGalleryProps {
  items: PolaroidItem[];
}

export function PolaroidGallery({ items }: PolaroidGalleryProps) {
  // Predefined rotations to ensure a consistent but organic look
  const rotations = [-2, 1.5, -1, 2, -1.5];

  return (
    <div className="relative w-full my-6 overflow-x-auto no-scrollbar">
      <motion.div
        variants={itemVariants}
        className="flex gap-3 md:gap-4 pb-4 min-w-max"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ rotate: `${rotations[index % rotations.length]}deg` }}
            className="bg-[#F9F9F9] p-1.5 pb-4 shadow-sm border border-black/5 flex flex-col gap-2 w-28 md:w-40"
          >
            <div className="aspect-square bg-zinc-200 overflow-hidden relative">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
            </div>
            <p className="text-zinc-500 font-serif italic text-sm md:text-base text-center px-2 line-clamp-1">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
