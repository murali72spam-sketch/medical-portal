# Clinical Portal 2026 — Full Architecture and Workflow Blueprint

**Project:** Dr. Murali’s Clinical Portal / `medical-portal`  
**Project code:** `CLINICAL-PORTAL-2026`  
**Primary purpose:** Public, read-only paediatric parent education portal  
**Primary deployment:** Vercel  
**Repository:** `murali72spam-sketch/medical-portal`  
**Production URL:** <https://medical-portal-brown.vercel.app>  
**Current resource count after Batch 13:** 145 resources  
**Current known validation state:** 0 errors; 20 pre-existing governance/safety warnings  
**Last updated:** 2026-05-24  

---

## 1. Project Identity

Clinical Portal 2026 is a professional, public-facing paediatric parent education portal for Dr. Murali Gopal. It provides verified educational resources for parents and caregivers, including HTML parent guides, future printable PDFs, future interactive tools, and clinical safety information.

| Item | Current decision |
|---|---|
| Project name | Clinical Portal 2026 |
| Working repository/local folder | `medical-portal` |
| GitHub repository | `murali72spam-sketch/medical-portal` |
| Primary deployment | Vercel |
| Public URL | `https://medical-portal-brown.vercel.app` |
| Frontend stack | HTML5, CSS3, vanilla JavaScript |
| Backend | None in current version |
| Public access | Read-only |
| Login | None |
| Patient data | Not collected or stored |
| AI/API | Not implemented currently |
| Search | Local/static resource search only |

### Local paths

Home computer:

```powershell
C:\Users\gmura\GitHub Projects\medical-portal
```

Workplace computer:

```powershell
D:\Dr Murali DONOT DELETE Please\GitHub Projects\medical-portal
```

---

## 2. Purpose and Scope

The portal gives parents reliable paediatric education, including common paediatric conditions, safe home-care principles, red flags, and when medical review is needed.

### In scope

- Parent education guides.
- Read-only HTML resources.
- Category-based browsing.
- Local source-restricted search.
- Legal disclaimers and privacy-conscious static design.
- Future PDF leaflets.
- Future lower-risk interactive education tools.
- Future source-restricted AI resource finder, only after governance.

### Out of scope in the current version

- Patient login.
- Appointment booking.
- Patient-specific symptom triage.
- Prescription generation.
- Drug dosing calculators without verified formulary governance.
- Vaccination catch-up calculators without current IAP/ACVIP or Indian government verification.
- External medical search.
- AI medical chatbot.
- Storing patient names, symptoms, reports, photos, contact numbers, or identifiers.

---

## 3. Technical Architecture

The portal is intentionally static and lightweight.

```text
Visitor browser
   ↓
Vercel static hosting
   ↓
index.html + style.css + script.js
   ↓
data/conditions-index.json
   ↓
html-conditions/*.html
```

### Current architecture rules

1. Static website only.
2. No backend server.
3. No API keys.
4. No database.
5. No AI medical answering system.
6. Search is local and limited to indexed portal resources.
7. Resource pages are static HTML files.
8. `data/conditions-index.json` is generated from resource metadata.
9. GitHub `main` is the source of truth.
10. Vercel deploys from GitHub.

---

## 4. Folder Structure

```text
medical-portal/
│
├── index.html
├── style.css
├── script.js
├── auto-index-generator.js
├── package.json
├── vercel.json
├── README.md
│
├── html-conditions/
├── data/
│   └── conditions-index.json
├── assets/
│   └── condition-visuals/
├── docs/
│   ├── audits/
│   └── architecture/
├── legal/
├── pdfs/
└── tests/
```

### Main files and folders

- `index.html`: homepage, hero, trust messaging, category browsing, resource sections.
- `style.css`: global design system, responsive styles, cards, typography, print styles.
- `script.js`: dynamic rendering, local search, navigation and homepage interactivity.
- `html-conditions/`: all parent guide and tool HTML files.
- `data/conditions-index.json`: generated resource index used by homepage.
- `assets/`: global visual assets.
- `assets/condition-visuals/`: condition-specific hero images.
- `docs/`: documentation.
- `docs/audits/`: audit reports and governance reviews.
- `docs/architecture/`: architecture files like this one.
- `legal/`: disclaimer, privacy policy, terms, copyright pages.
- `pdfs/`: future printable patient leaflets.
- `tests/`: QA tests.
- `auto-index-generator.js`: scans HTML metadata and generates the index.
- `package.json`: build, validation, and QA commands.
- `vercel.json`: Vercel deployment configuration.

---

## 5. Resource Metadata Contract

Every HTML guide/tool in `html-conditions/` must include these metadata fields:

```html
<meta name="title" content="">
<meta name="slug" content="">
<meta name="category" content="">
<meta name="resource_type" content="">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="audience" content="parents">
<meta name="last_reviewed" content="YYYY-MM-DD">
<meta name="medical_review_status" content="pending-clinician-review">
<meta name="references" content="">
<meta name="featured" content="false">
<meta name="status" content="published">
<meta name="author" content="Dr. Murali Gopal">
```

Optional visual metadata must be used only when matching assets exist:

```html
<meta name="hero_image" content="../assets/condition-visuals/example.png">
<meta name="hero_alt" content="Specific accessible image description">
<meta name="visual_context" content="short-context-keyword">
```

### Metadata principles

- `title`: parent-friendly.
- `slug`: stable and URL-safe.
- `category`: must match portal taxonomy.
- `resource_type`: commonly `parent-guide`, `interactive-tool`, or `reference-chart`.
- `description`: concise and non-diagnostic.
- `keywords`: supports local search.
- `medical_review_status`: use `pending-clinician-review` unless formally reviewed.
- `references`: name reputable sources.
- `status`: use `draft`, `published`, or project-approved equivalent.
- `author`: keep consistent.

---

## 6. Auto-Index Workflow

1. Place new/updated HTML files in `html-conditions/`.
2. Include complete metadata.
3. Run the build.
4. `auto-index-generator.js` scans `html-conditions/`.
5. Metadata is written to `data/conditions-index.json`.
6. Homepage reads `conditions-index.json`.
7. Resource cards and category counts update automatically.

### Keep or restore `data/conditions-index.json`

Keep it when:

- New guide files are added.
- Metadata changes.
- Slugs, titles, categories, descriptions, featured flags, or status change.

Restore it when:

- Only build/testing regenerated it.
- No source HTML or metadata changed.
- The task was CSS-only, documentation-only, or unrelated to resource metadata.

Command:

```powershell
git checkout -- data/conditions-index.json
```

---

## 7. Homepage and Search Architecture

The homepage includes header navigation, local search, hero section, trust messaging, category browsing, resource cards, and legal footer.

Search is:

- Local.
- Static.
- Source-restricted.
- Based only on indexed portal resources.
- Not connected to web search.
- Not AI-based.
- Not patient-specific.

Search must not become a diagnostic chatbot, symptom triage tool, dosing guide, vaccine advisor, report/photo interpreter, or model-memory medical answer generator.

---

## 8. Clinical Governance Rules

### Never invent

Do not invent dosages, vaccine schedules, catch-up rules, red flags, diagnostic criteria, contraindications, treatment algorithms, medication names, maximum doses, thresholds, emergency protocols, or clinical pathways.

### Approved evidence sources

Use reputable sources such as:

- IAP / ACVIP.
- Indian government / Ministry of Health resources.
- AAP / HealthyChildren.
- RCH Australia Kids Health Info.
- Raising Children Network.
- NICE.
- GINA.
- WHO.
- CDC.
- NHS.
- Recognised specialty bodies.

### Every public medical page must include

- Clear disclaimer.
- References.
- Last-reviewed date.
- Non-substitution wording.
- Medical review status.
- Parent-friendly language.
- Red flags where appropriate.

### High-caution topics

High-caution topics include vaccination schedules, catch-up vaccination, HPV/influenza/travel/special-condition vaccination, rabies PEP, dosing calculators, drug treatment instructions, serious infections, emergency care, anaphylaxis, meningitis, seizures, head injury, poisoning, burns, neonatal danger signs, and patient-specific decision logic.

### Vaccination content

Vaccination content must use the latest available IAP/ACVIP or Indian government guidance at the time of creation or revision.

### Dosing tools

Dosing calculators require a verified formulary dataset, source version, drug-level review, age/weight rules, maximum dose rules, exclusion notes, prominent disclaimer, and clinician review.

---

## 9. Content Categories

Current/planned category system:

```text
Respiratory
Gastrointestinal
Nutrition & Feeding
Fever & Infections
Growth & Development
Parent Education
Vaccination
Medication Information
Newborn & Infant Care
Skin & Allergy
Other categories already present in the index
```

Use existing category names consistently. Avoid near-duplicates unless there is a deliberate information architecture decision.

---

## 10. Guide Creation Standard

Standard parent guide structure:

1. Metadata.
2. Page header.
3. Reassurance/introduction box.
4. What is the condition/topic?
5. Symptoms/signs or key parent observations.
6. Home care or safety guidance.
7. Red flags / when to seek urgent help.
8. Important facts / myth correction.
9. Disclaimer.
10. References.
11. Last-reviewed date.
12. Medical review status.

Tone should be calm, professional, parent-friendly, non-alarming, and Indian-context aware where relevant.

Avoid diagnosis questionnaires, treatment algorithms, medication dosing, prescribing language, unsupported red flags, patient-specific advice, and overconfident claims.

---

## 11. UI/UX Design Principles

- Mobile responsive.
- Accessible.
- Parent-friendly.
- A4 print-friendly where relevant.
- High contrast.
- Clear hierarchy.
- Minimal clutter.
- Consistent cards and spacing.
- Preserve existing design language.

During content tasks, do not redesign homepage, header, search, card system, typography, navigation, or footer.

During UI tasks, do not change clinical wording or resource metadata unless specifically required.

---

## 12. Testing and Validation Workflow

Run before commit:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
```

Run image double-extension check:

```powershell
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
```

Expected standards:

- Build passes.
- Validation has 0 errors.
- Existing warnings may remain, but new warnings must be reviewed.
- Batch 10 QA passes.
- No accidental `.png.png` files.

Current known status after Batch 13:

```text
Resource count: 145
Errors: 0
Warnings: 20 existing governance/safety warnings
```

---

## 13. PowerShell Workflow

### Standard start — home computer

```powershell
cd "C:\Users\gmura\GitHub Projects\medical-portal"
git checkout main
git pull origin main
git status
git checkout -b <branch-name>
```

### Standard start — workplace computer

```powershell
cd "D:\Dr Murali DONOT DELETE Please\GitHub Projects\medical-portal"
git checkout main
git pull origin main
git status
git checkout -b <branch-name>
```

### Review changes

```powershell
git status
git diff --stat
git diff --name-only
```

### Stage files

```powershell
git add <file1> <file2>
```

PowerShell multiline example:

```powershell
git add data/conditions-index.json `
  html-conditions/example-one.html `
  html-conditions/example-two.html
```

### Commit and push

```powershell
git commit -m "Short clear commit message"
git push -u origin <branch-name>
```

### After PR merge

```powershell
git checkout main
git pull origin main
git status
git branch -d <branch-name>
git status
```

Optional remote branch delete:

```powershell
git push origin --delete <branch-name>
```

---

## 14. Git, GitHub, and PR Workflow

Use one branch per task.

Examples:

```text
content/batch13-parent-safety-first-aid
fix/category-browse-contrast-spacing
audit/resource-validation-governance-warnings
docs/full-architecture-workflow
```

Do not stage:

```text
node_modules/
playwright-report/
test-results/
```

PR body should include summary, changed files, tests run, validation result, scope/governance note, and Three-Lens Audit.

### Three-Lens Audit

Every PR should be reviewed as:

1. Parent visiting the website.
2. Expert website designer.
3. Paediatrician / clinical safety reviewer.

Merge only when scope is correct, build passes, validation has 0 errors, QA passes, no unrelated files are included, no unexpected warnings are introduced, and clinical safety rules are respected.

---

## 15. Codex Usage Workflow

Codex should be used for scoped implementation tasks.

### Codex prompt template

```text
Project:
Clinical Portal 2026 / medical-portal

Branch:
<branch-name>

Task:
<exact task>

Allowed files:
<list files/folders Codex may edit>

Do not edit:
<list files/folders Codex must not edit>

Rules:
- Preserve existing working code.
- Make the smallest safe change.
- Do not redesign unless asked.
- Do not add AI/API/external search.
- Do not collect patient data.
- Do not invent medical facts.
- No dosing, vaccine schedules, diagnosis tools, or patient-specific triage unless explicitly part of a reviewed governed task.
- Every new medical page needs metadata, disclaimer, references, and last-reviewed date.

Run:
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list

Also run:
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName

End with:
- changed files
- build result
- validation warning/error summary
- QA result
- final git status
```

Codex should not rewrite the project, convert it into a framework, add backend/database/forms/analytics/AI, modify unrelated files, or commit automatically unless asked.

---

## 16. Future AI/Web-Builder Usage Instructions

Use this document with Codex, Cursor, Claude Code, Google Antigravity-style builders, Vercel AI tools, or similar.

Instruction to future builder:

```text
Use this architecture document as the source protocol.
Do not rewrite the project.
Make only the requested scoped change.
Preserve the static architecture, metadata system, and clinical governance rules.
```

Future builder rules:

1. Treat GitHub `main` as source of truth.
2. Preserve static HTML/CSS/JS architecture unless explicitly asked.
3. Preserve `html-conditions/` metadata system.
4. Preserve `data/conditions-index.json` auto-index workflow.
5. Preserve local/static search.
6. Do not add backend/database/login unless separately designed.
7. Do not collect patient data.
8. Do not add analytics without privacy review.
9. Do not add AI medical answering.
10. Do not generate medical content without references and review status.
11. Work in small branches.
12. Run validation and QA.
13. End with `git status`.

---

## 17. Deployment Workflow

GitHub `main` deploys through Vercel.

Workflow:

1. Work on feature branch.
2. Commit and push branch.
3. Create PR.
4. Let checks run.
5. Merge PR to `main`.
6. Vercel deploys.
7. Verify production.

Production URL:

```text
https://medical-portal-brown.vercel.app
```

Production verification checklist:

```text
1. Open homepage.
2. Check resource/category count if relevant.
3. Test search terms related to the change.
4. Open new/changed guide pages.
5. Check mobile view if UI changed.
6. Confirm disclaimer and references on medical pages.
7. Confirm no broken hero images.
8. Confirm no obvious layout break.
```

---

## 18. Current Project State Checkpoint

```text
Latest completed UI/governance work:
- Homepage search/header/resource browsing polish.
- Resource validation governance warnings audit.
- Homepage category contrast/count spacing fix.

Latest completed content batches:
- Batch 12: Growth, Development & Behaviour.
- Batch 13: Parent Education / Safety / First Aid.

Current indexed resources:
145

Current validation:
0 errors.
20 known existing governance/safety warnings.

Current architecture:
Static public portal.
No backend.
No AI/API implemented.
No patient data collection.
Local/static resource search only.
```

Batch 12 added/updated:

```text
Developmental Milestones
Speech and Language Delay
Screen Time and Behaviour
Sleep Problems in Children
Bedwetting / Nocturnal Enuresis
Temper Tantrums and Behaviour Regulation
Puberty and Normal Growth Changes
Autism Early Concerns
```

Batch 13 added:

```text
When to Seek Urgent Medical Care
Child First Aid Basics
Choking Prevention and First Response
Head Injury in Children
Burns and Scalds in Children
Poisoning Prevention and What to Do
Safe Medicine Use at Home
Home Safety for Toddlers
```

---

## 19. Known Governance Warning Audit

Existing warnings were audited in:

```text
docs/audits/resource-validation-governance-warnings-audit.md
```

Summary:

```text
Total warnings: 20
Clinical governance warnings: 19
Vaccination safety warnings: 1
Harmless keyword false-positive: 9
Needs wording review: 1
Needs clinician review: 3
High-caution / do not publish until verified: 7
```

High-caution pages should be clinically verified before they are treated as final reviewed content.

---

## 20. Safe Future Roadmap

### Near-term content

- More parent education batches.
- Common outpatient concern guides.
- Skin/allergy expansion.
- Nutrition/feeding expansion.
- Newborn/infant care expansion.
- Respiratory polishing and device guides.

### Visual polish

- Hero images for stable high-value guides.
- Category-specific visual sets.
- Broken-image checks.
- A4 print style refinement.

### Governance

- Clinical review pass for high-caution pages.
- Improve validator false-positive handling.
- Maintain warning audit records.
- Add changelog/version notes for reviewed pages.

### PDF workflow

- A4 parent handouts.
- Watermark.
- Disclaimer.
- References.
- Print-friendly layout.

### Translations

- Tamil versions.
- Hindi versions.
- Keep English brand names where needed.
- Clinician review of translated medical wording.

### Future tools

Lower-risk:

- Weaning chart.
- Growth reference.
- Fever education flowchart.
- Nutrition estimator.

High-risk, only after governance:

- Dosing calculator.
- Vaccine catch-up calculator.
- Special-condition vaccine logic.
- Emergency decision support.

### Future AI resource finder

Allowed only as source-restricted resource finder. Not allowed as a medical chatbot, symptom triage, dosing assistant, vaccine schedule assistant, or clinical decision support tool.

---

## 21. Standard Branch Names

```text
content/batch14-<topic>
fix/<short-ui-problem>
docs/<short-doc-topic>
audit/<short-audit-topic>
fix/<condition>-<specific-wording>
assets/<category>-hero-images>
```

---

## 22. Standard Commit Message Examples

```text
Add Batch 13 parent safety first aid guides
Fix category browse contrast and count spacing
Audit resource validation governance warnings
Add full architecture and workflow documentation
Update dog bite wound washing wording
Add newborn and infant care hero images
```

---

## 23. Standard PR Template

```markdown
## Summary
- What changed.
- Why it changed.

## Changed files
- List key files.

## Tests
- npm.cmd run build
- npm.cmd run validate:resources
- npm.cmd run qa:batch10 -- --reporter=list

## Validation summary
- Build result.
- Error count.
- Warning count.
- QA result.
- .png.png check if assets involved.

## Scope and governance
- State whether medical content changed.
- State whether UI changed.
- State whether AI/API/data collection changed.
- State whether clinician review is needed.

## Three-Lens Audit

### Parent visiting the website
PASS / IMPROVE / CLINICAL REVIEW REQUIRED

### Expert website designer
PASS / IMPROVE

### Paediatrician / clinical safety reviewer
PASS / PASS WITH REVIEW NOTE / CLINICAL REVIEW REQUIRED / DO NOT PUBLISH UNTIL VERIFIED
```

---

## 24. Final Operating Principle

Clinical Portal 2026 should remain:

```text
Static.
Public.
Read-only.
Parent-friendly.
Clinically cautious.
Source-referenced.
Metadata-driven.
Version-controlled.
Small-batch maintained.
No patient-data collection.
No casual medical automation.
```

When uncertain:

```text
Do not invent.
Mark as pending review.
Do not publish high-caution logic.
Ask for clinical verification.
Keep changes small.
Run validation.
End with git status.
```
