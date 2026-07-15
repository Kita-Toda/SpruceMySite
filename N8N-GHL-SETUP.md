# n8n + GoHighLevel Integration Setup Guide

**Purpose:** Automate syncing your 90-day sales action plan (Google Sheet) → GoHighLevel CRM pipeline.

**Status:** Ready to implement (all credentials & workflow prepared)

**Date Created:** 2026-07-15

---

## Overview

This guide walks you through setting up an n8n automation workflow that:
- Reads your prospect list from Google Sheets (60+ Sydney businesses, scored 80-100)
- Creates contacts in GoHighLevel (GHL)
- Automatically assigns them to pipeline stages based on score/temperature
- Logs sync results back to your tracking sheet
- Sends you weekly summaries

**Result:** Your sales pipeline is live in GHL, automatically updated each Friday.

---

## Prerequisites

Before starting, you need:
1. ✅ **n8n instance running** (local: `http://localhost:5678`)
2. ✅ **GHL account with API access** (you have this)
3. ✅ **Google Sheet with prospect list** (you have this: 60 businesses scored)
4. ✅ **GHL Location ID** (you have: `EH8qZ5zqR9JWu63h3gCT`)
5. ✅ **New GHL API key** (you'll create this — don't reuse the old one)

---

## Step-by-Step Setup

### PHASE 1: Prepare Credentials (15 minutes)

#### Step 1.1: Create a New GHL API Key

**Why:** Your current API key was shared in messages. Create a fresh one for security.

1. Open [GoHighLevel Dashboard](https://app.gohighlevel.com)
2. Go to **Settings** → **API Keys**
3. Click **"Create New API Key"**
4. Name it: `n8n-automation`
5. **Copy the key** (you'll use this in n8n, never share it)
6. Save it in your Keychain (macOS):
   ```bash
   security add-generic-password -a "n8n-ghl" -s "ghl-api-key" -w "YOUR_NEW_KEY_HERE" -U
   ```
7. ✅ **Delete the old key** (pit-818af032-56d2-4433-92c6-d9bad5a3abd4)
   - Go back to API Keys
   - Find the old one
   - Click delete

**Verification:** You now have a fresh, secure API key.

---

#### Step 1.2: Set Up Google Sheets Credential in n8n

1. Open your n8n instance: `http://localhost:5678`
2. Click **"Credentials"** (top left sidebar)
3. Click **"+ New"** button
4. Search for and select **"Google Sheets"**
5. Click **"Connect my account"**
6. A browser window opens → **Sign in with your Google account** (sprucemysite@gmail.com)
7. Click **"Allow"** when n8n requests Sheets access
8. You'll be redirected back to n8n
9. **Name this credential:** `Google Sheets (SpruceMySite)`
10. Click **"Save"**

**Verification:** Credential shows "Connected" status in green.

---

#### Step 1.3: Set Up GHL Credential in n8n

1. In n8n Credentials page, click **"+ New"**
2. Search for **"HTTP Basic Auth"** (or just "HTTP")
3. Name it: `GHL API (n8n-automation)`
4. **Username field:** Paste your NEW GHL API key from Step 1.1
5. **Password field:** Leave blank
6. Click **"Save"**

**Verification:** Credential is saved (you won't see the key again, that's normal).

---

### PHASE 2: Import the Workflow (10 minutes)

#### Step 2.1: Get the Workflow File

The workflow JSON is ready. You can either:
- **Option A:** Copy from the file I created (listed below)
- **Option B:** I can provide the full JSON again

**Workflow location:**
```
/private/tmp/claude-501/-Users-christian/c3d04fe7-06a1-4dfd-9fce-046a4302d243/scratchpad/ghl-n8n-workflow.json
```

---

#### Step 2.2: Import into n8n

1. In n8n, go to **"Workflows"** (left sidebar)
2. Click **"+ New"** → **"+ Import from file"** (or paste JSON)
3. Choose the workflow JSON file from Step 2.1
4. Click **"Import"**
5. You'll see the workflow diagram (Google Sheets → GHL → Log Results)
6. **Name it:** `SpruceMySite Sales → GHL Sync`
7. Click **"Save"**

**Verification:** Workflow is listed in your workflows, ready to test.

---

### PHASE 3: Configure Workflow Nodes (15 minutes)

#### Step 3.1: Configure Google Sheets Read Node

1. Open the workflow from Phase 2
2. Click the **"Google Sheets - Read Data"** node (blue rectangle, left side)
3. In the right panel, configure:
   - **Spreadsheet:** Search for and select your sheet (SpruceMySite prospects)
   - **Sheet Name:** `Sheet1` (or whatever your active sheet is named)
   - **Read from:** Row 2 (skip headers)
4. Click **"Test Step"** to verify it reads your data
   - You should see: 60 rows of business data (name, location, score, etc.)
5. Click **"Save"**

**Verification:** "Test Step" shows your 60 prospects loading.

---

#### Step 3.2: Configure GHL Contact Node

1. Click the **"GHL - Create/Update Contact"** node (middle)
2. In the right panel:
   - **First Name:** Already mapped to `Business` (your prospect name) ✅
   - **Email:** Auto-generated from business name ✅
   - **Phone:** Mapped to phone column ✅
   - **Address:** Mapped to location ✅
3. Verify the **credentials dropdown** shows `GHL API (n8n-automation)` ✅
4. Click **"Test Step"**
   - First test may fail (that's OK — you're testing the structure)
   - Check the error: should say "contact created" or "contact updated"
5. Click **"Save"**

**Verification:** Node is configured and ready.

---

#### Step 3.3: Configure GHL Opportunity Node

1. Click the **"GHL - Create Opportunity"** node (right side)
2. Configure:
   - **Pipeline ID:** Change from `sprucemysite-sales-pipeline` to your actual pipeline ID
     - To find this: Go to GHL → Pipelines → click on your sales pipeline → copy ID from URL
   - **Pipeline Stage ID:** Map to temperature:
     - Hot (score 80+) → `stage_hot_lead`
     - Warm (score 70-79) → `stage_warm_lead`
     - Cold (score <70) → `stage_cold_outreach`
   - **Title:** Auto-set to `Business - Website & Booking Automation` ✅
   - **Monetary Value:** `5000` (default project value) ✅
3. Click **"Test Step"**
4. Click **"Save"**

**Verification:** Node is configured.

---

#### Step 3.4: Configure Google Sheets Log Node

1. Click **"Google Sheets - Log Sync Results"** node (right side)
2. Configure:
   - **Spreadsheet:** Same sheet as Step 3.1 ✅
   - **Sheet Name:** Create a new sheet called `Sync Log`
     - (Or use existing one if you have it)
   - **Columns to write:**
     - `Business` → Business name
     - `Timestamp` → Today's date
     - `GHL Contact ID` → Contact ID from GHL
     - `Sync Status` → "Success" or "Failed"
     - `Notes` → Any error message
3. Click **"Test Step"**
4. Click **"Save"**

**Verification:** Sync log sheet is created in your Google Sheet.

---

### PHASE 4: Test the Full Workflow (10 minutes)

#### Step 4.1: Execute the Workflow

1. In the workflow editor, click **"Execute Workflow"** (top right button)
2. Watch the **Execution History** panel (bottom)
   - Node 1 (Read Sheet): Should show ✅ 60 rows loaded
   - Node 2 (Classify): Should show ✅ Temps assigned (Hot/Warm/Cold)
   - Node 3 (Create Contact): Should show ✅ Contacts created in GHL
   - Node 4 (Create Opportunity): Should show ✅ Opps created, assigned to stages
   - Node 5 (Log Results): Should show ✅ Results logged to sheet
3. If any step fails, click the failed node to see the error message

**Verification:** All nodes show green checkmarks (✅).

---

#### Step 4.2: Verify in GHL

1. Open GoHighLevel dashboard
2. Go to **Contacts** → Search for one of your prospect businesses (e.g., "Hustlers.Syd")
3. Confirm:
   - Contact exists ✅
   - Name, phone, address filled ✅
   - Custom fields show (Score, Business Type, etc.) ✅
4. Go to **Opportunities/Pipeline**
5. Confirm:
   - Opportunity created ✅
   - Assigned to correct stage (Hot/Warm/Cold) ✅
   - Title shows business name + project ✅

**Verification:** Data is live in GHL.

---

#### Step 4.3: Verify in Google Sheets

1. Open your Google Sheet
2. Check the **"Sync Log"** tab
3. Verify:
   - All 60 businesses listed ✅
   - GHL Contact IDs populated ✅
   - Status = "Success" ✅

**Verification:** Sync log is complete.

---

### PHASE 5: Schedule Weekly Automation (5 minutes)

#### Step 5.1: Set Up Schedule Trigger

1. In the workflow, click the **"When clicking 'Test workflow'"** trigger node (left, blue)
2. In the right panel, change the trigger type:
   - From: **"Manual"**
   - To: **"Schedule"**
3. Configure schedule:
   - **Frequency:** Weekly
   - **Day:** Friday
   - **Time:** 5:00 PM
4. Click **"Save"**

**Verification:** Workflow now auto-runs every Friday at 5pm.

---

#### Step 5.2: Add Slack Notification (Optional)

If you want a summary notification each Friday:

1. In the workflow, connect the last node to a **Slack** node
2. (Or skip this for now — you can add it later)

---

## Workflow Diagram

```
WEEKLY TRIGGER (Every Friday 5pm)
    ↓
[Google Sheets]
  ↓ Read 60 prospects
[Classify by Score]
  ↓ Hot (80+) / Warm (70-79) / Cold (<70)
[GHL Create Contacts]
  ↓ Name, email, phone, custom fields
[GHL Create Opportunities]
  ↓ Assign to pipeline stages
[Log Results]
  ↓ Write sync status to sheet
[Send Summary] (optional)
  ↓ Slack notification
✅ DONE
```

---

## Your 90-Day Integration Timeline

| Week | Action | Who | Where |
|------|--------|-----|-------|
| Week 1 (Jul 15-21) | Import workflow, test | You | n8n |
| Week 2+ | Auto-sync runs Friday 5pm | n8n | GHL |
| Day 14 | Customer #1 signs | You | GHL Opps |
| Day 30 | Review: 2-3 prospects in pipeline | You | GHL Dashboard |
| Day 60 | Case study + testimonials live | You | GHL + Web |
| Day 90 | 3-5 customers on retainer | You | GHL Pipeline |

---

## Troubleshooting

### **Workflow fails at "Google Sheets" node**
- **Solution:** Check the sheet name is exactly right (case-sensitive)
- Check the spreadsheet ID matches your actual sheet

### **Workflow fails at "GHL Create Contact"**
- **Solution:** Verify your GHL API key is correct and new
- Check your Location ID: `EH8qZ5zqR9JWu63h3gCT`

### **Workflow runs but contacts don't appear in GHL**
- **Solution:** Check GHL → Settings → API Activity (any errors?)
- Try running workflow again manually
- Check the execution history for the exact error

### **Google Sheets log is empty**
- **Solution:** Verify "Sync Log" sheet exists in your workbook
- Check credentials have write permission to the sheet

---

## Security Checklist

- ✅ Old GHL API key deleted (pit-818af032-56d2-4433-92c6-d9bad5a3abd4)
- ✅ New GHL API key created and stored in n8n Credentials (encrypted)
- ✅ Backup of new key stored in Keychain (macOS)
- ✅ Google Sheets credential uses OAuth (no passwords)
- ✅ Workflow logs are private (only you see them)
- ✅ Never share n8n URL or credentials

---

## Weekly Maintenance

Every Friday after the workflow runs:

1. **Check n8n logs** (Execution History)
   - All nodes green? ✅ → No action needed
   - Any red nodes? → Investigate and re-run

2. **Spot-check GHL**
   - Random prospect: Verify contact + opp created correctly
   - Pipeline view: Are Hot/Warm/Cold stages populated?

3. **Update your ACTION-PLAN**
   - Any new leads from cold outreach? Add to sheet
   - Any responses? Move to "Discovery Scheduled" stage in GHL

4. **Monthly:** Archive old sync logs to keep sheet clean

---

## Next Steps

1. ✅ **Today:** Follow Phase 1-5 above (setup takes 45 min)
2. ✅ **Friday:** First auto-run executes (watch logs)
3. ✅ **Week 2:** Start outreach (use GHL pipeline as your compass)
4. ✅ **Day 14:** Customer #1 appears in "Closed Won" stage
5. ✅ **Day 30:** Celebrate! 1 delivered customer + 2-3 in pipeline

---

## Questions or Issues?

If anything fails:
1. Check Troubleshooting section above
2. Share the error message from n8n Execution History
3. Verify all credentials are saved correctly

---

**Setup Date:** 2026-07-15  
**Workflow Status:** Ready to import  
**Last Updated:** 2026-07-15
