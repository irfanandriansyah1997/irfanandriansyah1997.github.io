webpackJsonp([1],{126:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=r(0),u=a(l),c=r(21),d=(a(c),function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"notfoundPages absolute flex"},u.default.createElement("div",{className:"absolute",style:{width:"100%",height:"100%",zIndex:0}},u.default.createElement("div",{className:"iron-image"}),u.default.createElement("div",{className:"iron-image"}),u.default.createElement("div",{className:"iron-image"}),u.default.createElement("div",{className:"iron-image"}),u.default.createElement("div",{className:"iron-image"})),u.default.createElement("svg",{width:"350",height:"150",className:"absolute"},u.default.createElement("text",{x:"90",y:"105",stroke:"url(#MyGradient)",fill:"none",strokeOpacity:"1",strokeWidth:"1",fontSize:"70"},"404"),u.default.createElement("defs",null,u.default.createElement("linearGradient",{id:"MyGradient"},u.default.createElement("stop",{offset:"5%",stopColor:"#fc466b"}),u.default.createElement("stop",{offset:"95%",stopColor:"#b84e9e"})))),u.default.createElement("h1",{className:"block relative","data-text":"Dumbass !"},"Dumbass !"),u.default.createElement("span",{className:"block relative","data-text":"This page doesn't exist."},"This page doesn't exist."))}}]),t}(l.Component));t.default=d},15:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=t.SHOW_TITLE="SHOW_TITLE",o=t.HIDDEN_TITLE="HIDDEN_TITLE",i={expression:{text:"Welcome",delay:610,offset:325},main:{text:"to my website",delay:987,offset:100},user:{text:"By Irfan Andriansyah",delay:987,offset:50},show:!0};t.TitleReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case n:return a({},e,{show:!0});case o:return a({},e,{show:!1});default:return e}}},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=t.SHOW_TILT="SHOW_TILT",o=t.HIDDEN_TILT="HIDDEN_TILT",i={show:!1,delay:1e3};t.MainReduces=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case n:return a({},e,{show:!0});case o:return a({},e,{show:!1});default:return e}}},17:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=t.SHOW_MENU="SHOW_MENU",o=t.HIDDEN_MENU="HIDDEN_MENU",i={show:!1,delay:1e3,menu:[{index:1,primary:"Home",secondary:"Starting Page",key:"home_pages"},{index:2,primary:"Our Work",secondary:"Some Of My Productions",key:"portfolio_pages"},{index:3,primary:"About Me",secondary:"Contact Saya",key:"about_me"}],contact:[{name:"facebook",type:"link",address:"https://web.facebook.com/irfan.andriansyah.5"},{name:"•",type:"gap"},{name:"linked in",type:"link",address:"https://www.linkedin.com/in/irfan-andriansyah-1a46327a/"},{name:"•",type:"gap"},{name:"medium",type:"link",address:"https://medium.com/@irfanandriansyah10"},{name:"•",type:"gap"},{name:"github",type:"link",address:"https://github.com/irfanandriansyah1997"},{name:"•",type:"gap"},{name:"irfanandriansyah10@gmail.com",type:"email",address:"irfanandriansyah10@gmail.com"}]};t.MenuReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case n:return a({},e,{show:!0});case o:return a({},e,{show:!1});default:return e}}},18:function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=t.SET_ACTIVE="SET_ACTIVE_PAGES",i=t.SET_STYLE="SET_STYLE_PAGES",s=t.STOP_LOADING="STOP_LOADING_PAGES",l={pages:[{name:"homepages",active:!0,style:{background:"linear-gradient(45deg, #414345, #53346D)"}},{name:"portfolio",active:!1,style:{background:"rgb(222, 222, 214)"}},{name:"about",active:!1,style:{backgroundColor:"background: linear-gradient(135deg, #414345, #232526)"}}],active:0,loading:!0,status:"down"};t.PagesReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case o:return n({},e,{active:t.payload.key,pages:[].concat(a(e.pages.slice(0,t.payload.key).map(function(e){return e.active=!1,e})),[Object.assign({},e.pages[t.payload.key],{active:!0})],a(e.pages.slice(t.payload.key+1).map(function(e){return e.active=!1,e}))),status:t.payload.status});case s:return n({},e,{loading:!1});case i:return n({},e,{pages:[].concat(a(e.pages.slice(0,t.payload.key)),[Object.assign({},e.pages[t.payload.key],{styles:t.payload.styles})],a(e.pages.slice(t.payload.key+1))),status:t.payload.status});default:return e}}},19:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=t.SET_ACTIVE="SET_ACTIVE_CONTACT",o=t.SET_INACTIVE="SET_INACTIVE_CONTACT",i={active:!1};t.ContactReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;switch(arguments[1].type){case n:return a({},e,{active:!0});case o:return a({},e,{active:!1});default:return e}}},20:function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=t.SHOW_ACTIVE_PAGES="SHOW_CAROUSEL_PAGES",i=t.RESET_ACTIVE_PAGES="RESET_CAROUSEL_PAGES",s={active:0,delay:2500,menu:[{index:1,detail:{title:"POS Cashier",secondary:"Layout",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis fermentum neque, ac lobortis urna ullamcorper ut.",style:{left:"28%",top:"30%",textAlign:"left"},styleText:{left:"28%",top:"55%",textAlign:"left",width:"40%"},styleSiluet:{right:"0%",top:"-10%"}},image:{src:"1.jpg",style:{left:"0%",right:"75%"}},cover:{style:{background:"#fe8669"},left:{transform:"translate3d(0%, 0, 0)"},right:{transform:"translate3d(-75%, 0, 0)"}},multi:!1,link:"https://invis.io/RAEQ7BONF",active:!1},{index:2,detail:{title:"IMDB Design",secondary:"Layout",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis fermentum neque, ac lobortis urna ullamcorper ut.",style:{left:"0%",top:"15%",textAlign:"left"},styleText:{left:"0%",top:"40%",textAlign:"left",width:"30%"},styleSiluet:{right:"0%",bottom:"-10%"}},image:{src:"2.jpg",style:{left:"30%",right:"30%"}},cover:{style:{background:"#ed3e7b"},left:{transform:"translate3d(30%, 0, 0)"},right:{transform:"translate3d(-30%, 0, 0)"}},multi:!1,link:"https://invis.io/3XECMIX8U",active:!1},{index:3,detail:{title:"Kopi Gayo",secondary:"Website",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis fermentum neque, ac lobortis urna ullamcorper ut.",style:{right:"53%",top:"25%",textAlign:"right"},styleText:{right:"53%",top:"50%",textAlign:"right",width:"40%"},styleSiluet:{left:"0%",top:"-14%"}},image:{src:"3.jpg",style:{left:"50%",right:"5%"}},cover:{style:{background:"#FFA000"},left:{transform:"translate3d(50%, 0, 0)"},right:{transform:"translate3d(-5%, 0, 0)"}},multi:!1,link:"http://www.kopi-gayo.web.id/",active:!1}]};t.PortfolioReducers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case o:return n({},e,{active:t.payload.key,menu:[].concat(a(e.menu.slice(0,t.payload.key).map(function(e){return e.active=!1,e})),[Object.assign({},e.menu[t.payload.key],{active:!0})],a(e.menu.slice(t.payload.key+1).map(function(e){return e.active=!1,e})))});case i:return n({},e,{active:t.payload.key,menu:[].concat(a(e.menu.map(function(e){return e.active=!1,e})))});default:return e}}},21:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=r(0),c=a(u),d=r(1),f=a(d),p=r(22),y=a(p),m=r(36),g=a(m),h=r(37),v=a(h),b=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.ironImageHd=null,r.textArray=new y.default,r}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.props=s({},this.props,{srcLoaded:this.textArray.checkURL(this.props.srcLoaded)?this.props.srcLoaded:"./assets/images/"+this.props.srcLoaded}),(new Image).src=this.props.srcLoaded,(0,v.default)(this.props.srcLoaded,function(t){e.ironImageHd.setAttribute("style","background-image: url("+t+")"),e.ironImageHd.classList.add("iron-image--fade-in")})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"iron-image",style:this.props.style},c.default.createElement("div",{className:"iron-image iron-image__default",ref:function(t){e.ironImageHd=t}}),c.default.createElement("div",{className:"iron-image iron-image__loaded",style:{backgroundImage:"url('"+this.props.srcPreload+"')"},ref:function(t){e.ironImageDefault=t}}),this.props.children)}}]),t}(u.Component);b.propTypes={srcPreload:f.default.any,children:f.default.any,srcLoaded:f.default.string.isRequired,style:f.default.object},b.defaultProps={srcPreload:g.default,style:{},children:null},t.default=b},22:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=function(){function e(){a(this,e)}return n(e,[{key:"checkURL",value:function(e){if(e){var t=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/,r=new RegExp(t);if(e.match(r))return!0}return!1}}]),e}();t.default=o},34:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return(0,o.createStore)(u.default,e,(0,o.applyMiddleware)(s.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(7),i=r(60),s=a(i),l=r(35),u=a(l)},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),n=r(15),o=r(16),i=r(17),s=r(18),l=r(19),u=r(20);t.default=(0,a.combineReducers)({ContactReducers:l.ContactReducers,TitleReducers:n.TitleReducers,MainReduces:o.MainReduces,MenuReducers:i.MenuReducers,PagesReducers:s.PagesReducers,PortfolioReducers:u.PortfolioReducers})},36:function(e,t,r){e.exports=r.p+"images/background.svg"},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){var r=new XMLHttpRequest;r.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(r.response)},r.open("GET",e),r.responseType="blob",r.send()};t.default=a},38:function(e,t){},39:function(e,t){},64:function(e,t,r){e.exports=r(65)},65:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=r(0),o=a(n),i=r(12),s=r(2),l=r(52),u=r(34),c=a(u),d=r(126),f=a(d);r(38),r(39);var p=(0,c.default)();(0,i.render)(o.default.createElement(s.Provider,{store:p},o.default.createElement(l.HashRouter,null,o.default.createElement(f.default,null))),document.getElementById("app"))}},[64]);