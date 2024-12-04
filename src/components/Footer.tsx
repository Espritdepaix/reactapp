import React from 'react';
import { Cigarette, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Cigarette className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">No-addict</span>
            </div>
            <p className="text-sm">
              10 secondes pour être libre, 10 minutes pour le rester
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="hover:text-blue-500">Accueil</a></li>
              <li><a href="#programme" className="hover:text-blue-500">Programme</a></li>
              <li><a href="#consultation" className="hover:text-blue-500">Consultation</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                01 23 45 67 89
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@no-addict.fr
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Paris, France
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Horaires</h3>
            <ul className="space-y-2">
              <li>Lundi - Vendredi: 9h - 19h</li>
              <li>Samedi: 9h - 17h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} No-addict. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;