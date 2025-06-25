// Script de verificación para index.html
// Ejecutar en la consola del navegador

console.log('🔍 VERIFICACIÓN DEL LANGUAGE SWITCHER EN INDEX.HTML');
console.log('='.repeat(60));

// 1. Verificar que el Language Switcher está cargado
if (window.vestigiumLanguageSwitcher) {
    console.log('✅ Language Switcher está cargado');
    const ls = window.vestigiumLanguageSwitcher;
    
    // 2. Verificar estado actual
    console.log(`📍 Idioma actual: ${ls.getCurrentLanguage()}`);
    console.log(`📍 Inicializado: ${ls.isInitialized}`);
    console.log(`📍 Animación en progreso: ${ls.animationInProgress}`);
    
    // 3. Verificar selector en DOM
    const selector = document.querySelector('.language-selector');
    if (selector) {
        console.log('✅ Selector de idioma encontrado en DOM');
        const toggle = selector.querySelector('.language-selector__toggle');
        const menu = selector.querySelector('.language-selector__menu');
        const options = selector.querySelectorAll('.language-selector__option');
        
        console.log(`📍 Toggle encontrado: ${!!toggle}`);
        console.log(`📍 Menu encontrado: ${!!menu}`);
        console.log(`📍 Opciones encontradas: ${options.length}`);
        
        if (options.length > 0) {
            options.forEach((option, index) => {
                const lang = option.dataset.lang;
                const text = option.textContent.trim();
                console.log(`   Opción ${index + 1}: ${lang} - "${text}"`);
            });
        }
    } else {
        console.log('❌ Selector de idioma NO encontrado en DOM');
    }
    
    // 4. Verificar traducciones
    console.log('\n🌐 Verificando traducciones:');
    const testKeys = ['hero.title', 'hero.subtitle', 'activities.title', 'nav.who-are-we'];
    
    testKeys.forEach(key => {
        const enTranslation = getNestedValue(ls.translations.en, key);
        const hrTranslation = getNestedValue(ls.translations.hr, key);
        
        console.log(`📝 ${key}:`);
        console.log(`   EN: ${enTranslation ? '✅' : '❌'} ${enTranslation ? enTranslation.substring(0, 40) + '...' : 'NO ENCONTRADO'}`);
        console.log(`   HR: ${hrTranslation ? '✅' : '❌'} ${hrTranslation ? hrTranslation.substring(0, 40) + '...' : 'NO ENCONTRADO'}`);
    });
    
    // 5. Verificar elementos traducibles en DOM
    console.log('\n📄 Verificando elementos traducibles:');
    const elementsWithI18n = document.querySelectorAll('[data-i18n]');
    console.log(`📍 Elementos con data-i18n: ${elementsWithI18n.length}`);
    
    if (elementsWithI18n.length > 0) {
        console.log('Primeros 5 elementos:');
        Array.from(elementsWithI18n).slice(0, 5).forEach((element, index) => {
            const key = element.getAttribute('data-i18n');
            const currentText = element.textContent.trim().substring(0, 40);
            console.log(`   ${index + 1}. ${key} - "${currentText}..."`);
        });
    }
    
    // 6. Funciones de test
    console.log('\n🧪 Funciones de test disponibles:');
    console.log('- testChangeToEnglish() - Cambiar a inglés');
    console.log('- testChangeToCroatian() - Cambiar a croata');
    console.log('- showFullDebugInfo() - Información completa de debug');
    
    // Definir funciones de test globales
    window.testChangeToEnglish = function() {
        console.log('🔄 Probando cambio a inglés...');
        return ls.changeLanguageSmooth('en').then(result => {
            console.log(`✅ Resultado: ${result}`);
            console.log(`📍 Idioma actual después del cambio: ${ls.getCurrentLanguage()}`);
            return result;
        }).catch(error => {
            console.error(`❌ Error: ${error.message}`);
            return false;
        });
    };
    
    window.testChangeToCroatian = function() {
        console.log('🔄 Probando cambio a croata...');
        return ls.changeLanguageSmooth('hr').then(result => {
            console.log(`✅ Resultado: ${result}`);
            console.log(`📍 Idioma actual después del cambio: ${ls.getCurrentLanguage()}`);
            return result;
        }).catch(error => {
            console.error(`❌ Error: ${error.message}`);
            return false;
        });
    };
    
    window.showFullDebugInfo = function() {
        console.log('\n📊 INFORMACIÓN COMPLETA DE DEBUG:');
        console.log('='.repeat(40));
        console.log('Language Switcher:', ls);
        console.log('Current Language:', ls.getCurrentLanguage());
        console.log('Available Languages:', Object.keys(ls.getLanguageConfig().languages));
        console.log('Available Translations:', Object.keys(ls.translations));
        console.log('HTML Lang Attribute:', document.documentElement.lang);
        console.log('LocalStorage:', localStorage.getItem('vestigium-language'));
        console.log('Is Initialized:', ls.isInitialized);
        console.log('Animation in Progress:', ls.animationInProgress);
        
        // Test de traducción sample
        console.log('\nTest de traducción (hero.title):');
        console.log('EN:', ls.translations.en['hero.title']);
        console.log('HR:', ls.translations.hr['hero.title']);
        console.log('Actual (t("hero.title")):', ls.t('hero.title'));
    };
    
} else {
    console.log('❌ Language Switcher NO está cargado');
    console.log('Posibles causas:');
    console.log('- El archivo language-switcher.js no se cargó');
    console.log('- Error en la inicialización');
    console.log('- El DOM aún no está listo');
    
    // Verificar si el script está cargado
    const scripts = Array.from(document.scripts);
    const lsScript = scripts.find(script => script.src.includes('language-switcher'));
    console.log(`📍 Script language-switcher encontrado: ${!!lsScript}`);
    if (lsScript) {
        console.log(`📍 Script src: ${lsScript.src}`);
    }
}

// Función helper
function getNestedValue(obj, key) {
    return key.split('.').reduce((o, k) => o && o[k], obj);
}

console.log('\n🎯 Para probar el cambio de idioma:');
console.log('1. Haz clic en el selector de idioma en la esquina superior derecha');
console.log('2. O ejecuta: testChangeToCroatian()');
console.log('3. Observa si el contenido cambia a croata');
console.log('\n' + '='.repeat(60));
