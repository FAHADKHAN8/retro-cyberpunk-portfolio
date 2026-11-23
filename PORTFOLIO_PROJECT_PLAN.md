# Mohammad Fahad Khan — Developer Portfolio
## Codex Implementation Plan & Product Specification

**Status:** Ready for implementation  
**Revision:** 1.0 — 22 November 2026  
**Primary objective:** A polished, accessible, SEO-friendly, mobile-first developer portfolio that communicates software engineering, backend, and applied AI experience credibly.  
**Preferred framework:** Next.js (App Router) + TypeScript.  
**Source precedence:** `ltm_get_resume.pdf` is the **single source of truth for all profile/contact links and email**, regardless of what other uploaded resumes say. Other supplied resumes can be consulted for experience, projects, and qualifications, but they **cannot overwrite canonical links**.

---

## 1. Product vision

Build a memorable portfolio that helps recruiters and engineering managers understand, within 30 seconds:

1. Who Mohammad Fahad Khan is: software engineer with backend and AI application experience; MCA student at JIIT Noida.
2. What he has built: document intelligence/RAG, secure real-time messaging, real-time fire detection, applied ML.
3. How he thinks: engineering trade-offs, architectural choices, results and limitations presented in project case studies.
4. Where to go next: GitHub, LinkedIn, coding profile, resume, and email.

**Audience:** SDE/backend recruiters, AI/ML engineering recruiters, internship hiring managers, collaborators.  
**Design direction:** Modern editorial/technical, premium dark-first experience, restrained motion, crisp typography, purposeful visuals; not a generic template.  
**Priorities:** correctness > accessibility > performance > visual polish > animations.

### Non-goals for MVP
- Authentication, user accounts, dashboard, database, CMS, admin panel, analytics backend.
- NestJS, FastAPI, custom API server, or an AI chatbot. These may be considered in phase 2 only when justified.
- Automatically scraping GitHub, sending emails from the server, displaying unverified live activity.
- Claiming projects are deployed, patented, published, open-sourced, or benchmarked without a verified source.

---

## 2. Canonical identity and outbound links — DO NOT CHANGE

All values below are copied from `ltm_get_resume.pdf` (the canonical resume supplied by the owner). Preserve exact spelling and punctuation.

```ts
export const siteIdentity = {
  name: "Mohammad Fahad Khan",
  email: "mohammadfahadkhan111@gmail.com",
  phone: "8293839994", // Keep private by default on the website; available in CV
  github: "https://github.com/FAHADKHAN8",
  linkedin: "https://www.linkedin.com/in/fahadmdkahn",
  codingProfile: "https://takeuforward.org/profile/fahad_8",
  location: "India", // No street address; city is optional, do not assert current city
} as const;
```

- All contact CTAs must use `mailto:mohammadfahadkhan111@gmail.com`.
- Use the exact LinkedIn slug `fahadmdkahn`, even if it appears misspelled.
- Use the exact coding-profile slug `fahad_8`, **not** `fahad8`.
- Avoid hard-coding the same URLs in multiple components; use the central site config.
- **GitHub repository links and project demo URLs are NOT supplied by the resume.** Do not guess repository slugs. Populate only after inspecting and verifying the repository, otherwise omit the link and place a TODO in the data file.
- Do not treat the listed URLs as proof that the live pages currently resolve; verify at implementation time if web access exists.

### Resume download
- Place a copy of the supplied **`ltm_get_resume.pdf`** at `public/resume.pdf` when that source file is available to Codex, or request it to be added. The starter package does not assume Codex can access the uploaded chat files.
- The header and hero use `/resume.pdf` only when the file exists; otherwise hide or disable that link (never create a dummy PDF or 404 link).
- Set download filename to `Mohammad_Fahad_Khan_Resume.pdf` when serving it.
- The PDF is the authoritative contact-link source even if its technical summary differs from the website's broader project coverage.

---

## 3. Technology decisions

| Area | Stack | Reason |
|---|---|---|
| Runtime / framework | Latest stable Next.js (App Router) | Routing, metadata, static rendering, image support |
| Language | TypeScript (strict) | Reliability and maintainability |
| UI | React version compatible with chosen Next.js | Reusable components |
| CSS | Tailwind CSS (supported stable version) | Responsive design tokens and styling |
| Components | shadcn/ui, selectively | Accessible primitives with control over aesthetics |
| Motion | `motion` / Motion for React | Deliberate micro-interactions |
| Icons | lucide-react | Lightweight, consistent icon language |
| Content | Typed TS objects, optional local MDX case studies | Easy content editing without a CMS |
| Fonts | `next/font` for a clean sans + optional mono | Layout stability and expressive typography |
| Testing | Vitest + Testing Library; Playwright smoke tests | Data/components and navigation verification |
| Lint / format | ESLint and Prettier | Consistent code |
| Hosting | Vercel (recommended); static-friendly architecture | Straightforward previews and deployment |
| Monitoring | Optional privacy-conscious analytics only after approval | Keep MVP lean |

**Rendering strategy:** Prefer static generation for homepage, project pages, and writing pages. No server dependence unless a feature requires it. Server Components by default; Client Components only for interactive UI.

**Potential conflict:** If using static export, validate compatibility with features such as image optimization, route handlers, and dynamic behaviors. Do not configure `output: 'export'` blindly. Vercel default deployment is fine for MVP.

---

## 4. Design system

### Art direction
- Dark-first, sophisticated editorial-tech aesthetic: deep charcoal backgrounds, off-white text, cool violet/indigo accent (subdued), hairline borders, large deliberate whitespace.
- Mix generous typography with precise mono labels (`01 / WORK`, `SELECTED PROJECTS`).
- Small visual nod to systems architecture: fine grid, connection motif, subtle gradients, code/diagram detail. No animated particle overload.
- Use tasteful bento/project cards without sacrificing readability.
- Strong hierarchy and a restrained accessible color system, not an over-styled gradient template.

### Tokens (initial suggestions; adjust through visual iteration)
```css
:root {
  --background: #0a0b0e;
  --surface: #11141a;
  --surface-elevated: #171b23;
  --foreground: #f3f5f8;
  --muted: #a2aab8;
  --line: #29303c;
  --accent: #a5a2ff;
}
```
- Use CSS variables and Tailwind design tokens, avoid scattered hard-coded colors.
- Fonts: Geist or Inter for body/heading; Geist Mono or JetBrains Mono for labels.
- Layout container: max width about 1120–1200px; 24px mobile side padding.
- Border-radius: intentional 12–20px; consistent card elevation.
- Support light mode if implemented properly; dark mode must be excellent even if light mode is deferred.
- Respect `prefers-reduced-motion`, hover/focus states, and keyboard navigation.

### Animation guidelines
- Hero staggered reveal (short, non-blocking), project-card hover lift/border shift, subtle section enter transitions, responsive mobile menu.
- Avoid scroll-jacking, massive WebGL backgrounds, excessive blur, continuous animations, cursor followers, or disabling native scrolling.
- Motion should degrade gracefully for reduced-motion users.

### Responsive breakpoints
- Mobile first at 320px+.
- Tablet around 768px.
- Desktop around 1024px and larger.
- No horizontal scrolling, text clipping, oversized hero typography, or hover-only content.

---

## 5. Information architecture and routes

| Route | Purpose | MVP |
|---|---|---|
| `/` | Hero, proof points, selected work, experience teaser, skills, CTA | Required |
| `/projects` | Filterable or browsable project gallery; no over-engineered filters | Required |
| `/projects/[slug]` | Case study for each verified project | Required |
| `/about` | Detailed engineering background, education, experience | Required |
| `/contact` | Accessible contact options and social links | Required |
| `/writing` | Technical writing index using local MDX | Optional phase 2 |
| `/writing/[slug]` | Blog articles with metadata | Optional phase 2 |
| `not-found` | Branded helpful 404 page | Required |

Global layout: skip-to-content link, sticky or restrained header, accessible navigation, persistent resume/contact CTA, footer with canonical links.

### Homepage recommended order
1. **Navigation:** FK logomark/type, Work, About, Contact, Resume; mobile dropdown.
2. **Hero:** `Mohammad Fahad Khan`; headline e.g. **“I build reliable backends and practical AI systems.”** Subtext contextualizes NIC experience and current MCA. Buttons: View Projects, Download Resume (only if present); social icons with labels.
3. **Featured work:** 3 or 4 evidence-backed project cards with title, 1–2 line problem/impact summary, stack, detail CTA.
4. **Experience:** NIC internship concise role/date/impact card with link to About.
5. **Capabilities:** Backend & APIs, Retrieval/AI Systems, Applied ML & Computer Vision, Databases & Tools; only skills actually supported by the sources or explicitly approved.
6. **Education / recognition:** JIIT MCA (expected 2027) and LPU BCA (2025), optionally GPA and Honor Roll.
7. **Get in touch:** Email CTA, GitHub, LinkedIn, coding profile.
8. **Footer:** accessible and lightweight.

### Project detail content template
Each `/projects/[slug]` should show:
- Title, category, timeline (when grounded), role and problem.
- Overview and goals.
- Tech stack tags (supported only).
- Architecture explanation; a designed diagram only if technically faithful.
- Key implementation decisions and tradeoffs.
- Challenges and how addressed (where verified).
- Results with caveats and actual sources.
- Screenshots/demo placeholder only when actual assets exist; do not present synthetic screenshots as real.
- Repository/demo links only if verified.
- Related projects and next project navigation.

---

## 6. Authoritative content inventory

### 6.1 About / profile
- Name: Mohammad Fahad Khan.
- Positioning: Software Engineer focused on backend development and AI applications. This is a professional positioning statement, not a claim of employment as a full-time software engineer.
- Summary based on LTM resume: strong foundation in backend development, AI applications, and CS fundamentals; interested in reliable software and solving real-world problems.
- Education: **Master of Computer Applications, JIIT Noida**, Aug 2025–present, **expected 2027**, GPA **8.5** (as provided; verify currency before updating); **Bachelor of Computer Applications, LPU Punjab**, Aug 2022–Jul 2025, GPA **9/10**.
- Recognition: University Honor Roll, 2023.

### 6.2 Internship experience (high priority)
**Python Developer Intern — National Informatics Centre (NIC), Chandigarh**  
**June 2026 – July 2026**, Digital India Internship Program.

Based on supplied resumes:
- Contributed to an AI-driven document intelligence and semantic-search platform for Punjab Vidhan Sabha records.
- Implemented RESTful services with Django and PostgreSQL.
- Developed ingestion pipelines, metadata extraction, indexing, and retrieval-augmented QA.
- Built hybrid retrieval using BM25 + FAISS; worked on citation-aware ranking and embedding quality.

**Optional detail, needs owner verification prior to public publication:** 7,406 processed pages / 18,742 chunks, model/version, precise retrieval metrics. These were discussed in earlier project context but are not confirmed in the uploaded resumes. Do not publish without explicit confirmation or underlying project evidence.

**Handling sensitive materials:** Do not upload parliamentary source documents, credentials, internal repos, or unpublished government material. Do not imply NIC endorsement of the website. Do not expose restricted architecture or code.

### 6.3 Projects — initial case studies

#### A. NIC Document Intelligence & Semantic Search
- **Category:** Backend / Retrieval / Applied AI.
- **Context:** Internship work; featured project, clearly labelled as an internship contribution, not an independent public repository.
- **Stack:** Python, Django, PostgreSQL, BM25, FAISS, RAG, embeddings.
- **Key details:** Document ingestion, semantic and lexical search, metadata, citation-aware QA.
- **Evidence:** Supplied resumes and cover letter.
- **No public GitHub/demo by default.**

#### B. End-to-End Encrypted Chat System
- **Date:** April 2026.
- **Category:** Backend / Security / Real-time Systems.
- **Stack:** Java, Spring Boot, WebSockets, RSA, AES-256, BCrypt, MySQL.
- **Verified scope:** Built a Spring Boot backend for secure real-time messaging; used RSA key exchange and AES-256 encryption; BCrypt for authentication; WebSockets for bidirectional messaging; modeled users/chats/messages in MySQL.
- **Caution:** Do not claim security has been independently audited; do not state formal end-to-end guarantees beyond what was implemented and verified. Explain trust model if code can be reviewed.
- **GitHub/demo:** Pending verification.

#### C. Smart Fire Detection System / AIoT-Based Firefighting Robot
- **Date:** April 2025 in resumes.
- **Category:** Computer Vision / Embedded AI / IoT.
- **Stack:** Python, YOLO, ESP32-CAM, sensors and monitoring UI.
- **Verified scope:** Real-time visual fire-detection inference, sensor integration, monitoring dashboard, approximately 92% test detection accuracy (self-reported in supplied CV).
- **Important:** Different resumes mention different YOLO versions; **do not specify a model version** until owner or repository confirms which version applies to the published demo. The broader robot hardware/motion/water-pump details are from prior project discussions, not these resumes; only include if explicitly validated.
- **Metric label:** “~92% reported detection accuracy in project testing,” not a generalized benchmark.
- **GitHub/demo:** Pending verification.

#### D. Credit Card Fraud Detection & Risk Analysis
- **Date:** December 2025 per AI/ML resume.
- **Category:** Machine Learning / Data Analytics.
- **Stack:** Python, Pandas, scikit-learn; Logistic Regression and Random Forest.
- **Verified scope:** EDA, stratified splitting, feature scaling, SMOTE oversampling, precision/recall/F1, confusion matrices, ROC-AUC.
- **Results reported in AI/ML CV:** ~0.9766 ROC-AUC (Random Forest) vs ~0.9670 (Logistic Regression). Clearly label these as results from the project; do not assert external validation.
- **GitHub/demo:** Pending verification.

### 6.4 Projects for later consideration — NOT part of verified resume inventory
These were discussed previously but are not documented in the five uploaded files. Add only when the owner supplies verified details and links:
- AI Scheduling Agent (FastAPI, React, LangGraph, Calendar integration)
- NPTEL AI Notes Generator
- CalSync meal-planning / DBMS system
- Other open-source experiments.

### 6.5 Technical skills
**Resume-backed:** Python, Java, C++, Django, REST APIs, MySQL, PostgreSQL, Git, GitHub, VS Code, Eclipse; Spring Boot, WebSockets, FAISS, BM25, YOLO and scikit-learn evidenced within projects.  
**Potential additions pending verification:** FastAPI, React, Docker, LangGraph, LangChain, Redis, cloud services. A technology used in building *this portfolio* can be shown as this site's stack but should not automatically be added as prior professional expertise.

### 6.6 Certifications
- Machine Learning Using Python Programming — SWAYAM (Apr 2025).
- The Joy of Computing Using Python — NPTEL (Nov 2024).
- IBM Data Science Professional Certificate — IBM (Jul 2024).
- Operating System Fundamentals — NPTEL (Nov 2023).

Certification credential links are unspecified. Show text only until URLs verified. An unrelated CV states a patent publication claim; this is not consistent across supplied sources: **exclude patent status from MVP unless independently verified by owner and publication number**.

---

## 7. Content model and repository structure

Suggested structure, adapt to current Next.js conventions:

```text
portfolio/
├── public/
│   ├── resume.pdf                 # Copy of ltm_get_resume.pdf, supplied separately
│   ├── images/
│   │   └── projects/              # Real project screenshots only
│   └── og/                        # Generated Open Graph artwork
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/{header,footer,mobile-nav}.tsx
│   │   ├── sections/{hero,featured-projects,experience,skills,cta}.tsx
│   │   ├── projects/{project-card,project-detail,tech-tag}.tsx
│   │   ├── ui/                       # Select shadcn components
│   │   └── accessibility/skip-link.tsx
│   ├── content/
│   │   ├── site.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── education.ts
│   │   └── certifications.ts
│   ├── lib/{utils,metadata}.ts
│   └── types/content.ts
├── tests/
├── e2e/
├── .env.example                     # Only if needed; never secrets
├── README.md
├── package.json
└── ...
```

### Data model suggestion
```ts
type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "backend" | "ai" | "ml" | "iot";
  featured: boolean;
  period?: string;
  summary: string;
  technologies: string[];
  problem: string;
  approach: string[];
  challenges?: string[];
  outcomes?: string[];
  repoUrl?: string;      // MUST be verified, never guessed
  demoUrl?: string;      // MUST be verified, never guessed
  image?: string;        // Local real screenshot only
  sourceNote?: string;   // Internal content provenance note
};
```
Use typed data for content instead of storing prose in multiple UI files. Slugs should remain stable and deterministic. No client-side fetching required for basic content.

---

## 8. Functional requirements

### Navigation and discovery
- Header routes work on desktop and mobile; active navigation state, keyboard focus, accessible menu toggles.
- Homepage cards link to real project-detail routes.
- Contact links open correct destinations; external links use `target="_blank" rel="noopener noreferrer"` when appropriate.
- Emails via `mailto`; optional copy-email button must provide accessible success feedback.
- Resume download only if `public/resume.pdf` exists.

### Project presentation
- Present 4 verified projects from the uploaded files; show internships separately while permitting NIC as a case study with clear attribution.
- Each case study uses a consistent design, but its content must be specific, not padded or fabricated.
- If screenshots are unavailable, use CSS-authored diagrams, code-oriented abstract visual motifs, or neutral design treatment clearly not advertised as product screenshots.
- Do not show dead GitHub/demo buttons.

### SEO / shareability
- Metadata defaults and per-project `generateMetadata`.
- Correct canonical URLs configured after domain chosen, no dummy `example.com` in production.
- `robots.ts`, `sitemap.ts`, human-readable page titles and descriptions.
- Open Graph image and Twitter card; safe generic fallback artwork.
- JSON-LD Person and/or WebSite schemas only for true details; no fabricated employer or profile links.
- Semantic headings, `lang="en"`.

### Contact
- No form required for MVP. Show email and verified social destinations; this avoids spam handling and external providers.
- Optional form later with proper abuse protection, explicit consent, and secure service selection.

### Privacy
- Do not expose phone prominently unless owner explicitly approves (available in resume).
- No third-party trackers by default; no cookies necessary for basic functionality.
- No environment secrets in frontend or source control.

---

## 9. Accessibility, quality, performance

### Accessibility acceptance criteria
- WCAG 2.2 AA-oriented implementation; meaningful contrast for body text and controls.
- Visible keyboard focus; all navigation and links keyboard-operable.
- Proper landmark regions, one H1 per page, descriptive link names.
- Icon-only buttons have accessible labels; images have meaningful alt text or decorative empties.
- Reduced-motion treatment and no motion-dependent essential information.
- Mobile menu manages accessibility properly.

### Performance targets (best-effort goals, measure and iterate)
- Lighthouse >= 90 on Performance, Accessibility, Best Practices, and SEO on representative routes under consistent conditions.
- Core Web Vitals targets: LCP <= 2.5s, CLS <= 0.1, INP <= 200ms on real-user 75th-percentile measurements where available.
- Minimize client bundles; avoid excessive Client Components and giant UI libraries.
- Prefer local/static data, modern images (where appropriate), next/font, and restrained animation.
- No layout shifts from late-loading visuals.

### Tests / CI
- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- `npm run build` passes.
- Component tests for critical header/nav and project cards.
- Data validation to ensure unique project slugs and no malformed known URLs.
- Playwright smoke flows: homepage -> projects -> case study; mobile menu; contact outbound link; 404.
- Optional GitHub Actions CI on PR/push for lint, typecheck, tests, build.

---

## 10. Implementation roadmap — work in small checkpoints

### Milestone M0 — Baseline and content controls
**Tasks**
- Inspect the existing repository; do not overwrite an established project.
- If empty, scaffold a clean Next.js App Router TS/Tailwind project with a `src/` folder, ESLint, and sensible aliases.
- Set up fonts, site metadata, content model, centralized canonical links, README.
- Add verified project/content records; use source comments for sensitive or uncertain claims.
- Add `public/resume.pdf` from supplied LTM PDF *only if the file is present*, otherwise maintain a missing-asset checklist.

**Done when:** dev server boots, strict typecheck works, canonical links are centralized, no fabricated links/claims.

### Milestone M1 — Design foundations and site shell
**Tasks**
- Design tokens, global styles, typography, containers, accessible buttons/cards/tags.
- Responsive header, mobile menu, footer, skip-link, route shell.
- High-quality dark theme, optional light theme only if complete.
- Consistent loading and focus states.

**Done when:** responsive shell is usable at 320/768/1440px and keyboard navigation works.

### Milestone M2 — Homepage
**Tasks**
- Hero, intro, verified social links, primary CTAs.
- Featured project cards and selected work section.
- NIC internship experience band, capabilities/skills, education preview and contact CTA.
- Add short intentional motion with reduced-motion fallback.

**Done when:** homepage communicates identity and projects in one scan, screenshots show strong hierarchy.

### Milestone M3 — Projects and case studies
**Tasks**
- `/projects` listing, optional simple category filter if valuable.
- `/projects/[slug]` pages with generated static params and metadata.
- Write four project-specific case studies strictly from verified content.
- Design truthful diagrams/placeholders; verified repo/demo links only.
- Related work and back navigation.

**Done when:** every project card goes to a substantive non-generic detail page.

### Milestone M4 — About, contact, resume, SEO
**Tasks**
- About timeline with internship, education, technical capabilities, certifications.
- Contact page with email and exact GitHub, LinkedIn, and TakeUforward URLs.
- Resume CTA with missing-file handling.
- SEO metadata, Open Graph, sitemap, robots, icon/favicon, branded 404.

**Done when:** all routes and links work, no placeholders or dead CTAs ship.

### Milestone M5 — Testing, polish, deployment
**Tasks**
- Validate mobile and tablet layouts, dark/light contrast if applicable.
- Run lint, TypeScript, tests and build; fix errors.
- Audit keyboard, reduced motion, image labels, SEO, Lighthouse.
- Deploy preview to Vercel if credentials are available; otherwise document exact steps.
- Inspect external links and verify project URLs when authorized.
- Provide a short hand-off report: shipped, pending owner assets, risks and next steps.

**Done when:** optimized, accessible preview is ready for review and code is deployable.

### Phase 2 (explicit opt-in only)
- MDX technical blog (RAG, backend architecture, applied ML, systems design).
- Deeper custom project visuals and verified live demos.
- Analytics only with consent/privacy consideration.
- AI portfolio assistant using Next.js interface + **FastAPI** only if there is a genuine use case, safe knowledge content, operational budget, rate limits, and monitoring.
- Admin/CMS only if ongoing publishing frequency warrants it.

---

## 11. Codex agent rules

1. **Read this full plan before coding.** Identify repository state and existing conventions first.
2. **Treat `ltm_get_resume.pdf` as canonical for contact/social links.** Never infer links from other CVs or guess repo URLs.
3. **Do not invent facts:** employers, job titles, project metrics, tech versions, certifications, demos, social URLs, or patent status.
4. Keep code typed, modular, maintainable, and production-lean; prefer simple solutions over unnecessary abstractions.
5. Use Server Components by default. Mark only interactive files with `"use client"`.
6. Prefer real project descriptions to marketing buzzwords; visually design around missing imagery rather than fabricate screenshots.
7. Follow current *installed* versions and their official conventions; avoid deprecated Next.js/Tailwind APIs.
8. Implement incrementally by milestone; run relevant quality checks after each checkpoint.
9. At each milestone, report files changed, commands run, pass/fail state, what needs user-provided assets, and recommended next action.
10. Do not deploy or publish private materials without explicit authorization.
11. Do not ask repeatedly for details already in this document. If an unprovided asset isn't blocking, add a TODO and continue.
12. Maintain `CONTENT_TODO.md` for unresolved facts/assets (project repo URLs, screenshots, verified demos, public deployment domain, resume copy).
13. Avoid unnecessary external libraries, backend services, API keys, and package churn.
14. Ensure all paths and CTAs work before declaring milestone complete.

---

## 12. Definition of done

- [ ] Next.js App Router, TypeScript and Tailwind project builds cleanly.
- [ ] Strong, mobile-first visual system with accessible navigation.
- [ ] Home / Projects / Project Detail / About / Contact / 404 implemented.
- [ ] Four accurate project case studies with non-fictional technical specifics.
- [ ] NIC internship correctly credited and distinguished from personal work.
- [ ] Canonical GitHub, LinkedIn, TakeUforward and email match LTM resume exactly.
- [ ] Resume CTA points to actual provided LTM resume PDF or is safely omitted.
- [ ] No speculative repository links, model versions, fake demos, patent status or exaggerated benchmarks.
- [ ] Keyboard navigation, reduced-motion and small-screen usability checked.
- [ ] SEO metadata, Open Graph, sitemap and robots included.
- [ ] Lint, typecheck, test and production build succeed.
- [ ] README explains setup, content editing, asset placement and deployment.
- [ ] `CONTENT_TODO.md` clearly records any owner action still needed.

---

## 13. Inputs and asset checklist for repository owner

**Required to unlock full MVP:**
- Supply the actual `ltm_get_resume.pdf` in the repository or copy to `public/resume.pdf`.
- Confirm whether the owner wants a portrait/headshot shown. If unavailable, use typographic hero.
- Verify exact GitHub repository paths for chat, fire detection and fraud detection before adding cards' repo buttons.
- Supply genuine screenshots or architecture diagrams if available; site must still look designed without them.
- Confirm intended production domain when available for canonical metadata.

**Optional:**
- Confirm publicly shareable NIC project metrics, demonstrations and diagrams.
- Verify any patent publication claim and link before publication.
- Confirm exact YOLO model/version used in the public fire-detection system case study.
- Approve adding AI Scheduling Agent / NPTEL Notes Generator as further projects with current documentation.

---

## 14. Suggested execution sequence

Run Codex first on M0 + M1. Review visual design and content model before asking it to implement M2–M5. This keeps implementation reviewable and prevents design drift. Once the foundation is approved, proceed in the named milestones, preserving the canonical links and accuracy rules throughout.

**Deliverable:** A beautiful, maintainable engineering portfolio—not a demo-template website—with technically faithful case studies and a clear path to deploy.
