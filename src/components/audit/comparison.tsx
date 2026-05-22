export default function Comparison() {

  const tools = [
    {
      name: "ChatGPT",
      price: "$24/mo",
      bestFor: "Research & Productivity",
      users: "Teams & Professionals",
    },

    {
      name: "Claude",
      price: "$17/mo",
      bestFor: "Reasoning & Long Context",
      users: "Writers & Analysts",
    },

    {
      name: "Cursor",
      price: "$20/mo",
      bestFor: "AI Coding",
      users: "Developers",
    },

    {
      name: "Copilot",
      price: "$10/mo",
      bestFor: "Code Completion",
      users: "Engineering Teams",
    },

    {
      name: "Gemini",
      price: "$24/mo",
      bestFor: "Google Ecosystem",
      users: "Productivity Users",
    },
  ];

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-bold">
            AI Tool Comparison
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto">
            Compare leading AI subscriptions and identify the most cost-effective setup for your workflow.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {tools.map((tool) => (

            <div
              key={tool.name}
              className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition"
            >

              <h3 className="text-3xl font-bold">
                {tool.name}
              </h3>

              <div className="mt-6">

                <p className="text-slate-400 text-sm">
                  Starting Price
                </p>

                <h4 className="text-4xl font-bold mt-2">
                  {tool.price}
                </h4>

              </div>

              <div className="mt-8 space-y-5">

                <div>

                  <p className="text-slate-400 text-sm">
                    Best For
                  </p>

                  <p className="mt-1 font-medium">
                    {tool.bestFor}
                  </p>

                </div>

                <div>

                  <p className="text-slate-400 text-sm">
                    Ideal Users
                  </p>

                  <p className="mt-1 font-medium">
                    {tool.users}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}