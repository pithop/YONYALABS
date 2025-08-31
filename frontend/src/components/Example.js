import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const comparisonData = {
    standard: {
        title: 'Site Standard',
        scores: { Performance: 65, SEO: 50, 'Bonnes Pratiques': 70, Accessibilité: 75 },
        gradient: 'from-orange-400 to-red-500',
    },
    yonyalabs: {
        title: 'Notre Standard',
        scores: { Performance: 98, SEO: 95, 'Bonnes Pratiques': 100, Accessibilité: 100 },
        gradient: 'from-fresh-green to-turquoise',
    },
};

const MetricBar = ({ label, score, gradient }) => (
    <div className="w-full mb-4">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <span className="font-bold text-dark-navy">{score} / 100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`bg-gradient-to-r ${gradient} h-2.5 rounded-full`} style={{ width: `${score}%` }}></div>
        </div>
    </div>
);

const Example = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section 
            id="example" 
            className="py-20 bg-light-gray" 
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy">
                        La Différence se Mesure en <span className="text-turquoise">Résultats</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-turquoise font-semibold">
                        Des performances qui propulsent votre visibilité et vos réservations.
                    </p>
                </div>

                {/* CORRECTION : On a retiré `motion`, `variants`, `initial` et `animate` de cette div. C'est maintenant une div normale. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Carte "Site Standard" */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-center text-gray-500 mb-6">{comparisonData.standard.title}</h3>
                        {Object.entries(comparisonData.standard.scores).map(([key, value]) => (
                            <MetricBar key={key} label={key} score={value} gradient={comparisonData.standard.gradient} />
                        ))}
                    </div>

                    {/* Carte "Notre Standard" */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl border-2 border-turquoise transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-center text-dark-navy mb-6">{comparisonData.yonyalabs.title}</h3>
                        {Object.entries(comparisonData.yonyalabs.scores).map(([key, value]) => (
                            <MetricBar key={key} label={key} score={value} gradient={comparisonData.yonyalabs.gradient} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Example;