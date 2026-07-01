# Clinical Portal 2026 - Batch 15 Canonical Decisions

## Purpose

This document records the canonical-page and defer/merge/redirect decisions needed before Batch 15 finalization.

It is a documentation-only decision log. It does not edit public HTML, change status, mark pages as reviewed, create redirects, generate QR codes, or alter generated files.

## Context

Batch 15 covers high-risk parent guidance for injury, first aid, poisoning, safe medicine use, and urgent safety topics. The Batch 15 clinician-review plan and review pack identified overlap between several draft resources. Those overlap questions must be resolved before any finalization branch is created.

Source documents:

- `docs/clinical-review/batch-15-clinician-review-plan.md`
- `docs/clinical-review/batch-15-clinician-review-pack.md`
- `docs/audit/post-batch-13-pending-resources-audit.md`
- `data/conditions-index.json`

## Current decision status

| Decision area | Status |
| --- | --- |
| Burns duplicate | Provisional canonical decision recorded; pending clinician confirmation |
| Head injury / concussion overlap | Provisional canonical decision recorded; pending clinician confirmation |
| Poisoning duplicate | Provisional canonical decision recorded; pending clinician confirmation |
| Urgent-care threshold overlap | Provisional defer/redirect decision recorded; pending clinician confirmation |
| Home-safety prevention page | Deferred to later prevention batch |
| Batch 15 finalization allowed now? | No |

## Batch 15 canonical set for review

These 8 resources remain the proposed Batch 15 review/finalization candidates after overlap screening.

| # | Canonical review target | Filename | Decision status |
| ---: | --- | --- | --- |
| 1 | Child First Aid Basics | `child-first-aid-basics-parent-guide.html` | Include in Batch 15 review |
| 2 | Choking Prevention and First Response | `choking-prevention-and-first-response-parent-guide.html` | Include in Batch 15 review |
| 3 | Foreign Body in Ear, Nose, or Eye | `foreign-body-ear-nose-eye-parent-guide.html` | Include in Batch 15 review |
| 4 | Dog Bite and Animal Bite Care | `dog-bite-animal-bite-care-parent-guide.html` | Include in Batch 15 review |
| 5 | Safe Medicine Use at Home | `safe-medicine-use-at-home-parent-guide.html` | Include in Batch 15 review |
| 6 | Poisoning and Accidental Ingestion | `poisoning-accidental-ingestion-parent-guide.html` | Include as tentative canonical poisoning response page |
| 7 | Head Injury in Children | `head-injury-in-children-parent-guide.html` | Include as tentative canonical head injury page |
| 8 | Burns and Scalds | `burns-and-scalds-parent-guide.html` | Include as tentative canonical burns page |

## Decision 1 - Burns duplicate

| Field | Decision |
| --- | --- |
| Tentative canonical page | `burns-and-scalds-parent-guide.html` |
| Deferred page | `burns-and-scalds-in-children-parent-guide.html` |
| Recommended action now | Review only the canonical page in Batch 15 |
| Later action | Compare content, then merge useful non-duplicative content or redirect the deferred page |
| Finalization allowed now? | No, not until clinician review/sign-off |

Rationale:

- Both pages cover the same parent-facing burns/scalds topic.
- Reviewing both in the same batch risks duplicate public pages and possible conflicting advice.
- The shorter canonical filename is preferred for long-term routing unless content review shows the other page is stronger.
- The deferred page should not be deleted during Batch 15. It should be compared and handled later by merge or redirect.

Clinical caution:

- Burns first-aid wording, home remedies, dressing advice, burn-depth language, and escalation thresholds must be source checked.
- Do not add treatment algorithms or referral thresholds without clinician sign-off.

## Decision 2 - Head injury / concussion overlap

| Field | Decision |
| --- | --- |
| Tentative canonical page | `head-injury-in-children-parent-guide.html` |
| Deferred page | `minor-head-injury-concussion-parent-guide.html` |
| Recommended action now | Review only the broader head-injury page in Batch 15 |
| Later action | Decide whether concussion content becomes a subsection, a separate reviewed page, or a redirect |
| Finalization allowed now? | No, not until clinician review/sign-off |

Rationale:

- Parent-facing head injury advice should avoid fragmented guidance that could confuse escalation decisions.
- The broader head-injury page is the safer canonical target for urgent parent decision-making.
- The concussion-specific page can be reconsidered later if it has a distinct scope, such as return-to-school/sport education.

Clinical caution:

- Head injury content is high-risk because of deterioration warnings, observation advice, imaging implications, concussion advice, and return-to-school/sport decisions.
- Avoid unsupported diagnostic thresholds or imaging rules.

## Decision 3 - Poisoning duplicate

| Field | Decision |
| --- | --- |
| Tentative canonical page | `poisoning-accidental-ingestion-parent-guide.html` |
| Deferred page | `poisoning-prevention-and-what-to-do-parent-guide.html` |
| Recommended action now | Review only the poisoning/accidental ingestion response page in Batch 15 |
| Later action | Decide whether the deferred page becomes a prevention-only guide or redirects to the canonical response guide |
| Finalization allowed now? | No, not until clinician review/sign-off |

Rationale:

- Poisoning response is high-risk and should have one clear canonical parent-facing pathway.
- Duplicate poisoning pages could create conflicting emergency advice.
- Prevention material may still be valuable later as a lower-risk home-safety prevention page.

Clinical caution:

- Do not include induced vomiting advice, antidotes, decontamination steps, substance-specific treatment algorithms, or medication guidance unless verified from authoritative poison-control/emergency sources and clinically signed off.

## Decision 4 - Urgent-care threshold overlap

| Field | Decision |
| --- | --- |
| Existing reviewed page | `red-flags-urgent-care.html` |
| Deferred overlapping page | `when-to-seek-urgent-medical-care-parent-guide.html` |
| Recommended action now | Do not include in Batch 15 finalization |
| Later action | Compare with reviewed red-flags page; likely merge, redirect, or reserve for navigation wording only |
| Finalization allowed now? | No |

Rationale:

- `red-flags-urgent-care.html` is already reviewed and published.
- A second urgent-care threshold page may duplicate or conflict with the reviewed red-flags guide.
- A later navigation/redirect decision is safer than creating another reviewed urgent-care page immediately.

Clinical caution:

- Urgent-care thresholds and emergency red flags are high-risk and must remain conservative and source-aligned.

## Decision 5 - Home safety prevention page

| Field | Decision |
| --- | --- |
| Deferred page | `home-safety-for-toddlers-parent-guide.html` |
| Recommended action now | Defer from Batch 15 finalization |
| Later action | Include in a later home-safety/prevention batch |
| Finalization allowed now? | No |

Rationale:

- This page is prevention-focused rather than first-response focused.
- It can be reviewed in a later lower-acuity home safety/prevention batch.
- Keeping Batch 15 focused on high-risk first-response pages makes clinician review more manageable.

## Final Batch 15 review/finalization candidate list

Proceed to clinician review/sign-off for these pages only:

1. `child-first-aid-basics-parent-guide.html`
2. `choking-prevention-and-first-response-parent-guide.html`
3. `foreign-body-ear-nose-eye-parent-guide.html`
4. `dog-bite-animal-bite-care-parent-guide.html`
5. `safe-medicine-use-at-home-parent-guide.html`
6. `poisoning-accidental-ingestion-parent-guide.html`
7. `head-injury-in-children-parent-guide.html`
8. `burns-and-scalds-parent-guide.html`

Do not finalize these deferred pages in Batch 15:

1. `burns-and-scalds-in-children-parent-guide.html`
2. `minor-head-injury-concussion-parent-guide.html`
3. `poisoning-prevention-and-what-to-do-parent-guide.html`
4. `when-to-seek-urgent-medical-care-parent-guide.html`
5. `home-safety-for-toddlers-parent-guide.html`

## Required clinician sign-off before finalization

Before any Batch 15 finalization branch, Dr. Murali should confirm:

- [ ] The 8 canonical pages are the correct Batch 15 targets.
- [ ] The 5 deferred pages should not be finalized in Batch 15.
- [ ] Burns canonical choice is acceptable.
- [ ] Head injury canonical choice is acceptable.
- [ ] Poisoning canonical choice is acceptable.
- [ ] Red-flags page remains the urgent-care canonical page for now.
- [ ] Home-safety prevention is deferred.
- [ ] Finalization date is agreed.

## Finalization branch rules after sign-off

Only after explicit clinician sign-off:

- Create a separate feature branch for Batch 15 finalization.
- Edit only approved canonical pages.
- Do not finalize deferred duplicate/overlap pages.
- Do not add new clinical instructions unless they are clinically reviewed and source verified.
- Update metadata, reviewed footer, print button, related guides, QR assets, `data/conditions-index.json`, and `sitemap.xml` as required.
- Run full build, validation, QA, safety checks, and Git diff review before PR.

## Explicit non-actions in this decision-log step

- No public HTML edited.
- No page status changed.
- No `medical_review_status` changed.
- No QR generated.
- No generated files committed.
- No redirect created.
- No source medical content inserted.
- No clinical finalization performed.
