"use client";

import { useState } from "react";

type Plan = {
  tool: string;
  plan: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  url: string;
};

const pricingData: {
  monthly: Plan[];
  yearly: Plan[];
} = {

  monthly: [
    {
      tool: "ChatGPT",
      plan: "Plus",
      price: "₹1,999/mo",
      description:
        "Best for creators, developers, and productivity workflows.",

      features: [
        "Advanced GPT models",
        "Expanded memory",
        "Deep research",
        "Projects & custom GPTs",
        "Codex coding agent",
      ],

      highlight: true,

      url: "https://openai.com/chatgpt/pricing/",
    },

    {
      tool: "Claude",
      plan: "Pro",
      price: "$17/mo",

      description:
        "Excellent for long-form reasoning, research, and writing tasks.",

      features: [
        "Claude Code",
        "Deep analysis",
        "Extended thinking",
        "Higher usage limits",
        "Memory across chats",
      ],

      url: "https://www.anthropic.com/pricing",
    },

    {
      tool: "Cursor",
      plan: "Individual",
      price: "$20/mo",

      description:
        "AI-first development environment for modern software engineers.",

      features: [
        "Cloud agents",
        "MCPs & hooks",
        "Frontier AI models",
        "Bugbot support",
        "Extended limits",
      ],

      url: "https://cursor.com/pricing",
    },

    {
      tool: "GitHub Copilot",
      plan: "Pro",
      price: "$10/mo",

      description:
        "Powerful coding assistant deeply integrated with GitHub & VS Code.",

      features: [
        "Cloud agent",
        "Code review",
        "Unlimited suggestions",
        "GPT-5 mini",
        "Claude & Codex support",
      ],

      url: "https://github.com/features/copilot/plans",
    },

    {
      tool: "Gemini",
      plan: "Google AI Pro",
      price: "₹1,950/mo",

      description:
        "Google ecosystem with Gemini 3 Pro and productivity integrations.",

      features: [
        "Gemini 3 Pro",
        "Deep Research",
        "NotebookLM",
        "Google Flow",
        "5TB Storage",
      ],

      url: "https://gemini.google/subscriptions/",
    },
  ],

  yearly: [
    {
      tool: "ChatGPT",
      plan: "Plus",
      price: "₹23,988/yr",

      description:
        "Annual AI productivity subscription with premium capabilities.",

      features: [
        "Advanced GPT models",
        "Expanded memory",
        "Deep research",
        "Projects & custom GPTs",
        "Codex coding agent",
      ],

      highlight: true,

      url: "https://openai.com/chatgpt/pricing/",
    },

    {
      tool: "Claude",
      plan: "Pro",
      price: "$204/yr",

      description:
        "Yearly Claude plan optimized for research and reasoning workflows.",

      features: [
        "Claude Code",
        "Deep analysis",
        "Extended thinking",
        "Higher usage limits",
        "Memory across chats",
      ],

      url: "https://www.anthropic.com/pricing",
    },

    {
      tool: "Cursor",
      plan: "Individual",
      price: "$192/yr",

      description:
        "Discounted yearly developer-focused AI coding environment.",

      features: [
        "Cloud agents",
        "MCPs & hooks",
        "Frontier AI models",
        "Bugbot support",
        "Extended limits",
      ],

      url: "https://cursor.com/pricing",
    },

    {
      tool: "GitHub Copilot",
      plan: "Pro",
      price: "$100/yr",

      description:
        "Yearly Copilot subscription for developers and engineering teams.",

      features: [
        "Cloud agent",
        "Code review",
        "Unlimited suggestions",
        "GPT-5 mini",
        "Claude & Codex support",
      ],

      url: "https://github.com/features/copilot/plans",
    },

    {
      tool: "Gemini",
      plan: "Google AI Pro",
      price: "₹19,500/yr",

      description:
        "Google AI yearly subscription with ecosystem-wide productivity tools.",

      features: [
        "Gemini 3 Pro",
        "Deep Research",
        "NotebookLM",
        "Google Flow",
        "5TB Storage",
      ],

      url: "https://gemini.google/subscriptions/",
    },
  ],
};

export default function Comparison() {

  const [billing, setBilling] =
    useState<"monthly" | "yearly">("monthly");

  const plans = pricingData[billing];

  return (

    <section
      id="example-audit"
      className="px-6 py-24 bg-[#020617]"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-blue-400 text-sm font-medium mb-6">
            AI Pricing Intelligence
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Compare Leading
            <span className="text-blue-500"> AI Plans</span>
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
            Evaluate pricing, capabilities, and value across ChatGPT,
            Claude, Cursor, GitHub Copilot, and Gemini to identify
            the most cost-effective AI stack for your workflow.
          </p>

          <div className="mt-10 inline-flex bg-[#0f172a] border border-white/10 rounded-full p-1">

            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-3 rounded-full transition font-semibold ${
                billing === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-3 rounded-full transition font-semibold ${
                billing === "yearly"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
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
              className={`relative rounded-[32px] border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-blue-500/10 hover:shadow-2xl
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

                <p className="text-slate-400 mt-5 leading-relaxed">
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

                    <p className="text-slate-300 leading-relaxed">
                      {feature}
                    </p>

                  </div>

                ))}

              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full mt-10 py-4 rounded-2xl font-semibold transition
                ${
                  item.highlight
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                View Plan
              </a>

            </div>

          ))}

        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">

          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Best for Developers
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Cursor and GitHub Copilot deliver the strongest coding workflows,
              intelligent autocomplete, AI agents, and IDE integrations.
            </p>

          </div>

          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Best for Research
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Claude and Gemini Pro provide advanced reasoning,
              long-context analysis, and deep research capabilities.
            </p>

          </div>

          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Best Overall Value
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              ChatGPT Plus offers the best balance of productivity,
              coding tools, image generation, and workflow automation.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}