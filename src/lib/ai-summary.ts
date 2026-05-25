export async function generateAISummary(
  tool: string,
  monthlySpend: number,
  teamSize: number,
  optimizedPlan: string,
  savings: number
) {

  try {

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
      process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          contents: [
            {
              parts: [
                {
                  text: `
Generate a SHORT professional AI spend audit summary.

Keep the response concise and executive-style.

Rules:
- Maximum 200 words
- Use markdown formatting
- Use short bullet points
- Avoid long paragraphs
- Keep it readable for founders and engineering managers

Data:
Tool: ${tool}
Monthly Spend: ${monthlySpend}
Team Size: ${teamSize}
Recommended Plan: ${optimizedPlan}
Estimated Monthly Savings: ${savings}

Format EXACTLY like this:

# AI Spend Overview

## Key Findings

- point
- point
- point

## Recommended Actions

- point
- point
- point

## Final Recommendation

One short professional conclusion sentence.
                  `
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Unable to generate AI summary."
    );

  } catch (error) {

    console.error(error);

    return `
# AI Spend Overview

## Key Findings
- Current spend appears higher than optimized usage.
- Recommended plan can significantly reduce cost.
- Team usage should be consolidated.

## Recommended Actions
- Move users to optimized subscription plans.
- Monitor AI spending monthly.
- Centralize usage and billing.

## Final Recommendation
Adopt a more cost-efficient AI subscription strategy.
    `;
  }
}