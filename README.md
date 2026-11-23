# Mohammad Fahad Khan — Portfolio

Next.js App Router portfolio for Mohammad Fahad Khan. The site uses TypeScript, Tailwind CSS, shadcn-style UI primitives, Motion for React, and Lucide React. The homepage and site shell use a retro-electro interface built from CSS, typed content, and reusable components.

## Run locally

Use Node.js 22.13+ or 24+ with npm. The workspace's Node 23.7.0 completed the checks but produced a dependency engine warning. In PowerShell, use `npm.cmd` if `npm.ps1` is blocked by execution policy.

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000.

## Checks

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

## Content and assets

- Canonical contact and profile links: `src/content/site.ts`.
- Project records and optional `demoUrl`, `repoUrl`, `videoUrl`: `src/content/projects.ts`. Leave unverified URLs absent. `ProjectActions` keeps all three icons visible and marks missing destinations “Coming soon.”
- Experience, education, and certifications: `src/content/`.
- Resume: `public/resume.pdf`. Its download name is set in `src/content/site.ts`.
- Open items for the owner: `CONTENT_TODO.md`.
- Retro design primitives and navigation: `src/components/retro/`. Colors, animations, and reduced-motion rules: `src/app/globals.css`.

Milestones M0 through M2 are implemented: application setup, verified data, design tokens, responsive navigation, shared UI, and the complete homepage. Project case studies and their detail routes belong to M3.
