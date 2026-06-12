# Clinical Portal 2026 - Batch 10 Clinician Review Plan

**Batch theme:** Gastrointestinal, infant crying, reflux, and stooling parent guides

## Purpose

Prepare a small group of parent-facing gastrointestinal and infant-care resources for clinician review without changing public medical content or review status.

This is a documentation-only planning step. Inclusion in Batch 10 does not approve a resource, mark it reviewed, or authorize publication or medical-content changes.

## Current Tracker

- Total resources/htmls: 145
- Published + reviewed: 81
- Published + pending clinician review: 37
- Draft + pending review: 25
- Reviewed draft redirects: 2
- Remaining guides needing review/completion: 62
- Print/QR coverage: 81 / 81 reviewed pages
- Related Guides coverage: 81 / 81 reviewed pages

## Candidate Selection

Repository index data and embedded HTML metadata were checked for all six proposed topics. All six are currently published, pending clinician review, non-draft resources and are included in this planning batch.

| Resource title | Filename | Category | Current status | Current medical_review_status | Last reviewed | Included in Batch 10? | Reason |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Baby Crying: What is Normal? | `baby-crying-what-is-normal.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | yes | Eligible published parent guide. Review normal crying boundaries, safe soothing, caregiver coping, warning signs, and overlap with both colic guides. |
| Colic in Babies | `colic-in-babies.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | yes | Eligible published parent guide. Review colic-like crying, safe soothing, caregiver safety, red flags, and whether its purpose is sufficiently distinct from the other crying/colic guides. |
| Infant Colic | `infant-colic-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | yes | Eligible published parent guide. Review crying-pattern definitions, feeding review, red flags, and possible duplication or consolidation needs. |
| Reflux in Infants and Children | `reflux-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | yes | Eligible published parent guide. Review normal posseting boundaries, feeding support, age-specific wording, warning signs, and treatment boundaries. |
| Constipation in Children | `constipation-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | yes | Eligible published parent guide. Review stool withholding, toileting and diet advice, medicine cautions, red flags, and age-specific guidance. |
| Gastroenteritis / Diarrhoea in Children | `gastroenteritis-diarrhoea.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-19 | yes | Eligible published parent guide. Review hydration and ORS wording, feeding advice, dehydration signs, medicine cautions, and urgent-care thresholds. |

### Excluded Candidates

None. No candidate is already reviewed, draft-only, or a redirect stub. All six meet the selection rule.

The three infant crying and colic resources have overlapping subject matter. Their inclusion together is for clinician comparison and does not imply that all three should remain separate or be approved without revision.

## Final Selected Batch 10 Resources

1. Baby Crying: What is Normal? - `html-conditions/baby-crying-what-is-normal.html`
2. Colic in Babies - `html-conditions/colic-in-babies.html`
3. Infant Colic - `html-conditions/infant-colic-parent-guide.html`
4. Reflux in Infants and Children - `html-conditions/reflux-in-children.html`
5. Constipation in Children - `html-conditions/constipation-in-children.html`
6. Gastroenteritis / Diarrhoea in Children - `html-conditions/gastroenteritis-diarrhoea.html`

## Clinician Review Checklist

Apply this checklist separately to each selected resource:

- [ ] Check clinical accuracy.
- [ ] Check parent-facing clarity.
- [ ] Check red flags and urgent-care wording if present.
- [ ] Check home-care advice.
- [ ] Check medication and dosing wording if present.
- [ ] Check age-specific wording.
- [ ] Check disclaimer and non-substitution wording.
- [ ] Check references and source age.
- [ ] Check whether any content should be deferred or rewritten before review approval.

Additional Batch 10 comparison:

- [ ] Compare the three crying/colic guides for duplication, conflicting wording, unclear scope, or a need to consolidate or more clearly differentiate them.

## Source Verification Needs

Do not invent or add clinical content during this planning stage. During clinician review, verify each selected resource against appropriate current sources.

| Resource | Likely sources to verify |
| --- | --- |
| Baby Crying: What is Normal? | RCH Australia crying and unsettled babies guidance; Raising Children Network infant crying guidance; AAP / HealthyChildren safe soothing and infant safety guidance; IAP or Indian-context parent guidance where available; WHO only where relevant to newborn care and caregiver safety. |
| Colic in Babies | RCH Australia crying and unsettled babies guidance; Raising Children Network colic or infant crying guidance; NHS colic guidance where appropriate; AAP / HealthyChildren crying and colic guidance; IAP or Indian-context sources where available. |
| Infant Colic | RCH Australia crying babies guidance; NHS colic guidance; AAP / HealthyChildren crying and colic guidance; Raising Children Network where appropriate; IAP or Indian-context sources where available; CDC only where relevant to infant safety. |
| Reflux in Infants and Children | RCH Australia reflux guidance; NICE gastro-oesophageal reflux guidance where appropriate; NHS reflux in babies guidance; AAP / HealthyChildren reflux guidance; IAP or Indian-context sources where available. |
| Constipation in Children | RCH Australia constipation guidance; NICE constipation guidance where appropriate; Raising Children Network constipation guidance; AAP / HealthyChildren constipation guidance; IAP or Indian-context sources where available. |
| Gastroenteritis / Diarrhoea in Children | RCH Australia gastroenteritis guidance; NICE diarrhoea and vomiting guidance where appropriate; AAP / HealthyChildren diarrhoea and oral rehydration guidance; WHO oral rehydration and diarrhoeal-disease guidance where relevant; IAP or Indian-context sources where available. |

## Safety Note

Do not approve any guide that contains unverified dosages, red flags, contraindications, diagnostic criteria, or treatment algorithms.

The gastroenteritis guide requires particular scrutiny of ORS, dehydration, feeding, medicine, and escalation wording. The reflux and crying/colic guides require careful differentiation between common patterns and symptoms needing medical assessment. The constipation guide requires review of medicine boundaries and age-appropriate advice.

## Future Finalization Requirements

After Dr. Murali signs off, each approved page should receive:

- `medical_review_status: reviewed`
- `status: published` if not already published
- updated `last_reviewed` date
- visible reviewed-footer if missing
- Print button and QR block if missing
- QR SVG if missing
- Related Guides block if missing
- validation and production verification

These actions require a separate, explicitly approved finalization workflow. They are not authorized by this planning document.

## Explicit Non-Actions in This PR

- No HTML medical content edited.
- No status changed.
- No `medical_review_status` changed.
- No QR generated.
- No Related Guides added.
- No reviewed-footer added.
- No generated files committed.
