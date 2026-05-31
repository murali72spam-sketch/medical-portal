# Clinical Portal 2026 — High-Risk Clinical Review Sprint Plan

Date: 30 May 2026

Branch: `planning/high-risk-clinical-review-sprint`

## Purpose

Plan the next clinical-review sprint after PR #97.

This PR is planning/audit only. It does not rewrite public medical content and does not mark any page as clinician-reviewed.

## Current Portal Posture

- Site remains in controlled-review mode.
- Production sends `X-Robots-Tag: noindex, nofollow`.
- Vercel public index exposes reviewed + published resources only.
- Local build exposes all resources for QA/review.
- Duplicate stubs were created for older bedwetting and tantrums URLs in PR #97.

## Why This Sprint Matters

The largest remaining launch blocker is not technical. It is clinical governance:

- Many resources remain pending clinician review or draft.
- Validation currently reports 20 governance/safety warnings.
- High-risk pages include vaccination, medication/dose wording, emergency/high-caution recognition, and serious infection content.

## Scope of PR #98

Allowed in this PR:

- Add a planning document.
- Add a high-risk audit script.
- Add an npm script to rerun the audit.
- Define priority groups and review order.

Not allowed in this PR:

- Mark any resource as reviewed.
- Change medication, dosing, vaccine schedule, red-flag, emergency, antibiotic, steroid, or treatment wording.
- Add new clinical advice.
- Delete, rename, or redirect clinical resources.
- Change public launch mode or remove noindex.

## Audit Script

This PR adds:

```text
tools/audit-high-risk-review-sprint.js
```

Run:

```powershell
npm.cmd run audit:high-risk-review
```

The script scans `html-conditions` and groups candidates by:

- Vaccination / immunisation
- Dose / medication / treatment wording
- Emergency / high-caution recognition
- Serious infection / systemic illness

## Review Priority Model

### Priority 1 — Highest caution

Review first because errors could directly affect parent decisions around vaccination, medication, treatment, or safety-critical timing.

Candidate types:

- Vaccination pages
- Catch-up vaccination pages
- Pages with dose/dosing/minimum interval wording
- Pages with antibiotic/steroid/insulin/levothyroxine/salbutamol/adrenaline wording
- Pages with emergency treatment or treatment algorithm wording

### Priority 2 — High caution

Review second because these pages involve serious illness recognition or time-sensitive escalation.

Candidate types:

- Emergency/danger-sign pages
- Anaphylaxis or severe allergy recognition pages
- Poisoning, burns, head injury, seizure, meningitis-type pages
- Serious infections such as osteomyelitis, typhoid, pneumonia, measles, pertussis, dengue, UTI, tuberculosis

## Proposed Review Batches After PR #98

### PR #99 — Vaccination governance review pack

Planning/review pack only first, then implementation if needed.

Likely candidates:

- `catch-up-vaccination-parent-guide.html`
- `hpv-vaccine-parent-guide.html`
- `vaccination-faq-for-parents.html`
- `vaccination-in-children-with-asthma-allergy.html`
- `vaccination-in-special-medical-conditions.html`
- `bcg-scar-and-lump.html`
- travel or immunisation-adjacent pages if flagged by the audit

### PR #100 — Medication / dose-warning review pack

Likely candidates from validator warning categories:

- antibiotic-warning pages
- steroid-warning pages
- levothyroxine/insulin-related pages
- asthma-related dose wording pages

### PR #101 — Emergency / high-caution recognition review pack

Likely candidates:

- danger signs
- anaphylaxis or severe allergy pages
- head injury / burns / poisoning / seizure pages
- Kawasaki disease / MIS-C awareness pages

### PR #102 — Serious infection review pack

Likely candidates:

- osteomyelitis
- typhoid fever
- pneumonia
- measles
- pertussis
- dengue
- UTI
- tuberculosis

## Clinical Review Checklist for Each Future Implementation PR

For every page in a review batch:

1. Confirm page is clinically in-scope for parent education.
2. Confirm no specific dose, schedule, interval, or treatment algorithm is invented.
3. Confirm vaccination guidance matches current planned source verification at time of review.
4. Confirm antibiotic/steroid wording does not imply parent-led self-treatment.
5. Confirm red flags are cautious but not alarmist.
6. Confirm references are reputable and appropriate.
7. Confirm disclaimer and non-substitution wording are present.
8. Confirm `last_reviewed` is updated only after actual clinician review.
9. Confirm `medical_review_status` changes to `reviewed` only after actual clinician approval.
10. Run build, validation, Batch 10 QA, `.png.png` check, and end with `git status`.

## Validation Commands for This PR

```powershell
npm.cmd run audit:high-risk-review
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

## Expected PR #98 Outcome

- High-risk clinical review audit script exists.
- Review priority groups are documented.
- No clinical page content is changed.
- No resource is marked reviewed.
- The next implementation PR can start with a clear risk-based review order.
