!function(){var e={264:function(e,t,n){e.exports=n(588)},588:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var s=t&&t.prototype instanceof g?t:g,a=Object.create(s.prototype),i=new C(r||[]);return a._invoke=function(e,t,n){var r=l;return function(s,a){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===s)throw a;return k()}for(n.method=s,n.arg=a;;){var i=n.delegate;if(i){var o=E(i,n);if(o){if(o===y)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=h(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",y={};function g(){}function m(){}function w(){}var _={};c(_,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(N([])));b&&b!==n&&r.call(b,a)&&(_=b);var q=w.prototype=g.prototype=Object.create(_);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,t){function n(s,a,i,o){var c=h(e[s],e,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,o)}),(function(e){n("throw",e,i,o)})):t.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,o)}))}o(c.arg)}var s;this._invoke=function(e,r){function a(){return new t((function(t,s){n(e,r,t,s)}))}return s=s?s.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var s=h(r,e.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,y;var a=s.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function N(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,i=function n(){for(;++s<e.length;)if(r.call(e,s))return n.value=e[s],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:k}}function k(){return{value:t,done:!0}}return m.prototype=w,c(q,"constructor",w),c(w,"constructor",m),m.displayName=c(w,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,o,"GeneratorFunction")),e.prototype=Object.create(q),e},e.awrap=function(e){return{__await:e}},x(R.prototype),c(R.prototype,i,(function(){return this})),e.AsyncIterator=R,e.async=function(t,n,r,s,a){void 0===a&&(a=Promise);var i=new R(u(t,n,r,s),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(q),c(q,o,"Generator"),c(q,a,(function(){return this})),c(q,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function s(r,s){return o.type="throw",o.arg=e,n.next=r,s&&(n.method="next",n.arg=t),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return s("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),D(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var s=r.arg;D(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},976:function(){"use strict";try{self["workbox:background-sync:6.4.1"]&&_()}catch(e){}},241:function(){"use strict";try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(e){}},41:function(){"use strict";try{self["workbox:core:6.4.1"]&&_()}catch(e){}},235:function(){"use strict";try{self["workbox:expiration:6.4.1"]&&_()}catch(e){}},128:function(){"use strict";try{self["workbox:precaching:6.4.1"]&&_()}catch(e){}},668:function(){"use strict";try{self["workbox:routing:6.4.1"]&&_()}catch(e){}},337:function(){"use strict";try{self["workbox:strategies:6.4.1"]&&_()}catch(e){}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(e,t,n,r,s,a,i){try{var o=e[a](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,s)}var t=n(264),r=n.n(t);n(41);class s extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}const a=new Set,i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||o(i.precache),u=e=>e||o(i.runtime);function h(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}let l;function d(e){e.then((()=>{}))}class f{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function p(e){return new Promise((t=>setTimeout(t,e)))}function y(e,t){const n=t();return e.waitUntil(n),n}let g,m;const w=new WeakMap,_=new WeakMap,v=new WeakMap,b=new WeakMap,q=new WeakMap;let x={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return _.get(e);if("objectStoreNames"===t)return e.objectStoreNames||v.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function R(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(m||(m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(L(this),e),E(w.get(this))}:function(...e){return E(t.apply(L(this),e))}:function(e,...n){const r=t.call(L(this),e,...n);return v.set(r,e.sort?e.sort():[e]),E(r)}:(e instanceof IDBTransaction&&function(e){if(_.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)}));_.set(e,t)}(e),n=e,(g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>n instanceof e))?new Proxy(e,x):e);var t,n}function E(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{t(E(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&w.set(t,e)})).catch((()=>{})),q.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=R(e);return t!==e&&(b.set(e,t),q.set(t,e)),t}const L=e=>q.get(e);function D(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(e,t),o=E(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(E(i.result),e.oldVersion,e.newVersion,E(i.transaction))})),n&&i.addEventListener("blocked",(()=>n())),o.then((e=>{a&&e.addEventListener("close",(()=>a())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),o}const C=["get","getKey","getAll","getAllKeys","count"],N=["put","add","delete","clear"],k=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=N.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!C.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,s?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),s&&a.done]))[0]};return k.set(t,a),a}var T;T=x,x={...T,get:(e,t,n)=>S(e,t)||T.get(e,t,n),has:(e,t)=>!!S(e,t)||T.has(e,t)},n(235);const I="cache-entries",U=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class O{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(I,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);t&&n.addEventListener("blocked",(()=>t())),E(n).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const n={url:e=U(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(I,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const t=await this.getDb(),n=await t.get(I,this._getId(e));return null==n?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let r=await n.transaction(I).store.index("timestamp").openCursor(null,"prev");const s=[];let a=0;for(;r;){const n=r.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&a>=t?s.push(r.value):a++),r=await r.continue()}const i=[];for(const e of s)await n.delete(I,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+U(e)}async getDb(){return this._db||(this._db=await D("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class P{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new O(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const e of t)await n.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,d(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<n}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class A{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:n,cachedResponse:r})=>{if(!r)return null;const s=this._isResponseDateFresh(r),a=this._getCacheExpiration(n);d(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return s?r:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const n=this._getCacheExpiration(e);await n.updateTimestamp(t.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),a.add(t))}_getCacheExpiration(e){if(e===u())throw new s("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new P(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}function K(e){if(!e)throw new s("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),a=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:a.href}}n(128);class j{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;n?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return n}}}class M{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const n=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return n?new Request(n,{headers:e.headers}):e},this._precacheController=e}}function B(e){return"string"==typeof e?new Request(e):e}n(337);class F{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new f,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=B(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(e){if(e instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:a,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=B(e);let n;const{cacheName:r,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},s),{cacheName:r});n=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await e({cacheName:r,matchOptions:s,cachedResponse:n,request:a,event:this.event})||void 0;return n}async cachePut(e,t){const n=B(e);await p(0);const r=await this.getCacheKey(n,"write");if(!t)throw new s("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const o=await this._ensureResponseSafeToCache(t);if(!o)return!1;const{cacheName:c,matchOptions:u}=this._strategy,l=await self.caches.open(c),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,n,r){const s=h(t.url,n);if(t.url===s)return e.match(t,r);const a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(s===h(t.url,n))return e.match(t,r)}(l,r.clone(),["__WB_REVISION__"],u):null;try{await l.put(r,d?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of a)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=B(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const s=Object.assign(Object.assign({},r),{state:n});return t[e](s)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class W{constructor(e={}){this.cacheName=u(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,s=new F(this,{event:t,request:n,params:r}),a=this._getResponse(s,n,t);return[a,this._awaitComplete(a,s,n,t)]}async _getResponse(e,t,n){let r;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new s("no-response",{url:t.url})}catch(s){if(s instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:s,event:n,request:t}),r)break;if(!r)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))r=await s({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,r){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:s,error:a}),t.destroy(),a)throw a}}class H extends W{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(H.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const r=t.params||{};if(!this._fallbackToNetwork)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const s=r.integrity,a=e.integrity,i=!a||a===s;n=await t.fetch(new Request(e,{integrity:a||s})),s&&i&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new s("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==H.copyRedirectedCacheableResponsesPlugin&&(r===H.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);0===t?this.plugins.push(H.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}H.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},H.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,t){let n=null;if(e.url&&(n=new URL(e.url).origin),n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const r=e.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=t?t(a):a,o=function(){if(void 0===l){const e=new Response("");if("body"in e)try{new Response(e.body),l=!0}catch(e){l=!1}l=!1}return l}()?r.body:await r.blob();return new Response(o,i)}(e):e};class ${constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new H({cacheName:c(e),plugins:[...t,new M({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:r}=K(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return y(e,(async()=>{const t=new j;this.strategy.plugins.push(t);for(const[t,n]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(n),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:r,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:a,event:e}))}const{updatedURLs:n,notUpdatedURLs:r}=t;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(e){return y(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const s of t)n.has(s.url)||(await e.delete(s),r.push(s.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new s("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let G;const Q=()=>(G||(G=new $),G);n(668);const V=e=>e&&"object"==typeof e?e:{handle:e};class z{constructor(e,t,n="GET"){this.handler=V(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=V(e)}}class Y extends z{constructor(e,t,n){super((({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)}),t,n)}}class J{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const n=new Request(...t);return this.handleRequest({request:n,event:e})})));e.waitUntil(n),e.ports&&e.ports[0]&&n.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const r=n.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:n});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:n,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const u=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u)try{return await u.handle({url:n,request:e,event:t,params:s})}catch(e){e instanceof Error&&(r=e)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw r}))),c}findMatchingRoute({url:e,sameOrigin:t,request:n,event:r}){const s=this._routes.get(n.method)||[];for(const a of s){let s;const i=a.match({url:e,sameOrigin:t,request:n,event:r});if(i)return s=i,(Array.isArray(s)&&0===s.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,V(e))}setCatchHandler(e){this._catchHandler=V(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new s("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new s("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let X;function Z(e,t,n){let r;if("string"==typeof e){const s=new URL(e,location.href);r=new z((({url:e})=>e.href===s.href),t,n)}else if(e instanceof RegExp)r=new Y(e,t,n);else if("function"==typeof e)r=new z(e,t,n);else{if(!(e instanceof z))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return(X||(X=new J,X.addFetchListener(),X.addCacheListener()),X).registerRoute(r),r}class ee extends z{constructor(e,t){super((({request:n})=>{const r=e.getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some((e=>e.test(n)))&&e.searchParams.delete(n);return e}(a,t);if(yield i.href,n&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=n,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(n.url,t)){const t=r.get(s);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}class te extends W{async _handle(e,t){let n,r=await t.cacheMatch(e);if(r);else try{r=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}if(!r)throw new s("no-response",{url:e.url,error:n});return r}}const ne={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class re extends W{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(ne)}async _handle(e,t){const n=t.fetchAndCachePut(e).catch((()=>{}));let r,a=await t.cacheMatch(e);if(a);else try{a=await n}catch(e){e instanceof Error&&(r=e)}if(!a)throw new s("no-response",{url:e.url,error:r});return a}}n(241);class se{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class ae{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new se(e)}}n(976);const ie="requests",oe="queueName";class ce{constructor(){this._db=null}async addEntry(e){const t=(await this.getDb()).transaction(ie,"readwrite",{durability:"relaxed"});await t.store.add(e),await t.done}async getFirstEntryId(){const e=await this.getDb(),t=await e.transaction(ie).store.openCursor();return null==t?void 0:t.value.id}async getAllEntriesByQueueName(e){const t=await this.getDb();return await t.getAllFromIndex(ie,oe,IDBKeyRange.only(e))||new Array}async getEntryCountByQueueName(e){return(await this.getDb()).countFromIndex(ie,oe,IDBKeyRange.only(e))}async deleteEntry(e){const t=await this.getDb();await t.delete(ie,e)}async getFirstEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"next")}async getLastEntryByQueueName(e){return await this.getEndEntryFromIndex(IDBKeyRange.only(e),"prev")}async getEndEntryFromIndex(e,t){const n=await this.getDb(),r=await n.transaction(ie).store.index(oe).openCursor(e,t);return null==r?void 0:r.value}async getDb(){return this._db||(this._db=await D("workbox-background-sync",3,{upgrade:this._upgradeDb})),this._db}_upgradeDb(e,t){t>0&&t<3&&e.objectStoreNames.contains(ie)&&e.deleteObjectStore(ie),e.createObjectStore(ie,{autoIncrement:!0,keyPath:"id"}).createIndex(oe,oe,{unique:!1})}}class ue{constructor(e){this._queueName=e,this._queueDb=new ce}async pushEntry(e){delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async unshiftEntry(e){const t=await this._queueDb.getFirstEntryId();t?e.id=t-1:delete e.id,e.queueName=this._queueName,await this._queueDb.addEntry(e)}async popEntry(){return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))}async shiftEntry(){return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))}async getAll(){return await this._queueDb.getAllEntriesByQueueName(this._queueName)}async size(){return await this._queueDb.getEntryCountByQueueName(this._queueName)}async deleteEntry(e){await this._queueDb.deleteEntry(e)}async _removeEntry(e){return e&&await this.deleteEntry(e.id),e}}const he=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class le{constructor(e){"navigate"===e.mode&&(e.mode="same-origin"),this._requestData=e}static async fromRequest(e){const t={url:e.url,headers:{}};"GET"!==e.method&&(t.body=await e.clone().arrayBuffer());for(const[n,r]of e.headers.entries())t.headers[n]=r;for(const n of he)void 0!==e[n]&&(t[n]=e[n]);return new le(t)}toObject(){const e=Object.assign({},this._requestData);return e.headers=Object.assign({},this._requestData.headers),e.body&&(e.body=e.body.slice(0)),e}toRequest(){return new Request(this._requestData.url,this._requestData)}clone(){return new le(this.toObject())}}const de="workbox-background-sync",fe=new Set,pe=e=>{const t={request:new le(e.requestData).toRequest(),timestamp:e.timestamp};return e.metadata&&(t.metadata=e.metadata),t};class ye{constructor(e,{onSync:t,maxRetentionTime:n}={}){if(this._syncInProgress=!1,this._requestsAddedDuringSync=!1,fe.has(e))throw new s("duplicate-queue-name",{name:e});fe.add(e),this._name=e,this._onSync=t||this.replayRequests,this._maxRetentionTime=n||10080,this._queueStore=new ue(this._name),this._addSyncListener()}get name(){return this._name}async pushRequest(e){await this._addRequest(e,"push")}async unshiftRequest(e){await this._addRequest(e,"unshift")}async popRequest(){return this._removeRequest("pop")}async shiftRequest(){return this._removeRequest("shift")}async getAll(){const e=await this._queueStore.getAll(),t=Date.now(),n=[];for(const r of e){const e=60*this._maxRetentionTime*1e3;t-r.timestamp>e?await this._queueStore.deleteEntry(r.id):n.push(pe(r))}return n}async size(){return await this._queueStore.size()}async _addRequest({request:e,metadata:t,timestamp:n=Date.now()},r){const s={requestData:(await le.fromRequest(e.clone())).toObject(),timestamp:n};t&&(s.metadata=t),await this._queueStore[`${r}Entry`](s),this._syncInProgress?this._requestsAddedDuringSync=!0:await this.registerSync()}async _removeRequest(e){const t=Date.now(),n=await this._queueStore[`${e}Entry`]();if(n){const r=60*this._maxRetentionTime*1e3;return t-n.timestamp>r?this._removeRequest(e):pe(n)}}async replayRequests(){let e;for(;e=await this.shiftRequest();)try{await fetch(e.request.clone())}catch(t){throw await this.unshiftRequest(e),new s("queue-replay-failed",{name:this._name})}}async registerSync(){if("sync"in self.registration)try{await self.registration.sync.register(`${de}:${this._name}`)}catch(e){}}_addSyncListener(){"sync"in self.registration?self.addEventListener("sync",(e=>{if(e.tag===`${de}:${this._name}`){const t=async()=>{let t;this._syncInProgress=!0;try{await this._onSync({queue:this})}catch(e){if(e instanceof Error)throw t=e,t}finally{!this._requestsAddedDuringSync||t&&!e.lastChance||await this.registerSync(),this._syncInProgress=!1,this._requestsAddedDuringSync=!1}};e.waitUntil(t())}})):this._onSync({queue:this})}static get _queueNames(){return fe}}var ge;self.addEventListener("activate",(()=>self.clients.claim())),self.skipWaiting(),ge=[{'revision':'fef25cd7896c0106900ea8618fdbfe3a','url':'favicon.ico'},{'revision':'76537b69290b3d6467b4ddf9fe835edc','url':'index.html'},{'revision':'1d31accc23381791b95bb025767eb9e1','url':'logo192.png'},{'revision':'11780bae559ef3592677ec960f053a82','url':'logo512.png'},{'revision':'c3e0c72f4e5b54092727ccea259da872','url':'main.js'},{'revision':'7623ceb80a2bc37ab410c8a954d70bd6','url':'main.js.LICENSE.txt'},{'revision':'0d5621fbf717deba22a2bae70700464e','url':'manifest.json'}],Q().precache(ge),function(e){const t=Q();Z(new ee(t,undefined))}(),Z((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new re({cacheName:"google-fonts-stylesheets"})),Z((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new te({cacheName:"google-fonts-webfonts",plugins:[new ae({statuses:[0,200]}),new A({maxAgeSeconds:31536e3,maxEntries:30})]})),Z((function(e){return"image"===e.request.destination}),new te({cacheName:"images",plugins:[new A({maxEntries:60,maxAgeSeconds:2592e3})]})),Z((function(e){var t=e.request;return"script"===t.destination||"style"===t.destination}),new re({cacheName:"static-resources"})),self.addEventListener("fetch",(function(e){console.log("fettttttttttt",e.request.url)}));var me,we,_e=new class{constructor(e,t){this.fetchDidFail=async({request:e})=>{await this._queue.pushRequest({request:e})},this._queue=new ye(e,t)}}("lksys-queue",{maxRetentionTime:1440,onSync:(me=r().mark((function e(t){var n,s,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queue,console.log("====== sync sync sync sync ======"),e.next=4,n.shiftRequest();case 4:if(!(s=e.sent)){e.next=23;break}return console.log("queue =====> ",n),console.log("entry =====> ",s),e.prev=7,e.next=10,fetch(s.request.clone());case 10:return a=e.sent,e.next=13,a.json();case 13:i=e.sent,console.log("service-worker-result ======> ",JSON.stringify(i)),e.next=23;break;case 17:return e.prev=17,e.t0=e.catch(7),console.error("Replay failed for request",s.request),e.next=22,n.unshiftRequest(s);case 22:throw e.t0;case 23:case"end":return e.stop()}}),e,null,[[7,17]])})),we=function(){var t=this,n=arguments;return new Promise((function(r,s){var a=me.apply(t,n);function i(t){e(a,r,s,i,o,"next",t)}function o(t){e(a,r,s,i,o,"throw",t)}i(void 0)}))},function(e){return we.apply(this,arguments)})});Z(/.*\/api\/.*/,new class extends W{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let n,r;try{const n=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=p(1e3*this._networkTimeoutSeconds);n.push(e)}if(r=await Promise.race(n),!r)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(n=e)}if(!r)throw new s("no-response",{url:e.url,error:n});return r}}({plugins:[_e]}),"POST"),Z((function(e){return"http://localhost:4000/api/posts"===e.request.url}),new re({cacheName:"LKSYS-data",plugins:[new ae({statuses:[0,200]})]})),self.addEventListener("sync",(function(e){console.log("===== 서비스 워커 - sync : ",e.tag),console.log("sync 이벤트 ====> ",e)}))}()}();