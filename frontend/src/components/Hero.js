import React from "react";

const Hero = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          YonYa Labs
        </h1>
        <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-8">
          Solutions Web & IT pour Restaurateurs
        </p>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed">
            Je suis développeur web & IT indépendant (micro-entreprise) spécialisé 
            dans les solutions pour les restaurants, snacks et cafés. Mon objectif : 
            aider les restaurateurs à gagner en visibilité et à simplifier leur 
            gestion quotidienne grâce à des outils numériques simples, efficaces 
            et à prix abordable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;