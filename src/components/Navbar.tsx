import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cigarette, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Cigarette className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">No-addict</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
            <Link to="/programme" className="text-gray-600 hover:text-blue-600">Programme</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">A propos</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Prendre RDV
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600" onClick={closeMenu}>Accueil</Link>
              <Link to="/programme" className="block px-3 py-2 text-gray-600 hover:text-blue-600" onClick={closeMenu}>Programme</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600" onClick={closeMenu}>A propos</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-blue-600" onClick={closeMenu}>Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600" onClick={closeMenu}>Contact</Link>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center" onClick={closeMenu}>
                <Phone className="h-4 w-4 mr-2" />
                Prendre RDV
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;