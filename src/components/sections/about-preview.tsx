import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CyberSectionHeading } from "@/components/retro/cyber-section-heading";
import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroButton } from "@/components/retro/retro-button";
import { RetroWindow } from "@/components/retro/retro-window";
import { Reveal } from "@/components/sections/reveal";
import { education, recognition } from "@/content/education";

export function AboutPreview() {
  return (
    <section id="about-preview" aria-labelledby="about-preview-heading" className="scroll-mt-32 border-y-2 border-electric/60 bg-surface/35">
      <div className="container-site grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <CyberSectionHeading id="about-preview-heading" index="02" label="ABOUT" description="I focus on backend development and AI applications, with a strong foundation in computer science. My work spans reliable services, document search, and applied machine learning.">Curiosity backed by engineering<span className="text-neon">.</span></CyberSectionHeading>
          <RetroButton asChild tone="outline" className="mt-8"><Link href="/about">More about me <ArrowRight size={16} aria-hidden="true" /></Link></RetroButton>
        </Reveal>
        <Reveal>
          <RetroWindow title="education.records" status="2 ENTRIES" tone="blue" contentClassName="p-5 sm:p-7">
            <div className="space-y-0">{education.map((item, index) => (
              <div key={item.degree} className={index > 0 ? "border-t border-electric/50 py-5" : "pb-5"}>
                <p className="font-mono text-[10px] text-cyan">RECORD_0{index + 1}</p>
                <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground">{item.degree}</h3>
                <p className="mt-2 text-sm text-sky">{item.institution}</p>
                <p className="mt-1 font-mono text-[11px] leading-5 text-muted">{item.period} · {item.score}</p>
              </div>
            ))}</div>
            <div className="border-t border-electric/50 pt-5"><NeonBadge tone="pink">{recognition[0].title} · {recognition[0].year}</NeonBadge></div>
          </RetroWindow>
        </Reveal>
      </div>
    </section>
  );
}
