// src/app/page.tsx
"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Comparison from "@/components/comparison";
import UseCases from "@/components/use-cases";
import TechnicalSpecs from "@/components/technical-specs";
import Roadmap from "@/components/roadmap";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-blue-500/10 blur-[50px] md:h-[500px] md:w-[500px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-purple-500/10 blur-[50px] md:h-[500px] md:w-[500px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <Comparison />
          <UseCases />
          <TechnicalSpecs />
          <Roadmap />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}