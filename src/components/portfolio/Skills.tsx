import { SkillCategoryProps } from "@/types";

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-y-2">
      <span className="text-[13px] text-white/30 w-full sm:w-32 shrink-0 pt-1 font-mono uppercase tracking-wider">
        {category}
      </span>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/3 border border-white/5 text-[13px] text-white/60 hover:text-white hover:border-white/20 transition-all cursor-default"
          >
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
