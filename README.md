# portfolio

My personal portfolio site, built with [Astro](https://astro.build).
https://tientienc.github.io/portfolio/

## Run it locally

Needs Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

| What | Where |
| --- | --- |
| Your name, role, email and links | `src/site.ts` |
| Pages (Home, Projects, About) | `src/pages/` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Shared header and footer | `src/layouts/BaseLayout.astro` |
| Colors and fonts | `src/styles/global.css` |
| Images and other static files | `public/` |

## Add a project

Create a new file in `src/content/projects/`, for example `my-app.md`:

```md
---
title: My App
summary: One sentence about what it does.
date: 2026-11-01
tags: [Web app]
link: https://example.com        # optional
repo: https://github.com/you/repo # optional
featured: true                    # show it on the home page
---

Write about the project here.
```

## Build for deployment

```bash
npm run build
```

The finished site is written to `dist/`.
