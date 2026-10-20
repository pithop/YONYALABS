import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, User, Utensils, MessageSquare, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { contactInfo } from '../config';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const formspreeUrl = 'https://formspree.io/f/xkgvjyap';
    const customApiUrl = process.env.REACT_APP_API_URL
      ? `${process.env.REACT_APP_API_URL}/api/contact`
      : null;

    try {
      // 1. Soumission principale Formspree
      const responseFormspree = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!responseFormspree.ok) {
        throw new Error('Erreur de transmission du formulaire.');
      }

      // 2. Notification API en tâche de fond (si configurée)
      if (customApiUrl) {
        try {
          await fetch(customApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
        } catch (apiErr) {
          console.warn('API custom contact fallback info:', apiErr);
        }
      }

      toast.success('Message envoyé avec succès !', {
        description: 'Notre équipe vous répondra directement sous 24h ouvrées.',
      });
      setIsSubmitted(true);
      event.target.reset();
    } catch (error) {
      console.error("Erreur d'envoi du formulaire:", error);
      toast.error('Une erreur est survenue', {
        description: "Votre message n'a pas pu être envoyé. Vous pouvez nous écrire directement à contact@yonyalabs.fr.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="py-24 bg-[#070B19] text-white relative overflow-hidden"
    >
      {/* Halo lumineux d'ambiance */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Échange direct & sans engagement
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Prêt à Révolutionner <span className="text-gradient-turquoise">Votre Restaurant ?</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70">
            Parlons de votre établissement, de votre carte et de vos objectifs. Recevez une étude de faisabilité et un devis personnalisé sous 24h ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Bloc d'informations & Réassurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#0B132B]/90 backdrop-blur-md rounded-2xl p-8 border border-white/10 space-y-8 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">YonYa Labs</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  L'agence web dédiée aux restaurateurs exigeants. Nous concevons des sites ultra-rapides, élégants et optimisés pour générer du chiffre d'affaires direct.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 font-medium">Email professionnel</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-turquoise transition-colors">
                      {contactInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 font-medium">Téléphone & WhatsApp</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-turquoise transition-colors">
                      {contactInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-11 h-11 rounded-lg bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 font-medium">Localisation & Rayonnement</span>
                    <span className="text-sm font-semibold text-white">
                      Montpellier (Siège) • France entière
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-white/70">
                  <Clock className="w-4 h-4 text-turquoise shrink-0" />
                  <span>Réponse garantie sous 24h ouvrées</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Audit de visibilité Google Maps 100% offert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B132B] rounded-2xl p-7 sm:p-9 border border-white/10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message bien reçu !</h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
                    Merci d'avoir pris contact avec YonYa Labs. Notre équipe examine vos éléments et revient vers vous sous 24h ouvrées.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold text-white transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Nom & Prénom *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          placeholder="Jean Dupont"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Adresse Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          placeholder="contact@monrestaurant.fr"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="06 12 34 56 78"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="restaurant" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Nom de votre Restaurant
                      </label>
                      <div className="relative">
                        <Utensils className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          id="restaurant"
                          type="text"
                          name="restaurant"
                          placeholder="Ex: Le Bistrot Gourmand"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Votre Message & Besoins *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        placeholder="Parlez-nous de votre établissement, de vos délais souhaités ou de vos besoins (site vitrine, réservation, commande en ligne...)"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-bold text-navy-darker bg-turquoise hover:bg-turquoise-light transition-all duration-200 shadow-glow-turquoise hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer mon message (Réponse sous 24h)</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-white/40 text-center mt-3">
                      Vos données restent strictement confidentielles et ne sont jamais partagées.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;