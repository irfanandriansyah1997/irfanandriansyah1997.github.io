//This is the "Offline page" service worker

//Install stage sets up the offline page in the cahche and opens a new cache
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwabuilder-offline').then(function(cache) {
     return cache.addAll([
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
     ]);
   })
 );
});

//If any fetch fails, it will show the offline page.
//Maybe this should be limited to HTML documents?
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function(error) {
        console.error( '[PWA Builder] Network request Failed. Serving offline page ' + error );
        return caches.open('pwabuilder-offline').then(function(cache) {
          return cache.match('index.html');
      });
    }));
});

//This is a event that can be fired from your page to tell the SW to update the offline page
self.addEventListener('refreshOffline', function(response) {
  return caches.open('pwabuilder-offline').then(function(cache) {
    console.log('[PWA Builder] Offline page updated from refreshOffline event: '+ response.url);
    return cache.put(offlinePage, response);
  });
});