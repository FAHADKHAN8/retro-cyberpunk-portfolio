import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CyberSectionHeading } from "@/components/retro/cyber-section-heading";
import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroWindow } from "@/components/retro/retro-window";
import { StatusIndicator } from "@/components/retro/status-indicator";
import { Reveal } from "@/components/sections/reveal";
import { experiences } from "@/content/experience";

export function ExperienceSection() {
  const internship = experiences[0];
  return (
    <section id="experience" aria-labelledby="experience-heading" className="container-site scroll-mt-32 py-20 sm:py-28">
      <Reveal><CyberSectionHeading id="experience-heading" index="03" label="EXPERIENCE">Work in context<span className="text-neon">.</span></CyberSectionHeading></Reveal>
      <Reveal className="mt-10">
        <RetroWindow title="experience.log" tone="pink" status="INTERNSHIP" contentClassName="grid gap-0 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
          <div className="p-6 sm:p-9">
            <StatusIndicator label="Record found" />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-cyan">{internship.organization}</p>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground sm:text-2xl">{internship.role}</h3>
            <p className="mt-3 font-mono text-xs leading-6 text-sky">{internship.location} · {internship.period}</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted">{internship.summary}</p>
            <Link href="/about" className="retro-focus mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-cyan hover:text-neon">Experience and background <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="border-t-2 border-electric/60 bg-background/35 p-6 sm:p-9 lg:border-l-2 lg:border-t-0">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-neon">SYSTEM LOG / CONTRIBUTIONS</p>
            <ol className="mt-6 space-y-5">{internship.contributions.map((item, index) => <li key={item} className="flex gap-4 text-sm leading-7 text-foreground"><span className="font-mono text-xs text-cyan">0{index + 1}&gt;</span><span>{item}</span></li>)}</ol>
            <div className="mt-8 flex flex-wrap gap-2">{internship.technologies.map((technology) => <NeonBadge key={technology}>{technology}</NeonBadge>)}</div>
          </div>
        </RetroWindow>
      </Reveal>
    </section>
  );
}
