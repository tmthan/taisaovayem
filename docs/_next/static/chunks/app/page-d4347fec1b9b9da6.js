(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4888:(e,t,r)=>{Promise.resolve().then(r.bind(r,3572)),Promise.resolve().then(r.bind(r,6217)),Promise.resolve().then(r.bind(r,2098)),Promise.resolve().then(r.bind(r,1119)),Promise.resolve().then(r.bind(r,532)),Promise.resolve().then(r.bind(r,7323)),Promise.resolve().then(r.bind(r,4681)),Promise.resolve().then(r.bind(r,852)),Promise.resolve().then(r.bind(r,1868)),Promise.resolve().then(r.bind(r,5900)),Promise.resolve().then(r.bind(r,2413)),Promise.resolve().then(r.bind(r,8629)),Promise.resolve().then(r.bind(r,9710)),Promise.resolve().then(r.bind(r,2342)),Promise.resolve().then(r.bind(r,4813)),Promise.resolve().then(r.bind(r,6511)),Promise.resolve().then(r.bind(r,2744)),Promise.resolve().then(r.bind(r,8286)),Promise.resolve().then(r.bind(r,5892)),Promise.resolve().then(r.bind(r,3037)),Promise.resolve().then(r.bind(r,9186)),Promise.resolve().then(r.bind(r,806)),Promise.resolve().then(r.bind(r,1165)),Promise.resolve().then(r.bind(r,8350)),Promise.resolve().then(r.bind(r,3394)),Promise.resolve().then(r.bind(r,778)),Promise.resolve().then(r.bind(r,4174)),Promise.resolve().then(r.t.bind(r,4839,23)),Promise.resolve().then(r.bind(r,9108)),Promise.resolve().then(r.bind(r,3630)),Promise.resolve().then(r.bind(r,7067)),Promise.resolve().then(r.bind(r,8904)),Promise.resolve().then(r.bind(r,2194)),Promise.resolve().then(r.bind(r,6713)),Promise.resolve().then(r.bind(r,3676))},9108:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AudioPlayer:()=>i,default:()=>d});var s=r(5155),l=r(2115),o=r(7029),n=r.n(o);function i(e){let{source:t,color:r}=e,[o,i]=(0,l.useState)(!1),d={backgroundColor:"magenta"};return r&&(d.backgroundColor=r),(0,l.useEffect)(()=>{i(!0)},[]),o?(0,s.jsx)("button",{className:"w-[88px] h-[82px] rounded-full ".concat(n()["play-button"]),style:d,onClick:function(){new Audio(t).play()}}):null}let d=i},3630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ClipboardContent:()=>o,default:()=>n});var s=r(5155),l=r(8948);let o=(0,r(2115).forwardRef)(function(e,t){let{title:r,html:o}=e;return(0,s.jsxs)("div",{className:"bg-cover w-96 min-h-64 h-auto p-8 flex items-center justify-center relative",style:{backgroundImage:"url('/quote-background.jpg')"},ref:t,children:[(0,s.jsx)("div",{className:"bg-cover absolute -left-6 -top-6 -right-6 -bottom-5 -z-0",style:{backgroundImage:"url('/quote-background.jpg')",filter:"saturate(180%) blur(20px)"}}),(0,s.jsxs)("div",{className:"z-10",children:[(0,s.jsx)(l.EY,{as:"div",size:"6",weight:"bold",className:"mb-4 text-white",children:r}),(0,s.jsx)(l.EY,{as:"div",size:"2",className:"mix-blend-screen text-white",dangerouslySetInnerHTML:{__html:o}})]})]})}),n=o},7067:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PostCard:()=>u,default:()=>h});var s=r(5155),l=r(8948),o=r(3630),n=r(2115),i=r(1620),d=r(7365),a=r(8422),c=r.n(a);function u(e){let{slug:t,title:r,description:a,html:u}=e,h=(0,n.useRef)(null);return(0,s.jsxs)(l.Zp,{className:"shadow-lg ".concat(c()["post-card"]),children:[(0,s.jsxs)(l.N_,{href:"/post/".concat(t),children:[(0,s.jsx)(l.EY,{as:"div",size:"2",weight:"bold",className:"mb-4",children:r}),(0,s.jsx)(l.EY,{as:"div",color:"gray",size:"2",dangerouslySetInnerHTML:{__html:a}})]}),(0,s.jsx)("div",{className:"absolute right-2 top-2 hidden ".concat(c()["copy-button"]),children:(0,s.jsx)(l.K0,{title:"Copy",variant:"soft",onClick:function(){h.current&&i.ZR(h.current).then(e=>{e&&navigator.clipboard.write([new ClipboardItem({[null==e?void 0:e.type]:e})])})},radius:"full",color:"plum",className:"absolute right-3 top-3",children:(0,s.jsx)(d.TdU,{})})}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"<!--googleoff: all-->"}}),(0,s.jsx)("div",{className:"w-0 h-0 overflow-hidden",children:(0,s.jsx)(o.default,{title:r,html:u,ref:h})}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"<!--googleoff: all-->"}})]})}let h=u},8904:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PostContent:()=>u,default:()=>h});var s=r(5155),l=r(8948),o=r(2115),n=r(6713),i=r(1620),d=r(7365),a=r(6046),c=r(3630);function u(e){let{post:t}=e,r=(0,o.useRef)(null),u=(0,a.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.az,{className:"bg-gray-100 rounded-xl mb-8 p-9 relative",children:[(0,s.jsx)("header",{className:"mb-6",children:(0,s.jsx)(n.default,{children:t.title})}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t.html},className:"text-gray-500"}),(0,s.jsxs)("div",{className:"hidden md:absolute right-3 top-3 md:grid gap-x-2 grid-cols-2",children:[(0,s.jsx)("div",{children:(0,s.jsx)(l.K0,{title:"Copy",variant:"soft",onClick:function(){r.current&&i.ZR(r.current).then(e=>{e&&navigator.clipboard.write([new ClipboardItem({[null==e?void 0:e.type]:e})])})},radius:"full",children:(0,s.jsx)(d.TdU,{})})}),(0,s.jsx)("div",{children:(0,s.jsx)(l.K0,{title:"Quay lại",variant:"soft",onClick:()=>u.back(),color:"tomato",radius:"full",children:(0,s.jsx)(d.raE,{})})})]})]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"<!--googleoff: all-->"}}),(0,s.jsx)("div",{className:"w-0 h-0 overflow-hidden",children:(0,s.jsx)(c.default,{title:t.title,html:t.html,ref:r})}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"<!--googleoff: all-->"}})]})}let h=u},2194:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PostList:()=>c,default:()=>u});var s=r(5155),l=r(3397),o=r(7067),n=r(2115),i=r(8948);function d(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D"):""}var a=r(7365);function c(e){let{posts:t}=e,[r,c]=(0,n.useState)(""),[u,h]=(0,n.useState)(t);return(0,n.useEffect)(()=>{h(t)},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.az,{className:"p-2",children:(0,s.jsx)(i.A_.Root,{placeholder:"T\xecm kiếm",value:r,onChange:function(e){let r=e.target.value;c(r),r||h(t),r&&h(t.filter(e=>{var t;return null===(t=d(e.title).toLocaleLowerCase())||void 0===t?void 0:t.match(d(r.toLocaleLowerCase()))}))},radius:"full",color:"indigo",variant:"soft",children:(0,s.jsx)(i.A_.Slot,{children:(0,s.jsx)(a.$p$,{height:"16",width:"16"})})})}),(0,s.jsx)(l.a,{children:u.map(e=>(0,s.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-2",children:(0,s.jsx)(o.default,{title:e.title,slug:e.slug,description:e.description,html:e.html},e.slug)},e.slug))})]})}let u=c},6713:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PostTitle:()=>n,default:()=>i});var s=r(5155),l=r(8948),o=r(5687);function n(e){let{children:t}=e;return(0,s.jsx)(l.DZ,{onClick:function(){navigator.clipboard.writeText((0,o.F0)(t))},children:t})}let i=n},3676:(e,t,r)=>{"use strict";r.r(t),r.d(t,{QuickNavigate:()=>c,default:()=>u});var s=r(5155),l=r(7365),o=r(8948),n=r(6046),i=r(2115),d=r(719),a=r.n(d);function c(){(0,n.useRouter)();let[e,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{let e=0,r=a()(function(){var r=document.documentElement.scrollTop;r>e?t("down"):r<e&&t("up"),e=r<=0?0:r},500);return document.addEventListener("scroll",r),()=>document.removeEventListener("scroll",r)},[]),(0,s.jsx)(o.az,{className:"fixed right-10 bottom-10 w-10",children:(0,s.jsxs)(o.xA,{gap:"2",children:["up"===e&&(0,s.jsx)(o.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,s.jsx)(l.Mtm,{})}),"down"===e&&(0,s.jsx)(o.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:(0,s.jsx)(l.D3D,{})})]})})}let u=c},7029:e=>{e.exports={"play-button":"AudioPlayer_play-button__IpVMf"}},8422:e=>{e.exports={"post-card":"PostCard_post-card__kl6Ju","copy-button":"PostCard_copy-button__VLiSs"}}},e=>{var t=t=>e(e.s=t);e.O(0,[180,105,690,390,480,961,839,441,517,358],()=>t(4888)),_N_E=e.O()}]);