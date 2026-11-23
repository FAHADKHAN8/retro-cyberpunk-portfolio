import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Backend, AI, computer vision, and machine learning projects by Mohammad Fahad Khan.",
};

export default function ProjectsPage() {
  return (
    <div className="container-site py-16 sm:py-22">
      <p className="font-mono text-xs tracking-[.2em] text-accent">01 / WORK</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-6xl">Selected work<span className="text-accent">.</span></h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted">Backend systems, document retrieval, computer vision, and applied machine learning. The NIC work below was an internship contribution.</p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} headingLevel={2} />)}
      </div>
    </div>
  );
}
