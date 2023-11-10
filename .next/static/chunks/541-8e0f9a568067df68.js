"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{9349:function(e,s,a){a.d(s,{Z:function(){return Button}});var i=a(5893),t=a(1954),r=a(1664),n=a.n(r);function Button(e){let{btnLink:s,btnText:a,variant:r,icon:c}=e;return(0,i.jsx)(n(),{href:s,className:r?"cs-text_btn ".concat(r):"cs-text_btn",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:a}),c||(0,i.jsx)(t.JO,{icon:"bi:arrow-right"})]})})}},9051:function(e,s,a){a.d(s,{Z:function(){return PricingTableList}});var i=a(5893),t=a(7294),r=a(1954),n=a(9349),c=a(6117);function PricingTable(e){let{title:s,price:a,currency:t,features:l,btnLink:o,btnText:m,timeline:h}=e;return(0,i.jsxs)(c.Z,{className:"cs-pricing_table cs-style1",children:[(0,i.jsx)("h2",{className:"cs-pricing_title",children:s}),(0,i.jsxs)(c.Z,{className:"cs-pricing_info",children:[(0,i.jsxs)(c.Z,{className:"cs-price",children:[(0,i.jsxs)("h3",{className:"cs-white_color",children:[t,a,"/"]}),(0,i.jsx)("span",{className:"cs-accent_color",children:h})]}),(0,i.jsx)(c.Z,{className:"cs-price_text",children:"Per subscriber per year"})]}),(0,i.jsx)("ul",{className:"cs-pricing_feature cs-mp0",children:l.map((e,s)=>(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"cs-feature_icon cs-accent_color",children:(0,i.jsx)(r.JO,{icon:"bi:arrow-right-circle"})}),(0,i.jsx)("span",{children:e})]},s))}),(0,i.jsx)(c.Z,{className:"cs-pricing_btn_wrap",children:(0,i.jsx)(n.Z,{btnLink:o,btnText:m})})]})}var l=a(9083);function PricingTableList(){let[e,s]=(0,t.useState)("monthly");return(0,i.jsxs)(c.Z,{className:"position-relative",children:[(0,i.jsxs)("ul",{className:"cs-tab_links cs-style1 cs-mp0 cs-primary_font",children:[(0,i.jsx)("li",{className:"monthly"===e?"active":"",onClick:()=>s("monthly"),children:"Monthly"}),(0,i.jsx)("li",{className:"yearly"===e?"active":"",onClick:()=>s("yearly"),children:"Yearly"})]}),(0,i.jsxs)(c.Z,{className:"row",children:[(0,i.jsxs)(c.Z,{className:"col-lg-4",children:["monthly"===e&&(0,i.jsx)(PricingTable,{title:"Standard",price:"29",currency:"$",timeline:"monthly",features:["Static responsive website","Video marketing","Keywords research","Facebook campaign","eCommerce solution","Google adword"],btnText:"Purchase Now",btnLink:"/"}),"yearly"===e&&(0,i.jsx)(PricingTable,{title:"Standard",price:"59",currency:"$",timeline:"yearly",features:["Static responsive website","Video marketing","Keywords research","Facebook campaign","eCommerce solution","Google adword"],btnText:"Purchase Now",btnLink:"/"}),(0,i.jsx)(l.Z,{lg:"25",md:"25"})]}),(0,i.jsxs)(c.Z,{className:"col-lg-4",children:["monthly"===e&&(0,i.jsx)(PricingTable,{title:"Professional",price:"199",currency:"$",timeline:"monthly",features:["Static responsive website","Video marketing","Keywords research","Facebook campaign","eCommerce solution","Google adword"],btnText:"Purchase Now",btnLink:"/"}),"yearly"===e&&(0,i.jsx)(PricingTable,{title:"Professional",price:"399",currency:"$",timeline:"yearly",features:["Static responsive website","Video marketing","Keywords research","Facebook campaign","eCommerce solution","Google adword"],btnText:"Purchase Now",btnLink:"/"}),(0,i.jsx)(l.Z,{lg:"25",md:"25"})]}),(0,i.jsxs)(c.Z,{className:"col-lg-4",children:["monthly"===e&&(0,i.jsx)(PricingTable,{title:"Ultimate",price:"299",currency:"$",timeline:"monthly",features:["Static responsive website","Video marketing","Keywords research","Facebook campaign","eCommerce solution","Google adword"],btnText:"Purchase Now",btnLink:"/"}),"yearly"===e&&(0,i.jsx)(PricingTable,{title:"Ultimate",price:"599",currency:"$",timeline:"yearly",features:["Static responsive website","Video marketing","Keywords research","Facebook campaign","eCommerce solution","Google adword"],btnText:"Purchase Now",btnLink:"/"}),(0,i.jsx)(l.Z,{lg:"25",md:"25"})]})]})]})}},9801:function(e,s,a){a.d(s,{Z:function(){return SectionHeading}});var i=a(5893);a(7294);var t=a(5935),r=a(9349),n=a(9083),c=a(6117);function SectionHeading(e){let{title:s,subtitle:a,btnLink:l,btnText:o,variant:m,children:h}=e;return(0,i.jsxs)(c.Z,{className:m?"cs-section_heading ".concat(m):"cs-section_heading cs-style1",children:[(0,i.jsx)("h3",{className:"cs-section_subtitle",children:(0,t.ZP)(a)}),(0,i.jsx)("h2",{className:"cs-section_title",children:(0,t.ZP)(s)}),h,o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Z,{lg:"45",md:"20"}),(0,i.jsx)(r.Z,{btnLink:l,btnText:o})]})]})}},6566:function(e,s,a){a.d(s,{Z:function(){return TestimonialSlider}});var i=a(5893),t=a(7294),r=a(6066),n=a(1954),c=a(6117);function Testimonial(e){let{testimonialText:s,avatarName:a,avatarDesignation:t,ratings:r}=e;return(0,i.jsxs)(c.Z,{className:"cs-testimonial cs-style1",children:[(0,i.jsx)(c.Z,{className:"cs-testimonial_quote",children:(0,i.jsx)(n.JO,{icon:"fa:quote-left"})}),(0,i.jsx)(c.Z,{className:"cs-testimonial_text",children:s}),(0,i.jsxs)(c.Z,{className:"cs-rating",children:[(0,i.jsx)(c.Z,{className:"cs-rating_bg",style:{backgroundImage:"url(/images/rating.svg)"}}),(0,i.jsx)(c.Z,{className:"cs-rating_percentage",style:{backgroundImage:"url(/images/rating.svg)",width:"".concat(20*r,"%")}})]}),(0,i.jsx)("h2",{className:"cs-testimonial_avatar_name",children:a}),(0,i.jsx)(c.Z,{className:"cs-testimonial_avatar_designation text-uppercase",children:t})]})}var l=a(9083);function TestimonialSlider(){let[e,s]=(0,t.useState)(),[a,o]=(0,t.useState)(),m=[{testimonialThumb:"/images/testimonial_1.jpeg",testimonialText:"I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",avatarName:"Ahon Monsery",avatarDesignation:"CEO AT TECH",ratings:"4"},{testimonialThumb:"/images/testimonial_2.jpeg",testimonialText:"I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",avatarName:"Ahon Monsery",avatarDesignation:"CEO AT TECH",ratings:"5"},{testimonialThumb:"/images/testimonial_3.jpeg",testimonialText:"I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",avatarName:"Ahon Monsery",avatarDesignation:"CEO AT TECH",ratings:"4.5"},{testimonialThumb:"/images/testimonial_1.jpeg",testimonialText:"I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",avatarName:"Ahon Monsery",avatarDesignation:"CEO AT TECH",ratings:"3.5"}];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.Z,{className:"cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax",children:[(0,i.jsx)(l.Z,{lg:"130",md:"80"}),(0,i.jsx)(c.Z,{className:"cs-shape_3 cs-to_up",children:(0,i.jsx)("img",{src:"/images/shape_1.svg",alt:"Shape"})}),(0,i.jsx)(c.Z,{className:"container",children:(0,i.jsxs)(c.Z,{className:"cs-testimonial_slider",children:[(0,i.jsx)(c.Z,{className:"cs-testimonial_slider_left",children:(0,i.jsx)(r.Z,{asNavFor:e,ref:e=>o(e),slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,centerMode:!0,centerPadding:"0px",arrows:!1,children:m.map((e,s)=>(0,i.jsx)(c.Z,{className:"slider-nav_item",children:(0,i.jsx)(c.Z,{className:"cs-rotate_img",children:(0,i.jsx)(c.Z,{className:"cs-rotate_img_in",children:(0,i.jsx)("img",{src:e.testimonialThumb,alt:"Thumb"})})})},s))})}),(0,i.jsx)(c.Z,{className:"cs-testimonial_slider_right",children:(0,i.jsx)(r.Z,{asNavFor:a,ref:e=>s(e),prevArrow:(0,i.jsx)(e=>{let{currentSlide:s,slideCount:a,...t}=e;return(0,i.jsx)("div",{...t,className:"slick-prev slick-arrow"+(0===s?" slick-disabled":""),"aria-hidden":"true","aria-disabled":0===s,children:(0,i.jsx)(n.JO,{icon:"bi:arrow-left"})})},{}),nextArrow:(0,i.jsx)(e=>{let{currentSlide:s,slideCount:a,...t}=e;return(0,i.jsx)("div",{...t,className:"slick-next slick-arrow"+(s===a-1?" slick-disabled":""),"aria-hidden":"true","aria-disabled":s===a-1,children:(0,i.jsx)(n.JO,{icon:"bi:arrow-right"})})},{}),className:"cs-arrow_style1",children:m.map((e,s)=>(0,i.jsx)(c.Z,{children:(0,i.jsx)(Testimonial,{testimonialText:e.testimonialText,avatarName:e.avatarName,avatarDesignation:e.avatarDesignation,ratings:e.ratings})},s))})})]})}),(0,i.jsx)(l.Z,{lg:"130",md:"80"})]})})}},9083:function(e,s,a){a.d(s,{Z:function(){return Spacing}});var i=a(5893),t=a(6117);function Spacing(e){let{lg:s,md:a}=e;return(0,i.jsx)(t.Z,{className:"cs-height_".concat(s," cs-height_lg_").concat(a)})}}}]);