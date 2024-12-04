import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez notre approche
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notre méthode unique pour vous accompagner vers une vie sans tabac
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-white p-3 shadow-[0_0_50px_rgba(0,0,0,0.1)] backdrop-blur-sm">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 mix-blend-overlay"></div>
              
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Présentation No-addict"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <div className="absolute inset-0 flex items-center justify-center group">
                <button className="bg-white/90 hover:bg-white text-blue-600 rounded-full p-5 transform transition-all duration-300 group-hover:scale-110 shadow-xl hover:shadow-2xl backdrop-blur-sm">
                  <Play className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre vidéo de présentation vous explique en détail comment nous pouvons vous aider à arrêter de fumer définitivement grâce à notre programme personnalisé.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;