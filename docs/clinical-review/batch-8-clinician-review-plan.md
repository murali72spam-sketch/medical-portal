# Clinical Portal 2026 - Clinician Review Batch 8 Plan

Plan date: 2026-06-06

Scope: documentation-only planning update for the next small clinician-review workflow batch.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, `last_reviewed`, metadata, references, slugs, titles, featured flags, hero fields, generated index data, the sitemap, application files, package files, tests, legal pages, CSS, JavaScript, or assets. It does not mark any resource as reviewed, publish any draft page, complete unfinished guides, or change any redirect.

## 1. Current Checkpoint

| Checkpoint | Current value |
| --- | ---: |
| Total resources/htmls | 145 |
| Published + reviewed | 78 |
| Published + pending clinician review | 39 |
| Draft + pending review | 26 |
| Reviewed draft redirects | 2 |
| Batch 1 | completed |
| Batch 2 | completed |
| Batch 3 | completed |
| Batch 4 | completed |
| Batch 5 | completed |
| Batch 6 | completed |
| Batch 7 | completed |

## 2. Purpose

Batch 8 is a documentation-only planning step for the next staged clinician-review workflow.

The remaining published pending-review pool is now more caution-heavy after Batch 7. Batch 8 therefore selects a small, bounded set of existing published resources where the next safe action is not clinical finalization, but preparation for careful source verification, duplicate/overlap resolution, disclaimer review, parent-friendly clarity review, and conservative boundary review.

No selected page should be edited, completed, consolidated, redirected, or marked reviewed during this planning PR.

## 3. Safety Framing

Batch 8 is an **infant symptom, reassurance, and overlap-resolution planning batch**, not a low-risk clinical approval batch.

The batch deliberately includes the infant crying/colic overlap cluster because the audit identified it as requiring comparison before review. This batch purpose is therefore specifically duplicate/overlap resolution plus infant-safety clinician review planning.

The selected resources are less appropriate for automatic finalization than earlier batches. They are chosen because they can be reviewed as a small coherent set without introducing dosing, vaccination schedules, emergency first-aid instructions, serious-infection workflows, mental-health crisis pathways, or broad urgent-care triage algorithms.

> **Prominent caution:** These pages must not be marked `reviewed` until clinician review and source verification are complete. The review must explicitly check infant danger-sign boundaries, feeding-adequacy wording, safe-soothing language, caregiver-safety wording, reflux escalation wording, references, disclaimers, and the relationship between overlapping colic/crying resources.

## 4. Selection Criteria

Selection used the Parent Guide Completion Audit and current post-Batch-7 tracker.

Selected Batch 8 resources must be:

- Existing `html-conditions/*.html` resources.
- Currently `published`.
- Currently `pending-clinician-review`.
- Not already finalized in Batch 1 through Batch 7.
- Suitable for documentation-only planning before any clinical edit.
- Suitable for a small review pack focused on references, disclaimer strength, parent clarity, conservative wording, overlap resolution, and clinician-assessment boundaries.
- Suitable for review without adding doses, drug intervals, maximum doses, medication-selection advice, vaccination schedules, catch-up logic, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Coherent enough to review as a set, rather than as unrelated high-risk pages.

## 5. Exclusion Criteria

The following are excluded from Batch 8:

- All resources already marked `reviewed`.
- All resources finalized in Batch 1 through Batch 7.
- All draft resources.
- Reviewed draft redirect stubs.
- Vaccination and catch-up vaccination pages.
- Travel vaccination pages and pages requiring current schedule or destination-specific verification.
- Medication, dosing, supplement, asthma-action, or medicine-selection resources.
- Emergency, first-aid, injury, poisoning, choking, nosebleed, bite, burn, head-injury, or urgent-recognition resources.
- Serious infection pages and public-health urgent infection pages.
- Broad red-flag or urgent-care triage pages.
- High-caution newborn pages such as newborn danger signs, jaundice, premature baby care, normal newborn care, umbilical cord care, and safe sleep.
- Mental-health crisis, safeguarding, self-harm, abuse, consent, bullying, school refusal, body-image, substance-use, or immediate-safety pages.
- Pages requiring drug doses, dose intervals, maximum doses, contraindication algorithms, fixed treatment timelines, or patient-specific clinical action rules.
- Duplicate/overlap clusters unless the batch purpose is specifically duplicate/overlap resolution.

## 6. Selected Batch 8 Resources

The proposed Batch 8 set contains four existing resources. All four should remain `published` and `pending-clinician-review` until the later review-pack, clinician-review, approved-edits, and finalization steps are complete.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Rationale for selection | Required review focus | Caution notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Baby Crying: What is Normal? | `html-conditions/baby-crying-what-is-normal.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | Existing parent-education page in the infant crying/colic cluster. It is the broadest normal-crying resource and should be reviewed before the colic pages are finalized. | Clarify whether this should be the canonical normal-crying page; verify safe-soothing advice, caregiver coping, never-shake wording, feeding and hydration concern boundaries, danger signs, references, and disclaimer strength. | Moderate caution because it involves young infants and overlaps with two colic pages. Do not add triage algorithms, fixed thresholds, or reassurance that could delay care. |
| Colic in Babies | `html-conditions/colic-in-babies.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | Existing colic-focused page with substantial overlap against Infant Colic and Baby Crying. It should be reviewed only as part of the full cluster. | Decide whether this page should be retained, differentiated, consolidated later, or used as a simpler parent-facing colic version; verify safe soothing, feeding review boundaries, parent coping, red flags, references, disclaimer strength, and stale visible status wording separately if needed. | Moderate caution with duplicate/overlap concern. Do not mix status-wording cleanup, consolidation, or reviewed-status change into this planning PR. |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | Existing parent guide with a broader structure and explicit colic red-flag framing. It was deferred from Batch 7 because the overlap cluster needed resolution first. | Define its canonical role versus Baby Crying and Colic in Babies; verify crying-pattern wording, feeding review, caregiver safety, safe sleep overlap, red flags, references, and non-treatment boundaries. | Moderate/high infant-safety caution. Do not mark reviewed until the overlap decision and source verification are complete. |
| Reflux in Infants and Children | `html-conditions/reflux-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | Adjacent infant symptom and feeding-support page. It gives Batch 8 a fourth coherent resource without moving into vaccination, dosing, emergency, serious-infection, or mental-health pages. | Verify normal posseting versus concerning reflux wording, feeding-support boundaries, aspiration and vomiting warning signs, what-to-avoid wording, references, disclaimer strength, and conservative clinician-assessment boundaries. | High caution because of infant feeding, aspiration, vomiting, and danger-sign boundaries. Do not add medication advice, feed-volume rules, thickener advice, treatment algorithms, or patient-specific action rules. |

## 7. Resources Deliberately Excluded and Why

| Excluded group or resources | Examples deliberately excluded | Why excluded from Batch 8 |
| --- | --- | --- |
| Already reviewed or finalized resources | All Batch 1 to Batch 7 finalized resources | These should not be reselected for a pending clinician-review batch. |
| Vaccination and current schedule resources | Vaccination, catch-up, missed or delayed vaccines, travel vaccination | Require current IAP/ACVIP, Indian government, eligibility, interval, contraindication, record, and schedule verification. |
| Medication, dosing, supplement, or treatment-selection resources | Safe Medicine Use at Home; Asthma; Vitamins and Minerals | Excluded to avoid drug selection, dose, interval, maximum dose, contraindication, and patient-specific treatment risks. |
| Emergency, first-aid, injury, and urgent-recognition resources | Burns, choking, poisoning, foreign body, head injury, nosebleeds, febrile seizures, urgent-care/red-flag pages | Immediate-action wording is safety critical and needs a separate high-caution review workflow. |
| Serious infection and public-health infection resources | Meningitis, pneumonia, measles, diphtheria, pertussis, rickettsial fever, COVID-19, UTI | Require serious-infection, public-health, treatment-boundary, complication, and escalation review. |
| High-caution newborn pages | Newborn danger signs, jaundice, newborn weight loss/gain, premature baby care, safe sleep, cord care, normal newborn care | Young-infant deterioration, feeding adequacy, sleep safety, and neonatal timing issues require neonatal clinician and current-source review. |
| Mental-health, safeguarding, crisis, substance-use, or abuse-related pages | Adolescent mental health warning signs, anxiety, bullying, school refusal, teen substance use, consent/safety pages | These may require crisis, self-harm, safeguarding, abuse, substance-use, and immediate-safety pathways. |
| Higher-risk infant-feeding/nutrition pages not selected | Formula Feeding Guidance, Breastfeeding Basics, Growth Faltering / Poor Weight Gain | These have feeding adequacy, preparation safety, dehydration, growth assessment, or medical-cause boundaries and should be handled separately. |
| Acute gastrointestinal symptom pages not selected | Abdominal Pain, Gastroenteritis / Diarrhoea, Constipation | These involve acute differential diagnosis, dehydration recognition, fluid guidance, medicine boundaries, or treatment-boundary risk. |
| Current public-health or medicine-adjacent prevention pages | Child Travel Health, Safe Food Water and Deworming | These require current-source verification and may involve deworming, travel, antibiotic, or destination-specific implications. |

## 8. Exact Next-Step Workflow

1. Accept this documentation-only Batch 8 planning PR without changing any resource page, metadata, generated index, sitemap, app file, test, asset, legal page, or reviewed state.
2. Prepare a separate Batch 8 clinician review pack for only the four selected resources.
3. In the review pack, explicitly document:
   - Reference/source verification checklist.
   - Duplicate/overlap comparison for Baby Crying, Colic in Babies, and Infant Colic.
   - Proposed canonical role for each infant crying/colic page.
   - Reflux safety-boundary checklist.
   - Parent clarity checklist.
   - Disclaimer/non-substitution wording checklist.
   - Danger-sign wording checklist.
   - Decision boxes for keep, differentiate, consolidate later, or defer.
   - Final clinician sign-off table.
4. Dr. Murali performs manual clinician review and source verification.
5. Create an approved-edits PR only if clinician review identifies wording or source changes. That PR must include only approved edits.
6. If consolidation or differentiation is needed, create a separate overlap-resolution PR before any final reviewed-status PR.
7. Create the final reviewed-status PR only after clinician review, source verification, approved edits, overlap decisions, and final approval are complete.

## 9. Required Warning

**No page should be marked `reviewed` until clinician review and source verification are complete.**

No selected page should be promoted, completed, consolidated, redirected, retired, rewritten, or otherwise treated as clinically approved during this planning stage.

This plan is not medical approval, source verification, publication approval, duplicate consolidation approval, or a status-change task. It only selects Batch 8 resources and defines the safety boundaries for the next staged clinician-review workflow.

## 10. Resource Tracker and Projected Count

### Current tracker after Batch 7

| Measure | Count |
| --- | ---: |
| Total resources/htmls | 145 |
| Published + reviewed | 78 |
| Published + pending clinician review | 39 |
| Draft + pending review | 26 |
| Reviewed draft redirects | 2 |
| Remaining guides needing review/completion | 65 |

### Projected tracker after Batch 8 finalization if all four selected resources are later approved

| Measure | Count |
| --- | ---: |
| Total resources/htmls | 145 |
| Published + reviewed | 82 |
| Published + pending clinician review | 35 |
| Draft + pending review | 26 |
| Reviewed draft redirects | 2 |
| Remaining guides needing review/completion | 61 |

Suggested next fastest safe batch after this planning PR: prepare a documentation-only Batch 8 clinician review pack for these four resources, with the infant crying/colic duplicate/overlap comparison as the first section.

## 11. Validation Requirements

Run:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git diff --check
git diff --stat
git status
```

If build changes only generated files, restore them:

```powershell
git checkout -- data/conditions-index.json sitemap.xml
```

## 12. Expected Changed File

The expected final changed file for this planning task is:

```text
docs/clinical-review/batch-8-clinician-review-plan.md
```
