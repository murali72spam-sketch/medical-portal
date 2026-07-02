# Clinical Portal 2026 Review Checklist

## 1. New guide review

- Confirm the guide fits the parent education scope.
- Confirm the page includes disclaimer and non-substitution wording.
- Confirm references are reputable and specific.
- Confirm author attribution, last-reviewed date, and review status are present.
- Confirm no patient-specific data collection is introduced.
- Confirm no invented dosages, schedules, red flags, diagnostic criteria,
  contraindications, or treatment algorithms are introduced.

## 2. Existing guide update

- Identify the reason for the update.
- Compare the change against current reputable sources.
- Preserve existing safety wording unless reviewed replacement wording is added.
- Update references, last-reviewed date, review status, and author attribution
  when clinical meaning changes.
- Confirm the update does not broaden advice beyond the source.

## 3. Metadata review

- Confirm title, description, category, slug, and resource status are accurate.
- Confirm published resources are not marked draft or pending review.
- Confirm draft or pending-review resources are not presented as final guidance.
- Confirm index and sitemap changes match source page changes.

## 4. Medical safety review

- Check for unsupported medical claims.
- Check for invented dosages, schedules, red flags, diagnostic criteria,
  contraindications, or treatment algorithms.
- Check vaccination and schedule-dependent content against current guidelines.
- Check that urgent-care and emergency-care wording is clear where applicable.
- Confirm the guide remains education-only and not a substitute for medical
  consultation.

## 5. Accessibility/mobile/print review

- Check headings are ordered and descriptive.
- Check links have meaningful text.
- Check the page is readable on mobile.
- Check print output is usable for parent education.
- Check images, QR assets, and icons render correctly.
- Check contrast and spacing remain readable.

## 6. Pre-commit validation

Run:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
Get-ChildItem ".\assets\qr" -Filter "*.svg" | Measure-Object
git diff --check
git status
```

Generated-file rule: If only `data/conditions-index.json` and `sitemap.xml`
change after build/testing and no source HTML changed, restore them.

```powershell
git restore .\data\conditions-index.json .\sitemap.xml
```

## 7. Post-merge production verification

- Verify the production homepage loads.
- Verify the production index loads.
- Verify `sitemap.xml` loads.
- Verify `robots.txt` loads.
- Verify final cleanup pages return HTTP 200.
- Record production verification in `MAINTENANCE_LOG.md`.
