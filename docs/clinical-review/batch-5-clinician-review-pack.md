# Clinical Portal 2026 — Batch 5 Clinician Review Pack

## 1. Purpose

This Stage 2 review pack prepares Batch 5 candidate resources for Dr. Murali's manual clinician review. It summarizes existing repository content only, using the matching `html-conditions/` pages and `data/conditions-index.json` metadata.

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

Out-of-scope topics for this batch: vaccination, catch-up vaccination, medication or dosing instructions, emergency or first-aid content, serious infection pages, urgent-recognition pages, high-caution newborn pages, treatment algorithms, diagnostic thresholds, drug names, doses, dose intervals, maximum doses, and current guideline schedule verification.

Extra caution for Batch 5: acne should avoid treatment schedules, medicine or product recommendations, scarring thresholds, and mental-health escalation pathways. Eczema should avoid steroid or medicine instructions, treatment plans, infection-recognition algorithms, and allergy workup guidance. Teen lifestyle pages should avoid eating-disorder, self-harm, safeguarding, substance-use, and crisis-management algorithms. Back pain and posture should avoid imaging advice, treatment plans, neurological triage algorithms, and diagnosis pathways. Flat feet and intoeing should avoid orthotic prescriptions, fixed referral thresholds, and intervention pathways.

## 3. Batch 5 Candidate Summary Table

| Candidate | Matching file status | Current title | Current category | Current status | Current medical_review_status | Current last_reviewed | References | Disclaimer | Caution level |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Acne in Teenagers | Found | Acne in Teenagers | Skin & Allergy | published | pending-clinician-review | 2026-05-22 | Present | Present | needs caution |
| Eczema (Atopic Dermatitis) | Found | Eczema (Atopic Dermatitis) | Skin & Allergy | published | pending-clinician-review | 2026-05-10 | Present | Present | needs caution |
| Physical Activity for Teenagers | Found | Physical Activity for Teenagers | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present | needs caution |
| Healthy Sleep Habits for Teenagers | Found | Healthy Sleep Habits for Teenagers | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present | needs caution |
| Supporting Independence in Teenagers | Found | Supporting Independence in Teenagers | Growth & Development | published | pending-clinician-review | 2026-05-22 | Present | Present | needs caution |
| Back Pain and Posture in Children | Found | Back Pain and Posture in Children | Growth & Development | published | pending-clinician-review | 2026-05-15 | Present | Present | needs caution |
| Flat Feet in Children | Found | Flat Feet in Children | Growth & Development | published | pending-clinician-review | 2026-05-15 | Present | Present | moderate-low |
| Intoeing / Feet Turning Inwards | Found | Intoeing / Feet Turning Inwards | Growth & Development | published | pending-clinician-review | 2026-05-15 | Present | Present | moderate-low |

## 4. Resource-by-Resource Review Notes

### Acne in Teenagers

- File path: `html-conditions/acne-in-teenagers-parent-guide.html`
- Current title: Acne in Teenagers
- Current category: Skin & Allergy
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: American Academy of Pediatrics / HealthyChildren.org acne guidance; NHS acne resources; Royal Children's Hospital Melbourne skin resources; American Academy of Dermatology acne resources.
- Disclaimer present: Yes. The page states it is general education only and does not replace medical consultation, diagnosis, skin examination, mental-health assessment, or individualized treatment by a qualified healthcare professional.
- Main parent-facing sections: What parents should know; what parents may notice; gentle skin-care basics; when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page directs review for painful deep lumps, widespread acne, early scarring, acne not improving with gentle skin care, acne worsening quickly, marked embarrassment, bullying, low mood, self-harm talk, or avoiding school and social activities. Needs clinician confirmation because this overlaps scarring, dermatology treatment timing, wellbeing, bullying, and immediate-safety wording.
- Medication/dosing safety concerns: Existing content says it does not prescribe acne medicines, advises speaking to the child's doctor before starting acne medicines, and advises against strong medicated creams, chemical peels, or harsh products without professional advice. No drug names, doses, dose intervals, or maximum doses were identified.
- Specific clinician-review questions:
  - Are the acne review triggers clear without creating treatment schedules, product recommendations, or fixed scarring thresholds?
  - Is the wording around embarrassment, bullying, low mood, self-harm talk, and school avoidance safe and parent-friendly without becoming a mental-health escalation pathway?
  - Does the gentle skin-care wording avoid implying that acne is caused by poor hygiene or that OTC products are required?
- Caution level: needs caution.

### Eczema (Atopic Dermatitis)

- File path: `html-conditions/18-eczema-parent-guide.html`
- Current title: Eczema (Atopic Dermatitis)
- Current category: Skin & Allergy
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-10
- References present: Royal Children's Hospital Melbourne Kids Health Info: Eczema (atopic dermatitis).
- Disclaimer present: Yes. The page states it is education only and does not replace a medical consultation, diagnosis, or treatment plan.
- Main parent-facing sections: What is eczema; symptoms and signs; causes; home management; red flags / when to seek help; important facts / myth correction.
- Red-flag / safety wording areas needing clinician review: Existing page flags severe itching, sleep disruption, fever or signs of skin infection, rapidly spreading rash, eye-area involvement, poor response to usual care, and breathing difficulty or swelling after foods or medicines. Needs clinician confirmation because this overlaps infection recognition, allergy warning language, and treatment-plan boundaries.
- Medication/dosing safety concerns: Existing content mentions prescribed anti-inflammatory creams during flares if the doctor advises them, but does not provide drug names, doses, dose intervals, or maximum doses. Needs clinician confirmation that this stays general and does not drift into steroid or medicine instructions.
- Specific clinician-review questions:
  - Are infection, eye-area, allergy, and poor-response warnings complete and appropriately prioritized?
  - Is the home-management wording safe without becoming a treatment plan or steroid instruction?
  - Are trigger and food/allergy references worded without implying an allergy workup pathway?
- Caution level: needs caution.

### Physical Activity for Teenagers

- File path: `html-conditions/physical-activity-for-teenagers-parent-guide.html`
- Current title: Physical Activity for Teenagers
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: World Health Organization physical activity and sedentary behaviour guidance; CDC physical activity resources; American Academy of Pediatrics / HealthyChildren.org activity guidance; ICMR-National Institute of Nutrition Dietary Guidelines for Indians 2024.
- Disclaimer present: Yes. The page states it does not replace medical consultation, fitness assessment, diagnosis, sports clearance, physiotherapy, mental-health assessment, or individualized treatment by a qualified professional.
- Main parent-facing sections: What parents should know; what helps teenagers stay active; practical parent support; when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags chest pain, fainting, severe breathlessness, palpitations, collapse during activity, repeated injuries, persistent pain, pressure to continue despite injury, compulsive exercise, rapid weight change, missed periods, severe distress, bullying, or self-harm talk. Needs clinician confirmation because this overlaps sports clearance, injury review, eating/body-image concerns, and mental-health safety boundaries.
- Medication/dosing safety concerns: No medication dosing identified. Existing page advises against sports supplements, energy drinks, and extreme training plans without professional advice.
- Specific clinician-review questions:
  - Are exertional chest pain, fainting, severe breathlessness, palpitations, and collapse warnings safe and clear without creating a sports-clearance algorithm?
  - Is the wording around compulsive exercise, rapid weight change, missed periods, bullying, and self-harm talk appropriately cautious without becoming an eating-disorder or crisis-management pathway?
  - Does the page avoid individualized fitness prescriptions for chronic illness, disability, injury, or very low fitness?
- Caution level: needs caution.

### Healthy Sleep Habits for Teenagers

- File path: `html-conditions/teen-sleep-habits-parent-guide.html`
- Current title: Healthy Sleep Habits for Teenagers
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: American Academy of Pediatrics / HealthyChildren.org sleep guidance; NHS sleep resources; Royal Children's Hospital Melbourne and Raising Children Network sleep resources; World Health Organization sleep, sedentary behaviour and activity resources.
- Disclaimer present: Yes. The page states it does not replace medical consultation, diagnosis, sleep assessment, mental-health assessment, or individualized treatment by a qualified healthcare professional.
- Main parent-facing sections: What parents should know; signs sleep may be affecting life; practical sleep habits; when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags severe daytime sleepiness, falling asleep in unsafe situations, major school impairment, loud snoring, breathing pauses, gasping, restless sleep, morning headaches, low mood, severe anxiety, self-harm talk, substance use, family safety concern, or immediate danger. Needs clinician confirmation because this overlaps sleep-disordered breathing, seizure or intoxication boundaries in the disclaimer, mental-health wording, substance use, and immediate-safety language.
- Medication/dosing safety concerns: Existing content says not to start melatonin, sedatives, or other sleep medicines without medical advice. No doses, dose intervals, or maximum doses were identified.
- Specific clinician-review questions:
  - Are breathing-related sleep warnings and severe sleepiness warnings clear without becoming a diagnostic or sleep-treatment pathway?
  - Is the wording around low mood, severe anxiety, self-harm talk, substance use, family safety concern, and immediate danger safe and appropriately scoped?
  - Is the melatonin/sedative caution sufficiently clear without providing medication instructions?
- Caution level: needs caution.

### Supporting Independence in Teenagers

- File path: `html-conditions/healthy-teen-independence-parent-guide.html`
- Current title: Supporting Independence in Teenagers
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-22
- References present: American Academy of Pediatrics / HealthyChildren.org adolescent development guidance; Raising Children Network teenage independence resources; World Health Organization adolescent health resources.
- Disclaimer present: Yes. The page states it does not replace medical consultation, mental-health assessment, family counselling, safeguarding assessment, legal advice, school advice, or individualized treatment by a qualified professional.
- Main parent-facing sections: What parents should know; helpful areas to practise; practical parent support; when to seek professional support; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags repeated running away, unsafe online contact, exploitation concern, substance use, violence, immediate danger, severe withdrawal, school refusal, self-harm talk, suicidal thoughts, major behaviour change, and family conflict that feels unsafe or impossible to manage. Needs clinician confirmation because this overlaps safeguarding, mental-health, substance-use, family-safety, legal, and school boundaries.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses.
- Specific clinician-review questions:
  - Are exploitation, unsafe online contact, running away, violence, substance use, and family-safety warnings appropriate for parent education without becoming a safeguarding algorithm?
  - Is the wording around self-harm talk, suicidal thoughts, withdrawal, school refusal, and major behaviour change safe without becoming a crisis-management pathway?
  - Does the page clearly separate general parenting support from counselling, legal advice, school policy advice, and mental-health treatment?
- Caution level: needs caution.

### Back Pain and Posture in Children

- File path: `html-conditions/back-pain-and-posture-parent-guide.html`
- Current title: Back Pain and Posture in Children
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-15
- References present: AAP HealthyChildren: back pain in children and teens; Royal Children's Hospital Melbourne Orthopaedics: back pain; NICE CKS back pain red flags.
- Disclaimer present: Yes. The page states it does not replace medical consultation, diagnosis, examination, or individualized treatment by a qualified healthcare professional.
- Main parent-facing sections: What parents should know; what parents may notice; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags back pain in a very young child, significant trauma, night pain, worsening pain, persistent pain, pain waking the child, fever, weight loss, child looking unwell, infection risk, weakness, numbness, walking difficulty, abnormal neurological signs, bladder or bowel symptoms, progressive spinal curvature, and severe pain. Needs clinician confirmation because this overlaps imaging/test decisions, neurological triage, systemic disease, trauma, and urgent review wording.
- Medication/dosing safety concerns: Existing content says to seek medical advice before repeated pain medicine use. No medicine names, doses, dose intervals, or maximum doses were identified.
- Specific clinician-review questions:
  - Are back-pain red flags complete and parent-friendly without becoming a neurological triage or diagnostic algorithm?
  - Is the imaging wording safe and sufficiently non-prescriptive?
  - Does the posture wording avoid falsely reassuring parents or blaming posture as the whole explanation?
- Caution level: needs caution.

### Flat Feet in Children

- File path: `html-conditions/flat-feet-parent-guide.html`
- Current title: Flat Feet in Children
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-15
- References present: NHS flat feet guidance; Royal Children's Hospital Melbourne orthopaedic guidance; NHS Greater Glasgow flat feet in children parent resources.
- Disclaimer present: Yes. The page states it does not replace medical consultation, diagnosis, examination, or individualized treatment by a qualified healthcare professional.
- Main parent-facing sections: What parents should know; what parents may notice; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags painful, rigid, worsening, weak, or numb feet; one foot being flat, newly changed, or clearly different; limp, difficulty walking, poor balance, reduced stamina, repeated falls, swelling, redness, warmth, severe tenderness, delayed developmental milestones, abnormal gait, or neurological concerns. Needs clinician confirmation for pain, stiffness, asymmetry, function, development, and neurological wording.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses. Existing content mentions insoles only generally and does not prescribe orthotics.
- Specific clinician-review questions:
  - Are painful, rigid, asymmetric, functional, developmental, and neurological warning signs clear without fixed referral thresholds?
  - Is the wording around special shoes and insoles safe without becoming orthotic prescribing advice?
  - Does the page avoid overmedicalising painless flexible flat feet while still prompting review when needed?
- Caution level: moderate-low.

### Intoeing / Feet Turning Inwards

- File path: `html-conditions/intoeing-parent-guide.html`
- Current title: Intoeing / Feet Turning Inwards
- Current category: Growth & Development
- Current status: published
- Current medical_review_status: pending-clinician-review
- Current last_reviewed date: 2026-05-15
- References present: Royal Children's Hospital Melbourne Orthopaedics: in-toeing; Royal Children's Hospital Melbourne Kids Health Info parent resources; NHS parent resources on intoeing.
- Disclaimer present: Yes. The page states it does not replace medical consultation, diagnosis, examination, or individualized treatment by a qualified healthcare professional.
- Main parent-facing sections: What parents should know; what parents may notice; practical home support; red flags / when to seek medical review; important facts for parents.
- Red-flag / safety wording areas needing clinician review: Existing page flags severe, one-sided, asymmetric, or worsening intoeing; pain, limp, refusal to walk, inability to bear weight, stiff foot that cannot be gently corrected, delayed milestones, frequent falls, weakness, numbness, other neurological signs, progressive deformity after early childhood, or abnormal gait concerns. Needs clinician confirmation because this overlaps developmental gait variation, neurological signs, orthopedic assessment, and intervention boundaries.
- Medication/dosing safety concerns: None identified from existing content. The page does not provide medicine names, doses, dose intervals, or maximum doses. Existing content advises avoiding braces, special shoes, or exercises unless recommended after assessment.
- Specific clinician-review questions:
  - Are pain, limp, refusal to walk, inability to bear weight, asymmetry, progression, developmental delay, and neurological warnings clear without creating a diagnostic pathway?
  - Is the wording around braces, special shoes, exercises, and surgery safe without becoming intervention guidance?
  - Does the page balance reassurance with appropriate review for asymmetric, worsening, painful, or developmentally concerning gait?
- Caution level: moderate-low.

## 5. Not Found / Needs Confirmation

- No selected Batch 5 resource was missing from `html-conditions/`.
- All eight selected Batch 5 resources had exact matching file paths from the Batch 5 plan.

## 6. Cross-Resource Review Questions

- Are all pages safe for parent education without adding diagnosis, treatment algorithms, medicine names, doses, dose intervals, or maximum doses?
- Are red flags complete, easy to understand, and not falsely reassuring?
- Do skin pages avoid medicine/product schedules, steroid instructions, treatment plans, infection-recognition algorithms, and allergy workup pathways?
- Do teen lifestyle pages keep self-harm, safeguarding, substance-use, eating/body-image, and immediate-safety language appropriately scoped without becoming crisis-management algorithms?
- Do musculoskeletal pages avoid diagnostic pathways, imaging advice, orthotic prescriptions, fixed referral thresholds, and intervention plans?
- Are medication-adjacent caution statements, such as acne medicines, anti-inflammatory creams, sleep medicines, pain medicines, supplements, and energy drinks, safe without dosing or prescribing advice?
- Are references adequate for clinician review, or should any reference set be updated in a separate metadata/content task?

## 7. Items Explicitly Out of Scope

- Editing any HTML medical content.
- Editing `data/conditions-index.json` or any resource metadata.
- Changing `status`, `medical_review_status`, `last_reviewed`, featured flags, categories, slugs, titles, references, or URLs.
- Marking any resource as reviewed.
- Adding medication names, dosing, dose intervals, maximum doses, treatment algorithms, diagnostic thresholds, emergency protocols, first-aid instructions, or current guideline schedule verification.
- Reviewing vaccination, catch-up vaccination, serious infection pages, urgent-recognition pages, high-caution newborn pages, emergency or first-aid content, treatment algorithms, diagnostic thresholds, or medication/dosing instructions.

## 8. Next Step After This Review Pack

After Dr. Murali completes manual review, create a separate follow-up task for any approved wording checklist or content changes. That later task should explicitly identify which pages are approved for editing, what content or metadata changes are allowed, and whether any resource may be marked reviewed.
