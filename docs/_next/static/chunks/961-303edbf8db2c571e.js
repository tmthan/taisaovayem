(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[961],{1620:(t,e,n)=>{"use strict";n.d(e,{ZR:()=>Z});let r=(()=>{let t=0,e=()=>`0000${(1679616*Math.random()<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function o(t){let e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function i(t,e){let n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function l(t,e={}){return{width:e.width||function(t){let e=i(t,"border-left-width"),n=i(t,"border-right-width");return t.clientWidth+e+n}(t),height:e.height||function(t){let e=i(t,"border-top-width"),n=i(t,"border-bottom-width");return t.clientHeight+e+n}(t)}}function a(t){return new Promise((e,n)=>{let r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function s(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function u(t,e,n){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${e}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${e} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(t),s(o)}let c=(t,e)=>{if(t instanceof e)return!0;let n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||c(n,e))};function f(t,e,n){let i=window.getComputedStyle(t,n),l=i.getPropertyValue("content");if(""===l||"none"===l)return;let a=r();try{e.className=`${e.className} ${a}`}catch(t){return}let s=document.createElement("style");s.appendChild(function(t,e,n){let r=`.${t}:${e}`,i=n.cssText?function(t){let e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}(n):o(n).map(t=>{let e=n.getPropertyValue(t),r=n.getPropertyPriority(t);return`${t}: ${e}${r?" !important":""};`}).join(" ");return document.createTextNode(`${r}{${i}}`)}(a,n,i)),e.appendChild(s)}let p="application/font-woff",h="image/jpeg",d={woff:p,woff2:p,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:h,jpeg:h,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function m(t){return d[(function(t){let e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""})(t).toLowerCase()]||""}function g(t){return -1!==t.search(/^(data:)/)}function y(t,e){return`data:${e};base64,${t}`}async function w(t,e,n){let r=await fetch(t,e);if(404===r.status)throw Error(`Resource "${r.url}" not found`);let o=await r.blob();return new Promise((t,e)=>{let i=new FileReader;i.onerror=e,i.onloadend=()=>{try{t(n({res:r,result:i.result}))}catch(t){e(t)}},i.readAsDataURL(o)})}let b={};async function v(t,e,n){var r,o,i;let l,a;let s=(r=t,o=e,i=n.includeQueryParams,a=r.replace(/\?.*/,""),i&&(a=r),/ttf|otf|eot|woff2?/i.test(a)&&(a=a.replace(/.*\//,"")),o?`[${o}]${a}`:a);if(null!=b[s])return b[s];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());try{let r=await w(t,n.fetchRequestInit,({res:t,result:n})=>(e||(e=t.headers.get("Content-Type")||""),n.split(/,/)[1]));l=y(r,e)}catch(r){l=n.imagePlaceholder||"";let e=`Failed to fetch resource: ${t}`;r&&(e="string"==typeof r?r:r.message),e&&console.warn(e)}return b[s]=l,l}async function S(t){let e=t.toDataURL();return"data:,"===e?t.cloneNode(!1):a(e)}async function x(t,e){if(t.currentSrc){let e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.clientWidth,e.height=t.clientHeight,null==n||n.drawImage(t,0,0,e.width,e.height),a(e.toDataURL())}let n=t.poster,r=m(n);return a(await v(n,r,e))}async function E(t){var e;try{if(null===(e=null==t?void 0:t.contentDocument)||void 0===e?void 0:e.body)return await C(t.contentDocument.body,{},!0)}catch(t){}return t.cloneNode(!1)}async function $(t,e){return c(t,HTMLCanvasElement)?S(t):c(t,HTMLVideoElement)?x(t,e):c(t,HTMLIFrameElement)?E(t):t.cloneNode(!1)}let R=t=>null!=t.tagName&&"SLOT"===t.tagName.toUpperCase();async function P(t,e,n){var r,i;let l=[];return R(t)&&t.assignedNodes?l=o(t.assignedNodes()):c(t,HTMLIFrameElement)&&(null===(r=t.contentDocument)||void 0===r?void 0:r.body)?l=o(t.contentDocument.body.childNodes):l=o((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes),0===l.length||c(t,HTMLVideoElement)||await l.reduce((t,r)=>t.then(()=>C(r,n)).then(t=>{t&&e.appendChild(t)}),Promise.resolve()),e}async function T(t,e){let n=t.querySelectorAll?t.querySelectorAll("use"):[];if(0===n.length)return t;let r={};for(let o=0;o<n.length;o++){let i=n[o].getAttribute("xlink:href");if(i){let n=t.querySelector(i),o=document.querySelector(i);n||!o||r[i]||(r[i]=await C(o,e,!0))}}let o=Object.values(r);if(o.length){let e="http://www.w3.org/1999/xhtml",n=document.createElementNS(e,"svg");n.setAttribute("xmlns",e),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let r=document.createElementNS(e,"defs");n.appendChild(r);for(let t=0;t<o.length;t++)r.appendChild(o[t]);t.appendChild(n)}return t}async function C(t,e,n){return n||!e.filter||e.filter(t)?Promise.resolve(t).then(t=>$(t,e)).then(n=>P(t,n,e)).then(e=>{var n,r;return n=t,c(r=e,Element)&&(!function(t,e){let n=e.style;if(!n)return;let r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):o(r).forEach(o=>{let i=r.getPropertyValue(o);if("font-size"===o&&i.endsWith("px")){let t=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i=`${t}px`}c(t,HTMLIFrameElement)&&"display"===o&&"inline"===i&&(i="block"),"d"===o&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),n.setProperty(o,i,r.getPropertyPriority(o))})}(n,r),f(n,r,":before"),f(n,r,":after"),c(n,HTMLTextAreaElement)&&(r.innerHTML=n.value),c(n,HTMLInputElement)&&r.setAttribute("value",n.value),function(t,e){if(c(t,HTMLSelectElement)){let n=Array.from(e.children).find(e=>t.value===e.getAttribute("value"));n&&n.setAttribute("selected","")}}(n,r)),r}).then(t=>T(t,e)):null}let O=/url\((['"]?)([^'"]+?)\1\)/g,j=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,L=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function A(t,e,n,r,o){try{let i;let l=n?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;let n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}(e,n):e,a=m(e);if(o){let t=await o(l);i=y(t,a)}else i=await v(l,a,r);return t.replace(function(t){let e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}(e),`$1${i}$3`)}catch(t){}return t}function N(t){return -1!==t.search(O)}async function k(t,e,n){if(!N(t))return t;let r=function(t,{preferredFontFormat:e}){return e?t.replace(L,t=>{for(;;){let[n,,r]=j.exec(t)||[];if(!r)return"";if(r===e)return`src: ${n};`}}):t}(t,n);return(function(t){let e=[];return t.replace(O,(t,n,r)=>(e.push(r),t)),e.filter(t=>!g(t))})(r).reduce((t,r)=>t.then(t=>A(t,r,e,n)),Promise.resolve(r))}async function D(t,e,n){var r;let o=null===(r=e.style)||void 0===r?void 0:r.getPropertyValue(t);if(o){let r=await k(o,null,n);return e.style.setProperty(t,r,e.style.getPropertyPriority(t)),!0}return!1}async function H(t,e){await D("background",t,e)||await D("background-image",t,e),await D("mask",t,e)||await D("mask-image",t,e)}async function I(t,e){let n=c(t,HTMLImageElement);if(!(n&&!g(t.src))&&!(c(t,SVGImageElement)&&!g(t.href.baseVal)))return;let r=n?t.src:t.href.baseVal,o=await v(r,m(r),e);await new Promise((e,r)=>{t.onload=e,t.onerror=r,t.decode&&(t.decode=e),"lazy"===t.loading&&(t.loading="eager"),n?(t.srcset="",t.src=o):t.href.baseVal=o})}async function M(t,e){let n=o(t.childNodes).map(t=>z(t,e));await Promise.all(n).then(()=>t)}async function z(t,e){c(t,Element)&&(await H(t,e),await I(t,e),await M(t,e))}let V={};async function W(t){let e=V[t];if(null!=e)return e;let n=await fetch(t);return e={url:t,cssText:await n.text()},V[t]=e,e}async function F(t,e){let n=t.cssText,r=/url\(["']?([^"')]+)["']?\)/g;return Promise.all((n.match(/url\([^)]+\)/g)||[]).map(async o=>{let i=o.replace(r,"$1");return i.startsWith("https://")||(i=new URL(i,t.url).href),w(i,e.fetchRequestInit,({result:t})=>(n=n.replace(o,`url(${t})`),[o,t]))})).then(()=>n)}function q(t){if(null==t)return[];let e=[],n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let t=r.exec(n);if(null===t)break;e.push(t[0])}n=n.replace(r,"");let o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let t=o.exec(n);if(null===t){if(null===(t=i.exec(n)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;e.push(t[0])}return e}async function U(t,e){let n=[],r=[];return t.forEach(n=>{if("cssRules"in n)try{o(n.cssRules||[]).forEach((t,o)=>{if(t.type===CSSRule.IMPORT_RULE){let i=o+1,l=t.href,a=W(l).then(t=>F(t,e)).then(t=>q(t).forEach(t=>{try{n.insertRule(t,t.startsWith("@import")?i+=1:n.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}})).catch(t=>{console.error("Error loading remote css",t.toString())});r.push(a)}})}catch(i){let o=t.find(t=>null==t.href)||document.styleSheets[0];null!=n.href&&r.push(W(n.href).then(t=>F(t,e)).then(t=>q(t).forEach(t=>{o.insertRule(t,n.cssRules.length)})).catch(t=>{console.error("Error loading remote stylesheet",t)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(t.forEach(t=>{if("cssRules"in t)try{o(t.cssRules||[]).forEach(t=>{n.push(t)})}catch(e){console.error(`Error while reading CSS rules from ${t.href}`,e)}}),n))}async function B(t,e){if(null==t.ownerDocument)throw Error("Provided element is not within a Document");let n=o(t.ownerDocument.styleSheets);return(await U(n,e)).filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>N(t.style.getPropertyValue("src")))}async function _(t,e){let n=await B(t,e);return(await Promise.all(n.map(t=>{let n=t.parentStyleSheet?t.parentStyleSheet.href:null;return k(t.cssText,n,e)}))).join("\n")}async function G(t,e){let n=null!=e.fontEmbedCSS?e.fontEmbedCSS:e.skipFonts?null:await _(t,e);if(n){let e=document.createElement("style"),r=document.createTextNode(n);e.appendChild(r),t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}}async function Q(t,e={}){let{width:n,height:r}=l(t,e),o=await C(t,e,!0);return await G(o,e),await z(o,e),!function(t,e){let{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);let r=e.style;null!=r&&Object.keys(r).forEach(t=>{n[t]=r[t]})}(o,e),await u(o,n,r)}async function X(t,e={}){let{width:n,height:r}=l(t,e),o=await Q(t,e),i=await a(o),s=document.createElement("canvas"),u=s.getContext("2d"),c=e.pixelRatio||function(){let t,e;try{e=process}catch(t){}let n=e&&e.env?e.env.devicePixelRatio:null;return n&&Number.isNaN(t=parseInt(n,10))&&(t=1),t||window.devicePixelRatio||1}(),f=e.canvasWidth||n,p=e.canvasHeight||r;return s.width=f*c,s.height=p*c,!e.skipAutoScale&&(s.width>16384||s.height>16384)&&(s.width>16384&&s.height>16384?s.width>s.height?(s.height*=16384/s.width,s.width=16384):(s.width*=16384/s.height,s.height=16384):s.width>16384?(s.height*=16384/s.width,s.width=16384):(s.width*=16384/s.height,s.height=16384)),s.style.width=`${f}`,s.style.height=`${p}`,e.backgroundColor&&(u.fillStyle=e.backgroundColor,u.fillRect(0,0,s.width,s.height)),u.drawImage(i,0,0,s.width,s.height),s}async function Z(t,e={}){let n=await X(t,e);return await function(t,e={}){return new Promise(t.toBlob?n=>{t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)}:n=>{let r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),o=r.length,i=new Uint8Array(o);for(let t=0;t<o;t+=1)i[t]=r.charCodeAt(t);n(new Blob([i],{type:e.type?e.type:"image/png"}))})}(n)}},1933:(t,e,n)=>{var r=n(2673).Symbol;t.exports=r},3600:(t,e,n)=>{var r=n(1933),o=n(8273),i=n(6798),l=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):i(t)}},1004:(t,e,n)=>{var r=n(7550),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},4952:(t,e,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},8273:(t,e,n)=>{var r=n(1933),o=Object.prototype,i=o.hasOwnProperty,l=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[a]=n:delete t[a]),o}},6798:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},2673:(t,e,n)=>{var r=n(4952),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7550:t=>{var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},719:(t,e,n)=>{var r=n(5255),o=n(1332),i=n(2816),l=Math.max,a=Math.min;t.exports=function(t,e,n){var s,u,c,f,p,h,d=0,m=!1,g=!1,y=!0;if("function"!=typeof t)throw TypeError("Expected a function");function w(e){var n=s,r=u;return s=u=void 0,d=e,f=t.apply(r,n)}function b(t){var n=t-h,r=t-d;return void 0===h||n>=e||n<0||g&&r>=c}function v(){var t,n,r,i=o();if(b(i))return S(i);p=setTimeout(v,(t=i-h,n=i-d,r=e-t,g?a(r,c-n):r))}function S(t){return(p=void 0,y&&s)?w(t):(s=u=void 0,f)}function x(){var t,n=o(),r=b(n);if(s=arguments,u=this,h=n,r){if(void 0===p)return d=t=h,p=setTimeout(v,e),m?w(t):f;if(g)return clearTimeout(p),p=setTimeout(v,e),w(h)}return void 0===p&&(p=setTimeout(v,e)),f}return e=i(e)||0,r(n)&&(m=!!n.leading,c=(g="maxWait"in n)?l(i(n.maxWait)||0,e):c,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==p&&clearTimeout(p),d=0,s=h=u=p=void 0},x.flush=function(){return void 0===p?f:S(o())},x}},5255:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},4480:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3480:(t,e,n)=>{var r=n(3600),o=n(4480);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},1332:(t,e,n)=>{var r=n(2673);t.exports=function(){return r.Date.now()}},2816:(t,e,n)=>{var r=n(1004),o=n(5255),i=n(3480),l=0/0,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return l;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):a.test(t)?l:+t}},6046:(t,e,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(e,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(e,{useSearchParams:function(){return r.useSearchParams}})},5687:(t,e,n)=>{"use strict";var r,o;r=n(4592),o=n(9506),r.version,e.F0=r.renderToString,r.renderToStaticMarkup,o.renderToReadableStream,o.resume&&o.resume},3397:(t,e,n)=>{"use strict";n.d(e,{a:()=>I});var r=n(2115),o=n(5155),i=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&f(t,n,e[n]);if(s)for(var n of s(e))c.call(e,n)&&f(t,n,e[n]);return t},h=(t,e)=>l(t,a(e)),d=(t,e)=>{var n={};for(var r in t)u.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&s)for(var r of s(t))0>e.indexOf(r)&&c.call(t,r)&&(n[r]=t[r]);return n},m=t=>t.right-t.left<5||t.bottom&&t.bottom-t.top<5,g=({spotsList:t,usedSpot:e})=>t.some(t=>t!==e&&e.left===t.left),y=({position:t,spot:e,stone:n})=>{if(t.left>e.left&&e.right>=t.left&&t.top+n.height>e.top){if(e.bottom&&e.bottom<t.top)return e;let n=p({},e);return n.right=t.left,n}return null},w=({position:t,stone:e,spot:n})=>{if(t.left+e.width>n.left&&t.top>=n.top){if(n.bottom&&n.bottom<t.top||n.right<t.left)return n;let e=p({},n);return e.bottom=t.top,e}return null},b=({stone:t,position:e,spotsList:n,optimalSpot:r})=>{let o=p({},r);return o.left=e.left+t.width,m(o)||g({usedSpot:o,spotsList:n})?null:o},v=({spots:t,position:e,optimalSpot:n,stone:r})=>t.map((t,o,i)=>t===n?b({stone:r,position:e,optimalSpot:n,spotsList:i}):y({position:e,spot:t,stone:r})||w({position:e,stone:r,spot:t})||t),S=(t,e)=>e.filter(t),x=(t,e)=>[...e].sort(t),E=(t,e)=>t.top===e.top?t.left<e.left?-1:1:t.top<e.top?-1:1,$=t=>x(E,t),R=({availableSpots:t,optimalSpot:e,containerSize:n,stone:r})=>{let o={right:n,top:e.top+r.height,left:e.left};e.bottom&&(o.bottom=e.bottom);for(let e=0,n=t.length;e<n;e+=1){let n=t[e];if(o.left<n.left&&o.top<n.top){o.right=n.left;break}}return o},P=(t,e)=>{let n=t.right-t.left>=e.width;if(!t.bottom)return n;let r=t.bottom-t.top>=e.height;return n&&r},T=({availableSpots:t,stone:e})=>(function(t,e){for(let n=0,r=e.length;n<r;n++){let r=e[n];if(t(r))return r}return null})(t=>P(t,e),t),C=({stones:t,containerSize:e})=>{if(!t.length)return{positions:[],containerHeight:0,availableSpots:[]};let n=0,r=[],o=[{top:0,left:0,right:e}];for(let i of t){let t=function({stone:t,availableSpots:e,containerSize:n}){let r=T({availableSpots:e,stone:t}),o={left:r.left,top:r.top},i=R({optimalSpot:r,availableSpots:e.filter(t=>t!==r),stone:t,containerSize:n}),l=[...e,i],a=v({spots:l,position:o,optimalSpot:r,stone:t});return{position:o,availableSpots:l=$(l=[...S(Boolean,a)])}}({availableSpots:o,stone:i,containerSize:e}),l=t.position.top+i.height;n<l&&(n=l),r.push(t.position),o=t.availableSpots}return{availableSpots:o,positions:r,containerHeight:n}},O=t=>t.reduce((t,e)=>{if(!e)return t;let n=e.getBoundingClientRect();return t.push({width:n.width,height:n.height}),t},[]),j=({boxesRefs:t,wrapperRef:e,children:n,windowWidth:o,wrapperWidth:i})=>{let[{positions:l,containerHeight:a,stones:s,availableSpots:u},c]=(0,r.useState)({positions:[],containerHeight:null,stones:[],availableSpots:[]});return(0,r.useEffect)(()=>{var n,r;let o=O(t.current),i=null!=(r=null==(n=e.current)?void 0:n.offsetWidth)?r:0;null!==i&&c(h(p({},C({stones:o,containerSize:i})),{stones:o}))},[n,t,e,o,i]),{positions:l,containerHeight:a,stones:s,availableSpots:u}},L=t=>({fade:`${t}ms opacity ease`,fadeMove:`
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `,move:`
    ${t}ms top ease,
    ${t}ms left ease
  `}),A=({transition:t,transitionDuration:e})=>t?{transition:L(e)[t]}:null,N=t=>t?h(p({},t),{opacity:1}):{opacity:0,top:0,left:0},k=({style:t,position:e,transition:n,transitionDuration:r})=>p(p(h(p({},t),{position:"absolute"}),N(e)),A({transition:n,transitionDuration:r})),D=()=>{let[t,e]=(0,r.useState)(),n=(0,r.useRef)(function(t,e,n){let r;return function(...e){r&&clearTimeout(r),r=setTimeout(function(){r=null,t.apply(null,e)},300)}}(e,0));return(0,r.useEffect)(()=>{let t=()=>{n.current(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),t},H=t=>{let[e,n]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let e=new ResizeObserver(t=>{for(let e of t)n(e.contentRect.width)});return t.current&&e.observe(t.current),()=>{e.disconnect()}},[t]),e},I=t=>{var{children:e,style:n,transition:i=!1,transitionDuration:l=500,transitionStep:a=50}=t,s=d(t,["children","style","transition","transitionDuration","transitionStep"]);let u=(0,r.useRef)([]),c=(0,r.useRef)(null),f=D(),m=H(c),{positions:g,containerHeight:y}=j({boxesRefs:u,wrapperRef:c,children:e,windowWidth:f,wrapperWidth:m}),w=p({minHeight:null!=y?y:0,position:"relative"},n);return(0,o.jsx)("div",h(p({ref:c,style:w},s),{children:r.Children.map(e,(t,e)=>{if("object"!=typeof t||!t||!("type"in t))return t;let n={style:k({style:t.props.style,position:g[e],transition:i,transitionDuration:l}),ref:t=>u.current[e]=t};return(0,r.cloneElement)(t,p(p({},t.props),n))})}))}}}]);