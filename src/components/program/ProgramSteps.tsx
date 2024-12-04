import React from 'react';
import { Target, Brain, Heart, Star } from 'lucide-react';

const steps = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Évaluation Personnalisée",
    description: "Un diagnostic complet de votre relation au tabac et de vos habitudes pour créer un plan sur mesure."
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Reprogrammation Mentale",
    description: "Des techniques de libération émotionnelle pour transformer votre relation avec le tabac."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Accompagnement Continu",
    description: "Un suivi régulier pour vous soutenir et ajuster le programme selon vos progrès."
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Libération Définitive",
    description: "Des outils concrets pour maintenir votre liberté et prévenir les rechutes."
  }
];

const ProgramSteps = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les 4 Étapes vers Votre Liberté
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un parcours structuré et progressif pour une transformation durable
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSteps;