import React from 'react';
import BlogHeader from '../components/BlogHeader';
import BlogCategories from '../components/BlogCategories';
import FeaturedPost from '../components/FeaturedPost';
import BlogGrid from '../components/BlogGrid';

const BlogPage = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos articles, conseils et astuces pour vous accompagner dans votre parcours vers une vie sans tabac
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>
        <BlogCategories />
        <FeaturedPost />
        <BlogGrid />
      </div>
    </div>
  );
};

export default BlogPage;