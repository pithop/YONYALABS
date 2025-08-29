// frontend/src/components/WhyMe.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Gem, Zap, Users, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const features = [
  { icon: <Gem className="w-10 h-10" />, title: "Design sur Mesure & Premium", description: "Nous créons des expériences digitales uniques qui captivent vos clients et incarnent l'âme de votre restaurant." },
  { icon: <Zap className="w-10 h-10" />, title: "Performance et Rapidité", description: "Nous optimisons chaque ligne de code pour garantir une vitesse de chargement fulgurante et une fluidité exemplaire." },
  { icon: <Users className="w-10 h-10" />, title: "Partenaire, Pas Prestataire", description: "Votre vision est notre priorité, et votre succès est notre plus grande fierté. Nous collaborons étroitement avec vous." },
  { icon: <ShieldCheck className="w-10 h-10" />, title: "Expertise Technique Solide", description: "Nous construisons des solutions robustes, sécurisées et prêtes pour l'avenir avec React et Tailwind CSS." }
];

const WhyMe = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>YonYa Labs | Création de Sites Web d'Exception pour Restaurants</title>
        <meta name="description" content="YonYa Labs conçoit des sites internet sur mesure pour les restaurateurs en France. Site vitrine, commande en ligne, réservation. Sublimez votre présence en ligne." />
      </Helmet>
    <section id="whyme" ref={ref} className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Pourquoi nous choisir ?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">L'excellence digitale au service de votre passion</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Nous combinons expertise technique et sensibilité créative pour des résultats qui dépassent vos attentes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {features.map((feature, index) => (
            <div 
              key={index} 
              // ANIMATION DÉCALÉE ICI
              className={`flex transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 transform transition-transform duration-300 hover:scale-110">
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
    </>
  );
};

export default WhyMe;