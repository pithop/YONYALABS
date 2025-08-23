// frontend/src/components/Footer.js

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section Logo & Mission */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-2">YonYa Labs</h2>
            <p className="text-slate-400 max-w-xs">
              L'excellence digitale au service des restaurateurs passionnés.
            </p>
          </div>
          
          {/* Section Navigation */}
          <div>
            <h3 className="font-semibold text-slate-200 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-orange-400 transition-colors">Nos Services</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-orange-400 transition-colors">Portfolio</a></li>
              <li><a href="#whyme" className="text-slate-400 hover:text-orange-400 transition-colors">Pourquoi Nous ?</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="font-semibold text-slate-200 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
                <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-orange-400" />
                    {/* Utilisation de la variable email */}
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-orange-400 transition-colors">
                        {contactInfo.email}
                    </a>
                </li>
                <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-orange-400" />
                    {/* Utilisation de la variable phone */}
                    <span>{contactInfo.phone}</span>
                </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {currentYear} YonYa Labs. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;