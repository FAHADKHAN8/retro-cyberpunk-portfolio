# Codex Starter Prompt — Developer Portfolio

You are my senior frontend engineer and UI/UX implementation partner. Build a high-quality production-ready personal developer portfolio from the specification attached as `PORTFOLIO_PROJECT_PLAN.md`.

## Instructions

1. **Read `PORTFOLIO_PROJECT_PLAN.md` completely before modifying any files.** Treat it as the product specification and acceptance checklist.
2. Inspect the current repository first; if it is empty, scaffold Next.js with App Router, TypeScript strict mode, Tailwind CSS, ESLint and a `src/` directory. Follow stable installed dependency versions.
3. The person featured is **Mohammad Fahad Khan**, a software engineer focused on backend development and practical AI systems.
4. **CRITICAL CONTENT RULE:** `ltm_get_resume.pdf` is the only authoritative resume for email and profile links. Use these exact URLs everywhere:
   - GitHub: `https://github.com/FAHADKHAN8`
   - LinkedIn: `https://www.linkedin.com/in/fahadmdkahn`
   - Coding profile: `https://takeuforward.org/profile/fahad_8`
   - Email: `mohammadfahadkhan111@gmail.com`
   Other CV versions may contain incorrect links. Do not substitute their values. Do not invent individual project repo or demo URLs.
5. If I provide `ltm_get_resume.pdf` in the working directory, place a copy at `public/resume.pdf` for the Download Resume link. If the PDF is not present, do not make a broken button: track it in `CONTENT_TODO.md`.
6. Use a premium editorial/technical design: dark-first, minimal violet accents, sophisticated typography, expressive but restrained motion, exceptional responsive layout. Avoid a standard generic developer portfolio template or gratuitous glowing effects.
7. Use Server Components by default; use Motion for React, shadcn/ui and Lucide selectively. Keep dependencies lean. Build with accessible semantic HTML and `prefers-reduced-motion` support.
8. Source project/experience content from the plan, without invented metrics, dates, screenshots, repositories, live demos, patent claims or certifications. Clearly attribute NIC work to the internship.
9. Organize content as typed centralized data and build reusable components. Plan and implement route-specific SEO metadata, branded 404, responsive nav, and proper external-link semantics.
10. Do not add a backend, database, auth, CMS, email server, or AI chatbot in MVP.

## Work request for this first run: M0 + M1 ONLY

Implement the initial foundation and site shell:
- Check current repo; scaffold if necessary.
- Set up project config, CSS tokens, typography and font loading, layout/container conventions.
- Create typed canonical `siteIdentity` configuration and seeded, sourced project/experience data.
- Build excellent responsive header, mobile navigation, footer, accessible skip link, shared buttons/cards/tags.
- Establish route skeletons for Home, Projects, About and Contact, with coherent non-placeholder visible structure; leave deep content for later milestones.
- Create `CONTENT_TODO.md` listing truly missing data/assets.
- Add meaningful README setup commands and content-edit instructions.
- Run lint, typecheck and production build and fix any failures.

## Process and final response

Before coding, give a short implementation strategy and state what files you will create. Then make the changes in this run—don't stop at a plan. At the end, summarize completed work, the repository tree, quality-check outputs, remaining blockers, and the exact next milestone (M2 homepage). Don't ask clarifying questions about details already specified; use sensible design defaults and flag only genuinely missing owner-provided assets.
