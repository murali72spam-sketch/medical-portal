# Clinical Portal 2026 - Clinician Review Batch 5 Plan

Plan date: 2026-06-05

Scope: documentation-only planning update for the next small clinician-review workflow batch.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, `last_reviewed`, metadata, references, slugs, titles, featured flags, generated index data, the sitemap, application files, package files, tests, legal pages, or assets. It does not mark any resource as reviewed.

## 1. Purpose

Batch 5 selects a small group of existing parent-education resources for a future staged clinician review and source-verification workflow after Batches 1, 2, 3, and 4 have been completed.

This is a documentation-only planning update. It selects review candidates and defines safety boundaries only. No page content, metadata, reviewed status, or generated file is changed in this planning stage.

## 2. Current Checkpoint

| Checkpoint | Current value |
| --- | ---: |
| Production public reviewed-only index | 64 resources |
| Total local generated resources | 145 resources |
| Batch 1 | completed |
| Batch 2 | completed |
| Batch 3 | completed |
| Batch 4 | completed |

## 3. Selection Criteria

Selection used:

- `docs/governance/`
- `docs/clinical-review/`
- Existing Batch 1, Batch 2, Batch 3, and Batch 4 planning, review-pack, and finalization records
- `data/conditions-index.json`
- `html-conditions/*.html` metadata only

Selected Batch 5 resources must be:

- Currently `published`.
- Currently `pending-clinician-review`.
- Existing resources only.
- Not already reviewed or finalized in Batch 1, Batch 2, Batch 3, or Batch 4.
- Parent education focused.
- Suitable for source, disclaimer, parent-friendly clarity, metadata-completeness, and conservative wording review.
- Free from dosing, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, and patient-specific action rules within the intended Batch 5 review scope.
- Suitable for review without adding acute triage logic, urgent-recognition instructions, current vaccination schedules, or individualized clinical advice.
- Able to preserve clinician-assessment boundaries and defer treatment, investigation, referral, safeguarding, or urgent-action decisions to qualified clinicians.

## 4. Exclusion Criteria

The following are excluded from Batch 5:

- All resources already marked `reviewed`.
- All finalized Batch 1, Batch 2, Batch 3, and Batch 4 resources.
- Vaccination and catch-up vaccination pages.
- Medication or dosing content.
- Emergency or first-aid content.
- Typhoid.
- Osteomyelitis.
- Serious infection pages.
- Urgent-recognition pages.
- High-caution newborn pages.
- Mental-health crisis, safeguarding, immediate-safety, self-harm, substance-use, or abuse-related pages.
- Pages requiring current guideline schedule verification.
- Pages containing drug doses, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Redirect stubs, because this batch is not intended to review redirects as redirects.

## 5. Selected Batch 5 Resources

The proposed Batch 5 set contains five existing resources. All five are currently `published` and `pending-clinician-review` in the inspected local metadata. The batch is deliberately limited to five because most remaining pending resources fall into excluded acute-care, infection, medicine, vaccination, newborn, safeguarding, or urgent-recognition groups.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Rationale for selection | Required review focus | Caution notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Childhood Overweight and Obesity | `html-conditions/childhood-overweight-and-obesity.html` | Nutrition & Feeding | published | pending-clinician-review | 2026-05-13 | Supportive parent education focused on family-centred habits, medical review, and avoiding blame rather than acute care or dosing. | Confirm non-stigmatizing and parent-friendly clarity; disclaimer strength; reference quality; metadata completeness; general family-habit wording; and clear clinician-assessment boundaries. | Do not add weight-loss targets, restrictive diet plans, medicine advice, diagnostic thresholds, eating-disorder assessment, body-image crisis pathways, or patient-specific actions. |
| Menstrual Health for Adolescents | `html-conditions/menstrual-health-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | General adolescent parent education focused on periods, practical support, dignity, and when clinician review may help. | Confirm respectful age-appropriate language; parent-friendly clarity; disclaimer strength; references; metadata completeness; and conservative, non-diagnostic review wording. | Keep safeguarding, abuse, immediate-safety, crisis, treatment, and patient-specific decision pathways outside this batch. Do not add medicine advice, diagnostic thresholds, or individualized menstrual-management plans. |
| Scoliosis in Children | `html-conditions/scoliosis-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | Parent education about visible signs, monitoring, and seeking assessment; suitable for cautious source and clarity review without adding treatment decisions. | Confirm non-diagnostic framing; parent-friendly explanation; disclaimer strength; references; metadata completeness; and conservative wording about assessment and monitoring. | Do not add imaging rules, measurement thresholds, brace or surgery recommendations, referral algorithms, urgency rules, or patient-specific activity advice. |
| Developmental Dysplasia of the Hip (DDH) | `html-conditions/developmental-dysplasia-of-hip-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | Parent guide focused on general awareness, early hip checks, and when parents should seek clinician review, without a dosing or emergency focus. | Confirm clear non-diagnostic parent education; disclaimer strength; source quality; metadata completeness; conservative assessment wording; and appropriate Indian-context references. | Do not add surveillance schedules, examination or imaging algorithms, treatment pathways, fixed referral thresholds, or patient-specific action rules. |
| Clubfoot / CTEV Parent Overview | `html-conditions/clubfoot-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | Parent overview suited to clarity, reassurance, source, disclaimer, and specialist-care-boundary review rather than acute triage or dosing. | Confirm parent-friendly and non-blaming explanation; disclaimer strength; references; metadata completeness; conservative specialist-care wording; and clear limits of general education. | Review must not expand treatment details. Do not add Ponseti schedules, intervention algorithms, fixed referral thresholds, treatment troubleshooting, or patient-specific instructions. |

## 6. Rationale for the Batch

- Five resources keeps the clinician-review workload small, focused, and reviewable.
- Every selected resource is an existing resource that remains `published` and `pending-clinician-review` in the inspected local metadata.
- The selected resources are parent education pages that can be reviewed primarily for clarity, disclaimer strength, references, metadata completeness, respectful wording, and conservative clinician-assessment boundaries.
- The set avoids vaccination, dosing, emergency and first-aid instructions, serious infection, urgent-recognition workflows, high-caution newborn care, and redirect review.
- Each selected resource has an explicit caution boundary so that later review does not drift into treatment algorithms, diagnostic thresholds, safeguarding pathways, urgent triage, or patient-specific action rules.
- The batch is limited to five because the remaining pending pool contains many resources that are already completed, reviewed, acute, schedule-dependent, medicine-related, infection-related, newborn-related, or otherwise higher caution.

## 7. Resources Deliberately Excluded and Why

| Excluded group or resources | Examples deliberately excluded | Why excluded from Batch 5 |
| --- | --- | --- |
| Already reviewed or finalized resources | All resources marked `reviewed`; all finalized Batch 1, Batch 2, Batch 3, and Batch 4 resources | Completed or reviewed resources must not be reselected for a pending clinician-review batch. |
| Vaccination and schedule-dependent resources | Catch-up Vaccination; Missed or Delayed Vaccines; BCG Scar and Lump; Fever After Vaccination; Vaccination FAQ; vaccine side-effects and aftercare pages | Require current guideline, schedule, interval, contraindication, or patient-specific verification. |
| Medication, dosing, supplement, or treatment-selection resources | Safe Medicine Use at Home; Vitamins and Minerals; constipation and other pages with medicine or treatment implications | Excluded to avoid drug advice, doses, dose intervals, maximum doses, supplement decisions, and treatment algorithms. |
| Emergency, first-aid, and urgent-recognition resources | Burns; choking; poisoning; nosebleed first aid; febrile seizures; head injury; urgent-care and red-flag pages | Require immediate-action, first-response, or urgency-sensitive clinician safety review. |
| Serious infection and acute infection resources | Typhoid; osteomyelitis; meningitis; pneumonia; diphtheria; COVID-19; rickettsial fever; whooping cough; urinary tract infection; acute infection pages | Require serious-infection, public-health, treatment-boundary, complication, or urgent-recognition review. |
| High-caution newborn and infant resources | Newborn danger signs; newborn jaundice; newborn weight loss and gain; premature baby care; safe sleep; umbilical cord care; baby crying and infant-colic pages | Require separate newborn or young-infant safety and escalation review. |
| Mental-health crisis, safeguarding, substance-use, abuse, or immediate-safety resources | Adolescent Mental Health Warning Signs; Anxiety; Bullying and Cyberbullying; Exam Stress; Body Image; school refusal; teen substance-use; safety, boundaries, and consent pages | May require crisis, self-harm, safeguarding, abuse, substance-use, or immediate-safety pathways. |
| Redirect stubs | Older bedwetting and temper-tantrum redirect files | This batch is not intended to review redirects as redirects. |
| Resources with acute triage or more detailed treatment implications | Abdominal pain; reflux; gastroenteritis; bronchiolitis; croup; common cold; formula feeding; growth faltering | Require more detailed urgent-warning, feeding-safety, treatment-boundary, or patient-specific review than this batch permits. |

## 8. Exact Next-Step Workflow

1. Accept this documentation-only Batch 5 planning PR without changing any resource page, metadata, generated index, sitemap, or reviewed state.
2. Prepare a separate Batch 5 clinician review pack for only the five selected resources. Record current metadata, references, disclaimers, caution boundaries, and specific clinician-review questions.
3. Dr. Murali performs clinician review and source verification for each selected resource.
4. Create a separate approved-edits PR only after clinician review. Limit changes to edits explicitly approved by Dr. Murali, and do not add dosing, treatment algorithms, urgent triage logic, safeguarding workflows, or patient-specific action rules.
5. Create a separate final reviewed-status PR only after clinician review, source verification, approved edits, and final clinician approval are complete.

## 9. Required Warning

**No page should be marked `reviewed` until clinician review and source verification are complete.**

No selected page should be promoted, finalized, redirected, merged, retired, or otherwise treated as clinically approved during this planning stage.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 5 resources for a future staged clinician-review workflow.

## 10. Validation Requirements

Run:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git diff --check
git diff --stat
git status
```

If build changes only generated files, restore them:

```powershell
git checkout -- data/conditions-index.json sitemap.xml
```

The expected final changed file for this planning task is:

```text
docs/clinical-review/batch-5-clinician-review-plan.md
```
