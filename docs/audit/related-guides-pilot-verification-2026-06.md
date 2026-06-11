# Clinical Portal 2026 - Related Guides Pilot Verification

**Verification date:** 2026-06-11

**Related PR:** PR #143 - Add related guides pilot

## Current Tracker

- Total resources/htmls: 145
- Published + reviewed: 81
- Published + pending clinician review: 37
- Draft + pending review: 25
- Reviewed draft redirects: 2
- Remaining guides needing review/completion: 62
- Print/QR coverage: 81 / 81 reviewed pages
- Related Guides coverage: 8 reviewed pages

## Pilot Pages Verified

- Common Cold in Children
- Cough in Children
- Croup in Children
- Bronchiolitis in Infants
- Middle Ear Infection
- Tonsillitis in Children
- Hand, Foot and Mouth Disease
- Chickenpox

## Production Verification Checklist

- [x] Production site reachable
- [x] At least one pilot page opened successfully
- [x] Related Guides section visible
- [x] Related links open correctly
- [x] Linked pages are published + reviewed resources
- [x] Print/QR footer remains visible
- [x] No obvious layout break on checked production page
- [x] No mojibake reported
- [x] Homepage/resource count unchanged

## Verification Summary

Dr. Murali visually confirmed that the Related Guides pilot is working correctly on production after PR #143 was merged and deployed.

## Governance Note

Future Related Guides links should only point to:

- `status: published`
- `medical_review_status: reviewed`

Avoid linking to:

- draft pages
- pending clinician-review pages
- redirect stubs
- unfinished guides

## Follow-up Recommendations

- Treat Related Guides pilot as production-verified.
- Expand Related Guides in small batches of 10-15 published + reviewed pages.
- Do not alter medical content during expansion.
- Use coherent clinical/parent-navigation clusters.
- Continue clinician-review batches for remaining 62 guides needing review/completion.
