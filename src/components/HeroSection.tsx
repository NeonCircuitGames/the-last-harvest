import { Button } from "@/components/ui/button";
import { Play, Heart, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/60 to-carbon/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        
        {/* Game Title */}
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-neon bg-clip-text text-transparent tracking-wider drop-shadow-2xl">
          {t('heroTitle')}
        </h1>
        
        {/* Slogan */}
        <p className="text-2xl md:text-3xl text-foreground/90 mb-8 font-light">
          {t('heroSlogan')}
        </p>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('watchTrailer')}
          </Button>
          
          <Button variant="neon" size="xl" className="group">
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('steamWishlist')}
          </Button>
          
          <Button variant="wasteland" size="xl" className="group">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('exploreGame')}
          </Button>
        </div>
    
      </div>
    </section>
  );
};
