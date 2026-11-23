import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArticleMetadata } from "@/components/blog/article-metadata";
import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroWindow } from "@/components/retro/retro-window";
import type { BlogPostSummary } from "@/types/blog";

export function BlogCard({ post, index }: { post: BlogPostSummary; index: number }) {
  return (
    <article className="h-full">
      <RetroWindow title={`${post.slug}.mdx`} status={`ARTICLE 0${index + 1}`} tone={index % 2 === 0 ? "pink" : "blue"} className="h-full" contentClassName="flex flex-1 flex-col p-6 sm:p-7">
        <NeonBadge tone="cyan" className="w-fit">{post.category}</NeonBadge>
        <h2 className="mt-6 font-display text-lg font-bold leading-snug text-foreground sm:text-xl"><Link href={`/blog/${post.slug}`} className="retro-focus hover:text-cyan">{post.title}</Link></h2>
        <p className="mt-4 text-sm leading-7 text-muted">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <NeonBadge key={tag}>{tag}</NeonBadge>)}</div>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-electric/50 pt-5">
          <ArticleMetadata post={post} />
          <Link href={`/blog/${post.slug}`} className="retro-focus inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase text-cyan hover:text-neon">Read article <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </RetroWindow>
    </article>
  );
}
