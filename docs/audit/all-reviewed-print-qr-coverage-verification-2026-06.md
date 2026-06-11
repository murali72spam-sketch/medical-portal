# Clinical Portal 2026 - All Reviewed Print QR Coverage Verification

**Verification date:** 2026-06-10
**Related PR:** PR #141 - Add print QR handout pattern to all reviewed pages

## Current Tracker

- Total resources/htmls: 145
- Published + reviewed: 81
- Published + pending clinician review: 37
- Draft + pending review: 25
- Reviewed draft redirects: 2
- Remaining guides needing review/completion: 62
- Respiratory reviewed count: 4

## Final Print/QR Coverage

- Original pilot pages: 6
- Expansion batch 1 pages: 10
- Expansion batch 2 pages: 10
- Final all-reviewed expansion pages: 55
- Total reviewed pages with Print/QR handout pattern: 81 / 81
- QR codes generated: 81

## Skipped Groups

- 37 published + pending clinician-review pages
- 25 draft + pending-review pages
- 2 reviewed draft redirects

These were deliberately skipped because Print/QR should only appear on published + clinician-reviewed public resources.

## Production Verification Checklist

- [x] Production site reachable
- [x] At least one newly updated reviewed page opened successfully
- [x] Print this guide button visible
- [x] QR block visible
- [x] QR opens the same live page
- [x] Print preview clean
- [x] Reviewed-footer remains visible
- [x] No obvious layout break on checked production page
- [x] No mojibake reported
- [x] Homepage/resource count unchanged

## Verification Summary

Dr. Murali visually confirmed the Print/QR system works on production after prior pilot/expansion batches. PR #141 completed coverage for all 81 published + reviewed resources. The remaining unreviewed/draft/redirect resources were intentionally excluded.

## Governance Note

Future pages should receive Print/QR only when they become:

- `status: published`
- `medical_review_status: reviewed`

Future clinician-review finalization PRs should include:

- reviewed-footer
- Print this guide button
- QR block
- local QR SVG generated into `assets/qr/`
- QR entry added to `tools/generate-qr-codes.js`

## Follow-up Recommendations

- Treat Print/QR as complete for current reviewed public resources.
- Next feature should be Related Guides pilot using only published + reviewed pages.
- Continue clinician-review batches for remaining 62 guides needing review/completion.
- Do not apply Print/QR to pending-review or draft pages until reviewed and published.
