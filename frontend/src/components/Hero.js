import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* MODIFIÉ : On utilise la couleur "foreground" pour le texte principal */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Nous Créons des <span className="text-accent">Expériences Digitales</span> <br /> d'Exception pour les Restaurateurs
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                        De la conception de sites web modernes à la mise en place de logiciels sur mesure, nous propulsons votre restaurant à l'ère du numérique.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        // MODIFIÉ : Le bouton principal utilise la couleur "accent"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md shadow-lg"
                    >
                        Obtenir mon site à 900€
                    </a>
                    <a
                        href="#portfolio"
                        // MODIFIÉ : Le bouton secondaire a un style plus sobre
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-transparent border border-border hover:bg-secondary hover:text-secondary-foreground rounded-md shadow-sm"
                    >
                        Voir nos réalisations
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;