const features = [
  {
    title: "Real-Time Audit",
    desc: "Analyze your AI subscriptions and spending instantly.",
  },
  {
    title: "Optimization Insights",
    desc: "Identify cheaper alternatives and unnecessary upgrades.",
  },
  {
    title: "Shareable Reports",
    desc: "Generate public audit links with clean visual summaries.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            Built for Modern AI Teams
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            SpendPilot helps startups optimize AI infrastructure spending with actionable recommendations.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0f172a] border border-white/10 rounded-[28px] p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}