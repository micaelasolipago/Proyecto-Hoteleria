const projects = [
  {
    id: 1,
    title: "Tru by Hilton Bariloche",
    subtitle: "Volvemos al origen",
    location: "Bariloche, Argentina",
    status: "En Desarrollo",
    description: "El complemento ideal para Hampton, reafirmando nuestra confianza en el destino y la alianza con Hilton.",
    features: ["Estándares Hilton", "Ubicación Premium", "ROI Proyectado 12%"],
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
    badge: "Nuevo"
  },
  {
    id: 2,
    title: "Hampton by Hilton Rosario",
    subtitle: "La seguridad del ladrillo con mayor rentabilidad",
    location: "Rosario, Argentina",
    status: "Disponible",
    description: "El primer hotel de la cadena Hilton en Rosario, constituyendo un hecho inédito en la historia turística de la región.",
    features: ["Primera cadena internacional", "Centro de la ciudad", "Gestión profesional"],
    image: "bg-gradient-to-br from-green-600 to-green-800",
    badge: "Destacado"
  },
  {
    id: 3,
    title: "Hampton by Hilton Bariloche",
    subtitle: "Invertí en una porción del paraíso",
    location: "Bariloche, Argentina",
    status: "Operativo",
    description: "Desarrollado, construido y actualmente gerenciado por nosotros. Entre los mejores Hampton by Hilton del mundo.",
    features: ["Operativo desde 2018", "Performance excepcional", "Referencia mundial"],
    image: "bg-gradient-to-br from-purple-600 to-purple-800",
    badge: "Éxito"
  },
  {
    id: 4,
    title: "Iconcenter Rosario",
    subtitle: "Un nuevo ícono de la ciudad",
    location: "Rosario, Argentina",
    status: "Completado",
    description: "Desarrollo mixto que incluye el Hampton by Hilton Rosario, marcando un hito en el desarrollo urbano de la ciudad.",
    features: ["Desarrollo mixto", "Ubicación estratégica", "Arquitectura icónica"],
    image: "bg-gradient-to-br from-orange-600 to-orange-800",
    badge: ""
  },
  {
    id: 5,
    title: "Pool de Inversión Punta Cana",
    subtitle: "La perla del Caribe",
    location: "Punta Cana, República Dominicana",
    status: "Internacional",
    description: "Nuestra primera oportunidad de inversión internacional en uno de los destinos turísticos más atractivos del Caribe.",
    features: ["Mercado internacional", "Destino premium", "Diversificación geográfica"],
    image: "bg-gradient-to-br from-teal-600 to-teal-800",
    badge: "Internacional"
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Cada proyecto es una oportunidad única de inversión respaldada por estándares internacionales 
            y la confianza de la marca Hilton.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              {/* Project Image/Visual */}
              <div className={`${project.image} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Status */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-playfair text-xl font-bold text-primary-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gold-600 font-medium text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 group-hover:bg-primary-700">
                  Conocer Más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">
              ¿Listo para invertir en el próximo proyecto?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Únete a los inversores que confían en nuestros desarrollos hoteleros de clase mundial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="bg-gold-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors duration-200"
              >
                Solicitar Información
              </a>
              <a
                href="#nosotros"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-200"
              >
                Conocer Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 