import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Crear el elemento de audio cuando el componente se monta
  useEffect(() => {
    // Para esta demo, usaremos un sonido ambient ficticio
    // En producción, deberías tener un archivo de audio real
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // En un caso real, aquí cargarías tu audio ambient
        // audioRef.current.src = "/audio/ambient-hero.mp3";
        // audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSound}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-12 h-12 rounded-full bg-carbon/80 backdrop-blur-sm border border-neon/30 hover:border-neon/60 hover:bg-carbon/90 transition-all duration-300 group"
      >
        {/* Glow effect when active */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 rounded-full bg-neon/20 animate-pulse"
            />
          )}
        </AnimatePresence>

        {/* Sound waves animation */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -inset-4"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-neon/30"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ 
                    scale: [1, 1.5, 2],
                    opacity: [0.6, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isPlaying ? [0, 5, -5, 0] : 0
          }}
          transition={{
            scale: { duration: 0.2 },
            rotate: { duration: 2, repeat: isPlaying ? Infinity : 0 }
          }}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-neon" />
          ) : (
            <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-neon transition-colors" />
          )}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "50%" }}
              animate={{ opacity: 1, y: 0, x: "50%" }}
              exit={{ opacity: 0, y: 10, x: "50%" }}
              className="absolute top-full right-1/2 translate-x-1/2 mt-2 px-3 py-1 bg-carbon border border-neon/30 rounded text-xs text-neon whitespace-nowrap"
            >
              {isPlaying ? "Silenciar ambiente" : "Activar ambiente"}
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
};