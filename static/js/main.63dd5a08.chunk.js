(this.webpackJsonpfcc2=this.webpackJsonpfcc2||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(8),s=c.n(a),i=(c(25),c(15)),o=c.n(i),u=c(4),l=c(19),j=c(2),b=(c(27),c(28),c(1)),f=function(e){var t=e.currentPage;return Object(b.jsxs)("div",{className:"overlay",children:[Object(b.jsx)("span",{}),t>0&&Object(b.jsxs)("i",{children:["\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",t,"..."]})]})},O=c(20);var p=function(){var e="https://www.codewars.com/api/v1/users/".concat("catchaser","/code-challenges/completed?page="),t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(-1),i=Object(j.a)(s,2),p=i[0],d=i[1],h=Object(n.useState)(null),g=Object(j.a)(h,2),v=g[0],m=g[1],w=Object(n.useState)(""),x=Object(j.a)(w,2),_=x[0],S=x[1],N=Object(n.useState)([]),k=Object(j.a)(N,2),y=k[0],C=k[1],L=Object(n.useState)([]),T=Object(j.a)(L,2),E=T[0],F=T[1],P=Object(n.useState)(!1),B=Object(j.a)(P,2),I=B[0],R=B[1],W=Object(n.useState)(0),q=Object(j.a)(W,2),J=q[0],D=q[1],H=Object(n.useRef)(),M=Object(n.useRef)(),Y=Object(n.useRef)(),z=Object(n.useRef)(),A=function(){var t=Object(l.a)(o.a.mark((function t(){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(p>=v)){t.next=2;break}return t.abrupt("return");case 2:return a(!0),t.next=5,fetch("".concat(e).concat(p));case 5:return c=t.sent,t.next=8,c.json();case 8:n=t.sent,v||m(n.totalPages),setTimeout((function(){a(!1),C([].concat(Object(u.a)(y),Object(u.a)(n.data))),F([].concat(Object(u.a)(E),Object(u.a)(n.data)))}),1e3);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){O.animateScroll.scrollToTop({duration:1e3,delay:0,smooth:!0,offset:0})};return Object(n.useEffect)((function(){I||A().then()}),[p]),Object(n.useEffect)((function(){Y.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d((function(e){return e+1}))})),Y.current.observe(M.current)}),[]),Object(n.useEffect)((function(){window.onscroll=function(){D(window.pageYOffset)}}),[J]),Object(n.useEffect)((function(){H.current.offsetHeight<window.screen.height?z.current.classList.add("invisible"):z.current.classList.remove("invisible")}),[_]),Object(b.jsxs)(b.Fragment,{children:[r&&Object(b.jsx)(f,{currentPage:p}),Object(b.jsxs)("div",{className:"wrapper",ref:H,children:[!r&&Object(b.jsx)("p",{children:'\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u0441 "\u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439" (\u0443\u0441\u043b\u043e\u0432\u043d\u043e) \u043b\u0435\u043d\u0442\u043e\u0439 - \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043f\u043e \u043c\u0435\u0440\u0435 \u043f\u0440\u043e\u043c\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u043a \u043d\u0438\u0437\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.'}),Object(b.jsxs)("p",{className:I?"wrapper__alert danger visible":"wrapper__alert",children:["\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441 \u043f\u043e\u0438\u0441\u043a\u043e\u043c.",Object(b.jsx)("br",{})," \u041f\u0435\u0440\u0435\u0434 \u043f\u0440\u043e\u043c\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u043d\u0438\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430."]}),!r&&Object(b.jsx)("input",{className:J>100&&!I?"wrapper__query floating":"wrapper__query",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",type:"text",onChange:function(e){e.target.value.length||C(E),G(),S(e.target.value),R(e.target.value.length>0),C(E.filter((function(t){return t.name.toLowerCase().startsWith(e.target.value.toLowerCase())})))}}),y.length?Object(b.jsx)("div",{className:"listWrapper",children:y.map((function(e,t){return Object(b.jsxs)("div",{className:"listWrapper__item",children:[t+1,". ",e.name]},e.id)}))}):r?null:"\u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0434\u0430\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432.",Object(b.jsx)("div",{ref:M,className:I?"wrapper__bottomBlock inactive":"wrapper__bottomBlock"}),p>=v&&y.length>0&&Object(b.jsx)("p",{className:"wrapper__alert success visible",children:"\u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b."}),!r&&Object(b.jsx)("span",{ref:z,className:"scrollTop",onClick:G,children:"scroll"})]})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),d()}},[[40,1,2]]]);
//# sourceMappingURL=main.63dd5a08.chunk.js.map