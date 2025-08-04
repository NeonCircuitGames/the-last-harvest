import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Hero Section
    heroTitle: "THE LAST HARVEST",
    heroSlogan: "Salva el futuro… o destrúyelo para siempre",
    heroSubtitle: "Cultiva en un mundo post-nuclear. Explora el yermo radiactivo. Toma decisiones que determinarán el destino de la humanidad.",
    watchTrailer: "Ver Tráiler",
    steamWishlist: "Wishlist en Steam",
    exploreGame: "Explorar el Juego",
    
    // Game Overview
    aboutGame: "Sobre el",
    game: "Juego",
    gameDescription: "En un mundo devastado por la guerra nuclear, eres el último granjero de la humanidad. Tu refugio agrícola es la única esperanza de supervivencia, pero el yermo radiactivo esconde secretos que podrían salvar o condenar a todos para siempre.",
    postApocAgriculture: "Agricultura Post-Apocalíptica",
    postApocDescription: "Cultiva vegetales mutados que brillan con energía radiactiva y poseen propiedades únicas.",
    radioactiveWasteland: "Yermo Radiactivo",
    wastelandDescription: "Explora un mundo devastado lleno de criaturas mutadas, ruinas y tecnología perdida.",
    
    // Features
    postNuclearCrops: "Cultivos Post-Nucleares",
    postNuclearCropsDesc: "Cultiva plantas mutadas con propiedades extraordinarias",
    wastelandExploration: "Exploración del Yermo",
    wastelandExplorationDesc: "Aventúrate en tierras radiactivas llenas de peligros y secretos",
    survivorRelations: "Relaciones con Sobrevivientes",
    survivorRelationsDesc: "Construye alianzas o enemistades que afectarán tu historia",
    moralDecisions: "Decisiones Morales",
    moralDecisionsDesc: "Cada elección tiene consecuencias en el destino del mundo",
    multipleEndings: "Finales Múltiples",
    multipleEndingsDesc: "Tu camino determinará si la humanidad sobrevive o perece",
    
    // CTA Section
    ctaTitle: "Suscríbete para recibir avances exclusivos",
    ctaDescription: "Sé el primero en conocer las últimas noticias, arte conceptual, y obtén acceso anticipado a la beta del juego.",
    emailPlaceholder: "tu@email.com",
    subscribe: "Suscribirse",
    addToWishlist: "Añádelo a tu wishlist",
    wishlistDescription: "No te pierdas el lanzamiento y recibe una notificación cuando esté disponible",
    
    // Community
    joinCommunity: "Únete a la",
    community: "Comunidad",
    communityDescription: "Sé parte de los sobrevivientes. Recibe contenido exclusivo, participa en el desarrollo y conecta con otros jugadores.",
    newsletter: "Newsletter Exclusivo",
    newsletterDesc: "Recibe avances exclusivos, arte conceptual y acceso anticipado a betas y demos.",
    discord: "Discord",
    discordDesc: "Únete a nuestra comunidad de jugadores",
    reddit: "Reddit",
    redditDesc: "Discute estrategias y comparte contenido",
    
    // Footer
    gameStudio: "Estudio de Desarrollo",
    platforms: "Plataformas",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
    copyright: "© 2024 Neon Circuit Games. Todos los derechos reservados."
  },
  en: {
    // Hero Section
    heroTitle: "THE LAST HARVEST",
    heroSlogan: "Save the future—or scorch it to the ground",
    heroSubtitle: "Farm in a post-nuclear world. Explore the radioactive wasteland. Make decisions that will determine humanity's fate.",
    watchTrailer: "Watch Trailer",
    steamWishlist: "Wishlist on Steam",
    exploreGame: "Explore the Game",
    
    // Game Overview
    aboutGame: "About the",
    game: "Game",
    gameDescription: "In a world devastated by nuclear war, you are humanity's last farmer. Your agricultural shelter is the only hope for survival, but the radioactive wasteland hides secrets that could save or condemn everyone forever.",
    postApocAgriculture: "Post-Apocalyptic Agriculture",
    postApocDescription: "Grow mutated vegetables that glow with radioactive energy and possess unique properties.",
    radioactiveWasteland: "Radioactive Wasteland",
    wastelandDescription: "Explore a devastated world full of mutated creatures, ruins, and lost technology.",
    
    // Features
    postNuclearCrops: "Post-Nuclear Crops",
    postNuclearCropsDesc: "Grow mutated plants with extraordinary properties",
    wastelandExploration: "Wasteland Exploration",
    wastelandExplorationDesc: "Venture into radioactive lands full of dangers and secrets",
    survivorRelations: "Survivor Relations",
    survivorRelationsDesc: "Build alliances or enmities that will affect your story",
    moralDecisions: "Moral Decisions",
    moralDecisionsDesc: "Every choice has consequences for the world's fate",
    multipleEndings: "Multiple Endings",
    multipleEndingsDesc: "Your path will determine whether humanity survives or perishes",
    
    // CTA Section
    ctaTitle: "Subscribe for exclusive updates",
    ctaDescription: "Be the first to know about the latest news, concept art, and get early access to the game beta.",
    emailPlaceholder: "your@email.com",
    subscribe: "Subscribe",
    addToWishlist: "Add to your wishlist",
    wishlistDescription: "Don't miss the launch and receive a notification when it's available",
    
    // Community
    joinCommunity: "Join the",
    community: "Community",
    communityDescription: "Be part of the survivors. Receive exclusive content, participate in development and connect with other players.",
    newsletter: "Exclusive Newsletter",
    newsletterDesc: "Receive exclusive previews, concept art and early access to betas and demos.",
    discord: "Discord",
    discordDesc: "Join our player community",
    reddit: "Reddit",
    redditDesc: "Discuss strategies and share content",
    
    // Footer
    gameStudio: "Game Studio",
    platforms: "Platforms",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    copyright: "© 2024 Neon Circuit Games. All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};