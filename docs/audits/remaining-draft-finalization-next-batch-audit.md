# Remaining Draft Finalization Next Batch Audit

Audit date: 2026-05-25

Branch: `audit/remaining-draft-finalization-next-batch`

Scope: documentation-only audit using `data/conditions-index.json`, `html-conditions/*.html` metadata, and prior audit records:

- `docs/audits/draft-resources-finalization-readiness-audit.md`
- `docs/audits/resource-validation-governance-warnings-audit.md`
- `docs/audits/resource-inventory-publication-readiness-audit.md`

This audit does not edit resource HTML, resource status, medical review status, application files, tests, package files, or generated index data. It does not add clinical facts, treatment guidance, patient-specific advice, AI/API behavior, or patient data collection.

## 1. Resource Totals

| Source / field | Count |
| --- | ---: |
| `data/conditions-index.json` resources | 145 |
| `html-conditions/*.html` pages | 145 |
| Resources with `status: draft` | 38 |
| Resources with `status: published` | 107 |
| Resources with `medical_review_status: reviewed` | 1 |
| Resources with `medical_review_status != reviewed` | 144 |

Only `Fever in Children` is currently marked `medical_review_status: reviewed`. All remaining draft resources are still `pending-clinician-review`.

## 2. Remaining Draft Resources

| Resource | File | Category | Medical review status | Classification |
| --- | --- | --- | --- | --- |
| Dengue Fever | `html-conditions/dengue-fever.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Encephalitis Warning Signs | `html-conditions/encephalitis-warning-signs.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Kawasaki Disease / MIS-C Awareness Guide | `html-conditions/kawasaki-disease-mis-c-awareness-guide.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Malaria | `html-conditions/malaria.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Osteomyelitis | `html-conditions/09-osteomyelitis-parent-guide.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Tuberculosis Parent Overview | `html-conditions/tuberculosis-parent-overview.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Typhoid Fever | `html-conditions/typhoid-fever.html` | Fever & Infections | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Hyperthyroidism in Children | `html-conditions/hyperthyroidism-in-children.html` | Growth & Development | pending-clinician-review | needs clinician review |
| Hypothyroidism in Children | `html-conditions/hypothyroidism-in-children.html` | Growth & Development | pending-clinician-review | needs clinician review |
| Slipped Upper Femoral Epiphysis (SCFE/SUFE) | `html-conditions/slipped-upper-femoral-epiphysis-scfe-parent-guide.html` | Growth & Development | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Thyroid Disorders in Children | `html-conditions/thyroid-disorders-in-children.html` | Growth & Development | pending-clinician-review | needs clinician review |
| Burns and Scalds | `html-conditions/burns-and-scalds-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Burns and Scalds in Children | `html-conditions/burns-and-scalds-in-children-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Child First Aid Basics | `html-conditions/child-first-aid-basics-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Choking Prevention and First Response | `html-conditions/choking-prevention-and-first-response-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Dog Bite and Animal Bite Care | `html-conditions/dog-bite-animal-bite-care-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Foreign Body in Ear, Nose, or Eye | `html-conditions/foreign-body-ear-nose-eye-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Head Injury in Children | `html-conditions/head-injury-in-children-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Home Safety for Toddlers | `html-conditions/home-safety-for-toddlers-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Minor Head Injury and Concussion | `html-conditions/minor-head-injury-concussion-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Newborn Danger Signs | `html-conditions/neonatal-danger-signs-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Newborn Jaundice | `html-conditions/newborn-jaundice-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Normal Newborn Care | `html-conditions/normal-newborn-care-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Poisoning and Accidental Ingestion | `html-conditions/poisoning-accidental-ingestion-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Poisoning Prevention and What to Do | `html-conditions/poisoning-prevention-and-what-to-do-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Safe Medicine Use at Home | `html-conditions/safe-medicine-use-at-home-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| When to Seek Urgent Medical Care | `html-conditions/when-to-seek-urgent-medical-care-parent-guide.html` | Parent Education | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Asthma in Children | `html-conditions/asthma-in-children.html` | Respiratory | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Cough in Children | `html-conditions/cough-in-children.html` | Respiratory | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Catch-up Vaccination Parent Guide | `html-conditions/catch-up-vaccination-parent-guide.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| HPV Vaccine for Adolescents | `html-conditions/hpv-vaccine-parent-guide.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Influenza Vaccine in Children | `html-conditions/influenza-vaccine-parent-guide.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Missed or Delayed Vaccines | `html-conditions/missed-or-delayed-vaccines.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Travel Vaccination for Children | `html-conditions/travel-vaccination-for-children.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Vaccination in Children with Asthma or Allergy | `html-conditions/vaccination-in-children-with-asthma-allergy.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Vaccination in Special Medical Conditions | `html-conditions/vaccination-in-special-medical-conditions.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Vaccination Records and Missed Doses | `html-conditions/vaccination-records-and-missed-doses.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |
| Vaccine Myths and Misconceptions | `html-conditions/vaccine-myths-and-misconceptions.html` | Vaccination | pending-clinician-review | high-caution / do not publish until current guideline verification |

Draft count by category:

| Category | Draft count |
| --- | ---: |
| Fever & Infections | 7 |
| Growth & Development | 4 |
| Parent Education | 16 |
| Respiratory | 2 |
| Vaccination | 9 |

## 3. Resources Not Fully Reviewed

Current `medical_review_status != reviewed` count: 144.

| Status among not-reviewed resources | Count |
| --- | ---: |
| draft and pending clinician review | 38 |
| published and pending clinician review | 106 |

The complete not-reviewed set is every indexed resource except `Fever in Children`.

| Category | Not-reviewed resources |
| --- | --- |
| Fever & Infections | Chickenpox in Children; Conjunctivitis / Pink Eye in Children; COVID-19 in Children; Dengue Fever; Diphtheria; Encephalitis Warning Signs; Febrile Seizures in Children; Hand, Foot & Mouth Disease in Children; Impetigo in Children; Infectious Mononucleosis; Kawasaki Disease / MIS-C Awareness Guide; Malaria; Measles in Children; Meningitis in Children; Middle Ear Infection / Otitis Media in Children; Osteomyelitis; Rickettsial Fever / Scrub Typhus; Ringworm / Tinea in Children; Scabies in Children; Tonsillitis / Sore Throat in Children; Tuberculosis Parent Overview; Typhoid Fever; Urinary Tract Infection / UTI in Children; Whooping Cough / Pertussis in Children |
| Gastrointestinal | Abdominal Pain in Children; Constipation in Children; Gastroenteritis / Diarrhoea in Children; Reflux in Infants and Children |
| Growth & Development | Adolescent Mental Health Warning Signs; Anxiety in Children; Autism Early Concerns - Parent Awareness Guide; Autism: Early Signs Parents May Notice; Back Pain and Posture in Children; Bedwetting; Bedwetting / Nocturnal Enuresis - Parent Guide; Body Image Concerns in Teenagers; Bullying and Cyberbullying: Parent Guide; Clubfoot / CTEV Parent Overview; Daytime Wetting in Children; Delayed Puberty in Children; Developmental Dysplasia of the Hip (DDH); Developmental Milestones - Parent Guide; Early Puberty in Children; Exam Stress and Performance Pressure; Flat Feet in Children; Growing Pains in Children; Healthy Sleep Habits for Teenagers; Hyperthyroidism in Children; Hypothyroidism in Children; Intoeing / Feet Turning Inwards; Learning Difficulties and School Support; Menstrual Health for Adolescents; Newborn Weight Loss and Gain; Osgood-Schlatter Disease; Physical Activity for Teenagers; Positive Behaviour Guidance for Children; Puberty and Normal Growth Changes - Parent Guide; Puberty: Early and Late Changes; School Refusal and School Avoidance; Scoliosis in Children; Screen Time and Behaviour - Parent Guide; Screen Time and Digital Wellness; Sever's Disease / Heel Pain; Short Stature in Children; Sleep Problems in Children - Parent Guide; Slipped Upper Femoral Epiphysis (SCFE/SUFE); Speech and Language Delay - Parent Guide; Stuttering and Stammering; Supporting Independence in Teenagers; Temper Tantrums and Behaviour Regulation - Parent Guide; Temper Tantrums in Young Children; Thumb Sucking and Common Childhood Habits; Thyroid Disorders in Children; Tics in Children; Types of Short Stature |
| Nutrition & Feeding | Adolescent Nutrition 10 to 19 Years; Breastfeeding; Childhood Overweight and Obesity; Formula Feeding Guidance; Growth Faltering / Poor Weight Gain; Iron-rich Diet and Iron Deficiency Prevention; Nutrition 1 to 2 Years; Picky Eating in Children; Preschool Nutrition 2 to 5 Years; School-age Nutrition 5 to 12 Years; Vitamins and Minerals; Weaning Guide |
| Parent Education | Baby Crying: What is Normal?; Breastfeeding Basics; Burns and Scalds; Burns and Scalds in Children; Child First Aid Basics; Child Travel Health; Choking Prevention and First Response; Colic in Babies; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Hand Hygiene and Cough Etiquette; Head Injury in Children; Home Safety for Toddlers; Infant Colic; Minor Head Injury and Concussion; Mosquito Bite Prevention; Newborn Danger Signs; Newborn Jaundice; Normal Newborn Care; Nosebleeds in Children; Poisoning and Accidental Ingestion; Poisoning Prevention and What to Do; Premature Baby Care at Home; Red Flags: When to Seek Urgent Medical Care; Safe Food, Water and Deworming; Safe Medicine Use at Home; Safe Sleep for Infants; Talking to Teenagers About Safety, Boundaries and Consent; Umbilical Cord Care; Vaping, Tobacco and Alcohol in Teenagers; Vulvovaginitis in Children; When to Seek Urgent Medical Care |
| Respiratory | Asthma in Children; Bronchiolitis in Infants; Common Cold in Children; Cough in Children; Croup in Children; Pneumonia in Children |
| Skin & Allergy | Acne in Teenagers; Eczema (Atopic Dermatitis); Head Lice and Nits in Children; Hives (Urticaria) in Children; Molluscum Contagiosum in Children |
| Vaccination | BCG Scar and Lump; Catch-up Vaccination Parent Guide; Fever After Vaccination; HPV Vaccine for Adolescents; Influenza Vaccine in Children; Missed or Delayed Vaccines; Travel Vaccination for Children; Vaccination FAQ for Parents; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions; Vaccination Records and Missed Doses; Vaccination: Why It Matters; Vaccine Myths and Misconceptions; Vaccine Side Effects and Aftercare |

## 4. Finalization Readiness Groups

Classification is intentionally conservative. It identifies publication-finalization readiness only; it is not clinical approval.

| Group | Draft count | Resources |
| --- | ---: | --- |
| Safe for next low-risk finalization batch | 0 | None |
| Needs minor wording review before finalization | 0 | None |
| Needs clinician review | 3 | Hyperthyroidism in Children; Hypothyroidism in Children; Thyroid Disorders in Children |
| High-caution / do not publish until current guideline verification | 35 | Dengue Fever; Encephalitis Warning Signs; Kawasaki Disease / MIS-C Awareness Guide; Malaria; Osteomyelitis; Tuberculosis Parent Overview; Typhoid Fever; Slipped Upper Femoral Epiphysis (SCFE/SUFE); Burns and Scalds; Burns and Scalds in Children; Child First Aid Basics; Choking Prevention and First Response; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Head Injury in Children; Home Safety for Toddlers; Minor Head Injury and Concussion; Newborn Danger Signs; Newborn Jaundice; Normal Newborn Care; Poisoning and Accidental Ingestion; Poisoning Prevention and What to Do; Safe Medicine Use at Home; When to Seek Urgent Medical Care; Asthma in Children; Cough in Children; Catch-up Vaccination Parent Guide; HPV Vaccine for Adolescents; Influenza Vaccine in Children; Missed or Delayed Vaccines; Travel Vaccination for Children; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions; Vaccination Records and Missed Doses; Vaccine Myths and Misconceptions |

## 5. Explicit Exclusions From Next Finalization Batch

The next finalization batch must exclude the following topic families and matching remaining draft resources:

| Exclusion rule | Remaining draft resources excluded |
| --- | --- |
| Vaccination | Catch-up Vaccination Parent Guide; HPV Vaccine for Adolescents; Influenza Vaccine in Children; Missed or Delayed Vaccines; Travel Vaccination for Children; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions; Vaccination Records and Missed Doses; Vaccine Myths and Misconceptions |
| Catch-up vaccination | Catch-up Vaccination Parent Guide; Missed or Delayed Vaccines; Vaccination Records and Missed Doses |
| HPV | HPV Vaccine for Adolescents |
| Influenza | Influenza Vaccine in Children; Vaccination in Children with Asthma or Allergy |
| Travel vaccination | Travel Vaccination for Children |
| Special medical conditions vaccination | Vaccination in Special Medical Conditions |
| Dosing/medicine guidance | Asthma in Children; Cough in Children; Home Safety for Toddlers; Poisoning and Accidental Ingestion; Poisoning Prevention and What to Do; Safe Medicine Use at Home; thyroid pages with medicine/treatment implications |
| Emergency/first-aid pages | Burns and Scalds; Burns and Scalds in Children; Child First Aid Basics; Choking Prevention and First Response; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Head Injury in Children; Minor Head Injury and Concussion; Newborn Danger Signs; When to Seek Urgent Medical Care |
| Typhoid | Typhoid Fever |
| Osteomyelitis | Osteomyelitis |
| Treatment algorithms or patient-specific advice risk | Asthma in Children; Cough in Children; Dengue Fever; Encephalitis Warning Signs; Kawasaki Disease / MIS-C Awareness Guide; Malaria; Newborn Jaundice; Normal Newborn Care; Slipped Upper Femoral Epiphysis (SCFE/SUFE); Tuberculosis Parent Overview; all vaccination pages |

## 6. Recommendation

No safe low-risk finalization batch remains from the current draft pool.

After PR #60, the resources that remain in `status: draft` are either clinician-review topics or high-caution topics that overlap with the explicit exclusion list. The next safe workflow should be a clinician-review/current-guideline verification workflow, not another editorial finalization batch.

Recommended next workflow:

1. Clinician-review batch: `hyperthyroidism-in-children.html`, `hypothyroidism-in-children.html`, and `thyroid-disorders-in-children.html`.
2. Current-guideline verification batch for serious infections and urgent recognition: dengue, encephalitis, Kawasaki/MIS-C, malaria, tuberculosis, typhoid, and osteomyelitis.
3. Emergency/first-aid clinician verification batch: burns, choking, dog bite, foreign body, head injury, poisoning, newborn danger signs, newborn jaundice, normal newborn care, and urgent-care pages.
4. Vaccination current-guideline verification batch: catch-up, HPV, influenza, missed/delayed vaccines, travel vaccination, asthma/allergy vaccination, special medical conditions, records/missed doses, and vaccine myths.
5. Only after the relevant clinician/current-guideline review is complete should status or `medical_review_status` be changed in a separate task.

## 7. Audit Boundaries Confirmed

- No `html-conditions` files were edited.
- No `status` values were changed.
- No `medical_review_status` values were changed.
- No `index.html`, `style.css`, `script.js`, package files, tests, or `data/conditions-index.json` edits were made.
- No external search, AI/API feature, or patient data collection was added.
- No clinical facts, dose schedules, vaccine schedules, treatment algorithms, or patient-specific advice were added.
