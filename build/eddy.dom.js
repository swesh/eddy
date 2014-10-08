/*! (C) Andrea Giammarchi Mit Style License */
/*jshint eqnull:true */(function(e){"use strict";function T(){return{w:{},l:{},m:[],b:[]}}function N(e,t,n){typeof t=="function"?t.apply(e,n):t.handleEvent.apply(t,n)}function C(e,t,n){n!==void 0&&E(this,"detail",n),E(this,"type",t),E(this,"target",e),E(this,"timeStamp",g())}if(e.eddy)return;e.eddy=!0;var t=Array.prototype,n=e.prototype,r=C.prototype,i=n.hasOwnProperty,s=t.push,o=t.slice,u=t.unshift,a="toLocaleString",f={toLocaleString:1}.propertyIsEnumerable(a)?"_@eddy"+Math.random():a,l=f===a,c=l?function(){var e=[],t=this.length;while(t--)e[t]=this[t];return e}:o,h=(e.create||e)(null),p=[],d=l?function(e,t,n){e[t]=n.value}:e.defineProperty,v=function(e){var t=this;return function(){return t.apply(e,arguments)}},m=t.indexOf||function(e){var t=this.length;while(t--&&this[t]!==e);return t},g=Date.now||function(){return(new Date).getTime()},y=function(e){var t=T();return h.value=t,d(e,f,h),h.value=null,t},b=function(e){},w={boundTo:function(t,n){var r=i.call(this,f)?this[f]:y(this),o=r.m,u=r.b,a=typeof t=="string"?n==null||i.call(this,t)?this[t]:this[t]=n:t,l=m.call(o,a);return l<0?u[s.call(o,a)-1]=v.call(a,this):u[l]},emit:function(t){var n=i.call(this,f),r=n&&this[f].l,s=n&&i.call(r,t),u=s&&r[t].slice(0),a=s&&o.call(arguments,1),l=0,c=s?u.length:l;while(l<c)N(this,u[l++],a);return s},expect:function(){for(var e=0;e<arguments.length;e++)this.when(arguments[e],b);return this},listeners:function(t){return i.call(this,f)&&i.call(this[f].l,t)&&this[f].l[t].slice()||[]},off:function(t,n){var r=i.call(this,f),s=r&&this[f].l,o=r&&i.call(s,t)&&s[t],u;return o&&(u=m.call(o,n),-1<u&&(o.splice(u,1),o.length||delete s[t])),this},on:function(t,n,r){var o=i.call(this,f),a=(o?this[f]:y(this)).l,l=o&&i.call(a,t)?a[t]:a[t]=[];return m.call(l,n)<0&&(r?u:s).call(l,n),this},once:function(t,n,r){var i=function(e){s.off(t,i,r),N(s,n,arguments)},s=this;return s.on(t,i,r)},trigger:function(t,n){var s=i.call(this,f),o=s&&this[f].l,u=typeof t=="string",a=u?t:t.type,l=s&&i.call(o,a),c=l&&o[a].slice(0),h=u?new C(this,a,n):t,d=0,v=l?c.length:d,m=!(h instanceof C);m&&(h._active=!0,h.stopImmediatePropagation=r.stopImmediatePropagation),h.currentTarget=this,p[0]=h;while(h._active&&d<v)N(this,c[d++],p);return m&&(delete h._active,delete h.stopImmediatePropagation),!h.defaultPrevented},when:function(e,t){var n=i.call(this,f),r=(n?this[f]:y(this)).w,s=n&&i.call(r,e);return s?(N(this,t,r[e]),this):this.once(e,function(){i.call(r,e)||(r[e]=arguments)},!0).once(e,t)}},E=function(e,t,n){i.call(e,t)||(e[t]=n)},S=!1,x;r.defaultPrevented=!1,r._active=r.cancelable=!0,r.preventDefault=function(){this.defaultPrevented=!0},r.stopImmediatePropagation=function(){this._active=!1};for(x in w)i.call(w,x)&&d(n,x,{enumerable:!1,configurable:!0,writable:!0,value:w[x]});(function(e){function n(t){function n(e){e[t].apply(e,this)}return function(){return e.call(this,n,arguments),this}}for(var r in w)w.hasOwnProperty(r)&&!/^listeners|boundTo$/.test(r)&&d(t,r,{enumerable:!1,configurable:!0,writable:!0,value:n(r)})})(t.forEach||function(e,t){var n=this,r=0;while(r<n.length)r in n&&e.call(t,n[r],r,n),r++});var k={boundTo:function(e){try{e.call(document.createElement("div"),function(){})}catch(t){y=function(e){return e[f]=T(),e[f]}}return e}(w.boundTo),data:function(e){function r(e){return e.replace(t,n)}var t=e?/-([a-z])/g:/([a-z])([A-Z])/g,n=e?function(e,t){return t.toUpperCase()}:function(e,t,n){return t+"-"+n.toLowerCase()};return e?function(t,n){return t=r(t),arguments.length<2?i.call(this.dataset,t)?this.dataset[t]:void 0:n==null?delete this.dataset[t]:(this.dataset[t]=n,n)}:function(t,n){return t="data-"+r(t),arguments.length<2?(n=this.getAttribute(t),n==null?void 0:n):n==null?(this.removeAttribute(t),!0):(this.setAttribute(t,n),n)}}("dataset"in document.documentElement),emit:function(t){var n=new CustomEvent(t);return n.arguments=o.call(arguments,1),this.dispatchEvent(n)},expect:w.expect,listeners:function(t){return[]},off:function(e,t,n){return this.removeEventListener(e,t,n),this},on:function(e,t,n){return this.addEventListener(e,t,n),this},once:w.once,trigger:function(t,n){var r=typeof t=="string",i=r?t:t.type,s=r?new CustomEvent(i,(h.detail=n,h)):t;return h.detail=null,C.call(s,this,i),this.dispatchEvent(s)},when:w.when};h.cancelable=!0,h.bubbles=!0;try{document.createEvent("Event").target=document}catch(L){S=!0,E=function(e,t,n){if(!i.call(e,t))try{e[t]=n}catch(r){}}}(function(e){var t=e.Window,n=t?t.prototype:e,r=(e.Node||e.Element||e.HTMLElement).prototype,s=(e.Document||e.HTMLDocument).prototype,o=(e.XMLHttpRequest||function(){}).prototype,u=function(){a.trigger("ready")},a=e.document,f,l;for(f in k)i.call(k,f)&&(l={enumerable:!1,configurable:!0,writable:!0,value:k[f]},d(r,f,l),f!=="data"&&(d(n,f,l),d(s,f,l),d(o,f,l)));o.addEventListener||(o.addEventListener=function(t,n){var r=this,i=r["_"+t]||(r["_"+t]=[]);m.call(i,n)<0&&(i.push(n),r["on"+t]||(r["on"+t]=function(e){for(var n=e||{currentTarget:r,type:t},s=0,o;s<i.length;s++)o=i[s],typeof o=="function"?o.call(r,n):o.handleEvent(n)}))},o.removeEventListener=function(t,n){var r=self["_"+t]||[],i=m.call(r,n);-1<i&&(r.splice(i,1),r.length||(self["on"+t]=null))}),a.expect("ready","DOMContentLoaded"),/loaded|complete/.test(a.readyState)?(e.setImmediate||setTimeout)(u):a.once("DOMContentLoaded",u,!0)})(window),"$"in window||d(window,"$",{enumerable:!1,configurable:!0,writable:!0,value:function(t,n){var r=n||document,i=t.length-6,s=t.lastIndexOf(":first")===i&&0<i,o=s?r.querySelector(t.slice(0,i)):r.querySelectorAll(t);return s?o?[o]:[]:c.call(o)}})})(Object);