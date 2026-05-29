# Clinical Portal 2026 — Clinician Review Batch 4 Plan

## 1. Purpose

This document plans Clinician Review Batch 4 for Clinical Portal 2026. Batch 1 growth/endocrine resources have been finalized and reviewed. Batch 2 nutrition/feeding resources have been finalized and reviewed. Batch 3 low-risk resources have been finalized and reviewed in PR #81. PR #82 added a duplicate/metadata cleanup plan.

This is a documentation-only planning document. It does not edit medical content, metadata, status, `medical_review_status`, or `last_reviewed`, and it does not mark any resource as reviewed.

## 2. Safety Boundary

Batch 4 should continue the staged clinician-review workflow with low-risk or moderate-low-risk parent education resources. The batch should avoid topics that depend on current guideline schedules, medication dosing, urgent recognition, emergency action, high-caution newborn care, serious infection assessment, or treatment algorithms.

If a candidate includes safety-sensitive wording, it should be marked as "needs caution" and reviewed conservatively in the later review pack. No wording changes should be made during this planning stage.

## 3. Selection Criteria

Candidate resources were selected from existing `html-conditions/` files and `data/conditions-index.json` entries only.

Batch 4 candidates should be:

- Currently `published`.
- Currently `pending-clinician-review`.
- Parent education focused.
- Lower risk than emergency, dosing, vaccination, serious infection, or urgent-recognition pages.
- Not already finalized in Batch 1, Batch 2, or Batch 3.
- Suitable for a staged review pack before any wording update or finalization PR.

## 4. Topics Excluded From Batch 4

- Vaccination
- Catch-up vaccination
- Medication or dosing content
- Emergency / first-aid content
- Serious infection pages
- Urgent-recognition pages
- High-caution newborn pages
- Typhoid
- Osteomyelitis
- Meningitis
- Pneumonia
- Seizures / epilepsy
- Febrile seizures
- Burns
- Fractures
- Poisoning
- Anaphylaxis
- Any page requiring current guideline schedule verification
- Any page containing drug doses, dose intervals, maximum doses, or treatment algorithms

## 5. Proposed Batch 4 Candidate Resources

The proposed Batch 4 set contains 8 existing resources. The group emphasizes parent education, prevention, behaviour/development guidance, and supportive developmental referral language rather than acute illness treatment.

1. Hand Hygiene and Cough Etiquette
2. Mosquito Bite Prevention
3. Screen Time and Digital Wellness
4. Positive Behaviour Guidance for Children
5. Developmental Milestones - Parent Guide
6. Speech and Language Delay - Parent Guide
7. Stuttering and Stammering
8. Thumb Sucking and Common Childhood Habits

## 6. Candidate Resource Table

| Resource title | File path | Current category | Current status | Current medical_review_status | Current last_reviewed | Reason for inclusion | Caution notes |
|---|---|---|---|---|---|---|---|
| Hand Hygiene and Cough Etiquette | `html-conditions/hand-hygiene-and-cough-etiquette.html` | Parent Education | published | pending-clinician-review | 2026-05-13 | General prevention and hygiene education; avoids diagnosis, dosing, treatment algorithms, and vaccination schedule verification. | Needs caution only for keeping red-flag wording general and not converting the page into illness triage guidance. |
| Mosquito Bite Prevention | `html-conditions/mosquito-bite-prevention.html` | Parent Education | published | pending-clinician-review | 2026-05-13 | Prevention-focused parent education with practical source-reduction and bite-prevention messaging. | Needs caution because fever warning signs are mentioned; review should avoid dengue/malaria treatment guidance, testing algorithms, or urgent-recognition expansion. |
| Screen Time and Digital Wellness | `html-conditions/screen-time-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | Behaviour/development parent guidance focused on routines, sleep, school impact, and online safety. | Needs caution for mental-health and safety-boundary wording; avoid detailed mental-health triage or crisis-management algorithms. |
| Positive Behaviour Guidance for Children | `html-conditions/positive-behaviour-guidance-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | Low-risk parenting support page centered on routines, connection, limits, praise, modelling, and predictable consequences. | Needs caution for developmental, school, and mental-health assessment boundaries; keep advice general and non-diagnostic. |
| Developmental Milestones - Parent Guide | `html-conditions/developmental-milestones-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | Parent education on broad developmental areas and when developmental assessment may be helpful. | Needs caution because milestone wording can imply screening thresholds; review should confirm age-range wording is conservative and not diagnostic. |
| Speech and Language Delay - Parent Guide | `html-conditions/speech-and-language-delay-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | Development-focused parent guidance with supportive home communication and referral boundaries. | Needs caution for hearing, developmental, and speech-language assessment wording; avoid diagnostic certainty or fixed intervention pathways. |
| Stuttering and Stammering | `html-conditions/stuttering-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | Parent education on supportive listening and when speech-language review is helpful. | Needs caution for referral timing and reassurance wording; keep the page non-diagnostic and avoid individualized therapy guidance. |
| Thumb Sucking and Common Childhood Habits | `html-conditions/thumb-sucking-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | Gentle, low-risk parent education on common habits and when review may be useful. | Needs caution around dental/developmental referral wording; avoid prescriptive treatment plans. |

## 7. Resources Considered But Deferred

| Resource title | File path | Reason deferred |
|---|---|---|
| Acne in Teenagers | `html-conditions/acne-in-teenagers-parent-guide.html` | Skin & Allergy candidate, but deferred because acne pages often touch treatment choices and mental-health/safety concerns. Better suited after the lower-risk behaviour/development group. |
| Eczema (Atopic Dermatitis) | `html-conditions/18-eczema-parent-guide.html` | Skin & Allergy candidate, but deferred because eczema care can drift into treatment-plan or medication-boundary wording. |
| Vulvovaginitis in Children | `html-conditions/13-vulvovaginitis-parent-guide.html` | Parent education candidate, but deferred because urinary symptoms, discharge, injury, foreign body, and safeguarding boundaries make it moderate-risk. |
| Baby Crying: What is Normal? | `html-conditions/baby-crying-what-is-normal.html` | Deferred because infant crying pages include young-infant safety and caregiver coping boundaries that deserve a higher-caution review group. |
| Colic in Babies | `html-conditions/colic-in-babies.html` | Deferred because colic/crying overlaps with young-infant red flags and may need duplicate/overlap review with the infant colic page. |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | Deferred because it includes infant red flags and overlaps with another colic/crying resource. |
| Bullying and Cyberbullying: Parent Guide | `html-conditions/bullying-and-cyberbullying-parent-guide.html` | Deferred because it includes urgent-help and safeguarding-type situations. |
| Exam Stress and Performance Pressure | `html-conditions/exam-stress-parent-guide.html` | Deferred because it includes urgent mental-health or safety concerns. |
| Screen Time and Behaviour - Parent Guide | `html-conditions/screen-time-and-behaviour-parent-guide.html` | Deferred because `html-conditions/screen-time-parent-guide.html` is selected first; this related page may need duplicate/overlap review later. |
| Safe Sleep for Infants | `html-conditions/safe-sleep-for-infants.html` | Deferred as high-caution infant safety guidance. |
| Common Cold in Children | `html-conditions/common-cold-in-children.html` | Deferred because respiratory infection pages may include medicine boundaries, warning signs, and symptom-care advice. |
| Hand, Foot & Mouth Disease in Children | `html-conditions/hand-foot-mouth-disease.html` | Deferred because infection pages can involve exclusion guidance, warning signs, and clinical boundary checks. |

## 8. Proposed Staged Workflow

Stage 1: Planning PR

Create this documentation-only Batch 4 plan. Do not change source HTML medical content, metadata, `status`, `medical_review_status`, `last_reviewed`, or reviewed state.

Stage 2: Batch 4 review pack

Prepare a clinician-facing review pack listing the selected Batch 4 resources, current page status, current review metadata, references, disclaimers, and specific review questions.

Stage 3: Clinician wording review checklist

Prepare a checklist for Dr. Murali to review wording, parent action boundaries, caution language, non-substitution disclaimers, and any source-verification needs.

Stage 4: Wording update PR after clinician review

After clinician feedback is complete, make only approved wording updates in a separate PR. Keep the change scope limited to the clinician-reviewed wording and any explicitly approved metadata adjustments for that stage.

Stage 5: Finalization PR only after Dr. Murali approval

Only after Dr. Murali approval, create a separate finalization PR for approved resources. Do not mark any resource reviewed, change `medical_review_status`, update `last_reviewed`, or alter status before that approval.

## 9. Validation Requirements

Run these commands before committing the Batch 4 planning document:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git status
```

If `data/conditions-index.json` changes only from build churn, restore it before staging:

```powershell
git checkout -- data/conditions-index.json
```

Only `docs/clinical-review/batch-4-clinician-review-plan.md` should be staged for this planning PR.

## 10. Next Step

After this planning PR is reviewed and accepted, prepare the Stage 2 Batch 4 review pack. No source HTML medical content, metadata, status, `medical_review_status`, or `last_reviewed` should be changed during the planning step.
