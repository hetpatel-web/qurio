# AGENTS

## Project

Qurio is a reading-first Next.js site for documenting experiments, builds, notes, and reflections from real work.

Qurio is not just a personal technical blog. It is a practical learning system and public digital garden for turning curiosity into capability.

The current brand foundation is:

- Purpose: Help people prove to themselves that they can figure things out.
- Enemy: Passive helplessness — the belief that you need permission, certainty, or expertise before you can act.
- Mission: Help people move from passive consumption to active capability by turning curiosity into action, action into learning, and learning into confidence.
- Method: Question → Experiment → Build → Document → Reflect → Improve
- Tagline: Turn curiosity into capability.

## Product Direction

- Treat Qurio as a practical learning system, not just a personal technical blog.
- Keep the tone calm, practical, honest, builder-oriented, and anti-hype.
- Avoid guru language, startup fluff, and get-rich-quick framing.
- Optimize for the reader reaction: "Let me try that."
- Show the process of figuring things out rather than presenting polished expertise.

## Decision Standard

Before making a meaningful change, ask:

- Does this help people move from curiosity to action?
- Does this make Qurio more useful as a learning system?
- Does this create or improve a durable artifact?
- Does this make the site clearer, calmer, or easier to read?
- Does this preserve the honest process of learning by doing?

Avoid changes that make Qurio feel like:

- A generic startup landing page
- A guru/personal brand platform
- A hype-driven AI site
- A polished expert platform with no visible learning process

## Stack

- Next.js App Router
- TypeScript
- MDX content loaded from local files
- Global CSS and CSS modules
- Static export compatible

## Important Paths

- `app/`: routes and page composition
- `components/`: reusable UI pieces
- `content/experiments/`: focused tests
- `content/builds/`: ongoing systems and projects
- `content/notes/`: durable ideas and explanations
- `content/journal/`: monthly reflection
- `content/now/`: current focus snapshot
- `content/templates/`: starting points for new entries
- `docs/qurio-foundation.md`: concise source of truth
- `docs/why-qurio-exists.md`: longer-form brand anchor

## Content Rules

Every content entry should include frontmatter with:

- `title`
- `description`
- `date`
- `status`
- `tags`

Allowed `status` values:

- `idea`
- `active`
- `complete`
- `paused`
- `archived`

Preferred structures:

### Experiments

Use for focused tests and hypothesis-driven learning.

Sections:

- `Question`
- `Hypothesis`
- `Setup`
- `Steps`
- `Result`
- `What Worked`
- `What Failed`
- `Lessons Learned`
- `Next Experiment`

### Notes

Use for durable ideas, explanations, concepts, and reusable references.

Sections:

- `Purpose`
- `Key Idea`
- `Explanation`
- `Practical Use`
- `Related Experiments`
- `Takeaways`

### Builds

Use for larger projects and systems that may span multiple sessions.

Sections:

- `Purpose`
- `Problem`
- `Approach`
- `Architecture`
- `Decisions`
- `Progress`
- `Lessons Learned`
- `Next Steps`

### Journal

Use for monthly or periodic reflection.

Sections:

- `What I Worked On`
- `What I Learned`
- `What Changed`
- `Wins`
- `Challenges`
- `Next Focus`

## Writing Style

Use language that is:

- Clear
- Calm
- Practical
- Honest
- Specific
- Reflective
- Builder-oriented

Avoid language that is:

- Hype-heavy
- Overly polished
- Guru-like
- Vague
- Grandiose
- Sales-driven
- Get-rich-quick oriented

Prefer:

- "Here is what I tried."
- "Here is what worked."
- "Here is what failed."
- "Here is what I learned."
- "Here is what I would try next."

Avoid:

- "Unlock your potential instantly."
- "The ultimate system."
- "Crush your goals."
- "Master everything fast."

## Technical Guidance

When making technical changes:

- Preserve the existing site architecture.
- Do not introduce Tailwind.
- Prefer the existing CSS module and global CSS approach.
- Keep pages simple, readable, and content-first.
- Preserve the latest notes/builds/experiments behavior unless there is a clear reason to change it.
- Keep the site static-export compatible.
- Avoid unnecessary dependencies.
- Prefer maintainable, understandable code over clever code.

## Documentation References

When technical recommendations involve external tools, frameworks, APIs, or infrastructure, prefer official documentation as the source of truth.

Examples:

- Next.js documentation
- React documentation
- TypeScript documentation
- MDX documentation
- Docker documentation
- n8n documentation
- Ollama documentation
- Vercel documentation

Do not add references just to look authoritative. Add them when they help clarify a technical decision or best practice.

## Verification

Before finishing meaningful site or content-system changes, run:

```bash
npm run typecheck
npm run build
```

Use:

```bash
git status --short
```

before summarizing changes if the worktree may contain unrelated edits.

## Summary Expectations

When finishing work, summarize:

- Files changed
- What changed
- Why it changed
- Typecheck result
- Build result
- Any recommended follow-up
