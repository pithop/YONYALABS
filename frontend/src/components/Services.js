import React from "react";
import { Globe, ShoppingCart, Settings } from "lucide-react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Services = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      title: "Sites vitrines",
      price: "(200-300 €)",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      features: [
        "Design moderne et adapté",
        "Présentation de votre restaurant",
        "Carte/menu en ligne",
        "Localisation Google Maps",
        "Avis Google intégrés"
      ],
      objective: "Attirer de nouveaux clients et donner envie de venir chez vous."
    },
    {
      title: "Sites complets",
      price: "(500€)",
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      features: [
        "Back-office simple pour gérer vos menus",
        "Système de réservation en ligne",
        "Commande à emporter",
        "Paiement en ligne (optionnel)",
      ],
      objective: "Augmenter vos ventes et réduire la charge de travail."
    },
    {
      title: "Logiciels sur mesure",
      price: "(Devis personnalisé)",
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      features: [
        "Gestion des stocks et alertes",
        "Système de suivi des commandes",
        "Automatisation de la comptabilité",
        "Statistiques de ventes"
      ],
      objective: "Vous faire gagner du temps et réduire vos erreurs."
    }
  ];

  return (
    <section 
        id="services" 
        ref={ref}
        className={`py-20 bg-slate-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          Ce que je propose
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-5">
                <div className="bg-orange-100 p-3 rounded-full">
                    {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-orange-500 font-semibold text-lg mb-5">
                {service.price}
              </p>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    </span>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-800">
                  Objectif : <span className="font-normal text-slate-600">{service.objective}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;