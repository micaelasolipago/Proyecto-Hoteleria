const stats = [
  {
    id: 1,
    number: "20+",
    label: "Años de Experiencia",
    description: "En el mercado turístico y hotelero"
  },
  {
    id: 2,
    number: "5+",
    label: "Proyectos Activos",
    description: "Desarrollos hoteleros premium"
  },
  {
    id: 3,
    number: "100%",
    label: "Tasa de Éxito",
    description: "En proyectos completados"
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Números que nos{" "}
            <span className="text-gold-400">Respaldan</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Más de dos décadas construyendo confianza y creando valor para nuestros inversores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="font-playfair text-4xl font-bold text-primary-800 mb-2">
                  {stat.number}
                </div>
                <h3 className="font-semibold text-lg text-primary-700 mb-2">
                  {stat.label}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 