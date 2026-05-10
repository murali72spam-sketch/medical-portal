# Clinical Portal 2026

**Project Code:** `CLINICAL-PORTAL-2026`  
**Owner:** Dr. Murali Gopal  
**Status:** Active build project  
**Primary Deployment:** Vercel  
**Frontend Stack:** HTML5 + CSS3 + Vanilla JavaScript  

---

## Project Purpose

Clinical Portal 2026 is a professional, public, read-only paediatric clinical education portal for parents and patients.

The portal will provide:
- verified parent guides,
- PDF patient leaflets,
- weaning and nutrition resources,
- vaccination resources,
- legal information pages,
- and carefully governed interactive paediatric HTML tools.

The portal is for **general educational use only**. It is **not a substitute for medical consultation, diagnosis, or individualized treatment**.

---

## Core Project Decisions

| Area | Final Decision |
|---|---|
| Project name | Clinical Portal 2026 |
| Target repository name | `clinical-portal` |
| Version control | GitHub |
| Primary deployment | Vercel |
| Frontend stack | HTML5 + CSS3 + Vanilla JavaScript |
| Site type | Static, public, read-only, mobile-responsive |
| Patient data | No patient-specific data collected or stored in the initial version |
| Initial content types | Parent guides, PDF leaflets, interactive tools, reference charts |
| Medical verification | All public clinical content must be verified before publication |
| Vaccination content | Use the latest available IAP/ACVIP guidance at the time of creation; do not hard-code an outdated schedule year |

---

## Planned Repository Structure

~~~text
clinical-portal/
│
├── index.html
├── style.css
├── script.js
├── auto-index-generator.js
├── vercel.json
├── package.json
├── .gitignore
├── README.md
│
├── assets/
│
├── data/
│   └── conditions-index.json
│
├── html-conditions/
│
├── legal/
│   ├── disclaimer.html
│   ├── privacy-policy.html
│   ├── terms-of-use.html
│   └── copyright.html
│
└── pdfs/
~~~

### Folder Purpose

| Folder | Purpose |
|---|---|
| `/assets` | Shared images, icons, and other global assets |
| `/data` | Auto-generated and hand-curated metadata files |
| `/html-conditions` | Parent guides, interactive tools, and reference HTML resources |
| `/legal` | Disclaimer, privacy policy, terms of use, and copyright pages |
| `/pdfs` | Printable patient education PDF leaflets |

---

## Resource Metadata Standard

Every HTML resource inside `/html-conditions/` should include a machine-readable metadata block in the `<head>` section.

### Required Metadata Fields

~~~html
<meta name="title" content="">
<meta name="slug" content="">
<meta name="category" content="">
<meta name="resource_type" content="">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="audience" content="">
<meta name="last_reviewed" content="">
<meta name="medical_review_status" content="">
<meta name="featured" content="">
<meta name="status" content="">
~~~

### Recommended Values

| Field | Example Values |
|---|---|
| `resource_type` | `parent-guide`, `interactive-tool`, `reference-chart`, `calculator` |
| `audience` | `parents` |
| `medical_review_status` | `draft`, `reviewed` |
| `featured` | `true`, `false` |
| `status` | `draft`, `reviewed`, `published` |

This metadata allows the auto-index generator to scan `/html-conditions/`, build `/data/conditions-index.json`, and render resources dynamically on the homepage.

---

## Initial Content Taxonomy

1. Respiratory  
2. Gastrointestinal  
3. Nutrition & Feeding  
4. Vaccination  
5. Fever & Infections  
6. Growth & Development  
7. Medication Information  
8. Parent Education  

---

## Initial Priority Content

The first content batch should prioritize high-value parent resources:

1. Fever in Children  
2. Cough in Children  
3. Constipation  
4. Gastroenteritis / Diarrhoea  
5. Weaning Guide  
6. Asthma in Children  
7. Hand, Foot & Mouth Disease  
8. Picky Eating  
9. Vaccination FAQ  
10. Red Flags: When to Seek Urgent Medical Care  

---

## Recommended Build Order

1. Portal shell and visual system  
2. Metadata convention  
3. Legal pages  
4. Auto-index generator  
5. First batch of parent guides  
6. Lower-risk interactive tools  
7. Higher-governance tools such as dosing calculators  

---

## Medical Content Governance

### Approved Reference Sources

Use current, appropriate, established sources such as:
- IAP / ACVIP
- AAP
- RCH Australia / Raising Children Network
- NICE
- GINA
- WHO
- other appropriate specialty-society guidance where relevant

### Mandatory Clinical Rules

- Never invent dosages, schedules, red flags, diagnostic criteria, contraindications, or guideline claims.
- Never publish unverified clinical content.
- If uncertain, mark the item as `UNSURE` or `needs verification` until checked.
- Every public medical resource must include:
  - a disclaimer,
  - references,
  - last-reviewed date,
  - and clear wording that it does not replace medical consultation.
- Vaccination content must be checked against the latest available IAP/ACVIP guidance at the time of creation.
- Dosing calculators are higher-governance tools and must not be published casually.

---

## Dosing Calculator Governance

Any future dosing calculator must use only verified formulary data and must clearly document:
- source version,
- age limits,
- weight limits,
- concentration,
- maximum doses,
- clinical exclusions,
- review date,
- and medical disclaimer wording.

No dose, concentration, or limit may be inferred.

---

## Privacy and Legal Framing

Use accurate wording:

> This portal provides general educational resources only. No patient-specific medical data is collected or stored in the initial version.

Do not claim HIPAA, GDPR, or other formal compliance unless the portal has undergone the required legal and technical review.

---

## Deployment Workflow

### Local Development

~~~bash
git status
git add .
git commit -m "Describe the change"
git push origin branch-name
~~~

### Deployment

- GitHub is the canonical source repository.
- Vercel is the primary deployment platform.
- Once connected, pushes to the deployment branch trigger automatic Vercel deployments.
- The auto-index generator will be run as part of the build process once implemented.

---

## Current Transition Note

This project began as an earlier prototype under the repository name `medical-portal`.

The project is now being professionally refactored into **Clinical Portal 2026**, with the final target repository name:

~~~text
clinical-portal
~~~

The earlier prototype has been preserved in a backup branch before refactoring.

---

## Success Criteria

The MVP is successful when:

1. The portal is publicly accessible on Vercel.
2. The homepage is professional, mobile-responsive, and easy to navigate.
3. Search and category filtering work.
4. The auto-index system works without manual index editing.
5. Every public resource includes disclaimer, references, and last-reviewed date.
6. PDFs include watermark and disclaimer.
7. No patient-specific data is collected or stored.
8. The site is fast, accessible, and easy to maintain through GitHub.

---

## Maintainer

**Dr. Murali Gopal**  
Senior Paediatrician & Paediatric Pulmonologist  
India  

---

## Copyright

© 2026 Dr. Murali Gopal. All rights reserved.
