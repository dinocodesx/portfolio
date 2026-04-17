import { LinkCard } from "./ui/LinkCard";

export interface ProjectProps {
  title: string;
  description: string;
  github?: string;
  live?: string;
}

export function Projects({ title, description, github, live }: ProjectProps) {
  const link = live || github;
  return (
    <LinkCard title={title} description={description} link={link} dimArrow={false} />
  );
}
