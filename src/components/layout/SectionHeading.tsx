import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeadingProps {
  title: string;
  /** Internal route path. When provided, the heading becomes a navigable link with an arrow icon. */
  href?: string;
}

/**
 * Small ALL-CAPS section label used throughout Portfolio and Resume pages.
 * When `href` is provided, renders as a hoverable link with an ArrowUpRight icon.
 */
export function SectionHeading({ title, href }: SectionHeadingProps) {
  const label = (
    <h2 className="text-xs uppercase tracking-widest font-medium">{title}</h2>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="text-white/40 hover:text-white transition-colors flex items-center justify-start"
      >
        {label}
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    );
  }

  return (
    <div className="text-white/40 flex items-center justify-start">
      {label}
      {/* Spacer keeps alignment consistent with linked headings */}
      <div className="w-4 h-4" />
    </div>
  );
}
