import { Card } from "@/components/ui/card";
import { Sprout, Zap, Users, Target, Skull } from "lucide-react";
import mutatedCropsImage from "@/assets/mutated-crops.jpg";
import wastelandImage from "@/assets/wasteland-exploration.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const GameOverview = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Sprout className="w-6 h-6" />,
      title: t('postNuclearCrops'),
      description: t('postNuclearCropsDesc')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('wastelandExploration'),
      description: t('wastelandExplorationDesc')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('survivorRelations'),
      description: t('survivorRelationsDesc')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('moralDecisions'),
      description: t('moralDecisionsDesc')
    },
    {
      icon: <Skull className="w-6 h-6" />,
      title: t('multipleEndings'),
      description: t('multipleEndingsDesc')
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('aboutGame')} <span className="text-neon">{t('game')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('gameDescription')}
          </p>
        </div>

        {/* Game Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card">
            <img 
              src={mutatedCropsImage} 
              alt="Cultivos mutados radiactivos"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-neon mb-2">{t('postApocAgriculture')}</h3>
              <p className="text-muted-foreground">
                {t('postApocDescription')}
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card">
            <img 
              src={wastelandImage} 
              alt="Exploración del yermo radiactivo"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-deep mb-2">{t('radioactiveWasteland')}</h3>
              <p className="text-muted-foreground">
                {t('wastelandDescription')}
              </p>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-neon/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};