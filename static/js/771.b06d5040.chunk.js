"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[771],{1454:function(n,e,t){t.d(e,{a:function(){return s}});var r,a=t(8881),i=t(168),o=t(5867).ZP.div(r||(r=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n"]))),c=t(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#306cce","#72a1ed"]})})}},5771:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,o,c,s,u,p,d,l,f,x,h,g=t(5861),v=t(9439),b=t(7757),m=t.n(b),w=t(2791),Z=t(7689),k=t(1087),j=t(9545),y=t(168),_=t(5867),P=_.ZP.div(r||(r=(0,y.Z)(["\n    padding: 20px 40px;\n"]))),U=_.ZP.button(a||(a=(0,y.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 14px;\nwidth: 100px;\nheight: 30px;\nborder: none;\noutline: none;\ncolor: #fff;\nbackground: #111;\ncursor: pointer;\nposition: relative;\nz-index: 0;\nborder-radius: 10px;\n\n&::before {\n    content: '';\n    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\n    position: absolute;\n    top: -2px;\n    left:-2px;\n    background-size: 400%;\n    z-index: -1;\n    filter: blur(5px);\n    width: calc(100% + 4px);\n    height: calc(100% + 4px);\n    animation: glowing 20s linear infinite;\n    opacity: 0;\n    transition: opacity .3s ease-in-out;\n    border-radius: 10px;\n}\n\n&:active{\n    color: #000;\n}\n\n&:active::after {\n background: transparent;\n}\n\n&:hover::before {\n    opacity: 1;\n}\n\n&::after {\n      z-index: -1;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #111;\n    left: 0;\n    top: 0;\n    border-radius: 10px;  \n}\n\n@keyframes glowing {\n        0% { background-position: 0 0; }\n    50% { background-position: 400% 0; }\n    100% { background-position: 0 0; }\n}\n"]))),z=t(2134),S=t(1454),C=_.ZP.div(i||(i=(0,y.Z)(["\n    display: flex;\n    gap: 40px;\n    margin-top: 20px;\n"]))),N=_.ZP.img(o||(o=(0,y.Z)(["\n    height: 600px;\n    width: 400px;\n"]))),F=_.ZP.div(c||(c=(0,y.Z)(["\n    padding-top: 20px;\n    max-width: 1100px;\n"]))),H=_.ZP.h2(s||(s=(0,y.Z)(["\n    margin-bottom: 20px;\n"]))),E=_.ZP.p(u||(u=(0,y.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 20px;\n    }\n"]))),G=_.ZP.span(p||(p=(0,y.Z)(["\n    display: block;\n    margin-bottom: 20px;\n    font-size: 18px;\n    font-weight: 500;\n"]))),M=_.ZP.div(d||(d=(0,y.Z)(["\n    margin-top: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border-top: 1px solid #d3d3d3;\n    border-bottom: 1px solid #d3d3d3;\n"]))),O=_.ZP.h3(l||(l=(0,y.Z)(["\n    font-size: 25px;\n    font-weight: 500;\n"]))),T=_.ZP.ul(f||(f=(0,y.Z)(["\n    margin-top: 20px;\n    display: flex;\n    gap: 20px;\n    font-size: 18px;\n"]))),q=_.ZP.li(x||(x=(0,y.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),A=(0,_.ZP)(k.rU)(h||(h=(0,y.Z)(["\n    font-size: 16px;\n    margin-right: 5px;\n    padding: 5px 15px;\n    border: 1px solid #0d57aa;\n    border-radius: 6px;\n    background-color: #b5d1f2;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n    transition: all 200ms ease-in-out;\n    text-decoration: none;\n    color: #0d57aa;\n\n    &:hover,\n    &:focus {\n        background-color: #0d57aa;\n        color: #ffffff;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n    }\n"]))),D=t(184),I=function(n){var e,t,r,a,i=n.movie,o=i.title,c=i.release_date,s=i.poster_path,u=i.vote_average,p=i.overview,d=i.genres,l=(0,Z.TH)(),f=new Date(c),x=isNaN(f)?"Unknown":f.getFullYear(),h=s?"https://image.tmdb.org/t/p/w300".concat(s):"https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg",g=u?"".concat((10*u).toFixed(0),"%"):"Not rated yet";return o?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(C,{children:[(0,D.jsx)(N,{src:h,alt:"".concat(o," poster")}),(0,D.jsxs)(F,{children:[(0,D.jsxs)(H,{children:[null!==o&&void 0!==o?o:"Unknown"," (",x,")"]}),(0,D.jsxs)(E,{children:["User Score: ",g]}),(0,D.jsxs)(E,{children:[(0,D.jsx)(G,{children:"Overview:"}),p]}),d&&d.length>0&&(0,D.jsxs)(E,{children:[(0,D.jsx)(G,{children:"Genres:"}),d.map((function(n){return n.name})).join(", ")]})]})]}),(0,D.jsxs)(M,{children:[(0,D.jsx)(O,{children:"Additional information"}),(0,D.jsxs)(T,{children:[(0,D.jsx)(q,{children:(0,D.jsx)(A,{to:"cast",state:{from:null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Cast"})}),(0,D.jsx)(q,{children:(0,D.jsx)(A,{to:"reviews",state:{from:null!==(r=null===l||void 0===l||null===(a=l.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/"},children:"Reviews"})})]})]})]}):(0,D.jsx)(S.a,{})},L=function(){var n,e=(0,Z.UO)().movieId,t=(0,Z.TH)(),r=(0,w.useState)({}),a=(0,v.Z)(r,2),i=a[0],o=a[1];return(0,w.useEffect)((function(){var n=function(){var n=(0,g.Z)(m().mark((function n(e){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.Mc)(e);case 3:t=n.sent,o(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();n(e)}),[e]),(0,D.jsx)("main",{children:(0,D.jsxs)(P,{children:[(0,D.jsx)(k.rU,{to:null!==(n=null===t||void 0===t?void 0:t.state.from)&&void 0!==n?n:"/",children:(0,D.jsxs)(U,{type:"button",children:[(0,D.jsx)(z.kyg,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Go back"]})}),(0,D.jsx)(I,{movie:i}),(0,D.jsx)(w.Suspense,{fallback:(0,D.jsx)(S.a,{}),children:(0,D.jsx)(Z.j3,{})})]})})}},9545:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return f},Mc:function(){return d},_k:function(){return u},uV:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="https://api.themoviedb.org",s="9e06172264fd25342d03ac1357f3ae3c",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/3/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=771.b06d5040.chunk.js.map