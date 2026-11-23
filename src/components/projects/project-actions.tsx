import { CirclePlay, ExternalLink } from "lucide-react";
import { GithubMark } from "@/components/retro/github-mark";
import { RetroTooltip } from "@/components/retro/retro-tooltip";
import type { Project } from "@/types/content";

type Action = { label: string; url?: string; icon: typeof ExternalLink | typeof GithubMark };

export function ProjectActions({ project }: { project: Pick<Project, "title" | "demoUrl" | "repoUrl" | "videoUrl"> }) {
  const actions: Action[] = [
    { label: "Live Demo", url: project.demoUrl, icon: ExternalLink },
    { label: "GitHub Source Code", url: project.repoUrl, icon: GithubMark },
    { label: "Video Walkthrough", url: project.videoUrl, icon: CirclePlay },
  ];

  return (
    <div className="flex items-center gap-2" role="group" aria-label={`${project.title} links`}>
      {actions.map(({ label, url, icon: Icon }) =>
        url ? (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} for ${project.title} (opens in a new tab)`} title={label} className="retro-focus inline-flex size-10 items-center justify-center border-2 border-electric bg-surface-elevated text-cyan transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-electric hover:text-foreground sm:size-11">
            <Icon width={18} height={18} aria-hidden="true" />
          </a>
        ) : (
          <RetroTooltip key={label} label={`${label} for ${project.title}`}><Icon width={18} height={18} aria-hidden="true" /></RetroTooltip>
        ),
      )}
    </div>
  );
}
