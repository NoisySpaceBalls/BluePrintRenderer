!function(t,o,r,e,n,p,c,i,u,f){function s(t){return t&&typeof t===o&&!(typeof t.length===r&&!t.propertyIsEnumerable(e))&&t||null}function l(t){return t&&typeof t===o&&typeof t.length===r&&!t.propertyIsEnumerable(e)&&t||null}function y(t){return t&&"function"==typeof t&&t||null}function a(t){return y(t)&&t.prototype&&t===t.prototype.constructor&&t||null}function $(t,o,r,e,n,p){r&&r.hasOwnProperty(t)||(e[t]=o)}function b(t,o,r){if(l(o))for(var e=o.length;--e>=0;)b(t,o[e],r);else{r=r||{constructor:1,$super:1,prototype:1,$superp:1};var n,p,c=a(t),i=a(o),u=t.prototype;if(s(o)||c)for(n in o)$(n,o[n],r,t,c,u);if(i){p=o.prototype;for(n in p)$(n,p[n],r,t,c,u)}c&&i&&b(u,o.prototype,r)}}function g(t){var o,r;Object.freeze(t);for(r in t)o=t[r],t.hasOwnProperty(r)&&"object"==typeof o&&!Object.isFrozen(o)&&g(o)}function O(t,o){o||(o=t,t=0);var r,e,n,p,c,i,u,f,s,l,y,a=0,$={constructor:1,$singleton:1,$static:1,$statics:1,prototype:1,$super:1,$superp:1,main:1,toString:0},b=O.plugins;o=("function"==typeof o?o():o)||{},e=o.hasOwnProperty("constructor")?o.constructor:0,n=o.$singleton,p=o.$statics||o.$static;for(c in b)$[c]=1;for(r=n?function(){}:e?e:function(){},t=!t||t instanceof Array?t:[t],u=t&&t.length,s=t[0],!n&&u&&(l=s.prototype&&s===s.prototype.constructor&&s,l?(y=function(){},y.prototype=l.prototype,y.prototype.constructor=y,r.prototype=new y,r.prototype.constructor=r,l.prototype.constructor=l):r.prototype=s),i=n?r:r.prototype;u>a;){f=t[a++];for(c in f)$[c]||(r[c]=f[c]);if(!n&&0!==a)for(c in f.prototype)$[c]||(i[c]=f.prototype[c])}for(c in o)if(!$[c]){var g=o[c];g&&(g.get||g.set)?(g.enumerable=!0,Object.defineProperty(i,c,g)):i[c]=g}for(c in p)r[c]=p[c];f=t&&s||t,r.$super=f,r.$superp=f&&f.prototype||f;for(c in b)b[c](r,t,o);return"function"==typeof o.main&&o.main.call(r,r),r}O.plugins={$ready:function m(t,o,r,e){for(var n,i,u,f=r.$ready,s=o?o.length:0,l=s,a=s&&o[0].$super;s--;)for(i=0;c>i&&(u=p[i],n=o[s],n===u[0]&&(u[1].call(n,t,o,r),l--),l);i++);a&&m(t,[a],r,!0),!e&&y(f)&&(f.call(t,t,o,r),p.push([t,f]),c++)},$const:function(t,o,r){var e,n=r.$const;for(e in n)Object.defineProperty(t,e,{enumerable:!0,value:n[e]}),"object"!=typeof t[e]||Object.isFrozen(t[e])||g(t[e])}},f={Class:O,extend:b,mapOrNil:s,arrayOrNil:l,functionOrNil:y,classOrNil:a},"undefined"!=typeof module&&module.exports?module.exports=f:(u=t.Class,t.Class=O,t.jsface=f,f.noConflict=function(){t.Class=u})}(this,"object","number","length",Object.prototype.toString,[],0);