import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-carbon/80 border-neon/30 hover:bg-neon/20 text-foreground"
        >
          <Globe className="w-4 h-4 mr-2" />
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-carbon border-neon/30">
        <DropdownMenuItem 
          onClick={() => setLanguage('es')}
          className="text-foreground hover:bg-neon/20 cursor-pointer"
        >
          Español (ES)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className="text-foreground hover:bg-neon/20 cursor-pointer"
        >
          English (EN)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};