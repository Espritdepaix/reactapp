import React from 'react';
import AnimatedSection from './AnimatedSection';

const categories = [
  'Tous les articles',
  'Arrêt du tabac',
  'Bien-être',
  'Témoignages',
  'Conseils pratiques'
];

const BlogCategories = () => {
  return (
    <AnimatedSection className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              index === 0
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default BlogCategories;