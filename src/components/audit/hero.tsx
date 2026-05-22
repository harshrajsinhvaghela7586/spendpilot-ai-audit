export default function Hero() {
  return (
    <section className="relative px-6 py-28">

      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 text-blue-400 px-5 py-2 rounded-full text-sm mb-8">
          AI Infrastructure Cost Intelligence
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">

          Stop Overpaying
          <span className="block text-blue-500">
            for AI Tools
          </span>

        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-slate-400 text-lg md:text-xl leading-relaxed">
          Instantly audit your AI stack and uncover hidden savings across ChatGPT,
          Claude, Cursor, Copilot, Gemini, and more.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold text-lg">
            Analyze My AI Spend
          </button>

          <button className="border border-white/10 hover:border-white/20 bg-white/5 transition px-8 py-4 rounded-2xl font-semibold text-lg">
            View Example Audit
          </button>

        </div>

      </div>

    </section>
  );
}