import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Activity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectStatus = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-carbon to-carbon/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(57, 255, 20, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-neon text-neon bg-neon/10">
            <Activity className="w-4 h-4 mr-2" />
            {t('projectStatusBadge')}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            {t('projectStatusTitle')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Status Info */}
          <Card className="p-8 bg-gradient-card border-border/50 shadow-neon/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon rounded-full animate-pulse" />
                <span className="text-sm font-medium text-neon">
                  {t('projectStatusPhase')}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('projectStatusDescription')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon">85%</div>
                  <div className="text-sm text-muted-foreground">{t('projectStatusProgress')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2024</div>
                  <div className="text-sm text-muted-foreground">{t('projectStatusRelease')}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t('projectStatusCommunityTitle')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('projectStatusCommunityDesc')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="neon" size="lg" className="group flex-1">
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t('projectStatusJoinTester')}
              </Button>
              
              <Button variant="outline" size="lg" className="group flex-1 border-purple-deep/50 text-purple-400 hover:bg-purple-deep/10">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Discord
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};