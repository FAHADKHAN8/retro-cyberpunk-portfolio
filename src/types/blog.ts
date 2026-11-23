export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: readonly string[];
  category: string;
  readingTimeMinutes: number;
  coverImage?: string;
  coverImageAlt?: string;
  status: "published";
  body: string;
};

export type BlogPostSummary = Omit<BlogPost, "body">;
