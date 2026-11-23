import type { ReactNode } from "react";

export function RetroTooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="retro-tooltip-wrap relative inline-flex">
      <span role="img" tabIndex={0} aria-label={`${label}: Coming soon`} className="retro-focus inline-flex size-10 cursor-not-allowed items-center justify-center border-2 border-electric/55 bg-background text-muted/65 sm:size-11">{children}</span>
      <span role="tooltip" className="retro-tooltip pointer-events-none invisible absolute bottom-full left-1/2 z-20 mb-2 w-max -translate-x-1/2 border-2 border-electric bg-background px-2 py-1 font-mono text-[10px] text-foreground opacity-0 shadow-card transition-opacity">Coming soon</span>
    </span>
  );
}
