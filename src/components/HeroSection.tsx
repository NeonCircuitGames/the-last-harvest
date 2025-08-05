import { Button } from "@/components/ui/button";
import { Play, Heart, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SoundToggle } from "./SoundToggle";
import { ParticleBackground } from "./ParticleBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/80 via-carbon/60 to-carbon/90" />
      </motion.div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Sound Toggle */}
      <SoundToggle />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Language Switcher */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-4 right-4"
        >
          <LanguageSwitcher />
        </motion.div>
        
        {/* Game Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-neon bg-clip-text text-transparent tracking-wider drop-shadow-2xl"
        >
          {t('heroTitle')}
        </motion.h1>
        
        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl text-foreground/90 mb-8 font-light"
        >
          {t('heroSlogan')}
        </motion.p>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('heroSubtitle')}
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
            {t('watchTrailer')}
          </Button>
          
          <Button variant="steam" size="xl" className="group relative">
            <Heart className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:text-red-400 transition-all duration-300" />
            {t('steamWishlist')}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-neon/0 via-neon/50 to-neon/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </Button>
          
          <Button variant="wasteland" size="xl" className="group">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
            {t('exploreGame')}
          </Button>
        </motion.div>
    
      </div>
    </section>
  );
};
