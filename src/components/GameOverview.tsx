import { Card } from "@/components/ui/card";
import { Sprout, Zap, Users, Target, Skull } from "lucide-react";
import mutatedCropsImage from "@/assets/mutated-crops.jpg";
import wastelandImage from "@/assets/wasteland-exploration.jpg";

export const GameOverview = () => {
  const features = [
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Cultivos Post-Nucleares",
      description: "Cultiva plantas mutadas con propiedades extraordinarias"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Exploración del Yermo",
      description: "Aventúrate en tierras radiactivas llenas de peligros y secretos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Relaciones con Sobrevivientes",
      description: "Construye alianzas o enemistades que afectarán tu historia"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Decisiones Morales",
      description: "Cada elección tiene consecuencias en el destino del mundo"
    },
    {
      icon: <Skull className="w-6 h-6" />,
      title: "Finales Múltiples",
      description: "Tu camino determinará si la humanidad sobrevive o perece"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre el <span className="text-neon">Juego</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            En un mundo devastado por la guerra nuclear, eres el último granjero de la humanidad. 
            Tu refugio agrícola es la única esperanza de supervivencia, pero el yermo radiactivo 
            esconde secretos que podrían salvar o condenar a todos para siempre.
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
              <h3 className="text-xl font-bold text-neon mb-2">Agricultura Post-Apocalíptica</h3>
              <p className="text-muted-foreground">
                Cultiva vegetales mutados que brillan con energía radiactiva y poseen propiedades únicas.
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
              <h3 className="text-xl font-bold text-purple-deep mb-2">Yermo Radiactivo</h3>
              <p className="text-muted-foreground">
                Explora un mundo devastado lleno de criaturas mutadas, ruinas y tecnología perdida.
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