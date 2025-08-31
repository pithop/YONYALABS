import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const demos = [
  { name: "Atipico",category: "Site Vitrine", url: "https://atipico-five.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755771000/screencapture-atipico-five-vercel-app-2025-08-21-12_08_10_m4zamo.png" },
  { name: "L'Indya",category: "Site Vitrine", url: "https://l-indya.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770999/screencapture-l-indya-vercel-app-2025-08-21-12_08_32_lkbaie.png" },
  { name: "A la Braise",category: "Site Vitrine", url: "https://alabraise.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770999/screencapture-alabraise-vercel-app-2025-08-21-12_08_46_gc5o72.png" },
  { name: "La Pizzaterie",category: "Site Vitrine", url: "https://lapizzaterie.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770999/screencapture-lapizzaterie-vercel-app-2025-08-21-12_08_58_rq9dpg.png" },
  { name: "Le P'tit Thaï",category: "Site Vitrine", url: "https://leptitthai.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770998/screencapture-leptitthai-vercel-app-2025-08-21-12_09_10_gnk0ja.png" },
  { name: "L'AKAGERA GRENOBLE",category: "Site Vitrine", url: "https://dev-lakagera.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755772914/screencapture-dev-lakagera-vercel-app-fr-2025-08-21-12_41_34_vajewq.png" }
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
      <>
          <Helmet>
              <title>Portfolio | YonYa Labs - Créations de Sites pour Restaurants</title>
              <meta name="description" content="Découvrez nos réalisations : des sites web modernes et performants conçus spécifiquement pour les restaurateurs." />
          </Helmet>
          <motion.section
              id="portfolio"
              ref={ref}
              variants={sectionVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="py-20 sm:py-28 bg-white overflow-hidden"
          >
              <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-extrabold text-dark-navy mb-4">
                          Nos <span className="text-turquoise">Réalisations</span>
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          Chaque projet est une collaboration unique. Découvrez l'expérience que nous pouvons créer pour vous.
                      </p>
                  </div>

                  <div className="relative">
                      <div className="overflow-hidden" ref={emblaRef}>
                          <div className="flex">
                              {demos.map((project) => (
                                  <div key={project.name} className="flex-shrink-0 flex-grow-0 basis-full md:basis-4/5 lg:basis-3/5 px-4">
                                      <div className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                                          <div className="h-80 md:h-96 w-full overflow-hidden relative">
                                              <div
                                                  className="portfolio-preview"
                                                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                                              ></div>
                                              <a
                                                  href={project.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                              >
                                                  <ExternalLink className="w-6 h-6 text-white" />
                                              </a>
                                          </div>
                                          <div className="p-6 text-left">
                                              <p className="text-turquoise font-semibold text-sm mb-1">{project.category}</p>
                                              <h3 className="text-xl font-bold text-dark-navy">
                                                  {project.name}
                                              </h3>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Boutons de navigation personnalisés */}
                      <button onClick={scrollPrev} className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all">
                          <ArrowLeft className="w-6 h-6 text-dark-navy" />
                      </button>
                      <button onClick={scrollNext} className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all">
                          <ArrowRight className="w-6 h-6 text-dark-navy" />
                      </button>
                  </div>
              </div>
          </motion.section>
      </>
  );
};

export default Portfolio;