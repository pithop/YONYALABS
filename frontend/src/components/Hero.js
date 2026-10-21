import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UtensilsCrossed,
  CalendarCheck,
  QrCode,
  MapPin,
  Star,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  Flame,
  ChevronRight,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Onglet actif du simulateur smartphone interactif
  const [activeTab, setActiveTab] = useState('menu');
  const [selectedParty, setSelectedParty] = useState(2);
  const [selectedTime, setSelectedTime] = useState('20h00');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#060913] via-[#090E1C] to-[#0D1426] text-white pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden"
    >
      {/* Halos d'ambiance chauds et technologiques */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Colonne Gauche : Accroche & Proposition de valeur */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge Preuve Sociale & Spécialisation Restauration */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium mb-6 text-white shadow-xl"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-white/30">•</span>
              <span className="text-white/80">L'Agence Web N°1 des Restaurateurs</span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                0% de commission
              </span>
            </motion.div>

            {/* Titre Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
            >
              Un site web qui donne <span className="text-gradient-gold">faim</span>. <br />
              Des réservations directes <br />
              <span className="text-gradient-turquoise">sans rien reverser à personne</span>.
            </motion.h1>

            {/* Description orientée restaurateur */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/75 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Uber Eats et TheFork vous prennent jusqu'à <strong>30% de commission</strong> sur chaque couvert.
              Chez <strong>YonYa Labs</strong>, nous créons le site vitrine et le menu digital de votre restaurant en <strong>7 jours</strong>.
              Vous gardez <strong>100% de votre chiffre d'affaires</strong>.
            </motion.p>

            {/* Boutons d'Action Directs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/questionnaire?pack=complet"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-navy-darker bg-turquoise hover:bg-turquoise-light transition-all rounded-xl shadow-glow-turquoise hover:scale-105 active:scale-95"
              >
                <span>Obtenir mon devis gratuit en 2 min</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="#simulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all hover:border-turquoise/40"
              >
                <span>Calculer mes économies</span>
              </a>
            </motion.div>

            {/* 3 Garanties Concrètes Métier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">0% Commission</h4>
                  <p className="text-xs text-white/60">Vous gardez 100% de la recette de vos clients</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Prêt en 7 Jours</h4>
                  <p className="text-xs text-white/60">Livraison clé en main sans perturber votre service</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Google Maps #1</h4>
                  <p className="text-xs text-white/60">Référencement local optimisé pour votre ville</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Colonne Droite : Simulateur Smartphone Interactif Réel */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              {/* Sélecteur de fonctionnalités interactif au-dessus du téléphone */}
              <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setActiveTab('menu')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'menu'
                      ? 'bg-turquoise text-navy-darker shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Menu</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('reservation')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'reservation'
                      ? 'bg-turquoise text-navy-darker shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Réserver</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('qrcode')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'qrcode'
                      ? 'bg-turquoise text-navy-darker shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>QR Code</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('google')}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'google'
                      ? 'bg-turquoise text-navy-darker shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Maps</span>
                </button>
              </div>

              {/* Cadre du Smartphone stylisé */}
              <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl">
                {/* Écran du téléphone */}
                <div className="rounded-[32px] bg-[#0A0F1D] border border-white/10 overflow-hidden relative min-h-[500px] flex flex-col justify-between">
                  {/* Barre de statut du téléphone */}
                  <div className="bg-[#0A0F1D] px-6 pt-3 pb-2 flex items-center justify-between border-b border-white/5 text-[11px] text-white/50">
                    <span className="font-semibold text-white">19:42</span>
                    <div className="w-16 h-3.5 bg-black rounded-full mx-auto"></div>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px]">5G</span>
                      <div className="w-4 h-2 rounded-sm border border-white/50 p-0.5">
                        <div className="w-full h-full bg-turquoise rounded-2xs"></div>
                      </div>
                    </div>
                  </div>

                  {/* Header du restaurant virtuel */}
                  <div className="px-5 py-3 bg-[#11172B] border-b border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-black text-white">L'Atelier des Saveurs</h3>
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                      <p className="text-[10px] text-turquoise font-medium">Cuisine d'Auteur • Fait Maison</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-bold">
                      ★ 4.9 (184)
                    </span>
                  </div>

                  {/* Contenu Interactif selon l'onglet actif */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {/* VUE 1 : MENU GOURMAND */}
                      {activeTab === 'menu' && (
                        <motion.div
                          key="menu"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3"
                        >
                          <div className="flex gap-2 overflow-x-auto pb-1 text-[11px]">
                            <span className="px-2.5 py-1 rounded-full bg-turquoise text-navy-darker font-bold shrink-0">
                              Plats Signatures
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/60 shrink-0">
                              Entrées
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/60 shrink-0">
                              Desserts
                            </span>
                          </div>

                          {/* Plat 1 */}
                          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-turquoise/40 transition-all flex gap-3 items-center">
                            <div className="w-14 h-14 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 text-xl">
                              🍜
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs font-bold text-white truncate">Ramen Tonkotsu Fumant</h4>
                                <span className="text-xs font-black text-turquoise">15,50 €</span>
                              </div>
                              <p className="text-[10px] text-white/60 line-clamp-1 mt-0.5">
                                Bouillon mijoté 14h, chashu fondant & œuf ajitama bio.
                              </p>
                              <div className="mt-1 flex items-center gap-1.5">
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                                  Fait Maison
                                </span>
                                <span className="text-[9px] text-white/40">Populaire #1</span>
                              </div>
                            </div>
                          </div>

                          {/* Plat 2 */}
                          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-turquoise/40 transition-all flex gap-3 items-center">
                            <div className="w-14 h-14 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-300 shrink-0 text-xl">
                              🍲
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-xs font-bold text-white truncate">Couscous Royal Artisanal</h4>
                                <span className="text-xs font-black text-turquoise">18,00 €</span>
                              </div>
                              <p className="text-[10px] text-white/60 line-clamp-1 mt-0.5">
                                Semoule fine roulée main, 3 viandes et légumes du marché.
                              </p>
                              <div className="mt-1 flex items-center gap-1.5">
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                                  Recette Tradition
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-turquoise/10 border border-turquoise/20 text-[10px] text-turquoise flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            <span>Carte mise à jour en 30s par vos soins sans frais.</span>
                          </div>
                        </motion.div>
                      )}

                      {/* VUE 2 : RÉSERVATION DIRECTE 0% COM */}
                      {activeTab === 'reservation' && (
                        <motion.div
                          key="reservation"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3"
                        >
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                            <span className="text-[10px] font-bold text-white/50 uppercase block mb-1.5">
                              Nombre de convives :
                            </span>
                            <div className="grid grid-cols-4 gap-1.5">
                              {[2, 4, 6, 8].map((num) => (
                                <button
                                  type="button"
                                  key={num}
                                  onClick={() => setSelectedParty(num)}
                                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    selectedParty === num
                                      ? 'bg-turquoise text-navy-darker'
                                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                                  }`}
                                >
                                  {num} pers.
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                            <span className="text-[10px] font-bold text-white/50 uppercase block mb-1.5">
                              Heure de service :
                            </span>
                            <div className="grid grid-cols-3 gap-1.5">
                              {['19h30', '20h00', '20h30'].map((time) => (
                                <button
                                  type="button"
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    selectedTime === time
                                      ? 'bg-turquoise text-navy-darker'
                                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>

                          {bookingConfirmed ? (
                            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-1">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                              <p className="text-xs font-bold text-white">Table réservée pour {selectedParty} pers à {selectedTime} !</p>
                              <p className="text-[10px] text-emerald-300 font-medium">0,00 € de commission facturée au restaurant</p>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setBookingConfirmed(true)}
                              className="w-full py-3 rounded-xl bg-turquoise hover:bg-turquoise-light text-navy-darker font-black text-xs transition-transform active:scale-95 shadow-md flex items-center justify-center gap-1.5"
                            >
                              <span>Confirmer ma table en direct</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}

                          <p className="text-[10px] text-center text-white/50">
                            Fini les 2 € à 4 € par couvert prélevés par TheFork ou Zenchef.
                          </p>
                        </motion.div>
                      )}

                      {/* VUE 3 : QR CODE DE TABLE PHYSIQUE & DIGITAL */}
                      {activeTab === 'qrcode' && (
                        <motion.div
                          key="qrcode"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="text-center space-y-3"
                        >
                          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center">
                            {/* Illustration QR Code élégant */}
                            <div className="w-24 h-24 rounded-xl bg-white p-2 shadow-lg flex items-center justify-center">
                              <QrCode className="w-20 h-20 text-navy-darker" />
                            </div>
                            <span className="text-[11px] font-bold text-white mt-2">Table n°04 • Salon</span>
                            <span className="text-[10px] text-turquoise">Scan instantané sans app</span>
                          </div>

                          <div className="text-left space-y-1.5 text-[11px] text-white/70">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-turquoise shrink-0" />
                              <span>Support chevalet offert en bois ou plexiglas</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-turquoise shrink-0" />
                              <span>Vos clients visualisent les photos des plats</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-turquoise shrink-0" />
                              <span>Temps d'attente divisé par deux au service</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* VUE 4 : GOOGLE MAPS #1 & LOCAL SEO */}
                      {activeTab === 'google' && (
                        <motion.div
                          key="google"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3 text-left"
                        >
                          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                                #1 sur Google Maps
                              </span>
                              <span className="text-[10px] text-white/50">Montpellier Centre</span>
                            </div>
                            <h4 className="text-xs font-bold text-white">L'Atelier des Saveurs</h4>
                            <div className="flex items-center gap-1 text-[11px] text-amber-400 mt-0.5">
                              <span>★ 4.9</span>
                              <span className="text-white/40">(184 avis clients)</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-white">
                              <PhoneCall className="w-3.5 h-3.5 text-turquoise" />
                              <span>Appel direct</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-white">
                              <MapPin className="w-3.5 h-3.5 text-amber-400" />
                              <span>Itinéraire 1 clic</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-turquoise/10 border border-turquoise/20 text-[10px] text-turquoise leading-relaxed">
                            Balisage Schema.org & synchronisation directe avec votre fiche Google Business Profile.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer d'action du téléphone */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-white/50">Performance : 99/100</span>
                      <span className="text-turquoise font-bold flex items-center gap-1">
                        Site 100% à vous <CheckCircle2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicateur invitant à cliquer */}
              <p className="text-[11px] text-white/40 text-center mt-3 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-turquoise" />
                Cliquez sur les 4 onglets ci-dessus pour tester en direct !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
