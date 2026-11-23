import { CyberSectionHeading } from "@/components/retro/cyber-section-heading";
import { StatusIndicator } from "@/components/retro/status-indicator";

export function BlogHeader() {
  return (
    <header className="mb-12">
      <StatusIndicator label="Knowledge archive" />
      <div className="mt-6 [&_h1]:text-[clamp(2rem,5vw,3.5rem)]">
        <CyberSectionHeading id="blog-heading" index="06" label="BLOG / TECHNICAL WRITING" headingLevel={1} description="Tutorials, engineering notes, and practical lessons from backend development and applied AI.">Engineering notes<span className="text-neon">.</span></CyberSectionHeading>
      </div>
    </header>
  );
}
