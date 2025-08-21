import React from "react";
import { Globe, ShoppingCart, Settings } from "lucide-react";

const Services = () => {
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
        "Horaires, contact, réseaux sociaux",
        "Avis Google intégrés"
      ],
      objective: "➡ Objectif : attirer de nouveaux clients et donner envie de venir chez vous"
    },
    {
      title: "Sites complets avec réservation & commandes",
      price: "(900€)",
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      features: [
        "Back-office simple pour modifier vos menus",
        "Système de réservation en ligne",
        "Commande à emporter",
        "Paiement en ligne (optionnel)",
        "Compatible tous appareils"
      ],
      objective: "➡ Objectif : augmenter vos ventes et réduire la charge de travail"
    },
    {
      title: "Logiciels sur mesure pour automatiser votre gestion",
      price: "(Devis personnalisé)",
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      features: [
        "Gestion des stocks et alertes",
        "Système de suivi des commandes",
        "Automatisation de la comptabilité/facturation",
        "Statistiques de ventes"
      ],
      objective: "➡ Objectif : vous faire gagner du temps et réduire vos erreurs"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          🚀 Ce que je propose
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white border border-slate-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-orange-500 font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-slate-600 font-medium bg-slate-50 p-3 rounded-md">
                {service.objective}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;