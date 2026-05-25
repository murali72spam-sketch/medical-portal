# Clinician Review and Finalization Workflow

## 1. Purpose

Remaining Clinical Portal 2026 resources should not be mass-finalized. The remaining draft, high-caution, and clinician-review resources require deliberate clinician review, current-source verification, or high-caution governance before publication or review promotion.

This workflow is documentation-only. It does not approve publication, does not change `status`, does not change `medical_review_status`, and does not add clinical facts, dose schedules, vaccine schedules, treatment algorithms, AI/API behavior, external search, or patient data collection.

## 2. Current checkpoint

Current checkpoint from the latest resource audits and architecture record:

| Checkpoint | Current value |
| --- | ---: |
| Total resources | 145 |
| Remaining drafts | 38 |
| Resources not marked reviewed | 144 |
| Current validation | 0 errors, 20 existing warnings |

No further safe low-risk finalization batch was recommended by the latest audit. The remaining draft pool is made up of clinician-review topics and high-caution topics that require source verification, clinician judgment, or both.

## 3. Resource risk classes

| Risk class | Meaning | Promotion posture |
| --- | --- | --- |
| Low-risk parent education | General parent education with no treatment algorithm, dose, schedule, diagnostic decision, or patient-specific action. | May be considered for wording cleanup, but still requires normal metadata, disclaimer, and safety checks before public listing. |
| Needs wording review | Content appears broadly safe but needs careful wording cleanup to avoid implying diagnosis, treatment selection, or individualized advice. | Do not add new medical facts. Keep edits editorial and clinician-directed. |
| Needs clinician review | Content involves clinical diagnosis, treatment context, specialist-care sensitivity, medicine implications, or red-flag judgment. | Requires Dr. Murali or qualified clinician review before marking reviewed. |
| High-caution / do not publish until current guideline verification | Content depends on current guidance, urgent-care safety, medicine/dosing boundaries, vaccination rules, or high-risk clinical decisions. | Keep as draft or pending until current sources are checked and documented. |

## 4. High-caution categories

Treat the following as high-caution unless a clinician explicitly classifies a specific page otherwise:

- Vaccination
- Catch-up vaccination
- HPV
- Influenza
- Travel vaccination
- Vaccination in special medical conditions
- Dosing or medicine guidance
- Typhoid
- Osteomyelitis
- Emergency / first-aid pages
- Any page involving treatment algorithm, diagnostic decision, dose, schedule, interval, contraindication, or patient-specific action

## 5. Clinician-review checklist

For each resource, the reviewer should check:

- Is the content factually accurate?
- Are red flags correct and not over/understated?
- Are references appropriate and current?
- Are no doses, schedules, or treatment algorithms invented?
- Are disclaimers and non-substitution wording present?
- Is parent advice general and safe?
- Is Indian context appropriate?
- Does the page avoid patient-specific advice?

## 6. Current-source verification workflow

Check current sources before changing any resource status or medical review status.

For vaccination pages, verify the latest available IAP/ACVIP or Indian government guidance before changing publication or review metadata. Do not add catch-up logic, dose schedules, interval tables, contraindication algorithms, or eligibility rules unless they are supplied from verified current sources and reviewed by a clinician.

For international references, use RCH, AAP, NICE, WHO, CDC, NHS, and GINA where relevant to the topic. Prefer sources that match the clinical question being reviewed, and avoid mixing recommendations from different jurisdictions without noting why the source is being used.

Record the review source and date in the page when the review changes the resource. The record should make clear which source was checked, the date or version of the source, and who performed the clinician review.

## 7. Status promotion rules

`status: draft` may be promoted to `status: published` only after the resource is complete, safe for public listing, and appropriate for the portal's parent-education scope.

`medical_review_status: pending-clinician-review` may be promoted to `medical_review_status: reviewed` only after review by Dr. Murali or another qualified clinician. Do not use `reviewed` casually for editorial cleanup, formatting fixes, generated index updates, or build-only changes.

High-caution pages should remain `draft` or `pending-clinician-review` until they are source-verified and clinically reviewed. A page may be published but still pending clinician review only if the project deliberately accepts that state and the page remains non-prescriptive, disclaimer-protected, and safe for parent education.

## 8. Recommended PR workflow

Use small PRs rather than one large finalization PR:

- PR A: clinician-review one small group of related pages.
- PR B: vaccination pages after current guideline verification.
- PR C: medicine/dosing pages only after strict source verification.
- PR D: emergency/first-aid pages after clinical safety review.

Avoid one large finalization PR. Smaller PRs make it easier to verify sources, identify risk, preserve metadata accuracy, and avoid accidental mass promotion.

## 9. Review table template

Use this table for each clinician-review or finalization batch:

| Resource title | File path | Category | Current status | Current medical_review_status | Risk class | Reviewer | Sources checked | Source date/version | Decision | Required edits | Final status | Final medical_review_status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## 10. Codex instruction template

Use this prompt template for future clinician-review batches:

```text
Clinical Portal 2026 clinician-review batch.

Edit only the files listed below:
- <file path 1>
- <file path 2>
- <file path 3>

Rules:
- Documentation/resource batch must stay limited to the specified files.
- Do not invent clinical facts.
- Do not add doses, schedules, vaccine intervals, treatment algorithms, contraindication rules, or patient-specific advice unless Dr. Murali provides the verified source wording.
- Keep changes small and reviewable.
- Preserve parent-education tone and non-substitution wording.
- Keep Indian context appropriate.
- Do not add AI/API behavior, external search, or patient data collection.
- Run build, resource validation, and QA.
- Preserve data/conditions-index.json only when metadata changes intentionally.
- If data/conditions-index.json changes only because of build/testing, restore it with:
  git checkout -- data/conditions-index.json

Required commands:
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list

End with:
- changed files
- tests run
- validation warning summary
- git status
```

## 11. PowerShell/Git workflow

Use this workflow when starting a clinician-review branch from a clean `main`:

```powershell
git checkout main
git pull origin main
git status
git checkout -b <branch>
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
git status
```

If `data/conditions-index.json` changes only because of build/testing, restore it:

```powershell
git checkout -- data/conditions-index.json
```

Check for duplicated PNG extensions before final handoff:

```powershell
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
```

## 12. Final recommendation

The recommended next practical action is to choose 5-10 remaining resources for clinician review by category. Start with non-vaccination, non-dosing pages if possible. Keep vaccination, dosing/medicine, and emergency/first-aid pages in separate review batches.

Do not mass-finalize the remaining draft pool. The next safe workflow is clinician review and current-source verification, followed by small metadata/status promotion tasks only where the clinician review supports promotion.
