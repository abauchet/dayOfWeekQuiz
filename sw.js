if(!self.define){let e,l={};const s=(s,i)=>(s=new URL(s+".js",i).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let a={};const r=e=>s(e,u),o={module:{uri:u},exports:a,require:r};l[u]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout-d2267e52.css",revision:null},{url:"_app/immutable/chunks/_layout-da46b06b.js",revision:null},{url:"_app/immutable/chunks/0-d8648bda.js",revision:null},{url:"_app/immutable/chunks/1-c5b44335.js",revision:null},{url:"_app/immutable/chunks/2-8c29ae88.js",revision:null},{url:"_app/immutable/chunks/3-673ac782.js",revision:null},{url:"_app/immutable/chunks/4-c0f773b6.js",revision:null},{url:"_app/immutable/chunks/5-916e1d86.js",revision:null},{url:"_app/immutable/chunks/6-59bbef30.js",revision:null},{url:"_app/immutable/chunks/index-2d9bfffa.js",revision:null},{url:"_app/immutable/chunks/navigation-b125c6e4.js",revision:null},{url:"_app/immutable/chunks/preload-helper-41c905a7.js",revision:null},{url:"_app/immutable/chunks/singletons-80ce15ae.js",revision:null},{url:"_app/immutable/chunks/stores-29b14c74.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register-94d0df41.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5-295a6886.js",revision:null},{url:"_app/immutable/components/error.svelte-32e2cf89.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-f8af5d06.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-25642b79.js",revision:null},{url:"_app/immutable/components/pages/about/_page.svelte-c4030881.js",revision:null},{url:"_app/immutable/components/pages/play/_page.svelte-bfbfecd6.js",revision:null},{url:"_app/immutable/components/pages/settings/_page.svelte-2845d17d.js",revision:null},{url:"_app/immutable/components/pages/train/_page.svelte-26c3ee7b.js",revision:null},{url:"_app/immutable/modules/pages/_layout.ts-9cbb603b.js",revision:null},{url:"_app/immutable/start-501f4e47.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"fox-icon.png",revision:"3c1c35d4bb5d62fda15295f44cf6c625"},{url:"./about",revision:"523669cfbfac96e965acd7d962ee0e24"},{url:"./",revision:"d212c7269ea57718353124f5cee679f7"},{url:"./play",revision:"3e917de72a8ba1c74772a45de6a2170c"},{url:"./settings",revision:"fd124b1d1c5bcd3a1c510a76aa8c54c6"},{url:"./train",revision:"43224c2d57fcdefe0151017a70fa3703"},{url:"manifest.webmanifest",revision:"3fb1a86f2d3490863b85f615a8b70d35"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
