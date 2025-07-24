export function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-800 mb-6">
                Somos desarrolladores y gerenciadores{" "}
                <span className="text-gold-600">hotelero-inmobiliarios</span>
              </h2>
              
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p className="text-lg">
                  Nacimos como operadores de turismo receptivo en Argentina y durante años 
                  lideramos el mercado de pasajeros brasileños que elegían Bariloche como destino.
                </p>
                
                <p>
                  A partir de esta actividad, construimos un fuerte vínculo con la cadena Hilton, 
                  de esa alianza nació{" "}
                  <strong className="text-primary-800">Hampton by Hilton Bariloche:</strong>{" "}
                  desarrollado, construido y actualmente gerenciado por nosotros.
                </p>
                
                <p>
                  <strong className="text-primary-800">Iconcenter & Hampton by Hilton Rosario</strong>{" "}
                  son la continuidad de ese proceso, con el objetivo de traer a nuestra ciudad 
                  el primer hotel de la cadena y constituyendo un hecho inédito en la historia 
                  turística de la región.
                </p>
                
                <p>
                  El camino recorrido en el mercado turístico argentino nos llevó a expandir 
                  horizontes fuera del país y presentar el{" "}
                  <strong className="text-primary-800">Pool de Inversión Punta Cana:</strong>{" "}
                  nuestra primera oportunidad de inversión internacional en la perla del Caribe.
                </p>
                
                <p>
                  Tras el éxito conseguido decidimos volver al origen con el lanzamiento de{" "}
                  <strong className="text-primary-800">Tru by Hilton Bariloche:</strong>{" "}
                  el complemento ideal para Hampton, reafirmando nuestra confianza en el destino 
                  y la alianza con Hilton.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-800 mb-2">Excelencia</h3>
                <p className="text-sm text-neutral-600">Estándares internacionales en cada proyecto</p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-800 mb-2">Experiencia</h3>
                <p className="text-sm text-neutral-600">Más de 20 años en el mercado turístico</p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-800 mb-2">Confianza</h3>
                <p className="text-sm text-neutral-600">Alianza estratégica con Hilton</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Conocer Más
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-600">
                  <h4 className="font-semibold text-primary-800 mb-2">Turismo Receptivo</h4>
                  <p className="text-neutral-600 text-sm">
                    Lideramos el mercado de turismo brasileño en Bariloche, 
                    construyendo relaciones sólidas y experiencia en hotelería.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gold-600">
                  <h4 className="font-semibold text-primary-800 mb-2">Alianza con Hilton</h4>
                  <p className="text-neutral-600 text-sm">
                    Desarrollamos Hampton by Hilton Bariloche, nuestro primer 
                    proyecto hotelero internacional de gran éxito.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-primary-800 mb-2">Expansión Nacional</h4>
                  <p className="text-neutral-600 text-sm">
                    Iconcenter y Hampton by Hilton Rosario marcan nuestra 
                    expansión a nuevos mercados estratégicos.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-600">
                  <h4 className="font-semibold text-primary-800 mb-2">Proyección Internacional</h4>
                  <p className="text-neutral-600 text-sm">
                    Pool de Inversión Punta Cana y Tru by Hilton Bariloche 
                    consolidan nuestra visión global.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary-600 via-gold-600 via-green-600 to-teal-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 