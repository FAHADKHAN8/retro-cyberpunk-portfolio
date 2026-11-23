# Publishing technical articles

Articles are local MDX files in `content/blog/`. The site reads them during the Next.js build; there is no database, CMS, or runtime content API. Start by copying `content/blog/_template.mdx` to a lowercase kebab-case filename such as `content/blog/query-planning.mdx`.

MDX can contain JSX. Review article files like application code before merging them; this loader is intended for trusted, checked-in content only.

## Required frontmatter

```yaml
---
slug: query-planning
title: "A specific article title"
description: "One sentence describing what readers will learn."
publishedAt: "YYYY-MM-DD"
category: "Backend engineering"
tags:
  - Python
  - Databases
status: draft
---
```

The `slug` must match the filename and becomes `/blog/query-planning`. Use a real publication date in `YYYY-MM-DD` format. Optional fields are `updatedAt` (same date format), `readingTimeMinutes` (positive integer; otherwise calculated from the body), and `coverImage` (a local path under `/images/blog/`). When using `coverImage`, also provide descriptive `coverImageAlt`. Published frontmatter is validated during the build. Incomplete drafts can remain in the folder without appearing publicly.

## Write and preview

- Write standard Markdown or MDX in the body. Headings, lists, links, fenced code blocks, inline code, and GitHub Flavored Markdown tables are supported.
- Use fenced code blocks with a language name, for example ` ```python `, followed by code and a closing fence. Code is readable and scrollable; syntax highlighting is not installed.
- Put images in `public/images/blog/`. For images inside an article, use `<BlogImage src="/images/blog/diagram.png" alt="Describe the diagram" width={1200} height={675} />` so dimensions reserve space and the image stays responsive. A `coverImage` is displayed in a 16:9 frame.
- Keep `status: draft` while writing. The template filename begins with `_` and is always ignored. Drafts do not appear in `/blog`, static article routes, or the sitemap.
- Run `npm.cmd run dev` to preview the site. A draft deliberately has no public URL; change it to `status: published` locally to preview its page, then switch it back before committing if it is not ready.

## Publish

Set `status: published`, confirm all metadata and links, then run:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

The build generates `/blog/<slug>` and adds the article to `/blog` and `/sitemap.xml`. Commit the MDX file and any images, then push to the branch connected to Vercel. If the Vercel project is configured for GitHub deployments, that push creates a deployment; check the Vercel dashboard for the result. No article is live until the deployment succeeds.

Update an article by editing the same file and setting `updatedAt` to the actual revision date. Keep the filename and slug stable so existing links continue to work.
