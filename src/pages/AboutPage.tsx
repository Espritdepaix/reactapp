import React from 'react';
import { Heart, Award, Users, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À Propos de No-Addict
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une approche innovante pour retrouver votre liberté naturelle
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Notre mission"
              className="rounded-xl shadow-xl w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Une Mission Claire
              </h2>
              <p className="text-gray-600">
                Depuis plus de 15 ans, No-Addict s'engage à transformer l'arrêt du tabac en une expérience positive et naturelle. Notre méthode unique combine des techniques innovantes et un accompagnement personnalisé pour vous aider à retrouver votre liberté.
              </p>
              <p className="text-gray-600">
                Nous croyons fermement que chaque personne possède en elle la capacité naturelle de se libérer du tabac. Notre rôle est simplement de révéler et d'activer ce potentiel déjà présent en vous.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Heart className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Une Passion</h3>
            <p className="text-gray-600">
              Nous sommes passionnés par l'accompagnement et le développement du potentiel humain.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Award className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Une Expertise</h3>
            <p className="text-gray-600">
              Une méthode éprouvée et des résultats concrets avec plus de 1000 personnes accompagnées.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Une Approche</h3>
            <p className="text-gray-600">
              Un accompagnement personnalisé et bienveillant adapté à chaque personne.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Mon Engagement
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Mon engagement va bien au-delà d'une simple méthode d'arrêt du tabac. Je m'engage personnellement auprès de chaque personne que j'accompagne, avec la conviction profonde que la liberté face au tabac est un droit fondamental.
              </p>
              <p>
                Cette conviction est née de mon propre parcours et de l'observation de milliers de personnes qui ont retrouvé leur liberté naturelle. J'ai développé la méthode No-Addict pour offrir une alternative aux approches traditionnelles qui maintiennent souvent les personnes dans un cycle de dépendance.
              </p>
              <p>
                Je m'engage à vous accompagner avec bienveillance, respect et professionnalisme. Mon objectif n'est pas seulement de vous aider à arrêter de fumer, mais de vous permettre de redécouvrir votre liberté naturelle et de transformer positivement votre vie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;