# ADR 0001: Bilingual skill doc translations via sibling files

## Status

Accepted

## Context

We need translated versions of skill-facing docs (`SKILL.md`, `README.md`) in
additional locales — starting with `zh-TW`, standard written Taiwan Mandarin
(Cantonese vernacular markers excluded) — without disrupting the existing
English-only project structure or breaking upstream syncing for forks.

## Decision

Translations are added as sibling files next to the English original, named
`<file>.<locale>.md` (e.g. `SKILL.zh-TW.md`, `README.zh-TW.md`).

- The source `SKILL.md` / `README.md` are never edited for content, beyond a
  single added line linking to the translated sibling.
- The `name:` frontmatter field in `SKILL.md` is never translated — it is a
  byte-identical invocation key referenced by plugin manifests and the skill
  loader.
- Plugin manifests (`.claude-plugin/plugin.json`, `.codex-plugin/*`,
  `skills/*/agents/*.yaml`) are left untouched. They reference the skill by
  folder, not by enumerating individual files, so new locale siblings never
  break them.
- `CLAUDE.md` and `RELEASE-NOTES.md` are out of scope for translation.

## Consequences

- Upstream merges stay conflict-free: the English files are untouched except
  for one added link line, so future upstream changes to `SKILL.md` /
  `README.md` apply cleanly.
- Adding a new locale means adding new sibling files, not modifying existing
  ones.
- Register (formality / dialect) per locale must be pinned explicitly before
  translating — a locale code alone doesn't guarantee register (e.g. `zh-TW`
  doesn't rule out Cantonese vernacular written in Traditional characters).
