# Clinician Review Batch 2 Plan

Plan date: 2026-05-26

Branch: `governance/clinician-review-batch-2-plan`

Scope: documentation-only plan selecting the next small clinician-review batch for Dr. Murali review and source verification.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, generated index data, application files, package files, tests, AI/API behavior, analytics, tracking, cookies, localStorage, database behavior, or external search behavior.

## 1. Batch 2 Purpose

Batch 2 selects a focused Nutrition & Feeding review group for Dr. Murali source verification and clinician signoff after Batch 1 growth/endocrine resources have already been clinician-reviewed and finalized.

The batch is intentionally limited to 7 resources. It avoids the 7 Batch 1 resources and keeps vaccination, catch-up vaccination, HPV, influenza, travel vaccination, vaccination in special medical conditions, medicine/dosing guidance, emergency/first-aid pages, typhoid, osteomyelitis, serious infection and urgent-recognition pages, treatment algorithms, diagnostic decisions, dose schedules, interval rules, contraindication rules, and patient-specific action risk out of this review batch.

No page in this batch should be marked `reviewed`, promoted, or otherwise treated as clinically finalized until clinician review is complete and source verification has been documented.

## 2. Selection Criteria

Selection used:

- `docs/governance/clinician-review-and-finalization-workflow.md`
- `docs/governance/clinician-review-batch-1-plan.md`
- `docs/governance/clinician-review-batch-1-review-pack.md`
- `docs/audits/remaining-draft-finalization-next-batch-audit.md`
- `docs/audits/draft-resources-finalization-readiness-audit.md`
- `docs/audits/resource-validation-governance-warnings-audit.md`
- `data/conditions-index.json`
- `html-conditions/*.html` metadata only

Inclusion criteria:

- 5-10 resources only.
- Prefer non-vaccination, non-dosing, non-emergency resources.
- Prefer a coherent group for review together.
- Prefer general parent-education resources where review can focus on source verification, age-appropriate framing, and non-prescriptive wording.
- Prefer resources with existing metadata references that can be source-verified before any future status or review-status change.

Exclusion criteria:

- All 7 Batch 1 resources already finalized: Hyperthyroidism in Children; Hypothyroidism in Children; Thyroid Disorders in Children; Delayed Puberty in Children; Early Puberty in Children; Short Stature in Children; Types of Short Stature.
- Vaccination, catch-up vaccination, HPV, influenza, travel vaccination, and vaccination in special medical conditions.
- Medicine or dosing guidance.
- Emergency or first-aid pages.
- Typhoid and osteomyelitis.
- Serious infection and urgent-recognition pages.
- Pages with treatment algorithms, diagnostic decisions, dose schedules, interval rules, contraindications, or patient-specific action risk.

Rationale for choosing 7 resources:

- Nutrition & Feeding is a coherent parent-education group that can be reviewed together.
- The selected pages cover age-stage nutrition and feeding behavior without selecting vaccination, emergency, serious infection, typhoid, osteomyelitis, or Batch 1 endocrine/growth pages.
- All selected pages are currently `published` but remain `pending-clinician-review`, so Batch 2 should focus on clinician review and source verification before any later `medical_review_status` change.

## 3. Selected Resources Table

| Resource title | File path | Category | Current status | Current medical_review_status | Why selected for Batch 2 | Key review points for Dr. Murali | References/sources currently listed in metadata | Source verification needed before status or review change |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Weaning Guide | `html-conditions/complementary-feeding-after-6-months.html` | Nutrition & Feeding | published | pending-clinician-review | Coherent early-feeding resource; identified in prior audit as suitable for minor wording review while avoiding the excluded high-caution groups. | Confirm complementary-feeding wording is source-aligned, culturally practical, non-prescriptive, and does not imply individualized feeding plans or treatment decisions. | Dr. Murali Gopal. Weaning Guide & Recommendation; Indian Academy of Pediatrics parent nutrition guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024; World Health Organization complementary feeding guidance; HAB Eat behavioural feeding principles used only as a reference for variety, repetition, persistence, no pressure, role modelling, and hunger/fullness cues. | Yes. Verify listed nutrition and feeding sources before any future `medical_review_status` change. |
| Nutrition 1 to 2 Years | `html-conditions/nutrition-1-to-2-years.html` | Nutrition & Feeding | published | pending-clinician-review | Fits the age-stage nutrition sequence and keeps Batch 2 focused on non-acute parent education. | Confirm toddler nutrition framing, age-stage advice, safety boundaries, Indian context, and that no individualized diet plan is implied. | Indian Academy of Pediatrics parent nutrition guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024; World Health Organization infant and young child feeding guidance; Royal Children's Hospital Melbourne Kids Health Info nutrition resources. | Yes. Verify listed nutrition sources before any future `medical_review_status` change. |
| Preschool Nutrition 2 to 5 Years | `html-conditions/preschool-nutrition-2-to-5-years.html` | Nutrition & Feeding | published | pending-clinician-review | Continues the age-stage nutrition set and avoids vaccination, dosing, emergency, and urgent-recognition topics. | Confirm preschool nutrition advice, feeding behavior wording, growth-related caution language, and that parent actions remain general education. | Indian Academy of Pediatrics parent nutrition guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024; World Health Organization child nutrition guidance; Royal Children's Hospital Melbourne Kids Health Info nutrition resources. | Yes. Verify listed nutrition sources before any future `medical_review_status` change. |
| School-age Nutrition 5 to 12 Years | `html-conditions/school-age-nutrition-5-to-12-years.html` | Nutrition & Feeding | published | pending-clinician-review | Keeps the batch coherent across childhood nutrition stages without entering emergency or medication guidance. | Confirm school-age nutrition framing, practical parent guidance, red-flag boundaries if present, and that advice does not become patient-specific. | Indian Academy of Pediatrics parent nutrition guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024; World Health Organization child nutrition guidance; Royal Children's Hospital Melbourne Kids Health Info nutrition resources. | Yes. Verify listed nutrition sources before any future `medical_review_status` change. |
| Adolescent Nutrition 10 to 19 Years | `html-conditions/adolescent-nutrition-10-to-19-years.html` | Nutrition & Feeding | published | pending-clinician-review | Completes the age-stage nutrition arc through adolescence and remains outside the excluded high-caution groups. | Confirm adolescent nutrition framing, body-image-sensitive wording if present, practical family advice, and source alignment with Indian nutrition guidance. | Indian Academy of Pediatrics parent nutrition guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024; World Health Organization adolescent nutrition resources; Royal Children's Hospital Melbourne Kids Health Info nutrition resources. | Yes. Verify listed nutrition sources before any future `medical_review_status` change. |
| Picky Eating in Children | `html-conditions/picky-eating.html` | Nutrition & Feeding | published | pending-clinician-review | Behavior-linked feeding education pairs naturally with the age-stage nutrition pages and avoids medicine, dosing, vaccination, and emergency topics. | Confirm picky-eating wording is reassuring but safe, avoids blame or pressure, and clearly preserves clinician review for poor growth or significant feeding concerns. | Raising Children Network fussy eating guidance; American Academy of Pediatrics HealthyChildren picky eaters guidance; RCH Kids Health Info nutrition and child feeding guidance if relevant. | Yes. Verify listed feeding-behavior sources before any future `medical_review_status` change. |
| Iron-rich Diet and Iron Deficiency Prevention | `html-conditions/iron-rich-diet-iron-deficiency-prevention.html` | Nutrition & Feeding | published | pending-clinician-review | Nutrition prevention page that fits the batch and can be reviewed for food-first, non-dosing parent education. | Confirm iron-food and prevention wording, supplement boundary language if present, red-flag wording if present, and that no dose schedule or patient-specific treatment advice is implied. | Indian Academy of Pediatrics parent nutrition guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024; Indian Pediatrics micronutrient deficiency prevention resources; Royal Children's Hospital Melbourne Kids Health Info nutrition and iron resources. | Yes. Verify listed nutrition and micronutrient sources before any future `medical_review_status` change. |

## 4. Resources Deliberately Excluded and Why

| Excluded group | Resources deliberately excluded | Why excluded from Batch 2 |
| --- | --- | --- |
| Batch 1 finalized growth/endocrine resources | Hyperthyroidism in Children; Hypothyroidism in Children; Thyroid Disorders in Children; Delayed Puberty in Children; Early Puberty in Children; Short Stature in Children; Types of Short Stature | Explicitly excluded because these 7 resources were already selected for Batch 1 and have already been clinician-reviewed and finalized. |
| Vaccination and vaccine-adjacent pages | Catch-up Vaccination Parent Guide; HPV Vaccine for Adolescents; Influenza Vaccine in Children; Missed or Delayed Vaccines; Travel Vaccination for Children; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions; Vaccination Records and Missed Doses; Vaccine Myths and Misconceptions; BCG Scar and Lump; Fever After Vaccination; Vaccination FAQ for Parents; Vaccination: Why It Matters; Vaccine Side Effects and Aftercare | Current-guideline dependent. These require a separate vaccination/source-verification batch and must not be mixed with Batch 2 nutrition review. |
| Catch-up, missed-dose, and interval-rule vaccination pages | Catch-up Vaccination Parent Guide; Missed or Delayed Vaccines; Vaccination Records and Missed Doses | Explicitly excluded because interval rules and catch-up decisions are patient-specific and guideline-dependent. |
| HPV, influenza, travel, and special medical condition vaccination | HPV Vaccine for Adolescents; Influenza Vaccine in Children; Travel Vaccination for Children; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions | Explicitly excluded by task and governance workflow due to current-guideline and individualized-risk implications. |
| Medicine/dosing guidance pages | Safe Medicine Use at Home; Asthma in Children; Cough in Children; Poisoning and Accidental Ingestion; Poisoning Prevention and What to Do; pages flagged for antibiotic, steroid, levothyroxine, dose, supplement-dose, or medicine-planning warnings | Excluded to avoid dosing, medicine adjustment, treatment-selection, or patient-specific action risk in Batch 2. |
| Emergency and first-aid pages | Burns and Scalds; Burns and Scalds in Children; Child First Aid Basics; Choking Prevention and First Response; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Head Injury in Children; Minor Head Injury and Concussion; Newborn Danger Signs; When to Seek Urgent Medical Care; Red Flags: When to Seek Urgent Medical Care | Excluded because urgent-care and first-response wording requires a separate high-caution clinician safety review. |
| Typhoid | Typhoid Fever | Explicitly excluded. Typhoid treatment and antibiotic-resistance wording require high-caution current-source verification. |
| Osteomyelitis | Osteomyelitis | Explicitly excluded. Serious infection and antibiotic/follow-up wording require high-caution clinician verification. |
| Serious infection and urgent-recognition pages | Dengue Fever; Encephalitis Warning Signs; Kawasaki Disease / MIS-C Awareness Guide; Malaria; Tuberculosis Parent Overview; Diphtheria; Rickettsial Fever / Scrub Typhus; COVID-19 in Children; Meningitis in Children; Measles in Children; Whooping Cough / Pertussis in Children | Excluded from Batch 2 to keep this review away from serious infection, urgent-recognition, treatment-boundary, and public-health-sensitive topics. |
| Newborn higher-caution pages | Newborn Danger Signs; Newborn Jaundice; Normal Newborn Care; Newborn Weight Loss and Gain; Premature Baby Care at Home | Excluded to avoid newborn red-flag and escalation-risk topics in this nutrition-focused batch. |
| Higher-caution nutrition/feeding pages not selected | Breastfeeding; Breastfeeding Basics; Formula Feeding Guidance; Growth Faltering / Poor Weight Gain; Childhood Overweight and Obesity; Vitamins and Minerals | Excluded to keep Batch 2 small. These may be reasonable later nutrition/feeding review candidates, but they involve infant feeding, growth concern, obesity/comorbidity, or supplement-boundary wording that should be handled separately if Dr. Murali prefers. |
| Travel health and safety pages | Child Travel Health; Home Safety for Toddlers; Safe Food, Water and Deworming | Excluded because travel, safety, deworming, medicine, or prevention wording can introduce guideline, dosing, or patient-specific action risk. |

## 5. Exact Next-Step Workflow After This Plan

1. Dr. Murali reviews only the selected Batch 2 pages listed in this plan.
2. Source verification is performed for the sources already listed in the selected pages' metadata, with review date/version recorded where later page edits require it.
3. A separate PR edits only the selected Batch 2 resource files if Dr. Murali requests content, source, or metadata changes.
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

No page should be promoted from `draft` to `published` until the selected resource has completed Dr. Murali review, source verification, and any required separate PR edits. The selected Batch 2 pages are currently `published`, but they must remain `pending-clinician-review` until review is complete and source verification is documented.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 2 for review.
