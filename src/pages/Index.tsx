import { HeroSection } from "@/components/HeroSection";
import { GameOverview } from "@/components/GameOverview";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-carbon text-foreground">
      <HeroSection />
      <GameOverview />
      <FeaturesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;