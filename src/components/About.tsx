import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Salut ! C'est Christian, Votre accompagnateur vers le bien-être...
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Mon parcours vers la création de la méthode No-Addict est le fruit d'une double vocation : une profonde sensibilité à la dimension spirituelle de l'être et un engagement sincère dans le soin des autres.
              </p>
              <p>
                C'est de cette expérience de terrain, combinée à ma compréhension de la dimension spirituelle de l'être, qu'est née la méthode No-Addict. Une approche unique qui ne repose ni sur la lutte ni sur la volonté, mais sur un principe simple et profond : la libération spontanée.
              </p>
              <p>
                Aujourd'hui, je mets cette expertise au service d'un accompagnement en ligne, rendant cette méthode accessible au plus grand nombre. Mon ambition est de vous montrer qu'une autre voie est possible - une voie où la liberté n'est pas à conquérir, mais à redécouvrir.
              </p>
            </div>
            <Link 
              to="/about"
              className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              En savoir plus
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Consultation d'arrêt du tabac"
              className="rounded-xl shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;