# Token Audit Report

## 1. Pre-Fix Audit

**Application:** Code Buddy – AI Code Review Assistant

**Original prompt:** `prompts/system-prompt.txt`

**Tokenizer:** OpenAI Tokenizer (GPT-4 & GPT-3.5 legacy)

### Token Comparison

| Metric | Result |
|---|---:|
| Original prompt tokens | 392 |
| Previous rewritten prompt tokens | 148 |
| Tokens saved | 244 |
| Previous reduction | 62.24% |
| Corrected prompt tokens | Pending final tokenizer verification |

The previous rewrite achieved a 62.24% reduction. The corrected version was further updated to preserve the original instructions and requires final tokenizer verification.

### Sample API Usage

Sample user message: `Analyze the following code for bugs and improvements:` followed by submitted source code.

Sample user message token count: Not separately measured.

### Actual API Test Results

Three successful API requests were performed using the updated system prompt.

| Test | Prompt Tokens | Completion Tokens | Total Tokens | Estimated Cost |
|---|---:|---:|---:|---:|
| Test 1 | 186 | 966 | 1,152 | $0.0101 |
| Test 2 | 186 | 985 | 1,171 | $0.0103 |
| Test 3 | 186 | 1,020 | 1,206 | $0.0107 |
| **Average** | **186** | **990.33** | **1,176.33** | **$0.010368** |

All three requests successfully generated AI code reviews and printed token usage information in the application terminal.

### Monthly Usage Assumption

200 users × 15 calls/day × 30 days

= **90,000 API calls/month**

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

The restriction against answering unrelated questions appears three times. A single explicit instruction can preserve the same restriction and reduce repeated tokens on every API call.

### Source 3: Overly Detailed Formatting Instructions

**Location:** Paragraph 5.

**Original quotation:**

"Each of these areas should be written in clear, complete sentences that provide enough context for the student to understand the underlying logic of your suggestions and recommendations."

**Explanation:**

The formatting requirements contain lengthy explanations of clarity, context and readability. These can be consolidated while preserving the mandatory headings, complete sentences, appropriate context, consistent formatting and 300-word limit.

## 3. Rewritten Prompt

### Token Comparison

| Metric | Previous Rewrite | Corrected Rewrite |
|---|---:|---:|
| Original prompt tokens | 392 | 392 |
| Rewritten prompt tokens | 148 | Pending |
| Tokens saved | 244 | Pending |
| Percentage reduction | 62.24% | Pending |

### Previous Reduction Calculation

((392 - 148) / 392) × 100

= (244 / 392) × 100

= **62.24%**

The corrected version must be measured again using the same OpenAI Tokenizer setting before confirming its final reduction.

### Corrected Rewritten System Prompt

You are a helpful, informative AI assistant supporting developers and engineers with guidance that makes their development workflow seamless and productive. Respond ONLY to code review requests; do not answer unrelated questions.

Act as a senior professional code reviewer. Audit submitted code snippets for critical bugs, security vulnerabilities, and meaningful improvements. Provide constructive, professional feedback that helps students understand and learn from their mistakes.

Structure every review using exactly these three sections, in this order:

1. Issues Found
2. Suggested Improvements
3. Overall Assessment

Use appropriate headings, clear and complete sentences, and consistent, readable formatting. Explain the reasoning behind findings and recommendations with enough context for students to understand them. Limit the entire response to 300 words.

Stay strictly focused on code review and do not answer unrelated queries.

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

## 4. Cost Comparison Table

### Pricing Assumptions

Prompt token rate: $0.0000025 per token.

Completion token rate: $0.00001 per token.

Monthly API calls: 90,000.

These are the assignment's assumed pricing rates, not verified live provider pricing.

### Actual API Cost Calculations

**Test 1**

(186 × 0.0000025) + (966 × 0.00001)

= 0.000465 + 0.00966

= $0.010125

**Test 2**

(186 × 0.0000025) + (985 × 0.00001)

= 0.000465 + 0.00985

= $0.010315

**Test 3**

(186 × 0.0000025) + (1,020 × 0.00001)

= 0.000465 + 0.01020

= $0.010665

**Average actual API cost**

(0.010125 + 0.010315 + 0.010665) / 3

= **$0.01036833 per call**

### Monthly Cost Comparison

For a consistent comparison, average completion usage from the three tests (990.33 tokens) is held constant for both prompt versions.

**Original prompt**

Prompt cost:

392 × 0.0000025 = $0.00098

Completion cost:

990.33 × 0.00001 = $0.0099033

Cost per call:

$0.00098 + $0.0099033 = $0.0108833

Monthly cost:

$0.0108833 × 90,000 = **$979.50**

**Previous optimised prompt**

Prompt cost:

148 × 0.0000025 = $0.00037

Completion cost:

990.33 × 0.00001 = $0.0099033

Cost per call:

$0.00037 + $0.0099033 = $0.0102733

Monthly cost:

$0.0102733 × 90,000 = **$924.60**

### Cost Comparison Table

| Version | Prompt Tokens | Completion Tokens | Cost Per Call | Monthly Cost |
|---|---:|---:|---:|---:|
| Original | 392 | 990.33 | $0.010883 | $979.50 |
| Previous Rewrite | 148 | 990.33 | $0.010273 | $924.60 |

**Modelled monthly saving:**

$979.50 - $924.60 = **$54.90**

Note: This comparison uses isolated system-prompt counts and a common completion-token assumption. It is a modelled comparison, not a direct live comparison of both prompts. The corrected prompt's final cost must be recalculated after tokenizer verification.

## 5. Conclusion

The original Code Buddy system prompt contained redundant role descriptions, repeated scope restrictions and unnecessarily detailed formatting explanations.

The previous rewrite reduced the prompt from 392 to 148 tokens, achieving a measured reduction of 62.24%.

The corrected prompt further preserves the original requirements for informative responses and a seamless, productive developer experience.

Three successful API requests confirmed that the application can generate code reviews and log prompt tokens, completion tokens, total tokens and estimated costs.

The monthly cost model demonstrates how reducing prompt tokens can lower estimated API expenditure while keeping completion usage constant.

The corrected prompt requires final tokenizer verification to confirm its exact token reduction and complete cost comparison.