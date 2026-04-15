import { ArrowUpRight } from "lucide-react";

export interface BuildingProps {
  id?: number;
  title: string;
  description: string;
  link?: string;
}

export function Building({ title, description, link }: BuildingProps) {
  const content = (
    <>
      <div className="flex items-center gap-1">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block"
    >
      {content}
    </a>
  ) : (
    <div className="group cursor-pointer block">{content}</div>
  );
}
