import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Search,
  Star,
  CheckCircle2,
  Navigation,
  Smartphone,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Award,
} from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CITIES = [
  { name: 'Montpellier', region: 'Hérault (Siège)', tag: 'Intervention locale & nationale' },
  { name: 'Paris & IDF', region: 'Île-de-France', tag: 'Bistrots, Street-food & Étoilés' },
  { name: 'Lyon', region: 'Rhône', tag: 'Bouchons & Gastronomie' },
  { name: 'Aix & Marseille', region: 'PACA', tag: 'Cuisine Méditerranéenne' },
  { name: 'Bordeaux & Toulouse', region: 'Sud-Ouest', tag: 'Brasseries & Vins' },
  { name: 'France Entière', region: 'Déploiement 100% Clé en Main', tag: 'Plus de 25 établissements' },
];

const LocalPresence = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="geo-presence"
      ref={ref}
      className="py-20 md:py-28 bg-[#060A14] text-white relative overflow-hidden"
    >
      {/* Halo d'ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise text-xs font-bold tracking-wider uppercase mb-4">
            <MapPin className="w-4 h-4" />
            Référencement Local & Domination Google Maps
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Soyez le premier restaurant <br className="hidden sm:block" />
            sur lequel cliquent <span className="text-gradient-turquoise">vos voisins</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            92% des clients choisissent leur restaurant via Google Maps sur smartphone. Nous optimisons chaque ligne de code et votre fiche Google pour que vous apparaissiez au sommet des recherches locales.
          </p>
        </div>

        {/* Grille 3 Piliers du SEO Local Restaurant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-2xl bg-[#0B1224] border border-white/10 hover:border-turquoise/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-turquoise/10 border border-turquoise/20 flex items-center justify-center text-turquoise mb-5 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Recherches "Près de moi"</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Quand un passant recherche <em>"restaurant ouvert"</em>, <em>"pizzeria à emporter"</em> ou <em>"meilleur couscous [ville]"</em>, votre site remonte immédiatement grâce à notre structure de données géolocalisée.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0B1224] border border-white/10 hover:border-turquoise/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Google Maps Pack Local #1</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Synchronisation complète avec votre profil Google Business : bouton d'appel direct, itinéraire GPS piéton en 1 clic et lien de réservation directe sans intermédiaire.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0B1224] border border-white/10 hover:border-turquoise/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Balisage Schema.org & Menu</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Nous injectons le balisage sémantique officiel de Google (Restaurant, Menu, GeoCoordinates, PriceRange) pour afficher vos étoiles et vos prix directement dans les résultats de recherche.
            </p>
          </div>
        </div>

        {/* Carte des Villes Couvertes */}
        <div className="bg-[#0B1224]/80 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-turquoise" />
                Intervention Locale à Montpellier & Partout en France
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Nous nous déplaçons pour échanger ou travaillons en visio ultra-réactive pour livrer votre site en 7 jours.
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold shrink-0">
              ✓ Établissements accompagnés dans toute la France
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map((city) => (
              <div
                key={city.name}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-turquoise/30 transition-colors flex items-center gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-turquoise/10 flex items-center justify-center text-turquoise shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{city.name}</h4>
                  <p className="text-[11px] text-white/50">{city.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPresence;
