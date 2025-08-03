import { Button } from "@/components/ui/button";
import { Heart, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-carbon to-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Suscríbete para recibir avances exclusivos
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sé el primero en conocer las últimas noticias, arte conceptual, 
            y obtén acceso anticipado a la beta del juego.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="w-full px-4 py-3 bg-carbon border border-neon/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon/60"
            />
            <Button variant="neon" size="lg" className="w-full sm:w-auto">
              <Mail className="w-5 h-5 mr-2" />
              Suscribirse
            </Button>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="border-t border-border/30 pt-12">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Añádelo a tu wishlist
          </h3>
          <p className="text-muted-foreground mb-6">
            No te pierdas el lanzamiento y recibe una notificación cuando esté disponible
          </p>
          
          <Button variant="hero" size="xl" className="group">
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Wishlist en Steam
          </Button>
        </div>
      </div>
    </section>
  );
};