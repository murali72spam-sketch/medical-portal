# Clinical Portal 2026 - Batch 4 Clinician Review Pack

## 1. Purpose

This is a Stage 2 clinician-facing review pack for Dr. Murali's manual review and source verification of the six selected Batch 4 resources.

This pack does not approve, publish, finalize, consolidate, retire, redirect, or mark any resource as reviewed. It records the current repository state and questions that require clinician confirmation before any later change.

## 2. Safety Boundaries

- This is a documentation-only pack.
- No HTML medical content was changed.
- No resource metadata was changed.
- No `medical_review_status` value was changed.
- No resource was marked reviewed.
- `data/conditions-index.json` and `sitemap.xml` were not intentionally edited.
- Medical facts are summarized only from the existing selected HTML files.
- Where matching, metadata, references, duplicate/overlap status, or clinical meaning is unclear, this pack uses **Needs confirmation**.
- The two selected older URLs for bedwetting and tantrums are currently draft redirect stubs to reviewed canonical resources. This pack records that current state but does not approve or alter it.

## 3. Batch 4 Selected Resource Summary

| Resource | File path | Current title from metadata | Category | status | medical_review_status | last_reviewed | references present yes/no | disclaimer present yes/no | overlap / duplicate concern | clinician review priority | source verification needed before status change |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Autism Early Concerns - Parent Awareness Guide | `html-conditions/autism-early-concerns-parent-awareness-guide.html` | Autism Early Concerns - Parent Awareness Guide | Growth & Development | published | pending-clinician-review | 2026-05-24 | Yes | Yes | Very close overlap with autism early-signs page; distinction or later consolidation needs confirmation | High: compare paired autism pages and confirm non-diagnostic/regression wording | Yes |
| Autism: Early Signs Parents May Notice | `html-conditions/autism-early-signs-parent-guide.html` | Autism: Early Signs Parents May Notice | Growth & Development | published | pending-clinician-review | 2026-05-22 | Yes | Yes | Very close overlap with autism early-concerns page; distinction or later consolidation needs confirmation | High: compare paired autism pages and confirm assessment cues | Yes |
| Bedwetting | `html-conditions/bedwetting-parent-guide.html` | Redirect: Bedwetting / Nocturnal Enuresis - Parent Guide | Growth & Development | draft | pending-clinician-review | 2026-05-13 | Yes, canonical-resource reference only | Yes | Current file is a redirect stub to the reviewed canonical bedwetting/nocturnal-enuresis guide | High: confirm redirect and metadata state; no standalone medical content to review | Yes, before any status or consolidation change |
| Puberty and Normal Growth Changes - Parent Guide | `html-conditions/puberty-and-normal-growth-changes-parent-guide.html` | Puberty and Normal Growth Changes - Parent Guide | Growth & Development | published | pending-clinician-review | 2026-05-24 | Yes | Yes | Substantial overlap with puberty early/late changes page | High: check general timing language, urgent/safeguarding cues, and paired-page role | Yes |
| Puberty: Early and Late Changes | `html-conditions/puberty-parent-guide.html` | Puberty: Early and Late Changes | Growth & Development | published | pending-clinician-review | 2026-05-13 | Yes | Yes | Substantial overlap with puberty normal-growth page; metadata/body status wording also needs confirmation | High: check early/delayed wording, red flags, and paired-page role | Yes |
| Temper Tantrums in Young Children | `html-conditions/temper-tantrums-parent-guide.html` | Redirect: Temper Tantrums and Behaviour Regulation - Parent Guide | Growth & Development | draft | pending-clinician-review | 2026-05-22 | Yes, canonical-resource reference only | Yes | Current file is a redirect stub to the reviewed canonical tantrums/behaviour-regulation guide | High: confirm redirect and metadata state; no standalone medical content to review | Yes, before any status or consolidation change |

## 4. Resource-by-Resource Review Notes

### 4.1 Autism Early Concerns - Parent Awareness Guide

- **File path:** `html-conditions/autism-early-concerns-parent-awareness-guide.html`
- **Current metadata title:** Autism Early Concerns - Parent Awareness Guide
- **Current category:** Growth & Development
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-24
- **Existing references from metadata:** CDC autism spectrum disorder resources; American Academy of Pediatrics / HealthyChildren.org autism guidance; NICE autism recognition and referral guidance; NHS autism guidance; Raising Children Network autism resources; Royal Children's Hospital Melbourne autism resources.
- **Disclaimer present:** Yes
- **Sections to review based on existing page structure:** What parents should know; Concerns parents may notice; What else can overlap?; Practical parent steps; Red flags / when to seek prompt review; Important facts for parents; Medical disclaimer; References.
- **Existing red-flag / medical-review wording to check:** The page advises prompt medical or developmental review for loss of acquired language, social, play, or other skills; no response to sound or name; major communication or social-interaction concerns; self-injury; severe distress; feeding or sleep problems; seizures; developmental regression; or family safety concerns. It states that the page cannot diagnose autism and that support can begin while assessment is arranged.
- **Overlap or consistency concern:** Wording, structure, parent steps, and red flags are very close to `autism-early-signs-parent-guide.html`. Needs confirmation whether both pages serve distinct parent needs or should be differentiated or considered for later consolidation.

**Specific clinician-review questions**

- Is the description of autism respectful, accurate, parent-friendly, and clearly non-diagnostic?
- Are regression, seizures, feeding/sleep problems, self-injury, and family safety concerns framed with appropriate urgency?
- Is "do not wait silently" appropriate without overclaiming benefits or creating a diagnostic pathway?
- Are hearing, vision, language delay, global developmental delay, anxiety, trauma, and other overlapping concerns described appropriately?
- Is this page clinically distinct enough from the autism early-signs page to retain separately?

**Source verification checklist**

- [ ] Verify the CDC autism and developmental resources used.
- [ ] Verify AAP / HealthyChildren.org autism guidance.
- [ ] Verify current NICE autism recognition and referral guidance.
- [ ] Verify NHS autism guidance.
- [ ] Verify Raising Children Network and Royal Children's Hospital Melbourne autism resources.
- [ ] Confirm that the reference set supports the page's non-diagnostic, regression, and assessment wording.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Dr. Murali's selection |
| --- | --- |
| Clinician approved as-is? | Yes / No / Needs edits |
| Source verification complete? | Yes / No |
| Content edits required? | Yes / No |
| Metadata edits required? | Yes / No |
| Overlap/consolidation action needed? | Yes / No / Later |
| Can be marked reviewed later? | Yes / No / Not yet |

### 4.2 Autism: Early Signs Parents May Notice

- **File path:** `html-conditions/autism-early-signs-parent-guide.html`
- **Current metadata title:** Autism: Early Signs Parents May Notice
- **Current category:** Growth & Development
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-22
- **Existing references from metadata:** CDC autism spectrum disorder resources; American Academy of Pediatrics / HealthyChildren.org autism guidance; NICE autism recognition and referral guidance; NHS autism guidance; Raising Children Network autism resources; Indian Academy of Pediatrics developmental guidance.
- **Disclaimer present:** Yes
- **Sections to review based on existing page structure:** What parents should know; Signs parents may notice; What else can look similar?; Practical parent steps; Red flags / when to seek medical review; Important facts for parents; Medical disclaimer; References.
- **Existing red-flag / medical-review wording to check:** The page advises prompt medical or developmental review for loss of acquired skills; no response to sound or name; major communication or social-interaction concerns; self-injury; severe distress; feeding or sleep problems; seizures; developmental regression; or family safety concerns. It states that a web page or single checklist cannot diagnose autism.
- **Overlap or consistency concern:** This page is very close to the autism early-concerns page in structure and clinical wording. Their small reference-set differences also need review. Needs confirmation whether to retain distinct purposes, differentiate later, or consider later consolidation.

**Specific clinician-review questions**

- Are the listed signs accurate and sufficiently cautious across different ages and developmental presentations?
- Does the page avoid implying that listed signs diagnose autism?
- Are the assessment and early-support cues appropriate and not overly directive?
- Are the overlap explanations and red flags complete without creating a diagnostic checklist?
- Should the Indian Academy of Pediatrics reference, or any other source, also appear on the paired autism page?

**Source verification checklist**

- [ ] Verify the CDC autism and developmental resources used.
- [ ] Verify AAP / HealthyChildren.org autism guidance.
- [ ] Verify current NICE autism recognition and referral guidance.
- [ ] Verify NHS autism guidance.
- [ ] Verify Raising Children Network autism resources.
- [ ] Verify Indian Academy of Pediatrics developmental guidance.
- [ ] Compare source support and clinical meaning with the autism early-concerns page.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Dr. Murali's selection |
| --- | --- |
| Clinician approved as-is? | Yes / No / Needs edits |
| Source verification complete? | Yes / No |
| Content edits required? | Yes / No |
| Metadata edits required? | Yes / No |
| Overlap/consolidation action needed? | Yes / No / Later |
| Can be marked reviewed later? | Yes / No / Not yet |

### 4.3 Bedwetting

- **File path:** `html-conditions/bedwetting-parent-guide.html`
- **Current metadata title:** Redirect: Bedwetting / Nocturnal Enuresis - Parent Guide
- **Current category:** Growth & Development
- **Current status:** draft
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-13
- **Existing references from metadata:** Canonical reviewed Clinical Portal 2026 resource: Bedwetting / Nocturnal Enuresis - Parent Guide.
- **Disclaimer present:** Yes
- **Sections to review based on existing page structure:** Canonical resource; Medical disclaimer; References.
- **Existing red-flag / medical-review wording to check:** No standalone red-flag or clinical guidance section is present. The selected file is a redirect stub that says it is not a standalone medical guide and directs readers to the current reviewed resource.
- **Overlap or consistency concern:** The file redirects to `html-conditions/bedwetting-nocturnal-enuresis-parent-guide.html`, whose current metadata is `published`, `reviewed`, and last reviewed 2026-05-28. Needs confirmation whether the redirect stub should remain pending, receive any later metadata action, or be handled only through a separate governance/cleanup decision.

**Specific clinician-review questions**

- Is the redirect target the correct and clinically complete canonical bedwetting resource?
- Is the redirect stub's disclaimer sufficient for an older URL with no standalone guidance?
- Should the selected redirect file be treated as a clinical-review target, a metadata/governance target, or excluded from status change?
- Does any useful or distinct older bedwetting content remain to compare? The current selected file contains only redirect information.
- Is any future redirect, consolidation, or metadata action appropriate? Needs confirmation in a later PR.

**Source verification checklist**

- [ ] Confirm the canonical target is `bedwetting-nocturnal-enuresis-parent-guide.html`.
- [ ] Confirm the canonical target remains clinician reviewed and is the intended parent guide.
- [ ] Verify that the selected redirect stub contains no standalone medical claims requiring separate source verification.
- [ ] Confirm whether a canonical-resource reference alone is sufficient for this redirect stub.
- [ ] Record any approved future governance or metadata action separately.

**Decision box**

| Decision | Dr. Murali's selection |
| --- | --- |
| Clinician approved as-is? | Yes / No / Needs edits |
| Source verification complete? | Yes / No |
| Content edits required? | Yes / No |
| Metadata edits required? | Yes / No |
| Overlap/consolidation action needed? | Yes / No / Later |
| Can be marked reviewed later? | Yes / No / Not yet |

### 4.4 Puberty and Normal Growth Changes - Parent Guide

- **File path:** `html-conditions/puberty-and-normal-growth-changes-parent-guide.html`
- **Current metadata title:** Puberty and Normal Growth Changes - Parent Guide
- **Current category:** Growth & Development
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-24
- **Existing references from metadata:** American Academy of Pediatrics / HealthyChildren.org puberty guidance; Royal Children's Hospital Melbourne Kids Health Info puberty resources; Raising Children Network puberty resources; NHS puberty guidance; World Health Organization adolescent health resources.
- **Disclaimer present:** Yes
- **Sections to review based on existing page structure:** What parents should know; Practical home support; When changes may need review; Red flags / when to seek urgent help; Important facts for parents; Medical disclaimer; References.
- **Existing red-flag / medical-review wording to check:** The page suggests review for puberty much earlier or later than peers, very rapid changes, growth concerns, severe acne, heavy or painful periods, major distress, headache with vision changes, fainting, severe tiredness, weight loss, or other parental concern. It advises urgent help for sexual abuse concern, coercion, unsafe contact, self-harm talk, immediate danger, severe headache with vision problems, collapse, severe bleeding, severe abdominal pain, severe body-change distress, eating concerns, bullying, or family safety concerns.
- **Overlap or consistency concern:** Considerable overlap exists with `puberty-parent-guide.html`, including common changes, respectful communication, privacy, timing concerns, and safeguarding. Needs confirmation whether the broader normal-growth focus and early/late focus are sufficiently distinct.

**Specific clinician-review questions**

- Is the general "much earlier or much later than peers" wording safe without fixed thresholds?
- Are severe bleeding, severe abdominal pain, headache/vision changes, collapse, weight loss, and growth concerns appropriately framed?
- Are safeguarding, consent, personal safety, self-harm, eating concerns, bullying, and family safety cues appropriate for this parent guide?
- Does the page remain general education without becoming a puberty staging or diagnostic guide?
- Should this page and the early/late changes page remain separate, be more clearly differentiated, or be considered for later consolidation?

**Source verification checklist**

- [ ] Verify AAP / HealthyChildren.org puberty guidance.
- [ ] Verify Royal Children's Hospital Melbourne puberty resources.
- [ ] Verify Raising Children Network puberty resources.
- [ ] Verify NHS puberty guidance.
- [ ] Verify WHO adolescent health resources.
- [ ] Confirm source support for general timing, urgent symptom, menstrual, safeguarding, and mental-health wording.
- [ ] Compare source support and intended role with the puberty early/late changes page.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Dr. Murali's selection |
| --- | --- |
| Clinician approved as-is? | Yes / No / Needs edits |
| Source verification complete? | Yes / No |
| Content edits required? | Yes / No |
| Metadata edits required? | Yes / No |
| Overlap/consolidation action needed? | Yes / No / Later |
| Can be marked reviewed later? | Yes / No / Not yet |

### 4.5 Puberty: Early and Late Changes

- **File path:** `html-conditions/puberty-parent-guide.html`
- **Current metadata title:** Puberty: Early and Late Changes
- **Current category:** Growth & Development
- **Current status:** published
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-13
- **Existing references from metadata:** Indian Academy of Pediatrics parent guidance; Royal Children's Hospital Melbourne Kids Health Info parent fact sheets; American Academy of Pediatrics / HealthyChildren.org parent guidance; World Health Organization adolescent health, physical activity and sedentary behaviour resources.
- **Disclaimer present:** Yes
- **Sections to review based on existing page structure:** What parents should know; Common changes; What drives puberty?; Practical home support; Red flags / when to seek medical review; Important facts for parents; Medical disclaimer; References.
- **Existing red-flag / medical-review wording to check:** The page advises medical review for very early puberty concern, delayed puberty concern, very rapid progression, severe headache, vision problems, growth failure, fainting, severe anaemia symptoms, other worrying symptoms, safeguarding concern, sexual abuse concern, or severe distress about body changes.
- **Overlap or consistency concern:** This page overlaps substantially with the normal-growth puberty page. The visible footer says "Status: draft, pending clinician review" while metadata says `status: published`; this is a metadata/content consistency issue that needs confirmation in a later approved task, not a change in this pack.

**Specific clinician-review questions**

- Is the wording about very early, delayed, and rapidly progressing puberty sufficiently clear and conservative without thresholds?
- Is the explanation of hormonal activation and possible influences accurate and appropriately general?
- Are growth failure, severe anaemia symptoms, headache, vision problems, fainting, safeguarding, sexual abuse, and severe distress appropriate review cues?
- Is the disclaimer strong enough for a page discussing potentially endocrine or brain-related conditions?
- Is this page clinically distinct enough from the normal-growth puberty page to retain separately?

**Source verification checklist**

- [ ] Verify the relevant Indian Academy of Pediatrics parent guidance.
- [ ] Verify Royal Children's Hospital Melbourne puberty or adolescent resources represented by the broad metadata reference.
- [ ] Verify AAP / HealthyChildren.org puberty guidance represented by the broad metadata reference.
- [ ] Verify WHO adolescent health resources and confirm whether physical activity/sedentary behaviour sources support this page.
- [ ] Confirm source support for early, delayed, rapid-progression, neurological, growth, anaemia, and safeguarding wording.
- [ ] Compare the references and intended role with the normal-growth puberty page.
- [ ] Record source versions or access dates if later edits are requested.

**Decision box**

| Decision | Dr. Murali's selection |
| --- | --- |
| Clinician approved as-is? | Yes / No / Needs edits |
| Source verification complete? | Yes / No |
| Content edits required? | Yes / No |
| Metadata edits required? | Yes / No |
| Overlap/consolidation action needed? | Yes / No / Later |
| Can be marked reviewed later? | Yes / No / Not yet |

### 4.6 Temper Tantrums in Young Children

- **File path:** `html-conditions/temper-tantrums-parent-guide.html`
- **Current metadata title:** Redirect: Temper Tantrums and Behaviour Regulation - Parent Guide
- **Current category:** Growth & Development
- **Current status:** draft
- **Current medical_review_status:** pending-clinician-review
- **Current last_reviewed:** 2026-05-22
- **Existing references from metadata:** Canonical reviewed Clinical Portal 2026 resource: Temper Tantrums and Behaviour Regulation - Parent Guide.
- **Disclaimer present:** Yes
- **Sections to review based on existing page structure:** Canonical resource; Medical disclaimer; References.
- **Existing red-flag / medical-review wording to check:** No standalone red-flag or behaviour-guidance section is present. The selected file is a redirect stub that says it is not a standalone medical guide and directs readers to the current reviewed resource.
- **Overlap or consistency concern:** The file redirects to `html-conditions/temper-tantrums-and-behaviour-regulation-parent-guide.html`, whose current metadata is `published`, `reviewed`, and last reviewed 2026-05-28. Needs confirmation whether the redirect stub should remain pending, receive any later metadata action, or be handled only through a separate governance/cleanup decision.

**Specific clinician-review questions**

- Is the redirect target the correct and clinically complete canonical tantrums/behaviour-regulation resource?
- Is the redirect stub's disclaimer sufficient for an older URL with no standalone guidance?
- Should the selected redirect file be treated as a clinical-review target, a metadata/governance target, or excluded from status change?
- Does any useful or distinct older tantrum content remain to compare? The current selected file contains only redirect information.
- Is any future redirect, consolidation, or metadata action appropriate? Needs confirmation in a later PR.

**Source verification checklist**

- [ ] Confirm the canonical target is `temper-tantrums-and-behaviour-regulation-parent-guide.html`.
- [ ] Confirm the canonical target remains clinician reviewed and is the intended parent guide.
- [ ] Verify that the selected redirect stub contains no standalone medical claims requiring separate source verification.
- [ ] Confirm whether a canonical-resource reference alone is sufficient for this redirect stub.
- [ ] Record any approved future governance or metadata action separately.

**Decision box**

| Decision | Dr. Murali's selection |
| --- | --- |
| Clinician approved as-is? | Yes / No / Needs edits |
| Source verification complete? | Yes / No |
| Content edits required? | Yes / No |
| Metadata edits required? | Yes / No |
| Overlap/consolidation action needed? | Yes / No / Later |
| Can be marked reviewed later? | Yes / No / Not yet |

## 5. Common Clinician Review Questions

- Is the page safe for parent education?
- Does it avoid diagnosis and treatment algorithms?
- Does it avoid medicine names, doses, dose intervals, maximum doses, and patient-specific advice?
- Are red flags or review cues sufficiently clear without overclaiming?
- Are references adequate and current enough?
- Is the disclaimer strong enough?
- Should any overlap or duplicate issue be fixed in a later PR?
- Should any category, reference, or title issue be fixed in a later PR?

## 6. Explicitly Out of Scope

- Vaccination and catch-up vaccination.
- Medication and dosing.
- Emergency and first-aid.
- Typhoid.
- Osteomyelitis.
- Serious infection pages.
- Urgent-recognition pages.
- High-caution newborn pages.
- Mental-health crisis, safeguarding, or immediate-safety pages as separate review targets.
- Any page requiring current guideline schedule verification.
- Any page with drug doses, dose intervals, maximum doses, treatment algorithms, contraindication algorithms, or patient-specific action rules.
- Editing any selected resource HTML or medical content.
- Changing metadata, references, categories, titles, URLs, status, `medical_review_status`, or `last_reviewed`.
- Approving, publishing, finalizing, consolidating, retiring, redirecting, or deleting any resource.
- Marking any Batch 4 page reviewed.

## 7. Final Sign-Off

| Resource | Reviewed by Dr. Murali | Review date | Source verification complete | Content edits needed | Metadata edits needed | Overlap/consolidation action needed | Approved for future reviewed status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Autism Early Concerns - Parent Awareness Guide | Yes | 2026-06-05 | Yes | No | No | No immediate action | Yes | Clinician reviewed and approved. |
| Autism: Early Signs Parents May Notice | Yes | 2026-06-05 | Yes | No | No | No immediate action | Yes | Clinician reviewed and approved. |
| Bedwetting (`bedwetting-parent-guide.html` redirect stub) | Yes | 2026-06-05 | Yes | No | No | Redirect stub retained | Reviewed redirect stub; keep out of public duplicate index if status remains draft | Clinician reviewed and approved as a redirect stub, not as standalone medical content. |
| Puberty and Normal Growth Changes - Parent Guide | Yes | 2026-06-05 | Yes | No | No | No immediate action | Yes | Clinician reviewed and approved. |
| Puberty: Early and Late Changes | Yes | 2026-06-05 | Yes | No | No | No immediate action | Yes | Clinician reviewed and approved. |
| Temper Tantrums in Young Children (`temper-tantrums-parent-guide.html` redirect stub) | Yes | 2026-06-05 | Yes | No | No | Redirect stub retained | Reviewed redirect stub; keep out of public duplicate index if status remains draft | Clinician reviewed and approved as a redirect stub, not as standalone medical content. |

## 8. Next Step

After Dr. Murali completes manual review, create a separate follow-up PR for approved content, metadata, or overlap edits only. Any redirect, consolidation, retirement, or duplicate-handling decision must also be separately approved and implemented.

Only after clinician review and source verification are complete, and any approved edits have been handled, should any selected resource be considered for a later reviewed-status change.
