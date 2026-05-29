# Clinical Portal 2026 — Duplicate and Metadata Cleanup Plan

## 1. Purpose

This document records duplicate, near-duplicate, and metadata follow-up items identified after Batch 3 clinician review finalization.

This PR is documentation-only. No public HTML content is changed, no duplicate pages are deleted, and no metadata, status, `medical_review_status`, or `last_reviewed` fields are changed in this PR.

## 2. Scope

This plan covers only future cleanup planning for:

- duplicate or near-duplicate parent-guide pages identified during Batch 3 review
- category metadata follow-up notes identified during Batch 3 review
- a staged governance workflow for any later consolidation, redirect, archive, or category-change decision

It does not approve or implement any content, metadata, index, review-status, redirect, archive, or deletion change.

## 3. Duplicate / Near-Duplicate Pages Identified

### Tantrums

Finalized Batch 3 page:

- `html-conditions/temper-tantrums-and-behaviour-regulation-parent-guide.html`

Older duplicate / needs later decision:

- `html-conditions/temper-tantrums-parent-guide.html`

A later comparison PR should review both pages side by side before any consolidation decision. Possible later decisions include:

- keep both pages if they are clinically distinct
- merge useful content from the older page into the finalized page
- mark the older page as superseded or archived if safe
- redirect or remove from the index only after a governance decision
- do not delete until production impact is understood

### Bedwetting

Finalized Batch 3 page:

- `html-conditions/bedwetting-nocturnal-enuresis-parent-guide.html`

Older duplicate / needs later decision:

- `html-conditions/bedwetting-parent-guide.html`

A later comparison PR should review both pages side by side before any consolidation decision. Possible later decisions include:

- keep both pages if they are clinically distinct
- merge useful content from the older page into the finalized page
- mark the older page as superseded or archived if safe
- redirect or remove from the index only after a governance decision
- do not delete until production impact is understood

## 4. Metadata Follow-up Items

### Ringworm / Tinea in Children

Current category: Fever & Infections.

Follow-up note: this topic may belong better under Skin & Allergy, or under a future skin/infections grouping. No category change is made in this PR.

### Conjunctivitis / Pink Eye in Children

Current category: Fever & Infections.

Follow-up note: allergic and irritant causes may overlap with Skin & Allergy. No category change is made in this PR.

If category changes are approved later, they should be handled in a separate metadata-only PR.

## 5. Recommended Staged Workflow

1. Create a later comparison PR for each duplicate or near-duplicate pair.
2. Compare clinical coverage, parent-facing wording, safety advice, red flags, navigation value, and search behavior.
3. Ask for governance approval before any merge, archive, redirect, index removal, or deletion decision.
4. If consolidation is approved, preserve clinically useful content before changing visibility.
5. If metadata category changes are approved, make them in a separate metadata-only PR with no public content edits.

## 6. Safety Boundaries

Any redirect, archive, index removal, or delete decision must preserve patient safety, search behavior, and portal navigation.

Do not delete duplicate pages until production impact is understood. Do not change public content, metadata, status, `medical_review_status`, `last_reviewed`, or index visibility without a separate approved PR.

## 7. Proposed Future PRs

- Tantrums duplicate comparison PR: compare the finalized Batch 3 tantrums page with the older tantrums parent-guide page and recommend keep, merge, supersede, redirect, or index-only action.
- Bedwetting duplicate comparison PR: compare the finalized Batch 3 bedwetting page with the older bedwetting parent-guide page and recommend keep, merge, supersede, redirect, or index-only action.
- Metadata-only category review PR: review Ringworm / Tinea in Children and Conjunctivitis / Pink Eye in Children category placement if governance approves category review.

## 8. Next Step

Open a future documentation or comparison PR for the first duplicate pair, beginning with side-by-side clinical and navigation review. No duplicate page should be deleted, redirected, archived, or removed from the index until that review is complete and the production impact is understood.
