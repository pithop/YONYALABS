import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#services', text: 'Services' },
        { href: '#portfolio', text: 'Portfolio' },
        { href: '#example', text: 'Exemple Concret' },
        { href: '#why-me', text: 'Pourquoi Nous' },
    ];

    return (
        // MODIFIÉ : Fond transparent (hérite de background), ombre subtile
        <header className="bg-background/80 sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="#hero" className="flex-shrink-0">
                        <img className="h-10 w-auto" src={logo} alt="YonYa Labs Logo" />
                    </a>
                    <div className="hidden md:block">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    // MODIFIÉ : Couleur de texte principale et couleur d'accent au survol
                                    className="nav-link font-medium text-foreground/80 hover:text-accent transition-colors"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:block">
                         <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-9 rounded-md">
                            Nous Contacter
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            // MODIFIÉ : Couleur du bouton mobile
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-accent focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                // MODIFIÉ : Fond du menu mobile
                <div className="md:hidden mobile-menu border-t border-border/40 bg-background">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                // MODIFIÉ : Couleurs des liens mobiles
                                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-secondary hover:text-secondary-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="px-4 pb-4">
                        <a href="#contact" className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-9 rounded-md">
                           Nous Contacter
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;