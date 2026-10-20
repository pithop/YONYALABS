import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Palette, SearchCheck, Rocket, CheckCircle2, Clock } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const steps = [
  {
    number: "01",
    duration: "30 min",
    icon: PhoneCall,
    title: "Échange & Stratégie Ciblée",
    description: "Nous échangeons sur l'histoire de votre établissement, votre carte, votre identité et vos objectifs (réservations de table, commandes à emporter ou visibilité locale).",
    highlights: ["Audit gratuit de votre visibilité actuelle", "Définition de la charte graphique", "Choix du pack adapté sans engagement"]
  },
  {
    number: "02",
    duration: "Jours 1 à 3",
    icon: Palette,
    title: "Design Sur-Mesure & Carte Interactive",
    description: "Nous concevons une interface responsive sublime, rapide et pensée pour donner faim dès la première seconde. Votre menu digital interactif est configuré avec photos HD.",
    highlights: ["Menu digital avec QR code de table offert", "Module de réservation directe (0% commission)", "Design 100% responsive smartphone & tablette"]
  },
  {
    number: "03",
    duration: "Jours 4 à 5",
    icon: SearchCheck,
    title: "SEO Local & Google Maps #1",
    description: "Nous appliquons les meilleures pratiques de référencement pour hisser votre restaurant en tête des recherches locales sur Google et Google Maps dans votre secteur.",
    highlights: ["Balisage Schema.org pour restaurants", "Optimisation fiche Google Business Profile", "Temps de chargement < 1s (Score 99/100)"]
  },
  {
    number: "04",
    duration: "Jour 7",
    icon: Rocket,
    title: "Mise en Ligne & Formation Express",
    description: "Votre site est déployé mondialement sur infrastructure cloud Vercel sécurisée. Nous vous formons en 15 minutes pour que vous puissiez modifier vos plats et tarifs en toute autonomie.",
    highlights: ["Connexion de votre nom de domaine .fr", "Certificat SSL de sécurité inclus", "Support réactif & maintenance sereine"]
  }
];

const Process = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="process" ref={ref} className="py-24 bg-navy-darker text-white relative overflow-hidden">
      {/* Glow décoratif en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
            <Clock className="w-3.5 h-3.5" />
            Votre site prêt en 7 jours
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Notre Méthode en <span className="text-gradient-turquoise">4 Étapes Clés</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70">
            Un processus fluide, transparent et éprouvé auprès de plus de 25 restaurateurs pour vous livrer un site prêt à convertir sans vous faire perdre une minute de service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-panel-dark rounded-2xl p-6 md:p-7 flex flex-col justify-between border border-white/10 hover:border-turquoise/40 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-glow-turquoise"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-white/20 group-hover:text-turquoise/40 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-turquoise/10 text-turquoise border border-turquoise/20">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise mb-5 group-hover:scale-110 group-hover:bg-turquoise group-hover:text-navy-darker transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-turquoise transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-2">
                    {step.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-turquoise shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/questionnaire"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-navy-darker bg-turquoise hover:bg-turquoise-light transition-all rounded-xl shadow-glow-turquoise hover:scale-105 active:scale-95"
          >
            Lancer mon projet dès aujourd'hui
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
