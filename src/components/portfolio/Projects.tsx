import { LinkCard } from "@/components/layout/LinkCard";
import { ProjectProps } from "@/types";

export function Projects({ title, description, github, live }: ProjectProps) {
  const link = live || github;
  return (
    <LinkCard
      title={title}
      description={description}
      link={link}
      dimArrow={false}
    />
  );
}
