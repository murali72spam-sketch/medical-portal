# Three-Lens Portal Audit Protocol

## Purpose

This document defines a repeatable audit process for Clinical Portal 2026.

The audit reviews the portal from three practical perspectives:

1. A parent visiting the website
2. An expert website designer
3. A paediatrician or clinical safety reviewer

The goal is to keep the portal clear, reassuring, usable, medically cautious, and safe to publish.

## When to run the audit

Run this audit:

- After every feature branch, before PR merge
- After every production deployment
- After every 5-10 new resources
- Before publishing high-caution content, including vaccination schedules, catch-up logic, dosing tools, medication tools, or clinical algorithms

## How to run the audit

1. Open the portal as a normal visitor.
2. Review the relevant pages using each lens below.
3. Record the verdict for each lens.
4. Apply the strictest verdict as the overall audit result.
5. Do not merge or publish if any stop rule applies.

Use real pages, real navigation paths, and realistic mobile checks. Do not rely only on code review or desktop preview.

## Verdict system

Use one of these verdicts for each lens and for the overall audit.

### PASS

The page or feature is clear, stable, medically cautious, and ready to merge or publish.

### IMPROVE

The page or feature is basically safe, but needs practical improvements before or soon after merge. Examples include wording clarity, layout polish, mobile comfort, or minor accessibility fixes.

### CLINICAL REVIEW REQUIRED

The page or feature touches medical guidance that needs paediatrician review before publication. This includes high-caution topics, unclear red flags, clinical algorithms, vaccination logic, dosing, medication guidance, or content that may be interpreted as individualized medical advice.

### DO NOT PUBLISH

The page or feature has a serious safety, privacy, legal, or product risk. It must not be merged or deployed until fixed and re-audited.

## Lens 1: Parent visiting the website

Review the experience as a parent or caregiver who may be worried, busy, or using a phone.

Checklist:

- Clarity: the page purpose is obvious within the first fold.
- Reassurance: the tone is calm, respectful, and helpful.
- Ease of navigation: important links and next steps are easy to find.
- Search usefulness: search helps the parent reach existing portal resources.
- Readability: language is plain, scannable, and not overloaded with jargon.
- Mobile comfort: text, controls, spacing, and scrolling feel comfortable on a phone.
- Parent-friendly wording: medical terms are explained when needed.
- Fear control: language does not create unnecessary fear, except for clear and accurate red flags.
- Portal limits: the parent can understand what the portal can and cannot do.

Parent lens questions:

- Would a worried parent know where to start?
- Would they understand when to contact a doctor or seek urgent care?
- Would they know this portal is educational and not a substitute for clinical care?
- Would the page make them feel better informed rather than more confused?

## Lens 2: Expert website designer

Review the page as a professional product and content experience.

Checklist:

- Typography: headings, body text, line length, and font sizes are readable.
- Spacing: sections have enough breathing room without feeling loose or scattered.
- Layout balance: visual weight is balanced across the page.
- Visual hierarchy: the most important information is visually prominent.
- Mobile responsiveness: the layout adapts cleanly on small screens.
- Accessibility: navigation, labels, focus states, and semantic structure are usable.
- Contrast: text and controls meet practical contrast expectations.
- Touch targets: buttons, links, and search controls are easy to tap.
- Header/search usability: header and search remain understandable and usable.
- Card consistency: repeated cards have consistent spacing, content order, and styling.
- Print friendliness where relevant: printable pages remain readable and useful.
- First-fold usability: the first screen communicates the page purpose and key action.

Designer lens questions:

- Does the page look intentional and trustworthy?
- Can users scan the page quickly?
- Are repeated components consistent?
- Does the design support the medical content instead of distracting from it?

## Lens 3: Paediatrician / clinical safety reviewer

Review the page for medical safety, publication readiness, and risk boundaries.

Checklist:

- No diagnosis: content does not diagnose a specific child or condition.
- No individualized treatment advice: content does not tailor advice to a user's personal case.
- No invented doses: no dose is generated or implied without verified source and review.
- No unsafe vaccine or catch-up guidance: vaccination content avoids unverified schedules or logic.
- No prescribing advice: content does not tell parents to start, stop, or choose medicines.
- Disclaimer present: medical pages clearly state that content is educational and not a substitute for professional care.
- References present: medical claims include appropriate references or source notes.
- Last-reviewed date present: medical pages show when they were last reviewed.
- Clinical review status appropriate: review status matches the topic risk level.
- Red flags accurate and not exaggerated: urgent-care guidance is clear and clinically sound.
- Parent guidance clinically cautious: advice is safe, general, and encourages professional care when needed.
- High-risk topics clearly marked for review before publication.

Clinical safety questions:

- Could a parent mistake this content for a diagnosis or treatment plan?
- Could the content lead to unsafe delay, unsafe medicine use, or missed urgent care?
- Are red flags accurate, proportionate, and easy to understand?
- Are high-caution topics blocked until clinical verification is complete?

## PR merge stop rules

Do not merge a PR if any of the following apply:

- Required checks fail.
- Risky medical content is introduced or changed without review.
- Dosing, vaccine, prescribing, or catch-up logic is touched without verification.
- Patient-data collection is added.
- Medical pages are missing a disclaimer or references.
- `data/conditions-index.json` changes unexpectedly.
- API keys or secrets are exposed.
- AI/API integration is added without governance.
- Layout, search, or navigation is broken.
- Unwanted files are included, such as `node_modules`, `test-results`, or `playwright-report`.

If a stop rule applies, mark the audit as `DO NOT PUBLISH` unless the issue is only clinical-review gating. In that case, mark it as `CLINICAL REVIEW REQUIRED`.

## Production verification checklist

After production deployment, verify:

- Homepage loads.
- Header/search is visible.
- Mobile layout is acceptable.
- Search returns only existing portal resources.
- There are no duplicate search boxes.
- There is no obvious broken layout.
- Legal, privacy, and disclaimer links are accessible.
- No patient-data collection has been introduced.

If production verification fails, record the issue, stop further promotion, and fix or roll back according to the deployment process.

## High-caution content handling

Treat these areas as high-caution by default:

- Vaccination schedules
- Catch-up vaccine logic
- Dosing tools
- Medication tools
- Prescribing guidance
- Clinical algorithms
- Emergency or red-flag guidance
- Any content that could change a parent's decision about urgent care

High-caution content must receive clinical review before publication. Until review is complete, mark it as `CLINICAL REVIEW REQUIRED` or `DO NOT PUBLISH`, depending on risk.

## Audit record template

Use this template in PR notes, release notes, or audit logs.

```text
Audit date:
Reviewer:
Branch or deployment:
Pages/features reviewed:

Parent lens verdict:
Notes:

Expert web designer lens verdict:
Notes:

Paediatrician / clinical safety lens verdict:
Notes:

Overall verdict:
Required fixes:
Follow-up owner:
```

## Reviewer guidance

Keep the audit practical and beginner-friendly. The reviewer should write short notes that identify what changed, what was checked, what risk remains, and what must happen before merge or publication.

When unsure, choose the safer verdict. A page can always move from `CLINICAL REVIEW REQUIRED` to `PASS` after verification, but unsafe medical content must not be treated as a design-only issue.
