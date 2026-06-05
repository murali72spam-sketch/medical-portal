# Clinical Portal 2026 - Clinician Review Batch 4 Plan

Plan date: 2026-06-05

Scope: documentation-only planning update for the next small clinician-review workflow batch.

Planning checkpoint supplied for this update:

| Checkpoint | Value |
| --- | ---: |
| Production public reviewed-only index | 60 resources |
| Total local generated resources | 145 resources |

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, `last_reviewed`, metadata, references, generated index data, the sitemap, application files, package files, tests, legal pages, or assets. It does not mark any resource as reviewed.

## 1. Purpose

Batch 4 selects a small group of existing low-risk or moderate-low-risk parent-education resources for clinician review and source verification after Batch 1 growth/endocrine resources, Batch 2 nutrition/feeding resources, and Batch 3 resources have already been clinician-reviewed and finalized.

This planning update replaces the earlier Batch 4 candidate selection. Resources already marked `reviewed` are not reselected. The six selected pages remain `published` and `pending-clinician-review` in the inspected local metadata.

Review should focus on parent-friendly clarity, disclaimer strength, reference quality, metadata completeness, conservative red-flag wording, non-diagnostic framing, and overlap between closely related pages. No page content or metadata is changed in this planning stage.

## 2. Selection Criteria

Selection used:

- `docs/governance/`
- `docs/clinical-review/`
- Existing Batch 1, Batch 2, and Batch 3 planning and review-pack documents
- `data/conditions-index.json`
- `html-conditions/*.html` metadata only

Inclusion criteria:

- Select 5-10 existing resources only.
- Select resources currently marked `published` and `pending-clinician-review`.
- Prefer parent guides suitable for clarity, disclaimer, references, metadata, and conservative wording review.
- Prefer general developmental or behavioural education without dosing, treatment algorithms, acute triage logic, or guideline schedules.
- Keep parent actions general and preserve clinician-assessment boundaries.
- Flag near-duplicate or overlapping pages for consistency review before any later finalization.

## 3. Exclusion Criteria

The following are excluded from Batch 4:

- Vaccination and catch-up vaccination pages.
- Medication or dosing content.
- Emergency or first-aid content.
- Typhoid and osteomyelitis.
- Serious infection pages.
- Urgent-recognition pages.
- High-caution newborn pages.
- Pages requiring current guideline schedule verification.
- Pages containing drug doses, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Already reviewed or finalized Batch 1, Batch 2, and Batch 3 resources.
- Any resource already marked `reviewed`, including the resources selected in the earlier Batch 4 plan.

## 4. Selected Resources

The proposed Batch 4 set contains six existing parent guides. All six are currently `published` and `pending-clinician-review`.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Rationale for selection | Required review focus |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Autism Early Concerns - Parent Awareness Guide | `html-conditions/autism-early-concerns-parent-awareness-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-24 | Parent-awareness resource focused on observations and developmental assessment rather than treatment, dosing, or urgent triage. | Confirm respectful, non-diagnostic language; conservative regression and assessment wording; disclaimer strength; references; and consistency with the related autism early-signs page. |
| Autism: Early Signs Parents May Notice | `html-conditions/autism-early-signs-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | General parent education about developmental signs and seeking assessment, with no medication or treatment algorithm in metadata. | Confirm non-diagnostic framing, parent-friendly clarity, conservative assessment cues, source quality, and whether overlap with the autism early-concerns page should be retained, distinguished, or later consolidated. |
| Bedwetting | `html-conditions/bedwetting-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | Common parent concern suited to reassurance, routines, dignity, and medical-review boundary checks without dosing or acute triage logic. | Confirm non-blaming wording, general rather than patient-specific actions, conservative review triggers, references, disclaimer strength, and overlap with the already reviewed nocturnal-enuresis guide. |
| Puberty and Normal Growth Changes - Parent Guide | `html-conditions/puberty-and-normal-growth-changes-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-24 | Broad parent education on normal development, privacy, and support; suitable for wording and source review without adding diagnostic thresholds. | Confirm age and growth wording remains general, respectful, non-diagnostic, and free of fixed assessment thresholds; verify references and consistency with the related puberty guide. |
| Puberty: Early and Late Changes | `html-conditions/puberty-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | Parent guide focused on puberty changes, body respect, and when clinician review may help, without dosing or treatment algorithms. | Confirm conservative early/delayed-change wording, privacy and body-respect language, disclaimer strength, references, and whether overlap with the normal-growth puberty guide should be retained, distinguished, or later consolidated. |
| Temper Tantrums in Young Children | `html-conditions/temper-tantrums-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | General behaviour-support parent guide centered on calm responses and routines rather than diagnosis, medication, or emergency management. | Confirm non-shaming parent-friendly language, general safety boundaries, conservative help-seeking wording, references, and overlap with the already reviewed behaviour-regulation tantrum guide. |

## 5. Rationale for the Batch

- Six resources keeps the clinician-review workload small and reviewable.
- Every selected resource remains `pending-clinician-review` in the inspected local metadata.
- The set avoids vaccination, dosing, medicines, first aid, serious infection, urgent-recognition, high-caution newborn care, and treatment algorithms.
- The pages are suitable for checking parent-friendly clarity, disclaimer strength, reference quality, metadata completeness, and conservative red-flag or assessment wording.
- Two related-page pairs and two pages with already reviewed close counterparts are included deliberately so the later review pack can address overlap, consistency, and possible future consolidation without changing pages during planning.

## 6. Resources Deliberately Excluded and Why

| Excluded group or resource | Examples deliberately excluded | Why excluded from Batch 4 |
| --- | --- | --- |
| Finalized Batch 1 growth/endocrine resources | Hyperthyroidism; Hypothyroidism; Thyroid Disorders; Delayed Puberty; Early Puberty; Short Stature; Types of Short Stature | Already clinician-reviewed and finalized. |
| Finalized Batch 2 nutrition/feeding resources | Weaning Guide; age-stage nutrition pages; Picky Eating; Iron-rich Diet and Iron Deficiency Prevention | Already clinician-reviewed and finalized. |
| Finalized Batch 3 resources | Tics; Screen Time and Behaviour; Learning Difficulties and School Support; Daytime Wetting; Growing Pains; Osgood-Schlatter Disease; Sever's Disease | Already clinician-reviewed and finalized. |
| Resources already marked reviewed | The earlier Batch 4 candidate set and all other resources currently marked `reviewed` | Reviewed resources must not be reselected as pending Batch 4 work. |
| Vaccination and schedule-dependent pages | Catch-up Vaccination; Missed or Delayed Vaccines; vaccination records; HPV, influenza, travel, and special-condition vaccination pages | Require current guideline and schedule verification and may involve intervals, contraindications, or patient-specific rules. |
| Medication, dosing, and treatment-selection pages | Safe Medicine Use at Home; asthma; cough; pages with antibiotic, steroid, supplement, dose, interval, maximum-dose, or treatment-plan implications | Excluded to avoid dosing, medication selection, treatment algorithms, and patient-specific action risk. |
| Emergency, first-aid, and urgent-recognition pages | Burns; choking; poisoning; head injury; urgent-care and red-flag pages; febrile seizures | Require high-caution action and escalation review. |
| Serious infection pages | Typhoid; osteomyelitis; meningitis; pneumonia; dengue; encephalitis; Kawasaki disease / MIS-C; malaria; tuberculosis; diphtheria; rickettsial fever; COVID-19 | Require serious-infection, urgent-recognition, public-health, or treatment-boundary review. |
| High-caution newborn and infant-safety pages | Newborn danger signs; newborn jaundice; newborn weight loss and gain; normal newborn care; premature baby care; safe sleep; umbilical cord care; baby crying and colic pages | Require separate high-caution newborn or young-infant safety review. |
| Mental-health, safeguarding, and immediate-safety pages | Adolescent Mental Health Warning Signs; Anxiety; Bullying and Cyberbullying; School Refusal; Exam Stress; Body Image; teen substance-use and consent/safety pages | May require urgent-help, crisis, safeguarding, or patient-specific action boundaries. |
| Higher-caution developmental and orthopaedic pages | Clubfoot; developmental dysplasia of the hip; scoliosis; slipped upper femoral epiphysis | May involve specialist treatment pathways, surveillance decisions, or urgency-sensitive wording. |
| Common infection and symptom-care pages | Chickenpox; hand, foot and mouth disease; impetigo; scabies; middle ear infection; tonsillitis; urinary tract infection | May involve treatment selection, school/public-health rules, infection complications, or more detailed red-flag review than this batch permits. |

## 7. Exact Next-Step Workflow

1. Accept this documentation-only Batch 4 planning update without changing any resource page or metadata.
2. Prepare a separate Stage 2 Batch 4 clinician review pack for only the six selected resources. The pack should list current metadata, references, disclaimers, overlap concerns, and specific clinician questions.
3. Dr. Murali performs clinician review and source verification for each selected resource. Record the sources checked and their date or version where later edits require that record.
4. Prepare a separate approved-edits task or PR only after clinician feedback. Limit edits to wording, references, disclaimers, metadata, or overlap decisions explicitly approved by the clinician.
5. Run build, resource validation, QA, and duplicate-PNG checks in the approved-edits task. Restore generated index or sitemap churn when those files were not intentionally changed.
6. Only after clinician review, source verification, approved edits, and final clinician approval are complete may a separate final reviewed-status task consider changing `medical_review_status`, `last_reviewed`, status, or generated reviewed-only index output.

## 8. Required Warning

**No page should be marked `reviewed` until clinician review and source verification are complete.**

No selected page should be promoted, redirected, merged, retired, consolidated, or otherwise finalized until Dr. Murali has completed clinician review, sources have been verified, and any approved edits have been handled in a separate task.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 4 resources for a future staged clinician-review workflow.

## 9. Validation Requirements

Run:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
```

If build changes only generated files, restore them:

```powershell
git checkout -- data/conditions-index.json sitemap.xml
```

The expected final changed file for this planning task is:

```text
docs/clinical-review/batch-4-clinician-review-plan.md
```
