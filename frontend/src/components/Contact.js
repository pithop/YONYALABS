import React, { useState } from "react";
import { MapPin, Mail, Phone, Copy } from "lucide-react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import toast from 'react-hot-toast';

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const email = "senuoy122@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        toast.success('Email copié dans le presse-papiers !');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://formspree.io/f/mvgqjnyd", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message envoyé ! Nous vous répondrons bientôt.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error("Une erreur s'est produite.");
            }
        } catch (error) {
            toast.error('Oups ! Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <MapPin className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="text-slate-700 text-lg">Montpellier</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="text-slate-700 text-lg mr-2">{email}</span>
                <button onClick={handleCopyEmail} className="text-slate-400 hover:text-orange-500 transition-colors" title="Copier l'email">
                  <Copy size={18} />
                </button>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                {/* LA CORRECTION EST ICI :
                  J'ai remplacé name="_replyto" par name="email"
                */}
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-0.5 disabled:bg-slate-400 disabled:cursor-not-allowed">
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;