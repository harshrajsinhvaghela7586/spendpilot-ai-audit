# PROMPTS.md

## Personalized Audit Summary Prompt

```txt
You are an AI infrastructure cost optimization assistant.

The user currently spends:
- Tool: {tool}
- Monthly Spend: {monthlySpend}
- Team Size: {teamSize}

Recommended Plan:
{optimizedPlan}

Monthly Savings:
{savings}

Write a concise 100-word summary explaining:
- where the overspending exists
- why the recommendation makes financial sense
- what operational benefits the optimized plan provides

Tone:
Professional, concise, startup-focused, financially literate.
```

---

# Why This Prompt Was Designed This Way

The prompt was intentionally constrained to:

* avoid hallucinated pricing
* avoid exaggerated claims
* maintain financially defensible recommendations
* keep summaries concise and readable

The audit calculations themselves are deterministic and rule-based. AI is only used for narrative summarization.

---

# Failed Prompt Experiments

Earlier prompt versions attempted:

* aggressive savings claims
* overly technical optimization reasoning
* verbose summaries

These outputs felt unrealistic and reduced trustworthiness.

The final prompt prioritizes clarity and financial credibility.
