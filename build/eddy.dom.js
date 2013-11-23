/*! (C) Andrea Giammarchi Mit Style License */
(function(e){"use strict";function S(){return{l:{},m:[],b:[]}}function x(e,t,n){typeof t=="function"?t.apply(e,n):t.handleEvent.apply(t,n)}function T(e,t,n){n!==void 0&&b(this,"detail",n),b(this,"type",t),b(this,"target",e),b(this,"timeStamp",m())}if(e.eddy)return;e.eddy=!0;var t=Array.prototype,n=e.prototype,r=T.prototype,i=n.hasOwnProperty,s=t.push,o=t.slice,u=t.unshift,a="toLocaleString",f={toLocaleString:1}.propertyIsEnumerable(a)?"_@eddy"+Math.random():a,l=f===a,c=(e.create||e)(null),h=[],p=l?function(e,t,n){e[t]=n.value}:e.defineProperty,d=function(e){var t=this;return function(){return t.apply(e,arguments)}},v=t.indexOf||function(e){var t=this.length;while(t--&&this[t]!==e);return t},m=Date.now||function(){return(new Date).getTime()},g=function(e){var t=S();return c.value=t,p(e,f,c),c.value=null,t},y={boundTo:function(t){var n=i.call(this,f)?this[f]:g(this),r=n.m,o=n.b,u=typeof t=="string"?this[t]:t,a=v.call(r,u);return a<0?o[s.call(r,u)-1]=d.call(u,this):o[a]},emit:function(t){var n=i.call(this,f),r=n&&this[f].l,s=n&&i.call(r,t),u=s&&r[t],a=s&&o.call(arguments,1),l=0,c=s?u.length:l;while(l<c)x(this,u[l++],a);return s},listeners:function(t){return i.call(this,f)&&i.call(this[f].l,t)&&this[f].l[t].slice()||[]},off:function(t,n){var r=i.call(this,f),s=r&&this[f].l,o=r&&i.call(s,t)&&s[t],u;return o&&(u=v.call(o,n),-1<u&&(o.splice(u,1),o.length||delete s[t])),this},on:function(t,n,r){var o=i.call(this,f),a=(o?this[f]:g(this)).l,l=o&&i.call(a,t)?a[t]:a[t]=[];return v.call(l,n)<0&&(r?u:s).call(l,n),this},once:function(t,n,r){var i=function(e){s.off(t,i,r),x(s,n,arguments)},s=this;return s.on(t,i,r)},trigger:function(t,n){var s=i.call(this,f),o=s&&this[f].l,u=typeof t=="string",a=u?t:t.type,l=s&&i.call(o,a),c=l&&o[a].slice(0),p=u?new T(this,a,n):t,d=0,v=l?c.length:d,m=!(p instanceof T);m&&(p._active=!0,p.stopImmediatePropagation=r.stopImmediatePropagation),p.currentTarget=this,h[0]=p;while(p._active&&d<v)x(this,c[d++],h);return m&&(delete p._active,delete p.stopImmediatePropagation),!p.defaultPrevented}},b=function(e,t,n){i.call(e,t)||(e[t]=n)},w=!1,E;r.defaultPrevented=!1,r._active=r.cancelable=!0,r.preventDefault=function(){this.defaultPrevented=!0},r.stopImmediatePropagation=function(){this._active=!1};for(E in y)i.call(y,E)&&p(n,E,{enumerable:!1,configurable:!0,writable:!0,value:y[E]});(function(e){function n(t){function n(e){e[t].apply(e,this)}return function(){return e.call(this,n,arguments),this}}for(var r in y)y.hasOwnProperty(r)&&!/^listeners|boundTo$/.test(r)&&p(t,r,{enumerable:!1,configurable:!0,writable:!0,value:n(r)})})(t.forEach);var N={boundTo:function(e){try{e.call(document.createElement("div"),function(){})}catch(t){g=function(e){return e[f]=S()}}return e}(y.boundTo),data:function k(e,t){var n="dataset"in this,r;return arguments.length<2?n?e in this.dataset?this.dataset[e]:r:(t=this.getAttribute("data-"+e.replace(k.gre||(k.gre=/-[a-z]/g),k.gplace||(k.gplace=function(e,t){return t.toUpperCase()}))))==null?r:t:n?t==null?delete this.dataset[e]:(this.dataset[e]=t,t):(k.sre||(k.sre=/([a-z])([A-Z])/g,k.splace=function(e,t,n){return t+"-"+n.toLowerCase()}),e="data-"+e.replace(k.sre,k.splace),t==null?!this.removeAttribute(e):(this.setAttribute(e,t),t))},emit:function(n){var r=new CustomEvent(n);return r.arguments=t.slice.call(arguments,1),this.dispatchEvent(r)},listeners:function(t){return[]},off:function(e,t,n){return this.removeEventListener(e,t,n),this},on:function(e,t,n){return this.addEventListener(e,t,n),this},once:y.once,trigger:function(t,n){var r=typeof t=="string",i=r?t:t.type,s=r?new CustomEvent(i,(c.detail=n,c)):t;return c.detail=null,T.call(s,this,i),this.dispatchEvent(s)}};c.cancelable=!0,c.bubbles=!0;try{document.createEvent("Event").target=document}catch(C){w=!0,b=function(e,t,n){if(!i.call(e,t))try{e[t]=n}catch(r){}}}(function(e){var t=e.Window,n=t?t.prototype:e,r=(e.Node||e.Element||e.HTMLElement).prototype,s=(e.Document||e.HTMLDocument).prototype,o=(e.XMLHttpRequest||function(){}).prototype,u,a;for(u in N)i.call(N,u)&&(a={enumerable:!1,configurable:!0,writable:!0,value:N[u]},p(r,u,a),u!=="data"&&(p(n,u,a),p(s,u,a),p(o,u,a)))})(window)})(Object);