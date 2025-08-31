import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="bg-gradient-to-b from-[#0B132B] to-[#111936] text-white py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* MODIFIÉ : Le mot-clé "Expériences Digitales" est maintenant en turquoise */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight sm:text-5xl">
                        Nous Créons des <span className="text-turquoise">Expériences Digitales</span> <br /> d'Exception pour les Restaurateurs
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
                        De la conception de sites web modernes à la mise en place de logiciels sur mesure, nous propulsons votre restaurant à l'ère du numérique.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* MODIFIÉ : CTA Principal - Fond plein, plus grand et avec une micro-interaction au survol */}
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-transform duration-200 bg-turquoise rounded-lg shadow-lg hover:bg-teal hover:scale-105"
                    >
                        Obtenir mon site à 900€
                    </a>
                    {/* MODIFIÉ : CTA Secondaire - Style "outline" pour une hiérarchie claire */}
                    <a
                        href="#portfolio"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-turquoise transition-colors bg-transparent border-2 border-turquoise rounded-lg hover:bg-turquoise hover:text-white"
                    >
                        Voir nos réalisations
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;