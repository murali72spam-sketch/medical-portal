# Portal Search Assistant Plan

## Purpose

This document outlines a future AI/search assistant for the Clinical Portal 2026. The assistant should help parents and caregivers find existing portal education resources more easily while preserving the portal's medical safety boundaries.

The assistant is a discovery and navigation aid only. It must not act as a diagnostic, prescribing, triage, dosing, or patient-specific medical advice tool.

## Scope

The assistant should:

- Answer only from existing portal content.
- Help users find relevant parent education pages, symptom resources, legal pages, and education materials already present in the portal.
- Display source links for every useful result or answer.
- Use cautious, plain-language summaries when content is available from approved portal sources.
- Encourage users to contact their doctor or seek urgent care when the existing portal content indicates red flags or emergency concerns.
- Make it clear that the portal is educational and not a substitute for professional medical care.

The assistant must not:

- Diagnose a child or adult.
- Prescribe medicines or treatments.
- Calculate doses.
- Generate vaccine schedules.
- Interpret lab reports, images, prescriptions, or clinical measurements.
- Collect, store, or request patient identifiers or private health information.
- Answer from general internet content, model memory, or external medical sources.
- Modify existing medical content, metadata, status fields, or generated indexes.

## Source Restrictions

The assistant must be restricted to existing portal content only.

Approved source areas may include:

- `index.html`
- `profile.html`
- `education/`
- `symptoms/`
- `html-conditions/`
- `legal/`
- Existing generated resource indexes, if used read-only

Excluded source areas:

- External websites
- General web search
- AI model training memory
- User-uploaded clinical records
- Private patient notes
- Any future content not reviewed and published in the portal

Every generated response should include one or more portal source links when it references content. If no source is found, the assistant should say it cannot find a matching portal resource and offer safe navigation suggestions.

## Safety Boundaries

### Allowed Behaviors

- Help users locate existing pages, such as "fever", "dengue", "weaning", "vaccination", or "newborn care".
- Summarize portal content at a high level using cautious educational language.
- Point users to red-flag or emergency guidance already present in portal pages.
- Suggest related portal resources based on page titles, headings, tags, or indexed text.
- Answer questions about where information is located in the portal.

### Disallowed Behaviors

- "My child has fever and cough. What is the diagnosis?"
- "How much paracetamol should I give for 14 kg?"
- "Make a vaccine schedule for my baby."
- "Can I start antibiotics?"
- "Here is my child's report. Interpret it."
- "Which medicine should I buy?"
- "Is this rash dengue?"

For disallowed requests, the assistant should:

1. Briefly state that it cannot diagnose, prescribe, calculate doses, create schedules, or assess patient-specific information.
2. Offer relevant portal education links if available.
3. Recommend contacting a doctor or emergency service when symptoms may be urgent.

### Red-Flag Handling

The assistant should not independently triage. It may surface red flags only when they are present in the source content. Responses should use conservative language such as:

- "This portal resource lists warning signs that need urgent medical attention."
- "Please review the linked page and contact your doctor promptly if these apply."
- "If this is an emergency, seek urgent care now."

## User Experience Flow

### Entry Points

Potential future entry points:

- Search box on the home page
- Floating "Find a resource" assistant button
- Dedicated search assistant page
- Resource recommendation panel on condition or symptom pages

### Suggested Flow

1. User asks a portal-search question in plain language.
2. Assistant normalizes the query into search terms.
3. Assistant searches only the local portal content index.
4. Assistant returns a ranked list of relevant resources.
5. If a concise answer is generated, it must be grounded in retrieved portal passages.
6. Assistant shows source links for each result.
7. Assistant displays a safety note for medical questions.
8. If the query is outside boundaries, assistant refuses the unsafe part and offers safe portal links.

### Example Safe Responses

User: "Do you have information about fever?"

Assistant behavior:

- Show the fever resource link.
- Include a short educational summary from the portal page.
- Include links to related resources if available.

User: "What dose should I give?"

Assistant behavior:

- Decline dose calculation.
- Link to relevant fever or medicine safety education if available.
- Advise contacting a doctor for patient-specific dosing.

User: "Make my child's vaccine schedule."

Assistant behavior:

- Decline schedule generation.
- Link to existing vaccine education resources if available.
- Advise confirming schedules with the child's doctor.

## Technical Architecture Options

### Option 1: Local Keyword Search

Build a static client-side index from existing portal pages.

Advantages:

- Simple static-site deployment.
- No AI API key required.
- Strong source restriction.
- Low privacy risk because queries can run in the browser.

Limitations:

- Less conversational.
- May struggle with synonyms and misspellings.

Potential tools:

- Existing generated indexes
- A future read-only search index generated from portal pages
- Lightweight client-side search library

### Option 2: Local Semantic Search Index

Create embeddings or semantic representations from approved portal content and query them locally or through a controlled server.

Advantages:

- Better matching for natural language questions.
- More useful for parents who do not know exact medical terms.

Limitations:

- More complexity.
- Requires careful review of embedding generation and storage.
- If external services are used for embeddings, privacy and source-control rules must be reviewed first.

Requirement:

- Retrieval must still be limited to existing portal content.

### Option 3: Retrieval-Augmented Assistant

Use retrieval from approved portal content, then generate a short answer grounded only in retrieved passages.

Advantages:

- Best conversational experience.
- Can provide helpful summaries with direct source links.

Limitations:

- Highest safety risk if generation is not strictly constrained.
- Requires refusal logic, grounding checks, and careful prompt design.
- Requires clear policy that the model cannot use outside knowledge.

Minimum controls:

- Retrieval-first design.
- No answer when no approved source is retrieved.
- Source links required in every answer.
- Medical boundary classifier before answer generation.
- Post-generation check for unsupported claims.
- No collection of patient identifiers.
- No API keys committed to the repository.

## Recommended Initial Approach

Start with a non-generative local search assistant.

Phase one should prioritize source-restricted search, topic matching, and clear result links. Conversational summaries can be considered later only after the source index, safety refusals, and privacy rules are stable.

## Privacy Rules

The assistant should:

- Avoid asking for names, phone numbers, addresses, dates of birth, medical record numbers, photos, prescriptions, lab reports, or detailed patient histories.
- Avoid storing raw user queries unless there is an explicit privacy-reviewed analytics plan.
- Avoid sending user queries to third-party services unless a future privacy review approves it.
- Avoid logging accidental patient-identifying details.
- Provide a short privacy reminder near the input: users should not enter personal medical details.

If logs are later introduced, they should:

- Be disabled by default for sensitive fields.
- Be minimized and anonymized.
- Exclude free-text patient details where possible.
- Have a documented retention period.

## Content Governance

The assistant depends on the reviewed portal content. It should not create new medical guidance.

Governance requirements:

- Source pages remain the single source of truth.
- Search index generation should be reproducible.
- The assistant should indicate when no portal source is available.
- Any new medical answer template or summary behavior should be clinically reviewed before release.
- Changes to medical content, metadata, status, or `data/conditions-index.json` should remain outside this planning task.

## Implementation Phases

### Phase 1: Planning and Safety Design

- Finalize source restrictions.
- Define allowed and disallowed query categories.
- Define refusal messages.
- Define privacy copy for the assistant input.
- Decide whether the first release is keyword search, semantic search, or retrieval-augmented generation.

### Phase 2: Read-Only Content Index

- Build or reuse a read-only index of approved portal pages.
- Include page title, URL, section headings, summary text, tags if available, and source type.
- Exclude drafts, hidden pages, private files, and non-portal sources.
- Add validation that every indexed result maps to an existing portal page.

### Phase 3: Search Experience

- Add a user interface for finding resources.
- Show ranked results with page titles, short excerpts, and source links.
- Add "no result found" handling.
- Add boundary-aware responses for diagnosis, dosing, vaccine schedule, prescription, and patient-data requests.

### Phase 4: Safety and Privacy QA

- Test allowed resource-finding queries.
- Test unsafe medical requests.
- Test queries containing personal data.
- Test misspellings and parent-friendly language.
- Confirm responses include source links.
- Confirm no external search or non-portal content is used.

### Phase 5: Optional Grounded Summaries

- Consider short generated summaries only after Phase 3 is stable.
- Require retrieval from approved portal content before any generated answer.
- Require source links for every answer.
- Add checks for unsupported medical claims.
- Keep refusal behavior for unsafe requests.

### Phase 6: Maintenance

- Rebuild the search index when reviewed portal content changes.
- Add regression tests for safety boundaries.
- Review query patterns without storing personal details.
- Periodically audit source links and no-result behavior.

## Suggested Acceptance Criteria

- The assistant searches only existing portal content.
- Every answer or result includes source links.
- The assistant refuses diagnosis, prescription, dosing, vaccine schedule generation, and patient-specific assessment.
- The assistant does not request or store patient data.
- No external AI API keys are added to the repository.
- No medical content is changed by the assistant feature.
- No metadata/status fields are changed by the assistant feature.
- `data/conditions-index.json` remains generated/read-only unless a separate approved task changes it.
- Users can find parent education resources using natural parent-friendly search terms.

## Suggested Testing Command

For future implementation work, run:

```bash
npm run validate:resources
```

If UI behavior is added later, also run the relevant Playwright tests.
