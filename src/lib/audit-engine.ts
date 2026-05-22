import { pricing } from "@/data/pricing";

export interface AuditResult {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
  severity: "low" | "medium" | "high";
  optimizedPlan: string;
}

export function generateAudit(
  tool: string,
  monthlySpend: number,
  teamSize: number
): AuditResult {

  // =========================
  // CHATGPT
  // =========================

  if (tool === "ChatGPT") {

    if (teamSize <= 2 && monthlySpend > 60) {

      const optimized = pricing.chatgpt.plus * teamSize;
      const savings = monthlySpend - optimized;

      return {
        recommendation: "Downgrade to ChatGPT Plus",

        optimizedPlan: "ChatGPT Plus",

        savings,

        annualSavings: savings * 12,

        reason:
          "Small teams are frequently over-provisioned with business or high-tier subscriptions despite having lightweight AI workloads.",

        severity: "high",
      };
    }

    if (monthlySpend > 200) {

      return {
        recommendation: "Consolidate Pro subscriptions",

        optimizedPlan: "ChatGPT Business",

        savings: 50,

        annualSavings: 600,

        reason:
          "Your organization may be paying for overlapping premium plans without centralized seat optimization.",

        severity: "medium",
      };
    }
  }

  // =========================
  // CLAUDE
  // =========================

  if (tool === "Claude") {

    if (teamSize <= 3 && monthlySpend > 70) {

      const optimized = pricing.claude.pro * teamSize;

      return {
        recommendation: "Switch to Claude Pro",

        optimizedPlan: "Claude Pro",

        savings:
          monthlySpend - optimized,

        annualSavings:
          (monthlySpend - optimized) * 12,

        reason:
          "Claude Team and Max plans are often excessive for smaller engineering teams without shared administration requirements.",

        severity: "high",
      };
    }

    if (monthlySpend >= 100) {

      return {
        recommendation: "Reduce Claude Max dependency",

        optimizedPlan: "Claude Pro",

        savings: 40,

        annualSavings: 480,

        reason:
          "Claude Max pricing is optimized for extremely heavy workloads and often exceeds actual productivity gains for moderate users.",

        severity: "medium",
      };
    }
  }

  // =========================
  // CURSOR
  // =========================

  if (tool === "Cursor") {

    if (teamSize <= 3 && monthlySpend > 80) {

      const optimized =
        pricing.cursor.individualMonthly * teamSize;

      return {
        recommendation: "Move to Cursor Individual",

        optimizedPlan: "Cursor Individual",

        savings:
          monthlySpend - optimized,

        annualSavings:
          (monthlySpend - optimized) * 12,

        reason:
          "Cursor Teams pricing is usually unnecessary for smaller developer teams without centralized context sharing.",

        severity: "high",
      };
    }

    if (monthlySpend > 150) {

      return {
        recommendation: "Optimize Cursor seat allocation",

        optimizedPlan: "Cursor Teams",

        savings: 60,

        annualSavings: 720,

        reason:
          "Premium coding seats appear over-allocated across low-usage contributors.",

        severity: "medium",
      };
    }
  }

  // =========================
  // COPILOT
  // =========================

  if (tool === "Copilot") {

    if (teamSize <= 5 && monthlySpend > 100) {

      const optimized =
        pricing.copilot.business * teamSize;

      return {
        recommendation: "Use GitHub Copilot Business",

        optimizedPlan: "Copilot Business",

        savings:
          monthlySpend - optimized,

        annualSavings:
          (monthlySpend - optimized) * 12,

        reason:
          "Smaller engineering teams generally benefit more from Copilot Business than fragmented Pro+ subscriptions.",

        severity: "high",
      };
    }

    if (monthlySpend > 200) {

      return {
        recommendation: "Reduce Pro+ dependency",

        optimizedPlan: "Copilot Pro",

        savings: 75,

        annualSavings: 900,

        reason:
          "High-tier Copilot subscriptions are often underutilized relative to their premium request capacity.",

        severity: "medium",
      };
    }
  }

  // =========================
  // GEMINI
  // =========================

  if (tool === "Gemini") {

    if (teamSize <= 3 && monthlySpend > 50) {

      const optimized =
        pricing.gemini.proMonthly;

      return {
        recommendation: "Move to Gemini Pro",

        optimizedPlan: "Gemini Pro",

        savings:
          monthlySpend - optimized,

        annualSavings:
          (monthlySpend - optimized) * 12,

        reason:
          "Gemini Ultra is typically unnecessary for lighter productivity and coding workflows.",

        severity: "medium",
      };
    }

    if (monthlySpend > 100) {

      return {
        recommendation: "Downgrade Gemini Ultra usage",

        optimizedPlan: "Gemini Pro",

        savings: 55,

        annualSavings: 660,

        reason:
          "Your current Gemini spend suggests premium capacity that may not align with actual utilization.",

        severity: "high",
      };
    }
  }

  // =========================
  // DEFAULT
  // =========================

  return {
    recommendation: "Current setup looks optimized",

    optimizedPlan: "No changes needed",

    savings: 0,

    annualSavings: 0,

    reason:
      "No major optimization opportunities were detected in your current AI tooling setup.",

    severity: "low",
  };
}