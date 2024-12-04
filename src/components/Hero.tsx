import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-purple-800/90"></div>
      </div>
      
      <div className="relative z-30 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent animate-gradient">
              Libérez-vous du tabac
            </span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent animate-gradient">
              naturellement
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment vous libérer du tabac naturellement, sans stress ni privation - même si toutes vos tentatives précédentes ont échoué.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-primary">
              Découvrir le programme
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button className="btn-secondary">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;