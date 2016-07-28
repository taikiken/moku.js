/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/js/bundle";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright (c) inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/06/30 - 17:54
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 * 0.0.1
	 * 2016-07-27 19:41:33
	 */
	// use strict は本来不要でエラーになる
	// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
	/* eslint strict: [0, "global"] */
	'use strict';

	// event

	var _EventDispatcher = __webpack_require__(1);

	var _Events = __webpack_require__(62);

	var _Scroll = __webpack_require__(68);

	var _Wheel = __webpack_require__(95);

	var _Ajax = __webpack_require__(96);

	var _Cycle = __webpack_require__(97);

	var _Fps = __webpack_require__(98);

	var _Polling = __webpack_require__(99);

	var _Rate = __webpack_require__(100);

	var _Type = __webpack_require__(61);

	/**
	 * **MOKU**
	 * <p>global Object</p>
	 * <p>public な Class はここからアクセス可能です</p>
	 * @type {Object}
	 */


	// net
	var MOKU = {};
	/**
	 * version number を取得します
	 * @return {string} version number を返します
	 */


	// util


	// tick
	MOKU.version = function () {
	  return '0.0.1';
	};
	/**
	 * build 日時を取得します
	 * @return {string}  build 日時を返します
	 */
	MOKU.build = function () {
	  return '2016-07-27 19:41:33';
	};
	/**
	 * MOKU.event
	 * @type {Object} MOKU.event object を返します
	 */
	MOKU.event = {
	  EventDispatcher: _EventDispatcher.EventDispatcher,
	  Events: _Events.Events,
	  Scroll: _Scroll.Scroll,
	  Wheel: _Wheel.Wheel
	};
	/**
	 * MOKU.net
	 * @type {Object} MOKU.net object を返します
	 */
	MOKU.net = {
	  Ajax: _Ajax.Ajax
	};
	/**
	 * MOKU.tick
	 * @type {Object} MOKU.tick object を返します
	 */
	MOKU.tick = {
	  Cycle: _Cycle.Cycle,
	  Fps: _Fps.Fps,
	  Polling: _Polling.Polling,
	  Rate: _Rate.Rate
	};
	/**
	 * MOKU.util
	 * @type {Object} MOKU.util object を返します
	 */
	MOKU.util = {
	  Type: _Type.Type
	};

	// export
	window.MOKU = MOKU;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EventDispatcher = undefined;

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _Type = __webpack_require__(61);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * private property key, listeners Object
	 * @type {Symbol}
	 * @private
	 */
	var listenersKey = (0, _symbol2.default)();

	/**
	 * <p>Custom Event を作成し Event 通知を行います</p>
	 *
	 * ```
	 * const callback = (event) => {
	 *  console.log(event);
	 * };
	 *
	 * const event:EventDispatcher = new EventDispatcher();
	 * event.on('abc', callback);
	 *
	 * console.log(event.has('abc', callback));// true
	 *
	 * event.dispatch(new Events('abc'));
	 *
	 * event.off('abc', callback);
	 * console.log(event.has('abc', callback));// false
	 * ```
	 */
	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/06/30 - 20:09
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	// util

	var EventDispatcher = exports.EventDispatcher = function () {
	  /**
	   * listener property をイニシャライズします
	   */

	  function EventDispatcher() {
	    (0, _classCallCheck3.default)(this, EventDispatcher);

	    /**
	     * リスナーリスト
	     * @type {Object}
	     * @private
	     */
	    this[listenersKey] = {};
	  }
	  // ----------------------------------------
	  // GETTER / SETTER
	  // ----------------------------------------
	  /**
	   * リスナーリストを取得します
	   * @return {Object} リスナーリストを返します
	   */


	  (0, _createClass3.default)(EventDispatcher, [{
	    key: 'destroy',

	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * 全てのリスナーを破棄します
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */
	    value: function destroy() {
	      this[listenersKey] = {};
	      return true;
	    }
	    /**
	     * event type に リスナー関数を bind します
	     * @param {string} type event type（種類）
	     * @param {Function} listener callback関数
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */

	  }, {
	    key: 'on',
	    value: function on(type, listener) {
	      if (!_Type.Type.method(listener)) {
	        // listener が 関数でないので処理しない
	        return false;
	      }

	      var listeners = this.listeners;

	      // listeners.type が存在するかを調べます
	      if (!listeners.hasOwnProperty(type)) {
	        // listeners.type が存在しない
	        // listeners.type 新規配列を作成し
	        // listener を配列へ登録します
	        listeners[type] = [];
	        listeners[type].push(listener);
	      } else {
	        // すでに listeners.type が存在する
	        // listeners.type 配列に listener が存在しないならば登録します
	        if (listeners[type].indexOf(listener) === -1) {
	          listeners[type].push(listener);
	        }
	      }

	      return true;
	    }
	    /**
	     * <p>event type からリスナー関数を remove します<br>
	     * 内部処理は一時的に null 設定にします</p>
	     * @param {string} type event type（種類）
	     * @param {Function} listener リスナー関数
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */

	  }, {
	    key: 'off',
	    value: function off(type, listener) {
	      if (!_Type.Type.method(listener)) {
	        // listener が 関数でないので処理しない
	        return false;
	      }

	      // @type {Object} - events.type:String: [listener:Function...]
	      var listeners = this.listeners;

	      if (!listeners.hasOwnProperty(type)) {
	        // listener.type が存在しない
	        // 処理しない
	        return false;
	      }

	      // @type {Array} - listener list
	      var types = listeners[type];

	      // listener の配列位置を調べる
	      // @type {number}
	      var index = types.indexOf(listener);

	      if (index === -1) {
	        // 配列位置が -1, 見つからなかった
	        // 処理しない
	        return false;
	      }

	      // すぐに削除するのでは無く null 代入
	      // loop(iterator) の中で off すると index 位置が変わりまずい
	      types[index] = null;

	      this.clean(type, types);

	      return true;
	    }
	    /**
	     * <p>リスナー配列を調べ可能なら空にします<br>
	     * リスナーリストが全て null の時に 空配列にします</p>
	     * @param {string} type event type（種類）
	     * @param {Array<Function>} types event type に登録されている配列（関数）
	     * @return {boolean} 成功・不成功の真偽値を返します, true: 空にした
	     */

	  }, {
	    key: 'clean',
	    value: function clean(type, types) {
	      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	      // Array.some は 戻り値が true の時に走査を止めます
	      // types 配列に null 以外があるかを調べます
	      // @type {boolean} - listener list に 関数(typeof 'function')が存在すると true になります
	      var hasFunction = types.some(function (listener) {
	        return typeof listener === 'function';
	      });

	      if (!hasFunction) {
	        // null 以外が無いので空にする
	        this.listeners[type] = [];
	      }

	      // 空配列にしたかを hasFunction flag を反転させることで知らせます
	      return !hasFunction;
	    }
	    /**
	     * event type にリスナー関数が登録されているかを調べます
	     * @param {string} type event type（種類）
	     * @param {Function} listener リスナー関数
	     * @return {boolean} event type にリスナー関数が登録されているかの真偽値を返します
	     */

	  }, {
	    key: 'has',
	    value: function has(type, listener) {
	      if (!_Type.Type.method(listener)) {
	        // listener が 関数でないので処理しない
	        return false;
	      }

	      // @type {Object} - events.type:String: [listener:Function...]
	      var listeners = this.listeners;

	      if (!listeners.hasOwnProperty(type)) {
	        // listener.type が存在しない
	        // 処理しない
	        return false;
	      }

	      // @type {boolean} - 存在チェック
	      return listeners[type].indexOf(listener) !== -1;
	    }
	    /**
	     * イベントを発生させリスナー関数を call します
	     * @param {Events|*} events 送信される Event Object.<br>
	     *   type キーにイベント種類が設定されています、dispatch 時に target プロパティを追加し this を設定します
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */

	  }, {
	    key: 'dispatch',
	    value: function dispatch(events) {
	      var _this = this;

	      // @type {Object} - events.type:string: [listener:Function...]
	      var listeners = this.listeners;
	      // @type {string} - event type
	      var type = events.type;

	      // typeof でなく hasOwnProperty で調べる
	      if (!listeners.hasOwnProperty(type)) {
	        // listener.type が存在しない
	        // 処理しない
	        return false;
	      }

	      // event.target = this しようとすると
	      // Assignment to property of function parameter 'event'  no-param-reassign
	      // になるのでコピーし使用します
	      var eventObject = events;
	      // target プロパティに発生元を設定する
	      eventObject.target = this;

	      // callback を実行する
	      listeners[type].map(
	      // @param listener {Function}
	      function (listener) {
	        // null が混じっているのでタイプチェックを行い listener 関数を実行します
	        if (_Type.Type.method(listener)) {
	          return listener.call(_this, eventObject);
	        }

	        return null;
	      });

	      return true;
	    }
	    /**
	     * **alias on**
	     * <p>event type に リスナー関数を bind します</p>
	     * @deprecated instead use on
	     * @param {string} type event type（種類）
	     * @param {Function} listener callback関数
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */

	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(type, listener) {
	      return this.on(type, listener);
	    }
	    /**
	     * **alias off**
	     * <p>event type からリスナー関数を remove します</p>
	     * @deprecated instead use off
	     * @param {string} type event type（種類）
	     * @param {Function} listener リスナー関数
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */

	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(type, listener) {
	      return this.off(type, listener);
	    }
	    /**
	     * **alias has**
	     * <p>event type にリスナー関数が登録されているかを調べます</p>
	     * @deprecated instead use has
	     * @param {string} type event type（種類）
	     * @param {Function} listener リスナー関数
	     * @return {boolean} event type にリスナー関数が登録されているかの真偽値を返します
	     */

	  }, {
	    key: 'hasEventListener',
	    value: function hasEventListener(type, listener) {
	      return this.has(type, listener);
	    }
	    /**
	     * **alias dispatch**
	     * <p>イベントを発生させリスナー関数を call します</p>
	     * @deprecated instead use dispatch
	     * @param {Events} events typeキー が必須です
	     * @return {boolean} 成功・不成功の真偽値を返します
	     */

	  }, {
	    key: 'dispatchEvent',
	    value: function dispatchEvent(events) {
	      return this.dispatch(events);
	    }
	  }, {
	    key: 'listeners',
	    get: function get() {
	      return this[listenersKey];
	    }
	  }]);
	  return EventDispatcher;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(4);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(8)
	  , has            = __webpack_require__(25)
	  , DESCRIPTORS    = __webpack_require__(17)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(26)
	  , META           = __webpack_require__(27).KEY
	  , $fails         = __webpack_require__(18)
	  , shared         = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(30)
	  , uid            = __webpack_require__(28)
	  , wks            = __webpack_require__(31)
	  , wksExt         = __webpack_require__(32)
	  , wksDefine      = __webpack_require__(33)
	  , keyOf          = __webpack_require__(35)
	  , enumKeys       = __webpack_require__(48)
	  , isArray        = __webpack_require__(51)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(20)
	  , createDesc     = __webpack_require__(21)
	  , _create        = __webpack_require__(52)
	  , gOPNExt        = __webpack_require__(55)
	  , $GOPD          = __webpack_require__(57)
	  , $DP            = __webpack_require__(13)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(56).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(50).f  = $propertyIsEnumerable;
	  __webpack_require__(49).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(34)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 25 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(28)('meta')
	  , isObject = __webpack_require__(15)
	  , has      = __webpack_require__(25)
	  , setDesc  = __webpack_require__(13).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(18)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(25)
	  , TAG = __webpack_require__(31)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(29)('wks')
	  , uid        = __webpack_require__(28)
	  , Symbol     = __webpack_require__(8).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(31);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(8)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(34)
	  , wksExt         = __webpack_require__(32)
	  , defineProperty = __webpack_require__(13).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(38);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(47);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(25)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(42)(false)
	  , IE_PROTO     = __webpack_require__(46)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(41);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(43)
	  , toIndex   = __webpack_require__(45);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(44)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(29)('keys')
	  , uid    = __webpack_require__(28);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(49)
	  , pIE     = __webpack_require__(50);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 50 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(53)
	  , enumBugKeys = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(46)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(54).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(36);

	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(38)
	  , gOPN      = __webpack_require__(56).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(50)
	  , createDesc     = __webpack_require__(21)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(20)
	  , has            = __webpack_require__(25)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)('asyncIterator');

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)('observable');

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Type = undefined;

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/12 - 18:24
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	/**
	 * 型チェックを行います
	 * @static
	 */

	var Type = exports.Type = function () {
	  function Type() {
	    (0, _classCallCheck3.default)(this, Type);
	  }

	  (0, _createClass3.default)(Type, null, [{
	    key: 'method',

	    /**
	     * 引数(target)が関数かを調べます
	     * @param {Function|*} target 調査対象
	     * @return {boolean} 引数(target)が関数かを調べ結果を返します、true: 関数
	     */
	    value: function method(target) {
	      return typeof target === 'function';
	    }
	    /**
	     * 引数(target)を `!!` で調べます
	     * @param {*} target 調査対象
	     * @return {boolean} 引数(target)を `!!` で調べ結果を返します
	     */

	  }, {
	    key: 'exist',
	    value: function exist(target) {
	      return !!target;
	    }
	    /**
	     * 引数(target)が number かを調べます
	     * @param {*} target 調査対象
	     * @returns {boolean} 引数(target)が number かを調べ結果を返します、true: number
	     */

	  }, {
	    key: 'number',
	    value: function number(target) {
	      return typeof target === 'number';
	    }
	    /**
	     * 引数(target)が string かを調べます
	     * @param {*} target 調査対象
	     * @returns {boolean} 引数(target)が string かを調べ結果を返します、true: string
	     */

	  }, {
	    key: 'string',
	    value: function string(target) {
	      return typeof target === 'string';
	    }
	    /**
	     * 引数(target)を `Array.isArray` で配列かを調べます
	     * @param {*} target 調査対象
	     * @returns {boolean} 引数(target)が 配列 かを調べ結果を返します、true: 配列
	     */

	  }, {
	    key: 'array',
	    value: function array(target) {
	      return Array.isArray(target);
	    }
	  }]);
	  return Type;
	}();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Events = undefined;

	var _assign = __webpack_require__(63);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/12 - 19:07
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	/**
	 * custom Event のリスナー関数引数に送られる Event Object
	 *
	 * EventDispatcher.dispatch する時の引数として使用します
	 *
	 * 3つのプロパティは必須項目です、イベントにあわせプロパティを追加します
	 *
	 * - type: string, イベント種類
	 * - target: *, イベント発生インスタンス
	 * - currentTarget: *, current イベント発生インスタンス
	 */

	var Events =
	/**
	 * custom Event Object
	 * @param {string} type イベント種類
	 * @param {*} [target=this] イベント発生インスタンス
	 * @param {*} [currentTarget=this] current イベント発生インスタンス
	 * */
	exports.Events = function Events(type) {
	  var target = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];
	  var currentTarget = arguments.length <= 2 || arguments[2] === undefined ? this : arguments[2];
	  (0, _classCallCheck3.default)(this, Events);

	  // https://github.com/esdoc/esdoc/issues/305
	  /**
	   * @property {string} this.type - イベント種類
	   * @property {*} this.target - イベント発生インスタンス
	   * @property {*} this.currentTarget - current イベント発生インスタンス
	   */
	  (0, _assign2.default)(this, { type: type, target: target, currentTarget: currentTarget });
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(66)});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(36)
	  , gOPS     = __webpack_require__(49)
	  , pIE      = __webpack_require__(50)
	  , toObject = __webpack_require__(67)
	  , IObject  = __webpack_require__(39)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(41);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Scroll = undefined;

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _EventDispatcher2 = __webpack_require__(1);

	var _Events = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * new を許可しないための Symbol
	 * @type {Symbol}
	 * @private
	 */
	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/26 - 21:05
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	// event
	var singletonSymbol = (0, _symbol2.default)();
	/**
	 * singleton instance, nullable
	 * @type {?Scroll}
	 * @private
	 */
	var instance = null;

	/**
	 * private property key, bind 済み mouseWheel を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var bindSymbol = (0, _symbol2.default)();
	/**
	 * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var eventsSymbol = (0, _symbol2.default)();

	/**
	 * window scroll event を監視し通知を行います
	 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
	 *
	 * ```
	 * const instance:Scroll = Scroll.factory();
	 * ```
	 */

	var Scroll = exports.Scroll = function (_EventDispatcher) {
	  (0, _inherits3.default)(Scroll, _EventDispatcher);

	  /**
	   * singleton です
	   * @param {Symbol} checkSymbol singleton を保証するための private instance
	   * @return {Scroll} singleton instance を返します
	   */

	  function Scroll(checkSymbol) {
	    var _ret2;

	    (0, _classCallCheck3.default)(this, Scroll);

	    // checkSymbol と singleton が等価かをチェックします
	    if (checkSymbol !== singletonSymbol) {
	      throw new Error('don\'t use new, instead use static factory method.');
	    }

	    // instance 作成済みかをチェックし instance が null の時 this を設定します

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Scroll).call(this));

	    if (instance !== null) {
	      var _ret;

	      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    // onetime setting
	    instance = _this;

	    // event handler
	    // @type {function} - bound scroll function
	    _this[bindSymbol] = _this.scroll.bind(_this);
	    // @type {Events} - events instance
	    _this[eventsSymbol] = new _Events.Events(Scroll.SCROLL, _this, _this);

	    // 設定済み instance を返します
	    return _ret2 = instance, (0, _possibleConstructorReturn3.default)(_this, _ret2);
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * scroll で発生するイベントを取得します
	   * @event SCROLL
	   * @return {string} event, scrollScroll を返します
	   * @default scrollScroll
	   */


	  (0, _createClass3.default)(Scroll, [{
	    key: 'watch',

	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * scroll event を監視します<br>
	     * 監視前に二重に addEventListener しないように unwatch を実行します
	     * @return {Scroll} method chain 可能なように instance を返します
	     */
	    value: function watch() {
	      this.unwatch();

	      window.addEventListener('scroll', this.bindScroll, false);

	      return this;
	    }
	    /**
	     * scroll event を監視を止めます
	     * @return {Scroll} method chain 可能なように instance を返します
	     */

	  }, {
	    key: 'unwatch',
	    value: function unwatch() {
	      window.removeEventListener('scroll', this.bindScroll);

	      return this;
	    }
	    /**
	     * window scroll event handler<br>
	     * window scroll event 発生後に scroll top 位置をもたせた Scroll.SCROLL custom event を発火します
	     * @param {?Event} event window scroll event, nullable
	     * @return {undefined} no-return
	     */

	  }, {
	    key: 'scroll',
	    value: function scroll(event) {
	      // @type {Events} - events
	      var events = this.events;
	      // @type {Event}
	      events.original = event;
	      events.y = Scroll.y;
	      // event fire
	      this.dispatch(events);
	    }
	    // ----------------------------------------
	    // STATIC METHOD
	    // ----------------------------------------
	    /**
	     * Wheel instance を singleton を保証し作成します
	     * @return {Scroll} Scroll instance を返します
	     */

	  }, {
	    key: 'y',

	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * scroll top 位置
	     * @return {number} scroll top 位置を返します
	     */
	    get: function get() {
	      return Scroll.y;
	    }
	    /**
	     * scroll top 位置 を設定します
	     * @param {number} top スクロール位置(px)
	     */
	    ,
	    set: function set(top) {
	      Scroll.y = top;
	    }
	    /**
	     * bind 済み mouseWheel
	     * @return {function} bind 済み mouseWheel を返します
	     */

	  }, {
	    key: 'bindScroll',
	    get: function get() {
	      return this[bindSymbol];
	    }
	    /**
	     * Events instance を取得します
	     * @return {Events} Events instance
	     */

	  }, {
	    key: 'events',
	    get: function get() {
	      return this[eventsSymbol];
	    }
	  }], [{
	    key: 'factory',
	    value: function factory() {
	      return new Scroll(singletonSymbol);
	    }
	  }, {
	    key: 'SCROLL',
	    get: function get() {
	      return 'scrollScroll';
	    }
	    // ----------------------------------------
	    // STATIC GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * scroll top 位置
	     * @return {number} scroll top 位置を返します
	     */

	  }, {
	    key: 'y',
	    get: function get() {
	      // https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
	      // https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
	      return typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	    }
	    /**
	     * scroll top 位置 を設定します
	     * @param {number} top スクロール位置(px)
	     */
	    ,
	    set: function set(top) {
	      window.scrollTo(0, top);
	    }
	  }]);
	  return Scroll;
	}(_EventDispatcher2.EventDispatcher);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(67)
	  , $getPrototypeOf = __webpack_require__(72);

	__webpack_require__(73)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(25)
	  , toObject    = __webpack_require__(67)
	  , IE_PROTO    = __webpack_require__(46)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(75);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(76);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	__webpack_require__(83);
	module.exports = __webpack_require__(32).f('iterator');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(79)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(80)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , defined   = __webpack_require__(41);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(34)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(26)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(25)
	  , Iterators      = __webpack_require__(81)
	  , $iterCreate    = __webpack_require__(82)
	  , setToStringTag = __webpack_require__(30)
	  , getPrototypeOf = __webpack_require__(72)
	  , ITERATOR       = __webpack_require__(31)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(52)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(30)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(31)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	var global        = __webpack_require__(8)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(81)
	  , TO_STRING_TAG = __webpack_require__(31)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(85)
	  , step             = __webpack_require__(86)
	  , Iterators        = __webpack_require__(81)
	  , toIObject        = __webpack_require__(38);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(80)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(88);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(92);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(75);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(91).set});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(10)(Function.call, __webpack_require__(57).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	var $Object = __webpack_require__(9).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(52)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Wheel = undefined;

	var _assign = __webpack_require__(63);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _EventDispatcher2 = __webpack_require__(1);

	var _Events = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * new を許可しないための Symbol
	 * @type {Symbol}
	 * @private
	 */
	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/26 - 19:12
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	// event
	var singletonSymbol = (0, _symbol2.default)();
	/**
	 * singleton instance, nullable
	 * @type {?Wheel}
	 * @private
	 */
	var instance = null;
	/**
	 * private property key, bind 済み mouseWheel を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var wheelSymbol = (0, _symbol2.default)();
	// /**
	//  * private property key, bind 済み mouseScroll を保存するための Symbol
	//  * @type {Symbol}
	//  * @private
	//  */
	// const scrollSymbol = Symbol();

	/**
	 * mousewheel event を監視し通知を行います
	 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
	 *
	 * ```
	 * const instance:Wheel = Wheel.factory();
	 * ```
	 */

	var Wheel = exports.Wheel = function (_EventDispatcher) {
	  (0, _inherits3.default)(Wheel, _EventDispatcher);

	  /**
	   * singleton です
	   * @param {Symbol} checkSymbol singleton を保証するための private instance
	   * @returns {Wheel} singleton instance を返します
	   */

	  function Wheel(checkSymbol) {
	    var _ret2;

	    (0, _classCallCheck3.default)(this, Wheel);

	    // checkSymbol と singleton が等価かをチェックします
	    if (checkSymbol !== singletonSymbol) {
	      throw new Error('don\'t use new, instead use static factory method.');
	    }

	    // instance 作成済みかをチェックし instance が null の時 this を設定します

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Wheel).call(this));

	    if (instance !== null) {
	      var _ret;

	      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    // onetime setting
	    instance = _this;

	    // event handler
	    _this[wheelSymbol] = _this.mouseWheel.bind(_this);
	    // this[scrollSymbol] = this.mouseScroll.bind(this);

	    // public property
	    /**
	     * 閾値, wheel 移動量が閾値を超えたときにイベントを発生させます
	     * @type {number}
	     * @default 200
	     */
	    var threshold = 200;
	    /**
	     * wheelDelta 移動量が閾値を超えるかをチェックするための計算変数
	     * @type {number}
	     * @default 0
	     */
	    var moved = 0;
	    // /**
	    //  * firefox wheel event.detail 数値を他と揃えるための係数
	    //  * @type {number}
	    //  * @default -7.5
	    //  */
	    // const coefficient = -7.5;
	    /**
	     * @type {Wheel}
	     * @property {number} this.threshold 閾値, wheel 移動量が閾値を超えたときにイベントを発生させます
	     * @property {number} this.moved wheelDelta 移動量が閾値を超えるかをチェックするための計算変数
	     */
	    (0, _assign2.default)(_this, { threshold: threshold, moved: moved });

	    // 設定済み instance を返します
	    return _ret2 = instance, (0, _possibleConstructorReturn3.default)(_this, _ret2);
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * wheel up で発生するイベントを取得します
	   * @event UP
	   * @return {string} event, wheelUp を返します
	   * @default wheelUp
	   */


	  (0, _createClass3.default)(Wheel, [{
	    key: 'watch',

	    // /**
	    //  * bind 済み mouseScroll
	    //  * @returns {function} bind 済み mouseScroll を返します
	    //  */
	    // get boundScroll() {
	    //   return this[scrollSymbol];
	    // }
	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * mousewheel event を監視します<br>
	     * 監視前に二重に addEventListener しないように unwatch を実行します
	     * @returns {Wheel} method chain 可能なように instance を返します
	     */
	    value: function watch() {
	      this.unwatch();
	      // // firefox
	      // window.addEventListener('DOMMouseScroll', this.boundScroll, false);
	      // // other modern browser
	      // window.addEventListener('mousewheel', this.boundWheel, false);

	      window.addEventListener('wheel', this.boundWheel, false);

	      return this;
	    }
	    /**
	     * mousewheel event を監視を止めます
	     * @returns {Wheel} method chain 可能なように instance を返します
	     */

	  }, {
	    key: 'unwatch',
	    value: function unwatch() {
	      // window.removeEventListener('DOMMouseScroll', this.boundScroll);
	      // window.removeEventListener('mousewheel', this.boundWheel);

	      window.removeEventListener('wheel', this.boundWheel);

	      return this;
	    }
	    /**
	     * window mousewheel event handler
	     * <p>delta 値を取得し `this.moving` を実行します</p>
	     *
	     * @listens {WheelEvent} WheelEvent.wheel
	     * @param {WheelEvent} event window wheel event
	     * @returns {number} 前回移動量に delta 値 を加算した値を返します
	     */

	  }, {
	    key: 'mouseWheel',
	    value: function mouseWheel(event) {
	      // const wheelDelta = event.wheelDelta;
	      var wheelDelta = event.deltaY;
	      return this.moving(wheelDelta);
	    }
	    // /**
	    //  * window DOMMouseScroll event handler
	    //  * <p>detail 値を取得し `this.moving` を実行します</p>
	    //  * @param {Event} event window DOMMouseScroll event
	    //  * @returns {number} 前回移動量に delta 値 を加算した値を返します
	    //  */
	    // mouseScroll(event) {
	    //   let wheelDetail = event.detail;
	    //   // firefox 数値が小さいために補正する
	    //   // up / down が wheelDelta と逆なので補正する
	    //   // -7.5(default) をかける
	    //   wheelDetail *= this.coefficient;
	    //   return this.moving(wheelDetail);
	    // }
	    /**
	     * mouse delta から移動量を計算します
	     * @param {number} delta mouse delta 値
	     * @returns {number} 前回移動量に delta 値 を加算した値を返します
	     */

	  }, {
	    key: 'moving',
	    value: function moving(delta) {
	      /**
	       * 移動量が閾値を超えるかをチェックするための計算変数
	       * @type {number}
	       */
	      this.moved += delta;
	      // @type {number}
	      var moved = this.moved;

	      // 0 check
	      if (moved === 0) {
	        // 移動量が 0 なので処理をしない
	        return moved;
	      }

	      // 閾値チェック
	      if (Math.abs(moved) >= this.threshold) {
	        if (moved > 0) {
	          // scroll up
	          this.up(moved);
	        } else {
	          this.down(moved);
	        }
	      } else {
	        // 閾値を超えていないので処理をしない
	        return moved;
	      }

	      // initialize moved
	      this.moved = 0;
	      return moved;
	    }
	    /**
	     * scroll up イベントを発火します
	     * @param {number} moved 移動量
	     * @returns {number} 加算移動量を返します
	     */

	  }, {
	    key: 'up',
	    value: function up(moved) {
	      // @type {Events}
	      var events = new _Events.Events(Wheel.UP, this, this);
	      events.moved = moved;
	      this.dispatch(events);

	      return moved;
	    }
	    /**
	     * scroll down イベントを発火します
	     * @param {number} moved 移動量
	     * @returns {number} 加算移動量を返します
	     */

	  }, {
	    key: 'down',
	    value: function down(moved) {
	      // @type {Events}
	      var events = new _Events.Events(Wheel.DOWN, this, this);
	      events.moved = moved;
	      this.dispatch(events);

	      return moved;
	    }
	    // ----------------------------------------
	    // STATIC METHOD
	    // ----------------------------------------
	    /**
	     * Wheel instance を singleton を保証し作成します
	     * @return {Wheel} Wheel instance を返します
	     */

	  }, {
	    key: 'boundWheel',

	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * bind 済み mouseWheel
	     * @returns {function} bind 済み mouseWheel を返します
	     */
	    get: function get() {
	      return this[wheelSymbol];
	    }
	  }], [{
	    key: 'factory',
	    value: function factory() {
	      return new Wheel(singletonSymbol);
	    }
	  }, {
	    key: 'UP',
	    get: function get() {
	      return 'wheelUp';
	    }
	    /**
	     * wheel  で発生するイベントを取得します
	     * @event DOWN
	     * @return {string} event, wheelUp を返します
	     * @default wheelUp
	     */

	  }, {
	    key: 'DOWN',
	    get: function get() {
	      return 'wheelDown';
	    }
	  }]);
	  return Wheel;
	}(_EventDispatcher2.EventDispatcher);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Ajax = undefined;

	var _create = __webpack_require__(92);

	var _create2 = _interopRequireDefault(_create);

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _EventDispatcher2 = __webpack_require__(1);

	var _Events = __webpack_require__(62);

	var _Type = __webpack_require__(61);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// built-in function
	// Safari, IE はサポートしていないのでライブラリを使用すること
	var fetch = self.fetch;

	// util
	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/01 - 19:41
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	// event

	var Request = self.Request;
	// const Headers = self.Headers;

	/**
	 * can（Ajax 実行可能かの真偽値）フラッグを保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var canSymbol = (0, _symbol2.default)();

	/**
	 * <p>fetch API を使用し Ajax request を行います</p>
	 * <p>Safari, IE はサポートしていないので polyfill ライブラリを使用します<br>
	 * また、 fetch は Promise も必要としています。</p>
	 *
	 * ```
	 * $ bower install fetch
	 *
	 * $ bower install es6-promise
	 * ```
	 *
	 * @see http://caniuse.com/#feat=fetch
	 * @see https://github.com/github/fetch
	 * @see https://github.com/github/fetch
	 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
	 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
	 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
	 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
	 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
	 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
	 */

	var Ajax = exports.Ajax = function (_EventDispatcher) {
	  (0, _inherits3.default)(Ajax, _EventDispatcher);

	  /**
	   * request 可能 / 不可能 flag を true に設定します
	   */

	  function Ajax() {
	    (0, _classCallCheck3.default)(this, Ajax);

	    /**
	     * request 可能 / 不可能 flag
	     * @type {boolean}
	     * @private
	     * @default true
	     */

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Ajax).call(this));

	    _this[canSymbol] = true;
	    return _this;
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * START event を取得します
	   * @event START
	   * @returns {string} リクエスト開始イベント, ajaxStart を返します
	   * @default ajaxStart
	   */


	  (0, _createClass3.default)(Ajax, [{
	    key: 'start',

	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * <p>Ajax request 開始します</p>
	     * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
	     * true の時は false にしリクエストを開始します</p>
	     * <p>START, COMPLETE, ERROR イベントを発生させます</p>
	     *
	     * @param {string} path Ajax request path
	     * @param {string} method GET, POST, PUT, DELETE...etc request method
	     * @param {?Headers|?Object|null} [headers=null] Headers option, nullable
	     * @param {?FormData|null} [formData=null] 送信フォームデータオプション, nullable
	     * @return {boolean} ajax request を開始したかどうかの真偽値を返します
	     */
	    value: function start(path, method) {
	      var _this2 = this;

	      var headers = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	      var formData = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	      // ajax request 開始
	      if (!this.can) {
	        // flag が off なので処理しない
	        return false;
	      }

	      // flag off
	      this.disable();

	      // @type {Request} Request instance
	      var request = Ajax.option(path, method, headers, formData);

	      // start event fire
	      var startEvents = new _Events.Events(Ajax.START, this, this);
	      startEvents.request = request;
	      this.dispatch(startEvents);

	      // fetch start
	      fetch(request)
	      // @param {Object} response - Ajax response
	      .then(function (response) {
	        // may be success
	        if (response.status !== 200) {
	          throw new Error('Ajax status error: (' + response.status + ')');
	        }

	        return response.json();
	      })
	      // @param {Object} - JSON パース済み Object
	      .then(function (json) {
	        // @type {Evens} - Ajax.COMPLETE events Object
	        var events = new _Events.Events(Ajax.COMPLETE, _this2, _this2);
	        events.data = json;
	        // complete event fire
	        _this2.dispatch(events);
	        // flag true
	        _this2.enable();
	      })
	      // @param {Error} - Ajax something error
	      .catch(function (error) {
	        // @type {Evens} - Ajax.COMPLETE events Object
	        var events = new _Events.Events(Ajax.ERROR, _this2, _this2);
	        events.data = null;
	        events.error = error;
	        // error event fire
	        _this2.dispatch(events);
	        // flag true
	        _this2.enable();
	      });

	      return true;
	    }
	    /**
	     * 実行可否 flag を true にします
	     * @returns {boolean} 現在の this.can property を返します
	     */

	  }, {
	    key: 'enable',
	    value: function enable() {
	      this.can = true;
	      return this.can;
	    }
	    /**
	     * 実行可否 flag を false にします
	     * @returns {boolean} 現在の this.can property を返します
	     */

	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.can = false;
	      return this.can;
	    }
	    // ----------------------------------------
	    // STATIC METHOD
	    // ----------------------------------------
	    /**
	     * <p>fetch API へ送るオプションを作成します</p>
	     *
	     * @param {string} path Ajax request path
	     * @param {string} method GET, POST, PUT, DELETE...etc request method
	     * @param {Headers|Object|null} headers Headers option
	     * @param {FormData|null} formData 送信フォームデータオプション
	     * @return {Request} fetch API へ送る Request instance を返します
	     */

	  }, {
	    key: 'can',

	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * request 可能 / 不可能 flag を取得します
	     * @return {boolean} request 可能 / 不可能 flag を返します
	     */
	    get: function get() {
	      return this[canSymbol];
	    }
	    /**
	     * request 可能 / 不可能 flag を設定します
	     * @param {boolean} flag request 可能 / 不可能 flag
	     */
	    ,
	    set: function set(flag) {
	      this[canSymbol] = flag;
	    }
	  }], [{
	    key: 'option',
	    value: function option(path, method, headers, formData) {
	      // request option
	      var option = (0, _create2.default)({
	        method: method,
	        cache: 'no-cache',
	        // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
	        credentials: 'same-origin'
	      });

	      // headers option
	      if (_Type.Type.exist(headers)) {
	        option.headers = headers;
	      }

	      // body へ FormData をセット
	      if (_Type.Type.exist(formData)) {
	        option.body = formData;
	      }

	      // https://developer.mozilla.org/ja/docs/Web/API/Request
	      return new Request(path, option);
	    }
	  }, {
	    key: 'START',
	    get: function get() {
	      return 'ajaxStart';
	    }
	    /**
	     * COMPLETE event を取得します
	     * @event COMPLETE
	     * @returns {string} リクエスト完了イベント, ajaxComplete を返します
	     * @default ajaxComplete
	     */

	  }, {
	    key: 'COMPLETE',
	    get: function get() {
	      return 'ajaxComplete';
	    }
	    /**
	     * ERROR event を取得します
	     * @event ERROR
	     * @returns {string} リクエストエラー イベント, ajaxError を返します
	     * @default ajaxError
	     */

	  }, {
	    key: 'ERROR',
	    get: function get() {
	      return 'ajaxError';
	    }
	  }]);
	  return Ajax;
	}(_EventDispatcher2.EventDispatcher);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cycle = undefined;

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _EventDispatcher2 = __webpack_require__(1);

	var _Events = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * new を許可しないための Symbol
	 * @type {Symbol}
	 * @private
	 */
	/**
	 * @license inazumatv.com
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/03
	 *
	 * Copyright (c) 2011-2015 inazumatv.com, inc.
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 */

	// event
	var singletonSymbol = (0, _symbol2.default)();
	/**
	 * singleton instance, nullable
	 * @type {?Cycle}
	 * @private
	 */
	var instance = null;

	/**
	 * private property key, requestAnimationFrame ID を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var requestSymbol = (0, _symbol2.default)();
	/**
	 * private property key, this.update.bind(this) を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var updateSymbol = (0, _symbol2.default)();
	/**
	 * private property key, requestAnimationFrame を開始したかを表す真偽値を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var startSymbol = (0, _symbol2.default)();
	/**
	 * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var eventsSymbol = (0, _symbol2.default)();

	/**
	 * <p>requestAnimationFrame でループイベントを発生させます</p>
	 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
	 *
	 * ```
	 * const loop:Cycle = Cycle.factory();
	 * ```
	 *
	 * <p>requestAnimationFrame は tab が active(focus) な時のみ発生します</p>
	 */

	var Cycle = exports.Cycle = function (_EventDispatcher) {
	  (0, _inherits3.default)(Cycle, _EventDispatcher);

	  /**
	   * singleton です
	   * @param {Symbol} checkSymbol singleton を保証するための private instance
	   * @return {Cycle} singleton instance を返します
	   */

	  function Cycle(checkSymbol) {
	    var _ret2;

	    (0, _classCallCheck3.default)(this, Cycle);

	    // checkSymbol と singleton が等価かをチェックします
	    if (checkSymbol !== singletonSymbol) {
	      throw new Error('don\'t use new, instead use static factory method.');
	    }

	    // instance 作成済みかをチェックし instance が null の時 this を設定します

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Cycle).call(this));

	    if (instance !== null) {
	      var _ret;

	      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }
	    // onetime setting
	    instance = _this;
	    // @type {number} - requestAnimationFrame return id
	    _this[requestSymbol] = 0;
	    // @type {function} - update bind function
	    _this[updateSymbol] = _this.update.bind(_this);
	    // @type {boolean} - started flag
	    _this[startSymbol] = false;
	    // @type {Events} - Events
	    _this[eventsSymbol] = new _Events.Events(Cycle.UPDATE, _this, _this);
	    // 設定済み instance を返します
	    return _ret2 = instance, (0, _possibleConstructorReturn3.default)(_this, _ret2);
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * requestAnimationFrame 毎に発生するイベントを取得します
	   * @event UPDATE
	   * @return {string} event, cycleUpdate を返します
	   * @default cycleUpdate
	   */


	  (0, _createClass3.default)(Cycle, [{
	    key: 'start',

	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * loop(requestAnimationFrame) を開始します
	     * @return {boolean} start に成功すると true を返します
	     */
	    value: function start() {
	      if (this[startSymbol]) {
	        // already start
	        console.warn('Cycle.start already start', this[startSymbol]);
	        return false;
	      }
	      this[startSymbol] = true;
	      this.update();

	      // @return
	      return true;
	    }
	    /**
	     * loop(cancelAnimationFrame) を止めます
	     * @param {number} [id] requestAnimationFrame id を使い cancelAnimationFrame をします
	     * @return {boolean} stop に成功すると true を返します
	     */

	  }, {
	    key: 'stop',
	    value: function stop() {
	      var id = arguments.length <= 0 || arguments[0] === undefined ? this[requestSymbol] : arguments[0];

	      if (!this[startSymbol]) {
	        // not start
	        return false;
	      }

	      cancelAnimationFrame(id);
	      this[startSymbol] = false;

	      // @return
	      return true;
	    }
	    // ----------------------------------------
	    // PRIVATE METHOD
	    // ----------------------------------------
	    /**
	     * loop(requestAnimationFrame)コールバック関数<br>Cycle.UPDATE event を発火します
	     * @return {undefined} no-return
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      // @type {number} - requestAnimationFrame id
	      var id = requestAnimationFrame(this[updateSymbol]);
	      this[requestSymbol] = id;
	      // @type {Events} - events
	      var events = this.events;
	      events.id = id;
	      // event fire
	      this.dispatch(events);
	    }
	    // ----------------------------------------
	    // STATIC METHOD
	    // ----------------------------------------
	    /**
	     * Cycle instance を singleton を保証し作成します
	     * @return {Cycle} Cycle instance を返します
	     */

	  }], [{
	    key: 'factory',
	    value: function factory() {
	      return new Cycle(singletonSymbol);
	    }
	  }, {
	    key: 'UPDATE',
	    get: function get() {
	      return 'cycleUpdate';
	    }
	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * Events instance を取得します
	     * @return {Events} Events instance
	     */

	  }, {
	    key: 'events',
	    get: function get() {
	      return this[eventsSymbol];
	    }
	  }]);
	  return Cycle;
	}(_EventDispatcher2.EventDispatcher);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fps = undefined;

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _Events = __webpack_require__(62);

	var _Polling2 = __webpack_require__(99);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * private property key, fps を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/04 - 14:19
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	// event
	var fpsSymbol = (0, _symbol2.default)();

	/**
	 * フレームレート毎に UPDATE イベントを発生させます
	 */


	// tick

	var Fps = exports.Fps = function (_Polling) {
	  (0, _inherits3.default)(Fps, _Polling);

	  /**
	   * 引数の frame rate に合わせ UPDATE イベントを発生させます
	   * @param {number} [fps=30] frame rate, default: 30
	   */

	  function Fps() {
	    var fps = arguments.length <= 0 || arguments[0] === undefined ? 30 : arguments[0];
	    (0, _classCallCheck3.default)(this, Fps);

	    // private property
	    // @type {number} - frame rate, default: 30

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Fps).call(this, 1000 / fps));

	    _this[fpsSymbol] = fps;
	    // @type {Events} - Events
	    var events = new _Events.Events(Fps.UPDATE, _this, _this);
	    events.fps = fps;
	    /**
	     * Fps.UPDATE Events instance
	     * @type {Events}
	     */
	    _this.events = events;
	    return _this;
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * フレームレート毎に発生するイベントを取得します
	   * @event UPDATE
	   * @return {string} event, fpsUpdate を返します
	   * @default fpsUpdate
	   */


	  (0, _createClass3.default)(Fps, [{
	    key: 'fps',

	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    // fps
	    /**
	     * frame rate を取得します
	     * @return {number} frame rate を返します
	     */
	    get: function get() {
	      return this[fpsSymbol];
	    }
	    /**
	     * frame rate を設定します, 1 ~ 60 の間で設定します
	     * @param {number} rate frame rate
	     */
	    ,
	    set: function set(rate) {
	      var events = this.events;
	      events.fps = rate;
	      this[fpsSymbol] = rate;
	      /**
	       * interval milliseconds
	       * @type {number}
	       */
	      this.polling = 1000 / rate;
	    }
	  }], [{
	    key: 'UPDATE',
	    get: function get() {
	      return 'fpsUpdate';
	    }
	  }]);
	  return Fps;
	}(_Polling2.Polling);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Polling = undefined;

	var _assign = __webpack_require__(63);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _EventDispatcher2 = __webpack_require__(1);

	var _Events = __webpack_require__(62);

	var _Cycle = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * private property key, this.update.bind(this) を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var updateSymbol = (0, _symbol2.default)();
	/**
	 * private property key, Cycle.UPDATE 監視を開始したかを表す真偽値を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */


	// tick
	/**
	 * Copyright (c) 2011-2016 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/04 - 16:46
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */

	// event
	var startSymbol = (0, _symbol2.default)();
	/**
	 * private property key, Fps.start 時間を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var beginSymbol = (0, _symbol2.default)();
	/**
	 * private property key, polling を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var pollingSymbol = (0, _symbol2.default)();
	/**
	 * Polling.UPDATE event を発火する時の Events instance を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var eventsSymbol = (0, _symbol2.default)();

	/**
	 * 一定間隔毎に UPDATE イベントを発生させます
	 */

	var Polling = exports.Polling = function (_EventDispatcher) {
	  (0, _inherits3.default)(Polling, _EventDispatcher);

	  /**
	   * 引数の polling に合わせ UPDATE イベントを発生させます
	   * @param {number} [polling=1000] polling milliseconds
	   */

	  function Polling() {
	    var polling = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];
	    (0, _classCallCheck3.default)(this, Polling);

	    // @type {Cycle} - Cycle instance

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Polling).call(this));

	    var cycle = _Cycle.Cycle.factory();
	    // public property
	    /**
	     * @property {Cycle} this.cycle - Cycle instance
	     */
	    (0, _assign2.default)(_this, { cycle: cycle });

	    // private property
	    // @type {number} - polling rate(milliseconds), default: 1000(1 sec.)
	    _this[pollingSymbol] = polling;
	    // @type {function} - Cycle.UPDATE event handler
	    _this[updateSymbol] = _this.update.bind(_this);
	    // @type {boolean} - started flag
	    _this[startSymbol] = false;
	    // @type {number} - 開始時間
	    _this[beginSymbol] = 0;
	    // @type {Events} - Events
	    _this[eventsSymbol] = new _Events.Events(Polling.UPDATE, _this, _this);
	    return _this;
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * 一定間隔(milliseconds)毎に発生するイベント type を取得します
	   * @return {string} event, pollingUpdate を返します
	   */


	  (0, _createClass3.default)(Polling, [{
	    key: 'turnOver',

	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * started flag を反転させ現在の started flag 状態を取得します
	     * @return {boolean} 現在の started flag 状態を返します
	     */
	    value: function turnOver() {
	      this[startSymbol] = !this[startSymbol];
	      return this.started;
	    }
	    /**
	     * events object を発火前に作成します
	     * @param {number} begin 開始時間: 前回の発火時間
	     * @param {number} present 現在時間
	     * @return {Events} アップデートした Events を返します
	     */

	  }, {
	    key: 'updateEvents',
	    value: function updateEvents(begin, present) {
	      this.begin = begin;
	      // @type {Events} - start event
	      var events = this.events;
	      events.begin = begin;
	      events.present = present;
	      events.polling = this.polling;
	      return events;
	    }
	    /**
	     * cycle ループを開始します<br>
	     * watch Cycle.UPDATE event
	     * @return {Cycle} cycle ループを開始しインスタンスを返します
	     */

	  }, {
	    key: 'initCycle',
	    value: function initCycle() {
	      // cycle
	      var cycle = this.cycle;
	      // bind Cycle.UPDATE
	      cycle.on(_Cycle.Cycle.UPDATE, this[updateSymbol]);
	      // cycle 開始
	      cycle.start();
	      return cycle;
	    }
	    /**
	     * polling を開始します
	     * @return {boolean} start に成功すると true を返します
	     */

	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.started) {
	        // already start
	        return false;
	      }
	      // flag -> true
	      // this[startSymbol] = true;
	      this.turnOver();
	      // cycle
	      this.initCycle();
	      // @type {number} - 開始時間
	      var present = Date.now();
	      // 強制的に1回目を実行
	      this.fire(this.updateEvents(present, present));

	      return true;
	    }
	    /**
	     * polling を止めます
	     * @return {boolean} stop に成功すると true を返します
	     */

	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (!this.started) {
	        // not start
	        return false;
	      }
	      this.cycle.off(_Cycle.Cycle.UPDATE, this[updateSymbol]);
	      // this[startSymbol] = false;
	      this.turnOver();
	      return true;
	    }
	    /**
	     * Cycle.UPDATE event handler, polling を計測しイベントを発火するかを判断します
	     *
	     * @listens {Cycle.UPDATE} Cycle.UPDATE が発生すると実行されます
	     * @return {boolean} Polling.UPDATE event が発生すると true を返します
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      // 現在時間
	      // @type {number}
	      var present = Date.now();
	      // @type {number} - polling 間隔
	      var polling = this.polling;
	      // @type {number} - 開始時間
	      var begin = this.begin;
	      // 現在時間 が interval より大きくなったか
	      if (present - begin >= polling) {
	        // event 発火
	        this.fire(this.updateEvents(begin, present));
	        // 開始時間を update
	        this.begin = present;
	        // event 発生
	        return true;
	      }
	      return false;
	    }
	    /**
	     * Polling.UPDATE event を発生します
	     * @param {Events} events Polling.UPDATE event object
	     * @return {undefined} no-return
	     */

	  }, {
	    key: 'fire',
	    value: function fire(events) {
	      this.dispatch(events);
	    }
	  }, {
	    key: 'polling',

	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    // fps
	    /**
	     * polling(milliseconds) を取得します
	     * @return {number} polling(milliseconds) を返します
	     */
	    get: function get() {
	      return this[pollingSymbol];
	    }
	    /**
	     * polling(milliseconds) を設定します
	     * @param {number} rate polling(milliseconds)
	     */
	    ,
	    set: function set(rate) {
	      this[pollingSymbol] = rate;
	    }
	    // begin
	    /**
	     * 開始時間を取得します
	     * @return {number} 開始時間を返します
	     */

	  }, {
	    key: 'begin',
	    get: function get() {
	      return this[beginSymbol];
	    }
	    /**
	     * 開始時間を設定します
	     * @param {number} time 開始時間
	     */
	    ,
	    set: function set(time) {
	      this[beginSymbol] = time;
	    }
	    // events
	    /**
	     * Events instance を取得します
	     * @return {Events} Events instance を返します
	     */

	  }, {
	    key: 'events',
	    get: function get() {
	      return this[eventsSymbol];
	    }
	    /**
	     * Events instance を設定します
	     * @param {Events} events Events instance
	     */
	    ,
	    set: function set(events) {
	      this[eventsSymbol] = events;
	    }
	    // flag
	    /**
	     * started flag 状態を取得します
	     * @readonly
	     * @return {boolean} 現在の started flag 状態を返します
	     */

	  }, {
	    key: 'started',
	    get: function get() {
	      return this[startSymbol];
	    }
	  }], [{
	    key: 'UPDATE',
	    get: function get() {
	      return 'pollingUpdate';
	    }
	  }]);
	  return Polling;
	}(_EventDispatcher2.EventDispatcher);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rate = undefined;

	var _getPrototypeOf = __webpack_require__(69);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _symbol = __webpack_require__(22);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _Events = __webpack_require__(62);

	var _Polling2 = __webpack_require__(99);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * private property key, fps を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	/**
	 * @license inazumatv.com
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/07/16
	 *
	 * Copyright (c) 2011-2015 inazumatv.com, inc.
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 */

	// event
	var rateSymbol = (0, _symbol2.default)();

	/**
	 * private property key, count を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */


	// tick
	var countSymbol = (0, _symbol2.default)();
	/**
	 * private property key, rates を保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */
	var ratesSymbol = (0, _symbol2.default)();
	/**
	 * 固定値を使用し fps を決定します
	 *
	 * 以下のフレームレートが設定可能です
	 *
	 * - 30: RATE_30
	 * - 20: RATE_20
	 * - 15: RATE_15
	 * - 12: RATE_12
	 * - 10: RATE_10
	 * - 6: RATE_6
	 * - 5: RATE_5
	 *
	 */

	var Rate = exports.Rate = function (_Polling) {
	  (0, _inherits3.default)(Rate, _Polling);

	  /**
	   * 固定値フレームレート毎に UPDATE イベントを発生させます
	   * @param {number} rate fps, 固定値以外設定できません
	   */

	  function Rate(rate) {
	    (0, _classCallCheck3.default)(this, Rate);

	    // @type {Events - Events

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Rate).call(this, 1));

	    var events = new _Events.Events(Rate.UPDATE, _this, _this);
	    events.rate = rate;
	    /**
	     * Rate.UPDATE Events instance
	     * @type {Events}
	     */
	    _this.events = events;

	    // frame rate
	    _this.change(rate);

	    // @type {number} - count, rate に達したかを計測するための counter 変数
	    _this[countSymbol] = 0;

	    // correct rate list
	    // サポートするレートリスト
	    _this[ratesSymbol] = [_this.RATE_30, _this.RATE_20, _this.RATE_15, _this.RATE_12, _this.RATE_10, _this.RATE_6, _this.RATE_5];
	    return _this;
	  }
	  // ----------------------------------------
	  // CONST
	  // ----------------------------------------
	  /**
	   * fps 30 基準値を取得します
	   * @const RATE_30
	   * @returns {number} fps 30 基準値を返します
	   * @default 2
	   */


	  (0, _createClass3.default)(Rate, [{
	    key: 'change',

	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * fps 基準値を設定します
	     * @throws {Error} 引数 rate が設定可能値以外の時に例外エラーが発生します
	     * @param {number} rate fps 基準値, <br>
	     * this.RATE_30, this.RATE_20, this.RATE_15, this.RATE_12, this.RATE_10, <br>
	     * this.RATE_6, this.RATE_5 の何れかが必須です
	     * @return {undefined} no-return
	     */
	    value: function change(rate) {
	      if (this[ratesSymbol].indexof(rate) !== -1) {
	        this[rateSymbol] = rate;
	      } else {
	        throw new Error('illegal rate: ' + rate + '. use const RATE_NN');
	      }
	    }
	    /**
	     * loop(requestAnimationFrame) を開始します
	     * @return {boolean} start に成功すると true を返します
	     */

	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.started) {
	        // already start
	        return false;
	      }
	      // flag -> true
	      this.turnOver();
	      // cycle
	      this.initCycle();
	      // 強制的に1回目を実行
	      this.fire(this.updateEvents(0, 0));

	      return true;
	    }
	    /**
	     * loop(requestAnimationFrame) します
	     * @returns {boolean} Rate.UPDATE event が発生すると true を返します
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      // 余りが 0 の時にイベントを発火します
	      if (++this[countSymbol] % this.rate === 0) {
	        this[countSymbol] = 0;
	        this.fire(this.updateEvents(0, 0));

	        return true;
	      }

	      return false;
	    }
	  }, {
	    key: 'rate',

	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * fps 基準値を取得します
	     * @returns {number} fps 基準値を返します
	     */
	    get: function get() {
	      return this[rateSymbol];
	    }
	  }], [{
	    key: 'RATE_30',
	    get: function get() {
	      return 2;
	    }
	    /**
	     * fps 20 基準値を取得します
	     * @const RATE_20
	     * @returns {number} fps 20 基準値を返します
	     * @default 3
	     */

	  }, {
	    key: 'RATE_20',
	    get: function get() {
	      return 3;
	    }
	    /**
	     * fps 15 基準値を取得します
	     * @const RATE_15
	     * @returns {number} fps 15 基準値を返します
	     * @default 4
	     */

	  }, {
	    key: 'RATE_15',
	    get: function get() {
	      return 4;
	    }
	    /**
	     * fps 12 基準値を取得します
	     * @const RATE_12
	     * @returns {number} fps 12 基準値を返します
	     * @default 5
	     */

	  }, {
	    key: 'RATE_12',
	    get: function get() {
	      return 5;
	    }
	    /**
	     * fps 10 基準値を取得します
	     * @const RATE_10
	     * @returns {number} fps 10 基準値を返します
	     * @default 6
	     */

	  }, {
	    key: 'RATE_10',
	    get: function get() {
	      return 6;
	    }
	    /**
	     * fps 6 基準値を取得します
	     * @const RATE_6
	     * @returns {number} fps 6 基準値を返します
	     * @default 10
	     */

	  }, {
	    key: 'RATE_6',
	    get: function get() {
	      return 10;
	    }
	    /**
	     * fps 5 基準値を取得します
	     * @const RATE_5
	     * @returns {number} fps 6 基準値を返します
	     * @default 12
	     */

	  }, {
	    key: 'RATE_5',
	    get: function get() {
	      return 12;
	    }
	    // ----------------------------------------
	    // EVENT
	    // ----------------------------------------
	    /**
	     * フレームレート毎に発生するイベント type を取得します
	     * @event UPDATE
	     * @return {string} event, rateUpdate を返します
	     * @default rateUpdate
	     */

	  }, {
	    key: 'UPDATE',
	    get: function get() {
	      return 'rateUpdate';
	    }
	  }]);
	  return Rate;
	}(_Polling2.Polling);

/***/ }
/******/ ]);