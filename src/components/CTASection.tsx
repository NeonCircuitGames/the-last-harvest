import { Button } from "@/components/ui/button";
import { Heart, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-carbon to-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder={t('emailPlaceholder')}
              className="w-full px-4 py-3 bg-carbon border border-neon/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon/60"
            />
            <Button variant="neon" size="lg" className="w-full sm:w-auto">
              <Mail className="w-5 h-5 mr-2" />
              {t('subscribe')}
            </Button>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="border-t border-border/30 pt-12">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            {t('addToWishlist')}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t('wishlistDescription')}
          </p>
          
          <Button variant="hero" size="xl" className="group">
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('steamWishlist')}
          </Button>
        </div>
      </div>
    </section>
  );
};