import HeroMain from "@/components/HeroMain";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import PromoBanner from "@/components/PromoBanner";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroMain />
      <ProblemSection />
      <SolutionsSection />
      <PromoBanner />
      <SocialProofSection />
      <FinalCTASection />
    </>
  );
}
