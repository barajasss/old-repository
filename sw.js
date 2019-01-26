var cacheName = "baraja";
var cacheAssets = [
	"/index.html",
	"/css/carousel.css",
	"/css/style.css",
	"/js/script.js",
	"/js/text animation.js"
];
self.addEventListener("install", function(){
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
