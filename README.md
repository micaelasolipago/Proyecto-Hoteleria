# Argenway - Sitio Web Empresarial

Un sitio web moderno y elegante para **Argenway**, desarrolladores y gerenciadores hotelero-inmobiliarios especializados en proyectos con la cadena Hilton.

## 🌟 Características

- **Diseño Empresarial Moderno**: Interfaz profesional que refleja la calidad de los proyectos Argenway
- **Totalmente Responsive**: Optimizado para desktop, tablet y móvil
- **Rendimiento Optimizado**: Construido con Remix y Bun para máxima velocidad
- **SEO Friendly**: Metadatos optimizados para motores de búsqueda
- **Animaciones Suaves**: Efectos visuales profesionales con CSS y Tailwind
- **Formulario de Contacto**: Sistema completo para captura de leads
- **Newsletter**: Suscripción integrada para marketing
- **Redes Sociales**: Enlaces a plataformas sociales

## 🏗️ Secciones del Sitio

1. **Hero**: Presentación impactante con llamadas a la acción
2. **Proyectos**: Showcase de los 5 proyectos principales de Argenway
3. **Nosotros**: Historia y trayectoria de la empresa con timeline visual
4. **Estadísticas**: Números que respaldan la experiencia empresarial
5. **Noticias**: Management News con artículos destacados
6. **Contacto**: Formulario completo con información de contacto
7. **Footer**: Información completa y enlaces importantes

## 🚀 Tecnologías Utilizadas

- **Framework**: [Remix](https://remix.run/) - Framework React de alto rendimiento
- **Runtime**: [Bun](https://bun.sh/) - Runtime JavaScript ultrarrápido
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Tipografías**: Playfair Display (headings) + Inter (body)
- **Iconografía**: Heroicons y SVG personalizados
- **Animaciones**: Tailwind CSS + CSS personalizado

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Bun instalado (https://bun.sh/docs/installation)
- Node.js 20+ (para compatibilidad)

### Instalación
```bash
# Clonar el repositorio
git clone [repositorio]
cd argenway-website

# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos Disponibles
```bash
# Desarrollo
bun dev

# Build para producción
bun build

# Preview del build
bun start

# Linting
bun lint

# Type checking
bun typecheck
```

## 🎨 Personalización

### Colores de Marca
Los colores están definidos en `tailwind.config.ts`:
- **Primary**: Azules corporativos (#0ea5e9 - #0c4a6e)
- **Gold**: Acentos dorados (#f59e0b - #78350f)
- **Neutral**: Grises neutros para texto y fondos

### Fuentes
- **Playfair Display**: Títulos y headings
- **Inter**: Texto de cuerpo y navegación

### Componentes
Todos los componentes están en la carpeta `app/components/`:
- `Header.tsx` - Navegación principal
- `Hero.tsx` - Sección hero principal
- `Projects.tsx` - Showcase de proyectos
- `About.tsx` - Historia de la empresa
- `Stats.tsx` - Estadísticas empresariales
- `News.tsx` - Sección de noticias
- `Contact.tsx` - Formulario de contacto
- `Footer.tsx` - Pie de página

## 📱 Responsividad

El sitio está optimizado para:
- **Desktop**: 1920px+
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuración de Producción

### Variables de Entorno
Crear un archivo `.env` con:
```
# Email configuration
EMAIL_SERVICE=your-email-service
EMAIL_USER=your-email
EMAIL_PASS=your-password

# Analytics
GOOGLE_ANALYTICS=your-ga-id
```

### Deploy
El sitio es compatible con:
- **Vercel** (recomendado para Remix)
- **Netlify**
- **Railway**
- **Fly.io**

## 📊 SEO y Analytics

### Metadatos Incluidos
- Títulos optimizados por página
- Descripciones meta personalizadas
- Open Graph tags para redes sociales
- Structured data para mejor indexación

### Recomendaciones
1. Configurar Google Analytics
2. Implementar Google Search Console
3. Configurar sitemap.xml
4. Implementar schema markup para proyectos inmobiliarios

## 🎯 Conversión y Marketing

### Lead Generation
- Formulario de contacto optimizado
- CTAs estratégicamente ubicados
- Newsletter subscription
- Información de contacto prominente

### Trust Signals
- Estadísticas de experiencia
- Testimonios y logros
- Alianza con Hilton destacada
- Información de contacto completa

## 🛠️ Mantenimiento

### Actualizar Proyectos
Editar el array `projects` en `app/components/Projects.tsx`

### Agregar Noticias
Editar el array `newsArticles` en `app/components/News.tsx`

### Modificar Información de Contacto
Actualizar los datos en `app/components/Contact.tsx` y `app/components/Footer.tsx`

## 📞 Soporte

Para consultas sobre el desarrollo o personalización del sitio:
- Email: [tu-email]
- GitHub: [tu-github]

---

**Desarrollado con ❤️ para Argenway** - Creando experiencias digitales que reflejan la excelencia de sus proyectos hotelero-inmobiliarios.
