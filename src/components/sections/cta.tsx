import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { CyberSectionHeading } from "@/components/retro/cyber-section-heading";
import { RetroButton } from "@/components/retro/retro-button";
import { RetroWindow } from "@/components/retro/retro-window";
import { StatusIndicator } from "@/components/retro/status-indicator";
import { Reveal } from "@/components/sections/reveal";
import { siteIdentity, socialLinks } from "@/content/site";

export function ContactCta() {
  return (
    <section id="contact-cta" aria-labelledby="contact-cta-heading" className="container-site scroll-mt-32 py-20 sm:py-28">
      <Reveal>
        <RetroWindow title="communications.terminal" tone="pink" status="CHANNEL OPEN" contentClassName="cyber-grid p-6 sm:p-10 lg:p-14">
          <StatusIndicator label="Contact channel ready" />
          <div className="mt-7"><CyberSectionHeading id="contact-cta-heading" index="05" label="GET IN TOUCH" description="For engineering opportunities or collaboration, reach out by email or connect on a verified profile.">Let&apos;s build something useful<span className="text-neon">.</span></CyberSectionHeading></div>
          <div className="mt-8 flex flex-wrap gap-3">
            <RetroButton asChild tone="pink"><a href={`mailto:${siteIdentity.email}`}><Mail size={16} aria-hidden="true" />Send an email</a></RetroButton>
            <RetroButton asChild tone="outline"><Link href="/contact">Contact options <ArrowRight size={16} aria-hidden="true" /></Link></RetroButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-electric/50 pt-6 font-mono text-xs">
            {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="retro-focus inline-flex items-center gap-1.5 text-sky hover:text-cyan">{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
          </div>
        </RetroWindow>
      </Reveal>
    </section>
  );
}
