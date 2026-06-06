# Clinical Portal 2026 - Parent Guide Completion Audit

Audit date: 2026-06-06

Scope: documentation-only audit. No clinical page, metadata, status, review state, reference, redirect, generated index, sitemap, application file, or asset is changed by this audit.

## 1. Current Checkpoint

| Checkpoint | Current value |
| --- | ---: |
| Production reviewed-only public index | 74 resources |
| Total generated resource pool | 145 resources |
| Batch 1 | completed |
| Batch 2 | completed |
| Batch 3 | completed |
| Batch 4 | completed |
| Batch 5 | completed |
| Batch 6 | completed |

## 2. Audit Purpose and Method

This audit maps the remaining parent guides/resources by completion status, clinical caution level, duplication or overlap, metadata quality, and readiness for future batches. It is intended to help Dr. Murali choose the next small, reviewable work items without changing or clinically approving any resource.

Sources inspected:

- `data/conditions-index.json`
- metadata and structure only from all 145 `html-conditions/*.html` files
- `docs/clinical-review/`
- `docs/governance/`
- prior audit and site-readiness documents relevant to duplication, warnings, and review governance
- Batch 1 to Batch 6 plans and review packs

Automated structure inspection checked required metadata, disclaimer/reference-section presence, obvious placeholder terms, page size/section count, redirect wording, and metadata/body status wording. It did not judge clinical accuracy or whether page content is medically complete.

### Important source-of-truth finding

The checked-in `data/conditions-index.json` is an older all-resource snapshot and does not reflect the latest Batch 4 to Batch 6 HTML metadata. It currently reports 39 reviewed/published, 71 pending/published, and 35 pending/draft resources. Direct HTML metadata reports the current state below and agrees with the stated production checkpoint of 74 reviewed/published resources.

Future audits should use direct HTML metadata or regenerate a temporary index for inspection, then restore generated files when no generated-file change is intended.

## 3. Resource Status Summary

| Measure | Count | Audit interpretation |
| --- | ---: | --- |
| Total generated resources | 145 | Direct HTML file count |
| Published and reviewed resources | 74 | Eligible for reviewed-only public index |
| Reviewed draft redirect stubs | 2 | Reviewed as redirects; intentionally not public standalone guides |
| Total resources marked reviewed | 76 | Includes the 2 draft redirect stubs |
| Published but pending clinician review | 43 | Remaining public-facing review backlog |
| Draft and pending clinician review | 26 | Keep draft until appropriate review/completion decision |
| Total draft resources | 28 | Includes 26 pending drafts and 2 reviewed redirect stubs |
| Redirect stubs identifiable | 2 | Bedwetting and temper-tantrum older URLs |
| Required metadata fields missing | 0 | Validator-required metadata present in all 145 pages |
| Missing disclaimer sections | 0 | Automated structure check |
| Missing references sections | 0 | Automated structure check |
| Obvious placeholder/TODO pages | 0 | No obvious placeholder terms detected |
| Weak or truncated reference metadata | 3 | BCG Scar and Lump; Travel Vaccination for Children; Hand Hygiene and Cough Etiquette |
| Metadata/body status wording inconsistencies | 19 | Metadata is current; visible body/footer wording appears older |
| Other clinically incomplete pages | Needs confirmation | Cannot be determined reliably from metadata/page structure alone |

## 4. Reviewed Resource Summary

| Category | Published and reviewed | Reviewed draft redirects | Total reviewed |
| --- | ---: | ---: | ---: |
| Fever & Infections | 6 | 0 | 6 |
| Growth & Development | 39 | 2 | 41 |
| Nutrition & Feeding | 9 | 0 | 9 |
| Parent Education | 3 | 0 | 3 |
| Skin & Allergy | 5 | 0 | 5 |
| Vaccination | 14 | 0 | 14 |
| Gastrointestinal | 0 | 0 | 0 |
| Respiratory | 0 | 0 | 0 |
| **Total** | **74** | **2** | **76** |

The reviewed pool is strongest in Growth & Development, Vaccination, Nutrition & Feeding, and Skin & Allergy. No Gastrointestinal or Respiratory resource is currently marked reviewed.

## 5. Remaining Pending Public Resources

These 43 resources are `published` and `pending-clinician-review` in direct HTML metadata.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Caution level | Main audit concern | Suggested next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COVID-19 in Children | `html-conditions/covid-19-in-children.html` | Fever & Infections | published | pending-clinician-review | 2026-05-12 | high | Current public-health and urgent-recognition wording | Defer to serious-infection/current-guideline review |
| Diphtheria | `html-conditions/diphtheria.html` | Fever & Infections | published | pending-clinician-review | 2026-05-12 | high | Serious infection, isolation, treatment urgency | Defer to serious-infection review |
| Febrile Seizures in Children | `html-conditions/10-febrile-seizures-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | high | Seizure first-aid and urgent-action wording | Defer to seizure/emergency review |
| Impetigo in Children | `html-conditions/06-impetigo-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-20 | moderate | Antibiotic/steroid and school/spread wording | Consider a small common-infection review batch |
| Infectious Mononucleosis | `html-conditions/infectious-mononucleosis.html` | Fever & Infections | published | pending-clinician-review | 2026-05-12 | high | Spleen safety and activity restriction | Defer to clinician safety review |
| Measles in Children | `html-conditions/14-measles-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | high | Serious infection, isolation, vaccination/public-health wording | Defer to serious-infection review |
| Meningitis in Children | `html-conditions/07-meningitis-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | defer | Urgent recognition of life-threatening illness | High-caution clinician review only |
| Middle Ear Infection / Otitis Media in Children | `html-conditions/03-middle-ear-infection-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | moderate | Antibiotic stewardship and warning signs | Consider a small common-infection review batch |
| Rickettsial Fever / Scrub Typhus | `html-conditions/rickettsial-fever-scrub-typhus.html` | Fever & Infections | published | pending-clinician-review | 2026-05-12 | high | Tropical serious infection and treatment urgency | Defer to serious-infection review |
| Tonsillitis / Sore Throat in Children | `html-conditions/05-tonsillitis-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | moderate | Antibiotic stewardship and airway/red-flag wording | Consider a small common-infection review batch |
| Urinary Tract Infection / UTI in Children | `html-conditions/08-urinary-tract-infection-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | high | Young-child infection, tests, antibiotics, escalation | Defer to infection/treatment-boundary review |
| Whooping Cough / Pertussis in Children | `html-conditions/15-whooping-cough-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | high | Infant danger, public-health and treatment urgency | Defer to serious-infection review |
| Abdominal Pain in Children | `html-conditions/abdominal-pain-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | high | Broad urgent differential and escalation cues | Defer to acute-symptom review |
| Constipation in Children | `html-conditions/constipation-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | high | Treatment/medicine boundaries and red flags | Defer to treatment-boundary review |
| Gastroenteritis / Diarrhoea in Children | `html-conditions/gastroenteritis-diarrhoea.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-19 | high | Dehydration recognition and fluid guidance | Defer to acute-symptom review |
| Reflux in Infants and Children | `html-conditions/reflux-in-children.html` | Gastrointestinal | published | pending-clinician-review | 2026-05-20 | high | Infant feeding, aspiration and danger-sign boundaries | Defer to infant/feeding-safety review |
| Adolescent Mental Health Warning Signs | `html-conditions/adolescent-mental-health-warning-signs.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | defer | Crisis, self-harm and immediate-safety pathways | Specialist mental-health/safeguarding review |
| Anxiety in Children | `html-conditions/childhood-anxiety-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | high | Mental-health assessment and crisis boundaries | Defer to mental-health review |
| Body Image Concerns in Teenagers | `html-conditions/teen-body-image-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | high | Eating-disorder, bullying and self-harm overlap | Defer to adolescent mental-health review |
| Bullying and Cyberbullying: Parent Guide | `html-conditions/bullying-and-cyberbullying-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-22 | high | Safeguarding and immediate-safety overlap | Defer to safeguarding review |
| Exam Stress and Performance Pressure | `html-conditions/exam-stress-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | high | Mental-health crisis boundary; body status wording stale | Defer to mental-health review; later metadata/body cleanup |
| Newborn Weight Loss and Gain | `html-conditions/newborn-weight-loss-and-gain.html` | Growth & Development | published | pending-clinician-review | 2026-05-15 | defer | Newborn feeding adequacy and danger signs | Newborn/feeding specialist review |
| School Refusal and School Avoidance | `html-conditions/school-refusal-parent-guide.html` | Growth & Development | published | pending-clinician-review | 2026-05-13 | high | Mental health, bullying, safeguarding and crisis overlap | Defer to multidisciplinary review |
| Formula Feeding Guidance | `html-conditions/formula-feeding-guidance.html` | Nutrition & Feeding | published | pending-clinician-review | 2026-05-15 | high | Infant feeding preparation and safety | Defer to infant-feeding review |
| Growth Faltering / Poor Weight Gain | `html-conditions/growth-faltering-poor-weight-gain.html` | Nutrition & Feeding | published | pending-clinician-review | 2026-05-13 | high | Feeding adequacy, growth assessment and medical causes | Defer to nutrition/growth clinician review |
| Vitamins and Minerals | `html-conditions/vitamins-and-minerals-parent-guide.html` | Nutrition & Feeding | published | pending-clinician-review | 2026-05-13 | high | Supplement and dosing implications | Defer to medicine/nutrition review |
| Baby Crying: What is Normal? | `html-conditions/baby-crying-what-is-normal.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | moderate | Young-infant danger signs and overlap with colic pages | Compare overlap, then infant-safety review |
| Breastfeeding Basics | `html-conditions/breastfeeding-basics-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | high | Feeding adequacy, dehydration and newborn danger signs | Defer to infant-feeding review |
| Child Travel Health | `html-conditions/child-travel-health.html` | Parent Education | published | pending-clinician-review | 2026-05-13 | high | Current travel guidance, infection and antibiotic wording | Defer to current-guideline travel review |
| Colic in Babies | `html-conditions/colic-in-babies.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | moderate | Overlap with Infant Colic; body status wording stale | Duplicate comparison and infant-safety review |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | moderate | Overlap with Colic in Babies and Baby Crying | Duplicate comparison and infant-safety review |
| Nosebleeds in Children | `html-conditions/nosebleeds-in-children-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-22 | high | First-aid technique and escalation thresholds | Defer to first-aid review |
| Premature Baby Care at Home | `html-conditions/premature-baby-care-at-home.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | defer | High-caution young-infant safety | Neonatal clinician review |
| Red Flags: When to Seek Urgent Medical Care | `html-conditions/red-flags-urgent-care.html` | Parent Education | published | pending-clinician-review | 2026-05-20 | defer | Broad urgent-recognition guidance | High-caution urgent-care review |
| Safe Food, Water and Deworming | `html-conditions/safe-food-water-and-deworming.html` | Parent Education | published | pending-clinician-review | 2026-05-13 | high | Deworming/medicine and current prevention guidance | Defer to current-guideline review |
| Safe Sleep for Infants | `html-conditions/safe-sleep-for-infants.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | defer | Infant death-prevention guidance | Current-source infant-safety review |
| Talking to Teenagers About Safety, Boundaries and Consent | `html-conditions/talking-to-teens-about-safety-and-consent.html` | Parent Education | published | pending-clinician-review | 2026-05-22 | defer | Abuse, consent and safeguarding pathways | Specialist safeguarding review |
| Umbilical Cord Care | `html-conditions/umbilical-cord-care-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | high | Newborn infection and danger signs | Neonatal clinician review |
| Vaping, Tobacco and Alcohol in Teenagers | `html-conditions/teen-vaping-tobacco-alcohol-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-22 | defer | Substance use, poisoning, crisis and safeguarding | Specialist adolescent/safeguarding review |
| Bronchiolitis in Infants | `html-conditions/02-bronchiolitis-parent-guide.html` | Respiratory | published | pending-clinician-review | 2026-05-20 | defer | Infant breathing/feeding danger signs | High-caution respiratory review |
| Common Cold in Children | `html-conditions/common-cold-in-children.html` | Respiratory | published | pending-clinician-review | 2026-05-20 | moderate | Antibiotic/medicine boundary and warning signs | Candidate for a small common-illness review batch |
| Croup in Children | `html-conditions/01-croup-parent-guide.html` | Respiratory | published | pending-clinician-review | 2026-05-20 | high | Stridor and urgent breathing recognition | Defer to respiratory safety review |
| Pneumonia in Children | `html-conditions/16-pneumonia-parent-guide.html` | Respiratory | published | pending-clinician-review | 2026-05-21 | defer | Serious infection and breathing urgency | High-caution respiratory review |

## 6. Draft Resources

| Resource title | File path | Category | Current medical_review_status | Current last_reviewed | Apparent reason for draft status | Suggested action | Caution notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dengue Fever | `html-conditions/dengue-fever.html` | Fever & Infections | pending-clinician-review | 2026-05-12 | Serious infection/urgent recognition | keep draft / defer | Current guideline and treatment-boundary review required |
| Encephalitis Warning Signs | `html-conditions/encephalitis-warning-signs.html` | Fever & Infections | pending-clinician-review | 2026-05-12 | Urgent-recognition page | keep draft / defer | Neurologic emergency wording |
| Kawasaki Disease / MIS-C Awareness Guide | `html-conditions/kawasaki-disease-mis-c-awareness-guide.html` | Fever & Infections | pending-clinician-review | 2026-05-12 | Serious inflammatory illness awareness | keep draft / defer | Urgent recognition and current-source review |
| Malaria | `html-conditions/malaria.html` | Fever & Infections | pending-clinician-review | 2026-05-12 | Serious tropical infection | keep draft / defer | Testing/treatment and current-guideline implications |
| Osteomyelitis | `html-conditions/09-osteomyelitis-parent-guide.html` | Fever & Infections | pending-clinician-review | 2026-05-10 | Serious infection and antibiotic context | keep draft / defer | High-caution clinician review |
| Tuberculosis Parent Overview | `html-conditions/tuberculosis-parent-overview.html` | Fever & Infections | pending-clinician-review | 2026-05-12 | Public-health and treatment-sensitive topic | keep draft / defer | Current national guidance required |
| Typhoid Fever | `html-conditions/typhoid-fever.html` | Fever & Infections | pending-clinician-review | 2026-05-12 | Serious infection/antibiotic-resistance context | keep draft / defer | High-caution current-source review |
| Redirect: Bedwetting / Nocturnal Enuresis - Parent Guide | `html-conditions/bedwetting-parent-guide.html` | Growth & Development | reviewed | 2026-06-05 | Intentional older-URL redirect stub | review as redirect / keep draft | Do not treat as incomplete standalone guide |
| Redirect: Temper Tantrums and Behaviour Regulation - Parent Guide | `html-conditions/temper-tantrums-parent-guide.html` | Growth & Development | reviewed | 2026-06-05 | Intentional older-URL redirect stub | review as redirect / keep draft | Do not treat as incomplete standalone guide |
| Slipped Upper Femoral Epiphysis (SCFE/SUFE) | `html-conditions/slipped-upper-femoral-epiphysis-scfe-parent-guide.html` | Growth & Development | pending-clinician-review | 2026-05-15 | Orthopaedic urgency risk | keep draft / defer | Urgent referral and weight-bearing advice |
| Burns and Scalds | `html-conditions/burns-and-scalds-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-22 | Emergency/first-aid content and overlap | duplicate resolution / defer | Compare with Burns and Scalds in Children |
| Burns and Scalds in Children | `html-conditions/burns-and-scalds-in-children-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Emergency/first-aid content and overlap | duplicate resolution / defer | Compare with Burns and Scalds |
| Child First Aid Basics | `html-conditions/child-first-aid-basics-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Broad emergency instructions | keep draft / defer | High-caution first-aid verification |
| Choking Prevention and First Response | `html-conditions/choking-prevention-and-first-response-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Emergency first-response instructions | keep draft / defer | Technique accuracy is safety critical |
| Dog Bite and Animal Bite Care | `html-conditions/dog-bite-animal-bite-care-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-22 | Wound/rabies/tetanus urgency | keep draft / defer | Current prophylaxis and urgent-care guidance |
| Foreign Body in Ear, Nose, or Eye | `html-conditions/foreign-body-ear-nose-eye-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-22 | First-aid and urgent-action risk | keep draft / defer | Avoid harmful removal instructions |
| Head Injury in Children | `html-conditions/head-injury-in-children-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Injury/urgent-recognition content and overlap | duplicate resolution / defer | Compare with Minor Head Injury and Concussion |
| Home Safety for Toddlers | `html-conditions/home-safety-for-toddlers-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Broad poisoning/choking/injury prevention | complete later / defer | Review safety advice against current guidance |
| Minor Head Injury and Concussion | `html-conditions/minor-head-injury-concussion-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-22 | Injury/urgent-recognition content and overlap | duplicate resolution / defer | Compare with Head Injury in Children |
| Newborn Danger Signs | `html-conditions/neonatal-danger-signs-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-21 | High-caution newborn urgent recognition | keep draft / defer | Neonatal clinician review |
| Newborn Jaundice | `html-conditions/newborn-jaundice-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-21 | Newborn danger-sign/treatment timing | keep draft / defer | Neonatal clinician review |
| Normal Newborn Care | `html-conditions/normal-newborn-care-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-21 | Broad young-infant safety | keep draft / defer | Neonatal clinician review |
| Poisoning and Accidental Ingestion | `html-conditions/poisoning-accidental-ingestion-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-22 | Emergency content and overlap | duplicate resolution / defer | Compare with Poisoning Prevention and What to Do |
| Poisoning Prevention and What to Do | `html-conditions/poisoning-prevention-and-what-to-do-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Emergency content and overlap | duplicate resolution / defer | Compare with Poisoning and Accidental Ingestion |
| Safe Medicine Use at Home | `html-conditions/safe-medicine-use-at-home-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Medication/dosing safety | keep draft / defer | Strict medication-governance review |
| When to Seek Urgent Medical Care | `html-conditions/when-to-seek-urgent-medical-care-parent-guide.html` | Parent Education | pending-clinician-review | 2026-05-24 | Broad urgent-recognition content and overlap | duplicate resolution / defer | Compare with Red Flags: When to Seek Urgent Medical Care |
| Asthma in Children | `html-conditions/asthma-in-children.html` | Respiratory | pending-clinician-review | 2026-05-18 | Medication/dose and action-plan implications | keep draft / defer | Respiratory specialist/current-guideline review |
| Cough in Children | `html-conditions/cough-in-children.html` | Respiratory | pending-clinician-review | 2026-05-19 | Broad differential and medicine boundary | keep draft / defer | Clinician review; avoid treatment algorithms |

## 7. Possible Incomplete Guides or Completion Work

No obvious placeholder page was found. Automated inspection cannot reliably determine whether clinical content is complete, so clinical completeness remains **Needs confirmation**. The following are the identifiable structural or metadata completion candidates.

| Resource title or group | File path | Issue observed | Completion type needed | Risk level | Suggested batch type |
| --- | --- | --- | --- | --- | --- |
| BCG Scar and Lump | `html-conditions/bcg-scar-and-lump.html` | Reference metadata appears truncated to `RCH Kids Health` | references | high | Batch A metadata/reference cleanup after source confirmation |
| Travel Vaccination for Children | `html-conditions/travel-vaccination-for-children.html` | Reference metadata appears truncated to `CDC Travelers` | references | high | Batch A metadata/reference cleanup after current-source confirmation |
| Hand Hygiene and Cough Etiquette | `html-conditions/hand-hygiene-and-cough-etiquette.html` | Reference metadata is unusually short compared with page references | references | low | Batch A metadata/reference cleanup |
| Bedwetting older URL | `html-conditions/bedwetting-parent-guide.html` | Intentionally thin redirect stub with only two content sections | redirect decision | low | Batch C redirect verification |
| Temper-tantrum older URL | `html-conditions/temper-tantrums-parent-guide.html` | Intentionally thin redirect stub with only two content sections | redirect decision | low | Batch C redirect verification |
| Reviewed pages with stale visible body/footer status wording | `html-conditions/autism-early-concerns-parent-awareness-guide.html`; `autism-early-signs-parent-guide.html`; `breastfeeding-parent-guide.html`; `childhood-overweight-and-obesity.html`; `clubfoot-parent-guide.html`; `daytime-wetting-parent-guide.html`; `developmental-dysplasia-of-hip-parent-guide.html`; `growing-pains-parent-guide.html`; `learning-difficulties-school-support-parent-guide.html`; `menstrual-health-parent-guide.html`; `osgood-schlatter-parent-guide.html`; `puberty-and-normal-growth-changes-parent-guide.html`; `puberty-parent-guide.html`; `scoliosis-parent-guide.html`; `screen-time-and-behaviour-parent-guide.html`; `severs-disease-parent-guide.html`; `tics-parent-guide.html` | Direct metadata is published/reviewed, while visible body/footer wording still says draft or pending | metadata/body consistency | low to moderate | Batch A consistency cleanup only |
| Pending pages with stale visible body/footer status wording | `html-conditions/colic-in-babies.html`; `exam-stress-parent-guide.html` | Metadata is published/pending, while visible body/footer wording says draft/pending | metadata/body consistency | moderate to high | Batch A consistency cleanup only; do not change review state |
| All other pages | Various | No structural evidence of incompleteness; medical completeness cannot be inferred | content expansion | Needs confirmation | Review only when selected for a clinician-led batch |

## 8. Duplicate or Overlapping Guide Candidates

| Topic cluster | Files involved | Overlap concern | Suggested action | Risk level |
| --- | --- | --- | --- | --- |
| Autism early concerns/signs | `autism-early-concerns-parent-awareness-guide.html`; `autism-early-signs-parent-guide.html` | Very close purpose, structure, and assessment wording | consolidate later or clearly differentiate; do not change now | moderate |
| Bedwetting/nocturnal enuresis/daytime wetting | `bedwetting-nocturnal-enuresis-parent-guide.html`; `bedwetting-parent-guide.html`; `daytime-wetting-parent-guide.html` | Redirect is resolved, but terminology and relationship to daytime wetting should remain clear | keep redirect; keep daytime wetting separate; verify navigation | moderate |
| Temper tantrums/behaviour | `temper-tantrums-and-behaviour-regulation-parent-guide.html`; `temper-tantrums-parent-guide.html`; `positive-behaviour-guidance-parent-guide.html` | Redirect is resolved; broader behaviour guide may still overlap | keep redirect; keep broader guide separate if purpose remains distinct | low |
| Puberty guidance | `puberty-and-normal-growth-changes-parent-guide.html`; `puberty-parent-guide.html`; early/delayed puberty pages | Substantial normal/early/late puberty overlap | compare and differentiate or consolidate later | moderate |
| Infant crying/colic | `baby-crying-what-is-normal.html`; `colic-in-babies.html`; `infant-colic-parent-guide.html` | Repeated reassurance, normal crying, colic, and danger-sign content | compare before review; likely consolidate or sharply differentiate | high |
| Breastfeeding | `breastfeeding-parent-guide.html`; `breastfeeding-basics-parent-guide.html` | Similar parent education and feeding-adequacy boundaries | compare; keep separate only if distinct scope is documented | high |
| Screen time | `screen-time-parent-guide.html`; `screen-time-and-behaviour-parent-guide.html` | Digital wellness and behaviour advice overlap | keep separate only with clear distinct purpose | low |
| Burns | `burns-and-scalds-parent-guide.html`; `burns-and-scalds-in-children-parent-guide.html` | Two draft emergency guides on same topic | consolidate later after high-caution review | defer |
| Head injury | `head-injury-in-children-parent-guide.html`; `minor-head-injury-concussion-parent-guide.html` | Overlapping injury and urgent-recognition guidance | consolidate or clearly separate after safety review | defer |
| Poisoning | `poisoning-accidental-ingestion-parent-guide.html`; `poisoning-prevention-and-what-to-do-parent-guide.html` | Overlapping prevention and emergency response | consolidate later after poisoning-safety review | defer |
| Urgent medical care | `red-flags-urgent-care.html`; `when-to-seek-urgent-medical-care-parent-guide.html`; `child-first-aid-basics-parent-guide.html` | Broad urgent-recognition/first-response overlap | define canonical roles after high-caution review | defer |
| Feeding/growth/nutrition | Formula Feeding; Breastfeeding Basics; Breastfeeding; Growth Faltering; Newborn Weight Loss and Gain; age-stage nutrition guides | Shared feeding adequacy and growth-monitoring language | keep distinct by age/purpose; cross-check consistency | high |
| Infection/school/contagion wording | Common Cold; Chickenpox; HFMD; Impetigo; Scabies; Conjunctivitis; Measles; Pertussis and related pages | Repeated school exclusion, spread, hygiene, and contact wording may become inconsistent | retain separate disease guides; run a later cross-page wording audit | moderate to high |
| Vaccination/missed-dose cluster | Catch-up Vaccination; Missed or Delayed Vaccines; Vaccination Records and Missed Doses; Vaccination FAQ; related vaccine pages | Repeated record, catch-up, safety, and schedule-dependent concepts | keep separate only where parent purpose differs; current guidance review required | high |

## 9. High-Risk Pages to Defer

| Resource/topic | Reason to defer | Required review type before public finalization |
| --- | --- | --- |
| Vaccination and catch-up vaccination pages | Current schedules, intervals, contraindications, records, special conditions, and travel guidance can change | Current IAP/ACVIP/Indian-government source verification plus clinician review |
| Safe Medicine Use at Home; Asthma; Vitamins and Minerals; medicine-related wording | Dosing, medicine selection, contraindication, and patient-specific action risk | Medication-governance and clinician review |
| Child First Aid; choking; nosebleeds; foreign bodies; bites | First-response technique and urgency are safety critical | Emergency/first-aid clinician review |
| Dengue; diphtheria; encephalitis; Kawasaki/MIS-C; malaria; measles; meningitis; osteomyelitis; pneumonia; rickettsial fever; tuberculosis; typhoid; pertussis; serious UTI | Serious infection, public-health, urgent-recognition, test, or treatment implications | Serious-infection specialist/current-source review |
| Red Flags and When to Seek Urgent Medical Care | Broad triage and urgent-recognition guidance | High-caution urgent-care review |
| Newborn Danger Signs; jaundice; weight loss/gain; premature baby care; safe sleep; cord care; normal newborn care | Young infants can deteriorate quickly; feeding and safety guidance is high consequence | Neonatal clinician and current-source review |
| Febrile Seizures and encephalitis warning signs | Seizure first aid and emergency escalation | Neurology/emergency clinician review |
| Allergy/anaphylaxis-related wording | Immediate-action and emergency medicine risk; no standalone anaphylaxis file identified in the current pool | Allergy/emergency clinician review before any future guide |
| Poisoning pages | Immediate response and harmful-action risk | Poisoning/emergency clinician review |
| Burns, fractures/injury, head injury, SCFE/SUFE | First aid, imaging/referral, weight-bearing, and urgent-action implications | Injury/orthopaedic/emergency clinician review |
| Mental-health warning signs, anxiety, body image, bullying, school refusal, consent/safety, substance use | Crisis, self-harm, abuse, safeguarding, and immediate-safety pathways | Mental-health/safeguarding specialist review |
| Child Travel Health; Safe Food, Water and Deworming | Current destination guidance, infection prevention, medication and deworming implications | Current travel/public-health source verification plus clinician review |

## 10. Candidate Batch 7 Resources

Most simpler Growth & Development candidates have already been completed in Batches 1 to 6. The remaining pool has materially higher caution. The safest practical Batch 7 is therefore a **small moderate-caution common-illness clinician-review batch**, limited to five resources and focused on conservative wording rather than content expansion.

| Resource title | File path | Category | Why suitable for Batch 7 | Caution level | Review focus |
| --- | --- | --- | --- | --- | --- |
| Common Cold in Children | `html-conditions/common-cold-in-children.html` | Respiratory | Common self-limited illness; no emergency or schedule focus | moderate-low | Antibiotic/medicine boundary, red flags, parent-friendly reassurance |
| Middle Ear Infection / Otitis Media in Children | `html-conditions/03-middle-ear-infection-parent-guide.html` | Fever & Infections | Common condition suitable for stewardship-focused review | moderate | Antibiotic wording, pain/fever boundaries, hearing and escalation cues |
| Tonsillitis / Sore Throat in Children | `html-conditions/05-tonsillitis-parent-guide.html` | Fever & Infections | Common condition; can be reviewed without adding treatment algorithms | moderate | Antibiotic stewardship, hydration, airway/red-flag wording |
| Impetigo in Children | `html-conditions/06-impetigo-parent-guide.html` | Fever & Infections | Common localized infection with parent hygiene/school guidance | moderate | Antibiotic/steroid cautions, spread, school wording, red flags |
| Infant Colic | `html-conditions/infant-colic-parent-guide.html` | Parent Education | Parent-education topic, selected only after overlap comparison | moderate | Differentiate from Baby Crying/Colic in Babies; verify infant danger signs and non-treatment boundaries |

Batch 7 should exclude Infant Colic if the overlap comparison recommends consolidation first. In that case, keep the batch at four resources rather than substituting a higher-risk page.

## 11. Candidate Completion Batches

### Batch A: Metadata/reference cleanup only

- Correct or complete reference metadata for BCG Scar and Lump, Travel Vaccination for Children, and Hand Hygiene and Cough Etiquette only after confirming the intended sources.
- Align stale visible body/footer status wording with already-current metadata on the identified 19 pages.
- Reconcile or intentionally regenerate the stale checked-in `data/conditions-index.json` only in a separate generated-data PR; do not mix that action with clinical completion.
- Do not change `status`, `medical_review_status`, `last_reviewed`, or clinical wording in a metadata/reference cleanup PR unless separately approved.

### Batch B: Low-risk content-completion candidates

No clearly low-risk unfinished page was identified from structure alone. The closest practical candidates are the proposed moderate-caution Batch 7 common-illness resources. Any content-completion work should be limited to 3 to 5 pages, source-verified, and clinician-directed.

### Batch C: Duplicate/redirect cleanup candidates

- Verify the two existing bedwetting and tantrum redirect stubs and their navigation behavior.
- Compare autism early-concern/sign pages.
- Compare infant crying/colic pages.
- Compare puberty pages.
- Compare breastfeeding pages.
- Define canonical roles for burns, head injury, poisoning, urgent-care, and screen-time clusters before any consolidation.

### Batch D: High-caution deferred clinical review candidates

- Vaccination/current-guideline pages.
- Medication/dosing and treatment-boundary pages.
- Emergency, first-aid, poisoning, burns, injury, urgent-recognition, and serious-infection pages.
- Newborn/young-infant safety pages.
- Mental-health crisis, safeguarding, substance-use, abuse, and immediate-safety pages.
- Acute respiratory and gastrointestinal pages with breathing, dehydration, or escalation risk.

## 12. Recommended Workflow After Audit

1. First merge this audit PR.
2. Then create one small PR for metadata-only corrections, if needed.
3. Then create small content-completion PRs of 3 to 5 low-risk or moderate-low-risk pages at a time.
4. Then create review-pack PRs.
5. Only after clinician review and source verification, mark resources reviewed.
6. Never complete all unfinished guides in one large PR.

## 13. Final Warning

This audit does not approve, publish, complete, mark reviewed, redirect, retire, consolidate, or clinically validate any resource. Caution classifications and suggested actions are planning aids only. Where automated inspection cannot establish clinical completeness, the correct result is **Needs confirmation**.
