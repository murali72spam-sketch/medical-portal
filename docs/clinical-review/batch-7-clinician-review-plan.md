# Clinical Portal 2026 - Clinician Review Batch 7 Plan

Plan date: 2026-06-06

Scope: documentation-only planning update for the next small clinician-review workflow batch.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, `last_reviewed`, metadata, references, slugs, titles, featured flags, hero fields, generated index data, the sitemap, application files, package files, tests, legal pages, or assets. It does not mark any resource as reviewed or publish any draft page.

## 1. Purpose

Batch 7 selects the next small group of existing parent-education resources for a future staged clinician review and source-verification workflow after Batches 1 through 6 and the Parent Guide Completion Audit have been completed.

This is a documentation-only planning update. It selects review candidates, records the infant-colic overlap decision, and defines safety boundaries only. No guide is completed or rewritten during this planning stage.

## 2. Current Checkpoint

| Checkpoint | Current value |
| --- | ---: |
| Production public reviewed-only index | 74 resources |
| Total local generated resources | 145 resources |
| Batch 1 | completed |
| Batch 2 | completed |
| Batch 3 | completed |
| Batch 4 | completed |
| Batch 5 | completed |
| Batch 6 | completed |
| Parent Guide Completion Audit | completed |

## 3. Safety Framing

Batch 7 is a **moderate-caution common infection / infant symptom planning batch, not a low-risk batch**.

The final selected set contains four common-infection resources. Infant Colic and the related baby-crying pages remain relevant to the planning scope but are deferred because their overlap is significant and should be resolved before any one of them enters a clinician-review batch.

> **Prominent caution:** The selected infection pages require clinician review of antibiotic and medicine boundaries, red flags, spread and school wording, references, disclaimers, and source currency before any reviewed-status update. The deferred infant crying/colic cluster requires duplicate/overlap resolution plus moderate/high infant-safety review.

## 4. Selection Criteria

Selection used the Parent Guide Completion Audit as the primary planning reference, supported by:

- `docs/audit/parent-guide-completion-audit-2026-06-06.md`
- `docs/clinical-review/`
- `docs/governance/`
- Existing Batch 1 through Batch 6 planning, review-pack, and finalization records
- `data/conditions-index.json`
- Relevant `html-conditions/*.html` metadata
- Content-level overlap comparison limited to the three infant crying/colic pages

Selected Batch 7 resources must be:

- Currently `published`.
- Currently `pending-clinician-review`.
- Existing resources only.
- Not already reviewed or finalized in Batch 1 through Batch 6.
- Parent education focused.
- Suitable for source, disclaimer, parent-friendly clarity, and conservative wording review.
- Suitable for review without adding dosing, treatment algorithms, urgent triage, serious-infection workflows, vaccination guidance, newborn-danger workflows, safeguarding pathways, or mental-health crisis pathways.
- Able to preserve clinician-assessment boundaries and avoid patient-specific action rules.

## 5. Exclusion Criteria

The following are excluded from Batch 7:

- All resources already marked `reviewed`.
- All finalized Batch 1 through Batch 6 resources.
- Vaccination and catch-up vaccination pages.
- Medication or dosing content.
- Emergency or first-aid content.
- Serious infection pages.
- Urgent-recognition pages.
- High-caution newborn pages.
- Mental-health crisis, safeguarding, immediate-safety, self-harm, substance-use, or abuse-related pages.
- Pages requiring current guideline schedule verification.
- Pages containing drug doses, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Redirect stubs, because this batch is not intended to review redirects as redirects.
- Pages with unresolved duplicate or substantial overlap concerns.

## 6. Selected Batch 7 Resources

The proposed Batch 7 set contains four existing resources. All four are currently `published` and `pending-clinician-review` in direct HTML metadata. The set is intentionally kept at four rather than substituting a higher-risk fifth page after Infant Colic was deferred.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Rationale for selection | Required review focus | Caution notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Common Cold in Children | `html-conditions/common-cold-in-children.html` | Respiratory | published | pending-clinician-review | 2026-05-20 | Common, usually self-limited illness suitable for a tightly bounded parent-education review without adding a treatment algorithm. | Verify antibiotic and medicine boundaries, warning signs, parent-friendly reassurance, school guidance, references, disclaimer strength, and conservative clinician-review wording. | Avoid medication recommendations, dosing, diagnostic certainty, fixed school-exclusion rules, and under- or overstatement of respiratory warning signs. |
| Middle Ear Infection / Otitis Media in Children | `html-conditions/03-middle-ear-infection-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | Common childhood infection suited to stewardship-focused source, clarity, disclaimer, and warning-sign review. | Verify antibiotic stewardship wording, pain and fever boundaries, hearing-related wording, escalation cues, references, disclaimer strength, and parent-friendly clarity. | Avoid antibiotic-selection advice, dosing, treatment timelines presented as guarantees, diagnostic algorithms, and patient-specific escalation rules. |
| Tonsillitis / Sore Throat in Children | `html-conditions/05-tonsillitis-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | Common condition that can be reviewed conservatively without adding treatment algorithms or serious-infection workflows. | Verify viral-versus-bacterial and antibiotic-stewardship wording, hydration principles, airway and red-flag wording, school guidance, references, and disclaimer strength. | Airway and swallowing warning signs increase caution. Avoid medicine advice, dosing, testing algorithms, diagnostic certainty, and fixed school-exclusion rules. |
| Impetigo in Children | `html-conditions/06-impetigo-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-20 | Common localized infection suitable for parent hygiene, spread-prevention, school-guidance, source, and disclaimer review. | Verify antibiotic and steroid cautions, spread and hygiene wording, school guidance, skin red flags, references, disclaimer strength, and conservative treatment boundaries. | Avoid antibiotic or steroid selection, application schedules, dosing, treatment algorithms, fixed school-exclusion rules, and overconfident diagnosis from appearance alone. |

## 7. Infant Colic / Baby Crying Overlap Finding

The three guides have somewhat different titles and emphasis, but their practical scope is substantially overlapping. All three cover normal or colic-like crying, basic-needs checks, safe soothing, caregiver coping, safe sleep, never shaking or roughly handling a baby, and overlapping danger signs involving feeding, urine output, lethargy, breathing, vomiting, stool changes, and inconsolable crying.

Because differentiation and canonical purpose are not yet clear, none of the three pages should enter Batch 7. The cluster should first undergo duplicate/overlap resolution and then infant-safety clinician review.

| Resource | File path | Current status | Review status | Overlap concern | Batch 7 decision | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | published | pending-clinician-review | Substantial overlap with both related guides in crying pattern, reassurance, safe soothing, feeding review, caregiver coping, safe sleep, and danger signs. | defer | Defer pending duplicate/overlap resolution. Its broader structure does not yet establish a sufficiently distinct canonical role, and it requires moderate/high infant-safety caution. |
| Colic in Babies | `html-conditions/colic-in-babies.html` | published | pending-clinician-review | Closely overlaps Infant Colic and Baby Crying in definition, symptoms, home support, caregiver safety, and red flags; visible footer status wording is also stale. | defer | Defer pending duplicate/overlap resolution and later infant-safety review. Do not mix status-wording cleanup with Batch 7 planning. |
| Baby Crying: What is Normal? | `html-conditions/baby-crying-what-is-normal.html` | published | pending-clinician-review | Has a broader normal-crying framing, but repeats much of the same safe-soothing, caregiver coping, safe-sleep, and red-flag content as both colic pages. | defer | Defer until the cluster's distinct purposes and canonical relationships are documented, then review with infant-safety caution. |

## 8. Rationale for the Batch

- Four resources keeps the clinician-review workload small, focused, and reviewable.
- Every selected resource is an existing parent guide that remains `published` and `pending-clinician-review` in direct HTML metadata.
- The selected pages form a coherent moderate-caution common-infection set suitable for source verification, disclaimer review, parent-friendly clarity review, stewardship wording review, and conservative warning-sign review.
- The batch avoids vaccination schedules, dosing, treatment algorithms, emergency and first-aid instructions, serious infections, broad urgent-recognition workflows, high-caution newborn guidance, safeguarding, and mental-health crisis content.
- Each selected page has an explicit caution boundary so later work does not drift into prescribing, diagnostic algorithms, fixed treatment rules, or patient-specific advice.
- The workload is limited to four because Infant Colic should not be included until duplicate/overlap resolution clarifies the roles of all three infant crying/colic pages.
- A higher-risk page should not be substituted merely to reach five resources.

## 9. Resources Deliberately Excluded and Why

| Excluded group or resources | Examples deliberately excluded | Why excluded from Batch 7 |
| --- | --- | --- |
| Already reviewed or finalized resources | All resources marked `reviewed`; all finalized Batch 1 through Batch 6 resources | Completed or reviewed resources must not be reselected for a pending clinician-review batch. |
| Vaccination and current-guideline resources | Vaccination and catch-up vaccination pages; travel vaccination; missed or delayed vaccine guidance | Require current schedule, interval, contraindication, eligibility, or public-health source verification. |
| Medication, dosing, supplement, or treatment-selection resources | Safe Medicine Use at Home; Asthma; Vitamins and Minerals; pages with drug doses, intervals, maximum doses, or treatment algorithms | Excluded to avoid medicine selection, dosing, contraindication algorithms, and patient-specific action rules. |
| Emergency, first-aid, injury, and urgent-recognition resources | Burns; choking; poisoning; nosebleeds; head injury; febrile seizures; red-flag and urgent-care pages | Require immediate-action, first-response, or urgency-sensitive clinician safety review. |
| Serious infection and higher-caution acute infection resources | Meningitis; pneumonia; diphtheria; measles; pertussis; COVID-19; rickettsial fever; urinary tract infection; infectious mononucleosis | Require serious-infection, public-health, treatment-boundary, complication, or urgent-recognition review. |
| High-caution newborn and young-infant resources | Newborn danger signs; newborn jaundice; newborn weight loss and gain; premature baby care; safe sleep; cord care; normal newborn care | Young-infant deterioration, feeding, and safety guidance require neonatal clinician and current-source review. |
| Infant crying/colic overlap cluster | Infant Colic; Colic in Babies; Baby Crying: What is Normal? | Deferred pending duplicate/overlap resolution, clear canonical roles, and moderate/high infant-safety review. |
| Mental-health crisis, safeguarding, substance-use, abuse, or immediate-safety resources | Adolescent Mental Health Warning Signs; Anxiety; Bullying; school refusal; teen substance use; safety, boundaries, and consent pages | May require crisis, self-harm, safeguarding, abuse, substance-use, or immediate-safety pathways. |
| Redirect stubs | Older redirect files | This batch is not intended to review redirects as redirects. |

## 10. Exact Next-Step Workflow

1. Accept this documentation-only Batch 7 planning PR without changing any resource page, metadata, generated index, sitemap, or reviewed state.
2. Prepare a separate Batch 7 clinician review pack for only the four selected resources. The pack must explicitly check references, source currency, disclaimers, red flags, stewardship and medicine boundaries, school and spread wording where relevant, and conservative clinician-assessment boundaries.
3. Dr. Murali performs clinician review and source verification for each selected resource.
4. Create a separate approved-edits PR only after clinician review, and limit changes to edits explicitly approved by Dr. Murali.
5. Create a separate final reviewed-status PR only after clinician review, source verification, approved edits, and final approval are complete.

The infant crying/colic cluster should follow a separate duplicate/overlap-resolution workflow before any review-pack or status-finalization work.

## 11. Required Warning

**No page should be marked `reviewed` until clinician review and source verification are complete.**

No selected or deferred page should be promoted, published, finalized, consolidated, redirected, retired, completed, rewritten, or otherwise treated as clinically approved during this planning stage.

This plan is not medical approval, source verification, publication approval, or a status-change task. It only selects Batch 7 resources and records the infant-colic overlap decision for a future staged clinician-review workflow.

## 12. Validation Requirements

Run:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
git diff --check
git diff --stat
git status
```

If build changes only generated files, restore them:

```powershell
git checkout -- data/conditions-index.json sitemap.xml
```

The expected final changed file for this planning task is:

```text
docs/clinical-review/batch-7-clinician-review-plan.md
```
