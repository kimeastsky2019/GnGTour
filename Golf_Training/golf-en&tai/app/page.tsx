import HeroSection from "../components/landing/HeroSection";
import ProblemSection from "../components/landing/ProblemSection";
import ProgramSection from "../components/landing/ProgramSection";
import TargetSection from "../components/landing/TargetSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import UniversitySection from "../components/landing/UniversitySection";
import VisaPathSection from "../components/landing/VisaPathSection";
import RoadmapSection from "../components/landing/RoadmapSection";
import PricingSection from "../components/landing/PricingSection";
import FAQSection from "../components/landing/FAQSection";
import FinalCTASection from "../components/landing/FinalCTASection";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <HeroSection />
      <ProblemSection />
      <ProgramSection />
      <TargetSection />
      <BenefitsSection />
      <UniversitySection />
      <VisaPathSection />
      <RoadmapSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
