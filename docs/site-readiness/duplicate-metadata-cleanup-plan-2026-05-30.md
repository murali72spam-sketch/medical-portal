# Clinical Portal 2026 — Duplicate / Metadata Cleanup Planning

Date: 30 May 2026

Branch: `cleanup/duplicate-metadata-planning`

## Purpose

Plan duplicate and metadata cleanup after PR #95.

This PR is planning/audit only. It must not delete files, change clinical wording, mark resources as reviewed, or change publication/review metadata.

## Current Portal Posture

- Controlled-review mode is active.
- Production has `X-Robots-Tag: noindex, nofollow`.
- Vercel public index exposes reviewed + published resources only.
- Local build still exposes all resources for QA/review.
- Public-status audit found zero reviewed/published visible conflicts.

## Target Topics

Audit target topics from site-readiness follow-up:

- Temper tantrums
- Bedwetting
- Ringworm
- Conjunctivitis

## Local Filename Audit Result

The filename-based local audit found six direct candidate files:

| Topic | Direct candidate files | Initial interpretation |
|---|---|---|
| Conjunctivitis | `04-conjunctivitis-parent-guide.html` | Single direct candidate; likely not a duplicate. |
| Ringworm | `19-ringworm-parent-guide.html` | Single direct candidate; likely not a duplicate. |
| Bedwetting | `bedwetting-nocturnal-enuresis-parent-guide.html`; `bedwetting-parent-guide.html` | True duplicate/overlap candidate requiring canonical decision. |
| Temper tantrums | `temper-tantrums-and-behaviour-regulation-parent-guide.html`; `temper-tantrums-parent-guide.html` | True duplicate/overlap candidate requiring canonical decision. |

Content-only keyword mentions also appeared in unrelated pages. These should be inspected but should not be treated as duplicates unless the full page is actually about the target topic.

## Preliminary Canonical Decisions to Review

These are planning recommendations only, not implemented in this PR.

### Bedwetting

Recommended canonical candidate:

`bedwetting-nocturnal-enuresis-parent-guide.html`

Reason:

- More clinically specific title.
- Better distinguishes nocturnal enuresis from daytime wetting.
- Can preserve parent-friendly wording while avoiding a generic duplicate.

Proposed future action:

- Compare both pages side by side.
- Keep the stronger page as canonical.
- Convert the weaker page to redirect/stub only after confirming links/index references.
- Do not delete immediately.

### Temper Tantrums

Recommended canonical candidate:

`temper-tantrums-and-behaviour-regulation-parent-guide.html`

Reason:

- Broader and more constructive parent-facing framing.
- Captures behaviour regulation rather than only the symptom label.

Proposed future action:

- Compare both pages side by side.
- Keep the broader page as canonical if metadata and content are stronger.
- Convert the weaker page to redirect/stub only after confirming links/index references.
- Do not delete immediately.

### Ringworm

Recommended canonical candidate:

`19-ringworm-parent-guide.html`

Reason:

- Only direct filename candidate found.
- No immediate duplicate action required from filename audit.

Proposed future action:

- Confirm metadata quality and whether a non-numbered newer page exists later.
- Do not delete or rename in this PR.

### Conjunctivitis

Recommended canonical candidate:

`04-conjunctivitis-parent-guide.html`

Reason:

- Only direct filename candidate found.
- No immediate duplicate action required from filename audit.

Proposed future action:

- Confirm metadata quality and whether a non-numbered newer page exists later.
- Do not delete or rename in this PR.

## Audit Script

This PR adds:

```text
tools/audit-duplicate-metadata-targets.js
```

Run from repo root:

```powershell
node .\tools\audit-duplicate-metadata-targets.js
```

The script separates:

- Direct filename candidates.
- Metadata for each direct candidate.
- Content-only mentions that are likely not duplicates.

## Safety Rules for Future Cleanup PR

Before any future deletion or redirect:

1. Confirm canonical file for each duplicate topic.
2. Confirm old URL is not needed by existing homepage/index data.
3. Confirm whether any internal links point to the weaker duplicate.
4. Prefer redirect/stub over immediate deletion.
5. Preserve disclaimer, references, last-reviewed date, and review status.
6. Do not mark pending pages as reviewed unless clinical review is complete.
7. Run build, validation, Batch 10 QA, `.png.png` check, and git status before merge.

## Out of Scope for This PR

This PR does not:

- Delete files.
- Rename files.
- Create redirects.
- Change clinical text.
- Change metadata status/review state.
- Change references or last-reviewed dates.
- Add or remove public guide cards.

## Recommended Next Step After This PR

Create a future implementation PR only after reviewing the audit output:

```text
PR #97 — Implement duplicate canonical stubs for bedwetting and tantrums
```

Potential implementation approach:

- Keep selected canonical pages unchanged or minimally updated for metadata consistency.
- Convert weaker duplicates into lightweight redirect/stub pages.
- Avoid breaking direct old URLs.
- Keep the site in controlled-review mode.
