# Clinical Portal 2026 - Batch 15 Clinician Review Pack

## Purpose

This is the clinician-review pack for Batch 15 safety, first-aid, injury, poisoning, and medication-safety resources.

This document is for clinical review planning and sign-off only. It does not edit public HTML pages, change publication status, mark pages as reviewed, generate QR codes, or alter generated index/sitemap files.

## Batch status

| Field | Value |
| --- | --- |
| Batch | 15 |
| Theme | Injury, first-aid, poisoning, safe medicine use, and urgent safety guidance |
| Review-pack date | 2026-07-01 |
| Reviewer | Dr. Murali Gopal |
| Review status | Pending clinician review |
| Finalization allowed now? | No |
| Public HTML edited in this PR? | No |

## Source documents used

- `docs/audit/post-batch-13-pending-resources-audit.md`
- `docs/clinical-review/batch-15-clinician-review-plan.md`
- `data/conditions-index.json`
- Existing draft resources in `html-conditions/`

## Batch 15 proposed canonical selection

The Batch 15 plan recommends reviewing 8 canonical resources and deferring overlapping duplicates until merge/redirect decisions are made.

| # | Review target | Filename | Current status | Current medical_review_status | Risk level | Review priority |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Child First Aid Basics | `child-first-aid-basics-parent-guide.html` | draft | pending-clinician-review | High | High |
| 2 | Choking Prevention and First Response | `choking-prevention-and-first-response-parent-guide.html` | draft | pending-clinician-review | High | High |
| 3 | Foreign Body in Ear, Nose, or Eye | `foreign-body-ear-nose-eye-parent-guide.html` | draft | pending-clinician-review | High | High |
| 4 | Dog Bite and Animal Bite Care | `dog-bite-animal-bite-care-parent-guide.html` | draft | pending-clinician-review | High | High |
| 5 | Safe Medicine Use at Home | `safe-medicine-use-at-home-parent-guide.html` | draft | pending-clinician-review | High | High |
| 6 | Poisoning and Accidental Ingestion | `poisoning-accidental-ingestion-parent-guide.html` | draft | pending-clinician-review | High | High |
| 7 | Head Injury in Children | `head-injury-in-children-parent-guide.html` | draft | pending-clinician-review | High | High |
| 8 | Burns and Scalds | `burns-and-scalds-parent-guide.html` | draft | pending-clinician-review | High | High |

## Deferred or overlap pages

These pages should not be finalized in Batch 15 until the overlap decision is documented.

| Area | Tentative canonical page | Deferred page | Reason |
| --- | --- | --- | --- |
| Burns and scalds | `burns-and-scalds-parent-guide.html` | `burns-and-scalds-in-children-parent-guide.html` | Duplicate/overlap; choose one parent-facing canonical page before finalization |
| Head injury / concussion | `head-injury-in-children-parent-guide.html` | `minor-head-injury-concussion-parent-guide.html` | Overlap between general head injury and concussion-specific advice |
| Poisoning | `poisoning-accidental-ingestion-parent-guide.html` | `poisoning-prevention-and-what-to-do-parent-guide.html` | Overlap between poisoning response and prevention/what-to-do page |
| Urgent care thresholds | Already reviewed `red-flags-urgent-care.html` | `when-to-seek-urgent-medical-care-parent-guide.html` | Overlap with reviewed red-flags page; decide merge/redirect/separate navigation later |
| Home safety prevention | None in Batch 15 | `home-safety-for-toddlers-parent-guide.html` | Better suited to later prevention-focused safety batch |

## Review method

For each target page, Dr. Murali should check:

1. Page metadata is accurate and complete.
2. The page is suitable for parent education, not clinician protocol.
3. The disclaimer and non-substitution wording are present.
4. The page avoids unsupported first-aid algorithms, red-flag thresholds, treatment plans, medication advice, prophylaxis advice, or dosing.
5. Emergency escalation wording is clear and source-aligned.
6. Source references are reputable and appropriate for the topic.
7. Duplicate/overlap content does not create conflicting advice.
8. Any India-specific emergency or public-health wording is accurate and conservative.
9. The page can be finalized without adding new clinical content, or it must be returned for source/content correction.

## Page-by-page review notes

### 1. Child First Aid Basics

| Field | Review note |
| --- | --- |
| Filename | `child-first-aid-basics-parent-guide.html` |
| Intended role | Hub-style parent education page for general first-aid preparedness |
| Risk concerns | May unintentionally become a broad emergency algorithm page; may duplicate choking, burns, poisoning, foreign body, and head injury pages |
| Source verification needed | Recognised first-aid body guidance; RCH/Kids Health Info or equivalent paediatric parent guidance; NHS/AAP where relevant |
| Content boundaries | Keep general; link to specific pages rather than duplicating detailed high-risk instructions |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] Confirms this is education only, not emergency training.
- [ ] Does not provide unsupported stepwise algorithms.
- [ ] Directs parents to local emergency services when appropriate.
- [ ] Links or references specific topic pages where detailed advice belongs.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 2. Choking Prevention and First Response

| Field | Review note |
| --- | --- |
| Filename | `choking-prevention-and-first-response-parent-guide.html` |
| Intended role | Parent guide to choking prevention and emergency first-response awareness |
| Risk concerns | High-risk first-response wording; incorrect procedural advice can cause harm |
| Source verification needed | Recognised first-aid body guidance; RCH/NHS/AAP or equivalent paediatric sources |
| Content boundaries | Avoid unsupported procedural detail; ensure emergency escalation is prominent |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] Emergency-first wording is clear and conservative.
- [ ] First-response instructions are source-supported.
- [ ] Advice differs appropriately by age only if source-supported.
- [ ] Prevention advice is practical and parent-facing.
- [ ] No unsupported manoeuvres or procedural details are added.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 3. Foreign Body in Ear, Nose, or Eye

| Field | Review note |
| --- | --- |
| Filename | `foreign-body-ear-nose-eye-parent-guide.html` |
| Intended role | Parent guide for safe response to suspected foreign body in ear, nose, or eye |
| Risk concerns | Harm from attempted home removal; eye injury escalation; button battery or magnet concerns if mentioned |
| Source verification needed | RCH/Kids Health Info, NHS, AAP/HealthyChildren, emergency/ENT/ophthalmology source where needed |
| Content boundaries | Emphasise what not to do and when to seek care; avoid procedural removal instructions |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] What-not-to-do advice is safe and source-supported.
- [ ] Eye-specific warning wording is reviewed carefully.
- [ ] Urgent assessment wording is clear where needed.
- [ ] No unsafe removal methods are described.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 4. Dog Bite and Animal Bite Care

| Field | Review note |
| --- | --- |
| Filename | `dog-bite-animal-bite-care-parent-guide.html` |
| Intended role | Parent education after dog or animal bite exposure |
| Risk concerns | Rabies, tetanus, wound infection, antibiotic prophylaxis, local public-health implications |
| Source verification needed | Indian public-health guidance where relevant; WHO/CDC; NHS/RCH/AAP where relevant |
| Content boundaries | Avoid prophylaxis or antibiotic algorithms unless clinically verified and explicitly approved |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] Does not create a rabies/tetanus prophylaxis algorithm unless source checked and approved.
- [ ] Does not recommend antibiotics or wound treatment beyond safe parent-facing advice.
- [ ] Urgent medical assessment language is clear.
- [ ] India-specific public-health wording is checked.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 5. Safe Medicine Use at Home

| Field | Review note |
| --- | --- |
| Filename | `safe-medicine-use-at-home-parent-guide.html` |
| Intended role | Parent education for safe storage, administration, and avoidance of medication errors |
| Risk concerns | Dosing-adjacent advice; medicine selection; duplicate dosing; accidental ingestion |
| Source verification needed | AAP/HealthyChildren, NHS, RCH/Kids Health Info, poison-control or medication-safety bodies where relevant |
| Content boundaries | No dosing tables, no dose calculators, no treatment selection advice |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] No medication dose tables or calculators.
- [ ] No unsupported medication choice advice.
- [ ] Storage and measuring-device advice is source-aligned.
- [ ] Accidental ingestion wording links logically to poisoning guidance.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 6. Poisoning and Accidental Ingestion

| Field | Review note |
| --- | --- |
| Filename | `poisoning-accidental-ingestion-parent-guide.html` |
| Intended role | Parent guide for suspected poisoning or accidental ingestion |
| Risk concerns | Incorrect home intervention advice; substance-specific algorithms; medication ingestion; household chemicals |
| Source verification needed | Recognised poison-control bodies; RCH/NHS/AAP/CDC/WHO where relevant; Indian emergency guidance where relevant |
| Content boundaries | Avoid inducing vomiting, antidote advice, decontamination, dosing, or substance-specific algorithms unless source verified and approved |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] Clear emergency escalation and poison-service/emergency-contact wording where appropriate.
- [ ] No unsafe home remedies or decontamination advice.
- [ ] No substance-specific treatment algorithm unless explicitly source verified.
- [ ] Overlap with `poisoning-prevention-and-what-to-do-parent-guide.html` is documented.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 7. Head Injury in Children

| Field | Review note |
| --- | --- |
| Filename | `head-injury-in-children-parent-guide.html` |
| Intended role | Parent guide to recognising when head injury needs medical attention and safe observation principles |
| Risk concerns | Escalation thresholds; delayed deterioration; imaging implications; concussion overlap; return to school/sport |
| Source verification needed | RCH/Kids Health Info, NICE/NHS, AAP/HealthyChildren, CDC HEADS UP or equivalent concussion guidance where relevant |
| Content boundaries | Avoid diagnostic algorithms or imaging criteria unless source verified and clinically approved |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] Escalation wording is clear and conservative.
- [ ] Observation advice is source-aligned.
- [ ] No unsupported imaging or diagnosis thresholds.
- [ ] Overlap with `minor-head-injury-concussion-parent-guide.html` is documented.
- [ ] Return-to-school/sport wording, if present, is source checked.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

### 8. Burns and Scalds

| Field | Review note |
| --- | --- |
| Filename | `burns-and-scalds-parent-guide.html` |
| Intended role | Parent guide for immediate safe response to burns/scalds and when to seek care |
| Risk concerns | First-aid steps, home remedies, burn-depth classification, dressing advice, referral thresholds |
| Source verification needed | RCH/Kids Health Info, NHS, AAP/HealthyChildren, recognised burns or first-aid guidance where relevant |
| Content boundaries | Avoid unsupported first-aid detail, home remedies, burn classification, or treatment algorithms |
| Clinician decision | Pending |
| Finalization readiness | Pending review |

Review checklist:

- [ ] Canonical burns page selected after comparison with duplicate page.
- [ ] First-response wording is source-supported.
- [ ] No unsafe home remedies.
- [ ] Escalation wording is clear and conservative.
- [ ] References are acceptable.
- [ ] Suitable for finalization after review.

## Duplicate and overlap decision log

Use this table during review before finalization.

| Topic | Decision needed | Decision | Notes |
| --- | --- | --- | --- |
| Burns duplicate | Keep one page, merge, or redirect? | Pending | Compare `burns-and-scalds-parent-guide.html` vs `burns-and-scalds-in-children-parent-guide.html` |
| Head injury / concussion | Single broader guide or separate concussion guide? | Pending | Compare `head-injury-in-children-parent-guide.html` vs `minor-head-injury-concussion-parent-guide.html` |
| Poisoning duplicate | Poisoning response page plus prevention page, or one canonical page? | Pending | Compare `poisoning-accidental-ingestion-parent-guide.html` vs `poisoning-prevention-and-what-to-do-parent-guide.html` |
| Urgent care overlap | Keep separate urgent-care page or redirect to reviewed red-flags page? | Pending | Compare `when-to-seek-urgent-medical-care-parent-guide.html` vs `red-flags-urgent-care.html` |
| Home safety prevention | Include later prevention batch? | Pending | `home-safety-for-toddlers-parent-guide.html` deferred from Batch 15 |

## Batch-level clinical sign-off checklist

Dr. Murali sign-off should not be recorded until all selected pages are checked.

- [ ] All 8 selected pages clinically reviewed.
- [ ] Duplicate/overlap decisions documented.
- [ ] References checked and acceptable.
- [ ] No unsupported dosing, first-aid algorithm, prophylaxis, antibiotic, treatment, imaging, or diagnostic advice remains.
- [ ] Disclaimer/non-substitution wording present on all selected pages.
- [ ] Parent-facing tone appropriate and not alarmist.
- [ ] Finalization date agreed.
- [ ] Finalization branch may be created.

## Finalization instructions after sign-off only

After Dr. Murali sign-off, create a separate finalization branch. Do not use this review-pack branch for finalization.

Expected finalization work for each approved page:

- Set `medical_review_status` to `reviewed`.
- Keep or set `status` according to the clinical decision.
- Update `last_reviewed` to the sign-off date.
- Add/verify reviewed footer.
- Add/verify print button.
- Add/verify Related Guides.
- Generate QR SVG if the page is public and reviewed.
- Regenerate `data/conditions-index.json` and `sitemap.xml` if needed.
- Run full validation and QA before commit.

## Explicit non-actions in this review-pack step

- No public HTML edited.
- No page status changed.
- No `medical_review_status` changed.
- No QR generated.
- No generated files committed.
- No source medical content inserted into public pages.
- No finalization performed.

## Validation note

This review pack is a documentation-only file. The later finalization branch must still run:

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
