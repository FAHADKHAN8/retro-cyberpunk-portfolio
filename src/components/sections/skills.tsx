import { CyberSectionHeading } from "@/components/retro/cyber-section-heading";
import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroWindow } from "@/components/retro/retro-window";
import { Reveal } from "@/components/sections/reveal";
import { capabilities } from "@/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-32 border-y-2 border-electric/60 bg-surface/35">
      <div className="container-site py-20 sm:py-28">
        <Reveal><CyberSectionHeading id="skills-heading" index="04" label="CAPABILITIES" description="Technologies used across documented work and studies. No skill scores or invented experience levels.">Tools for real problems<span className="text-neon">.</span></CyberSectionHeading></Reveal>
        <div className="mt-11 grid gap-7 md:grid-cols-2">{capabilities.map((capability) => (
          <Reveal key={capability.number} className="h-full">
            <RetroWindow title={`module_${capability.number}.sys`} status="READY" tone={Number(capability.number) % 2 === 0 ? "pink" : "blue"} className="h-full" contentClassName="flex flex-1 flex-col p-5 sm:p-7">
              <p className="font-mono text-[10px] text-cyan">MODULE {capability.number} / 04</p>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground sm:text-xl">{capability.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{capability.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">{capability.technologies.map((technology) => <NeonBadge key={technology}>{technology}</NeonBadge>)}</div>
            </RetroWindow>
          </Reveal>
        ))}</div>
      </div>
    </section>
  );
}
