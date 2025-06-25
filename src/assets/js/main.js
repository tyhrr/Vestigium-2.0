/**
 * VESTIGIUM 2.0 - MAIN JAVASCRIPT
 * Aplicación vanilla JavaScript siguiendo mejores prácticas
 * Autor: Vestigium Team
 * Versión: 2.0
 */

'use strict';

/* =============================================================================
   CONFIGURACIÓN GLOBAL
   ============================================================================= */

const CONFIG = {
  // Selectores principales
  selectors: {
    navigationToggle: '.navigation__toggle',
    navigationMenu: '.navigation__menu',
    navigationLinks: '.navigation__link',
    skipLink: '.skip-link',
    serviceCards: '.service-card',
    ctaButton: '.cta .button'
  },
  
  // Clases CSS
  classes: {
    menuOpen: 'navigation__menu--open',
    cardHovered: 'service-card--hovered',
    scrolled: 'header--scrolled'
  },
  
  // Configuración de animaciones
  animations: {
    duration: 300,
    easing: 'ease-in-out'
  },
  
  // Breakpoints
  breakpoints: {
    mobile: 768
  }
};

/* =============================================================================
   UTILIDADES GENERALES
   ============================================================================= */

/**
 * Utilidades para el manejo del DOM y eventos
 */
const Utils = {
  /**
   * Selector mejorado con manejo de errores
   * @param {string} selector - Selector CSS
   * @param {Element} context - Contexto de búsqueda (opcional)
   * @returns {Element|null}
   */
  $(selector, context = document) {
    try {
      return context.querySelector(selector);
    } catch (error) {
      console.warn(`Error en selector: ${selector}`, error);
      return null;
    }
  },

  /**
   * Selector múltiple mejorado
   * @param {string} selector - Selector CSS
   * @param {Element} context - Contexto de búsqueda (opcional)
   * @returns {NodeList}
   */
  $$(selector, context = document) {
    try {
      return context.querySelectorAll(selector);
    } catch (error) {
      console.warn(`Error en selector múltiple: ${selector}`, error);
      return [];
    }
  },

  /**
   * Añadir event listener con manejo de errores
   * @param {Element} element - Elemento del DOM
   * @param {string} event - Tipo de evento
   * @param {Function} handler - Manejador del evento
   * @param {Object} options - Opciones del evento
   */
  addEvent(element, event, handler, options = {}) {
    if (!element || typeof handler !== 'function') {
      console.warn('Elemento o handler inválido para evento:', event);
      return;
    }
    
    try {
      element.addEventListener(event, handler, options);
    } catch (error) {
      console.error(`Error añadiendo evento ${event}:`, error);
    }
  },

  /**
   * Remover event listener
   * @param {Element} element - Elemento del DOM
   * @param {string} event - Tipo de evento
   * @param {Function} handler - Manejador del evento
   */
  removeEvent(element, event, handler) {
    if (!element || typeof handler !== 'function') return;
    
    try {
      element.removeEventListener(event, handler);
    } catch (error) {
      console.error(`Error removiendo evento ${event}:`, error);
    }
  },

  /**
   * Debounce para optimizar eventos frecuentes
   * @param {Function} func - Función a ejecutar
   * @param {number} wait - Tiempo de espera en ms
   * @param {boolean} immediate - Ejecutar inmediatamente
   * @returns {Function}
   */
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  /**
   * Throttle para limitar ejecución de funciones
   * @param {Function} func - Función a ejecutar
   * @param {number} limit - Límite de tiempo en ms
   * @returns {Function}
   */
  throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  /**
   * Verificar si un elemento está visible en el viewport
   * @param {Element} element - Elemento a verificar
   * @param {number} threshold - Porcentaje de visibilidad (0-1)
   * @returns {boolean}
   */
  isInViewport(element, threshold = 0.1) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const elementWidth = rect.width;
    
    return (
      rect.top >= -elementHeight * threshold &&
      rect.left >= -elementWidth * threshold &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight * threshold &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth * threshold
    );
  }
};

/* =============================================================================
   GESTIÓN DE NAVEGACIÓN
   ============================================================================= */

/**
 * Clase para manejar la navegación móvil y desktop
 */
class NavigationManager {
  constructor() {
    this.toggle = Utils.$(CONFIG.selectors.navigationToggle);
    this.menu = Utils.$(CONFIG.selectors.navigationMenu);
    this.links = Utils.$$(CONFIG.selectors.navigationLinks);
    this.isOpen = false;
    
    this.init();
  }

  /**
   * Inicializar la navegación
   */
  init() {
    if (!this.toggle || !this.menu) {
      console.warn('Elementos de navegación no encontrados');
      return;
    }

    this.bindEvents();
    this.setupAccessibility();
    this.handleResize();
  }

  /**
   * Vincular eventos
   */
  bindEvents() {
    // Toggle de menú móvil
    Utils.addEvent(this.toggle, 'click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });

    // Cerrar menú al hacer clic en un enlace
    this.links.forEach(link => {
      Utils.addEvent(link, 'click', () => {
        if (window.innerWidth < CONFIG.breakpoints.mobile) {
          this.closeMenu();
        }
      });
    });

    // Cerrar menú con Escape
    Utils.addEvent(document, 'keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
        this.toggle.focus();
      }
    });

    // Cerrar menú al hacer clic fuera
    Utils.addEvent(document, 'click', (e) => {
      if (this.isOpen && !this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Manejar redimensionado de ventana
    Utils.addEvent(window, 'resize', Utils.debounce(() => {
      this.handleResize();
    }, 250));
  }

  /**
   * Configurar accesibilidad
   */
  setupAccessibility() {
    this.toggle.setAttribute('aria-expanded', 'false');
    this.menu.setAttribute('role', 'menu');
    
    this.links.forEach((link, index) => {
      link.setAttribute('role', 'menuitem');
      link.setAttribute('tabindex', this.isOpen ? '0' : '-1');
    });
  }

  /**
   * Alternar menú
   */
  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  /**
   * Abrir menú
   */
  openMenu() {
    this.isOpen = true;
    this.menu.setAttribute('aria-expanded', 'true');
    this.toggle.setAttribute('aria-expanded', 'true');
    
    // Animar hamburguesa
    this.animateHamburger(true);
    
    // Enfocar primer enlace
    setTimeout(() => {
      const firstLink = this.links[0];
      if (firstLink) {
        firstLink.focus();
      }
    }, 100);

    // Gestionar tabindex para accesibilidad
    this.links.forEach(link => {
      link.setAttribute('tabindex', '0');
    });
  }

  /**
   * Cerrar menú
   */
  closeMenu() {
    this.isOpen = false;
    this.menu.setAttribute('aria-expanded', 'false');
    this.toggle.setAttribute('aria-expanded', 'false');
    
    // Animar hamburguesa
    this.animateHamburger(false);

    // Gestionar tabindex
    this.links.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });
  }
  /**
   * Animar icono hamburguesa
   * @param {boolean} isOpen - Estado del menú
   */
  animateHamburger(isOpen) {
    // La animación se maneja automáticamente por CSS
    // basándose en el estado aria-expanded del toggle
    console.log(`Hamburger ${isOpen ? 'abierto' : 'cerrado'}`);
  }

  /**
   * Manejar redimensionado de ventana
   */
  handleResize() {
    if (window.innerWidth >= CONFIG.breakpoints.mobile && this.isOpen) {
      this.closeMenu();
    }

    // Ajustar tabindex según el tamaño de pantalla
    if (window.innerWidth >= CONFIG.breakpoints.mobile) {
      this.links.forEach(link => {
        link.setAttribute('tabindex', '0');
      });
    }
  }
}

/* =============================================================================
   GESTIÓN DE SCROLL SUAVE
   ============================================================================= */

/**
 * Clase para manejar el scroll suave y navegación por anclas
 */
class SmoothScrollManager {
  constructor() {
    this.init();
  }

  /**
   * Inicializar scroll suave
   */
  init() {
    this.bindEvents();
    this.updateActiveLink();
  }

  /**
   * Vincular eventos
   */
  bindEvents() {
    // Scroll suave para enlaces internos
    Utils.addEvent(document, 'click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = Utils.$(targetId);

      if (targetElement) {
        this.scrollToElement(targetElement);
        
        // Actualizar URL sin recargar
        history.pushState(null, null, targetId);
        
        // Enfocar elemento de destino para accesibilidad
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
      }
    });

    // Actualizar enlace activo al hacer scroll
    Utils.addEvent(window, 'scroll', Utils.throttle(() => {
      this.updateActiveLink();
    }, 100));
  }

  /**
   * Scroll suave a un elemento
   * @param {Element} element - Elemento de destino
   */
  scrollToElement(element) {
    const headerHeight = 80; // Altura del header fijo
    const elementTop = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    });
  }

  /**
   * Actualizar enlace activo en la navegación
   */
  updateActiveLink() {
    const sections = Utils.$$('section[id]');
    const navLinks = Utils.$$(CONFIG.selectors.navigationLinks);
    
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop && 
          window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Actualizar estados de enlaces
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
}

/* =============================================================================
   GESTIÓN DE ANIMACIONES
   ============================================================================= */

/**
 * Clase para manejar animaciones de entrada y efectos visuales
 */
class AnimationManager {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };
    
    this.init();
  }

  /**
   * Inicializar animaciones
   */
  init() {
    if ('IntersectionObserver' in window) {
      this.setupIntersectionObserver();
    } else {
      // Fallback para navegadores antiguos
      this.addFallbackAnimations();
    }

    this.setupCardHoverEffects();
  }

  /**
   * Configurar Intersection Observer para animaciones de entrada
   */
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    // Observar elementos que deben animarse
    const animatedElements = Utils.$$('.service-card, .hero, .about, .cta');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }

  /**
   * Añadir animaciones de fallback
   */
  addFallbackAnimations() {
    const animatedElements = Utils.$$('.service-card, .hero, .about, .cta');
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  /**
   * Configurar efectos hover en tarjetas
   */
  setupCardHoverEffects() {
    const serviceCards = Utils.$$(CONFIG.selectors.serviceCards);
    
    serviceCards.forEach(card => {
      Utils.addEvent(card, 'mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
      });

      Utils.addEvent(card, 'mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });

      // Efectos de foco para accesibilidad
      Utils.addEvent(card, 'focusin', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.outline = '2px solid var(--primary-green)';
        card.style.outlineOffset = '2px';
      });

      Utils.addEvent(card, 'focusout', () => {
        card.style.transform = 'translateY(0)';
        card.style.outline = 'none';
      });
    });
  }
}

/* =============================================================================
   GESTIÓN DE RENDIMIENTO
   ============================================================================= */

/**
 * Clase para optimizar el rendimiento de la aplicación
 */
class PerformanceManager {
  constructor() {
    this.init();
  }

  /**
   * Inicializar optimizaciones de rendimiento
   */
  init() {
    this.lazyLoadImages();
    this.preloadCriticalResources();
    this.optimizeScrollEvents();
  }

  /**
   * Implementar lazy loading para imágenes
   */
  lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      Utils.$$('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Precargar recursos críticos
   */
  preloadCriticalResources() {
    // Precargar fuentes críticas si es necesario
    const criticalFonts = [
      // '/src/assets/fonts/primary-font.woff2'
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = fontUrl;
      document.head.appendChild(link);
    });
  }

  /**
   * Optimizar eventos de scroll
   */
  optimizeScrollEvents() {
    let ticking = false;

    const optimizedScrollHandler = () => {
      // Aquí van las operaciones de scroll optimizadas
      if (!ticking) {
        requestAnimationFrame(() => {
          // Operaciones de scroll
          ticking = false;
        });
        ticking = true;
      }
    };

    Utils.addEvent(window, 'scroll', optimizedScrollHandler, { passive: true });
  }
}

/* =============================================================================
   GESTIÓN DE ACCESIBILIDAD
   ============================================================================= */

/**
 * Clase para mejorar la accesibilidad de la aplicación
 */
class AccessibilityManager {
  constructor() {
    this.init();
  }

  /**
   * Inicializar mejoras de accesibilidad
   */
  init() {
    this.setupSkipLinks();
    this.manageFocusOutlines();
    this.setupKeyboardNavigation();
    this.announcePageChanges();
  }

  /**
   * Configurar enlaces de salto
   */
  setupSkipLinks() {
    const skipLink = Utils.$(CONFIG.selectors.skipLink);
    if (skipLink) {
      Utils.addEvent(skipLink, 'click', (e) => {
        e.preventDefault();
        const target = Utils.$(skipLink.getAttribute('href'));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    }
  }

  /**
   * Gestionar contornos de foco
   */
  manageFocusOutlines() {
    let hadKeyboardEvent = false;

    // Detectar uso de teclado
    Utils.addEvent(document, 'keydown', (e) => {
      if (e.key === 'Tab') {
        hadKeyboardEvent = true;
      }
    });

    // Detectar uso de mouse
    Utils.addEvent(document, 'mousedown', () => {
      hadKeyboardEvent = false;
    });

    // Aplicar estilos de foco apropiados
    Utils.addEvent(document, 'focusin', (e) => {
      if (hadKeyboardEvent) {
        e.target.classList.add('keyboard-focused');
      }
    });

    Utils.addEvent(document, 'focusout', (e) => {
      e.target.classList.remove('keyboard-focused');
    });
  }

  /**
   * Configurar navegación por teclado
   */
  setupKeyboardNavigation() {
    // Navegación por teclas de flecha en elementos de menú
    const menuItems = Utils.$$(CONFIG.selectors.navigationLinks);
    
    menuItems.forEach((item, index) => {
      Utils.addEvent(item, 'keydown', (e) => {
        let nextIndex;
        
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            nextIndex = (index + 1) % menuItems.length;
            menuItems[nextIndex].focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            nextIndex = (index - 1 + menuItems.length) % menuItems.length;
            menuItems[nextIndex].focus();
            break;
          case 'Home':
            e.preventDefault();
            menuItems[0].focus();
            break;
          case 'End':
            e.preventDefault();
            menuItems[menuItems.length - 1].focus();
            break;
        }
      });
    });
  }

  /**
   * Anunciar cambios de página para lectores de pantalla
   */
  announcePageChanges() {
    // Crear región de anuncios ARIA live
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'page-announcer';
    document.body.appendChild(announcer);
  }

  /**
   * Anunciar mensaje para lectores de pantalla
   * @param {string} message - Mensaje a anunciar
   */
  announce(message) {
    const announcer = Utils.$('#page-announcer');
    if (announcer) {
      announcer.textContent = message;
      setTimeout(() => {
        announcer.textContent = '';
      }, 1000);
    }
  }
}

/* =============================================================================
   GESTIÓN DE ERRORES
   ============================================================================= */

/**
 * Clase para manejar errores globales
 */
class ErrorManager {
  constructor() {
    this.init();
  }

  /**
   * Inicializar manejo de errores
   */
  init() {
    // Capturar errores JavaScript globales
    window.addEventListener('error', (event) => {
      this.logError('JavaScript Error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    });

    // Capturar promesas rechazadas no manejadas
    window.addEventListener('unhandledrejection', (event) => {
      this.logError('Unhandled Promise Rejection', {
        reason: event.reason
      });
    });
  }

  /**
   * Registrar error
   * @param {string} type - Tipo de error
   * @param {Object} details - Detalles del error
   */
  logError(type, details) {
    console.error(`[${type}]`, details);
    
    // En producción, aquí se enviarían los errores a un servicio de logging
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: `${type}: ${details.message || details.reason}`,
        fatal: false
      });
    }
  }
}

/* =============================================================================
   MÓDULO DE NAVEGACIÓN AVANZADA
   Manejo de navegación con submenús complejos y accesibilidad
   ============================================================================= */

const AdvancedNavigation = {
  // Estado del módulo
  isInitialized: false,
  activeSubmenu: null,
  hoverTimeout: null,
    // Configuración
  config: {
    hoverDelay: 150,
    animationDuration: 300,
    closeDelay: 300,
    mobileBreakpoint: 768
  },  /**
   * Inicializar navegación avanzada
   */
  init() {
    if (this.isInitialized) return;

    console.log('🚀 Inicializando navegación avanzada...');
    
    // Inicializar atributos ARIA de forma segura
    this.initializeARIAAttributes();
    
    this.bindMenuEvents();
    this.handleKeyboardNavigation();
    this.isInitialized = true;
    console.log('✅ Navegación avanzada inicializada correctamente');
  },
  /**
   * Inicializar atributos ARIA de forma segura
   */
  initializeARIAAttributes() {
    // Establecer atributos ARIA iniciales solo en submenús que no tienen foco
    const allSubmenus = Utils.$$('.navigation__submenu');
    allSubmenus.forEach(submenu => {
      // Solo establecer aria-hidden si es seguro hacerlo
      this.setAriaHiddenSafely(submenu, true);
    });
    
    // Establecer aria-expanded en enlaces de submenú
    const menuLinks = Utils.$$('.navigation__link--has-submenu');
    menuLinks.forEach(link => {
      if (!link.hasAttribute('aria-expanded')) {
        link.setAttribute('aria-expanded', 'false');
      }
    });
    
    console.log(`🔧 Inicializados atributos ARIA para ${allSubmenus.length} submenús y ${menuLinks.length} enlaces`);
  },
  /**
   * Bind eventos de menú
   */
  bindMenuEvents() {
    const menuItems = Utils.$$('.navigation__link--has-submenu');
    console.log(`🔍 Encontrados ${menuItems.length} elementos con submenús`);
    
    menuItems.forEach((item, index) => {
      const submenu = item.nextElementSibling;
      const parentLi = item.closest('.navigation__item');
      
      console.log(`📋 Procesando menú ${index + 1}:`, {
        link: item.textContent.trim(),
        hasSubmenu: !!submenu,
        hasParentLi: !!parentLi
      });
      
      if (!submenu || !parentLi) return;

      // Hover events para desktop
      this.bindHoverEvents(parentLi, item, submenu);
        // Click events para mobile y accesibilidad
      this.bindClickEvents(item, submenu);
    });// Cerrar menús al hacer click fuera
    Utils.addEvent(document, 'click', this.handleOutsideClick.bind(this));
    
    // Cerrar menús con ESC
    Utils.addEvent(document, 'keydown', this.handleEscapeKey.bind(this));
    
    // Reposicionar submenús en redimensionamiento
    Utils.addEvent(window, 'resize', Utils.debounce(this.repositionAllSubmenus.bind(this), 150));
    
    // Reposicionar submenús en scroll
    Utils.addEvent(window, 'scroll', Utils.throttle(this.repositionAllSubmenus.bind(this), 100));
  },
  /**
   * Eventos hover para desktop
   */  bindHoverEvents(parentLi, link, submenu) {
    Utils.addEvent(parentLi, 'mouseenter', () => {
      clearTimeout(this.hoverTimeout);
      this.openSubmenu(link, submenu);
    });

    Utils.addEvent(parentLi, 'mouseleave', () => {
      this.hoverTimeout = setTimeout(() => {
        this.closeSubmenu(link, submenu);
      }, this.config.closeDelay);
    });
  },

  /**
   * Eventos click para mobile y accesibilidad
   */
  bindClickEvents(link, submenu) {
    Utils.addEvent(link, 'click', (e) => {
      e.preventDefault();
      
      const isOpen = link.getAttribute('aria-expanded') === 'true';
      
      if (isOpen) {
        this.closeSubmenu(link, submenu);
      } else {
        // Cerrar otros submenús
        this.closeAllSubmenus();
        this.openSubmenu(link, submenu);
      }
    });
  },  /**
   * Abrir submenú de forma segura
   */
  openSubmenu(link, submenu) {
    link.setAttribute('aria-expanded', 'true');
    submenu.classList.add('navigation__submenu--open');
    this.setAriaHiddenSafely(submenu, false);
    
    this.activeSubmenu = { link, submenu };
    
    // Focus al primer elemento del submenú si corresponde
    const firstLink = Utils.$('.navigation__link', submenu);
    if (firstLink && document.activeElement === link) {
      setTimeout(() => firstLink.focus(), 100);
    }
  },  /**
   * Cerrar submenú de forma segura
   */
  closeSubmenu(link, submenu) {
    link.setAttribute('aria-expanded', 'false');
    submenu.classList.remove('navigation__submenu--open');
    this.setAriaHiddenSafely(submenu, true);
    
    // Cerrar submenús anidados también
    const nestedSubmenus = Utils.$$('.navigation__submenu--open', submenu);
    nestedSubmenus.forEach(nested => {
      const nestedLink = nested.previousElementSibling;
      if (nestedLink) {
        this.closeNestedSubmenu(nestedLink, nested);
      }
    });
    
    if (this.activeSubmenu && this.activeSubmenu.submenu === submenu) {
      this.activeSubmenu = null;
    }
  },
  /**
   * Abrir submenú anidado de forma segura
   */
  openNestedSubmenu(link, submenu) {
    submenu.classList.add('navigation__submenu--open');
    this.setAriaHiddenSafely(submenu, false);
  },  /**
   * Cerrar submenú anidado de forma segura
   */
  closeNestedSubmenu(link, submenu) {
    submenu.classList.remove('navigation__submenu--open');
    this.setAriaHiddenSafely(submenu, true);
  },
  /**
   * Cerrar todos los submenús de forma segura
   */
  closeAllSubmenus() {
    const openSubmenus = Utils.$$('.navigation__submenu--open');
    openSubmenus.forEach(submenu => {
      const link = submenu.previousElementSibling;
      if (link) {
        this.closeSubmenu(link, submenu);
      }
    });
  },
  /**
   * Manejar click fuera del menú
   */  handleOutsideClick(e) {
    const navigation = Utils.$('.navigation');
    if (!navigation || navigation.contains(e.target)) return;
    
    // Cerrar todos los submenús
    this.closeAllSubmenus();
  },
  /**
   * Manejar tecla ESC
   */
  handleEscapeKey(e) {
    if (e.key === 'Escape') {
      this.closeAllSubmenus();
      
      // Devolver focus al toggle del menú principal
      const navToggle = Utils.$('.navigation__toggle');
      if (navToggle) navToggle.focus();
    }
  },

  /**
   * Navegación por teclado
   */
  handleKeyboardNavigation() {
    const navigation = Utils.$('.navigation');
    if (!navigation) return;

    Utils.addEvent(navigation, 'keydown', (e) => {
      const focusedElement = document.activeElement;
      const isMenuLink = focusedElement.classList.contains('navigation__link');
      
      if (!isMenuLink) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.focusNextMenuItem(focusedElement);
          break;
        case 'ArrowUp':
          e.preventDefault();
          this.focusPreviousMenuItem(focusedElement);
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.openSubmenuOnArrow(focusedElement);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.closeSubmenuOnArrow(focusedElement);
          break;
        case 'Home':
          e.preventDefault();
          this.focusFirstMenuItem();
          break;
        case 'End':
          e.preventDefault();
          this.focusLastMenuItem();
          break;
      }
    });
  },

  /**
   * Focus en siguiente elemento del menú
   */
  focusNextMenuItem(currentElement) {
    const allLinks = Array.from(Utils.$$('.navigation__link'));
    const currentIndex = allLinks.indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % allLinks.length;
    allLinks[nextIndex].focus();
  },

  /**
   * Focus en elemento anterior del menú
   */
  focusPreviousMenuItem(currentElement) {
    const allLinks = Array.from(Utils.$$('.navigation__link'));
    const currentIndex = allLinks.indexOf(currentElement);
    const prevIndex = currentIndex === 0 ? allLinks.length - 1 : currentIndex - 1;
    allLinks[prevIndex].focus();
  },

  /**
   * Abrir submenú con flecha derecha
   */
  openSubmenuOnArrow(element) {
    const hasSubmenu = element.classList.contains('navigation__link--has-submenu');
    if (!hasSubmenu) return;

    const submenu = element.nextElementSibling;
    if (submenu) {
      this.openSubmenu(element, submenu);
    }
  },

  /**
   * Cerrar submenú con flecha izquierda
   */
  closeSubmenuOnArrow(element) {
    const parentSubmenu = element.closest('.navigation__submenu');
    if (!parentSubmenu) return;

    const parentLink = parentSubmenu.previousElementSibling;
    if (parentLink) {
      this.closeSubmenu(parentLink, parentSubmenu);
      parentLink.focus();
    }
  },

  /**
   * Focus en primer elemento del menú
   */
  focusFirstMenuItem() {
    const firstLink = Utils.$('.navigation__link');
    if (firstLink) firstLink.focus();
  },

  /**
   * Focus en último elemento del menú
   */
  focusLastMenuItem() {
    const allLinks = Utils.$$('.navigation__link');
    const lastLink = allLinks[allLinks.length - 1];
    if (lastLink) lastLink.focus();
  },  /**
   * Reposicionar todos los submenús visibles
   */
  repositionAllSubmenus() {
    // This method is kept for future extensibility but currently
    // only handles standard dropdowns
  },

  /**
   * Destruir el módulo
   */
  destroy() {
    clearTimeout(this.hoverTimeout);
    this.activeSubmenu = null;
    this.isInitialized = false;
  },

  /**
   * Verificar si es seguro establecer aria-hidden en un elemento
   */
  isSafeToHide(element) {
    // Verificar si el elemento o alguno de sus descendientes tiene el foco
    const focusedElement = document.activeElement;
    return !element.contains(focusedElement);
  },

  /**
   * Establecer aria-hidden de forma segura
   */
  setAriaHiddenSafely(element, hidden) {
    if (hidden && !this.isSafeToHide(element)) {
      // Si no es seguro ocultar, mover el foco fuera primero
      const parentLink = element.previousElementSibling;
      if (parentLink && parentLink.classList.contains('navigation__link')) {
        parentLink.focus();
      }
      
      // Usar un timeout para permitir que el foco se mueva
      setTimeout(() => {
        element.setAttribute('aria-hidden', 'true');
      }, 50);
    } else {
      element.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    }
  },
};
/* =============================================================================
   INICIALIZACIÓN GLOBAL
   ============================================================================= */

/**
 * Inicializar todos los módulos cuando el DOM esté listo
 */
function initVestigium() {
  console.log('🚀 Iniciando Vestigium 2.0...');
  
  try {
    // El Language Switcher se auto-inicializa, solo verificamos si existe
    if (typeof LanguageSwitcher !== 'undefined' && !window.vestigiumLanguageSwitcher) {
      const languageSwitcher = new LanguageSwitcher();
      languageSwitcher.init();
      window.vestigiumLanguageSwitcher = languageSwitcher;
    }
    
    // Inicializar gestión de navegación principal (hamburguesa)
    if (typeof NavigationManager !== 'undefined') {
      window.vestigiumNavigation = new NavigationManager();
    }
    
    // Inicializar navegación avanzada (submenús)
    if (typeof AdvancedNavigation !== 'undefined') {
      AdvancedNavigation.init();
    }
    
    // Inicializar scroll suave
    if (typeof SmoothScrollManager !== 'undefined') {
      window.vestigiumScrollManager = new SmoothScrollManager();
    }
    
    console.log('✅ Vestigium 2.0 inicializado correctamente');
  } catch (error) {
    console.error('❌ Error inicializando Vestigium:', error);
  }
}

/**
 * Inicializar cuando el DOM esté listo
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVestigium);
} else {
  // DOM ya está listo
  initVestigium();
}

/**
 * Limpiar al cerrar la página
 */
window.addEventListener('beforeunload', () => {
  if (typeof AdvancedNavigation !== 'undefined' && AdvancedNavigation.destroy) {
    AdvancedNavigation.destroy();
  }
  
  if (typeof window.vestigiumLanguageSwitcher !== 'undefined' && window.vestigiumLanguageSwitcher.destroy) {
    window.vestigiumLanguageSwitcher.destroy();
  }
});

// Exportar para uso global (desarrollo)
if (typeof window !== 'undefined') {
  window.VestigiumModules = {
    AdvancedNavigation,
    LanguageSwitcher: typeof LanguageSwitcher !== 'undefined' ? LanguageSwitcher : null
  };
}
