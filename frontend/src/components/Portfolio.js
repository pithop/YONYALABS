import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ExternalLink } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
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
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>YonYa Labs | Création de Sites Web d'Exception pour Restaurants</title>
        <meta name="description" content="YonYa Labs conçoit des sites internet sur mesure pour les restaurateurs en France. Site vitrine, commande en ligne, réservation. Sublimez votre présence en ligne." />
      </Helmet>
    <section 
      id="portfolio" 
      ref={ref}
      className={`py-20 sm:py-28 bg-white transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Notre portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations qui allient esthétique et performance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto custom-carousel-wrapper">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li className="custom-indicator selected" aria-label={`Slide ${index + 1}`} title={`Slide ${index + 1}`} />
                );
              }
              return (
                <li className="custom-indicator" onClick={onClickHandler} onKeyDown={onClickHandler} value={index} key={index} role="button" tabIndex={0} title={`${label} ${index + 1}`} aria-label={`${label} ${index + 1}`} />
              );
            }}
          >
            {demos.map((project, index) => (
              // --- CORRECTION ICI : padding-bottom (pb-10) a été retiré ---
              <div key={index} className="px-1 sm:px-4 md:px-8">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-80 overflow-hidden relative bg-slate-100">
                    <div 
                      className="portfolio-preview"
                      style={{ backgroundImage: `url(${project.imageUrl})` }}
                    ></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6 bg-white text-left">
                    <p className="text-orange-500 font-semibold text-sm mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
    </>
  );
};

export default Portfolio;