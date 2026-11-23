import { BlogCard } from "@/components/blog/blog-card";
import { BlogEmptyState } from "@/components/blog/blog-empty-state";
import type { BlogPostSummary } from "@/types/blog";

export function BlogGrid({ posts }: { posts: readonly BlogPostSummary[] }) {
  if (posts.length === 0) return <BlogEmptyState />;
  return <div className="grid gap-7 md:grid-cols-2">{posts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}</div>;
}
