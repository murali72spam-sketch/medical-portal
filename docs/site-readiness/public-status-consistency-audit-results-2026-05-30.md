# Clinical Portal 2026 — Public Status Consistency Audit Results

Date: 30 May 2026

Branch: `fix/public-status-consistency`

## Command Run

```powershell
node .\tools\audit-public-status-consistency.js
```

## Result Summary

```json
{
  "totalHtmlFiles": 145,
  "reviewedPublished": 39,
  "pendingOrDraft": 106,
  "reviewedPublishedVisibleConflicts": 0,
  "pendingOrDraftVisibleNotices": 66
}
```

## Interpretation

The targeted body-text audit found no reviewed and published resources with visible draft, pending-review, internal-review, under-development, or needs-verification wording.

This means there is no public-status wording conflict to patch in reviewed/published resources in this PR.

The 66 pending/draft resources with visible review-mode notices are acceptable under the current controlled-review posture. These notices are appropriate when a pending or draft page is opened by direct link.

## Decision

No parent-guide wording changes are required in this PR.

This PR should remain limited to:

- Documentation of public-status rules.
- Reusable audit tooling.
- An npm script to rerun the audit.

## Safety Boundary

No clinical content was changed.
No resource was marked as reviewed.
No status, `medical_review_status`, `last_reviewed`, medication, vaccination, red-flag, dosing, or reference wording was changed.
