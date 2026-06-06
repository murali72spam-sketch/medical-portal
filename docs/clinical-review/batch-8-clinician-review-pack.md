# Clinical Portal 2026 - Batch 8 Clinician Review Pack

## 1. Purpose

This is a Stage 2 clinician-facing review pack for Dr. Murali's manual clinician review and source verification of the four selected Batch 8 resources.

This pack prepares questions and records the current repository state. It does not approve any resource or authorize a later status change.

## 2. Safety Boundaries

- This is documentation-only.
- No page, status, medical content, metadata, reference, slug, title, featured flag, hero field, redirect, generated file, app file, test, legal page, package file, stylesheet, or script is changed.
- No resource is marked reviewed or approved.
- No draft page is published and no unfinished guide is completed.
- No page is consolidated, redirected, retired, renamed, or deleted.
- All clinical accuracy, source adequacy, overlap, and future-status decisions remain subject to manual clinician confirmation.
- Source verification must be completed before any later reviewed-status change.

## 3. Batch 8 Selected Resource Summary

| Resource | File path | Category | status | medical_review_status | last_reviewed | references present yes/no | disclaimer present yes/no | caution level | review priority | source verification needed before status change |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Baby Crying: What is Normal? | `html-conditions/baby-crying-what-is-normal.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | Yes | Yes | Moderate | Define its role in the crying/colic cluster; verify normal-crying reassurance, safe soothing, caregiver safety, feeding boundaries, danger signs, disclaimer, and references | Yes |
| Colic in Babies | `html-conditions/colic-in-babies.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | Yes | Yes | Moderate | Define whether it has a distinct parent-facing colic role; verify soothing, caregiver coping, feeding review, danger signs, stale visible status wording, disclaimer, and references | Yes |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | Yes | Yes | Moderate-high | Define its canonical role versus the other crying/colic pages; verify crying-pattern, feeding, caregiver-safety, safe-sleep, danger-sign, disclaimer, and reference wording | Yes |
| Reflux in Infants and Children | `html-conditions/reflux-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | Yes | Yes | High | Verify normal posseting versus concerning vomiting, feeding and growth boundaries, aspiration/breathing concerns, safe sleep, stale visible status wording, disclaimer, and references | Yes |

## 4. Infant Crying / Colic Overlap Review

### 4.1 Current Role Comparison

| Resource | Current apparent role | Main overlap | Canonical role question |
| --- | --- | --- | --- |
| Baby Crying: What is Normal? | Broad introduction to normal crying, infant cues, safe soothing, caregiver coping, and warning signs | Repeats soothing, caregiver safety, and danger signs found in both colic pages | Should this be the canonical broad normal-crying page that routes parents to a distinct colic guide only when needed? **Needs confirmation** |
| Colic in Babies | Shorter colic-focused parent guide with soothing, caregiver coping, and detailed danger signs | Closely repeats Baby Crying and much of Infant Colic; visible page badge says Draft while metadata says published | Does this page have a distinct simpler role, or is its purpose too similar to Infant Colic? **Needs confirmation** |
| Infant Colic | Broader structured colic guide covering normal versus concerning features, feeding, safe care, follow-up, and urgent signs | Repeats colic definition, soothing, caregiver safety, and red flags from the other two pages | Should this be the canonical detailed colic guide, with the other pages clearly differentiated or addressed later? **Needs confirmation** |

### 4.2 Overlap Comparison Checklist

- [ ] Confirm whether the three pages serve clearly different parent needs.
- [ ] Confirm which page, if any, should be canonical for normal infant crying.
- [ ] Confirm which page, if any, should be canonical for colic.
- [ ] Compare definitions of normal crying, unsettled behavior, and colic.
- [ ] Compare reassurance wording so it does not delay assessment of illness or injury.
- [ ] Compare feeding, urine, stool, growth, vomiting, reflux, and hydration boundaries.
- [ ] Compare safe-soothing, safe-sleep, caregiver-break, and never-shake wording.
- [ ] Compare danger-sign scope, urgency language, and consistency.
- [ ] Compare disclaimers and non-substitution boundaries.
- [ ] Verify whether references adequately support each page's intended role.
- [ ] Identify unnecessary repetition and any conflicting wording.
- [ ] Decide whether navigation or cross-linking would clarify roles in a later approved PR.
- [ ] Record any future consolidation or redirect proposal separately; do not implement it in this PR.

### 4.3 Overlap Decision Box

| Decision | Current value |
| --- | --- |
| Keep all three as separate resources? | Needs confirmation |
| Differentiate their roles in a later approved PR? | Needs discussion |
| Consolidate any resources in a later separate PR? | Needs discussion |
| Redirect any resource in a later separate PR? | Needs discussion |
| Add or revise cross-links in a later approved PR? | Needs confirmation |
| Defer overlap resolution? | Needs confirmation |
| Is any overlap decision approved by this pack? | No |
| Can any resource be marked reviewed before overlap and source decisions are complete? | Not yet |

## 5. Resource-by-Resource Review Notes

### 5.1 Baby Crying: What is Normal?

- **File path:** `html-conditions/baby-crying-what-is-normal.html`
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-15
- **Existing references from metadata:** Royal Children's Hospital Melbourne Kids Health Info Crying and unsettled babies; WHO maternal and newborn care recommendations; Indian Academy of Pediatrics Guidelines for Parents; AAP HealthyChildren.org safe sleep guidance.
- **Primary review concern:** Confirm whether this is the canonical broad normal-crying resource and whether reassurance, soothing, feeding, caregiver-safety, and young-infant danger-sign boundaries are accurate, source-supported, and clearly distinct from the colic pages.

**Clinician-review questions**

- Is the description of crying that may be normal accurate without offering unsafe reassurance?
- Are feeding, urine, stool, temperature, color, breathing, alertness, vomiting, abdominal, jaundice, and injury concerns appropriately framed?
- Are safe-soothing, safe-sleep, caregiver-break, and never-shake statements suitable and source-supported?
- Does any wording imply a diagnostic or urgent-triage algorithm?
- Is the disclaimer strong enough for a young-infant symptom page?
- Should its future role be broad normal-crying education with clear differentiation from colic resources? **Needs confirmation**

**Source verification checklist**

- [ ] Verify the RCH crying and unsettled babies source.
- [ ] Verify relevant WHO maternal and newborn care recommendations.
- [ ] Verify relevant Indian Academy of Pediatrics parent guidance.
- [ ] Verify relevant AAP / HealthyChildren.org safe sleep guidance.
- [ ] Confirm source support for normal-crying patterns, safe soothing, caregiver safety, feeding and hydration boundaries, and danger signs.
- [ ] Confirm the page does not form a diagnostic, urgent-triage, feeding, or patient-specific action algorithm.
- [ ] Confirm the disclaimer preserves clinician assessment boundaries.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Current value |
| --- | --- |
| Intended canonical role confirmed? | Needs confirmation |
| Clinician approval recorded? | No |
| Source verification complete? | No |
| Content edits needed? | Needs confirmation |
| Metadata edits needed? | Needs confirmation |
| Cross-link or overlap work needed later? | Needs confirmation |
| Approved for future reviewed status? | Not yet |

### 5.2 Colic in Babies

- **File path:** `html-conditions/colic-in-babies.html`
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-15
- **Existing references from metadata:** Royal Children's Hospital Melbourne Kids Health Info Crying and unsettled babies; Indian Academy of Pediatrics Guidelines for Parents; World Health Organization newborn care resources; Royal Children's Hospital Melbourne Kids Health Info Breastfeeding; AAP HealthyChildren.org safe sleep guidance.
- **Primary review concern:** Determine whether this shorter colic page has a distinct role versus Infant Colic and Baby Crying, while verifying infant-safety boundaries and noting, without changing, that the visible page badge says Draft while metadata says published.

**Clinician-review questions**

- Is the definition of colic and the description of an otherwise well baby accurate and appropriately cautious?
- Are safe soothing, calm feeding, caregiver handover, safe cot break, and never-shake statements suitable?
- Are newborn, feeding, urine, neurological, breathing, vomiting, stool, jaundice, injury, and caregiver-safety danger signs accurate and appropriately bounded?
- Is its scope meaningfully distinct from Infant Colic?
- Is the visible Draft badge inconsistency appropriate for a later non-clinical cleanup PR? **Needs confirmation**
- Is the disclaimer strong enough, and does the page avoid diagnosis, treatment, or patient-specific action rules?

**Source verification checklist**

- [ ] Verify the RCH crying and unsettled babies source.
- [ ] Verify relevant Indian Academy of Pediatrics parent guidance.
- [ ] Verify relevant WHO newborn care resources.
- [ ] Verify the RCH breastfeeding source.
- [ ] Verify relevant AAP / HealthyChildren.org safe sleep guidance.
- [ ] Confirm source support for colic framing, safe soothing, caregiver coping, feeding boundaries, and danger signs.
- [ ] Confirm that no wording forms a diagnostic, urgent-triage, feeding, treatment, or patient-specific action algorithm.
- [ ] Confirm the disclaimer preserves clinician assessment boundaries.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Current value |
| --- | --- |
| Distinct role from Infant Colic confirmed? | Needs confirmation |
| Keep as a separate resource? | Needs discussion |
| Clinician approval recorded? | No |
| Source verification complete? | No |
| Content edits needed? | Needs confirmation |
| Metadata/body consistency cleanup needed later? | Needs confirmation |
| Approved for future reviewed status? | Not yet |

### 5.3 Infant Colic

- **File path:** `html-conditions/infant-colic-parent-guide.html`
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-21
- **Existing references from metadata:** RCH Kids Health Info crying babies guidance; NHS colic guidance; American Academy of Pediatrics HealthyChildren crying and colic guidance; CDC infant safety guidance.
- **Primary review concern:** Confirm whether this should be the canonical detailed colic guide and verify its broad feeding, safe-care, safe-sleep, caregiver-safety, review, and urgent-care wording before any future overlap or status decision.

**Clinician-review questions**

- Is the statement that colic is identified after checking feeding, growth, urine, stool, breathing, illness, and injury appropriate?
- Is the normal-versus-concerning comparison accurate, clear, and safely bounded?
- Are caregiver-break, never-shake, safe-sleep, feeding-review, and follow-up statements suitable and source-supported?
- Are fever, low temperature, lethargy, feeding, dehydration, vomiting, stool, abdominal, breathing, choking, injury, and inconsolable-crying danger signs accurate?
- Does the page avoid diagnosis, treatment selection, medicine advice, formula-change advice, and patient-specific action rules?
- Is its future role sufficiently distinct from the shorter colic and broad crying pages? **Needs confirmation**

**Source verification checklist**

- [ ] Verify the RCH crying babies guidance.
- [ ] Verify current NHS colic guidance.
- [ ] Verify relevant AAP / HealthyChildren.org crying and colic guidance.
- [ ] Verify relevant CDC infant safety guidance.
- [ ] Confirm source support for colic framing, normal-versus-concerning features, safe soothing, caregiver safety, feeding review, safe sleep, and danger signs.
- [ ] Confirm that no wording forms a diagnostic, urgent-triage, feeding, treatment, medicine, formula-change, or patient-specific action algorithm.
- [ ] Confirm the disclaimer preserves clinician assessment boundaries.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Current value |
| --- | --- |
| Canonical detailed-colic role confirmed? | Needs confirmation |
| Keep as a separate resource? | Needs discussion |
| Clinician approval recorded? | No |
| Source verification complete? | No |
| Content edits needed? | Needs confirmation |
| Cross-link or overlap work needed later? | Needs confirmation |
| Approved for future reviewed status? | Not yet |

### 5.4 Reflux in Infants and Children

- **File path:** `html-conditions/reflux-in-children.html`
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-20
- **Existing references from metadata:** RCH Kids Health Info: Reflux; NICE gastro-oesophageal reflux disease in children and young people; NHS reflux in babies; American Academy of Pediatrics HealthyChildren reflux guidance.
- **Primary review concern:** Verify the boundary between common posseting and concerning vomiting or feeding difficulty, including growth, hydration, aspiration/breathing, safe-sleep, and clinician-assessment wording; note, without changing, that the visible page badge says Draft while metadata says published.

**Clinician-review questions**

- Is normal posseting clearly and safely distinguished from forceful, green, bloody, projectile, or persistent vomiting?
- Are feeding discomfort, refusal, poor growth, dehydration, reduced wet nappies, choking, cough with feeds, breathing difficulty, and blue color concerns accurate and appropriately bounded?
- Are calm feeding, burping, supervised upright holding, feeding-frequency, breastfeeding, and monitoring statements sufficiently conservative?
- Are safe-sleep statements accurate and source-supported?
- Do medicine, thickener, formula-change, and breastfeeding boundaries avoid treatment or patient-specific advice?
- Is the visible Draft badge inconsistency appropriate for a later non-clinical cleanup PR? **Needs confirmation**
- Is the disclaimer strong enough for feeding, growth, vomiting, aspiration, safe sleep, and medicine concerns?

**Source verification checklist**

- [ ] Verify the RCH reflux source.
- [ ] Verify current NICE gastro-oesophageal reflux disease guidance for children and young people.
- [ ] Verify current NHS reflux in babies guidance.
- [ ] Verify relevant AAP / HealthyChildren.org reflux guidance.
- [ ] Confirm source support for normal posseting, vomiting warning signs, feeding and growth boundaries, aspiration/breathing concerns, safe sleep, and what-to-avoid wording.
- [ ] Confirm that no wording forms a diagnostic, urgent-triage, feed-volume, feed-frequency, thickener, formula-change, medicine, treatment, or patient-specific action algorithm.
- [ ] Confirm the disclaimer preserves clinician assessment boundaries.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Current value |
| --- | --- |
| Normal-posseting versus concerning-reflux boundary confirmed? | Needs confirmation |
| Clinician approval recorded? | No |
| Source verification complete? | No |
| Content edits needed? | Needs confirmation |
| Metadata/body consistency cleanup needed later? | Needs confirmation |
| Defer to a higher-caution infant-feeding review? | Needs confirmation |
| Approved for future reviewed status? | Not yet |

## 6. Common Clinician Review Questions

- Is each page safe and appropriate for parent education?
- Does reassurance remain conservative and avoid delaying medical assessment?
- Are newborn and young-infant danger-sign boundaries accurate and clear?
- Are feeding, hydration, urine, stool, growth, vomiting, breathing, alertness, and injury concerns appropriately framed?
- Are safe-soothing, caregiver-break, never-shake, and safe-sleep statements accurate and source-supported?
- Does each page avoid diagnosis, treatment, medicine, dosing, feed-volume, formula-change, and patient-specific action algorithms?
- Are the references adequate, current, and appropriate for the claims made?
- Is each disclaimer strong enough and does it preserve clinician assessment boundaries?
- Are the roles of the three infant crying/colic pages sufficiently distinct?
- Should any page be deferred to a later higher-caution or specialist review?

## 7. Explicitly Out of Scope

- Vaccination / catch-up vaccination.
- Medication or dosing work.
- Emergency or first-aid work.
- Serious infection pages.
- Broad urgent-recognition pages.
- High-caution newborn pages.
- Mental-health or safeguarding pages.
- Pages requiring current guideline schedule verification.
- Drug doses, dose intervals, max doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Marking any Batch 8 page reviewed.
- Publishing draft pages.
- Completing unfinished guides.
- Consolidating, redirecting, retiring, or renaming pages during this PR.

## 8. Final Sign-Off

| Resource | Reviewed by Dr. Murali | Review date | Source verification complete | Approved for future reviewed status |
| --- | --- | --- | --- | --- |
| Baby Crying: What is Normal? | No | TBD | No | Not yet |
| Colic in Babies | No | TBD | No | Not yet |
| Infant Colic | No | TBD | No | Not yet |
| Reflux in Infants and Children | No | TBD | No | Not yet |

## 9. Current Resource Tracker

| Tracker item | Current | Projected if all four are later approved |
| --- | ---: | ---: |
| Total resources / HTMLs | 145 | 145 |
| Published + reviewed | 78 | 82 |
| Published + pending clinician review | 39 | 35 |
| Draft + pending review | 26 | 26 |
| Reviewed draft redirects | 2 | 2 |
| Remaining guides needing review/completion | 65 | 61 |

## 10. Required Warning

This review pack does not approve any resource. No selected page should be marked `reviewed` until manual clinician review, source verification, overlap decisions, any separately approved edits, and final approval are complete.
