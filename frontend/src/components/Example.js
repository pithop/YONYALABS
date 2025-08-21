import React from "react";

const Example = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          📌 Exemple concret
        </h2>
        
        <div className="bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed">
            <span className="text-orange-500 font-semibold">👉 Imaginez :</span> un client vous trouve sur Google → 
            il découvre votre site, vos menus, vos avis → il réserve ou commande directement en ligne. 
            <span className="font-semibold text-slate-900"> Résultat :</span> plus de clients, plus de visibilité, 
            et moins de gestion manuelle pour vous.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Example;