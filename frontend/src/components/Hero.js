import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Search, ArrowRight, Star, ShieldCheck, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#060A17] via-[#0B132B] to-[#0E1738] text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden"
    >
      {/* Glow d'ambiance d'arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-turquoise/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-5xl">
        {/* Badge de confiance vérifié */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium mb-8 text-white/90 shadow-lg"
        >
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-white">4.9/5</span>
          <span className="text-white/40">•</span>
          <span className="text-white/80">+25 Restaurants & Commerces digitalisés</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-turquoise/20 text-turquoise text-[11px] font-bold">
            0% Commission
          </span>
        </motion.div>

        {/* Titre Principal percutant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Arrêtez de céder <span className="text-gradient-gold">30% de marge</span> aux plateformes. <br className="hidden sm:block" />
            <span className="text-gradient-turquoise">Votre site d'exception</span> en 7 jours.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-white/75 font-normal leading-relaxed">
            YonYa Labs conçoit des sites web ultra-rapides et immersifs pensés pour remplir vos tables. 
            Réservation directe <strong>sans intermédiaire</strong>, commande Click & Collect et référencement <strong>Google Maps n°1</strong>.
          </p>
        </motion.div>

        {/* Boutons d'Action Clés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            to="/questionnaire?pack=complet"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-turquoise rounded-xl shadow-glow-turquoise hover:bg-teal hover:scale-105 active:scale-95"
          >
            <span>Demander mon devis gratuit</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold text-white/90 transition-all duration-200 bg-white/5 border border-white/15 rounded-xl hover:bg-white/10 hover:border-turquoise/50 hover:text-white"
          >
            <span>Voir nos 8 réalisations</span>
          </a>
        </motion.div>

        {/* Preuves d'impact / Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-turquoise">99<span className="text-lg font-bold text-white/60">/100</span></p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-white/70">Google PageSpeed</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-emerald-400">0%</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-white/70">Commission prélevée</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-amber-400">7 Jours</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-white/70">Délai moyen de livraison</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <p className="text-3xl sm:text-4xl font-black text-turquoise">+42%</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-white/70">Réservations directes</p>
          </div>
        </motion.div>

        {/* Mini réassurance */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-turquoise" />
            Propriétaire à 100% de votre site
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            Sans abonnement obligatoire
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Search className="w-4 h-4 text-turquoise" />
            SEO Google Maps inclus
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
