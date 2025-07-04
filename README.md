# 🌍 Vestigium 2.0

## 📋 Project Description

Vestigium 2.0 is a multilingual website (English/Croatian) developed in **Vanilla JavaScript**, HTML5 and CSS3, focused on sustainable community development. It includes an advanced language switching system, responsive navigation, modular architecture, and modern interactive components.

## 🚀 Project Status

**✅ COMPLETED AND FUNCTIONAL**

- ✅ Multilingual system fully implemented
- ✅ Modern responsive image carousel
- ✅ Visitor counter with localStorage persistence
- ✅ Advanced hamburger navigation menu
- ✅ Tests organized and documented  
- ✅ Project clean and ready for production
- ✅ Documentation consolidated
- 🚀 **Ready for production**

---

## 🌐 MULTILINGUAL SYSTEM

### **Main Features:**
- ✅ Dynamic switching between English and Croatian
- ✅ Language preference persistence in localStorage
- ✅ Automatic translation of content, meta tags and attributes
- ✅ Visual interface integrated in navigation
- ✅ Auto-initialization on page load

### **Supported Languages:**
- **English** (default): Code `en`
- **Croatian**: Code `hr`

### **How It Works:**
1. The system detects elements with `data-i18n` attributes
2. Searches for corresponding translations in the `TRANSLATIONS` object
3. Updates content dynamically
4. Saves user preference

### **Basic Usage:**
```html
<h1 data-i18n="hero.title">Building Sustainable Communities</h1>
<p data-i18n="hero.subtitle">Text that translates automatically</p>
```

---

## 🎠 INTERACTIVE CAROUSEL

### **Features:**
- ✅ Responsive image carousel for "About Vestigium" section
- ✅ Circular images with modern design
- ✅ Auto-slide every 4 seconds
- ✅ SVG navigation buttons (previous/next)
- ✅ Clickable navigation dots
- ✅ Keyboard navigation (arrow keys)
- ✅ Pause on hover functionality
- ✅ Easy image management system
- ✅ Fallback images with error handling

### **Configuration:**
```javascript
// Add new images easily
window.vestigiumCarousel.addImage({
    src: 'src/assets/images/activities/new-image.jpg',
    alt: 'Description',
    title: 'Image Title'
});

// Change auto-slide delay
window.vestigiumCarousel.updateSettings({
    autoSlideDelay: 6000 // 6 seconds
});
```

---

## 📊 VISITOR COUNTER

### **Features:**
- ✅ Real-time visitor counting
- ✅ Data persistence in localStorage
- ✅ Automatic increment on page load
- ✅ Multilingual labels
- ✅ Elegant display in footer

---

## 🍔 ADVANCED NAVIGATION

### **Features:**
- ✅ Modern hamburger menu for mobile
- ✅ Compact design with smooth animations
- ✅ Multi-level dropdown menus
- ✅ Responsive design (mobile-first)
- ✅ Keyboard accessibility
- ✅ ARIA labels for screen readers

---

## 🎯 Project Objectives

- **Vanilla JavaScript**: No external frameworks or libraries
- **Maintainability**: Clean, well-structured and documented code
- **Best Practices**: Industry standards in web development
- **Minimalist Design**: Simple aesthetics with green/white/gray palette
- **SEO Optimized**: Complete technical implementation
- **HTML5 Semantics**: Accessible and semantically correct structure
- **Multilingual**: Advanced internationalization system
- **Modern Interactivity**: Smooth animations and user-friendly components

---

## 🎨 Design Guide

### Color Palette
```css
:root {
  --primary-green: #2E7D32;      /* Primary green */
  --light-green: #4CAF50;        /* Light green */
  --dark-green: #1B5E20;         /* Dark green */
  --white: #FFFFFF;              /* White */
  --light-gray: #F5F5F5;         /* Light gray */
  --medium-gray: #9E9E9E;        /* Medium gray */
  --dark-gray: #424242;          /* Dark gray for contrast */
  --text-primary: #212121;       /* Primary text */
  --text-secondary: #757575;     /* Secondary text */
}
```

### Design Principles
- **Minimalism**: Generous white spaces
- **Contrast**: Dark grays for readability
- **Typography**: Clear and legible hierarchy
- **Responsive**: Mobile-first approach

---

## 🏗️ PROJECT ARCHITECTURE

### **File Structure:**
```
📁 Vestigium 2.0/
├── 📄 index.html                 # Main page
├── 📄 manifest.json              # PWA manifest
├── 📄 robots.txt                 # SEO robots
├── 📄 sitemap.xml               # Sitemap
├── 📄 .gitignore                # Git ignore rules
├── 📄 README.md                 # This complete documentation
├── 📁 src/                      # Source code
│   ├── 📁 assets/
│   │   ├── 📁 js/
│   │   │   ├── language-switcher.js  # Multilingual system
│   │   │   ├── about-carousel.js     # Image carousel
│   │   │   ├── visitor-counter.js    # Visitor counter
│   │   │   └── main.js               # Main JavaScript
│   │   ├── 📁 css/
│   │   │   ├── main.css              # Main styles
│   │   │   └── navigation-advanced.css # Navigation and language selector
│   │   └── 📁 images/
│   │       ├── 📁 activities/        # Carousel images
│   │       ├── 📁 favicon/          # Favicons
│   │       ├── 📁 logo/             # Logos
│   │       └── 📁 erasmus/          # Erasmus images
│   └── 📁 pages/                # Additional pages
└── 📁 tests/                    # Organized tests
    ├── 📁 language-switcher/    # Functionality tests
    ├── 📁 scripts/              # Verification scripts
    ├── 📁 archived-originals/   # File backups
    └── README.md                # Test documentation
```

### **Main Files:**
- **`index.html`**: Main page with multilingual system and components
- **`src/assets/js/language-switcher.js`**: Language system engine
- **`src/assets/js/about-carousel.js`**: Interactive carousel component
- **`src/assets/js/visitor-counter.js`**: Visitor counting system
- **`src/assets/css/navigation-advanced.css`**: Navigation and language selector styles

---

## 🔧 CORRECTIONS AND IMPROVEMENTS IMPLEMENTED

### **1. Image Carousel Implementation**
- **New Feature**: Added responsive image carousel for About section
- **Benefits**: Modern visual presentation, auto-slide, navigation controls
- **Location**: `src/assets/js/about-carousel.js`

### **2. Visitor Counter System**
- **New Feature**: Real-time visitor counting with persistence
- **Benefits**: Engagement metrics, localStorage persistence
- **Location**: `src/assets/js/visitor-counter.js`

### **3. Navigation Menu Enhancement**
- **Improvement**: Modernized hamburger menu design
- **Benefits**: More compact, better animations, improved mobile experience
- **Location**: `src/assets/css/navigation-advanced.css`

### **4. Contact Information Update**
- **Update**: Changed association address from "Vrbana Area, Zagreb" to "Grančarska 2a, Brezovica"
- **Benefits**: Current and accurate contact information
- **Files**: `index.html`, `language-switcher.js`

### **5. Test File Organization**
- **Problem**: Test and debug files scattered in root directory
- **Solution**: Created organized structure in `/tests/`

### **6. Translation Logic Correction**
- **Problem**: The `t()` function expected nested objects, but translations were flat
- **Solution**: Refactored `TRANSLATIONS` object to use nested structure

**Before:**
```javascript
const TRANSLATIONS = {
  en: {
    'hero.title': 'Building Sustainable Communities',
    'hero.subtitle': 'Subtitle text'
  }
}
```

**After:**
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

### **7. Initialization System Improvements**
- ✅ Enhanced auto-initialization with fallbacks
- ✅ Automatic retry system
- ✅ Better DOM load state detection
- ✅ Robust error handling

### **8. File Path Corrections**
- ✅ All paths corrected from `/src/` to `src/` for local compatibility
- ✅ Correct references in test files
- ✅ Updated relative paths in new structure

### **9. Project Cleanup**
- ✅ Removed test files from root directory
- ✅ Removed empty `tools` directory
- ✅ Consolidated all documentation

---

## 🧪 TESTING AND VERIFICATION

### **Available Tests:**

#### **Complete Tests (Recommended):**
- `tests/language-switcher/test-complete.html` - Complete UI similar to index.html
- `tests/language-switcher/working-test.html` - Functional test with styles
- `tests/language-switcher/test-direct.html` - Comparative test

#### **Debug Tests:**
- `tests/language-switcher/debug-final.html` - Complete debug with monitoring
- `tests/language-switcher/debug-test.html` - Initialization debug
- `tests/language-switcher/test-language-issue.html` - Specific issue debug

#### **Quick Tests:**
- `tests/language-switcher/test-rapid.html` - Quick test
- `tests/language-switcher/test-minimal.html` - Minimal test

### **Verification Script:**
The file `tests/scripts/verify-language-switcher.js` contains useful debugging functions:
```javascript
testEN()    // Switch to English
testHR()    // Switch to Croatian
debugLS()   // Complete debug
```

### **Visual Verification:**
1. Status indicator in bottom-right corner shows system state
2. Click indicator for complete console debug
3. Language selector appears in top-right corner

---

## 🚀 USAGE GUIDE

### **For Developers:**

#### **Adding New Translations:**
1. Edit `src/assets/js/language-switcher.js`
2. Add new key in `TRANSLATIONS` object
3. Provide translation in English and Croatian
4. Use `data-i18n="new.key"` in HTML

#### **Example of New Translation:**
```javascript
// In TRANSLATIONS
en: {
  new: {
    key: 'New English Text'
  }
},
hr: {
  new: {
    key: 'Novi Hrvatski Tekst'
  }
}
```

```html
<!-- In HTML -->
<p data-i18n="new.key">New English Text</p>
```

#### **Adding Carousel Images:**
1. Add images to `src/assets/images/activities/`
2. Use the carousel API:
```javascript
window.vestigiumCarousel.addImage({
    src: 'src/assets/images/activities/new-image.jpg',
    alt: 'Image description',
    title: 'Image title'
});
```

### **For End Users:**
1. Visit `index.html`
2. Click on language selector (top-right corner)
3. Select desired language
4. Content updates automatically
5. Navigate through carousel using arrows or dots
6. Visitor count updates automatically

---

## 🔍 TROUBLESHOOTING

### **Common Issues:**

#### **Language selector doesn't appear:**
- Verify `language-switcher.js` loads correctly
- Check browser console for errors
- Use `tests/language-switcher/debug-final.html` for diagnosis

#### **Translations don't change:**
- Verify elements have `data-i18n` attributes
- Check that keys exist in `TRANSLATIONS`
- Use verification script for debug

#### **Carousel doesn't work:**
- Verify `about-carousel.js` is included
- Check that carousel container exists in HTML
- Verify images exist in `src/assets/images/activities/`

#### **Console errors:**
- Verify all file paths are correct
- Check for variable name conflicts
- Use test files to isolate the problem

### **Debug Tools:**
1. **Visual status indicator** (bottom-right corner in index.html)
2. **Debug tests** in `/tests/language-switcher/`
3. **Verification script** in `/tests/scripts/`
4. **Browser console** with detailed logging

---

## 🔧 Coding Standards

### Semantic HTML5
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags in order: charset, viewport, title, description -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <meta name="description" content="Page description">
</head>
<body>
    <!-- Mandatory semantic structure -->
    <header role="banner">
        <nav role="navigation" aria-label="Main navigation">
            <!-- Navigation content -->
        </nav>
    </header>
    
    <main role="main">
        <h1>Unique page title</h1>
        <!-- Main content -->
    </main>
    
    <aside role="complementary">
        <!-- Complementary content -->
    </aside>
    
    <footer role="contentinfo">
        <!-- Site information -->
    </footer>
</body>
</html>
```

### Modular JavaScript
- Use ES6 modules when possible
- Pure and reusable functions
- JSDoc comments for documentation
- Robust error handling

### Organized CSS
- BEM methodology for naming
- CSS custom properties
- Mobile-first responsive design
- Performance optimization

---

## ✅ CURRENT STATUS

### **Completed Features:**
- ✅ Fully functional multilingual system
- ✅ Interactive image carousel with auto-slide
- ✅ Visitor counter with persistence
- ✅ Modern responsive navigation
- ✅ Integrated visual interface
- ✅ Robust auto-initialization
- ✅ Preference persistence
- ✅ Organized and working tests
- ✅ Consolidated documentation
- ✅ Clean and organized project

### **Verifications Performed:**
- ✅ Language switching works correctly
- ✅ All translations are applied
- ✅ Meta tags update dynamically
- ✅ Preferences saved in localStorage
- ✅ Carousel functions properly
- ✅ Navigation is fully responsive
- ✅ Tests work from new location
- ✅ No unnecessary files in project

---

## 🎯 READY FOR PRODUCTION

The Vestigium 2.0 project is **fully functional** and ready for production use.

### **For Production Version (Optional):**
- Remove visual status indicator
- Reduce console logging
- Minify JavaScript and CSS files
- Optimize images

### **Key Features:**
- **Multilingual system**: English ⇄ Croatian
- **Interactive carousel**: Auto-slide with navigation
- **Visitor counter**: Real-time counting with persistence
- **Advanced navigation**: Responsive dropdown menus
- **SEO optimized**: Dynamic meta tags
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Fast and efficient loading

---

## 🎉 Quick Start

1. **Clone/Download** the project
2. **Open** `index.html` in browser
3. **Test** language switching by clicking selector
4. **Navigate** through carousel using arrows
5. **Verify** everything works correctly

### **For Development:**
1. Use test files in `/tests/language-switcher/`
2. Check verification script in `/tests/scripts/`
3. Review browser console for debug

---

**Project completed successfully** ✅  
**Completion date**: July 2025  
**Status**: Ready for production 🚀

---

*Vestigium 2.0 - Building sustainable communities with modern technology*

---

---

# 🌍 Vestigium 2.0 (HRVATSKI)

## 📋 Opis Projekta

Vestigium 2.0 je višejezična web stranica (engleski/hrvatski) razvijena u **Vanilla JavaScript**, HTML5 i CSS3, fokusirana na održivi razvoj zajednica. Uključuje napredni sustav mijenjanja jezika, responzivnu navigaciju, modularnu arhitekturu i moderne interaktivne komponente.

## 🚀 Status Projekta

**✅ ZAVRŠENO I FUNKCIONALNO**

- ✅ Višejezični sustav potpuno implementiran
- ✅ Moderni responzivni karusel slika
- ✅ Brojač posjetitelja s localStorage perzistencijom
- ✅ Napredni hamburger navigacijski izbornik
- ✅ Testovi organizirani i dokumentirani
- ✅ Projekt čist i spreman za produkciju
- ✅ Dokumentacija konsolidirana
- 🚀 **Spreman za produkciju**

---

## 🌐 VIŠEJEZIČNI SUSTAV

### **Glavne značajke:**
- ✅ Dinamičko prebacivanje između engleskog i hrvatskog
- ✅ Perzistencija jezičnih postavki u localStorage
- ✅ Automatski prijevod sadržaja, meta tagova i atributa
- ✅ Vizualno sučelje integrirano u navigaciju
- ✅ Auto-inicijalizacija pri učitavanju stranice

### **Podržani jezici:**
- **Engleski** (zadano): Kod `en`
- **Hrvatski**: Kod `hr`

### **Kako funkcionira:**
1. Sustav detektira elemente s atributima `data-i18n`
2. Traži odgovarajuće prijevode u objektu `TRANSLATIONS`
3. Dinamički ažurira sadržaj
4. Sprema korisničke postavke

### **Osnovna uporaba:**
```html
<h1 data-i18n="hero.title">Building Sustainable Communities</h1>
<p data-i18n="hero.subtitle">Tekst koji se automatski prevodi</p>
```

---

## 🎠 INTERAKTIVNI KARUSEL

### **Značajke:**
- ✅ Responzivni karusel slika za odjeljak "O Vestigiumu"
- ✅ Kružne slike s modernim dizajnom
- ✅ Auto-klizanje svakih 4 sekunde
- ✅ SVG navigacijski gumbovi (prethodna/sljedeća)
- ✅ Klikne točke za navigaciju
- ✅ Navigacija tipkovnicom (strelice)
- ✅ Pauza prilikom prelaska mišem
- ✅ Jednostavan sustav upravljanja slikama
- ✅ Rezervne slike s rukovanjem greškama

### **Konfiguracija:**
```javascript
// Jednostavno dodavanje novih slika
window.vestigiumCarousel.addImage({
    src: 'src/assets/images/activities/nova-slika.jpg',
    alt: 'Opis',
    title: 'Naslov slike'
});

// Promjena vremena auto-klizanja
window.vestigiumCarousel.updateSettings({
    autoSlideDelay: 6000 // 6 sekundi
});
```

---

## 📊 BROJAČ POSJETITELJA

### **Značajke:**
- ✅ Brojanje posjetitelja u stvarnom vremenu
- ✅ Perzistencija podataka u localStorage
- ✅ Automatsko povećanje pri učitavanju stranice
- ✅ Višejezične oznake
- ✅ Elegantan prikaz u podnožju

---

## 🍔 NAPREDNA NAVIGACIJA

### **Značajke:**
- ✅ Moderni hamburger izbornik za mobilne uređaje
- ✅ Kompaktan dizajn s glatkim animacijama
- ✅ Višerazinski padajući izbornici
- ✅ Responzivni dizajn (mobile-first)
- ✅ Dostupnost tipkovnice
- ✅ ARIA oznake za čitače zaslona

---

## 🎯 Ciljevi Projekta

- **Vanilla JavaScript**: Bez vanjskih okvira ili biblioteka
- **Održivost**: Čist, dobro strukturiran i dokumentiran kod
- **Najbolje prakse**: Industrijski standardi u web razvoju
- **Minimalistički dizajn**: Jednostavna estetika sa zeleno/bijelo/sivom paletom
- **SEO optimizirano**: Potpuna tehnička implementacija
- **HTML5 semantika**: Dostupna i semantički ispravna struktura
- **Višejezičnost**: Napredni sustav internacionalizacije
- **Moderna interaktivnost**: Glatke animacije i komponente prilagođene korisniku

---

## 🎨 Vodič za Dizajn

### Paleta Boja
```css
:root {
  --primary-green: #2E7D32;      /* Glavna zelena */
  --light-green: #4CAF50;        /* Svijetla zelena */
  --dark-green: #1B5E20;         /* Tamna zelena */
  --white: #FFFFFF;              /* Bijela */
  --light-gray: #F5F5F5;         /* Svijetlo siva */
  --medium-gray: #9E9E9E;        /* Srednja siva */
  --dark-gray: #424242;          /* Tamno siva za kontrast */
  --text-primary: #212121;       /* Glavni tekst */
  --text-secondary: #757575;     /* Sekundarni tekst */
}
```

### Principi Dizajna
- **Minimalizam**: Velikodušni bijeli prostori
- **Kontrast**: Tamno sive za čitljivost
- **Tipografija**: Jasna i čitljiva hijerarhija
- **Responzivnost**: Mobile-first pristup

---

## 🏗️ ARHITEKTURA PROJEKTA

### **Struktura Datoteka:**
```
📁 Vestigium 2.0/
├── 📄 index.html                 # Glavna stranica
├── 📄 manifest.json              # PWA manifest
├── 📄 robots.txt                 # SEO robots
├── 📄 sitemap.xml               # Sitemap
├── 📄 .gitignore                # Git ignore pravila
├── 📄 README.md                 # Ova potpuna dokumentacija
├── 📁 src/                      # Izvorni kod
│   ├── 📁 assets/
│   │   ├── 📁 js/
│   │   │   ├── language-switcher.js  # Višejezični sustav
│   │   │   ├── about-carousel.js     # Karusel slika
│   │   │   ├── visitor-counter.js    # Brojač posjetitelja
│   │   │   └── main.js               # Glavni JavaScript
│   │   ├── 📁 css/
│   │   │   ├── main.css              # Glavni stilovi
│   │   │   └── navigation-advanced.css # Navigacija i jezični selektor
│   │   └── 📁 images/
│   │       ├── 📁 activities/        # Slike karusela
│   │       ├── 📁 favicon/          # Favikoni
│   │       ├── 📁 logo/             # Logotipi
│   │       └── 📁 erasmus/          # Erasmus slike
│   └── 📁 pages/                # Dodatne stranice
└── 📁 tests/                    # Organizirani testovi
    ├── 📁 language-switcher/    # Testovi funkcionalnosti
    ├── 📁 scripts/              # Skripte za verifikaciju
    ├── 📁 archived-originals/   # Sigurnosne kopije datoteka
    └── README.md                # Dokumentacija testova
```

### **Glavne datoteke:**
- **`index.html`**: Glavna stranica s višejezičnim sustavom i komponentama
- **`src/assets/js/language-switcher.js`**: Motor jezičnog sustava
- **`src/assets/js/about-carousel.js`**: Komponenta interaktivnog karusela
- **`src/assets/js/visitor-counter.js`**: Sustav brojanja posjetitelja
- **`src/assets/css/navigation-advanced.css`**: Stilovi za navigaciju i jezični selektor

---

## 🔧 IMPLEMENTIRANE ISPRAVKE I POBOLJŠANJA

### **1. Implementacija Karusela Slika**
- **Nova značajka**: Dodan responzivni karusel slika za odjeljak O nama
- **Prednosti**: Moderan vizualni prikaz, auto-klizanje, kontrole navigacije
- **Lokacija**: `src/assets/js/about-carousel.js`

### **2. Sustav Brojača Posjetitelja**
- **Nova značajka**: Brojanje posjetitelja u stvarnom vremenu s perzistencijom
- **Prednosti**: Metrije angažmana, localStorage perzistencija
- **Lokacija**: `src/assets/js/visitor-counter.js`

### **3. Poboljšanje Navigacijskog Izbornika**
- **Poboljšanje**: Moderniziran dizajn hamburger izbornika
- **Prednosti**: Kompaktniji, bolje animacije, poboljšano mobilno iskustvo
- **Lokacija**: `src/assets/css/navigation-advanced.css`

### **4. Ažuriranje Kontaktnih Informacija**
- **Ažuriranje**: Promijenjena adresa udruge s "Vrbana Area, Zagreb" na "Grančarska 2a, Brezovica"
- **Prednosti**: Trenutne i točne kontaktne informacije
- **Datoteke**: `index.html`, `language-switcher.js`

### **5. Organizacija Test Datoteka**
- **Problem**: Test i debug datoteke razbacane po root direktoriju
- **Rješenje**: Stvorena organizirana struktura u `/tests/`

### **6. Ispravka Logike Prijevoda**
- **Problem**: Funkcija `t()` očekivala ugniježđene objekte, ali prijevodi su bili ravni
- **Rješenje**: Refaktoriran objekt `TRANSLATIONS` za korištenje ugniježđene strukture

### **7. Poboljšanja Sustava Inicijalizacije**
- ✅ Poboljšana auto-inicijalizacija s fallback-ovima
- ✅ Automatski sustav ponovnih pokušaja
- ✅ Bolja detekcija stanja učitavanja DOM-a
- ✅ Robusno rukovanje greškama

### **8. Ispravke Putanja Datoteka**
- ✅ Sve putanje ispravljene s `/src/` na `src/` za lokalnu kompatibilnost
- ✅ Ispravne reference u test datotekama
- ✅ Ažurirane relativne putanje u novoj strukturi

### **9. Čišćenje Projekta**
- ✅ Uklonjene test datoteke iz root direktorija
- ✅ Uklonjen prazan `tools` direktorij
- ✅ Konsolidirana sva dokumentacija

---

## 🧪 TESTIRANJE I VERIFIKACIJA

### **Dostupni testovi:**

#### **Potpuni testovi (preporučeno):**
- `tests/language-switcher/test-complete.html` - Potpuni UI sličan index.html
- `tests/language-switcher/working-test.html` - Funkcionalni test sa stilovima
- `tests/language-switcher/test-direct.html` - Komparativni test

#### **Debug testovi:**
- `tests/language-switcher/debug-final.html` - Potpuni debug s monitoringom
- `tests/language-switcher/debug-test.html` - Debug inicijalizacije
- `tests/language-switcher/test-language-issue.html` - Debug specifičnih problema

#### **Brzi testovi:**
- `tests/language-switcher/test-rapid.html` - Brzi test
- `tests/language-switcher/test-minimal.html` - Minimalni test

### **Skripta za verifikaciju:**
Datoteka `tests/scripts/verify-language-switcher.js` sadrži korisne debug funkcije:
```javascript
testEN()    // Prebaci na engleski
testHR()    // Prebaci na hrvatski
debugLS()   // Potpuni debug
```

### **Vizualna verifikacija:**
1. Indikator stanja u donjem desnom kutu prikazuje stanje sustava
2. Klik na indikator za potpuni debug u konzoli
3. Jezični selektor pojavljuje se u gornjem desnom kutu

---

## 🚀 VODIČ ZA KORIŠTENJE

### **Za developere:**

#### **Dodavanje novih prijevoda:**
1. Uredi `src/assets/js/language-switcher.js`
2. Dodaj novi ključ u objekt `TRANSLATIONS`
3. Osigurai prijevod na engleskom i hrvatskom
4. Koristi `data-i18n="novi.kljuc"` u HTML-u

#### **Primjer novog prijevoda:**
```javascript
// U TRANSLATIONS
en: {
  novi: {
    kljuc: 'New English Text'
  }
},
hr: {
  novi: {
    kljuc: 'Novi Hrvatski Tekst'
  }
}
```

```html
<!-- U HTML-u -->
<p data-i18n="novi.kljuc">Novi Hrvatski Tekst</p>
```

#### **Dodavanje slika karusela:**
1. Dodaj slike u `src/assets/images/activities/`
2. Koristi karusel API:
```javascript
window.vestigiumCarousel.addImage({
    src: 'src/assets/images/activities/nova-slika.jpg',
    alt: 'Opis slike',
    title: 'Naslov slike'
});
```

### **Za krajnje korisnike:**
1. Posjeti `index.html`
2. Klikni na jezični selektor (gornji desni kut)
3. Odaberi željeni jezik
4. Sadržaj se automatski ažurira
5. Navigiraj kroz karusel pomoću strelica ili točaka
6. Broj posjetitelja se automatski ažurira

---

## ✅ TRENUTNO STANJE

### **Završene značajke:**
- ✅ Potpuno funkcionalni višejezični sustav
- ✅ Interaktivni karusel slika s auto-klizanjem
- ✅ Brojač posjetitelja s perzistencijom
- ✅ Moderna responzivna navigacija
- ✅ Integrirano vizualno sučelje
- ✅ Robusna auto-inicijalizacija
- ✅ Perzistencija postavki
- ✅ Organizirani i funkcionalni testovi
- ✅ Konsolidirana dokumentacija
- ✅ Čist i organiziran projekt

### **Izvršene verifikacije:**
- ✅ Prebacivanje jezika radi ispravno
- ✅ Svi prijevodi se primjenjuju
- ✅ Meta tagovi se dinamički ažuriraju
- ✅ Postavke spremljene u localStorage
- ✅ Karusel funkcionira ispravno
- ✅ Navigacija je potpuno responzivna
- ✅ Testovi rade s nove lokacije
- ✅ Nema nepotrebnih datoteka u projektu

---

## 🎯 SPREMAN ZA PRODUKCIJU

Projekt Vestigium 2.0 je **potpuno funkcionalan** i spreman za produkcijsku uporabu.

### **Za produkcijsku verziju (opcionalno):**
- Ukloni vizualni indikator stanja
- Smanji konzolno logiranje
- Minificiraj JavaScript i CSS datoteke
- Optimiziraj slike

### **Ključne značajke:**
- **Višejezični sustav**: Engleski ⇄ Hrvatski
- **Interaktivni karusel**: Auto-klizanje s navigacijom
- **Brojač posjetitelja**: Brojanje u stvarnom vremenu s perzistencijom
- **Napredna navigacija**: Responzivni padajući izbornici
- **SEO optimizirano**: Dinamički meta tagovi
- **Dostupnost**: ARIA oznake i navigacija tipkovnicom
- **Performanse**: Brzo i učinkovito učitavanje

---

## 🎉 Brzi Početak

1. **Kloniraj/Preuzmi** projekt
2. **Otvori** `index.html` u pregledniku
3. **Testiraj** prebacivanje jezika klikom na selektor
4. **Navigiraj** kroz karusel pomoću strelica
5. **Provjeri** da sve radi ispravno

### **Za razvoj:**
1. Koristi test datoteke u `/tests/language-switcher/`
2. Provjeri verifikacijsku skriptu u `/tests/scripts/`
3. Pregledaj konzolu preglednika za debug

---

**Projekt uspješno završen** ✅  
**Datum završetka**: Srpanj 2025  
**Status**: Spreman za produkciju 🚀

---

*Vestigium 2.0 - Gradimo održive zajednice s modernom tehnologijom*

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