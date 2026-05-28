# Clinical Portal 2026 - Batch 3 Clinician Review Pack

## 1. Purpose

This Stage 2 review pack prepares Batch 3 candidate resources for Dr. Murali's manual clinician review. It summarizes existing page content and metadata only, so the clinician can decide what needs confirmation before any future resource is finalized.

This review pack does not change medical content, resource metadata, status, `medical_review_status`, `last_reviewed`, or reviewed state.

## 2. Safety Boundaries

- Documentation-only pack.
- No HTML medical content was edited.
- No resource metadata was changed.
- No `medical_review_status` value was changed.
- No resource was marked as reviewed.
- `data/conditions-index.json` was not edited.
- Homepage, `script.js`, `style.css`, package files, tests, and legal pages are out of scope.
- Medical facts below are summarized only from existing candidate HTML files.
- Where matching, metadata, or clinical meaning is unclear, this pack uses "Needs confirmation".

Out-of-scope topics for this batch: vaccination, catch-up vaccination, medication or dosing content, emergency or first-aid content, typhoid, osteomyelitis, serious infection pages, urgent-recognition pages, high-caution newborn pages, pages requiring current guideline schedule verification, and any page containing drug doses, dose intervals, maximum doses, or treatment algorithms.

## 3. Batch 3 Candidate Summary Table

| Candidate | Matching file status | Current title | Current category | Current status | Current medical_review_status | Current last_reviewed | References | Disclaimer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sleep Issues | Found | Sleep Problems in Children - Parent Guide | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present |
| Tantrums | Found, duplicate/near-duplicate needs confirmation | Temper Tantrums in Young Children; Temper Tantrums and Behaviour Regulation - Parent Guide | Growth & Development | published | pending-clinician-review | 2026-05-22; 2026-05-24 | Present | Present |
| Bedwetting | Found, duplicate/near-duplicate needs confirmation | Bedwetting; Bedwetting / Nocturnal Enuresis - Parent Guide | Growth & Development | published | pending-clinician-review | 2026-05-13; 2026-05-24 | Present | Present |
| Head Lice | Found | Head Lice and Nits in Children | Skin & Allergy | published | pending-clinician-review | 2026-05-21 | Present | Present |
| Molluscum Contagiosum | Found | Molluscum Contagiosum in Children | Skin & Allergy | published | pending-clinician-review | 2026-05-21 | Present | Present |
| Common Rashes | Not found | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation |
| Ringworm | Found | Ringworm / Tinea in Children | Fever & Infections | published | pending-clinician-review | 2026-05-20 | Present | Present |
| Hives | Found | Hives (Urticaria) in Children | Skin & Allergy | published | pending-clinician-review | 2026-05-21 | Present | Present |
| Hay Fever | Not found | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation | Needs confirmation |
| Conjunctivitis | Found | Conjunctivitis / Pink Eye in Children | Fever & Infections | published | pending-clinician-review | 2026-05-21 | Present | Present |

## 4. Resource-by-Resource Review Notes

### Sleep Issues

- File path: `html-conditions/sleep-problems-in-children-parent-guide.html`
- Current title: Sleep Problems in Children - Parent Guide
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: American Academy of Pediatrics / HealthyChildren.org sleep guidance; Royal Children's Hospital Melbourne Kids Health Info sleep resources; Raising Children Network sleep resources; NHS child sleep guidance; WHO physical activity, sedentary behaviour and sleep resources.
- Disclaimer present: Yes. The page states it is general education only and does not replace consultation, diagnosis, examination, sleep assessment, or individualized treatment.
- Sections needing clinician review: What parents should know; concerns parents may notice; what can contribute; practical home support; red flags / when to seek medical review; important facts for parents.
- Safety concerns from existing content: Loud snoring, breathing pauses, gasping, blue colour, possible seizures, unsafe daytime sleepiness, developmental concerns, severe anxiety, self-harm talk, injury risk, family safety concerns, and avoiding self-started sleep medicines or sedatives.
- Suggested clinician-review questions:
  - Are the sleep red flags complete and appropriately worded for parent use?
  - Is the page clear that it is not an infant safe-sleep guide?
  - Is the wording around screens, routines, caffeine, anxiety, respiratory issues, and sedatives clinically appropriate?

### Tantrums

- Candidate match: Needs confirmation because two near-duplicate files exist.
- File paths: `html-conditions/temper-tantrums-parent-guide.html`; `html-conditions/temper-tantrums-and-behaviour-regulation-parent-guide.html`
- Current titles: Temper Tantrums in Young Children; Temper Tantrums and Behaviour Regulation - Parent Guide
- Current category: Growth & Development
- Current status: published for both
- Current medical_review_status: pending-clinician-review for both
- Current last_reviewed dates: 2026-05-22; 2026-05-24
- References present: Both files include behaviour/tantrum references from HealthyChildren.org, Raising Children Network, RCH or similar parent resources, NHS, and either IAP or CDC developmental milestones resources.
- Disclaimer present: Yes in both files. Both state general education only and no replacement for medical consultation, diagnosis, developmental assessment, mental-health assessment, or individualized treatment.
- Sections needing clinician review: What parents should know; common triggers; practical home support; after the tantrum where present; red flags / when to seek medical review; important facts for parents.
- Safety concerns from existing content: Self-injury, injury to others, dangerous running away, property destruction, loss of skills, developmental/language/hearing concerns, poor social interaction, trauma, abuse, bullying, family safety concerns, severe impairment, and immediate safety concerns.
- Suggested clinician-review questions:
  - Which tantrum file should be treated as the Batch 3 review target?
  - Should the duplicate/near-duplicate page be merged, retired, or left as a separate resource in a later task?
  - Are the developmental, mental-health, safeguarding, and school impairment red flags sufficiently clear?

### Bedwetting

- Candidate match: Needs confirmation because two near-duplicate files exist.
- File paths: `html-conditions/bedwetting-parent-guide.html`; `html-conditions/bedwetting-nocturnal-enuresis-parent-guide.html`
- Current titles: Bedwetting; Bedwetting / Nocturnal Enuresis - Parent Guide
- Current category: Growth & Development
- Current status: published for both
- Current medical_review_status: pending-clinician-review for both
- Current last_reviewed dates: 2026-05-13; 2026-05-24
- References present: Both files have references. The newer nocturnal enuresis file includes RCH, NICE, NHS, HealthyChildren.org, and Raising Children Network bedwetting resources.
- Disclaimer present: Yes in both files. Both state general education only and no replacement for consultation, diagnosis, examination/urine testing/continence assessment, or individualized treatment.
- Sections needing clinician review: What parents should know; what parents may notice; what can contribute where present; practical home support; red flags / when to seek medical review; important facts for parents.
- Safety concerns from existing content: Pain passing urine, fever, blood in urine, recurrent UTI, new daytime symptoms, constipation with pain, excessive thirst, weight loss, tiredness, snoring with disturbed sleep, neurological symptoms, new-onset wetting after being dry, distress, bullying, and safeguarding concerns.
- Suggested clinician-review questions:
  - Which bedwetting file should be treated as the Batch 3 review target?
  - Is the newer nocturnal enuresis page preferred because it cites bedwetting-specific references?
  - Are red flags for UTI, diabetes, sleep-disordered breathing, constipation, neurological issues, and safeguarding sufficient?

### Head Lice

- File path: `html-conditions/12-head-lice-parent-guide.html`
- Current title: Head Lice and Nits in Children
- Current category: Skin & Allergy
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-21
- References present: RCH Kids Health Info; NHS; CDC; HealthyChildren.org.
- Disclaimer present: Yes. The page says it is parent education only and does not replace consultation, diagnosis, product selection, school advice, poison advice, or individualized advice; it does not provide product-specific doses or treatment schedules.
- Sections needing clinician review: What is it; symptoms and signs; how it spreads; home management; when to see a doctor; do's and don'ts; school and daycare guidance; red flags / urgent care advice.
- Safety concerns from existing content: Painful, swollen, oozing, crusted, or infected scalp; persistent lice despite careful treatment; eczema/scalp disease/product allergy; unsafe home remedies such as insect sprays, kerosene, harsh chemicals; severe product reaction; eye exposure; accidental swallowing.
- Suggested clinician-review questions:
  - Are product-safety warnings strong enough without naming products or schedules?
  - Is school/daycare guidance appropriately local-policy dependent?
  - Are poison/eye-exposure safety instructions clear enough without becoming first-aid content?

### Molluscum Contagiosum

- File path: `html-conditions/17-molluscum-parent-guide.html`
- Current title: Molluscum Contagiosum in Children
- Current category: Skin & Allergy
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-21
- References present: RCH Kids Health Info; NHS; CDC; American Academy of Dermatology.
- Disclaimer present: Yes. The page says it is parent education only and does not replace consultation, diagnosis, skin examination, treatment selection, school advice, or individualized advice; it does not provide procedure recommendations or medicine doses.
- Sections needing clinician review: What is it; symptoms and signs; how it spreads; home management; when to see a doctor; do's and don'ts; school and daycare guidance; red flags / urgent care advice.
- Safety concerns from existing content: Painful/hot/red/swollen/crusted/pus lesions, eye or eyelid involvement, widespread or rapidly increasing rash, eczema flare, weak immune system/chronic illness, unusual lesions, fever, child unwell, and harsh chemicals/wart acids/unverified remedies.
- Suggested clinician-review questions:
  - Is the self-limiting wording balanced with eye-area, eczema, and immune-suppression cautions?
  - Is school/swimming/contact-sport guidance sufficiently cautious without over-excluding children?
  - Are procedure/treatment boundaries clear enough?

### Ringworm

- File path: `html-conditions/19-ringworm-parent-guide.html`
- Current title: Ringworm / Tinea in Children
- Current category: Fever & Infections
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-20
- References present: RCH Kids Health Info; NHS; CDC fungal diseases; DermNet.
- Disclaimer present: Yes. The page says it is parent education only and does not replace consultation, diagnosis, scalp assessment, treatment selection, school advice, or individualized advice; it does not provide antifungal names or doses.
- Sections needing clinician review: What is it; symptoms and signs; how it spreads; home management; what to avoid; school and daycare guidance; important facts; red flags / when to seek medical care.
- Safety concerns from existing content: Scalp involvement, face/eye-area rash, widespread/recurrent/painful/uncertain rash, tender swelling, pus, fever, weak immune system, pet exposure, and steroid-mixed creams masking or worsening fungal infection.
- Suggested clinician-review questions:
  - Should the category remain Fever & Infections or move to Skin & Allergy in a later metadata task?
  - Are scalp tinea and steroid-mixed cream warnings sufficiently prominent?
  - Is pet/household spread advice clinically appropriate and not overextended?

### Hives

- File path: `html-conditions/11-hives-parent-guide.html`
- Current title: Hives (Urticaria) in Children
- Current category: Skin & Allergy
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-21
- References present: RCH Kids Health Info; NHS urticaria guidance; American Academy of Dermatology; HealthyChildren.org.
- Disclaimer present: Yes. The page says it is parent education only and does not replace consultation, diagnosis, allergy assessment, emergency care, treatment selection, or individualized advice; it does not provide medicine names or doses.
- Sections needing clinician review: What is it; symptoms and signs; common triggers and causes; home management; when to see a doctor; do's and don'ts; school and daycare guidance; red flags / urgent care advice.
- Safety concerns from existing content: Hives with breathing difficulty, wheeze, swelling of face/lips/tongue/throat, dizziness, fainting, collapse, confusion, repeated vomiting, severe abdominal pain, rapidly worsening symptoms after food/medicine/sting/allergen, fever, joint pain, bruising, purple marks, blisters, peeling, painful rash, and suspected medicine trigger.
- Suggested clinician-review questions:
  - Is anaphylaxis language clear enough while avoiding emergency protocol detail?
  - Are allergy trigger examples balanced with viral hives being common in children?
  - Is antihistamine wording appropriate without medicine names or doses?

### Conjunctivitis

- File path: `html-conditions/04-conjunctivitis-parent-guide.html`
- Current title: Conjunctivitis / Pink Eye in Children
- Current category: Fever & Infections
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-21
- References present: RCH Kids Health Info; NHS; HealthyChildren.org; CDC.
- Disclaimer present: Yes. The page says it is parent education only and does not replace consultation, eye examination, diagnosis, treatment selection, school advice, or individualized advice; it does not provide eye-drop names or doses, and steroid drops should only be used when specifically prescribed.
- Sections needing clinician review: What is it; symptoms and signs; common causes and spread; home management; what to avoid; school and daycare guidance; important facts; red flags / when to seek medical care.
- Safety concerns from existing content: Eye pain, light sensitivity, blurred/reduced vision, eye injury, chemical exposure, severe eye swelling, rash/blisters around eye, baby/newborn eye discharge, contact lens use, severe headache/vomiting, worsening symptoms, unverified eye remedies, leftover drops, and steroid eye drops without prescription.
- Suggested clinician-review questions:
  - Are red-eye danger signs sufficiently prominent for parents?
  - Is the antibiotic/steroid eye-drop wording clinically safe and clear?
  - Is the category Fever & Infections appropriate, or should allergic/irritant causes prompt a later metadata review?

## 5. Not Found / Needs Confirmation

- Common Rashes: No exact `html-conditions/` candidate file found by title search. Related rash-specific pages exist, but selecting a substitute would require confirmation.
- Hay Fever: No exact `html-conditions/` candidate file found by title search. "Allergic rhinitis" appears only in other contexts and does not identify a dedicated Hay Fever parent guide.
- Tantrums: Two candidate files found; primary review target needs confirmation.
- Bedwetting: Two candidate files found; primary review target needs confirmation.

## 6. Common Review Questions for Dr. Murali

- Is this page safe for parent education without adding diagnosis, treatment algorithms, medicine names, doses, dose intervals, or maximum doses?
- Are the red flags complete, easy to understand, and not falsely reassuring?
- Does the page clearly say when clinician review is needed?
- Does the page avoid out-of-scope emergency/first-aid instructions while still directing urgent care where needed?
- Are school/daycare statements appropriate as local-policy dependent guidance?
- Are references adequate for clinician review, or should any reference set be updated in a separate metadata/content task?
- Are duplicate/near-duplicate pages present, and which page should be reviewed first?

## 7. Items Explicitly Out of Scope for This Batch

- Editing any HTML medical content.
- Editing `data/conditions-index.json` or any resource metadata.
- Changing `status`, `medical_review_status`, `last_reviewed`, featured flags, categories, slugs, titles, references, or URLs.
- Marking any resource as reviewed.
- Adding medication names, dosing, dose intervals, maximum doses, treatment algorithms, emergency protocols, or first-aid instructions.
- Reviewing vaccination, catch-up vaccination, typhoid, osteomyelitis, serious infection, urgent-recognition, high-caution newborn, or guideline-schedule-verification pages.

## 8. Next Step After Clinician Review

After Dr. Murali completes manual review, create a separate follow-up task for any approved changes. That later task should explicitly identify which pages are approved for editing, what content or metadata changes are allowed, whether duplicate pages should be merged or retired, and whether any resource may be marked reviewed.
