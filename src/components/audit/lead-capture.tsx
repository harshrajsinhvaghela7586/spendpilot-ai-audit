"use client";

import { useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

type AuditResult = {
  savings: number;
  recommendation: string;
  optimizedPlan: string;
};

type LeadCaptureProps = {
  result: AuditResult;
  tool: string;
  monthlySpend: number;
  teamSize: number;
};

export default function LeadCapture({
  result,
  tool,
  monthlySpend,
  teamSize,
}: LeadCaptureProps) {

  const [email, setEmail] = useState("");

  const [company, setCompany] = useState("");

  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const docRef = await addDoc(
        collection(db, "audits"),
        {

          email,

          company,

          role,

          tool,

          monthlySpend,

          teamSize,

          savings: result.savings,

          recommendation: result.recommendation,

          optimizedPlan: result.optimizedPlan,

          createdAt: serverTimestamp(),
        }
      );

      const shareUrl =
        `${window.location.origin}/audit/${docRef.id}`;

      await navigator.clipboard.writeText(shareUrl);

      setSuccess(true);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  if (success) {

    return (

      <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-6">

        <h3 className="text-2xl font-bold">
          Report Saved Successfully
        </h3>

        <p className="text-slate-300 mt-3">
          Your shareable audit report link has been copied to clipboard.
        </p>

      </div>
    );
  }

  return (

    <div className="mt-8 bg-[#020617] rounded-2xl p-6 border border-white/10">

      <h3 className="text-2xl font-bold">
        Get Full Audit Report
      </h3>

      <p className="text-slate-400 mt-2">
        Save your audit and generate a shareable report URL.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none"
        />

        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none"
        />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none"
        />

      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-semibold"
      >

        {loading
          ? "Saving Report..."
          : "Save & Generate Shareable Report"}

      </button>

    </div>
  );
}