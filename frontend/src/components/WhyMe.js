// src/components/WhyMe.js

import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Gem, Zap, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Gem className="w-10 h-10 text-orange-500" />,
    title: "Design sur Mesure & Premium",
    description: "Nous ne faisons pas que des sites, nous créons des expériences digitales uniques qui captivent vos clients et incarnent l'âme de votre restaurant."
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: "Performance et Rapidité",
    description: "Un site lent, c'est un client perdu. Nous optimisons chaque ligne de code pour garantir une vitesse de chargement fulgurante et une fluidité exemplaire."
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Partenaire, Pas Prestataire",
    description: "Nous collaborons étroitement avec vous à chaque étape. Votre vision est notre priorité, et votre succès est notre plus grande fierté."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    title: "Expertise Technique Solide",
    description: "Avec une maîtrise de React, Tailwind CSS et des meilleures pratiques de développement, nous construisons des solutions robustes, sécurisées et prêtes pour l'avenir."
  }
];

const WhyMe = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="whyme" 
      ref={ref}
      className={`py-20 sm:py-28 bg-slate-50 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Pourquoi nous choisir ?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            L'excellence digitale au service de votre passion
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nous combinons expertise technique et sensibilité créative pour offrir des résultats qui dépassent vos attentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100">
                  {feature.icon}
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;