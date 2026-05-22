import { ExperienceProps } from "@/types";

export function Experiences({
  title,
  company,
  location,
  duration,
  description,
  achievements,
  technologies,
  link,
}: ExperienceProps) {
  const content = (
    <div className="space-y-4 group">
      <div className="flex justify-between items-baseline gap-4">
        <div>
          <h3 className="text-white font-medium group-hover:underline underline-offset-4 transition-all">
            {title}
          </h3>
          <p className="text-sm opacity-50">
            {company} · {location}
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-wider opacity-50 whitespace-nowrap">
          {duration}
        </span>
      </div>

      {/*<p className="text-sm leading-relaxed">{description}</p>

      <ul className="space-y-2">
        {Object.values(achievements).map((achievement, index) => (
          <li key={index} className="text-sm flex gap-2">
            <span className="text-white opacity-30">—</span>
            <span className="opacity-70">{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
          >
            {tech.replace(",", "")}
          </span>
        ))}
      </div>*/}
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}
