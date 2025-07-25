export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold text-white mb-2">
              Argenway
            </h3>
            <p className="text-blue-200 text-lg font-medium mb-4">
              Proyectos memorables
            </p>
            <p className="text-blue-100 leading-relaxed max-w-md">
              Somos desarrolladores y gerenciadores hotelero-inmobiliarios. 
              Creamos alianzas estratégicas con Hilton para desarrollar 
              proyectos de clase mundial.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#proyectos" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nuestros Proyectos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-blue-200 text-sm">inversiones@argenway.com</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-blue-200 text-sm">+54 9 3416 156 498</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {currentYear} Argenway. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-200 text-sm">Alianza Hilton</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 