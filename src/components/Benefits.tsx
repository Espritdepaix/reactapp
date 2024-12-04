import React from 'react';
import { Heart, Brain, Clock, Wallet } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Santé Améliorée",
      description: "Retrouvez votre souffle et votre énergie dès les premières semaines"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Approche Cognitive",
      description: "Une méthode qui reprogramme naturellement vos habitudes"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Résultats Rapides",
      description: "Des effets positifs visibles dès les premiers jours"
    },
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Économies Réelles",
      description: "Économisez jusqu'à 3000€ par an en arrêtant de fumer"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;