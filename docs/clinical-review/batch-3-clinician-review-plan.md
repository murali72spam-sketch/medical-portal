# Clinical Portal 2026 — Clinician Review Batch 3 Plan

## 1. Purpose

This document plans Clinician Review Batch 3 for Clinical Portal 2026. Batch 1 growth/endocrine resources are finalized and reviewed. Batch 2 nutrition/feeding resources are finalized and reviewed.

This PR is documentation-only. No source HTML medical content is changed in this planning step, and no page should be marked as reviewed as part of this plan. Review status should not be changed until clinician review is complete.

## 2. Batch 3 Safety Approach

Batch 3 should be low-risk and staged. Candidate resources should focus on general parent education, clarity, metadata completeness, references, and appropriate safety language.

The batch should avoid pages that require current guideline schedule verification, detailed treatment algorithms, medication dosing, urgent triage decisions, or high-risk newborn guidance. Any wording updates should happen only after clinician review and should remain conservative, parent-friendly, and non-substitutive.

## 3. Topics to Avoid in Batch 3

- Vaccination
- Catch-up vaccination
- Medication or dosing content
- Emergency / first-aid content
- Typhoid
- Osteomyelitis
- Serious infection pages
- Urgent-recognition pages
- High-caution newborn pages
- Any page requiring current guideline schedule verification
- Any page containing drug doses, dose intervals, maximum doses, or treatment algorithms

## 4. Proposed Low-Risk Batch 3 Resource Candidates

1. Sleep Issues
2. Tantrums
3. Bedwetting
4. Head Lice
5. Molluscum Contagiosum
6. Common Rashes
7. Ringworm
8. Hives
9. Hay Fever
10. Conjunctivitis

## 5. Review Goals for Each Resource

- Parent-friendly clarity
- Accurate general education wording
- Clear non-substitution disclaimer
- Appropriate red-flag wording without overclaiming
- No invented drug doses
- No unverified treatment algorithm
- No individualized medical advice
- References present
- Last-reviewed date present
- Metadata complete
- medical_review_status appropriate for current stage
- status appropriate for current stage

## 6. Proposed Staged Workflow

Stage 1: Planning PR

Create this documentation-only plan for Batch 3. Do not change source HTML medical content, resource metadata, medical_review_status, or reviewed status.

Stage 2: Batch 3 Review Pack

Prepare a clinician-facing review pack listing the selected Batch 3 resources, current page status, references, disclaimers, and specific review questions.

Stage 3: Wording Update PR after clinician review

After clinician feedback is complete, make any approved wording changes in a separate PR. Keep changes limited to clinician-reviewed wording updates and required metadata adjustments for the current stage.

Stage 4: Finalization PR only after review is complete

Only after review is complete, finalize the approved resources in a separate PR. Do not update review status or mark resources as reviewed before this stage.

## 7. Required Validation Before Any Commit

Run these commands before any commit related to Batch 3 work:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git status
```

## 8. Commit Message

Recommended commit message:

```text
Plan clinician review batch 3
```

## 9. Next Step After This Plan

After this planning PR is reviewed and accepted, prepare the Stage 2 Batch 3 Review Pack. Review status should not be changed until clinician review is complete, and no source HTML medical content should be edited during the planning step.
