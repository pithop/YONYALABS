import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Code, ShieldCheck } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const features = [
    {
        icon: Rocket,
        title: 'Design & Performance',
        description: 'Nous créons des sites ultra-rapides avec un design moderne qui captive vos clients dès la première seconde.',
    },
    {
        icon: Users,
        title: 'Expertise Restaurateurs',
        description: 'Nous ne sommes pas juste des développeurs. Nous comprenons les défis du secteur de la restauration.',
    },
    {
        icon: Code,
        title: 'Technologie de Pointe',
        description: 'React, Tailwind CSS, Vercel. Nous utilisons les meilleurs outils pour garantir un site fiable et évolutif.',
    },
    {
        icon: ShieldCheck,
        title: 'Accompagnement',
        description: 'De la mise en ligne à la maintenance, nous sommes votre partenaire digital sur le long terme.',
    },
];

const WhyMe = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      // On ajoute un "staggerChildren" pour animer les cartes les unes après les autres
      visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
              duration: 0.6, 
              ease: "easeOut",
              staggerChildren: 0.1 
          } 
      }
    };
    
    // On définit une animation simple pour les cartes (les "items")
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (       
        <motion.section 
            id="why-me" 
            className="py-20 bg-light-gray" // Fond gris clair pour l'alternance
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy">
                        Conçu par des Experts, pour des <span className="text-turquoise">Passionnés</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Nous allons au-delà du simple site web. Nous construisons votre succès en ligne.
                    </p>
                </div>
                {/* CORRECTION : On a retiré les props d'animation de cette div car le parent gère le "stagger" */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const iconColorClass = index % 2 === 0 ? 'text-turquoise' : 'text-fresh-green';

                        return (
                            // CORRECTION : On anime chaque carte individuellement avec `itemVariants`
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className={`inline-block p-4 bg-light-gray rounded-full mb-4`}>
                                    <Icon className={`w-8 h-8 ${iconColorClass}`} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-navy mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default WhyMe;