import React from 'react';
import { Feather, Settings, Sparkles, CheckCircle2 } from 'lucide-react';

const MethodFeatures = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voici ce qui rend cette méthode unique
          </h2>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Feather className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Une approche sans effort
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Reprogrammation mentale efficace</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Techniques de gestion du stress</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Stratégies anti-craving prouvées</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Settings className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Une méthode qui s'adapte à votre vie
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Plan d'arrêt sur mesure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Accompagnement continu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Soutien psychologique adapté</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
              Des bénéfices bien au-delà de l'arrêt du tabac
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Amélioration de la qualité de vie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Regain d'énergie et de vitalité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Meilleure santé globale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodFeatures;