"use client";

import { useState } from "react";

const pricingData = {
  monthly: [
    {
      tool: "ChatGPT",
      plan: "Plus",
      price: "₹1,999/mo",
      description: "Best for creators, developers, and productivity.",
      features: [
        "Advanced models",
        "Expanded memory",
        "Deep research",
        "Projects & custom GPTs",
        "Codex coding agent",
      ],
      highlight: true,
    },
    {
      tool: "Claude",
      plan: "Pro",
      price: "$17/mo",
      description: "Great for research, writing, and reasoning.",
      features: [
        "Claude Code",
        "Deep analysis",
        "Extended thinking",
        "Higher usage limits",
        "Memory across chats",
      ],
    },
    {
      tool: "Cursor",
      plan: "Individual",
      price: "$20/mo",
      description: "AI-first coding environment for developers.",
      features: [
        "Cloud agents",
        "MCPs & hooks",
        "Frontier AI models",
        "Bugbot support",
        "Extended limits",
      ],
    },
    {
      tool: "GitHub Copilot",
      plan: "Pro",
      price: "$10/mo",
      description: "Best coding assistant integrated with VS Code.",
      features: [
        "Cloud agent",
        "Code review",
        "Unlimited suggestions",
        "GPT-5 mini",
        "Claude & Codex support",
      ],
    },
    {
      tool: "Gemini",
      plan: "Google AI Pro",
      price: "₹1,950/mo",
      description: "Google AI ecosystem with Gemini 3 Pro.",
      features: [
        "Gemini 3 Pro",
        "Deep Research",
        "NotebookLM",
        "Google Flow",
        "5TB Storage",
      ],
    },
  ],

  yearly: [
    {
      tool: "ChatGPT",
      plan: "Plus",
      price: "₹23,988/yr",
      description: "Annual productivity AI subscription.",
      features: [
        "Advanced models",
        "Expanded memory",
        "Deep research",
        "Projects & custom GPTs",
        "Codex coding agent",
      ],
      highlight: true,
    },
    {
      tool: "Claude",
      plan: "Pro",
      price: "$204/yr",
      description: "Claude yearly plan with savings.",
      features: [
        "Claude Code",
        "Deep analysis",
        "Extended thinking",
        "Higher usage limits",
        "Memory across chats",
      ],
    },
    {
      tool: "Cursor",
      plan: "Individual",
      price: "$192/yr",
      description: "Cursor yearly discounted pricing.",
      features: [
        "Cloud agents",
        "MCPs & hooks",
        "Frontier AI models",
        "Bugbot support",
        "Extended limits",
      ],
    },
    {
      tool: "GitHub Copilot",
      plan: "Pro",
      price: "$100/yr",
      description: "Copilot Pro annual subscription.",
      features: [
        "Cloud agent",
        "Code review",
        "Unlimited suggestions",
        "GPT-5 mini",
        "Claude & Codex support",
      ],
    },
    {
      tool: "Gemini",
      plan: "Google AI Pro",
      price: "₹19,500/yr",
      description: "Google AI yearly savings plan.",
      features: [
        "Gemini 3 Pro",
        "Deep Research",
        "NotebookLM",
        "Google Flow",
        "5TB Storage",
      ],
    },
  ],
};

export default function Comparison() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = pricingData[billing];

  return (
    <section className="px-6 py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            AI Tool Comparison
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto">
            Compare real-world pricing, features, and plans from leading AI platforms
            including ChatGPT, Claude, Cursor, GitHub Copilot, and Gemini.
          </p>

          <div className="mt-8 inline-flex bg-[#0f172a] border border-white/10 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-3 rounded-full transition font-medium ${
                billing === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-3 rounded-full transition font-medium ${
                billing === "yearly"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {plans.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-[32px] border p-8 shadow-2xl transition hover:scale-[1.02]
              ${
                item.highlight
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-[#0f172a]"
              }`}
            >

              {item.highlight && (
                <div className="absolute top-5 right-5 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">
                  {item.tool}
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  {item.plan}
                </h3>

                <h4 className="text-5xl font-bold mt-6">
                  {item.price}
                </h4>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-4">
                {item.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />

                    <p className="text-slate-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-10 py-4 rounded-2xl font-semibold transition ${
                  item.highlight
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                View Plan
              </button>

            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">

          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Best for Developers
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Cursor and GitHub Copilot provide the strongest coding workflows,
              AI autocomplete, agents, and IDE integrations.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Best for Research
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Claude and Gemini Pro deliver advanced reasoning, long context,
              and deep research capabilities.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Best Overall Value
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              ChatGPT Plus offers the most balanced combination of memory,
              image generation, coding tools, and productivity features.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}