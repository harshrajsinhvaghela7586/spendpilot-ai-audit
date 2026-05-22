import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/audit/hero";
import SpendForm from "@/components/forms/spend-form";
import Features from "@/components/audit/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Navbar />

      <Hero />

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SpendForm />
        </div>
      </section>

      <Features />

      <Footer />
    </main>
  );
}