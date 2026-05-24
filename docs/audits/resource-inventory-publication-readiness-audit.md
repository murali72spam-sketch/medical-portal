# Resource Inventory Publication Readiness Audit - Clinical Portal 2026

Audit date: 2026-05-24

Scope: documentation-only inventory and publication-readiness review using `data/conditions-index.json`, `html-conditions` metadata, and the previous governance audit record. This audit does not edit medical content, resource metadata, application code, tests, package files, or generated index data.

## Source Reconciliation

| Source | Count |
| --- | ---: |
| `data/conditions-index.json` resources | 145 |
| `html-conditions/*.html` pages | 145 |

The index and HTML condition page count match at the time of audit.

## 1. Total Resource Count

Total resources: 145

## 2. Resource Count by Category

| Category | Count |
| --- | ---: |
| Fever & Infections | 25 |
| Gastrointestinal | 4 |
| Growth & Development | 47 |
| Nutrition & Feeding | 12 |
| Parent Education | 32 |
| Respiratory | 6 |
| Skin & Allergy | 5 |
| Vaccination | 14 |

## 3. Published vs Draft Count

| Status | Count |
| --- | ---: |
| published | 93 |
| draft | 52 |

## 4. `medical_review_status` Breakdown

| `medical_review_status` | Count |
| --- | ---: |
| reviewed | 1 |
| pending-clinician-review | 144 |

Publication-readiness implication: almost the whole library remains marked `pending-clinician-review`. Status `published` should not be interpreted as clinician-approved unless the review status is also updated by the appropriate clinical workflow.

## Category Gaps Snapshot

| Category | Total | Published | Draft | Missing hero metadata |
| --- | ---: | ---: | ---: | ---: |
| Fever & Infections | 25 | 15 | 10 | 10 |
| Gastrointestinal | 4 | 4 | 0 | 0 |
| Growth & Development | 47 | 38 | 9 | 47 |
| Nutrition & Feeding | 12 | 10 | 2 | 10 |
| Parent Education | 32 | 12 | 20 | 25 |
| Respiratory | 6 | 4 | 2 | 0 |
| Skin & Allergy | 5 | 5 | 0 | 1 |
| Vaccination | 14 | 5 | 9 | 13 |

## 5. Pages Missing `hero_image` Metadata

Pages missing `hero_image`: 106

| Page | Category | Status |
| --- | --- | --- |
| `html-conditions/covid-19-in-children.html` | Fever & Infections | draft |
| `html-conditions/diphtheria.html` | Fever & Infections | draft |
| `html-conditions/encephalitis-warning-signs.html` | Fever & Infections | draft |
| `html-conditions/infectious-mononucleosis.html` | Fever & Infections | published |
| `html-conditions/kawasaki-disease-mis-c-awareness-guide.html` | Fever & Infections | draft |
| `html-conditions/malaria.html` | Fever & Infections | draft |
| `html-conditions/09-osteomyelitis-parent-guide.html` | Fever & Infections | draft |
| `html-conditions/rickettsial-fever-scrub-typhus.html` | Fever & Infections | draft |
| `html-conditions/tuberculosis-parent-overview.html` | Fever & Infections | draft |
| `html-conditions/typhoid-fever.html` | Fever & Infections | draft |
| `html-conditions/adolescent-mental-health-warning-signs.html` | Growth & Development | published |
| `html-conditions/childhood-anxiety-parent-guide.html` | Growth & Development | published |
| `html-conditions/autism-early-concerns-parent-awareness-guide.html` | Growth & Development | published |
| `html-conditions/autism-early-signs-parent-guide.html` | Growth & Development | published |
| `html-conditions/back-pain-and-posture-parent-guide.html` | Growth & Development | published |
| `html-conditions/bedwetting-parent-guide.html` | Growth & Development | published |
| `html-conditions/bedwetting-nocturnal-enuresis-parent-guide.html` | Growth & Development | published |
| `html-conditions/teen-body-image-parent-guide.html` | Growth & Development | published |
| `html-conditions/bullying-and-cyberbullying-parent-guide.html` | Growth & Development | published |
| `html-conditions/clubfoot-parent-guide.html` | Growth & Development | published |
| `html-conditions/daytime-wetting-parent-guide.html` | Growth & Development | published |
| `html-conditions/delayed-puberty-in-children.html` | Growth & Development | draft |
| `html-conditions/developmental-dysplasia-of-hip-parent-guide.html` | Growth & Development | published |
| `html-conditions/developmental-milestones-parent-guide.html` | Growth & Development | published |
| `html-conditions/early-puberty-in-children.html` | Growth & Development | draft |
| `html-conditions/exam-stress-parent-guide.html` | Growth & Development | published |
| `html-conditions/flat-feet-parent-guide.html` | Growth & Development | published |
| `html-conditions/growing-pains-parent-guide.html` | Growth & Development | published |
| `html-conditions/teen-sleep-habits-parent-guide.html` | Growth & Development | published |
| `html-conditions/hyperthyroidism-in-children.html` | Growth & Development | draft |
| `html-conditions/hypothyroidism-in-children.html` | Growth & Development | draft |
| `html-conditions/intoeing-parent-guide.html` | Growth & Development | published |
| `html-conditions/learning-difficulties-school-support-parent-guide.html` | Growth & Development | published |
| `html-conditions/menstrual-health-parent-guide.html` | Growth & Development | published |
| `html-conditions/newborn-weight-loss-and-gain.html` | Growth & Development | draft |
| `html-conditions/osgood-schlatter-parent-guide.html` | Growth & Development | published |
| `html-conditions/physical-activity-for-teenagers-parent-guide.html` | Growth & Development | published |
| `html-conditions/positive-behaviour-guidance-parent-guide.html` | Growth & Development | published |
| `html-conditions/puberty-and-normal-growth-changes-parent-guide.html` | Growth & Development | published |
| `html-conditions/puberty-parent-guide.html` | Growth & Development | published |
| `html-conditions/school-refusal-parent-guide.html` | Growth & Development | published |
| `html-conditions/scoliosis-parent-guide.html` | Growth & Development | published |
| `html-conditions/screen-time-and-behaviour-parent-guide.html` | Growth & Development | published |
| `html-conditions/screen-time-parent-guide.html` | Growth & Development | published |
| `html-conditions/severs-disease-parent-guide.html` | Growth & Development | published |
| `html-conditions/short-stature-in-children.html` | Growth & Development | draft |
| `html-conditions/sleep-problems-in-children-parent-guide.html` | Growth & Development | published |
| `html-conditions/slipped-upper-femoral-epiphysis-scfe-parent-guide.html` | Growth & Development | draft |
| `html-conditions/speech-and-language-delay-parent-guide.html` | Growth & Development | published |
| `html-conditions/stuttering-parent-guide.html` | Growth & Development | published |
| `html-conditions/healthy-teen-independence-parent-guide.html` | Growth & Development | published |
| `html-conditions/temper-tantrums-and-behaviour-regulation-parent-guide.html` | Growth & Development | published |
| `html-conditions/temper-tantrums-parent-guide.html` | Growth & Development | published |
| `html-conditions/thumb-sucking-parent-guide.html` | Growth & Development | published |
| `html-conditions/thyroid-disorders-in-children.html` | Growth & Development | draft |
| `html-conditions/tics-parent-guide.html` | Growth & Development | published |
| `html-conditions/types-of-short-stature.html` | Growth & Development | draft |
| `html-conditions/adolescent-nutrition-10-to-19-years.html` | Nutrition & Feeding | published |
| `html-conditions/breastfeeding-parent-guide.html` | Nutrition & Feeding | published |
| `html-conditions/childhood-overweight-and-obesity.html` | Nutrition & Feeding | published |
| `html-conditions/formula-feeding-guidance.html` | Nutrition & Feeding | published |
| `html-conditions/growth-faltering-poor-weight-gain.html` | Nutrition & Feeding | draft |
| `html-conditions/iron-rich-diet-iron-deficiency-prevention.html` | Nutrition & Feeding | published |
| `html-conditions/nutrition-1-to-2-years.html` | Nutrition & Feeding | published |
| `html-conditions/preschool-nutrition-2-to-5-years.html` | Nutrition & Feeding | published |
| `html-conditions/school-age-nutrition-5-to-12-years.html` | Nutrition & Feeding | published |
| `html-conditions/vitamins-and-minerals-parent-guide.html` | Nutrition & Feeding | published |
| `html-conditions/baby-crying-what-is-normal.html` | Parent Education | published |
| `html-conditions/burns-and-scalds-parent-guide.html` | Parent Education | draft |
| `html-conditions/burns-and-scalds-in-children-parent-guide.html` | Parent Education | draft |
| `html-conditions/child-first-aid-basics-parent-guide.html` | Parent Education | draft |
| `html-conditions/child-travel-health.html` | Parent Education | draft |
| `html-conditions/choking-prevention-and-first-response-parent-guide.html` | Parent Education | draft |
| `html-conditions/colic-in-babies.html` | Parent Education | published |
| `html-conditions/dog-bite-animal-bite-care-parent-guide.html` | Parent Education | draft |
| `html-conditions/foreign-body-ear-nose-eye-parent-guide.html` | Parent Education | draft |
| `html-conditions/hand-hygiene-and-cough-etiquette.html` | Parent Education | published |
| `html-conditions/head-injury-in-children-parent-guide.html` | Parent Education | draft |
| `html-conditions/home-safety-for-toddlers-parent-guide.html` | Parent Education | draft |
| `html-conditions/minor-head-injury-concussion-parent-guide.html` | Parent Education | draft |
| `html-conditions/mosquito-bite-prevention.html` | Parent Education | published |
| `html-conditions/nosebleeds-in-children-parent-guide.html` | Parent Education | published |
| `html-conditions/poisoning-accidental-ingestion-parent-guide.html` | Parent Education | draft |
| `html-conditions/poisoning-prevention-and-what-to-do-parent-guide.html` | Parent Education | draft |
| `html-conditions/premature-baby-care-at-home.html` | Parent Education | draft |
| `html-conditions/safe-food-water-and-deworming.html` | Parent Education | published |
| `html-conditions/safe-medicine-use-at-home-parent-guide.html` | Parent Education | draft |
| `html-conditions/safe-sleep-for-infants.html` | Parent Education | published |
| `html-conditions/talking-to-teens-about-safety-and-consent.html` | Parent Education | published |
| `html-conditions/teen-vaping-tobacco-alcohol-parent-guide.html` | Parent Education | published |
| `html-conditions/13-vulvovaginitis-parent-guide.html` | Parent Education | published |
| `html-conditions/when-to-seek-urgent-medical-care-parent-guide.html` | Parent Education | draft |
| `html-conditions/acne-in-teenagers-parent-guide.html` | Skin & Allergy | published |
| `html-conditions/bcg-scar-and-lump.html` | Vaccination | published |
| `html-conditions/catch-up-vaccination-parent-guide.html` | Vaccination | draft |
| `html-conditions/fever-after-vaccination.html` | Vaccination | published |
| `html-conditions/hpv-vaccine-parent-guide.html` | Vaccination | draft |
| `html-conditions/influenza-vaccine-parent-guide.html` | Vaccination | draft |
| `html-conditions/missed-or-delayed-vaccines.html` | Vaccination | draft |
| `html-conditions/travel-vaccination-for-children.html` | Vaccination | draft |
| `html-conditions/vaccination-in-children-with-asthma-allergy.html` | Vaccination | draft |
| `html-conditions/vaccination-in-special-medical-conditions.html` | Vaccination | draft |
| `html-conditions/vaccination-records-and-missed-doses.html` | Vaccination | draft |
| `html-conditions/vaccination-why-it-matters.html` | Vaccination | published |
| `html-conditions/vaccine-myths-and-misconceptions.html` | Vaccination | draft |
| `html-conditions/vaccine-side-effects-and-aftercare.html` | Vaccination | published |

## 6. Pages With `hero_image` Metadata

Pages with `hero_image`: 39

| Page | Category | Status | `hero_image` |
| --- | --- | --- | --- |
| `html-conditions/chickenpox.html` | Fever & Infections | published | `../assets/condition-visuals/chickenpox.png` |
| `html-conditions/04-conjunctivitis-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/conjunctivitis.png` |
| `html-conditions/dengue-fever.html` | Fever & Infections | draft | `../assets/condition-visuals/dengue-fever.png` |
| `html-conditions/10-febrile-seizures-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/febrile-seizures.png` |
| `html-conditions/fever-in-children.html` | Fever & Infections | published | `../assets/condition-visuals/fever-in-children.png` |
| `html-conditions/hand-foot-mouth-disease.html` | Fever & Infections | published | `../assets/condition-visuals/hand-foot-mouth-disease.png` |
| `html-conditions/06-impetigo-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/impetigo.png` |
| `html-conditions/14-measles-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/measles.png` |
| `html-conditions/07-meningitis-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/meningitis.png` |
| `html-conditions/03-middle-ear-infection-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/otitis-media.png` |
| `html-conditions/19-ringworm-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/ringworm.png` |
| `html-conditions/20-scabies-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/scabies.png` |
| `html-conditions/05-tonsillitis-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/tonsillitis.png` |
| `html-conditions/08-urinary-tract-infection-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/urinary-tract-infection.png` |
| `html-conditions/15-whooping-cough-parent-guide.html` | Fever & Infections | published | `../assets/condition-visuals/whooping-cough.png` |
| `html-conditions/abdominal-pain-in-children.html` | Gastrointestinal | published | `../assets/condition-visuals/abdominal-pain-in-children.png` |
| `html-conditions/constipation-in-children.html` | Gastrointestinal | published | `../assets/condition-visuals/constipation-in-children.png` |
| `html-conditions/gastroenteritis-diarrhoea.html` | Gastrointestinal | published | `../assets/condition-visuals/gastroenteritis-diarrhoea.png` |
| `html-conditions/reflux-in-children.html` | Gastrointestinal | published | `../assets/condition-visuals/reflux-in-children.png` |
| `html-conditions/picky-eating.html` | Nutrition & Feeding | published | `../assets/condition-visuals/picky-eating.png` |
| `html-conditions/complementary-feeding-after-6-months.html` | Nutrition & Feeding | draft | `../assets/condition-visuals/weaning-guide.png` |
| `html-conditions/breastfeeding-basics-parent-guide.html` | Parent Education | draft | `../assets/condition-visuals/breastfeeding-basics.png` |
| `html-conditions/infant-colic-parent-guide.html` | Parent Education | draft | `../assets/condition-visuals/infant-colic.png` |
| `html-conditions/neonatal-danger-signs-parent-guide.html` | Parent Education | draft | `../assets/condition-visuals/neonatal-danger-signs.png` |
| `html-conditions/newborn-jaundice-parent-guide.html` | Parent Education | draft | `../assets/condition-visuals/newborn-jaundice.png` |
| `html-conditions/normal-newborn-care-parent-guide.html` | Parent Education | draft | `../assets/condition-visuals/normal-newborn-care.png` |
| `html-conditions/red-flags-urgent-care.html` | Parent Education | published | `../assets/condition-visuals/red-flags-urgent-care.png` |
| `html-conditions/umbilical-cord-care-parent-guide.html` | Parent Education | published | `../assets/condition-visuals/umbilical-cord-care.png` |
| `html-conditions/asthma-in-children.html` | Respiratory | draft | `../assets/condition-visuals/asthma-children-hero.png` |
| `html-conditions/02-bronchiolitis-parent-guide.html` | Respiratory | published | `../assets/condition-visuals/bronchiolitis.png` |
| `html-conditions/common-cold-in-children.html` | Respiratory | published | `../assets/condition-visuals/common-cold-in-children.png` |
| `html-conditions/cough-in-children.html` | Respiratory | draft | `../assets/condition-visuals/cough-in-children.png` |
| `html-conditions/01-croup-parent-guide.html` | Respiratory | published | `../assets/condition-visuals/croup.png` |
| `html-conditions/16-pneumonia-parent-guide.html` | Respiratory | published | `../assets/condition-visuals/pneumonia-in-children.png` |
| `html-conditions/18-eczema-parent-guide.html` | Skin & Allergy | published | `../assets/condition-visuals/eczema.png` |
| `html-conditions/12-head-lice-parent-guide.html` | Skin & Allergy | published | `../assets/condition-visuals/head-lice.png` |
| `html-conditions/11-hives-parent-guide.html` | Skin & Allergy | published | `../assets/condition-visuals/hives.png` |
| `html-conditions/17-molluscum-parent-guide.html` | Skin & Allergy | published | `../assets/condition-visuals/molluscum-contagiosum.png` |
| `html-conditions/vaccination-faq-for-parents.html` | Vaccination | published | `../assets/condition-visuals/vaccination-faq.png` |

## 7. High-Caution Pages From Previous Governance Audit

Source: `docs/audits/resource-validation-governance-warnings-audit.md`.

These pages were previously classified as `high-caution / do not publish until verified` and should not be promoted without clinician and current-guideline review:

| Page | Category | Current status | Why promotion is blocked |
| --- | --- | --- | --- |
| `html-conditions/09-osteomyelitis-parent-guide.html` | Fever & Infections | draft | Serious infection treatment framing and follow-up language need clinician verification. |
| `html-conditions/catch-up-vaccination-parent-guide.html` | Vaccination | draft | Catch-up vaccination and minimum-interval decisions depend on current guidance and patient history. |
| `html-conditions/hpv-vaccine-parent-guide.html` | Vaccination | draft | HPV vaccine schedule and dose decisions depend on age and current guidance. |
| `html-conditions/typhoid-fever.html` | Fever & Infections | draft | Antibiotic choice and resistance language are guidance-dependent. |
| `html-conditions/vaccination-faq-for-parents.html` | Vaccination | published | Missed-dose, catch-up, and immunosuppression planning affect vaccine safety and require current-guideline verification. |
| `html-conditions/vaccination-in-children-with-asthma-allergy.html` | Vaccination | draft | Severe reaction history and asthma/allergy vaccine planning require individualized review. |
| `html-conditions/vaccination-in-special-medical-conditions.html` | Vaccination | draft | Steroids, immunosuppression, chronic illness, and live-vaccine timing require clinician/current-guideline review. |

Note: the later `docs/audits/clinical-governance-warning-review-2026-05-22.md` also classified `html-conditions/hypothyroidism-in-children.html` as C-class clinician review due to drug-specific thyroid replacement wording. It was not part of the earlier high-caution list, but it should remain blocked from promotion until clinician review.

## 8. Suggested Next 3 Batches

1. Parent Education safety and newborn utility batch

   Suggested candidates: `normal-newborn-care-parent-guide.html`, `newborn-jaundice-parent-guide.html`, `neonatal-danger-signs-parent-guide.html`, `infant-colic-parent-guide.html`, `umbilical-cord-care-parent-guide.html`, `safe-sleep-for-infants.html`, and `red-flags-urgent-care.html`.

   Rationale: Parent Education has the largest draft gap (20 drafts) and high parent usefulness. Several newborn/safety pages already have hero metadata or are central navigation helpers. Keep emergency and newborn-danger wording clinician-reviewed before promotion.

2. Growth & Development metadata-readiness batch

   Suggested candidates: `developmental-milestones-parent-guide.html`, `speech-and-language-delay-parent-guide.html`, `autism-early-signs-parent-guide.html`, `school-refusal-parent-guide.html`, `sleep-problems-in-children-parent-guide.html`, `bedwetting-nocturnal-enuresis-parent-guide.html`, and `temper-tantrums-parent-guide.html`.

   Rationale: Growth & Development is the largest category (47 resources), but every page in the category currently lacks hero metadata. A metadata/art readiness pass would improve publication polish for already-published, high-parent-use pages without changing medical content.

3. Vaccination governance-gated readiness batch

   Suggested candidates for review queue: `vaccination-why-it-matters.html`, `fever-after-vaccination.html`, `vaccine-side-effects-and-aftercare.html`, `vaccine-myths-and-misconceptions.html`, `missed-or-delayed-vaccines.html`, and `vaccination-records-and-missed-doses.html`.

   Rationale: Vaccination has only 5 published pages out of 14 and 13 pages missing hero metadata. However, this category has the strongest governance risk. Work should start as clinician/current-guideline verification and metadata readiness, not promotion.

## 9. Recommended Immediate Next Action

Run a clinician/current-guideline review pass on the seven high-caution pages before any promotion work, with special attention to `html-conditions/vaccination-faq-for-parents.html` because it is already marked `published` while still appearing in the high-caution governance list and still marked `pending-clinician-review`.

After that, the safest documentation/metadata-only follow-up is a hero metadata readiness plan for Growth & Development and Parent Education, because those categories have the largest visual metadata gaps and strong parent usefulness.

## Audit Boundaries Confirmed

- Documentation-only.
- No edits to `html-conditions`.
- No edits to `index.html`, `style.css`, `script.js`, tests, or package files.
- No edits to `data/conditions-index.json`.
- No AI/API functionality added.
- No patient data collected.
