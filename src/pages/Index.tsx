import { HeroSection } from "@/components/HeroSection";
import { GameOverview } from "@/components/GameOverview";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProjectStatus } from "@/components/ProjectStatus";
import { CTASection } from "@/components/CTASection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-carbon text-foreground">
      <HeroSection />
      <GameOverview />
      <FeaturesSection />
      <ProjectStatus />
      <CTASection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;