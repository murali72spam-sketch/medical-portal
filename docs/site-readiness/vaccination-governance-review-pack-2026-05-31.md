# Clinical Portal 2026 — Vaccination Governance Review Pack

Date: 31 May 2026

Branch: `planning/vaccination-governance-review-pack`

## Purpose

Create a planning-only review pack for vaccination-related Clinical Portal resources after PR #98.

This PR does not clinically rewrite vaccination content and does not mark any resource as reviewed.

## Current Portal Posture

- Site remains in controlled-review mode.
- Production uses `X-Robots-Tag: noindex, nofollow`.
- Vercel public index exposes reviewed + published resources only.
- Local build exposes all resources for QA/review.
- PR #98 identified high-risk clinical review candidates and recommended vaccination governance as the next focused review area.

## Scope of This PR

Allowed:

- Add a vaccination governance audit script.
- Add an npm command to run the audit.
- Document the vaccination review-pack scope and checklist.
- Prioritize pages for a future implementation PR.

Not allowed:

- Change vaccination schedules, vaccine timing, contraindications, side-effect advice, catch-up logic, or medical wording.
- Mark resources as reviewed.
- Update last-reviewed dates.
- Add clinical claims without source verification.
- Add calculators, patient-data workflows, forms, analytics, or backend logic.

## Audit Script

This PR adds:

```text
tools/audit-vaccination-governance-pack.js
```

Run:

```powershell
npm.cmd run audit:vaccination-governance
```

The audit identifies vaccination-related pages by category, filename, title, and slug, then flags governance-sensitive content groups:

- dose / dosing / mg / mL wording
- schedule / interval / catch-up wording
- route / needle / injection wording
- contraindication / precaution wording
- emergency / anaphylaxis wording
- brand / product-specific wording

## Expected Candidate Set

Likely vaccination review-pack pages include:

- `bcg-scar-and-lump.html`
- `catch-up-vaccination-parent-guide.html`
- `fever-after-vaccination.html`
- `hpv-vaccine-parent-guide.html`
- `influenza-vaccine-parent-guide.html`
- `missed-or-delayed-vaccines.html`
- `travel-vaccination-for-children.html`
- `vaccination-faq-for-parents.html`
- `vaccination-in-children-with-asthma-allergy.html`
- `vaccination-in-special-medical-conditions.html`
- `vaccination-records-and-missed-doses.html`
- `vaccination-why-it-matters.html`
- `vaccine-myths-and-misconceptions.html`
- `vaccine-side-effects-and-aftercare.html`

The local audit output should be treated as the source of truth for the exact candidate count before opening the implementation PR.

## Proposed Priority Groups

### Priority 1 — governance-sensitive vaccination pages

Pages with dose, interval, schedule, catch-up, contraindication, emergency, anaphylaxis, route, or product-specific wording.

These should be reviewed first and should not be marked reviewed until current source verification is complete.

### Priority 2 — general vaccination education pages

Pages about records, missed doses, why vaccination matters, myths, and general parent education where no high-caution terms are detected.

These can be reviewed after Priority 1 pages.

### Priority 3 — already reviewed vaccination-related resources

Already reviewed items should be listed for governance awareness but not automatically reopened unless source guidance, wording, or validation suggests a problem.

## Source Verification Rule for Future Implementation PR

Before any vaccination content is marked reviewed, verify against current reputable sources at time of review, prioritizing:

- IAP / ACVIP guidance where relevant to Indian practice.
- Indian public health/government vaccine resources where applicable.
- WHO vaccination resources.
- CDC / NHS / AAP resources for general parent-facing safety explanations when appropriate.

Do not invent:

- vaccine schedules
- catch-up intervals
- contraindications
- product-specific advice
- adverse-event management
- emergency treatment algorithms
- age cut-offs
- dose/route details

## Future Implementation PR Checklist

For each page selected in a future vaccination implementation PR:

1. Confirm scope: parent education only, not a vaccination calculator or replacement for consultation.
2. Confirm every schedule/interval/age statement has a current source.
3. Confirm catch-up content avoids oversimplified personalised advice.
4. Confirm contraindication/precaution wording is conservative and source-aligned.
5. Confirm side-effect wording does not delay urgent care when needed.
6. Confirm emergency/anaphylaxis wording does not create a treatment algorithm.
7. Confirm references are specific and reputable.
8. Confirm disclaimer and non-substitution wording are present.
9. Update `last_reviewed` and `medical_review_status` only after actual clinician review.
10. Run build, validation, QA, `.png.png` asset check, and `git status`.

## Validation Commands for This PR

```powershell
npm.cmd run audit:vaccination-governance
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git status
```

If only generated files change after build:

```powershell
git restore data/conditions-index.json sitemap.xml
```

## Expected PR #99 Outcome

- Vaccination governance review pack exists.
- Vaccination candidate audit can be rerun locally.
- No clinical vaccination content is changed yet.
- Next PR can implement a small, source-verified vaccination review batch.
