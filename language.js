// language.js - Tüm sayfalar için dil sistemi

const translations = {
    tr: {
        // Navbar
        'nav.home': 'VİTRİN',
        'nav.projects': 'PROJELER',
        'nav.about': 'KURUMSAL',
        'nav.contact': 'İLETİŞİM',
        
        // Hero
        'hero.title': 'Antalya\'da Satılık & Kiralık Emlak İlanları',
        'hero.subtitle': 'En güncel gayrimenkul fırsatları ile hayalinizdeki evi bulun',
        
        // Filter
        'filter.search': 'İlan Ara (Örn: Lara, deniz, 3+1...)',
        'filter.all': 'Tüm Kategoriler',
        'filter.konut': 'Konut / Daire',
        'filter.villa': 'Lüks Villa',
        'filter.arsa': 'Arsa / Arazi',
        'filter.isyeri': 'Ticari / İşyeri',
        'filter.new': 'En Yeniler',
        'filter.price-asc': 'Fiyat: Düşükten Yükseğe',
        'filter.price-desc': 'Fiyat: Yüksekten Düşüğe',
        'filter.button': 'ARA',
        
        // Titles
        'title.featured': 'Vitrin Fırsatları',
        'title.all': 'Tüm İlanlar',
        
        // Buttons
        'button.details': 'DETAYLAR',
        'button.whatsapp': 'WhatsApp\'tan Sor',
        'button.close': 'Kapat',
        
        // Modal
        'modal.area': 'ALAN',
        'modal.rooms': 'ODA',
        'modal.floor': 'KAT',
        'modal.desc': 'Açıklama',
        'modal.location': 'Konum'
    },
    
    en: {
        // Navbar
        'nav.home': 'HOME',
        'nav.projects': 'PROJECTS',
        'nav.about': 'ABOUT',
        'nav.contact': 'CONTACT',
        
        // Hero
        'hero.title': 'Real Estate Listings in Antalya',
        'hero.subtitle': 'Find your dream home with the latest real estate opportunities',
        
        // Filter
        'filter.search': 'Search listings (Ex: Lara, sea view, 3+1...)',
        'filter.all': 'All Categories',
        'filter.konut': 'Residential / Apartment',
        'filter.villa': 'Luxury Villa',
        'filter.arsa': 'Land / Plot',
        'filter.isyeri': 'Commercial / Office',
        'filter.new': 'Newest',
        'filter.price-asc': 'Price: Low to High',
        'filter.price-desc': 'Price: High to Low',
        'filter.button': 'SEARCH',
        
        // Titles
        'title.featured': 'Featured Listings',
        'title.all': 'All Listings',
        
        // Buttons
        'button.details': 'DETAILS',
        'button.whatsapp': 'Ask on WhatsApp',
        'button.close': 'Close',
        
        // Modal
        'modal.area': 'AREA',
        'modal.rooms': 'ROOMS',
        'modal.floor': 'FLOOR',
        'modal.desc': 'Description',
        'modal.location': 'Location'
    },
    
    de: {
        // Navbar
        'nav.home': 'STARTSEITE',
        'nav.projects': 'PROJEKTE',
        'nav.about': 'ÜBER UNS',
        'nav.contact': 'KONTAKT',
        
        // Hero
        'hero.title': 'Immobilien in Antalya',
        'hero.subtitle': 'Finden Sie Ihr Traumhaus mit den neuesten Immobilienangeboten',
        
        // Filter
        'filter.search': 'Anzeigen suchen (z.B.: Lara, Meerblick, 3+1...)',
        'filter.all': 'Alle Kategorien',
        'filter.konut': 'Wohnung / Apartment',
        'filter.villa': 'Luxus Villa',
        'filter.arsa': 'Grundstück',
        'filter.isyeri': 'Gewerbe / Büro',
        'filter.new': 'Neueste',
        'filter.price-asc': 'Preis: Aufsteigend',
        'filter.price-desc': 'Preis: Absteigend',
        'filter.button': 'SUCHEN',
        
        // Titles
        'title.featured': 'Ausgewählte Angebote',
        'title.all': 'Alle Angebote',
        
        // Buttons
        'button.details': 'DETAILS',
        'button.whatsapp': 'Auf WhatsApp fragen',
        'button.close': 'Schließen',
        
        // Modal
        'modal.area': 'FLÄCHE',
        'modal.rooms': 'ZIMMER',
        'modal.floor': 'STOCK',
        'modal.desc': 'Beschreibung',
        'modal.location': 'Standort'
    },
    
    ru: {
        // Navbar
        'nav.home': 'ГЛАВНАЯ',
        'nav.projects': 'ПРОЕКТЫ',
        'nav.about': 'О КОМПАНИИ',
        'nav.contact': 'КОНТАКТЫ',
        
        // Hero
        'hero.title': 'Недвижимость в Анталии',
        'hero.subtitle': 'Найдите дом своей мечты с нашими актуальными предложениями',
        
        // Filter
        'filter.search': 'Поиск объявлений (напр.: Лара, вид на море, 3+1...)',
        'filter.all': 'Все категории',
        'filter.konut': 'Жилая / Квартира',
        'filter.villa': 'Люкс Вилла',
        'filter.arsa': 'Земля / Участок',
        'filter.isyeri': 'Коммерческая / Офис',
        'filter.new': 'Сначала новые',
        'filter.price-asc': 'Цена: по возрастанию',
        'filter.price-desc': 'Цена: по убыванию',
        'filter.button': 'ПОИСК',
        
        // Titles
        'title.featured': 'Рекомендуемые',
        'title.all': 'Все объявления',
        
        // Buttons
        'button.details': 'ПОДРОБНЕЕ',
        'button.whatsapp': 'Спросить в WhatsApp',
        'button.close': 'Закрыть',
        
        // Modal
        'modal.area': 'ПЛОЩАДЬ',
        'modal.rooms': 'КОМНАТЫ',
        'modal.floor': 'ЭТАЖ',
        'modal.desc': 'Описание',
        'modal.location': 'Расположение'
    }
};

// Mevcut dili al (localStorage'den veya varsayılan Türkçe)
let currentLang = localStorage.getItem('neoyapi-lang') || 'tr';

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('neoyapi-lang', lang);
    
    // Tüm sayfadaki metinleri güncelle
    updatePageText();
    
    // Aktif dili göster
    updateActiveLanguage();
    
    // Navbar'ı güncelle (sayfa yenilemeden)
    updateNavbarLinks();
}

// Sayfa metinlerini güncelle
function updatePageText() {
    // Tüm data-i18n elementlerini bul
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
            
            // Placeholder için özel kontrol
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translations[currentLang][key]);
            }
        }
    });
}

// Aktif dili göster
function updateActiveLanguage() {
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick')?.includes(`'${currentLang}'`)) {
            item.classList.add('active');
        }
    });
}

// Navbar linklerini güncelle (sayfa değişmeden)
function updateNavbarLinks() {
    // Navbar linkleri
    const navLinks = [
        { selector: 'a[href="index.html"]', key: 'nav.home' },
        { selector: 'a[href="project.html"]', key: 'nav.projects' },
        { selector: 'a[href="about.html"]', key: 'nav.about' },
        { selector: 'a[href="number.html"]', key: 'nav.contact' }
    ];
    
    navLinks.forEach(link => {
        const element = document.querySelector(link.selector);
        if (element && translations[currentLang] && translations[currentLang][link.key]) {
            element.textContent = translations[currentLang][link.key];
        }
    });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', function() {
    // Aktif dili ayarla
    updateActiveLanguage();
    
    // Sayfa metinlerini güncelle
    updatePageText();
    
    // Dil değiştirme butonlarını aktif et
    document.querySelectorAll('.lang-item').forEach(item => {
        const lang = item.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (lang) {
            item.onclick = () => changeLanguage(lang);
        }
    });
});

// Global erişim için
window.changeLanguage = changeLanguage;