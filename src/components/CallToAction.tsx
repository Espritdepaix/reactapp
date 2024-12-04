import React from 'react';

const CallToAction = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 via-blue-700/95 to-purple-800/95"></div>
      </div>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ne remettez plus votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              liberté à demain
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            La vrai question n'est pas de savoir <span className="font-semibold">SI</span> vous pouvez vous libérer du tabac, mais <span className="font-semibold">QUAND</span> vous choisirez de révéler votre liberté naturelle. La méthode No addict vous offre un chemin simple, efficace et durable vers cette liberté.
          </p>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CallToAction;