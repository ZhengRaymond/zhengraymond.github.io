"use strict";var precacheConfig=[["/portfolio_new/index.html","57ce1bb40576060fe3c9f381c67349e4"],["/portfolio_new/static/css/main.afc45282.css","78e7d8601275295976b48ff128e417a3"],["/portfolio_new/static/js/main.f4c512ce.js","7734d322057784854a04f1d65fed0676"],["/portfolio_new/static/media/Appdirect.7907b41d.svg","7907b41d96722f590573eca93912e7b3"],["/portfolio_new/static/media/Etsy.76c40b33.jpeg","76c40b33a433694fbbbf86a0dd1a44cb"],["/portfolio_new/static/media/Genesys.5cd5548d.jpg","5cd5548df82446a11ff7fc1c50d81b66"],["/portfolio_new/static/media/Homer.70d3b0cc.png","70d3b0cc33b53263a67aea566be99c4c"],["/portfolio_new/static/media/email.36d2be59.gif","36d2be59a4f87a021de19ed3390a644d"],["/portfolio_new/static/media/github.28020003.gif","28020003d4a493c78d8202ba6c35f179"],["/portfolio_new/static/media/github.69a83f19.jpg","69a83f1938486b55419c2314b17028fa"],["/portfolio_new/static/media/linkedin.e76f203c.gif","e76f203c183b0777caae6890532c4bef"],["/portfolio_new/static/media/phone.63502a76.gif","63502a76c487d6148d253d6a5dc0a8f7"],["/portfolio_new/static/media/resume.1f7d9133.gif","1f7d91331e2db4242af709680d348e95"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));var a="/portfolio_new/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});