(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(10),s=a.n(r),i=a(2),l=(a(19),a(0)),o=function(){return Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)("a",{href:"#top",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#top",children:"Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#top",children:"Comics"})})]})})]})},j=a.p+"static/media/mjolnir.61f31e18.png",u=(a(21),a(3)),b=a.n(u),m=a(7),d=a(6),h=function e(){var t=this;Object(d.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=f6bc8b1e66e4f7d319f089c8b5146efe",this._baseOffset=210,this.getResource=function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(m.a)(b.a.mark((function e(){var a,c,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"/characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(m.a)(b.a.mark((function e(a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"/characters/").concat(a,"?&").concat(t._apiKey));case 2:return c=e.sent,e.abrupt("return",t._transformCharacter(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,180),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},O=function(){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},f=a.p+"static/media/error.42292aa1.gif",x=function(){return Object(l.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:f,alt:"error"})},p=function(e){var t=e.char,a=t.name,c=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?{objectFit:"contain"}:null;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{style:i,src:n,alt:"Random character",className:"randomchar__img"}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:a}),Object(l.jsx)("p",{className:"randomchar__descr",children:c}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},v=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),s=Object(i.a)(r,2),o=s[0],u=s[1],b=Object(c.useState)(!1),m=Object(i.a)(b,2),d=m[0],f=m[1],v=new h;Object(c.useEffect)((function(){y();var e=setInterval(y,6e4);return function(){clearInterval(e)}}),[]);var _=function(e){n(e),u(!1)},g=function(){u(!1),f(!0)};function y(){var e=Math.floor(400*Math.random()+1011e3);u(!0),f(!1),v.getCharacter(e).then(_).catch(g)}var N=d?Object(l.jsx)(x,{}):null,k=o?Object(l.jsx)(O,{}):null,C=o||d?null:Object(l.jsx)(p,{char:a});return Object(l.jsxs)("div",{className:"randomchar",children:[k,N,C,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:y,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})},_=a(9),g=a(11),y=a.n(g),N=(a(23),function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!0),o=Object(i.a)(s,2),j=o[0],u=o[1],b=Object(c.useState)(!1),m=Object(i.a)(b,2),d=m[0],f=m[1],p=Object(c.useState)(!1),v=Object(i.a)(p,2),g=v[0],y=v[1],N=Object(c.useState)(210),k=Object(i.a)(N,2),C=k[0],w=k[1],T=Object(c.useState)(!1),S=Object(i.a)(T,2),R=S[0],E=S[1],F=new h;Object(c.useEffect)((function(){I()}),[]);var I=function(e){B(),F.getAllCharacters(e).then(A).catch(K)},M=Object(c.useRef)([]),B=function(){y(!0)},A=function(e){var t=!1;e.length<9&&(t=!0),r([].concat(Object(_.a)(n),Object(_.a)(e))),u(!1),y(!1),w(C+9),E(t)},K=function(){u(!1),f(!0)};var L=function(t){var a=t.map((function(t,a){var c={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(c={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",ref:function(e){return M.current[a]=e},tabIndex:0,onClick:function(){var c;e.onCharSelected(t.id),c=a,M.current.forEach((function(e){e.classList.remove("char__item_selected")})),M.current[c].classList.add("char__item_selected"),M.current[c].focus()},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:c}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:a})}(n),D=d?Object(l.jsx)(x,{}):null,J=j?Object(l.jsx)(O,{}):null,W=j||d?null:L;return Object(l.jsxs)("div",{className:"char__list",children:[J,D,W,Object(l.jsx)("button",{className:"button button__main button__long",disabled:g,style:{display:R?"none":"block"},onClick:function(){return I(C)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})});N.propsType={onCharSelected:y.a.func.isRequired};var k=N,C=(a(26),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=(a(27),void 0),T=function(e){var t=e.char,a=t.name,c=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?{objectFit:"contain"}:null;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{style:o,src:n,alt:a}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:a}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:c}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"This character has no comics.",i.slice(0,10).map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},S=function(e){var t=Object(c.useState)(null),a=Object(i.a)(t,2),n=a[0],r=(a[1],Object(c.useState)(!1)),s=Object(i.a)(r,2),o=s[0],j=s[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),m=b[0],d=b[1],f=new h;Object(c.useEffect)((function(){p()}),[e.charId]);var p=function(){var t=e.charId;t&&(v(),f.getCharacter(t).then(w.onCharLoaded).catch(w.onError))},v=function(){j(!0),d(!1)},_=n||o||m?null:Object(l.jsx)(C,{}),g=m?Object(l.jsx)(x,{}):null,y=o?Object(l.jsx)(O,{}):null,N=o||m||!n?null:Object(l.jsx)(T,{char:n});return Object(l.jsxs)("div",{className:"char__info",children:[_,g,y,N]})},R=a(12),E=a(14),F=a(13),I=function(e){Object(E.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(R.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(x,{}):this.props.children}}]),a}(c.Component),M=a.p+"static/media/vision.067d4ae1.png",B=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(I,{children:Object(l.jsx)(v,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(I,{children:Object(l.jsx)(k,{onCharSelected:function(e){n(e)}})}),Object(l.jsx)(I,{children:Object(l.jsx)(S,{charId:a})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:M,alt:"vision"})]})]})};a(28);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a20b2773.chunk.js.map