// ============================================
// SERVICE WORKER - GPS Sulbar App
// ============================================

const CACHE_NAME = 'mGPS-Point-Surat Permohonan-v1';
const ASSETS = [
    // Halaman Utama
    '/',
    '/index.html',
    
    // Library jsPDF (Lokal)
    '/lib/jspdf.umd.min.js',
    '/lib/jspdf.plugin.autotable.min.js',
    
    // Font Roboto (Lokal)
    '/font/Roboto/roboto.css',
    '/font/Roboto/Roboto-VariableFont_wdth,wght.ttf',
    '/font/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf',
    
    // Static Font Roboto (fallback)
    '/font/Roboto/static/Roboto-Regular.ttf',
    '/font/Roboto/static/Roboto-Italic.ttf',
    '/font/Roboto/static/Roboto-Medium.ttf',
    '/font/Roboto/static/Roboto-Bold.ttf',
    
    // Logo
    '/assets/Mlogo.png',
    
    // Catatan: CSS dan JS inline sudah ada di index.html
    // tidak perlu dicache terpisah
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
                // Paksa SW untuk segera aktif setelah install
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
            // Ambil kendali atas semua tab yang terbuka
            return self.clients.claim();
        })
    );
});

// ============================================
// FETCH: Menyajikan dari cache (Strategy: Cache First)
// ============================================
self.addEventListener('fetch', event => {
    // Abaikan request ke URL yang tidak perlu di-cache
    const url = new URL(event.request.url);
    
    // Abaikan request ke extension browser atau analytics
    if (url.protocol === 'chrome-extension:' || 
        url.protocol === 'chrome:' ||
        url.hostname === 'www.google-analytics.com') {
        return;
    }
    
    // Untuk request navigasi (HTML), gunakan strategi "Cache First"
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        console.log('[SW] Serving navigation from cache:', event.request.url);
                        return response;
                    }
                    // Jika tidak ada di cache, ambil dari network
                    return fetch(event.request);
                })
                .catch(() => {
                    // Jika offline dan tidak ada cache, tampilkan halaman offline (opsional)
                    return caches.match('/index.html');
                })
        );
        return;
    }
    
    // Untuk request lainnya (gambar, font, library), gunakan "Cache First"
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('[SW] Serving from cache:', event.request.url);
                    return response;
                }
                
                // Jika tidak ada di cache, ambil dari network
                return fetch(event.request)
                    .then(networkResponse => {
                        // Simpan response yang berhasil ke cache untuk penggunaan mendatang
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
                        // Jika offline dan tidak ada cache, coba kembalikan fallback
                        if (event.request.headers.get('accept').includes('image')) {
                            // Untuk gambar yang gagal dimuat, bisa dikembalikan placeholder
                            // return caches.match('/assets/placeholder.png');
                        }
                        return new Response('Offline - Resource tidak tersedia', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// ============================================
// PUSH NOTIFICATION (Opsional untuk masa depan)
// ============================================
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const options = {
        body: data.body || 'Ada notifikasi baru',
        icon: '/assets/Mlogo.png',
        badge: '/assets/Mlogo.png'
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title || 'GPS Sulbar', options)
    );
});

// ============================================
// MESSAGE: Menangani pesan dari halaman utama
// ============================================
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
