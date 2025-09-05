// frontend/src/pages/Questionnaire.js

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from "sonner";
import { Building, Brush, Sparkles, CheckSquare, MessageSquare, Send, PartyPopper } from 'lucide-react';

const Questionnaire = () => {
  const [searchParams] = useSearchParams();
  const pack = searchParams.get('pack') || 'non spécifié';
  
  // Nouvelle gestion d'état manuelle pour contrôler le flux d'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const packTitles = {
    complet: 'Pack Complet',
    vitrine: 'Pack Vitrine',
    'sur-mesure': 'Pack Sur Mesure',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    const customApiUrl = `${process.env.REACT_APP_API_URL}/api/questionnaire`;
    // Assurez-vous que votre ID Formspree est bien celui pour le questionnaire
    const formspreeUrl = "https://formspree.io/f/xovnpogy"; 

    try {
        // --- Étape 1 : Soumission à Formspree pour la sauvegarde ---
        const responseFormspree = await fetch(formspreeUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!responseFormspree.ok) {
            // Si Formspree échoue, on arrête tout. Les données ne sont pas sauvées.
            throw new Error('La sauvegarde des données a échoué. Veuillez réessayer.');
        }

        // --- Étape 2 : Si Formspree réussit, on appelle notre API pour l'envoi des emails ---
        const responseApi = await fetch(customApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!responseApi.ok) {
            // L'email de confirmation n'est pas parti, mais c'est moins grave.
            toast.warning("Projet bien enregistré !", {
                description: "Nous n'avons pas pu envoyer l'e-mail de confirmation, mais nous avons bien reçu votre projet."
            });
        } else {
             toast.success("Projet soumis avec succès !");
        }

        setIsSuccess(true); // Affiche le message de remerciement
        
    } catch (error) {
        console.error("Erreur lors de la soumission:", error);
        toast.error("Une erreur est survenue", { 
            description: error.message || "Votre projet n'a pas pu être soumis. Veuillez nous contacter directement." 
        });
    } finally {
        setIsSubmitting(false);
    }
  };
  
  // Affiche un message de succès après la soumission
  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <PartyPopper className="w-16 h-16 text-turquoise mb-4" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">Merci pour votre confiance !</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          Nous avons bien reçu les informations de votre projet. Vous devriez recevoir un e-mail de confirmation d'ici quelques minutes. Notre équipe reviendra vers vous sous 24h.
        </p>
      </div>
    );
  }

  // --- Composants de formulaire réutilisables ---
  const FormSection = ({ icon: Icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-turquoise" />
        <h3 className="text-xl font-bold text-dark-navy">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const Label = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-1">{children}</label>
  );

  const Input = (props) => (
    <input {...props} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-turquoise/50 focus:border-turquoise transition-shadow duration-200" />
  );
  
  const Textarea = (props) => (
    <textarea {...props} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-turquoise/50 focus:border-turquoise transition-shadow duration-200" />
  );

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-dark-navy">Dites-nous tout sur votre projet</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Vous avez choisi le <span className="font-bold text-turquoise">{packTitles[pack] || pack}</span>. Pour nous aider à créer le site parfait, merci de remplir les informations ci-dessous.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
           <input type="hidden" name="pack" value={packTitles[pack] || pack} />

           <FormSection icon={Building} title="Votre Entreprise">
              <div>
                <Label htmlFor="nomEntreprise">Nom de l'entreprise</Label>
                <Input id="nomEntreprise" name="nomEntreprise" placeholder="Ex: Le Délice du Coin" required />
              </div>
              <div>
                <Label htmlFor="secteurActivite">Secteur d'activité</Label>
                <Input id="secteurActivite" name="secteurActivite" placeholder="Ex: Restaurant, Artisan, Coach sportif..." required />
              </div>
           </FormSection>

           <FormSection icon={Brush} title="Identité de Marque">
              <Label htmlFor="identiteMarque">Décrivez l'ambiance, le style et les valeurs que vous souhaitez transmettre.</Label>
              <Textarea id="identiteMarque" name="identiteMarque" placeholder="Ex: Moderne et épuré, traditionnel et chaleureux, luxueux..." rows="4" />
           </FormSection>

            <FormSection icon={Sparkles} title="Produits & Services">
                <Label htmlFor="produitsServices">Quels sont les principaux produits ou services que vous souhaitez mettre en avant ?</Label>
                <Textarea id="produitsServices" name="produitsServices" placeholder="Ex: Nos plats signatures, nos formules déjeuner, nos créations artisanales..." rows="4" />
            </FormSection>

            <FormSection icon={CheckSquare} title="Fonctionnalités souhaitées">
                <Label htmlFor="fonctionnalites">Avez-vous besoin de fonctionnalités spécifiques ?</Label>
                <Textarea id="fonctionnalites" name="fonctionnalites" placeholder="Ex: Réservation en ligne, galerie photo, blog, boutique en ligne (pour le sur-mesure)..." rows="4" />
            </FormSection>

            <FormSection icon={MessageSquare} title="Vos Coordonnées">
                 <div>
                    <Label htmlFor="name">Votre Nom & Prénom</Label>
                    <Input id="name" name="name" type="text" placeholder="Ex: Jean Dupont" required />
                 </div>
                 <div>
                    <Label htmlFor="email">Votre adresse e-mail</Label>
                    <Input id="email" name="email" type="email" placeholder="nom@exemple.com" required />
                 </div>
                 <div>
                    <Label htmlFor="telephone">Votre numéro de téléphone (optionnel)</Label>
                    <Input id="telephone" name="telephone" type="tel" placeholder="06 12 34 56 78" />
                 </div>
                 <div>
                    <Label htmlFor="message">Un dernier mot ? Une question ?</Label>
                    <Textarea id="message" name="message" placeholder="Avez-vous un site web existant ? Des exemples de sites que vous aimez ?" rows="4" />
                 </div>
            </FormSection>

            <div className="text-center mt-8">
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-transform duration-200 bg-turquoise rounded-lg shadow-lg hover:bg-teal hover:scale-105 focus:outline-none focus:ring-2 focus:ring-turquoise/40 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    <Send className="w-5 h-5 mr-3" />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon projet'}
                </button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Questionnaire;