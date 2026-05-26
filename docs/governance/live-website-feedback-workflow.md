# Live Website Feedback Workflow

## 1. Purpose

The live homepage feedback button links to an external Google Form for anonymous website-improvement feedback. The workflow is intended to help improve the website experience without turning the portal into a consultation, appointment, analytics, tracking, or patient-data collection system.

This note is documentation-only. It does not add a backend, database, analytics, cookies, localStorage, tracking, API, visitor counter, patient messaging, clinical consultation, or portal-side feedback storage.

## 2. Current live setup

Current live homepage setup:

- Homepage button text: `Share anonymous website feedback`
- The button opens an external Google Form in a new browser tab.
- Form responses are stored in a Google Sheet in Dr. Murali's Google Drive.
- The portal itself does not store feedback.
- The portal has no backend, database, cookies, localStorage, analytics, tracking, or visitor counter.

The Google Form and Google Sheet are external to the static portal. Any review, deletion, moderation, or use of submitted feedback happens in Google Drive/Google Sheets, not inside the portal.

## 3. Feedback form purpose

The feedback form is only for general website-improvement feedback, including:

- Website usability feedback.
- Clarity of information.
- Topics parents, caregivers, doctors, or healthcare professionals would like added.
- General suggestions to improve the website.

The form should not be treated as a medical consultation, appointment channel, emergency contact route, prescription request channel, or patient communication system.

## 4. What must not be submitted

Users should be clearly instructed not to submit:

- Names.
- Phone numbers.
- Child or patient details.
- Symptoms.
- Reports.
- Appointment requests.
- Prescriptions.
- Medical questions.
- Emergencies.

If a submission includes personal, patient-specific, clinical, appointment-related, prescription-related, or emergency information, it should not be handled through the portal workflow.

## 5. Form fields

Current intended form fields:

- Who is giving this feedback? `Parent/Caregiver`, `Doctor/Healthcare professional`, `Other`.
- Was the website easy to use?
- What were you looking for?
- Was the information easy to understand?
- What can we improve?
- Safety confirmation.

The safety confirmation should reinforce that the form is for website feedback only and should not include personally identifiable information, medical details, appointment requests, prescriptions, medical questions, or emergencies.

## 6. Review workflow

Recommended review workflow:

- Check the linked Google Sheet periodically.
- Ignore abusive, irrelevant, spam-like, or patient-specific submissions.
- Do not reply through the portal.
- Do not use form responses as medical consultation.
- Use only general website-improvement suggestions for future content planning.

Feedback may help identify unclear wording, missing parent-education topics, navigation problems, or usability issues. It should not be used to provide individualized advice or clinical action.

## 7. Abuse and moderation policy

Abusive-language blocking cannot be guaranteed. Submissions should be manually reviewed before being used for planning or governance decisions.

Abusive, irrelevant, spam-like, or patient-specific entries may be ignored or deleted from the Google Sheet. No clinical action should be taken from form submissions, including cases where the submission appears to describe symptoms, reports, prescriptions, appointment needs, or urgent medical concerns.

## 8. Privacy note

The portal itself does not collect or store feedback data. However, feedback submitted through the external Google Form is stored in Dr. Murali's Google Drive/Google Sheet.

The form should not request personally identifiable information or medical information. It should not ask for names, phone numbers, patient identifiers, symptoms, reports, prescriptions, appointment requests, medical questions, or emergency details.

If the feedback process changes later, including any change to storage location, form ownership, fields collected, response handling, or portal integration, the privacy policy should be reviewed and updated as needed.

## 9. Future improvements

Possible later improvements:

- Add a feedback workflow note to the privacy policy if desired.
- Create a periodic review schedule.
- Add a separate doctors-only feedback form if needed.
- Consider a website-feedback dashboard later without adding patient-data collection.

Any future improvement should preserve the portal's static, privacy-light design and avoid adding backend services, analytics, cookies, localStorage, tracking, databases, APIs, visitor counters, or patient-data collection unless a separate governance decision explicitly changes that architecture.
