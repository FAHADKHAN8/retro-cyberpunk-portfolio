"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navigation, siteIdentity } from "@/content/site";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  pathname: string;
  onNavigate: () => void;
};

export function MobileNav({ open, pathname, onNavigate }: MobileNavProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
          className="absolute inset-x-0 top-full mt-2 border-2 border-electric bg-surface p-2 shadow-card lg:hidden"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate} aria-current={pathname === item.href ? "page" : undefined} className={cn("retro-focus block border-l-2 border-transparent px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-muted transition-colors hover:border-cyan hover:bg-surface-elevated hover:text-cyan", pathname === item.href && "border-neon bg-surface-elevated text-foreground")}>
              {item.label}
            </Link>
          ))}
          <a href={siteIdentity.resumePath} download={siteIdentity.resumeFilename} onClick={onNavigate} className="retro-focus mt-2 block border-t border-electric/50 px-4 py-3 font-mono text-xs font-bold uppercase text-cyan">Download resume</a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
