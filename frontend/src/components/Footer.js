import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Sparkles, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { contactInfo } from '../config';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: '/#services', text: 'Nos Formules & Tarifs' },
    { href: '/#simulator', text: 'Simulateur de Gain ROI' },
    { href: '/#portfolio', text: 'Nos Réalisations' },
    { href: '/#example', text: 'Audit de Performances' },
    { href: '/#geo-presence', text: 'SEO Local & Google Maps' },
    { href: '/#process', text: 'Notre Méthode en 7 Jours' },
    { href: '/#testimonials', text: 'Avis Restaurateurs' },
    { href: '/#faq', text: 'Questions Fréquentes' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const hash = href.substring(href.indexOf('#'));

    if (location.pathname !== '/') {
      navigate(href);
    } else {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#050811] text-white border-t border-white/10 relative overflow-hidden">
      {/* Glow décoratif discret */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-turquoise/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Marque & Positionnement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="/#hero"
                onClick={(e) => handleNavClick(e, '/#hero')}
                className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white transition-opacity hover:opacity-90 mb-4"
              >
                <span className="w-8 h-8 rounded-lg bg-turquoise/20 border border-turquoise/30 flex items-center justify-center text-turquoise">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span>YonYa<span className="text-turquoise">Labs</span></span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-turquoise/10 text-turquoise border border-turquoise/20 ml-1">
                  .fr
                </span>
              </a>

              <p className="text-sm text-white/70 max-w-sm leading-relaxed mb-6">
                L'agence d'ingénierie web haute performance dédiée aux restaurants, traiteurs et artisans de bouche. Des créations sur-mesure pour maximiser vos réservations directes sans aucune commission.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Propriétaire à 100% de votre nom de domaine & site</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/yonya-labs-7864a9381/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn YonYa Labs"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-turquoise/20 border border-white/10 hover:border-turquoise/30 flex items-center justify-center text-white/70 hover:text-turquoise transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email YonYa Labs"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-turquoise/20 border border-white/10 hover:border-turquoise/30 flex items-center justify-center text-white/70 hover:text-turquoise transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/90 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
              Navigation
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-turquoise transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-turquoise transition-colors" />
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <Link
                to="/questionnaire"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-turquoise hover:text-white transition-colors"
              >
                <span>Accéder au Questionnaire de Devis</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Coordonnées & Support */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/90 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
              Contact Direct
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-turquoise transition-colors"
                >
                  <Mail className="w-4 h-4 text-turquoise shrink-0 mt-0.5" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-3 text-white/70 hover:text-turquoise transition-colors"
                >
                  <Phone className="w-4 h-4 text-turquoise shrink-0 mt-0.5" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-turquoise shrink-0 mt-0.5" />
                <span>Montpellier, France (Déploiements nationaux)</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <p className="text-xs text-white/50 mb-1">Disponibilité du support</p>
              <p className="text-xs font-semibold text-white">Lundi - Vendredi : 9h00 - 19h00</p>
              <p className="text-[11px] text-turquoise mt-1">Urgences WhatsApp 7j/7 pour nos clients</p>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-white/50">
          <p>© {new Date().getFullYear()} YonYa Labs (yonyalabs.fr). Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu & développé avec exigence à Montpellier pour les restaurateurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;