import React from 'react';
import AnimatedSection from './AnimatedSection';

const BlogHeader = () => {
  return (
    <AnimatedSection className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Notre Blog
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Découvrez nos articles, conseils et astuces pour vous accompagner dans votre parcours vers une vie sans tabac
      </p>
      <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
    </AnimatedSection>
  );
};

export default BlogHeader;