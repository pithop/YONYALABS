import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ExternalLink, ArrowLeft, ArrowRight, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import mitakeImg from '../assets/portfolio/mitake-ramen.webp';
import mamieImg from '../assets/portfolio/mamie-couscous.webp';

const demos = [
  {
    name: "Mitake Ramen",
    tagline: "Ramen Bar Authentique & Spécialités Japonaises",
    category: "Ramen & Japonais",
    url: "https://www.mitakeramen.page/",
    displayUrl: "mitakeramen.page",
    imageUrl: mitakeImg,
    badge: "0% Commission • Click & Collect",
    highlights: ["Menu interactif", "Click & Collect rapide", "SEO Local n°1"],
  },
  {
    name: "Mamie Couscous",
    tagline: "Cuisine Traditionnelle & Saveurs Méditerranéennes",
    category: "Cuisine Maghrébine & Orientale",
    url: "https://mamie-couscous.vercel.app/",
    displayUrl: "mamiecouscous.fr",
    imageUrl: mamieImg,
    badge: "Réservation Directe • Menu Interactif",
    highlights: ["Réservation de table", "Photos haute fidélité", "Mobile-first"],
  },
  {
    name: "Atipico",
    tagline: "Bistronomie Créative & Produits de Saison",
    category: "Bistrot & Fusion",
    url: "https://atipico-five.vercel.app/",
    displayUrl: "atipico-restaurant.fr",
    imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755771000/screencapture-atipico-five-vercel-app-2025-08-21-12_08_10_m4zamo.png",
    badge: "Expérience Visuelle Immersive",
    highlights: ["Ardoise du jour", "Carte des vins", "Vitesse 99/100"],
  },
  {
    name: "L'Indya",
    tagline: "Restaurant Gastronomique Indien d'Exception",
    category: "Gastronomie Indienne",
    url: "https://l-indya.vercel.app/",
    displayUrl: "l-indya.fr",
    imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770999/screencapture-l-indya-vercel-app-2025-08-21-12_08_32_lkbaie.png",
    badge: "Commande en Ligne & Retrait",
    highlights: ["Réservation groupe", "QR Code table", "SEO Google Maps"],
  },
  {
    name: "A la Braise",
    tagline: "Viandes Grillées au Feu de Bois & Burgers Maison",
    category: "Steakhouse & Grill",
    url: "https://alabraise.vercel.app/",
    displayUrl: "alabraise-grill.fr",
    imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770999/screencapture-alabraise-vercel-app-2025-08-21-12_08_46_gc5o72.png",
    badge: "Forte Conversion Mobile",
    highlights: ["Click & Collect", "Fidélité client", "Chargement < 1s"],
  },
  {
    name: "La Pizzaterie",
    tagline: "Pizzeria Napolitaine Artisanale & Pizzas au Feu de Bois",
    category: "Pizzeria Italienne",
    url: "https://lapizzaterie.vercel.app/",
    displayUrl: "lapizzaterie.fr",
    imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770999/screencapture-lapizzaterie-vercel-app-2025-08-21-12_08_58_rq9dpg.png",
    badge: "Commandes Sans Frais Plateforme",
    highlights: ["Personnalisation pizza", "Paiement en ligne", "Avis synchronisés"],
  },
  {
    name: "Le P'tit Thaï",
    tagline: "Street Food & Spécialités Thaïlandaises Faits Maison",
    category: "Street Food & Thaï",
    url: "https://leptitthai.vercel.app/",
    displayUrl: "leptitthai.fr",
    imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770998/screencapture-leptitthai-vercel-app-2025-08-21-12_09_10_gnk0ja.png",
    badge: "Click & Collect Express",
    highlights: ["Menu tactile", "Gestion des allergènes", "100% Responsive"],
  },
  {
    name: "L'AKAGERA GRENOBLE",
    tagline: "Voyage Culinaire Africain & Spécialités Épicées",
    category: "Gastronomie Africaine",
    url: "https://dev-lakagera.vercel.app/",
    displayUrl: "lakagera-grenoble.fr",
    imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755772914/screencapture-dev-lakagera-vercel-app-fr-2025-08-21-12_41_34_vajewq.png",
    badge: "Identité de Marque Affirmée",
    highlights: ["Réservations directes", "Histoire & Valeurs", "SEO Local"],
  },
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="portfolio"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className="py-20 md:py-28 bg-[#060A17] text-white overflow-hidden relative"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-turquoise text-xs md:text-sm font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-turquoise" />
            Réalisations Clients Vérifiées
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Des restaurants qui <span className="text-gradient-turquoise">remplissent leurs tables</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Survolez chaque mockup pour faire défiler le site en direct. Cliquez pour visiter le site réel.
          </p>
        </div>

        {/* Carousel Embla */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {demos.map((project) => (
                <div
                  key={project.name}
                  className="flex-shrink-0 flex-grow-0 basis-full md:basis-[70%] lg:basis-[55%] px-3 sm:px-4"
                >
                  <div className="group rounded-2xl overflow-hidden bg-[#0B132B] border border-white/15 shadow-2xl transition-all duration-300 hover:border-turquoise/60 hover:-translate-y-1.5">
                    {/* Header façon fenêtre de navigateur MacOS */}
                    <div className="bg-[#111936] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-white/5 text-[11px] text-white/60 font-mono flex items-center gap-1">
                        <span>https://</span>
                        <span className="text-white/90">{project.displayUrl}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-turquoise">
                        Live
                      </div>
                    </div>

                    {/* Zone de preview avec animation de scroll au survol */}
                    <div className="h-72 sm:h-96 w-full overflow-hidden relative bg-black/40">
                      <div
                        className="portfolio-preview cursor-pointer"
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                        onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                      />
                      
                      {/* Overlay discret d'indication au repos */}
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white/90 pointer-events-none flex items-center gap-1.5 border border-white/10 opacity-80 group-hover:opacity-0 transition-opacity duration-200">
                        <Eye className="w-3 h-3 text-turquoise" />
                        <span>Survolez pour défiler</span>
                      </div>

                      {/* Bouton Voir le Site */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-turquoise text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        title="Ouvrir le site en direct"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-turquoise">
                          {project.category}
                        </span>
                        <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md">
                          {project.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mt-2 mb-1">{project.name}</h3>
                      <p className="text-sm text-white/70 mb-4">{project.tagline}</p>

                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((h, i) => (
                            <span key={i} className="inline-flex items-center gap-1 text-[11px] text-white/60">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              {h}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-turquoise hover:text-white transition-colors ml-auto"
                        >
                          <span>Visiter le site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons Suivant / Précédent */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#0B132B]/90 hover:bg-turquoise text-white p-3.5 rounded-full shadow-xl border border-white/10 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Projet précédent"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#0B132B]/90 hover:bg-turquoise text-white p-3.5 rounded-full shadow-xl border border-white/10 transition-all duration-200 hover:scale-110 z-10"
            aria-label="Projet suivant"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
