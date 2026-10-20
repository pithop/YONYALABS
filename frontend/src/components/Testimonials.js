import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, UtensilsCrossed } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    name: "Équipe Mitake Ramen",
    restaurant: "Mitake Ramen",
    city: "Aix-en-Provence",
    category: "Ramen & Spécialités Japonaises",
    quote: "Le site a transformé notre service du midi et du soir. Nos réservations de table se font en direct sans la moindre commission intermédiaire. Les clients adorent consulter la carte interactive avant de venir !",
    rating: 5,
    metric: "+42% de réservations directes"
  },
  {
    name: "Yassine B.",
    restaurant: "Mamie Couscous",
    city: "Lyon Gerland",
    category: "Cuisine Traditionnelle & Traiteur",
    quote: "Grâce à YonYa Labs, nous avons arrêté de perdre 30% de marge sur les gros buffets et commandes traiteur. Le site est ultra-rapide, élégant et nos clients nous trouvent enfin en première position sur Google.",
    rating: 5,
    metric: "0% de commission prélevée"
  },
  {
    name: "Sarah & Amit",
    restaurant: "L'Indya",
    city: "Montpellier",
    category: "Gastronomie Indienne",
    quote: "Une écoute remarquable. L'équipe a su retranscrire toute la convivialité de notre établissement. Le menu digital avec QR code sur nos tables a considérablement fluidifié les commandes de nos clients.",
    rating: 5,
    metric: "Score PageSpeed 99/100"
  },
  {
    name: "Thomas R.",
    restaurant: "Atipico",
    city: "Grenoble",
    category: "Bistrot & Cuisine du Marché",
    quote: "Livré en 6 jours chrono ! Je peux changer ma formule du midi et mes suggestions en 30 secondes depuis mon téléphone entre deux services. C'est exactement ce dont un restaurateur a besoin.",
    rating: 5,
    metric: "Livraison clé en main en 6j"
  }
];

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-white text-dark-navy relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/10 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            Avis Clients Vérifiés • 4.9/5 sur Google
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark-navy tracking-tight">
            Ils Nous Font <span className="text-turquoise">Confiance</span> au Quotidien
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Découvrez comment nous aidons les restaurateurs passionnés à reprendre le contrôle de leur clientèle et à maximiser leur rentabilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.restaurant}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-light-gray/70 hover:bg-white rounded-2xl p-7 md:p-8 border border-gray-200 hover:border-turquoise/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {t.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-turquoise/30 mb-3" />

                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-dark-navy flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle className="w-4 h-4 text-turquoise inline-block" />
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {t.restaurant} • <span className="text-turquoise font-semibold">{t.city}</span>
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-turquoise/10 flex items-center justify-center text-turquoise">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
