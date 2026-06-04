import { BookProps } from "@/types";

export function Books({ title, authors, description, link }: BookProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <span className="hidden md:block text-[10px] uppercase tracking-wider opacity-50 whitespace-nowrap">
          {authors}
        </span>
      </div>
      <p className="text-sm opacity-50 line-clamp-2">{description}</p>
      <span className="md:hidden text-[10px] uppercase tracking-wider opacity-50 pt-1">
        {authors}
      </span>
    </a>
  );
}
