import React from 'react';
// MODIFIÉ : L'icône Github a été retirée de l'import
import { Linkedin, Mail } from 'lucide-react';
import logo from '../assets/logo-white.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img className="h-10 w-auto" src={logo} alt="YonYa Labs Logo" />
                        <p className="text-sm mt-2 text-primary-foreground/60">© {new Date().getFullYear()} YonYa Labs. Tous droits réservés.</p>
                    </div>
                    <div className="flex space-x-4">
                        {/* SUPPRIMÉ : Le lien vers GitHub a été retiré */}
                        <a href="https://www.linkedin.com/in/yonya-labs-7864a9381/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:contact@yonyalabs.com" className="text-primary-foreground hover:text-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;