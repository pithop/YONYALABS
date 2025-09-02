import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { toast } from "sonner";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    // --- NOUVELLE FONCTION handleSubmit AVEC LOGGING AMÉLIORÉ ---
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            const responseData = await response.json();
            
            if (!response.ok) {
                console.error('Erreur serveur:', { 
                    status: response.status, 
                    data: responseData 
                });
                throw new Error(responseData.error || 'Une erreur est survenue');
            }
            
            toast.success("Message envoyé avec succès !");
            event.target.reset();
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            
            // Gestion d'erreur plus précise
            if (error.message.includes('Failed to fetch')) {
                toast.error("Erreur de connexion", { 
                    description: "Impossible de contacter le serveur" 
                });
            } else {
                toast.error("Erreur d'envoi", { 
                    description: error.message 
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const inputStyles = "w-full px-4 py-3 bg-light-gray border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent transition-shadow";
    const labelStyles = "block text-sm font-semibold text-dark-navy mb-2";
    
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section 
            id="contact" 
            className="py-20 bg-white" 
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy">
                            Prêt à Lancer Votre Projet ? <span className="text-turquoise">Contactez-Nous</span>
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            Remplissez le formulaire ci-dessous et parlons de la manière dont nous pouvons aider votre restaurant à briller en ligne.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {/* On utilise notre nouvelle fonction handleSubmit */}
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className={labelStyles}>Nom</label>
                                    <input id="name" type="text" name="name" required className={inputStyles} />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelStyles}>Email</label>
                                    <input id="email" type="email" name="email" required className={inputStyles} />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className={labelStyles}>Votre message</label>
                                <textarea id="message" name="message" rows="5" required className={inputStyles}></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-transform duration-200 bg-turquoise rounded-lg shadow-lg hover:bg-teal hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                                    {/* Le texte du bouton change pendant l'envoi */}
                                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                </button>
                                <p className="mt-4 text-sm text-gray-500">
                                    Nous vous répondrons sous 24h.
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;