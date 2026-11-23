import { RetroProjectCard } from "@/components/retro/retro-project-card";
import type { Project } from "@/types/content";

export function ProjectCard(props: { project: Project; index: number; href?: string; headingLevel?: 2 | 3 }) {
  return <RetroProjectCard {...props} />;
}
