export interface BlogProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  readTime: string;
}

export function Blogs({ title, date, excerpt, link, readTime }: BlogProps) {
  return (
    <a href={link} className="group flex flex-col gap-1.5">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <span className="hidden md:block text-[10px] uppercase tracking-wider opacity-50 whitespace-nowrap">
          {date} · {readTime}
        </span>
      </div>
      <p className="text-sm opacity-50">{excerpt}</p>
      <span className="md:hidden text-[10px] uppercase tracking-wider opacity-50 pt-1">
        {date} · {readTime}
      </span>
    </a>
  );
}
