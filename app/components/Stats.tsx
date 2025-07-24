const stats = [
  {
    id: 1,
    number: "20+",
    label: "Años de Experiencia",
    description: "En el mercado turístico y hotelero",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    color: "primary"
  },
  {
    id: 2,
    number: "5+",
    label: "Proyectos Activos",
    description: "Desarrollos hoteleros premium",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    color: "gold"
  },
  {
    id: 3,
    number: "100%",
    label: "Tasa de Éxito",
    description: "En proyectos completados",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    color: "green"
  },
  {
    id: 4,
    number: "3",
    label: "Países",
    description: "Presencia internacional",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
      </svg>
    ),
    color: "teal"
  }
];

const achievements = [
  {
    title: "Hampton by Hilton Bariloche",
    description: "Entre los mejores Hampton by Hilton del mundo",
    year: "2018"
  },
  {
    title: "Primer Hilton en Rosario",
    description: "Hecho inédito en la historia turística regional",
    year: "2021"
  },
  {
    title: "Expansión Internacional",
    description: "Ingreso al mercado caribeño premium",
    year: "2022"
  }
];

function getColorClasses(color: string) {
  switch (color) {
    case 'primary':
      return {
        bg: 'bg-primary-100',
        text: 'text-primary-600',
        border: 'border-primary-200'
      };
    case 'gold':
      return {
        bg: 'bg-gold-100',
        text: 'text-gold-600',
        border: 'border-gold-200'
      };
    case 'green':
      return {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200'
      };
    case 'teal':
      return {
        bg: 'bg-teal-100',
        text: 'text-teal-600',
        border: 'border-teal-200'
      };
    default:
      return {
        bg: 'bg-neutral-100',
        text: 'text-neutral-600',
        border: 'border-neutral-200'
      };
  }
}

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Números que nos{" "}
            <span className="text-gold-400">Respaldan</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Más de dos décadas construyendo confianza y creando valor para nuestros inversores
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={colors.text}>
                    {stat.icon}
                  </div>
                </div>
                
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
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h3 className="font-playfair text-3xl font-bold text-white text-center mb-12">
            Logros Destacados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-900 font-bold text-lg">
                    {achievement.year}
                  </span>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="font-playfair text-3xl font-bold text-primary-900 mb-4">
              Sé parte de nuestros próximos logros
            </h3>
            <p className="text-primary-800 text-lg mb-8 max-w-2xl mx-auto">
              Únete a una trayectoria de éxito respaldada por años de experiencia 
              y la confianza de la marca Hilton.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors duration-200 shadow-lg"
            >
              Comenzar mi Inversión
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 