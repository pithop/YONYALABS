import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Receipt,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  DollarSign,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Estimator = () => {
  const [dailyCovers, setDailyCovers] = useState(50);
  const [averageBasket, setAverageBasket] = useState(30);
  const [hasDeliveryPlatforms, setHasDeliveryPlatforms] = useState(true);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const stats = useMemo(() => {
    const monthlyCovers = dailyCovers * 30;
    const monthlyRevenue = monthlyCovers * averageBasket;

    // Commission estimée TheFork sur les réservations (env 2€ par couvert réservé, ~40% des couverts)
    const theForkCommissions = monthlyCovers * 0.4 * 2.5;

    // Si le restaurateur est sur UberEats/Deliveroo : ~25% du CA est en livraison avec 30% de commission prélevée
    const platformCommission = hasDeliveryPlatforms
      ? monthlyRevenue * 0.25 * 0.30
      : 0;

    const totalMonthlyBleed = theForkCommissions + platformCommission;
    const totalAnnualBleed = totalMonthlyBleed * 12;

    // Chiffre d'affaires additionnel grâce au site ultra-rapide et au SEO Google Maps (+15% de réservations directes)
    const extraDirectRevenue = monthlyRevenue * 0.15;
    const totalAnnualBenefit = totalAnnualBleed + extraDirectRevenue * 12;

    return {
      monthlyRevenue,
      theForkCommissions,
      platformCommission,
      totalMonthlyBleed,
      totalAnnualBleed,
      extraDirectRevenue,
      totalAnnualBenefit,
    };
  }, [dailyCovers, averageBasket, hasDeliveryPlatforms]);

  return (
    <section
      id="simulator"
      ref={ref}
      className="py-20 md:py-32 bg-[#080D19] text-white relative overflow-hidden"
    >
      {/* Halos d'ambiance */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Titre & Accroche */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase mb-4">
            <AlertTriangle className="w-4 h-4" />
            Fin du racket des intermédiaires
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Combien perdez-vous <span className="text-red-400">chaque mois</span> ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            Ajustez les curseurs selon votre établissement pour visualiser la somme exacte que vous reversez aux plateformes tierces... et combien vous récupérez avec YonYa Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Colonne Gauche : Paramètres du Restaurant */}
          <div className="lg:col-span-6 bg-[#0E1529]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-7">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-turquoise"></span>
              Profil de votre restaurant
            </h3>

            {/* Slider 1 : Couverts par jour */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-white/80">
                  Couverts moyens par jour :
                </label>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-turquoise font-black text-sm">
                  {dailyCovers} couverts / jour
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={dailyCovers}
                onChange={(e) => setDailyCovers(Number(e.target.value))}
                className="w-full accent-turquoise h-2 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-1">
                <span>15 couverts</span>
                <span>250 couverts</span>
              </div>
            </div>

            {/* Slider 2 : Panier moyen */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-semibold text-white/80">
                  Addition moyenne par couvert :
                </label>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-amber-400 font-black text-sm">
                  {averageBasket} € / personne
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="120"
                step="2"
                value={averageBasket}
                onChange={(e) => setAverageBasket(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-white/10 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-1">
                <span>12 € (Bistrot/Street)</span>
                <span>120 € (Gastronomique)</span>
              </div>
            </div>

            {/* Toggle : Présence sur UberEats / Deliveroo */}
            <div className="pt-2">
              <label className="text-xs sm:text-sm font-semibold text-white/80 block mb-2">
                Êtes-vous présent sur Uber Eats ou Deliveroo ?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHasDeliveryPlatforms(true)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    hasDeliveryPlatforms
                      ? 'bg-red-500/15 border-red-500/40 text-red-300 shadow-sm'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                >
                  Oui (25% à 30% de com.)
                </button>
                <button
                  type="button"
                  onClick={() => setHasDeliveryPlatforms(false)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    !hasDeliveryPlatforms
                      ? 'bg-turquoise/15 border-turquoise/40 text-turquoise shadow-sm'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                  }`}
                >
                  Non (Uniquement sur place)
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-white/70 space-y-1.5">
              <p className="font-semibold text-white">Chiffre d'affaires mensuel estimé :</p>
              <p className="text-2xl font-black text-white">{formatCurrency(stats.monthlyRevenue)}</p>
              <p className="text-[11px] text-white/50">
                Soit environ {dailyCovers * 30} couverts servis chaque mois.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Le Ticket de Caisse Comparatif Immersif */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#0D152A] rounded-3xl p-6 sm:p-8 border-2 border-dashed border-white/20 shadow-2xl relative font-sans">
              {/* En-tête du Ticket */}
              <div className="text-center border-b border-dashed border-white/20 pb-5 mb-5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 text-white/80">
                  <Receipt className="w-5 h-5" />
                </div>
                <h4 className="font-black text-base uppercase tracking-wider text-white">
                  Audit Financier • Votre Restaurant
                </h4>
                <p className="text-[11px] text-white/50">Simulation certifiée 0% commission</p>
              </div>

              {/* Lignes du ticket : Ce que prennent les plateformes */}
              <div className="space-y-3 text-xs sm:text-sm border-b border-dashed border-white/20 pb-5 mb-5">
                <div className="flex justify-between items-center text-white/70">
                  <span>Commissions TheFork / Zenchef :</span>
                  <span className="font-bold text-red-400">
                    - {formatCurrency(stats.theForkCommissions)} / mois
                  </span>
                </div>

                {hasDeliveryPlatforms && (
                  <div className="flex justify-between items-center text-white/70">
                    <span>Commissions UberEats / Deliveroo (30%) :</span>
                    <span className="font-bold text-red-400">
                      - {formatCurrency(stats.platformCommission)} / mois
                    </span>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex justify-between items-center text-red-300 font-bold">
                  <span>Total prélevé chaque mois :</span>
                  <span className="text-base text-red-400 font-black">
                    - {formatCurrency(stats.totalMonthlyBleed)}
                  </span>
                </div>
              </div>

              {/* Lignes du ticket : Ce que YonYa Labs vous fait gagner */}
              <div className="space-y-3 text-xs sm:text-sm border-b border-dashed border-white/20 pb-5 mb-6">
                <div className="flex justify-between items-center text-white/80">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Commissions avec votre propre site :
                  </span>
                  <span className="font-bold text-emerald-400">0,00 € (0%)</span>
                </div>

                <div className="flex justify-between items-center text-white/80">
                  <span className="flex items-center gap-1.5 text-turquoise font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Nouvelles réservations (Google Maps #1) :
                  </span>
                  <span className="font-bold text-turquoise">
                    + {formatCurrency(stats.extraDirectRevenue)} / mois
                  </span>
                </div>

                {/* Grand Total Économisé */}
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center">
                  <p className="text-xs uppercase font-extrabold tracking-wider text-emerald-300 mb-1">
                    Bénéfice Net Récupéré par An :
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-emerald-400">
                    + {formatCurrency(stats.totalAnnualBenefit)}
                  </p>
                  <p className="text-[11px] text-white/60 mt-1">
                    Directement dans votre trésorerie, sans intermédiaire.
                  </p>
                </div>
              </div>

              {/* CTA direct depuis le ticket */}
              <Link
                to="/questionnaire?pack=complet"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold text-sm text-navy-darker bg-turquoise hover:bg-turquoise-light transition-all shadow-glow-turquoise active:scale-95"
              >
                <span>Récupérer cette marge avec le Pack Complet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
