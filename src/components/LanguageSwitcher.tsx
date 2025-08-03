import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="bg-carbon/80 border-neon/30 hover:bg-neon/20 text-foreground"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'es' ? 'ES' : 'EN'}
    </Button>
  );
};