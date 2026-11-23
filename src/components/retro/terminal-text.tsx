import { cn } from "@/lib/utils";

export function TerminalText({ lines, className }: { lines: readonly string[]; className?: string }) {
  return (
    <div className={cn("space-y-2 font-mono text-xs leading-6 text-sky sm:text-sm", className)}>
      {lines.map((line, index) => <p key={line} className="boot-line" style={{ animationDelay: `${index * 130}ms` }}><span className="mr-2 text-cyan" aria-hidden="true">&gt;</span>{line}</p>)}
    </div>
  );
}
