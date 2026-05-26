# Clinician Review Batch 1 Plan

Plan date: 2026-05-26

Branch: `governance/clinician-review-batch-1-plan`

Scope: documentation-only plan for selecting the first small clinician-review batch for Dr. Murali review and source verification.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, generated index data, application files, package files, tests, AI/API behavior, analytics, tracking, cookies, localStorage, database behavior, or external search behavior.

## 1. Batch 1 Purpose

Batch 1 selects a small, focused Growth & Development clinician-review group for Dr. Murali review and source verification before any future metadata or publication changes.

The batch is intentionally limited to 7 resources. It keeps vaccination, catch-up vaccination, HPV, influenza, travel vaccination, special medical condition vaccination, medicine/dosing guidance, emergency/first-aid pages, typhoid, osteomyelitis, treatment algorithms, diagnostic decisions, dose schedules, interval rules, contraindication rules, and patient-specific action risk out of this first review batch.

No page in this batch should be marked `reviewed`, promoted, or otherwise treated as clinically finalized until clinician review is complete and source verification has been documented.

## 2. Selection Criteria

Selection used:

- `docs/governance/clinician-review-and-finalization-workflow.md`
- `docs/audits/remaining-draft-finalization-next-batch-audit.md`
- `docs/audits/draft-resources-finalization-readiness-audit.md`
- `docs/audits/resource-validation-governance-warnings-audit.md`
- `data/conditions-index.json`
- `html-conditions/*.html` metadata only

Inclusion criteria:

- 5-10 resources only.
- Prefer non-vaccination, non-dosing, non-emergency resources.
- Prefer a coherent first review set that Dr. Murali can review together.
- Prefer resources already identified as needing clinician review or clinician signoff before finalization.
- Prefer resources with existing metadata references that can be source-verified without adding clinical facts in this planning task.

Exclusion criteria:

- Vaccination, catch-up vaccination, HPV, influenza, travel vaccination, vaccination in special medical conditions.
- Medicine or dosing guidance.
- Emergency or first-aid pages.
- Typhoid and osteomyelitis.
- Pages with treatment algorithms, diagnostic decisions, dose schedules, interval rules, contraindications, or patient-specific action risk.

Rationale for choosing 7 resources:

- The latest remaining-draft audit specifically recommends the thyroid group for clinician review: Hyperthyroidism in Children, Hypothyroidism in Children, and Thyroid Disorders in Children.
- The user requirement asks for 5-10 resources, so this plan adds four closely related Growth & Development resources that remain `pending-clinician-review`, avoid the named high-caution groups, and were previously classified as needing clinician review before finalization even if they were suitable for minor wording cleanup.
- The added growth/puberty resources are selected for clinician review and source verification only, not for status promotion in this PR.

## 3. Selected Resources Table

| Resource title | File path | Category | Current status | Current medical_review_status | Why selected for Batch 1 | Key review points for Dr. Murali | References/sources currently listed in metadata | Source verification needed before status or review change |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hyperthyroidism in Children | `html-conditions/hyperthyroidism-in-children.html` | Growth & Development | draft | pending-clinician-review | Explicitly identified in the latest remaining-draft audit as a clinician-review page; non-vaccination, non-emergency, and suitable for a focused endocrine review batch. | Confirm parent-facing symptom framing, red flags, heart/growth/school-performance wording, urgency wording, and that no diagnostic or treatment algorithm is implied. | Indian Society for Pediatric and Adolescent Endocrinology (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); NICE (`https://www.nice.org.uk/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`); HealthyChildren.org (`https://www.healthychildren.org/`). | Yes. Verify listed endocrine/paediatric sources and document clinician review before changing `status` or `medical_review_status`. |
| Hypothyroidism in Children | `html-conditions/hypothyroidism-in-children.html` | Growth & Development | draft | pending-clinician-review | Explicitly identified in the latest remaining-draft audit as a clinician-review page; included because thyroid replacement context requires clinician signoff even though this plan does not edit treatment content. | Confirm congenital/acquired hypothyroidism wording, newborn screening awareness, growth/development impact, follow-up language, red flags, and that levothyroxine or treatment monitoring is not presented as dose or adjustment guidance. | Indian Society for Pediatric and Adolescent Endocrinology (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); NICE (`https://www.nice.org.uk/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`); HealthyChildren.org (`https://www.healthychildren.org/`). | Yes. Verify listed endocrine/paediatric sources and document clinician review before changing `status` or `medical_review_status`. |
| Thyroid Disorders in Children | `html-conditions/thyroid-disorders-in-children.html` | Growth & Development | draft | pending-clinician-review | Explicitly identified in the latest remaining-draft audit as a clinician-review page; completes the thyroid review group without adding vaccine, emergency, or dosing topics. | Confirm overview accuracy, distinction between hypo/hyperthyroidism, goitre wording, medical evaluation wording, red-flag wording, and consistency with the two specific thyroid pages. | Indian Society for Pediatric and Adolescent Endocrinology (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); NICE (`https://www.nice.org.uk/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`); Royal Children's Hospital Melbourne Kids Health Info (`https://www.rch.org.au/kidsinfo/`). | Yes. Verify listed endocrine/paediatric sources and document clinician review before changing `status` or `medical_review_status`. |
| Delayed Puberty in Children | `html-conditions/delayed-puberty-in-children.html` | Growth & Development | published | pending-clinician-review | Related endocrine/growth topic; avoids vaccination, dosing, emergency, typhoid, and osteomyelitis exclusions; previously listed among low-risk draft pages before publication but still pending clinician review. | Confirm normal-variation wording, broad-cause wording, when assessment is needed, growth pattern discussion, and that no diagnostic thresholds or individualized management pathway is implied. | Indian Society for Pediatric and Adolescent Endocrinology (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); HealthyChildren.org (`https://www.healthychildren.org/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`). | Yes. Even though currently published, source verification and clinician review must be documented before changing `medical_review_status`. |
| Early Puberty in Children | `html-conditions/early-puberty-in-children.html` | Growth & Development | published | pending-clinician-review | Related endocrine/growth topic; avoids the named high-caution groups and provides a coherent clinician-review companion to delayed puberty. | Confirm early puberty sign wording, progressive puberty language, reasons for medical assessment, red flags, and that no diagnostic decision tree or treatment pathway is implied. | Indian Society for Pediatric and Adolescent Endocrinology (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); HealthyChildren.org (`https://www.healthychildren.org/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`). | Yes. Even though currently published, source verification and clinician review must be documented before changing `medical_review_status`. |
| Short Stature in Children | `html-conditions/short-stature-in-children.html` | Growth & Development | published | pending-clinician-review | Related growth topic; avoids vaccine, emergency, and dosing exclusions; previously noted as requiring clinician review before finalization. | Confirm growth-chart wording, growth velocity wording, common-cause framing, when assessment is needed, and that no diagnostic thresholds or treatment decisions are implied. | Indian Society for Pediatric and Adolescent Endocrinology parent resources (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); Royal Children's Hospital Melbourne Kids Health Info (`https://www.rch.org.au/kidsinfo/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`). | Yes. Even though currently published, source verification and clinician review must be documented before changing `medical_review_status`. |
| Types of Short Stature | `html-conditions/types-of-short-stature.html` | Growth & Development | published | pending-clinician-review | Related growth topic; pairs with Short Stature in Children for a compact source-verification pass; avoids the named high-caution groups. | Confirm classification wording, familial/constitutional/endocrine/skeletal framing, growth assessment wording, and that categories are educational rather than diagnostic labels for individual children. | Indian Society for Pediatric and Adolescent Endocrinology (`https://ispae.org.in/`); Indian Academy of Pediatrics (`https://iapindia.org/`); Pediatric Endocrine Society patient resources (`https://pedsendo.org/patient-resource/`); Royal Children's Hospital Melbourne Kids Health Info (`https://www.rch.org.au/kidsinfo/`). | Yes. Even though currently published, source verification and clinician review must be documented before changing `medical_review_status`. |

## 4. Resources Deliberately Excluded and Why

| Excluded group | Resources deliberately excluded | Why excluded from Batch 1 |
| --- | --- | --- |
| Vaccination and vaccine-adjacent pages | Catch-up Vaccination Parent Guide; HPV Vaccine for Adolescents; Influenza Vaccine in Children; Missed or Delayed Vaccines; Travel Vaccination for Children; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions; Vaccination Records and Missed Doses; Vaccine Myths and Misconceptions; BCG Scar and Lump; Fever After Vaccination; Vaccination FAQ for Parents; Vaccination: Why It Matters; Vaccine Side Effects and Aftercare | Current-guideline dependent. Must be reviewed against current IAP/ACVIP or Indian government guidance in a separate vaccination batch. Do not add schedules, intervals, dose tables, contraindication rules, or catch-up logic in this plan. |
| Catch-up, missed-dose, and interval-rule vaccination pages | Catch-up Vaccination Parent Guide; Missed or Delayed Vaccines; Vaccination Records and Missed Doses | Explicitly excluded because interval rules and catch-up decisions are patient-specific and guideline-dependent. |
| HPV, influenza, travel, and special medical condition vaccination | HPV Vaccine for Adolescents; Influenza Vaccine in Children; Travel Vaccination for Children; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions | Explicitly excluded by the task and governance workflow due to current-guideline and individualized-risk implications. |
| Medicine/dosing guidance pages | Safe Medicine Use at Home; Asthma in Children; Cough in Children; Home Safety for Toddlers; Poisoning and Accidental Ingestion; Poisoning Prevention and What to Do; pages flagged for antibiotic, steroid, levothyroxine, dose, or medicine-planning warnings | Excluded to avoid dosing, medicine adjustment, treatment-selection, or patient-specific action risk in Batch 1. |
| Emergency and first-aid pages | Burns and Scalds; Burns and Scalds in Children; Child First Aid Basics; Choking Prevention and First Response; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Head Injury in Children; Minor Head Injury and Concussion; Newborn Danger Signs; When to Seek Urgent Medical Care; Red Flags: When to Seek Urgent Medical Care | Excluded because urgent-care and first-response wording requires a separate high-caution clinician safety review. |
| Typhoid | Typhoid Fever | Explicitly excluded. Typhoid treatment and antibiotic-resistance wording require high-caution current-source verification. |
| Osteomyelitis | Osteomyelitis | Explicitly excluded. Serious infection and antibiotic/follow-up wording require high-caution clinician verification. |
| Serious infection and urgent-recognition pages | Dengue Fever; Encephalitis Warning Signs; Kawasaki Disease / MIS-C Awareness Guide; Malaria; Tuberculosis Parent Overview; Diphtheria; Rickettsial Fever / Scrub Typhus; COVID-19 in Children | Excluded from Batch 1 to keep the first review small and away from serious infection, urgent-recognition, treatment-boundary, and public-health-sensitive topics. |
| Orthopedic urgent-care risk | Slipped Upper Femoral Epiphysis (SCFE/SUFE) | Excluded because warning wording may affect urgency and action risk; better handled in a separate clinician-safety pass. |
| Newborn higher-caution pages | Newborn Danger Signs; Newborn Jaundice; Normal Newborn Care; Newborn Weight Loss and Gain; Premature Baby Care at Home | Excluded from Batch 1 to avoid newborn red-flag and escalation-risk topics in the first endocrine/growth review. |
| Nutrition/feeding pages | Growth Faltering / Poor Weight Gain; Weaning Guide; Breastfeeding Basics; Infant Colic | Excluded to keep Batch 1 clinically coherent around endocrine/growth review and avoid expanding the first pass beyond 7 resources. |

## 5. Exact Next-Step Workflow After This Plan

1. Dr. Murali reviews only the selected Batch 1 pages listed in this plan.
2. Source verification is performed for the sources already listed in the selected pages' metadata, with review date/version recorded where later page edits require it.
3. A separate PR edits only the selected Batch 1 resource files if Dr. Murali requests content, source, or metadata changes.
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

No page should be promoted from `draft` to `published` until the selected resource has completed Dr. Murali review, source verification, and any required separate PR edits.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 1 for review.
