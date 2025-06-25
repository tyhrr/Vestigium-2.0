/**
 * VESTIGIUM 2.0 - VISITOR COUNTER
 * Contador de visitas simple con localStorage
 * Autor: Vestigium Team
 * Versión: 1.0
 */

'use strict';

/* =============================================================================
   CONFIGURACIÓN DEL CONTADOR DE VISITAS
   ============================================================================= */

const VISITOR_CONFIG = {
  // Clave para localStorage  
  storageKey: 'vestigium-visitor-count',
  
  // Clave para la última visita
  lastVisitKey: 'vestigium-last-visit',
  
  // Tiempo mínimo entre visitas para contar (en milisegundos)
  // 24 horas = 24 * 60 * 60 * 1000
  minTimeBetweenVisits: 24 * 60 * 60 * 1000,
  
  // Selector del elemento donde mostrar el contador
  counterSelector: '.visitor-counter__count',
    // Animación del contador
  animationDuration: 1000,
  
  // Número inicial si es la primera vez
  initialCount: 9320
};

/* =============================================================================
   CLASE PRINCIPAL - VISITOR COUNTER
   ============================================================================= */

class VisitorCounter {
  constructor() {
    this.currentCount = 0;
    this.isInitialized = false;
  }

  /**
   * Inicializar el contador de visitas
   */
  init() {
    if (this.isInitialized) return;

    console.log('👥 Inicializando Contador de Visitas...');
    
    try {
      this.updateVisitCount();
      this.displayCounter();
      this.isInitialized = true;
      
      console.log(`✅ Contador de Visitas inicializado - Total: ${this.currentCount}`);
    } catch (error) {
      console.error('❌ Error inicializando Contador de Visitas:', error);
    }
  }

  /**
   * Actualizar el conteo de visitas
   */
  updateVisitCount() {
    const now = Date.now();
    const lastVisit = this.getLastVisit();
    const shouldCountVisit = this.shouldCountVisit(now, lastVisit);

    // Obtener conteo actual
    this.currentCount = this.getStoredCount();

    if (shouldCountVisit) {
      // Incrementar contador
      this.currentCount++;
      
      // Guardar nuevo conteo y timestamp
      this.setStoredCount(this.currentCount);
      this.setLastVisit(now);
      
      console.log(`🆕 Nueva visita registrada! Total: ${this.currentCount}`);
    } else {
      console.log(`👀 Visita existente detectada. Total: ${this.currentCount}`);
    }
  }

  /**
   * Determinar si se debe contar esta visita
   */
  shouldCountVisit(currentTime, lastVisitTime) {
    // Si es la primera visita
    if (!lastVisitTime) {
      return true;
    }

    // Si ha pasado suficiente tiempo desde la última visita
    const timeDifference = currentTime - lastVisitTime;
    return timeDifference >= VISITOR_CONFIG.minTimeBetweenVisits;
  }

  /**
   * Obtener conteo guardado en localStorage
   */
  getStoredCount() {
    try {
      const stored = localStorage.getItem(VISITOR_CONFIG.storageKey);
      return stored ? parseInt(stored, 10) || VISITOR_CONFIG.initialCount : VISITOR_CONFIG.initialCount;
    } catch (error) {
      console.warn('No se pudo acceder al conteo en localStorage:', error);
      return VISITOR_CONFIG.initialCount;
    }
  }

  /**
   * Guardar conteo en localStorage
   */
  setStoredCount(count) {
    try {
      localStorage.setItem(VISITOR_CONFIG.storageKey, count.toString());
    } catch (error) {
      console.warn('No se pudo guardar el conteo en localStorage:', error);
    }
  }

  /**
   * Obtener timestamp de la última visita
   */
  getLastVisit() {
    try {
      const stored = localStorage.getItem(VISITOR_CONFIG.lastVisitKey);
      return stored ? parseInt(stored, 10) : null;
    } catch (error) {
      console.warn('No se pudo acceder al timestamp en localStorage:', error);
      return null;
    }
  }

  /**
   * Guardar timestamp de la visita actual
   */
  setLastVisit(timestamp) {
    try {
      localStorage.setItem(VISITOR_CONFIG.lastVisitKey, timestamp.toString());
    } catch (error) {
      console.warn('No se pudo guardar el timestamp en localStorage:', error);
    }
  }

  /**
   * Mostrar el contador en la página
   */
  displayCounter() {
    const counterElement = document.querySelector(VISITOR_CONFIG.counterSelector);
    
    if (!counterElement) {
      console.warn('❌ Elemento del contador no encontrado:', VISITOR_CONFIG.counterSelector);
      return;
    }

    // Animar el contador desde 0 hasta el valor actual
    this.animateCounter(counterElement, 0, this.currentCount);
  }

  /**
   * Animar el contador con efecto de incremento
   */
  animateCounter(element, startValue, endValue) {
    const duration = VISITOR_CONFIG.animationDuration;
    const startTime = performance.now();
    const difference = endValue - startValue;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Usar easing para suavizar la animación
      const easedProgress = this.easeOutCubic(progress);
      const currentValue = Math.floor(startValue + (difference * easedProgress));
      
      element.textContent = this.formatNumber(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Asegurar que muestre el valor final exacto
        element.textContent = this.formatNumber(endValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }

  /**
   * Función de easing para suavizar la animación
   */
  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /**
   * Formatear número con separadores de miles
   */
  formatNumber(num) {
    return num.toLocaleString();
  }

  /**
   * Obtener conteo actual
   */
  getCurrentCount() {
    return this.currentCount;
  }

  /**
   * Resetear contador (para desarrollo/testing)
   */
  resetCounter() {
    try {
      localStorage.removeItem(VISITOR_CONFIG.storageKey);
      localStorage.removeItem(VISITOR_CONFIG.lastVisitKey);
      console.log('🔄 Contador de visitas reseteado');
      
      // Reinicializar
      this.currentCount = VISITOR_CONFIG.initialCount;
      this.displayCounter();
    } catch (error) {
      console.error('❌ Error reseteando contador:', error);
    }
  }

  /**
   * Obtener estadísticas del contador
   */
  getStats() {
    const lastVisit = this.getLastVisit();
    return {
      totalVisits: this.currentCount,
      lastVisit: lastVisit ? new Date(lastVisit) : null,
      nextCountEligible: lastVisit ? new Date(lastVisit + VISITOR_CONFIG.minTimeBetweenVisits) : null
    };
  }
}

/* =============================================================================
   INICIALIZACIÓN Y EXPORTACIÓN
   ============================================================================= */

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.VisitorCounter = VisitorCounter;
  
  // Auto-inicialización
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVisitorCounter);
  } else {
    // DOM ya está cargado
    setTimeout(initVisitorCounter, 200);
  }
  
  function initVisitorCounter() {
    if (!window.vestigiumVisitorCounter) {
      try {
        console.log('🚀 Inicializando Contador de Visitas...');
        window.vestigiumVisitorCounter = new VisitorCounter();
        window.vestigiumVisitorCounter.init();
        console.log('✅ Contador de Visitas inicializado exitosamente');
      } catch (error) {
        console.error('❌ Error inicializando Contador de Visitas:', error);
      }
    }
  }
}

// Exportar configuración para uso externo
if (typeof window !== 'undefined') {
  window.VISITOR_CONFIG = VISITOR_CONFIG;
}
