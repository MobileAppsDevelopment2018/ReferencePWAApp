//Original Version
/*
var reg;

var CACHE_NAME = 'PoS_2-app-cache-v7';
var urlsToCache = [
'/MAD/MarvelInfo12/',

'/MAD/MarvelInfo12/index.html',
'/MAD/MarvelInfo12/manifest.json',

'/MAD/MarvelInfo12/img/logo.png',
'/MAD/MarvelInfo12/img/logosmall.png',
'/MAD/MarvelInfo12/img/144x144.png',

'/MAD/MarvelInfo12/iconfont/MaterialIcons-Regular.woff',
'/MAD/MarvelInfo12/iconfont/MaterialIcons-Regular.ttf',

'/MAD/MarvelInfo12/css/materialize.min.css',
'/MAD/MarvelInfo12/css/style.css',
'/MAD/MarvelInfo12/css/swiper.min.css',

'/MAD/MarvelInfo12/partialViews/_createArticle.html',
'/MAD/MarvelInfo12/partialViews/_createNews.html',
'/MAD/MarvelInfo12/partialViews/_editArticle.html',
'/MAD/MarvelInfo12/partialViews/_editNews.html',
'/MAD/MarvelInfo12/partialViews/_home.html',
'/MAD/MarvelInfo12/partialViews/_login.html',
'/MAD/MarvelInfo12/partialViews/_register.html',
'/MAD/MarvelInfo12/partialViews/_viewAllArticles.html',
'/MAD/MarvelInfo12/partialViews/_viewAllNews.html',
'/MAD/MarvelInfo12/partialViews/_viewFullArticle.html',
'/MAD/MarvelInfo12/partialViews/_viewFullNews.html',

'/MAD/MarvelInfo12/js/fastclick.js',
'/MAD/MarvelInfo12/js/materialize.min.js',
'/MAD/MarvelInfo12/js/masonry.pkgd.min.js',
'/MAD/MarvelInfo12/js/swiper.min.js',
'/MAD/MarvelInfo12/js/PartialViewControl.js',
'/MAD/MarvelInfo12/js/changeAppPage.js',
'/MAD/MarvelInfo12/js/swipeFlash.js',
'/MAD/MarvelInfo12/js/jquery.browser.min.js',
'/MAD/MarvelInfo12/js/init.js',
'/MAD/MarvelInfo12/js/exif.js',
'/MAD/MarvelInfo12/js/binaryajax.js',
'/MAD/MarvelInfo12/js/jquery-2.1.1.min.js',
'/MAD/MarvelInfo12/js/swiper.jquery.min.js',

'/MAD/MarvelInfo12/js/createArticle.js',
'/MAD/MarvelInfo12/js/createNews.js',
'/MAD/MarvelInfo12/js/editArticle.js',
'/MAD/MarvelInfo12/js/editNews.js',
'/MAD/MarvelInfo12/js/getAllArticles.js',
'/MAD/MarvelInfo12/js/getAllNews.js',
'/MAD/MarvelInfo12/js/getFullArticle.js',
'/MAD/MarvelInfo12/js/getFullNews.js',
'/MAD/MarvelInfo12/js/home.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Cache ready');
            return cache.addAll(urlsToCache);
        })
    );
});


// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  console.log('REQUEST MADE ', event.request);
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});


self.addEventListener('fetch', (event) => {
    // Respond to the document with what is returned from
    event.respondWith(

        // 1. Check the cache if a file matching that request is available 
        caches.match(event.request).then((response) => {

            // 2. If it is, respond to the document with the file from the cache
            if ( response ) return response

              return  fetch(event.request)

        })
    );
});

self.addEventListener('activate', function(event) {

    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    // We remove all the cache except the ones in cacheWhitelist array
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
                );
        })
        );
});

*/


//Network or cache version


var CACHE = 'network-or-cache';


self.addEventListener('install', function(evt) {
	console.log('The service worker is being installed.');

	evt.waitUntil(precache());
});



self.addEventListener('fetch', function(evt) {
	console.log('The service worker is serving the asset.');
//can add a var here so that if the AJAX cannot get a response, it produces a standard response
var offline = true;


evt.respondWith(fromNetwork(evt.request, 400).catch(function () {


	return fromCache(evt.request);
}));
});


function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
    //A list of files that you want to cache on first run of the app
    '/MAD/MarvelInfo12/',

    '/MAD/MarvelInfo12/index.html',
    '/MAD/MarvelInfo12/manifest.json',

    '/MAD/MarvelInfo12/img/logo.png',
    '/MAD/MarvelInfo12/img/logosmall.png',
    '/MAD/MarvelInfo12/img/144x144.png',

    '/MAD/MarvelInfo12/iconfont/MaterialIcons-Regular.woff',
    '/MAD/MarvelInfo12/iconfont/MaterialIcons-Regular.ttf',

    '/MAD/MarvelInfo12/css/materialize.min.css',
    '/MAD/MarvelInfo12/css/style.css',
    '/MAD/MarvelInfo12/css/swiper.min.css',

    '/MAD/MarvelInfo12/partialViews/_createArticle.html',
    '/MAD/MarvelInfo12/partialViews/_createNews.html',
    '/MAD/MarvelInfo12/partialViews/_editArticle.html',
    '/MAD/MarvelInfo12/partialViews/_editNews.html',
    '/MAD/MarvelInfo12/partialViews/_home.html',
    '/MAD/MarvelInfo12/partialViews/_login.html',
    '/MAD/MarvelInfo12/partialViews/_register.html',
    '/MAD/MarvelInfo12/partialViews/_viewAllArticles.html',
    '/MAD/MarvelInfo12/partialViews/_viewAllNews.html',
    '/MAD/MarvelInfo12/partialViews/_viewFullArticle.html',
    '/MAD/MarvelInfo12/partialViews/_viewFullNews.html',

    '/MAD/MarvelInfo12/js/fastclick.js',
    '/MAD/MarvelInfo12/js/materialize.min.js',
    '/MAD/MarvelInfo12/js/masonry.pkgd.min.js',
    '/MAD/MarvelInfo12/js/swiper.min.js',
    '/MAD/MarvelInfo12/js/PartialViewControl.js',
    '/MAD/MarvelInfo12/js/changeAppPage.js',
    '/MAD/MarvelInfo12/js/swipeFlash.js',
    '/MAD/MarvelInfo12/js/jquery.browser.min.js',
    '/MAD/MarvelInfo12/js/init.js',
    '/MAD/MarvelInfo12/js/exif.js',
    '/MAD/MarvelInfo12/js/binaryajax.js',
    '/MAD/MarvelInfo12/js/jquery-2.1.1.min.js',
    '/MAD/MarvelInfo12/js/swiper.jquery.min.js',

    '/MAD/MarvelInfo12/js/createArticle.js',
    '/MAD/MarvelInfo12/js/createNews.js',
    '/MAD/MarvelInfo12/js/editArticle.js',
    '/MAD/MarvelInfo12/js/editNews.js',
    '/MAD/MarvelInfo12/js/getAllArticles.js',
    '/MAD/MarvelInfo12/js/getAllNews.js',
    '/MAD/MarvelInfo12/js/getFullArticle.js',
    '/MAD/MarvelInfo12/js/getFullNews.js',
    '/MAD/MarvelInfo12/js/home.js'
    ]);
	});
}


function fromNetwork(request, timeout) {
	return new Promise(function (fulfill, reject) {


		var timeoutId = setTimeout(reject, timeout);


		fetch(request).then(function (response) {
			clearTimeout(timeoutId);
			fulfill(response);


		}, reject);
	});
}


function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('no-match');
		});
	});
}



//Cache and update

/*

var CACHE = 'cache-and-update';

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');




  evt.waitUntil(precache());
});




self.addEventListener('fetch', function(evt) {

  console.log('The service worker is serving the asset from cache.');

//can add a var here so that if the AJAX cannot get a response, it produces a standard response


  evt.respondWith(fromCache(evt.request));




  evt.waitUntil(update(evt.request));
});




function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
    //A list of files that you want to cache on first run of the app
    '/MAD/MarvelInfo12/',

    '/MAD/MarvelInfo12/index.html',
    '/MAD/MarvelInfo12/manifest.json',

    '/MAD/MarvelInfo12/img/logo.png',
    '/MAD/MarvelInfo12/img/logosmall.png',
    '/MAD/MarvelInfo12/img/144x144.png',

    '/MAD/MarvelInfo12/iconfont/MaterialIcons-Regular.woff',
    '/MAD/MarvelInfo12/iconfont/MaterialIcons-Regular.ttf',

    '/MAD/MarvelInfo12/css/materialize.min.css',
    '/MAD/MarvelInfo12/css/style.css',
    '/MAD/MarvelInfo12/css/swiper.min.css',

    '/MAD/MarvelInfo12/partialViews/_createArticle.html',
    '/MAD/MarvelInfo12/partialViews/_createNews.html',
    '/MAD/MarvelInfo12/partialViews/_editArticle.html',
    '/MAD/MarvelInfo12/partialViews/_editNews.html',
    '/MAD/MarvelInfo12/partialViews/_home.html',
    '/MAD/MarvelInfo12/partialViews/_login.html',
    '/MAD/MarvelInfo12/partialViews/_register.html',
    '/MAD/MarvelInfo12/partialViews/_viewAllArticles.html',
    '/MAD/MarvelInfo12/partialViews/_viewAllNews.html',
    '/MAD/MarvelInfo12/partialViews/_viewFullArticle.html',
    '/MAD/MarvelInfo12/partialViews/_viewFullNews.html',

    '/MAD/MarvelInfo12/js/fastclick.js',
    '/MAD/MarvelInfo12/js/materialize.min.js',
    '/MAD/MarvelInfo12/js/masonry.pkgd.min.js',
    '/MAD/MarvelInfo12/js/swiper.min.js',
    '/MAD/MarvelInfo12/js/PartialViewControl.js',
    '/MAD/MarvelInfo12/js/changeAppPage.js',
    '/MAD/MarvelInfo12/js/swipeFlash.js',
    '/MAD/MarvelInfo12/js/jquery.browser.min.js',
    '/MAD/MarvelInfo12/js/init.js',
    '/MAD/MarvelInfo12/js/exif.js',
    '/MAD/MarvelInfo12/js/binaryajax.js',
    '/MAD/MarvelInfo12/js/jquery-2.1.1.min.js',
    '/MAD/MarvelInfo12/js/swiper.jquery.min.js',

    '/MAD/MarvelInfo12/js/createArticle.js',
    '/MAD/MarvelInfo12/js/createNews.js',
    '/MAD/MarvelInfo12/js/editArticle.js',
    '/MAD/MarvelInfo12/js/editNews.js',
    '/MAD/MarvelInfo12/js/getAllArticles.js',
    '/MAD/MarvelInfo12/js/getAllNews.js',
    '/MAD/MarvelInfo12/js/getFullArticle.js',
    '/MAD/MarvelInfo12/js/getFullNews.js',
    '/MAD/MarvelInfo12/js/home.js'

    ]);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

*/
