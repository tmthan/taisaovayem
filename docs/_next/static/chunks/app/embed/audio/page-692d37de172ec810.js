(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{3110:(e,u,n)=>{Promise.resolve().then(n.bind(n,7830))},6046:(e,u,n)=>{"use strict";var r=n(6658);n.o(r,"usePathname")&&n.d(u,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(u,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(u,{useSearchParams:function(){return r.useSearchParams}})},7830:(e,u,n)=>{"use strict";n.r(u),n.d(u,{default:()=>c});var r=n(5155),t=n(9108),a=n(8948),s=n(6046),o=n(2115);function l(){let e=(0,s.useSearchParams)(),u=e.get("source"),n=e.get("color");return u?(0,r.jsx)(t.default,{source:u,color:n}):(0,r.jsxs)(a.az,{children:[(0,r.jsx)(a.EY,{children:"Chưa gắn link audio"}),(0,r.jsx)(a.EY,{children:"Vui l\xf2ng gắn link dạng:"}),(0,r.jsx)(a.Cy,{children:"https://taisaovayem/embed/audio?source=/onii-chan.mp3"})]})}function c(){return(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)(a.y$,{}),children:(0,r.jsx)(l,{})})}},9108:(e,u,n)=>{"use strict";n.r(u),n.d(u,{AudioPlayer:()=>o,default:()=>l});var r=n(5155),t=n(2115),a=n(7029),s=n.n(a);function o(e){let{source:u,color:n}=e,[a,o]=(0,t.useState)(!1),l={backgroundColor:"magenta"};return n&&(l.backgroundColor=n),(0,t.useEffect)(()=>{o(!0)},[]),a?(0,r.jsx)("button",{className:"w-[88px] h-[82px] rounded-full ".concat(s()["play-button"]),style:l,onClick:function(){new Audio(u).play()}}):null}let l=o},7029:e=>{e.exports={"play-button":"AudioPlayer_play-button__IpVMf"}}},e=>{var u=u=>e(e.s=u);e.O(0,[180,480,441,517,358],()=>u(3110)),_N_E=e.O()}]);