// ============================================
// SERVICE WORKER - GPS Sulbar App
// ============================================

const CACHE_NAME = 'gps-sulbar-v1';
const ASSETS = [
    // Halaman Utama
    '/surat_permohonan_telaah/',
    '/surat_permohonan_telaah/index.html',
    
    // Library jsPDF (Lokal)
    '/surat_permohonan_telaah/lib/jspdf.umd.min.js',
    '/surat_permohonan_telaah/lib/jspdf.plugin.autotable.min.js',
    
    // Font Roboto (Lokal)
    '/surat_permohonan_telaah/font/Roboto/roboto.css',
    '/surat_permohonan_telaah/font/Roboto/Roboto-VariableFont_wdth,wght.ttf',
    '/surat_permohonan_telaah/font/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf',
    
    // Static Font Roboto (fallback)
    '/surat_permohonan_telaah/font/Roboto/static/Roboto-Regular.ttf',
    '/surat_permohonan_telaah/font/Roboto/static/Roboto-Italic.ttf',
    '/surat_permohonan_telaah/font/Roboto/static/Roboto-Medium.ttf',
    '/surat_permohonan_telaah/font/Roboto/static/Roboto-Bold.ttf',
    
    // Logo
    '/surat_permohonan_telaah/assets/Mlogo.png',
];

// ============================================
// INSTALL: Menyimpan cache
// ============================================
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Cache opened, adding assets...');
                return cache.addAll(ASSETS);
            })
            .then(() => {
                console.log('[SW] All assets cached successfully!');
                return self.skipWaiting();
            })
            .catch(err => {
                console.error('[SW] Failed to cache assets:', err);
            })
    );
});

// ============================================
// ACTIVATE: Mengelola cache lama
// ============================================
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
        .then(() => {
            console.log('[SW] Activated and ready to serve!');
            return self.clients.claim();
        })
    );
});

// ============================================
// FETCH: Menyajikan dari cache (Strategy: Cache First)
// ============================================
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    if (url.protocol === 'chrome-extension:' || 
        url.protocol === 'chrome:' ||
        url.hostname === 'www.google-analytics.com') {
        return;
    }
    
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        console.log('[SW] Serving navigation from cache:', event.request.url);
                        return response;
                    }
                    return fetch(event.request);
                })
                .catch(() => {
                    return caches.match('/surat_permohonan_telaah/index.html');
                })
        );
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('[SW] Serving from cache:', event.request.url);
                    return response;
                }
                
                return fetch(event.request)
                    .then(networkResponse => {
                        if (networkResponse && networkResponse.status === 200) {
                            const responseClone = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                });
                        }
                        return networkResponse;
                    })
                    .catch(error => {
                        console.error('[SW] Fetch failed:', error);
                        return new Response('Offline - Resource tidak tersedia', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});
