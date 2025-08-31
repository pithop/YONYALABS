import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Monitor, Wrench } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const services = {
    'Pack Complet': {
        icon: Package,
        title: 'Pack Complet à 900€',
        description: 'La solution tout-en-un pour une présence en ligne dominante, de la réservation à la commande en ligne.',
        features: ['Site web ultra-moderne et responsive', 'Système de réservation de table intégré', 'Module de commande en ligne (Click & Collect)', 'Menu digital interactif avec QR code', 'Optimisation pour le référencement (SEO)'],
        cta: 'Je veux le pack complet',
    },
    'Pack Vitrine': {
        icon: Monitor,
        title: 'Pack Site Vitrine',
        description: 'Présentez votre restaurant, votre menu et votre ambiance avec un site web élégant et professionnel.',
        features: ['Design sur mesure représentant votre identité', 'Galerie photo et vidéo de haute qualité', 'Menu en ligne facile à mettre à jour', 'Formulaire de contact et plan d\'accès', 'Performances de chargement rapides'],
        cta: 'Créer mon site vitrine',
    },
    'Pack Sur Mesure': {
        icon: Wrench,
        title: 'Développement Sur Mesure',
        description: 'Une fonctionnalité unique ? Un système de gestion interne ? Nous développons la solution logicielle adaptée à vos ambitions.',
        features: ['Analyse de vos besoins spécifiques', 'Développement d\'applications web et mobiles', 'Intégration avec vos outils existants (POS, etc.)', 'Tableaux de bord de suivi personnalisés', 'Maintenance et support évolutif'],
        cta: 'Demander un devis personnalisé',
    },
};

const Services = () => {
    const [activeTab, setActiveTab] = useState('Pack Complet');
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const selectedService = services[activeTab];

    // On définit l'animation pour la section entière. C'est la SEULE animation de scroll nécessaire.
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            id="services"
            className="py-20 bg-white"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <div className="container mx-auto px-4">
                {/* CORRECTION : On a retiré `motion`, `variants`, `initial` et `animate` de cette div. C'est maintenant une div normale. */}
                <div className="text-center mb-12">
                    {/* CORRECTION : `motion.h2` et `motion.p` redeviennent des balises normales `h2` et `p`. */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy">
                        Une Solution pour Chaque <span className="text-turquoise">Ambition</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Que vous débutiez ou que vous soyez prêt à passer à la vitesse supérieure, nous avons le service qu'il vous faut.
                    </p>
                </div>

                {/* CORRECTION : On a aussi retiré les props d'animation de ce bloc. */}
                <div className="flex justify-center mb-12">
                    <div className="flex space-x-2 md:space-x-4 p-2 bg-light-gray rounded-lg">
                        {Object.keys(services).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-md transition-colors duration-300
                                ${activeTab === tab ? 'bg-turquoise/10 text-dark-navy shadow' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Cette animation est différente, elle gère le changement d'onglet, donc on la conserve. */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <selectedService.icon className="w-10 h-10 text-turquoise" />
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
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-transform duration-200 bg-turquoise rounded-lg shadow-lg hover:bg-teal hover:scale-105">
                                {selectedService.cta}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Services;