(this.webpackJsonpcataloge=this.webpackJsonpcataloge||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(41),c=n(0),i=n.n(c),a=n(35),o=n.n(a),s=(n(118),n(119),n(17)),l=n(192),u=n(205),j=Object(s.h)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),d=n(100),b=Object(d.a)({palette:{primary:{main:"#60b0f4"},secondary:{main:"#fff"}}}),O="REQUEST_CATEGORIES_PENDING",h="REQUEST_CATEGORIES_SUCCESS",g="REQUEST_CATEGORIES_FAILED",f="REQUEST_PRODUCTS_PENDING",x="REQUEST_PRODUCTS_SUCCESS",p="REQUEST_PRODUCTS_FAILED",m="SET_IS_FILTER_OPEN",y="SET_SORT",v="SET_PRICE_FIELD",C="SET_SELECTED_COLORS",w="SET_SELECTED_RATING",S=n(65),E=Object(S.b)((function(e){return{categories:e.requestCategories.categories,isCategoriesPending:e.requestCategories.isPending,products:e.requestProducts.products,isProductsPending:e.requestProducts.isPending,isFilterOpen:e.setIsFilterOpen.isFilterOpen,sort:e.setSort.sortValue,priceField:e.setPriceField.priceField,selectedColors:e.setSelectedColors.selectedColors,selectedRating:e.setSelectedRating.selectedRating}}),(function(e){return{requestCategories:function(){return e((function(e){e({type:O}),fetch("https://test-api.edfa3ly.io/category").then((function(e){return e.json()})).then((function(t){return e({type:h,payload:t})})).catch((function(t){return e({type:g,payload:t})}))}))},requestProducts:function(){return e((function(e){e({type:f}),fetch("https://test-api.edfa3ly.io/product").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).catch((function(t){return e({type:p,payload:t})}))}))},setIsFilterOpen:function(t){return e(function(e){return{type:m,payload:e}}(t))},setSort:function(t){return e(function(e){return{type:y,payload:e}}(t))},setPriceField:function(t){return e(function(e){return{type:v,payload:e}}(t))},setSelectedColors:function(t){return e(function(e){return{type:C,payload:e}}(t))},setSelectedRating:function(t){return e(function(e){return{type:w,payload:e}}(t))}}})),F=n(12),P=n(193),R=n(195),I=n(196),k=n(3),T=function(e){return{flex:{display:"flex"},flexEnd:{display:"flex",alignItems:"center",justifyContent:"flex-end"},wrap:{flexWrap:"wrap"},pushCenter:{marginLeft:"auto",marginRight:"auto"},pushRight:{marginLeft:"auto"},higher:{zIndex:e.zIndex.drawer+1},drawer:Object(k.a)({width:270,flexShrink:0},"& .MuiDrawer-paper",{width:270,boxSizing:"border-box"}),barMargin:{mt:document.querySelector("#mainBar")?document.querySelector("#mainBar").offsetHeight+"px":0},flipX:{transform:"scaleX(-1)"},pointer:{cursor:"pointer"},categoryCircle:{borderRadius:"50%",objectFit:"cover",height:75,width:75},spin:{transition:"0.25s transform","&:hover":{transform:"rotate(-20deg)"}},widthXS:{width:100},widthSM:{width:200},maxWidthMD:Object(k.a)({maxWidth:250},e.breakpoints.up("sm"),{maxWidth:330}),capitalize:{textTransform:"capitalize"},raleway:{fontFamily:"raleway"},whiteFont:{color:e.palette.secondary.main},grayFont:{color:e.palette.secondary.dark},fullWidth:{width:"100%"},fit:{width:"fit-content",height:"fit-content"},pageContainer:Object(k.a)({justifyContent:"center"},e.breakpoints.up("sm"),{justifyContent:"initial"}),productCardImg:{objectFit:"contain",width:250,height:250},sectionDesktop:Object(k.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex"}),sectionMobile:Object(k.a)({display:"flex"},e.breakpoints.up("sm"),{display:"none"})}},_=n(2),L=function(){var e=T(b);return Object(_.jsx)(P.a,{id:"mainBar",sx:e.higher,children:Object(_.jsx)(R.a,{children:Object(_.jsx)(I.a,{component:"h1",variant:"label",margin:1,sx:Object(F.a)(Object(F.a)(Object(F.a)({},e.whiteFont),e.raleway),e.pushCenter),children:"eShop Store"})})})},D=n(188),W=n(197),q=function(){var e=T(b);return Object(_.jsxs)(D.a,{container:!0,alignItems:"center",direction:"column",sx:e.barMargin,children:[Object(_.jsxs)(D.a,{item:!0,sx:{m:3},children:[Object(_.jsx)(I.a,{component:"h1",variant:"h1",color:"primary",align:"center",children:"404"}),Object(_.jsx)(I.a,{component:"h2",variant:"h5",align:"center",children:"Page Not Found!"})]}),Object(_.jsx)(W.a,{variant:"contained",color:"primary",component:r.b,to:"/",sx:e.whiteFont,children:"go back home"})]})},M=n(198),N=n(200),U=n(178),z=function(e,t,n){if(n===e[t])return!0},H=function(e,t,n,r){return e[n]>t[n]?r?-1:1:r?1:-1},A={USD:"$"},G=1e3,Q=["black","white","cyan","silver","gold","lavender","orchid","maroon","yellow","mint green","fuchsia","ivory","teal","blue","red","green","olive","orange","salmon","indigo","azure","turquoise","purple","magenta","plum","pink","violet","grey","sky blue","lime","tan"],X=["Price: Low to High","Price: High to Low","Customer Rating"],B=n(98),$=n.n(B),V=n(14),J=function(e){var t=e.children,n=Object(c.useState)(t.length>8?8:t.length),r=Object(V.a)(n,2),i=r[0],a=r[1],o=Object(c.useRef)(t),s=Object(c.useCallback)((function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(t.length>i+8?a(i+8):a(t.length))}),[i,t.length]);return Object(c.useEffect)((function(){return document.body.offsetHeight<window.innerHeight&&i!==t.length&&a(i+1),o.current!==t&&(o.current=t,a(t.length>8?8:t.length)),window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[s,i,t]),Object(_.jsx)(_.Fragment,{children:t.slice(0,i)})},Y=n(194),K=n(182),Z=function(e){var t=e.product,n=T(b),r=t.name.split(" ",1)[0],c=t.name.replace(r,"");return Object(_.jsx)(D.a,{item:!0,margin:1,xs:!0,sx:n.maxWidthMD,children:Object(_.jsxs)(Y.a,{"aria-label":"product",elevation:3,children:[Object(_.jsx)(D.a,{container:!0,justifyContent:"center",children:Object(_.jsx)("img",{src:t.image,alt:"Product",style:Object(F.a)({},n.productCardImg)})}),Object(_.jsx)(I.a,{align:"center",component:"h2",variant:"label",sx:n.raleway,children:r}),c&&Object(_.jsx)(I.a,{margin:.5,align:"center",component:"h3",variant:"label",sx:n.raleway,children:c}),Object(_.jsx)(I.a,{align:"center",component:"h2",variant:"h6",color:"error",margin:1,children:"".concat(A[t.currency]).concat(t.price)}),Object(_.jsx)(I.a,{align:"center",margin:1,children:Object(_.jsx)(K.a,{value:t.rating,readOnly:!0})}),Object(_.jsx)(W.a,{variant:"contained",sx:n.whiteFont,fullWidth:!0,children:"view item"})]})})},ee=n(191),te=n(177),ne=n(183),re=n(185),ce=n(16),ie=function(e,t,n){for(var r=e;window.innerWidth<r*t+n;)r--;return r<=0?1:r},ae=function(e,t){for(var n=Object(ce.a)(e),r=[];n.length>0;)r.push(n.splice(0,t));return r},oe=function(e,t){return t?e*G/100:100*e/G},se=n(199),le=n(95),ue=n.n(le),je=function(e){var t=e.onClick;return Object(_.jsx)(M.a,{margin:1,children:Object(_.jsx)(se.a,{label:"Clear",onClick:t,control:Object(_.jsx)(N.a,{color:"error",children:Object(_.jsx)(ue.a,{})})})})},de=E((function(e){var t=e.priceField,n=e.setPriceField,r=T(b),i=Object(c.useState)([0,100]),a=Object(V.a)(i,2),o=a[0],s=a[1],l=function(e,r){var c=e.target.value,i=function(e,t,n){var r=Object(ce.a)(e);return t>=0?1===n?(Number(r[0])>Number(t)&&(r[0]=0),r[1]=t>G?G:t,r):(Number(t)>Number(r[1])?r[0]=r[1]:r[0]=t,r):e}(t,c,r);n(i),s([oe(i[0]),oe(i[1])])};return Object(_.jsxs)(M.a,{margin:1,children:[Object(_.jsx)(I.a,{margin:1,children:"Price range"}),Object(_.jsxs)(D.a,{container:!0,children:[Object(_.jsx)(ne.a,{"aria-label":"from $",label:"From ($)",variant:"outlined",type:"number",min:0,value:t[0],onChange:function(e){return l(e,0)},sx:Object(F.a)(Object(F.a)({},r.widthXS),{},{m:1})}),Object(_.jsx)(ne.a,{"aria-label":"to $",label:"To ($)",variant:"outlined",type:"number",min:0,value:t[1],onChange:function(e){return l(e,1)},sx:Object(F.a)(Object(F.a)({},r.widthXS),{},{m:1})})]}),Object(_.jsx)(re.a,{getAriaLabel:function(){return"money range"},value:o,onChange:function(e,t){s(t),n([oe(t[0],!0),oe(t[1],!0)])},sx:Object(F.a)(Object(F.a)({},r.widthSM),{},{m:2})}),!(0===o[0]&&100===o[1])&&Object(_.jsx)(je,{onClick:function(){s([0,100]),n([0,G])}})]})})),be=n(190),Oe=n(186),he=n(203),ge=n(184),fe=n(179),xe=n(189),pe=E((function(e){var t=e.selectedColors,n=e.setSelectedColors,r=T(b);return Object(_.jsxs)(M.a,{margin:1,children:[Object(_.jsx)(I.a,{margin:1,children:"Color"}),Object(_.jsxs)(he.a,{sx:Object(F.a)(Object(F.a)({},r.widthSM),{},{m:1}),children:[Object(_.jsx)(ge.a,{children:"Selected"}),Object(_.jsx)(fe.a,{multiple:!0,value:t,onChange:function(e){n(e.target.value)},input:Object(_.jsx)(xe.a,{label:"Selected"}),renderValue:function(){return Object(_.jsx)(M.a,{sx:Object(F.a)(Object(F.a)(Object(F.a)(Object(F.a)({},r.capitalize),r.flex),r.wrap),{},{gap:.5}),children:t.map((function(e){return Object(_.jsx)(be.a,{label:e},e)}))})},children:Q.map((function(e){return Object(_.jsx)(Oe.a,{value:e,style:r.capitalize,sx:t.includes(e)?r.grayFont:null,children:e},e)}))})]}),0!==t.length&&Object(_.jsx)(je,{onClick:function(){return n([])}})]})})),me=E((function(e){var t=e.selectedRating,n=e.setSelectedRating,r=T(b);return Object(_.jsxs)(M.a,{margin:1,children:[Object(_.jsx)(I.a,{margin:1,children:"Average rating"}),Object(_.jsx)(M.a,{sx:{mt:2},children:[5,4,3,2,1].map((function(e){return Object(_.jsxs)(D.a,{container:!0,alignItems:"center",margin:1,style:r.fit,sx:r.pointer,onClick:function(){return n(e)},children:[Object(_.jsx)(K.a,{value:e,readOnly:!0,color:"primary"}),Object(_.jsx)(I.a,{style:t===e?r.grayFont:null,children:"\xa0 & UP"})]},e)}))}),0!==t&&Object(_.jsx)(je,{onClick:function(){return n(0)}})]})})),ye=function(e){var t=e.open,n=e.setOpen,r=T(b);return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(ee.a,{open:t,onClose:function(){return n(!1)},variant:window.innerWidth<450?"temporary":"persistent",sx:t?r.drawer:null,children:Object(_.jsxs)(M.a,{sx:Object(F.a)(Object(F.a)({},r.barMargin),{},{overflowY:"auto"}),children:[Object(_.jsx)("div",{style:r.flexEnd,children:Object(_.jsx)(N.a,{"aria-label":"back",color:"inherit",onClick:function(){return n(!1)},sx:{m:1},children:Object(_.jsx)(te.a,{})})}),Object(_.jsx)(de,{}),Object(_.jsx)(U.a,{}),Object(_.jsx)(pe,{}),Object(_.jsx)(U.a,{}),Object(_.jsx)(me,{})]})})})},ve=E((function(e){var t=e.sort,n=e.setSort,r=T(b);return Object(_.jsx)(M.a,{sx:r.pushRight,children:Object(_.jsxs)(he.a,{sx:Object(F.a)(Object(F.a)({},r.widthSM),{},{m:2}),children:[Object(_.jsx)(ge.a,{children:"Sort"}),Object(_.jsx)(fe.a,{value:t,onChange:function(e){n(e.target.value)},input:Object(_.jsx)(xe.a,{label:"Sort"}),children:X.map((function(e){return Object(_.jsx)(Oe.a,{value:e,sx:t===e?r.grayFont:null,children:e},e)}))})]})})})),Ce=n(97),we=n.n(Ce),Se=function(e){var t=e.category,n=T(b),c=Object(s.g)().pathname.includes("/cataloge/category/".concat(t.id));return Object(_.jsxs)(D.a,{item:!0,component:r.b,margin:1,to:"/cataloge/category/".concat(t.id),sx:Object(F.a)({ml:3,mr:3},c?{transition:"transform 0.25s"}:Object(F.a)(Object(F.a)({},n.spin),n.pointer)),children:[Object(_.jsx)("img",{alt:t.name,src:t.image,style:n.categoryCircle}),Object(_.jsx)(I.a,{component:"h6",color:"initial",align:"center",margin:1,sx:c?n.grayFont:null,children:t.name})]},t.id)},Ee=function(e){var t=e.categories,n=Object(c.useState)(!1),r=Object(V.a)(n,2),i=r[0],a=r[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ee.a,{open:i,anchor:"bottom",onClose:function(){return a(!1)},children:Object(_.jsx)(D.a,{container:!0,justifyContent:"center",sx:{p:1,maxHeight:350},children:t.map((function(e){return Object(_.jsx)(Se,{category:e},e.id)}))})}),Object(_.jsx)(N.a,{"aria-label":"category",onClick:function(){return a(!0)},children:Object(_.jsx)(we.a,{})})]})},Fe=n(204),Pe=function(e){var t=e.children,n=e.elementWidth,r=e.extraWidth,i=T(b),a=Object(c.useRef)(r),o=Object(c.useState)(ie(t.length,n,r?144+r:144)),s=Object(V.a)(o,2),l=s[0],u=s[1],j=Object(c.useState)(ae(t,l)),d=Object(V.a)(j,2),O=d[0],h=d[1],g=Object(c.useState)(0),f=Object(V.a)(g,2),x=f[0],p=f[1],m=function(){var e=ie(t.length,n,r?144+r:144);u(e),h(ae(t,e)),p(0)};return Object(c.useEffect)((function(){return a.current!==r&&(a.current=r,m()),window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}})),0!==t.length?Object(_.jsxs)(D.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(_.jsx)(D.a,{item:!0,margin:2,children:Object(_.jsx)(N.a,{"aria-label":"back",color:"inherit",disabled:0===x,onClick:function(){return p(x-1)},children:Object(_.jsx)(te.a,{})})}),Object(_.jsx)(D.a,{container:!0,sx:i.fit,children:O[x]}),Object(_.jsx)(D.a,{item:!0,margin:2,children:Object(_.jsx)(N.a,{"aria-label":"back",color:"inherit",disabled:x===O.length-1,onClick:function(){return p(x+1)},sx:i.flipX,children:Object(_.jsx)(te.a,{})})})]}):null},Re=function(e){var t=e.categories,n=e.isCategoriesPending,r=e.isFilterOpen;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(D.a,{container:!0,justifyContent:"center",sx:{mt:2},children:n?Object(_.jsx)(D.a,{item:!0,margin:1,children:Object(_.jsx)(Fe.a,{})}):Object(_.jsx)(Pe,{elementWidth:130,extraWidth:r?280:0,children:t.map((function(e){return Object(_.jsx)(Se,{category:e},e.id)}))})}),Object(_.jsx)(U.a,{})]})},Ie=E((function(e){var t=e.categories,n=e.isCategoriesPending,r=e.products,i=e.isProductsPending,a=e.isFilterOpen,o=e.setIsFilterOpen,s=e.sort,l=e.priceField,j=e.selectedColors,d=e.selectedRating,O=e.match.params.id,h=T(b),g=Object(c.useRef)(0);if(0===r.filter((function(e){return z(e,"categoryId",Number(O))})).length&&!0!==n&&!0!==i)return Object(_.jsx)(q,{});return Object(_.jsxs)(M.a,{sx:h.flex,children:[Object(_.jsx)(ye,{open:a,setOpen:o}),Object(_.jsxs)(M.a,{sx:Object(F.a)(Object(F.a)({},h.barMargin),h.fullWidth),children:[window.innerWidth>450?Object(_.jsx)(Re,{categories:t,isCategoriesPending:n,isFilterOpen:a}):null,Object(_.jsxs)(R.a,{children:[Object(_.jsx)(N.a,{"aria-label":"filter",color:a?"primary":"default",onClick:function(){return o(!a)},children:Object(_.jsx)($.a,{})}),window.innerWidth<=450?Object(_.jsx)(Ee,{categories:t}):null,Object(_.jsx)(ve,{})]}),Object(_.jsx)(U.a,{}),Object(_.jsx)(R.a,{children:Object(_.jsxs)(I.a,{sx:{ml:1},variant:"h6",children:["(",g.current,") Items"]})}),Object(_.jsx)(D.a,{container:!0,padding:2,gap:.5,sx:h.pageContainer,children:i?Object(_.jsx)(u.a,{}):Object(_.jsx)(J,{children:function(){var e=r.filter((function(e){return z(e,"categoryId",Number(O))}));switch(0!==j.length&&(e=e.filter((function(e){return function(e,t){if(t.includes(e.color))return!0}(e,j)}))),0!==d&&(e=e.filter((function(e){return function(e,t){if(e.rating>=t)return!0}(e,d)}))),0===l[0]&&l[1]===G||(e=e.filter((function(e){return function(e,t){if(e.price>=t[0]&&e.price<=t[1])return!0}(e,l)}))),g.current=e.length,s){case"Price: High to Low":return e.sort((function(e,t){return H(e,t,"price",!0)}));case"Customer Rating":return e.sort((function(e,t){return H(e,t,"rating",!0)}));default:return e.sort((function(e,t){return H(e,t,"price")}))}}().map((function(e){return Object(_.jsx)(Z,{product:e},e.id)}))})})]})]})}));var ke=E((function(e){var t=Object(s.g)(),n=e.requestCategories,r=e.requestProducts,i=e.isCategoriesPending,a=e.products,o=e.categories;return Object(c.useEffect)((function(){0===a.length&&r(),0===o.length&&n()}),[n,r,o.length,a.length]),Object(_.jsxs)(l.a,{theme:b,children:[Object(_.jsx)(L,{}),i&&Object(_.jsx)(u.a,{}),0===o.length||"/"!==t.pathname&&"/cataloge"!==t.pathname?null:Object(_.jsx)(s.a,{to:"/cataloge/category/".concat(o[0].id)}),Object(_.jsx)(j,{}),Object(_.jsxs)(s.d,{location:t,children:[Object(_.jsx)(s.b,{exact:!0,path:"/cataloge"}),Object(_.jsx)(s.b,{exact:!0,path:"/cataloge/category/:id",component:Ie}),Object(_.jsx)(s.b,{component:q})]})]})})),Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},_e=n(59),Le=n(99),De={isPending:!1,categories:[],error:""},We={isPending:!1,products:[],error:""},qe={isFilterOpen:!1},Me={sortValue:"Price: Low to High"},Ne={priceField:[0,G]},Ue={selectedColors:[]},ze={selectedRating:0},He=Object(_e.b)({requestCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object(F.a)(Object(F.a)({},e),{},{isPending:!0});case h:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,categories:t.payload});case g:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,error:t.payload});default:return e}},requestProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object(F.a)(Object(F.a)({},e),{},{isPending:!0});case x:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,products:t.payload});case p:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,error:t.payload});default:return e}},setIsFilterOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===m?Object(F.a)(Object(F.a)({},e),{},{isFilterOpen:t.payload}):Object(F.a)({},e)},setSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===y?Object(F.a)(Object(F.a)({},e),{},{sortValue:t.payload}):Object(F.a)({},e)},setPriceField:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===v?Object(F.a)(Object(F.a)({},e),{},{priceField:t.payload}):Object(F.a)({},e)},setSelectedColors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===C?Object(F.a)(Object(F.a)({},e),{},{selectedColors:t.payload}):Object(F.a)({},e)},setSelectedRating:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===w?Object(F.a)(Object(F.a)({},e),{},{selectedRating:t.payload}):Object(F.a)({},e)}}),Ae=He,Ge=Object(_e.c)(Ae,Object(_e.a)(Le.a));n(131);o.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(S.a,{store:Ge,children:Object(_.jsxs)(r.a,{children:[" ",Object(_.jsx)(ke,{})]})})}),document.getElementById("root")),Te()}},[[132,1,2]]]);
//# sourceMappingURL=main.d1281f9f.chunk.js.map