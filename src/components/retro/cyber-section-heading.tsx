import type { ReactNode } from "react";
import { PixelDivider } from "@/components/retro/pixel-divider";

type CyberSectionHeadingProps = { id: string; index: string; label: string; children: ReactNode; description?: string };

export function CyberSectionHeading({ id, index, label, children, description }: CyberSectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-cyan"><span className="text-neon">[{index}]</span>{label}</div>
      <h2 id={id} className="mt-5 font-display text-[clamp(1.65rem,4vw,3rem)] font-bold leading-[1.2] tracking-tight text-foreground">{children}</h2>
      {description && <p className="mt-5 max-w-xl text-base leading-7 text-muted">{description}</p>}
      <div className="mt-7 w-36"><PixelDivider /></div>
    </div>
  );
}
