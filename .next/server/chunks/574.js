"use strict";exports.id=574,exports.ids=[574],exports.modules={3282:(e,s,a)=>{a.d(s,{Z:()=>FunFact});var i=a(997);a(6689);var r=a(6117);function FunFact({variant:e,title:s,subtitle:a,data:c}){return(0,i.jsxs)(r.Z,{className:e?`cs-funfact_wrap ${e}`:"cs-funfact_wrap",children:[i.jsx(r.Z,{className:"cs-funfact_shape",style:{backgroundImage:"url(./images/funfact_shape_bg.svg)"}}),i.jsx(r.Z,{className:"cs-funfact_left",children:(0,i.jsxs)(r.Z,{className:"cs-funfact_heading",children:[i.jsx("h2",{children:s}),i.jsx("p",{children:a})]})}),i.jsx(r.Z,{className:"cs-funfact_right",children:i.jsx(r.Z,{className:"cs-funfacts",children:c.map((e,s)=>(0,i.jsxs)(r.Z,{className:"cs-funfact cs-style1",children:[(0,i.jsxs)(r.Z,{className:"cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color",children:[i.jsx("span",{}),e.factNumber]}),(0,i.jsxs)(r.Z,{className:"cs-funfact_text",children:[i.jsx("span",{className:"cs-accent_color",children:"+"}),i.jsx("p",{children:e.title})]})]},s))})})]})}},4393:(e,s,a)=>{a.a(e,async(e,i)=>{try{a.d(s,{Z:()=>TeamSlider});var r=a(997),c=a(5566),m=a(8096),t=a.n(m),n=a(6117),l=a(5863),o=e([c,l]);function TeamSlider(){let e={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,prevArrow:r.jsx(({currentSlide:e,slideCount:s,...a})=>r.jsx("div",{...a,className:"slick-prev slick-arrow custom-arrow"+(0===e?" slick-disabled":""),"aria-hidden":"true","aria-disabled":0===e,children:r.jsx(c.Icon,{icon:"bi:arrow-left"})}),{}),nextArrow:r.jsx(({currentSlide:e,slideCount:s,...a})=>r.jsx("div",{...a,className:"slick-next slick-arrow custom-arrow"+(e===s-1?" slick-disabled":""),"aria-hidden":"true","aria-disabled":e===s-1,children:r.jsx(c.Icon,{icon:"bi:arrow-right"})}),{}),responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:991,settings:{slidesToShow:2,dots:!0,arrows:!1}},{breakpoint:500,settings:{slidesToShow:1,dots:!0,arrows:!1}}]};return r.jsx(t(),{...e,className:"cs-gap-24 cs-arrow_style2",children:[{memberImage:"/images/web_dev2.gif",memberName:"Web Dev",memberDesignation:"Full/Mid Stack",memberSocial:{react:"/",html:"/",code:"/",javas:"/"}},{memberImage:"/images/web_design.gif",memberName:"Websites",memberDesignation:"Svelte Nextjs",memberSocial:{bootstrap:"/",html:"/",wordpress:"/",code:"/"}},{memberImage:"/images/app_dev2.gif",memberName:"Mobile Applications",memberDesignation:"Native / Hybrid / PWA",memberSocial:{android:"/",appstore:"/",mobile:"/",react:"/"}},{memberImage:"/images/ui_design.gif",memberName:"UI / UX",memberDesignation:"Figma / Sketch / XD ",memberSocial:{figma:"/",sketch:"/",uikit:"/"}}].map((e,s)=>r.jsx(n.Z,{children:r.jsx(l.Z,{memberImage:e.memberImage,memberName:e.memberName,memberDesignation:e.memberDesignation,memberSocial:e.memberSocial})},s))})}[c,l]=o.then?(await o)():o,i()}catch(e){i(e)}})}};