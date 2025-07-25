import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Hablemos de tu{" "}
            <span className="text-gold-600">Inversión</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Estamos aquí para responder todas tus preguntas y ayudarte a encontrar 
            la oportunidad de inversión perfecta para ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-6">
              Envíanos tu consulta
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tu interés en nuestros proyectos..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary-800 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">Email</h4>
                  <p className="text-neutral-600">inversiones@argenway.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">Teléfono</h4>
                  <p className="text-neutral-600">+54 9 3416 156 498</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 