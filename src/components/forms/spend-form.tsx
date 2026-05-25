"use client";

import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import { generateAudit } from "@/lib/audit-engine";

import LeadCapture from "@/components/audit/lead-capture";

import { generateAISummary } from "@/lib/ai-summary";


import { trackAuditEvent } from "@/lib/analytics";

interface AuditResult {
  recommendation: string;
  savings: number;
  annualSavings: number;
  optimizedPlan: string;
  reason: string;
}

export default function SpendForm() {

  const [tool, setTool] = useState(() => {

    if (typeof window === "undefined") {
      return "ChatGPT";
    }

    return (
      localStorage.getItem("tool") ||
      "ChatGPT"
    );
  });

  const [monthlySpend, setMonthlySpend] =
    useState(() => {

      if (typeof window === "undefined") {
        return "";
      }

      return (
        localStorage.getItem("monthlySpend") ||
        ""
      );
    });

  const [teamSize, setTeamSize] =
    useState(() => {

      if (typeof window === "undefined") {
        return "";
      }

      return (
        localStorage.getItem("teamSize") ||
        ""
      );
    });

  const [result, setResult] =
    useState<AuditResult | null>(null);

  const [aiSummary, setAiSummary] =
    useState("");

  const [loadingSummary, setLoadingSummary] =
    useState(false);

  const [auditScore, setAuditScore] =
    useState(0);

  useEffect(() => {

    localStorage.setItem(
      "tool",
      tool
    );

    localStorage.setItem(
      "monthlySpend",
      monthlySpend
    );

    localStorage.setItem(
      "teamSize",
      teamSize
    );

  }, [
    tool,
    monthlySpend,
    teamSize
  ]);

  const calculateScore = (
    spend: number,
    savings: number
  ) => {

    if (spend <= 0) {
      return 100;
    }

    const ratio =
      savings / spend;

    const score =
      Math.max(
        10,
        100 - Math.round(ratio * 100)
      );

    return score;
  };

  const handleAudit = async () => {

    const audit = generateAudit(
      tool,
      Number(monthlySpend),
      Number(teamSize)
    );

    setResult(audit);

    const score =
      calculateScore(
        Number(monthlySpend),
        audit.savings
      );

    setAuditScore(score);

    setLoadingSummary(true);

    const summary =
      await generateAISummary(
        tool,
        Number(monthlySpend),
        Number(teamSize),
        audit.optimizedPlan,
        audit.savings
      );

    setAiSummary(summary);

    setLoadingSummary(false);

    await trackAuditEvent(
      tool,
      Number(monthlySpend),
      Number(teamSize)
    );
  };

  return (

    <div className="bg-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          AI Spend Audit
        </h2>

        <p className="text-slate-400 mt-3">
          Analyze your subscriptions, plans, and usage patterns.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block mb-3 text-sm text-slate-300">
            AI Tool
          </label>

          <select
            value={tool}
            onChange={(e) =>
              setTool(e.target.value)
            }
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >

            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>Copilot</option>
            <option>Gemini</option>

          </select>

        </div>

        <div>

          <label className="block mb-3 text-sm text-slate-300">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            value={monthlySpend}
            onChange={(e) =>
              setMonthlySpend(
                e.target.value
              )
            }
            placeholder="250"
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

        </div>

        <div>

          <label className="block mb-3 text-sm text-slate-300">
            Team Size
          </label>

          <input
            type="number"
            value={teamSize}
            onChange={(e) =>
              setTeamSize(
                e.target.value
              )
            }
            placeholder="5"
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

        </div>

      </div>

      <button
        onClick={handleAudit}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-semibold text-lg"
      >

        {loadingSummary
          ? "Generating AI Insights..."
          : "Generate Audit"}

      </button>

      {result && (

        <div
          id="audit-report"
          className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6"
        >

          <h3 className="text-2xl font-bold mb-6">
            Audit Results
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm">
                Monthly Savings
              </p>

              <h4 className="text-3xl font-bold text-green-400 mt-2">
                ${result.savings}
              </h4>

            </div>

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm">
                Annual Savings
              </p>

              <h4 className="text-3xl font-bold text-blue-400 mt-2">
                ${result.annualSavings}
              </h4>

            </div>

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm">
                Optimization Score
              </p>

              <h4 className="text-3xl font-bold text-purple-400 mt-2">
                {auditScore}/100
              </h4>

            </div>

          </div>

          <div className="space-y-4">

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm mb-2">
                Recommended Plan
              </p>

              <h4 className="text-2xl font-bold">
                {result.optimizedPlan}
              </h4>

            </div>

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm mb-2">
                Recommendation
              </p>

              <p className="text-slate-300 leading-relaxed">
                {result.reason}
              </p>

            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">

              <h3 className="text-2xl font-bold mb-5">
                AI Insights
              </h3>

              {loadingSummary ? (

                <div className="space-y-3 animate-pulse">

                  <div className="h-4 bg-white/10 rounded" />
                  <div className="h-4 bg-white/10 rounded w-5/6" />
                  <div className="h-4 bg-white/10 rounded w-4/6" />

                </div>

              ) : (

               <div
  className="
    prose
    prose-invert
    prose-headings:text-white
    prose-headings:font-bold
    prose-p:text-slate-300
    prose-p:leading-7
    prose-li:text-slate-300
    prose-strong:text-white
    prose-ul:space-y-2
    prose-h1:text-3xl
    prose-h2:text-2xl
    prose-h3:text-xl
    max-w-none
  "
>

  <ReactMarkdown>
    {aiSummary}
  </ReactMarkdown>

</div>
              )}

            </div>

          </div>

          <LeadCapture
            result={result}
            tool={tool}
            monthlySpend={Number(monthlySpend)}
            teamSize={Number(teamSize)}
          />

        </div>

      )}

    </div>
  );
}