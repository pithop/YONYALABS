import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Globe, ShoppingBag, Sparkles, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Estimator = () => {
  const [averageBill, setAverageBill] = useState(35);
  const [dailyCovers, setDailyCovers] = useState(60);
  const [selectedPackage, setSelectedPackage] = useState('complet');
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const { additionalMonthly, savedCommissions, annualImpact, details, isCustom } = useMemo(() => {
    const monthlyCovers = dailyCovers * 30;
    const monthlyTurnover = monthlyCovers * averageBill;

    if (selectedPackage === 'vitrine') {
      const extraCovers = Math.round(monthlyCovers * 0.10);
      const extraRevenue = extraCovers * averageBill;
      return {
        additionalMonthly: extraRevenue,
        savedCommissions: 0,
        annualImpact: extraRevenue * 12,
        details: `Basé sur +10% de réservations grâce au référencement Google Maps et à l'image de marque (env. ${extraCovers} couverts/mois).`,
        isCustom: false,
      };
    }

    if (selectedPackage === 'complet') {
      const extraCovers = Math.round(monthlyCovers * 0.15);
      const revenueFromCovers = extraCovers * averageBill;
      // Estimation de 12 commandes directes par jour à 80% du panier moyen
      const directOrdersPerMonth = 12 * 30;
      const directOrderValue = averageBill * 0.85;
      const directOrdersRevenue = directOrdersPerMonth * directOrderValue;
      // 25% de commission sauvée par rapport à Deliveroo/Uber Eats sur ces commandes
      const commissionSaved = directOrdersRevenue * 0.25;
      const totalAdditional = revenueFromCovers + directOrdersRevenue;

      return {
        additionalMonthly: totalAdditional,
        savedCommissions: commissionSaved,
        annualImpact: (totalAdditional + commissionSaved) * 12,
        details: `Inclut +${extraCovers} couverts/mois et 360 commandes directes Click & Collect sans passer par Uber Eats.`,
        isCustom: false,
      };
    }

    return {
      additionalMonthly: 0,
      savedCommissions: 0,
      annualImpact: 0,
      details: 'Architecture complexe, intégration caisse et multi-établissements. Étude de ROI sur mesure.',
      isCustom: true,
    };
  }, [averageBill, dailyCovers, selectedPackage]);

  const packages = [
    {
      id: 'vitrine',
      label: 'Pack Vitrine (500 €)',
      sub: 'Visibilité & Réservations',
      icon: Globe,
    },
    {
      id: 'complet',
      label: 'Pack Complet (900 €)',
      sub: 'Click & Collect + 0% Commission',
      icon: ShoppingBag,
    },
    {
      id: 'sur-mesure',
      label: 'Sur Mesure',
      sub: 'Multi-sites & Intégration Caisse',
      icon: Sparkles,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="estimator"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="py-20 md:py-28 bg-[#0B132B] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs md:text-sm font-semibold tracking-wide uppercase mb-4">
            <Calculator className="w-4 h-4 text-turquoise" />
            Simulateur de Rentabilité
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Combien va vous rapporter <span className="text-gradient-turquoise">votre nouveau site</span> ?
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Ajustez vos chiffres et visualisez concrètement votre retour sur investissement immédiat.
          </p>
        </div>

        <div className="bg-[#111936] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Colonne Contrôles */}
            <div className="lg:col-span-7 space-y-8">
              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="averageBill" className="text-sm sm:text-base font-semibold text-white/90">
                      Ticket moyen par client
                    </label>
                    <span className="text-base sm:text-lg font-bold text-turquoise bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                      {formatCurrency(averageBill)}
                    </span>
                  </div>
                  <input
                    type="range"
                    id="averageBill"
                    min="15"
                    max="150"
                    step="1"
                    value={averageBill}
                    onChange={(e) => setAverageBill(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1CC5B7]"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-1">
                    <span>15 €</span>
                    <span>80 €</span>
                    <span>150 €</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="dailyCovers" className="text-sm sm:text-base font-semibold text-white/90">
                      Couverts servis par jour
                    </label>
                    <span className="text-base sm:text-lg font-bold text-turquoise bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                      {dailyCovers} couverts / jour
                    </span>
                  </div>
                  <input
                    type="range"
                    id="dailyCovers"
                    min="10"
                    max="300"
                    step="5"
                    value={dailyCovers}
                    onChange={(e) => setDailyCovers(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1CC5B7]"
                  />
                  <div className="flex justify-between text-xs text-white/40 mt-1">
                    <span>10 cvts</span>
                    <span>150 cvts</span>
                    <span>300 cvts</span>
                  </div>
                </div>
              </div>

              {/* Sélection Pack */}
              <div>
                <p className="text-sm font-semibold text-white/90 mb-3">Sélectionnez la formule à simuler :</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {packages.map((pkg) => {
                    const Icon = pkg.icon;
                    const isSelected = selectedPackage === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-turquoise/15 border-turquoise text-white shadow-glow-turquoise'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/[0.08] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-turquoise' : 'text-white/60'}`} />
                          <span className="text-xs font-bold text-white">{pkg.label}</span>
                        </div>
                        <span className="text-[11px] text-white/50">{pkg.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Colonne Résultats ROI */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#060A17] to-[#0B132B] p-6 sm:p-8 rounded-2xl border border-white/15 shadow-xl flex flex-col justify-between">
              {isCustom ? (
                <div className="text-center py-6">
                  <Sparkles className="w-12 h-12 text-turquoise mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Projet Personnalisé</h4>
                  <p className="text-sm text-white/70 mb-6">
                    Multi-adresses, synchronisation caisse ou Click & Collect de masse : nous bâtissons une solution sur mesure à forte rentabilité.
                  </p>
                  <Link
                    to="/questionnaire?pack=sur-mesure"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-white bg-turquoise hover:bg-teal transition-all"
                  >
                    <span>Demander une étude personnalisée</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block mb-1">
                      Revenu additionnel estimé
                    </span>
                    <p className="text-4xl sm:text-5xl font-black text-gradient-turquoise">
                      +{formatCurrency(additionalMonthly)} <span className="text-sm font-semibold text-white/60">/ mois</span>
                    </p>
                    <p className="text-xs text-white/60 mt-2">{details}</p>
                  </div>

                  {savedCommissions > 0 && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>Commissions plateformes économisées</span>
                      </div>
                      <p className="text-2xl font-black text-emerald-400">
                        ~{formatCurrency(savedCommissions)} <span className="text-xs font-medium text-emerald-300">/ mois</span>
                      </p>
                      <p className="text-[11px] text-white/60 mt-1">
                        Argent qui reste 100% dans votre poche au lieu d'aller à Uber Eats.
                      </p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-white/50 block">Impact annuel estimé</span>
                      <span className="text-lg font-bold text-amber-400">+{formatCurrency(annualImpact)} / an</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-turquoise/20 text-turquoise text-xs font-bold">
                      Rentabilisé en &lt; 15 jours
                    </span>
                  </div>

                  <Link
                    to={`/questionnaire?pack=${selectedPackage}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-turquoise hover:bg-teal transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <span>Valider mon pack & lancer mon projet</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Estimator;
