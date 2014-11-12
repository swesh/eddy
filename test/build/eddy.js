/*! (C) Andrea Giammarchi Mit Style License */
/*jshint eqnull:true */(function(e){"use strict";function T(){return{w:{},l:{},m:[],b:[]}}function N(e,t,n){typeof t=="function"?t.apply(e,n):t.handleEvent.apply(t,n)}function C(e,t,n){n!==void 0&&E(this,"detail",n),E(this,"type",t),E(this,"target",e),E(this,"timeStamp",g())}if(e.eddy)return;e.eddy=!0;var t=Array.prototype,n=e.prototype,r=C.prototype,i=n.hasOwnProperty,s=t.push,o=t.slice,u=t.unshift,a="toLocaleString",f={toLocaleString:1}.propertyIsEnumerable(a)?"_@eddy"+Math.random():a,l=f===a,c=l?function(){var e=[],t=this.length;while(t--)e[t]=this[t];return e}:o,h=(e.create||e)(null),p=[],d=l?function(e,t,n){e[t]=n.value}:e.defineProperty,v=function(e){var t=this;return function(){return t.apply(e,arguments)}},m=t.indexOf||function(e){var t=this.length;while(t--&&this[t]!==e);return t},g=Date.now||function(){return(new Date).getTime()},y=function(e){var t=T();return h.value=t,d(e,f,h),h.value=null,t},b=function(e){},w={boundTo:function(t,n){var r=i.call(this,f)?this[f]:y(this),o=r.m,u=r.b,a=typeof t=="string"?n==null||i.call(this,t)?this[t]:this[t]=n:t,l=m.call(o,a);return l<0?u[s.call(o,a)-1]=v.call(a,this):u[l]},emit:function(t){var n=i.call(this,f),r=n&&this[f].l,s=n&&i.call(r,t),u=s&&r[t].slice(0),a=s&&o.call(arguments,1),l=0,c=s?u.length:l;while(l<c)N(this,u[l++],a);return s},expect:function(){for(var t=0;t<arguments.length;t++)this.when(arguments[t],b);return this},listeners:function(t){return i.call(this,f)&&i.call(this[f].l,t)&&this[f].l[t].slice()||[]},off:function(t,n){var r=i.call(this,f),s=r&&this[f].l,o=r&&i.call(s,t)&&s[t],u;return o&&(u=m.call(o,n),-1<u&&(o.splice(u,1),o.length||delete s[t])),this},on:function(t,n,r){var o=i.call(this,f),a=(o?this[f]:y(this)).l,l=o&&i.call(a,t)?a[t]:a[t]=[];return m.call(l,n)<0&&(r?u:s).call(l,n),this},once:function(t,n,r){var i=function(e){s.off(t,i,r),N(s,n,arguments)},s=this;return s.on(t,i,r)},trigger:function(t,n){var s=i.call(this,f),o=s&&this[f].l,u=typeof t=="string",a=u?t:t.type,l=s&&i.call(o,a),c=l&&o[a].slice(0),h=u?new C(this,a,n):t,d=0,v=l?c.length:d,m=!(h instanceof C);m&&(h._active=!0,h.stopImmediatePropagation=r.stopImmediatePropagation),h.currentTarget=this,p[0]=h;while(h._active&&d<v)N(this,c[d++],p);return m&&(delete h._active,delete h.stopImmediatePropagation),!h.defaultPrevented},when:function(e,t){var n=i.call(this,f),r=(n?this[f]:y(this)).w,s=n&&i.call(r,e);return s?(N(this,t,r[e]),this):this.once(e,function(){i.call(r,e)||(r[e]=arguments)},!0).once(e,t)}},E=function(e,t,n){i.call(e,t)||(e[t]=n)},S=!1,x;r.defaultPrevented=!1,r._active=r.cancelable=!0,r.preventDefault=function(){this.defaultPrevented=!0},r.stopImmediatePropagation=function(){this._active=!1};for(x in w)i.call(w,x)&&d(n,x,{enumerable:!1,configurable:!0,writable:!0,value:w[x]});(function(e){function n(t){function n(e){e[t].apply(e,this)}return function(){return e.call(this,n,arguments),this}}for(var r in w)w.hasOwnProperty(r)&&!/^listeners|boundTo$/.test(r)&&d(t,r,{enumerable:!1,configurable:!0,writable:!0,value:n(r)})})(t.forEach||function(e,t){var n=this,r=0;while(r<n.length)r in n&&e.call(t,n[r],r,n),r++})})(Object);
/*! (C) Andrea Giammarchi - MIT Style License */
var Class=Class||function(e){"use strict";function g(e,t,n){for(var r,s=[],o=0;o<e.length;o++)r=e[o],c.call(r,i)&&s.push(r[i]),y(r,t,n,!1,!1);return s}function y(e,t,n,r,i){var s,o;for(s in e)w(s,i)&&c.call(e,s)&&(c.call(t,s)&&x("duplicated: "+s),E(n,t,s,e[s],r));if(l)for(o=0;o<f.length;o++)s=f[o],c.call(e,s)&&E(n,t,s,e[s],r)}function b(e,t,n,r){return d(e,t,{enumerable:r,configurable:!r,writable:!r,value:n})}function w(e,f){return e!==t&&e!==n&&e!==r&&e!==s&&e!==o&&e!==u&&e!==a&&(f||e!==i)}function E(e,t,n,r,i){if(i){if(c.call(t,n))return t}else typeof r=="function"&&v.test(r)&&(r=T(e,n,r,i));return b(t,n,r,i)}function S(e,t){for(var n,r,i=0;i<e.length;i++){n=e[i];for(r in n)c.call(n,r)&&!c.call(t,r)&&x(r+" is not implemented")}}function x(e){try{console.warn(e)}catch(t){}}function T(e,t,n,r){return function(){c.call(this,u)||b(this,u,null,r);var i=this[u],s=this[u]=e[t],o=n.apply(this,arguments);return this[u]=i,o}}var t="constructor",n="extends",r="implements",i="init",s="prototype",o="static",u="super",a="with",f=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],l=!{valueOf:0}[f[2]](f[5]),c=e[f[0]],h=e.create||function(e){var t=this instanceof h;return h[s]=t?p:e,t?this:new h},p=h[s],d=e.defineProperty,v=/\bsuper\b/.test(function(){this["super"]()})?/\bsuper\b/:/.*/;try{d({},"{}",{})}catch(m){d=function(e,t,n){return e[t]=n.value,e}}return function(e){var i=c.call(e,t),u=c.call(e,n),f=u&&e[n],l=u&&typeof f=="function",p=l?f[s]:f,d=i?e[t]:u&&l?function(){return f.apply(this,arguments)}:function(){},m=u&&i&&v.test(d),w=u?h(p):d[s],E,x;return m&&(d=T(p,t,d,!1)),c.call(e,a)&&(E=g([].concat(e[a]),w,p),x=E.length,x&&(d=function(e){return function(){var t=0;while(t<x)E[t++].call(this);return e.apply(this,arguments)}}(d),d[s]=w)),c.call(e,o)&&y(e[o],d,p,!0,!0),u&&(f!==p&&y(f,d,p,!0,!0),d[s]=w),w[t]!==d&&b(w,t,d,!1),y(e,w,p,!1,!0),c.call(e,r)&&S([].concat(e[r]),w),d}}(Object);