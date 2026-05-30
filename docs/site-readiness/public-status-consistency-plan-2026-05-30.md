# Clinical Portal 2026 — Public Status Consistency Plan

Date: 30 May 2026

Branch: `fix/public-status-consistency`

## Purpose

Plan a narrow consistency pass after PR #94 controlled-review infrastructure.

The goal is to make sure public-facing wording, index behavior, and review-state labels do not confuse parents while the portal remains in controlled clinical-review mode.

## Current Launch Posture

The portal is not in full public launch mode.

PR #94 established controlled-review infrastructure:

- Production remains reachable by direct URL.
- Vercel sends `X-Robots-Tag: noindex, nofollow`.
- Vercel public index exposes reviewed and published resources only.
- Local builds still expose all resources for QA and review workflows.

## Problem to Solve

Some pages may still have visible wording such as:

- Draft resource
- Clinician review pending
- Internal review only
- Under development
- Needs verification

This wording is appropriate for unreviewed or draft pages when opened directly, but it should not appear on resources that are intended to look finalized, reviewed, and published.

## Scope

This PR should check and, if needed, patch only status-consistency wording.

Allowed changes:

- Fix visible status wording that conflicts with metadata.
- Add or refine review-mode wording for directly opened draft/pending resources.
- Add documentation for the public-status rule.
- Add lightweight scripts/checks if useful.

Not allowed in this PR:

- Mark any resource as reviewed.
- Change medical advice, treatment wording, red flags, doses, vaccination guidance, or references.
- Delete duplicate pages.
- Change categories unless explicitly documented for a later metadata cleanup PR.
- Remove the global noindex header.
- Add analytics, tracking, login, appointment features, or patient-data collection.

## Public Status Rules

### Reviewed + Published

A resource with:

```text
status: published
medical_review_status: reviewed
```

should not visibly say:

```text
draft
pending clinician review
internal review only
under development
needs verification
```

It may show:

```text
Reviewed
Published
Last reviewed
References
Medical disclaimer
```

### Pending / Draft / Needs Verification

A resource with any of the following:

```text
status: draft
medical_review_status: pending-clinician-review
medical_review_status: needs-verification
```

may show a clear review-mode warning if opened by direct link.

Acceptable wording:

```text
Draft resource — clinician review pending. This page is under development for Dr. Murali Gopal's Clinical Portal 2026. It is provided for internal review only and should not be used as final medical advice.
```

## Suggested Audit Commands

From the repo root:

```powershell
Select-String -Path .\html-conditions\*.html -Pattern "Draft resource|clinician review pending|pending-clinician-review|internal review only|under development|needs-verification" -CaseSensitive:$false | Select-Object Path,LineNumber,Line
```

Then separately inspect reviewed/published resources before making any edits.

## Validation Commands

Before merge:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git status
```

If only `data/conditions-index.json` changes due to build generation and no source HTML changed, restore it:

```powershell
git restore data/conditions-index.json
```

## Expected Result

- Reviewed/published pages do not contain confusing draft/pending/internal-review wording.
- Draft/pending pages remain clearly labelled if opened directly.
- Production indexing remains controlled by PR #94.
- No medical content is changed.
