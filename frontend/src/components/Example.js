import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Search, MousePointerClick, ShoppingCart } from 'lucide-react';

const steps = [
    {
        icon: <Search size={28} className="text-orange-500" />,
        title: "Découverte",
        description: "Un client recherche un restaurant sur Google et trouve votre nouveau site, optimisé pour le référencement."
    },
    {
        icon: <MousePointerClick size={28} className="text-orange-500" />,
        title: "Interaction",
        description: "Impressionné par le design et les photos, il consulte votre menu et vos avis directement en ligne."
    },
    {
        icon: <ShoppingCart size={28} className="text-orange-500" />,
        title: "Conversion",
        description: "Convaincu, il réserve une table ou commande à emporter en quelques clics, sans quitter votre site."
    }
];

const Example = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section 
            id="example" 
            ref={ref}
            className={`py-24 bg-slate-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Un processus simple, un résultat puissant</h2>
                </div>

                <div className="relative">
                    {/* Ligne de la timeline */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-200" aria-hidden="true"></div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center w-full">
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : (index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10')}`} style={{transitionDelay: `${index * 200}ms`}}>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                                        <p className="text-slate-500">{step.description}</p>
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-2 border-slate-200 transition-transform duration-500 ease-out ${isVisible ? 'scale-100' : 'scale-0'}`} style={{transitionDelay: `${index * 200}ms`}}>
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className={`mt-16 text-center bg-white p-6 rounded-lg shadow-md border border-slate-200 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '800ms'}}>
                    <p className="text-xl font-semibold text-slate-800">
                        <span className="text-orange-500">Résultat :</span> Plus de clients, une meilleure visibilité et moins de gestion manuelle pour vous.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Example;