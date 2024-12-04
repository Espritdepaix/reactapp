import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Essentiel",
    price: "138",
    description: "Pour commencer votre parcours vers la liberté",
    features: [
      "Suivi continu",
      "1 heure de coaching individuelle",
      "Support par email",
      "Accès aux ressources en ligne",
      "Paiement en 3 fois possible"
    ],
    highlighted: true
  },
  {
    name: "Coaching en ligne",
    price: "40",
    description: "Pour un accompagnement supplémentaire",
    duration: "30 minutes",
    features: [
      "Session individuelle en visio",
      "Conseils personnalisés",
      "Exercices pratiques",
      "Suivi post-séance"
    ],
    highlighted: false
  }
];

const ProgramPricing = () => {
  return (
    <div id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Programme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un investissement pour votre santé et votre liberté
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'shadow-2xl scale-105 border-2 border-blue-500' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full flex items-center text-sm font-semibold">
                  <Sparkles className="h-4 w-4 mr-1" />
                  Recommandé
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-900">
                  {plan.price}€
                  {plan.duration && (
                    <span className="text-lg text-gray-500 block mt-1">
                      / {plan.duration}
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className={`h-5 w-5 mr-2 ${plan.highlighted ? 'text-blue-600' : 'text-blue-500'}`} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-md font-semibold transition-colors ${
                  plan.highlighted 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Choisir cette option
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPricing;