import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProgramHeader = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Un Programme Unique pour
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
            Retrouver Votre Liberté
          </span>
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          La Méthode NO-ADDICT : 10 secondes pour être libre, 10 minutes pour le rester.
        </p>
        <button 
          onClick={scrollToPricing}
          className="btn-primary"
        >
          Commencer maintenant
          <ArrowRight className="ml-2 h-5 w-5 inline" />
        </button>
      </div>
    </div>
  );
};

export default ProgramHeader;