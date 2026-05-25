export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#020617]/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-blue-600 flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <h1 className="font-bold text-xl">
              SpendPilot
            </h1>

            <p className="text-xs text-slate-400">
              AI Spend Optimization
            </p>
          </div>
        </div>

        <a
  href="#audit-form"
  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-8 py-4 font-semibold"
>
  Start Audit
</a>
      </div>
    </header>
  );
}