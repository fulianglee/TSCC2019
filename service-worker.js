"use strict";var precacheConfig=[["/TSCC2019/index.html","d9efc306f788dc2fb6562556e12d58c0"],["/TSCC2019/static/css/main.f78fc6af.css","b2a36db1462c2487c56cef327ff2a4a1"],["/TSCC2019/static/js/main.7f812520.js","324924a32277a5b07efae11ebc7e7187"],["/TSCC2019/static/media/Timeline1.f4679c49.png","f4679c496564f5c2408eb6d1c3fbbe53"],["/TSCC2019/static/media/Timeline2.db338d44.png","db338d44600b96aa63714c5916d7b19a"],["/TSCC2019/static/media/Timeline3.c77cfd44.png","c77cfd4439f4d29b49373589b1d775be"],["/TSCC2019/static/media/Timeline4.5bcc176c.png","5bcc176c3465a0d3488521d18748a247"],["/TSCC2019/static/media/Timeline5.b025d9b5.png","b025d9b5f81d20ebf32e68138f4964a5"],["/TSCC2019/static/media/bg1.8d5f7d32.jpg","8d5f7d321ea255d43914cfaa2e14a310"],["/TSCC2019/static/media/bg2.90924df2.png","90924df292c16d2c72055794aeb4edcc"],["/TSCC2019/static/media/logo.b3c1a51f.png","b3c1a51f95d115c7c5f56f493e45f0cc"],["/TSCC2019/static/media/matchName.d6441f0b.png","d6441f0b7277f7463f574e3d67d6efc4"],["/TSCC2019/static/media/trophy.38ff1b74.png","38ff1b748141cd49e66840c27f9ffd17"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/TSCC2019/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});