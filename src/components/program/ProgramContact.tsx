import React from 'react';
import { Mail } from 'lucide-react';

const ProgramContact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Des questions ?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Je suis là pour répondre à toutes vos questions sur le programme. N'hésitez pas à me contacter par email.
          </p>
          <a 
            href="mailto:contact@no-addict.fr"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramContact;