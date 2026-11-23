import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: "pink" | "blue";
  status?: string;
};

export function RetroWindow({ title, children, className, contentClassName, tone = "blue", status }: RetroWindowProps) {
  return (
    <div className={cn("retro-window overflow-hidden", className)}>
      <div className="retro-titlebar" data-tone={tone}>
        <div aria-hidden="true" className="flex shrink-0 gap-1.5"><span className="retro-control" /><span className="retro-control" /><span className="retro-control" /></div>
        <span className="min-w-0 truncate font-mono text-[10px] font-bold uppercase tracking-[.1em] sm:text-xs">{title}</span>
        {status && <span className="ml-auto hidden shrink-0 font-mono text-[10px] text-foreground/85 sm:inline">{status}</span>}
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
}
