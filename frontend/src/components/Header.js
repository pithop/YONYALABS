import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// SUPPRIMÉ : L'import du logo n'est plus nécessaire
// import logo from '../assets/logo-white.png'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#services', text: 'Services' },
        { href: '#portfolio', text: 'Portfolio' },
        { href: '#example', text: 'Exemple Concret' },
        { href: '#why-me', text: 'Pourquoi Nous' },
    ];

    return (
        <header className="bg-dark-navy text-white sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* MODIFIÉ : L'image est remplacée par un logo texte stylisé */}
                    <a href="#hero" className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80">
                        YonYa<span className="font-medium text-turquoise">Labs</span>
                    </a>
                    <div className="hidden md:block">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-medium hover:text-turquoise transition-colors"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:block">
                         <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-turquoise text-white hover:bg-teal rounded-lg shadow-md">
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
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="px-4 pb-4">
                        <a href="#contact" className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-turquoise text-white hover:bg-teal rounded-lg shadow-md">
                           Nous Contacter
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;