import React from "react";
import { Check } from "lucide-react";

const WhyMe = () => {
  const reasons = [
    "Prix raisonnables et adaptés",
    "Expérience dans la restauration",
    "Personnalisation selon vos besoins",
    "Support et accompagnement",
    "Rapidité d'exécution"
  ];

  return (
    <section id="pourquoi" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          🎯 Pourquoi travailler avec moi ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Check className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;