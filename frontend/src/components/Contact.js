import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { toast } from "sonner"

const Contact = () => {
    const [state, handleSubmit] = useForm("xkgvjyap");
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    if (state.succeeded) {
        toast.success("Message envoyé !", {
            description: "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.",
            duration: 5000,
        });
        // Note: Le formulaire ne se réinitialise pas automatiquement avec Formspree de cette manière.
        // On pourrait masquer le formulaire et afficher un message de succès permanent ici si nécessaire.
    }
    
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
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className={labelStyles}>Nom</label>
                                    <input id="name" type="text" name="name" required className={inputStyles} />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelStyles}>Email</label>
                                    <input id="email" type="email" name="email" required className={inputStyles} />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className={labelStyles}>Votre message</label>
                                <textarea id="message" name="message" rows="5" required className={inputStyles}></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="text-center">
                                {/* MODIFIÉ : Bouton primaire turquoise */}
                                <button type="submit" disabled={state.submitting} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-transform duration-200 bg-turquoise rounded-lg shadow-lg hover:bg-teal hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                                    Envoyer le message
                                </button>
                                {/* AJOUT : Message rassurant */}
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