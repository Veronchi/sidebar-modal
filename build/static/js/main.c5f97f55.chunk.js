(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.2bb7da65.svg"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(11),a(1)),i=a(2),m=l.a.createContext(),u=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(i.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),d=s[0],E=s[1];return l.a.createElement(m.Provider,{value:{isOpenModal:c,isOpenSideBar:d,openModal:function(){o(!0)},closeModal:function(){o(!1)},openSidebar:function(){E(!0)},closeSidebar:function(){E(!1)}}},t)},s=function(){return Object(n.useContext)(m)},d=function(){var e=s(),t=e.isOpenModal,a=e.closeModal;return l.a.createElement("div",{className:t?"modal-overlay show-modal":"modal-overlay"},l.a.createElement("div",{className:"modal-container"},l.a.createElement("h3",null,"modal content"),l.a.createElement("button",{className:"close-modal-btn",onClick:a},l.a.createElement(o.i,null))))},E=a(5),b=a.n(E),p=[{id:1,url:"/",text:"home",icon:l.a.createElement(o.f,null)},{id:2,url:"/team",text:"team",icon:l.a.createElement(o.k,null)},{id:3,url:"/projects",text:"projects",icon:l.a.createElement(o.e,null)},{id:4,url:"/calendar",text:"calendar",icon:l.a.createElement(o.c,null)},{id:5,url:"/documents",text:"documents",icon:l.a.createElement(o.l,null)}],w=[{id:1,url:"https://www.twitter.com",icon:l.a.createElement(o.d,null)},{id:2,url:"https://www.twitter.com",icon:l.a.createElement(o.j,null)},{id:3,url:"https://www.twitter.com",icon:l.a.createElement(o.g,null)},{id:4,url:"https://www.twitter.com",icon:l.a.createElement(o.b,null)},{id:5,url:"https://www.twitter.com",icon:l.a.createElement(o.h,null)}],f=function(){var e=s(),t=e.isOpenSideBar,a=e.closeSidebar;return l.a.createElement("aside",{className:t?"sidebar show-sidebar":"sidebar"},l.a.createElement("div",{className:"sidebar-header"},l.a.createElement("img",{src:b.a,className:"logo",alt:"logo"}),l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(o.i,null))),l.a.createElement("ul",{className:"links"},p.map((function(e){var t=e.id,a=e.url,n=e.text,r=e.icon;return l.a.createElement("li",{key:t},l.a.createElement("a",{href:a},r,n))}))),l.a.createElement("ul",{className:"social-icons"},w.map((function(e){var t=e.id,a=e.url,n=e.icon;return l.a.createElement("li",{key:t},l.a.createElement("a",{href:a},n))}))))},h=function(){var e=s(),t=e.openModal,a=e.openSidebar;return l.a.createElement("main",null,l.a.createElement("button",{className:"sidebar-toggle",onClick:a},l.a.createElement(o.a,null)),l.a.createElement("button",{className:"btn",onClick:t},"show modal"))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(d,null),l.a.createElement(f,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null,l.a.createElement(v,null))),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.c5f97f55.chunk.js.map