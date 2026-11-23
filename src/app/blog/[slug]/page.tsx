import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { BlogPostLayout, blogMdxComponents } from "@/components/blog/blog-post-layout";
import { siteIdentity } from "@/content/site";
import { getPublishedPost, getPublishedPostSummaries } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPublishedPostSummaries()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();
  const url = `${siteIdentity.siteUrl}/blog/${post.slug}`;
  const title = `${post.title} | ${siteIdentity.name}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article", url, title, description: post.description,
      publishedTime: post.publishedAt, modifiedTime: post.updatedAt,
      tags: [...post.tags],
      images: post.coverImage ? [{ url: `${siteIdentity.siteUrl}${post.coverImage}`, alt: post.coverImageAlt }] : undefined,
    },
    twitter: { card: post.coverImage ? "summary_large_image" : "summary", title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();
  const { content } = await compileMDX({ source: post.body, components: blogMdxComponents, options: { mdxOptions: { remarkPlugins: [remarkGfm] } } });
  return <BlogPostLayout post={post}>{content}</BlogPostLayout>;
}
