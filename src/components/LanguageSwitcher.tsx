import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
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