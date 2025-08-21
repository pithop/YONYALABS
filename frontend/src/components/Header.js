import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-900">YonYa Labs</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pourquoi")}
              className="nav-link text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="cta-button bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Demander un devis
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:text-slate-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pourquoi")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                Tarifs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-600"
              >
                Demander un devis
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;