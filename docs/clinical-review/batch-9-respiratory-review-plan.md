# Clinical Portal 2026 - Respiratory Clinician Review Batch 9 Plan

Plan date: 2026-06-06

Scope: documentation-only planning for staged review of the remaining respiratory resources.

This plan does not edit resource HTML, medical content, page status, `medical_review_status`, `last_reviewed`, metadata, references, slugs, titles, featured flags, hero fields, page content, redirects, generated index data, the sitemap, application files, tests, legal pages, package files, CSS, JavaScript, or assets. It does not mark any page reviewed, publish any draft page, complete any unfinished guide, or change resource counts.

## 1. Purpose

Batch 9 is a documentation-only planning step for staged clinician review of the remaining respiratory resources.

Respiratory topics require a cautious workflow because the remaining pages involve infant breathing and feeding danger signs, stridor and urgent breathing recognition, serious infection, medication and action-plan implications, and broad differential-diagnosis and medicine-boundary risk. This plan selects a small proposed first review pack and deliberately defers higher-risk respiratory pages for separate consideration.

## 2. Current Checkpoint

| Checkpoint | Current value |
| --- | ---: |
| Total resources/htmls | 145 |
| Published + reviewed | 78 |
| Published + pending clinician review | 39 |
| Draft + pending review | 26 |
| Reviewed draft redirects | 2 |
| Respiratory currently visible/reviewed | 1 |

## 3. Why Respiratory Currently Has Only 1 Visible Resource

Production shows reviewed-only resources. Common Cold in Children is currently reviewed and is therefore the only respiratory resource visible in the reviewed-only production view.

The remaining respiratory resources must move through staged clinician review and source verification before any later reviewed-status decision:

- Bronchiolitis in Infants involves high-caution infant breathing and feeding danger signs.
- Croup in Children involves stridor and urgent breathing recognition.
- Pneumonia in Children involves serious infection and breathing urgency.
- Asthma in Children involves medication and action-plan implications and remains draft/pending.
- Cough in Children involves a broad differential diagnosis and medicine-boundary risk and remains draft/pending.

The limited visible respiratory set reflects the reviewed-only production rule and appropriate caution; it is not approval to finalize all remaining respiratory pages together.

## 4. Selection Strategy

Do not finalize all respiratory pages at once. Use a safer staged respiratory review:

| Stage | Action |
| --- | --- |
| Stage 9A | Accept this documentation-only plan. |
| Stage 9B | Prepare a clinician review pack for the selected small respiratory set. |
| Stage 9C | Dr. Murali performs manual clinician review and source verification. |
| Stage 9D | Create an approved-edits PR if clinician review identifies required changes. |
| Stage 9E | Create a final reviewed-status PR only after approval. |

Each stage must remain separate enough to preserve a clear record of planning, clinician decisions, approved edits, and final status authorization. Draft resources must remain draft unless a later, separately approved workflow explicitly authorizes publication.

## 5. Proposed Batch 9 Resources

The table records the current repository state and the planning rationale for all five remaining respiratory-related resources. The preferred first review pack is limited to Bronchiolitis in Infants, Croup in Children, and Cough in Children. Pneumonia in Children and Asthma in Children are deliberately deferred unless Dr. Murali requests their inclusion.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Caution level | Why included | Required review focus | Reason not to finalize yet |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bronchiolitis in Infants | `html-conditions/02-bronchiolitis-parent-guide.html` | Respiratory | published | pending-clinician-review | 2026-05-20 | High / defer | Core respiratory page suitable for a focused high-caution infant review; proposed for the first pack so breathing and feeding safety boundaries can be examined directly. | Infant breathing effort, feeding adequacy, hydration, deterioration and urgent-care wording, conservative home-care boundaries, disclaimer strength, references, and source verification. | Young infants can deteriorate quickly. Breathing and feeding danger signs must be manually reviewed and source-verified before any status change. |
| Croup in Children | `html-conditions/01-croup-parent-guide.html` | Respiratory | published | pending-clinician-review | 2026-05-20 | High | Coherent with Bronchiolitis for a small respiratory-safety pack; proposed for the first pack to review airway and escalation wording. | Stridor recognition, breathing difficulty, agitation and deterioration wording, urgency boundaries, conservative parent guidance, disclaimer strength, references, and source verification. | Stridor and airway-related urgency are safety critical. The page must not be finalized before clinician confirmation of recognition and escalation wording. |
| Pneumonia in Children | `html-conditions/16-pneumonia-parent-guide.html` | Respiratory | published | pending-clinician-review | 2026-05-21 | High / defer | Included in the overall respiratory plan because it is a remaining respiratory page, but deliberately deferred from the preferred first pack. | Serious-infection recognition, breathing urgency, assessment and escalation boundaries, treatment and antibiotic boundaries, disclaimer strength, current references, and source verification. | Pneumonia combines serious-infection and respiratory urgency risk and may need a separate serious-infection review rather than the first respiratory pack. |
| Asthma in Children | `html-conditions/asthma-in-children.html` | Respiratory | draft | pending-clinician-review | 2026-05-18 | High / defer | Included in the overall respiratory plan because it is a remaining respiratory draft, but deliberately deferred from the preferred first pack. | Medication and inhaler wording, action-plan boundaries, acute breathing escalation, trigger and prevention wording, current-guideline sources, disclaimer strength, and source verification. | Asthma has medication and action-plan implications and may need a separate respiratory medication-governance review. It must remain draft and must not be published or finalized through this plan. |
| Cough in Children | `html-conditions/cough-in-children.html` | Respiratory | draft | pending-clinician-review | 2026-05-19 | High | Proposed for the first pack as a broad symptom page whose differential-diagnosis and medicine boundaries should be examined alongside focused respiratory pages. | Broad differential boundaries, duration and escalation wording, breathing and serious-illness warning signs, medicine and antibiotic boundaries, disclaimer strength, references, and source verification. | The broad symptom scope could produce unsafe reassurance or treatment implications. It must remain draft and must not be published or finalized through this plan. |

## 6. Suggested Staging for the First Respiratory Review Pack

Prefer the first respiratory review pack to include only two to three pages.

### Option A: Preferred first pack

- Bronchiolitis in Infants
- Croup in Children
- Cough in Children

This option creates a bounded pack covering infant lower-airway danger signs, upper-airway/stridor recognition, and a broad symptom/differential page. It allows Dr. Murali to compare breathing-risk and escalation wording without combining the first pack with serious-infection finalization or asthma medication governance.

Cough in Children is currently draft. Its inclusion in a review pack is for review planning and source verification only; it must remain draft and must not be published by the Batch 9 workflow unless a later, separately approved publication decision is made.

Pneumonia in Children and Asthma in Children should remain deferred unless Dr. Murali explicitly wants either included:

- Pneumonia is a serious-infection and breathing-urgency page that may need a separate serious-infection review.
- Asthma has medication and action-plan implications and may need a separate respiratory medication-governance review.

If Dr. Murali prefers a two-page first pack, use Bronchiolitis in Infants and Croup in Children, and keep Cough in Children draft/deferred for a later symptom-boundary review.

## 7. Resources Deliberately Deferred

| Resource | Why deliberately deferred | Required later review type |
| --- | --- | --- |
| Pneumonia in Children | Serious infection, breathing urgency, treatment-boundary, and escalation wording make it unsuitable for automatic inclusion in the first respiratory pack. | Separate serious-infection/current-source clinician review, or explicit clinician direction to include it in a respiratory pack. |
| Asthma in Children | Medication selection/use, inhaler wording, action plans, current guidelines, and acute breathing implications require stricter governance. The page is also draft/pending. | Separate respiratory medication-governance and current-guideline review; keep draft unless later publication is explicitly approved. |

Deferral does not imply that either resource is less important. It keeps the first review pack small and prevents different high-caution governance questions from being finalized together.

## 8. Review Boundaries

- This plan does not approve any respiratory resource.
- Do not edit medical content during the planning stage.
- Do not change any `status`, `medical_review_status`, `last_reviewed`, metadata, reference, title, slug, featured flag, hero field, page content, or redirect.
- Do not mark any page reviewed.
- Do not publish Asthma in Children or Cough in Children.
- Do not complete unfinished guides.
- Do not change resource counts.
- Do not treat proposed inclusion in a review pack as clinical approval.
- Record all source-verification and clinician decisions in the later review pack before any approved-edits or final reviewed-status PR.

## 9. Required Warning

**No respiratory page should be marked `reviewed` until clinician review and source verification are complete.**

This planning document does not authorize clinical finalization, publication of draft pages, medical edits, or status changes. Any later final reviewed-status PR must follow manual review by Dr. Murali, completed source verification, any required approved edits, and explicit final approval.

## 10. Resource Tracker

### Current

| Measure | Count |
| --- | ---: |
| Total resources/htmls | 145 |
| Published + reviewed | 78 |
| Published + pending clinician review | 39 |
| Draft + pending review | 26 |
| Reviewed draft redirects | 2 |

### Projected if 3 respiratory resources are later approved

| Measure | Projected count |
| --- | ---: |
| Total resources/htmls | 145 |
| Published + reviewed | 81 |
| Published + pending clinician review | 36 |
| Draft + pending review | 26 |
| Reviewed draft redirects | 2 |

The projection assumes three currently published pending-review respiratory resources are later approved. Because Cough in Children is currently draft, approving the preferred Option A set without a separate publication decision would not produce this exact projection. The tracker must be recalculated in the later finalization plan based on the specific approved published resources; no count changes are authorized here.

## 11. Exact Next-Step Workflow

1. Accept this documentation-only planning PR.
2. Prepare the Batch 9 respiratory clinician review pack for the selected two to three resources.
3. Dr. Murali performs manual clinician review and source verification.
4. Create an approved-edits PR if required, containing only clinician-approved changes.
5. Create a final reviewed-status PR only after approval.

The clinician review pack should clearly record source verification, respiratory danger-sign review, urgency and escalation boundaries, medication and treatment boundaries, disclaimer review, draft/publication constraints, clinician decisions, and final sign-off status for each selected page.

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

If the build changes only generated files, restore them:

```powershell
git checkout -- data/conditions-index.json sitemap.xml
```

## 13. Expected Changed File

The expected final changed file for this planning task is:

```text
docs/clinical-review/batch-9-respiratory-review-plan.md
```
