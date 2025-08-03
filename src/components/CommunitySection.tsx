import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  MessageCircle, 
  Twitter, 
  Youtube, 
  GamepadIcon,
  Users
} from "lucide-react";

export const CommunitySection = () => {
  const socialLinks = [
    { icon: <GamepadIcon className="w-5 h-5" />, label: "Steam", href: "#" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Discord", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Únete a la <span className="text-neon">Comunidad</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sé parte de los sobrevivientes. Recibe contenido exclusivo, participa en el desarrollo y conecta con otros jugadores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Newsletter Signup */}
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center text-neon mr-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Newsletter Exclusivo</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Recibe avances exclusivos, arte conceptual y acceso anticipado a betas y demos.
            </p>
            
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="tu.email@ejemplo.com"
                className="bg-carbon border-border/50 focus:border-neon"
              />
              <Button variant="neon" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Suscribirse
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              * No spam. Solo contenido relacionado con The Last Harvest.
            </p>
          </Card>

          {/* Community Stats & Social */}
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-deep/20 rounded-lg flex items-center justify-center text-purple-deep mr-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Síguenos</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Mantente conectado para actualizaciones de desarrollo, streams en vivo y interacción directa con el equipo.
            </p>
            
            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  className="h-12 justify-start hover:bg-neon/10 hover:border-neon transition-all duration-300"
                >
                  {social.icon}
                  <span className="ml-2">{social.label}</span>
                </Button>
              ))}
            </div>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon">12.5K</div>
                <div className="text-sm text-muted-foreground">Wishlisted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-deep">3.2K</div>
                <div className="text-sm text-muted-foreground">En Discord</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Steam Widget */}
        <Card className="mt-8 p-8 bg-gradient-card border-border/50 shadow-card text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Añade a tu <span className="text-neon">Wishlist</span> en Steam
          </h3>
          <p className="text-muted-foreground mb-6">
            Sé notificado cuando el juego esté disponible y obtén acceso a descuentos de lanzamiento.
          </p>
          <Button variant="hero" size="xl">
            <GamepadIcon className="w-5 h-5 mr-2" />
            Wishlist en Steam
          </Button>
        </Card>
      </div>
    </section>
  );
};