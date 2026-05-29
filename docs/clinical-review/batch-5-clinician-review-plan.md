# Clinical Portal 2026 — Clinician Review Batch 5 Plan

## 1. Purpose

This document plans Clinician Review Batch 5 for Clinical Portal 2026. Batch 1 growth/endocrine resources have been finalized and reviewed. Batch 2 nutrition/feeding resources have been finalized and reviewed. Batch 3 low-risk resources have been finalized and reviewed. Batch 4 prevention/behaviour/development resources have been finalized and reviewed in PR #87. PR #82 added a duplicate/metadata cleanup plan.

This is a documentation-only planning document. It does not edit medical content, metadata, status, `medical_review_status`, or `last_reviewed`, and it does not mark any resource as reviewed.

## 2. Safety Boundary

Batch 5 should continue the staged clinician-review workflow with lower-risk or moderate-low-risk parent education resources. The proposed group should avoid current guideline schedule verification, medication dosing, urgent-recognition workflows, emergency or first-aid action steps, serious infection assessment, high-caution newborn care, and treatment algorithms.

If a candidate includes safety-sensitive wording, mental-health boundaries, safeguarding boundaries, diagnosis boundaries, or red-flag language, it is marked as "needs caution" for the later clinician review pack. No wording changes should be made during this planning stage.

## 3. Selection Criteria

Candidate resources were selected from existing `html-conditions/` files and `data/conditions-index.json` entries only.

Batch 5 candidates should be:

- Currently `published`.
- Currently `pending-clinician-review`.
- Parent education focused.
- Not already finalized in Batch 1, Batch 2, Batch 3, or Batch 4.
- Lower risk than emergency, dosing, vaccination, serious infection, urgent-recognition, or high-caution newborn pages.
- Suitable for a staged review pack before any wording update or finalization PR.

## 4. Topics Excluded From Batch 5

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

## 5. Proposed Batch 5 Candidate Resources

The proposed Batch 5 set contains 8 existing resources. The group emphasizes skin/allergy parent education, adolescent lifestyle guidance, and common musculoskeletal/developmental concerns that are lower-risk than acute infection, emergency, dosing, vaccination, or urgent-recognition pages.

1. Acne in Teenagers
2. Eczema (Atopic Dermatitis)
3. Physical Activity for Teenagers
4. Healthy Sleep Habits for Teenagers
5. Supporting Independence in Teenagers
6. Back Pain and Posture in Children
7. Flat Feet in Children
8. Intoeing / Feet Turning Inwards

## 6. Candidate Resource Table

| Resource title | File path | Current category | Current status | Current medical_review_status | Current last_reviewed | Reason for inclusion | Caution notes |
|---|---|---|---|---|---|---|---|
| Acne in Teenagers | `html-conditions/acne-in-teenagers-parent-guide.html` | Skin & Allergy | published | pending-clinician-review | 2026-05-22 | Skin/allergy and adolescent parent education focused on gentle skin care, avoiding picking and harsh scrubbing, and when medical review is helpful. | Needs caution because acne content can drift into treatment selection, scarring thresholds, and mental-health or immediate-safety wording. Review should avoid product schedules, medication advice, and individualized dermatology plans. |
| Eczema (Atopic Dermatitis) | `html-conditions/18-eczema-parent-guide.html` | Skin & Allergy | published | pending-clinician-review | 2026-05-10 | Common skin parent education focused on dry itchy skin, trigger reduction, skin care principles, and review boundaries. | Needs caution because eczema care can drift into treatment plans, steroid/medicine instructions, infection recognition, or allergy workups. Review should keep wording general and non-prescriptive. |
| Physical Activity for Teenagers | `html-conditions/physical-activity-for-teenagers-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | Adolescent lifestyle education focused on activity routines, sedentary behaviour, confidence, and family support rather than acute treatment. | Needs caution for sports clearance, injury, eating/body-image, and mental-health boundaries. Avoid fitness prescriptions for individual medical conditions. |
| Healthy Sleep Habits for Teenagers | `html-conditions/teen-sleep-habits-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | Adolescent parent guidance focused on routines, sleep timing, school impact, screens, and general wellbeing. | Needs caution because the page can overlap breathing, seizure, intoxication, self-harm, and mental-health safety language. Avoid crisis-management algorithms or individualized sleep-treatment advice. |
| Supporting Independence in Teenagers | `html-conditions/healthy-teen-independence-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | Adolescent parent education focused on gradual responsibility, communication, boundaries, and family support. | Needs caution for safeguarding, legal, mental-health, substance-use, and immediate-safety wording. Keep the page general and avoid counselling protocols. |
| Back Pain and Posture in Children | `html-conditions/back-pain-and-posture-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | Common musculoskeletal parent education focused on posture, activity, school-bag habits, and when review is helpful. | Needs caution for red-flag wording such as injury, neurological symptoms, systemic symptoms, persistent pain, or night pain. Avoid diagnostic algorithms, imaging advice, or treatment plans. |
| Flat Feet in Children | `html-conditions/flat-feet-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | Lower-risk musculoskeletal parent education about common foot shape variation and when assessment may be useful. | Needs caution for pain, stiffness, asymmetry, functional limitation, and referral thresholds. Avoid orthotic or treatment-plan recommendations. |
| Intoeing / Feet Turning Inwards | `html-conditions/intoeing-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | Lower-risk musculoskeletal/developmental parent education about common gait variation and supportive observation. | Needs caution for limp, pain, asymmetry, delayed milestones, neurological signs, or progressive deformity. Avoid fixed diagnostic thresholds or intervention pathways. |

## 7. Resources Considered But Deferred

| Resource title | File path | Reason deferred |
|---|---|---|
| Vulvovaginitis in Children | `html-conditions/13-vulvovaginitis-parent-guide.html` | Deferred because urinary symptoms, discharge, injury, foreign body, infection, and safeguarding boundaries make it moderate-risk. |
| Bullying and Cyberbullying: Parent Guide | `html-conditions/bullying-and-cyberbullying-parent-guide.html` | Deferred because it includes safeguarding, urgent-help, school safety, exploitation, and mental-health boundaries. |
| Exam Stress and Performance Pressure | `html-conditions/exam-stress-parent-guide.html` | Deferred because it can include urgent mental-health, self-harm, crisis, or safety concerns. |
| Common Cold in Children | `html-conditions/common-cold-in-children.html` | Deferred because respiratory infection pages can include medicine boundaries, warning signs, contagiousness, and symptom-care advice. |
| Hand, Foot & Mouth Disease in Children | `html-conditions/hand-foot-mouth-disease.html` | Deferred because infection pages can involve fever, hydration, exclusion guidance, warning signs, and clinical boundary checks. |
| Baby Crying: What is Normal? | `html-conditions/baby-crying-what-is-normal.html` | Deferred because young-infant crying pages require careful infant red-flag and caregiver-safety review. |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | Deferred because infant red flags, feeding concerns, and overlap with the crying page should be handled in a higher-caution group. |
| Menstrual Health for Adolescents | `html-conditions/menstrual-health-parent-guide.html` | Deferred because menstrual symptoms can require diagnostic boundaries, anemia/pain review, safeguarding sensitivity, and individualized care decisions. |
| Body Image Concerns in Teenagers | `html-conditions/teen-body-image-parent-guide.html` | Deferred because it overlaps eating-disorder assessment, nutrition, mental-health, safeguarding, and immediate-safety wording. |
| Puberty and Normal Growth Changes - Parent Guide | `html-conditions/puberty-and-normal-growth-changes-parent-guide.html` | Deferred because it overlaps growth/puberty assessment, safeguarding, mental-health wording, and prior growth/endocrine review themes. |
| Growing Pains in Children | `html-conditions/growing-pains-parent-guide.html` | Deferred because leg-pain red flags can require careful distinction from injury, infection, inflammatory disease, malignancy, or neurological symptoms. |
| Osgood-Schlatter Disease | `html-conditions/osgood-schlatter-parent-guide.html` | Deferred because sports-injury and knee-pain guidance can drift into activity restriction, physiotherapy, imaging, or treatment-plan advice. |
| Sever's Disease / Heel Pain | `html-conditions/severs-disease-parent-guide.html` | Deferred because heel-pain guidance can drift into sports restriction, physiotherapy, orthotic, or treatment-plan advice. |

## 8. Proposed Staged Workflow

Stage 1: Planning PR

Create this documentation-only Batch 5 plan. Do not change source HTML medical content, metadata, `status`, `medical_review_status`, `last_reviewed`, or reviewed state.

Stage 2: Batch 5 review pack

Prepare a clinician-facing review pack listing the selected Batch 5 resources, current page status, current review metadata, references, disclaimers, and specific review questions.

Stage 3: Clinician wording review checklist

Prepare a checklist for Dr. Murali to review wording, parent action boundaries, caution language, non-substitution disclaimers, and any source-verification needs.

Stage 4: Wording update PR after clinician review

After clinician feedback is complete, make only approved wording updates in a separate PR. Keep the change scope limited to the clinician-reviewed wording and any explicitly approved metadata adjustments for that stage.

Stage 5: Finalization PR only after Dr. Murali approval

Only after Dr. Murali approval, create a separate finalization PR for approved resources. Do not mark any resource reviewed, change `medical_review_status`, update `last_reviewed`, or alter status before that approval.

## 9. Validation Requirements

Run these commands before committing the Batch 5 planning document:

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

Only `docs/clinical-review/batch-5-clinician-review-plan.md` should be staged for this planning PR.

## 10. Next Step

After this planning PR is reviewed and accepted, prepare the Stage 2 Batch 5 review pack. No source HTML medical content, metadata, status, `medical_review_status`, or `last_reviewed` should be changed during the planning step.
