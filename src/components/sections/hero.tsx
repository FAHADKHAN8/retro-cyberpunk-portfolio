"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Code2, Mail, UsersRound } from "lucide-react";
import { NeonBadge } from "@/components/retro/neon-badge";
import { PixelDivider } from "@/components/retro/pixel-divider";
import { RetroButton } from "@/components/retro/retro-button";
import { RetroWindow } from "@/components/retro/retro-window";
import { StatusIndicator } from "@/components/retro/status-indicator";
import { TerminalText } from "@/components/retro/terminal-text";
import { siteIdentity } from "@/content/site";

const bootLines = [
  "INITIALIZING DEVELOPER PROFILE...",
  "BACKEND / APPLIED AI MODULES LOADED",
  "READY TO EXPLORE",
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b-2 border-electric/70">
      <div aria-hidden="true" className="cyber-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_75%_0%,rgba(101,55,216,.34),transparent_65%)]" />
      <div className="container-site relative grid gap-9 py-14 sm:py-20 lg:min-h-[690px] lg:grid-cols-[minmax(0,1.35fr)_minmax(285px,.65fr)] lg:items-center lg:gap-12 lg:py-24">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-3"><StatusIndicator label="System online" /><NeonBadge tone="pink">PORTFOLIO.EXE</NeonBadge></div>
          <RetroWindow title="developer_profile.sys" tone="pink" status="ID: FK_001" className="max-w-3xl" contentClassName="crt-screen relative p-5 sm:p-8 lg:p-10">
            <div className="relative z-10">
              <p className="font-pixel text-[8px] leading-5 text-cyan sm:text-[10px]">HELLO, WORLD_</p>
              <h1 id="hero-title" className="mt-5 font-display text-[clamp(2.05rem,5.1vw,4.65rem)] font-bold leading-[1.13] tracking-[-.035em] text-foreground">
                Mohammad<br /><span className="text-neon">Fahad Khan</span><span className="text-cyan">.</span>
              </h1>
              <div className="mt-6 max-w-xl"><PixelDivider /></div>
              <p className="mt-6 max-w-xl text-xl font-semibold leading-snug text-foreground sm:text-2xl">I build reliable backends and practical AI systems.</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">MCA student at JIIT Noida and former Python Developer Intern at the National Informatics Centre, where I contributed to document intelligence and semantic search.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <RetroButton asChild tone="pink"><Link href="/projects">Explore projects <ArrowRight size={16} aria-hidden="true" /></Link></RetroButton>
                <RetroButton asChild tone="outline"><a href={siteIdentity.resumePath} download={siteIdentity.resumeFilename}>Download resume</a></RetroButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-electric/45 pt-5 font-mono text-xs">
                <a href={siteIdentity.github} target="_blank" rel="noopener noreferrer" className="retro-focus inline-flex items-center gap-1.5 text-sky hover:text-cyan"><Code2 size={15} aria-hidden="true" />GitHub</a>
                <a href={siteIdentity.linkedin} target="_blank" rel="noopener noreferrer" className="retro-focus inline-flex items-center gap-1.5 text-sky hover:text-cyan"><UsersRound size={15} aria-hidden="true" />LinkedIn</a>
                <a href={siteIdentity.codingProfile} target="_blank" rel="noopener noreferrer" className="retro-focus inline-flex items-center gap-1.5 text-sky hover:text-cyan"><ArrowUpRight size={15} aria-hidden="true" />Coding profile</a>
                <a href={`mailto:${siteIdentity.email}`} className="retro-focus inline-flex items-center gap-1.5 text-sky hover:text-cyan"><Mail size={15} aria-hidden="true" />Email</a>
              </div>
            </div>
          </RetroWindow>
        </div>
        <motion.div initial={false} whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: .2 }} className="min-w-0 lg:rotate-[2deg]">
          <RetroWindow title="boot_sequence.log" status="READ ONLY" contentClassName="p-5 sm:p-7">
            <TerminalText lines={bootLines} />
            <div className="mt-7 border-t border-electric/50 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted">ACTIVE MODULES</p>
              <div className="mt-4 flex flex-wrap gap-2"><NeonBadge>BACKEND</NeonBadge><NeonBadge tone="cyan">RETRIEVAL</NeonBadge><NeonBadge tone="pink">APPLIED ML</NeonBadge></div>
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-electric/50 pt-5 font-mono text-[10px] text-sky"><span>JIIT NOIDA / MCA</span><span className="terminal-cursor" aria-hidden="true" /></div>
          </RetroWindow>
        </motion.div>
      </div>
    </section>
  );
}
