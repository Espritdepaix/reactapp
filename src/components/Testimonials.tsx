import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Après 15 ans de tabagisme, je n'en reviens pas toujours pas de la facilité avec laquelle j'ai arrêté. Les micro-pauses de 10 secondes ont tous changé.",
    name: "Marc",
    age: 42
  },
  {
    text: "Je pensais devoir me battre, mis la transformation s'est faite naturellement. C'est comme si la cigarette avait perdu un pouvoir sur moi.",
    name: "Sophie",
    age: 35
  },
  {
    text: "Après 20 ans de tabagisme, je n'aurai jamais cru que l'arrêt pouvait être aussi naturel.",
    name: "Marie",
    age: 45
  },
  {
    text: "Non seulement j'ai arrêté de fumer, mais toute ma vie s'est transformée.",
    name: "Sophie",
    age: 52
  },
  {
    text: "La simplicité de la méthode m'a conquis. Plus besoin de lutter !",
    name: "Thomas",
    age: 38
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils ont arrêté de fumer avec nous
          </h2>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow
                ${index === testimonials.length - 1 && testimonials.length % 2 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.age} ans</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;