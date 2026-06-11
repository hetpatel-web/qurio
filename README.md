# Qurio

Qurio is a personal digital garden for documenting experiments, builds, notes, and reflections from real work.

Core idea: curious people learn by building.

## Why Qurio Exists

Qurio exists to make learning more concrete. The project records what was tested, what was built, what was learned, and what should improve next.

Read the full brand foundation in [docs/why-qurio-exists.md](docs/why-qurio-exists.md).

## Content Collections

- `content/experiments/`: focused tests with a clear question, setup, result, and next experiment.
- `content/builds/`: ongoing project work, infrastructure, or systems that evolve over time.
- `content/notes/`: durable ideas, explanations, and working knowledge tied back to practice.
- `content/journal/`: monthly reflection and progress logs.
- `content/now/`: the current snapshot of focus, learning, and what is paused.
- `content/templates/`: reusable MDX templates for new entries.

## Required Frontmatter

Every content entry should include:

```mdx
---
title: "Entry title"
description: "Short summary"
date: 2026-06-11
status: active
tags:
  - tag-one
  - tag-two
---
```

Allowed `status` values:

- `idea`
- `active`
- `complete`
- `paused`
- `archived`

## Project Structure

```text
qurio/
├── app/
├── components/
├── content/
│   ├── builds/
│   ├── experiments/
│   ├── journal/
│   ├── notes/
│   ├── now/
│   └── templates/
├── docs/
│   └── context/
├── lib/
├── public/
└── styles/
```

## Common Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Local Development

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open `http://localhost:3000`.

## Adding Content

- For experiments, notes, and journal entries, start from the matching file in `content/templates/`.
- Keep the writing calm, practical, honest, and reading-first.
- Prefer documenting real constraints, results, and next steps over polished summaries.

Experiment structure:

- `Question`
- `Hypothesis`
- `Setup`
- `Steps`
- `Result`
- `What Worked`
- `What Failed`
- `Lessons Learned`
- `Next Experiment`

Note structure:

- `Purpose`
- `Key Idea`
- `Explanation`
- `Practical Use`
- `Related Experiments`
- `Takeaways`

Journal structure:

- `What I Worked On`
- `What I Learned`
- `What Changed`
- `Wins`
- `Challenges`
- `Next Focus`

Now page structure:

- `Current Focus`
- `What I Am Learning`
- `What I Am Building`
- `What Is Paused`
- `Next Step`

## Content Loading

- `lib/content.ts` loads the `experiments`, `builds`, and `notes` collections.
- Entries are sorted by date descending.
- Missing or malformed frontmatter fails with explicit build-time errors.
- The site remains compatible with static export.

## Deployment

This project uses static export output, so `npm run build` should succeed before publishing.

- Vercel: build with `npm run build`.
- Cloudflare Pages: build with `npm run build` and publish the `out/` directory.
