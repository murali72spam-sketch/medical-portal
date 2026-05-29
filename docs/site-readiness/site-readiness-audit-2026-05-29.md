# Clinical Portal 2026 — Site Readiness Audit and Completion Plan

Audit date: 29 May 2026

Scope: Documentation-only site-readiness audit after Batch 5 finalization. This document does not edit HTML resources, medical content, metadata, status, `medical_review_status`, `last_reviewed`, scripts, styles, package files, tests, legal pages, or `data/conditions-index.json`.

## 1. Executive Summary

Clinical Portal 2026 is already online on Vercel at `https://medical-portal-brown.vercel.app`, and the repository now has five completed clinician-reviewed resource batches.

The site is not yet ready to be treated as fully active for wider public use without final public-readiness checks. The main blockers are not basic build or indexing failures; they are governance and launch-readiness gaps:

- 106 of 145 indexed resources remain `pending-clinician-review`.
- 35 indexed resources remain `status: draft`.
- 20 validation warnings remain, all governance/safety warnings rather than build errors.
- Some resources have published metadata while still showing visible draft or pending-review wording.
- Duplicate/near-duplicate resources still need staged comparison decisions.
- `sitemap.xml`, `robots.txt`, favicon/webmanifest assets, `404.html`, OpenGraph/social preview metadata, and a custom domain are not present in the repository.
- Legal/privacy coverage exists, including Google Form feedback wording, but it should be checked once more against the live Google Form fields before wider launch.

Go/no-go recommendation: no-go for broad public promotion until the minimum launch checklist in section 14 is complete. The site can remain online for controlled review and limited sharing.

## 2. Current Deployment Status

Current production URL: `https://medical-portal-brown.vercel.app`

Observed status:

- The Vercel site responds and shows the Clinical Portal 2026 homepage.
- The homepage includes medical-lead identity, parent-education positioning, privacy reassurance, website feedback, disclaimer links, and search UI.
- The static HTML fallback shows zero resource counts until JavaScript loads `data/conditions-index.json`; local QA should remain the source of truth for functional search and index rendering.
- `vercel.json` is present and uses `npm run build` with the repository root as the output directory.
- No custom production domain is documented in the repository.

Recommended deployment stance: keep the Vercel site online, but label the launch internally as controlled/public-readiness review rather than final wider public launch.

## 3. Completed Governance Milestones

Clinician-reviewed batches completed:

- Batch 1: growth/endocrine resources finalized and reviewed.
- Batch 2: nutrition/feeding resources finalized and reviewed.
- Batch 3: low-risk resources finalized and reviewed.
- Batch 4: prevention/behaviour/development resources finalized and reviewed.
- Batch 5: skin/adolescent/MSK resources finalized and reviewed.

Latest merged PR noted for this audit:

- PR #92: Finalize clinician reviewed batch 5 resources.

Relevant governance documents already present:

- `docs/governance/clinician-review-and-finalization-workflow.md`
- `docs/governance/live-website-feedback-workflow.md`
- `docs/governance/content-protection-and-copyright-policy.md`
- `docs/clinical-review/duplicate-and-metadata-cleanup-plan.md`
- Batch review plans, review packs, and wording checklists for Batches 3, 4, and 5.
- Batch 1 and Batch 2 plans/review packs under `docs/governance/`.

## 4. Current Resource Inventory

Source: `data/conditions-index.json` after `npm.cmd run build`.

Total indexed resources: 145

By clinical review status:

| Review status | Count |
| --- | ---: |
| `reviewed` | 39 |
| `pending-clinician-review` | 106 |

By publication status:

| Status | Count |
| --- | ---: |
| `published` | 110 |
| `draft` | 35 |

By category:

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

## 5. Reviewed vs Pending Resources

The reviewed pool has grown substantially after five batches, but the larger site remains mixed-status.

Reviewed resources: 39

Pending clinician review resources: 106

Pending clinician review by category:

| Category | Pending count |
| --- | ---: |
| Fever & Infections | 22 |
| Gastrointestinal | 4 |
| Growth & Development | 25 |
| Nutrition & Feeding | 5 |
| Parent Education | 30 |
| Respiratory | 6 |
| Vaccination | 14 |

No Skin & Allergy resources remain pending in the generated index after Batch 5.

## 6. Remaining Clinical Review Work

Remaining pending resources by category:

Fever & Infections: Chickenpox in Children; COVID-19 in Children; Dengue Fever; Diphtheria; Encephalitis Warning Signs; Febrile Seizures in Children; Hand, Foot & Mouth Disease in Children; Impetigo in Children; Infectious Mononucleosis; Kawasaki Disease / MIS-C Awareness Guide; Malaria; Measles in Children; Meningitis in Children; Middle Ear Infection / Otitis Media in Children; Osteomyelitis; Rickettsial Fever / Scrub Typhus; Scabies in Children; Tonsillitis / Sore Throat in Children; Tuberculosis Parent Overview; Typhoid Fever; Urinary Tract Infection / UTI in Children; Whooping Cough / Pertussis in Children.

Gastrointestinal: Abdominal Pain in Children; Constipation in Children; Gastroenteritis / Diarrhoea in Children; Reflux in Infants and Children.

Growth & Development: Adolescent Mental Health Warning Signs; Anxiety in Children; Autism Early Concerns - Parent Awareness Guide; Autism: Early Signs Parents May Notice; Bedwetting; Body Image Concerns in Teenagers; Bullying and Cyberbullying: Parent Guide; Clubfoot / CTEV Parent Overview; Daytime Wetting in Children; Developmental Dysplasia of the Hip (DDH); Exam Stress and Performance Pressure; Growing Pains in Children; Learning Difficulties and School Support; Menstrual Health for Adolescents; Newborn Weight Loss and Gain; Osgood-Schlatter Disease; Puberty and Normal Growth Changes - Parent Guide; Puberty: Early and Late Changes; School Refusal and School Avoidance; Scoliosis in Children; Screen Time and Behaviour - Parent Guide; Sever's Disease / Heel Pain; Slipped Upper Femoral Epiphysis (SCFE/SUFE); Temper Tantrums in Young Children; Tics in Children.

Nutrition & Feeding: Breastfeeding; Childhood Overweight and Obesity; Formula Feeding Guidance; Growth Faltering / Poor Weight Gain; Vitamins and Minerals.

Parent Education: Baby Crying: What is Normal?; Breastfeeding Basics; Burns and Scalds; Burns and Scalds in Children; Child First Aid Basics; Child Travel Health; Choking Prevention and First Response; Colic in Babies; Dog Bite and Animal Bite Care; Foreign Body in Ear, Nose, or Eye; Head Injury in Children; Home Safety for Toddlers; Infant Colic; Minor Head Injury and Concussion; Newborn Danger Signs; Newborn Jaundice; Normal Newborn Care; Nosebleeds in Children; Poisoning and Accidental Ingestion; Poisoning Prevention and What to Do; Premature Baby Care at Home; Red Flags: When to Seek Urgent Medical Care; Safe Food, Water and Deworming; Safe Medicine Use at Home; Safe Sleep for Infants; Talking to Teenagers About Safety, Boundaries and Consent; Umbilical Cord Care; Vaping, Tobacco and Alcohol in Teenagers; Vulvovaginitis in Children; When to Seek Urgent Medical Care.

Respiratory: Asthma in Children; Bronchiolitis in Infants; Common Cold in Children; Cough in Children; Croup in Children; Pneumonia in Children.

Vaccination: BCG Scar and Lump; Catch-up Vaccination Parent Guide; Fever After Vaccination; HPV Vaccine for Adolescents; Influenza Vaccine in Children; Missed or Delayed Vaccines; Travel Vaccination for Children; Vaccination FAQ for Parents; Vaccination in Children with Asthma or Allergy; Vaccination in Special Medical Conditions; Vaccination Records and Missed Doses; Vaccination: Why It Matters; Vaccine Myths and Misconceptions; Vaccine Side Effects and Aftercare.

Important governance rule: do not mark any of these resources as reviewed without the staged workflow already documented in the clinician-review governance files.

## 7. Duplicate / Metadata Cleanup Work

Already documented duplicate or near-duplicate pages:

- Tantrums:
  - Finalized Batch 3 page: `html-conditions/temper-tantrums-and-behaviour-regulation-parent-guide.html`
  - Older page needing decision: `html-conditions/temper-tantrums-parent-guide.html`
- Bedwetting:
  - Finalized Batch 3 page: `html-conditions/bedwetting-nocturnal-enuresis-parent-guide.html`
  - Older page needing decision: `html-conditions/bedwetting-parent-guide.html`

Already documented metadata/category cleanup items:

- Ringworm / Tinea in Children currently sits under Fever & Infections and may belong better under Skin & Allergy or a future skin/infections grouping.
- Conjunctivitis / Pink Eye in Children currently sits under Fever & Infections, while allergic and irritant causes may overlap with Skin & Allergy.

Minimum cleanup approach:

- Compare duplicate pairs side by side before any merge, redirect, archive, delete, or index removal.
- Keep category moves in a metadata-only PR if approved.
- Do not delete older pages until production navigation and search impact is understood.

## 8. Legal / Privacy / Safety Readiness

Present legal pages:

- `legal/disclaimer.html`
- `legal/privacy-policy.html`
- `legal/terms-of-use.html`
- `legal/copyright.html`

Current strengths:

- The homepage and legal pages state that the portal is educational only and not a substitute for medical consultation.
- The privacy policy says the initial version has no patient login, appointment booking, prescription service, medical-record storage, contact form, or patient-specific submission feature.
- The privacy policy includes a section on the external Google Form for optional anonymous website feedback.
- The homepage feedback card warns users not to submit names, phone numbers, patient details, symptoms, reports, appointment requests, prescriptions, or medical questions.
- `docs/governance/live-website-feedback-workflow.md` documents intended Google Form handling and moderation boundaries.

Remaining legal/privacy gaps before wider launch:

- Verify the live Google Form fields exactly match the documented safe field list and do not request personal identifiers or medical details.
- Add an operational review cadence for the Google Sheet, including deletion/ignore handling for patient-specific or urgent submissions.
- Consider adding a short note that Google Forms/Google Sheets are external Google services governed by Google terms and privacy practices.
- Do not add analytics, tracking, visitor counters, backend forms, appointment requests, or AI query logging without separate privacy/legal governance.

## 9. Homepage / Search / Navigation Readiness

Current implementation:

- Homepage search and category filtering are implemented in `script.js`.
- `script.js` fetches `data/conditions-index.json`.
- Search guidance tells users not to enter personal medical details.
- Local Batch 10 QA confirms homepage search/trust wording and mobile menu search behavior.

Readiness concerns:

- Static fallback HTML shows zero counts before JavaScript loads; this is acceptable only if production JavaScript and index fetch work consistently.
- Production should be manually smoke-tested on desktop and Android before wider promotion.
- Category counts and search results should be verified after every deployment.
- The Medication Information category remains disabled/coming soon, which is appropriate until governance exists.

## 10. Mobile / Print / Accessibility Readiness

Current strengths:

- The site uses responsive static HTML/CSS.
- Homepage search has privacy guidance and accessible labels.
- QA includes a mobile menu/search no-horizontal-overflow check.
- Resource pages include print-friendly parent-guide intent and legal footer language.

Remaining checks before public launch:

- Manual Android testing on Samsung Galaxy S24 Ultra or similar: homepage, resource library, search, filters, feedback link, legal links, and several long resource pages.
- Print/PDF checks for at least one reviewed page in each major category.
- Keyboard-only navigation check for header, search, filters, and resource cards.
- Screen-reader spot check for search results, mobile menu state, and legal/disclaimer discoverability.
- Visual check that draft/pending labels do not confuse parents on published pages.

## 11. Technical / Deployment Readiness

Build and QA results from this audit:

- `npm.cmd run build`: passed; generated `data\conditions-index.json` with 145 resources.
- `npm.cmd run validate:resources`: passed with 0 errors and 20 warnings.
- `npm.cmd run qa:batch10 -- --reporter=list`: passed, 9/9 tests.
- `Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName`: no duplicate `.png.png` filenames found.

Launch asset checks:

| Item | Status |
| --- | --- |
| `sitemap.xml` | Missing from repository |
| `robots.txt` | Missing from repository |
| Favicon / `.ico` / webmanifest | Missing from repository search |
| OpenGraph/social preview metadata | Not found in homepage search |
| `404.html` | Missing from repository |
| Custom domain | Not present in repository/deployment notes |
| Vercel deployment config | Present |
| Static data index | Present |
| Legal pages | Present |

## 12. Known Validation Warnings

`npm.cmd run validate:resources` reported 0 errors and 20 warnings.

Clinical governance warnings:

- `03-middle-ear-infection-parent-guide.html`: antibiotic
- `04-conjunctivitis-parent-guide.html`: antibiotic, steroid
- `05-tonsillitis-parent-guide.html`: antibiotic
- `06-impetigo-parent-guide.html`: antibiotic, steroid
- `09-osteomyelitis-parent-guide.html`: antibiotic
- `19-ringworm-parent-guide.html`: steroid
- `asthma-in-children.html`: dose
- `bcg-scar-and-lump.html`: steroid
- `child-travel-health.html`: antibiotic
- `childhood-overweight-and-obesity.html`: insulin
- `common-cold-in-children.html`: antibiotic
- `cough-in-children.html`: antibiotic
- `hpv-vaccine-parent-guide.html`: dose
- `hypothyroidism-in-children.html`: levothyroxine
- `short-stature-in-children.html`: steroid
- `typhoid-fever.html`: antibiotic
- `vaccination-faq-for-parents.html`: dose, steroid
- `vaccination-in-children-with-asthma-allergy.html`: emergency treatment
- `vaccination-in-special-medical-conditions.html`: steroid

Vaccination safety warning:

- `catch-up-vaccination-parent-guide.html`: minimum interval

These warnings are not build failures, but they are launch-governance warnings and should be resolved, documented, or deliberately accepted before broad promotion.

## 13. Risks Before Wider Public Launch

Major risks:

- Users may assume all published resources are fully clinician reviewed when 106 resources remain pending clinician review.
- Published pages with visible draft/pending language can reduce trust and confuse launch status.
- High-caution topics remain in the pending pool, especially vaccination, antibiotics, endocrine medicines, emergency/urgent-care, mental-health/safety, and first-aid-adjacent topics.
- Missing sitemap/robots/canonical/social/404/favicon basics make the site feel unfinished and reduce search/discovery quality.
- External Google Form feedback can collect unexpected personal or medical information unless the form, confirmation text, and review workflow stay tightly controlled.
- Duplicate pages can split search/navigation traffic and confuse which page is current.

## 14. Minimum Tasks Before “Active Online” Status

Must complete before broad public launch:

1. Confirm production homepage search, category counts, resource cards, reviewed badges, and filters load correctly on desktop and Android.
2. Resolve or document acceptance of the 20 validation warnings, with staged clinician review where needed.
3. Review visible draft/pending wording on published pages and decide whether the public launch should include those pages as published, draft, or intentionally pending.
4. Complete duplicate comparison plans for tantrums and bedwetting, or clearly document temporary coexistence.
5. Decide category placement for Ringworm and Conjunctivitis in a metadata-only workflow.
6. Add launch basics: `sitemap.xml`, `robots.txt`, favicon, 404 page, and OpenGraph/social preview metadata.
7. Verify legal/privacy wording against the actual live Google Form and Google Sheet workflow.
8. Run a final mobile, print, accessibility, and link smoke test.
9. Keep unreviewed resources pending until the staged clinician-review workflow supports promotion.

## 15. Nice-to-Have Tasks After Launch

Can improve after launch:

- Custom domain setup and canonical URL plan.
- Sitemap generation automation.
- Social preview image design.
- More comprehensive Playwright coverage across reviewed resource batches.
- Per-category landing pages.
- Printable PDF workflow after content governance stabilizes.
- Optional analytics only after privacy review.
- Doctors-only feedback form, if separated from parent feedback and privacy-reviewed.
- Future AI/search assistant only after the existing governance plan is implemented.

## 16. Recommended Next 3 PRs

1. Launch infrastructure PR:
   Add `robots.txt`, `sitemap.xml`, favicon assets, `404.html`, OpenGraph/social metadata, and canonical URL approach. Keep this technical/static and avoid medical content edits.

2. Public-status consistency PR:
   Audit pages where `status: published` still shows visible Draft or pending-review wording. Decide whether to align public wording, status, or launch visibility through the established governance workflow. Do not mark pending pages reviewed in this PR.

3. Duplicate and metadata cleanup PR:
   Compare tantrums and bedwetting duplicate pairs, and separately review Ringworm and Conjunctivitis category placement. Keep content/category/status decisions staged and documented.

## 17. Final Go/No-Go Checklist

Go only when all must-have items are complete:

- [ ] Build passes.
- [ ] Resource validation has 0 errors.
- [ ] Remaining validation warnings are resolved or explicitly accepted with governance notes.
- [ ] Batch smoke QA passes.
- [ ] Production resource index loads and homepage counts/search work.
- [ ] Android mobile smoke test passes.
- [ ] Print checks pass for representative reviewed pages.
- [ ] Legal pages are reachable from homepage and resource pages.
- [ ] Google Form fields and privacy wording are verified.
- [ ] No unapproved patient-data collection, analytics, tracking, backend, or AI query logging exists.
- [ ] `sitemap.xml` exists.
- [ ] `robots.txt` exists.
- [ ] Favicon exists.
- [ ] OpenGraph/social preview metadata exists.
- [ ] `404.html` exists.
- [ ] Duplicate-page plan is accepted.
- [ ] Pending resources remain pending until staged clinician review is complete.

Current recommendation: controlled online review may continue, but wider public launch should wait until the minimum tasks in section 14 are complete.
