// frontend/src/components/Estimator.js

import React, { useState, useMemo } from 'react';
import { Globe, ShoppingCart, Wrench } from 'lucide-react'; // Importer l'icône Wrench

const Estimator = () => {
  const [averageBill, setAverageBill] = useState(35);
  const [dailyCovers, setDailyCovers] = useState(50);
  const [selectedPackage, setSelectedPackage] = useState('complet'); // 'vitrine', 'complet', or 'sur-mesure'

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(value);
  };

  const { additionalRevenue, details, isCustom } = useMemo(() => {
    const monthlyCovers = dailyCovers * 30;
    
    if (selectedPackage === 'vitrine') {
      const newCovers = Math.round(monthlyCovers * 0.10); // 10% increase
      const revenue = newCovers * averageBill;
      return {
        additionalRevenue: revenue,
        details: `Basé sur ~${newCovers} couverts en plus par mois grâce à une meilleure visibilité.`,
        isCustom: false,
      };
    }

    if (selectedPackage === 'complet') {
      const newCoversFromVisibility = Math.round(monthlyCovers * 0.10);
      const revenueFromVisibility = newCoversFromVisibility * averageBill;

      const onlineOrdersPerDay = 10;
      const onlineOrderBill = averageBill * 0.8;
      const revenueFromOnlineOrders = onlineOrdersPerDay * onlineOrderBill * 30;
      
      const totalRevenue = revenueFromVisibility + revenueFromOnlineOrders;
      
      return {
        additionalRevenue: totalRevenue,
        details: `Basé sur ~${newCoversFromVisibility} couverts de plus et ~${onlineOrdersPerDay * 30} commandes en ligne par mois.`,
        isCustom: false,
      };
    }
    
    if (selectedPackage === 'sur-mesure') {
        return {
            additionalRevenue: 0, // Pas de calcul chiffré
            details: 'Un logiciel sur mesure peut optimiser vos stocks, votre temps et votre rentabilité de manière unique.',
            isCustom: true,
        }
    }

    return { additionalRevenue: 0, details: '', isCustom: false };

  }, [averageBill, dailyCovers, selectedPackage]);


  return (
    <section className="bg-gray-900 text-white py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Quel sera votre retour sur investissement ?
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Entrez les chiffres actuels de votre restaurant et découvrez le revenu additionnel que nous pouvons générer pour vous.
        </p>

        <div className="mt-16 max-w-5xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
          
          <div className='mb-12'>
            <h3 className="text-xl font-semibold text-white mb-6">Étape 1 : Votre situation actuelle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="averageBill" className="font-medium text-gray-300">Votre addition moyenne</label>
                  <span className="text-xl font-semibold text-white bg-gray-700 px-3 py-1 rounded-md">{formatCurrency(averageBill)}</span>
                </div>
                <input
                  type="range" id="averageBill" min="15" max="150" value={averageBill}
                  onChange={(e) => setAverageBill(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-slider"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="dailyCovers" className="font-medium text-gray-300">Vos couverts par jour</label>
                  <span className="text-xl font-semibold text-white bg-gray-700 px-3 py-1 rounded-md">{dailyCovers}</span>
                </div>
                <input
                  type="range" id="dailyCovers" min="10" max="400" value={dailyCovers}
                  onChange={(e) => setDailyCovers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-slider"
                />
              </div>
            </div>
          </div>
          
          <div>
             <h3 className="text-xl font-semibold text-white mb-6">Étape 2 : Choisissez une solution pour simuler vos gains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              <div className="flex flex-col gap-4">
                  {/* Vitrine */}
                  <button onClick={() => setSelectedPackage('vitrine')} className={`p-5 text-left rounded-xl border-2 transition-all duration-300 flex items-start gap-4 ${selectedPackage === 'vitrine' ? 'bg-white/10 border-orange-500' : 'bg-gray-900 border-gray-700 hover:border-gray-500'}`}>
                      <div className="bg-orange-500/20 p-3 rounded-lg"><Globe className="w-6 h-6 text-orange-400" /></div>
                      <div>
                          <h4 className="font-bold text-lg">Site Vitrine</h4>
                          <p className="text-sm text-gray-400">Attirez plus de clients en salle.</p>
                      </div>
                  </button>
                  {/* Complet */}
                  <button onClick={() => setSelectedPackage('complet')} className={`p-5 text-left rounded-xl border-2 transition-all duration-300 flex items-start gap-4 ${selectedPackage === 'complet' ? 'bg-white/10 border-orange-500' : 'bg-gray-900 border-gray-700 hover:border-gray-500'}`}>
                       <div className="bg-orange-500/20 p-3 rounded-lg"><ShoppingCart className="w-6 h-6 text-orange-400" /></div>
                      <div>
                          <h4 className="font-bold text-lg">Site Complet</h4>
                          <p className="text-sm text-gray-400">Créez une nouvelle source de revenus.</p>
                      </div>
                  </button>
                  {/* Sur Mesure */}
                  <button onClick={() => setSelectedPackage('sur-mesure')} className={`p-5 text-left rounded-xl border-2 transition-all duration-300 flex items-start gap-4 ${selectedPackage === 'sur-mesure' ? 'bg-white/10 border-orange-500' : 'bg-gray-900 border-gray-700 hover:border-gray-500'}`}>
                       <div className="bg-orange-500/20 p-3 rounded-lg"><Wrench className="w-6 h-6 text-orange-400" /></div>
                      <div>
                          <h4 className="font-bold text-lg">Développement Sur Mesure</h4>
                          <p className="text-sm text-gray-400">Optimisez votre gestion et vos opérations.</p>
                      </div>
                  </button>
              </div>

              <div className="flex flex-col justify-center text-center bg-gray-900 p-8 rounded-xl border border-gray-700">
                {isCustom ? (
                    <>
                        <h4 className="text-2xl font-bold text-white">Un projet unique, des gains uniques.</h4>
                        <p className="text-gray-400 mt-2 mb-6">Discutons de vos besoins pour vous proposer une solution qui transforme votre restaurant.</p>
                        <a href="#contact" className="mt-auto inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                            Demander une analyse
                        </a>
                    </>
                ) : (
                    <>
                        <p className="text-lg text-gray-400">Revenu mensuel additionnel</p>
                        <p className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400 my-3">
                        {formatCurrency(additionalRevenue)}
                        </p>
                        <p className="text-sm text-gray-500 min-h-[40px]">{details}</p>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;