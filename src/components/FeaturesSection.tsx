import { Card } from "@/components/ui/card";
import { 
  Atom, 
  Crosshair, 
  Scale, 
  Home, 
  Sun, 
  Gamepad2 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      titleKey: "feature1Title",
      descKey: "feature1Desc",
      gradient: "from-neon/20 to-radiation/10"
    },
    {
      icon: <Crosshair className="w-8 h-8" />,
      titleKey: "feature2Title",
      descKey: "feature2Desc",
      gradient: "from-purple-deep/20 to-neon/10"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      titleKey: "feature3Title",
      descKey: "feature3Desc",
      gradient: "from-radiation/20 to-purple-deep/10"
    },
    {
      icon: <Home className="w-8 h-8" />,
      titleKey: "feature4Title",
      descKey: "feature4Desc",
      gradient: "from-neon/20 to-wasteland/20"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      titleKey: "feature5Title",
      descKey: "feature5Desc",
      gradient: "from-purple-deep/20 to-radiation/10"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      titleKey: "feature6Title",
      descKey: "feature6Desc",
      gradient: "from-radiation/20 to-neon/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-carbon">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('featuresTitle')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-neon/10 transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-neon mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-neon transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>
              
              {/* Decorative Element */}
              <div className="mt-6 h-1 w-0 bg-gradient-neon rounded group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-gradient-neon rounded-lg">
            <div className="bg-carbon rounded-md px-8 py-4">
              <p className="text-lg font-semibold text-foreground">
                ¿Listo para <span className="text-neon">cosechar</span> tu destino?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};