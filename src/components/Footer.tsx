import { Atom, Mail, FileText, Shield, Twitter, Youtube, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-carbon border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Studio */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center mr-3">
                <Atom className="w-6 h-6 text-carbon" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Neon Circuit Games</h3>
                <p className="text-sm text-muted-foreground">{t('gameStudio')}</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-4">
              Creamos experiencias de juego inmersivas que desafían las convenciones, 
              combinando narrativa profunda con mecánicas innovadoras.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-neon/10 hover:bg-neon/20 border border-neon/30 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-neon group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-neon/10 hover:bg-neon/20 border border-neon/30 rounded-lg flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 text-neon group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-neon/10 hover:bg-neon/20 border border-neon/30 rounded-lg flex items-center justify-center transition-colors group">
                <MessageCircle className="w-5 h-5 text-neon group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Game Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">El Juego</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-neon transition-colors">Sobre el Juego</a></li>
              <li><a href="#features" className="hover:text-neon transition-colors">Características</a></li>
              <li><a href="#gallery" className="hover:text-neon transition-colors">Galería</a></li>
              <li><a href="#trailer" className="hover:text-neon transition-colors">Tráiler</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#press" className="hover:text-neon transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Kit de Prensa
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neon transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contacto
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-neon transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            {t('copyright')}
          </div>
          
          {/* Platform Links */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Disponible en:</span>
            <a href="#" className="hover:text-neon transition-colors">Steam</a>
            <span>•</span>
            <a href="#" className="hover:text-neon transition-colors">Epic Games</a>
            <span>•</span>
            <a href="#" className="hover:text-neon transition-colors">Itch.io</a>
          </div>
        </div>

        {/* Radiation Warning */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-neon/10 border border-neon/30 rounded-lg">
            <Atom className="w-4 h-4 text-neon mr-2" />
            <span className="text-sm text-foreground">
              ⚠️ Advertencia: Este juego contiene elementos radiactivos simulados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};