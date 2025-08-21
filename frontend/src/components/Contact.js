import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
        id="contact" 
        ref={ref}
        className={`py-20 bg-white transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-lg border border-slate-200">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Mes coordonnées
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                <span className="text-slate-700 text-lg">Montpellier</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-500 mr-4" />
                <a href="mailto:senuoy122@gmail.com" className="text-slate-700 text-lg hover:text-orange-500 transition-colors duration-200">
                  senuoy122@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-4" />
                <a href="tel:0605740011" className="text-slate-700 text-lg hover:text-orange-500 transition-colors duration-200">
                  06 05 74 00 11
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Envoyez-moi un message
            </h3>
            
            <form 
              action="https://formspree.io/f/mvgqjnyd"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nom
                </label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows="5" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-0.5">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;