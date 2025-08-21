import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Example = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
        ref={ref}
        className={`py-20 bg-slate-50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Exemple concret
        </h2>
        
        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            <span className="font-semibold">Imaginez :</span> un client vous trouve sur Google → 
            il découvre votre site, vos menus, vos avis → il réserve ou commande directement en ligne. 
            <br/>
            <strong className="font-semibold text-slate-900"> Résultat :</strong> plus de clients, plus de visibilité, 
            et moins de gestion manuelle pour vous.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Example;