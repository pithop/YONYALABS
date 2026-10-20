import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: '/#services', text: 'Services' },
    { href: '/#estimator', text: 'Simulateur' },
    { href: '/#portfolio', text: 'Portfolio' },
    { href: '/#example', text: 'Performances' },
    { href: '/#process', text: 'Méthode' },
    { href: '/#testimonials', text: 'Avis' },
    { href: '/#faq', text: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B132B]/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-[#0B132B] border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & status */}
          <div className="flex items-center gap-4">
            <a
              href="/#hero"
              onClick={(e) => handleNavClick(e, '/#hero')}
              className="text-2xl font-black tracking-tight text-white transition-opacity hover:opacity-90 flex items-center gap-1.5"
            >
              <span>YonYa</span>
              <span className="text-gradient-turquoise">Labs</span>
            </a>
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Dispo pour projets
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-turquoise transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Contact
            </a>
            <Link
              to="/questionnaire?pack=complet"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-turquoise hover:bg-teal rounded-lg shadow-md hover:scale-[1.03] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/questionnaire?pack=complet"
              className="inline-flex items-center px-3 py-1.5 text-xs font-bold text-white bg-turquoise rounded-md"
            >
              Devis
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#060A17]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/85 hover:text-turquoise hover:bg-white/5"
              >
                {link.text}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/85 hover:text-turquoise hover:bg-white/5"
            >
              Nous Contacter
            </a>
          </nav>
          <div className="pt-3">
            <Link
              to="/questionnaire?pack=complet"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-turquoise hover:bg-teal rounded-lg shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Configurer Mon Projet en 2 min
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
