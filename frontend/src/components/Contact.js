// src/components/Contact.js

import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section 
            id="contact" 
            ref={ref}
            className={`py-20 sm:py-28 bg-white transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Parlons de votre projet</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Prêt à passer à la vitesse supérieure ? Contactez-nous pour discuter de vos ambitions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <form 
                        action="https://formspree.io/f/YOUR_FORM_ID"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* Les champs du formulaire restent les mêmes */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nom</label>
                            <input type="text" name="name" id="name" required className="block w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                            <input type="email" name="email" id="email" required className="block w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea name="message" id="message" rows="5" required className="block w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"></textarea>
                        </div>
                        <div>
                            <button 
                                type="submit"
                                className="w-full bg-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300"
                            >
                                Envoyer le message
                            </button>
                        </div>
                    </form>

                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Nos coordonnées</h3>
                        <ul className="space-y-5 text-slate-700">
                            <li className="flex items-center"><Mail className="w-6 h-6 text-orange-500 mr-4" /><span>34yonya@gmail.com</span></li>
                            <li className="flex items-center"><Phone className="w-6 h-6 text-orange-500 mr-4" /><span>+33 6 12 34 56 78</span></li>
                            <li className="flex items-start"><MapPin className="w-6 h-6 text-orange-500 mr-4 mt-1" /><span>Basés à Montpellier, <br/>disponibles partout en France.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;