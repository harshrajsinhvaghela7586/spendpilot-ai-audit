"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/audit-engine";

export default function SpendForm() {

  const [tool, setTool] = useState("ChatGPT");
  const [plan, setPlan] = useState("Plus");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {

    const savedTool = localStorage.getItem("tool");
    const savedPlan = localStorage.getItem("plan");
    const savedSpend = localStorage.getItem("monthlySpend");
    const savedTeam = localStorage.getItem("teamSize");

    if (savedTool) setTool(savedTool);
    if (savedPlan) setPlan(savedPlan);
    if (savedSpend) setMonthlySpend(savedSpend);
    if (savedTeam) setTeamSize(savedTeam);

  }, []);

  useEffect(() => {

    localStorage.setItem("tool", tool);
    localStorage.setItem("plan", plan);
    localStorage.setItem("monthlySpend", monthlySpend);
    localStorage.setItem("teamSize", teamSize);

  }, [tool, plan, monthlySpend, teamSize]);

  const handleAudit = () => {

    const audit = generateAudit(
      tool,
      Number(monthlySpend),
      Number(teamSize)
    );

    setResult(audit);
  };

  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl">

      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          AI Spend Audit
        </h2>

        <p className="text-slate-400 mt-3 text-lg">
          Analyze your subscriptions, plans, and usage patterns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Tool */}

        <div>
          <label className="block mb-3 text-sm text-slate-300">
            AI Tool
          </label>

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>Copilot</option>
            <option>Gemini</option>
          </select>
        </div>

        {/* Plan */}

        <div>
          <label className="block mb-3 text-sm text-slate-300">
            Current Plan
          </label>

          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          >
            <option>Free</option>
            <option>Plus</option>
            <option>Pro</option>
            <option>Business</option>
            <option>Enterprise</option>
          </select>
        </div>

        {/* Spend */}

        <div>
          <label className="block mb-3 text-sm text-slate-300">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            placeholder="250"
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />
        </div>

        {/* Team */}

        <div>
          <label className="block mb-3 text-sm text-slate-300">
            Team Size
          </label>

          <input
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="5"
            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />
        </div>

      </div>

      <button
        onClick={handleAudit}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-semibold text-lg"
      >
        Generate Audit
      </button>

      {/* RESULT */}

      {result && (

        <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">

          {/* Severity */}

          <div
            className={`inline-flex px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              result.severity === "high"
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : result.severity === "medium"
                ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                : "bg-green-500/10 text-green-400 border border-green-500/20"
            }`}
          >
            {result.severity === "high"
              ? "High Savings Opportunity"
              : result.severity === "medium"
              ? "Optimization Opportunity"
              : "Well Optimized"}
          </div>

          <h3 className="text-3xl font-bold mb-6">
            Audit Results
          </h3>

          <div className="space-y-5">

            {/* Recommendation */}

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm">
                Recommendation
              </p>

              <h4 className="text-2xl font-bold mt-2">
                {result.recommendation}
              </h4>

            </div>

            {/* Optimized Plan */}

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm">
                Recommended Plan
              </p>

              <h4 className="text-2xl font-bold mt-2">
                {result.optimizedPlan}
              </h4>

            </div>

            {/* Savings */}

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

                <p className="text-slate-400 text-sm">
                  Monthly Savings
                </p>

                <h4 className="text-4xl font-bold text-green-400 mt-2">
                  ${result.savings}
                </h4>

              </div>

              <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

                <p className="text-slate-400 text-sm">
                  Annual Savings
                </p>

                <h4 className="text-4xl font-bold text-blue-400 mt-2">
                  ${result.annualSavings}
                </h4>

              </div>

            </div>

            {/* Reason */}

            <div className="bg-[#020617] rounded-2xl p-5 border border-white/10">

              <p className="text-slate-400 text-sm mb-3">
                Why This Recommendation?
              </p>

              <p className="text-slate-300 leading-relaxed">
                {result.reason}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}