import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: "Les bienfaits immédiats de l'arrêt du tabac",
    excerpt: "Découvrez comment votre corps se régénère dès les premières heures sans tabac. Des changements positifs s'opèrent rapidement, renforçant votre motivation.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "15 Mars 2024",
    readTime: "5 min",
    slug: "bienfaits-immediats-arret-tabac"
  },
  {
    title: "5 techniques de respiration anti-stress",
    excerpt: "La gestion du stress est cruciale dans l'arrêt du tabac. Apprenez des exercices de respiration simples et efficaces pour gérer les moments difficiles.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "12 Mars 2024",
    readTime: "7 min",
    slug: "techniques-respiration-anti-stress"
  },
  {
    title: "Alimentation et arrêt du tabac",
    excerpt: "Comment adapter son alimentation pour faciliter le sevrage tabagique ? Découvrez les aliments à privilégier et ceux à éviter pendant cette période.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "10 Mars 2024",
    readTime: "6 min",
    slug: "alimentation-arret-tabac"
  }
];

const BlogList = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos derniers articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conseils, astuces et informations pour vous accompagner dans votre parcours vers une vie sans tabac
          </p>
          <div className="w-24 h-0.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;