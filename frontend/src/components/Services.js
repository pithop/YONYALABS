import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importation du composant Link
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Package, Monitor, Wrench } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const services = {
  'Pack Complet': {
    icon: Package,
    title: 'Pack Complet — à partir de 900€',
    description:
      "La solution tout-en-un pour attirer plus de clients : visibilité Google, réservation et commande en ligne.",
    features: [
      'Site web moderne, rapide et 100% mobile',
      'Réservation de table intégrée',
      'Commande en ligne (Click & Collect)',
      'Menu digital interactif + QR code',
      'Optimisation SEO de base incluse',
    ],
    cta: 'Choisir le pack Complet',
    href: '/questionnaire?pack=complet',
  },
  'Pack Vitrine': {
    icon: Monitor,
    title: 'Pack Vitrine — à partir de 500€',
    description:
      "Idéal pour démarrer : présentez votre établissement, votre menu et vos informations clés avec style.",
    features: [
      'Design soigné qui reflète votre identité',
      'Pages essentielles (Accueil, Menu, Contact)',
      'Galerie photo/vidéo',
      'Formulaire de contact + plan d’accès',
      'Performances de chargement optimisées',
    ],
    cta: 'Créer mon site vitrine',
    href: '/questionnaire?pack=vitrine',
  },
  'Pack Sur Mesure': {
    icon: Wrench,
    title: 'Développement Sur Mesure — sur devis',
    description:
      "Fonctionnalités spécifiques ou intégrations avancées ? Nous créons la solution qui s’adapte à vos besoins.",
    features: [
      'Analyse détaillée de vos objectifs',
      "Développement d’applications web et mobiles",
      'Intégrations (POS, paiement, CRM…)',
      'Tableaux de bord & reporting personnalisés',
      'Maintenance évolutive et support dédié',
    ],
    cta: 'Parler à un expert',
    href: '/questionnaire?pack=sur-mesure',
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('Pack Complet');
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const selectedService = services[activeTab];
  const Icon = selectedService.icon;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="services"
      className="py-20 bg-white"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy">
            Une solution pour chaque <span className="text-turquoise">ambition</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Du site vitrine rapide à la commande en ligne complète, choisissez le pack qui accélère votre croissance.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 md:space-x-4 p-2 bg-light-gray rounded-lg">
            {Object.keys(services).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise/40
                  ${activeTab === tab ? 'bg-turquoise/10 text-dark-navy shadow' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-10 h-10 text-turquoise" />
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-navy">{selectedService.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-fresh-green mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                {/* Remplacement de <a> par <Link> */}
                <Link
                  to={selectedService.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-transform duration-200 bg-turquoise rounded-lg shadow-lg hover:bg-teal hover:scale-105 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
                >
                  {selectedService.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Services;