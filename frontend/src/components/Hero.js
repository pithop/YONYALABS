// frontend/src/components/Hero.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ArrowDown, ArrowRight } from 'lucide-react'; // On importe ArrowRight

const Hero = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

    return (
        <section 
            id="home" 
            ref={ref}
            className="relative flex items-center justify-center h-screen bg-slate-900 text-white overflow-hidden"
        >
            {/* ... le fond animé ne change pas ... */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[-20%] h-[140%] w-[140%] bg-gradient-to-br from-orange-500/50 via-slate-900 to-slate-900 animate-gradient-xy"></div>
            </div>

            <div 
                className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="block">Votre restaurant.</span>
                    <span className="text-orange-400">Votre succès digital.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12">
                    Nous créons des expériences en ligne uniques pour les restaurateurs qui souhaitent attirer, engager et fidéliser plus de clients.
                </p>
                <a 
                    href="#services" 
                    className="group inline-flex items-center bg-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
                >
                    Découvrir nos solutions
                    {/* AJOUT DE L'ICÔNE ANIMÉE */}
                    <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-8 h-8 text-slate-500" />
            </div>
        </section>
    );
};

export default Hero;