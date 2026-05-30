# Clinical Portal 2026 — Launch Infrastructure PR Plan

Date: 30 May 2026

Branch: `launch/site-infrastructure`

## Purpose

Add low-risk static launch infrastructure after PR #93 site-readiness audit.

This PR is technical launch infrastructure only. It does not change clinical content, resource review status, `last_reviewed`, `medical_review_status`, or parent-guide medical wording.

## Scope

Planned / included files:

- `robots.txt`
- `sitemap.xml`
- `tools/generate-sitemap.js`
- `site.webmanifest`
- `assets/icons/icon.svg`
- `404.html`
- `package.json` build-script update to generate sitemap after index generation

## Implementation Notes

### Robots

`robots.txt` allows crawling and points to the production sitemap URL:

`https://medical-portal-brown.vercel.app/sitemap.xml`

### Sitemap

The sitemap generator reads `data/conditions-index.json` after the auto-index build step and emits `sitemap.xml`.

Sitemap logic:

- Includes core static pages.
- Includes resources with `status: published` and a valid `url`.
- Uses `last_reviewed` as `<lastmod>` when it is a valid `YYYY-MM-DD` date.
- Gives reviewed resources slightly higher priority than pending-review published resources.

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

If `data/conditions-index.json` changes only because of build churn and no source HTML changed, restore it:

```powershell
git checkout -- data/conditions-index.json
```

Expected result:

- Build passes.
- `sitemap.xml` is generated.
- Existing validation warnings may remain unchanged.
- Batch QA passes.
- No duplicate `.png.png` assets.

## Post-Merge Production Checks

After merge and Vercel deployment:

- `https://medical-portal-brown.vercel.app/robots.txt`
- `https://medical-portal-brown.vercel.app/sitemap.xml`
- `https://medical-portal-brown.vercel.app/site.webmanifest`
- `https://medical-portal-brown.vercel.app/404.html`
- Homepage still loads search, resource cards, filters, disclaimer, privacy, and feedback wording.

## Deferred Items

- Custom domain setup remains deferred until a domain is selected and configured in Vercel.
- Public-status consistency and duplicate/metadata cleanup remain separate PRs.
- Google Form live-field privacy verification remains a separate governance check.
