# Clinical Portal 2026 - Batch 15 Clinician Review Plan

## Purpose

This document plans the next clinician-review batch after Batch 13 finalization. It is a planning/audit document only. It does not finalize, publish, redirect, or modify any public parent-facing HTML resource.

Batch 15 should focus on parent education for injury prevention, first aid, accidental exposure, poisoning, medicine safety, and selected urgent response topics. These resources should be treated as high-risk because wording errors could affect parent escalation decisions, first-response actions, poisoning response, animal-bite care, or medication safety.

## Batch theme

**Injury, first-aid, home safety, poisoning, and urgent-care parent guidance.**

This batch should not add new clinical algorithms. It should review existing draft content, identify overlap, select canonical pages, and prepare a later clinician-review pack for Dr. Murali Gopal's sign-off.

## Current repository state

Repository state used for this plan: `main` after PR #163 / Batch 13 finalization.

| Metric | Count / status |
| --- | ---: |
| Total resources/htmls | 145 |
| Resources in generated index | 145 |
| Published + reviewed | 118 |
| Published + pending clinician review | 0 |
| Draft + pending review | 25 |
| Reviewed draft redirects | 2 |
| Remaining guides needing review/completion or audit follow-up | 29 |
| QR SVG count | 118 |

Notes:

- Batch 13 finalization moved the eight previously published pending-review resources to `medical_review_status: reviewed` with `last_reviewed: 2026-06-29`.
- Batch 15 should therefore start from draft/pending safety and first-aid resources, not from published pending pages.
- The two reviewed draft redirects remain excluded from standard reviewed-page finalization unless redirect governance changes.

## Candidate scan

| # | Title | Filename | Status | medical_review_status | Last reviewed | Duplicate/overlap concern | Risk level | Initial recommendation |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Burns and Scalds | `burns-and-scalds-parent-guide.html` | draft | pending-clinician-review | 2026-05-22 | Overlaps with `burns-and-scalds-in-children-parent-guide.html` | High | Consider as tentative canonical burns page after content comparison |
| 2 | Burns and Scalds in Children | `burns-and-scalds-in-children-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | Duplicate/overlap with `burns-and-scalds-parent-guide.html` | High | Defer or convert to redirect after canonical burns page is chosen |
| 3 | Child First Aid Basics | `child-first-aid-basics-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | May overlap with choking, foreign body, burns, poisoning, and head injury pages | High | Include if wording is kept general and cross-links to specific reviewed guides |
| 4 | Choking Prevention and First Response | `choking-prevention-and-first-response-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | First-response wording must be source checked | High | Include with extra caution; verify against recognised first-aid/paediatric sources |
| 5 | Dog Bite and Animal Bite Care | `dog-bite-animal-bite-care-parent-guide.html` | draft | pending-clinician-review | 2026-05-22 | Rabies, tetanus, wound care, and antibiotic-prophylaxis implications | High | Include only with strict non-algorithmic wording and source verification |
| 6 | Foreign Body in Ear, Nose, or Eye | `foreign-body-ear-nose-eye-parent-guide.html` | draft | pending-clinician-review | 2026-05-22 | First-response and what-not-to-do advice | High | Include; avoid procedural removal instructions beyond source-supported safety guidance |
| 7 | Head Injury in Children | `head-injury-in-children-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | Overlaps with `minor-head-injury-concussion-parent-guide.html` | High | Consider as tentative canonical head-injury page |
| 8 | Minor Head Injury and Concussion | `minor-head-injury-concussion-parent-guide.html` | draft | pending-clinician-review | 2026-05-22 | Overlaps with `head-injury-in-children-parent-guide.html` | High | Defer or merge into canonical head-injury page after comparison |
| 9 | Poisoning and Accidental Ingestion | `poisoning-accidental-ingestion-parent-guide.html` | draft | pending-clinician-review | 2026-05-22 | Overlaps with `poisoning-prevention-and-what-to-do-parent-guide.html`; high-risk ingestion response | High | Consider as tentative canonical poisoning-response page |
| 10 | Safe Medicine Use at Home | `safe-medicine-use-at-home-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | Medication-safety and dosing-adjacent wording | High | Include with explicit no-dosing / consult-paediatrician wording |

## Adjacent pages inspected but not selected as core Batch 15 candidates

| Title | Filename | Status | medical_review_status | Last reviewed | Reason for separate handling |
| --- | --- | --- | --- | --- | --- |
| Poisoning Prevention and What to Do | `poisoning-prevention-and-what-to-do-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | Overlaps with poisoning accidental ingestion; compare before deciding merge, redirect, or later prevention page |
| Home Safety for Toddlers | `home-safety-for-toddlers-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | Prevention-focused and suitable for a later home-safety/prevention batch if Batch 15 remains high-risk first response |
| When to Seek Urgent Medical Care | `when-to-seek-urgent-medical-care-parent-guide.html` | draft | pending-clinician-review | 2026-05-24 | Overlaps with already reviewed `red-flags-urgent-care.html`; defer until overlap/redirect strategy is decided |

## Proposed final Batch 15 selection

Recommended safe initial selection for the actual Batch 15 review pack: **8 resources**.

1. `child-first-aid-basics-parent-guide.html`
2. `choking-prevention-and-first-response-parent-guide.html`
3. `foreign-body-ear-nose-eye-parent-guide.html`
4. `dog-bite-animal-bite-care-parent-guide.html`
5. `safe-medicine-use-at-home-parent-guide.html`
6. `poisoning-accidental-ingestion-parent-guide.html`
7. `head-injury-in-children-parent-guide.html`
8. `burns-and-scalds-parent-guide.html`

Rationale:

- Keeps the batch focused on parent safety and first response.
- Avoids reviewing duplicate burns pages together.
- Avoids reviewing duplicate poisoning pages together.
- Avoids reviewing two overlapping head-injury/concussion pages together.
- Avoids duplicating the already reviewed urgent-care red-flags page.
- Keeps the batch size manageable for detailed clinician review.

Before creating the review pack, compare the duplicate/overlap pairs and confirm the canonical page choice:

| Area | Tentative canonical page | Page to defer / merge / redirect later |
| --- | --- | --- |
| Burns and scalds | `burns-and-scalds-parent-guide.html` | `burns-and-scalds-in-children-parent-guide.html` |
| Head injury | `head-injury-in-children-parent-guide.html` | `minor-head-injury-concussion-parent-guide.html` |
| Poisoning | `poisoning-accidental-ingestion-parent-guide.html` | `poisoning-prevention-and-what-to-do-parent-guide.html` |
| Urgent care thresholds | Already reviewed `red-flags-urgent-care.html` | `when-to-seek-urgent-medical-care-parent-guide.html` |

## Pages to defer

| Filename | Reason to defer |
| --- | --- |
| `burns-and-scalds-in-children-parent-guide.html` | Duplicate/overlap with tentative canonical burns page; decide merge or redirect before clinical review |
| `minor-head-injury-concussion-parent-guide.html` | Overlaps with broader head-injury page; decide whether concussion is a subsection, separate page, or redirect |
| `poisoning-prevention-and-what-to-do-parent-guide.html` | Overlaps with poisoning accidental ingestion; decide whether it becomes prevention-only or redirect |
| `home-safety-for-toddlers-parent-guide.html` | Prevention-focused; better suited to later home-safety/prevention batch |
| `when-to-seek-urgent-medical-care-parent-guide.html` | Overlaps with reviewed `red-flags-urgent-care.html`; decide whether to merge, redirect, or preserve as separate navigation entry |

## Clinical risk notes

### Burns and scalds

Review must avoid unsupported first-aid instructions, home remedies, burn-depth classification, dressing algorithms, or thresholds not supported by cited sources. Decide on one canonical burns page before review.

### Choking

High-risk first-response content. Verify against recognised paediatric first-aid guidance. Avoid unsupported procedural detail, and ensure emergency escalation language is clear and source-aligned.

### Dog and animal bites

High risk because of rabies, tetanus, wound infection, antibiotic-prophylaxis, and local public-health implications. Avoid treatment/prophylaxis algorithms unless explicitly source checked and clinically signed off.

### Foreign body in ear, nose, or eye

Focus on what parents should not attempt and when to seek care. Avoid procedural removal instructions that could cause harm.

### Head injury and concussion

High risk because of escalation thresholds, observation wording, imaging implications, return-to-play/school advice, and delayed deterioration. Choose one canonical head-injury page before review.

### Poisoning and accidental ingestion

High risk because wrong home advice can be dangerous. Avoid inducing vomiting, antidote advice, dosing, decontamination instructions, or substance-specific algorithms unless supported by authoritative sources and clinician sign-off.

### Safe medicine use

Medication-safety and dosing-adjacent. The page should explicitly avoid dose calculators, dose tables, or medication selection guidance. It should emphasize using medicines only as prescribed/recommended and contacting the child's paediatrician or local emergency/poison service when concerned.

### First-aid basics

Should be a hub-style guide with general safety principles and links to specific reviewed resources. It should avoid duplicating detailed emergency algorithms from individual high-risk pages.

## Source verification requirements

Use source families appropriate to each page. The review pack should list the exact sources checked for each resource.

Recommended source families:

- RCH Australia / Kids Health Info
- RCH clinical or parent guidance where available
- NHS child health / first-aid / urgent-care pages
- AAP / HealthyChildren parent education pages
- CDC resources where relevant, especially bites, infection prevention, poisoning, and child safety
- WHO resources where relevant
- Indian government / National Health Mission / MoHFW / public-health sources where relevant
- Recognised poison-control or first-aid bodies where relevant
- Recognised specialty bodies for head injury, poisoning, burns, or emergency care when parent-facing sources are insufficient

Do not use weak sources for clinical thresholds, first-aid steps, prophylaxis, or medication advice.

## Proposed workflow

1. Create Batch 15 clinician-review pack after this plan is reviewed.
2. Compare duplicate/overlap pages before review-pack drafting.
3. Select canonical pages and document defer/merge/redirect decisions.
4. Dr. Murali performs clinical review and sign-off.
5. Finalization PR only after sign-off.
6. Finalization should update reviewed status, last-reviewed date, reviewed footer, print/QR/Related Guides, QR assets, and generated files as required.
7. Validate locally before commit/PR.
8. Production verification after merge.
9. Cleanup branch/stash only after production verification.

## Explicit non-actions in this planning step

- No public HTML edited.
- No resource status changed.
- No `medical_review_status` changed.
- No QR generated.
- No generated files committed.
- No clinical guidance, first-aid algorithm, dosing, prophylaxis, or escalation threshold added.

## Validation note

This planning document is safe to create as a documentation-only branch. The later review-pack and finalization branches should still run the standard checks:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
Get-ChildItem ".\assets\qr" -Filter "*.svg" | Measure-Object
Select-String -Path ".\html-conditions\*.html",".\style.css",".\docs\*.md",".\docs\audit\*.md",".\docs\clinical-review\*.md" -Pattern "â","Ã","�" -SimpleMatch
git diff --check
git diff --stat
git status
```

If the build changes only `data/conditions-index.json` or `sitemap.xml` without source changes, restore generated noise before committing documentation-only work.
