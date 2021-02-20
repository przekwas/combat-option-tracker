(this["webpackJsonpcombat-option-tracker"]=this["webpackJsonpcombat-option-tracker"]||[]).push([[0],{19:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),d=(n(19),n(4)),s=n(5),o={list:[{id:1,name:"Action",checked:!1},{id:2,name:"Movement",checked:!1},{id:3,name:"Reaction",checked:!1},{id:4,name:"Bonus Action",checked:!1}]},l=Object(s.b)({name:"options",initialState:o,reducers:{toggle:function(e,t){e.list[t.payload.idx].checked=!e.list[t.payload.idx].checked},newTurn:function(){return o}}}),b=l.actions,u=b.toggle,j=b.newTurn,x=l.reducer,m=n(2),h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.options.list}));return Object(m.jsxs)(m.Fragment,{children:[t.map((function(t,n){return Object(m.jsx)("div",{className:"flex items-center justify-between pb-8 text-2xl tracking-wider",onClick:function(){return e(u({idx:n}))},children:Object(m.jsx)("span",{className:"".concat(t.checked?"line-through":""),children:t.name})},"option-key-".concat(t.id))})),Object(m.jsx)("div",{className:"flex justify-end mt-4",children:Object(m.jsx)("button",{className:"px-4 py-2 bg-red-500 border border-red-900 rounded-lg text-red-50",onClick:function(){return e(j())},children:"new turn"})})]})},p=n(14),f={list:[]};var O=Object(s.b)({name:"order",initialState:f,reducers:{add:function(e,t){e.list.push({id:Date.now().toString(),dead:!1,name:t.payload.name})},move:function(e,t){!function(e,t,n){var c=e[t];e.splice(t,1),e.splice(n,0,c)}(e.list,t.payload.from,t.payload.to)},toggleStatus:function(e,t){e.list[t.payload.idx].dead=!e.list[t.payload.idx].dead},remove:function(e,t){e.list.splice(t.payload.idx,1)},reset:function(){return f}}}),g=O.actions,y=g.add,k=g.move,v=g.toggleStatus,w=g.remove,N=g.reset,C=O.reducer,F=n(12),S=n(11),D=function(e){var t=e.trackedPc,n=e.idx,c=e.length,r=Object(d.b)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"flex items-center justify-between pb-12 font-semibold",children:[Object(m.jsx)("div",{className:"w-1/3 break-words",children:t.dead?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{className:"text-2xl font-bold text-red-500",children:"DEAD"})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("span",{className:"text-2xl",children:t.name})})}),Object(m.jsxs)("div",{className:"flex items-center justify-end w-2/3",children:[Object(m.jsx)("button",{className:"pr-6 text-6xl text-red-900",onClick:function(){return r(v({idx:n}))},children:Object(m.jsx)(S.b,{})}),Object(m.jsx)("button",{className:"pr-6 text-6xl ".concat(0===n?"text-gray-500":"text-purple-500"),disabled:0===n,onClick:function(){return r(k({from:n,to:n-1}))},children:Object(m.jsx)(F.b,{})}),Object(m.jsx)("button",{className:"pr-6 text-6xl ".concat(n===c-1?"text-gray-500":"text-indigo-500"),disabled:n===c-1,onClick:function(){return r(k({from:n,to:n+1}))},children:Object(m.jsx)(F.a,{})}),Object(m.jsx)("button",{onClick:function(){return r(w({idx:n}))},className:"text-6xl text-pink-500",children:Object(m.jsx)(S.a,{})})]})]})})},P=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.tracker.list})),n=Object(c.useState)(""),r=Object(p.a)(n,2),i=r[0],a=r[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"flex items-center pb-8 -mx-2 justify-evenly",children:[Object(m.jsx)("input",{placeholder:"name of tracked creature ...",className:"w-3/4 px-2 py-4 mx-2 border border-gray-200 rounded-lg w-/3",type:"text",value:i,onChange:function(e){return a(e.target.value)}}),Object(m.jsx)("button",{className:"w-1/4 px-4 py-2 mx-2 bg-blue-500 border border-blue-900 rounded-lg text-blue-50",onClick:function(){e(y({name:i})),a("")},children:"add"})]}),Object(m.jsx)("div",{children:t.map((function(e,n){return Object(m.jsx)(D,{idx:n,length:t.length,trackedPc:e},"tracker-id-".concat(e.id))}))}),0!==t.length&&Object(m.jsx)("div",{className:"flex justify-end",children:Object(m.jsx)("button",{onClick:function(){return e(N())},className:"px-4 py-2 bg-red-500 border border-red-900 rounded-lg text-red-50",children:"reset"})})]})},T=function(){return Object(m.jsxs)("div",{className:"flex items-start justify-between p-4 -mx-4",children:[Object(m.jsx)("div",{className:"w-1/3 px-8 py-6 mx-4 bg-white border-b-4 border-gray-500 rounded-lg shadow",children:Object(m.jsx)(h,{})}),Object(m.jsx)("div",{className:"w-2/3 px-8 py-6 mx-4 bg-white border-b-4 border-gray-500 rounded-lg shadow",children:Object(m.jsx)(P,{})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},B=n(3),E=Object(B.c)({options:x,tracker:C}),I=Object(s.a)({reducer:E});a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(d.a,{store:I,children:Object(m.jsx)(T,{})})}),document.getElementById("root")),A()}},[[27,1,2]]]);
//# sourceMappingURL=main.65b48edb.chunk.js.map