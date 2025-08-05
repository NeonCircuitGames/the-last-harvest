import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
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
    gameOverviewTitle: "SOBREVIVE AL APOCALIPSIS",
    gameOverviewSubtitle: "En un mundo donde la radiación ha transformado todo",
    gameOverviewDesc: "The Last Harvest te coloca en el centro de un mundo post-apocalíptico donde debes cultivar alimentos radiactivos, explorar tierras devastadas y tomar decisiones morales que determinarán el futuro de la humanidad.",
    
    // Features
    featuresTitle: "CARACTERÍSTICAS DEL JUEGO",
    feature1Title: "Agricultura Nuclear",
    feature1Desc: "Cultiva plantas mutadas y experimenta con semillas radiactivas",
    feature2Title: "Exploración del Yermo",
    feature2Desc: "Descubre secretos ocultos en las tierras devastadas",
    feature3Title: "Decisiones Morales",
    feature3Desc: "Tus elecciones determinarán múltiples finales posibles",
    feature4Title: "Construcción de Refugio",
    feature4Desc: "Mejora y expande tu hogar en el mundo post-apocalíptico",
    feature5Title: "Combate Táctico",
    feature5Desc: "Enfrenta criaturas mutantes y otros supervivientes",
    feature6Title: "Narrativa Profunda",
    feature6Desc: "Una historia rica con personajes complejos y giros inesperados",
    
    // CTA Section
    ctaTitle: "¿LISTO PARA LA COSECHA FINAL?",
    ctaSubtitle: "Únete a miles de supervivientes y recibe contenido exclusivo",
    subscribeButton: "Suscribirse para Avances",
    ctaWishlist: "Añadir a Wishlist",
    
    // Community Section
    communityTitle: "ÚNETE A LA COMUNIDAD DE SUPERVIVIENTES",
    communitySubtitle: "Recibe actualizaciones exclusivas, arte conceptual y acceso anticipado",
    emailPlaceholder: "tu@email.com",
    subscribeBtn: "Suscribirse",
    discord: "Discord",
    twitter: "Twitter",
    youtube: "YouTube",
    
    // Project Status
    projectStatusBadge: "En Desarrollo",
    projectStatusTitle: "ESTADO DEL PROYECTO",
    projectStatusPhase: "Pre-Alpha",
    projectStatusDescription: "The Last Harvest está en desarrollo activo. Actualmente en fase pre-alpha. Tu feedback puede moldear el destino del juego.",
    projectStatusProgress: "Completado",
    projectStatusRelease: "Lanzamiento",
    projectStatusCommunityTitle: "Únete a la Revolución",
    projectStatusCommunityDesc: "Conviértete en parte de la comunidad de supervivientes y ayuda a dar forma al futuro del juego.",
    projectStatusJoinTester: "Únete como Tester",
    
    // Footer
    studioName: "Neon Circuit Games",
    studioDesc: "Creadores de experiencias post-apocalípticas inmersivas",
    quickLinks: "Enlaces Rápidos",
    aboutGame: "Sobre el Juego",
    pressKit: "Kit de Prensa",
    contact: "Contacto",
    community: "Comunidad",
    support: "Soporte",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    cookies: "Cookies",
    platforms: "Plataformas",
    allRights: "Todos los derechos reservados."
  },
  en: {
    // Hero Section
    heroTitle: "THE LAST HARVEST",
    heroSlogan: "Save the future… or scorch it to the ground",
    heroSubtitle: "Farm in a post-nuclear world. Explore the radioactive wasteland. Make decisions that will determine humanity's fate.",
    watchTrailer: "Watch Trailer",
    steamWishlist: "Steam Wishlist",
    exploreGame: "Explore Game",
    
    // Game Overview
    gameOverviewTitle: "SURVIVE THE APOCALYPSE",
    gameOverviewSubtitle: "In a world where radiation has transformed everything",
    gameOverviewDesc: "The Last Harvest places you at the center of a post-apocalyptic world where you must grow radioactive crops, explore devastated lands, and make moral decisions that will determine humanity's future.",
    
    // Features
    featuresTitle: "GAME FEATURES",
    feature1Title: "Nuclear Farming",
    feature1Desc: "Grow mutated plants and experiment with radioactive seeds",
    feature2Title: "Wasteland Exploration",
    feature2Desc: "Discover hidden secrets in the devastated lands",
    feature3Title: "Moral Decisions",
    feature3Desc: "Your choices will determine multiple possible endings",
    feature4Title: "Shelter Building",
    feature4Desc: "Upgrade and expand your home in the post-apocalyptic world",
    feature5Title: "Tactical Combat",
    feature5Desc: "Face mutant creatures and other survivors",
    feature6Title: "Deep Narrative",
    feature6Desc: "A rich story with complex characters and unexpected twists",
    
    // CTA Section
    ctaTitle: "READY FOR THE FINAL HARVEST?",
    ctaSubtitle: "Join thousands of survivors and receive exclusive content",
    subscribeButton: "Subscribe for Updates",
    ctaWishlist: "Add to Wishlist",
    
    // Community Section
    communityTitle: "JOIN THE SURVIVOR COMMUNITY",
    communitySubtitle: "Get exclusive updates, concept art, and early access",
    emailPlaceholder: "your@email.com",
    subscribeBtn: "Subscribe",
    discord: "Discord",
    twitter: "Twitter",
    youtube: "YouTube",
    
    // Project Status
    projectStatusBadge: "In Development",
    projectStatusTitle: "PROJECT STATUS",
    projectStatusPhase: "Pre-Alpha",
    projectStatusDescription: "The Last Harvest is in active development. Currently in pre-alpha phase. Your feedback can shape the game's destiny.",
    projectStatusProgress: "Complete",
    projectStatusRelease: "Release",
    projectStatusCommunityTitle: "Join the Revolution",
    projectStatusCommunityDesc: "Become part of the survivor community and help shape the future of the game.",
    projectStatusJoinTester: "Join as Tester",
    
    // Footer
    studioName: "Neon Circuit Games",
    studioDesc: "Creators of immersive post-apocalyptic experiences",
    quickLinks: "Quick Links",
    aboutGame: "About Game",
    pressKit: "Press Kit",
    contact: "Contact",
    community: "Community",
    support: "Support",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    platforms: "Platforms",
    allRights: "All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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