import type { MetadataRoute } from "next";
import { siteIdentity } from "@/content/site";
import { getPublishedPostSummaries } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/about", "/projects", "/contact", "/blog"];
  const posts = await getPublishedPostSummaries();
  return [
    ...pages.map((path) => ({ url: `${siteIdentity.siteUrl}${path}` })),
    ...posts.map((post) => ({ url: `${siteIdentity.siteUrl}/blog/${post.slug}`, lastModified: post.updatedAt ?? post.publishedAt })),
  ];
}
