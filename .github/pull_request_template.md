# Summary

- What changed?
- Why was it changed?

# Changed Files

- Files changed:
  - 
- [ ] Confirmed whether `html-conditions` files were edited.
- [ ] Confirmed whether `data/conditions-index.json` is included.

# Tests Run

- [ ] `npm.cmd run build`
- [ ] `npm.cmd run validate:resources`
- [ ] `npm.cmd run qa:batch10 -- --reporter=list`
- [ ] Visual check completed if UI changed.
- [ ] Mobile check completed if layout changed.

# Three-Lens Audit

## Parent Visiting The Website

- [ ] Is the change clear?
- [ ] Is it reassuring?
- [ ] Is it easy to navigate?
- [ ] Are search and resources easy to use?
- [ ] Is the mobile experience comfortable?

## Expert Website Designer

- [ ] Is typography good?
- [ ] Are spacing and layout balanced?
- [ ] Is visual hierarchy clear?
- [ ] Are header and search usable?
- [ ] Are accessibility, focus states, and contrast acceptable?

## Paediatrician / Clinical Safety Reviewer

- [ ] No diagnosis introduced.
- [ ] No individualized treatment advice introduced.
- [ ] No invented dose introduced.
- [ ] No unsafe vaccine or catch-up logic introduced.
- [ ] No prescribing advice introduced.
- [ ] Disclaimer, references, and last-reviewed date are present where relevant.

# Stop-Rule Checklist

Do not merge if any of these are true:

- [ ] Required checks fail.
- [ ] Risky medical content changed without review.
- [ ] Dosing, vaccine, prescribing, or catch-up logic touched without verification.
- [ ] Patient-data collection added.
- [ ] API key or secret exposed.
- [ ] AI/API integration added without governance.
- [ ] Unexpected `data/conditions-index.json` change.
- [ ] `node_modules`, `test-results`, or `playwright-report` included.
- [ ] Layout, search, or navigation broken.

# Production Verification

- [ ] Homepage loads.
- [ ] Header and search are visible.
- [ ] Mobile layout is acceptable.
- [ ] Search returns only existing portal resources.
- [ ] Legal, privacy, and disclaimer links are accessible.
- [ ] No patient-data collection introduced.
