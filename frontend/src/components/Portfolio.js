import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const demos = [
  // IMPORTANT: Remplacez ces URLs par les URLs de vos propres captures d'écran.
  // Vous pouvez utiliser un service comme https://cloudinary.com/ pour héberger vos images gratuitement.
  { name: "Atipico", url: "https://atipico-five.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770217/Screenshot_from_2025-08-21_11-50-55_g6kt7n.png" },
  { name: "L'Indya", url: "https://l-indya.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770217/Screenshot_from_2025-08-21_11-51-01_wzlhz6.png" },
  { name: "A la Braise", url: "https://alabraise.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770217/Screenshot_from_2025-08-21_11-51-07_cccnrc.png" },
  { name: "La Pizzaterie", url: "https://lapizzaterie.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770217/Screenshot_from_2025-08-21_11-51-13_qxrqjn.png" },
  { name: "Le P'tit Thaï", url: "https://leptitthai.vercel.app/", imageUrl: "https://res.cloudinary.com/dggbfnfdl/image/upload/v1755770217/Screenshot_from_2025-08-21_11-51-19_ouwjwg.png" }
];

const Portfolio = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-20 bg-white transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          Nos dernières réalisations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <a key={index} href={demo.url} target="_blank" rel="noopener noreferrer"
              className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={demo.imageUrl} alt={`Capture d'écran du site ${demo.name}`}
                  className="w-full h-48 object-cover object-top transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-orange-500 transition-colors duration-300">
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