"use strict";exports.id=235,exports.ids=[235],exports.modules={3235:(s,t,e)=>{e.d(t,{Z:()=>PostSlider});var l=e(997);e(6689);var a=e(8096),i=e.n(a),o=e(6117),r=e(1664),n=e.n(r);function Post({url:s,src:t,alt:e,date:a,title:i}){return(0,l.jsxs)(o.Z,{className:"cs-post cs-style1",children:[(0,l.jsxs)(n(),{href:s,className:"cs-post_thumb",children:[l.jsx("img",{src:t,alt:e}),l.jsx(o.Z,{className:"cs-post_overlay"})]}),(0,l.jsxs)(o.Z,{className:"cs-post_info",children:[l.jsx(o.Z,{className:"cs-posted_by",children:a}),l.jsx("h2",{className:"cs-post_title",children:l.jsx(n(),{href:"blog-details.html",children:i})})]})]})}function PostSlider(){return l.jsx(i(),{dots:!1,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:4e3,speed:1e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1600,settings:{slidesToShow:3}},{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}],className:"cs-gap-24",children:[{url:"/blog/blog-details",src:"/images/thumbnail-svelte.png",alt:"Post",date:"",title:""},{url:"/blog/blog-details",src:"/images/thumbnail-trust.png",alt:"Post",date:"",title:""},{url:"/blog/blog-details",src:"/images/thumbnail-cro.png",alt:"Post",date:"",title:""},{url:"/blog/blog-details",src:"/images/thumbnail-svelte.png",alt:"Post",date:"",title:""},{url:"/blog/blog-details",src:"/images/thumbnail-trust.png",alt:"Post",date:"",title:""},{url:"/blog/blog-details",src:"/images/thumbnail-cro.png",alt:"Post",date:"",title:""}].map((s,t)=>l.jsx(o.Z,{children:l.jsx(Post,{url:s.url,src:s.src,alt:s.alt,date:s.date,title:s.title})},t))})}}};