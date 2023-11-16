"use strict";(self.webpackChunkside_trail_software_development=self.webpackChunkside_trail_software_development||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return i},a:function(){return l},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:C},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],j=new Set;let T,z;const I=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,O);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:E,className:x}=w,k=i(w,_),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(z&&j.has(S))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(S),image:n},h)),j.has(S)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,S,j,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(S)&&z&&(N.current.innerHTML=z(l({isLoading:j.has(S),isLoaded:j.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},E,s,{backgroundColor:d}),className:x+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));P.propTypes=L,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,R);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const A=q((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:C,layout:L,images:O,placeholder:_,backgroundColor:j}=o,T=c(w,C,L),{style:z,className:I}=T,P=i(T,N),R={fallback:void 0,sources:[]};return O.fallback&&(R.fallback=l({},O.fallback,{srcSet:O.fallback.srcSet?S(O.fallback.srcSet):void 0})),O.sources&&(R.sources=O.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,l({},P,{style:l({},z,s,{backgroundColor:h}),className:I+(a?" "+a:"")}),r.createElement(g,{layout:L,width:w,height:C},r.createElement(E,l({},u(_,!1,L,w,C,j,y,v))),r.createElement(x,l({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,R,m,f)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const H=q(P);H.displayName="StaticImage",H.propTypes=F},987:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(231),s=a(4160),l=a(8032),i=a(7896),o=a(5434);var c=()=>{const{site:{siteMetadata:{menuLinks:e}}}=(0,s.K2)("4287280192"),{pathname:t}=(0,i.useLocation)(),[n,c]=r.useState(!1);return r.useEffect((()=>{const e=document.querySelector("html");n?null==e||e.classList.add("overflow-hidden"):null==e||e.classList.remove("overflow-hidden")}),[n]),r.createElement("nav",{className:"sticky "+(n?"min-h-screen":"shadow")+" z-50 top-0 w-full bg-white"},r.createElement("div",{className:"grid"},r.createElement("div",{className:"flex items-center justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1"},r.createElement(l.S,{src:"../../images/logo.png",alt:"",height:32,layout:"fixed",placeholder:"none",__imageData:a(8845)})),r.createElement("div",{onClick:()=>c(!n),className:"absolute flex flex-col justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1"},n?r.createElement(o.FU5,{size:32}):r.createElement(o.xXU,{size:32}))),r.createElement("div",{hidden:!n,className:"p-4"},r.createElement("div",{className:"flex flex-col text-xl gap-3"},e.map((e=>r.createElement("div",{key:e.name},r.createElement(s.rU,{to:e.link,onClick:()=>{e.link===t&&c(!1)}},e.name)))))))};var d=e=>{let{hero:t,children:a}=e;const[s,l]=r.useState(Boolean(t)),i=r.useRef(null);return r.useEffect((()=>{const e=i.current;if(!e)return;const t=new IntersectionObserver((e=>{let[t]=e;l(t.isIntersecting)}),{threshold:.95});return t.observe(e),()=>t.unobserve(e)}),[s,l,i]),r.createElement("div",{className:"flex flex-col min-h-screen font-base"},r.createElement(c,null),r.createElement("main",{className:"flex flex-col flex-1"},t?r.createElement("div",{ref:i,className:"grid shadow-xl"},r.createElement("div",{className:"col-start-1 col-end-1 row-start-1 row-end-1"},t.image),r.createElement("div",{className:"col-start-1 col-end-1 row-start-1 row-end-1 relative"},r.createElement("div",{className:"h-full flex flex-col"},t.content))):null,a),r.createElement("footer",{className:"flex flex-row items-center py-2 md:py-4 md:px-8 bg-zinc-800 text-white"},r.createElement("div",{className:"hidden md:block"},r.createElement("a",{href:"https://github.com/SpencerHaan/side-trails-dev",target:"_blank"},r.createElement(n.tvD,{size:24}))),r.createElement("div",{className:"flex flex-wrap flex-1 justify-center gap-1 text-xs md:text-sm italic"},r.createElement("p",null,"© 2023 Side Trails Software Development, Spencer Haan."),r.createElement("p",null,"All rights reserved.")),r.createElement("div",{className:"hidden md:block"},r.createElement("ul",{className:"flex flex-row gap-2"},r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/spencerhaan/",target:"_blank"},r.createElement(n.ltd,{size:24}))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/SpencerHaan",target:"_blank"},r.createElement(n.bPx,{size:24})))))))}},4405:function(e,t,a){a.d(t,{w_:function(){return c}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(n),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return r.createElement(d,l({attr:l({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var a,n=e.attr,s=e.size,o=e.title,c=i(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(n)}},8845:function(e){e.exports=JSON.parse('{"layout":"fixed","images":{"fallback":{"src":"/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/7ba58/logo.png","srcSet":"/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/7ba58/logo.png 43w,\\n/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/8c054/logo.png 86w","sizes":"43px"},"sources":[{"srcSet":"/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/7019c/logo.webp 43w,\\n/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/5b598/logo.webp 86w","type":"image/webp","sizes":"43px"}]},"width":43,"height":32}')}}]);
//# sourceMappingURL=commons-ca2080ec55fc6cec07d5.js.map