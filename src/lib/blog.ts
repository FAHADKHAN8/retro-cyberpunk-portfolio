import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostSummary } from "@/types/blog";

const blogDirectory = path.join(process.cwd(), "content", "blog");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function requiredText(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${file}: ${field} must be a non-empty string`);
  return value.trim();
}

function validDate(value: unknown, field: string, file: string): string {
  const text = requiredText(value, field, file);
  if (!datePattern.test(text) || Number.isNaN(Date.parse(`${text}T00:00:00Z`)) || new Date(`${text}T00:00:00Z`).toISOString().slice(0, 10) !== text) {
    throw new Error(`${file}: ${field} must be a valid YYYY-MM-DD date`);
  }
  return text;
}

function readPublishedPost(file: string, body: string, data: Record<string, unknown>): BlogPost {
  const filenameSlug = file.slice(0, -4);
  const slug = requiredText(data.slug, "slug", file);
  if (!slugPattern.test(slug) || slug !== filenameSlug) throw new Error(`${file}: slug must match the lowercase kebab-case filename`);

  const title = requiredText(data.title, "title", file);
  const description = requiredText(data.description, "description", file);
  const publishedAt = validDate(data.publishedAt, "publishedAt", file);
  const updatedAt = data.updatedAt === undefined ? undefined : validDate(data.updatedAt, "updatedAt", file);
  if (updatedAt && updatedAt < publishedAt) throw new Error(`${file}: updatedAt cannot precede publishedAt`);

  const category = requiredText(data.category, "category", file);
  if (!Array.isArray(data.tags) || !data.tags.every((tag) => typeof tag === "string" && tag.trim())) throw new Error(`${file}: tags must be an array of non-empty strings`);
  const tags = data.tags.map((tag: string) => tag.trim());

  const coverImage = data.coverImage === undefined ? undefined : requiredText(data.coverImage, "coverImage", file);
  if (coverImage && (!coverImage.startsWith("/images/blog/") || coverImage.includes(".."))) throw new Error(`${file}: coverImage must be a local /images/blog/ path`);
  if (coverImage && !existsSync(path.join(process.cwd(), "public", coverImage.slice(1)))) throw new Error(`${file}: coverImage does not exist in public/`);
  const coverImageAlt = coverImage ? requiredText(data.coverImageAlt, "coverImageAlt", file) : undefined;

  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const computedReadingTime = Math.max(1, Math.ceil(words / 220));
  const readingTimeMinutes = data.readingTimeMinutes === undefined ? computedReadingTime : data.readingTimeMinutes;
  if (typeof readingTimeMinutes !== "number" || !Number.isInteger(readingTimeMinutes) || readingTimeMinutes < 1) throw new Error(`${file}: readingTimeMinutes must be a positive integer`);
  if (!body.trim()) throw new Error(`${file}: published posts need a body`);

  return { slug, title, description, publishedAt, updatedAt, tags, category, readingTimeMinutes, coverImage, coverImageAlt, status: "published", body };
}

/** Reads checked-in MDX at build time. Underscore-prefixed templates and drafts never become public posts. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const files = (await readdir(blogDirectory)).filter((file) => file.endsWith(".mdx") && !file.startsWith("_"));
  const posts = await Promise.all(files.map(async (file) => {
    const source = await readFile(path.join(blogDirectory, file), "utf8");
    const parsed = matter(source);
    if (parsed.data.status !== "published") return null;
    return readPublishedPost(file, parsed.content, parsed.data as Record<string, unknown>);
  }));
  return posts.filter((post): post is BlogPost => post !== null).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}

export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  if (!slugPattern.test(slug)) return null;
  return (await getPublishedPosts()).find((post) => post.slug === slug) ?? null;
}

export async function getPublishedPostSummaries(): Promise<BlogPostSummary[]> {
  return (await getPublishedPosts()).map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    tags: post.tags,
    category: post.category,
    readingTimeMinutes: post.readingTimeMinutes,
    coverImage: post.coverImage,
    coverImageAlt: post.coverImageAlt,
    status: post.status,
  }));
}
