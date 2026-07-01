# Clinical Portal 2026 - Post Batch 13 Pending Resources Audit

## Purpose

Audit remaining unfinished or pending resources after Batch 13 finalization.

## Current tracker

Calculated from `data/conditions-index.json`, `html-conditions/*.html`, and `assets/qr/*.svg` on the current audit branch after syncing `main` on 1 July 2026.

Important repository-state note: current `main` does not yet contain Batch 13 finalization metadata. The eight Batch 13 resources still appear as `published` with `medical_review_status: pending-clinician-review` in repository metadata. This audit records the repository state as found, not memory or intended workflow state.

| Metric | Count |
| --- | ---: |
| Total resources/htmls | 145 |
| Resources in generated index | 145 |
| Published + reviewed | 110 |
| Published + pending clinician review | 8 |
| Draft + pending review | 25 |
| Reviewed draft redirects | 2 |
| Remaining guides needing review/completion or audit follow-up | 37 |
| QR SVG count | 110 |
| Print coverage among reviewed pages | 110 / 112 |
| QR block coverage among reviewed pages | 110 / 112 |
| Related Guides coverage among reviewed pages | 110 / 112 |
| QR SVG coverage among reviewed pages | 110 / 112 |

The two reviewed pages without print/QR/Related Guides coverage are draft redirect pages and should remain excluded from standard reviewed-page finalization unless the redirect pattern changes.

## Pending / unfinished resources table

| # | Title | Filename | Category | Status | medical_review_status | Last reviewed | Author | References present | Disclaimer present | Print button | QR block | Related Guides | QR SVG | Main issue | Recommended next action |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Osteomyelitis | `09-osteomyelitis-parent-guide.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-10 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Draft pending clinical review | Defer finalization; include in a fever/infection clinician-review batch |
| 2 | Febrile Seizures in Children | `10-febrile-seizures-parent-guide.html` | Fever & Infections | published | pending-clinician-review | 2026-05-21 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main | Complete Batch 13 finalization before treating as reviewed |
| 3 | Asthma in Children | `asthma-in-children.html` | Respiratory | draft | pending-clinician-review | 2026-05-18 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Draft pending clinical review; respiratory medication-risk topic | Defer finalization; needs extra clinician review |
| 4 | Redirect: Bedwetting / Nocturnal Enuresis - Parent Guide | `bedwetting-parent-guide.html` | Growth & Development | draft | reviewed | 2026-06-05 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Reviewed draft redirect lacks standard reviewed-page tools by design | Keep excluded unless redirect pattern is changed |
| 5 | Burns and Scalds in Children | `burns-and-scalds-in-children-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Duplicate/overlapping burns draft; pending review | Consolidate duplicate target before clinical review |
| 6 | Burns and Scalds | `burns-and-scalds-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-22 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Duplicate/overlapping burns draft; pending review | Consolidate duplicate target before clinical review |
| 7 | Child First Aid Basics | `child-first-aid-basics-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | First-aid draft pending review | Include in safety/first-aid review batch |
| 8 | Child Travel Health | `child-travel-health.html` | Parent Education | published | pending-clinician-review | 2026-05-13 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main; travel vaccine/prophylaxis-sensitive topic | Complete Batch 13 finalization; avoid adding clinical instructions without review |
| 9 | Choking Prevention and First Response | `choking-prevention-and-first-response-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | First-response draft pending review | Include in safety/first-aid review batch |
| 10 | Dengue Fever | `dengue-fever.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-12 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Infection draft pending review | Include in fever/infection review batch |
| 11 | Dog Bite and Animal Bite Care | `dog-bite-animal-bite-care-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-22 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Bite-care/prophylaxis-sensitive draft pending review | Include in safety/first-aid review batch with extra caution |
| 12 | Encephalitis Warning Signs | `encephalitis-warning-signs.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-12 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | High-risk warning-sign draft pending review | Include in fever/infection review batch with extra caution |
| 13 | Foreign Body in Ear, Nose, or Eye | `foreign-body-ear-nose-eye-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-22 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | First-aid draft pending review | Include in safety/first-aid review batch |
| 14 | Hand, Foot & Mouth Disease in Children | `hand-foot-mouth-disease.html` | Fever & Infections | published | reviewed | 2026-06-06 | Dr. Murali Gopal | Yes | Yes | Yes | Yes | Yes | Yes | Possible generated-index mismatch | Regenerate/verify index in a generated-files-only maintenance step |
| 15 | Head Injury in Children | `head-injury-in-children-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Head injury draft pending review | Include in safety/first-aid review batch with extra caution |
| 16 | Home Safety for Toddlers | `home-safety-for-toddlers-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Safety draft pending review | Include in safety/first-aid review batch |
| 17 | Kawasaki Disease / MIS-C Awareness Guide | `kawasaki-disease-mis-c-awareness-guide.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-12 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | High-risk fever/inflammation draft pending review | Include in fever/infection review batch with extra caution |
| 18 | Malaria | `malaria.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-12 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Infection/travel/prophylaxis-sensitive draft pending review | Include in fever/infection review batch with extra caution |
| 19 | Minor Head Injury and Concussion | `minor-head-injury-concussion-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-22 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Head injury draft pending review | Include in safety/first-aid review batch with extra caution |
| 20 | Newborn Danger Signs | `neonatal-danger-signs-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-21 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | High-risk newborn warning-sign draft pending review | Include in newborn review batch with extra caution |
| 21 | Newborn Jaundice | `newborn-jaundice-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-21 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Newborn draft pending review | Include in newborn review batch |
| 22 | Normal Newborn Care | `normal-newborn-care-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-21 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Newborn draft pending review | Include in newborn review batch |
| 23 | Nosebleeds in Children | `nosebleeds-in-children-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-22 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main | Complete Batch 13 finalization before treating as reviewed |
| 24 | Poisoning and Accidental Ingestion | `poisoning-accidental-ingestion-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-22 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Poisoning draft pending review | Include in safety/first-aid review batch with extra caution |
| 25 | Poisoning Prevention and What to Do | `poisoning-prevention-and-what-to-do-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Poisoning duplicate/overlap draft pending review | Consolidate duplicate target before clinical review |
| 26 | Premature Baby Care at Home | `premature-baby-care-at-home.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main; newborn-care topic | Complete Batch 13 finalization before treating as reviewed |
| 27 | Red Flags: When to Seek Urgent Medical Care | `red-flags-urgent-care.html` | Parent Education | published | pending-clinician-review | 2026-05-20 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main; emergency red-flag topic | Complete Batch 13 finalization before treating as reviewed |
| 28 | Safe Medicine Use at Home | `safe-medicine-use-at-home-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Medication-safety draft pending review | Include in safety/first-aid review batch with extra caution |
| 29 | Safe Sleep for Infants | `safe-sleep-for-infants.html` | Parent Education | published | pending-clinician-review | 2026-05-15 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main; infant safety topic | Complete Batch 13 finalization before treating as reviewed |
| 30 | Sever's Disease / Heel Pain | `severs-disease-parent-guide.html` | Growth & Development | published | reviewed | 2026-06-05 | Dr. Murali Gopal | Yes | Yes | Yes | Yes | Yes | Yes | Possible generated-index mismatch | Regenerate/verify index in a generated-files-only maintenance step |
| 31 | Slipped Upper Femoral Epiphysis (SCFE/SUFE) | `slipped-upper-femoral-epiphysis-scfe-parent-guide.html` | Growth & Development | draft | pending-clinician-review | 2026-05-15 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Orthopaedic urgent diagnosis-sensitive draft pending review | Include in musculoskeletal review batch with extra caution |
| 32 | Redirect: Temper Tantrums and Behaviour Regulation - Parent Guide | `temper-tantrums-parent-guide.html` | Growth & Development | draft | reviewed | 2026-06-05 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Reviewed draft redirect lacks standard reviewed-page tools by design | Keep excluded unless redirect pattern is changed |
| 33 | Tuberculosis Parent Overview | `tuberculosis-parent-overview.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-12 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Infection/treatment-sensitive draft pending review | Include in fever/infection review batch with extra caution |
| 34 | Typhoid Fever | `typhoid-fever.html` | Fever & Infections | draft | pending-clinician-review | 2026-05-12 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Infection/antibiotic-sensitive draft pending review | Include in fever/infection review batch with extra caution |
| 35 | Umbilical Cord Care | `umbilical-cord-care-parent-guide.html` | Parent Education | published | pending-clinician-review | 2026-05-21 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main; newborn-care topic | Complete Batch 13 finalization before treating as reviewed |
| 36 | Vitamins and Minerals | `vitamins-and-minerals-parent-guide.html` | Nutrition & Feeding | published | pending-clinician-review | 2026-05-13 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Batch 13 finalization not present on current main; supplement-safety topic | Complete Batch 13 finalization before treating as reviewed |
| 37 | When to Seek Urgent Medical Care | `when-to-seek-urgent-medical-care-parent-guide.html` | Parent Education | draft | pending-clinician-review | 2026-05-24 | Dr. Murali Gopal | Yes | Yes | No | No | No | No | Urgent-care draft pending review; overlaps with red-flags page | Defer finalization; decide whether to merge, redirect, or review separately |

## Batch candidates

### Batch 14

- Theme: Batch 13 finalization gap on current `main`.
- Resources:
  - `10-febrile-seizures-parent-guide.html`
  - `nosebleeds-in-children-parent-guide.html`
  - `red-flags-urgent-care.html`
  - `premature-baby-care-at-home.html`
  - `safe-sleep-for-infants.html`
  - `umbilical-cord-care-parent-guide.html`
  - `child-travel-health.html`
  - `vitamins-and-minerals-parent-guide.html`
- Why grouped together: these are the eight Batch 13 resources that still appear as published + pending clinician review in current repository metadata.
- Clinical risk level: high overall because the group includes emergency red flags, febrile seizures, newborn care, travel health, and supplement safety.
- Source verification needs: confirm Batch 13 review plan, review pack, and Dr. Murali sign-off are present and current before finalization.
- Content completion needed before review: no new medical content should be added; finalization should only update reviewed status, last-reviewed date, reviewed footer, print/QR/Related Guides, QR assets if missing, and generated files as required.

### Batch 15

- Theme: Injury, first-aid, home safety, poisoning, and urgent-care parent guidance.
- Resources:
  - `burns-and-scalds-parent-guide.html`
  - `burns-and-scalds-in-children-parent-guide.html`
  - `child-first-aid-basics-parent-guide.html`
  - `choking-prevention-and-first-response-parent-guide.html`
  - `dog-bite-animal-bite-care-parent-guide.html`
  - `foreign-body-ear-nose-eye-parent-guide.html`
  - `head-injury-in-children-parent-guide.html`
  - `minor-head-injury-concussion-parent-guide.html`
  - `poisoning-accidental-ingestion-parent-guide.html`
  - `safe-medicine-use-at-home-parent-guide.html`
- Why grouped together: all are safety, injury, first-response, or accidental exposure resources for parent education.
- Clinical risk level: high because of first-aid advice, head injury, bites, poisoning, and medication-safety language.
- Source verification needs: RCH/Kids Health Info, NHS, AAP/HealthyChildren, CDC or recognised poison-control/first-aid bodies, and Indian emergency-care guidance where relevant.
- Content completion needed before review: likely yes for duplicate/overlapping burns and poisoning pages; decide canonical page or redirect pattern before clinician review.

### Batch 16

- Theme: Fever, serious infections, newborn danger signs, and selected high-risk draft conditions.
- Resources:
  - `09-osteomyelitis-parent-guide.html`
  - `dengue-fever.html`
  - `encephalitis-warning-signs.html`
  - `kawasaki-disease-mis-c-awareness-guide.html`
  - `malaria.html`
  - `neonatal-danger-signs-parent-guide.html`
  - `newborn-jaundice-parent-guide.html`
  - `normal-newborn-care-parent-guide.html`
  - `tuberculosis-parent-overview.html`
  - `typhoid-fever.html`
- Why grouped together: these drafts carry fever, infection, newborn, or serious-disease warning-sign risk.
- Clinical risk level: high because of diagnostic uncertainty, red flags, antimicrobial/prophylaxis implications, infectious disease severity, and newborn risk.
- Source verification needs: IAP/ACVIP, WHO, CDC, NICE, NHS, RCH/Kids Health Info, Indian government/NHM guidance, and recognised specialty sources.
- Content completion needed before review: likely yes for any pages that imply diagnostic criteria, treatment pathways, antibiotic decisions, prophylaxis, or admission thresholds.

### Later maintenance / separate handling

- `asthma-in-children.html`: high-risk respiratory and medication-adjacent draft; should have a dedicated respiratory review rather than being mixed into safety/infection batches.
- `slipped-upper-femoral-epiphysis-scfe-parent-guide.html`: urgent orthopaedic diagnosis-sensitive draft; can be grouped with a musculoskeletal batch.
- `home-safety-for-toddlers-parent-guide.html`: can join a later safety-prevention batch if Batch 15 is kept to 10 resources.
- `poisoning-prevention-and-what-to-do-parent-guide.html`: compare against `poisoning-accidental-ingestion-parent-guide.html` before deciding whether to review, merge, or redirect.
- `when-to-seek-urgent-medical-care-parent-guide.html`: compare against `red-flags-urgent-care.html` before deciding whether to review, merge, or redirect.
- `bedwetting-parent-guide.html` and `temper-tantrums-parent-guide.html`: reviewed draft redirects; keep excluded from finalization unless redirect governance changes.
- `hand-foot-mouth-disease.html` and `severs-disease-parent-guide.html`: reviewed and published, but flagged for possible generated-index mismatch; handle in generated-files maintenance, not clinical finalization.

## High-risk pages requiring extra caution

These pending or flagged resources should not be finalized until their clinical wording and source references are checked carefully:

- `10-febrile-seizures-parent-guide.html`: seizure first aid and urgent red flags.
- `red-flags-urgent-care.html`: emergency red flags and urgent-care thresholds.
- `when-to-seek-urgent-medical-care-parent-guide.html`: urgent-care thresholds and overlap with red-flags content.
- `neonatal-danger-signs-parent-guide.html`: newborn danger signs.
- `premature-baby-care-at-home.html`: premature newborn care after discharge.
- `safe-sleep-for-infants.html`: infant safety and urgent breathing concerns.
- `umbilical-cord-care-parent-guide.html`: newborn infection warning signs.
- `newborn-jaundice-parent-guide.html`: newborn jaundice escalation risk.
- `normal-newborn-care-parent-guide.html`: newborn care and warning signs.
- `child-travel-health.html`: travel vaccines, malaria/travel prophylaxis risk, food/water safety.
- `vitamins-and-minerals-parent-guide.html`: supplement safety and dosing risk.
- `safe-medicine-use-at-home-parent-guide.html`: medication safety and dosing-adjacent advice.
- `dog-bite-animal-bite-care-parent-guide.html`: rabies/tetanus/antibiotic prophylaxis implications.
- `poisoning-accidental-ingestion-parent-guide.html` and `poisoning-prevention-and-what-to-do-parent-guide.html`: poisoning response and medication ingestion.
- `head-injury-in-children-parent-guide.html` and `minor-head-injury-concussion-parent-guide.html`: head injury and concussion escalation.
- `choking-prevention-and-first-response-parent-guide.html`, `child-first-aid-basics-parent-guide.html`, and `foreign-body-ear-nose-eye-parent-guide.html`: first-response advice.
- `asthma-in-children.html`: medication and respiratory action-plan risk.
- `09-osteomyelitis-parent-guide.html`, `dengue-fever.html`, `encephalitis-warning-signs.html`, `kawasaki-disease-mis-c-awareness-guide.html`, `malaria.html`, `tuberculosis-parent-overview.html`, and `typhoid-fever.html`: serious infections, diagnostic uncertainty, treatment/prophylaxis/antibiotic implications.
- `slipped-upper-femoral-epiphysis-scfe-parent-guide.html`: urgent orthopaedic diagnosis risk.

## Recommended workflow

Each future batch should follow:

1. clinician-review plan
2. clinician-review pack
3. Dr. Murali clinical sign-off
4. finalization PR
5. production verification

Before future finalization, duplicate or overlapping pages should be resolved with a clear canonical target or redirect plan. High-risk pages should avoid adding new clinical advice during finalization and should only be updated after explicit clinician sign-off.

## Explicit non-actions

- No HTML medical content edited.
- No status changed.
- No medical_review_status changed.
- No QR generated.
- No Related Guides added.
- No reviewed footer added.
- No generated files committed.
