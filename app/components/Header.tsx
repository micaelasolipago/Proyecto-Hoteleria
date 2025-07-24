import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-playfair text-3xl font-bold text-primary-800">
              Argenway
            </h1>
            <span className="ml-2 text-sm text-neutral-600 font-medium">
              Proyectos memorables
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#proyectos"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Nuestros Proyectos
            </a>
            <a
              href="#nosotros"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Nosotros
            </a>
            <a
              href="#noticias"
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Noticias
            </a>
            <a
              href="#contacto"
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border border-neutral-200 rounded text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
              <a
                href="#proyectos"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Nuestros Proyectos
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#noticias"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Noticias
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-base font-medium bg-primary-600 text-white rounded-md hover:bg-primary-700 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 