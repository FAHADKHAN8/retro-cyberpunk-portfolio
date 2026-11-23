import { CalendarDays, Clock3 } from "lucide-react";
import type { BlogPostSummary } from "@/types/blog";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" });
}

export function ArticleMetadata({ post, showUpdated = false }: { post: BlogPostSummary; showUpdated?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-sky">
      <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} aria-hidden="true" /><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></span>
      <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{post.readingTimeMinutes} min read</span>
      {showUpdated && post.updatedAt && <span>Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></span>}
    </div>
  );
}
