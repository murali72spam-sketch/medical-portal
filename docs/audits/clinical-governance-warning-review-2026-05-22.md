# Clinical Governance Warning Review - 2026-05-22

Audit-only review of the remaining validator clinical governance and vaccination safety warnings after the `medical_review_status` metadata cleanup.

Current branch: `audit/clinical-governance-warnings`

## Check Results

| Check | Result |
| --- | --- |
| `npm.cmd run build` | Passed. `data/conditions-index.json` regenerated with 116 resources. |
| `npm.cmd run validate:resources` | Passed with warnings. |
| Validator total errors | 0 |
| Validator total warnings | 34 |
| Clinical governance warnings | 31 |
| Vaccination safety warnings | 3 |
| `npm.cmd run qa:batch10 -- --reporter=list` | Passed: 7 tests passed. |

## Validator Trigger Logic

`tools/validate-resources.js` strips script, style, and HTML tags, normalizes whitespace, then scans each resource with whole-word, case-insensitive keyword matching.

Clinical governance warnings are triggered by these terms:

`mg`, `mcg`, `mL`, `dose`, `dosing`, `weight-based`, `calculator`, `antibiotic`, `steroid`, `prednisolone`, `salbutamol`, `adrenaline`, `epinephrine`, `levothyroxine`, `carbimazole`, `methimazole`, `insulin`, `contraindication`, `contraindicated`, `diagnostic criteria`, `emergency treatment`, `treatment algorithm`

Vaccination safety warnings only scan vaccination resources and are triggered by:

`6 weeks`, `10 weeks`, `14 weeks`, `9 months`, `15 months`, `16 months`, `18 months`, `catch-up table`, `schedule table`, `minimum interval`, `route`, `intramuscular`, `subcutaneous`, `needle`, `brand`, `product-specific`, `contraindication algorithm`, `IAP ACVIP 2023`, `ACVIP 2023`

Because the scan is keyword-based, terms inside safe disclaimers such as "does not provide antibiotic doses" still create warnings.

## Classification Key

| Code | Meaning |
| --- | --- |
| A | Acceptable safety mention - warning keyword appears in a safe parent-education context. |
| B | Needs wording clarification - wording could be safer or more clearly clinician-directed. |
| C | Needs clinician review - content involves drug, dose, vaccine schedule, emergency treatment, algorithm, or other high-risk clinical decision support. |
| D | Validator false positive / validator improvement candidate - warning is technically triggered but could be better handled by validator logic later. |

## Warning Review

| File | Warning type | Keyword(s) | Trigger context | Class | Recommended next action | Content change now? |
| --- | --- | --- | --- | --- | --- | --- |
| `html-conditions/03-middle-ear-infection-parent-guide.html` | Clinical governance | `antibiotic` | Metadata/lead mention "antibiotic caution"; disclaimer says no antibiotic names, doses, or ear-drop instructions. | A | Keep as safe parent education; validator could later ignore explicit "does not provide" disclaimers. | Deferred |
| `html-conditions/04-conjunctivitis-parent-guide.html` | Clinical governance | `antibiotic`, `steroid` | Advises that antibiotic drops are not always required and steroid drops should only be used when prescribed. | A | Keep safety framing; clinician can review during routine content pass. | Deferred |
| `html-conditions/05-tonsillitis-parent-guide.html` | Clinical governance | `antibiotic` | Metadata/lead mention "antibiotic caution"; disclaimer says no antibiotic names, doses, or diagnostic scoring algorithm. | A | Keep as stewardship/safety wording; validator improvement could suppress negative disclaimers. | Deferred |
| `html-conditions/06-impetigo-parent-guide.html` | Clinical governance | `antibiotic`, `steroid` | Advises not to start leftover antibiotics and not to use steroid creams unless doctor advised; states treatment choices should be clinician-made. | A | Keep clinician-directed wording; no immediate rewrite. | Deferred |
| `html-conditions/07-meningitis-parent-guide.html` | Clinical governance | `antibiotic` | Disclaimer says no antibiotic names or doses and warns not to delay emergency care. | D | Consider future validator logic for negated/disclaimer-only drug mentions. | Deferred |
| `html-conditions/08-urinary-tract-infection-parent-guide.html` | Clinical governance | `antibiotic` | Disclaimer says no antibiotic names, antibiotic doses, or urine collection instructions. | D | Consider future validator logic for "does not provide" medication statements. | Deferred |
| `html-conditions/09-osteomyelitis-parent-guide.html` | Clinical governance | `antibiotic` | Body says osteomyelitis usually needs antibiotics and to follow antibiotic/follow-up plans. | C | Keep flagged for clinician review because this is serious infection treatment framing, even without names/doses. | Deferred |
| `html-conditions/15-whooping-cough-parent-guide.html` | Clinical governance | `antibiotic` | Disclaimer says no antibiotic names, antibiotic doses, cough-medicine doses, or vaccine schedule. | D | Validator could later ignore explicit absence-of-dosing disclaimers. | Deferred |
| `html-conditions/16-pneumonia-parent-guide.html` | Clinical governance | `antibiotic` | Disclaimer says no antibiotic names, antibiotic doses, cough-medicine doses, or diagnostic breathing-rate cutoffs. | D | Validator could later distinguish risk disclaimers from actionable treatment content. | Deferred |
| `html-conditions/19-ringworm-parent-guide.html` | Clinical governance | `steroid` | Warns parents to avoid steroid-mixed creams because they can worsen or mask fungal infection. | A | Keep as useful safety warning. | Deferred |
| `html-conditions/asthma-in-children.html` | Clinical governance | `dose` | Warns wrong medicine/wrong dose can be used at home; disclaimer says not to dose asthma medicines without doctor advice. | B | In next pass, clinician may tighten wording around home nebulizer/medicine risks while preserving safety warning. | Deferred |
| `html-conditions/bcg-scar-and-lump.html` | Clinical governance | `steroid` | Tells parents not to apply steroid creams without medical advice. | A | Keep safe avoidance advice. | Deferred |
| `html-conditions/catch-up-vaccination-parent-guide.html` | Clinical governance and vaccination safety | `calculator`, `minimum interval` | Says parents should not calculate catch-up plans; doctor reviews previous doses and minimum interval rules; disclaimer says not a calculator. | C | Keep flagged for clinician review because catch-up vaccination and interval rules are high-risk decision support. | Deferred |
| `html-conditions/child-travel-health.html` | Clinical governance | `antibiotic` | Warns antimalarial or antibiotic self-medication is unsafe unless specifically prescribed. | A | Keep parent safety warning. | Deferred |
| `html-conditions/childhood-overweight-and-obesity.html` | Clinical governance | `insulin` | Mentions insulin resistance as an associated concern. | A | Keep as non-prescriptive risk/context wording. | Deferred |
| `html-conditions/common-cold-in-children.html` | Clinical governance | `antibiotic` | Metadata/lead mention antibiotic cautions for a viral illness. | A | Keep stewardship framing; inspect body in future pass only if page needs general content polishing. | Deferred |
| `html-conditions/cough-in-children.html` | Clinical governance | `antibiotic` | Disclaimer says it does not provide antibiotic rules or treatment protocols. | D | Validator could later suppress disclaimer-only "does not provide" mentions. | Deferred |
| `html-conditions/delayed-puberty-in-children.html` | Clinical governance | `dosing` | States guide does not provide hormone treatment advice or dosing. | D | Validator could later suppress explicit non-dosing statements. | Deferred |
| `html-conditions/early-puberty-in-children.html` | Clinical governance | `dosing` | States guide does not provide treatment algorithms or hormone dosing. | D | Validator could later suppress explicit non-dosing statements. | Deferred |
| `html-conditions/fever-in-children.html` | Clinical governance | `dose` | Advises following label or doctor advice and using correct medicine/dose for current weight. | B | Consider clinician-directed wording review because parent dosing by weight is sensitive, even though no actual dose is given. | Deferred |
| `html-conditions/hpv-vaccine-parent-guide.html` | Clinical governance | `dose` | Says exact dose schedule depends on current guidance and age; also says no fixed age or dose schedule is provided. | C | Keep flagged for clinician review because vaccine dose schedule decisions are high-risk and guidance-dependent. | Deferred |
| `html-conditions/hypothyroidism-in-children.html` | Clinical governance | `dosing`, `levothyroxine` | States guide does not include levothyroxine dosing or treatment schedules. | C | Keep clinician review flag because drug-specific thyroid replacement is high-risk, despite non-dosing wording. | Deferred |
| `html-conditions/red-flags-urgent-care.html` | Clinical governance | `treatment algorithm` | Explicitly says not to use the guide as a diagnosis checklist or treatment algorithm. | D | Strong validator improvement candidate: negative safety statement should not imply actionable algorithm content. | Deferred |
| `html-conditions/safe-food-water-and-deworming.html` | Clinical governance | `dose` | Description/body/disclaimer say no deworming dose schedule is provided. | D | Validator could later ignore "no dose schedule" phrasing in disclaimers. | Deferred |
| `html-conditions/short-stature-in-children.html` | Clinical governance | `steroid` | Mentions long-term steroid exposure as a relevant medical history risk factor. | A | Keep as history-taking context; no immediate content change. | Deferred |
| `html-conditions/travel-vaccination-for-children.html` | Vaccination safety | `route` | Mentions travel route in yellow fever certificate awareness, not vaccine administration route. | D | Validator should distinguish travel route from administration route. | Deferred |
| `html-conditions/typhoid-fever.html` | Clinical governance | `antibiotic` | Mentions inappropriate antibiotic use can cause relapse/resistance and antibiotic choice depends on local resistance and clinical judgement. | C | Keep flagged for clinician review because typhoid antibiotic choice is high-risk and resistance-dependent. | Deferred |
| `html-conditions/vaccination-faq-for-parents.html` | Clinical governance | `dose`, `calculator`, `steroid` | Discusses missed dose review, says not a schedule/catch-up calculator, and asks parents to tell doctor about long-term steroid/immunosuppressive medicines. | C | Keep flagged for clinician review because missed doses, catch-up planning, and immunosuppression affect vaccine safety. | Deferred |
| `html-conditions/vaccination-in-children-with-asthma-allergy.html` | Clinical governance and vaccination safety | `emergency treatment`, `schedule table` | Says emergency treatment after a vaccine must be discussed before further vaccination; says no influenza schedule table is provided. | C | Keep clinician review flag due previous severe reaction and vaccine planning risk. Validator can later suppress "does not provide a schedule table" separately. | Deferred |
| `html-conditions/vaccination-in-special-medical-conditions.html` | Clinical governance | `steroid` | Identifies steroid/immunosuppressive medicines as reasons for personalized vaccine planning. | C | Keep clinician review flag because immunosuppression changes vaccine eligibility and timing. | Deferred |
| `html-conditions/vaccination-records-and-missed-doses.html` | Clinical governance | `calculator` | Disclaimer says the guide is not a catch-up vaccination calculator or decision tool. | D | Validator could later ignore negative decision-tool disclaimers. | Deferred |
| `html-conditions/vaccine-side-effects-and-aftercare.html` | Clinical governance | `dosing` | Comfort advice says to follow doctor/medicine label; guide does not provide medication dosing. | B | Consider clinician wording review around fever/comfort medicine direction; no dosage content present. | Deferred |

## Files With Warnings

Unique files with warnings: 32

- `html-conditions/03-middle-ear-infection-parent-guide.html`
- `html-conditions/04-conjunctivitis-parent-guide.html`
- `html-conditions/05-tonsillitis-parent-guide.html`
- `html-conditions/06-impetigo-parent-guide.html`
- `html-conditions/07-meningitis-parent-guide.html`
- `html-conditions/08-urinary-tract-infection-parent-guide.html`
- `html-conditions/09-osteomyelitis-parent-guide.html`
- `html-conditions/15-whooping-cough-parent-guide.html`
- `html-conditions/16-pneumonia-parent-guide.html`
- `html-conditions/19-ringworm-parent-guide.html`
- `html-conditions/asthma-in-children.html`
- `html-conditions/bcg-scar-and-lump.html`
- `html-conditions/catch-up-vaccination-parent-guide.html`
- `html-conditions/child-travel-health.html`
- `html-conditions/childhood-overweight-and-obesity.html`
- `html-conditions/common-cold-in-children.html`
- `html-conditions/cough-in-children.html`
- `html-conditions/delayed-puberty-in-children.html`
- `html-conditions/early-puberty-in-children.html`
- `html-conditions/fever-in-children.html`
- `html-conditions/hpv-vaccine-parent-guide.html`
- `html-conditions/hypothyroidism-in-children.html`
- `html-conditions/red-flags-urgent-care.html`
- `html-conditions/safe-food-water-and-deworming.html`
- `html-conditions/short-stature-in-children.html`
- `html-conditions/travel-vaccination-for-children.html`
- `html-conditions/typhoid-fever.html`
- `html-conditions/vaccination-faq-for-parents.html`
- `html-conditions/vaccination-in-children-with-asthma-allergy.html`
- `html-conditions/vaccination-in-special-medical-conditions.html`
- `html-conditions/vaccination-records-and-missed-doses.html`
- `html-conditions/vaccine-side-effects-and-aftercare.html`

## Recommended Next Cleanup Pass

1. Prioritize clinician review for C-class pages:
   `09-osteomyelitis-parent-guide.html`, `catch-up-vaccination-parent-guide.html`, `hpv-vaccine-parent-guide.html`, `hypothyroidism-in-children.html`, `typhoid-fever.html`, `vaccination-faq-for-parents.html`, `vaccination-in-children-with-asthma-allergy.html`, and `vaccination-in-special-medical-conditions.html`.
2. Review B-class wording after clinician review:
   `asthma-in-children.html`, `fever-in-children.html`, and `vaccine-side-effects-and-aftercare.html`.
3. Leave A-class safety mentions in place unless a clinician wants style changes.
4. In a later validator improvement pass, add negation/disclaimer awareness for phrases such as "does not provide", "not a calculator", and "not a treatment algorithm"; also distinguish travel "route" from vaccine administration route.

No medical page content was changed during this audit.
