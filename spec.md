# Nomold

## Current State
Landing page with signup form collecting: name, city, hasFungusIssue (bool), phoneNumber. Admin dashboard at /admin shows all submissions in a table. Backend stores data in a Motoko List.

## Requested Changes (Diff)

### Add
- Email field to the Signup type and submitSignup function
- Submission timestamp (Int - nanoseconds) stored per record
- Email input in the frontend form
- Submitted At column in the admin table
- Total count display in admin header

### Modify
- Backend: Signup type, submitSignup signature to include email and timestamp
- Frontend: FormSection to include email input
- Frontend: AdminPage table to show email and submission time
- Frontend: useQueries hook to pass email

### Remove
- Nothing removed

## Implementation Plan
1. Update main.mo: add email: Text and timestamp: Int to Signup, use Time.now() in submitSignup
2. Update frontend form to include email field
3. Update useQueries hook to pass email
4. Update admin table to show email and formatted date
