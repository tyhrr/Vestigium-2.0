/**
 * VESTIGIUM 2.0 - LANGUAGE SWITCHER
 * Sistema de cambio de idioma suave y modular
 * Autor: Vestigium Team
 * Versión: 2.0
 */

'use strict';

/* =============================================================================
   CONFIGURACIÓN DEL LANGUAGE SWITCHER
   ============================================================================= */

const LANGUAGE_CONFIG = {
  // Idiomas disponibles
  languages: {
    en: {
      name: 'English',
      flag: '🇬🇧',
      locale: 'en-US'
    },
    hr: {
      name: 'Hrvatski',
      flag: '🇭🇷',
      locale: 'hr-HR'
    }
  },
  
  // Idioma por defecto
  defaultLanguage: 'en',
  
  // Configuración de localStorage
  storageKey: 'vestigium-language',
  
  // Configuración de animaciones
  animations: {
    fadeOut: 150,
    fadeIn: 200,
    slideDown: 300
  }
};

/* =============================================================================
   TRADUCCIONES COMPLETAS
   ============================================================================= */

const TRANSLATIONS = {
  en: {
    // Meta tags
    meta: {
      title: 'Vestigium - Ecological-Creative Association for Sustainable Communities',
      description: 'Vestigium is an association in Zagreb that improves community quality of life by promoting healthy and sustainable lifestyle through educational and ecological activities.'
    },
      // Navigation
    nav: {
      'community-center': 'Community Center',
      'who-are-we': 'Who are we?',
      'what-we-have-done': 'What we have done',
      'join-us': 'Join us / Become a member',
      news: 'News',
      calendar: 'Calendar',
      'zadruga-zelenica': 'Zadruga Zelenica',
      'find-us': 'Find us',
      'get-engaged': 'Get engaged',
      'be-volunteer': 'Be a Volunteer',
      esc: 'ESC (European Solidarity Corps)',
      gallery: 'Gallery',
      projects: 'Projects',
      erasmus: 'Erasmus',
      'erasmus-youth': 'Youth Exchanges',
      'erasmus-training': 'Training Courses',
      'erasmus-strategic': 'Strategic Partnerships',
      'erasmus-capacity': 'Capacity Building',
      national: 'National',
      'previous-projects': 'Previous projects',
      activities: 'Activities',
      'frequent-activities': 'Frequent activities',
      'see-more': 'See more'
    },
    
    // Hero Section
    hero: {
      title: 'Building Sustainable Communities',
      subtitle: 'Vestigium is an ecological-creative association dedicated to improving the quality of life of our community, promoting a healthy and sustainable lifestyle for our future.',
      'btn-activities': 'Discover Activities',
      'btn-join': 'Join Us'
    },
    
    // Activities Section
    activities: {
      title: 'Our Activities',
      subtitle: 'We conduct over 1000 activities annually to educate, empower and create a resilient community.',
      education: {
        title: 'Education & Workshops',
        description: 'Workshops on urban gardening, composting, social permaculture, healthy cooking, sewing and relaxation for all ages.'
      },
      community: {
        title: 'Community Life',
        description: 'Farmers market, free library, poetry evenings, storytelling, swap shops and family gatherings.'
      },
      sustainability: {
        title: 'Sustainability',
        description: 'Community Supported Agriculture, zero-waste events, repair cafés, and promotion of small ethical local businesses.'
      },
      empowerment: {
        title: 'Empowerment',
        description: 'Women empowerment support, addiction prevention, sociocracy and Theatre of the Oppressed for social change.'
      }
    },
    
    // About Section
    about: {
      title: 'About Vestigium',
      text1: '<strong>Vestigium (lat. footprint)</strong> was born in 2011 by the initiative of six women who listened to the needs of their neighbors in the Vrbana area, Zagreb. We created a multifunctional space where initiatives can develop and flourish.',
      text2: 'As part of the <strong>Global Transition Movement for Sustainable Communities</strong>, we work to solve problems such as the growing distance between people, the lack of meeting and socializing places, and the exclusion of families and elderly residents.',
      text3: 'Since 2017 we are beneficiaries of institutional support from the National Foundation for Civil Society Development. In 2017 we were presented as an inspiring example "Changemakers" from Croatia, and in 2018 nominated among the top 30 projects for the "Social Marie Award" among 250 European socially innovative projects.'
    },    
    // CTA Section
    cta: {
      title: 'Ready to be part of the change?',
      text: 'Join our community of volunteers and members working together to create a more sustainable and connected future.',
      btn: 'Get Involved'
    },    // Footer
    footer: {
      title: 'Vestigium',
      description: 'Ecological-creative association improving community quality of life through sustainable initiatives and education in Zagreb.',
      achievement1: '🏆 Changemakers Croatia 2017',
      achievement2: '🌟 Social Marie Award Finalist 2018',      links: 'Links',
      home: 'Home',
      activities: 'Activities',
      about: 'About us',
      news: 'News',
      'get-involved': 'Get involved',
      involvement: {
        title: 'Get Involved',
        text: 'Join as a volunteer or member and help build a more resilient community.',
        item1: 'Event volunteering',
        item2: 'Workshops and education',
        item3: 'Community agriculture',
        item4: 'Organizational support'
      },      contact: {
        title: 'Contact'
      },
      location: {
        label: 'Location:',
        area: 'Vrbana Area, Zagreb',
        country: 'Croatia'
      },      movement: 'Global Transition Movement',
      copyright: '&copy; 2025 Vestigium Association. All rights reserved.',
      tech: 'Building sustainable communities since 2011 • Over 1000 annual activities',
      visitors: {
        label: 'Visitors:',
        count: 'visits'
      }
    },
      // Language Switcher
    lang: {
      current: 'Current language',
      select: 'Select language'
    },
    
    // News Page
    news: {
      meta: {
        title: 'News - Vestigium Ecological-Creative Association',
        description: 'Stay updated with the latest news and activities from Vestigium ecological-creative association in Zagreb.'
      },
      hero: {
        title: 'Latest News',
        subtitle: 'Stay updated with our latest activities, events, and community initiatives'
      },
      facebook: {
        title: 'From our Facebook',
        subtitle: 'Connect with our community through our latest social media updates',
        loading: 'Loading latest posts...',
        'view-post': 'View on Facebook',
        'error-title': 'Unable to load Facebook posts',
        'error-text': 'Please check your internet connection or try again later.',
        'error-help': 'Please check the configuration and try again.'
      },
      gallery: {
        title: 'Recent Activities',
        subtitle: 'Browse through our recent community activities and events',
        loading: 'Loading gallery...'
      },
      cta: {
        title: 'Stay Connected',
        text: 'Follow us on social media to stay updated with our latest activities and join our community events',
        facebook: 'Follow on Facebook',
        join: 'Join Us'
      }
    }
  },
  hr: {
    // Meta tags
    meta: {
      title: 'Vestigium - Ekolosko-Kreativna Udruga za Održive Zajednice',
      description: 'Vestigium je udruga u Zagrebu koja poboljšava kvalitetu života zajednice promovira zdrav i održiv način života kroz edukacijske i ekološke aktivnosti.'
    },
      // Navigation
    nav: {
      'community-center': 'Društveni Centar',
      'who-are-we': 'Tko smo mi?',
      'what-we-have-done': 'Što smo napravili',
      'join-us': 'Pridružite nam se / Postanite član',
      news: 'Vijesti',
      calendar: 'Kalendar',
      'zadruga-zelenica': 'Zadruga Zelenica',
      'find-us': 'Pronađite nas',
      'get-engaged': 'Uključite se',
      'be-volunteer': 'Budite volonter',
      esc: 'ESK (Europski Solidarni Korpus)',
      gallery: 'Galerija',
      projects: 'Projekti',
      erasmus: 'Erasmus',
      'erasmus-youth': 'Razmjene Mladih',
      'erasmus-training': 'Tečajevi Obuke',
      'erasmus-strategic': 'Strateška Partnerstva',
      'erasmus-capacity': 'Jačanje Kapaciteta',
      national: 'Nacionalni',
      'previous-projects': 'Prethodni projekti',
      activities: 'Aktivnosti',
      'frequent-activities': 'Česte aktivnosti',
      'see-more': 'Pogledaj više'
    },
    
    // Hero Section
    hero: {
      title: 'Izgradnja Održivih Zajednica',
      subtitle: 'Vestigium je ekolosko-kreativna udruga posvećena poboljšanju kvalitete života naše zajednice, promovira zdrav i održiv način života za našu budućnost.',
      'btn-activities': 'Otkrijte Aktivnosti',
      'btn-join': 'Pridružite Nam Se'
    },
    
    // Activities Section
    activities: {
      title: 'Naše Aktivnosti',
      subtitle: 'Provodimo preko 1000 aktivnosti godišnje za obrazovanje, osnaživanje i stvaranje otporne zajednice.',
      education: {
        title: 'Edukacija i Radionice',
        description: 'Radionice o gradskom vrtlarstvu, kompostiranju, socijalnoj permakulturi, zdravom kuhanju, šivanju i opuštanju za sve uzraste.'
      },
      community: {
        title: 'Život Zajednice',
        description: 'Tržnica poljoprivrednika, besplatna knjižnica, večeri poezije, pripovijedanje, razmjene i obiteljski susreti.'
      },
      sustainability: {
        title: 'Održivost',
        description: 'Poljoprivreda podržana zajednicom, zero-waste događaji, repair caféi i promocija malih etičkih lokalnih poduzeća.'
      },
      empowerment: {
        title: 'Osnaživanje',
        description: 'Podrška osnaživanju žena, prevencija ovisnosti, sociokracija i Kazalište potlačenih za društvene promjene.'
      }
    },
    
    // About Section  
    about: {
      title: 'O Vestigiumu',
      text1: '<strong>Vestigium (lat. trag)</strong> nastao je 2011. godine inicijativom šest žena koje su slušale potrebe svojih susjeda u području Vrbane u Zagrebu. Stvorili smo multifunkcionalni prostor gdje se inicijative mogu razvijati i cvjetati.',
      text2: 'Kao dio <strong>Globalnog Tranzicijskog Pokreta za Održive Zajednice</strong>, radimo na rješavanju problema poput rastućeg distanciranja između ljudi, nedostajanja mjesta za druženje i socijalizaciju te isključivanja obitelji i starijih stanovnika.',
      text3: 'Od 2017. godine korisnici smo institucionalne podrške Nacionalne zaklade za razvoj civilnoga društva. 2017. godine predstavljeni smo kao inspirativan primjer "Changemakers" iz Hrvatske, a 2018. nominirani među 30 najboljih projekata za "Social Marie Award" među 250 europskih socijalno inovativnih projekata.'
    },    
    // CTA Section
    cta: {
      title: 'Spremni ste biti dio promjene?',
      text: 'Pridružite se našoj zajednici volontera i članova koji zajedno rade na stvaranju održivije i povezanije budućnosti.',
      btn: 'Uključite Se'
    },    // Footer
    footer: {
      title: 'Vestigium',
      description: 'Ekolosko-kreativna udruga koja poboljšava kvalitetu života zajednice kroz održive inicijative i edukaciju u Zagrebu.',
      achievement1: '🏆 Changemakers Hrvatska 2017',
      achievement2: '🌟 Social Marie Award Finalist 2018',      links: 'Linkovi',
      home: 'Početna',
      activities: 'Aktivnosti',
      about: 'O nama',
      news: 'Vijesti',
      'get-involved': 'Uključite se',
      involvement: {
        title: 'Uključite Se',
        text: 'Pridružite se kao volonter ili član i pomognite izgraditi otporniju zajednicu.',
        item1: 'Volontiranje na događajima',
        item2: 'Radionice i edukacija',
        item3: 'Poljoprivreda zajednice',
        item4: 'Organizacijska podrška'
      },      contact: {
        title: 'Kontakt'
      },
      location: {
        label: 'Lokacija:',
        area: 'Područje Vrbane, Zagreb',
        country: 'Hrvatska'
      },      movement: 'Globalni Tranzicijski Pokret',
      copyright: '&copy; 2025 Udruga Vestigium. Sva prava pridržana.',
      tech: 'Izgradnja održivih zajednica od 2011. • Preko 1000 godišnjih aktivnosti',
      visitors: {
        label: 'Posjetitelji:',
        count: 'posjeta'
      }
    },
      // Language Switcher
    lang: {
      current: 'Trenutni jezik',
      select: 'Odaberite jezik'
    },
    
    // News Page
    news: {
      meta: {
        title: 'Vijesti - Vestigium Ekolosko-Kreativna Udruga',
        description: 'Budite u tijeku s najnovijim vijestima i aktivnostima Vestigium ekolosko-kreativne udruge u Zagrebu.'
      },
      hero: {
        title: 'Najnovije Vijesti',
        subtitle: 'Budite u tijeku s našim najnovijim aktivnostima, događajima i inicijativama zajednice'
      },
      facebook: {
        title: 'S našeg Facebooka',
        subtitle: 'Povežite se s našom zajednicom kroz naše najnovije objave na društvenim mrežama',
        loading: 'Učitavanje najnovijih objava...',
        'view-post': 'Pogledaj na Facebooku',
        'error-title': 'Nije moguće učitati Facebook objave',
        'error-text': 'Molimo provjerite internetsku vezu ili pokušajte kasnije.',
        'error-help': 'Molimo provjerite konfiguraciju i pokušajte ponovno.'
      },
      gallery: {
        title: 'Nedavne Aktivnosti',
        subtitle: 'Pregledajte naše nedavne aktivnosti i događaje zajednice',
        loading: 'Učitavanje galerije...'
      },
      cta: {
        title: 'Ostanite Povezani',
        text: 'Pratite nas na društvenim mrežama kako biste ostali u tijeku s našim najnovijim aktivnostima i pridružili se događajima zajednice',
        facebook: 'Pratite na Facebooku',
        join: 'Pridružite Nam Se'
      }
    }
  }
};

/* =============================================================================
   CLASE PRINCIPAL - LANGUAGE SWITCHER
   ============================================================================= */

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || LANGUAGE_CONFIG.defaultLanguage;
    this.translations = TRANSLATIONS;
    this.isInitialized = false;
    this.animationInProgress = false;
    this.boundEvents = []; // Para rastrear eventos vinculados
  }/**
   * Inicializar el Language Switcher
   */
  init() {
    if (this.isInitialized) return;

    console.log('🌐 Inicializando Language Switcher...');
    
    try {
      this.updateHtmlLang();
      this.createLanguageSelector();
      this.translatePage();
      this.bindEvents();
      this.isInitialized = true;
      
      console.log(`✅ Language Switcher inicializado - Idioma: ${this.currentLanguage}`);
    } catch (error) {
      console.error('❌ Error inicializando Language Switcher:', error);
    }
  }

  /**
   * Obtener idioma guardado en localStorage
   */
  getStoredLanguage() {
    try {
      return localStorage.getItem(LANGUAGE_CONFIG.storageKey);
    } catch (error) {
      console.warn('No se pudo acceder a localStorage:', error);
      return null;
    }
  }

  /**
   * Guardar idioma en localStorage
   */
  setStoredLanguage(language) {
    try {
      localStorage.setItem(LANGUAGE_CONFIG.storageKey, language);
    } catch (error) {
      console.warn('No se pudo guardar en localStorage:', error);
    }
  }

  /**
   * Actualizar atributo lang del HTML
   */
  updateHtmlLang() {
    document.documentElement.lang = LANGUAGE_CONFIG.languages[this.currentLanguage].locale || this.currentLanguage;
  }

  /**
   * Crear selector de idioma en el header
   */
  createLanguageSelector() {
    const header = document.querySelector('.header__container');
    if (!header) {
      console.warn('Header container no encontrado');
      return;
    }

    // Verificar si ya existe
    const existingSelector = header.querySelector('.language-selector');
    if (existingSelector) {
      existingSelector.remove();
    }

    // Crear el selector
    const selectorHTML = this.generateSelectorHTML();
    header.insertAdjacentHTML('beforeend', selectorHTML);
    
    // Posicionar correctamente
    const selector = header.querySelector('.language-selector');
    if (selector) {
      selector.style.order = '3'; // Después del logo y antes de la navegación
    }
  }

  /**
   * Generar HTML del selector de idioma
   */
  generateSelectorHTML() {
    const currentLang = LANGUAGE_CONFIG.languages[this.currentLanguage];
    const otherLanguages = Object.entries(LANGUAGE_CONFIG.languages)
      .filter(([code]) => code !== this.currentLanguage);

    return `
      <div class="language-selector">
        <button class="language-selector__toggle" 
                aria-label="${this.t('lang.current')}: ${currentLang.name}" 
                aria-expanded="false"
                aria-haspopup="true">
          <span class="language-selector__flag">${currentLang.flag}</span>
          <span class="language-selector__current">${currentLang.name}</span>
          <svg class="language-selector__icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 11L3 6h10l-5 5z"/>
          </svg>
        </button>
        <div class="language-selector__menu" role="menu">
          ${otherLanguages.map(([code, lang]) => `
            <button class="language-selector__option" 
                    data-lang="${code}" 
                    role="menuitem"
                    aria-label="${this.t('lang.select')}: ${lang.name}">
              <span class="language-selector__flag">${lang.flag}</span>
              <span class="language-selector__name">${lang.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }  /**
   * Limpiar eventos anteriores
   */
  unbindEvents() {
    // Remover listeners globales
    this.boundEvents.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.boundEvents = [];
  }
  /**
   * Vincular eventos del selector
   */
  bindEvents() {
    // Limpiar eventos anteriores primero
    this.unbindEvents();
    
    const toggle = document.querySelector('.language-selector__toggle');
    const menu = document.querySelector('.language-selector__menu');
    const options = document.querySelectorAll('.language-selector__option');

    if (!toggle || !menu) {
      console.warn('❌ No se pudo encontrar el toggle o menu del selector de idioma');
      return;
    }

    // Toggle del menú
    const toggleHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleLanguageMenu();
    };
    toggle.addEventListener('click', toggleHandler);    // Selección de idioma
    options.forEach((option, index) => {
      const optionHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const selectedLang = option.dataset.lang;
        console.log(`🖱️ Opción de idioma clickeada: ${selectedLang}`);
        
        if (selectedLang && selectedLang !== this.currentLanguage) {
          console.log(`🔄 Iniciando cambio de idioma a: ${selectedLang}`);
          
          // Cambio de idioma inmediato (sin async/await para simplificar)
          this.changeLanguageSmooth(selectedLang)
            .then(success => {
              if (success) {
                console.log(`✅ Cambio de idioma exitoso a: ${selectedLang}`);
              } else {
                console.error(`❌ Falló el cambio de idioma a: ${selectedLang}`);
              }
            })
            .catch(error => {
              console.error(`❌ Error en cambio de idioma: ${error.message}`);
            });
        } else {
          console.log(`⚠️ Idioma no válido o ya seleccionado: ${selectedLang}`);
        }
        
        this.closeLanguageMenu();
      };
      
      option.addEventListener('click', optionHandler);
    });

    // Cerrar menú al hacer clic fuera
    const outsideClickHandler = (e) => {
      if (!e.target.closest('.language-selector')) {
        this.closeLanguageMenu();
      }
    };
    document.addEventListener('click', outsideClickHandler);
    this.boundEvents.push({ element: document, event: 'click', handler: outsideClickHandler });

    // Navegación por teclado
    this.bindKeyboardEvents(toggle, menu, options);
  }

  /**
   * Vincular eventos de teclado
   */
  bindKeyboardEvents(toggle, menu, options) {
    toggle.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.toggleLanguageMenu();
          break;
        case 'ArrowDown':
          e.preventDefault();
          this.openLanguageMenu();
          options[0]?.focus();
          break;
        case 'Escape':
          this.closeLanguageMenu();
          break;
      }
    });

    options.forEach((option, index) => {
      option.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            option.click();
            break;
          case 'ArrowDown':
            e.preventDefault();
            options[(index + 1) % options.length].focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            options[index === 0 ? options.length - 1 : index - 1].focus();
            break;
          case 'Escape':
            this.closeLanguageMenu();
            toggle.focus();
            break;
        }
      });
    });
  }

  /**
   * Abrir/cerrar menú de idiomas
   */
  toggleLanguageMenu() {
    const menu = document.querySelector('.language-selector__menu');
    const isOpen = menu?.classList.contains('language-selector__menu--open');
    
    if (isOpen) {
      this.closeLanguageMenu();
    } else {
      this.openLanguageMenu();
    }
  }

  /**
   * Abrir menú de idiomas
   */
  openLanguageMenu() {
    const toggle = document.querySelector('.language-selector__toggle');
    const menu = document.querySelector('.language-selector__menu');
    
    if (!toggle || !menu) return;

    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('language-selector__menu--open');
    menu.setAttribute('aria-hidden', 'false');
  }

  /**
   * Cerrar menú de idiomas
   */
  closeLanguageMenu() {
    const toggle = document.querySelector('.language-selector__toggle');
    const menu = document.querySelector('.language-selector__menu');
    
    if (!toggle || !menu) return;

    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('language-selector__menu--open');
    menu.setAttribute('aria-hidden', 'true');
  }  /**
   * Cambiar idioma con animación suave
   */
  async changeLanguageSmooth(language) {
    console.log(`🔄 Iniciando cambio de idioma a: ${language}`);
    console.log(`📍 Estado actual - idioma: ${this.currentLanguage}, animación en progreso: ${this.animationInProgress}`);
    
    // Validaciones iniciales
    if (this.animationInProgress) {
      console.warn(`⚠️ Animación en progreso, cancelando cambio a: ${language}`);
      return false;
    }
    
    if (!this.translations[language]) {
      console.error(`❌ Traducciones no encontradas para idioma: ${language}`);
      return false;
    }

    if (language === this.currentLanguage) {
      console.log(`⚠️ Idioma ya seleccionado: ${language}`);
      return false;
    }

    console.log(`🔄 Cambiando idioma de ${this.currentLanguage} a ${language}`);
    
    // Guardar idioma anterior antes de cambiarlo
    const previousLanguage = this.currentLanguage;
    
    this.animationInProgress = true;

    try {
      // Fase 1: Fade out del contenido
      await this.fadeOutContent();
      
      // Fase 2: Cambiar idioma
      console.log(`📝 Actualizando idioma interno de ${this.currentLanguage} a ${language}`);
      this.currentLanguage = language;
      this.setStoredLanguage(language);
      this.updateHtmlLang();
      
      // Fase 3: Actualizar contenido
      console.log(`🌐 Traduciendo página a: ${language}`);
      this.translatePage();
      this.updateLanguageSelector();
      
      // Fase 4: Fade in del contenido
      await this.fadeInContent();
      
      // Emitir evento personalizado con el idioma anterior correcto
      this.dispatchLanguageChangeEvent(language, previousLanguage);
      
      console.log(`✅ Idioma cambiado exitosamente a: ${language}`);
      return true;
      
    } catch (error) {
      console.error('❌ Error cambiando idioma:', error);
      // Revertir el idioma en caso de error
      this.currentLanguage = previousLanguage;
      return false;
    } finally {
      this.animationInProgress = false;
    }
  }

  /**
   * Aplicar fade out al contenido
   */
  fadeOutContent() {
    return new Promise(resolve => {
      const main = document.querySelector('main');
      if (!main) {
        resolve();
        return;
      }

      main.style.transition = `opacity ${LANGUAGE_CONFIG.animations.fadeOut}ms ease-out`;
      main.style.opacity = '0.7';
      
      setTimeout(resolve, LANGUAGE_CONFIG.animations.fadeOut);
    });
  }

  /**
   * Aplicar fade in al contenido
   */
  fadeInContent() {
    return new Promise(resolve => {
      const main = document.querySelector('main');
      if (!main) {
        resolve();
        return;
      }

      setTimeout(() => {
        main.style.transition = `opacity ${LANGUAGE_CONFIG.animations.fadeIn}ms ease-in`;
        main.style.opacity = '1';
        
        setTimeout(() => {
          main.style.transition = '';
          resolve();
        }, LANGUAGE_CONFIG.animations.fadeIn);
      }, 50);
    });
  }  /**
   * Traducir toda la página
   */
  translatePage() {
    console.log(`🌐 Traduciendo página al idioma: ${this.currentLanguage}`);
    
    // Verificar que tenemos las traducciones
    if (!this.translations[this.currentLanguage]) {
      console.error(`❌ No se encontraron traducciones para: ${this.currentLanguage}`);
      return;
    }
    
    // Traducir elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`📊 Elementos encontrados con data-i18n: ${elements.length}`);
    
    let translatedCount = 0;
    elements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      console.log(`🔍 Elemento ${index + 1}: clave="${key}", traducción="${translation}"`);
      
      if (translation && translation !== key) {
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
        translatedCount++;
        console.log(`✅ Traducido: ${key} → ${translation.substring(0, 50)}...`);
      } else {
        console.warn(`⚠️ No se encontró traducción para: ${key}`);
      }
    });
    
    console.log(`✅ Elementos traducidos: ${translatedCount}/${elements.length}`);

    // Traducir atributos específicos
    const attributeElements = document.querySelectorAll('[data-i18n-attr]');
    console.log(`📊 Elementos con data-i18n-attr: ${attributeElements.length}`);
    
    attributeElements.forEach(element => {
      const attrData = element.getAttribute('data-i18n-attr');
      const [attr, key] = attrData.split(':');
      const translation = this.t(key);
      
      if (translation && attr) {
        element.setAttribute(attr, translation);
        console.log(`✅ Atributo traducido: ${attr}="${translation}"`);
      }
    });

    // Actualizar meta tags
    this.updateMetaTags();
  }/**
   * Actualizar selector de idioma después del cambio
   */
  updateLanguageSelector() {
    // Recrear el selector completamente
    this.createLanguageSelector();
    
    // Re-vincular eventos inmediatamente
    this.bindEvents();
  }

  /**
   * Actualizar meta tags según el idioma
   */
  updateMetaTags() {
    const title = this.t('meta.title');
    const description = this.t('meta.description');

    if (title) {
      document.title = title;
      
      // Actualizar Open Graph title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      // Actualizar Twitter title
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', description);
      
      // Actualizar Open Graph description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', description);
      
      // Actualizar Twitter description
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute('content', description);
    }

    // Actualizar locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      const locale = LANGUAGE_CONFIG.languages[this.currentLanguage].locale;
      ogLocale.setAttribute('content', locale);
    }
  }
  /**
   * Obtener traducción por clave
   */
  t(key) {
    if (!key) {
      console.warn('⚠️ Clave de traducción vacía');
      return '';
    }
    
    // Verificar que tenemos traducciones para el idioma actual
    if (!this.translations[this.currentLanguage]) {
      console.error(`❌ No hay traducciones para el idioma: ${this.currentLanguage}`);
      return key;
    }
    
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    
    // Navegar por la estructura de objetos anidados
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`⚠️ Clave de traducción no encontrada: ${key} (falló en '${k}')`);
        return key;
      }
    }
    
    // Verificar que el valor final es una cadena
    if (typeof value !== 'string') {
      console.warn(`⚠️ Valor de traducción no es string para: ${key}`);
      return key;
    }
    
    return value;
  }
  /**
   * Emitir evento de cambio de idioma
   */
  dispatchLanguageChangeEvent(language, previousLanguage = null) {
    const event = new CustomEvent('languageChanged', {
      detail: { 
        language, 
        previousLanguage: previousLanguage || this.currentLanguage,
        translations: this.translations[language],
        config: LANGUAGE_CONFIG.languages[language]
      },
      bubbles: true
    });
    document.dispatchEvent(event);
  }

  /**
   * Obtener idioma actual
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * Obtener configuración de idiomas
   */
  getLanguageConfig() {
    return LANGUAGE_CONFIG;
  }

  /**
   * Verificar si un idioma está soportado
   */
  isLanguageSupported(language) {
    return !!this.translations[language];
  }
  /**
   * Destruir el Language Switcher
   */
  destroy() {
    // Limpiar eventos
    this.unbindEvents();
    
    // Remover selector del DOM
    const selector = document.querySelector('.language-selector');
    if (selector) {
      selector.remove();
    }
    
    this.isInitialized = false;
    this.animationInProgress = false;
  }
}

/* =============================================================================
   INICIALIZACIÓN Y EXPORTACIÓN
   ============================================================================= */

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.LanguageSwitcher = LanguageSwitcher;
  
  // Auto-inicialización mejorada
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    // DOM ya está cargado
    setTimeout(initLanguageSwitcher, 100);
  }
  
  function initLanguageSwitcher() {
    if (!window.vestigiumLanguageSwitcher) {
      try {
        console.log('🚀 Inicializando Language Switcher...');
        window.vestigiumLanguageSwitcher = new LanguageSwitcher();
        window.vestigiumLanguageSwitcher.init();
        console.log('✅ Language Switcher inicializado exitosamente');
      } catch (error) {
        console.error('❌ Error inicializando Language Switcher:', error);
        
        // Fallback: intentar de nuevo después de un breve delay
        setTimeout(() => {
          if (!window.vestigiumLanguageSwitcher) {
            try {
              console.log('🔄 Reintentando inicialización...');
              window.vestigiumLanguageSwitcher = new LanguageSwitcher();
              window.vestigiumLanguageSwitcher.init();
              console.log('✅ Language Switcher inicializado en reintento');
            } catch (retryError) {
              console.error('❌ Error en reintento:', retryError);
            }
          }
        }, 1000);
      }
    }
  }
  
  // Listener para cambios de idioma
  document.addEventListener('languageChanged', function(e) {
    console.log('📢 Idioma cambiado:', e.detail);
  });
}
