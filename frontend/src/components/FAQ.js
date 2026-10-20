import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    id: 'item-1',
    question: "Pourquoi avoir mon propre site plutôt que seulement Uber Eats ou Deliveroo ?",
    answer: "Les plateformes de livraison prélèvent jusqu'à 30% de commission sur chaque commande et ne vous donnent aucun accès aux données de vos clients. Votre propre site web vous garantit 0% de commission, valorise votre image de marque, fidélise votre clientèle directe et vous permet d'encaisser directement les commandes et réservations."
  },
  {
    id: 'item-2',
    question: "Prenez-vous une commission sur les réservations ou les commandes ?",
    answer: "Absolument 0% de commission ! Tout le chiffre d'affaires généré par votre site internet vous revient intégralement. Vous êtes propriétaire à 100% de votre site, de votre nom de domaine et du fichier de vos clients."
  },
  {
    id: 'item-3',
    question: "En combien de temps mon site peut-il être mis en ligne ?",
    answer: "Grâce à notre méthode optimisée, un Pack Vitrine ou un Pack Complet est généralement mis en ligne en seulement 7 jours ouvrés après réception de vos éléments (carte, photos, horaires et logo). Nous assurons un déploiement clé en main sans perturber votre service."
  },
  {
    id: 'item-4',
    question: "Puis-je modifier ma carte et mes prix en toute autonomie ?",
    answer: "Oui ! Nous concevons une interface intuitive pour que vous puissiez mettre à jour vos plats, formules du midi et tarifs en quelques clics depuis votre smartphone ou votre ordinateur, sans aucune compétence technique."
  },
  {
    id: 'item-5',
    question: "Comment mon restaurant sera-t-il positionné sur Google et Google Maps ?",
    answer: "Tous nos sites intègrent une optimisation SEO locale approfondie : synchronisation avec votre fiche Google Business Profile, balisage sémantique Schema.org pour restaurants, vitesse de chargement instantanée (score 98+) et structure adaptée aux recherches locales type 'meilleur restaurant [ville]'."
  },
  {
    id: 'item-6',
    question: "Que comprend la maintenance et le support technique ?",
    answer: "Nous incluons l'hébergement haute performance sur CDN mondial, les sauvegardes quotidiennes, le certificat de sécurité SSL/HTTPS, les mises à jour techniques régulières et un support WhatsApp direct et réactif 7j/7 en cas de besoin."
  },
  {
    id: 'item-7',
    question: "Proposez-vous un accompagnement pour les photos ou l'identité visuelle ?",
    answer: "Tout à fait ! Nous pouvons sublimer vos photos existantes, vous conseiller sur la prise de vue de vos plats signatures et concevoir une identité graphique cohérente qui donne immédiatement faim dès la première seconde de visite."
  }
];

const FAQ = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.section
      id="faq"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="py-20 md:py-28 bg-[#0B132B] text-white relative overflow-hidden"
    >
      {/* Glow décoratif d'arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs md:text-sm font-semibold tracking-wide uppercase mb-4">
            <HelpCircle className="w-4 h-4 text-turquoise" />
            Questions Fréquentes
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Tout ce que vous devez savoir <br className="hidden sm:block" />
            sur <span className="text-gradient-turquoise">notre accompagnement</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Transparence totale, aucun coût caché, aucune commission. Voici les réponses à vos questions les plus courantes.
          </p>
        </div>

        <div className="bg-[#111936]/80 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-white/10 rounded-xl px-5 py-2 bg-white/[0.02] hover:bg-white/[0.05] transition-colors data-[state=open]:border-turquoise/50 data-[state=open]:bg-white/[0.04]"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-turquoise text-base md:text-lg hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/75 text-sm md:text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-lg bg-turquoise/20 text-turquoise">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-white text-base">Vous avez une autre question ?</p>
              <p className="text-sm text-white/60">Notre équipe vous répond directement en moins de 24h.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-turquoise hover:bg-teal transition-all duration-200 shadow-md hover:scale-105"
          >
            Poser ma question
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
