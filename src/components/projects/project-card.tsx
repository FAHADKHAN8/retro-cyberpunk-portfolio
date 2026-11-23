import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectActions } from "@/components/projects/project-actions";
import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroWindow } from "@/components/retro/retro-window";
import type { Project } from "@/types/content";

type ProjectCardProps = { project: Project; index: number; href?: string; headingLevel?: 2 | 3 };

export function ProjectCard({ project, index, href, headingLevel = 3 }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article id={project.slug} className="group h-full scroll-mt-36">
      <RetroWindow title={`${project.slug}.app`} tone={index % 2 === 0 ? "pink" : "blue"} status={`PROJECT 0${index + 1}`} className="h-full transition-transform duration-200 hover:-translate-y-1 motion-reduce:transform-none" contentClassName="flex flex-1 flex-col">
        <div aria-label="Abstract system visual, not a product screenshot" className="cyber-grid relative flex h-32 items-center justify-between overflow-hidden border-b-2 border-electric/65 bg-background/80 px-6 sm:h-40">
          <span className="absolute left-5 top-4 font-mono text-[9px] uppercase tracking-[.16em] text-sky">ABSTRACT SYSTEM VISUAL</span>
          <span aria-hidden="true" className="mt-5 font-display text-5xl font-bold text-electric/60 sm:text-6xl">0{index + 1}</span>
          <div aria-hidden="true" className="mt-7 flex items-center gap-2"><span className="size-4 border-2 border-cyan bg-cyan/25" /><span className="h-px w-8 bg-neon sm:w-14" /><span className="size-8 border-2 border-neon bg-neon/20" /><span className="h-px w-8 bg-neon sm:w-14" /><span className="size-4 border-2 border-cyan bg-cyan/25" /></div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2"><NeonBadge tone="cyan">{project.category.toUpperCase()}</NeonBadge><span className="font-mono text-[10px] text-muted">{project.period}</span></div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[.12em] text-neon">{project.subtitle}</p>
          <Heading className="mt-2 font-display text-lg font-bold leading-snug text-foreground sm:text-xl">{project.title}</Heading>
          <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((technology) => <NeonBadge key={technology}>{technology}</NeonBadge>)}</div>
          <div className="mt-auto flex flex-wrap items-end justify-between gap-5 border-t border-electric/50 pt-5">
            {href ? <Link href={href} className="retro-focus inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase text-cyan hover:text-neon">View in projects <ArrowUpRight size={15} aria-hidden="true" /></Link> : <span className="font-mono text-[10px] text-muted">PROJECT RECORD</span>}
            <ProjectActions project={project} />
          </div>
        </div>
      </RetroWindow>
    </article>
  );
}
