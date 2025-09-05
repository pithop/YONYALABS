// frontend/src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importations nécessaires
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Pour savoir sur quelle page nous sommes
    const navigate = useNavigate(); // Pour naviguer et faire le scroll

    // Les liens pointent maintenant vers la racine du site
    const navLinks = [
        { href: '/#services', text: 'Services' },
        { href: '/#portfolio', text: 'Portfolio' },
        { href: '/#example', text: 'Exemple Concret' },
        { href: '/#why-me', text: 'Pourquoi Nous' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const hash = href.substring(href.indexOf('#')); // Extrait l'ancre (ex: #services)

        // Si on est sur une autre page, on navigue d'abord vers l'accueil
        if (location.pathname !== '/') {
            navigate(href);
        } else {
            // Si on est déjà sur l'accueil, on fait un smooth scroll
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false); // Ferme le menu mobile après le clic
    };
    
    // Ferme le menu si la page change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className="bg-dark-navy text-white sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* On utilise notre nouvelle logique de navigation */}
                    <a href="/#hero" onClick={(e) => handleNavClick(e, '/#hero')} className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80">
                        YonYa<span className="font-medium text-turquoise">Labs</span>
                    </a>
                    <div className="hidden md:block">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="font-medium hover:text-turquoise transition-colors"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:block">
                         <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-turquoise text-white hover:bg-teal rounded-lg shadow-md">
                            Nous Contacter
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:text-turquoise focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mobile-menu bg-dark-navy">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="px-4 pb-4">
                        <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-turquoise text-white hover:bg-teal rounded-lg shadow-md">
                           Nous Contacter
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;