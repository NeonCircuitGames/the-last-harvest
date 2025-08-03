import { Button } from "@/components/ui/button";
import { Play, Heart, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/60 to-carbon/90" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-radiation rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-deep rounded-full animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Game Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent animate-pulse">
          THE LAST HARVEST
        </h1>
        
        {/* Slogan */}
        <p className="text-2xl md:text-3xl text-foreground/90 mb-8 font-light">
          Salva el futuro… o destrúyelo para siempre
        </p>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Cultiva en un mundo post-nuclear. Explora el yermo radiactivo. 
          Toma decisiones que determinarán el destino de la humanidad.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Tráiler
          </Button>
          
          <Button variant="neon" size="xl" className="group">
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Wishlist en Steam
          </Button>
          
          <Button variant="wasteland" size="xl" className="group">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explorar el Juego
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};