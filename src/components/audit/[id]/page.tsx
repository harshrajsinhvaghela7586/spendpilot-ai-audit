import {
  doc,
  getDoc
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default async function AuditPage({
  params,
}: any) {

  const ref = doc(db, "audits", params.id);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {

    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Audit not found
      </div>
    );
  }

  const data = snapshot.data();

  return (

    <div className="min-h-screen bg-[#020617] text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold">
          AI Spend Audit Report
        </h1>

        <div className="mt-10 bg-[#0f172a] border border-white/10 rounded-3xl p-8">

          <div className="space-y-6">

            <div>

              <p className="text-slate-400">
                Tool
              </p>

              <h2 className="text-3xl font-bold mt-1">
                {data.tool}
              </h2>

            </div>

            <div>

              <p className="text-slate-400">
                Recommended Plan
              </p>

              <h2 className="text-3xl font-bold mt-1">
                {data.optimizedPlan}
              </h2>

            </div>

            <div>

              <p className="text-slate-400">
                Monthly Savings
              </p>

              <h2 className="text-5xl font-bold text-green-400 mt-1">
                ${data.savings}
              </h2>

            </div>

            <div>

              <p className="text-slate-400">
                Recommendation
              </p>

              <p className="text-lg leading-relaxed mt-2">
                {data.recommendation}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}