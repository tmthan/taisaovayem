(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32,511,850,909,998],{8885:(e,r,t)=>{Promise.resolve().then(t.bind(t,3572)),Promise.resolve().then(t.bind(t,6217)),Promise.resolve().then(t.bind(t,2098)),Promise.resolve().then(t.bind(t,1119)),Promise.resolve().then(t.bind(t,532)),Promise.resolve().then(t.bind(t,7323)),Promise.resolve().then(t.bind(t,4681)),Promise.resolve().then(t.bind(t,852)),Promise.resolve().then(t.bind(t,1868)),Promise.resolve().then(t.bind(t,5900)),Promise.resolve().then(t.bind(t,2413)),Promise.resolve().then(t.bind(t,8629)),Promise.resolve().then(t.bind(t,9710)),Promise.resolve().then(t.bind(t,2342)),Promise.resolve().then(t.bind(t,4813)),Promise.resolve().then(t.bind(t,6511)),Promise.resolve().then(t.bind(t,2744)),Promise.resolve().then(t.bind(t,8286)),Promise.resolve().then(t.bind(t,5892)),Promise.resolve().then(t.bind(t,3037)),Promise.resolve().then(t.bind(t,9186)),Promise.resolve().then(t.bind(t,806)),Promise.resolve().then(t.bind(t,1165)),Promise.resolve().then(t.bind(t,8350)),Promise.resolve().then(t.bind(t,3394)),Promise.resolve().then(t.bind(t,778)),Promise.resolve().then(t.bind(t,4174)),Promise.resolve().then(t.bind(t,9108)),Promise.resolve().then(t.bind(t,3875)),Promise.resolve().then(t.bind(t,3164)),Promise.resolve().then(t.bind(t,6713)),Promise.resolve().then(t.bind(t,3676))},9108:(e,r,t)=>{"use strict";t.r(r),t.d(r,{AudioPlayer:()=>i,default:()=>d});var n=t(5155),o=t(2115),s=t(5686),l=t.n(s);function i(e){let{source:r,color:t}=e,[s,i]=(0,o.useState)(!1),d={backgroundColor:"magenta"};return t&&(d.backgroundColor=t),(0,o.useEffect)(()=>{i(!0)},[]),s?(0,n.jsx)("button",{className:"w-[88px] h-[82px] rounded-full ".concat(l()["play-button"]),style:d,onClick:function(){new Audio(r).play()}}):null}let d=i},3875:(e,r,t)=>{"use strict";t.r(r),t.d(r,{PostContent:()=>u,default:()=>h});var n=t(5155),o=t(8948),s=t(2115),l=t(6713),i=t(1620),d=t(7365),a=t(6046);let c=(0,s.forwardRef)(function(e,r){let{post:t}=e;return(0,n.jsx)("div",{className:"bg-cover w-96 min-h-64 h-auto p-8 flex items-center justify-center",style:{backgroundImage:"url('/quote-background.jpg')"},ref:r,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(o.EY,{as:"div",size:"6",weight:"bold",className:"mb-4 mix-blend-overlay",children:t.data.title}),(0,n.jsx)(o.EY,{as:"div",size:"2",dangerouslySetInnerHTML:{__html:t.html},style:{color:"yellow",textShadow:"#999999 1px 1px"}})]})})});function u(e){let{post:r}=e,t=(0,s.useRef)(null),u=(0,a.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.az,{className:"bg-gray-100 rounded-xl mb-8 p-9 relative",children:[(0,n.jsx)("header",{className:"mb-6",children:(0,n.jsx)(l.default,{children:r.data.title})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:r.html},className:"text-gray-500"}),(0,n.jsxs)("div",{className:"hidden md:absolute right-3 top-3 md:grid gap-x-2 grid-cols-2",children:[(0,n.jsx)("div",{children:(0,n.jsx)(o.K0,{title:"Copy",variant:"soft",onClick:function(){t.current&&i.ZR(t.current).then(e=>{e&&navigator.clipboard.write([new ClipboardItem({[null==e?void 0:e.type]:e})])})},radius:"full",children:(0,n.jsx)(d.TdU,{})})}),(0,n.jsx)("div",{children:(0,n.jsx)(o.K0,{title:"Quay lại",variant:"soft",onClick:()=>u.back(),color:"tomato",radius:"full",children:(0,n.jsx)(d.raE,{})})})]})]}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:"<!--googleoff: all-->"}}),(0,n.jsx)("div",{className:"w-0 h-0 overflow-hidden",children:(0,n.jsx)(c,{post:r,ref:t})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:"<!--googleoff: all-->"}})]})}let h=u},3164:(e,r,t)=>{"use strict";t.r(r),t.d(r,{PostList:()=>c,default:()=>u});var n=t(5155),o=t(3397),s=t(8948);let l=function(e){let{slug:r,title:t,description:o}=e;return(0,n.jsx)(s.Zp,{className:"shadow-lg",children:(0,n.jsxs)(s.N_,{href:"/post/".concat(r),children:[(0,n.jsx)(s.EY,{as:"div",size:"2",weight:"bold",className:"mb-4",children:t}),(0,n.jsx)(s.EY,{as:"div",color:"gray",size:"2",dangerouslySetInnerHTML:{__html:o}})]})})};var i=t(2115);function d(e){return e?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D"):""}var a=t(7365);function c(e){let{posts:r}=e,[t,c]=(0,i.useState)(""),[u,h]=(0,i.useState)(r);return(0,i.useEffect)(()=>{h(r)},[r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.az,{className:"p-2",children:(0,n.jsx)(s.A_.Root,{placeholder:"T\xecm kiếm",value:t,onChange:function(e){let t=e.target.value;c(t),t||h(r),t&&h(r.filter(e=>{var r;return null===(r=d(e.title).toLocaleLowerCase())||void 0===r?void 0:r.match(d(t.toLocaleLowerCase()))}))},radius:"full",color:"indigo",variant:"soft",children:(0,n.jsx)(s.A_.Slot,{children:(0,n.jsx)(a.$p$,{height:"16",width:"16"})})})}),(0,n.jsx)(o.a,{children:u.map(e=>(0,n.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-2",children:(0,n.jsx)(l,{...e},e.slug)},e.slug))})]})}let u=c},6713:(e,r,t)=>{"use strict";t.r(r),t.d(r,{PostTitle:()=>l,default:()=>i});var n=t(5155),o=t(8948),s=t(5687);function l(e){let{children:r}=e;return(0,n.jsx)(o.DZ,{onClick:function(){navigator.clipboard.writeText((0,s.F0)(r))},children:r})}let i=l},3676:(e,r,t)=>{"use strict";t.r(r),t.d(r,{QuickNavigate:()=>c,default:()=>u});var n=t(5155),o=t(7365),s=t(8948),l=t(6046),i=t(2115),d=t(719),a=t.n(d);function c(){(0,l.useRouter)();let[e,r]=(0,i.useState)("");return(0,i.useEffect)(()=>{let e=0,t=a()(function(){var t=document.documentElement.scrollTop;t>e?r("down"):t<e&&r("up"),e=t<=0?0:t},500);return document.addEventListener("scroll",t),()=>document.removeEventListener("scroll",t)},[]),(0,n.jsx)(s.az,{className:"fixed right-10 bottom-10 w-10",children:(0,n.jsxs)(s.xA,{gap:"2",children:["up"===e&&(0,n.jsx)(s.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,n.jsx)(o.Mtm,{})}),"down"===e&&(0,n.jsx)(s.$n,{color:"indigo",variant:"soft",onClick:function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:(0,n.jsx)(o.D3D,{})})]})})}let u=c},5686:e=>{e.exports={"play-button":"audio-player_play-button__iM4_P"}}},e=>{var r=r=>e(e.s=r);e.O(0,[749,105,690,390,480,961,441,517,358],()=>r(8885)),_N_E=e.O()}]);