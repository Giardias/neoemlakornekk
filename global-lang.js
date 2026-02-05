// global-lang.js - Tüm Site Dil Sistemi (GÜNCELLENDİ - SAYFA BAŞLIKLARI EKLENDİ)
console.log("🌍 Dil sistemi aktif");

const translations = {
    tr: {
        // SAYFA BAŞLIKLARI (YENİ EKLENDİ)
        'page.title': 'Antalya Emlak | Satılık & Kiralık Daire, Villa, Arsa | NEO YAPI',
        'contact.title': 'İletişim | NEO YAPI - Antalya Emlak Danışmanlığı',
        'about.title': 'Kurumsal | Hakkımızda | NEO YAPI',
        'project.title': 'Projeler | NEO YAPI Emlak Portföyü',
        
        // Navbar
        'nav.home': 'VİTRİN',
        'nav.projects': 'PROJELER',
        'nav.about': 'KURUMSAL',
        'nav.contact': 'İLETİŞİM',
        'nav.language': 'DİL SEÇ',
        
        // Index
        'hero.title': 'Antalya\'da Satılık & Kiralık Emlak İlanları',
        'hero.subtitle': 'En güncel gayrimenkul fırsatları ile hayalinizdeki evi bulun',
        'filter.search': 'İlan Ara (Örn: Lara, deniz, 3+1...)',
        'filter.all': 'Tüm Kategoriler',
        'filter.konut': 'Konut / Daire',
        'filter.villa': 'Lüks Villa',
        'filter.arsa': 'Arsa / Arazi',
        'filter.isyeri': 'Ticari / İşyeri',
        'filter.new': 'En Yeniler',
        'filter.price-asc': 'Fiyat: Düşükten Yükseğe',
        'filter.price-desc': 'Fiyat: Yüksekten Düşüğe',
        'filter.featured': 'Önce Vitrinler',
        'filter.button': 'ARA',
        'title.featured': 'Vitrin Fırsatları',
        'subtitle.featured': 'Özenle seçilmiş premium ilanlar',
        'title.all': 'Tüm İlanlar',
        'loading': 'Yükleniyor...',
        'loading.featured': 'Vitrin ilanları yükleniyor...',
        'loading.all': 'İlanlar yükleniyor...',
        'loading.listings': 'İlanlar yükleniyor...',
        
        // Project
        'project.title': 'Tüm Emlak İlanları',
        'project.subtitle': 'Antalya\'nın en kapsamlı gayrimenkul portföyü',
        
        // About
        'about.title': 'Biz Kimiz?',
        'about.subtitle': 'Güven, Kalite ve Estetik',
        'about.story': 'Hikayemiz',
        'about.story.year': '2015 yılında Antalya\'da kurulan NEO YAPI',
        'about.story.mission': 'Sadece bina değil, <strong>yaşam alanları inşa ediyoruz</strong>. Portföyümüzdeki her bir gayrimenkul, uzman ekibimiz tarafından titizlikle incelenir, hukuki ve teknik kontrolleri yapılır. Amacımız, size sadece bir tapu değil, huzurlu bir gelecek sunmaktır.',
        'about.mission': 'Misyonumuz',
        'about.mission.text': 'Müşterilerimize en doğru gayrimenkul yatırımlarını sunarak, güvenilir ve şeffaf bir danışmanlık hizmeti sağlamak. Her adımda kaliteyi ön planda tutarak, hayallerindeki yaşam alanlarını gerçeğe dönüştürmek.',
        'about.vision': 'Vizyonumuz',
        'about.vision.text': 'Antalya\'nın önde gelen, teknolojiye entegre, sürdürülebilir ve yenilikçi gayrimenkul markası olmak. Sektörde standartları belirleyerek, müşteri memnuniyetinde örnek gösterilen bir şirket haline gelmek.',
        'about.why': 'Neden NEO YAPI?',
        'about.journey': 'Yolculuğumuz',
        'about.team': 'Ekibimiz',
        
        // Stats
        'stats.experience': 'Yıllık Tecrübe',
        'stats.customers': 'Mutlu Müşteri',
        'stats.projects': 'Tamamlanan Proje',
        'stats.satisfaction': 'Müşteri Memnuniyeti',
        'stats.total': 'Toplam İlan',
        'stats.featured': 'Vitrin İlanı',
        'stats.showing': 'Gösterilen',
        'stats.support': 'Destek',
        
        // Values
        'values.trust': 'Güven',
        'values.trust.desc': 'Sözleşmelerimizde %100 şeffaflık',
        'values.quality': 'Kalite',
        'values.quality.desc': 'Sadece sertifikalı projeler',
        'values.support': 'Destek',
        'values.support.desc': '7/24 teknik ve hukuki destek',
        'values.experience': 'Deneyim',
        'values.experience.desc': '10 yıllık sektör tecrübesi',
        
        // Timeline
        'timeline.2015.title': 'Kuruluş',
        'timeline.2015.desc': 'Antalya\'da küçük bir ofiste, 3 kişilik ekiple hizmet vermeye başladık.',
        'timeline.2017.title': 'İlk Büyük Proje',
        'timeline.2017.desc': 'Lara\'da 50 dairelik ilk rezidans projemizi tamamladık.',
        'timeline.2020.title': 'Dijital Dönüşüm',
        'timeline.2020.desc': 'Online platformumuzu kurarak, dijital gayrimenkul danışmanlığına geçtik.',
        'timeline.2023.title': 'Yeni Ofis',
        'timeline.2023.desc': 'Fener Mahallesi\'ndeki yeni modern ofisimize taşındık.',
        
        // Team
        'team.founder': 'Kurucu & Genel Müdür',
        'team.founder.bio': '15 yıllık gayrimenkul tecrübesi. İnşaat mühendisliği ve işletme mezunu.',
        'team.engineer': 'İnşaat Mühendisi',
        'team.engineer.bio': 'Proje yönetimi ve teknik kontrollerden sorumlu. 8 yıllık deneyim.',
        'team.lawyer': 'Hukuk Danışmanı',
        'team.lawyer.bio': 'Tapu, ipotek ve sözleşme süreçleri uzmanı. 6 yıllık deneyim.',
        'team.customer': 'Müşteri İlişkileri',
        'team.customer.bio': 'Müşteri memnuniyeti ve satış sonrası destekten sorumlu.',
        
        // Contact
        'contact.subtitle': 'Bir kahveye bekleriz',
        'contact.phone.title': 'Telefon',
        'contact.phone.info': 'Haftanın 7 günü bize ulaşabilirsiniz',
        'contact.phone.note': '(Acil durumlar için)',
        'contact.address.title': 'Ofis Adresi',
        'contact.address.button': 'Yol Tarifi Al',
        'contact.email.title': 'E-Posta',
        'contact.email.info': 'Projelerimiz hakkında bilgi almak için',
        'contact.email.note': '24 saat içinde dönüş',
        'contact.whatsapp.title': 'WhatsApp\'tan Hemen Yazın',
        'contact.whatsapp.info': '7/24 canlı destek ile sorularınızı yanıtlıyoruz. İlanlar hakkında anında bilgi alın.',
        'contact.whatsapp.button': 'WHATSAPP\'A BAĞLAN',
        'contact.map.title': 'Ofis Konumumuz',
        'contact.hours.title': 'Çalışma Saatlerimiz',
        'contact.hours.weekdays': 'Pazartesi - Cuma',
        'contact.hours.saturday': 'Cumartesi',
        'contact.hours.sunday': 'Pazar',
        'contact.hours.holidays': 'Resmi Tatiller',
        'contact.hours.closed': 'Kapalıyız',
        'contact.emergency.title': 'Acil Durumlar',
        'contact.emergency.info': 'Satın aldığınız gayrimenkulde acil bir sorun mu var? Hemen bize ulaşın.',
        'contact.emergency.button': 'ACİL ARA: 0532 100 20 30',
        'contact.social.title': 'Sosyal Medyadan Takip Edin',
        
        // Buttons
        'button.details': 'DETAYLAR',
        'button.whatsapp': 'WhatsApp\'tan Sor',
        'button.close': 'Kapat',
        'button.view': 'İNCELE',
        'button.clear': 'Filtreleri Temizle',
        
        // Modal
        'modal.area': 'ALAN',
        'modal.rooms': 'ODA',
        'modal.floor': 'KAT',
        'modal.bath': 'BANYO',
        'modal.age': 'YAŞ',
        'modal.heating': 'ISINMA',
        'modal.desc': 'Açıklama',
        'modal.location': 'Konum',
        
        // Empty State
        'empty.title': 'İlan Bulunamadı',
        'empty.message': 'Arama kriterlerinize uygun ilan bulunamadı. Lütfen farklı bir filtre deneyin.',
        'empty.listings': 'Bu kategoride ilan bulunmuyor.',
        
        // CTA
        'cta.title': 'Hayalinizdeki Gayrimenkule Ulaşın',
        'cta.subtitle': 'Uzman ekibimizle tanışmak ve projelerimiz hakkında detaylı bilgi almak için bize ulaşın.',
        'cta.button': 'Hemen Ara',
        
        // Footer
        'footer.desc': 'Kalite, güven ve şeffaflık ilkeleriyle Antalya\'da gayrimenkul sektöründe fark yaratıyoruz.',
        'footer.rights': 'Tüm hakları saklıdır.',
        'footer.info': 'Tüm iletişim bilgileri günceldir.'
    },
    en: {
        // PAGE TITLES (NEW)
        'page.title': 'Antalya Real Estate | For Sale & Rent Apartment, Villa, Land | NEO YAPI',
        'contact.title': 'Contact | NEO YAPI - Antalya Real Estate Consulting',
        'about.title': 'About Us | NEO YAPI',
        'project.title': 'Projects | NEO YAPI Real Estate Portfolio',
        
        // Navbar
        'nav.home': 'HOME',
        'nav.projects': 'PROJECTS',
        'nav.about': 'ABOUT',
        'nav.contact': 'CONTACT',
        'nav.language': 'LANGUAGE',
        
        // Index
        'hero.title': 'Real Estate Listings in Antalya',
        'hero.subtitle': 'Find your dream home with the latest real estate opportunities',
        'filter.search': 'Search listings (Ex: Lara, sea view, 3+1...)',
        'filter.all': 'All Categories',
        'filter.konut': 'Residential / Apartment',
        'filter.villa': 'Luxury Villa',
        'filter.arsa': 'Land / Plot',
        'filter.isyeri': 'Commercial / Office',
        'filter.new': 'Newest',
        'filter.price-asc': 'Price: Low to High',
        'filter.price-desc': 'Price: High to Low',
        'filter.featured': 'Featured First',
        'filter.button': 'SEARCH',
        'title.featured': 'Featured Listings',
        'subtitle.featured': 'Carefully selected premium listings',
        'title.all': 'All Listings',
        'loading': 'Loading...',
        'loading.featured': 'Loading featured listings...',
        'loading.all': 'Loading listings...',
        'loading.listings': 'Loading listings...',
        
        // Project
        'project.title': 'All Property Listings',
        'project.subtitle': 'Antalya\'s most comprehensive real estate portfolio',
        
        // About
        'about.title': 'About Us',
        'about.subtitle': 'Trust, Quality and Aesthetics',
        'about.story': 'Our Story',
        'about.story.year': 'NEO YAPI, founded in Antalya in 2015',
        'about.story.mission': 'We don\'t just build buildings, we build <strong>living spaces</strong>. Every property in our portfolio is meticulously examined by our expert team, with legal and technical checks. Our aim is to offer you not just a deed, but a peaceful future.',
        'about.mission': 'Our Mission',
        'about.mission.text': 'To provide reliable and transparent consultancy service by offering our customers the most accurate real estate investments. Keeping quality at the forefront at every step, turning their dream living spaces into reality.',
        'about.vision': 'Our Vision',
        'about.vision.text': 'To become Antalya\'s leading, technology-integrated, sustainable and innovative real estate brand. To become a company that sets standards in the industry and is an example in customer satisfaction.',
        'about.why': 'Why NEO YAPI?',
        'about.journey': 'Our Journey',
        'about.team': 'Our Team',
        
        // Stats
        'stats.experience': 'Years of Experience',
        'stats.customers': 'Happy Customers',
        'stats.projects': 'Completed Projects',
        'stats.satisfaction': 'Customer Satisfaction',
        'stats.total': 'Total Listings',
        'stats.featured': 'Featured Listings',
        'stats.showing': 'Showing',
        'stats.support': 'Support',
        
        // Values
        'values.trust': 'Trust',
        'values.trust.desc': '100% transparency in our contracts',
        'values.quality': 'Quality',
        'values.quality.desc': 'Only certified projects',
        'values.support': 'Support',
        'values.support.desc': '24/7 technical and legal support',
        'values.experience': 'Experience',
        'values.experience.desc': '10 years of industry experience',
        
        // Timeline
        'timeline.2015.title': 'Foundation',
        'timeline.2015.desc': 'Started service in a small office in Antalya with a team of 3 people.',
        'timeline.2017.title': 'First Major Project',
        'timeline.2017.desc': 'Completed our first 50-apartment residential project in Lara.',
        'timeline.2020.title': 'Digital Transformation',
        'timeline.2020.desc': 'Established our online platform and transitioned to digital real estate consultancy.',
        'timeline.2023.title': 'New Office',
        'timeline.2023.desc': 'Moved to our new modern office in Fener Mahallesi.',
        
        // Team
        'team.founder': 'Founder & General Manager',
        'team.founder.bio': '15 years of real estate experience. Civil engineering and business administration graduate.',
        'team.engineer': 'Civil Engineer',
        'team.engineer.bio': 'Responsible for project management and technical controls. 8 years of experience.',
        'team.lawyer': 'Legal Advisor',
        'team.lawyer.bio': 'Expert in title deeds, mortgages and contract processes. 6 years of experience.',
        'team.customer': 'Customer Relations',
        'team.customer.bio': 'Responsible for customer satisfaction and after-sales support.',
        
        // Contact
        'contact.subtitle': 'We\'re waiting for you for a coffee',
        'contact.phone.title': 'Phone',
        'contact.phone.info': 'You can reach us 7 days a week',
        'contact.phone.note': '(For emergencies)',
        'contact.address.title': 'Office Address',
        'contact.address.button': 'Get Directions',
        'contact.email.title': 'Email',
        'contact.email.info': 'To get information about our projects',
        'contact.email.note': 'Response within 24 hours',
        'contact.whatsapp.title': 'Write on WhatsApp Now',
        'contact.whatsapp.info': 'We answer your questions with 24/7 live support. Get instant information about listings.',
        'contact.whatsapp.button': 'CONNECT TO WHATSAPP',
        'contact.map.title': 'Our Office Location',
        'contact.hours.title': 'Working Hours',
        'contact.hours.weekdays': 'Monday - Friday',
        'contact.hours.saturday': 'Saturday',
        'contact.hours.sunday': 'Sunday',
        'contact.hours.holidays': 'Official Holidays',
        'contact.hours.closed': 'Closed',
        'contact.emergency.title': 'Emergency',
        'contact.emergency.info': 'Do you have an urgent problem with the property you purchased? Contact us immediately.',
        'contact.emergency.button': 'EMERGENCY CALL: 0532 100 20 30',
        'contact.social.title': 'Follow Us on Social Media',
        
        // Buttons
        'button.details': 'DETAILS',
        'button.whatsapp': 'Ask on WhatsApp',
        'button.close': 'Close',
        'button.view': 'VIEW',
        'button.clear': 'Clear Filters',
        
        // Modal
        'modal.area': 'AREA',
        'modal.rooms': 'ROOMS',
        'modal.floor': 'FLOOR',
        'modal.bath': 'BATH',
        'modal.age': 'AGE',
        'modal.heating': 'HEATING',
        'modal.desc': 'Description',
        'modal.location': 'Location',
        
        // Empty State
        'empty.title': 'No Listings Found',
        'empty.message': 'No listings matching your search criteria were found. Please try a different filter.',
        'empty.listings': 'No listings in this category.',
        
        // CTA
        'cta.title': 'Reach Your Dream Property',
        'cta.subtitle': 'Contact us to meet our expert team and get detailed information about our projects.',
        'cta.button': 'Call Now',
        
        // Footer
        'footer.desc': 'Making a difference in Antalya real estate with quality, trust and transparency.',
        'footer.rights': 'All rights reserved.',
        'footer.info': 'All contact information is up to date.'
    },
    ru: {
        // ЗАГОЛОВКИ СТРАНИЦ (НОВОЕ)
        'page.title': 'Недвижимость в Анталии | Продажа и аренда квартир, вилл, участков | NEO YAPI',
        'contact.title': 'Контакты | NEO YAPI - Консультации по недвижимости в Анталии',
        'about.title': 'О нас | NEO YAPI',
        'project.title': 'Проекты | Портфель недвижимости NEO YAPI',
        
        // Navbar
        'nav.home': 'ГЛАВНАЯ',
        'nav.projects': 'ПРОЕКТЫ',
        'nav.about': 'О КОМПАНИИ',
        'nav.contact': 'КОНТАКТЫ',
        'nav.language': 'ЯЗЫК',
        
        // Index
        'hero.title': 'Недвижимость в Анталии',
        'hero.subtitle': 'Найдите дом своей мечты с нашими актуальными предложениями',
        'filter.search': 'Поиск объявлений (напр.: Лара, вид на море, 3+1...)',
        'filter.all': 'Все категории',
        'filter.konut': 'Жилая / Квартира',
        'filter.villa': 'Люкс Вилла',
        'filter.arsa': 'Земля / Участок',
        'filter.isyeri': 'Коммерческая / Офис',
        'filter.new': 'Сначала новые',
        'filter.price-asc': 'Цена: по возрастанию',
        'filter.price-desc': 'Цена: по убыванию',
        'filter.featured': 'Сначала рекомендуемые',
        'filter.button': 'ПОИСК',
        'title.featured': 'Рекомендуемые',
        'subtitle.featured': 'Тщательно отобранные премиум предложения',
        'title.all': 'Все объявления',
        'loading': 'Загрузка...',
        'loading.featured': 'Загрузка рекомендуемых объявлений...',
        'loading.all': 'Загрузка объявлений...',
        'loading.listings': 'Загрузка объявлений...',
        
        // Project
        'project.title': 'Все объявления недвижимости',
        'project.subtitle': 'Самый полный портфель недвижимости в Анталии',
        
        // About
        'about.title': 'О Нас',
        'about.subtitle': 'Доверие, Качество и Эстетика',
        'about.story': 'Наша История',
        'about.story.year': 'NEO YAPI, основанная в Анталии в 2015 году',
        'about.story.mission': 'Мы строим не просто здания, а <strong>пространства для жизни</strong>. Каждая недвижимость в нашем портфеле тщательно проверяется нашей экспертной командой, включая юридические и технические проверки. Наша цель - предложить вам не просто документ о собственности, а спокойное будущее.',
        'about.mission': 'Наша Миссия',
        'about.mission.text': 'Предоставлять надежные и прозрачные консультационные услуги, предлагая нашим клиентам наиболее выгодные инвестиции в недвижимость. Сохраняя качество на первом месте на каждом этапе, превращая их мечты о жилье в реальность.',
        'about.vision': 'Наше Видение',
        'about.vision.text': 'Стать ведущим, технологически интегрированным, устойчивым и инновационным брендом недвижимости в Анталии. Стать компанией, устанавливающей стандарты в отрасли и являющейся примером в удовлетворенности клиентов.',
        'about.why': 'Почему NEO YAPI?',
        'about.journey': 'Наш Путь',
        'about.team': 'Наша Команда',
        
        // Stats
        'stats.experience': 'Лет Опыта',
        'stats.customers': 'Довольных Клиентов',
        'stats.projects': 'Завершенных Проектов',
        'stats.satisfaction': 'Удовлетворенность Клиентов',
        'stats.total': 'Всего Объявлений',
        'stats.featured': 'Рекомендуемых',
        'stats.showing': 'Показано',
        'stats.support': 'Поддержка',
        
        // Values
        'values.trust': 'Доверие',
        'values.trust.desc': '100% прозрачность в наших контрактах',
        'values.quality': 'Качество',
        'values.quality.desc': 'Только сертифицированные проекты',
        'values.support': 'Поддержка',
        'values.support.desc': 'Круглосуточная техническая и юридическая поддержка',
        'values.experience': 'Опыт',
        'values.experience.desc': '10 лет опыта в отрасли',
        
        // Timeline
        'timeline.2015.title': 'Основание',
        'timeline.2015.desc': 'Начали работу в небольшом офисе в Анталии с командой из 3 человек.',
        'timeline.2017.title': 'Первый Крупный Проект',
        'timeline.2017.desc': 'Завершили наш первый жилой проект на 50 квартир в Ларе.',
        'timeline.2020.title': 'Цифровая Трансформация',
        'timeline.2020.desc': 'Создали нашу онлайн-платформу и перешли к цифровому консультированию по недвижимости.',
        'timeline.2023.title': 'Новый Офис',
        'timeline.2023.desc': 'Переехали в наш новый современный офис в районе Фенер.',
        
        // Team
        'team.founder': 'Основатель & Генеральный Директор',
        'team.founder.bio': '15 лет опыта в недвижимости. Выпускник по строительной инженерии и бизнес-администрированию.',
        'team.engineer': 'Инженер-Строитель',
        'team.engineer.bio': 'Отвечает за управление проектами и технический контроль. 8 лет опыта.',
        'team.lawyer': 'Юридический Консультант',
        'team.lawyer.bio': 'Эксперт по вопросам титульных документов, ипотеки и договорных процессов. 6 лет опыта.',
        'team.customer': 'Отдел Работы с Клиентами',
        'team.customer.bio': 'Отвечает за удовлетворенность клиентов и послепродажную поддержку.',
        
        // Contact
        'contact.subtitle': 'Ждем вас на чашечку кофе',
        'contact.phone.title': 'Телефон',
        'contact.phone.info': 'Вы можете связаться с нами 7 дней в неделю',
        'contact.phone.note': '(Для экстренных случаев)',
        'contact.address.title': 'Адрес офиса',
        'contact.address.button': 'Проложить маршрут',
        'contact.email.title': 'Электронная почта',
        'contact.email.info': 'Чтобы получить информацию о наших проектах',
        'contact.email.note': 'Ответ в течение 24 часов',
        'contact.whatsapp.title': 'Напишите в WhatsApp прямо сейчас',
        'contact.whatsapp.info': 'Мы отвечаем на ваши вопросы с круглосуточной поддержкой. Получайте мгновенную информацию об объявлениях.',
        'contact.whatsapp.button': 'ПОДКЛЮЧИТЬСЯ К WHATSAPP',
        'contact.map.title': 'Наше местонахождение офиса',
        'contact.hours.title': 'Рабочее время',
        'contact.hours.weekdays': 'Понедельник - Пятница',
        'contact.hours.saturday': 'Суббота',
        'contact.hours.sunday': 'Воскресенье',
        'contact.hours.holidays': 'Официальные праздники',
        'contact.hours.closed': 'Закрыто',
        'contact.emergency.title': 'Чрезвычайная ситуация',
        'contact.emergency.info': 'У вас срочная проблема с приобретенной недвижимостью? Свяжитесь с нами немедленно.',
        'contact.emergency.button': 'СРОЧНЫЙ ЗВОНОК: 0532 100 20 30',
        'contact.social.title': 'Подпишитесь на нас в соцсетях',
        
        // Buttons
        'button.details': 'ПОДРОБНЕЕ',
        'button.whatsapp': 'Спросить в WhatsApp',
        'button.close': 'Закрыть',
        'button.view': 'СМОТРЕТЬ',
        'button.clear': 'Очистить Фильтры',
        
        // Modal
        'modal.area': 'ПЛОЩАДЬ',
        'modal.rooms': 'КОМНАТЫ',
        'modal.floor': 'ЭТАЖ',
        'modal.bath': 'ВАННАЯ',
        'modal.age': 'ВОЗРАСТ',
        'modal.heating': 'ОТОПЛЕНИЕ',
        'modal.desc': 'Описание',
        'modal.location': 'Расположение',
        
        // Empty State
        'empty.title': 'Объявления Не Найдены',
        'empty.message': 'Не найдено объявлений, соответствующих вашим критериям поиска. Пожалуйста, попробуйте другой фильтр.',
        'empty.listings': 'В этой категории нет объявлений.',
        
        // CTA
        'cta.title': 'Найдите Недвижимость Своей Мечты',
        'cta.subtitle': 'Свяжитесь с нами, чтобы познакомиться с нашей экспертной командой и получить подробную информацию о наших проектах.',
        'cta.button': 'Позвонить Сейчас',
        
        // Footer
        'footer.desc': 'Создаем разницу на рынке недвижимости Анталии благодаря качеству, доверию и прозрачности.',
        'footer.rights': 'Все права защищены.',
        'footer.info': 'Вся контактная информация актуальна.'
    },
    de: {
        // SEITENTITEL (NEU)
        'page.title': 'Immobilien in Antalya | Wohnungen, Villen, Grundstücke zum Kauf & Mieten | NEO YAPI',
        'contact.title': 'Kontakt | NEO YAPI - Immobilienberatung in Antalya',
        'about.title': 'Über uns | NEO YAPI',
        'project.title': 'Projekte | NEO YAPI Immobilienportfolio',
        
        // Navbar
        'nav.home': 'STARTSEITE',
        'nav.projects': 'PROJEKTE',
        'nav.about': 'ÜBER UNS',
        'nav.contact': 'KONTAKT',
        'nav.language': 'SPRACHE',
        
        // Index
        'hero.title': 'Immobilien in Antalya',
        'hero.subtitle': 'Finden Sie Ihr Traumhaus mit den neuesten Immobilienangeboten',
        'filter.search': 'Anzeigen suchen (z.B.: Lara, Meerblick, 3+1...)',
        'filter.all': 'Alle Kategorien',
        'filter.konut': 'Wohnung / Apartment',
        'filter.villa': 'Luxus Villa',
        'filter.arsa': 'Grundstück',
        'filter.isyeri': 'Gewerbe / Büro',
        'filter.new': 'Neueste',
        'filter.price-asc': 'Preis: Aufsteigend',
        'filter.price-desc': 'Preis: Absteigend',
        'filter.featured': 'Empfohlene zuerst',
        'filter.button': 'SUCHEN',
        'title.featured': 'Empfohlene Angebote',
        'subtitle.featured': 'Sorgfältig ausgewählte Premium-Angebote',
        'title.all': 'Alle Angebote',
        'loading': 'Wird geladen...',
        'loading.featured': 'Empfohlene Angebote werden geladen...',
        'loading.all': 'Angebote werden geladen...',
        'loading.listings': 'Angebote werden geladen...',
        
        // Project
        'project.title': 'Alle Immobilienangebote',
        'project.subtitle': 'Antalyas umfassendstes Immobilienportfolio',
        
        // About
        'about.title': 'Über Uns',
        'about.subtitle': 'Vertrauen, Qualität und Ästhetik',
        'about.story': 'Unsere Geschichte',
        'about.story.year': 'NEO YAPI, 2015 in Antalya gegründet',
        'about.story.mission': 'Wir bauen nicht nur Gebäude, sondern <strong>Lebensräume</strong>. Jede Immobilie in unserem Portfolio wird von unserem Expertenteam sorgfältig geprüft, einschließlich rechtlicher und technischer Kontrollen. Unser Ziel ist es, Ihnen nicht nur eine Urkunde, sondern eine friedliche Zukunft zu bieten.',
        'about.mission': 'Unsere Mission',
        'about.mission.text': 'Zuverlässige und transparente Beratungsdienstleistungen anzubieten, indem wir unseren Kunden die genauesten Immobilieninvestitionen anbieten. Qualität in jedem Schritt an erster Stelle zu halten und ihre Traumwohnräume zu verwirklichen.',
        'about.vision': 'Unsere Vision',
        'about.vision.text': 'Antalyas führende, technologieintegrierte, nachhaltige und innovative Immobilienmarke zu werden. Ein Unternehmen zu werden, das Standards in der Branche setzt und in der Kundenzufriedenheit beispielhaft ist.',
        'about.why': 'Warum NEO YAPI?',
        'about.journey': 'Unser Weg',
        'about.team': 'Unser Team',
        
        // Stats
        'stats.experience': 'Jahre Erfahrung',
        'stats.customers': 'Zufriedene Kunden',
        'stats.projects': 'Abgeschlossene Projekte',
        'stats.satisfaction': 'Kundenzufriedenheit',
        'stats.total': 'Gesamtangebote',
        'stats.featured': 'Empfohlene Angebote',
        'stats.showing': 'Angezeigt',
        'stats.support': 'Unterstützung',
        
        // Values
        'values.trust': 'Vertrauen',
        'values.trust.desc': '100% Transparenz in unseren Verträgen',
        'values.quality': 'Qualität',
        'values.quality.desc': 'Nur zertifizierte Projekte',
        'values.support': 'Unterstützung',
        'values.support.desc': '24/7 technische und rechtliche Unterstützung',
        'values.experience': 'Erfahrung',
        'values.experience.desc': '10 Jahre Branchenerfahrung',
        
        // Timeline
        'timeline.2015.title': 'Gründung',
        'timeline.2015.desc': 'Begann den Dienst in einem kleinen Büro in Antalya mit einem Team von 3 Personen.',
        'timeline.2017.title': 'Erstes Großprojekt',
        'timeline.2017.desc': 'Absolvierte unser erstes Wohnprojekt mit 50 Wohnungen in Lara.',
        'timeline.2020.title': 'Digitale Transformation',
        'timeline.2020.desc': 'Errichtete unsere Online-Plattform und wechselte zur digitalen Immobilienberatung.',
        'timeline.2023.title': 'Neues Büro',
        'timeline.2023.desc': 'Zog in unser neues modernes Büro in Fener Mahallesi.',
        
        // Team
        'team.founder': 'Gründer & Geschäftsführer',
        'team.founder.bio': '15 Jahre Erfahrung in Immobilien. Absolvent im Bauingenieurwesen und Betriebswirtschaft.',
        'team.engineer': 'Bauingenieur',
        'team.engineer.bio': 'Verantwortlich für Projektmanagement und technische Kontrollen. 8 Jahre Erfahrung.',
        'team.lawyer': 'Rechtsberater',
        'team.lawyer.bio': 'Experte für Grundbucheinträge, Hypotheken und Vertragsprozesse. 6 Jahre Erfahrung.',
        'team.customer': 'Kundenbeziehungen',
        'team.customer.bio': 'Verantwortlich für Kundenzufriedenheit und After-Sales-Support.',
        
        // Contact
        'contact.subtitle': 'Wir erwarten Sie auf einen Kaffee',
        'contact.phone.title': 'Telefon',
        'contact.phone.info': 'Sie können uns 7 Tage die Woche erreichen',
        'contact.phone.note': '(Für Notfälle)',
        'contact.address.title': 'Büroadresse',
        'contact.address.button': 'Wegbeschreibung',
        'contact.email.title': 'E-Mail',
        'contact.email.info': 'Um Informationen über unsere Projekte zu erhalten',
        'contact.email.note': 'Antwort innerhalb von 24 Stunden',
        'contact.whatsapp.title': 'Jetzt auf WhatsApp schreiben',
        'contact.whatsapp.info': 'Wir beantworten Ihre Fragen mit 24/7 Live-Support. Erhalten Sie sofortige Informationen zu Angeboten.',
        'contact.whatsapp.button': 'MIT WHATSAPP VERBINDEN',
        'contact.map.title': 'Unser Bürostandort',
        'contact.hours.title': 'Öffnungszeiten',
        'contact.hours.weekdays': 'Montag - Freitag',
        'contact.hours.saturday': 'Samstag',
        'contact.hours.sunday': 'Sonntag',
        'contact.hours.holidays': 'Feiertage',
        'contact.hours.closed': 'Geschlossen',
        'contact.emergency.title': 'Notfall',
        'contact.emergency.info': 'Haben Sie ein dringendes Problem mit der erworbenen Immobilie? Kontaktieren Sie uns sofort.',
        'contact.emergency.button': 'NOTRUF: 0532 100 20 30',
        'contact.social.title': 'Folgen Sie uns in den sozialen Medien',
        
        // Buttons
        'button.details': 'DETAILS',
        'button.whatsapp': 'Auf WhatsApp fragen',
        'button.close': 'Schließen',
        'button.view': 'ANSICHT',
        'button.clear': 'Filter löschen',
        
        // Modal
        'modal.area': 'FLÄCHE',
        'modal.rooms': 'ZIMMER',
        'modal.floor': 'STOCK',
        'modal.bath': 'BAD',
        'modal.age': 'ALTER',
        'modal.heating': 'HEIZUNG',
        'modal.desc': 'Beschreibung',
        'modal.location': 'Standort',
        
        // Empty State
        'empty.title': 'Keine Angebote Gefunden',
        'empty.message': 'Es wurden keine Angebote gefunden, die Ihren Suchkriterien entsprechen. Bitte versuchen Sie einen anderen Filter.',
        'empty.listings': 'Keine Angebote in dieser Kategorie.',
        
        // CTA
        'cta.title': 'Erreichen Sie Ihre Traumimmobilie',
        'cta.subtitle': 'Kontaktieren Sie uns, um unser Expertenteam kennenzulernen und detaillierte Informationen über unsere Projekte zu erhalten.',
        'cta.button': 'Jetzt Anrufen',
        
        // Footer
        'footer.desc': 'Wir machen den Unterschied auf dem Antalya-Immobilienmarkt mit Qualität, Vertrauen und Transparenz.',
        'footer.rights': 'Alle Rechte vorbehalten.',
        'footer.info': 'Alle Kontaktinformationen sind aktuell.'
    }
};

// Aktif dil
let currentLang = localStorage.getItem('neoyapi-lang') || 'tr';

// Dil değiştir
window.changeLanguageGlobal = function(lang) {
    console.log("🌐 Dil değiştiriliyor:", lang);
    localStorage.setItem('neoyapi-lang', lang);
    currentLang = lang;
    
    // Sayfayı yenile
    setTimeout(() => {
        location.reload();
    }, 300);
};

// Metinleri güncelle
function updateTexts() {
    console.log("🔤 Metinler güncelleniyor:", currentLang);
    
    // Tüm data-i18n elementleri
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[currentLang]?.[key] || translations['tr'][key] || key;
        
        // Eğer içinde HTML varsa (strong tag gibi)
        if (text.includes('<strong>')) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
        
        // Özel durum: sayfa başlığı (<title> etiketi)
        if (el.tagName === 'TITLE' && key === 'page.title') {
            document.title = text;
        }
    });
    
    // Placeholder'lar
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = translations[currentLang]?.[key] || translations['tr'][key] || key;
        el.setAttribute('placeholder', text);
    });
}

// Aktif dili göster
function highlightActiveLang() {
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.remove('active');
        const lang = item.getAttribute('data-lang');
        if (lang === currentLang) {
            item.classList.add('active');
        }
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 Sayfa yüklendi, dil:", currentLang);
    
    // Metinleri güncelle
    updateTexts();
    
    // Aktif dili göster
    highlightActiveLang();
    
    // Storage event'i (diğer sekmelerden dil değişikliği)
    window.addEventListener('storage', function(e) {
        if (e.key === 'neoyapi-lang') {
            console.log("📡 Diğer sekmeden dil değişti:", e.newValue);
            currentLang = e.newValue;
            updateTexts();
            highlightActiveLang();
        }
    });
});

// Global fonksiyonlar
window.updateAllTexts = updateTexts;
window.getCurrentLanguage = () => currentLang;