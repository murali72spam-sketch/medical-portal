# Content Protection and Copyright Policy

## 1. Purpose

Clinical Portal 2026 is a public, static, read-only paediatric parent education portal. It is built with HTML5, CSS3, and vanilla JavaScript, deployed from GitHub to Vercel, and does not use login, backend services, API keys, user accounts, analytics, or patient-data collection.

This policy defines lightweight, ethical, accessibility-friendly content protection and copyright governance for the portal. It is documentation-only. It does not change medical content, does not add tracking, does not add access control, and does not implement copy, right-click, print, or script-based restrictions.

## 2. Governance principles

The portal should remain static, public, readable, printable, and usable in urgent parent-care situations. Content protection should focus on attribution, source clarity, canonical metadata, and copyright notices rather than aggressive digital restrictions.

Do not implement the following site-wide controls:

- Do not disable text selection globally.
- Do not block copy or paste globally.
- Do not block right-click globally.
- Do not block printing for parent guides.
- Do not add user-specific watermarking because the site has no login or user identity.
- Do not add analytics, visitor counters, tracking pixels, fingerprinting, API calls, backend logging, databases, or AI/API services for this purpose.

## 3. What is protected

The following project materials should be treated as protected portal content unless a file states otherwise:

- Original parent education text written for Clinical Portal 2026.
- Page layout, resource structure, explanatory headings, summaries, and safety framing.
- Original diagrams, images, icons, tables, PDF layouts, and downloadable parent guides created for the portal.
- The Clinical Portal 2026 name, Dr. Murali Gopal attribution, and project-specific branding or presentation.
- Curated resource metadata, review status metadata, and publication governance documents.

Copyright protection does not prevent fair use, normal parent reading, private saving, emergency reference, citation, or reasonable sharing of links to public pages.

## 4. What parents are allowed to do

Parents and caregivers should be allowed to use the portal in practical, safe ways:

- Read pages on mobile phones, tablets, laptops, and desktops.
- Select, copy, translate, search, and save small portions of text for personal family reference.
- Print parent guides or save them as PDF for use during clinic visits or emergencies.
- Share links to portal pages with family members, caregivers, schools, or healthcare professionals.
- Use browser accessibility features, screen readers, reader mode, zoom, high-contrast tools, translation tools, and text-to-speech.

These uses support the portal's health-education purpose and should not be blocked by JavaScript or CSS.

## 5. What is discouraged

The portal should discourage misuse through clear notices and attribution rather than restrictive scripting. Discouraged uses include:

- Republishing full pages or PDF guides as if they were created by another person or organization.
- Removing copyright notices, clinician attribution, disclaimers, review metadata, or source acknowledgements.
- Selling copied portal content or placing it behind another paywall without permission.
- Editing medical text in a way that changes safety meaning, then redistributing it as Clinical Portal 2026 content.
- Using copied content to imply personal medical advice, diagnosis, treatment, dosing, or emergency triage.
- Bulk scraping, automated cloning, or search-index spam that misrepresents portal ownership.

## 6. Recommended notices and attribution

Improve copyright and attribution notices where appropriate, especially in the site footer, resource pages, and PDF parent guides. Suggested wording should stay concise and parent-friendly, for example:

```text
© 2026 Dr. Murali Gopal / Clinical Portal 2026. Parent education only. Please share links rather than republishing full content. Do not use this information as a substitute for medical care.
```

Resource pages may also include:

- Author or clinician attribution where appropriate.
- Last updated or medically reviewed date where the project governance supports it.
- A short link back to the canonical portal page.
- Existing medical disclaimer language and emergency-care safety wording.

Do not change resource medical content as part of copyright-governance work. Attribution changes should remain separate from clinical edits unless a clinician-review batch explicitly includes both.

## 7. Metadata recommendations

Use standard static metadata where appropriate:

- Add canonical URLs to public pages so search engines understand the preferred source.
- Use clear page titles and meta descriptions that identify Clinical Portal 2026 and the resource topic.
- Include author metadata where it is accurate and approved.
- Use Open Graph and basic social preview metadata only if it does not add third-party tracking.
- Keep metadata static in HTML; do not call analytics or external APIs to generate it.

Canonical metadata helps attribution, reduces duplicate-content confusion, and improves search-result clarity without restricting parent access.

## 8. Robots.txt and sitemap.xml recommendations

If `robots.txt` is missing, add a simple static file that allows normal indexing of public pages and points to the sitemap. If `sitemap.xml` is missing, add a static sitemap listing the public canonical URLs that should be discoverable.

Recommended principles:

- Keep `robots.txt` and `sitemap.xml` static and generated from known public routes.
- Do not use them to hide sensitive data; the portal must not contain patient data.
- Do not rely on `robots.txt` as security. It is a crawler instruction, not access control.
- Do not add external search, analytics, backend endpoints, or tracking as part of sitemap governance.

This task does not edit `robots.txt` or `sitemap.xml`; it only records the recommendation.

## 9. Optional PDF watermarking

Static watermarking may be considered for PDFs only if PDFs are already part of the existing publishing workflow. This should be a light, non-user-specific footer or margin notice, such as the portal name, copyright year, and canonical page URL.

Recommended limits:

- Do not obscure medical text, warning signs, dosage cautions, tables, or emergency instructions.
- Do not use user-specific names, identifiers, QR codes tied to a visitor, or download tracking.
- Do not prevent printing, text selection, screen-reader extraction, or offline use.
- Do not introduce a new PDF-generation backend only for watermarking.

Static PDF watermarking is an attribution aid, not a security system.

## 10. Why DRM is not true security

Browser-side DRM-like controls are weak protection for public static content. If a page is visible in a browser, the content can usually be copied through page source, screenshots, browser tools, cached files, print output, accessibility tools, or manual retyping.

Aggressive restrictions can create more harm than protection:

- They can block parents from copying emergency warning signs or clinic questions.
- They can interfere with screen readers, translation, browser search, and text-to-speech.
- They can make printing parent guides difficult during a clinic visit.
- They can create false confidence while not stopping determined copying.
- They can make the portal feel hostile to families who need fast, calm access.

For this portal, ethical protection should prefer attribution, canonical metadata, clear copyright notices, and review governance.

## 11. Accessibility and medical-safety position

Clinical Portal 2026 should not block selection, copying, right-click, translation, zoom, reader mode, text-to-speech, or printing. These are normal browser and assistive-technology functions.

Medical-safety reasons:

- A parent may need to copy red flags into a message to a caregiver or clinician.
- A caregiver may need to translate a page into a family language.
- A school, grandparent, or babysitter may need a printed guide.
- A parent may need large text, high contrast, or screen-reader access.
- Emergency use should not depend on JavaScript behavior or network calls.

Content protection must not make the portal less usable for disabled users, mobile users, low-bandwidth users, or families in urgent situations.

## 12. Visitor counters and privacy

A real visitor counter would require some form of measurement. Depending on implementation, that usually means analytics, an API, server-side logs, a database, third-party scripts, or another tracking mechanism.

Do not add a visitor counter unless privacy governance is approved first. Approval should define:

- What data is collected.
- Whether IP addresses, device details, cookies, local storage, referrers, or timestamps are used.
- Whether any third party receives data.
- Retention period and deletion process.
- Whether the counter is necessary for a paediatric parent education portal.
- Whether consent, notice, or legal review is required.

Because the current project intentionally has no analytics, backend, user accounts, or patient-data collection, a visitor counter should not be added as part of content-protection work.

## 13. Safe future options for premium or gated content

If Clinical Portal 2026 ever creates premium, private, clinician-only, or gated content, that should be treated as a separate product and governance decision. Safe future options may include:

- A dedicated access-control architecture with login, role-based permissions, and secure hosting.
- Clear privacy policy, terms, consent, retention, and data-protection review.
- Separation between public parent education and private professional resources.
- Server-side authorization rather than JavaScript-only hiding.
- Audit logging only if justified and governed.
- Payment or subscription handling only through compliant, reputable providers.
- A clinician review and copyright workflow before any gated material is published.

Do not retrofit pseudo-security into the current public static portal. Keep the current site static and public unless the project formally approves a new architecture.

## 14. Implementation checklist for future tasks

Future content-protection tasks should be small and reviewable:

- Footer copyright notice update.
- Resource-page attribution wording update.
- Canonical metadata update.
- Static PDF footer or watermark update, if already in the PDF workflow.
- Static `robots.txt` and `sitemap.xml` creation or validation, if missing.

Future tasks must not include:

- JavaScript copy blocking.
- Right-click blocking.
- Print blocking.
- Text-selection blocking.
- User-specific watermarking.
- Analytics or visitor counters.
- Backend, login, database, API, AI/API, or tracking.
- Medical content edits unless explicitly part of a clinician-reviewed medical-content task.

## 15. Final policy position

The recommended approach is attribution-first content governance. Clinical Portal 2026 should protect its work through copyright notices, canonical URLs, author attribution, review metadata, and clear discouragement of republication or commercial misuse.

The portal should remain static, public, private-by-design, and accessible. Parents should always be able to read, copy small portions, translate, print, and share links when doing so supports child care, clinic communication, or emergency readiness.
