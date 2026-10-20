import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Monitor, ShoppingBag, Sparkles, ArrowRight, Star } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const tiers = [
  {
    id: 'vitrine',
    name: 'Pack Vitrine',
    badge: 'Essentiel Visibilité',
    price: '500 €',
    priceSub: 'Paiement unique • Propriétaire à 100%',
    description: 'Idéal pour asseoir une présence numérique d’exception et attirer de nouveaux clients via Google.',
    highlight: false,
    icon: Monitor,
    features: [
      'Site web sur mesure 100% adapté aux smartphones',
      'Menu digital interactif avec QR code pour tables',
      'Galerie photos culinaires haute définition',
      'Intégration Google Maps & horaires synchronisés',
      'Formulaire de contact & demande de devis groupe',
      'Vitesse de chargement ultra-rapide (score 95+)',
      'Hébergement & certificat SSL sécurisé',
    ],
    ctaText: 'Choisir le Pack Vitrine',
    ctaLink: '/questionnaire?pack=vitrine',
  },
  {
    id: 'complet',
    name: 'Pack Complet',
    badge: 'RECOMMANDÉ • LE PLUS POPULAIRE',
    price: '900 €',
    priceSub: 'Paiement unique • 0% de commission à vie',
    description: 'La solution tout-en-un pour générer du chiffre d’affaires direct sans dépendre des plateformes.',
    highlight: true,
    icon: ShoppingBag,
    features: [
      'Tout le contenu du Pack Vitrine inclus',
      'Module de réservation directe (0€ de commission)',
      'Commande en ligne Click & Collect intégrée (0% commission)',
      'Paiement sécurisé en ligne ou sur place au retrait',
      'Gestion autonome de votre carte depuis votre smartphone',
      'Référencement SEO local avancé Schema.org (Google Maps n°1)',
      'Notifications instantanées des commandes par email & SMS',
      'Formation personnalisée de votre équipe (30 min)',
    ],
    ctaText: 'Sélectionner le Pack Complet',
    ctaLink: '/questionnaire?pack=complet',
  },
  {
    id: 'sur-mesure',
    name: 'Pack Sur Mesure',
    badge: 'Grands Comptes & Franchises',
    price: 'Sur Devis',
    priceSub: 'Étude personnalisée sous 24h',
    description: 'Conçu pour les groupes de restauration, franchises et projets nécessitant des intégrations poussées.',
    highlight: false,
    icon: Sparkles,
    features: [
      'Multi-établissements & gestion centralisée de carte',
      'Intégration logiciel de caisse (L’Addition, Zelty, Tiller...)',
      'Programme de fidélité & cartes cadeaux dématérialisées',
      'Application web progressive (PWA) installable',
      'Tableaux de bord analytiques & reporting de ventes',
      'Support technique prioritaire WhatsApp 7j/7',
      'Maintenance évolutive dédiée',
    ],
    ctaText: 'Demander une étude sur mesure',
    ctaLink: '/questionnaire?pack=sur-mesure',
  },
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="services"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="py-20 md:py-28 bg-[#060A17] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs md:text-sm font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-turquoise" />
            Tarifs Transparents & Sans Surprise
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Des offres claires pensées pour la <span className="text-gradient-turquoise">rentabilité</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/70">
            Aucun pourcentage sur vos ventes. Aucun abonnement caché. Vous êtes propriétaire de votre site à 100%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 md:p-8 transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-[#111936] to-[#0B132B] border-2 border-turquoise shadow-glow-turquoise lg:-translate-y-3 z-10'
                    : 'bg-[#0B132B]/80 border border-white/10 hover:border-white/25 hover:-translate-y-1'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-turquoise text-[#060A17] font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#060A17]" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${tier.highlight ? 'bg-turquoise/20 text-turquoise' : 'bg-white/5 text-white/80'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {!tier.highlight && (
                      <span className="text-xs font-semibold text-white/60 tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-white/70 min-h-[40px] mb-6">{tier.description}</p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-white">{tier.price}</span>
                    </div>
                    <span className="text-xs text-white/60 mt-1 block">{tier.priceSub}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white/85">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-turquoise' : 'text-emerald-400'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    to={tier.ctaLink}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold transition-all duration-200 ${
                      tier.highlight
                        ? 'bg-turquoise text-white hover:bg-teal shadow-lg hover:scale-[1.02]'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
