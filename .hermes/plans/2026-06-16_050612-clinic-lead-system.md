# Clinic Lead System Implementation Plan

> **For Hermes:** User asked for plan + execution. Implement locally first, verify with tests, then request approval before pushing/deploying or sending outreach.

**Goal:** Turn the proposed clinic lead-capture idea into a reusable productized service on jbxxnn.com with a dental/clinic demo page, CRM/follow-up assets, and Fiverr/outreach copy.

**Architecture:** This repository is a static Vercel site with one existing serverless API route: `api/audit-submit.js`, which appends lead submissions to Google Sheets. The first execution should reuse the existing endpoint, add static service pages, add copy/assets for CRM and outreach, and update smoke tests. Deployment and real outreach are separate approval steps.

**Tech Stack:** Static HTML/CSS/JS, Vercel serverless function, Google Sheets API, Python unittest smoke tests.

---

## Current context / assumptions

- Repo: `/root/jbxxnn-journal`, remote `https://github.com/jbxxnn/jbxxnn-journal.git`, branch `main`.
- Live domain memory: `jbxxnn.com` is attached to this repo/project.
- Existing lead form endpoint: `/api/audit-submit`.
- Existing production env vars should stay secret: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_SHEET_ID`.
- No outreach should be sent until user approval.
- No push/deploy should happen until user approval.

## Proposed approach

1. Add a focused route at `/clinic-lead-system/` as the public service/demo page.
2. Add a short alias route at `/lead-capture-system/` so outreach/gig links can use a broader name.
3. Reuse the existing Google Sheet form endpoint, but submit a specific goal/source from the new page.
4. Add a thank-you page for manual redirection/shareable confirmation.
5. Add business assets in `business-assets/`: CRM headers, follow-up templates, Fiverr gig draft, outreach script.
6. Update tests so they verify the static site plus the new service route and assets.
7. Run local tests and a local HTTP preview smoke check.

---

## Step-by-step execution plan

### Task 1: Add the clinic lead system page

**Objective:** Create a focused service page that sells the productized clinic lead capture + follow-up system.

**Files:**
- Create: `clinic-lead-system/index.html`
- Modify: `styles.css`

**Page sections:**
- Hero: “Stop losing patient enquiries from your clinic website.”
- Pain/problem: weak forms, missed enquiries, poor follow-up.
- System modules: landing page, lead form, Google Sheet CRM, instant notification, follow-up templates, thank-you page.
- Dental demo flow: visitor submits enquiry → clinic receives notification → lead appears in tracker → receptionist follows up → booking status is updated.
- Packages: Starter, Standard, Premium with sensible ranges.
- CTA form using `/api/audit-submit`.

**Verification:**
- `clinic-lead-system/index.html` contains `data-audit-form` and `/api/audit-submit`.
- Browser/static preview returns the page at `/clinic-lead-system/`.

### Task 2: Add broader alias page

**Objective:** Make `/lead-capture-system/` available for non-clinic outreach and Fiverr traffic.

**Files:**
- Create: `lead-capture-system/index.html`

**Implementation:**
- Use a lightweight HTML redirect/canonical page to `/clinic-lead-system/`, or a short broader landing page if time allows.

**Verification:**
- Static route exists and links to `/clinic-lead-system/`.

### Task 3: Add thank-you page

**Objective:** Provide a dedicated confirmation page for form-success routing or manual links.

**Files:**
- Create: `thank-you/index.html`

**Content:**
- Confirm request received.
- Explain next step: website review + practical recommendations by email.
- Link back to `/clinic-lead-system/` and `/journal/`.

**Verification:**
- Static route exists and contains no broken local links.

### Task 4: Add reusable business assets

**Objective:** Store the reusable CRM/follow-up/outreach/Fiverr assets in the repo for reuse.

**Files:**
- Create: `business-assets/clinic-lead-system-crm-template.md`
- Create: `business-assets/follow-up-templates.md`
- Create: `business-assets/fiverr-gig-clinic-lead-system.md`
- Create: `business-assets/manual-outreach-script.md`

**Content:**
- CRM columns for inbound leads and researched prospects.
- Follow-up statuses and message templates.
- Fiverr title, packages, FAQ, buyer requirements.
- Manual outreach and follow-up cadence.

**Verification:**
- Assets mention approval required before sending outreach.
- Assets do not contain fake case studies or fabricated results.

### Task 5: Improve form behavior for new route

**Objective:** Ensure the new service page can submit to the existing endpoint with useful source context.

**Files:**
- Modify: `clinic-lead-system/index.html`
- Optional modify: `api/audit-submit.js` only if a new `source` field is needed.

**Implementation:**
- Include hidden/controlled form fields or `pageUrl` so the Sheet row shows source.
- Reuse current required fields: name, email, business, website, goal.

**Verification:**
- API validation still accepts required fields.
- No environment variable values are printed or committed.

### Task 6: Update tests

**Objective:** Keep smoke tests aligned with the site’s new landing-page direction.

**Files:**
- Modify: `tests/test_site.py`

**Tests:**
- Required files exist.
- Homepage contains WordPress lead generation positioning and audit form.
- `/clinic-lead-system/index.html` contains the lead system core offer.
- Business assets exist and include Fiverr/outreach/CRM copy.
- API route validates required fields and Google env references exist.

**Run:**
```bash
python3 -m unittest discover -s tests -p 'test_*.py'
```

### Task 7: Local HTTP smoke test

**Objective:** Prove static routes serve locally.

**Run:**
```bash
python3 -m http.server 3000
curl -I http://127.0.0.1:3000/clinic-lead-system/
curl -I http://127.0.0.1:3000/lead-capture-system/
curl -I http://127.0.0.1:3000/thank-you/
```

**Expected:** `HTTP/1.0 200 OK` for all three routes.

### Task 8: Review diff and stop before deployment

**Objective:** Give user a verified local result and request approval for remote side effects.

**Run:**
```bash
git status --short
git diff --stat
git diff -- clinic-lead-system/index.html lead-capture-system/index.html thank-you/index.html tests/test_site.py
```

**Stop before:**
- `git push`
- Vercel deployment
- Creating/modifying live Google Sheets
- Sending outreach

---

## Risks / tradeoffs

- The current repo is static and simple; this is fast to ship but less reusable than a componentized Next.js app.
- The existing API route appends to one Sheet range, so outbound researched leads should remain separate from inbound submissions.
- Email notification is not yet implemented in the codebase; first version can rely on Google Sheet capture unless user approves adding Gmail/SMTP/provider integration.
- Actual clinic outreach should start only after the page is live and email/DNS readiness is checked.

## Success criteria

- Local files created for `/clinic-lead-system/`, `/lead-capture-system/`, and `/thank-you/`.
- Reusable CRM/Fiverr/outreach assets exist.
- Tests pass locally.
- HTTP preview serves the new routes locally.
- User receives a concise summary and approval request for push/deploy/outreach next steps.
