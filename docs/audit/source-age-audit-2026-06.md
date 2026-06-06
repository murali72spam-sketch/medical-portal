# Clinical Portal 2026 - Source Age Audit

**Audit date:** 2026-06-06

## Purpose

Track the currency and recheck priority of clinical references used across parent guides so stale or guideline-sensitive sources can be identified before future clinician-review and finalization batches.

## Safety Statement

- This audit does not verify or approve medical content by itself.
- This audit supports future clinician review.
- Current guideline-sensitive pages require direct source verification before status changes.
- A recent source check does not replace clinician review or authorize publication.

## Source Categories

| Source category | Examples or planning scope |
| --- | --- |
| RCH / Raising Children Network | Royal Children's Hospital Melbourne Kids Health Info and Raising Children Network |
| NICE | NICE guidelines and antimicrobial prescribing guidance |
| NHS | Current NHS parent and clinical guidance |
| AAP / HealthyChildren | American Academy of Pediatrics and HealthyChildren guidance |
| WHO | World Health Organization guidance |
| CDC | Centers for Disease Control and Prevention guidance |
| IAP / ACVIP | Indian Academy of Pediatrics and ACVIP guidance |
| Indian government / MoHFW | National and Ministry of Health and Family Welfare guidance |
| Specialty society guidance | Relevant current professional society guidance |
| Other sources requiring clinician approval | Sources outside the standard groups that require explicit suitability and currency confirmation |

## Source-Age Tracking Table

This initial table records the three Batch 9 resources for which Dr. Murali completed clinician review and source verification on 2026-06-06. Future updates should add remaining resources and, where useful, use one row per source.

| Resource title | File path | Category | Current status | Current medical_review_status | Current last_reviewed | Source organization | Source title | Source URL or citation note | Last source checked date | Recheck priority | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bronchiolitis in Infants | `html-conditions/02-bronchiolitis-parent-guide.html` | Respiratory | published | reviewed | 2026-06-06 | RCH; NICE; AAP; NHS | RCH Kids Health Info: Bronchiolitis; NICE bronchiolitis in children diagnosis and management; AAP bronchiolitis guidance; NHS bronchiolitis guidance | Citations recorded in resource metadata; capture direct URLs or source versions during the next recheck | 2026-06-06 | 6-month recheck | Clinician-reviewed and source-verified by Dr. Murali during Batch 9; high-caution infant breathing and feeding topic |
| Croup in Children | `html-conditions/01-croup-parent-guide.html` | Respiratory | published | reviewed | 2026-06-06 | RCH; NHS; AAP / HealthyChildren | RCH Kids Health Info: Croup; NHS croup guidance; HealthyChildren croup guidance | Citations recorded in resource metadata; capture direct URLs or source versions during the next recheck | 2026-06-06 | 6-month recheck | Clinician-reviewed and source-verified by Dr. Murali during Batch 9; airway and breathing-warning topic |
| Cough in Children | `html-conditions/cough-in-children.html` | Respiratory | published | reviewed | 2026-06-06 | RCH; NICE; AAP / HealthyChildren; FDA | RCH Kids Health Info: Cough; NICE NG120 acute cough antimicrobial prescribing; HealthyChildren cough and cold medicines guidance; FDA children cough and cold medicines safety information | Citations recorded in resource metadata; capture direct URLs or source versions during the next recheck | 2026-06-06 | 6-month recheck | Clinician-reviewed, source-verified, and explicitly approved for publication and reviewed status by Dr. Murali during Batch 9; medicine-boundary topic |
| To be added in future audit updates | `html-conditions/...` | To be recorded | To be recorded | To be recorded | To be recorded | To be recorded | To be recorded | Direct URL, version, publication date, or citation note | To be recorded | Assign from definitions below | Do not infer source currency or clinical approval from metadata alone |

## Recheck Priority Definitions

| Recheck priority | Definition |
| --- | --- |
| Annual routine recheck | Recheck at least annually for stable, lower-risk parent education sources |
| 6-month recheck | Recheck at least every six months for higher-caution or more guideline-sensitive material |
| Before any reviewed-status change | Verify every relevant source before changing a resource from pending clinician review to reviewed |
| Before publication | Verify every relevant source before publishing a draft resource |
| Before any calculator/tool implementation | Verify governing guidance and obtain explicit clinical approval before designing or implementing any calculator or interactive clinical tool |
| Immediate recheck required | Recheck before relying on the source because it may be stale, incomplete, unclear, superseded, or highly time-sensitive |

Multiple priorities may apply. The strictest applicable priority should govern the next action.

## High-Priority Source-Age Groups

The following groups require direct current-source verification before relevant status, publication, or implementation decisions:

- Vaccination and catch-up vaccination
- Medication/dosing
- Asthma/action plans
- Emergency/first-aid
- Serious infections
- High-caution newborn
- Mental-health/safeguarding
- Travel health
- Nutrition where guidelines change or depend on age/deficiency risk

## Batch 9 Respiratory Source-Age Note

Bronchiolitis in Infants, Croup in Children, and Cough in Children were clinician-reviewed and finalized on 2026-06-06. Source verification was completed by Dr. Murali during Batch 9. Their next source recheck should preserve the high-caution respiratory, infant-safety, airway, and medicine-boundary considerations recorded in the Batch 9 review pack.

## Future Workflow

1. During every clinician-review pack, include source-verification checkboxes and record source versions or access dates where available.
2. During a finalization PR, update `last_reviewed` only after clinician approval and completed source verification.
3. Use this audit to identify stale or guideline-sensitive sources before selecting future review batches.
4. Assign the strictest applicable recheck priority and record the reason in the notes.
5. Keep source-age tracking separate from clinical approval, publication authorization, and reviewed-status decisions.

## Future Automation Idea

A future documentation or reporting task may:

- Extract references metadata from HTML.
- Generate a source-organization summary.
- Flag pages whose sources have not been checked for more than 12 months.

Do not implement source-age automation in this PR.
