# MEGALA M — CINEMATIC DEVELOPER PORTFOLIO

A cinematic, streaming-platform-inspired portfolio for **MEGALA M**: Aspiring Software Developer.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a refined, dark cinematic streaming aesthetic.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.

## Updating the content

**All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) and [`src/data/certificates.ts`](src/data/certificates.ts).**

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `src/data/portfolio.ts` |
| Projects & details | `src/data/portfolio.ts` |
| Certifications & gallery | `src/data/certificates.ts` |
| Skills and evidence | `src/data/portfolio.ts` |
| Journey (Education & Internships) | `src/data/portfolio.ts` |

**Photo & assets:** replace `megala_portrait.jpg`, then run:

```bash
npm run images
```

## What's inside

```
src/
  data/
    portfolio.ts         ← single source of truth for Megala M profile, projects, skills, journey
    certificates.ts      ← verified certificates and credentials registry
  App.tsx                ← router and app shell
  components/
    Navbar               ← multi-page router navigation, mobile menu
    Hero                 ← billboard: Megala portrait, headline, CTAs
    CertificationPreview ← home page preview of verified credentials
    EducationPreview     ← education and academic achievements
    Originals            ← pinned project showcase
    Skills               ← skill categories with evidence tags
    ResumeViewer         ← interactive resume viewer & PDF download
```
    Achievements           ← award-poster cards + milestones
    ResumeViewer/ResumeModal ← designed screenplay resume sheet, viewer, download actions
    FinalCTA               ← TO BE CONTINUED… + contact links
    CustomCursor, fx.tsx   ← cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   ← Lenis smooth scroll + scroll lock, media queries, watch progress
scripts/build-images.mjs   ← portrait/share-image pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, the custom cursor, tilt, particles, grain and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and the ← → keys.
- Portraits are responsive WebP files (25–90 KB). Overlays are code-split, and particles pause when they're off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, ← and → change slides, Esc closes.
- **Project and resume overlays:** Esc closes.
