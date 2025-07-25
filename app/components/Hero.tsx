export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Proyectos{" "}
                <span className="text-gold-400">Memorables</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-2xl">
                Somos desarrolladores y gerenciadores hotelero-inmobiliarios
              </p>
            </div>

            <div className="prose prose-lg text-blue-100 max-w-2xl">
              <p>
                Creamos alianzas estratégicas con{" "}
                <strong className="text-white">Hilton</strong> para desarrollar
                proyectos de clase mundial en destinos premium como Bariloche,
                Rosario y mercados internacionales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#proyectos"
                className="bg-gold-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 text-center"
              >
                Invertir Ahora
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Placeholder for hotel image */}
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-playfair text-2xl font-bold text-primary-800">
                      Hampton by Hilton
                    </h3>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-gold-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-600">
                    "Entre los mejores Hampton by Hilton del mundo"
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-neutral-500">
                    <span>📍 Bariloche, Argentina</span>
                    <span>🏨 Operativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 