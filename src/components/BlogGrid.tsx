import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const posts = [
  {
    title: "Les bienfaits immédiats de l'arrêt du tabac",
    excerpt: "Découvrez comment votre corps se régénère dès les premières heures sans tabac. Des changements positifs s'opèrent rapidement.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Santé"
  },
  {
    title: "5 techniques de respiration anti-stress",
    excerpt: "La gestion du stress est cruciale dans l'arrêt du tabac. Apprenez des exercices de respiration simples et efficaces.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "12 Mars 2024",
    readTime: "7 min",
    category: "Bien-être"
  },
  {
    title: "Alimentation et arrêt du tabac",
    excerpt: "Comment adapter son alimentation pour faciliter le sevrage tabagique ? Découvrez les aliments à privilégier.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "10 Mars 2024",
    readTime: "6 min",
    category: "Nutrition"
  },
  {
    title: "Témoignage : 1 an sans tabac",
    excerpt: "Sophie nous raconte son parcours et partage ses conseils pour réussir à arrêter de fumer définitivement.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "8 Mars 2024",
    readTime: "8 min",
    category: "Témoignages"
  },
  {
    title: "Les substituts nicotiniques",
    excerpt: "Guide complet sur les différents substituts nicotiniques disponibles et leur utilisation optimale.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "5 Mars 2024",
    readTime: "6 min",
    category: "Conseils"
  },
  {
    title: "Sport et sevrage tabagique",
    excerpt: "Comment l'activité physique peut vous aider à arrêter de fumer et améliorer votre santé globale.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "3 Mars 2024",
    readTime: "5 min",
    category: "Sport"
  }
];

const BlogGrid = () => {
  return (
    <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Lire la suite
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </AnimatedSection>
  );
};

export default BlogGrid;