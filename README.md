# Mohammad Fahad Khan — Portfolio

A Next.js App Router portfolio for Mohammad Fahad Khan, built with TypeScript, Tailwind CSS, shadcn-style UI primitives, Motion for React, and Lucide React. Its retro-electro interface is CSS-based. Portfolio content lives in typed files rather than UI components.

## Project structure

```text
content/blog/                Local MDX articles and unpublished template
docs/BLOG_GUIDE.md           Article publishing instructions
public/resume.pdf            Public resume download
src/app/                     App Router pages, metadata, sitemap, and global CSS
src/components/blog/         Blog listing and article presentation
src/components/layout/       Header, mobile menu, and footer
src/components/projects/     Project cards and optional action links
src/components/retro/        Shared retro design primitives
src/components/sections/     Homepage sections
src/components/ui/           Shared shadcn-style primitives
src/content/                 Verified portfolio data and canonical links
src/lib/                     Shared utilities and server-side blog loader
src/types/                   Shared content types
```

The original plan, starter prompt, content checklist, and canonical source resume remain at the repository root. `public/resume.pdf` is the served copy.

## Local development

Use Node.js 22.13+ or 24+ with npm. In PowerShell, use `npm.cmd` when `npm.ps1` is blocked by execution policy.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open `http://localhost:3000`. The site has `/`, `/projects`, `/about`, `/contact`, `/blog`, and a generated `/sitemap.xml`. Article pages appear at `/blog/<slug>` only for published posts.

## Quality checks

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

`npm.cmd run start` serves a completed production build locally. No test runner is configured yet; the commands above are the available project checks.

## Updating content

- Canonical contact and profile links and the production site URL: `src/content/site.ts`.
- Projects and optional `demoUrl`, `repoUrl`, and `videoUrl`: `src/content/projects.ts`. Leave unverified URLs absent. All three action icons remain visible with “Coming soon” states when URLs are missing.
- Experience, education, certifications, and skills: `src/content/`.
- Resume: `public/resume.pdf`; the download filename is set in `src/content/site.ts`.
- Open content and asset questions: `CONTENT_TODO.md`.
- Blog: see [docs/BLOG_GUIDE.md](docs/BLOG_GUIDE.md). Copy `content/blog/_template.mdx`, write the article, set `status: published`, and build. Drafts and the template are excluded from public pages and the sitemap.

The retro UI primitives are in `src/components/retro/`; color tokens, animations, article typography, and reduced-motion rules are in `src/app/globals.css`.

## Vercel deployment

The app builds with `npm.cmd run build` and needs no database, API keys, or CMS. With this GitHub repository connected to a Vercel project, pushing a commit to the configured production branch triggers a deployment. Confirm the build and live routes in the Vercel dashboard. This repository task does not push or deploy automatically.

Project case-study routes remain a separate future milestone; featured cards currently lead to the corresponding entries on `/projects`.
