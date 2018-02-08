//This is the service worker with the Cache-first network

var CACHE = 'pwabuilder-precache';
var precacheFiles = [
  '/index.html',
  '/assets/css/app.css',
  '/assets/font/acta/acta.css',
  '/assets/font/acta/acta.woff2',
  '/assets/font/another danger/another danger.css',
  '/assets/font/another danger/another danger.otf',
  '/assets/font/europa regular/europa.css',
  '/assets/font/europa regular/europa.woff2',
  '/assets/font/metric/metric.css',
  '/assets/font/metric/metric.woff2',
  '/assets/font/moon/moon.css',
  '/assets/font/moon/Moon Bold.otf',
  '/assets/font/moon/Moon Light.otf',
  '/assets/images/background.svg',
  '/assets/images/bullet.png',
  '/assets/images/card.png',
  '/assets/images/earth.png',
  '/assets/images/list.png',
  '/assets/images/logo.ico',
  '/assets/images/logo.svg',
  '/assets/images/menu.svg',
  '/assets/images/search.svg',
  '/assets/js/app.js',
  '/assets/js/vendor.js',
  '/assets/js/vendor-app.js',
  '/assets/images/1.jpg',
  '/assets/images/2.jpg',
  '/assets/images/3.jpg',
]

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[ServiceWorker] Skip waiting on install');
      return self.skipWaiting();

  })
  );
});


//allow sw to control of current page
self.addEventListener('activate', function(event) {
console.log('[ServiceWorker] Claiming clients for current page');
      return self.clients.claim();

});

self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}


function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}


function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cahche to go to the server and get it
return fetch(request).then(function(response){ return response})
}
