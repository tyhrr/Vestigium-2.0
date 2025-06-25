# 🌍 Vestigium 2.0

## 📋 Descripción del Proyecto

Vestigium 2.0 es un sitio web multiidioma (inglés/croata) desarrollado en **Vanilla JavaScript**, HTML5 y CSS3, enfocado en el desarrollo sostenible de comunidades. Incluye un sistema avanzado de cambio de idioma, navegación responsive y arquitectura modular.

## 🚀 Estado del Proyecto

**✅ COMPLETADO Y FUNCIONAL**

- ✅ Sistema multiidioma completamente implementado
- ✅ Tests organizados y documentados  
- ✅ Proyecto limpio y listo para producción
- ✅ Documentación consolidada
- 🚀 **Listo para producción**

---

## 🌐 SISTEMA MULTIIDIOMA

### **Funcionalidades Principales:**
- ✅ Cambio dinámico entre inglés y croata
- ✅ Persistencia de preferencia de idioma en localStorage
- ✅ Traducción automática de contenido, meta tags y atributos
- ✅ Interfaz visual integrada en la navegación
- ✅ Auto-inicialización al cargar la página

### **Idiomas Soportados:**
- **Inglés** (por defecto): Código `en`
- **Croata**: Código `hr`

### **Cómo Funciona:**
1. El sistema detecta elementos con atributos `data-i18n`
2. Busca las traducciones correspondientes en el objeto `TRANSLATIONS`
3. Actualiza el contenido dinámicamente
4. Guarda la preferencia del usuario

### **Uso Básico:**
```html
<h1 data-i18n="hero.title">Building Sustainable Communities</h1>
<p data-i18n="hero.subtitle">Texto que se traduce automáticamente</p>
```

---

## 🎯 Objetivos del Proyecto

- **Vanilla JavaScript**: Sin frameworks ni librerías externas
- **Mantenibilidad**: Código limpio, bien estructurado y documentado
- **Buenas Prácticas**: Estándares de la industria en desarrollo web
- **Diseño Minimalista**: Estética simple con paleta verde/blanco/gris
- **SEO Optimizado**: Implementación técnica completa
- **Semántica HTML5**: Estructura accesible y semánticamente correcta
- **Multiidioma**: Sistema avanzado de internacionalización

---

## 🎨 Guía de Diseño

### Paleta de Colores
```css
:root {
  --primary-green: #2E7D32;      /* Verde principal */
  --light-green: #4CAF50;        /* Verde claro */
  --dark-green: #1B5E20;         /* Verde oscuro */
  --white: #FFFFFF;              /* Blanco */
  --light-gray: #F5F5F5;         /* Gris claro */
  --medium-gray: #9E9E9E;        /* Gris medio */
  --dark-gray: #424242;          /* Gris oscuro para contraste */
  --text-primary: #212121;       /* Texto principal */
  --text-secondary: #757575;     /* Texto secundario */
}
```

### Principios de Diseño
- **Minimalismo**: Espacios en blanco generosos
- **Contraste**: Uso de grises oscuros para legibilidad
- **Tipografía**: Jerarquía clara y legible
- **Responsive**: Mobile-first approach

---

## 🏗️ ARQUITECTURA DEL PROYECTO

### **Estructura de Archivos:**
```
📁 Vestigium 2.0/
├── 📄 index.html                 # Página principal
├── 📄 manifest.json              # PWA manifest
├── 📄 robots.txt                 # SEO robots
├── 📄 sitemap.xml               # Sitemap
├── 📄 package.json              # Dependencias npm
├── 📄 .gitignore                # Git ignore rules
├── 📄 README.md                 # Esta documentación completa
├── 📁 src/                      # Código fuente
│   ├── 📁 assets/
│   │   ├── 📁 js/
│   │   │   ├── language-switcher.js  # Sistema multiidioma
│   │   │   └── main.js               # JavaScript principal
│   │   └── 📁 css/
│   │       ├── main.css              # Estilos principales
│   │       └── navigation-advanced.css # Navegación y selector idioma
│   ├── 📁 components/           # Componentes reutilizables
│   ├── 📁 data/                 # Datos del proyecto
│   ├── 📁 images/               # Imágenes
│   │   ├── 📁 icons/            # Iconos SVG
│   │   ├── 📁 favicon/          # Favicons
│   │   └── 📁 content/          # Imágenes de contenido
│   ├── 📁 js/                   # Scripts adicionales
│   └── 📁 pages/                # Páginas adicionales
└── 📁 tests/                    # Tests organizados
    ├── 📁 language-switcher/    # Tests de funcionalidad
    ├── 📁 scripts/              # Scripts de verificación
    ├── 📁 archived-originals/   # Backup de archivos
    └── README.md                # Documentación de tests
```

### **Archivos Principales:**
- **`index.html`**: Página principal con sistema multiidioma
- **`src/assets/js/language-switcher.js`**: Motor del sistema de idiomas
- **`src/assets/css/navigation-advanced.css`**: Estilos para navegación y selector de idioma

---

## 🔧 CORRECCIONES Y MEJORAS IMPLEMENTADAS

### **1. Organización de Archivos de Prueba**
- **Problema**: Archivos de test y debug desordenados en el directorio raíz
- **Solución**: Creada estructura organizada en `/tests/`

### **2. Corrección de la Lógica de Traducción**
- **Problema**: La función `t()` esperaba objetos anidados, pero las traducciones eran planas
- **Solución**: Refactorizado el objeto `TRANSLATIONS` para usar estructura anidada

**Antes:**
```javascript
const TRANSLATIONS = {
  en: {
    'hero.title': 'Building Sustainable Communities',
    'hero.subtitle': 'Subtitle text'
  }
}
```

**Después:**
```javascript
const TRANSLATIONS = {
  en: {
    hero: {
      title: 'Building Sustainable Communities',
      subtitle: 'Subtitle text'
    }
  }
}
```

### **3. Mejoras en el Sistema de Inicialización**
- ✅ Auto-inicialización mejorada con fallbacks
- ✅ Sistema de reintentos automáticos
- ✅ Mejor detección del estado de carga del DOM
- ✅ Manejo robusto de errores

### **4. Corrección de Rutas de Archivos**
- ✅ Todas las rutas corregidas de `/src/` a `src/` para compatibilidad local
- ✅ Referencias correctas en archivos de test
- ✅ Rutas relativas actualizadas en la nueva estructura

### **5. Limpieza del Proyecto**
- ✅ Eliminados archivos de test del directorio raíz
- ✅ Removido directorio `tools` vacío
- ✅ Consolidada toda la documentación

---

## 🧪 TESTING Y VERIFICACIÓN

### **Tests Disponibles:**

#### **Tests Completos (Recomendados):**
- `tests/language-switcher/test-complete.html` - UI completa similar al index.html
- `tests/language-switcher/working-test.html` - Test funcional con estilos
- `tests/language-switcher/test-direct.html` - Test comparativo

#### **Tests de Debug:**
- `tests/language-switcher/debug-final.html` - Debug completo con monitoreo
- `tests/language-switcher/debug-test.html` - Debug de inicialización
- `tests/language-switcher/test-language-issue.html` - Debug de problemas específicos

#### **Tests Rápidos:**
- `tests/language-switcher/test-rapid.html` - Test rápido
- `tests/language-switcher/test-minimal.html` - Test mínimo

### **Script de Verificación:**
El archivo `tests/scripts/verify-language-switcher.js` contiene funciones útiles para debugging:
```javascript
testEN()    // Cambiar a inglés
testHR()    // Cambiar a croata
debugLS()   // Debug completo
```

### **Verificación Visual:**
1. El indicador de estado en la esquina inferior derecha muestra el estado del sistema
2. Click en el indicador para debug completo en consola
3. El selector de idioma aparece en la esquina superior derecha

---

## 🚀 GUÍA DE USO

### **Para Desarrolladores:**

#### **Agregar Nuevas Traducciones:**
1. Editar `src/assets/js/language-switcher.js`
2. Agregar nueva clave en el objeto `TRANSLATIONS`
3. Proporcionar traducción en inglés y croata
4. Usar `data-i18n="nueva.clave"` en HTML

#### **Ejemplo de Nueva Traducción:**
```javascript
// En TRANSLATIONS
en: {
  nueva: {
    clave: 'New English Text'
  }
},
hr: {
  nueva: {
    clave: 'Novi Hrvatski Tekst'
  }
}
```

```html
<!-- En HTML -->
<p data-i18n="nueva.clave">New English Text</p>
```

### **Para Usuarios Finales:**
1. Visitar `index.html`
2. Hacer clic en el selector de idioma (esquina superior derecha)
3. Seleccionar idioma deseado
4. El contenido se actualiza automáticamente

---

## 🔍 RESOLUCIÓN DE PROBLEMAS

### **Problemas Comunes:**

#### **El selector de idioma no aparece:**
- Verificar que `language-switcher.js` se carga correctamente
- Comprobar la consola del navegador para errores
- Usar `tests/language-switcher/debug-final.html` para diagnóstico

#### **Las traducciones no cambian:**
- Verificar que los elementos tienen atributos `data-i18n`
- Comprobar que las claves existen en `TRANSLATIONS`
- Usar el script de verificación para debug

#### **Errores de consola:**
- Verificar que todas las rutas de archivos son correctas
- Comprobar que no hay conflictos de nombres de variables
- Usar los archivos de test para aislar el problema

### **Herramientas de Debug:**
1. **Indicador de estado visual** (esquina inferior derecha en index.html)
2. **Tests de debug** en `/tests/language-switcher/`
3. **Script de verificación** en `/tests/scripts/`
4. **Consola del navegador** con logging detallado

---

## 🔧 Estándares de Codificación

### HTML5 Semántico
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags en orden: charset, viewport, title, description -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página</title>
    <meta name="description" content="Descripción de la página">
</head>
<body>
    <!-- Estructura semántica obligatoria -->
    <header role="banner">
        <nav role="navigation" aria-label="Navegación principal">
            <!-- Contenido navegación -->
        </nav>
    </header>
    
    <main role="main">
        <h1>Título único de la página</h1>
        <!-- Contenido principal -->
    </main>
    
    <aside role="complementary">
        <!-- Contenido complementario -->
    </aside>
    
    <footer role="contentinfo">
        <!-- Información del sitio -->
    </footer>
</body>
</html>
```

### JavaScript Modular
- Usar módulos ES6 cuando sea posible
- Funciones puras y reutilizables
- Comentarios JSDoc para documentación
- Manejo robusto de errores

### CSS Organizado
- Metodología BEM para nomenclatura
- Variables CSS personalizadas
- Mobile-first responsive design
- Optimización de performance

---

## ✅ ESTADO ACTUAL

### **Funcionalidades Completadas:**
- ✅ Sistema multiidioma completamente funcional
- ✅ Interfaz visual integrada
- ✅ Auto-inicialización robusta
- ✅ Persistencia de preferencias
- ✅ Tests organizados y funcionando
- ✅ Documentación consolidada
- ✅ Proyecto limpio y organizado

### **Verificaciones Realizadas:**
- ✅ Cambio de idioma funciona correctamente
- ✅ Todas las traducciones se aplican
- ✅ Meta tags se actualizan dinámicamente
- ✅ Preferencias se guardan en localStorage
- ✅ Tests funcionan desde nueva ubicación
- ✅ No hay archivos innecesarios en el proyecto

---

## 🎯 LISTO PARA PRODUCCIÓN

El proyecto Vestigium 2.0 está **completamente funcional** y listo para uso en producción.

### **Para Versión de Producción (Opcional):**
- Remover el indicador de estado visual
- Reducir logging de consola
- Minificar archivos JavaScript y CSS
- Optimizar imágenes

### **Funcionalidades Clave:**
- **Sistema multiidioma**: Inglés ⇄ Croata
- **Navegación avanzada**: Menús desplegables responsive
- **SEO optimizado**: Meta tags dinámicos
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Performance**: Carga rápida y eficiente

---

## 🎉 Inicio Rápido

1. **Clonar/Descargar** el proyecto
2. **Abrir** `index.html` en el navegador
3. **Probar** el cambio de idioma haciendo clic en el selector
4. **Verificar** que todo funciona correctamente

### **Para Desarrollo:**
1. Usar los archivos de test en `/tests/language-switcher/`
2. Consultar el script de verificación en `/tests/scripts/`
3. Revisar la consola del navegador para debug

---

**Proyecto completado exitosamente** ✅  
**Fecha de finalización**: Junio 2025  
**Estado**: Listo para producción 🚀

---

*Vestigium 2.0 - Construyendo comunidades sostenibles con tecnología moderna*