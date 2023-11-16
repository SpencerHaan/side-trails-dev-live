"use strict";(self.webpackChunkside_trail_software_development=self.webpackChunkside_trail_software_development||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=r(c)===c&&n(c)!==c,i=s,s=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return F},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:l().object.isRequired,alt:C},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],z=new Set;let _,I;const T=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,O);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:E,className:x}=w,k=i(w,j),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(S);if(I&&z.has(S))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(s({isLoading:!0,isLoaded:z.has(S),image:n},h)),z.has(S)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,S,z,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{z.has(S)&&I&&(N.current.innerHTML=I(s({isLoading:z.has(S),isLoaded:z.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},k,{style:s({},E,l,{backgroundColor:d}),className:x+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));P.propTypes=L,P.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,R);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const A=q((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:C,layout:L,images:O,placeholder:j,backgroundColor:z}=o,_=c(w,C,L),{style:I,className:T}=_,P=i(_,N),R={fallback:void 0,sources:[]};return O.fallback&&(R.fallback=s({},O.fallback,{srcSet:O.fallback.srcSet?S(O.fallback.srcSet):void 0})),O.sources&&(R.sources=O.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,s({},P,{style:s({},I,l,{backgroundColor:h}),className:T+(a?" "+a:"")}),r.createElement(g,{layout:L,width:w,height:C},r.createElement(E,s({},u(j,!1,L,w,C,z,y,v))),r.createElement(x,s({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,R,m,f)))))})),H=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:C,width:H,height:H,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=W;const F=q(P);F.displayName="StaticImage",F.propTypes=W},5372:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(231),l=a(4160),s=a(8032),i=a(5434);const o=24,c=e=>{let{to:t,type:a,size:n=o}=e;return r.createElement("a",{href:t,target:"_blank"},r.createElement(a,{size:n}))},d=e=>r.createElement(c,Object.assign({to:"https://www.linkedin.com/in/spencerhaan/",type:n.ltd},e)),u=e=>r.createElement(c,Object.assign({to:"https://github.com/SpencerHaan",type:n.bPx},e)),m=e=>r.createElement(c,Object.assign({to:"https://github.com/SpencerHaan/side-trails-dev",type:n.tvD},e));let p;var g;(g=p||(p={})).LinkedIn=d,g.GitHub=u,g.Source=m;var f=p;var h=()=>{const{site:{siteMetadata:{menuLinks:e}}}=(0,l.K2)("4287280192"),[t,n]=r.useState(!1);return r.useEffect((()=>{const e=document.querySelector("html");t?null==e||e.classList.add("overflow-hidden"):null==e||e.classList.remove("overflow-hidden")}),[t]),r.createElement("nav",{className:"flex flex-col sticky "+(t?"min-h-screen":"shadow")+" z-50 top-0 w-full bg-white"},r.createElement("div",{className:"grid"},r.createElement("div",{className:"flex items-center justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1"},r.createElement(s.S,{src:"../../images/logo.png",alt:"",height:32,layout:"fixed",placeholder:"none",__imageData:a(8899)})),r.createElement("div",{onClick:()=>n(!t),className:"absolute flex flex-col justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1"},t?r.createElement(i.FU5,{size:32}):r.createElement(i.xXU,{size:32}))),r.createElement("div",{hidden:!t,className:(t?"flex flex-col justify-between":null)+" flex-1 p-4 pt-8"},r.createElement("div",{className:"flex flex-col text-3xl gap-6"},e.map((e=>r.createElement("div",{key:e.name},r.createElement(l.rU,{to:e.link,onClick:()=>n(!1)},e.name))))),r.createElement("div",{className:"flex flex-col gap-2"},r.createElement("div",{className:"text-2xl text-zinc-400"},"Social Media"),r.createElement("hr",null),r.createElement("div",{className:"flex justify-between"},r.createElement("div",{className:"flex flex-row gap-4"},r.createElement("div",null,r.createElement(f.LinkedIn,{size:36})),r.createElement("div",null,r.createElement(f.GitHub,{size:36}))),r.createElement("div",null,r.createElement(f.Source,{size:36}))))))};var y=e=>{let{hero:t,children:a}=e;const[l,s]=r.useState(Boolean(t)),i=r.useRef(null);return r.useEffect((()=>{const e=i.current;if(!e)return;const t=new IntersectionObserver((e=>{let[t]=e;s(t.isIntersecting)}),{threshold:.95});return t.observe(e),()=>t.unobserve(e)}),[l,s,i]),r.createElement("div",{className:"flex flex-col min-h-screen font-base"},r.createElement(h,null),r.createElement("main",{className:"flex flex-col flex-1"},t?r.createElement("div",{ref:i,className:"grid shadow-xl"},r.createElement("div",{className:"col-start-1 col-end-1 row-start-1 row-end-1"},t.image),r.createElement("div",{className:"col-start-1 col-end-1 row-start-1 row-end-1 relative"},r.createElement("div",{className:"h-full flex flex-col"},t.content))):null,a),r.createElement("footer",{className:"flex flex-row items-center py-2 md:py-4 md:px-8 bg-zinc-800 text-white"},r.createElement("div",{className:"hidden md:block"},r.createElement("a",{href:"https://github.com/SpencerHaan/side-trails-dev",target:"_blank"},r.createElement(n.tvD,{size:24}))),r.createElement("div",{className:"flex flex-wrap flex-1 justify-center gap-1 text-xs md:text-sm italic"},r.createElement("p",null,"© 2023 Side Trails Software Development, Spencer Haan."),r.createElement("p",null,"All rights reserved.")),r.createElement("div",{className:"hidden md:block"},r.createElement("ul",{className:"flex flex-row gap-2"},r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/spencerhaan/",target:"_blank"},r.createElement(n.ltd,{size:24}))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/SpencerHaan",target:"_blank"},r.createElement(n.bPx,{size:24})))))))}},4405:function(e,t,a){a.d(t,{w_:function(){return c}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return r.createElement(d,s({attr:s({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var a,n=e.attr,l=e.size,o=e.title,c=i(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},8899:function(e){e.exports=JSON.parse('{"layout":"fixed","images":{"fallback":{"src":"/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/7ba58/logo.png","srcSet":"/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/7ba58/logo.png 43w,\\n/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/8c054/logo.png 86w","sizes":"43px"},"sources":[{"srcSet":"/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/7019c/logo.webp 43w,\\n/side-trails-dev-live/static/89ab8211d3969158f18803719c13f315/5b598/logo.webp 86w","type":"image/webp","sizes":"43px"}]},"width":43,"height":32}')}}]);
//# sourceMappingURL=commons-17368c5b3650b162b692.js.map