import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeartHandshake, DollarSign, Award, Clock } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const pillars = [
  {
    icon: DollarSign,
    badge: 'Rentabilité Maximale',
    title: '0% de Commission à Vie',
    description:
      'Arrêtez de céder 25% à 30% de votre chiffre d’affaires aux plateformes. Avec votre propre site, 100% de la recette de vos commandes et réservations entre directement dans votre trésorerie.',
  },
  {
    icon: Zap,
    badge: 'Performance Tech',
    title: 'Vitesse Extrême & Google Maps',
    description:
      'Développé avec React et les standards modernes du web, votre site charge en moins d’une seconde. Couplé à notre balisage sémantique pour restaurants, vous grimpez au sommet des recherches locales.',
  },
  {
    icon: Clock,
    badge: 'Zéro Perte de Temps',
    title: 'Clé en Main en 7 Jours Ouvrés',
    description:
      'Vous avez un restaurant à gérer, pas du code à écrire. Transmettez-nous votre carte et vos photos : nous livrons votre site complet, testé et prêt à encaisser dès la première semaine.',
  },
  {
    icon: HeartHandshake,
    badge: 'Proximité & Sérénité',
    title: 'Support WhatsApp Réactif 7j/7',
    description:
      'Un changement de tarif ? Une fermeture pour congés ? Une nouvelle formule du midi ? Un simple message WhatsApp à notre équipe et vos modifications sont appliquées le jour même.',
  },
];

const WhyMe = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="why-me"
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className="py-20 md:py-28 bg-[#060A17] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs md:text-sm font-semibold tracking-wide uppercase mb-4">
            <Award className="w-4 h-4 text-turquoise" />
            L’Excellence YonYa Labs
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Pourquoi les restaurateurs <span className="text-gradient-turquoise">nous font confiance</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/70">
            Nous ne sommes pas une agence web généraliste. Nous sommes spécialisés dans les défis économiques et opérationnels de la restauration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl p-7 bg-[#0B132B] border border-white/10 hover:border-turquoise/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-xl bg-turquoise/15 text-turquoise group-hover:bg-turquoise group-hover:text-[#060A17] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-semibold text-turquoise uppercase tracking-wider mb-2">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyMe;
