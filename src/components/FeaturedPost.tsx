import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FeaturedPost = () => {
  return (
    <AnimatedSection className="mb-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Article à la une"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-4">
              Article à la une
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Comment j'ai arrêté de fumer en 30 jours : Mon histoire
            </h2>
            <p className="text-gray-600 mb-6">
              Découvrez le parcours inspirant de Marie, qui a réussi à se libérer définitivement du tabac grâce à notre méthode unique et personnalisée.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                20 Mars 2024
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                10 min de lecture
              </span>
            </div>
            <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Lire l'article
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedPost;