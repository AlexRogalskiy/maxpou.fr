(self.webpackChunkmaxpou_fr=self.webpackChunkmaxpou_fr||[]).push([[20],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7757:function(e,t,r){e.exports=r(5666)},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),i=r(7316),c=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),d=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,c),l=p(t),f=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:d},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(f,s({},a))}},4244:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=r(1721),o=r(7294),a=r(9),i=r(2044),c=r(5444),l=a.default.div.withConfig({displayName:"Translations__TranslationContainer",componentId:"sc-1mxuvxf-0"})(["border-radius:5px;padding:10px;margin-top:10px;background-color:var(--color-lightYellow);border:1px solid var(--color-grey700);"]),s=a.default.span.withConfig({displayName:"Translations__InfoText",componentId:"sc-1mxuvxf-1"})(["color:var(--color-grey900);"]),u=a.default.a.withConfig({displayName:"Translations__TranslationLink",componentId:"sc-1mxuvxf-2"})(["color:var(--color-grey900);text-decoration:underline;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.translations;return o.createElement(l,null,o.createElement(s,null,"This article also exists in: "),e.map((function(t,r){return o.createElement(o.Fragment,{key:"translation-"+r},o.createElement(u,{href:(0,c.withPrefix)(t.link)},t.language),r<e.length-1?", ":"")})))},t}(o.Component),p=d,f=a.default.time.withConfig({displayName:"Time__TimeContainer",componentId:"sc-hoimeu-0"})(["color:var(--color-textSecondary);"]),h=function(e){var t=e.date,r=new Date(t),n=r.toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"numeric"}).split("/").reverse().join("-"),a=r.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"});return o.createElement(f,{datetime:n},a)},g=r(8578),m=a.default.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-snwgmv-0"})(["margin-bottom:2rem;color:var(--color-textSecondary);font-size:0.9em;"]),A=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.date,r=e.tags,n=e.translations;return o.createElement(m,null,t&&o.createElement(h,{date:t}),t&&Array.isArray(r)&&r.length>0&&o.createElement(g.fU,null),Array.isArray(r)&&r.length>0&&o.createElement(o.Fragment,null,o.createElement(i.Z,{tags:r})),n&&o.createElement(p,{translations:n}))},t}(o.Component),v=A,y=r(3395),b=r.n(y),w=a.default.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-1hjk74l-0"})(["line-height:1.6;& > h2{color:var(--color-h2);padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{fill:var(--color-text);box-shadow:0 2px 0 0 var(--color-secondary);&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}h1 .anchor svg,h2 .anchor svg,h3 .anchor svg,h4 .anchor svg,h5 .anchor svg,h6 .anchor svg{visibility:hidden;margin-left:-16px;}h1:hover .anchor svg,h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg,h1 .anchor:focus svg,h2 .anchor:focus svg,h3 .anchor:focus svg,h4 .anchor:focus svg,h5 .anchor:focus svg,h6 .anchor:focus svg{visibility:visible;}& > blockquote{box-sizing:border-box;background-color:var(--color-secondaryContentBackground);border-left:5px solid var(--color-secondary);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em -1.5em;@media (max-width:500px){border-radius:0;margin-left:-25px;margin-right:-25px;}}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}& .gatsby-highlight-code-line{background-color:var(--color-darkBlue);display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid var(--color-yellow);}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:var(--color-beige);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;word-wrap:break-word;}& code{word-wrap:break-word;}& table{margin-top:1em;margin-bottom:1em;border-collapse:collapse;overflow:hidden;& th,& td{padding:0.5em;background-color:var(--color-secondaryContentBackground);}& tr{border-bottom:2px solid var(--color-white);}& tbody tr:last-child{border-bottom:none;}}"]),x=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.content,r=e.date,n=e.tags,a=e.translations;return o.createElement("section",null,(n||r||a)&&o.createElement(v,{date:r,tags:n,translations:a}),o.createElement(w,null,o.createElement(b(),null,t)))},t}(o.Component),E=x},3270:function(e,t,r){"use strict";var n=r(7294),o=r(9),a=r(2359),i=o.default.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1nqmuvx-0"})(["position:relative;display:grid;width:100%;height:400px;"]),c=o.default.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1nqmuvx-1"})(["grid-area:1/1;position:relative;place-items:center;display:grid;"]),l=o.default.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1nqmuvx-2"})(["text-align:center;font-weight:700;font-size:3rem;margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]),s=o.default.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-1nqmuvx-3"})(["margin:10px 50px;color:var(--color-white);text-shadow:1px 1px 4px rgba(34,34,34,0.85);"]);t.Z=function(e){var t="../../content/images/cover.jpg",o=(0,a.d)(e.heroImg)||t,u=!!(0,a.d)(e.heroImg);return n.createElement(i,{style:{display:"grid"}},u&&n.createElement(a.G,{style:{gridArea:"1/1"},layout:"fullWidth",placeholder:"blurred",alt:"",image:o,formats:["auto","webp","avif"]}),!u&&n.createElement(a.S,{style:{gridArea:"1/1"},layout:"fullWidth",placeholder:"blurred",alt:"",src:t,formats:["auto","webp","avif"],__imageData:r(7171)}),n.createElement(c,null,n.createElement("div",null,n.createElement(l,null,e.title),e.subTitle&&n.createElement(s,null,e.subTitle))))}},2044:function(e,t,r){"use strict";var n=r(1721),o=r(7294),a=r(5444),i=r(9),c=i.default.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-1areet5-0"})(["display:inline;color:var(--color-textSecondary);"]),l=(0,i.default)(a.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-1areet5-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),s=i.default.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-1areet5-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,r=e.noLink;return o.createElement(c,null,t.map((function(e,n){return o.createElement(o.Fragment,{key:"tag-list-"+n},!r&&o.createElement(l,{to:"/tags/"+e},e),r&&o.createElement(s,{to:"/tags/"+e},e),n<t.length-1?", ":"")})))},t}(o.Component);t.Z=u},2829:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(7294),o=r(9);function a(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){a(i,n,o,c,l,"next",e)}function l(e){a(i,n,o,c,l,"throw",e)}c(void 0)}))}}var c=r(7757),l=r.n(c),s=function(e){var t=(0,n.useState)(0),r=t[0],o=t[1],a=(0,n.useState)(!0),c=a[0],s=a[1];return(0,n.useEffect)(i(l().mark((function t(){var r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.reddit.com/comments/"+e+".json");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,o(n[0].data.children[0].data.score),s(!1);case 8:case"end":return t.stop()}}),t)}))),[]),[r,c]},u=r(2359),d=o.default.div.withConfig({displayName:"RedditScore__RetweetContainer",componentId:"sc-1ra5h2x-0"})(["display:inline;color:#ff4500;padding-left:12px;& > a{color:#ff4500;& > *{transform:translateX(5%) translateY(10%);}}"]),p=function(e){var t=s(e.redditPostId)[0];return n.createElement(d,null,n.createElement("a",{href:"https://www.reddit.com/"+e.redditPostId,rel:"noopener",target:"_blank"},t,n.createElement(u.S,{src:"./icons/reddit-up.png",alt:"score Reddit",height:20,width:32,__imageData:r(6670)})))},f=r(4826),h=r.p+"static/bird-heart-77e32f00c60905a7adfc30a40c70cc61.png",g=function(e){return n.createElement("svg",Object.assign({"aria-label":"Like",viewBox:"0 0 48 48",height:"48pt",width:"48pt",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fill:"currentColor",d:"M23.99291,15.87187l1.0159-0.8889c1.3968-1.2275,3.118-1.8341,4.8535-1.8341 c2.0316,0,4.0351,0.8324,5.4883,2.4549c2.5961,2.9347,2.4127,7.3508-0.3386,10.0597l-9.8284,8.7357 c-0.6794,0.6026-1.7019,0.6026-2.3814,0l-9.8143-8.7357c-2.7512-2.6948-2.9346-7.125-0.3386-10.0597 c1.4532-1.6225,3.4567-2.4549,5.4884-2.4549c1.7213,0,3.4567,0.6066,4.8535,1.8341L23.99291,15.87187"}))},m=function(e){return n.createElement("svg",Object.assign({"aria-label":"Retweet",height:"512pt",viewBox:"0 -91 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fill:"currentColor",d:"m512 250.644531-79.796875 79.671875-80.363281-80.03125 28.210937-28.328125 31.871094 31.738281v-193.613281c.035156-5.277343-1.996094-10.246093-5.71875-13.992187-3.757813-3.785156-8.777344-5.867188-14.128906-5.867188h-215.230469l-40.144531-39.980468h255.375c16.082031 0 31.171875 6.277343 42.492187 17.667968 11.265625 11.34375 17.417969 26.382813 17.332032 42.363282v193.882812l31.851562-31.804688zm-184.039062 39.449219h-208.035157c-5.355469 0-10.371093-2.082031-14.128906-5.863281-3.722656-3.746094-5.753906-8.71875-5.71875-13.996094v-193.613281l31.871094 31.738281 28.210937-28.328125-80.363281-80.03125-79.796875 79.675781 28.25 28.289063 31.851562-31.800782v193.878907c-.085937 15.980469 6.066407 31.023437 17.332032 42.363281 11.320312 11.390625 26.410156 17.667969 42.492187 17.667969h255.375l-40.144531-39.980469zm0 0"}))},A=r(8578),v=o.default.img.withConfig({displayName:"Webmentions__LikedByImg",componentId:"sc-1wsy4io-0"})(["margin-right:25px;display:inline-block;"]),y=o.default.h2.withConfig({displayName:"Webmentions__MentionTitle",componentId:"sc-1wsy4io-1"})(["display:inline;"]),b=o.default.div.withConfig({displayName:"Webmentions__LikeContainer",componentId:"sc-1wsy4io-2"})(["display:inline;color:#e0245e;padding-right:3px;& > svg{transform:translateX(-15%) translateY(25%);}"]),w=o.default.div.withConfig({displayName:"Webmentions__RetweetContainer",componentId:"sc-1wsy4io-3"})(["display:inline;color:#17bf63;& > svg{transform:translateX(0%) translateY(20%);}"]),x=o.default.div.withConfig({displayName:"Webmentions__LikeListContainer",componentId:"sc-1wsy4io-4"})(["margin-top:1em;"]),E=o.default.ul.withConfig({displayName:"Webmentions__UserLikeList",componentId:"sc-1wsy4io-5"})(["display:inline;padding:10px 0 10px 10px;margin:0;list-style:none;flex-wrap:wrap;"]),_=o.default.li.withConfig({displayName:"Webmentions__UserLikeListItem",componentId:"sc-1wsy4io-6"})(["display:inline-block;&:nth-child(n + 2){margin-left:-13px;}"]),j=o.default.img.withConfig({displayName:"Webmentions__UserImg",componentId:"sc-1wsy4io-7"})(["border-radius:40px;height:48px;background-color:var(--color-wrapperBackground);"]),k=function(e){var t=(0,f.Z)().siteUrl+"/"+e.slug,r=(0,n.useState)([]),o=r[0],a=r[1],i=(0,n.useState)(0),c=i[0],l=i[1],s=(0,n.useState)(0),u=s[0],d=s[1];return(0,n.useEffect)((function(){fetch("https://webmention.io/api/count.json?target="+t+"/").then((function(e){return e.json()})).then((function(e){d(e.type.like||0),l(e.type.repost||0)}))}),[]),(0,n.useEffect)((function(){fetch("https://webmention.io/api/mentions.jf2?per-page=100&target="+t+"/").then((function(e){return e.json()})).then((function(e){var t=e.children;a(t.filter((function(e){return"like-of"===e["wm-property"]})))}))}),[]),n.createElement("div",null,n.createElement(y,null,"Webmentions"),n.createElement(A.fU,null),n.createElement(b,null,u," ",n.createElement(g,{height:"24px",width:"24px"})),n.createElement(w,null,c," ",n.createElement(m,{height:"24px",width:"24px"})),e.redditPostId&&n.createElement(p,{redditPostId:e.redditPostId}),o.length>0&&n.createElement(x,null,n.createElement(v,{src:h,alt:"Liked by:",height:"48px",width:"56px"}),n.createElement(E,null,o.map((function(e){return n.createElement(_,{key:"liked-by-"+e["wm-id"]},n.createElement("a",{href:e.author.url},n.createElement(j,{src:e.author.photo,alt:e.author.name,width:"48px",height:"48px"})))})))),n.createElement(A.xv,null,n.createElement(A.rU,{href:"https://twitter.com/search?q="+t},"You can like or tweet about this post")," ","and it will show up here!"))}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return B()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?h:p,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",g={};function m(){}function A(){}function v(){}var y={};l(y,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(L([])));w&&w!==r&&n.call(w,a)&&(y=w);var x=v.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:B}}function B(){return{value:t,done:!0}}return A.prototype=v,l(x,"constructor",v),l(v,"constructor",A),A.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===A||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},E(_.prototype),l(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},7171:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGBrmroyFIf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAIBAwQTMUL/2gAIAQEAAQUCryGV9qk2Kep6f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAECEBEgMf/aAAgBAQAGPwJQzWI5j//EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhMUH/2gAIAQEAAT8hZg7SO4rwlqPOJW+z/9oADAMBAAIAAwAAABDDz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EIj/xAAfEAEAAgEDBQAAAAAAAAAAAAABABEhMUGBUWGhscH/2gAIAQEAAT8Q2YEBHZdMwu7OSWWXiC226nuK3fT7BYI5n//Z"},"images":{"fallback":{"src":"/static/c216047eb32760da01d043869ab00f28/dac54/cover.jpg","srcSet":"/static/c216047eb32760da01d043869ab00f28/5f965/cover.jpg 750w,\\n/static/c216047eb32760da01d043869ab00f28/76f9a/cover.jpg 1080w,\\n/static/c216047eb32760da01d043869ab00f28/54fb8/cover.jpg 1366w,\\n/static/c216047eb32760da01d043869ab00f28/dac54/cover.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/c216047eb32760da01d043869ab00f28/06049/cover.avif 750w,\\n/static/c216047eb32760da01d043869ab00f28/0f115/cover.avif 1080w,\\n/static/c216047eb32760da01d043869ab00f28/c833e/cover.avif 1366w,\\n/static/c216047eb32760da01d043869ab00f28/343e8/cover.avif 1920w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/c216047eb32760da01d043869ab00f28/ee7ce/cover.webp 750w,\\n/static/c216047eb32760da01d043869ab00f28/819dc/cover.webp 1080w,\\n/static/c216047eb32760da01d043869ab00f28/7b8ce/cover.webp 1366w,\\n/static/c216047eb32760da01d043869ab00f28/e0a47/cover.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5}')},6670:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f82808","images":{"fallback":{"src":"/static/48ce5436eba19b51e079324f1d1dcb6f/feb72/reddit-up.png","srcSet":"/static/48ce5436eba19b51e079324f1d1dcb6f/5953f/reddit-up.png 8w,\\n/static/48ce5436eba19b51e079324f1d1dcb6f/eb176/reddit-up.png 16w,\\n/static/48ce5436eba19b51e079324f1d1dcb6f/feb72/reddit-up.png 32w,\\n/static/48ce5436eba19b51e079324f1d1dcb6f/d45ea/reddit-up.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/48ce5436eba19b51e079324f1d1dcb6f/a4655/reddit-up.webp 8w,\\n/static/48ce5436eba19b51e079324f1d1dcb6f/53c60/reddit-up.webp 16w,\\n/static/48ce5436eba19b51e079324f1d1dcb6f/f19d1/reddit-up.webp 32w,\\n/static/48ce5436eba19b51e079324f1d1dcb6f/b8646/reddit-up.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":20}')}}]);
//# sourceMappingURL=6dae301c9709e8c5899acc3516b7dd8f43382179-58416297410741abb84e.js.map