!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="assets/js/bundle",e(0)}([function(t,e,n){/*!
	 * Copyright (c) inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/06/30 - 17:54
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 * 0.0.1
	 * 2016-11-18 18:59:11
	 */
"use strict";var r=n(1),o=n(71),u=n(72),i=n(98),f=n(99),a=n(100),c=n(101),s=n(102),l=n(107),d=n(61),h={};h.version=function(){return"0.0.1"},h.build=function(){return"2016-11-18 18:59:11"},h.event={EventDispatcher:r.EventDispatcher,Events:o.Events,Scroll:u.Scroll,Wheel:i.Wheel},h.net={Ajax:f.Ajax},h.tick={Cycle:a.Cycle,Fps:c.Fps,Polling:s.Polling,Rate:l.Rate},h.util={Type:d.Type},window.MOKU=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),u=r(o),i=n(3),f=r(i),a=n(22),c=r(a),s=n(61),l=(0,c.default)("event listeners object"),d=function(){function t(){(0,u.default)(this,t),this[l]={}}return(0,f.default)(t,[{key:"destroy",value:function(){return this[l]={},!0}},{key:"on",value:function(t,e){if(!s.Type.exist(t))return!1;if(!s.Type.method(e))return!1;var n=this.listeners;return s.Type.hasKey(n,t)||(n[t]=[]),n[t].push(e),!0}},{key:"off",value:function(t,e){if(!s.Type.method(e))return!1;var n=this.listeners;if(!s.Type.hasKey(n,t))return!1;var r=n[t],o=r.indexOf(e);return o!==-1&&(r[o]=null,this.clean(t,r),!0)}},{key:"clean",value:function(t,e){var n=e.some(function(t){return s.Type.method(t)});return n||(this.listeners[t]=[]),!n}},{key:"has",value:function(t,e){if(!s.Type.method(e))return!1;var n=this.listeners;return!!s.Type.hasKey(n,t)&&n[t].indexOf(e)!==-1}},{key:"dispatch",value:function(t){var e=this,n=this.listeners,r=t.type;if(!s.Type.hasKey(n,r))return!1;var o=t;return o.target=this,n[r].map(function(t){return s.Type.method(t)?t.call(e,o):null}),!0}},{key:"addEventListener",value:function(t,e){return this.on(t,e)}},{key:"removeEventListener",value:function(t,e){return this.off(t,e)}},{key:"hasEventListener",value:function(t,e){return this.has(t,e)}},{key:"dispatchEvent",value:function(t){return this.dispatch(t)}},{key:"listeners",get:function(){return this[l]}}]),t}();e.default=d},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(4),u=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(5),__esModule:!0}},function(t,e,n){n(6);var r=n(9).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(7);r(r.S+r.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var r=n(8),o=n(9),u=n(10),i=n(12),f="prototype",a=function(t,e,n){var c,s,l,d=t&a.F,h=t&a.G,v=t&a.S,p=t&a.P,y=t&a.B,g=t&a.W,_=h?o:o[e]||(o[e]={}),b=_[f],m=h?r:v?r[e]:(r[e]||{})[f];h&&(n=e);for(c in n)s=!d&&m&&void 0!==m[c],s&&c in _||(l=s?m[c]:n[c],_[c]=h&&"function"!=typeof m[c]?n[c]:y&&s?u(l,r):g&&m[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[f]=t[f],e}(l):p&&"function"==typeof l?u(Function.call,l):l,p&&((_.virtual||(_.virtual={}))[c]=l,t&a.R&&b&&!b[c]&&i(b,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(11);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(14),o=n(16),u=n(20),i=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(15),o=n(8).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(15);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(23),__esModule:!0}},function(t,e,n){n(24),n(58),n(59),n(60),t.exports=n(9).Symbol},function(t,e,n){"use strict";var r=n(8),o=n(25),u=n(17),i=n(7),f=n(26),a=n(27).KEY,c=n(18),s=n(29),l=n(30),d=n(28),h=n(31),v=n(32),p=n(33),y=n(35),g=n(48),_=n(51),b=n(14),m=n(38),w=n(20),E=n(21),k=n(52),O=n(55),x=n(57),S=n(13),T=n(36),j=x.f,P=S.f,M=O.f,A=r.Symbol,L=r.JSON,R=L&&L.stringify,D="prototype",C=h("_hidden"),F=h("toPrimitive"),U={}.propertyIsEnumerable,N=s("symbol-registry"),W=s("symbols"),I=s("op-symbols"),K=Object[D],q="function"==typeof A,z=r.QObject,Y=!z||!z[D]||!z[D].findChild,J=u&&c(function(){return 7!=k(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(K,e);r&&delete K[e],P(t,e,n),r&&t!==K&&P(K,e,r)}:P,G=function(t){var e=W[t]=k(A[D]);return e._k=t,e},B=q&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},H=function(t,e,n){return t===K&&H(I,e,n),b(t),e=w(e,!0),b(n),o(W,e)?(n.enumerable?(o(t,C)&&t[C][e]&&(t[C][e]=!1),n=k(n,{enumerable:E(0,!1)})):(o(t,C)||P(t,C,E(1,{})),t[C][e]=!0),J(t,e,n)):P(t,e,n)},Q=function(t,e){b(t);for(var n,r=g(e=m(e)),o=0,u=r.length;u>o;)H(t,n=r[o++],e[n]);return t},V=function(t,e){return void 0===e?k(t):Q(k(t),e)},X=function(t){var e=U.call(this,t=w(t,!0));return!(this===K&&o(W,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(W,t)||o(this,C)&&this[C][t])||e)},Z=function(t,e){if(t=m(t),e=w(e,!0),t!==K||!o(W,e)||o(I,e)){var n=j(t,e);return!n||!o(W,e)||o(t,C)&&t[C][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=M(m(t)),r=[],u=0;n.length>u;)o(W,e=n[u++])||e==C||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===K,r=M(n?I:m(t)),u=[],i=0;r.length>i;)!o(W,e=r[i++])||n&&!o(K,e)||u.push(W[e]);return u};q||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===K&&e.call(I,n),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),J(this,t,E(1,n))};return u&&Y&&J(K,t,{configurable:!0,set:e}),G(t)},f(A[D],"toString",function(){return this._k}),x.f=Z,S.f=H,n(56).f=O.f=$,n(50).f=X,n(49).f=tt,u&&!n(34)&&f(K,"propertyIsEnumerable",X,!0),v.f=function(t){return G(h(t))}),i(i.G+i.W+i.F*!q,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var et=T(h.store),nt=0;et.length>nt;)p(et[nt++]);i(i.S+i.F*!q,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=A(t)},keyFor:function(t){if(B(t))return y(N,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),i(i.S+i.F*!q,"Object",{create:V,defineProperty:H,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),L&&i(i.S+i.F*(!q||c(function(){var t=A();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!B(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,R.apply(L,r)}}}),A[D][F]||n(12)(A[D],F,A[D].valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=n(12)},function(t,e,n){var r=n(28)("meta"),o=n(15),u=n(25),i=n(13).f,f=0,a=Object.isExtensible||function(){return!0},c=!n(18)(function(){return a(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},d=function(t,e){if(!u(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},h=function(t){return c&&v.NEED&&a(t)&&!u(t,r)&&s(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:h}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(8),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,e,n){var r=n(13).f,o=n(25),u=n(31)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){var r=n(29)("wks"),o=n(28),u=n(8).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,e,n){e.f=n(31)},function(t,e,n){var r=n(8),o=n(9),u=n(34),i=n(32),f=n(13).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:i.f(t)})}},function(t,e){t.exports=!0},function(t,e,n){var r=n(36),o=n(38);t.exports=function(t,e){for(var n,u=o(t),i=r(u),f=i.length,a=0;f>a;)if(u[n=i[a++]]===e)return n}},function(t,e,n){var r=n(37),o=n(47);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(25),o=n(38),u=n(42)(!1),i=n(46)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),a=0,c=[];for(n in f)n!=i&&r(f,n)&&c.push(n);for(;e.length>a;)r(f,n=e[a++])&&(~u(c,n)||c.push(n));return c}},function(t,e,n){var r=n(39),o=n(41);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(40);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(38),o=n(43),u=n(45);t.exports=function(t){return function(e,n,i){var f,a=r(e),c=o(a.length),s=u(i,c);if(t&&n!=n){for(;c>s;)if(f=a[s++],f!=f)return!0}else for(;c>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(44),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(44),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(29)("keys"),o=n(28);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(36),o=n(49),u=n(50);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,f=n(t),a=u.f,c=0;f.length>c;)a.call(t,i=f[c++])&&e.push(i);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(40);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(14),o=n(53),u=n(47),i=n(46)("IE_PROTO"),f=function(){},a="prototype",c=function(){var t,e=n(19)("iframe"),r=u.length,o="<",i=">";for(e.style.display="none",n(54).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),c=t.F;r--;)delete c[a][u[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f[a]=r(t),n=new f,f[a]=null,n[i]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(13),o=n(14),u=n(36);t.exports=n(17)?Object.defineProperties:function(t,e){o(t);for(var n,i=u(e),f=i.length,a=0;f>a;)r.f(t,n=i[a++],e[n]);return t}},function(t,e,n){t.exports=n(8).document&&document.documentElement},function(t,e,n){var r=n(38),o=n(56).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,e,n){var r=n(37),o=n(47).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(50),o=n(21),u=n(38),i=n(20),f=n(25),a=n(16),c=Object.getOwnPropertyDescriptor;e.f=n(17)?c:function(t,e){if(t=u(t),e=i(e,!0),a)try{return c(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(33)("asyncIterator")},function(t,e,n){n(33)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(62),u=r(o),i=n(67),f=r(i),a=n(2),c=r(a),s=n(3),l=r(s),d=function(){function t(){(0,c.default)(this,t)}return(0,l.default)(t,null,[{key:"method",value:function(t){return"function"==typeof t}},{key:"exist",value:function(t){return!!t}},{key:"number",value:function(e){return!t.array(e)&&e-parseFloat(e)+1>=0}},{key:"int",value:function(t){return(0,f.default)(t)}},{key:"string",value:function(t){return"string"==typeof t}},{key:"array",value:function(t){return Array.isArray(t)}},{key:"nil",value:function(t){return null===t}},{key:"hasKey",value:function(t,e){return(0,u.default)(t).indexOf(e)!==-1}},{key:"undef",value:function(t){return"undefined"==typeof t}},{key:"getExtension",value:function(t){var e=t.split(".");return 1===e.length||""===e[0]&&2===e.length?"":e.pop().toLowerCase()}},{key:"base64",value:function(e){return!!t.exist(e)&&(e.indexOf("data:image/jpeg;base64")!==-1||e.indexOf("data:image/png;base64")!==-1||e.indexOf("data:image/jpg;base64")!==-1||e.indexOf("data:image/gif;base64")!==-1)}},{key:"img",value:function(e){return!!t.exist(e)&&(!!t.base64(e)||["jpg","png","jpeg","gif"].indexOf(t.getExtension(e))!==-1)}}]),t}();e.default=d},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){n(64),t.exports=n(9).Object.keys},function(t,e,n){var r=n(65),o=n(36);n(66)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(41);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(7),o=n(9),u=n(18);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",i)}},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){n(69),t.exports=n(9).Number.isInteger},function(t,e,n){var r=n(7);r(r.S,"Number",{isInteger:n(70)})},function(t,e,n){var r=n(15),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),u=r(o),i=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;(0,u.default)(this,t),this.type=e,this.target=n,this.currentTarget=r};e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(73),u=r(o),i=n(2),f=r(i),a=n(3),c=r(a),s=n(77),l=r(s),d=n(90),h=r(d),v=n(22),p=r(v),y=n(1),g=n(71),_=(0,p.default)("Scroll singleton symbol"),b=null,m=(0,p.default)("bound mouseWheel symbol"),w=(0,p.default)("Cycle.UPDATE symbol"),E=(0,p.default)("previous scroll top"),k=0,O=200,x=function(t){function e(t){var n;if((0,f.default)(this,e),t!==_)throw new Error("don't use new, instead use static factory method.");var r=(0,l.default)(this,(e.__proto__||(0,u.default)(e)).call(this));if(null!==b){var o;return o=b,(0,l.default)(r,o)}return b=r,r[m]=r.scroll.bind(r),r[w]=new g.Events(e.SCROLL,r,r),r[E]=-1,n=b,(0,l.default)(r,n)}return(0,h.default)(e,t),(0,c.default)(e,[{key:"watch",value:function(){return this.unwatch(),window.addEventListener("scroll",this.bindScroll,!1),this}},{key:"unwatch",value:function(){return window.removeEventListener("scroll",this.bindScroll),this}},{key:"scroll",value:function(t){var n=e.y,r=window.innerHeight,o=this[E],u=this.events;u.original=t,u.y=n,u.height=r,u.bottom=n+r,u.previous=o,u.changed=o!==n,u.moving=n-o,this.dispatch(u),this[E]=n}},{key:"bindScroll",get:function(){return this[m]}},{key:"events",get:function(){return this[w]},set:function(t){this[w]=t}}],[{key:"jump",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return setTimeout(function(){window.scrollTo(0,t)},e)}},{key:"abort",value:function(){window.addEventListener("touchstart",e.onScroll,!1),window.addEventListener("touchmove",e.onScroll,!1),window.addEventListener("touchend",e.onScroll,!1),window.addEventListener("scroll",e.onScroll,!1),document.addEventListener("wheel",e.onScroll,!1),document.addEventListener("mousewheel",e.onScroll,!1),window.addEventListener("DOMMouseScroll",e.onScroll,!1)}},{key:"activate",value:function(){window.removeEventListener("touchstart",e.onScroll),window.removeEventListener("touchmove",e.onScroll),window.removeEventListener("touchend",e.onScroll),window.removeEventListener("scroll",e.onScroll),document.removeEventListener("wheel",e.onScroll),document.removeEventListener("mousewheel",e.onScroll),window.removeEventListener("DOMMouseScroll",e.onScroll)}},{key:"onScroll",value:function(t){return t.preventDefault(),t.stopPropagation(),!1}},{key:"freeze",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.freezeTime();return clearTimeout(k),e.abort(),k=setTimeout(e.activate,t)}},{key:"freezeTime",value:function(){return O}},{key:"setFreezeTime",value:function(t){O=t}},{key:"factory",value:function(){return new e(_)}},{key:"SCROLL",get:function(){return"scrollScroll"}},{key:"START",get:function(){return"scrollStart"}},{key:"COMPLETE",get:function(){return"scrollComplete"}},{key:"LINEUP_START",get:function(){return"scrollLineupStart"}},{key:"LINEUP_COMPLETE",get:function(){return"scrollLineupComplete"}},{key:"y",get:function(){return"undefined"!=typeof window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},set:function(t){window.scrollTo(0,t)}}]),e}(y.EventDispatcher);e.default=x},function(t,e,n){t.exports={default:n(74),__esModule:!0}},function(t,e,n){n(75),t.exports=n(9).Object.getPrototypeOf},function(t,e,n){var r=n(65),o=n(76);n(66)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(25),o=n(65),u=n(46)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(78),u=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,u.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(79),u=r(o),i=n(22),f=r(i),a="function"==typeof f.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};e.default="function"==typeof f.default&&"symbol"===a(u.default)?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){n(81),n(86),t.exports=n(32).f("iterator")},function(t,e,n){"use strict";var r=n(82)(!0);n(83)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(44),o=n(41);t.exports=function(t){return function(e,n){var u,i,f=String(o(e)),a=r(n),c=f.length;return a<0||a>=c?t?"":void 0:(u=f.charCodeAt(a),u<55296||u>56319||a+1===c||(i=f.charCodeAt(a+1))<56320||i>57343?t?f.charAt(a):u:t?f.slice(a,a+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,e,n){"use strict";var r=n(34),o=n(7),u=n(26),i=n(12),f=n(25),a=n(84),c=n(85),s=n(30),l=n(76),d=n(31)("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",p="keys",y="values",g=function(){return this};t.exports=function(t,e,n,_,b,m,w){c(n,e,_);var E,k,O,x=function(t){if(!h&&t in P)return P[t];switch(t){case p:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",T=b==y,j=!1,P=t.prototype,M=P[d]||P[v]||b&&P[b],A=M||x(b),L=b?T?x("entries"):A:void 0,R="Array"==e?P.entries||M:M;if(R&&(O=l(R.call(new t)),O!==Object.prototype&&(s(O,S,!0),r||f(O,d)||i(O,d,g))),T&&M&&M.name!==y&&(j=!0,A=function(){return M.call(this)}),r&&!w||!h&&!j&&P[d]||i(P,d,A),a[e]=A,a[S]=g,b)if(E={values:T?A:x(y),keys:m?A:x(p),entries:L},w)for(k in E)k in P||u(P,k,E[k]);else o(o.P+o.F*(h||j),e,E);return E}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(52),o=n(21),u=n(30),i={};n(12)(i,n(31)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),u(t,e+" Iterator")}},function(t,e,n){n(87);for(var r=n(8),o=n(12),u=n(84),i=n(31)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var c=f[a],s=r[c],l=s&&s.prototype;l&&!l[i]&&o(l,i,c),u[c]=u.Array}},function(t,e,n){"use strict";var r=n(88),o=n(89),u=n(84),i=n(38);t.exports=n(83)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(91),u=r(o),i=n(95),f=r(i),a=n(78),c=r(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,c.default)(e)));t.prototype=(0,f.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u.default?(0,u.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(92),__esModule:!0}},function(t,e,n){n(93),t.exports=n(9).Object.setPrototypeOf},function(t,e,n){var r=n(7);r(r.S,"Object",{setPrototypeOf:n(94).set})},function(t,e,n){var r=n(15),o=n(14),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(10)(Function.call,n(57).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){t.exports={default:n(96),__esModule:!0}},function(t,e,n){n(97);var r=n(9).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(7);r(r.S,"Object",{create:n(52)})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(73),u=r(o),i=n(2),f=r(i),a=n(3),c=r(a),s=n(77),l=r(s),d=n(90),h=r(d),v=n(22),p=r(v),y=n(1),g=n(71),_=(0,p.default)("Scroll singleton symbol"),b=null,m=(0,p.default)("bound mouseWheel Symbol"),w=function(t){function e(t){var n;if((0,f.default)(this,e),t!==_)throw new Error("don't use new, instead use static factory method.");var r=(0,l.default)(this,(e.__proto__||(0,u.default)(e)).call(this));if(null!==b){var o;return o=b,(0,l.default)(r,o)}return b=r,r[m]=r.mouseWheel.bind(r),r.threshold=200,r.moved=0,r.coefficient=-7.5,n=b,(0,l.default)(r,n)}return(0,h.default)(e,t),(0,c.default)(e,[{key:"watch",value:function(){return this.unwatch(),window.addEventListener("wheel",this.boundWheel,!1),this}},{key:"unwatch",value:function(){return window.removeEventListener("wheel",this.boundWheel),this}},{key:"mouseWheel",value:function(t){var e=t.deltaY;return this.moving(e)}},{key:"moving",value:function(t){this.moved+=t;var e=this.moved;return 0===e?e:Math.abs(e)>=this.threshold?(e>0?this.up(e):this.down(e),this.moved=0,e):e}},{key:"up",value:function(t){var n=new g.Events(e.UP,this,this);return n.moved=t,this.dispatch(n),t}},{key:"down",value:function(t){var n=new g.Events(e.DOWN,this,this);return n.moved=t,this.dispatch(n),t}},{key:"boundWheel",get:function(){return this[m]}}],[{key:"factory",value:function(){return new e(_)}},{key:"UP",get:function(){return"wheelUp"}},{key:"DOWN",get:function(){return"wheelDown"}}]),e}(y.EventDispatcher);e.default=w},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(95),u=r(o),i=n(73),f=r(i),a=n(2),c=r(a),s=n(3),l=r(s),d=n(77),h=r(d),v=n(90),p=r(v),y=n(22),g=r(y),_=n(1),b=n(71),m=n(61),w=self.fetch,E=self.Request,k=(0,g.default)("flag can ajax SYmbol"),O=function(t){function e(){(0,c.default)(this,e);var t=(0,h.default)(this,(e.__proto__||(0,f.default)(e)).call(this));return t[k]=!0,t}return(0,p.default)(e,t),(0,l.default)(e,[{key:"start",value:function(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(!this.can)return!1;this.disable();var i=e.option(t,n,o,u),f=new b.Events(e.START,this,this);return f.request=i,this.dispatch(f),w(i).then(function(t){if(200!==t.status)throw new Error("Ajax status error: ("+t.status+")");return t.json()}).then(function(t){var n=new b.Events(e.COMPLETE,r,r);n.data=t,r.dispatch(n),r.enable()}).catch(function(t){var n=new b.Events(e.ERROR,r,r);n.data=null,n.error=t,r.dispatch(n),r.enable()}),!0}},{key:"enable",value:function(){return this.can=!0,this.can}},{key:"disable",value:function(){return this.can=!1,this.can}},{key:"can",get:function(){return this[k]},set:function(t){this[k]=t}}],[{key:"option",value:function t(e,n,r,o){var t=(0,u.default)({method:n,cache:"no-cache",credentials:"same-origin"});return m.Type.exist(r)&&(t.headers=r),m.Type.exist(o)&&(t.body=o),new E(e,t)}},{key:"START",get:function(){return"ajaxStart"}},{key:"COMPLETE",get:function(){return"ajaxComplete"}},{key:"ERROR",get:function(){return"ajaxError"}}]),e}(_.EventDispatcher);e.default=O},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(73),u=r(o),i=n(2),f=r(i),a=n(3),c=r(a),s=n(77),l=r(s),d=n(90),h=r(d),v=n(22),p=r(v),y=n(1),g=n(71),_=(0,p.default)("singleton instance"),b=null,m=(0,p.default)("requestAnimationFrame id"),w=(0,p.default)("bind update"),E=(0,p.default)("is requestAnimationFrame started flag"),k=(0,p.default)("Cycle.UPDATE Events instance"),O=function(t){function e(t){var n;if((0,f.default)(this,e),t!==_)throw new Error("don't use new, instead use static factory method.");if(null!==b){var r;return r=b,(0,l.default)(o,r)}var o=(0,l.default)(this,(e.__proto__||(0,u.default)(e)).call(this));return b=o,o[k]=new g.Events(e.UPDATE,o,o),o[m]=0,o[w]=o.update.bind(o),o[E]=!1,n=b,(0,l.default)(o,n)}return(0,h.default)(e,t),(0,c.default)(e,[{key:"start",value:function(){return!this[E]&&(this[E]=!0,this.update(),!0)}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this[m];return!!this[E]&&(cancelAnimationFrame(t),this[E]=!1,!0)}},{key:"update",value:function(){var t=requestAnimationFrame(this[w]);this[m]=t;var e=this.events;e.id=t,this.dispatch(e)}},{key:"events",get:function(){return this[k]}}],[{key:"factory",value:function(){return null===b?new e(_):b}},{key:"UPDATE",get:function(){return"cycleUpdate"}}]),e}(y.EventDispatcher);e.default=O},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(73),u=r(o),i=n(2),f=r(i),a=n(3),c=r(a),s=n(77),l=r(s),d=n(90),h=r(d),v=n(22),p=r(v),y=n(71),g=n(102),_=(0,p.default)("Singleton Fps Symbol"),b=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;(0,f.default)(this,e);var n=(0,l.default)(this,(e.__proto__||(0,u.default)(e)).call(this,1e3/t));n[_]=t;var r=new y.Events(e.UPDATE,n,n);return r.fps=t,n.events=r,n}return(0,h.default)(e,t),(0,c.default)(e,[{key:"fps",get:function(){return this[_]},set:function(t){var e=this.events;e.fps=t,this[_]=t,this.polling=1e3/t}}],[{key:"UPDATE",get:function(){return"fpsUpdate"}}]),e}(g.Polling);e.default=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(103),u=r(o),i=n(73),f=r(i),a=n(2),c=r(a),s=n(3),l=r(s),d=n(77),h=r(d),v=n(90),p=r(v),y=n(22),g=r(y),_=n(1),b=n(71),m=n(100),w=(0,g.default)("bound update"),E=(0,g.default)("is started watch Cycle.UPDATE flag"),k=(0,g.default)("start time"),O=(0,g.default)("polling duration"),x=(0,g.default)("Polling.UPDATE Events instance"),S=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;(0,c.default)(this,e);var n=(0,h.default)(this,(e.__proto__||(0,f.default)(e)).call(this)),r=m.Cycle.factory();return(0,u.default)(n,{cycle:r}),n[O]=t,n[w]=n.update.bind(n),n[E]=!1,n[k]=0,n[x]=new b.Events(e.UPDATE,n,n),n}return(0,p.default)(e,t),(0,l.default)(e,[{key:"change",value:function(t){return this.polling=t,this.update()}},{key:"turnOver",value:function(){return this[E]=!this[E],this.started}},{key:"updateEvents",value:function(t,e){this.begin=t;var n=this.events;return n.begin=t,n.present=e,n.polling=this.polling,n}},{key:"initCycle",value:function(){var t=this.cycle;return t.on(m.Cycle.UPDATE,this[w]),t.start(),t}},{key:"start",value:function(){if(this.started)return!1;this.turnOver(),this.initCycle();var t=Date.now();return this.fire(this.updateEvents(t,t)),!0}},{key:"stop",value:function(){return!!this.started&&(this.cycle.off(m.Cycle.UPDATE,this[w]),this.turnOver(),!0)}},{key:"update",value:function(){var t=Date.now(),e=this.polling,n=this.begin;return t-n>=e&&(this.fire(this.updateEvents(n,t)),this.begin=t,!0)}},{key:"fire",value:function(t){this.dispatch(t)}},{key:"polling",get:function(){return this[O]},set:function(t){this[O]=t}},{key:"begin",get:function(){return this[k]},set:function(t){this[k]=t}},{key:"events",get:function(){return this[x]},set:function(t){this[x]=t}},{key:"started",get:function(){return this[E]}}],[{key:"UPDATE",get:function(){return"pollingUpdate"}}]),e}(_.EventDispatcher);e.default=S},function(t,e,n){t.exports={
default:n(104),__esModule:!0}},function(t,e,n){n(105),t.exports=n(9).Object.assign},function(t,e,n){var r=n(7);r(r.S+r.F,"Object",{assign:n(106)})},function(t,e,n){"use strict";var r=n(36),o=n(49),u=n(50),i=n(65),f=n(39),a=Object.assign;t.exports=!a||n(18)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=i(t),a=arguments.length,c=1,s=o.f,l=u.f;a>c;)for(var d,h=f(arguments[c++]),v=s?r(h).concat(s(h)):r(h),p=v.length,y=0;p>y;)l.call(h,d=v[y++])&&(n[d]=h[d]);return n}:a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(73),u=r(o),i=n(2),f=r(i),a=n(3),c=r(a),s=n(77),l=r(s),d=n(90),h=r(d),v=n(22),p=r(v),y=n(71),g=n(102),_=(0,p.default)("save fps"),b=(0,p.default)("for update count"),m=(0,p.default)("save rate"),w=function(t){function e(t){(0,f.default)(this,e);var n=(0,l.default)(this,(e.__proto__||(0,u.default)(e)).call(this,1)),r=new y.Events(e.UPDATE,n,n);return r.rate=t,n.events=r,n[b]=0,n[m]=[e.RATE_60,e.RATE_30,e.RATE_20,e.RATE_15,e.RATE_12,e.RATE_10,e.RATE_6,e.RATE_5],n[_]=0,n.change(t),n}return(0,h.default)(e,t),(0,c.default)(e,[{key:"change",value:function(t){if(this.rates.indexOf(t)===-1)throw new Error("illegal rate: "+t+". use const RATE_NN");this[_]=t}},{key:"start",value:function(){return!this.started&&(this.turnOver(),this.initCycle(),this.fire(this.updateEvents(0,0)),!0)}},{key:"update",value:function(){this.count+=1;var t=this.count%this.rate;return 0===t&&(this.count=0,this.fire(this.updateEvents(0,0)),!0)}},{key:"rates",get:function(){return this[m]}},{key:"rate",get:function(){return this[_]}},{key:"count",get:function(){return this[b]},set:function(t){this[b]=t}}],[{key:"RATE_60",get:function(){return 1}},{key:"RATE_30",get:function(){return 2}},{key:"RATE_20",get:function(){return 3}},{key:"RATE_15",get:function(){return 4}},{key:"RATE_12",get:function(){return 5}},{key:"RATE_10",get:function(){return 6}},{key:"RATE_6",get:function(){return 10}},{key:"RATE_5",get:function(){return 12}},{key:"UPDATE",get:function(){return"rateUpdate"}}]),e}(g.Polling);e.default=w}]);