import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Programs from "@/components/Programs";
import BodyLogic from "@/components/BodyLogic";
import Visa from "@/components/Visa";
import SocialProof from "@/components/SocialProof";
import CTSForm from "@/components/CTSForm";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(178,58,255,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,128,133,0.08),transparent_40%)]" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <BodyLogic />
        <Programs />
        <Visa />
        <SocialProof />
        <CTSForm />
        <CTA />
        <FAQ />
      </main>
    </div>
  );
}
