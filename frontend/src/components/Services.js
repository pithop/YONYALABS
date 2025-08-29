// src/components/Services.js

import React, { useState } from 'react';
import { LayoutTemplate, ShoppingCart, Codepen, Check, ArrowRight, Star } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Helmet } from 'react-helmet-async';

const servicesData = {
  "Pack Complet": {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Pack Complet",
    price: "900 €",
    subtitle: "La solution tout-en-un pour digitaliser votre restaurant.",
    description: "Augmentez vos ventes, simplifiez votre gestion et fidélisez votre clientèle avec une présence en ligne complète et professionnelle.",
    features: [
      "Site multi-pages sur-mesure",
      "Back-office pour gérer vos menus",
      "Système de réservation intégré",
      "Option de commande en ligne"
    ],
    cta: "Choisir le Pack Complet",
    popular: true,
  },
  "Pack Vitrine": {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Pack Vitrine",
    price: "250 €",
    subtitle: "Votre présence essentielle sur le web.",
    description: "Marquez votre présence en ligne et soyez facilement trouvable par vos futurs clients grâce à un site élégant et efficace.",
    features: [
      "Site professionnel \"one-page\"",
      "Menu accessible par QR Code",
      "Liens vers vos réseaux sociaux",
      "Bouton d'action WhatsApp"
    ],
    cta: "Opter pour le Pack Vitrine",
    popular: false,
  },
  "Pack Sur Mesure": {
    icon: <Codepen className="w-8 h-8" />,
    title: "Pack Sur Mesure",
    price: "Sur Devis",
    subtitle: "Une solution unique, conçue pour vous.",
    description: "Nous développons des fonctionnalités spécifiques pour répondre aux défis uniques de votre établissement et optimiser vos opérations.",
    features: [
      "Application mobile dédiée",
      "Système de gestion de stock",
      "Automatisation de processus",
      "Et bien plus selon vos besoins"
    ],
    cta: "Demander un devis",
    popular: false,
  },
};

const Services = () => {
  const [activeService, setActiveService] = useState("Pack Complet");
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const ServiceContent = servicesData[activeService];

  return (
    <>
      <Helmet>
        <title>YonYa Labs | Création de Sites Web d'Exception pour Restaurants</title>
        <meta name="description" content="YonYa Labs conçoit des sites internet sur mesure pour les restaurateurs en France. Site vitrine, commande en ligne, réservation. Sublimez votre présence en ligne." />
      </Helmet>
    <section 
      id="services" 
      ref={ref} 
      className="py-20 sm:py-28 bg-slate-900 text-white overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        
        <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Une solution pour chaque ambition
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Choisissez le pack qui correspond parfaitement à vos objectifs et à votre budget.
            </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 bg-slate-800 p-2 rounded-full">
            {Object.keys(servicesData).map((serviceName) => (
              <button
                key={serviceName}
                onClick={() => setActiveService(serviceName)}
                className={`relative px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                  activeService === serviceName 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeService === serviceName && (
                  <span className="absolute inset-0 bg-orange-500 rounded-full z-0" 
                        style={{
                            transform: 'translateZ(0)',
                            transition: 'all 0.3s ease-in-out'
                        }}>
                  </span>
                )}
                <span className="relative z-10 flex items-center">
                    {servicesData[serviceName].popular && <Star className="w-4 h-4 mr-2 text-yellow-400" />}
                    {serviceName}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 p-8 sm:p-12 rounded-2xl shadow-2xl shadow-slate-950/50 transition-all duration-500 ease-in-out`}
                 key={activeService} // This key forces re-render on change for animations
                 style={{
                    animation: 'fadeIn 0.5s ease-in-out'
                 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {/* Left Side: Info */}
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <div className="bg-slate-700 p-3 rounded-full text-orange-400">
                                {ServiceContent.icon}
                            </div>
                             {ServiceContent.popular && (
                                <span className="ml-4 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">LE PLUS POPULAIRE</span>
                            )}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{ServiceContent.title}</h3>
                        <p className="text-slate-300 mb-6">{ServiceContent.subtitle}</p>
                        <p className="text-5xl font-bold text-orange-400 mb-8">{ServiceContent.price}</p>
                        <p className="text-slate-400 flex-grow">{ServiceContent.description}</p>
                    </div>

                    {/* Right Side: Features */}
                    <div className="border-t border-slate-700 md:border-t-0 md:border-l md:pl-12 pt-8 md:pt-0">
                        <p className="font-semibold text-white mb-6">Inclus dans ce pack :</p>
                        <ul className="space-y-4">
                            {ServiceContent.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-slate-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a 
                            href="#contact"
                            className="inline-flex items-center justify-center w-full mt-10 bg-orange-500 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20"
                        >
                            {ServiceContent.cta}
                            <ArrowRight className="w-5 h-5 ml-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;