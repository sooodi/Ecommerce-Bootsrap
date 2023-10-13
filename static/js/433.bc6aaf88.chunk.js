"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[433],{4568:function(e,a,n){var s=n(184);a.Z=function(){return(0,s.jsx)("div",{className:"container  mt-5 p-5 justify-content-top bg-light  w-100 h-75",children:(0,s.jsxs)("div",{className:"p-16",children:[(0,s.jsx)("p",{className:"h-10",children:"\ud83e\udeb4 OOps!, Coming Soon"}),(0,s.jsx)("hr",{}),(0,s.jsxs)("h1",{className:"text-center",role:"heading",children:[(0,s.jsx)("br",{}),(0,s.jsx)("span",{role:"heading",children:"We have not added any product !"})]})]})})}},2991:function(e,a,n){n.d(a,{Z:function(){return t}});n(2791);var s=n(184),t=function(e){var a=e.pages,n=e.handleClick,t=e.active;return(0,s.jsxs)("div",{className:"d-flex flex-column w-full mt-4 ",children:[(0,s.jsx)("div",{className:"pagination",children:a.map((function(e,a){return(0,s.jsx)("li",{value:e,onClick:n,children:e},a)}))}),(0,s.jsxs)("h6",{className:"text-center mt-3",children:["Current Page No: ",t]})]})}},482:function(e,a,n){var s=n(9439),t=n(2791),r=n(7303);a.Z=function(e,a){var n=(0,t.useState)([]),c=(0,s.Z)(n,2),i=c[0],l=c[1];return(0,t.useEffect)((function(){if(a<=7){for(var n=[],s=1;s<=a;s++)n.push(s);l(n)}else{var t=Math.floor(a/r.F);if(e<=4&&l([1,2,3,4,5,"...",t]),e>4&&e<t-3&&l([1,"...",e-1,e,e+1,"...",t]),e>t-4)if(t>4)l([1,"...",t-4,t-3,t-2,t-1,t]);else{for(var c=[],i=1;i<t+1;i++)c.push(i);l(c)}}}),[e,a]),{pages:i}}},4963:function(e,a,n){n.r(a),n.d(a,{default:function(){return S}});var s=n(9439),t=n(7689),r=n(2791),c=n(9434),i=n(184),l=function(e){var a=e.categoryItem,n=a.images,s=a.title,r=a.category,c=a.price,l=(0,t.s0)();return(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"card shadow-sm pb-3 pt-2 px-3",onClick:function(){return l("shop/"+r.name)},children:[(0,i.jsx)("img",{className:"card-img-top bg-dark cover mt-2",height:"200",width:"100",alt:"",src:n[0]}),(0,i.jsx)("label",{className:"card-title text-center",children:s}),(0,i.jsx)("label",{className:"card-subtitle text-center",children:c}),(0,i.jsx)("div",{className:"d-grid gap-2 mt-2",children:(0,i.jsx)("div",{className:"btn btn-outline-dark",children:"Shop Now"})})]})})},o=function(e){var a=e.product;return(0,i.jsx)("div",{className:"directory-container pb-25 px-lg-5",children:(0,i.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5",children:a.map((function(e){return(0,i.jsx)(l,{categoryItem:e},null===e||void 0===e?void 0:e.id)}))})})},d=n.p+"static/media/banner-0.83a86819981256ecaebe.jpg",u=n.p+"static/media/banner-1.1f5bb6ba30a89f69db3e.jpg",h=n.p+"static/media/banner-2.e792fe61a57973a5b60b.jpg";function x(e){return(0,i.jsx)("button",{type:"button","data-bs-target":"#bannerIndicators","data-bs-slide-to":e.index,className:e.active?"active":"","aria-current":e.active})}function m(e){return(0,i.jsxs)("div",{className:"carousel-item "+(e.active?"active":""),"data-bs-interval":"5000",children:[(0,i.jsx)("div",{className:"ratio",style:{"--bs-aspect-ratio":"50%",maxHeight:"400px"},children:(0,i.jsx)("img",{className:"d-block w-100 h-100 bg-dark cover rounded",alt:"",src:e.image})}),(0,i.jsxs)("div",{className:"carousel-caption d-none d-lg-block",children:[(0,i.jsx)("h5",{children:"Star Shop"}),(0,i.jsx)("p",{children:"Best Discount every Friday"})]})]})}var p=function(){return(0,i.jsxs)("div",{id:"bannerIndicators",className:"carousel slide","data-bs-ride":"carousel",style:{marginTop:"10px"},children:[(0,i.jsxs)("div",{className:"carousel-indicators",children:[(0,i.jsx)(x,{index:"0",active:!0}),(0,i.jsx)(x,{index:"1"}),(0,i.jsx)(x,{index:"2"})]}),(0,i.jsxs)("div",{className:"carousel-inner",children:[(0,i.jsx)(m,{image:d,active:!0}),(0,i.jsx)(m,{image:u}),(0,i.jsx)(m,{image:h})]})]})},v=n(2991),j=n(3640),f=n(4568),g=n(4165),b=n(5861),N=n(1243),w=n(3636);N.Z.defaults.baseURL="https://api.escuelajs.co/api/v1/";var k=function(){var e=(0,r.useState)(null),a=(0,s.Z)(e,2),n=a[0],t=a[1],i=(0,r.useState)(!0),l=(0,s.Z)(i,2),o=l[0],d=l[1],u=(0,c.I0)(),h=(0,r.useCallback)(function(){var e=(0,b.Z)((0,g.Z)().mark((function e(a,n){var s;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),t(null),e.prev=2,e.next=5,N.Z.request(a);case 5:s=e.sent,u((0,w.Gr)(s.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),N.Z.isAxiosError(e.t0)?t("Axios Error with Message: "+e.t0.message):t(e.t0),d(!1);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(a,n){return e.apply(this,arguments)}}(),[]);return(0,r.useEffect)((function(){h({method:"GET",url:"products",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}},(function(e){u((0,w.Gr)({product:e}))}))}),[h]),{loading:o,error:n,sendRequest:h}},Z=n(482),y=n(1733),C=function(){return(0,i.jsx)("div",{className:"container  mt-5 p-5 mb-5 justify-content-top bg-light  w-100 h-75",children:(0,i.jsxs)("div",{className:"p-16",children:[(0,i.jsx)("p",{className:"h-10",children:" OOps!, Somthing went wrong"}),(0,i.jsx)("hr",{}),(0,i.jsxs)("h1",{className:"text-center",role:"heading",children:[(0,i.jsx)("br",{}),(0,i.jsx)("span",{role:"heading",children:"Please Try later "})]})]})})},S=function(){var e=(0,r.useState)(1),a=(0,s.Z)(e,2),n=a[0],l=a[1],d=k(),u=d.loading,h=d.error,x=(0,c.v9)((function(e){return e.product.listProduct})),m=(0,Z.Z)(n,null===x||void 0===x?void 0:x.length).pages,g=(0,r.useMemo)((function(){return(0,y._)(x,n)}),[m]),b=(0,r.useCallback)((function(e){0!==e.target.value&&l(e.target.value)}),[]);return u||!x?(0,i.jsx)(j.Z,{}):h?(0,i.jsx)(C,{}):0===x.length?(0,i.jsx)(f.Z,{}):(0,i.jsxs)("div",{children:[(0,i.jsx)(p,{}),(0,i.jsxs)("div",{className:"home-container ",children:[(0,i.jsx)("h2",{className:"text-muted text-center mt-4 mb-3",children:"Fashion"}),(0,i.jsx)(o,{product:g}),(0,i.jsx)(v.Z,{handleClick:b,pages:m,active:n})]}),(0,i.jsx)(t.j3,{})]})}},7303:function(e,a,n){n.d(a,{F:function(){return s}});var s=15},1733:function(e,a,n){n.d(a,{_:function(){return t}});var s=n(7303);function t(e,a,n){n||(n=s.F);for(var t=(a-1)*n,r=[],c=t;c<t+n;c++)e[c]&&r.push(e[c]);return r}}}]);
//# sourceMappingURL=433.bc6aaf88.chunk.js.map