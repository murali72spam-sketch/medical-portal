# Clinical Portal 2026 - Clinician Review Batch 3 Plan

Plan date: 2026-06-04

Scope: documentation-only planning update for the next small clinician-review workflow batch.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, generated index data, application files, package files, tests, AI/API behavior, analytics, tracking, cookies, localStorage, database behavior, external search behavior, or patient-specific data collection.

## 1. Purpose

Batch 3 selects a small group of low-risk existing parent-education resources for Dr. Murali clinician review and source verification after Batch 1 growth/endocrine resources and Batch 2 nutrition/feeding resources have already been finalized/reviewed.

No page in this batch should be marked `reviewed`, promoted, retired, redirected, merged, or otherwise treated as clinically finalized until clinician review is complete and source verification has been documented in a later, separate task.

## 2. Selection Criteria

Selection used:

- `docs/governance/clinician-review-and-finalization-workflow.md`
- `docs/governance/clinician-review-batch-1-plan.md`
- `docs/governance/clinician-review-batch-2-plan.md`
- `docs/clinical-review/batch-3-clinician-review-pack.md`
- `data/conditions-index.json`
- `html-conditions/*.html` metadata only

Inclusion criteria:

- 5-10 existing resources only.
- Prefer currently published resources that remain `pending-clinician-review`.
- Prefer low-risk parent education where review can focus on clarity, source verification, metadata consistency, disclaimer strength, and conservative red-flag wording.
- Prefer resources that avoid current guideline schedules, medicine/dosing, treatment algorithms, emergency instructions, serious infection recognition, and high-caution newborn escalation.

Exclusion criteria:

- Vaccination and catch-up vaccination pages.
- Medication or dosing content.
- Emergency or first-aid pages.
- Typhoid and osteomyelitis.
- Serious infection and urgent-recognition pages.
- High-caution newborn pages.
- Pages requiring current guideline schedule verification.
- Pages containing drug doses, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Batch 1 growth/endocrine finalized resources.
- Batch 2 nutrition/feeding finalized resources.

Rationale for choosing 7 resources:

- Seven resources keeps the review workload small and reviewable.
- The selected pages are existing public parent-education resources that remain `pending-clinician-review`.
- The group avoids vaccination, dosing, first-aid, serious infection, urgent-recognition, and high-caution newborn content.
- The mix covers common school-age developmental, learning, toileting, and musculoskeletal parent concerns without adding clinical facts in this planning task.

## 3. Selected Resources Table

| Resource title | File path | Category | Current status | Current medical_review_status | Why selected for Batch 3 | Key review points for Dr. Murali | Source verification needed before status or review change |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tics in Children | `html-conditions/tics-parent-guide.html` | Growth & Development | published | pending-clinician-review | Common developmental parent concern; suitable for clarity and red-flag wording review without dosing, schedules, or emergency instruction. | Confirm reassurance vs assessment balance, neurodevelopmental wording, stress/sleep trigger language, and referral/red-flag boundaries. | Yes. Verify listed parent-education and paediatric sources before any future `medical_review_status` change. |
| Screen Time and Behaviour - Parent Guide | `html-conditions/screen-time-and-behaviour-parent-guide.html` | Growth & Development | published | pending-clinician-review | Low-risk behaviour and family-routine resource; useful for parent-friendly wording and non-prescriptive guidance review. | Confirm digital wellness wording, sleep/behaviour framing, age-appropriate boundaries, and that advice does not become individualized mental-health care. | Yes. Verify listed screen-time, sleep, and behaviour sources before any future `medical_review_status` change. |
| Learning Difficulties and School Support | `html-conditions/learning-difficulties-school-support-parent-guide.html` | Growth & Development | published | pending-clinician-review | School-support parent education resource; avoids acute care, dosing, and schedule-dependent guidance. | Confirm learning difficulty wording, school-support language, hearing/vision/development review cues, and non-diagnostic framing. | Yes. Verify listed developmental, education-support, and paediatric parent sources before any future `medical_review_status` change. |
| Daytime Wetting in Children | `html-conditions/daytime-wetting-parent-guide.html` | Growth & Development | published | pending-clinician-review | Common toileting concern; selected for clinician review of parent guidance and safe boundaries without adding treatment algorithms. | Confirm wording around constipation, urinary symptoms, toilet routines, assessment cues, and when medical review is needed. | Yes. Verify continence and paediatric parent sources before any future `medical_review_status` change. |
| Growing Pains in Children | `html-conditions/growing-pains-parent-guide.html` | Growth & Development | published | pending-clinician-review | Common musculoskeletal parent concern; suitable for conservative red-flag and reassurance wording review. | Confirm typical-pattern wording, activity and pain language, red flags for non-growing-pain causes, and non-diagnostic framing. | Yes. Verify listed musculoskeletal and paediatric parent sources before any future `medical_review_status` change. |
| Osgood-Schlatter Disease | `html-conditions/osgood-schlatter-parent-guide.html` | Growth & Development | published | pending-clinician-review | Common adolescent knee-pain education page; avoids medicine dosing and urgent first-response content. | Confirm activity-modification wording, knee-pain red flags, sports participation language, and boundaries around diagnosis or treatment selection. | Yes. Verify listed sports-medicine and paediatric parent sources before any future `medical_review_status` change. |
| Sever's Disease / Heel Pain | `html-conditions/severs-disease-parent-guide.html` | Growth & Development | published | pending-clinician-review | Common heel-pain education page; fits a low-risk musculoskeletal review pair with Osgood-Schlatter. | Confirm heel-pain pattern wording, footwear/activity language, red flags, and that management remains general parent education. | Yes. Verify listed sports-medicine and paediatric parent sources before any future `medical_review_status` change. |

## 4. Resources Deliberately Excluded and Why

| Excluded group | Examples deliberately excluded | Why excluded from Batch 3 |
| --- | --- | --- |
| Vaccination and vaccine-adjacent pages | Catch-up Vaccination Parent Guide; Missed or Delayed Vaccines; Vaccination Records and Missed Doses; HPV Vaccine; Influenza Vaccine; Travel Vaccination; BCG Scar and Lump; Fever After Vaccination; Vaccine Side Effects and Aftercare | Current-guideline and schedule-dependent. These require a separate vaccination/source-verification workflow and must not be mixed with Batch 3. |
| Medicine/dosing and treatment-selection pages | Safe Medicine Use at Home; Asthma in Children; Cough in Children; poisoning pages; pages with medicine, antibiotic, steroid, supplement-dose, or dose-boundary implications | Excluded to avoid dosing, product selection, treatment algorithms, and patient-specific action risk. |
| Emergency and first-aid pages | Burns and Scalds; Child First Aid Basics; Choking Prevention and First Response; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Head Injury; Minor Head Injury and Concussion; Red Flags / Urgent Care pages | Excluded because first-response and urgent escalation wording requires a separate high-caution safety review. |
| Serious infection and urgent-recognition pages | Typhoid; Osteomyelitis; Meningitis; Pneumonia; Measles; Whooping Cough; Dengue; Encephalitis; Kawasaki / MIS-C; Malaria; Tuberculosis; Diphtheria; Rickettsial Fever; COVID-19 | Excluded to keep this batch away from serious infection recognition, public-health-sensitive wording, antibiotic implications, and urgent-care decision risk. |
| High-caution newborn pages | Neonatal Danger Signs; Newborn Jaundice; Normal Newborn Care; Newborn Weight Loss and Gain; Premature Baby Care at Home; Safe Sleep for Infants; Umbilical Cord Care | Excluded because newborn escalation and safety wording should be reviewed in a separate high-caution newborn workflow. |
| Already finalized/reviewed Batch 1 and Batch 2 groups | Batch 1 growth/endocrine resources; Batch 2 nutrition/feeding resources | Excluded because the current task is Batch 3 planning after those groups have already been finalized/reviewed. |
| Candidate pages now unsuitable for this planning update | Sleep Problems; Temper Tantrums and Behaviour Regulation; Bedwetting / Nocturnal Enuresis; Thumb Sucking; Stuttering | Excluded from this updated Batch 3 plan because current `main` metadata already marks these resources as `reviewed`. |

## 5. Exact Next-Step Workflow After This Plan

1. Dr. Murali reviews only the selected Batch 3 pages listed in this plan.
2. Source verification is performed for the sources already listed in the selected pages' metadata, with review date/version recorded where later page edits require it.
3. A separate PR edits only the selected Batch 3 resource files if Dr. Murali requests content, source, or metadata changes.
4. That separate PR must not edit unrelated resources, unrelated app files, tests, package files, or generated index data except where a selected resource metadata change intentionally regenerates the index.
5. Run build, validation, and QA in the separate editing PR:
   - `npm.cmd run build`
   - `npm.cmd run validate:resources`
   - `npm.cmd run qa:batch10 -- --reporter=list`
6. If `data/conditions-index.json` changes only because of build/testing in that separate PR, restore it with:
   - `git checkout -- data/conditions-index.json`
7. Check for duplicated PNG extensions:
   - `Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName`
8. Only after clinician review is complete and source verification is documented should any future PR consider changing `status` or `medical_review_status`.

## 6. Required Warning

No page should be marked `reviewed` until clinician review is complete.

No selected page should be promoted, redirected, merged, retired, or otherwise finalized until the selected resource has completed Dr. Murali review, source verification, and any required separate PR edits. The selected Batch 3 pages are currently `published`, but they must remain `pending-clinician-review` until review is complete and source verification is documented.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 3 for review.
