# Token Audit Report

## 1. Pre-Fix Audit

**Application:** Code Buddy – AI Code Review Assistant  
**Original Prompt:** `prompts/system-prompt.txt`  
**Tokenizer:** OpenAI Tokenizer (GPT-4 & GPT-3.5 legacy)

### Token Comparison

| Metric | Result |
|---|---:|
| Original system prompt tokens | 392 |
| Previous rewritten prompt tokens | 148 |
| Previous tokens saved | 244 |
| Previous reduction | 62.24% |
| Final corrected prompt tokens | 186 |
| Final tokens saved | 206 |
| Final reduction | **52.55%** |

The original system prompt contained 392 tokens. The final corrected prompt contains 186 tokens, resulting in a reduction of 206 tokens or **52.55%**.

The final prompt exceeds the required 40% reduction target while preserving the essential instructions and functionality of the original prompt.

### Sample API Usage

**Sample user message:**

`Analyze the following code for bugs and improvements:` followed by the submitted source code.

The sample user message is separate from the system prompt. Its token count has not been independently measured and is not included in the system-prompt reduction calculation.

### Actual API Test Results

Three successful API requests were performed using the updated system prompt.

| Test | Prompt Tokens | Completion Tokens | Total Tokens | Estimated Cost |
|---|---:|---:|---:|---:|
| Test 1 | 186 | 966 | 1,152 | $0.0101 |
| Test 2 | 186 | 985 | 1,171 | $0.0103 |
| Test 3 | 186 | 1,020 | 1,206 | $0.0107 |
| **Average** | **186** | **990.33** | **1,176.33** | **$0.010368** |

All three requests successfully generated AI code reviews and printed token usage information in the application terminal.

**Measurement clarification:** The isolated system-prompt count is 186 tokens, as measured using the OpenAI Tokenizer. The API usage figures are reported separately as request-level usage.

### Monthly Usage Assumption

200 users × 15 calls/day × 30 days

= **90,000 API calls/month**

---

## 2. Waste Sources

### Source 1: Over-Verbose Role Introduction

**Location:** Opening paragraph.

**Original quotation:**

"Greetings! I am your helpful and dedicated AI assistant, specifically designed to assist developers and engineers with their programming tasks. My general purpose is to be an asset to your development workflow..."

**Explanation:**

The introduction repeatedly describes the assistant as helpful and dedicated and explains its purpose using overlapping phrases. These descriptions can be consolidated into a concise role definition while preserving the assistant's purpose and responsibilities.

### Source 2: Repeated Scope Restrictions

**Locations:** Paragraphs 2, 4 and 6.

**Original quotations:**

"You must only respond to code review requests..."

"Please refrain from answering any user questions that do not directly involve the review or analysis of code."

"Stay on the topic of code review only..."

**Explanation:**

The restriction against answering unrelated questions appears multiple times. A single explicit instruction can preserve the same restriction and reduce repeated tokens on every API call.

### Source 3: Overly Detailed Formatting Instructions

**Location:** Paragraph 5.

**Original quotation:**

"Each of these areas should be written in clear, complete sentences that provide enough context for the student to understand the underlying logic of your suggestions and recommendations."

**Explanation:**

The formatting requirements contain lengthy explanations of clarity, context and readability. These can be consolidated while preserving the mandatory headings, complete sentences, appropriate context, consistent formatting and 300-word limit.

---

## 3. Rewritten Prompt

### Final Corrected System Prompt

```text
You are a helpful, informative AI assistant supporting developers and engineers with guidance that makes their development workflow seamless and productive. Respond ONLY to code review requests; do not answer unrelated questions.

Act as a senior professional code reviewer. Audit submitted code snippets for critical bugs, security vulnerabilities, and meaningful improvements. Provide constructive, professional feedback that helps students understand and learn from their mistakes.

Structure every review using exactly these three sections, in this order:

1. Issues Found
2. Suggested Improvements
3. Overall Assessment

Use appropriate headings, clear and complete sentences, and consistent, readable formatting. Explain the reasoning behind findings and recommendations with enough context for students to understand them. Limit the entire response to 300 words.

Stay strictly focused on code review and do not answer unrelated queries.
```

### Final Token Reduction Calculation

| Metric | Result |
|---|---:|
| Original prompt | 392 tokens |
| Final corrected prompt | 186 tokens |
| Tokens saved | 206 |
| Percentage reduction | **52.55%** |
| Required reduction | 40% |
| Target achieved | Yes |

**Calculation:**

((392 − 186) / 392) × 100

= (206 / 392) × 100

= **52.55% reduction**

The final corrected prompt achieves a reduction of 52.55%, exceeding the required 40% target.

### Instruction Preservation Mapping

| Original Instruction | Location in Corrected Rewrite |
|---|---|
| Helpful assistant for developers | Paragraph 1 |
| Informative responses | Paragraph 1 |
| Seamless and productive workflow | Paragraph 1 |
| Only respond to code reviews | Paragraph 1 |
| Senior professional reviewer | Paragraph 2 |
| Identify critical bugs | Paragraph 2 |
| Identify security vulnerabilities | Paragraph 2 |
| Suggest meaningful improvements | Paragraph 2 |
| Constructive and professional tone | Paragraph 2 |
| Help students learn | Paragraph 2 |
| Three mandatory sections | Paragraph 3 |
| Clear and complete sentences | Paragraph 4 |
| Explain reasoning and recommendations | Paragraph 4 |
| Maximum 300 words | Paragraph 4 |
| Appropriate headings and readability | Paragraph 4 |
| Consistent formatting | Paragraph 4 |
| No unrelated queries | Final paragraph |

---

## 4. Cost Comparison

### Pricing Assumptions

- Prompt token rate: $0.0000025 per token.
- Completion token rate: $0.00001 per token.
- Monthly API calls: 90,000.
- Average completion usage: 990.33 tokens.

These are the assignment's assumed pricing rates, not verified live provider pricing.

### Actual API Cost Calculations

**Test 1**

(186 × 0.0000025) + (966 × 0.00001)

= 0.000465 + 0.00966

= **$0.010125**

**Test 2**

(186 × 0.0000025) + (985 × 0.00001)

= 0.000465 + 0.00985

= **$0.010315**

**Test 3**

(186 × 0.0000025) + (1,020 × 0.00001)

= 0.000465 + 0.01020

= **$0.010665**

**Average actual API cost**

(0.010125 + 0.010315 + 0.010665) / 3

= **$0.01036833 per call**

### Monthly Cost Comparison

For a consistent comparison, average completion usage of 990.33 tokens is held constant for both prompt versions.

**Original prompt**

Prompt cost:

392 × 0.0000025 = $0.00098

Completion cost:

990.33 × 0.00001 = $0.0099033

Cost per call:

$0.00098 + $0.0099033 = $0.0108833

Monthly cost:

$0.0108833 × 90,000 = **$979.50**

**Final corrected prompt**

Prompt cost:

186 × 0.0000025 = $0.000465

Completion cost:

990.33 × 0.00001 = $0.0099033

Cost per call:

$0.000465 + $0.0099033 = $0.0103683

Monthly cost:

$0.0103683 × 90,000 = **$933.15**

### Final Cost Comparison Table

| Version | Prompt Tokens | Completion Tokens | Cost Per Call | Monthly Cost |
|---|---:|---:|---:|---:|
| Original | 392 | 990.33 | $0.0108833 | $979.50 |
| Final Corrected Rewrite | 186 | 990.33 | $0.0103683 | $933.15 |

**Modelled monthly savings:**

$979.50 − $933.15 = **$46.35**

This comparison uses isolated system-prompt counts and a common completion-token assumption. It is a modelled comparison rather than a direct live comparison of both prompt versions.

---

## 5. Conclusion

The original Code Buddy system prompt contained redundant role descriptions, repeated scope restrictions and unnecessarily detailed formatting instructions.

The final corrected prompt reduced the system prompt from 392 to 186 tokens, achieving a **52.55% token reduction** and exceeding the required 40% target.

The optimisation preserves the assistant's role, code-review-only restriction, security and bug identification responsibilities, mandatory response structure, professional feedback requirements, informative guidance and 300-word response limit.

Three successful API requests confirmed that the application can generate code reviews and log prompt tokens, completion tokens, total tokens and estimated costs.

Using the assignment's assumed pricing rates and a consistent completion-token assumption, the estimated monthly cost decreases from $979.50 to $933.15, resulting in **$46.35 in modelled monthly savings**.

The final optimisation demonstrates that unnecessary prompt repetition can be reduced while preserving the essential behaviour and requirements of the Code Buddy application.