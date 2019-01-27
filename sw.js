var cacheName = "baraja";
var cacheAssets = [
	"/index.html",
	"/manifest.json",
	"sw.js",
	"/css/carousel.css",
	"/css/style.css",
	"/js/script.js",
	"/js/text animation.js",
	"/files/cube.html",
	"/files/multiplication table.html"
];
self.addEventListener("install", function(e){
	console.log("service worker installed");
	e.waitUntil(
		caches
			.open(cacheName)
			.then(function(cache){
				cache.addAll(cacheAssets);
			})
			.then(function(){
				return self.skipWaiting();
			})
	);
}, false);
self.addEventListener("activate", function(e){
	e.waitUntil(
		caches
			.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cache => {
						if(cache !== cacheName){
							return caches.delete(cache);
						}
					})
				)
			})
	);
}, false);

self.addEventListener("fetch", e=>{
	console.log("service worker fetched: e.request: ", e.request);
	e.respondWith( 
		caches.match(e.request)
			.then(function(response) {
				if(response) {
					return response;
				}
				return fetch(e.request);
			})
	);
});
