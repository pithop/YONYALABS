import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, CheckCircle2, XCircle, Zap, TrendingUp, Search } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const metrics = [
  { label: 'Performance', standard: 65, yonya: 98, unit: '/100' },
  { label: 'SEO & Référencement', standard: 50, yonya: 96, unit: '/100' },
  { label: 'Accessibilité Mobile', standard: 72, yonya: 100, unit: '/100' },
  { label: 'Bonnes Pratiques Web', standard: 68, yonya: 100, unit: '/100' },
];

const Example = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="example"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="py-20 md:py-28 bg-[#0B132B] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs md:text-sm font-semibold tracking-wide uppercase mb-4">
            <Gauge className="w-4 h-4 text-turquoise" />
            Audit Technique Google PageSpeed
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            La vitesse n’est pas un détail : <br className="hidden sm:block" />
            c’est votre <span className="text-gradient-turquoise">taux de remplissage</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Sur smartphone, 53% des clients abandonnent un site qui met plus de 3 secondes à charger. 
            Découvrez l’écart technique entre un site ordinaire et l'ingénierie YonYa Labs.
          </p>
        </div>

        {/* Grille comparative 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Carte Site Standard / Agence classique */}
          <div className="rounded-2xl p-7 sm:p-9 bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block">
                    La moyenne du marché
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white/80">Site Restaurant Ordinaire</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold">
                  ✕
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                      <span className="text-white/70 font-medium">{m.label}</span>
                      <span className="font-bold text-rose-400">{m.standard} {m.unit}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-500"
                        style={{ width: `${m.standard}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-white/60 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Temps de chargement lourd (3.8 à 6 secondes)</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Carte PDF illisible et pénible à zoomer sur mobile</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Invisible sur Google Maps face aux concurrents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Carte YonYa Labs Standard */}
          <div className="rounded-2xl p-7 sm:p-9 bg-gradient-to-b from-[#111936] to-[#0E1738] border-2 border-turquoise shadow-glow-turquoise flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-turquoise text-[#060A17] font-extrabold text-[11px] tracking-wider uppercase shadow-md">
              Score Certifié Google
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold text-turquoise uppercase tracking-wider block">
                    Notre engagement qualité
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Standard YonYa Labs</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-turquoise/20 flex items-center justify-center text-turquoise font-bold">
                  ✓
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                      <span className="text-white font-medium">{m.label}</span>
                      <span className="font-black text-emerald-400">{m.yonya} {m.unit}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-turquoise"
                        style={{ width: `${m.yonya}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-white/85 pt-4 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Affichage instantané en moins de 0.8 seconde</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Menu tactile interactif avec filtres et photos alléchantes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Balisage Schema.org pour truster le top 3 Google Maps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Baromètre d'impact commercial */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
            <Zap className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="text-2xl font-black text-white">&lt; 0.8s</p>
            <p className="text-xs text-white/60 mt-1">Vitesse de chargement mobile</p>
          </div>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
            <TrendingUp className="w-6 h-6 text-turquoise mx-auto mb-2" />
            <p className="text-2xl font-black text-white">+42%</p>
            <p className="text-xs text-white/60 mt-1">Taux de conversion moyen</p>
          </div>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
            <Search className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <p className="text-2xl font-black text-white">Top 3</p>
            <p className="text-xs text-white/60 mt-1">Positionnement moyen Google Maps</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Example;
