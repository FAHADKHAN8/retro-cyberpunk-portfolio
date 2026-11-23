import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { CyberSectionHeading } from "@/components/retro/cyber-section-heading";
import { RetroButton } from "@/components/retro/retro-button";
import { Reveal } from "@/components/sections/reveal";
import { projects } from "@/content/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  return (
    <section id="featured-projects" aria-labelledby="featured-heading" className="container-site scroll-mt-32 py-20 sm:py-28">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <CyberSectionHeading id="featured-heading" index="01" label="SELECTED PROJECTS" description="Backend, retrieval, and computer vision work grounded in practical problems.">Systems with a purpose<span className="text-neon">.</span></CyberSectionHeading>
          <RetroButton asChild tone="outline" className="w-fit"><Link href="/projects">All projects <ArrowRight size={16} aria-hidden="true" /></Link></RetroButton>
        </div>
      </Reveal>
      <div className="mt-11 grid gap-7 lg:grid-cols-3">
        {featuredProjects.map((project, index) => <Reveal key={project.slug} className="h-full"><ProjectCard project={project} index={index} href={`/projects#${project.slug}`} /></Reveal>)}
      </div>
    </section>
  );
}
