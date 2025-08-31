import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    // Liens de navigation pour un accès facile
    const navLinks = [
        { href: '#services', text: 'Services' },
        { href: '#portfolio', text: 'Portfolio' },
        { href: '#example', text: 'Exemple Concret' },
        { href: '#why-me', text: 'Pourquoi Nous' },
    ];

    return (
        <footer className="bg-dark-navy text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    
                    {/* Colonne 1: Logo et Mission */}
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#hero" className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80 inline-block mb-4">
                            YonYa<span className="font-medium text-turquoise">Labs</span>
                        </a>
                        <p className="text-white/70 max-w-xs">
                            Nous propulsons les restaurateurs dans l'ère du numérique avec des solutions web sur mesure.
                        </p>
                    </div>

                    {/* Colonne 2: Liens de Navigation */}
                    <div>
                        <h3 className="font-bold text-lg tracking-wide mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.text}>
                                    <a href={link.href} className="text-white/70 hover:text-turquoise transition-colors">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3: Contact */}
                    <div>
                        <h3 className="font-bold text-lg tracking-wide mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:contact@yonyalabs.com" className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-turquoise transition-colors">
                                    <Mail size={20} />
                                    <span>contact@yonyalabs.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/yonya-labs-7864a9381/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-turquoise transition-colors">
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ligne de séparation et Copyright */}
                <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-sm text-white/60 mb-4 sm:mb-0">
                        © {new Date().getFullYear()} YonYa Labs. Tous droits réservés.
                    </p>
                    <p className="text-sm text-white/60">
                        Développé avec passion à Montpellier, France.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;