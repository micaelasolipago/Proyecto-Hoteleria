const newsArticles = [
  {
    id: 1,
    title: "Hotel barilochense se encuentra entre los mejores Hampton by Hilton del mundo",
    excerpt: "Nuestro Hampton by Hilton Bariloche ha sido reconocido internacionalmente por su excepcional performance y estándares de calidad.",
    date: "2024-01-15",
    category: "Reconocimientos"
  },
  {
    id: 2,
    title: "Hampton by Hilton Rosario: oportunidad de inversión única",
    excerpt: "El hotel de cadena Hilton se posiciona como la primera opción de inversión hotelera en Rosario.",
    date: "2024-01-10",
    category: "Inversiones"
  }
];

export function News() {
  return (
    <section id="noticias" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-48 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-primary-900 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary-800 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 