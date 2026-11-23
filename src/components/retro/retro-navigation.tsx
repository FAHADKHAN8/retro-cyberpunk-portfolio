"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { StatusIndicator } from "@/components/retro/status-indicator";
import { navigation, siteIdentity } from "@/content/site";
import { cn } from "@/lib/utils";

export function RetroNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); menuButtonRef.current?.focus(); }
    }
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.removeEventListener("pointerdown", onPointerDown); };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-electric bg-background/95 backdrop-blur-md">
      <div className="hidden border-b border-electric/40 bg-surface px-6 py-1.5 font-mono text-[10px] uppercase tracking-[.14em] text-sky md:block">
        <div className="container-site flex items-center justify-between"><span>FK_OS / PORTFOLIO INTERFACE</span><StatusIndicator label="System online" /></div>
      </div>
      <div ref={navRef} className="container-site relative flex min-h-17 items-center justify-between gap-4 py-2">
        <Link href="/" aria-label="Mohammad Fahad Khan, home" className="retro-focus inline-flex shrink-0 items-center gap-3">
          <span aria-hidden="true" className="flex size-10 items-center justify-center border-2 border-cyan bg-electric font-pixel text-[10px] text-foreground shadow-[3px_3px_0_var(--cyber-purple)]">FK</span>
          <span className="hidden font-display text-[11px] font-bold tracking-[.08em] text-foreground sm:inline">M. F. KHAN</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("retro-focus border-b-2 border-transparent px-2.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wide text-muted transition-colors hover:border-cyan hover:text-cyan", active && "border-neon text-foreground")}>{item.label}</Link>;
          })}
        </nav>
        <a href={siteIdentity.resumePath} download={siteIdentity.resumeFilename} className="retro-button hidden min-h-9 px-3 py-1.5 text-[10px] lg:inline-flex" data-tone="outline">Resume <ArrowDownToLine size={14} aria-hidden="true" /></a>
        <button ref={menuButtonRef} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="retro-focus inline-flex size-11 items-center justify-center border-2 border-electric bg-surface text-cyan lg:hidden">
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <MobileNav open={open} pathname={pathname} onNavigate={() => setOpen(false)} />
      </div>
    </header>
  );
}
