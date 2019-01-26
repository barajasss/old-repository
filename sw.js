var cacheName = "baraja";
var cacheAssets = [
	"/index.html",
	"/css/carousel.css",
	"/css/style.css",
	"/js/script.js",
	"/js/text animation.js"
];
self.addEventListener("install", function(){
	self.skipWaiting();
	caches
		.open(cacheName)
		.then(function(response){
			caches.addAll(cacheAssets);
		});
}, false);
