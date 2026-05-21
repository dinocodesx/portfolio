import { LinkCard } from "@/components/layout/LinkCard";
import { BuildingProps } from "@/types";

export function Building({ title, description, link }: BuildingProps) {
  return <LinkCard title={title} description={description} link={link} />;
}
