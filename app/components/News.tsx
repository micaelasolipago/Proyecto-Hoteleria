const newsArticles = [
  {
    id: 1,
    title: "Hotel barilochense se encuentra entre los mejores Hampton by Hilton del mundo",
    excerpt: "Nuestro Hampton by Hilton Bariloche ha sido reconocido internacionalmente por su excepcional performance y estándares de calidad.",
    date: "2024-01-15",
    category: "Reconocimientos",
    readTime: "3 min lectura",
    image: "bg-gradient-to-br from-purple-600 to-purple-800",
    featured: true
  },
  {
    id: 2,
    title: "Hampton by Hilton Rosario: oportunidad de inversión única con estándares internacionales",
    excerpt: "El hotel de cadena Hilton se posiciona como la primera opción de inversión hotelera en Rosario con proyección de alta rentabilidad.",
    date: "2024-01-10",
    category: "Inversiones",
    readTime: "4 min lectura",
    image: "bg-gradient-to-br from-green-600 to-green-800",
    featured: false
  },
  {
    id: 3,
    title: "¿Qué es un condo-hotel? Guía para inversores",
    excerpt: "Presentamos una guía completa para inversores que buscan nuevas formas de rentabilidad en ladrillos mediante el modelo de inversión condo-hotel.",
    date: "2024-01-08",
    category: "Educación",
    readTime: "5 min lectura",
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
    featured: false
  },
  {
    id: 4,
    title: "Con Bariloche como estandarte",
    excerpt: "La performance de la ciudad patagónica continúa creciendo y el objetivo de replicar su gran momento se convirtió en prioridad.",
    date: "2024-01-05",
    category: "Mercado",
    readTime: "4 min lectura",
    image: "bg-gradient-to-br from-teal-600 to-teal-800",
    featured: false
  }
];

function getCategoryColor(category: string) {
  switch (category) {
    case 'Reconocimientos':
      return 'bg-gold-100 text-gold-800';
    case 'Inversiones':
      return 'bg-green-100 text-green-800';
    case 'Educación':
      return 'bg-blue-100 text-blue-800';
    case 'Mercado':
      return 'bg-teal-100 text-teal-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function News() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <section id="noticias" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Management{" "}
            <span className="text-gold-600">News</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Conocé las últimas novedades del sector y mantente informado sobre 
            nuestros proyectos y logros más recientes.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:flex">
                {/* Featured Image */}
                <div className={`lg:w-1/2 ${featuredArticle.image} h-64 lg:h-auto relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold-500 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-sm text-neutral-500 mb-4">
                        <span>{formatDate(featuredArticle.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      
                      <h3 className="font-playfair text-3xl font-bold text-primary-800 mb-4 leading-tight">
                        {featuredArticle.title}
                      </h3>
                      
                      <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div>
                      <button className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                        Leer Nota Completa
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Article Image */}
              <div className={`${article.image} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                  {formatDate(article.date)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center text-sm text-neutral-500 mb-3">
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-primary-800 mb-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <button className="w-full text-left text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 flex items-center justify-between group-hover:text-primary-700">
                  Leer más
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            Mantente informado
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter para recibir las últimas noticias, 
            oportunidades de inversión y actualizaciones de nuestros proyectos.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu dirección de email"
                className="flex-1 px-4 py-3 rounded-lg border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
              <button className="bg-gold-500 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-200 whitespace-nowrap">
                Suscribirse
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-3">
              No spam. Solo noticias relevantes sobre inversiones inmobiliarias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 