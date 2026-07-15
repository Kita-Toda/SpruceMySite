# Code Verification Methodology

**Purpose:** Establish a systematic process for verifying code/config before committing to the repo.

**Owner:** Claude Code Agent + User Review

**Last Updated:** 2026-07-15

---

## Three-Tier Verification Process

### Tier 1: Syntax & Structure Audit (Automated)

**Goal:** Catch syntax errors, malformed JSON, missing quotes, bracket mismatches.

**Checklist:**

- [ ] **JSON/YAML:** Valid JSON/YAML syntax (proper braces, brackets, quotes)
- [ ] **Brackets:** All opening brackets have matching closing brackets
- [ ] **Quotes:** All quotes are paired and consistent (no orphaned quotes)
- [ ] **Commas:** No trailing commas before closing brackets
- [ ] **Escaping:** Special characters are properly escaped (e.g., `\/`, `\"`)
- [ ] **Line breaks:** No syntax breaks across lines without proper continuation
- [ ] **File format:** Valid file type for the content (e.g., `.json` contains valid JSON)

**Tools:**
```bash
# Validate JSON
jq empty < file.json  # Returns error if invalid

# Validate YAML  
yamllint file.yaml

# Validate n8n workflows
# (no built-in validator, but JSON validation covers most cases)
```

---

### Tier 2: Semantic Audit (Manual Review)

**Goal:** Catch logic errors, field mismatches, configuration ambiguities, API spec violations.

**Checklist:**

- [ ] **Field Names:** All referenced fields exist and match source data
  - For Google Sheets: Column names in code match actual sheet columns
  - For APIs: Field names match API response structure
  - Example: `$json.Score_100` → verify this field exists in input data

- [ ] **Field Types:** Data types are used correctly
  - String vs Number (e.g., score as number, not string)
  - Boolean vs String ("true" vs true)
  - Date formats are consistent

- [ ] **API Configuration:** All required API fields are populated
  - No placeholder values remaining (e.g., `YOUR_API_KEY_HERE`)
  - All IDs are real, not example/placeholder IDs
  - Endpoints match API version/documentation

- [ ] **Logic Correctness:** Conditional expressions work as intended
  - Temperature logic: `Score >= 80 → Hot` (verify ranges don't overlap)
  - Data transformations: Input → Processing → Output flow is clear
  - No dead code paths

- [ ] **Error Handling:** What happens if a field is missing/null?
  - Does the code gracefully degrade?
  - Or will it crash at runtime?

- [ ] **Dependencies:** All required external resources exist
  - Google Sheets referenced actually exist
  - GHL location ID is correct and current
  - Credentials are set up in n8n

---

### Tier 3: Runtime Simulation (Walkthrough)

**Goal:** Trace execution path with real/sample data to spot runtime issues.

**Checklist:**

- [ ] **Happy Path:** Trace through with sample good data
  - Does each step produce expected output?
  - Example: Business name → Email generation → Contact creation

- [ ] **Edge Cases:** Test with unusual/boundary data
  - Business name with special characters (& , . / ?)
  - Score exactly at boundary (80, 70)
  - Missing optional fields

- [ ] **Failure Path:** What if a step fails?
  - Does the workflow handle errors gracefully?
  - Are error messages clear?
  - Can the user retry or recover?

- [ ] **Data Consistency:** Is data transformed consistently?
  - No field loss between steps
  - No duplicate processing
  - Timestamps and IDs are unique and traceable

---

## Application: Verification Report Template

When verifying code, document findings in this format:

```markdown
## Code Verification Report

**File:** [filename]
**Date:** [YYYY-MM-DD]
**Tier 1 (Syntax):** [✅ PASS / 🔴 ISSUES FOUND]
**Tier 2 (Semantic):** [✅ PASS / 🔴 ISSUES FOUND]
**Tier 3 (Runtime):** [✅ PASS / 🔴 ISSUES FOUND]

### Issues Found

| Tier | Issue | Severity | Fix |
|------|-------|----------|-----|
| 1 | Double closing braces on line 69 | 🔴 Critical | Remove one `}` |
| 2 | Field `Score_100` doesn't exist | 🔴 Critical | Change to `'Score /100'` |
| 3 | GHL Pipeline ID is placeholder | 🟡 High | User must provide actual ID |

### Verification Status

- [ ] All Tier 1 issues resolved
- [ ] All Tier 2 issues resolved  
- [ ] All Tier 3 issues documented (with workarounds if needed)
- [ ] User notified of configuration requirements

### Ready to Commit?
- ✅ YES — All critical/high issues resolved
- ⚠️ CONDITIONAL — Issues documented, workarounds provided
- ❌ NO — Critical issues remain
```

---

## Process: Before Committing Any Code

1. **Run Tier 1 Audit** (5 min)
   - Check syntax validity
   - Fix any structural errors

2. **Run Tier 2 Audit** (10-15 min)
   - Map fields to source data
   - Verify API configuration
   - Check logic correctness

3. **Run Tier 3 Audit** (10 min)
   - Walk through happy path with sample data
   - Test edge cases
   - Verify error handling

4. **Generate Verification Report**
   - Document all findings
   - Categorize by severity
   - Provide fix for each issue

5. **Fix Issues**
   - Resolve Tier 1 (syntax) - BLOCKING
   - Resolve Tier 2 (semantic) - BLOCKING
   - Document Tier 3 (runtime) - may be user-config

6. **Commit**
   - Include verification summary in commit message
   - Reference issues fixed

7. **Notify User**
   - Share verification report
   - List any configuration requirements
   - Provide usage instructions

---

## Example: n8n Workflow Verification (What We Just Did)

**File:** `n8n-ghl-workflow.json`

**Tier 1 Findings:**
```
Line 69: Syntax Error — Double closing braces "}}" 
→ Fixed: Changed to single "}" with comma
```

**Tier 2 Findings:**
```
Line 25: Field "Score_100" doesn't exist in Google Sheet
→ Fixed: Changed to 'Score /100' (actual column name)

Line 67: Pipeline ID is placeholder "sprucemysite-sales-pipeline"
→ Marked: Requires user configuration (cannot auto-fix)
```

**Tier 3 Findings:**
```
Happy path: Business "Hustlers.Syd" → Email generation → Contact creation ✅
Edge case: Business with & symbol → Email sanitization works ✅
Error path: Missing phone number → Workflow continues (OK) ✅
```

**Result:** ✅ PASS with configuration requirements documented

---

## When to Apply This Process

**Apply before EVERY commit of:**
- n8n workflows
- API configuration files
- SQL migrations
- Code with business logic
- Integration configurations

**Light verification OK for:**
- Documentation updates
- Comment-only changes
- Non-functional refactors

---

## Questions?

If during verification you find:
- **Unclear semantics** → Flag for user clarification
- **API spec gaps** → Research official docs before fixing
- **Conflicting requirements** → Ask user which takes priority
- **No obvious fix** → Document as "requires investigation" + recommend approach

**Never commit code you can't verify.**

