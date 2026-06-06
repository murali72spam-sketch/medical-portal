# Clinical Portal 2026 - Clinician Review Batch 6 Plan

Plan date: 2026-06-05

Scope: documentation-only planning update for the next small clinician-review workflow batch.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, `last_reviewed`, metadata, references, slugs, titles, featured flags, hero fields, generated index data, the sitemap, application files, package files, tests, legal pages, or assets. It does not mark any resource as reviewed.

## 1. Purpose

Batch 6 selects the next small group of existing parent-education resources for a future staged clinician review and source-verification workflow after Batches 1, 2, 3, 4, and 5 have been completed.

Batch 6 is a **moderate-caution parent education review batch**, not a low-risk batch.

> **Prominent caution:** Batch 6 includes infection, infant-feeding, skin-infestation, and genital/urinary symptom topics. These require stricter clinician review and source verification before any reviewed-status update.

This is a documentation-only planning update. It selects review candidates and defines safety boundaries only. No page content, metadata, reviewed status, or generated file is changed in this planning stage.

## 2. Current Checkpoint

| Checkpoint | Current value |
| --- | ---: |
| Production public reviewed-only index | 69 resources |
| Total local generated resources | 145 resources |
| Batch 1 | completed |
| Batch 2 | completed |
| Batch 3 | completed |
| Batch 4 | completed |
| Batch 5 | completed |

## 3. Selection Criteria

Selection used:

- `docs/governance/`
- `docs/clinical-review/`
- Existing Batch 1 through Batch 5 planning, review-pack, and finalization records
- `data/conditions-index.json`
- `html-conditions/*.html` metadata only

Selected Batch 6 resources must be:

- Currently `published`.
- Currently `pending-clinician-review`.
- Existing resources only.
- Not already reviewed or finalized in Batch 1, Batch 2, Batch 3, Batch 4, or Batch 5.
- Parent education focused.
- Suitable for a moderate-caution review focused on source verification, red flags, disclaimer strength, parent-friendly clarity, metadata completeness, conservative wording, hygiene, spread prevention, feeding adequacy, and school guidance where relevant.
- Suitable for review without adding dosing, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, patient-specific action rules, acute triage logic, urgent-recognition instructions, or current vaccination schedules.
- Able to preserve clinician-assessment boundaries and defer diagnosis, treatment selection, prescribing, urgent-action decisions, and safeguarding decisions to qualified clinicians.

## 4. Exclusion Criteria

The following are excluded from Batch 6:

- All resources already marked `reviewed`.
- All finalized Batch 1, Batch 2, Batch 3, Batch 4, and Batch 5 resources.
- Vaccination and catch-up vaccination pages.
- Medication or dosing content.
- Emergency or first-aid content.
- Typhoid.
- Osteomyelitis.
- Meningitis.
- Pneumonia.
- Seizures and epilepsy.
- Febrile seizures.
- Burns.
- Fractures.
- Poisoning.
- Anaphylaxis.
- Serious infection pages.
- Urgent-recognition pages.
- High-caution newborn pages.
- Mental-health crisis, safeguarding, immediate-safety, self-harm, substance-use, or abuse-related pages.
- Pages requiring current guideline schedule verification.
- Pages containing drug doses, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Redirect stubs, because this batch is not intended to review redirects as redirects.

## 5. Selected Batch 6 Resources

The proposed Batch 6 set contains five existing resources. All five are currently `published` and `pending-clinician-review` in the inspected local metadata. The batch is deliberately limited to five because most remaining pending resources fall into excluded acute-care, serious-infection, medicine, vaccination, newborn, safeguarding, mental-health crisis, or urgent-recognition groups.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Rationale for selection | Required review focus | Caution notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Chickenpox in Children | `html-conditions/chickenpox.html` | Fever & Infections | published | pending-clinician-review | 2026-05-20 | Common parent-education guide suited to clarity, hygiene, spread-prevention, school-guidance, disclaimer, and source review without adding a treatment algorithm. | Verify red flags, contagion and isolation wording, high-risk contact wording, vaccine-related wording, disclaimer strength, references, metadata completeness, and conservative medical-review boundaries before any review-status update. | Avoid treatment algorithms, medication or dosing advice, school-exclusion certainty, and complication overclaiming. Vaccine-related wording and any fixed isolation or exclusion statement require source verification. |
| Hand, Foot & Mouth Disease in Children | `html-conditions/hand-foot-mouth-disease.html` | Fever & Infections | published | pending-clinician-review | 2026-05-20 | Common self-limited childhood illness guide suitable for parent-friendly clarity, hygiene, hydration-principle, school-guidance, disclaimer, and source review. | Verify fever, hydration, mouth ulcers, contagiousness, medical-review cues, disclaimer strength, references, metadata completeness, and conservative wording before any review-status update. | Avoid treatment algorithms, medication or dosing advice, dehydration-triage overclaiming, and school-exclusion certainty. |
| Scabies in Children | `html-conditions/20-scabies-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-20 | Parent guide suited to non-stigmatizing clarity, household spread-prevention, washing-guidance, school-guidance, disclaimer, and source review. | Verify household and contact advice, treatment-boundary wording, respectful non-stigmatizing language, disclaimer strength, references, and metadata completeness before any review-status update. | Avoid medication names, application schedules, contact-treatment algorithms, or outbreak-control instructions unless source-verified. |
| Breastfeeding | `html-conditions/breastfeeding-parent-guide.html` | Nutrition & Feeding | published | pending-clinician-review | 2026-05-13 | General parent education focused on responsive feeding, latch support, reassurance, and when clinician or lactation review may help, without medication or dosing content in the inspected metadata. | Check feeding adequacy and medical-review wording carefully. Verify disclaimer strength, references, metadata completeness, non-prescriptive feeding wording, and clear boundaries for clinician or lactation assessment before any review-status update. | Avoid dehydration or poor-weight-gain triage algorithms, lactation-prescription advice, and newborn danger-sign guidance unless source-verified. |
| Vulvovaginitis in Children | `html-conditions/13-vulvovaginitis-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-10 | **Higher-caution within Batch 6.** General parent education focused on common causes, gentle hygiene, reassurance, and when clinician review may help, without a dosing or emergency focus. | Verify wording around discharge, bleeding, pain, recurrent symptoms, injury concern, hygiene, when medical review is needed, disclaimer strength, references, and conservative clinician-review boundaries before any review-status update. | Avoid safeguarding algorithms, sexual-health algorithms, diagnostic certainty, urine-test or treatment pathways, and medication advice. Defer the page if detailed review-pack creation judges it too high-risk for this batch. |

## 6. Rationale for the Batch

- Five resources keeps the clinician-review workload small, focused, and reviewable.
- Every selected resource is an existing parent guide that remains `published` and `pending-clinician-review` in the inspected local metadata.
- The selected resources form a coherent moderate-caution parent-education set where review must focus on red flags, source verification, disclaimer strength, references, metadata completeness, feeding adequacy, infection and spread-prevention wording, household and contact advice, genital or urinary symptom wording, school guidance, respectful language, and conservative clinician-assessment boundaries.
- The pages are suitable only for a tightly bounded review that does not add dosing, medicine selection, treatment algorithms, acute triage logic, vaccination schedules, safeguarding workflows, or patient-specific action rules.
- Each selected resource has an explicit caution boundary so that later review does not drift into prescribing, fixed treatment or exclusion rules, urgent-recognition workflows, or individualized advice.
- The batch is limited to five because the remaining pending pool contains many resources that are already completed, reviewed, acute, serious-infection-related, schedule-dependent, medicine-related, newborn-related, safeguarding-related, mental-health-crisis-related, or otherwise higher caution.
- This batch must not proceed directly to finalization without a detailed review pack.
- If any page is judged too high-risk during review-pack creation, it should be deferred to a later high-caution batch.

## 7. Resources Deliberately Excluded and Why

| Excluded group or resources | Examples deliberately excluded | Why excluded from Batch 6 |
| --- | --- | --- |
| Already reviewed or finalized resources | All resources marked `reviewed`; all finalized Batch 1, Batch 2, Batch 3, Batch 4, and Batch 5 resources | Completed or reviewed resources must not be reselected for a pending clinician-review batch. |
| Vaccination and schedule-dependent resources | Catch-up Vaccination; Missed or Delayed Vaccines; BCG Scar and Lump; Fever After Vaccination; Vaccination FAQ; vaccine side-effects and aftercare pages | Require current guideline, schedule, interval, contraindication, or patient-specific verification. |
| Medication, dosing, supplement, or treatment-selection resources | Safe Medicine Use at Home; Vitamins and Minerals; constipation; pages with antibiotic, steroid, supplement, dose, interval, maximum-dose, or treatment-plan implications | Excluded to avoid drug advice, doses, dose intervals, maximum doses, contraindication rules, and treatment algorithms. |
| Emergency, first-aid, injury, and urgent-recognition resources | Burns; fractures; choking; poisoning; anaphylaxis; nosebleed first aid; head injury; febrile seizures; seizure or epilepsy pages; urgent-care and red-flag pages | Require immediate-action, first-response, or urgency-sensitive clinician safety review. |
| Serious infection and higher-caution acute infection resources | Typhoid; osteomyelitis; meningitis; pneumonia; diphtheria; COVID-19; measles; whooping cough; rickettsial fever; urinary tract infection; infectious mononucleosis; impetigo | Require serious-infection, public-health, medication, treatment-boundary, complication, sports-safety, or urgent-recognition review. |
| High-caution newborn and infant resources | Newborn danger signs; newborn jaundice; newborn weight loss and gain; premature baby care; safe sleep; umbilical cord care; formula feeding; baby crying and infant-colic pages | Require separate newborn, young-infant, feeding-safety, or escalation review. |
| Mental-health crisis, safeguarding, substance-use, abuse, or immediate-safety resources | Adolescent Mental Health Warning Signs; Anxiety; Bullying and Cyberbullying; Exam Stress; Body Image; school refusal; teen substance-use; safety, boundaries, and consent pages | May require crisis, self-harm, safeguarding, abuse, substance-use, or immediate-safety pathways. |
| Other acute symptom, respiratory, feeding, or travel resources | Abdominal pain; reflux; gastroenteritis; bronchiolitis; croup; common cold; growth faltering; formula feeding; child travel health; safe food, water, and deworming | Require more detailed acute-warning, breathing, feeding-safety, medicine-boundary, travel-guideline, or patient-specific review than this batch permits. |
| Redirect stubs | Older redirect files | This batch is not intended to review redirects as redirects. |

## 8. Exact Next-Step Workflow

1. Accept this documentation-only Batch 6 planning PR without changing any resource page, metadata, generated index, sitemap, or reviewed state.
2. Prepare a separate, detailed Batch 6 clinician review pack for only the five selected resources. The review pack must explicitly check red flags, references, disclaimer strength, and source verification for each page, as well as current metadata, caution boundaries, and specific clinician-review questions.
3. During review-pack creation, defer any page judged too high-risk to a later high-caution batch. Batch 6 must not proceed directly from this plan to finalization.
4. Dr. Murali performs clinician review and source verification for each selected resource.
5. Create a separate approved-edits PR only after clinician review. Limit changes to edits explicitly approved by Dr. Murali, and do not add dosing, medicine selection, treatment algorithms, urgent triage logic, vaccination schedules, safeguarding workflows, or patient-specific action rules.
6. Create a separate final reviewed-status PR only after clinician review, source verification, approved edits, and final clinician approval are complete.

## 9. Required Warning

**No page should be marked `reviewed` until clinician review and source verification are complete.**

**This batch must not proceed directly to finalization without a detailed review pack that explicitly checks red flags, references, disclaimer strength, and source verification for each page.**

No selected page should be promoted, finalized, redirected, merged, retired, or otherwise treated as clinically approved during this planning stage.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 6 resources for a future staged clinician-review workflow.

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
docs/clinical-review/batch-6-clinician-review-plan.md
```
