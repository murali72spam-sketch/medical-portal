# Clinical Portal 2026 — Controlled-Review Launch Infrastructure PR Plan

Date: 30 May 2026

Branch: `launch/site-infrastructure`

## Purpose

Add low-risk static launch infrastructure after PR #93 while keeping the portal in controlled clinical-review mode.

This PR is technical infrastructure only. It does not change clinical content, resource review status, `last_reviewed`, `medical_review_status`, references, or parent-guide medical wording.

## Launch Posture

Current posture: controlled review, not broad public launch.

The production site may remain reachable by direct URL, but it should not be promoted, indexed, or treated as final public launch until the clinical-review backlog and public-status consistency work are complete.

## Scope

Included files:

- `robots.txt`
- `sitemap.xml`
- `tools/generate-sitemap.js`
- `site.webmanifest`
- `assets/icons/icon.svg`
- `404.html`
- `vercel.json`
- `auto-index-generator.js`
- `package.json` build-script update to generate sitemap after index generation

## Implementation Notes

### Global noindex

`vercel.json` adds a global response header:

```text
X-Robots-Tag: noindex, nofollow
```

This is intentional during controlled-review mode. Search engines can crawl the site and see the noindex directive, but should not index it.

### Public Index Filtering

`auto-index-generator.js` now supports a public index mode.

Default behavior:

- Local build: `all` mode, to preserve local QA and full review workflows.
- Vercel build: `reviewed-only` mode, so production exposes only resources that are both `status: published` and `medical_review_status: reviewed`.

Override available:

```powershell
$env:CLINICAL_PORTAL_PUBLIC_INDEX_MODE="all"
npm.cmd run build
```

or

```powershell
$env:CLINICAL_PORTAL_PUBLIC_INDEX_MODE="reviewed-only"
npm.cmd run build
```

### Robots

`robots.txt` intentionally does not promote the sitemap during controlled-review mode.

It allows crawling so the `X-Robots-Tag: noindex, nofollow` header can be seen.

### Sitemap

The sitemap generator reads `data/conditions-index.json` after the auto-index build step and emits `sitemap.xml`.

Controlled-review sitemap logic:

- Includes core static pages.
- Includes only resources with `status: published` and `medical_review_status: reviewed`.
- Uses `last_reviewed` as `<lastmod>` when it is a valid `YYYY-MM-DD` date.

### Favicon / Manifest

Adds a simple SVG icon and `site.webmanifest` for browser/app identity. No raster icon generation is included in this PR.

### 404 Page

Adds a static, parent-safe 404 page with a homepage link, resource-library link, and medical-disclaimer link.

## Safety Boundaries

This PR must not:

- Mark resources as reviewed.
- Change medical wording.
- Change metadata status or review state.
- Add analytics, tracking, forms, backend APIs, appointment booking, login, or patient-data collection.
- Delete duplicate pages.

## Validation Commands

Run before merge from the local repo:

```powershell
npm.cmd run build
npm.cmd run validate:resources
npm.cmd run qa:batch10 -- --reporter=list
Get-ChildItem ".\assets" -Recurse -Filter "*.png.png" | Select-Object FullName
```

Because local build defaults to `all` mode, existing local Batch 10 QA should continue to see the full local index.

To simulate production controlled-review indexing locally:

```powershell
$env:CLINICAL_PORTAL_PUBLIC_INDEX_MODE="reviewed-only"
npm.cmd run build
Get-Content .\data\conditions-index.json | Select-String 'pending-clinician-review'
Remove-Item Env:\CLINICAL_PORTAL_PUBLIC_INDEX_MODE
```

If `data/conditions-index.json` changes only because of build churn and no source HTML changed, restore it:

```powershell
git checkout -- data/conditions-index.json
```

Expected result:

- Build passes.
- `sitemap.xml` is generated.
- Existing validation warnings may remain unchanged.
- Batch QA passes in local all-resource mode.
- No duplicate `.png.png` assets.

## Post-Merge Production Checks

After merge and Vercel deployment:

- `https://medical-portal-brown.vercel.app/robots.txt`
- `https://medical-portal-brown.vercel.app/sitemap.xml`
- `https://medical-portal-brown.vercel.app/site.webmanifest`
- `https://medical-portal-brown.vercel.app/404.html`
- Confirm response headers include `X-Robots-Tag: noindex, nofollow`.
- Homepage still loads search, resource cards, filters, disclaimer, privacy, and feedback wording.
- Production homepage resource count should reflect reviewed/published resources only while controlled-review mode is active.

## Deferred Items

- Remove global `noindex, nofollow` only when the portal is ready for full public launch.
- Custom domain setup remains deferred until a domain is selected and configured in Vercel.
- Public-status consistency and duplicate/metadata cleanup remain separate PRs.
- Google Form live-field privacy verification remains a separate governance check.
