import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogHeader } from "@/components/blog/blog-header";
import { siteIdentity } from "@/content/site";
import { getPublishedPostSummaries } from "@/lib/blog";

const description = "Technical tutorials and engineering notes by Mohammad Fahad Khan on backend development and applied AI.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: `${siteIdentity.siteUrl}/blog` },
  openGraph: { title: `Blog | ${siteIdentity.name}`, description, url: `${siteIdentity.siteUrl}/blog`, type: "website" },
  twitter: { card: "summary", title: `Blog | ${siteIdentity.name}`, description },
};

export default async function BlogPage() {
  const posts = await getPublishedPostSummaries();
  return <div className="container-site py-16 sm:py-24"><BlogHeader /><BlogGrid posts={posts} /></div>;
}
