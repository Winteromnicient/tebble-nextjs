"use strict";exports.id=901,exports.ids=[901],exports.modules={901:(i,s,e)=>{e.d(s,{Z:()=>Accordion});var t=e(997),o=e(6689),a=e(6117);function Accordion(){let[i,s]=(0,o.useState)(0),handelToggle=e=>{if(i===e)return s(null);s(e)};return t.jsx(a.Z,{className:"cs-accordians cs-style1",children:[{question:"Do you design illustration website?",answer:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."},{question:"Do you provide design source file after finish work?",answer:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."},{question:"How to provide project details and payments?",answer:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."},{question:"Can you tell me please how to contact for project?",answer:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."},{question:"Do you makes custom logo, icon etc?",answer:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui."}].map((s,e)=>(0,t.jsxs)(a.Z,{className:`cs-accordian ${i===e?"active":""}`,children:[(0,t.jsxs)(a.Z,{className:"cs-accordian_head",onClick:()=>handelToggle(e),children:[t.jsx("h2",{className:"cs-accordian_title",children:s.question}),t.jsx("span",{className:"cs-accordian_toggle cs-accent_color",children:t.jsx("svg",{width:15,height:8,viewBox:"0 0 15 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0 0L7.5 7.5L15 0H0Z",fill:"currentColor"})})})]}),t.jsx(a.Z,{className:"cs-accordian_body",children:t.jsx(a.Z,{className:"cs-accordian_body_in",children:s.answer})})]},e))})}}};