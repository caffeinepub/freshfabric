# FreshFabric - Fungus Spray Landing Page

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full landing page with 6 sections: Hero, Problem, Solution, Before/After, Early Access, Form
- Backend: store early access signups (Name, City, FungusExperience: Yes/No, Phone)
- Admin view to see signups list
- Hero section with headline, subheadline, CTA button, hero image of fungus-dotted fabric
- Problem section with 3 problem cards (icons + descriptions)
- Solution section with 3 step process (spray → wait → wash)
- Before/After split image comparison section
- Early Access section with tester count and CTA
- Form section with fields: Name, City, Fungus experience (Yes/No), Phone Number

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Generate hero image (close-up of fabric with black fungus dots)
2. Generate before/after comparison image (fungus-stained vs clean fabric)
3. Select no extra components (standard backend is sufficient)
4. Generate Motoko backend with signup submission and retrieval
5. Build React frontend:
   - Sticky nav with product name and CTA
   - Hero section
   - Problem section (3-card grid)
   - Solution section (3-step horizontal flow)
   - Before/After split comparison
   - Early Access banner with tester count
   - Signup form with validation
   - Footer
