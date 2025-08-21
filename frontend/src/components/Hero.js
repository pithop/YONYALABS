import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section 
            ref={ref}
            className={`relative bg-white pt-24 pb-20 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
           <div className="absolute inset-0 bg-slate-50 opacity-50" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
              YonYa Labs
            </h1>
            <p className="text-xl md:text-2xl text-orange-500 font-bold mb-8">
              Solutions Web & IT pour Restaurateurs
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed">
                J'aide les restaurateurs à gagner en visibilité et à simplifier leur gestion quotidienne grâce à des outils numériques simples, efficaces et à prix abordable.
              </p>
            </div>
          </div>
        </section>
    );
};

export default Hero;