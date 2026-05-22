"use client";

import { useEffect, useState } from "react";

export default function SpendForm() {

  const [tool, setTool] = useState("ChatGPT");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {

    const savedTool = localStorage.getItem("tool");
    const savedSpend = localStorage.getItem("monthlySpend");
    const savedTeam = localStorage.getItem("teamSize");

    if (savedTool) setTool(savedTool);
    if (savedSpend) setMonthlySpend(savedSpend);
    if (savedTeam) setTeamSize(savedTeam);

  }, []);

  useEffect(() => {

    localStorage.setItem("tool", tool);
    localStorage.setItem("monthlySpend", monthlySpend);
    localStorage.setItem("teamSize", teamSize);

  }, [tool, monthlySpend, teamSize]);

  const handleAudit = () => {

    const spend = Number(monthlySpend);

    if (spend > 100) {
      setResult("Potential monthly savings: $40");
    } else {
      setResult("Your current AI stack looks optimized.");
    }
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

      {result && (
        <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            Audit Result
          </h3>

          <p className="text-slate-300">
            {result}
          </p>
        </div>
      )}

    </div>
  );
}