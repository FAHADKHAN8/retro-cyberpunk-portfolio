import type { Metadata } from "next";
import { ArrowUpRight, Code2, Mail, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import { siteIdentity } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Mohammad Fahad Khan." };

const contactMethods = [
  { label: "Email", value: siteIdentity.email, href: `mailto:${siteIdentity.email}`, icon: Mail, external: false },
  { label: "GitHub", value: "FAHADKHAN8", href: siteIdentity.github, icon: Code2, external: true },
  { label: "LinkedIn", value: "fahadmdkahn", href: siteIdentity.linkedin, icon: UsersRound, external: true },
  { label: "Coding profile", value: "fahad_8", href: siteIdentity.codingProfile, icon: ArrowUpRight, external: true },
] as const;

export default function ContactPage() {
  return (
    <div className="container-site py-16 sm:py-22">
      <p className="font-mono text-xs tracking-[.2em] text-accent">03 / CONTACT</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-.055em] sm:text-6xl">Let&apos;s connect<span className="text-accent">.</span></h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted">For engineering roles, collaboration, or a conversation about backend and applied AI work, reach out by email or connect on a verified profile.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">{contactMethods.map(({ label, value, href, icon: Icon, external }) => (
        <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <Card className="flex min-h-36 items-start justify-between gap-4 transition-colors group-hover:border-accent/60">
            <div className="min-w-0"><p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p><p className="mt-5 break-all text-sm font-medium text-foreground sm:text-base">{value}</p></div>
            <Icon className="shrink-0 text-accent" size={20} aria-hidden="true" />
          </Card>
        </a>
      ))}</div>
    </div>
  );
}
