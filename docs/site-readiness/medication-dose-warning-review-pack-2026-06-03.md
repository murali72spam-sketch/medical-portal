# Medication / Dose-Warning Review Pack

Date: 2026-06-03  
Prepared for: PR #109  
Scope: Documentation/review-pack only

## Purpose of PR #109

This review pack records the current medication-related validation warnings after PR #108 and prepares the next review sequence. It does not edit clinical HTML resources, does not change `medical_review_status`, and does not mark any additional page reviewed.

The validator output is the source of truth for this pack. The warning keywords captured here are `antibiotic`, `steroid`, `dose`, `insulin`, and `levothyroxine`.

## Current Baseline After PR #108

- Validation: 0 errors, 16 warnings.
- Vaccination governance: expected baseline is 14 reviewed, 0 pending.
- Site remains in controlled-review mode.
- Warning pages must stay visible to governance until reviewed or intentionally accepted.

## Medication / Dose-Warning Pages

| Filename | Title | Validator keyword(s) | Status | medical_review_status | Why the warning matters clinically | Likely risk level | Recommended next action | Review batch |
|---|---|---:|---|---|---|---|---|---|
| `03-middle-ear-infection-parent-guide.html` | Middle Ear Infection / Otitis Media in Children | antibiotic | published | pending-clinician-review | Antibiotic wording can imply treatment selection or need for prescription escalation. | moderate | clinician review needed | early |
| `04-conjunctivitis-parent-guide.html` | Conjunctivitis / Pink Eye in Children | antibiotic, steroid | published | reviewed | Steroid and antibiotic references may be safe in warning context, but reviewed pages should not gain hidden medication advice. | low / safe-context warning | leave warning intentionally | late |
| `05-tonsillitis-parent-guide.html` | Tonsillitis / Sore Throat in Children | antibiotic | published | pending-clinician-review | Antibiotic wording can affect parent expectations and stewardship messaging. | moderate | clinician review needed | early |
| `06-impetigo-parent-guide.html` | Impetigo in Children | antibiotic, steroid | published | pending-clinician-review | Skin infection wording may drift into medicine selection or escalation advice. | moderate | clinician review needed | early |
| `09-osteomyelitis-parent-guide.html` | Osteomyelitis | antibiotic | draft | pending-clinician-review | Bone infection content is higher acuity; antibiotic wording needs specialist-safe framing. | high | clinician review needed | early |
| `19-ringworm-parent-guide.html` | Ringworm / Tinea in Children | steroid | published | reviewed | Steroid mention can be clinically useful as an avoidance warning, but should remain non-prescriptive. | low / safe-context warning | leave warning intentionally | late |
| `asthma-in-children.html` | Asthma in Children | dose | draft | pending-clinician-review | Dose-related asthma wording could be mistaken for reliever or controller medicine instructions. | high | defer for separate dosing-governance project | late |
| `bcg-scar-and-lump.html` | BCG Scar and Lump | antibiotic, steroid | published | reviewed | Antibiotic or steroid wording may be safe in reassurance/referral context but still needs governance visibility. | low / safe-context warning | leave warning intentionally | late |
| `child-travel-health.html` | Child Travel Health | antibiotic | published | pending-clinician-review | Travel-health wording can accidentally imply standby antibiotic use or self-treatment. | moderate | source verification needed | middle |
| `childhood-overweight-and-obesity.html` | Childhood Overweight and Obesity | insulin | published | pending-clinician-review | Insulin wording intersects diabetes risk and treatment concepts; it should avoid patient-specific advice. | high | clinician review needed | middle |
| `common-cold-in-children.html` | Common Cold in Children | antibiotic | published | pending-clinician-review | Antibiotic stewardship wording is common but should be checked for non-prescriptive phrasing. | moderate | wording cleanup only | middle |
| `cough-in-children.html` | Cough in Children | antibiotic | draft | pending-clinician-review | Antibiotic wording may affect escalation expectations in respiratory symptoms. | moderate | clinician review needed | middle |
| `hypothyroidism-in-children.html` | Hypothyroidism in Children | levothyroxine | published | reviewed | Levothyroxine wording can become medication-management advice if dosing or monitoring logic is added. | high | defer for separate dosing-governance project | middle |
| `short-stature-in-children.html` | Short Stature in Children | steroid | published | reviewed | Steroid mention may be contextual, but endocrine-related wording should avoid treatment eligibility logic. | low / safe-context warning | leave warning intentionally | late |
| `typhoid-fever.html` | Typhoid Fever | antibiotic | draft | pending-clinician-review | Typhoid antibiotic wording can become treatment-selection advice if expanded. | high | clinician review needed | early |
| `vaccination-faq-for-parents.html` | Vaccination FAQ for Parents | dose, steroid | published | reviewed | Dose and steroid warnings may be acceptable in vaccination governance context but should not become dosing guidance. | low / safe-context warning | leave warning intentionally | late |

## Individual Page Notes

### `03-middle-ear-infection-parent-guide.html`

- Current warning: `antibiotic`.
- Current status: published; `medical_review_status` is pending-clinician-review.
- Clinical concern: antibiotic wording should support stewardship and clinician-directed care without suggesting a parent-led treatment choice.
- Next action: include in early clinician review.

### `04-conjunctivitis-parent-guide.html`

- Current warning: `antibiotic`, `steroid`.
- Current status: published; `medical_review_status` is reviewed.
- Clinical concern: reviewed pages should not lose warning visibility where medicine-specific wording remains.
- Next action: leave the warning intentionally unless future wording changes require re-review.

### `05-tonsillitis-parent-guide.html`

- Current warning: `antibiotic`.
- Current status: published; `medical_review_status` is pending-clinician-review.
- Clinical concern: antibiotic language in sore throat content must avoid implying that antibiotics are expected or routinely needed.
- Next action: include in early clinician review.

### `06-impetigo-parent-guide.html`

- Current warning: `antibiotic`, `steroid`.
- Current status: published; `medical_review_status` is pending-clinician-review.
- Clinical concern: medicine-specific skin infection wording can drift into treatment selection.
- Next action: include in early clinician review.

### `09-osteomyelitis-parent-guide.html`

- Current warning: `antibiotic`.
- Current status: draft; `medical_review_status` is pending-clinician-review.
- Clinical concern: osteomyelitis is higher-acuity content, so antibiotic wording needs clinician confirmation before publication decisions.
- Next action: include in early clinician review.

### `19-ringworm-parent-guide.html`

- Current warning: `steroid`.
- Current status: published; `medical_review_status` is reviewed.
- Clinical concern: steroid mentions may be appropriate as cautionary wording, but should not become medication instructions.
- Next action: leave warning intentionally.

### `asthma-in-children.html`

- Current warning: `dose`.
- Current status: draft; `medical_review_status` is pending-clinician-review.
- Clinical concern: dose wording in asthma content can easily be read as reliever/controller medicine guidance.
- Next action: defer for separate dosing-governance project unless only non-clinical wording cleanup is needed.

### `bcg-scar-and-lump.html`

- Current warning: `antibiotic`, `steroid`.
- Current status: published; `medical_review_status` is reviewed.
- Clinical concern: medication references may be acceptable in context, but continued warning visibility protects against future drift.
- Next action: leave warning intentionally.

### `child-travel-health.html`

- Current warning: `antibiotic`.
- Current status: published; `medical_review_status` is pending-clinician-review.
- Clinical concern: travel-health wording can be misread as self-treatment planning if not tightly framed.
- Next action: source verification needed.

### `childhood-overweight-and-obesity.html`

- Current warning: `insulin`.
- Current status: published; `medical_review_status` is pending-clinician-review.
- Clinical concern: insulin wording touches endocrine treatment concepts and should stay non-prescriptive.
- Next action: clinician review needed.

### `common-cold-in-children.html`

- Current warning: `antibiotic`.
- Current status: published; `medical_review_status` is pending-clinician-review.
- Clinical concern: antibiotic stewardship language is expected, but wording should be checked for clarity.
- Next action: wording cleanup only if no treatment recommendation is added.

### `cough-in-children.html`

- Current warning: `antibiotic`.
- Current status: draft; `medical_review_status` is pending-clinician-review.
- Clinical concern: cough pages can be mistaken for antibiotic escalation advice if wording is loose.
- Next action: clinician review needed.

### `hypothyroidism-in-children.html`

- Current warning: `levothyroxine`.
- Current status: published; `medical_review_status` is reviewed.
- Clinical concern: levothyroxine content should avoid dose instructions, monitoring algorithms, or patient-specific adjustment logic.
- Next action: defer for separate dosing-governance project if medication-management detail is needed.

### `short-stature-in-children.html`

- Current warning: `steroid`.
- Current status: published; `medical_review_status` is reviewed.
- Clinical concern: steroid wording may be contextual, but endocrine content should not imply eligibility or treatment rules.
- Next action: leave warning intentionally.

### `typhoid-fever.html`

- Current warning: `antibiotic`.
- Current status: draft; `medical_review_status` is pending-clinician-review.
- Clinical concern: typhoid content must avoid antibiotic selection, escalation, or treatment-planning advice without a separate governance plan.
- Next action: clinician review needed.

### `vaccination-faq-for-parents.html`

- Current warning: `dose`, `steroid`.
- Current status: published; `medical_review_status` is reviewed.
- Clinical concern: vaccination FAQ wording may contain acceptable governance context, but dose/steroid warnings should remain visible.
- Next action: leave warning intentionally.

## Recommended PR Sequence

### PR #110 - Medication/dose wording review batch 1

Recommended early batch:

- `03-middle-ear-infection-parent-guide.html`
- `05-tonsillitis-parent-guide.html`
- `06-impetigo-parent-guide.html`
- `09-osteomyelitis-parent-guide.html`
- `typhoid-fever.html`

Purpose: address higher-risk antibiotic wording and infection pages that are pending clinician review.

### PR #111 - Endocrine/metabolic medication wording review

Recommended middle batch:

- `childhood-overweight-and-obesity.html`
- `hypothyroidism-in-children.html`
- `short-stature-in-children.html`

Purpose: keep insulin, levothyroxine, and steroid/endocrine wording under tighter governance, without adding dose or monitoring logic.

### PR #112 - Asthma/respiratory medication wording review if needed

Recommended respiratory and remaining governance batch:

- `asthma-in-children.html`
- `common-cold-in-children.html`
- `cough-in-children.html`
- `child-travel-health.html`
- `04-conjunctivitis-parent-guide.html`
- `19-ringworm-parent-guide.html`
- `bcg-scar-and-lump.html`
- `vaccination-faq-for-parents.html`

Purpose: decide which warnings should remain intentional and which need wording cleanup or clinician review.

## Do Not Regress

- Do not add medicine doses unless a separate source-verified dosing governance plan exists.
- Do not add asthma medicine dose instructions.
- Do not add insulin adjustment advice.
- Do not add levothyroxine dose or monitoring algorithms.
- Do not add medication treatment algorithms.
- Do not add dose tables.
- Do not add drug algorithms.
- Do not add treatment escalation pathways.
- Do not make medication recommendations.
- Do not mark future pages reviewed without clinician review.
- Do not commit `data/conditions-index.json` or `sitemap.xml` if only regenerated by build.
- Do not stage `node_modules`, `playwright-report`, or `test-results`.
- Do not stage clinical HTML changes for this documentation-only PR.

## Validation Commands and Expected Baseline

Run these commands before commit:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run audit:vaccination-governance
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git status
```

Expected baseline:

- `validate:resources`: 0 errors, 16 warnings.
- `audit:vaccination-governance`: 14 reviewed, 0 pending.
- `qa:batch10 -- --reporter=list`: 9 passed.
- `.png.png` scan: no output.
- Final pre-commit `git status`: only `docs/site-readiness/medication-dose-warning-review-pack-2026-06-03.md`.

