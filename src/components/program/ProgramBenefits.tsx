import React from 'react';
import { Heart, Brain, Wallet, Clock, Battery, Smile } from 'lucide-react';

const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Santé Améliorée",
    description: "Retrouvez votre souffle et votre énergie naturellement"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Clarté Mentale",
    description: "Libérez-vous du brouillard mental lié au tabac"
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Économies Réelles",
    description: "Économisez plus de 3000€ par an"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Résultats Rapides",
    description: "Constatez les premiers changements dès la première semaine"
  },
  {
    icon: <Battery className="h-6 w-6" />,
    title: "Plus d'Énergie",
    description: "Retrouvez votre vitalité naturelle"
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: "Bien-être Global",
    description: "Améliorez votre qualité de vie globale"
  }
];

const ProgramBenefits = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les Bénéfices du Programme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les avantages d'une vie sans tabac
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <div className="text-blue-600">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramBenefits;