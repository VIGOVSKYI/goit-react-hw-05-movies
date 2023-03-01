"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[89],{3089:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(5861),i=a(9439),r=a(7757),s=a.n(r),o=a(2791),l=a(1087),c=a(7689),u=a(4691),d=a(397),v={goBack:"movieDetails_goBack__CI1KW",MovieDetailsPage:"movieDetails_MovieDetailsPage__K7Raj",detailsImage:"movieDetails_detailsImage__jAq3+",detailsImageWrapper:"movieDetails_detailsImageWrapper__IiLBE",detailsContentWrapper:"movieDetails_detailsContentWrapper__YBI9P",title:"movieDetails_title__SN6Ns",userScore:"movieDetails_userScore__2hSbU",overViewTitle:"movieDetails_overViewTitle__50piD",overView:"movieDetails_overView__QGwlt",genresTitle:"movieDetails_genresTitle__VaJqi",additionalInformationTitle:"movieDetails_additionalInformationTitle__lhuxQ",additionalInformationLink:"movieDetails_additionalInformationLink__1CT5O"},p=a(184),m=function(){var e,t=(0,c.UO)().id,a=(0,o.useState)(null),r=(0,i.Z)(a,2),m=r[0],f=r[1],h=(0,o.useState)(null),_=(0,i.Z)(h,2),g=_[0],x=_[1],w=(0,o.useState)(!1),k=(0,i.Z)(w,2),j=k[0],b=k[1],N=(null===(e=(0,c.TH)().state)||void 0===e?void 0:e.from)||"/",D=(0,c.s0)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,d.Y5)(t);case 4:a=e.sent,f(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response,x(n.dada.message);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,p.jsxs)(p.Fragment,{children:[g&&(0,p.jsx)("p",{children:"error"}),j&&(0,p.jsx)("div",{children:(0,p.jsx)(u.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),(0,p.jsx)("button",{type:"button",onClick:function(){D(N)},className:v.goBack,children:"Go back"}),(0,p.jsxs)("div",{className:v.MovieDetailsPage,children:[(0,p.jsx)("div",{className:v.detailsImageWrapper,children:(null===m||void 0===m?void 0:m.poster_path)&&(0,p.jsx)("img",{className:v.detailsImage,src:null!==m&&void 0!==m&&m.poster_path?"https://image.tmdb.org/t/p/w400".concat(null===m||void 0===m?void 0:m.poster_path):"http://placehold.it/300",alt:null===m||void 0===m?void 0:m.title,width:"300"})}),(0,p.jsxs)("div",{className:v.detailsContentWrapper,children:[(0,p.jsx)("h2",{className:v.title,children:null===m||void 0===m?void 0:m.title}),(0,p.jsx)("span",{className:v.cardYear,children:null===m||void 0===m?void 0:m.release_date.slice(0,4)}),(0,p.jsxs)("span",{className:v.userScore,children:["User score: ",10*(null===m||void 0===m?void 0:m.vote_average),"%"]}),(0,p.jsx)("h3",{className:v.overViewTitle,children:"Overview"}),(0,p.jsx)("p",{className:v.overView,children:null===m||void 0===m?void 0:m.overview}),(0,p.jsx)("h4",{className:v.genresTitle,children:"Genres:"}),(0,p.jsx)("ul",{children:null===m||void 0===m?void 0:m.genres.map((function(e){var t=e.id,a=e.name;return(0,p.jsx)("li",{children:a},t)}))})]})]}),(0,p.jsx)("span",{className:v.additionalInformationTitle,children:"Additional information"}),(0,p.jsx)(l.rU,{to:"cast",state:{from:N},className:v.additionalInformationLink,children:"Cast"}),(0,p.jsx)(l.rU,{to:"reviews",state:{from:N},className:v.additionalInformationLink,children:"Reviews"}),(0,p.jsx)(c.j3,{})]})}},397:function(e,t,a){a.d(t,{$7:function(){return u},Y5:function(){return d},YK:function(){return c},oO:function(){return p},y:function(){return v}});var n=a(5861),i=a(7757),r=a.n(i),s=a(1912),o="https://api.themoviedb.org/3",l="36c444871f3c4ccb3f8770d789f46dd7",c=function(){var e=(0,n.Z)(r().mark((function e(){var t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/trending/all/day?api_key=").concat(l,"&language=en-US&page=1"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){return s.Z.get("".concat(o,"/search/movie?query=").concat(e,"&api_key=").concat(l,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.data.results}))},d=function(e){return s.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(l,"&language=en-US")).then((function(e){return e.data}))},v=function(e){return s.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(l,"&language=en-US")).then((function(e){return e.data.cast}))},p=function(e){return s.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(l,"&language=en-US&page=1")).then((function(e){return e.data.results}))}}}]);
//# sourceMappingURL=89.4ecf69aa.chunk.js.map