(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5407:(e,t,n)=>{Promise.resolve().then(n.bind(n,766)),Promise.resolve().then(n.bind(n,96)),Promise.resolve().then(n.bind(n,3479)),Promise.resolve().then(n.bind(n,3572)),Promise.resolve().then(n.bind(n,6217)),Promise.resolve().then(n.bind(n,2098)),Promise.resolve().then(n.bind(n,1119)),Promise.resolve().then(n.bind(n,532)),Promise.resolve().then(n.bind(n,7323)),Promise.resolve().then(n.bind(n,4681)),Promise.resolve().then(n.bind(n,852)),Promise.resolve().then(n.bind(n,1868)),Promise.resolve().then(n.bind(n,5900)),Promise.resolve().then(n.bind(n,2413)),Promise.resolve().then(n.bind(n,8629)),Promise.resolve().then(n.bind(n,9710)),Promise.resolve().then(n.bind(n,2342)),Promise.resolve().then(n.bind(n,4813)),Promise.resolve().then(n.bind(n,6511)),Promise.resolve().then(n.bind(n,2744)),Promise.resolve().then(n.bind(n,8286)),Promise.resolve().then(n.bind(n,5892)),Promise.resolve().then(n.bind(n,3037)),Promise.resolve().then(n.bind(n,9186)),Promise.resolve().then(n.bind(n,806)),Promise.resolve().then(n.bind(n,1165)),Promise.resolve().then(n.bind(n,8350)),Promise.resolve().then(n.bind(n,3394)),Promise.resolve().then(n.bind(n,778)),Promise.resolve().then(n.bind(n,4174)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,2807,23)),Promise.resolve().then(n.t.bind(n,9574,23)),Promise.resolve().then(n.t.bind(n,347,23)),Promise.resolve().then(n.t.bind(n,5760,23)),Promise.resolve().then(n.bind(n,3571)),Promise.resolve().then(n.bind(n,221))},3479:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:i=null,children:s,dataNtpc:l=""}=e;return(0,r.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,o.jsxs)(o.Fragment,{children:[s,t?(0,o.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=i?"".concat(i,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})};let o=n(5155),r=n(2115)},766:(e,t,n)=>{"use strict";let o;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:l="dataLayer",nonce:a}=e;return void 0===o&&(o=l),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(l,"'] = window['").concat(l,"'] || [];\n          function gtag(){window['").concat(l,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:a}),(0,r.jsx)(s.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:a})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===o){console.warn("@next/third-parties: GA has not been initialized");return}window[o]?window[o].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(o," does not exist"))};let r=n(5155),i=n(2115),s=function(e){return e&&e.__esModule?e:{default:e}}(n(6584))},96:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:l="dataLayer",auth:a,preview:u,dataLayer:c,nonce:d}=e;s=l;let f="dataLayer"!==l?"&l=".concat(l):"";return(0,r.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(l,"');")},nonce:d}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(a?"&gtm_auth=".concat(a):"").concat(u?"&gtm_preview=".concat(u,"&gtm_cookies_win=x"):"")})]})};let o=n(5155),r=n(2115),i=function(e){return e&&e.__esModule?e:{default:e}}(n(6584)),s="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||s;window[n]=window[n]||[],window[n].push(e)}},6584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.a});var o=n(3704),r=n.n(o),i={};for(let e in o)"default"!==e&&(i[e]=()=>o[e]);n.d(t,i)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return o},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},o="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return b}});let o=n(306),r=n(9955),i=n(5155),s=o._(n(7650)),l=r._(n(2115)),a=n(1147),u=n(2815),c=n(8571),d=new Map,f=new Set,p=e=>{if(s.default.preinit){e.forEach(e=>{s.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:o=()=>{},onReady:r=null,dangerouslySetInnerHTML:i,children:s="",strategy:l="afterInteractive",onError:a,stylesheets:c}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(o,a);return}let m=()=>{r&&r(),f.add(h)},b=document.createElement("script"),g=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),o&&o.call(this,t),m()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){a&&a(e)});i?(b.innerHTML=i.__html||"",m()):s?(b.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",m()):t&&(b.src=t,d.set(t,g)),(0,u.setAttributesFromProps)(b,e),"worker"===l&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",l),c&&p(c),document.body.appendChild(b)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function b(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:o=()=>{},onReady:r=null,strategy:u="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:b,scripts:g,getIsSsr:v,appDir:y,nonce:_}=(0,l.useContext)(a.HeadManagerContext),w=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;w.current||(r&&e&&f.has(e)&&r(),w.current=!0)},[r,t,n]);let P=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!P.current&&("afterInteractive"===u?h(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),P.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(b?(g[u]=(g[u]||[]).concat([{id:t,src:n,onLoad:o,onReady:r,onError:d,...m}]),b(g)):v&&v()?f.add(t||n):v&&!v()&&h(e)),y){if(p&&p.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(s.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:_,crossOrigin:m.crossOrigin}:{as:"script",nonce:_,crossOrigin:m.crossOrigin}),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===u&&n&&s.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:_,crossOrigin:m.crossOrigin}:{as:"script",nonce:_,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},o=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function r(e){return["async","defer","noModule"].includes(e)}function i(e,t){for(let[i,s]of Object.entries(t)){if(!t.hasOwnProperty(i)||o.includes(i)||void 0===s)continue;let l=n[i]||i.toLowerCase();"SCRIPT"===e.tagName&&r(l)?e[l]=!!s:e.setAttribute(l,String(s)),(!1===s||"SCRIPT"===e.tagName&&r(l)&&(!s||"false"===s))&&(e.setAttribute(l,""),e.removeAttribute(l))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3571:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PostList:()=>q,default:()=>F});var o=n(5155),r=n(2115),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(a)for(var n of a(t))c.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>s(e,l(t)),h=(e,t)=>{var n={};for(var o in e)u.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&a)for(var o of a(e))0>t.indexOf(o)&&c.call(e,o)&&(n[o]=e[o]);return n},m=e=>e.right-e.left<5||e.bottom&&e.bottom-e.top<5,b=({spotsList:e,usedSpot:t})=>e.some(e=>e!==t&&t.left===e.left),g=({position:e,spot:t,stone:n})=>{if(e.left>t.left&&t.right>=e.left&&e.top+n.height>t.top){if(t.bottom&&t.bottom<e.top)return t;let n=f({},t);return n.right=e.left,n}return null},v=({position:e,stone:t,spot:n})=>{if(e.left+t.width>n.left&&e.top>=n.top){if(n.bottom&&n.bottom<e.top||n.right<e.left)return n;let t=f({},n);return t.bottom=e.top,t}return null},y=({stone:e,position:t,spotsList:n,optimalSpot:o})=>{let r=f({},o);return r.left=t.left+e.width,m(r)||b({usedSpot:r,spotsList:n})?null:r},_=({spots:e,position:t,optimalSpot:n,stone:o})=>e.map((e,r,i)=>e===n?y({stone:o,position:t,optimalSpot:n,spotsList:i}):g({position:t,spot:e,stone:o})||v({position:t,stone:o,spot:e})||e),w=(e,t)=>t.filter(e),P=(e,t)=>[...t].sort(e),x=(e,t)=>e.top===t.top?e.left<t.left?-1:1:e.top<t.top?-1:1,j=e=>P(x,e),S=({availableSpots:e,optimalSpot:t,containerSize:n,stone:o})=>{let r={right:n,top:t.top+o.height,left:t.left};t.bottom&&(r.bottom=t.bottom);for(let t=0,n=e.length;t<n;t+=1){let n=e[t];if(r.left<n.left&&r.top<n.top){r.right=n.left;break}}return r},O=(e,t)=>{let n=e.right-e.left>=t.width;if(!e.bottom)return n;let o=e.bottom-e.top>=t.height;return n&&o},M=({availableSpots:e,stone:t})=>(function(e,t){for(let n=0,o=t.length;n<o;n++){let o=t[n];if(e(o))return o}return null})(e=>O(e,t),e),E=({stones:e,containerSize:t})=>{if(!e.length)return{positions:[],containerHeight:0,availableSpots:[]};let n=0,o=[],r=[{top:0,left:0,right:t}];for(let i of e){let e=function({stone:e,availableSpots:t,containerSize:n}){let o=M({availableSpots:t,stone:e}),r={left:o.left,top:o.top},i=S({optimalSpot:o,availableSpots:t.filter(e=>e!==o),stone:e,containerSize:n}),s=[...t,i],l=_({spots:s,position:r,optimalSpot:o,stone:e});return{position:r,availableSpots:s=j(s=[...w(Boolean,l)])}}({availableSpots:r,stone:i,containerSize:t}),s=e.position.top+i.height;n<s&&(n=s),o.push(e.position),r=e.availableSpots}return{availableSpots:r,positions:o,containerHeight:n}},L=e=>e.reduce((e,t)=>{if(!t)return e;let n=t.getBoundingClientRect();return e.push({width:n.width,height:n.height}),e},[]),k=({boxesRefs:e,wrapperRef:t,children:n,windowWidth:o,wrapperWidth:i})=>{let[{positions:s,containerHeight:l,stones:a,availableSpots:u},c]=(0,r.useState)({positions:[],containerHeight:null,stones:[],availableSpots:[]});return(0,r.useEffect)(()=>{var n,o;let r=L(e.current),i=null!=(o=null==(n=t.current)?void 0:n.offsetWidth)?o:0;null!==i&&c(p(f({},E({stones:r,containerSize:i})),{stones:r}))},[n,e,t,o,i]),{positions:s,containerHeight:l,stones:a,availableSpots:u}},I=e=>({fade:`${e}ms opacity ease`,fadeMove:`
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `,move:`
    ${e}ms top ease,
    ${e}ms left ease
  `}),C=({transition:e,transitionDuration:t})=>e?{transition:I(t)[e]}:null,T=e=>e?p(f({},e),{opacity:1}):{opacity:0,top:0,left:0},H=({style:e,position:t,transition:n,transitionDuration:o})=>f(f(p(f({},e),{position:"absolute"}),T(t)),C({transition:n,transitionDuration:o})),A=()=>{let[e,t]=(0,r.useState)(),n=(0,r.useRef)(function(e,t,n){let o;return function(...t){o&&clearTimeout(o),o=setTimeout(function(){o=null,e.apply(null,t)},300)}}(t,0));return(0,r.useEffect)(()=>{let e=()=>{n.current(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e},N=e=>{let[t,n]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let t=new ResizeObserver(e=>{for(let t of e)n(t.contentRect.width)});return e.current&&t.observe(e.current),()=>{t.disconnect()}},[e]),t},R=e=>{var{children:t,style:n,transition:i=!1,transitionDuration:s=500,transitionStep:l=50}=e,a=h(e,["children","style","transition","transitionDuration","transitionStep"]);let u=(0,r.useRef)([]),c=(0,r.useRef)(null),d=A(),m=N(c),{positions:b,containerHeight:g}=k({boxesRefs:u,wrapperRef:c,children:t,windowWidth:d,wrapperWidth:m}),v=f({minHeight:null!=g?g:0,position:"relative"},n);return(0,o.jsx)("div",p(f({ref:c,style:v},a),{children:r.Children.map(t,(e,t)=>{if("object"!=typeof e||!e||!("type"in e))return e;let n={style:H({style:e.props.style,position:b[t],transition:i,transitionDuration:s}),ref:e=>u.current[t]=e};return(0,r.cloneElement)(e,f(f({},e.props),n))})}))},z=n(8948);let D=function(e){let{slug:t,title:n,description:r}=e;return(0,o.jsx)(z.Zp,{children:(0,o.jsxs)(z.N_,{href:"/post/".concat(t),children:[(0,o.jsx)(z.EY,{as:"div",size:"2",weight:"bold",className:"mb-4",children:n}),(0,o.jsx)(z.EY,{as:"div",color:"gray",size:"2",dangerouslySetInnerHTML:{__html:r}})]})})};function q(e){let{posts:t}=e;return(0,o.jsx)(R,{children:t.map(e=>(0,o.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-2",children:(0,o.jsx)(D,{...e},e.slug)},e.slug))})}let F=q},221:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QuickNavigate:()=>l,default:()=>a});var o=n(5155),r=n(7365),i=n(8948),s=n(6658);function l(){let e=(0,s.useRouter)();return(0,o.jsx)(i.az,{className:"fixed right-10 bottom-10 w-10",children:(0,o.jsxs)(i.xA,{gap:"2",children:[(0,o.jsx)(i.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,o.jsx)(r.Mtm,{})}),(0,o.jsx)(i.$n,{color:"indigo",variant:"soft",onClick:function(){e.push("/")},children:(0,o.jsx)(r.fAJ,{})}),(0,o.jsx)(i.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:(0,o.jsx)(r.D3D,{})})]})})}let a=l},5760:()=>{},347:()=>{},9574:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},2807:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var t=t=>e(e.s=t);e.O(0,[659,193,105,480,441,517,358],()=>t(5407)),_N_E=e.O()}]);