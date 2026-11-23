import { cn } from "@/lib/utils";

export function StatusIndicator({ label, className }: { label: string; className?: string }) {
  return <span className={cn("inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan", className)}><span aria-hidden="true" className="status-dot size-2 rounded-full bg-cyan" />{label}</span>;
}
