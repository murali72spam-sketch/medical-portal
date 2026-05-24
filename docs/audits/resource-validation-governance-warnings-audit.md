# Resource Validation Governance Warnings Audit

Date: 2026-05-24
Branch: `audit/resource-validation-governance-warnings`

Audit-only review of the current `npm.cmd run validate:resources` governance and vaccination safety warnings. No medical resource content, portal behavior, tests, package files, or generated index files were intentionally changed.

## Validation Snapshot

| Check | Result |
| --- | --- |
| Resource HTML files | 132 |
| Indexed resources | 132 |
| Resource count check | Passed |
| Total errors | 0 |
| Total warnings | 20 |
| Clinical governance warnings | 19 |
| Vaccination safety warnings | 1 |

## Classification Key

| Classification | Meaning |
| --- | --- |
| harmless keyword false-positive | Keyword is present in a safe disclaimer, avoidance statement, history/context note, or non-actionable parent education. |
| needs wording review | Wording is broadly safety-framed, but should be tightened in a later editorial/clinical pass to avoid implying treatment direction. |
| needs clinician review | Topic involves clinical treatment, medicine decisions, vaccination planning, or higher-risk disease management and should be checked by a clinician. |
| high-caution / do not publish until verified | Warning touches guidance-dependent or high-risk clinical decision support; do not publish final content until verified by a clinician/current source. |

## Warning Review

| Affected file/page | Warning text or keyword | Classification | Short reason | Recommended action | Content edit needed now |
| --- | --- | --- | --- | --- | --- |
| `html-conditions/03-middle-ear-infection-parent-guide.html` | `antibiotic` | harmless keyword false-positive | The page uses antibiotic language as caution/stewardship wording and states it does not provide antibiotic names or doses. | Keep for audit record; no portal content change in this task. Consider future validator suppression for negated/no-dose statements. | No |
| `html-conditions/04-conjunctivitis-parent-guide.html` | `antibiotic`, `steroid` | needs clinician review | The text is clinician-directed, but eye antibiotics/steroid drops are treatment-selection topics with potential harm if misread. | Clinician should verify wording before publication; preserve the "only when prescribed" framing. | No |
| `html-conditions/05-tonsillitis-parent-guide.html` | `antibiotic` | harmless keyword false-positive | The warning is triggered by antibiotic-caution language and explicit avoidance of antibiotic names/doses/scoring algorithms. | Keep as safe stewardship wording; no immediate content edit. | No |
| `html-conditions/06-impetigo-parent-guide.html` | `antibiotic`, `steroid` | needs clinician review | Mentions prescribed topical/oral antibiotics and avoiding steroid creams; safe framing is present, but treatment choice is clinician-dependent. | Clinician review should confirm treatment wording remains non-prescriptive. | No |
| `html-conditions/09-osteomyelitis-parent-guide.html` | `antibiotic` | high-caution / do not publish until verified | Osteomyelitis is a serious infection; the page says it usually needs antibiotics and follow-up plans, which is appropriate only if clinically verified. | Do not publish as final until clinician confirms urgency, antibiotic framing, red flags, and follow-up language. | No |
| `html-conditions/19-ringworm-parent-guide.html` | `steroid` | harmless keyword false-positive | The page warns against steroid-mixed creams because they can worsen or mask fungal infection; this is avoidance advice, not dosing or prescribing. | Keep warning as audit-only note; no immediate edit. | No |
| `html-conditions/asthma-in-children.html` | `dose` | needs wording review | The page warns not to change asthma medicine dose/frequency and notes wrong dose risk; no actual dose is given, but asthma medicine wording is sensitive. | Later wording review should ensure it stays clearly doctor-plan based and non-prescriptive. | No |
| `html-conditions/bcg-scar-and-lump.html` | `steroid` | harmless keyword false-positive | The keyword appears in an instruction not to apply steroid creams without medical advice. | Keep as safe avoidance language; no immediate edit. | No |
| `html-conditions/catch-up-vaccination-parent-guide.html` | `minimum interval` | high-caution / do not publish until verified | Catch-up vaccination and interval rules are schedule-calculation topics that depend on current guidance and patient history. | Clinician/current-guideline verification required before final publication; do not add tables or interval rules in this audit. | No |
| `html-conditions/child-travel-health.html` | `antibiotic` | harmless keyword false-positive | The keyword appears in a warning that antimalarial or antibiotic self-medication is unsafe unless specifically prescribed. | Keep safety wording; no immediate edit. | No |
| `html-conditions/childhood-overweight-and-obesity.html` | `insulin` | harmless keyword false-positive | "Insulin resistance" is listed as a possible associated concern, not as insulin treatment advice. | Keep as non-prescriptive risk context; no immediate edit. | No |
| `html-conditions/common-cold-in-children.html` | `antibiotic` | harmless keyword false-positive | The page states routine viral colds do not need antibiotics and advises against starting antibiotics without review. | Keep stewardship wording; no immediate edit. | No |
| `html-conditions/cough-in-children.html` | `antibiotic` | harmless keyword false-positive | The warning is triggered by advice not to use old prescriptions/start antibiotics and by a disclaimer that no antibiotic rules are provided. | Keep as safe parent guidance; consider future validator handling of negative statements. | No |
| `html-conditions/hpv-vaccine-parent-guide.html` | `dose` | high-caution / do not publish until verified | HPV vaccine dose schedule depends on age and current guidance; the page avoids fixed schedules but still references schedule decisions. | Clinician/current-guideline review required before final publication; do not add dose schedules in this audit. | No |
| `html-conditions/hypothyroidism-in-children.html` | `levothyroxine` | needs clinician review | The page says it does not include levothyroxine dosing or treatment schedules; drug-specific thyroid treatment still warrants clinician review. | Clinician should verify that no dosing, lab targets, or treatment-adjustment advice is implied. | No |
| `html-conditions/short-stature-in-children.html` | `steroid` | harmless keyword false-positive | "Long-term steroid exposure" appears as medical-history context, not treatment advice. | Keep as context; no immediate edit. | No |
| `html-conditions/typhoid-fever.html` | `antibiotic` | high-caution / do not publish until verified | Typhoid antibiotic choice is resistance-dependent; the page mentions relapse/resistance and clinical judgement. | Clinician review required before publication; verify resistance, red-flag, and treatment-selection wording. | No |
| `html-conditions/vaccination-faq-for-parents.html` | `dose`, `steroid` | high-caution / do not publish until verified | Missed-dose and steroid/immunosuppression vaccine planning depends on current guidance and individual risk. | Clinician/current-guideline review required; avoid adding catch-up calculators or schedules. | No |
| `html-conditions/vaccination-in-children-with-asthma-allergy.html` | `emergency treatment` | high-caution / do not publish until verified | Prior emergency treatment after vaccination may indicate serious allergy and affects future vaccine planning. | Clinician review required before publication; verify reaction-risk wording and referral/escalation language. | No |
| `html-conditions/vaccination-in-special-medical-conditions.html` | `steroid` | high-caution / do not publish until verified | Steroids/immunosuppressive medicines can alter vaccine eligibility and timing. | Clinician/current-guideline review required; do not add live-vaccine rules, thresholds, or schedules in this audit. | No |

## Warning Summary

- Total current warnings captured: 20
- Harmless keyword false-positive: 9
- Needs wording review: 1
- Needs clinician review: 3
- High-caution / do not publish until verified: 7
- Content edits made now: none

## Recommended Follow-Up

1. Prioritize clinician verification for high-caution vaccination, typhoid, and osteomyelitis pages before publication.
2. Review clinician-review pages for treatment-selection wording while keeping them non-prescriptive.
3. Consider a later validator improvement pass for negated safety wording such as "do not start", "does not provide", and history/context mentions.
