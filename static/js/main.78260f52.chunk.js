(this["webpackJsonpredux-persist"]=this["webpackJsonpredux-persist"]||[]).push([[0],{87:function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"actionAddCard",(function(){return U})),r.d(a,"actionRemoveCard",(function(){return Y}));var n={};r.r(n),r.d(n,"actionSnackBar",(function(){return G}));var c=r(0),i=r(14),o=r.n(i),s=r(17),d=r(23),l=r(46),b=r(56),u=r.n(b),j=r(10),p="ADD_CARD",O="REMOVE_CARD",x="SHOW_SNACKBAR",m=[];var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(r){case p:var n=e.find((function(e){return e.id===a.card.id}));return n?e:[].concat(Object(j.a)(e),[a.card]);case O:var c=e.filter((function(e){return e.id!==a.cardId}));return c;default:return e}},h=r(4),g={open:!1,message:""};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(r){case x:return Object(h.a)({},a);default:return e}},v=Object(d.a)({myCards:f,snackBar:y}),C={key:"root",storage:u.a},k=Object(d.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=Object(l.a)(C,v),N=Object(d.c)(w,k),S=Object(l.b)(N),I=r(58),E=r(31),_=r(8),B=r(108),D=r(110),F=r(111),R=Object.freeze({myfavorites:"My favorites",back:"Back",gitHub:"GitHub"}),A=r(65),T=Object(A.a)({palette:{primary:{main:"#80BFFF",secondary:"#FF704D",card:"#E4EFF2"},background:{default:"#D8E5E8"}}});T.wrapperCard={margin:"32px",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",containerImage:{display:"flex",flexDirection:"column",textAlign:"center",boxShadow:"1px 1px 3px 1px grey",borderRadius:"8px",width:"250px",margin:"8px",transition:"transform .2s","&:hover":{transform:"scale(1.1)"},background:T.palette.primary.card,padding:"4px"},image:{alignSelf:"center",width:"130px",display:"flex",flexDirection:"column",margin:"8px"}},T.button={fontWeight:600,fontSize:16,margin:"16px",padding:"8px",textDecoration:"none",borderRadius:"8px",background:T.palette.primary.main,color:"white"},T.title={display:"flex",justifyContent:"center",textAlign:"center",marginBottom:"16px",fontSize:"32px",fontWeight:"bold"},T.snackbar={justifyContent:"center",fontWeight:"bold",success:{backgroundColor:"#33CC33"}};var z=T,W=r(43),H=r.n(W),P=r(61),X=r(20),M=r(112),V=r(109),J=r(62),L=r.n(J);function U(e){return{type:p,payload:e}}function Y(e){return{type:O,payload:e}}function G(e){var t={open:e.open,message:e.card&&"You have added card number ".concat(e.card.id)};return{type:x,payload:t}}var K=a,q=n,Q=Object(B.a)((function(e){return{wrapperCard:Object(h.a)({},e.wrapperCard),containerImage:Object(h.a)({},e.wrapperCard.containerImage),image:Object(h.a)({},e.wrapperCard.image),pagination:{display:"flex",justifyContent:"center",marginTop:"32px",width:"100%"},progress:{position:"absolute",left:"50%",top:"50%",zIndex:"999"},likeCardIcon:{marginTop:"8px",width:"40px",height:"40px",borderRadius:"32px",alignSelf:"center",cursor:"pointer",border:"none"},errorFetch:Object(h.a)(Object(h.a)({},e.title),{},{color:e.palette.primary.secondary})}})),Z=r(2),$=Object(s.b)(null,Object(h.a)(Object(h.a)({},K),q))((function(e){var t=e.actionAddCard,r=e.actionSnackBar,a=Q(),n=Object(c.useState)([]),i=Object(X.a)(n,2),o=i[0],s=i[1],d=Object(c.useState)(1),l=Object(X.a)(d,2),b=l[0],u=l[1],j=Object(c.useState)(!0),p=Object(X.a)(j,2),O=p[0],x=p[1],m=Object(c.useState)(!1),f=Object(X.a)(m,2),h=f[0],g=f[1];Object(c.useEffect)((function(){x(!0),function(){var e=Object(P.a)(H.a.mark((function e(){var t,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/photos?_page=".concat(b));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,s(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g(!0);case 13:x(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[b]);return h?Object(Z.jsx)("title",{className:a.errorFetch,children:"Something went wrong while fetching API"}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:a.progress,children:O&&Object(Z.jsx)(V.a,{color:"primary"})}),Object(Z.jsxs)("div",{className:a.wrapperCard,children:[o.map((function(e){return Object(Z.jsxs)("div",{className:a.containerImage,children:[Object(Z.jsx)("button",{className:a.likeCardIcon,onClick:function(){return function(e){t({card:e}),r({open:!0,card:e})}(e)},children:Object(Z.jsx)(L.a,{color:"primary"})}),Object(Z.jsx)("img",{className:a.image,src:e.url,alt:""}),Object(Z.jsx)("span",{children:e.title})]},e.id)})),!O&&Object(Z.jsx)("div",{className:a.pagination,children:Object(Z.jsx)(M.a,{count:500,page:b,hideNextButton:!0,hidePrevButton:!0,onChange:function(e,t){return u(t)},variant:"outlined"})})]})]})})),ee=Object(B.a)((function(e){return{title:Object(h.a)({},e.title)}})),te=function(){var e=ee();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("title",{className:e.title,children:"All favorites"}),Object(Z.jsx)($,{})]})},re=r(64),ae=r.n(re),ne=Object(B.a)((function(e){return{wrapperCard:Object(h.a)({},e.wrapperCard),containerImage:Object(h.a)({},e.wrapperCard.containerImage),image:Object(h.a)({},e.wrapperCard.image),pagination:{display:"flex",justifyContent:"center",marginTop:"32px",width:"100%"},progress:{position:"absolute",left:"50%",top:"50%",zIndex:"999"},likeCardIcon:{marginTop:"8px",width:"40px",height:"40px",borderRadius:"32px",alignSelf:"center",cursor:"pointer",border:"none"},buttons:Object(h.a)(Object(h.a)({},e.button),{},{margin:"auto",display:"block",textAlign:"center",width:"150px"})}})),ce=Object(s.b)((function(e){return{myCards:e.myCards}}),Object(h.a)({},K))((function(e){var t=e.myCards,r=e.actionRemoveCard,a=ne();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:a.wrapperCard,children:t.map((function(e){return Object(Z.jsxs)("div",{className:a.containerImage,children:[Object(Z.jsx)("button",{className:a.likeCardIcon,onClick:function(){return function(e){r({cardId:e.id})}(e)},children:Object(Z.jsx)(ae.a,{color:"secondary"})}),Object(Z.jsx)("img",{className:a.image,src:e.url,alt:""}),Object(Z.jsx)("span",{children:e.title})]},e.id)}))}),Object(Z.jsx)(E.c,{className:a.buttons,to:"/",children:R.back})]})})),ie=Object(B.a)((function(e){return{title:Object(h.a)({},e.title)}})),oe=Object(s.b)((function(e){return{myCards:e.myCards}}),null)((function(e){var t=e.myCards,r=ie();return Object(Z.jsxs)(Z.Fragment,{children:[0===t.length?Object(Z.jsx)("title",{className:r.title,children:'You haven\u2019t cards, please click the button "back"'}):Object(Z.jsx)("title",{className:r.title,children:"My favorites"}),Object(Z.jsx)(ce,{})]})})),se=r(113),de=Object(B.a)((function(e){return{snackbar:Object(h.a)(Object(h.a)({},e.snackbar),e.snackbar.success),snackbarError:Object(h.a)(Object(h.a)({},e.snackbar),e.snackbar.error)}})),le=Object(s.b)((function(e){return{snackBar:e.snackBar}}),Object(h.a)({},q))((function(e){var t=e.snackBar,r=e.actionSnackBar,a=de();return Object(Z.jsx)(se.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t.open,onClose:function(){r({open:!1})},message:t.message,ContentProps:{className:t.error?a.snackbarError:a.snackbar}})})),be=Object(B.a)((function(){return{root:{background:z.palette.background},header:{display:"flex",justifyContent:"center",flexWrap:"wrap"},buttons:Object(h.a)({},z.button)}})),ue=Object(s.b)((function(e){return{myCards:e.myCards}}),null)((function(e){var t=e.myCards,r=be();return Object(Z.jsx)(E.b,{basename:"/",children:Object(Z.jsx)(E.a,{children:Object(Z.jsxs)(D.a,{theme:z,children:[Object(Z.jsx)(F.a,{}),Object(Z.jsx)(le,{}),Object(Z.jsxs)("div",{className:r.root,children:[Object(Z.jsxs)("header",{className:r.header,children:[t.length>0&&Object(Z.jsx)(E.c,{className:r.buttons,to:"/my-favorites",children:R.myfavorites}),Object(Z.jsx)("a",{className:r.buttons,href:"https://l87r78.github.io/PC_Store/",rel:"noreferrer",target:"_blank",children:R.gitHub})]}),"test HasRouter"]}),Object(Z.jsxs)(_.c,{children:[Object(Z.jsx)(_.a,{exact:!0,path:"/",component:te}),Object(Z.jsx)(_.a,{path:"/my-favorites",component:oe})]})]})})})}));o.a.render(Object(Z.jsx)(s.a,{store:N,children:Object(Z.jsx)(I.a,{loading:null,persistor:S,children:Object(Z.jsx)(ue,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.78260f52.chunk.js.map