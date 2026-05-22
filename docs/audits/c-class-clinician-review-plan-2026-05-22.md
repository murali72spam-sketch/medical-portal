# C-Class Clinician Review Plan - 2026-05-22

## Purpose

This document is a clinician-review planning document for C-class parent education pages in Clinical Portal 2026. It does not change clinical content, does not validate any medical advice, and must not be treated as approval for publication or distribution.

The purpose is to help Dr. Murali manually review higher-risk topics in a controlled way before any separate page-specific cleanup branch is created. No dosages, vaccine schedules, diagnostic criteria, contraindications, emergency protocols, treatment algorithms, medication advice, or references are modified here.

## Summary table

| Page | Warning keyword(s) | Why it is C-class | Main clinical risk area | Recommended clinician-review priority | Suggested review action |
|---|---|---|---|---|---|
| `html-conditions/09-osteomyelitis-parent-guide.html` | `antibiotic` | Serious bacterial bone infection content mentions antibiotics and follow-up plans. | Serious infection recognition, urgency, antibiotic-treatment framing, follow-up safety. | High | Confirm red flags, urgency wording, antibiotic references, follow-up advice, disclaimer, and reference suitability. |
| `html-conditions/catch-up-vaccination-parent-guide.html` | `calculator`, `minimum interval` | Catch-up vaccination and minimum interval rules can become high-risk decision support if too specific. | Vaccine catch-up logic, record validation, minimum intervals, individualized eligibility. | High | Confirm the page remains general, avoids tables/algorithms, and directs families to clinician-calculated plans using current guidance. |
| `html-conditions/hpv-vaccine-parent-guide.html` | `dose` | HPV vaccine schedule and dose decisions depend on age and current guidance. | Adolescent vaccine eligibility, schedule wording, allergy/reaction review, consent-sensitive communication. | Medium | Confirm schedule language is intentionally non-specific and references current accepted guidance without giving a fixed regimen. |
| `html-conditions/hypothyroidism-in-children.html` | `dosing`, `levothyroxine` | Thyroid replacement is drug-specific and high-risk if dosing or monitoring is implied incorrectly. | Diagnosis, newborn screening follow-up, levothyroxine safety, monitoring and growth review. | High | Confirm treatment safety wording, red flags, monitoring language, and absence of dosing or lab interpretation algorithms. |
| `html-conditions/typhoid-fever.html` | `antibiotic` | Typhoid antibiotic choice is resistance-dependent and requires clinical judgment. | Prolonged fever assessment, testing, antibiotic stewardship, relapse/resistance, urgent red flags. | High | Confirm antibiotic-stewardship wording, red flags, testing language, public-health prevention advice, and references. |
| `html-conditions/vaccination-faq-for-parents.html` | `dose`, `calculator`, `steroid` | Discusses missed doses, catch-up planning, vaccine safety, and immunosuppression-related disclosure. | Vaccine schedule boundaries, catch-up safety, adverse reactions, immunosuppression, parent-facing FAQ wording. | High | Confirm FAQ remains non-prescriptive, avoids schedule/catch-up logic, and handles severe reaction and immunosuppression warnings safely. |
| `html-conditions/vaccination-in-children-with-asthma-allergy.html` | `emergency treatment`, `schedule table` | Previous severe vaccine reactions and asthma/allergy vaccine planning require individualized review. | Allergy history, anaphylaxis-like symptoms, asthma control, influenza vaccine discussion, emergency history. | High | Confirm serious allergy language, asthma-control wording, vaccine deferral language, and absence of schedule tables or emergency protocols. |
| `html-conditions/vaccination-in-special-medical-conditions.html` | `steroid` | Immunosuppression and special medical conditions can change vaccine eligibility and timing. | Immunocompromise, live vaccines, chronic illness, steroids/biologics, specialist coordination. | High | Confirm specialist-review language, live-vaccine caution, timing around medicines/procedures, and no eligibility algorithm is provided. |

## Page-by-page review checklist

### 1. `html-conditions/09-osteomyelitis-parent-guide.html`

- What the page currently discusses at a high level: Parent education on osteomyelitis as a bone infection, symptoms such as limb pain/limp/fever, urgent review, home safety while seeking care, red flags, antibiotics in general terms, follow-up, disclaimer, and a parent-facing reference.
- What must be checked by clinician: Whether red flags are complete and appropriately urgent; whether "usually needs antibiotics" and "follow antibiotic and follow-up plans" are clinically safe; whether home-management wording avoids false reassurance; whether reference choice is adequate for Indian clinic education.
- What should NOT be added unless fully verified: Antibiotic names, doses, duration, route, admission criteria, imaging/lab algorithms, surgical indications, outpatient treatment criteria, or specific return-to-school/activity advice.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review until Dr. Murali signs off.
- Suggested next action: Dr. Murali should review infection severity, antibiotic stewardship, and urgent-care thresholds first.

### 2. `html-conditions/catch-up-vaccination-parent-guide.html`

- What the page currently discusses at a high level: Parent education on missed vaccines, vaccine record review, previous valid doses, minimum intervals, individualized catch-up planning, and the reason parents should not calculate catch-up plans themselves.
- What must be checked by clinician: Whether wording matches current IAP/ACVIP or other accepted guidance; whether "do not restart" language is safe; whether the clinician-only catch-up framing is strong enough; whether references are current and named appropriately.
- What should NOT be added unless fully verified: Catch-up tables, minimum interval charts, dose counts, age cutoffs, grace periods, vaccine product substitutions, contraindication lists, or online-calculator style logic.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review.
- Suggested next action: Dr. Murali should verify that all catch-up statements are deliberately general and that the page cannot be mistaken for a decision tool.

### 3. `html-conditions/hpv-vaccine-parent-guide.html`

- What the page currently discusses at a high level: Parent education on HPV vaccination for adolescents, cancer prevention, family discussion, respectful communication, severe reaction history, fainting tendency, and the absence of a fixed schedule.
- What must be checked by clinician: Whether current Indian guidance is represented safely; whether age and dose schedule language is sufficiently non-specific; whether allergy and reaction warnings are accurate; whether communication remains parent-facing and non-stigmatizing.
- What should NOT be added unless fully verified: Fixed age bands, dose numbers, intervals, product-specific recommendations, contraindication lists, pregnancy guidance, consent/legal rules, or claims about protection percentages.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review.
- Suggested next action: Dr. Murali should confirm HPV schedule-boundary language and decide whether any reference wording needs updating on a separate branch.

### 4. `html-conditions/hypothyroidism-in-children.html`

- What the page currently discusses at a high level: Parent education on congenital and acquired hypothyroidism, symptoms, growth/development impact, newborn screening awareness, follow-up, treatment safety, red flags, disclaimer, and endocrine references.
- What must be checked by clinician: Whether symptom and red-flag wording is accurate by age group; whether newborn screening follow-up is appropriately urgent; whether treatment-monitoring language is safe; whether the page clearly avoids levothyroxine dosing and lab interpretation.
- What should NOT be added unless fully verified: Levothyroxine dose ranges, monitoring intervals, TSH/free T4 targets, diagnostic thresholds, newborn-screening algorithms, dose-adjustment rules, or advice to start/stop medicine.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review.
- Suggested next action: Dr. Murali should review newborn and medication-safety wording before any wording cleanup.

### 5. `html-conditions/typhoid-fever.html`

- What the page currently discusses at a high level: Parent education on typhoid fever, prolonged fever, abdominal symptoms, spread through contaminated food/water, testing, antibiotic stewardship, home care while arranging review, red flags, prevention, disclaimer, and references.
- What must be checked by clinician: Whether fever-duration wording is safe; whether antibiotic-resistance and "do not self-start antibiotics" language is accurate; whether red flags cover severe disease and dehydration; whether testing and public-health references are current.
- What should NOT be added unless fully verified: Antibiotic names, doses, duration, resistance-based treatment choices, culture/Widal interpretation algorithms, admission criteria, relapse management, or vaccine schedules.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review.
- Suggested next action: Dr. Murali should prioritize antibiotic and red-flag wording because typhoid treatment is resistance-dependent.

### 6. `html-conditions/vaccination-faq-for-parents.html`

- What the page currently discusses at a high level: Parent FAQ on vaccine safety, missed/delayed doses, mild illness, multiple vaccines, combination vaccines, side effects, urgent post-vaccine symptoms, vaccine records, myths, safety notes, disclaimer, and references.
- What must be checked by clinician: Whether FAQ answers remain general; whether missed-dose and "do not restart" wording is safe; whether severe reaction and urgent-care language is correct; whether steroid/immunosuppression disclosure is sufficiently clear; whether references remain current.
- What should NOT be added unless fully verified: Full vaccine schedules, catch-up calculators, dose intervals, fever-medication dosing, adverse-event management protocols, eligibility algorithms, or immunosuppression-specific vaccine rules.
- Draft/pending-clinician-review status: Should remain pending clinician review. The page currently carries draft-facing visible language despite a published meta status, so status consistency should be reviewed separately without changing it in this planning task.
- Suggested next action: Dr. Murali should review the FAQ for any wording that could be mistaken as schedule advice or adverse-reaction triage.

### 7. `html-conditions/vaccination-in-children-with-asthma-allergy.html`

- What the page currently discusses at a high level: Parent education on vaccination in children with asthma, allergic rhinitis, eczema, food allergy, mild medicine allergy, serious vaccine allergy history, asthma control, visit planning, influenza discussion, individualized review, disclaimer, and references.
- What must be checked by clinician: Whether common allergy versus serious vaccine allergy is described accurately; whether emergency-treatment history is handled safely; whether asthma-control and acute-illness wording matches clinic practice; whether influenza wording avoids schedule advice.
- What should NOT be added unless fully verified: Emergency treatment steps, anaphylaxis protocols, vaccine component lists, influenza schedule tables, asthma medication changes, vaccine challenge/desensitization advice, or blanket contraindication rules.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review.
- Suggested next action: Dr. Murali should review severe reaction language and decide whether a separate allergy-specialist wording check is needed.

### 8. `html-conditions/vaccination-in-special-medical-conditions.html`

- What the page currently discusses at a high level: Parent education on individualized vaccination planning for children with chronic illness, immunocompromise, asplenia/splenic concerns, steroids or other immunosuppressive medicines, specialist treatments, live-vaccine caution, records to bring, disclaimer, and references.
- What must be checked by clinician: Whether the list of special conditions is appropriate; whether live-vaccine caution is accurate but not overbroad; whether timing around medicines/procedures is safely general; whether specialist coordination and documentation advice is adequate.
- What should NOT be added unless fully verified: Live-vaccine eligibility rules, steroid dose thresholds, biologic/chemotherapy/transplant timing tables, asplenia-specific vaccine schedules, contraindication algorithms, or disease-specific vaccine bundles.
- Draft/pending-clinician-review status: Should remain draft and pending clinician review.
- Suggested next action: Dr. Murali should review immunosuppression and live-vaccine wording first because this is the highest-risk decision area on the page.

## General safety rules for C-class pages

- Avoid doses unless verified from a named source.
- Avoid vaccine schedules, catch-up tables, or catch-up logic unless checked against current IAP/ACVIP or other accepted guidance.
- Avoid treatment algorithms unless formally reviewed.
- Keep parent-facing wording general, safety-oriented, and clinician-directed.
- Maintain the medical disclaimer, references, last-reviewed date, and pending-clinician-review status until manual sign-off is complete.
- Do not convert cautionary wording into instructions that parents can apply without clinical assessment.
- Do not add emergency protocols, contraindication algorithms, diagnostic thresholds, or medication adjustment rules during cleanup.

## Suggested next workflow

1. Dr. Murali manually reviews each C-class page clinically, starting with the High-priority items.
2. During review, mark any exact sentence that needs correction, deletion, or reference verification.
3. Only after manual clinical review, create a separate cleanup branch for page-specific wording updates.
4. Keep each high-risk correction small and reviewable, preferably one page or one clinical risk area at a time.
5. Re-run the normal resource validation only after page-specific cleanup is complete; do not silence validator warnings as part of this planning document.
