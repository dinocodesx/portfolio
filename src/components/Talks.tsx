export interface TalkProps {
  title: string;
  date: string;
  location: string;
  link: string;
}

export function Talks({ title, date, location, link }: TalkProps) {
  return (
    <a href={link} className="group block space-y-1">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-white font-medium group-hover:underline underline-offset-4">
          {title}
        </h3>
        <span className="text-[10px] uppercase tracking-wider opacity-50 whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-sm opacity-50">{location}</p>
    </a>
  );
}
