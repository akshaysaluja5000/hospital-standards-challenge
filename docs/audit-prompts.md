# AccreditationReady — Content Audit Prompt Library

Use these prompts with Claude or any capable AI to validate, audit, and expand training content.

---

## PROMPT 1 — Full Module Audit
**WHEN TO USE:** Bulk verification of an entire chapter before publishing.

```
You are a healthcare accreditation compliance expert with deep knowledge of Joint Commission (JCAHO) standards.

I need you to audit the following questions from our [MODULE NAME] training module in AccreditationReady.ai.

For EACH question:
1. Confirm whether the correct answer is accurate based on current Joint Commission standards
2. Identify the specific standard ID or chapter (e.g., EC.02.03.01) that supports the answer
3. Flag any answer that is outdated, ambiguous, or potentially incorrect
4. Note if the wrong answer options could cause confusion

Here are the questions:
[PASTE YOUR QUESTIONS AND ANSWER OPTIONS HERE]

Format your response as:
Q1: ✅ VERIFIED / 🚩 FLAGGED
```

---

## PROMPT 2 — Single Question Deep Check
**WHEN TO USE:** A specific question has been flagged or you want a deep check on one item.

```
You are a Joint Commission accreditation expert.

Please verify this specific question from our accreditation training platform:

Question: [PASTE QUESTION]
Correct Answer (as currently written): [PASTE ANSWER]
Wrong Options: [PASTE OTHER OPTIONS]
Module: [MODULE NAME]
Role targeted: [STAFF ROLE]

Please:
1. Confirm if the answer is accurate per current JC standards
2. Cite the exact standard (chapter and element of performance)
3. Note if this has changed in recent JC updates (2023-2026)
```

---

## PROMPT 3 — Survey Risk Points Validation
**WHEN TO USE:** Validate the "Common Survey Risk Points" callouts in each chapter.

```
You are a former JCAHO surveyor with 10+ years of experience conducting hospital surveys.

I am building an accreditation training platform and have listed the following as "Common Survey Risk Points" for the [MODULE NAME] module:

[PASTE YOUR CURRENT RISK POINTS LIST]

Please:
1. Confirm which of these are genuinely high-risk citation areas in actual surveys
2. Identify any important risk points we have MISSED
3. Rank them by frequency of citation in surveys
4. Note any that are specific to hospitals vs ASCs vs both
```

---

## PROMPT 4 — AAAHC vs JCAHO Comparison Check
**WHEN TO USE:** Converting JCAHO content to AAAHC for the ASC module.

```
You are an accreditation compliance expert familiar with both AAAHC and Joint Commission standards.

I have the following training content currently written for JCAHO compliance. I need to adapt it for AAAHC (ambulatory surgery centers).

Original JCAHO content: [PASTE JCAHO QUESTION AND ANSWER]
Standard cited: [JCAHO STANDARD ID]

Please:
1. Confirm if AAAHC has an equivalent standard
2. Note any differences between JCAHO and AAAHC requirements on this topic
3. Provide the equivalent AAAHC standard reference
4. Suggest how the question should be reworded for an ASC audience
5. Note if the correct answer changes for AAAHC
```

---

## PROMPT 5 — Role Appropriateness Check
**WHEN TO USE:** Confirm questions are assigned to the right staff roles.

```
You are a healthcare compliance trainer familiar with Joint Commission survey methodology.

I need to verify that the following questions are appropriate for the indicated staff roles. JCAHO surveyors ask role-specific questions, and staff should only be tested on standards relevant to their actual job duties.

[PASTE 5-10 QUESTIONS WITH THEIR ASSIGNED ROLES]

For each question, please:
1. Confirm if this is something a surveyor would ask this specific role
2. Flag if the question is too advanced or too basic for the role
3. Note if the question belongs in a different role's module
4. Suggest if any critical role-specific standards are missing
```

---

## PROMPT 6 — Full Module Gap Analysis
**WHEN TO USE:** Identify standards not yet covered in a module. Run this BEFORE writing a new chapter.

```
You are a Joint Commission accreditation expert.

I am building a training module for [MODULE NAME] targeting [ROLE(S)].

Here are all the topics my module currently covers:
[PASTE YOUR CURRENT TOPIC LIST OR QUESTION TITLES]

Please:
1. Identify any significant JCAHO standards for this topic area that I have NOT covered
2. Flag any topics that are commonly cited deficiencies that I should prioritize
3. Confirm if my coverage is appropriate for the [ROLE] role specifically
4. Note any recent (2024-2026) changes to these standards I should be aware of
5. Suggest 3-5 additional questions I should add
```

---

## PROMPT 7 — Deep Dive Tracer Validation
**WHEN TO USE:** Validate the Deep Dive Tracer feature scenarios.

```
You are a Joint Commission accreditation surveyor trainer familiar with tracer methodology.

Our platform has a "Deep Dive Tracer" feature that simulates how a JCAHO surveyor would trace through a facility. I need to validate that our tracer scenarios are realistic and comprehensive.

Here is our current tracer scenario for [MODULE NAME]:
[PASTE YOUR TRACER SCENARIO OR QUESTIONS]

Please:
1. Confirm if this reflects actual JCAHO tracer methodology
2. Identify steps or checkpoints that are missing from a real tracer
3. Note if the sequence is realistic (surveyors follow a specific logical flow)
4. Suggest how to make this more representative of what staff will actually experience
5. Flag any tracer steps that could give staff a false sense of security
```

---

## PROMPT 8 — Batch Fact-Check Against Current Standards
**WHEN TO USE:** Rapid fact-checking of 10+ statements at once. Good for triage before deeper review.

```
You are a healthcare compliance expert. I need you to fact-check a batch of training content against current standards.

For each item below, simply respond:
✅ ACCURATE — if the statement is correct per current standards
🚩 INCORRECT — [brief explanation] — if the statement contains errors
⚠ OUTDATED — [brief explanation] — if this was true but standards have changed
❓ VERIFY — if you are not certain and I should check a primary source

Statements to check:
1. [PASTE STATEMENT OR QUESTION/ANSWER PAIR]
2. [PASTE STATEMENT OR QUESTION/ANSWER PAIR]
3. [PASTE STATEMENT OR QUESTION/ANSWER PAIR]
[Continue for as many as needed — batches of 10 work well]

Context: These are for [JCAHO / AAAHC / CMS] compliance training targeting [ROLE] staff at [HOSPITAL / ASC]
```

---

## Suggested Workflow — New Chapter Build

1. **Prompt 6** — gap analysis before writing (know what to cover)
2. **Prompt 1** — bulk audit after first draft
3. **Prompt 3** — validate the risk points callout
4. **Prompt 5** — confirm role targeting is right
5. **Prompt 2** — spot-check anything flagged in steps 2–4
6. **Prompt 8** — rapid triage of final statements before publishing

## Suggested Workflow — ASC Conversion

1. **Prompt 4** — AAAHC comparison for each converted question
2. **Prompt 6** — gap analysis for AAAHC-specific topics
3. **Prompt 5** — confirm ASC role targeting

## Suggested Workflow — Reactive (Post-Publish)

1. **Prompt 2** — deep check the challenged question
2. **Prompt 8** — batch-check related questions in the same chapter
3. **Prompt 7** — if a tracer scenario is questioned
