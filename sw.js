// Service Worker - PWA & Offline Support
const CACHE_NAME = 'neoyapi-v10-' + new Date().getTime();
const urlsToCache = [
    './',
    './index.html',
    './project.html',
    './about.html',
    './number.html',
    './style.css',
    './app.js',
    './global-lang.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Playfair+Display:wght@600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn-icons-png.flaticon.com/512/609/609803.png'
];

// Install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Cache açıldı:', CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Eski cache siliniyor:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch
self.addEventListener('fetch', event => {
    // Non-GET isteklerini geç
    if (event.request.method !== 'GET') return;
    
    // Firebase isteklerini geç (real-time data için)
    if (event.request.url.includes('firebaseio.com')) {
        event.respondWith(fetch(event.request));
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache'te varsa
                if (response) {
                    return response;
                }
                
                // Ağdan getir
                return fetch(event.request)
                    .then(response => {
                        // Geçerli response kontrolü
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Response'u klonla
                        const responseToCache = response.clone();
                        
                        // Cache'e ekle (büyük dosyalar hariç)
                        if (!event.request.url.includes('unsplash.com') && 
                            !event.request.url.includes('googleapis.com')) {
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        
                        return response;
                    })
                    .catch(() => {
                        // Offline durumu
                        if (event.request.headers.get('accept').includes('text/html')) {
                            return caches.match('./index.html');
                        }
                        
                        if (event.request.headers.get('accept').includes('image')) {
                            return caches.match('https://cdn-icons-png.flaticon.com/512/609/609803.png');
                        }
                        
                        return new Response('Offline mod', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({ 'Content-Type': 'text/plain' })
                        });
                    });
            })
    );
});

// Push bildirimleri
self.addEventListener('push', event => {
    if (!event.data) return;
    
    const data = event.data.json();
    const options = {
        body: data.body || 'Yeni bildirim',
        icon: 'https://cdn-icons-png.flaticon.com/512/609/609803.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/609/609803.png',
        vibrate: [100, 50, 100],
        data: { url: data.url || './' },
        actions: [
            { action: 'open', title: 'Aç' },
            { action: 'close', title: 'Kapat' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title || 'NEO YAPI', options)
    );
});

// Notification tıklama
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow(event.notification.data.url)
        );
    }
});