import { LinkCard } from "./ui/LinkCard";

export interface BuildingProps {
  id?: number;
  title: string;
  description: string;
  link?: string;
}

export function Building({ title, description, link }: BuildingProps) {
  return <LinkCard title={title} description={description} link={link} />;
}
