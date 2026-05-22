export const pricingData = {
  ChatGPT: {
    free: 0,
    plus: 24,
    pro: 128,
    business: 22,
    enterprise: 39,
  },

  Claude: {
    free: 0,
    pro: 17,
    max: 100,
    team: 20,
    enterprise: 35,
  },

  Cursor: {
    hobby: 0,
    pro: 20,
    teams: 40,
    enterprise: 60,
  },

  Copilot: {
    free: 0,
    pro: 10,
    proPlus: 39,
    business: 19,
    enterprise: 39,
  },

  Gemini: {
    plus: 5,
    pro: 24,
    ultra: 78,
  },
};

export function generateAudit(
  tool: string,
  monthlySpend: number,
  teamSize: number
) {

  const pricing = pricingData[tool as keyof typeof pricingData];

  let optimizedPlan = "";
  let optimizedCost = 0;
  let recommendation = "";
  let reason = "";

  if (tool === "ChatGPT") {

    if (teamSize >= 5) {

      optimizedPlan = "Business";
      optimizedCost = pricing.business * teamSize;

      recommendation =
        "Switch from individual subscriptions to ChatGPT Business";

      reason =
        "Business plans provide centralized billing, better collaboration, and significantly lower per-seat pricing for growing teams.";

    } else if (monthlySpend > 100) {

      optimizedPlan = "Pro";
      optimizedCost = pricing.pro;

      recommendation =
        "Consolidate into a single ChatGPT Pro workflow";

      reason =
        "Your spending pattern suggests overlapping subscriptions and underutilized premium features.";

    } else {

      optimizedPlan = "Plus";
      optimizedCost = pricing.plus;

      recommendation =
        "ChatGPT Plus is the most cost-efficient setup";

      reason =
        "Your current workload fits comfortably within ChatGPT Plus usage limits.";
    }
  }

  if (tool === "Claude") {

    if (teamSize >= 5) {

      optimizedPlan = "Claude Team";
      optimizedCost = pricing.team * teamSize;

      recommendation =
        "Move your team to Claude Team";

      reason =
        "Claude Team unlocks shared collaboration, centralized management, and lower cost scaling for multi-user environments.";

    } else if (monthlySpend > 80) {

      optimizedPlan = "Claude Max";
      optimizedCost = pricing.max;

      recommendation =
        "Upgrade heavy workloads to Claude Max";

      reason =
        "Your usage pattern indicates advanced reasoning and higher throughput requirements.";
    } else {

      optimizedPlan = "Claude Pro";
      optimizedCost = pricing.pro;

      recommendation =
        "Claude Pro offers the best balance";

      reason =
        "Your usage aligns well with Claude Pro’s higher limits and research capabilities.";
    }
  }

  if (tool === "Cursor") {

    if (teamSize >= 5) {

      optimizedPlan = "Cursor Teams";
      optimizedCost = pricing.teams * teamSize;

      recommendation =
        "Adopt Cursor Teams for engineering collaboration";

      reason =
        "Shared context, team rules, and centralized billing improve productivity and reduce duplicated subscriptions.";

    } else {

      optimizedPlan = "Cursor Pro";
      optimizedCost = pricing.pro;

      recommendation =
        "Cursor Pro is the optimal developer setup";

      reason =
        "The Pro plan provides strong coding capabilities without unnecessary enterprise overhead.";
    }
  }

  if (tool === "Copilot") {

    if (teamSize >= 5) {

      optimizedPlan = "GitHub Copilot Business";
      optimizedCost = pricing.business * teamSize;

      recommendation =
        "Switch to GitHub Copilot Business";

      reason =
        "Business plans improve governance, analytics, and organization-wide developer productivity.";

    } else if (monthlySpend > 30) {

      optimizedPlan = "Copilot Pro+";
      optimizedCost = pricing.proPlus;

      recommendation =
        "Upgrade to Copilot Pro+";

      reason =
        "Your premium model usage exceeds standard Copilot Pro thresholds.";

    } else {

      optimizedPlan = "Copilot Pro";
      optimizedCost = pricing.pro;

      recommendation =
        "Copilot Pro is the best value";

      reason =
        "The Pro tier provides excellent code completion and AI workflow support for individual developers.";
    }
  }

  if (tool === "Gemini") {

    if (monthlySpend > 70) {

      optimizedPlan = "Google AI Ultra";
      optimizedCost = pricing.ultra;

      recommendation =
        "Google AI Ultra best matches your advanced usage";

      reason =
        "Your workflow likely depends on higher model access, deep research, and extended multimodal generation.";

    } else if (monthlySpend > 20) {

      optimizedPlan = "Google AI Pro";
      optimizedCost = pricing.pro;

      recommendation =
        "Google AI Pro provides better optimization";

      reason =
        "Your workload benefits from Gemini Pro reasoning and higher monthly limits.";

    } else {

      optimizedPlan = "Google AI Plus";
      optimizedCost = pricing.plus;

      recommendation =
        "Google AI Plus is the most efficient choice";

      reason =
        "Your usage does not justify upgrading into higher enterprise-grade tiers.";
    }
  }

  const savings = Math.max(monthlySpend - optimizedCost, 0);

  return {
    optimizedPlan,
    optimizedCost,
    recommendation,
    reason,
    savings: savings.toFixed(2),
    annualSavings: (savings * 12).toFixed(2),
  };
}