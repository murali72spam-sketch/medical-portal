# Clinical Portal 2026 - Resource Governance Dashboard

**Dashboard date:** 2026-06-06

## Purpose

This documentation-only governance dashboard tracks review state, category maturity, risk level, and the safest next batches. It reports the current governance checkpoint and supports planning without changing or approving any resource.

## Dashboard Rules

- This document does not approve medical content.
- This document does not mark pages reviewed.
- Counts should be updated after each major batch.
- Use this dashboard as planning guidance only.

## Current Checkpoint

| Measure | Count |
| --- | ---: |
| Total resources/HTMLs | 145 |
| Published + reviewed | 81 |
| Published + pending clinician review | 37 |
| Draft + pending review | 25 |
| Reviewed draft redirects | 2 |
| Remaining guides needing review/completion | 62 |
| Respiratory reviewed count | 4 |

## Current Global Resource Breakdown

| Governance state | Count | Planning interpretation |
| --- | ---: | --- |
| Published + reviewed | 81 | Clinician-reviewed resources published in the reviewed-only public index |
| Published + pending clinician review | 37 | Public-facing review backlog requiring clinician review and source verification before any reviewed-status change |
| Draft + pending review | 25 | Resources that must remain draft unless a later, separately approved workflow authorizes publication |
| Reviewed draft redirects | 2 | Intentional reviewed redirect stubs that remain draft and are not incomplete standalone guides |
| **Total resources/HTMLs** | **145** | Complete repository resource pool |

The 62 remaining guides needing review/completion comprise the 37 published pending-review resources and 25 draft pending-review resources. Reviewed draft redirects are excluded from this remaining-work count.

## Category Governance

| Category | Reviewed/published count | Published pending review count | Draft pending review count | High-caution notes | Suggested next action |
| --- | ---: | ---: | ---: | --- | --- |
| Respiratory | 4 | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Asthma/action plans, medication boundaries, breathing urgency, and serious infection require focused planning | Select only a small specifically planned pack; keep asthma, pneumonia, and other high-caution topics in their appropriate review pathways |
| Fever & Infections | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Serious infection, public-health, treatment, isolation, and emergency-recognition implications | Prefer only clearly bounded common-illness pages; defer serious infections |
| Gastrointestinal | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Dehydration, infant feeding, medicine, and acute escalation boundaries | Plan a small source-verified clinician-review batch before status changes |
| Growth & Development | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Mental-health, safeguarding, newborn growth, and overlap/duplication concerns remain | Prefer low-risk parent education and clearly scoped developmental topics |
| Nutrition & Feeding | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Infant feeding, growth faltering, supplements, deficiency risk, and dosing implications | Select only source-current, low/moderate-risk education pages |
| Parent Education | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Includes emergency, first-aid, newborn, travel, medication, and safeguarding topics | Separate low-risk education from high-caution specialist pathways |
| Skin & Allergy | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Allergy emergencies and medication wording require higher caution | Consider only bounded low/moderate-risk skin education pages |
| Vaccination | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | To be generated from index/audit in future dashboard update | Schedules, catch-up intervals, contraindications, and government guidance can change | Defer unless a current-source vaccination review is specifically planned |

## Review-State Definitions

| Review state | Definition |
| --- | --- |
| Published + reviewed | A published resource that has completed clinician review, source verification, required approved edits, and final reviewed-status authorization |
| Published + pending clinician review | A published resource that has not completed the required clinician-review workflow and must not be treated as reviewed |
| Draft + pending review | A draft resource awaiting review and/or completion that must not be published without a separate approved decision |
| Reviewed draft redirects | Intentional redirect stubs reviewed for their redirect purpose but kept draft and excluded from the public standalone-guide pool |
| Remaining guides needing review/completion | The combined published pending-review and draft pending-review backlog; excludes reviewed draft redirects |

## Risk-Level Framework

These suggested planning values must not be bulk-assigned without an approved process. They may be multi-value because a single resource can require more than one review pathway.

| Suggested risk level | Planning use |
| --- | --- |
| `low-risk-parent-education` | General parent education with limited acute, treatment, or schedule-sensitive implications |
| `moderate-caution` | Common topics requiring clinician review of warnings, boundaries, and source support |
| `high-caution` | Topics with higher-consequence recognition, escalation, or treatment implications |
| `newborn-related` | Young-infant feeding, deterioration, safety, or urgent-recognition content |
| `medication-related` | Medicine selection, use, dosing, contraindication, or action-plan implications |
| `vaccination-related` | Schedule, catch-up, contraindication, travel, or current-policy implications |
| `emergency-related` | First aid, urgent response, triage, or emergency-recognition content |
| `serious-infection-related` | Serious illness, public-health, treatment, isolation, or urgent-escalation implications |
| `mental-health-safeguarding-related` | Crisis, self-harm, abuse, consent, substance-use, or immediate-safety implications |

## Suggested Next Safest Batches

- Prefer small batches of low-risk or moderate-risk parent education pages with clear scope and current sources.
- Keep each batch narrow enough for direct clinician review and source verification.
- Resolve obvious overlap or duplicate-purpose questions before reviewing similar pages together.
- Avoid vaccination, medication/dosing, emergency, serious infection, high-caution newborn, and mental-health safeguarding pages unless specifically planned for the appropriate clinician-review pathway.

## Dashboard Maintenance Workflow

After each review/finalization batch:

1. Update the global and applicable category counts.
2. Confirm the reviewed-only production count.
3. Confirm the local repository is clean after validation.
4. Record the planning, review-pack, approved-edits, and finalization PR numbers as applicable.
5. Record the remaining resources needing review/completion.
6. Record the next safest proposed batch and its selection rationale.

## Future Automation Idea

A future documentation task may generate this dashboard from `data/conditions-index.json` and direct HTML metadata, including category and review-state summaries. Any generated report must preserve the distinction between published guides, drafts, and redirect stubs.

Do not implement dashboard automation in this PR.
