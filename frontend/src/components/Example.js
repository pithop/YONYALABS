// src/components/Example.js

import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Helmet } from 'react-helmet-async';

const MetricCircle = ({ finalValue, label, isVisible }) => {
  // ... (le code du MetricCircle reste le même)
  const [currentValue, setCurrentValue] = useState(0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 1500;
      const increment = finalValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          setCurrentValue(finalValue);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, finalValue]);

  const offset = circumference - (currentValue / 100) * circumference;
  
  const getColor = (value) => {
    if (value < 50) return 'text-red-400';
    if (value < 90) return 'text-yellow-400';
    return 'text-green-400';
  };
  
  const getStrokeColor = (value) => {
    if (value < 50) return 'stroke-red-500';
    if (value < 90) return 'stroke-yellow-500';
    return 'stroke-green-500';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle className="stroke-slate-700" strokeWidth="10" fill="transparent" r={radius} cx="60" cy="60" />
          <circle
            className={`transform -rotate-90 origin-center transition-all duration-500 ease-out ${getStrokeColor(currentValue)}`}
            strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
            fill="transparent" r={radius} cx="60" cy="60"
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-3xl font-bold ${getColor(currentValue)}`}>
          {currentValue}
        </span>
      </div>
      <p className="mt-4 font-semibold text-slate-300">{label}</p>
    </div>
  );
};

const Example = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const beforeMetrics = { performance: 34, accessibility: 62, seo: 71 };
  const afterMetrics = { performance: 98, accessibility: 100, seo: 100 };

  return (
    <>
      <Helmet>
        <title>YonYa Labs | Création de Sites Web d'Exception pour Restaurants</title>
        <meta name="description" content="YonYa Labs conçoit des sites internet sur mesure pour les restaurateurs en France. Site vitrine, commande en ligne, réservation. Sublimez votre présence en ligne." />
      </Helmet>
    <section 
      id="example" ref={ref}
      className={`py-20 sm:py-28 bg-slate-900 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">La performance n'est pas une option.</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Nous ne nous contentons pas de créer de beaux sites. Nous construisons des plateformes rapides, accessibles et optimisées pour le succès.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-700 rounded-2xl shadow-2xl shadow-slate-950/50 border border-slate-700 transition-all duration-700 ease-out ${isVisible ? 'scale-100' : 'scale-90'}`}>
            <div className="bg-slate-800/50 p-6 sm:p-12 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                <h3 className="text-center text-2xl font-bold text-slate-400 mb-8">Site Standard</h3>
                <div className="flex flex-col sm:flex-row items-center justify-around space-y-8 sm:space-y-0">
                    <MetricCircle finalValue={beforeMetrics.performance} label="Performance" isVisible={isVisible} />
                    <MetricCircle finalValue={beforeMetrics.accessibility} label="Accessibilité" isVisible={isVisible} />
                    <MetricCircle finalValue={beforeMetrics.seo} label="SEO" isVisible={isVisible} />
                </div>
            </div>

            {/* --- CORRECTION MOBILE ICI --- */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 sm:p-12 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                        OPTIMISÉ PAR YONYA LABS
                    </div>
                    <h3 className="text-2xl font-bold text-orange-400">
                        Notre Standard
                    </h3>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-around space-y-8 sm:space-y-0">
                    <MetricCircle finalValue={afterMetrics.performance} label="Performance" isVisible={isVisible} />
                    <MetricCircle finalValue={afterMetrics.accessibility} label="Accessibilité" isVisible={isVisible} />
                    <MetricCircle finalValue={afterMetrics.seo} label="SEO" isVisible={isVisible} />
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Example;