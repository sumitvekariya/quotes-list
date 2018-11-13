!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.tippy=t()}(this,function(){"use strict";for(var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t={a11y:!0,content:"",placement:"top",livePlacement:!0,trigger:"mouseenter focus",hideOnClick:!0,animation:"shift-away",animateFill:!0,arrow:!1,delay:[0,20],duration:[325,275],interactive:!1,interactiveBorder:2,interactiveDebounce:0,theme:"dark",size:"regular",distance:10,offset:0,multiple:!1,followCursor:!1,inertia:!1,updateDuration:200,sticky:!1,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,flip:!0,flipBehavior:"flip",arrowType:"sharp",arrowTransform:"",target:"",allowHTML:!0,showOnInit:!1,popperOptions:{},lazy:!0,touch:!0,wait:null,shouldPopperHideOnBlur:function(){return!0},onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onMount:function(){}},n=["placement","popperOptions","flip","flipBehavior","distance","offset"],r="undefined"!=typeof window&&"undefined"!=typeof document,o=["Edge","Trident","Firefox"],i=0,a=0;a<o.length;++a)if(r&&navigator.userAgent.indexOf(o[a])>=0){i=1;break}var p=r&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},i))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function c(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function f(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function u(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=c(e);return/(auto|scroll|overlay)/.test(t.overflow+t.overflowY+t.overflowX)?e:u(f(e))}var l=r&&!(!window.MSInputMethodContext||!document.documentMode),d=r&&/MSIE 10/.test(navigator.userAgent);function m(e){return 11===e?l:10===e?d:l||d}function h(e){if(!e)return document.documentElement;for(var t=m(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===c(n,"position")?h(n):n:e?e.ownerDocument.documentElement:document.documentElement}function v(e){return null!==e.parentNode?v(e.parentNode):e}function b(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a,p,s=i.commonAncestorContainer;if(e!==s&&t!==s||r.contains(o))return"BODY"===(p=(a=s).nodeName)||"HTML"!==p&&h(a.firstElementChild)!==a?h(s):s;var c=v(e);return c.host?b(c.host,t):b(e,v(t).host)}function g(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;return"BODY"===n||"HTML"===n?(e.ownerDocument.scrollingElement||e.ownerDocument.documentElement)[t]:e[t]}function y(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function w(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],m(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function E(e){var t=e.body,n=e.documentElement,r=m(10)&&getComputedStyle(n);return{height:w("Height",t,n,r),width:w("Width",t,n,r)}}var O=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),T=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function C(e){return L({},e,{right:e.left+e.width,bottom:e.top+e.height})}function A(e){var t={};try{if(m(10)){t=e.getBoundingClientRect();var n=g(e,"top"),r=g(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(f){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?E(e.ownerDocument):{},a=e.offsetWidth-(i.width||e.clientWidth||o.right-o.left),p=e.offsetHeight-(i.height||e.clientHeight||o.bottom-o.top);if(a||p){var s=c(e);a-=y(s,"x"),p-=y(s,"y"),o.width-=a,o.height-=p}return C(o)}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=m(10),o="HTML"===t.nodeName,i=A(e),a=A(t),p=u(e),s=c(t),f=parseFloat(s.borderTopWidth,10),l=parseFloat(s.borderLeftWidth,10);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=C({top:i.top-a.top-f,left:i.left-a.left-l,width:i.width,height:i.height});if(d.marginTop=0,d.marginLeft=0,!r&&o){var h=parseFloat(s.marginTop,10),v=parseFloat(s.marginLeft,10);d.top-=f-h,d.bottom-=f-h,d.left-=l-v,d.right-=l-v,d.marginTop=h,d.marginLeft=v}return(r&&!n?t.contains(p):t===p&&"BODY"!==p.nodeName)&&(d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=g(t,"top"),o=g(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}(d,t)),d}function P(e){if(!e||!e.parentElement||m())return document.documentElement;for(var t=e.parentElement;t&&"none"===c(t,"transform");)t=t.parentElement;return t||document.documentElement}function k(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?P(e):b(e,t);if("viewport"===r)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=D(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:g(n),p=t?0:g(n,"left");return C({top:a-r.top+r.marginTop,left:p-r.left+r.marginLeft,width:o,height:i})}(a,o);else{var p=void 0;"scrollParent"===r?"BODY"===(p=u(f(t))).nodeName&&(p=e.ownerDocument.documentElement):p="window"===r?e.ownerDocument.documentElement:r;var s=D(p,a,o);if("HTML"!==p.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===c(t,"position")||e(f(t)))}(a))i=s;else{var l=E(e.ownerDocument),d=l.height,m=l.width;i.top+=s.top-s.marginTop,i.bottom=d+s.top,i.left+=s.left-s.marginLeft,i.right=m+s.left}}var h="number"==typeof(n=n||0);return i.left+=h?n:n.left||0,i.top+=h?n:n.top||0,i.right-=h?n:n.right||0,i.bottom-=h?n:n.bottom||0,i}function M(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=k(n,r,i,o),p={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},s=Object.keys(p).map(function(e){return L({key:e},p[e],{area:(t=p[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),c=s.filter(function(e){return e.width>=n.clientWidth&&e.height>=n.clientHeight}),f=c.length>0?c[0].key:s[0].key,u=e.split("-")[1];return f+(u?"-"+u:"")}function N(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return D(n,r?P(t):b(t,n),r)}function I(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function S(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function H(e,t,n){n=n.split("-")[0];var r=I(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",p=i?"left":"top",s=i?"height":"width",c=i?"width":"height";return o[a]=t[a]+t[s]/2-r[s]/2,o[p]=n===p?t[p]-r[c]:t[S(p)],o}function F(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function R(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e.name===n});var r=F(e,function(e){return e.name===n});return e.indexOf(r)}(e,0,n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&s(n)&&(t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=n(t,e))}),t}function B(e,t){return e.some(function(e){return e.enabled&&e.name===t})}function W(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e;if(void 0!==document.body.style[i])return i}return null}function _(e){var t=e.ownerDocument;return t?t.defaultView:window}function j(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&j(t[n])&&(r="px"),e.style[n]=t[n]+r})}function z(e,t,n){var r=F(e,function(e){return e.name===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!o){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var V=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Y=V.slice(3);function q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Y.indexOf(e),r=Y.slice(n+1).concat(Y.slice(0,n));return t?r.reverse():r}var X={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,p=-1!==["bottom","top"].indexOf(n),s=p?"left":"top",c=p?"width":"height",f={start:T({},s,i[s]),end:T({},s,i[s]+i[c]-a[c])};e.offsets.popper=L({},a,f[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,r=t.offset,o=e.offsets,i=o.popper,a=o.reference,p=e.placement.split("-")[0];return n=j(+r)?[+r,0]:function(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),p=a.indexOf(F(a,function(e){return-1!==e.search(/,|\s/)}));a[p]&&-1===a[p].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,c=-1!==p?[a.slice(0,p).concat([a[p].split(s)[0]]),[a[p].split(s)[1]].concat(a.slice(p+1))]:[a];return(c=c.map(function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var p=void 0;switch(a){case"%p":p=n;break;case"%":case"%r":default:p=r}return C(p)[t]/100*i}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,o,t,n)})})).forEach(function(e,t){e.forEach(function(n,r){j(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))})}),o}(r,i,a,p),"left"===p?(i.top+=n[0],i.left-=n[1]):"right"===p?(i.top+=n[0],i.left+=n[1]):"top"===p?(i.left+=n[0],i.top-=n[1]):"bottom"===p&&(i.left+=n[0],i.top+=n[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||h(e.instance.popper);e.instance.reference===n&&(n=h(n));var r=W("transform"),o=e.instance.popper.style,i=o.top,a=o.left,p=o[r];o.top="",o.left="",o[r]="";var s=k(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=i,o.left=a,o[r]=p,t.boundaries=s;var c=e.offsets.popper,f={primary:function(e){var n=c[e];return c[e]<s[e]&&!t.escapeWithReference&&(n=Math.max(c[e],s[e])),T({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=c[n];return c[e]>s[e]&&!t.escapeWithReference&&(r=Math.min(c[n],s[e]-("right"===e?c.width:c.height))),T({},n,r)}};return t.priority.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=L({},c,f[t](e))}),e.offsets.popper=c,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),p=a?"right":"bottom",s=a?"left":"top",c=a?"width":"height";return n[p]<i(r[s])&&(e.offsets.popper[s]=i(r[s])-n[c]),n[s]>i(r[p])&&(e.offsets.popper[s]=i(r[p])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!z(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,p=i.reference,s=-1!==["left","right"].indexOf(o),f=s?"height":"width",u=s?"Top":"Left",l=u.toLowerCase(),d=s?"left":"top",m=s?"bottom":"right",h=I(r)[f];p[m]-h<a[l]&&(e.offsets.popper[l]-=a[l]-(p[m]-h)),p[l]+h>a[m]&&(e.offsets.popper[l]+=p[l]+h-a[m]),e.offsets.popper=C(e.offsets.popper);var v=p[l]+p[f]/2-h/2,b=c(e.instance.popper),g=parseFloat(b["margin"+u],10),y=parseFloat(b["border"+u+"Width"],10),w=v-e.offsets.popper[l]-g-y;return w=Math.max(Math.min(a[f]-h,w),0),e.arrowElement=r,e.offsets.arrow=(T(n={},l,Math.round(w)),T(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(B(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=k(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=S(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case"flip":a=[r,o];break;case"clockwise":a=q(r);break;case"counterclockwise":a=q(r,!0);break;default:a=t.behavior}return a.forEach(function(p,s){if(r!==p||a.length===s+1)return e;r=e.placement.split("-")[0],o=S(r);var c=e.offsets.popper,f=e.offsets.reference,u=Math.floor,l="left"===r&&u(c.right)>u(f.left)||"right"===r&&u(c.left)<u(f.right)||"top"===r&&u(c.bottom)>u(f.top)||"bottom"===r&&u(c.top)<u(f.bottom),d=u(c.left)<u(n.left),m=u(c.right)>u(n.right),h=u(c.top)<u(n.top),v=u(c.bottom)>u(n.bottom),b="left"===r&&d||"right"===r&&m||"top"===r&&h||"bottom"===r&&v,g=-1!==["top","bottom"].indexOf(r),y=!!t.flipVariations&&(g&&"start"===i&&d||g&&"end"===i&&m||!g&&"start"===i&&h||!g&&"end"===i&&v);(l||b||y)&&(e.flipped=!0,(l||b)&&(r=a[s+1]),y&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=L({},e.offsets.popper,H(e.instance.popper,e.offsets.reference,e.placement)),e=R(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),p=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(p?o[a?"width":"height"]:0),e.placement=S(t),e.offsets.popper=C(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!z(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=F(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=F(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,p,s=void 0!==i?i:t.gpuAcceleration,c=h(e.instance.popper),f=A(c),u={position:o.position},l={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)},d="bottom"===n?"top":"bottom",m="right"===r?"left":"right",v=W("transform");if(p="bottom"===d?"HTML"===c.nodeName?-c.clientHeight+l.bottom:-f.height+l.bottom:l.top,a="right"===m?"HTML"===c.nodeName?-c.clientWidth+l.right:-f.width+l.right:l.left,s&&v)u[v]="translate3d("+a+"px, "+p+"px, 0)",u[d]=0,u[m]=0,u.willChange="transform";else{var b="right"===m?-1:1;u[d]=p*("bottom"===d?-1:1),u[m]=a*b,u.willChange=d+", "+m}return e.attributes=L({},{"x-placement":e.placement},e.attributes),e.styles=L({},u,e.styles),e.arrowStyles=L({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return U(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=N(o,t,e,n.positionFixed),a=M(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),U(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},G=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};O(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=p(this.update.bind(this)),this.options=L({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(L({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){r.options.modifiers[t]=L({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return L({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return x(e,[{key:"update",value:function(){return(function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=M(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=H(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=R(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}).call(this)}},{key:"destroy",value:function(){return(function(){return this.state.isDestroyed=!0,B(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}).call(this)}},{key:"enableEventListeners",value:function(){return(function(){this.state.eventsEnabled||(this.state=function(e,t,n,r){n.updateBound=r,_(e).addEventListener("resize",n.updateBound,{passive:!0});var o=u(e);return function e(t,n,r,o){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,r,{passive:!0}),i||e(u(a.parentNode),n,r,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}(this.reference,0,this.state,this.scheduleUpdate))}).call(this)}},{key:"disableEventListeners",value:function(){return(function(){var e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.state,_(this.reference).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}).call(this)}}]),e}();G.Utils=("undefined"!=typeof window?window:global).PopperUtils,G.placements=V,G.Defaults=X;var K={POPPER:".tippy-popper",TOOLTIP:".tippy-tooltip",CONTENT:".tippy-content",BACKDROP:".tippy-backdrop",ARROW:".tippy-arrow",ROUND_ARROW:".tippy-roundarrow"},J="undefined"!=typeof window,Q=function(e){return[].slice.call(e)},Z=function(e,t){t.content instanceof Element?(oe(e,""),e.appendChild(t.content)):e[t.allowHTML?"innerHTML":"textContent"]=t.content},$=function(e){return!(e instanceof Element)||me.call(e,"a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]")&&!e.hasAttribute("disabled")},ee=function(e,t){e.filter(Boolean).forEach(function(e){e.style.transitionDuration=t+"ms"})},te=function(e){var t=function(t){return e.querySelector(t)};return{tooltip:t(K.TOOLTIP),backdrop:t(K.BACKDROP),content:t(K.CONTENT),arrow:t(K.ARROW)||t(K.ROUND_ARROW)}},ne=function(e){return"[object Object]"==={}.toString.call(e)},re=function(){return document.createElement("div")},oe=function(e,t){e.innerHTML=t instanceof Element?t.innerHTML:t},ie=function(e){if(e instanceof Element||ne(e))return[e];if(e instanceof NodeList)return Q(e);if(Array.isArray(e))return e;try{return Q(document.querySelectorAll(e))}catch(t){return[]}},ae=function(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?n:r}return e},pe=function(e){var t=re();return"round"===e?(t.className="tippy-roundarrow",oe(t,'<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')):t.className="tippy-arrow",t},se=function(){var e=re();return e.className="tippy-backdrop",e.setAttribute("data-state","hidden"),e},ce=function(e,t){e.setAttribute("tabindex","-1"),t.setAttribute("data-interactive","")},fe=function(e,t){var n=re();n.className="tippy-popper",n.setAttribute("role","tooltip"),n.id="tippy-"+e,n.style.zIndex=t.zIndex;var r=re();r.className="tippy-tooltip",r.setAttribute("data-size",t.size),r.setAttribute("data-animation",t.animation),r.setAttribute("data-state","hidden"),t.theme.split(" ").forEach(function(e){r.classList.add(e+"-theme")});var o=re();return o.className="tippy-content",o.setAttribute("data-state","hidden"),t.interactive&&ce(n,r),t.arrow&&r.appendChild(pe(t.arrowType)),t.animateFill&&(r.appendChild(se()),r.setAttribute("data-animatefill","")),t.inertia&&r.setAttribute("data-inertia",""),Z(o,t),r.appendChild(o),n.appendChild(r),n.addEventListener("focusout",function(e){e.relatedTarget&&n._tippy&&!ve(e.relatedTarget,function(e){return e===n})&&e.relatedTarget!==n._tippy.reference&&n._tippy.props.shouldPopperHideOnBlur(e)&&n._tippy.hide()}),n},ue=function(e,t,n){var r=te(e),o=r.tooltip,i=r.content,a=r.backdrop,p=r.arrow;e.style.zIndex=n.zIndex,o.setAttribute("data-size",n.size),o.setAttribute("data-animation",n.animation),t.content!==n.content&&Z(i,n),!t.animateFill&&n.animateFill?(o.appendChild(se()),o.setAttribute("data-animatefill","")):t.animateFill&&!n.animateFill&&(o.removeChild(a),o.removeAttribute("data-animatefill")),!t.arrow&&n.arrow?o.appendChild(pe(n.arrowType)):t.arrow&&!n.arrow&&o.removeChild(p),t.arrow&&n.arrow&&t.arrowType!==n.arrowType&&o.replaceChild(pe(n.arrowType),p),!t.interactive&&n.interactive?ce(e,o):t.interactive&&!n.interactive&&function(e,t){e.removeAttribute("tabindex"),t.removeAttribute("data-interactive")}(e,o),!t.inertia&&n.inertia?function(e){e.setAttribute("data-inertia","")}(o):t.inertia&&!n.inertia&&function(e){e.removeAttribute("data-inertia")}(o),t.theme!==n.theme&&(t.theme.split(" ").forEach(function(e){o.classList.remove(e+"-theme")}),n.theme.split(" ").forEach(function(e){o.classList.add(e+"-theme")}))},le=function(e){Q(document.querySelectorAll(K.POPPER)).forEach(function(t){var n=t._tippy;!n||!0!==n.props.hideOnClick||e&&t===e.popper||n.hide()})},de=function(e){var t={isVirtual:!0,attributes:e.attributes||{},setAttribute:function(t,n){e.attributes[t]=n},getAttribute:function(t){return e.attributes[t]},removeAttribute:function(t){delete e.attributes[t]},hasAttribute:function(t){return t in e.attributes},addEventListener:function(){},removeEventListener:function(){},classList:{classNames:{},add:function(t){e.classList.classNames[t]=!0},remove:function(t){delete e.classList.classNames[t]},contains:function(t){return t in e.classList.classNames}}};for(var n in t)e[n]=t[n];return e},me=function(){if(J){var e=Element.prototype;return e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector}}(),he=function(e,t){return(Element.prototype.closest||function(e){for(var t=this;t;){if(me.call(t,e))return t;t=t.parentElement}}).call(e,t)},ve=function(e,t){for(;e;){if(t(e))return e;e=e.parentElement}},be=function(e){var t=window.scrollX||window.pageXOffset,n=window.scrollY||window.pageYOffset;e.focus(),scroll(t,n)},ge=function(e,t){return(t?e:{X:"Y",Y:"X"}[e])||""},ye=function(e,t,n,r){var o=t[0],i=t[1];return o||i?{scale:i?n?o+", "+i:i+", "+o:""+o,translate:i?n?r?o+"px, "+-i+"px":o+"px, "+i+"px":r?-i+"px, "+o+"px":i+"px, "+o+"px":r?-o+"px":o+"px"}[e]:""},we=function(e,t){var n=e.match(new RegExp(t+"([XY])"));return n?n[1]:""},Ee=function(e,t){var n=e.match(t);return n?n[1].split(",").map(parseFloat):[]},Oe=/translateX?Y?\(([^)]+)\)/,xe=/scaleX?Y?\(([^)]+)\)/,Te=function(e,t){var n=ke(he(e,K.POPPER)),r="top"===n||"bottom"===n,o="right"===n||"bottom"===n,i={translate:{axis:we(t,"translate"),numbers:Ee(t,Oe)},scale:{axis:we(t,"scale"),numbers:Ee(t,xe)}},a=t.replace(Oe,"translate"+ge(i.translate.axis,r)+"("+ye("translate",i.translate.numbers,r,o)+")").replace(xe,"scale"+ge(i.scale.axis,r)+"("+ye("scale",i.scale.numbers,r,o)+")");e.style[void 0!==document.body.style.transform?"transform":"webkitTransform"]=a},Le=function(e,t){e.filter(Boolean).forEach(function(e){e.setAttribute("data-state",t)})},Ce=function(e,t){var n=e.options,r=n.onCreate,o=n.onUpdate;n.onCreate=n.onUpdate=function(){t(),o(),n.onCreate=r,n.onUpdate=o}},Ae=function(e){setTimeout(e,1)},De=function(e,t,n,r){if(!e)return!0;var o=n.clientX,i=n.clientY,a=r.interactiveBorder,p=r.distance;return t.top-i>("top"===e?a+p:a)||i-t.bottom>("bottom"===e?a+p:a)||t.left-o>("left"===e?a+p:a)||o-t.right>("right"===e?a+p:a)},Pe=function(e,t){return-(e-t)+"px"},ke=function(e){var t=e.getAttribute("x-placement");return t?t.split("-")[0]:""},Me=function(n,r){var o=e({},r,r.performance?{}:function(e){return Object.keys(t).reduce(function(t,n){var r,o=(e.getAttribute("data-tippy-"+n)||"").trim();return o?("content"===n?t[n]=o:"true"===o?t[n]=!0:"false"===o?t[n]=!1:(r=o,t[n]=isNaN(r)||isNaN(parseFloat(r))?"["===o[0]||"{"===o[0]?JSON.parse(o):o:Number(o)),t):t},{})}(n));return o.arrow&&(o.animateFill=!1),"function"==typeof o.appendTo&&(o.appendTo=r.appendTo(n)),"function"==typeof o.content&&(o.content=r.content(n)),o},Ne=function(e,t,n){e[t+"EventListener"]("transitionend",n)},Ie=function(e,t){var n=void 0;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(r,o)},t)}},Se=function(e,t){for(var n in e||{})if(!(n in t))throw Error("[tippy]: `"+n+"` is not a valid option")},He=J?navigator:{},Fe=J?window:{},Re=/MSIE |Trident\//.test(He.userAgent),Be=/iPhone|iPad|iPod/.test(He.platform)&&!Fe.MSStream,We="ontouchstart"in Fe,_e=!1,je=function(){_e||(_e=!0,Be&&document.body.classList.add("tippy-iOS"),window.performance&&document.addEventListener("mousemove",ze))},Ue=0,ze=function e(){var t=performance.now();t-Ue<20&&(_e=!1,document.removeEventListener("mousemove",e),Be||document.body.classList.remove("tippy-iOS")),Ue=t},Ve=function(e){var t=e.target;if(!(t instanceof Element))return le();var n=he(t,K.POPPER);if(!(n&&n._tippy&&n._tippy.props.interactive)){var r=ve(t,function(e){return e._tippy&&e._tippy.reference===e});if(r){var o=r._tippy,i=o.props.trigger.indexOf("click")>-1;if(_e||i)return le(o);if(!0!==o.props.hideOnClick||i)return;o.clearDelayTimeouts()}le()}},Ye=function(){var e=document.activeElement;e&&e.blur&&e._tippy&&e.blur()},qe=function(){Q(document.querySelectorAll(K.POPPER)).forEach(function(e){var t=e._tippy;t.props.livePlacement||t.popperInstance.scheduleUpdate()})},Xe=1;var Ge=!1,Ke=!1;function Je(r,o,i){Se(o,t),Ge||(function(e){document.addEventListener("click",Ve,e),document.addEventListener("touchstart",je),window.addEventListener("blur",Ye),window.addEventListener("resize",qe),We||!navigator.maxTouchPoints&&!navigator.msMaxTouchPoints||document.addEventListener("pointerdown",je)}(Ke),Ge=!0);var a=e({},t,o);ne(r)&&de(r);var p=ie(r),s=p[0],c=(i&&s?[s]:p).reduce(function(r,o){var i=o&&function r(o,i){var a=Me(o,i);if(!a.multiple&&o._tippy)return null;var p=null,s={},c=null,f=0,u=0,l=!1,d=function(){},m=[],h=!1,v=!1,b=a.interactiveDebounce>0?Ie(P,a.interactiveDebounce):P,g=Xe++,y=fe(g,a),w=te(y),E={id:g,reference:o,popper:y,popperChildren:w,popperInstance:null,props:a,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},clearDelayTimeouts:j,set:U,setContent:function(e){U({content:e})},show:z,hide:V,enable:function(){E.state.isEnabled=!0},disable:function(){E.state.isEnabled=!1},destroy:Y};return W(),o.addEventListener("click",O),a.lazy||(E.popperInstance=H(),E.popperInstance.disableEventListeners()),a.showOnInit&&setTimeout(T,20),!a.a11y||a.target||$(o)||o.setAttribute("tabindex","0"),o._tippy=E,y._tippy=E,E;function O(){Ae(function(){h=!1})}function x(e){var t=c=e,n=t.clientX,r=t.clientY;if(E.popperInstance){var o=E.reference.getBoundingClientRect(),i=E.props.followCursor,a="horizontal"===i,p="vertical"===i;E.popperInstance.reference={getBoundingClientRect:function(){return{width:0,height:0,top:a?o.top:r,bottom:a?o.bottom:r,left:p?o.left:n,right:p?o.right:n}},clientWidth:0,clientHeight:0},E.popperInstance.scheduleUpdate()}}function T(n){if(j(),!E.state.isVisible){if(E.props.target)return function(t){var n=he(t.target,E.props.target);n&&!n._tippy&&(r(n,e({},E.props,{target:"",showOnInit:!0})),T(t))}(n);if(l=!0,E.props.wait)return E.props.wait(E,n);F()&&(w.arrow&&(w.arrow.style.margin="0"),document.addEventListener("mousemove",x));var o=ae(E.props.delay,0,t.delay);o?f=setTimeout(function(){z()},o):z()}}function L(){if(j(),!E.state.isVisible)return C();l=!1;var e=ae(E.props.delay,1,t.delay);e?u=setTimeout(function(){E.state.isVisible&&V()},e):V()}function C(){document.removeEventListener("mousemove",x),c=null}function A(){document.body.removeEventListener("mouseleave",L),document.removeEventListener("mousemove",b)}function D(e){E.state.isEnabled&&!S(e)&&(E.state.isVisible||(s=e),"click"===e.type&&!1!==E.props.hideOnClick&&E.state.isVisible?L():T(e))}function P(e){var t=ve(e.target,function(e){return e._tippy});he(e.target,K.POPPER)===E.popper||t===E.reference||De(ke(E.popper),E.popper.getBoundingClientRect(),e,E.props)&&(A(),L())}function k(e){if(!S(e))return E.props.interactive?(document.body.addEventListener("mouseleave",L),void document.addEventListener("mousemove",b)):void L()}function M(e){if(e.target===E.reference){if(E.props.interactive){if(!e.relatedTarget)return;if(he(e.relatedTarget,K.POPPER))return}L()}}function N(e){he(e.target,E.props.target)&&T(e)}function I(e){he(e.target,E.props.target)&&L()}function S(e){var t=e.type.indexOf("touch")>-1;return We&&_e&&E.props.touchHold&&!t||_e&&!E.props.touchHold&&t}function H(){var n=E.popperChildren.tooltip,r=E.props.popperOptions,o=K["round"===E.props.arrowType?"ROUND_ARROW":"ARROW"],i=n.querySelector(o),a=e({placement:E.props.placement},r||{},{modifiers:e({},r?r.modifiers:{},{arrow:e({element:o},r&&r.modifiers?r.modifiers.arrow:{}),flip:e({enabled:E.props.flip,padding:E.props.distance+5,behavior:E.props.flipBehavior},r&&r.modifiers?r.modifiers.flip:{}),offset:e({offset:E.props.offset},r&&r.modifiers?r.modifiers.offset:{})}),onCreate:function(){n.style[ke(E.popper)]=Pe(E.props.distance,t.distance),i&&E.props.arrowTransform&&Te(i,E.props.arrowTransform)},onUpdate:function(){var e=n.style;e.top="",e.bottom="",e.left="",e.right="",e[ke(E.popper)]=Pe(E.props.distance,t.distance),i&&E.props.arrowTransform&&Te(i,E.props.arrowTransform)}}),c=new MutationObserver(function(){E.popperInstance.update()});return c.observe(E.popper,{childList:!0,subtree:!0}),p&&p.disconnect(),p=c,v||(v=!0,E.popper.addEventListener("mouseenter",function(e){E.props.interactive&&E.state.isVisible&&"mouseenter"===s.type&&T(e)}),E.popper.addEventListener("mouseleave",function(e){E.props.interactive&&"mouseenter"===s.type&&0===E.props.interactiveDebounce&&De(ke(E.popper),E.popper.getBoundingClientRect(),e,E.props)&&L()})),new G(E.reference,E.popper,a)}function F(){return E.props.followCursor&&!_e&&"focus"!==s.type}function R(e,t){if(0===e)return t();var n=E.popperChildren.tooltip,r=function e(r){r.target===n&&(Ne(n,"remove",e),t())};Ne(n,"remove",d),Ne(n,"add",r),d=r}function B(e,t,n){E.reference.addEventListener(e,t),n.push({eventType:e,handler:t})}function W(){m=E.props.trigger.trim().split(" ").reduce(function(e,t){if("manual"===t)return e;if(E.props.target)switch(t){case"mouseenter":B("mouseover",N,e),B("mouseout",I,e);break;case"focus":B("focusin",N,e),B("focusout",I,e);break;case"click":B(t,N,e)}else switch(B(t,D,e),E.props.touchHold&&(B("touchstart",D,e),B("touchend",k,e)),t){case"mouseenter":B("mouseleave",k,e);break;case"focus":B(Re?"focusout":"blur",M,e)}return e},[])}function _(){m.forEach(function(e){E.reference.removeEventListener(e.eventType,e.handler)})}function j(){clearTimeout(f),clearTimeout(u)}function U(r){Se(r,t);var o=E.props,i=Me(E.reference,e({},E.props,r,{performance:!0}));i.performance=r.performance||o.performance,E.props=i,("trigger"in r||"touchHold"in r)&&(_(),W()),"interactiveDebounce"in r&&(A(),b=Ie(P,r.interactiveDebounce)),ue(E.popper,o,i),E.popperChildren=te(E.popper),E.popperInstance&&n.some(function(e){return e in r})&&(E.popperInstance.destroy(),E.popperInstance=H(),E.state.isVisible||E.popperInstance.disableEventListeners(),E.props.followCursor&&c&&x(c))}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae(E.props.duration,0,t.duration[0]);if(!E.state.isDestroyed&&E.state.isEnabled&&(!_e||E.props.touch))return E.reference.isVirtual||document.documentElement.contains(E.reference)?void(E.reference.hasAttribute("disabled")||(h?h=!1:!1!==E.props.onShow(E)&&(E.popper.style.visibility="visible",E.state.isVisible=!0,ee([E.popper,E.popperChildren.tooltip,E.popperChildren.backdrop],0),function(n){if(E.popperInstance?(F()||E.popperInstance.scheduleUpdate(),E.props.livePlacement&&!F()&&E.popperInstance.enableEventListeners()):(E.popperInstance=H(),E.props.livePlacement||E.popperInstance.disableEventListeners()),E.popperInstance.reference=E.reference,F()){E.popperChildren.arrow&&(E.popperChildren.arrow.style.margin="");var r=ae(E.props.delay,0,t.delay);s.type&&x(r&&c?c:s)}Ce(E.popperInstance,function(){E.state.isVisible&&(F()||E.popperInstance.update(),ee([E.popperChildren.tooltip,E.popperChildren.backdrop,E.popperChildren.content],e),E.popperChildren.backdrop&&(E.popperChildren.content.style.transitionDelay=Math.round(e/6)+"ms"),E.props.interactive&&E.reference.classList.add("tippy-active"),E.props.sticky&&(ee([E.popper],Re?0:E.props.updateDuration),function e(){E.popperInstance&&E.popperInstance.scheduleUpdate(),E.state.isMounted?requestAnimationFrame(e):ee([E.popper],0)}()),Le([E.popperChildren.tooltip,E.popperChildren.backdrop,E.popperChildren.content],"visible"),function(e,t){R(e,function(){0===E.props.updateDuration&&E.popperChildren.tooltip.classList.add("tippy-notransition"),E.props.interactive&&["focus","click"].indexOf(s.type)>-1&&be(E.popper),E.reference.setAttribute("aria-describedby",E.popper.id),E.props.onShown(E),E.state.isShown=!0})}(e))}),E.props.appendTo.contains(E.popper)||(E.props.appendTo.appendChild(E.popper),E.props.onMount(E),E.state.isMounted=!0)}()))):Y()}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae(E.props.duration,1,t.duration[1]);!E.state.isDestroyed&&E.state.isEnabled&&!1!==E.props.onHide(E)&&(0===E.props.updateDuration&&E.popperChildren.tooltip.classList.remove("tippy-notransition"),E.props.interactive&&E.reference.classList.remove("tippy-active"),E.popper.style.visibility="hidden",E.state.isVisible=!1,E.state.isShown=!1,ee([E.popperChildren.tooltip,E.popperChildren.backdrop,E.popperChildren.content],e),Le([E.popperChildren.tooltip,E.popperChildren.backdrop,E.popperChildren.content],"hidden"),E.props.interactive&&!h&&["focus","click"].indexOf(s.type)>-1&&("focus"===s.type&&(h=!0),be(E.reference)),function(e,t){R(e,function(){!E.state.isVisible&&E.props.appendTo.contains(E.popper)&&(l||C(),E.reference.removeAttribute("aria-describedby"),E.popperInstance.disableEventListeners(),E.props.appendTo.removeChild(E.popper),E.state.isMounted=!1,E.props.onHidden(E))})}(e))}function Y(e){E.state.isDestroyed||(E.state.isVisible&&V(0),_(),E.reference.removeEventListener("click",O),delete E.reference._tippy,E.props.target&&e&&Q(E.reference.querySelectorAll(E.props.target)).forEach(function(e){return e._tippy&&e._tippy.destroy()}),E.popperInstance&&E.popperInstance.destroy(),p&&p.disconnect(),E.state.isDestroyed=!0)}}(o,a);return i&&r.push(i),r},[]);return{targets:r,props:a,instances:c,destroyAll:function(){this.instances.forEach(function(e){e.destroy()}),this.instances=[]}}}return Je.version="3.1.1",Je.defaults=t,Je.one=function(e,t){return Je(e,t,!0).instances[0]},Je.setDefaults=function(n){!function(n){t=e({},t,n)}(n),Je.defaults=t},Je.disableAnimations=function(){Je.setDefaults({duration:0,updateDuration:0,animateFill:!1})},Je.hideAllPoppers=le,Je.useCapture=function(){Ke=!0},J&&setTimeout(function(){Q(document.querySelectorAll("[data-tippy]")).forEach(function(e){var t=e.getAttribute("data-tippy");t&&Je(e,{content:t})})}),Je});