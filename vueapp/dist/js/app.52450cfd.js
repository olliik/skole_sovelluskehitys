(function(e){function t(t){for(var n,s,o=t[0],u=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00f1":function(e,t,r){"use strict";var n=r("f5dd"),a=r.n(n);a.a},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0ab5":function(e,t,r){},1676:function(e,t,r){},1834:function(e,t,r){"use strict";var n=r("bc12"),a=r.n(n);a.a},"3cf1":function(e,t,r){},"3de5":function(e,t,r){"use strict";var n=r("1676"),a=r.n(n);a.a},4701:function(e,t,r){},4818:function(e,t,r){"use strict";var n=r("0ab5"),a=r.n(n);a.a},"546a":function(e,t,r){e.exports=r.p+"img/5.fbd49115.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("4af9"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("Navbar",{attrs:{user:e.username,authenticated:e.authenticated,avatar:e.avatar}}),r("router-view")],1)},s=[],o=(r("f9e3"),r("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("leffaApp")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/movies"}},[e._v("Movies")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.authenticated?[e.avatar?n("div",[n("b-img",{staticClass:"navbar-avatar",attrs:{thumbnail:"",rounded:"circle",alt:"Circle image",src:"data:image/jpeg;base64,"+e.avatar}}),n("em",[e._v(e._s(e.user))])],1):n("div",[n("b-img",{staticClass:"navbar-avatar",attrs:{rounded:"circle",alt:"Circle image",src:r("92ef")}}),n("em",[e._v(e._s(e.user))])],1),n("b-nav-item-dropdown",{attrs:{right:""}},[n("b-dropdown-item",{attrs:{to:"/"+e.user+"/profile"}},[e._v("Profile")]),n("b-dropdown-item",{on:{click:function(t){return e.onLogout()}}},[e._v("Sign Out")])],1)]:[n("b-link",{attrs:{to:"login"}},[n("b-button",{staticClass:"navbar-button"},[e._v("Login")])],1),n("b-link",{attrs:{to:"register"}},[n("b-button",{staticClass:"navbar-button"},[e._v("Register")])],1)]],2)],1)],1)],1)}),u=[],c=new n["default"]({data:function(){return{isAuthenticated:!1,id:null,user:null,avatar:null}},methods:{login:function(e){this.isAuthenticated=!0,this.id=e._id,this.user=e.username,this.avatar=e.avatar},logout:function(){this.isAuthenticated=!1,this.id=null,this.user=null,this.avatar=null}}}),l={name:"Navbar",props:{user:String,authenticated:Boolean,avatar:String},methods:{onLogout:function(){c.logout(),this.$router.push({name:"home"})}}},p=l,d=(r("e483"),r("2877")),m=Object(d["a"])(p,o,u,!1,null,"15812b10",null),f=m.exports,v={name:"App",computed:{authenticated:function(){return c.isAuthenticated},username:function(){return c.user},avatar:function(){return c.avatar}},components:{Navbar:f}},b=v,h=(r("034f"),Object(d["a"])(b,i,s,!1,null,null,null)),g=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("img",{staticClass:"banner-image",attrs:{alt:"Banner image",src:r("b5a1")("./"+e.imgIndex+".jpg")}}),n("HelloWorld")],1)])},x=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[e.isAuth?r("div",[r("h1",[e._v("Welcome, "+e._s(this.username)+" !")])]):r("div",[r("h1",[e._v("Welcome!")]),r("h4",[e._v("Start reviewing movies and sharing your watchlist by signing up or logging in.")])])])},y=[],R={name:"HelloWorld",data:function(){return{isAuth:c.isAuthenticated,username:c.user}}},k=R,j=(r("c4c5"),Object(d["a"])(k,_,y,!1,null,"51bc0af6",null)),C=j.exports,A={name:"Home",data:function(){return{imgIndex:Math.floor(4*Math.random())+1}},components:{HelloWorld:C}},S=A,O=(r("a166"),Object(d["a"])(S,w,x,!1,null,"1e6bc810",null)),D=O.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("MovieSearchContainer"),r("MovieListContainer")],1)},M=[],I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"margin-top":"10px"}},[r("b-jumbotron",{attrs:{lead:"Start adding movies to your watchlist!"}},[r("p",[e._v("You can search the OMDb API for a specific movie our browse our suggestions below.")]),e.searchResult?r("div",[r("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticStyle:{width:"30px",height:"30px",float:"right"},attrs:{icon:"arrow-up-down"}}),r("b-collapse",{attrs:{visible:"",id:"collapse-1"}},[[r("MovieItem",{attrs:{data:this.searchResult.data}})]],2)],1):e._e(),r("div",{staticStyle:{"margin-top":"50px"}},[r("b-form",{staticStyle:{"justify-content":"center",margin:"10px"},attrs:{inline:""}},[r("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-title"}},[e._v("Title")]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Title"}},[r("b-input",{attrs:{id:"inline-form-input-title",placeholder:"Title"},model:{value:e.inputTitle,callback:function(t){e.inputTitle=t},expression:"inputTitle"}})],1),r("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username"}},[e._v("Year")]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Year"}},[r("b-input",{attrs:{id:"inline-form-input-year",placeholder:"Year"},model:{value:e.inputYear,callback:function(t){e.inputYear=t},expression:"inputYear"}})],1)],1)],1),r("b-button",{attrs:{variant:"primary"},on:{click:e.handleClick}},[e._v("Search")])],1)],1)},N=[],T=(r("96cf"),r("1da1")),L=(r("ac1f"),r("5319"),r("bc3a")),U=r.n(L),P="https://www.omdbapi.com/?apikey=".concat("9ad67790"),B={Query:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=null,t=t.replace(" ","+"),null===t||null===r){e.next=11;break}return e.next=5,U.a.get(P+"&t="+t,NaN+r);case 5:return n=e.sent,console.log("eka: "+P+"&t="+t,NaN+r),console.log(n),e.abrupt("return",n);case 11:if(null===t||null!==r){e.next=18;break}return e.next=14,U.a.get(P+"&t="+t);case 14:return n=e.sent,console.log("toka: "+P+"&t="+t),console.log(n),e.abrupt("return",n);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-4"},[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"4"}},[r("b-card-img",{attrs:{src:e.data.Poster}})],1),r("b-col",{attrs:{md:"8"}},[r("b-card-body",[r("b-card-title",{staticClass:"text-muted"},[e._v(e._s(e.data.Title)+" ("+e._s(e.data.Year)+")")]),r("b-card-text",[e._v(e._s(e.data.Plot))]),r("b-card-sub-title",{staticClass:"mb-2"},[e._v("Director")]),r("b-card-text",[e._v(e._s(e.data.Director))]),r("b-card-sub-title",{staticClass:"mb-2"},[e._v("Writer(s)")]),r("b-card-text",[e._v(e._s(e.data.Writer))]),r("div",{staticClass:"text-muted"},[e._v("IMDB: "+e._s(e.data.imdbRating)+"/10 - Metascore: "+e._s(e.data.Metascore)+"/100")]),e._v(" TODO: add to watchlist "),e.authenticated?r("div",[r("b-icon",{staticStyle:{width:"30px",height:"30px"},attrs:{icon:"tv"},on:{click:e.handleNewWatchlistItem}}),r("div",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.data.imdbID,expression:"data.imdbID"}]},[e._v("Write a review")]),r("b-modal",{attrs:{id:e.data.imdbID,title:e.data.Title},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[r("div",{staticClass:"w-100"},[r("p",{staticClass:"float-left"},[e._v("Rating: "),r("b-form-input",{model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}}),e._v(" / 10")],1),r("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:e.handleNewReview}},[e._v(" Save ")])],1)]},proxy:!0}],null,!1,4033946196)},[r("p",{staticClass:"my-4"},[e._v("Your review:")]),r("b-form-textarea",{attrs:{id:"textarea-rows",rows:"8"},model:{value:e.review,callback:function(t){e.review=t},expression:"review"}})],1)],1)],1):e._e()],1)],1)],1)],1)],1)])},H=[],V="https://localhost:3000",F={getUserReviews:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.get(V+"/api/reviews/user/"+t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),PostReview:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,U.a.post(V+"/api/reviews/add",t);case 3:return r=e.sent,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},K="http://localhost:3000",W={getUserWatchlist:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.get(K+"/api/watchlist/user/"+t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),AddItem:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,U.a.post(K+"/api/watchlist/add",t);case 3:return r=e.sent,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},q={name:"MovieListItem",data:function(){return{movies:null,loading:!0,review:null,rating:null}},computed:{authenticated:function(){return c.isAuthenticated}},props:{data:Object},methods:{handleNewReview:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={createdBy:c.id,movie:e.data._id,review:e.review,rating:e.rating},t.next=3,F.PostReview(r);case 3:n=t.sent,console.log(n);case 5:case"end":return t.stop()}}),t)})))()},handleNewWatchlistItem:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={createdBy:c.id,movie:e.data._id,completed:!1},t.next=3,W.AddItem(r);case 3:n=t.sent,console.log(n);case 5:case"end":return t.stop()}}),t)})))()}}},G=q,Z=(r("aa38"),Object(d["a"])(G,Y,H,!1,null,"0563fc2d",null)),z=Z.exports,$={name:"MovieSearchContainer",data:function(){return{inputTitle:null,inputYear:null,searchResult:null,loading:!0}},components:{MovieItem:z},methods:{handleClick:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("parametri: "+e.inputTitle),t.next=3,B.Query(e.inputTitle,e.inputYear);case 3:e.searchResult=t.sent,console.log("updated var: ",e.searchResult);case 5:case"end":return t.stop()}}),t)})))()}}},Q=$,X=Object(d["a"])(Q,I,N,!1,null,"9f39086c",null),J=X.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",[r("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Spinning"}})],1):r("div",e._l(this.movies.data,(function(e,t){return r("div",{key:t},[r("MovieItem",{attrs:{data:e}})],1)})),0)},te=[],re="https://localhost:3000",ne={getALl:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.get(re+"/api/movies");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},ae={name:"MovieListContainer",data:function(){return{movies:null,loading:!0}},mounted:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("movieservice get: "),t.next=3,ne.getALl();case 3:e.movies=t.sent,e.loading=!1,console.log(e.movies);case 6:case"end":return t.stop()}}),t)})))()},components:{MovieItem:z}},ie=ae,se=Object(d["a"])(ie,ee,te,!1,null,"7e5c46ba",null),oe=se.exports,ue={name:"Movies",components:{MovieListContainer:oe,MovieSearchContainer:J}},ce=ue,le=Object(d["a"])(ce,E,M,!1,null,"17721412",null),pe=le.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-wrapper"},[r("div",{staticClass:"login-form"},[r("form",[r("p",{staticClass:"h4 text-center mb-4"},[e._v("Sign in")]),r("div",{staticClass:"grey-text"},[r("b-form-input",{attrs:{placeholder:"Your username",type:"text",name:"username",required:""},model:{value:e.input.username,callback:function(t){e.$set(e.input,"username",t)},expression:"input.username"}}),r("b-form-input",{attrs:{placeholder:"Your password",type:"password",name:"password",required:""},model:{value:e.input.password,callback:function(t){e.$set(e.input,"password",t)},expression:"input.password"}})],1),r("div",{staticClass:"text-center",staticStyle:{"margin-top":"20px"}},[r("b-button",{on:{click:function(t){return e.handleClick()}}},[e._v("Login")])],1)])]),r("div",{staticClass:"login-alert"},[e._v("Check your username/password!")])])},me=[],fe="https://localhost:3000",ve={headers:{"Content-Type":"multipart/form-data"}},be={Register:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.post(fe+"/api/users/register",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),Login:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.post(fe+"/api/users/login",t);case 2:return r=e.sent,console.log("authServ login res: ",r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.get(fe+"/api/users/"+t);case 2:return r=e.sent,console.log("authServ getuser res: ",r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),updateUserData:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.a.put(fe+"/api/users/"+t,r,ve);case 2:return n=e.sent,console.log("authServ getuser res: ",n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},he={name:"Login",data:function(){return{input:{username:"",password:""}}},methods:{handleClick:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={username:e.input.username,password:e.input.password},t.next=3,be.Login(r);case 3:n=t.sent,console.log("loginview res: ",n),200===n.status&&(console.log(":)"),c.login(n.data),e.$router.push({name:"home"}));case 6:case"end":return t.stop()}}),t)})))()}}},ge=he,we=(r("4818"),Object(d["a"])(ge,de,me,!1,null,"65ac5dd4",null)),xe=we.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-wrapper"},[r("div",{staticClass:"login-form"},[r("form",[r("p",{staticClass:"h4 text-center mb-4"},[e._v("Register")]),r("div",{staticClass:"grey-text"},[r("b-form-text",{attrs:{id:"input-name-help"}},[e._v("Your full name.")]),r("b-form-input",{attrs:{id:"input-name",name:"username",state:e.nameState,"aria-describedby":"input-name-help input-name-feedback",placeholder:"Enter your name",trim:""},model:{value:e.input.username,callback:function(t){e.$set(e.input,"username",t)},expression:"input.username"}}),r("b-form-invalid-feedback",{attrs:{id:"input-name-feedback"}},[e._v("Enter at least 4 letters")]),r("b-form-text",{attrs:{id:"input-password-help"}},[e._v("Your password.")]),r("b-form-input",{attrs:{id:"input-password",name:"password",type:"password",state:e.passwordState,"aria-describedby":"input-password-help input-password-feedback",placeholder:"Enter your password",trim:""},model:{value:e.input.password,callback:function(t){e.$set(e.input,"password",t)},expression:"input.password"}}),r("b-form-invalid-feedback",{attrs:{id:"input-password-feedback"}},[e._v("Enter at least 4 letters")]),r("b-form-text",{attrs:{id:"input-password-help"}},[e._v("Re-entered password.")]),r("b-form-input",{attrs:{id:"input-password_confirm",name:"password_confirm",type:"password",state:e.password_confirmState,"aria-describedby":"input-password_confirm-help input-password_confirm-feedback",placeholder:"Re-enter your password",trim:""},model:{value:e.input.password_confirm,callback:function(t){e.$set(e.input,"password_confirm",t)},expression:"input.password_confirm"}}),r("b-form-invalid-feedback",{attrs:{id:"input-password-feedback"}},[e._v("The passwords have to match.")])],1),r("div",{staticClass:"text-center",staticStyle:{"margin-top":"20px"}},[r("b-button",{on:{click:function(t){return e.handleClick()}}},[e._v("Register")])],1)])])])},ye=[],Re={name:"Register",computed:{nameState:function(){return this.input.username.length>3},passwordState:function(){return this.input.password.length>3},password_confirmState:function(){return!(this.input.password_confirm!=this.input.password||!this.passwordState)}},data:function(){return{input:{username:"",password:"",password_confirm:""}}},methods:{handleClick:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r={username:e.input.username,password:e.input.password},!(e.nameState&&e.passwordState&&e.password_confirmState)){t.next=7;break}return t.next=4,be.Register(r);case 4:n=t.sent,console.log("loginview: ",n),200===n.status&&e.$router.push({name:"registerSuccesful"});case 7:case"end":return t.stop()}}),t)})))()}}},ke=Re,je=(r("3de5"),Object(d["a"])(ke,_e,ye,!1,null,"1a6efb38",null)),Ce=je.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{margin:"40px"}},[r("b-jumbotron",{attrs:{header:"Registered succesfully!",lead:"Welcome to leffaApp!"}},[r("p",[e._v("You can start by logging in to your account or visit our home page.")]),r("b-button",{attrs:{variant:"primary",href:"/Login"}},[e._v("Login")]),r("b-button",{attrs:{variant:"secondary",href:"/"}},[e._v("Home")])],1)],1)},Se=[],Oe={name:"registerSuccesful"},De=Oe,Ee=Object(d["a"])(De,Ae,Se,!1,null,"732ddd5a",null),Me=Ee.exports,Ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",{attrs:{cols:"3"}},[r("LeftNavPanel",{attrs:{items:e.items}})],1),r("b-col",{attrs:{cols:"9"}},[r("router-view")],1)],1)],1)},Ne=[],Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-nav",{staticClass:"w-25",attrs:{vertical:""}},e._l(e.items,(function(t,n){return r("div",{key:n,staticClass:"navItem"},[r("b-nav-item",{attrs:{to:t.url,exact:"","exact-active-class":"active"}},[e._v(e._s(t.text))])],1)})),0)],1)},Le=[],Ue={name:"LeftNavigationPanel",props:{items:{type:Array}}},Pe=Ue,Be=(r("1834"),Object(d["a"])(Pe,Te,Le,!1,null,"7b7ba8ae",null)),Ye=Be.exports,He={name:"userProfile",data:function(){return{items:[{url:"/"+c.user+"/profile",text:"Profile"},{url:"/"+c.user+"/profile/reviews",text:"Reviews"},{url:"/"+c.user+"/profile/watchlist",text:"Watchlist"},{url:"/"+c.user+"/profile/settings",text:"Settings"}]}},components:{LeftNavPanel:Ye}},Ve=He,Fe=Object(d["a"])(Ve,Ie,Ne,!1,null,"6084f129",null),Ke=Fe.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"left",margin:"20px"}},[e.avatar?n("b-img",e._b({staticClass:"profile-image",attrs:{rounded:"circle",alt:"Circle image",src:"data:image/jpeg;base64,"+e.avatar}},"b-img",e.avatar,!1)):n("b-img",e._b({staticClass:"profile-image",attrs:{rounded:"circle",alt:"Circle image",src:r("92ef")}},"b-img",e.avatar,!1)),n("p",[e._v(e._s(this.username))]),n("hr"),e._v(" Profile description: "),n("p",[e._v(e._s(this.profileDescription))])],1)},qe=[],Ge={name:"ProfileHome",data:function(){return{avatar:null,username:null,profileDescription:null}},created:function(){this.getUserData()},methods:{getUserData:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be.getUser(c.id);case 2:r=t.sent,e.avatar=r.data.avatar,e.username=r.data.username,e.profileDescription=r.data.profileDescription||"",console.log("profile: "+r);case 7:case"end":return t.stop()}}),t)})))()}}},Ze=Ge,ze=(r("00f1"),Object(d["a"])(Ze,We,qe,!1,null,"7faaf3ac",null)),$e=ze.exports,Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"settings-container"}},[e.show?r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"input-group-username",label:"Username:","label-for":"input-username"}},[r("b-form-input",{attrs:{id:"input-username",required:"",disabled:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{id:"input-group-description",label:"Profile description:","label-for":"input-description"}},[r("b-form-input",{attrs:{id:"input-description",required:""},model:{value:e.form.profileDescription,callback:function(t){e.$set(e.form,"profileDescription",t)},expression:"form.profileDescription"}})],1),r("b-form-group",{attrs:{id:"input-group-avatar",label:"Avatar:","label-for":"input-avatar"}},[r("b-form-file",{attrs:{state:Boolean(e.form.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}}),e.avatar?r("b-img",e._b({staticClass:"profile-image",attrs:{rounded:"circle",alt:"Circle image",src:"data:image/jpeg;base64,"+e.avatar}},"b-img",e.avatar,!1)):e._e()],1),r("b-button",{staticClass:"form-button",attrs:{type:"submit",pill:"",variant:"primary"}},[e._v("Save")])],1):e._e()],1)},Xe=[],Je={name:"ProfileSettings",data:function(){return{form:{file:null,username:null,profileDescription:null},show:!0,avatar:be.avatar}},created:function(){this.getUserData()},methods:{onSubmit:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),n=new FormData,n.append("profileDescription",t.form.profileDescription),n.append("avatar",t.form.file),r.next=6,be.updateUserData(c.id,n);case 6:a=r.sent,console.log(a);case 8:case"end":return r.stop()}}),r)})))()},onReset:function(e){var t=this;e.preventDefault(),this.form.profileDescription="",this.form.username="",this.show=!1,this.$nextTick((function(){t.show=!0}))},getUserData:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,be.getUser(c.id);case 2:r=t.sent,e.avatar=r.data.avatar,e.form.username=r.data.username,e.form.profileDescription=r.data.profileDescription||"",console.log("profile: "+r);case 7:case"end":return t.stop()}}),t)})))()}}},et=Je,tt=(r("ec44"),Object(d["a"])(et,Qe,Xe,!1,null,"6ef7bbf6",null)),rt=tt.exports,nt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LatestReviewsContainer")],1)},at=[],it=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Your latest movie reviews")]),this.reviews.length>0?r("div",e._l(this.reviews,(function(e,t){return r("div",{key:t},[r("ReviewItem",{attrs:{data:e}})],1)})),0):r("div",[r("p",[e._v("Looks like you don't have any reviews yet.. You can browse our movie section to get started.")])])])},st=[],ot=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-media",{staticStyle:{margin:"20px"},scopedSlots:e._u([{key:"aside",fn:function(){return[r("img",{staticStyle:{"max-height":"200px"},attrs:{src:e.data.movie.Poster,alt:"Media Aside"}})]},proxy:!0}])},[r("div",{staticStyle:{"text-align":"left"}},[r("p",[e._v(e._s(e.data.movie.Title)+" ("+e._s(e.data.movie.Year)+")")]),r("p",[e._v("Review: "+e._s(e.data.review))]),r("p",[e._v("Rating: "+e._s(e.data.rating)+"/10")])])]),r("hr")],1)},ut=[],ct={name:"LatestReviewsItem",props:{data:Object}},lt=ct,pt=Object(d["a"])(lt,ot,ut,!1,null,"6ae23350",null),dt=pt.exports,mt={name:"LatestReviewsContainer",data:function(){return{isAuth:c.isAuthenticated,id:c.id,reviews:null,loading:!0}},mounted:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.id),t.next=3,F.getUserReviews(e.id);case 3:r=t.sent,e.reviews=r.data,e.loading=!1,console.log(e.reviews);case 7:case"end":return t.stop()}}),t)})))()},components:{ReviewItem:dt}},ft=mt,vt=Object(d["a"])(ft,it,st,!1,null,"7f48f40c",null),bt=vt.exports,ht={name:"ProfileReviews",components:{LatestReviewsContainer:bt}},gt=ht,wt=Object(d["a"])(gt,nt,at,!1,null,"0aed7479",null),xt=wt.exports;n["default"].use(a["a"]);var _t=[{path:"/",name:"home",component:D},{path:"/movies",name:"movies",component:pe},{path:"/login",name:"login",component:xe},{path:"/register",name:"register",component:Ce},{path:"/welcome",name:"registerSuccesful",component:Me},{path:"/:username/profile/",name:"userProfile",component:Ke,children:[{path:"",name:"userHome",component:$e},{path:"reviews",name:"userReviews",component:xt},{path:"settings",name:"userSettings",component:rt}]}];function yt(){return new a["a"]({routes:_t,mode:"history"})}var Rt=r("5f5b"),kt=r("b1e0"),jt=yt();n["default"].use(a["a"]),n["default"].use(Rt["a"]),n["default"].use(kt["a"]),n["default"].config.productionTip=!1,new n["default"]({router:jt,render:function(e){return e(g)}}).$mount("#app")},"593c":function(e,t,r){e.exports=r.p+"img/2.580b0b9e.jpg"},6800:function(e,t,r){e.exports=r.p+"img/3.a9dd58f5.jpg"},"6f6b":function(e,t,r){},"85ec":function(e,t,r){},"92ef":function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEUpMTNWXmBVXV8mLjAqMjQtNTdZYmRJUVM9RUdQWFovNzlMVFZPV1k+Rkg6QkQ1PT9DS00jKy2BFSCAAAAF8ElEQVR4nO2diY7jIAyGAyZJkzRH3/9ll6OZzfQaSOxgKn/SSjvS7rS/DDY2YKpKEARBEARBEARBEARBEARBEARBEARBEAThKzG5vwAxZhUIkPV7UAGWqq57Rx1++hpMBTfop2XotAro7touU+9kmuJHrhUA83JVr9DD2AdLlmxPK89bTr/UqFQ31sWOV2c9c+mau71emFBr+0epYSpVI5jlneUetV5KHKdQxeqz9m26qTiJMOkmVqHnOpek0UA9pKgLtKVMR2MFTsGPJGHdjjVjGeER2vfR4TNjEVaEvtulztPm/vZ/YgdZr3ca0I1sda25D1SY1d4hGv6j7nNL+Iz1MbvlrSp7zlb0FjyKrhn7GwyBTmJuHS9xI6tWB+bghmtuMW8w1YEw8ZvhxnIq3loUA/qgwTL0wwVFXtDYcFyH93gCnUZ+CgFtEnqBauEmEUZMgY45t6RH9q9G33DlZUSXMGHDqrBhanyBusutaguFCZW6MDKioRCoOj4KYSFRyGkmIrvRlYGJQl9ao4FLpggDdixcGXNLW6GRp/hE/akhEqgVi7KUoQmGgUtudQHUrGKLVi2LYYqbGD5o5KCQLlY4OExEymlolzW55VU+GhLCIdUH9Nx3CwdXA3TylIv5+SunBMnvho7BNg3OXsU7dH6BVmHqjn0SDHZpju8YfiR/QKQN+KLwFEThQRh4GuJowUBhT5XhB4UM4iFdlcbBobRPuS7VLEqm0NGFfB5lDMA6oPBKIItSFP7u71bhzCC3oA0XDAZpVRm6lbfmscEGr2/EYAhkUaapDOFE5HIgg6wkrHVuaXdwDwtt4RANKzdMiTa5VcNkkNINUw0Maokeqk1gNlvANujTZFAM8vsVGl/DxM8ESEoZjExIs65hZUKcixYP1FwcaQB/n3TkkDf9B6oa2Z1yKND8BkZciWyWM//B3e1ebrn1vADzkCmPzPcRTH9qWCrEq0m5nIKVI/3hhhQyJnenm6dEDG/D9FrXynGJumFRfXrPYYnNyGux9syxIj/zIeoxt0NVG473Dp84EBe7vgSBVmJ9TV6j+nZDvDLCjyTXF93U1RfuPmYL9MlJf1uV0rtlZdJh8EXJa7oiXMxvwIw6ogGB/wcFtonyQDV2MS7nOrGpbScD1dz+WGp7SPPn741eQoQoVaITObVP9eK7wKZr53LNt2INdDP95Vll10595TpDljkF/2NCf0FLP1/GxTNOc39v71m6vN8AhLal39W8VBAEQRAEQRAEIRaCJN1snsPgUAOA8ChHjUZvQjLpSqi5U0n3RMU8LkPXKVdWazBwv0cp7d7AmDMKNF5e/aLMhIrulsmEysDZAu3H9kswHDnD6BtGnTshoV5ojbfBlR6vzpKnqbNuYB5+Pvs0XOn4BDM6N271nTI4nxjO2UCF+Xqy8TzhE1t6jdAH+50v8U5L61ShIrzjFImeCHc6YD7Nf77Vp3Qz0DUbpLr9k4q+0HhVQ3bPMJ2WYMEKc9iXZwL+Awrh7CgXgW6HdcZzOO43wZInxn8Cs80wafPHnWjE0+7WhKRN5/aDchLVnUam7ap3BKTDtgyH6A8IEg1ngdq98nXYo2Lf9sFFHz9yS93K6yDa38M8ZEbaHknH0UcvuRF29UDjUBsixl5mw4Hj/ZjP/1Cy+64ixbscJOxs3W4MXb98XNxFon3ulHeg2LC7O30RBgwMezY2yHqykDDteKW9LmMSerTSqTPRGMJGcySkZ/zYHQSoSW4ptf/V4lykGrEuTWBq87qyHGkgbe0GZRlQJbc6BbLHcehIW9jAUJwNlStLRcdEKM7PeOJ9jev1WKDAFF9D16+TlvjqKc1zhvTEDlNTTmL4QBPbwL2M+tMzOrpzdHnhfiW2ZUGp0zB6IjIv5H8kbllT4qp7Zapi1jV8N0T/IrY7Nl3jY3riXE1drCuNrX7TPqtCzN8KTeEK//YzpqBi/isiwgVpm3x6YhKoksNhzKuepnSFEc601MwiEFMX/nqFHM8hJiAKRSF/RKEo5I8oFIX8EYXfqPAfLjFlcaHrhCkAAAAASUVORK5CYII="},"98a8":function(e,t,r){e.exports=r.p+"img/1.298a4c13.jpg"},a166:function(e,t,r){"use strict";var n=r("b51a"),a=r.n(n);a.a},a7bb:function(e,t,r){},aa38:function(e,t,r){"use strict";var n=r("4701"),a=r.n(n);a.a},b51a:function(e,t,r){},b5a1:function(e,t,r){var n={"./1.jpg":"98a8","./2.jpg":"593c","./3.jpg":"6800","./4.jpg":"ffd7","./5.jpg":"546a","./avatar.jpg":"92ef"};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="b5a1"},bc12:function(e,t,r){},c4c5:function(e,t,r){"use strict";var n=r("6f6b"),a=r.n(n);a.a},e483:function(e,t,r){"use strict";var n=r("a7bb"),a=r.n(n);a.a},ec44:function(e,t,r){"use strict";var n=r("3cf1"),a=r.n(n);a.a},f5dd:function(e,t,r){},ffd7:function(e,t,r){e.exports=r.p+"img/4.64978586.jpg"}});
//# sourceMappingURL=app.52450cfd.js.map