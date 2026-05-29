# Clinical Portal 2026 — Batch 4 Clinician Review Pack

## 1. Purpose

This Stage 2 review pack prepares Batch 4 candidate resources for Dr. Murali's manual clinician review. It summarizes existing repository content only, using the matching `html-conditions/` pages and `data/conditions-index.json` metadata.

This review pack does not change medical content, resource metadata, status, `medical_review_status`, `last_reviewed`, or reviewed state.

## 2. Safety Boundary

- Documentation-only pack.
- No HTML medical content was edited.
- No resource metadata was changed.
- No `status`, `medical_review_status`, or `last_reviewed` value was changed.
- No resource was marked as reviewed.
- `data/conditions-index.json` was not edited.
- Homepage, `script.js`, `style.css`, package files, tests, legal pages, and HTML pages are out of scope.
- Medical facts below are summarized only from existing candidate HTML files.
- Where matching, metadata, or clinical meaning is unclear, this pack uses "Needs clinician confirmation".

Out-of-scope topics for this batch: vaccination, catch-up vaccination, medication or dosing content, emergency or first-aid content, serious infection pages, urgent-recognition pages, high-caution newborn pages, treatment algorithms, diagnostic thresholds, drug names, doses, dose intervals, maximum doses, and current guideline schedule verification.

## 3. Batch 4 Candidate Summary Table

| Candidate | Matching file status | Current title | Current category | Current status | Current medical_review_status | Current last_reviewed | References | Disclaimer | Caution level |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hand Hygiene and Cough Etiquette | Found | Hand Hygiene and Cough Etiquette | Parent Education | published | pending-clinician-review | 2026-05-13 | Present | Present | low |
| Mosquito Bite Prevention | Found | Mosquito Bite Prevention | Parent Education | published | pending-clinician-review | 2026-05-13 | Present | Present | moderate-low |
| Screen Time and Digital Wellness | Found | Screen Time and Digital Wellness | Growth & Development | published | pending-clinician-review | 2026-05-13 | Present | Present | moderate-low |
| Positive Behaviour Guidance for Children | Found | Positive Behaviour Guidance for Children | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present | moderate-low |
| Developmental Milestones | Found | Developmental Milestones - Parent Guide | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present | moderate-low |
| Speech and Language Delay | Found | Speech and Language Delay - Parent Guide | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present | needs caution |
| Stuttering and Stammering | Found | Stuttering and Stammering | Growth & Development | published | pending-clinician-review | 2026-05-13 | Present | Present | moderate-low |
| Thumb Sucking and Common Childhood Habits | Found | Thumb Sucking and Common Childhood Habits | Growth & Development | published | pending-clinician-review | 2026-05-13 | Present | Present | low |

## 4. Resource-by-Resource Review Notes

### Hand Hygiene and Cough Etiquette

- File path: `html-conditions/hand-hygiene-and-cough-etiquette.html`
- Current title: Hand Hygiene and Cough Etiquette
- Current category: Parent Education
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-13
- References present: WHO community hand hygiene guidance; WHO Five Keys to Safer Food.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, testing, or treatment by a qualified healthcare professional.
- Main parent-facing sections: What are hand hygiene and cough etiquette; when to use extra hygiene precautions; practical home steps; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page directs care for illness with breathing difficulty, dehydration, persistent fever, severe lethargy, repeated vomiting, blood in stool, worsening symptoms, or symptoms in a baby or medically fragile child. Needs clinician confirmation for completeness and parent-friendly urgency level.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Are the illness red flags appropriately scoped for a prevention-focused hygiene page?
  - Is the wording around vomiting, diarrhoea, fever, cough, and medically fragile children clear without becoming treatment advice?
  - Are the references sufficient, or should local public-health references be considered in a separate task?
- Caution level: low.

### Mosquito Bite Prevention

- File path: `html-conditions/mosquito-bite-prevention.html`
- Current title: Mosquito Bite Prevention
- Current category: Parent Education
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-13
- References present: NCVBDC/MoHFW dengue prevention and vector control; WHO community prevention resources; MoHFW/NHM public health guidance.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, testing, or treatment by a qualified healthcare professional.
- Main parent-facing sections: Why mosquito prevention matters; common bite patterns; home prevention approach; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page directs urgent care for fever with severe headache, repeated vomiting, abdominal pain, bleeding, drowsiness, breathing difficulty, poor feeding, dehydration, or any fever in a child who looks very unwell. Needs clinician confirmation for dengue/malaria warning wording without moving into diagnosis or treatment.
- Medication/dosing safety concerns: No medication dosing identified. Existing content mentions age-appropriate repellents as advised; clinician should confirm the safety boundary for repellent wording.
- Specific clinician-review questions:
  - Are dengue, malaria, and general fever warning signs balanced and clear for parents?
  - Is "age-appropriate repellents as advised" safe enough without product names or dosing-style instructions?
  - Does the page avoid implying that bite timing alone can diagnose mosquito-borne illness?
- Caution level: moderate-low.

### Screen Time and Digital Wellness

- File path: `html-conditions/screen-time-parent-guide.html`
- Current title: Screen Time and Digital Wellness
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-13
- References present: Indian Academy of Pediatrics parent guidance; Royal Children's Hospital Melbourne Kids Health Info parent fact sheets; American Academy of Pediatrics / HealthyChildren.org parent guidance; World Health Organization adolescent health, physical activity and sedentary behaviour resources.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, examination, or individualized treatment.
- Main parent-facing sections: What parents should know; concerns parents may notice; what can drive overuse; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags sudden behaviour change, severe anxiety, severe withdrawal, self-harm talk, suicidal thoughts, online exploitation or bullying, sleep loss for many nights, and inability to stop gaming or screen use despite clear harm. Needs clinician confirmation for mental-health urgency wording.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Is the age-related screen exposure wording appropriate and not overly rigid?
  - Are self-harm, suicidal thoughts, exploitation, bullying, gaming, and sleep red flags worded safely for parents?
  - Does the page sufficiently separate family media planning from diagnosis of behavioural or mental-health conditions?
- Caution level: moderate-low.

### Positive Behaviour Guidance for Children

- File path: `html-conditions/positive-behaviour-guidance-parent-guide.html`
- Current title: Positive Behaviour Guidance for Children
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: American Academy of Pediatrics / HealthyChildren.org discipline and behaviour guidance; Raising Children Network positive behaviour resources; NHS child behaviour guidance; World Health Organization parenting and nurturing care resources; Indian Academy of Pediatrics parent guidance.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, developmental assessment, mental-health assessment, school assessment, or individualized treatment.
- Main parent-facing sections: What parents should know; helpful building blocks; practical home support; what to avoid; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags self-harm talk, aggression causing injury, running away, severe withdrawal, immediate safety concerns, regression, language delay, learning difficulty, sleep problems, bullying, trauma, abuse concern, developmental concerns, and major impairment at home, school, or with peers. Needs clinician confirmation for safeguarding and mental-health wording.
- Medication/dosing safety concerns: None identified from existing content. Existing content explicitly states it does not provide a behavioural-therapy protocol or medication advice.
- Specific clinician-review questions:
  - Are safety, safeguarding, regression, developmental, school, and mental-health red flags complete and appropriately prioritized?
  - Is the advice on consequences, praise, routines, and avoiding harsh punishment clinically appropriate for parent education?
  - Does the page avoid sounding like a formal behavioural therapy protocol?
- Caution level: moderate-low.

### Developmental Milestones

- File path: `html-conditions/developmental-milestones-parent-guide.html`
- Current title: Developmental Milestones - Parent Guide
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: CDC developmental milestones resources; American Academy of Pediatrics / HealthyChildren.org developmental guidance; Royal Children's Hospital Melbourne and Raising Children Network child development resources; World Health Organization early childhood development resources; Indian Academy of Pediatrics parent guidance.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, examination, developmental assessment, or individualized treatment.
- Main parent-facing sections: What parents should know; what parents may notice; what can affect development; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags loss of previously learned skills, persistent concerns about hearing, vision, feeding, growth, movement, seizures, social interaction, and strong parent/caregiver/teacher concern. Needs clinician confirmation for developmental delay and regression wording.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Are the developmental red flags broad enough without becoming diagnostic thresholds?
  - Is the wording around "do not wait" and seeking developmental review appropriately clear?
  - Does the page avoid implying that milestone variation rules out clinically important delay?
- Caution level: moderate-low.

### Speech and Language Delay

- File path: `html-conditions/speech-and-language-delay-parent-guide.html`
- Current title: Speech and Language Delay - Parent Guide
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: American Academy of Pediatrics / HealthyChildren.org speech and language guidance; CDC developmental milestones resources; Royal Children's Hospital Melbourne and Raising Children Network communication development resources; NHS speech and language delay guidance; Indian Academy of Pediatrics parent guidance.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, hearing assessment, speech-language assessment, developmental assessment, diagnosis, or individualized treatment.
- Main parent-facing sections: What parents should know; what parents may notice; what can contribute; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags no response to sound, loss of words or social skills, poor eye contact, limited social response, feeding or swallowing concerns, global developmental delay, seizures, and strong parental concern. Needs clinician confirmation because this area overlaps hearing assessment, autism/developmental assessment, feeding/swallowing safety, and early intervention.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Are hearing, autism/developmental, feeding/swallowing, seizure, and regression red flags appropriately worded?
  - Is the distinction from stuttering clear enough?
  - Is the bilingual-language wording clinically appropriate and parent-friendly?
  - Does the page encourage assessment without adding diagnostic thresholds?
- Caution level: needs caution.

### Stuttering and Stammering

- File path: `html-conditions/stuttering-parent-guide.html`
- Current title: Stuttering and Stammering
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-13
- References present: Indian Academy of Pediatrics parent guidance; Royal Children's Hospital Melbourne Kids Health Info parent fact sheets; American Academy of Pediatrics / HealthyChildren.org parent guidance; World Health Organization adolescent health, physical activity and sedentary behaviour resources.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, examination, or individualized treatment.
- Main parent-facing sections: What parents should know; what parents may notice; what can contribute; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags stuttering that persists, worsens, causes significant distress, causes avoidance, teasing, school or social difficulty, strong family history, associated developmental concerns, or speech/language delay. Needs clinician confirmation for when speech-language review is advised.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Are persistence, worsening, distress, avoidance, teasing, school/social impact, family history, and associated delay red flags complete?
  - Is the wording around anxiety and stress clinically appropriate?
  - Does the page avoid blaming the child or parent while still encouraging timely review?
- Caution level: moderate-low.

### Thumb Sucking and Common Childhood Habits

- File path: `html-conditions/thumb-sucking-parent-guide.html`
- Current title: Thumb Sucking and Common Childhood Habits
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-13
- References present: Indian Academy of Pediatrics parent guidance; Royal Children's Hospital Melbourne Kids Health Info parent fact sheets; American Academy of Pediatrics / HealthyChildren.org parent guidance; World Health Organization adolescent health, physical activity and sedentary behaviour resources.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, examination, or individualized treatment.
- Main parent-facing sections: What parents should know; what parents may notice; what can contribute; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags bleeding, infection, dental changes, hair loss, pain, self-injury, major distress, bullying, school impact, sleep problems, or family conflict around the habit. Needs clinician confirmation for dental and behavioural review wording.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Are dental concern, self-injury, infection, distress, bullying, sleep, and school-impact red flags clear enough?
  - Is the gentle-support wording appropriate and not dismissive of harmful or persistent habits?
  - Are the references adequate for thumb sucking and habit-specific review, or should more specific references be considered in a later task?
- Caution level: low.

## 5. Not Found / Needs Confirmation

- No selected Batch 4 resource was missing from `html-conditions/`.
- Screen Time and Digital Wellness: Exact selected title matches `html-conditions/screen-time-parent-guide.html`. A separate near-related page, `html-conditions/screen-time-and-behaviour-parent-guide.html`, also exists but was not selected because its title is different. Needs clinician confirmation only if the intended Batch 4 target was the newer behaviour-specific page.

## 6. Cross-Resource Review Questions

- Are all pages safe for parent education without adding diagnosis, treatment algorithms, medicine names, doses, dose intervals, or maximum doses?
- Are red flags complete, easy to understand, and not falsely reassuring?
- Do prevention-focused pages avoid treatment advice while still directing parents to timely medical review?
- Do development and behaviour pages clearly distinguish general parent support from assessment, diagnosis, therapy protocols, and mental-health care?
- Are urgent-safety phrases used consistently across behaviour, screen-time, developmental, and speech-language resources?
- Are references adequate for clinician review, or should any reference set be updated in a separate metadata/content task?
- Are any categories or duplicate/near-related pages worth reviewing later as a separate metadata cleanup task?

## 7. Items Explicitly Out of Scope

- Editing any HTML medical content.
- Editing `data/conditions-index.json` or any resource metadata.
- Changing `status`, `medical_review_status`, `last_reviewed`, featured flags, categories, slugs, titles, references, or URLs.
- Marking any resource as reviewed.
- Adding medication names, dosing, dose intervals, maximum doses, treatment algorithms, diagnostic thresholds, emergency protocols, or first-aid instructions.
- Reviewing vaccination, catch-up vaccination, medication or dosing content, emergency or first-aid content, serious infection pages, urgent-recognition pages, high-caution newborn pages, treatment algorithms, diagnostic thresholds, or current guideline schedules.

## 8. Next Step After This Review Pack

After Dr. Murali completes manual review, create a separate follow-up task for any approved changes. That later task should explicitly identify which pages are approved for editing, what content or metadata changes are allowed, and whether any resource may be marked reviewed.
