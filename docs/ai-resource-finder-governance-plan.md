# AI Resource Finder Governance Plan

## Purpose

This document defines the governance and architecture guardrails for any future AI-assisted resource finder in the Clinical Portal 2026.

The portal is a static, public, read-only paediatric parent education portal. It must not collect, store, or process patient-specific data. Any AI-assisted feature must be a source-restricted resource finder that helps parents and caregivers locate existing portal guides and resources. It must not be a medical chatbot.

This plan complements the broader search assistant planning in [portal-search-assistant-plan.md](./portal-search-assistant-plan.md). That document describes possible product flows and implementation phases; this document sets the required safety, privacy, source, and approval boundaries before any live AI work is added.

## Allowed Behaviour

A future AI-assisted resource finder may:

- Accept general search phrases, such as "fever guide", "newborn feeding", or "dengue warning signs".
- Recommend only existing portal resources from the approved local index and reviewed portal content.
- Explain that the portal provides general education only and is not a substitute for professional medical care.
- Show relevant guides, categories, and safe "when to seek medical care" resources when those resources already exist in the portal.
- Help users navigate to existing parent education content using plain-language resource cards.
- Say that no matching portal resource was found when the approved index does not contain a suitable match.

## Prohibited Behaviour

A future AI-assisted resource finder must not:

- Diagnose a child or adult.
- Provide drug dosing, dose calculation, or medicine quantity advice.
- Prescribe, recommend, start, stop, or change medicines.
- Generate vaccine schedules or catch-up vaccine advice.
- Provide individualized patient-specific advice.
- Perform symptom triage or rank the urgency of a specific patient's symptoms.
- Replace emergency decision-making or tell a user whether emergency care is or is not needed.
- Request, accept as required input, store, or encourage patient identifiers.
- Ask for uploads, reports, prescriptions, photos, names, phone numbers, dates of birth, hospital numbers, or other personal medical details.
- Interpret lab results, prescriptions, images, clinical measurements, or uploaded records.
- Search the open web or use external medical guidance as a source unless that material has been explicitly added to the portal and reviewed.

## Privacy Rules

The resource finder must be designed around no patient data collection.

Required privacy controls:

- Do not collect patient data.
- Do not store raw search queries containing patient-specific details.
- Do not add analytics or tracking for the AI resource finder without a separate privacy review and explicit approval.
- Warn users not to enter personal medical details.
- Keep the input experience oriented toward general resource discovery, not case description.
- If live AI is later approved, disable provider query logging where supported, or minimize logging to the lowest available setting according to provider capability.
- Do not send names, phone numbers, dates of birth, hospital numbers, photos, reports, prescriptions, or other patient identifiers to an AI provider.
- Prefer short input limits that reduce the chance of users pasting medical histories or reports.

Suggested input notice:

> Search for general topics only. Do not enter names, phone numbers, dates of birth, hospital numbers, prescriptions, reports, photos, or personal medical details.

## Source Restriction

The resource finder must recommend only approved portal resources.

Approved source areas:

- `data/conditions-index.json`
- Approved local portal pages and resources that are part of the reviewed public portal

Required source controls:

- Do not invent portal pages, titles, URLs, categories, or guide names.
- Do not cite, summarize, or rely on external medical guidance unless that content has been explicitly added to the portal and reviewed through the normal content process.
- Do not answer from general model memory.
- Require every recommended resource link to resolve to an existing local portal URL.
- Treat source pages as the single source of truth.
- If no approved resource matches, show a safe no-match response instead of generating medical guidance.

## Safe User Experience

The homepage header search must remain local-first.

Any future AI assistance should be optional, clearly labelled, and presented as help finding portal resources. It should not visually or behaviorally resemble a medical consultation chat.

Required user experience controls:

- Results should appear as resource cards, lists, or navigation recommendations, not chatbot-style medical answers.
- Always include wording that the portal provides general education and does not replace a doctor, emergency service, or local clinical advice.
- Keep the normal local search available if AI assistance is unavailable, disabled, or fails.
- Do not ask follow-up questions that invite patient-specific history.
- For urgent-sounding searches, show cautious urgent-care wording and link only to relevant existing red-flag or "when to seek medical care" resources if available.
- Do not independently triage symptoms or classify a user's situation as safe, mild, moderate, severe, or emergency.

Suggested urgent wording:

> This portal cannot assess emergencies. If you think a child may need urgent care, contact local emergency services or seek medical help now. The resources below are general education links from this portal.

## Future Technical Architecture

No AI implementation, API route, API key, external search, or homepage search behavior change is approved in this branch.

If live AI is explicitly approved later, the architecture should follow these constraints:

- The frontend must not contain API keys.
- The browser should call a serverless endpoint only after live AI use has been approved.
- Suggested future endpoint name: `api/search-assistant.js` or `api/search-assistant.mjs`.
- API keys must be stored only in Vercel environment variables.
- The backend should send only the minimal general query and minimal resource index context needed to match existing portal resources.
- Do not log patient-like query content.
- Consider rate limits, input length limits, and abuse controls before launch.
- Keep a local search fallback if AI fails, times out, or is disabled.
- Validate that returned URLs exist in the local resource index before displaying them.
- Do not add external web search.
- Do not modify medical content or generated indexes as part of AI request handling.

The safest initial implementation remains a non-generative local resource finder. Retrieval-augmented generation should be considered only after source restriction, privacy handling, refusal behavior, and link validation have been reviewed and tested.

## Draft Safety Prompt

The following draft system instruction is for a future implementation only. It must be reviewed before use.

```text
You are a source-restricted resource finder for a public paediatric parent education portal.

Your job is to help users find existing portal resources. You are not a medical chatbot.

Use only the provided portal resource index and provided portal snippets. Recommend only resources that exist in those sources. Do not invent pages, titles, URLs, categories, summaries, or medical guidance. Do not use external websites, general model memory, or unprovided medical knowledge.

You may accept general topic searches and return relevant existing portal resources as resource cards or short navigation suggestions.

You must not diagnose, triage symptoms, provide drug dosing, calculate doses, prescribe medicines, recommend starting or stopping treatment, create vaccine schedules, provide catch-up vaccine advice, interpret reports or images, or give individualized patient-specific advice.

Do not request patient identifiers or personal medical details. Do not ask for names, phone numbers, dates of birth, hospital numbers, photos, prescriptions, reports, or uploads.

If a user enters patient-specific details, identifiers, dosing questions, diagnosis questions, vaccine schedule requests, prescription questions, report interpretation, or urgent symptoms, do not answer the medical request. Briefly state that the portal provides general education only and cannot provide patient-specific medical advice. If relevant approved portal resources are available, show those resource links. If the query sounds urgent, include cautious wording that the user should seek urgent medical help or contact local emergency services if they are worried about an emergency.

Every output must include this meaning in plain language: this portal is for general education and does not replace advice from a doctor or emergency services.

If no matching portal resource exists in the provided sources, say that no matching portal resource was found and suggest trying a general topic search. Do not generate medical advice to fill the gap.
```

## Governance Gate Before Implementation

Before any live AI code, API route, provider integration, or AI-assisted homepage behavior is added, require all of the following:

- Clinician review of allowed behaviour, prohibited behaviour, refusal wording, urgent-care wording, and examples.
- Privacy review confirming no patient data collection, no patient-specific query storage, and acceptable provider logging settings.
- Test plan covering safety, source restriction, privacy, fallback behavior, and user experience.
- Vercel environment variable plan for any future API keys.
- Written no-patient-data confirmation for the intended user flow.
- Homepage wording review so the feature is clearly labelled as resource finding, not medical advice.
- Three-Lens audit using the portal audit protocol.
- Explicit approval branch for implementation, separate from this documentation branch.

Implementation must not begin from this planning branch.

## Future Testing Plan

If a future branch implements an AI-assisted resource finder, add tests that confirm:

- Patient-identifying text is rejected, ignored, or handled with a safe privacy response.
- Diagnosis requests do not produce a diagnosis.
- Dosing requests do not produce doses or dose calculations.
- Prescription requests do not recommend starting, stopping, or changing medicines.
- Vaccine schedule or catch-up requests do not generate schedules.
- The resource finder does not invent resources, URLs, titles, or categories.
- All displayed links resolve to existing portal URLs.
- No-match queries produce safe no-match responses.
- Urgent-sounding queries show safe escalation wording without triage.
- AI failure, timeout, or disabled configuration falls back to local search.
- The frontend does not contain API keys.
- The backend does not log patient-like query content.
- External web search is not used.

Recommended future test categories:

- Allowed general resource queries.
- Unsafe medical advice queries.
- Patient identifier and privacy queries.
- No-result queries.
- Urgent-sounding queries.
- Link validation and source-index consistency.
- Provider failure and rate-limit handling.

## Current Branch Boundary

This branch is documentation-only. It does not approve or add:

- AI functionality
- API routes
- API keys
- External search
- Homepage search behavior changes
- Medical content edits
- Changes to `data/conditions-index.json`
