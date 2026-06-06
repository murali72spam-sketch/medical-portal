# Clinical Portal 2026 - Enhancement Implementation Roadmap

**Roadmap date:** 2026-06-06

## Current checkpoint

| Measure | Count |
| --- | ---: |
| Total resources/HTMLs | 145 |
| Published + reviewed | 81 |
| Published + pending clinician review | 37 |
| Draft + pending review | 25 |
| Reviewed draft redirects | 2 |
| Remaining guides needing review/completion | 62 |
| Respiratory reviewed count | 4 |

## Purpose

Plan safe, staged portal improvements after Batch 9 without disturbing medical content or clinical-review governance.

## Core principle

Infrastructure and governance improvements can start now. Medical-content-touching improvements should happen only during clinician-reviewed batches or separate approved wording PRs.

## Selected enhancements

1. Visible reviewed footer
2. JSON-LD structured data
3. Accessibility / WCAG-style audit
4. Print/PDF handout mode with QR code
5. "What not to do" sections
6. Related guides links
7. Governance dashboard
8. Risk-level metadata
9. Source-age audit
10. Visual icons

## Phased implementation plan

### Phase 0 - Documentation-only planning

- Create and approve this roadmap.
- Make no code or medical-content changes.

### Phase 1 - Governance foundation

- Plan risk-level metadata and its approval workflow.
- Create a governance dashboard.
- Create a source-age audit.

### Phase 2 - Visible trust layer

- Pilot a visible reviewed footer.
- Pilot a print/PDF handout mode with QR code.
- Establish and pilot visual icons.

### Phase 3 - Parent navigation and comprehension

- Add clinician-approved "What not to do" sections during review/finalization work.
- Pilot related-guide links on reviewed pages.

### Phase 4 - SEO and technical quality

- Pilot conservative JSON-LD structured data.
- Complete an accessibility / WCAG-style audit and address approved findings.

## Enhancement details

### Visible reviewed footer

**Purpose:** Give parents and caregivers a clear, visible signal that a guide has completed clinician review, while preserving the distinction between reviewed and pending material.

**Example text:** `Clinically reviewed by Dr. Murali. Last reviewed: [date].`

The footer should appear near the end of the guide, before or alongside the disclaimer and references, and should also remain readable in the printed handout.

**Rule:** Apply only to published + reviewed pages. Do not show a reviewed footer on pending-review pages, drafts, redirect stubs, or unfinished guides.

### JSON-LD structured data

Use structured data conservatively to help search engines understand the portal without implying claims beyond the reviewed page content:

- `MedicalWebPage` for eligible guide pages.
- `BreadcrumbList` where the visible page hierarchy supports it.
- `FAQPage` only where appropriate and where the visible page contains genuine question-and-answer content.
- `Physician` and/or `MedicalOrganization` for verified site identity.

Start with a small reviewed-page pilot, validate the generated markup, and document the eligibility rules before expanding.

**Rule:** Do not add unverified medical claims or use structured data to strengthen, reinterpret, or invent clinical statements.

### Accessibility / WCAG-style audit

Audit representative portal pages and shared components before proposing fixes. The audit should cover:

- Keyboard navigation
- Focus visibility
- Color contrast
- Heading order
- Alt text
- Link labels
- Mobile tap targets
- Print readability
- Screen-reader labels

Record each finding with its page/component scope, severity, recommended remediation, and verification method. Separate technical accessibility fixes from any change that would alter medical wording.

### Print/PDF handout mode with QR code

Provide a parent-friendly printed handout while keeping the live reviewed guide easy to reach. A pilot should include:

- A `Print this guide` button.
- An A4 print layout.
- Navigation hidden in print.
- A Dr. Murali header/footer.
- A disclaimer footer.
- Compact references.
- A QR code linking to the live page.
- The last-reviewed date and review status.

QR links should point to:

`https://medical-portal-brown.vercel.app/html-conditions/[page-file-name].html`

Generate QR images locally during the build, not through an external QR API. The suggested output folder is `assets/qr/`.

Example generated files:

- `assets/qr/cough-in-children.png`
- `assets/qr/01-croup-parent-guide.png`
- `assets/qr/02-bronchiolitis-parent-guide.png`

**Eligibility rule:** Show and generate QR codes only for published + reviewed pages. Do not generate or show QR codes for draft pages, pending-review pages, redirect stubs, or unfinished guides.

This roadmap does not add QR files or implement print styling.

### "What not to do" sections

These sections could make high-value safety guidance easier to find, but they directly touch medical content and require clinician approval.

**Safety rule:** Add them only during clinician review/finalization batches or through separate approved wording PRs. Do not automatically derive, rewrite, or insert medical advice.

### Related guides links

- Link only to published + reviewed pages.
- Pilot links on a small set of reviewed pages first.
- Confirm that every relationship is clinically and contextually appropriate.
- Later, consider generating suggestions by category/tags after governance and exclusion rules are approved.
- Prevent links to drafts, pending-review guides, redirect stubs, and unfinished guides.

### Governance dashboard

Create a documentation-first dashboard that makes review state and the next safe body of work easier to understand. Include:

- Category reviewed/pending/draft counts.
- Risk-level distribution after the risk taxonomy is approved.
- A next safest batch suggestion with its selection rationale.
- A reviewed-vs-pending chart or table.

**Suggested future file:** `docs/audit/resource-governance-dashboard-2026-06.md`

The dashboard should report existing governance state; it must not change resource status or mark pages reviewed.

### Risk-level metadata

Plan a controlled risk taxonomy that can support batch selection, audit priority, and governance reporting. Suggested values:

- `low-risk-parent-education`
- `moderate-caution`
- `high-caution`
- `newborn-related`
- `medication-related`
- `vaccination-related`
- `emergency-related`
- `serious-infection-related`
- `mental-health-safeguarding-related`

Before implementation, define whether values are mutually exclusive or multi-value, who assigns them, who approves them, and how they affect review priority. Metadata must not be bulk-assigned without an approved process and clinician oversight where needed.

### Source-age audit

Create a documentation-only audit to identify references that should be checked first. Track:

- Source organization.
- Source title.
- Page/resource using the source.
- Last checked date.
- Recheck priority.

**Suggested future file:** `docs/audit/source-age-audit-2026-06.md`

The audit should flag candidates for review without automatically replacing references or changing medical content.

### Visual icons

Develop a small, consistent icon system for common guide sections:

- Home care
- Call doctor
- Urgent care
- Avoid
- Feeding
- Breathing
- School/daycare
- References

Test icon meaning, contrast, print behavior, and screen-reader treatment before broad rollout.

**Rule:** Icons must support text, not replace it.

## Recommended PR sequence

| PR | Scope |
| --- | --- |
| PR A | Documentation-only roadmap |
| PR B | Governance dashboard + source-age audit |
| PR C | Visible reviewed-footer pilot |
| PR D | Print/PDF mode with QR-code pilot |
| PR E | Related-guides pilot |
| PR F | JSON-LD pilot |
| PR G | Accessibility audit and fixes |
| PR H | "What not to do" approved wording batches |

Each implementation PR should remain narrowly scoped, document eligibility rules, and confirm that pending/draft resources are unaffected.

## Do not do now

- No mass edit of all 145 HTML files.
- No QR files yet.
- No automatic medical-content changes.
- No dosing calculators.
- No vaccination catch-up calculator.
- No symptom checker.
- No patient data forms.
- No chatbot for clinical advice.
- No reviewed footer on pending/draft pages.

This roadmap also makes no changes to resource status, medical-review status, last-reviewed dates, metadata, references, slugs, titles, featured flags, hero fields, redirects, generated indexes, sitemap, application files, tests, legal pages, package files, styles, or scripts.

## Immediate next recommended implementation

After this roadmap PR is merged, create the documentation-only governance dashboard and source-age audit plan. Then pilot the visible reviewed footer and print mode with QR code on a small reviewed-page set.
