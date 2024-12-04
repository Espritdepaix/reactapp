import React from 'react';
import { Shield, Users, Trophy } from 'lucide-react';

const Section = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi choisir notre programme ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche complète et personnalisée pour vous aider à arrêter de fumer définitivement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Méthode éprouvée</h3>
            <p className="text-gray-600">
              Un programme basé sur des années d'expérience et des résultats prouvés.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Suivi personnalisé</h3>
            <p className="text-gray-600">
              Un accompagnement sur mesure adapté à vos besoins et votre rythme.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Résultats durables</h3>
            <p className="text-gray-600">
              Des solutions concrètes pour maintenir votre arrêt sur le long terme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;