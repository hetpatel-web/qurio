# Qurio

Qurio is a personal digital garden for documenting experiments, builds, notes, and lessons learned through building.

Core idea: curious people learn by building.

## Why Qurio Exists

Qurio exists to help curious people become more capable of figuring things out for themselves by documenting real experiments, builds, notes, and lessons learned through action.

Read the full brand foundation in [docs/why-qurio-exists.md](docs/why-qurio-exists.md).

## Project structure

```text
qurio/
├── app/
├── components/
├── content/
├── docs/
├── lib/
├── public/
└── styles/
```

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`.

## Add a new note

1. Create a new `.mdx` file in `content/notes/`.
2. Add frontmatter:

   ```md
   ---
   title: Your note title
   description: Short summary
   date: 2026-06-08
   status: Draft
   tags:
     - tag-one
     - tag-two
   ---
   ```

3. Write the note using Markdown or MDX.
4. Visit `/notes` and `/notes/[slug]` in the app.

## Add a new experiment

1. Create a new `.mdx` file in `content/experiments/`.
2. Reuse the same frontmatter format.
3. Add sections such as goal, setup, steps, results, and lessons learned.

## Add a new build

1. Create a new `.mdx` file in `content/builds/`.
2. Reuse the same frontmatter format.
3. Add the project context, current state, learnings, and next problems to solve.

## Deploy to Vercel

This project uses static export output.

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Vercel will detect Next.js automatically.
4. Run the default build command:

   ```bash
   npm run build
   ```

Vercel will serve the generated static output without extra configuration.

## Deploy to Cloudflare Pages

Because this project is statically exported, it can be deployed to Cloudflare Pages as a static site.

1. Push the repository to GitHub.
2. Create a new Cloudflare Pages project connected to the repository.
3. Use these build settings:

   ```text
   Build command: npm run build
   Build output directory: out
   ```

4. Deploy.

## Notes

- Content is stored locally in `content/`.
- Dynamic entry routes are statically generated at build time.
- The `docs/` directory stores the project intent, principles, and roadmap.
