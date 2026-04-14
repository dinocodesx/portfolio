export function SkillCategory({
  category,
  skills,
}: {
  category: string;
  skills: { name: string }[];
  [key: string]: any;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-y-2">
      <span className="text-[14px] text-white/40 w-full sm:w-32 shrink-0">
        {category}
      </span>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[#121212] border border-white/5 text-[13px] text-white/70 hover:text-white hover:border-white/20 transition-all cursor-default"
          >
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
