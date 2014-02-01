/*! (C) Andrea Giammarchi Mit Style License */
define(function(){(function(e){"use strict";function S(){return{w:{},l:{},m:[],b:[]}}function x(e,t,n){typeof t=="function"?t.apply(e,n):t.handleEvent.apply(t,n)}function T(e,t,n){n!==void 0&&b(this,"detail",n),b(this,"type",t),b(this,"target",e),b(this,"timeStamp",m())}if(e.eddy)return;e.eddy=!0;var t=Array.prototype,n=e.prototype,r=T.prototype,i=n.hasOwnProperty,s=t.push,o=t.slice,u=t.unshift,a="toLocaleString",f={toLocaleString:1}.propertyIsEnumerable(a)?"_@eddy"+Math.random():a,l=f===a,c=(e.create||e)(null),h=[],p=l?function(e,t,n){e[t]=n.value}:e.defineProperty,d=function(e){var t=this;return function(){return t.apply(e,arguments)}},v=t.indexOf||function(e){var t=this.length;while(t--&&this[t]!==e);return t},m=Date.now||function(){return(new Date).getTime()},g=function(e){var t=S();return c.value=t,p(e,f,c),c.value=null,t},y={boundTo:function k(e,t){var n=i.call(this,f)?this[f]:g(this),r=n.m,o=n.b,u=typeof e=="string"?typeof t===void 0||i.call(this,e)?this[e]:this[e]=t:e,a=v.call(r,u);return a<0?o[s.call(r,u)-1]=d.call(u,this):o[a]},emit:function L(e){var t=i.call(this,f),n=t&&this[f].l,r=t&&i.call(n,e),s=r&&n[e].slice(0),u=r&&o.call(arguments,1),a=0,l=r?s.length:a;while(a<l)x(this,s[a++],u);return r},listeners:function A(e){return i.call(this,f)&&i.call(this[f].l,e)&&this[f].l[e].slice()||[]},off:function O(e,t){var n=i.call(this,f),r=n&&this[f].l,s=n&&i.call(r,e)&&r[e],o;return s&&(o=v.call(s,t),-1<o&&(s.splice(o,1),s.length||delete r[e])),this},on:function M(e,t,n){var r=i.call(this,f),o=(r?this[f]:g(this)).l,a=r&&i.call(o,e)?o[e]:o[e]=[];return v.call(a,t)<0&&(n?u:s).call(a,t),this},once:function _(e,t,n){var r=function(s){i.off(e,r,n),x(i,t,arguments)},i=this;return i.on(e,r,n)},trigger:function D(e,t){var n=i.call(this,f),s=n&&this[f].l,o=typeof e=="string",u=o?e:e.type,a=n&&i.call(s,u),l=a&&s[u].slice(0),c=o?new T(this,u,t):e,p=0,d=a?l.length:p,v=!(c instanceof T);v&&(c._active=!0,c.stopImmediatePropagation=r.stopImmediatePropagation),c.currentTarget=this,h[0]=c;while(c._active&&p<d)x(this,l[p++],h);return v&&(delete c._active,delete c.stopImmediatePropagation),!c.defaultPrevented},when:function(e,t){var n=i.call(this,f),r=(n?this[f]:g(this)).w,s=n&&i.call(r,e);return s?(x(this,t,r[e]),this):this.once(e,function(){i.call(r,e)||(r[e]=arguments)},!0).once(e,t)}},b=function(e,t,n){i.call(e,t)||(e[t]=n)},w=!1,E;r.defaultPrevented=!1,r._active=r.cancelable=!0,r.preventDefault=function(){this.defaultPrevented=!0},r.stopImmediatePropagation=function(){this._active=!1};for(E in y)i.call(y,E)&&p(n,E,{enumerable:!1,configurable:!0,writable:!0,value:y[E]});(function(e){function n(t){function n(e){e[t].apply(e,this)}return function(){return e.call(this,n,arguments),this}}for(var r in y)y.hasOwnProperty(r)&&!/^listeners|boundTo$/.test(r)&&p(t,r,{enumerable:!1,configurable:!0,writable:!0,value:n(r)})})(t.forEach);var N={boundTo:function(e){try{e.call(document.createElement("div"),function(){})}catch(t){g=function(e){return e[f]=S(),e[f]}}return e}(y.boundTo),data:function P(e,t){var n="dataset"in this,r;return arguments.length<2?n?e in this.dataset?this.dataset[e]:r:(t=this.getAttribute("data-"+e.replace(P.gre||(P.gre=/-[a-z]/g),P.gplace||(P.gplace=function(e,t){return t.toUpperCase()}))))==null?r:t:n?t==null?delete this.dataset[e]:(this.dataset[e]=t,t):(P.sre||(P.sre=/([a-z])([A-Z])/g,P.splace=function(e,t,n){return t+"-"+n.toLowerCase()}),e="data-"+e.replace(P.sre,P.splace),t==null?!this.removeAttribute(e):(this.setAttribute(e,t),t))},emit:function H(e){var n=new CustomEvent(e);return n.arguments=t.slice.call(arguments,1),this.dispatchEvent(n)},listeners:function B(e){return[]},off:function(e,t,n){return this.removeEventListener(e,t,n),this},on:function(e,t,n){return this.addEventListener(e,t,n),this},once:y.once,trigger:function j(e,t){var n=typeof e=="string",r=n?e:e.type,i=n?new CustomEvent(r,(c.detail=t,c)):e;return c.detail=null,T.call(i,this,r),this.dispatchEvent(i)},when:y.when};c.cancelable=!0,c.bubbles=!0;try{document.createEvent("Event").target=document}catch(C){w=!0,b=function(e,t,n){if(!i.call(e,t))try{e[t]=n}catch(r){}}}(function(t){var n=t.Window,r=n?n.prototype:t,s=(t.Node||t.Element||t.HTMLElement).prototype,o=(t.Document||t.HTMLDocument).prototype,u=(t.XMLHttpRequest||function(){}).prototype,a=function(){f.trigger("ready")},f=t.document,l,c;for(l in N)i.call(N,l)&&(c={enumerable:!1,configurable:!0,writable:!0,value:N[l]},p(s,l,c),l!=="data"&&(p(r,l,c),p(o,l,c),p(u,l,c)));f.when("ready",e),/loaded|complete/.test(f.readyState)?(t.setImmediate||setTimeout)(a):f.once("DOMContentLoaded",a,!0)})(window)})(Object)});