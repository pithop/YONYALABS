import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import {
  Building2,
  Utensils,
  Sparkles,
  CheckCircle2,
  Send,
  PartyPopper,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Layers,
  Check,
  Star,
  Loader2,
} from 'lucide-react';

const PACKS = {
  vitrine: {
    id: 'vitrine',
    title: 'Pack Vitrine',
    price: '500 €',
    tagline: 'Présentation élégante & visibilité locale',
    features: [
      'Site 100% responsive smartphone & desktop',
      'Carte du restaurant avec photos HD',
      'Optimisation Google Maps & SEO local',
      'Formulaire de contact & coordonnées directes',
      'Mise en ligne en 7 jours ouvrés',
    ],
  },
  complet: {
    id: 'complet',
    title: 'Pack Complet',
    price: '900 €',
    badge: 'Recommandé • Le plus populaire',
    tagline: 'La solution complète pour générer des réservations 0% commission',
    features: [
      'Toutes les fonctionnalités du Pack Vitrine',
      'Module de réservation directe de tables (0% com)',
      'Menu digital interactif avec QR Code de table',
      'Option Click & Collect / Vente à emporter',
      'Audit PageSpeed & performance extrême (< 1s)',
      'Assistance & mises à jour prioritaires 7j/7',
    ],
  },
  'sur-mesure': {
    id: 'sur-mesure',
    title: 'Pack Sur Mesure',
    price: 'Sur Devis',
    tagline: 'Multi-établissements, intégrations POS & sur-mesure',
    features: [
      'Architecture multi-restaurants ou franchises',
      'Connexion avec votre logiciel de caisse / POS',
      'Système de fidélité & cartes cadeaux en ligne',
      'Direction artistique 100% personnalisée',
      'Accompagnement stratégique sur mesure',
    ],
  },
};

const OBJECTIF_OPTIONS = [
  'Augmenter les réservations directes (0% commission)',
  'Menu digital avec QR Code sur nos tables',
  'Click & Collect / Vente à emporter sans intermédiaire',
  'Être premier sur Google Maps dans ma ville',
  'Remplacer un ancien site trop lent ou dépassé',
  'Moderniser notre image de marque et valoriser nos plats',
];

const Questionnaire = () => {
  const [searchParams] = useSearchParams();
  const initialPackKey = searchParams.get('pack') || 'complet';
  const [selectedPack, setSelectedPack] = useState(
    PACKS[initialPackKey] ? initialPackKey : 'complet'
  );

  const [selectedObjectives, setSelectedObjectives] = useState([
    'Augmenter les réservations directes (0% commission)',
    'Menu digital avec QR Code sur nos tables',
  ]);

  const [hasPhotosReady, setHasPhotosReady] = useState('en-cours');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleObjective = (obj) => {
    if (selectedObjectives.includes(obj)) {
      setSelectedObjectives(selectedObjectives.filter((item) => item !== obj));
    } else {
      setSelectedObjectives([...selectedObjectives, obj]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Enrichir avec les données interactives
    data.pack_choisi = PACKS[selectedPack]?.title || selectedPack;
    data.pack_prix = PACKS[selectedPack]?.price || '';
    data.objectifs_prioritaires = selectedObjectives.join(' | ');
    data.statut_photos_carte = hasPhotosReady;

    const formspreeUrl = 'https://formspree.io/f/xovnpogy';
    const customApiUrl = process.env.REACT_APP_API_URL
      ? `${process.env.REACT_APP_API_URL}/api/questionnaire`
      : null;

    try {
      // 1. Sauvegarde Formspree
      const responseFormspree = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!responseFormspree.ok) {
        throw new Error('Erreur lors de la transmission du dossier.');
      }

      // 2. Notification API en tâche de fond (si disponible)
      if (customApiUrl) {
        try {
          await fetch(customApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
        } catch (apiErr) {
          console.warn('API custom questionnaire fallback info:', apiErr);
        }
      }

      toast.success('Dossier de projet transmis avec succès !', {
        description: 'Notre équipe va préparer votre étude et vous recontacter sous 24h ouvrées.',
      });

      setSubmittedData({
        restaurantName: data.nomEntreprise,
        pack: PACKS[selectedPack]?.title,
        email: data.email,
        phone: data.telephone,
      });
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Erreur soumission projet:', error);
      toast.error('Une erreur est survenue lors de l’envoi', {
        description: 'Veuillez réessayer ou nous contacter directement à contact@yonyalabs.fr.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Écran de confirmation de haute confiance
  if (isSuccess && submittedData) {
    return (
      <div className="min-h-screen bg-[#070B19] text-white py-20 px-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turquoise/10 rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-[#0B132B]/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative z-10 text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-turquoise/20 border border-turquoise/40 text-turquoise flex items-center justify-center mx-auto mb-6 shadow-glow-turquoise">
            <PartyPopper className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Dossier enregistré avec succès
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Merci pour votre confiance !
          </h1>

          <p className="text-base text-white/70 max-w-lg mx-auto leading-relaxed mb-8">
            Les informations concernant votre établissement{' '}
            <span className="font-bold text-white">"{submittedData.restaurantName}"</span> ont bien été transmises à nos équipes.
          </p>

          {/* Récapitulatif du projet */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-left space-y-4 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-turquoise">
              Récapitulatif de votre demande :
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-white/50 block text-xs">Formule sélectionnée :</span>
                <span className="font-semibold text-white">{submittedData.pack}</span>
              </div>
              <div>
                <span className="text-white/50 block text-xs">Établissement :</span>
                <span className="font-semibold text-white">{submittedData.restaurantName}</span>
              </div>
              <div>
                <span className="text-white/50 block text-xs">Email de confirmation :</span>
                <span className="font-semibold text-white">{submittedData.email}</span>
              </div>
              <div>
                <span className="text-white/50 block text-xs">Téléphone :</span>
                <span className="font-semibold text-white">{submittedData.phone || 'Non renseigné'}</span>
              </div>
            </div>
          </div>

          {/* Les 3 prochaines étapes */}
          <div className="text-left mb-8 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
              Prochaines étapes :
            </h2>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-turquoise/20 text-turquoise text-[11px] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>Analyse technique et audit de votre secteur par un chef de projet dédié.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-turquoise/20 text-turquoise text-[11px] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>Contact direct sous 24h ouvrées pour valider vos éléments et vos souhaits.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-turquoise/20 text-turquoise text-[11px] font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>Lancement du design et livraison clé en main sous 7 jours.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-navy-darker bg-turquoise hover:bg-turquoise-light transition-all shadow-glow-turquoise hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Retourner à l'accueil
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B19] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Halo d'ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-turquoise/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        {/* Fil d'ariane & bouton retour */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-turquoise transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au site YonYa Labs
          </Link>
        </div>

        {/* Titre & Accroche */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Cahier des charges express • Réponse sous 24h
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Lancez le Site de <span className="text-gradient-turquoise">Votre Restaurant</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Remplissez ce formulaire en 2 minutes. Notre équipe analyse vos besoins, évalue votre potentiel de réservations directes et vous transmet une proposition sur mesure.
          </p>
        </div>

        {/* Sélecteur de Pack Interactif */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">
              Étape 1 : Choisissez ou confirmez votre formule
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.values(PACKS).map((pack) => {
              const isSelected = selectedPack === pack.id;
              return (
                <div
                  key={pack.id}
                  onClick={() => setSelectedPack(pack.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0B132B] border-2 border-turquoise shadow-glow-turquoise scale-[1.02]'
                      : 'bg-[#0B132B]/60 border border-white/10 hover:border-white/20 hover:bg-[#0B132B]/80'
                  }`}
                >
                  {pack.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-turquoise text-navy-darker text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {pack.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{pack.title}</h3>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'bg-turquoise border-turquoise text-navy-darker'
                            : 'border-white/20 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-2xl font-black text-white">{pack.price}</span>
                      {pack.id !== 'sur-mesure' && (
                        <span className="text-xs text-white/50 ml-1.5">paiement unique</span>
                      )}
                    </div>

                    <p className="text-xs text-white/70 mb-5 leading-relaxed">
                      {pack.tagline}
                    </p>

                    <ul className="space-y-2 border-t border-white/10 pt-4">
                      {pack.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-white/80">
                          <CheckCircle2 className="w-3 h-3 text-turquoise shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 text-center">
                    <span
                      className={`text-xs font-bold ${
                        isSelected ? 'text-turquoise' : 'text-white/40'
                      }`}
                    >
                      {isSelected ? '✓ Pack Sélectionné' : 'Cliquer pour choisir ce pack'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulaire Principal Structuré */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1 : Établissement */}
          <div className="bg-[#0B132B] rounded-2xl p-7 sm:p-9 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">1. Votre Établissement</h3>
                <p className="text-xs text-white/60">Présentez-nous votre restaurant ou commerce de bouche</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nomEntreprise" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Nom du Restaurant *
                </label>
                <div className="relative">
                  <Utensils className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    id="nomEntreprise"
                    name="nomEntreprise"
                    required
                    placeholder="Ex: Mitake Ramen, Le Bistrot Provençal..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="secteurActivite" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Spécialité & Type de Cuisine *
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    id="secteurActivite"
                    name="secteurActivite"
                    required
                    placeholder="Ex: Cuisine traditionnelle, Pizzeria, Ramen, Brunch..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="ville" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Ville & Adresse d'Implantation *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    id="ville"
                    name="ville"
                    required
                    placeholder="Ex: Montpellier, Paris 11e, Aix-en-Provence..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="siteActuel" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Site actuel ou Instagram (facultatif)
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    id="siteActuel"
                    name="siteActuel"
                    placeholder="Ex: instagram.com/monrestaurant"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 : Vos Objectifs Prioritaires */}
          <div className="bg-[#0B132B] rounded-2xl p-7 sm:p-9 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">2. Vos Objectifs Prioritaires</h3>
                <p className="text-xs text-white/60">Sélectionnez les fonctionnalités indispensables pour votre activité</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OBJECTIF_OPTIONS.map((opt) => {
                const active = selectedObjectives.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => toggleObjective(opt)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                      active
                        ? 'bg-turquoise/10 border-turquoise text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 transition-colors ${
                        active ? 'bg-turquoise border-turquoise text-navy-darker' : 'border-white/30'
                      }`}
                    >
                      {active && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3 : Identité & Photos */}
          <div className="bg-[#0B132B] rounded-2xl p-7 sm:p-9 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">3. Ambiance & Éléments Visuels</h3>
                <p className="text-xs text-white/60">L'ambiance et l'histoire que vous souhaitez transmettre</p>
              </div>
            </div>

            <div>
              <label htmlFor="ambiance" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                Décrivez l'ambiance et les valeurs de votre restaurant
              </label>
              <textarea
                id="ambiance"
                name="ambiance"
                rows="3"
                placeholder="Ex: Ambiance feutrée et chaleureuse, produits locaux du terroir, cuisine ouverte conviviale..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                Avez-vous déjà des photos de vos plats et votre carte ?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'prete', label: 'Oui, tout est prêt (photos HD & carte)' },
                  { id: 'en-cours', label: 'En cours de préparation' },
                  { id: 'besoin-aide', label: "J'ai besoin de vos conseils" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setHasPhotosReady(item.id)}
                    className={`p-3.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      hasPhotosReady === item.id
                        ? 'bg-turquoise/15 border-turquoise text-white font-bold'
                        : 'bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4 : Coordonnées Directes */}
          <div className="bg-[#0B132B] rounded-2xl p-7 sm:p-9 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">4. Vos Coordonnées Directes</h3>
                <p className="text-xs text-white/60">Pour vous transmettre notre proposition et échanger rapidement</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Nom & Prénom du Responsable *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Adresse Email Professionnelle *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jean@monrestaurant.fr"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="telephone" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Numéro de Téléphone (Mobile / WhatsApp) *
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  required
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="delai" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Délai Souhaité de Mise en Ligne
                </label>
                <select
                  id="delai"
                  name="delai"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-white/15 text-white text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
                >
                  <option value="urgent-7j">Rapide (sous 7 à 10 jours ouvrés)</option>
                  <option value="mois">Sous 2 à 4 semaines</option>
                  <option value="creation">En cours de création / reprise d'établissement</option>
                  <option value="renseignement">Simple prise de renseignement / devis</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                Commentaires additionnels ou questions particulières (facultatif)
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Avez-vous des besoins spécifiques (ex: multilingue, carte des vins interactive, plusieurs salles...) ?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise/30 transition-all"
              ></textarea>
            </div>
          </div>

          {/* Bouton de Soumission & Réassurance */}
          <div className="pt-4 text-center space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-extrabold text-base text-navy-darker bg-turquoise hover:bg-turquoise-light transition-all shadow-glow-turquoise hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Envoi de votre dossier en cours...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Transmettre mon projet & recevoir mon devis gratuit sous 24h</span>
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-turquoise" />
                Réponse sous 24h ouvrées
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Sans engagement • 100% gratuit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-turquoise" />
                Données strictement confidentielles
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;