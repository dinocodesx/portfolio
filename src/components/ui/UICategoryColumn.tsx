import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { itemVariants } from "../../constants/animations";

interface UIItem {
  title: string;
  description: string;
  link: string;
}

interface UICategoryColumnProps {
  heading: string;
  items: UIItem[];
}

/**
 * A single category column in the UI showcase page.
 * Renders a heading and a list of navigable UI component links.
 */
export function UICategoryColumn({ heading, items }: UICategoryColumnProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-12">
      <h2 className="text-white/40 text-sm font-medium">{heading}</h2>
      <div className="space-y-10">
        {items.map((item) => (
          <Link
            to={item.link}
            key={item.link}
            className="space-y-2 group cursor-pointer block"
          >
            <h3 className="text-white font-medium group-hover:underline underline-offset-4 decoration-white/30">
              {item.title}
            </h3>
            <p className="text-white/40 text-[14px] leading-relaxed">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
