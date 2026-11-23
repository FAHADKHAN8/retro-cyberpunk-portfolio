import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroWindow } from "@/components/retro/retro-window";
import { TerminalText } from "@/components/retro/terminal-text";

export function BlogEmptyState() {
  return (
    <RetroWindow title="blog_module.exe" status="ARCHIVE EMPTY" tone="pink" contentClassName="cyber-grid p-6 sm:p-10">
      <NeonBadge tone="cyan">NO PUBLISHED ARTICLES</NeonBadge>
      <div className="mt-7"><TerminalText lines={["INITIALIZING KNOWLEDGE ARCHIVE...", "ARTICLES COMING SOON"]} /></div>
      <p className="mt-7 max-w-xl text-sm leading-7 text-muted">Technical tutorials, engineering notes, and project walkthroughs will appear here when they are ready to publish.</p>
    </RetroWindow>
  );
}
