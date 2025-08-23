import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ExternalLink } from 'lucide-react';

const demos = [
  // IMPORTANT: Remplacez ces URLs par les URLs de vos propres captures d'écran.
  // Vous pouvez utiliser un service comme https://cloudinary.com/ pour héberger vos images gratuitement.
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
      <section id="portfolio" ref={ref} className={`py-24 bg-white transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos réalisations</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Chaque site est unique, conçu pour refléter l'identité du restaurant et optimiser l'expérience client.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {demos.map((demo, index) => (
              <a 
                key={index} 
                href={demo.url} 
                target="_blank" 
                rel="noopener noreferrer"
                // On garde une ombre simple et une transition uniquement sur l'ombre.
                className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="relative overflow-hidden h-80 bg-slate-100">
                  <div 
                    className="portfolio-preview"
                    style={{ backgroundImage: `url(${demo.imageUrl})` }}
                  ></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-orange-500 transition-colors duration-300">
                    {demo.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
};
  
export default Portfolio;