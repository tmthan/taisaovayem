(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4443:(e,t,o)=>{Promise.resolve().then(o.bind(o,3572)),Promise.resolve().then(o.bind(o,6217)),Promise.resolve().then(o.bind(o,2098)),Promise.resolve().then(o.bind(o,1119)),Promise.resolve().then(o.bind(o,532)),Promise.resolve().then(o.bind(o,7323)),Promise.resolve().then(o.bind(o,4681)),Promise.resolve().then(o.bind(o,852)),Promise.resolve().then(o.bind(o,1868)),Promise.resolve().then(o.bind(o,5900)),Promise.resolve().then(o.bind(o,2413)),Promise.resolve().then(o.bind(o,8629)),Promise.resolve().then(o.bind(o,9710)),Promise.resolve().then(o.bind(o,2342)),Promise.resolve().then(o.bind(o,4813)),Promise.resolve().then(o.bind(o,6511)),Promise.resolve().then(o.bind(o,2744)),Promise.resolve().then(o.bind(o,8286)),Promise.resolve().then(o.bind(o,5892)),Promise.resolve().then(o.bind(o,3037)),Promise.resolve().then(o.bind(o,9186)),Promise.resolve().then(o.bind(o,806)),Promise.resolve().then(o.bind(o,1165)),Promise.resolve().then(o.bind(o,8350)),Promise.resolve().then(o.bind(o,3394)),Promise.resolve().then(o.bind(o,778)),Promise.resolve().then(o.bind(o,4174)),Promise.resolve().then(o.t.bind(o,2807,23)),Promise.resolve().then(o.t.bind(o,9574,23)),Promise.resolve().then(o.t.bind(o,347,23)),Promise.resolve().then(o.t.bind(o,5760,23)),Promise.resolve().then(o.bind(o,3571)),Promise.resolve().then(o.bind(o,221))},3571:(e,t,o)=>{"use strict";o.r(t),o.d(t,{PostList:()=>F,default:()=>A});var i=o(5155),n=o(2115),s=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&u(e,o,t[o]);if(a)for(var o of a(t))h.call(t,o)&&u(e,o,t[o]);return e},f=(e,t)=>r(e,l(t)),d=(e,t)=>{var o={};for(var i in e)p.call(e,i)&&0>t.indexOf(i)&&(o[i]=e[i]);if(null!=e&&a)for(var i of a(e))0>t.indexOf(i)&&h.call(e,i)&&(o[i]=e[i]);return o},b=e=>e.right-e.left<5||e.bottom&&e.bottom-e.top<5,m=({spotsList:e,usedSpot:t})=>e.some(e=>e!==t&&t.left===e.left),v=({position:e,spot:t,stone:o})=>{if(e.left>t.left&&t.right>=e.left&&e.top+o.height>t.top){if(t.bottom&&t.bottom<e.top)return t;let o=c({},t);return o.right=e.left,o}return null},g=({position:e,stone:t,spot:o})=>{if(e.left+t.width>o.left&&e.top>=o.top){if(o.bottom&&o.bottom<e.top||o.right<e.left)return o;let t=c({},o);return t.bottom=e.top,t}return null},P=({stone:e,position:t,spotsList:o,optimalSpot:i})=>{let n=c({},i);return n.left=t.left+e.width,b(n)||m({usedSpot:n,spotsList:o})?null:n},w=({spots:e,position:t,optimalSpot:o,stone:i})=>e.map((e,n,s)=>e===o?P({stone:i,position:t,optimalSpot:o,spotsList:s}):v({position:t,spot:e,stone:i})||g({position:t,stone:i,spot:e})||e),S=(e,t)=>t.filter(e),y=(e,t)=>[...t].sort(e),x=(e,t)=>e.top===t.top?e.left<t.left?-1:1:e.top<t.top?-1:1,j=e=>y(x,e),_=({availableSpots:e,optimalSpot:t,containerSize:o,stone:i})=>{let n={right:o,top:t.top+i.height,left:t.left};t.bottom&&(n.bottom=t.bottom);for(let t=0,o=e.length;t<o;t+=1){let o=e[t];if(n.left<o.left&&n.top<o.top){n.right=o.left;break}}return n},O=(e,t)=>{let o=e.right-e.left>=t.width;if(!e.bottom)return o;let i=e.bottom-e.top>=t.height;return o&&i},z=({availableSpots:e,stone:t})=>(function(e,t){for(let o=0,i=t.length;o<i;o++){let i=t[o];if(e(i))return i}return null})(e=>O(e,t),e),E=({stones:e,containerSize:t})=>{if(!e.length)return{positions:[],containerHeight:0,availableSpots:[]};let o=0,i=[],n=[{top:0,left:0,right:t}];for(let s of e){let e=function({stone:e,availableSpots:t,containerSize:o}){let i=z({availableSpots:t,stone:e}),n={left:i.left,top:i.top},s=_({optimalSpot:i,availableSpots:t.filter(e=>e!==i),stone:e,containerSize:o}),r=[...t,s],l=w({spots:r,position:n,optimalSpot:i,stone:e});return{position:n,availableSpots:r=j(r=[...S(Boolean,l)])}}({availableSpots:n,stone:s,containerSize:t}),r=e.position.top+s.height;o<r&&(o=r),i.push(e.position),n=e.availableSpots}return{availableSpots:n,positions:i,containerHeight:o}},N=e=>e.reduce((e,t)=>{if(!t)return e;let o=t.getBoundingClientRect();return e.push({width:o.width,height:o.height}),e},[]),k=({boxesRefs:e,wrapperRef:t,children:o,windowWidth:i,wrapperWidth:s})=>{let[{positions:r,containerHeight:l,stones:a,availableSpots:p},h]=(0,n.useState)({positions:[],containerHeight:null,stones:[],availableSpots:[]});return(0,n.useEffect)(()=>{var o,i;let n=N(e.current),s=null!=(i=null==(o=t.current)?void 0:o.offsetWidth)?i:0;null!==s&&h(f(c({},E({stones:n,containerSize:s})),{stones:n}))},[o,e,t,i,s]),{positions:r,containerHeight:l,stones:a,availableSpots:p}},R=e=>({fade:`${e}ms opacity ease`,fadeMove:`
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `,move:`
    ${e}ms top ease,
    ${e}ms left ease
  `}),D=({transition:e,transitionDuration:t})=>e?{transition:R(t)[e]}:null,H=e=>e?f(c({},e),{opacity:1}):{opacity:0,top:0,left:0},$=({style:e,position:t,transition:o,transitionDuration:i})=>c(c(f(c({},e),{position:"absolute"}),H(t)),D({transition:o,transitionDuration:i})),L=()=>{let[e,t]=(0,n.useState)(),o=(0,n.useRef)(function(e,t,o){let i;return function(...t){i&&clearTimeout(i),i=setTimeout(function(){i=null,e.apply(null,t)},300)}}(t,0));return(0,n.useEffect)(()=>{let e=()=>{o.current(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e},C=e=>{let[t,o]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let t=new ResizeObserver(e=>{for(let t of e)o(t.contentRect.width)});return e.current&&t.observe(e.current),()=>{t.disconnect()}},[e]),t},W=e=>{var{children:t,style:o,transition:s=!1,transitionDuration:r=500,transitionStep:l=50}=e,a=d(e,["children","style","transition","transitionDuration","transitionStep"]);let p=(0,n.useRef)([]),h=(0,n.useRef)(null),u=L(),b=C(h),{positions:m,containerHeight:v}=k({boxesRefs:p,wrapperRef:h,children:t,windowWidth:u,wrapperWidth:b}),g=c({minHeight:null!=v?v:0,position:"relative"},o);return(0,i.jsx)("div",f(c({ref:h,style:g},a),{children:n.Children.map(t,(e,t)=>{if("object"!=typeof e||!e||!("type"in e))return e;let o={style:$({style:e.props.style,position:m[t],transition:s,transitionDuration:r}),ref:e=>p.current[t]=e};return(0,n.cloneElement)(e,c(c({},e.props),o))})}))},M=o(8948);let T=function(e){let{slug:t,title:o,description:n}=e;return(0,i.jsx)(M.Zp,{children:(0,i.jsxs)(M.N_,{href:"/post/".concat(t),children:[(0,i.jsx)(M.EY,{as:"div",size:"2",weight:"bold",className:"mb-4",children:o}),(0,i.jsx)(M.EY,{as:"div",color:"gray",size:"2",dangerouslySetInnerHTML:{__html:n}})]})})};function F(e){let{posts:t}=e;return(0,i.jsx)(W,{children:t.map(e=>(0,i.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-2",children:(0,i.jsx)(T,{...e},e.slug)},e.slug))})}let A=F},221:(e,t,o)=>{"use strict";o.r(t),o.d(t,{QuickNavigate:()=>l,default:()=>a});var i=o(5155),n=o(7365),s=o(8948),r=o(6658);function l(){let e=(0,r.useRouter)();return(0,i.jsx)(s.az,{className:"fixed right-10 bottom-10 w-10",children:(0,i.jsxs)(s.xA,{gap:"2",children:[(0,i.jsx)(s.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)(n.Mtm,{})}),(0,i.jsx)(s.$n,{color:"indigo",variant:"soft",onClick:function(){e.push("/")},children:(0,i.jsx)(n.fAJ,{})}),(0,i.jsx)(s.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:(0,i.jsx)(n.D3D,{})})]})})}let a=l},5760:()=>{},347:()=>{},9574:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},2807:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},e=>{var t=t=>e(e.s=t);e.O(0,[659,193,105,480,441,517,358],()=>t(4443)),_N_E=e.O()}]);