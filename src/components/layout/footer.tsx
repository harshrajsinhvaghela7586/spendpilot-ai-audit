export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 mt-20">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h2 className="text-xl font-bold">
            SpendPilot
          </h2>

          <p className="text-slate-500 mt-2">
            AI Spend Optimization Platform
          </p>
        </div>

        <div className="text-slate-500">
          © 2026 SpendPilot. All rights reserved.
        </div>

      </div>

    </footer>
  );
}