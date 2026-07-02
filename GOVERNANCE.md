# Clinical Portal 2026 Governance

## 1. Purpose and scope

Clinical Portal 2026 is a static parent education portal for public-facing
medical guidance. Governance exists to keep future edits careful, reviewable,
and easy to validate.

This document applies to medical guide pages, resource indexes, metadata,
static assets, release notes, and validation workflows.

## 2. Static-site and privacy boundaries

- Keep the initial version static and read-only.
- Do not collect patient-specific data.
- Do not collect patient identifiers.
- Do not add backend services, databases, logins, patient-data forms, contact
  forms for clinical communication, appointment forms, medical question forms,
  appointment booking, chat, analytics, or patient-data storage in the initial
  version.
- Do not add features that require storing or transmitting private health
  information.
- An optional external non-clinical website-feedback form may be linked only if
  it is clearly labelled as website feedback only, warns users not to submit
  patient or medical details, is not used for clinical communication, is covered
  by the privacy policy's external-service explanation, and does not create
  patient records in the static portal.

## 3. Medical content safety rules

- Do not invent dosages, schedules, red flags, diagnostic criteria,
  contraindications, or treatment algorithms.
- Do not add casual dosing calculators.
- Do not make medical advice more specific than the reviewed source supports.
- Preserve non-substitution wording that directs families to professional
  medical care when needed.
- Public medical pages require a disclaimer, non-substitution wording,
  references, last-reviewed date, review status, and author attribution.
- Any change to clinical meaning requires medical review before release.

## 4. Review status rules

- Published pages must have clear review status metadata.
- Do not publish new medical content as final unless it has completed the
  required clinical review.
- Draft or pending-review resources must not appear as published final guidance.
- If review status changes, update the page metadata and resource index through
  the normal validation workflow.

## 5. Source and reference rules

- Use reputable sources only, such as national public health bodies,
  professional societies, peer-reviewed literature, or recognized clinical
  references.
- Do not cite unsourced claims or informal summaries as authority for medical
  guidance.
- For vaccination, medication, schedule-dependent, or rapidly changing topics,
  check current guidelines before editing.
- Keep references specific enough for future reviewers to verify the source.

## 6. Git workflow

- Start from clean main.
- Use a feature branch for every change.
- Keep changes scoped to the stated purpose of the branch.
- Validate before commit.
- Review the diff before opening or merging work.
- Verify production after merge.

## 7. Validation workflow

- Run the project build and resource validation before release.
- Run the relevant quality checks for changed areas.
- Check for accidental generated-file drift.
- Check for whitespace errors before commit.
- Confirm the working tree contains only intended changes.

## 8. Release tagging

- Create release tags only after content, metadata, validation, and production
  checks are complete.
- Use clear tag names that describe the release state.
- Record release status in release notes and the maintenance log.
- Do not use a release tag to imply clinical perfection or guideline currency
  beyond the reviewed dates.

## 9. Emergency correction workflow

- Create a focused correction branch from clean main.
- Change only the files needed to correct the issue.
- Preserve the static-site and privacy boundaries.
- Obtain medical review when the correction changes clinical meaning.
- Run validation before merge.
- Verify the corrected production page after deployment.
- Record the correction and rollback notes in the maintenance log.

## 10. What not to build in the initial version

- Patient accounts or login.
- Backend services or databases.
- Patient-data forms.
- Contact forms for clinical communication.
- Appointment forms.
- Medical question forms.
- Patient identifiers or patient-specific data collection.
- Appointment booking.
- Chat or messaging.
- Analytics that track patient behavior.
- Casual dosing calculators.
- Unreviewed diagnostic or treatment tools.
- Any website-feedback mechanism that asks for or stores patient records in the
  static portal.
