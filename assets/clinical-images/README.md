# Clinical Image Governance (Clinical Portal 2026)

## 1. Purpose
This document defines the minimum governance requirements for selecting, importing, and displaying public clinical photographs and dermatology images in Clinical Portal 2026. It is intended to protect patient dignity, respect copyright and licence terms, and maintain clinically appropriate educational quality.

## 2. Core rule: clinical suitability and copyright permission are separate checks
An image is eligible for use only when **both** checks pass:

1. **Clinical suitability check:** The image is medically appropriate, educationally useful, and contextually accurate for the topic.
2. **Copyright/permission check:** Reuse is legally permitted under an explicit licence or documented permission basis.

Passing one check does **not** satisfy the other.

## 3. Approved / preferred source hierarchy
Use the following hierarchy when identifying candidate images:

1. **Preferred conditional source: DermNet (watermarked images only)**
   - DermNet watermarked images may be used **only** when the current source licence permits educational, non-commercial reuse under the applicable Attribution-NonCommercial-NoDerivatives terms, with attribution, active source link, retained watermark, and no derivative edits.
2. **Evidence-first clinical sites (content reference, not automatic image reuse):**
   - RCH, AAP / HealthyChildren, AAD, IAP, and other medical sites may be used as clinical evidence sources.
   - Their images must **not** be copied unless image-reuse permission is explicitly verified for the specific image.
3. **All other sources:**
   - Any other source requires manual licence verification before use.

## 4. Mandatory information to record for every imported image
Record all of the following metadata for each imported image:

- condition / topic
- source organisation
- original page URL
- image URL or identifier
- local repository file path
- source licence URL
- licence / permission basis
- date licence checked
- visible attribution text
- alt text
- whether watermark is retained
- whether patient identity risk has been checked

## 5. Image-use rules
- Do not remove watermarks.
- Do not crop, recolour, retouch, or apply other derivative edits when the licence forbids derivatives.
- Do not use identifiable patient images unless public reuse rights and consent basis are clearly established.
- Use CSS scaling for display rather than altering protected source files.
- Prefer clinically typical, parent-education-friendly images and represent diverse skin tones where feasible.

## 6. File and folder conventions
- Clinical photos live under `assets/clinical-images/`.
- Use lower-case kebab-case filenames.
- Include condition slug and source abbreviation in the filename where practical.

## 7. Required on-page attribution
- Each reused clinical image must include a visible caption or image-credit line.
- Include an active source link where the licence requires it.

## 8. Pre-publication checklist
Before publishing any page containing imported clinical images, confirm:

- Clinical suitability has been reviewed by the content owner/editor.
- Licence/permission has been re-verified against the current source terms.
- Required metadata fields are complete and accurate.
- Attribution text is visible and source links are active where required.
- Watermark requirements are met.
- Derivative restrictions are respected.
- Patient identity risk has been reviewed and documented.
- Alt text is present and appropriate for accessibility.

## 9. Licence-change reminder
Image licence terms can change over time. Recheck licence and permission status before publication and again before any major content revision.
