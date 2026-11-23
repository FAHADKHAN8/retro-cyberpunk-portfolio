import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleMetadata } from "@/components/blog/article-metadata";
import { BlogImage } from "@/components/blog/blog-image";
import { NeonBadge } from "@/components/retro/neon-badge";
import { RetroWindow } from "@/components/retro/retro-window";
import type { BlogPost } from "@/types/blog";

export const blogMdxComponents = { BlogImage };

export function BlogPostLayout({ post, children }: { post: BlogPost; children: ReactNode }) {
  return (
    <div className="container-site max-w-[860px] py-14 sm:py-20">
      <Link href="/blog" className="retro-focus inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-cyan hover:text-neon"><ArrowLeft size={16} aria-hidden="true" />Back to blog</Link>
      <RetroWindow title={`${post.slug}.mdx`} status="PUBLISHED" tone="pink" className="mt-8" contentClassName="p-5 sm:p-8 lg:p-12">
        <NeonBadge tone="cyan">{post.category}</NeonBadge>
        <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{post.description}</p>
        <div className="mt-7"><ArticleMetadata post={post} showUpdated /></div>
        <div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <NeonBadge key={tag}>{tag}</NeonBadge>)}</div>
        {post.coverImage && <div className="relative mt-9 aspect-video overflow-hidden border-2 border-electric"><Image src={post.coverImage} alt={post.coverImageAlt ?? post.title} fill sizes="(max-width: 768px) 100vw, 760px" className="object-cover" priority /></div>}
        <article className="blog-prose mt-10 border-t border-electric/50 pt-8">{children}</article>
      </RetroWindow>
    </div>
  );
}
