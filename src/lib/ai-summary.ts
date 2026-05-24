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
                  text:
                    `Generate a professional AI spend optimization summary.

                    Tool: ${tool}
                    Monthly Spend: ${monthlySpend}
                    Team Size: ${teamSize}
                    Recommended Plan: ${optimizedPlan}
                    Estimated Savings: ${savings}

                    Give:
                    - optimization insights
                    - overspending analysis
                    - productivity recommendations
                    - cost efficiency advice
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

    return "Failed to generate AI summary.";
  }
}