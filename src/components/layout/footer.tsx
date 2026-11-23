import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteIdentity, socialLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-electric bg-surface">
      <div className="container-site grid gap-8 py-10 sm:grid-cols-2 sm:items-end">
        <div>
          <Link href="/" className="retro-focus inline-block font-display text-sm font-bold text-foreground">MOHAMMAD FAHAD KHAN</Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">Backend development and practical AI systems.</p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-sky">© {new Date().getFullYear()} {siteIdentity.name} / END OF FILE</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 sm:justify-end">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="retro-focus inline-flex items-center gap-1 font-mono text-xs text-sky transition-colors hover:text-cyan">
              {link.label}<ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
          <a href={`mailto:${siteIdentity.email}`} className="retro-focus font-mono text-xs text-sky transition-colors hover:text-cyan">Email</a>
        </div>
      </div>
    </footer>
  );
}
