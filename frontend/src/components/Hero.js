import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-slate-900">
             <div 
                className="absolute inset-0 bg-slate-800 opacity-50"
                style={{
                    backgroundImage: `radial-gradient(circle at top left, #fb923c 0%, transparent 40%),
                                    radial-gradient(circle at bottom right, #f97316 0%, transparent 50%)`,
                    filter: 'blur(80px)'
                }}
            ></div>

            <div className={`relative z-10 px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                    Nous créons des expériences digitales <span className="text-orange-400">pour les restaurateurs</span>.
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                    De la simple vitrine au site de commande complet, nous transformons votre présence en ligne pour attirer plus de clients et simplifier votre quotidien.
                </p>
            </div>
        </section>
    );
};

export default Hero;