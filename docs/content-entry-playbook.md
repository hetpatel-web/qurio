# Content Entry Playbook

This playbook packages the repeated workflow used to create or update a Qurio content entry without drifting away from the site's content system.

Use it for notes, experiments, builds, journal entries, and the Now page when the work is primarily content-focused.

## When To Use This

Use this playbook when:

- creating a new entry from scratch
- cleaning up an existing `.mdx` entry
- adding related links between existing entries
- checking whether a new content idea belongs in `notes`, `experiments`, `builds`, `journal`, or `now`

Do not use it for:

- major site architecture changes
- UI-only changes
- large documentation overhauls outside the content collections

## Workflow

### 1. Choose The Right Content Type

Ask which output best fits the work:

- `notes`: durable ideas, explanations, and reusable references
- `experiments`: focused tests that turn questions into evidence
- `builds`: larger projects or systems developed across multiple sessions
- `journal`: monthly reflection on work, learning, and changes
- `now`: current focus snapshot

If the entry feels ambiguous, choose the content type based on its main job, not its topic.

## 2. Start From The Template

Use the matching file in `content/templates/`:

- `content/templates/note-template.mdx`
- `content/templates/experiment-template.mdx`
- `content/templates/build-template.mdx`
- `content/templates/journal-template.mdx`

For `now`, follow the existing `content/now/current.mdx` structure.

## 3. Fill Frontmatter First

Every entry should include:

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

Use YAML list items with `-` under `tags`. Do not use `*`.

## 4. Draft The Core Sections

Keep the Qurio method visible:

```text
Question → Experiment → Build → Document → Reflect → Improve
```

That does not mean every entry literally uses all six words. It means the entry should help move understanding forward in a concrete way.

Write in a way that is:

- calm
- practical
- honest
- specific
- useful later

Avoid:

- hype
- guru language
- polished certainty with no visible process

## 5. Check Related Links

Before adding links:

- prefer linking only to entries that already exist
- keep links useful, not decorative
- use the project's existing style such as `Related Experiments` or `Related Content` when it fits the note

If a related target does not exist yet:

- remove the link
- or leave the relationship out until the target exists

## 6. Normalize Formatting

Before validating:

- headings should match the current template structure
- markdown lists should use `-` unless ordered steps are actually needed
- code fences should include an info string when useful, such as `text`, `bash`, or `json`
- frontmatter should not contain stray blank lines or invalid YAML

## 7. Validate

Run:

```bash
npm run typecheck
npm run build
```

If validation fails:

- fix frontmatter first
- then fix missing links, broken markdown, or section mismatches
- report exact errors instead of guessing

## 8. Summarize The Change

When finishing:

- list the files changed
- state what changed
- explain why it changed
- report validation results
- mention any recommended follow-up

## Notes

- If a structure needs to change, update the relevant template first, then bring live content into alignment.
- Prefer leaving behind one clear artifact over scattering related changes across multiple entries without a central reference.
