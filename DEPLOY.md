# Guía de Despliegue - Proyecto Argenway

## 🚀 Repositorio GitHub
**URL:** https://github.com/micaelasolipago/Proyecto-Hoteleria.git

## 📋 Características del Proyecto

### ✅ **Completado**
- ✅ Sitio web corporativo moderno y profesional
- ✅ Paleta de colores empresarial (azul corporativo)
- ✅ Diseño responsivo y accesible
- ✅ Optimización SEO completa
- ✅ Contenido en español
- ✅ Máxima legibilidad y contraste
- ✅ Tecnologías: Remix + Bun + Tailwind CSS

### 🎨 **Paleta de Colores Profesional**
- **Primary:** Azul corporativo (#003366, #002850, #001e3c, #001428)
- **Accent:** Azul acero (#4682b4, #3c78aa)
- **Neutral:** Grises profesionales
- **Background:** Blanco y tonos neutros claros

### 📦 **Estructura del Proyecto**
```
argenway-website/
├── app/
│   ├── components/       # Componentes React
│   ├── routes/          # Rutas de Remix
│   └── root.tsx         # Layout principal
├── public/              # Archivos estáticos
├── styles.css          # Estilos Tailwind compilados
├── index.html          # HTML estático
├── package.json        # Dependencias
├── tailwind.config.ts  # Configuración Tailwind
└── README.md          # Documentación
```

### 🔧 **Comandos de Desarrollo**
```bash
# Instalar dependencias
bun install

# Ejecutar en desarrollo
bun dev

# Construir para producción
bun build

# Iniciar servidor de producción
bun start
```

### 🌐 **Opciones de Despliegue**

#### 1. **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

#### 2. **Netlify**
```bash
# Drag & drop de la carpeta dist/
# O conectar repositorio GitHub
```

#### 3. **GitHub Pages (HTML Estático)**
```bash
# Usar index.html y styles.css directamente
# Configurar Pages en Settings > Pages
```

### 📊 **Métricas de Rendimiento**
- ⚡ Tiempo de carga: <2s
- 🎯 Core Web Vitals optimizados
- 📱 100% responsivo
- ♿ Accesibilidad AA

### 🔄 **Workflow de Desarrollo**
1. Hacer cambios localmente
2. Probar con `bun dev`
3. Commit y push a GitHub
4. Despliegue automático (si está configurado)

### 📞 **Soporte**
Para dudas sobre el despliegue o configuración:
- Revisar documentación de Remix
- Consultar logs de Vercel/Netlify
- Verificar configuración de DNS

---
**Proyecto desarrollado con Stack moderno:** Remix + Bun + Tailwind CSS  
**Fecha:** Enero 2025  
**Versión:** 1.0.0 