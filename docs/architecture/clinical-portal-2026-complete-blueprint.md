# Clinical Portal 2026 Complete Project Blueprint

**Project name:** Clinical Portal 2026  
**Local repository folder:** `medical-portal`  
**Current local path:** `D:\Dr Murali DONOT DELETE Please\GitHub Projects\medical-portal`  
**Primary purpose:** Public paediatric patient/parent information website  
**Owner / medical lead:** Dr. Murali Gopal  
**Current date of this blueprint:** 2026-05-27  
**Current indexed resources:** 145  
**Current architecture:** Static website, public, read-only, no backend database  
**Deployment target:** Vercel  
**Best working device setup:** Windows computer/laptop for editing; Samsung S24 Ultra for mobile visual checks  

---

## 1. Executive Summary

Clinical Portal 2026 is a paediatric education portal for parents and caregivers. It should feel trustworthy, calm, fast, mobile-friendly, and medically cautious.

The current project is intentionally simple and strong:

- Static HTML, CSS, and JavaScript.
- No patient login.
- No database.
- No patient-specific data storage.
- No API keys.
- No AI medical chatbot.
- Local search limited to the portal's own educational resources.
- Medical pages are indexed through metadata in each HTML file.
- Vercel builds the site by running the auto-index generator.

This is a good foundation for a patient information website because it reduces privacy risk, security risk, maintenance complexity, and hosting cost.

---

## 2. Website Goal

The website should help parents answer safe, general questions such as:

- What is this common child-health condition?
- What symptoms should I watch for?
- What can I safely do at home?
- When should I urgently see a doctor?
- Where can I read a clear parent-friendly explanation?

The website must not behave like:

- A diagnosis tool.
- A replacement for consultation.
- A prescription system.
- A dosing calculator unless separately governed and reviewed.
- A patient-specific triage chatbot.
- A place to upload symptoms, reports, photos, names, phone numbers, or identifiers.

---

## 3. Current Technology Stack

| Layer | Current choice | Reason |
|---|---|---|
| Frontend | HTML5, CSS3, vanilla JavaScript | Simple, fast, maintainable, low-risk |
| Backend | None | Reduces privacy and security complexity |
| Database | None | No patient data storage in current version |
| Search | Local JavaScript search using `data/conditions-index.json` | Keeps search source-restricted |
| Build step | Node.js script | Generates the resource index |
| Testing | Playwright + custom validation script | Checks homepage, search, resources, images, metadata |
| Hosting | Vercel static deployment | Simple GitHub-based deployment |
| Version control | Git + GitHub | Track changes safely |
| Main editor/helper | Codex | Guided code/content/documentation work |
| Command line | PowerShell on Windows | Local build, validation, Git commands |

---

## 4. Current Repository Architecture

```text
medical-portal/
│
├── index.html
├── profile.html
├── style.css
├── script.js
├── auto-index-generator.js
├── package.json
├── package-lock.json
├── playwright.config.js
├── vercel.json
├── README.md
│
├── assets/
│   ├── clinical-images/
│   ├── condition-visuals/
│   └── parent-guide-images/
│
├── css/
├── data/
│   └── conditions-index.json
│
├── docs/
│   ├── architecture/
│   ├── audits/
│   ├── governance/
│   └── workflow/
│
├── education/
├── html-conditions/
├── js/
├── legal/
├── pdfs/
├── symptoms/
├── tests/
├── test-results/
├── tmp/
└── tools/
```

### Folder Roles

| Path | Role |
|---|---|
| `index.html` | Homepage, navigation, search UI, resource sections, trust messaging |
| `profile.html` | Doctor profile page |
| `style.css` | Main visual design system and responsive styles |
| `script.js` | Homepage rendering, local search, filters, mobile navigation, draft notices |
| `auto-index-generator.js` | Reads metadata from `html-conditions/*.html` and generates `data/conditions-index.json` |
| `data/conditions-index.json` | Machine-readable resource library used by the homepage |
| `html-conditions/` | Main parent guide/resource HTML files |
| `assets/condition-visuals/` | Condition-specific visual images |
| `legal/` | Disclaimer, privacy policy, terms, copyright |
| `docs/` | Architecture, audit, governance, and workflow documentation |
| `tools/validate-resources.js` | Custom validation script for metadata, safety, legal, and search checks |
| `tests/batch10.spec.js` | Playwright QA tests for important user journeys |
| `vercel.json` | Vercel build configuration |

---

## 5. Runtime Architecture

```text
Parent / caregiver browser
        ↓
Vercel static hosting
        ↓
index.html
style.css
script.js
        ↓
script.js fetches data/conditions-index.json
        ↓
Homepage renders resource cards, filters, category counts, and search results
        ↓
User opens static resource page in html-conditions/
```

There is no server-side medical decision engine. This is important. The website serves fixed educational pages and does not calculate patient-specific advice.

---

## 6. Build and Deployment Architecture

Vercel uses `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "outputDirectory": "."
}
```

`npm run build` runs:

```powershell
node auto-index-generator.js
```

The build scans `html-conditions/`, extracts metadata, and writes:

```text
data/conditions-index.json
```

This means the homepage does not need manual editing every time a new guide is added, as long as the guide metadata is correct.

---

## 7. Key Project Parameters

### Package Scripts

| Command | Purpose |
|---|---|
| `npm.cmd run build` | Generate `data/conditions-index.json` |
| `npm.cmd run generate:index` | Same index-generation workflow |
| `npm.cmd run validate:resources` | Validate metadata, index, legal pages, safety terms, homepage/search structure |
| `npm.cmd run qa:batch10` | Run Playwright QA tests |

### Approved Categories

These are currently approved in the generator and validator:

```text
Respiratory
Gastrointestinal
Nutrition & Feeding
Vaccination
Fever & Infections
Skin & Allergy
Growth & Development
Medication Information
Parent Education
```

### Approved Resource Types

```text
parent-guide
interactive-tool
reference-chart
calculator
```

### Approved Page Status Values

```text
draft
reviewed
published
```

### Approved Medical Review Status Values

```text
pending-clinician-review
reviewed
needs-verification
```

---

## 8. Resource Metadata Standard

Every page in `html-conditions/` should contain these metadata fields in the `<head>`:

```html
<meta name="title" content="">
<meta name="slug" content="">
<meta name="category" content="">
<meta name="resource_type" content="">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="audience" content="parents">
<meta name="author" content="Dr. Murali Gopal">
<meta name="last_reviewed" content="YYYY-MM-DD">
<meta name="medical_review_status" content="pending-clinician-review">
<meta name="references" content="">
<meta name="featured" content="false">
<meta name="status" content="published">
```

Optional visual metadata:

```html
<meta name="hero_image" content="../assets/condition-visuals/example.png">
<meta name="hero_alt" content="Specific accessible image description">
<meta name="visual_context" content="lowercase-kebab-case-context">
```

Metadata rules:

- Use parent-friendly titles.
- Keep slugs stable.
- Use only approved categories unless the taxonomy is deliberately updated in both generator and validator.
- Use real references.
- Use `pending-clinician-review` unless the page has been medically reviewed.
- Use `needs-verification` for high-risk content requiring checking.
- Do not use empty metadata fields.
- Do not use vague image alt text like `medical image`.

---

## 9. Frontend Blueprint

### Homepage Priorities

The homepage should make these things clear in the first few seconds:

- This is Dr. Murali Gopal's paediatric education portal.
- It is for parents and caregivers.
- It is educational, not a substitute for consultation.
- It does not collect patient data.
- Search only searches resources on this portal.
- Resources are organized by category.

### Current UI Components

- Header and brand.
- Mobile navigation toggle.
- Header search.
- Hero section.
- Trust notes.
- Website feedback card.
- Medical disclaimer notice.
- Doctor profile link.
- Resource grid.
- Category filters.
- Subgroup filters for larger categories.
- Footer legal links.

### Design Direction

The design should be:

- Calm and medical, but not cold.
- Mobile-first.
- Easy for parents to scan.
- Clear about urgent warning signs.
- High contrast.
- Fast loading.
- Not overloaded with decoration.
- Consistent across homepage, profile, legal pages, and guide pages.

### Mobile Design Standard

Because many parents will use phones, every new UI change must be checked at phone size. The Samsung S24 Ultra is excellent for real-world testing.

Check:

- Header does not overflow.
- Search input is easy to tap.
- Buttons are at least comfortable touch size.
- Resource cards are readable.
- No text overlaps images.
- No horizontal scrolling.
- Emergency/red-flag boxes are very easy to spot.

---

## 10. Backend Blueprint

### Current Backend

There is no backend in the current project.

This is correct for the present goal because:

- No patient-specific data is needed.
- Static hosting is secure and simple.
- There is less chance of accidental privacy breach.
- Maintenance is easier for a beginner.

### When a Backend May Be Needed Later

Only consider a backend if you deliberately add:

- Appointment requests.
- Contact forms.
- Admin login.
- Review dashboard.
- Private draft workflow.
- Analytics dashboard.
- Personalized patient features.

If a backend is added later, it must be planned separately with authentication, logging, rate-limiting, backups, privacy review, and legal review.

---

## 11. Security and Privacy Blueprint

### Current Security Strengths

- No database.
- No login.
- No passwords.
- No patient records.
- No API keys in browser code.
- No server-side user input handling.
- Legal pages exist.
- Search guidance warns users not to enter personal medical details.

### Security Rules

- Do not collect names, phone numbers, MRD numbers, photos, reports, symptoms, prescriptions, or contact details on the website.
- Do not add forms unless they are privacy-reviewed.
- Do not add analytics without privacy review.
- Do not add third-party scripts casually.
- Do not store secrets in JavaScript.
- Do not claim HIPAA, GDPR, or full compliance unless legally and technically reviewed.
- External forms must clearly say they are not for medical questions or patient details.

### Recommended Future Security Headers

If supported through Vercel configuration later, consider adding:

```text
Content-Security-Policy
X-Content-Type-Options: nosniff
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
```

These should be added carefully and tested because an overly strict content security policy can accidentally block images, CSS, or scripts.

---

## 12. Clinical Governance Blueprint

### Medical Safety Principles

- Never invent clinical facts.
- Never invent medication doses.
- Never invent vaccine schedules.
- Never invent red flags.
- Never invent diagnostic criteria.
- Never publish high-risk content without review.
- Prefer cautious language.
- Always include references.
- Always include last-reviewed date.
- Always include disclaimer wording.

### High-Caution Topics

Treat these as needing clinician review before final publication:

- Dosing calculators.
- Vaccine catch-up logic.
- Special-condition vaccination.
- Emergency care.
- Neonatal danger signs.
- Seizures.
- Meningitis.
- Head injury.
- Poisoning.
- Burns.
- Anaphylaxis.
- Serious infections.
- Medication instructions.
- Antibiotic or steroid guidance.

### Approved Evidence Source Types

Use reputable and current sources such as:

- IAP / ACVIP.
- Indian Ministry of Health or government resources.
- WHO.
- UNICEF where relevant.
- CDC.
- NHS.
- NICE.
- RCH Australia Kids Health Info.
- Raising Children Network.
- AAP / HealthyChildren.
- GINA for asthma-related guidance.
- Recognised specialty society guidance.

### Page-Level Governance Checklist

Each medical page should have:

- Metadata.
- Parent-friendly explanation.
- Clear home-care boundaries.
- Warning signs / when to seek care.
- Disclaimer.
- References.
- Last-reviewed date.
- Review status.
- No patient-specific decision logic unless governed.

---

## 13. Content Architecture

### Standard Parent Guide Structure

```text
1. Metadata in head
2. Page title
3. Short reassurance / orientation paragraph
4. What this condition/topic means
5. Common symptoms or parent observations
6. What parents can safely do
7. What parents should avoid
8. Red flags / when to seek urgent medical care
9. Follow-up or doctor consultation guidance
10. Medical disclaimer
11. References
12. Last-reviewed date and review status
```

### Writing Tone

Use:

- Calm.
- Clear.
- Parent-friendly.
- Short paragraphs.
- Plain language.
- Indian context where helpful.
- Safety-focused wording.

Avoid:

- Fear-based wording.
- Overconfident guarantees.
- Prescribing instructions.
- Patient-specific diagnosis.
- Complex medical jargon without explanation.
- Unsupported claims.

---

## 14. Search and Filtering Blueprint

The current search should remain:

- Local.
- Static.
- Source-restricted.
- Based on `conditions-index.json`.
- Education-only.
- Not connected to the internet.
- Not connected to AI.
- Not a symptom checker.

Search should help users find existing pages. It should not answer medical questions independently.

Good future improvement:

- Add synonym support in metadata keywords.
- Improve no-result suggestions.
- Add category-specific search hints.
- Add safer red-flag resource promotion for urgent terms.

Avoid:

- Free-text diagnosis.
- Medicine dosage replies.
- Vaccine schedule calculation.
- Patient-specific advice.

---

## 15. Codex Usage Blueprint

Codex should be used as a careful assistant, not as an uncontrolled builder.

### Best Codex Task Format

```text
Project:
Clinical Portal 2026 / medical-portal

Task:
<exactly what you want changed>

Allowed files:
<specific files/folders Codex may edit>

Do not edit:
<specific files/folders to avoid>

Rules:
- Keep the website static.
- Do not add backend, database, login, analytics, AI, or patient data collection.
- Do not invent medical facts.
- Do not change unrelated files.
- Preserve existing design style unless the task is a design task.
- New medical resources need metadata, disclaimer, references, and last-reviewed date.

Please run:
npm.cmd run build
npm.cmd run validate:resources

If UI changed, also run or visually check:
npm.cmd run qa:batch10

End with:
- changed files
- test results
- remaining warnings
- final git status
```

### Good Codex Requests

```text
Add a parent guide for <topic> using the existing guide style. Mark it pending-clinician-review. Do not add dosing or patient-specific advice.
```

```text
Improve the mobile layout of the homepage search box. Only edit index.html, style.css, and script.js if needed.
```

```text
Review this page for metadata, disclaimer, references, and safety wording. Do not rewrite unrelated content.
```

### Codex Should Not Do Unless Explicitly Planned

- Convert the site to React/Next.js.
- Add a backend.
- Add a database.
- Add login.
- Add medical chatbot behavior.
- Add dosing tools.
- Add third-party analytics.
- Rewrite all guides in one pass.
- Change many categories without updating generator, validator, homepage logic, and documentation.

---

## 16. PowerShell Usage Blueprint

PowerShell is the control panel for the project on Windows.

### Open Project Folder

```powershell
cd "D:\Dr Murali DONOT DELETE Please\GitHub Projects\medical-portal"
```

### Check Current Git State

```powershell
git status
git branch
```

### Build the Site Index

```powershell
npm.cmd run build
```

### Validate Resources

```powershell
npm.cmd run validate:resources
```

### Run QA

```powershell
npm.cmd run qa:batch10
```

### Check for Accidental Double Image Extensions

```powershell
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
```

### See Changed Files

```powershell
git status --short
git diff --stat
git diff --name-only
```

### See Exact Changes

```powershell
git diff
```

### Stage Specific Files

```powershell
git add docs/architecture/clinical-portal-2026-complete-blueprint.md
```

### Commit

```powershell
git commit -m "Add complete Clinical Portal 2026 blueprint"
```

### Push Current Branch

```powershell
git push -u origin content/finalize-clinician-review-batch-2
```

---

## 17. Git and Branch Blueprint

Use one branch per task.

Recommended branch patterns:

```text
docs/<short-topic>
content/<batch-or-topic>
fix/<short-bug-name>
assets/<image-topic>
audit/<audit-topic>
```

Examples:

```text
docs/complete-project-blueprint
content/batch14-skin-allergy-guides
fix/mobile-search-overflow
assets/newborn-hero-images
audit/high-caution-resource-review
```

Do not commit:

```text
node_modules/
test-results/
playwright-report/
tmp/
```

---

## 18. Website Designer Review Blueprint

An expert website designer should check:

- Is the first screen clear?
- Is the brand visible?
- Is the medical disclaimer visible without frightening parents?
- Is search easy to use?
- Are categories understandable?
- Are cards readable on mobile?
- Are urgent-care warnings visually distinct?
- Is there too much text in one view?
- Are colors professional and accessible?
- Are images relevant and respectful?
- Is the page fast?
- Is there no horizontal scroll on mobile?

Design philosophy:

```text
Clinical, warm, fast, readable, trustworthy, not flashy.
```

---

## 19. Backend Engineer Review Blueprint

Even though the current site has no backend, a backend-minded review should confirm:

- No secrets are exposed.
- No forms collect patient data.
- No user input is stored.
- No API keys are used.
- No third-party scripts are added unnecessarily.
- Build process is repeatable.
- Metadata generation is deterministic.
- Validation catches unsafe drift.
- Deployment is simple and rollback-friendly.

---

## 20. Patient Safety Review Blueprint

A paediatrician or clinical reviewer should check:

- Is the topic clinically correct?
- Are references appropriate and current?
- Is wording safe for parents?
- Are warning signs accurate?
- Is there any hidden dosing or treatment instruction?
- Is there any accidental diagnosis algorithm?
- Does it clearly say when to seek medical care?
- Is the review status honest?
- Is the last-reviewed date present?

For high-risk pages, the status should stay `pending-clinician-review` or `needs-verification` until formally reviewed.

---

## 21. Testing Blueprint

### Minimum Check for Documentation-Only Changes

```powershell
git status --short
git diff -- docs/architecture/clinical-portal-2026-complete-blueprint.md
```

### Minimum Check for Content Changes

```powershell
npm.cmd run build
npm.cmd run validate:resources
```

### Minimum Check for UI Changes

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10
```

Also check visually on:

- Desktop browser.
- Samsung S24 Ultra.

### Minimum Check for Asset/Image Changes

```powershell
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
npm.cmd run build
npm.cmd run validate:resources
```

---

## 22. Deployment Blueprint

Typical deployment flow:

```text
1. Create or use a branch.
2. Make a scoped change.
3. Run build and validation.
4. Commit.
5. Push to GitHub.
6. Create pull request.
7. Review changed files.
8. Merge to main.
9. Vercel deploys automatically.
10. Open production site and verify.
```

Production verification:

```text
1. Homepage opens.
2. Search works.
3. Category browsing works.
4. New/changed pages open.
5. Images load.
6. Legal links work.
7. Mobile layout is clean.
8. Disclaimer and privacy wording remain visible.
```

---

## 23. Gaps to Bridge

These are the main gaps to plan next.

### Governance Gaps

- Create a clear reviewed-vs-draft publication policy.
- Maintain a clinician review log.
- Add a formal high-caution page checklist.
- Keep vaccination pages tied to current IAP/ACVIP or Indian government guidance.
- Add version notes for major clinical updates.

### Design Gaps

- Standardize all guide page layouts.
- Ensure every major category has good visual hierarchy.
- Improve print styles for parent handouts.
- Check all mobile pages on a real phone.
- Add a consistent red-flag visual pattern across all guides.

### Technical Gaps

- Consider security headers in `vercel.json`.
- Add broken-link checking.
- Add image existence checking for `hero_image`.
- Add sitemap generation.
- Add RSS or changelog only if useful.
- Improve validation false-positive handling.

### Content Gaps

- Identify most-searched parent topics.
- Build a content roadmap by category.
- Prioritize high-value, low-risk educational pages.
- Separate high-risk clinical pages from general education pages.
- Add Tamil/Hindi only after translation review.

### Workflow Gaps

- Define who can mark a page `reviewed`.
- Define how often old pages should be re-reviewed.
- Keep PRs small and focused.
- Keep a release note for each batch.

---

## 24. Recommended Roadmap

### Phase 1: Stabilize

- Keep architecture static.
- Finish review of current warnings.
- Standardize guide page structure.
- Improve validation where useful.

### Phase 2: Improve Patient Experience

- Better mobile polish.
- Better category browsing.
- Better search synonyms.
- Better print-friendly handouts.
- More relevant condition visuals.

### Phase 3: Governance and Review

- Clinician review workflow.
- Review status dashboard or report.
- High-caution resource audit.
- Documented publication criteria.

### Phase 4: Carefully Add New Features

Low-risk future features:

- PDF parent handouts.
- Print buttons.
- Safer topic finder.
- Category landing pages.
- Multilingual reviewed pages.

High-risk future features needing separate design:

- Dosing calculators.
- Vaccine catch-up tools.
- AI resource assistant.
- Appointment/contact forms.
- Login/admin workflow.

---

## 25. Master Operating Rules

Clinical Portal 2026 should remain:

```text
Static first.
Parent-friendly.
Clinically cautious.
Fast on mobile.
No patient-data collection.
No casual medical automation.
No invented clinical content.
Source-referenced.
Metadata-driven.
Git-controlled.
Small-batch maintained.
```

When unsure:

```text
Do not publish as reviewed.
Mark pending clinician review.
Use reputable references.
Keep the change small.
Run validation.
Check mobile.
Ask for clinical confirmation.
```
