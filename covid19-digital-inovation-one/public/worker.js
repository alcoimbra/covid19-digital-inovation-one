var CACHE_NAME = 'covid19-pwa';
var urlsToCache = [
    '/'
];

//Install a Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened Cache');
                return cache.addAll(urlsToCache);
            })
    );
});

//Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if(response) {
                    return response;
                }

                return fetch(event.request);
            })
    );
});

//Update a service worker
self.addEventListener('activate', event => {
    var cacheWhiteList = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cachesNames => {
            return Promise.all(
                cachesNames.map(cachesNames => {
                    if (cacheWhiteList.indexOf(cachesNames) === -1) {
                        return caches.delete(cachesNames);
                    }
                })
            );
        })
    );
});