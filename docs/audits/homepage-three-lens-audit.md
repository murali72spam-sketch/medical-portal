# Homepage Three-Lens Audit

Date: 2026-05-24
Branch: audit/homepage-three-lens-review
Scope: Audit-only review of the current homepage after recent UI changes.

## 1. Executive Summary

The homepage is moving in the right direction for a parent-facing paediatric education portal. The first fold communicates the portal purpose, clinical leadership, read-only posture, and non-diagnostic limits quickly. The header search is a meaningful usability improvement and includes appropriate privacy guidance.

The main visual concern is the Medical Lead card inside the hero: the trust-note list is styled for a dark hero background, but it sits inside a light card, creating a likely low-contrast readability issue. The mobile experience also needs a closer pass because the search is inside the collapsed navigation, so it may not feel immediately available to parents.

No source code or medical content was changed in this audit. The generated resource index changed during build but was content-restored from HEAD.

## 2. Parent Lens Findings

- First fold: Strong. The headline, subcopy, and trust chips clearly tell a parent this is for education, not diagnosis. "No patient data stored" is reassuring and visible.
- Header search: Useful and appropriately scoped, but on mobile it is likely hidden behind the menu. Parents arriving with a specific concern may not notice search immediately unless the mobile menu pattern is very obvious.
- Hero text alignment: Clear and calm. The H1 is quite narrow by design, which gives an editorial feel but may create more line breaks than needed on desktop.
- Hero image balance: The image mosaic gives the portal a richer, real-resource feel. It supports the "many topics" message better than a single generic image.
- Medical Lead card: Helpful for trust, but the trust-note text likely lacks contrast on the light card. This is the most important visual polish item.
- About the Medical Lead strip: Reassuring and credential-forward. It may be a little close in content to the hero Medical Lead card, but the fuller credential context helps credibility.
- Resource/category browsing: The category cards and parent guide lanes are understandable and match how parents browse by concern. The page does become dense, so visual hierarchy should keep "start here" and "browse by need" distinct.
- Parent trust and clarity: Strong overall. The repeated education-only wording is appropriate and not overly alarming.

## 3. Expert Web Designer Lens Findings

- Highest-priority design issue: `.hero-trust-list span` uses near-white text while the list appears inside `.doctor-card`, a light card. This likely makes "Parent education only", "Read-only public portal", and "No patient data stored" hard to read.
- Header search on desktop: The search is present and styled, but the nav has many links plus the search form. It should be regression-tested around tablet and narrow desktop widths where wrapping/crowding is most likely.
- Header search on mobile: Because the nav collapses below 900px, the search needs mobile verification for discoverability, spacing, touch target size, and result-panel behavior.
- Hero layout: The two-column desktop structure is strong. The H1 max-width creates a premium, controlled look, but the line breaks should be visually checked at 900px, 1024px, 1280px, and 1440px.
- Hero image mosaic: Good visual energy, but it should be checked for cropping. Paediatric medical visuals should feel informative and calm, not decorative or visually busy.
- Medical Lead duplication: The hero card and the "About the Medical Lead" strip both serve trust. This is acceptable, but future polish should ensure they do not feel repetitive.
- Resource/category browsing: Categories are clear, but there are several browsing surfaces: popular guides, categories, parent lanes, full resource library, recently updated, and tools. Future polish should sharpen the order and reduce perceived duplication.
- Mobile layout: Needs screenshot-based confirmation. The source CSS suggests sensible stacking, but the header/search/menu interaction is the risk area.

## 4. Paediatrician / Clinical Safety Findings

- Non-diagnostic wording is present in the homepage disclaimer and footer. This is appropriate and should remain.
- The header search guidance explicitly tells users not to enter personal medical details. This is clinically and privacy appropriate.
- The empty search state directs parents to contact their doctor for patient-specific advice or urgent symptoms. This is safe and appropriately cautious.
- The homepage does not appear to collect patient data, request symptoms, provide AI triage, or imply diagnosis.
- No medical content edits are recommended as part of this audit.
- Keep avoiding AI/API functionality on the homepage until a separate clinical governance and privacy plan exists.

## 5. Priority Ranking of Option A/B/C/D

1. Option A: Continue homepage visual polish after parent/designer review.
   Rationale: The Medical Lead card contrast issue and mobile/header visual checks should be resolved before expanding scope.

2. Option B: Add automated tests for the new header search and homepage trust section.
   Rationale: The new search and trust language are important safety/usability surfaces and currently lack direct homepage regression coverage.

3. Option D: Add/clean resource category cards or homepage browsing UX.
   Rationale: Useful next, but best done after first-fold and search polish so browsing changes do not mask basic trust/usability issues.

4. Option C: Start planning AI-assisted resource finder, documentation only.
   Rationale: Keep this documentation-only and later. It should not precede the homepage safety, privacy, and regression-test work.

## 6. Recommended Next Branch Name

`codex/homepage-parent-trust-polish`

## 7. Specific Next Implementation Prompt

Continue homepage polish only. Do not edit `html-conditions` or medical content. Do not add AI/API functionality or collect patient data.

Fix the Medical Lead card trust-note contrast inside the hero, then visually verify the homepage at desktop, tablet, and mobile widths. Confirm the header search is discoverable and usable on mobile, including menu-open state and search-result panel behavior. Keep non-diagnostic and no-patient-data wording intact. Add focused Playwright coverage for header search visibility/results and homepage trust/disclaimer text if the visual polish is complete.

Run:

```text
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
```

If `data/conditions-index.json` is the only generated change after build/testing and no source HTML changed, restore it before finishing.

## 8. Stop-Rule Concerns

- Do not add AI-assisted search, triage, personalization, API calls, chat, or symptom intake in the next implementation branch.
- Do not collect names, contact details, symptoms, uploads, or patient-specific medical details.
- Do not change medical content or `html-conditions` as part of homepage visual polish.
- Do not weaken the education-only, non-diagnostic, or urgent-care safety language.

## 9. Tests That Should Be Added

- Homepage header search test: search input is visible on desktop, accessible by label, and returns expected resource results for a known query.
- Mobile header search test: opening the mobile menu exposes the search field, search guidance, and usable search results without horizontal overflow.
- Homepage trust/safety text test: verifies "No patient data stored", the important medical notice, and non-substitute-for-consultation wording remain present.
- Homepage category browsing test: clicking a category card or lane filter moves to the resource library and applies the expected filter.
- Visual smoke test: capture desktop and mobile first-fold screenshots once Playwright/browser preview is available in the environment.

## Verification Notes

- `npm.cmd run build`: passed. Generated `data/conditions-index.json` with 132 resources.
- `npm.cmd run validate:resources`: passed with 0 errors and 20 clinical governance warnings from existing resource terminology checks.
- `npm.cmd run qa:batch10 -- --reporter=list`: passed, 7 of 7 tests.
- `.png.png` double-extension filename check: none found.
- Browser/Playwright homepage visual preview: blocked in this sandbox. The in-app browser rejected the local file URL. Direct Playwright preview was also blocked by sandbox permissions while creating browser artifacts or spawning the browser process.
- `data/conditions-index.json`: content-restored from HEAD after build. `git diff --quiet -- data/conditions-index.json` returned no content diff, though `git status` may still show a stat-only modification because Git index refresh/checkouts cannot create `.git/index.lock` in this sandbox.
