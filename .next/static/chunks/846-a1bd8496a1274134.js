"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{6117:function(e,s,c){c.d(s,{Z:function(){return Div}});var t=c(5893);function Div(e){return(0,t.jsx)("div",{...e,children:e.children})}c(7294)},4846:function(e,s,c){c.d(s,{Z:function(){return Layout}});var t=c(5893),n=c(7294),l=c(6117),i=c(2314),r=c(1664),a=c.n(r);function MenuWidget(e){let{menuItems:s,menuHeading:c,variant:n}=e;return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("h2",{className:"cs-widget_title",children:c}),(0,t.jsx)("ul",{className:"".concat(n?"cs-menu_widget ".concat(n):"cs-menu_widget cs-style1"," cs-mp0"),children:s.map((e,s)=>(0,t.jsx)("li",{children:e.href?(0,t.jsx)(a(),{href:e.href,children:e.title}):e.title},s))})]})}function Newsletter(e){let{title:s,subtitle:c,placeholder:n}=e;return(0,t.jsxs)(t.Fragment,{children:[s&&(0,t.jsx)("h2",{className:"cs-widget_title",children:s}),(0,t.jsxs)(l.Z,{className:"cs-newsletter cs-style1",children:[(0,t.jsxs)("form",{action:"#",className:"cs-newsletter_form",children:[(0,t.jsx)("input",{type:"email",className:"cs-newsletter_input",placeholder:n}),(0,t.jsx)("button",{className:"cs-newsletter_btn",children:(0,t.jsx)("span",{children:"Send"})})]}),(0,t.jsx)(l.Z,{className:"cs-newsletter_text",children:c})]})]})}var o=c(6428);function TextWidget(e){let{logoSrc:s,logoAlt:c,text:n}=e;return(0,t.jsxs)(l.Z,{className:"cs-text_widget",children:[(0,t.jsx)("img",{src:s,alt:c}),(0,t.jsx)("p",{children:n})]})}function Footer(e){let{copyrightText:s,logoSrc:c,logoAlt:n,text:r}=e;return(0,t.jsxs)("footer",{className:"cs-fooer",children:[(0,t.jsx)(l.Z,{className:"cs-fooer_main",children:(0,t.jsx)(l.Z,{className:"container",children:(0,t.jsxs)(l.Z,{className:"row",children:[(0,t.jsx)(l.Z,{className:"col-lg-3 col-sm-6",children:(0,t.jsxs)(l.Z,{className:"cs-footer_item",children:[(0,t.jsx)(TextWidget,{logoSrc:"/images/logo.svg",logoAlt:"Logo",text:" Elevating Businesses, Fueling Progress.. Driving Corporate Growth Forward with technology "}),(0,t.jsx)(o.Z,{})]})}),(0,t.jsx)(l.Z,{className:"col-lg-3 col-sm-6",children:(0,t.jsx)(l.Z,{className:"cs-footer_item",children:(0,t.jsx)(MenuWidget,{menuItems:[{title:"Web Development",href:"/service/service-details"},{title:"Mobile Apps",href:"/service/service-details"},{title:"UI/UX",href:"/service/service-details"},{title:"Conversion Rate Optimisation",href:"/service/service-details"}],menuHeading:"Services"})})}),(0,t.jsx)(l.Z,{className:"col-lg-3 col-sm-6",children:(0,t.jsx)(l.Z,{className:"cs-footer_item",children:(0,t.jsx)(i.Z,{title:"Contact Us"})})}),(0,t.jsx)(l.Z,{className:"col-lg-3 col-sm-6",children:(0,t.jsx)(l.Z,{className:"cs-footer_item",children:(0,t.jsx)(Newsletter,{title:"Subscribe",subtitle:"Subscribe to the exclusive newsletters on CRO & stay updated on dopest tech!",placeholder:"example@gmail.com"})})})]})})}),(0,t.jsx)(l.Z,{className:"container",children:(0,t.jsxs)(l.Z,{className:"cs-bottom_footer",children:[(0,t.jsx)(l.Z,{className:"cs-bottom_footer_left",children:(0,t.jsx)(l.Z,{className:"cs-copyright",children:"Copyright \xa9 2023 Tebble.in"})}),(0,t.jsx)(l.Z,{className:"cs-bottom_footer_center",children:(0,t.jsx)(l.Z,{className:"custom-footer-text",children:"Built using NextJs & Sveltekit"})}),(0,t.jsx)(l.Z,{className:"cs-bottom_footer_right",children:(0,t.jsx)(MenuWidget,{menuItems:[{title:"Terms of Use",href:"/"},{title:"Privacy Policy",href:"/"}],variant:" cs-style2"})})]})})]})}function Header(e){let{variant:s}=e,[c,i]=(0,n.useState)(!1),[r,o]=(0,n.useState)(!1),[d,h]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>0?i(!0):i(!1)})},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("header",{className:"cs-site_header cs-style1 text-uppercase ".concat(s||""," cs-sticky_header ").concat(c?"cs-sticky_header_active":""),children:(0,t.jsx)(l.Z,{className:"cs-main_header",children:(0,t.jsx)(l.Z,{className:"container",children:(0,t.jsxs)(l.Z,{className:"cs-main_header_in",children:[(0,t.jsx)(l.Z,{className:"cs-main_header_left",children:(0,t.jsx)(a(),{className:"cs-site_branding",href:"/",children:(0,t.jsx)("img",{src:"/images/logo.svg",alt:"Logo"})})}),(0,t.jsx)(l.Z,{className:"cs-main_header_center",children:(0,t.jsxs)(l.Z,{className:"cs-nav cs-primary_font cs-medium",children:[(0,t.jsxs)("ul",{className:"cs-nav_list",style:{display:"".concat(d?"block":"none")},children:[(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/",onClick:()=>h(!1),children:"AT TEBBLE"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"about",onClick:()=>h(!1),children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/service",onClick:()=>h(!1),children:"PORTFOLIO"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/blog",onClick:()=>h(!1),children:"Blog"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/",onClick:()=>h(!1),children:"Contact"})})]}),(0,t.jsx)("span",{className:d?"cs-munu_toggle cs-toggle_active":"cs-munu_toggle",onClick:()=>h(!d),children:(0,t.jsx)("span",{})})]})}),(0,t.jsx)("span",{class:"btn custom-btn d-lg-block",style:{display:"none"},children:"For Entrepreneurs"})]})})})})})}var d=c(5152),h=c.n(d);let m=h()(()=>c.e(531).then(c.bind(c,8531)),{loadableGenerated:{webpack:()=>[8531]},ssr:!1});function Layout(e){let{headerVariant:s,children:c}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Header,{variant:s}),(0,t.jsx)(m,{}),c,(0,t.jsx)(Footer,{})]})}},2314:function(e,s,c){c.d(s,{Z:function(){return ContactInfoWidget}});var t=c(5893);c(7294);var n=c(1954);function ContactInfoWidget(e){let{withIcon:s,title:c}=e;return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("h2",{className:"cs-widget_title",children:c}),(0,t.jsxs)("ul",{className:"cs-menu_widget cs-style1 cs-mp0",children:[(0,t.jsxs)("li",{children:[s?(0,t.jsx)("span",{className:"cs-accent_color",children:(0,t.jsx)(n.JO,{icon:"material-symbols:add-call-rounded"})}):"","+91 8788706228"]}),(0,t.jsxs)("li",{children:[s?(0,t.jsx)("span",{className:"cs-accent_color",children:(0,t.jsx)(n.JO,{icon:"mdi:envelope"})}):"","siddhant@tebble.in"]}),(0,t.jsxs)("li",{children:[s?(0,t.jsx)("span",{className:"cs-accent_color",children:(0,t.jsx)(n.JO,{icon:"mdi:map-marker"})}):"","Sanewadi Aundh ",(0,t.jsx)("br",{}),"Pune, Maharashtra."]})]})]})}},6428:function(e,s,c){c.d(s,{Z:function(){return SocialWidget}});var t=c(5893),n=c(1954),l=c(6117),i=c(1664),r=c.n(i);function SocialWidget(){return(0,t.jsxs)(l.Z,{className:"cs-social_btns cs-style1",children:[(0,t.jsx)(r(),{href:"/",className:"cs-center",children:(0,t.jsx)(n.JO,{icon:"fa6-brands:linkedin-in"})}),(0,t.jsx)(r(),{href:"/",className:"cs-center",children:(0,t.jsx)(n.JO,{icon:"fa6-brands:twitter"})}),(0,t.jsx)(r(),{href:"/",className:"cs-center",children:(0,t.jsx)(n.JO,{icon:"fa6-brands:youtube"})}),(0,t.jsx)(r(),{href:"/",className:"cs-center",children:(0,t.jsx)(n.JO,{icon:"fa6-brands:slack"})})]})}}}]);