(this["webpackJsonparistocrats-player"]=this["webpackJsonparistocrats-player"]||[]).push([[0],{19:function(t,e,c){},38:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var a=c(2),n=c.n(a),r=c(13),s=c.n(r),i=(c(19),c(3)),o=c(14),l=c.n(o),u=(c(38),c(0));var d=function(){var t,e,c=Object(a.useState)(1),n=Object(i.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(!1),d=Object(i.a)(o,2),j=d[0],p=d[1],m=Object(a.useState)(0),b=Object(i.a)(m,2),h=b[0],x=b[1],O=Object(a.useState)(""),v=Object(i.a)(O,2),f=v[0],g=v[1];Object(a.useEffect)((function(){l.a.get("http://localhost:5000/current-track").then((function(t){g(t.data.Playlist)}))}),[]);var N=Object(a.useRef)();return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"card",style:{width:"18rem",margin:"auto",boxShadow:"4px 3px 8px 1px #969696"},children:[Object(u.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig14.deviantart.net%2F5162%2Ff%2F2014%2F153%2F9%2Fe%2Fno_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg&f=1&nofb=1",className:"card-img-top",alt:"..."}),Object(u.jsx)("a",{className:"dot",title:"Play/Pause",onClick:function(){var t=N.current;t.volume=r,j||(p(!0),t.play()),j&&(p(!1),t.pause())},children:j?"\u275a\u275a":"\u25b6"}),Object(u.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)("div",{className:"slide-container",children:Object(u.jsx)("input",{type:"range",name:"volume",className:"slider",min:"0",max:"1",step:"0.01",onChange:function(t){s(t.target.value),N.current.volume=r}})})}),Object(u.jsx)("li",{className:"list-group-item",children:function(t){if(!t)return"00:00";var e=t,c=e/3600;e%=3600;var a=parseInt(e/60);e%=60;var n=parseInt(e);return n<10&&(n="0".concat(n)),a<10&&(a="0".concat(a)),parseInt(c,10)>0?"".concat(parseInt(c,10),":").concat(a,":").concat(n):0===a?"00:".concat(n):"".concat(a,":").concat(n)}(h)})]}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("audio",{ref:N,onTimeUpdate:function(t){var e=t.currentTarget.currentTime;x(e.toFixed(2))},src:"http://air.aristocrats.fm:8000/live2"}),Object(u.jsx)("p",{className:"card-text",style:{fontWeight:"600",margin:0},children:null===(t=f.song)||void 0===t?void 0:t.title}),Object(u.jsx)("p",{className:"card-text",style:{margin:0},children:null===(e=f.artist)||void 0===e?void 0:e.title})]})]})})})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a7171c12.chunk.js.map