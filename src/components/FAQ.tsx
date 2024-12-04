import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Combien de temps dure le programme ?",
    answer: "Le programme est personnalisé et s'adapte à votre rythme. En général, il s'étend sur 8 à 12 semaines, avec un suivi continu pendant 6 mois pour assurer une transition durable vers une vie sans tabac."
  },
  {
    question: "Est-ce que je vais prendre du poids en arrêtant de fumer ?",
    answer: "La prise de poids n'est pas une fatalité. Notre programme inclut des conseils nutritionnels et des techniques spécifiques pour gérer l'appétit. En moyenne, 70% de nos patients maintiennent leur poids stable pendant l'arrêt du tabac."
  },
  {
    question: "Que faire si j'ai déjà essayé d'arrêter plusieurs fois sans succès ?",
    answer: "Les tentatives précédentes ne sont pas des échecs mais des expériences précieuses. Notre méthode s'appuie sur une approche différente, cognitive et comportementale, qui prend en compte vos tentatives passées pour construire une stratégie personnalisée."
  },
  {
    question: "Le programme est-il remboursé par la sécurité sociale ?",
    answer: "Une partie du programme peut être prise en charge par la sécurité sociale et certaines mutuelles. Nous vous aidons à constituer votre dossier de remboursement et proposons des facilités de paiement."
  },
  {
    question: "Puis-je suivre le programme à distance ?",
    answer: "Oui, nous proposons un suivi en téléconsultation tout aussi efficace que les séances en présentiel. Notre plateforme sécurisée permet un accompagnement personnalisé où que vous soyez."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir sur notre programme d'arrêt du tabac
            </p>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;