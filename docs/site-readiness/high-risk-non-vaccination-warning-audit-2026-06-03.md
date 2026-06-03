# Clinical Portal 2026 — High-Risk Non-Vaccination Warning Audit

Date: 3 June 2026

Branch: `audit/high-risk-non-vaccination-warning-audit`

## Purpose

Create a documentation-only audit and review plan for the remaining `validate:resources` clinical governance warnings after vaccination governance completion.

This PR does not edit clinical HTML resource content, does not change `medical_review_status`, does not mark any additional pages reviewed, does not delete resources, and does not intentionally edit generated output.

## Validation Baseline

Command run:

```powershell
npm.cmd run validate:resources
```

Current result:

- Total errors: 0.
- Total warnings: 16.
- Vaccination safety warnings: none.

Current validator warning pages, exactly as reported:

```text
WARN: 03-middle-ear-infection-parent-guide.html: antibiotic
WARN: 04-conjunctivitis-parent-guide.html: antibiotic, steroid
WARN: 05-tonsillitis-parent-guide.html: antibiotic
WARN: 06-impetigo-parent-guide.html: antibiotic, steroid
WARN: 09-osteomyelitis-parent-guide.html: antibiotic
WARN: 19-ringworm-parent-guide.html: steroid
WARN: asthma-in-children.html: dose
WARN: bcg-scar-and-lump.html: antibiotic, steroid
WARN: child-travel-health.html: antibiotic
WARN: childhood-overweight-and-obesity.html: insulin
WARN: common-cold-in-children.html: antibiotic
WARN: cough-in-children.html: antibiotic
WARN: hypothyroidism-in-children.html: levothyroxine
WARN: short-stature-in-children.html: steroid
WARN: typhoid-fever.html: antibiotic
WARN: vaccination-faq-for-parents.html: dose, steroid
```

## Risk Buckets

### 1. Medication / dose / endocrine-treatment wording

Pages that mention `dose`, `insulin`, `levothyroxine`, or similar medication-specific words. These require very cautious wording and should not include dosing advice.

### 2. Antibiotic / serious infection wording

Pages that mention `antibiotic`. These should be reviewed to ensure they do not encourage self-starting antibiotics and that red flags remain clinician-directed.

### 3. Steroid / immune-related wording

Pages that mention `steroid` or immune-related caution words. These should avoid eligibility/contraindication algorithms unless source-verified.

### 4. Emergency / urgent-care wording

Pages that mention emergency treatment or similar wording. These should keep red flags clear without becoming treatment algorithms.

### 5. Lower-risk wording cleanup

Pages where the warning may simply reflect a word being present in a safe context, such as explicit "do not self-medicate" wording, general risk-factor context, or a statement that the guide does not provide dosing advice.

## Warning Page Audit

| Filename | Warning keyword(s) | Likely risk category | Suggested next action | Review batch |
|---|---|---|---|---|
| `03-middle-ear-infection-parent-guide.html` | antibiotic | Antibiotic / serious infection wording | Wording review; confirm parent guidance does not encourage self-starting antibiotics and keeps clinician assessment central. | Middle |
| `04-conjunctivitis-parent-guide.html` | antibiotic, steroid | Antibiotic / serious infection wording; Steroid / immune-related wording | Clinician review needed because antibiotic and steroid eye-drop cautions can affect treatment decisions. | Early |
| `05-tonsillitis-parent-guide.html` | antibiotic | Antibiotic / serious infection wording | Wording review; preserve antibiotic-stewardship framing and avoid treatment criteria or self-start advice. | Middle |
| `06-impetigo-parent-guide.html` | antibiotic, steroid | Antibiotic / serious infection wording; Steroid / immune-related wording | Clinician review needed because skin infection treatment and steroid avoidance wording are clinically sensitive. | Early |
| `09-osteomyelitis-parent-guide.html` | antibiotic | Antibiotic / serious infection wording | Clinician review needed because osteomyelitis is a serious infection and antibiotic wording should remain urgent and clinician-directed. | Early |
| `19-ringworm-parent-guide.html` | steroid | Steroid / immune-related wording | Leave warning intentionally if appropriate; review wording only to ensure steroid-mixed cream warning remains non-algorithmic. | Late |
| `asthma-in-children.html` | dose | Medication / dose / endocrine-treatment wording | Clinician review needed; confirm dose wording warns against unsafe use without giving dosing advice. | Early |
| `bcg-scar-and-lump.html` | antibiotic, steroid | Antibiotic / serious infection wording; Steroid / immune-related wording | Leave warning intentionally if appropriate; vaccination governance is complete, but residual keyword wording can be checked for non-prescriptive safety framing. | Late |
| `child-travel-health.html` | antibiotic | Antibiotic / serious infection wording | Wording review; confirm travel-health text discourages self-medication and avoids standby antibiotic algorithms. | Middle |
| `childhood-overweight-and-obesity.html` | insulin | Medication / dose / endocrine-treatment wording | Documentation-only or lower-risk wording cleanup; insulin appears likely to be contextual risk wording rather than treatment advice. | Late |
| `common-cold-in-children.html` | antibiotic | Antibiotic / serious infection wording | Wording review; preserve antibiotic-stewardship message for viral illness and avoid prescribing criteria. | Middle |
| `cough-in-children.html` | antibiotic | Antibiotic / serious infection wording | Leave warning intentionally if appropriate when wording states the guide does not provide antibiotic rules; otherwise minor wording cleanup. | Late |
| `hypothyroidism-in-children.html` | levothyroxine | Medication / dose / endocrine-treatment wording | Clinician review needed because drug-specific thyroid replacement wording is high caution even without dosing tables. | Early |
| `short-stature-in-children.html` | steroid | Steroid / immune-related wording | Documentation-only or lower-risk wording cleanup if steroid appears only as medical-history context. | Late |
| `typhoid-fever.html` | antibiotic | Antibiotic / serious infection wording | Clinician review needed because typhoid antibiotic choice is high-risk and resistance-dependent. | Early |
| `vaccination-faq-for-parents.html` | dose, steroid | Medication / dose / endocrine-treatment wording; Steroid / immune-related wording | Leave warning intentionally if appropriate; vaccination governance is complete, but residual keyword wording can remain documented unless source guidance changes. | Late |

## Batch Priority

Early review should prioritize pages where wording can directly affect medication, endocrine-treatment, serious infection, or high-risk treatment decisions:

- `04-conjunctivitis-parent-guide.html`
- `06-impetigo-parent-guide.html`
- `09-osteomyelitis-parent-guide.html`
- `asthma-in-children.html`
- `hypothyroidism-in-children.html`
- `typhoid-fever.html`

Middle review should focus on antibiotic-stewardship and common-infection wording where the likely risk is lower but still parent-actionable:

- `03-middle-ear-infection-parent-guide.html`
- `05-tonsillitis-parent-guide.html`
- `child-travel-health.html`
- `common-cold-in-children.html`

Late review should handle lower-risk warning cleanup, contextual terms, and reviewed vaccination pages with residual keyword warnings:

- `19-ringworm-parent-guide.html`
- `bcg-scar-and-lump.html`
- `childhood-overweight-and-obesity.html`
- `cough-in-children.html`
- `short-stature-in-children.html`
- `vaccination-faq-for-parents.html`

## Recommended Next PR Sequence

- PR #109 — Medication / dose-warning review plan or review pack.
- PR #110 — Antibiotic / serious infection review plan or review pack.
- PR #111 — Steroid / immune-related wording review plan or review pack.
- PR #112 — Emergency / urgent-care wording review plan or review pack.
- PR #113 onwards — Lower-risk pending guides.

## Do Not Regress

- Do not add medicine doses unless a separate source-verified dosing governance plan exists.
- Do not add antibiotic treatment algorithms.
- Do not add steroid eligibility rules.
- Do not add emergency treatment algorithms.
- Do not mark future pages reviewed without clinician review.
- Do not commit `data/conditions-index.json` or `sitemap.xml` if only regenerated by build.
- Do not stage `node_modules`, `playwright-report`, or `test-results`.

## Verification Commands

Run after this documentation-only audit:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run audit:vaccination-governance
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git status
```

If only generated files are dirty after build:

```powershell
git restore data/conditions-index.json sitemap.xml
git status
```

Expected:

- `npm.cmd run validate:resources`: 0 errors, 16 warnings.
- `npm.cmd run audit:vaccination-governance`: 14 reviewed, 0 pending.
- `npm.cmd run qa:batch10 -- --reporter=list`: 9 passed.
- Duplicate `.png.png` asset scan: no output.
- Final pre-commit `git status`: only this new documentation file.
- Final post-commit `git status`: clean.
