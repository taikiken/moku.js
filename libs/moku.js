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
	 * 2016-11-19 16:44:08
	 */
	// use strict は本来不要でエラーになる
	// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
	/* eslint strict: [0, "global"] */

	'use strict';

	// event
	var _EventDispatcher = __webpack_require__(1);var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);
	var _Scroll = __webpack_require__(48);var _Scroll2 = _interopRequireDefault(_Scroll);
	var _Wheel = __webpack_require__(98);var _Wheel2 = _interopRequireDefault(_Wheel);


	var _Ajax = __webpack_require__(99);var _Ajax2 = _interopRequireDefault(_Ajax);


	var _Cycle = __webpack_require__(100);var _Cycle2 = _interopRequireDefault(_Cycle);
	var _Fps = __webpack_require__(101);var _Fps2 = _interopRequireDefault(_Fps);
	var _Polling = __webpack_require__(102);var _Polling2 = _interopRequireDefault(_Polling);
	var _Rate = __webpack_require__(107);var _Rate2 = _interopRequireDefault(_Rate);


	var _Type = __webpack_require__(22);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	/**
	                                                                                                                                                                             * **MOKU**
	                                                                                                                                                                             * <p>global Object</p>
	                                                                                                                                                                             * <p>public な Class はここからアクセス可能です</p>
	                                                                                                                                                                             * @type {Object}
	                                                                                                                                                                             */ // net
	var MOKU = {};
	/**
	                * version number を取得します
	                * @returns {string} version number を返します
	                */ // util
	// tick
	MOKU.version = function () {return '0.0.1';}; /**
	                                                   * build 日時を取得します
	                                                   * @returns {string}  build 日時を返します
	                                                   */
	MOKU.build = function () {return '2016-11-19 16:44:08';};
	/**
	                                                   * MOKU.event
	                                                   * @type {Object} MOKU.event object を返します
	                                                   */
	MOKU.event = {
	  EventDispatcher: _EventDispatcher2.default,
	  Events: _Events2.default,
	  Scroll: _Scroll2.default,
	  Wheel: _Wheel2.default };

	/**
	                             * MOKU.net
	                             * @type {Object} MOKU.net object を返します
	                             */
	MOKU.net = {
	  Ajax: _Ajax2.default };

	/**
	                           * MOKU.tick
	                           * @type {Object} MOKU.tick object を返します
	                           */
	MOKU.tick = {
	  Cycle: _Cycle2.default,
	  Fps: _Fps2.default,
	  Polling: _Polling2.default,
	  Rate: _Rate2.default };

	/**
	                           * MOKU.util
	                           * @type {Object} MOKU.util object を返します
	                           */
	MOKU.util = {
	  Type: _Type2.default };


	// export
	window.MOKU = MOKU;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);












	var _Type = __webpack_require__(22);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	// /**
	//  * private property key, listeners Object
	//  * @type {Symbol}
	//  * @private
	//  */
	// const listenersKey = Symbol('event listeners object');

	/**
	 * <p>Custom Event を作成し Event 通知を行います</p>
	 *
	 * ```
	 * const callback = (event) => {
	 *  console.log(event);
	 * };
	 *
	 * const event = new EventDispatcher();
	 * event.on('abc', callback);
	 *
	 * console.log(event.has('abc', callback));// true
	 *
	 * event.dispatch(new Events('abc'));
	 *
	 * event.off('abc', callback);
	 * console.log(event.has('abc', callback));// false
	 * ```
	 *
	 * {@link Events}
	 */var
	EventDispatcher = function () {
	  /**
	                                * listener property をイニシャライズします
	                                */
	  function EventDispatcher() {(0, _classCallCheck3.default)(this, EventDispatcher);
	    // /**
	    //  * リスナーリスト
	    //  * @type {Object}
	    //  * @private
	    //  */
	    // this[listenersKey] = {};
	    var listeners = {};
	    /**
	                         * リスナーリストを取得します
	                         * @returns {Object} リスナーリストを返します
	                         */
	    this.listeners = function () {return listeners;};
	    /**
	                                                       * 全てのリスナーを破棄します
	                                                       * @returns {boolean} 成功・不成功の真偽値を返します
	                                                       */
	    this.destroy = function () {
	      listeners = {};
	      return true;
	    };
	  }
	  // // ----------------------------------------
	  // // GETTER / SETTER
	  // // ----------------------------------------
	  // /**
	  //  * リスナーリストを取得します
	  //  * @returns {Object} リスナーリストを返します
	  //  */
	  // get listeners() {
	  //   return this[listenersKey];
	  // }
	  // ----------------------------------------
	  // METHOD
	  // ----------------------------------------
	  // /**
	  //  * 全てのリスナーを破棄します
	  //  * @returns {boolean} 成功・不成功の真偽値を返します
	  //  */
	  // destroy() {
	  //   // this[listenersKey] = {};
	  //   let listeners = this.listeners();
	  //   listeners = {};
	  //   return true;
	  // }
	  /**
	   * event type に リスナー関数を bind します
	   * @param {string} type event type（種類）
	   * @param {Function} listener callback関数
	   * @returns {boolean} 成功・不成功の真偽値を返します
	   */(0, _createClass3.default)(EventDispatcher, [{ key: 'on', value: function on(
	    type, listener) {
	      if (!_Type2.default.exist(type)) {
	        // type が有効値ではないので処理しない
	        return false;
	      }
	      if (!_Type2.default.method(listener)) {
	        // listener が 関数でないので処理しない
	        return false;
	      }

	      // type {Object} - {{eventType: array [listener: Function...]...}}
	      var listeners = this.listeners();

	      if (!_Type2.default.hasKey(listeners, type)) {
	        // listeners.type が存在しない場合は
	        // listeners.type をキーに新規配列を作成し
	        // listener {function} を配列へ追加（登録）します
	        listeners[type] = [];
	        // listeners[type].push(listener);
	      }
	      // else {
	      //   // すでに listeners.type が存在する
	      //   listeners[type].push(listener);
	      // }
	      listeners[type].push(listener);

	      return true;
	    }
	    /**
	       * <p>event type からリスナー関数を remove します<br>
	       * 内部処理は一時的に null 設定にします</p>
	       * @param {string} type event type（種類）
	       * @param {Function} listener リスナー関数
	       * @returns {boolean} 成功・不成功の真偽値を返します
	       */ }, { key: 'off', value: function off(
	    type, listener) {
	      if (!_Type2.default.method(listener)) {
	        // listener が 関数でないので処理しない
	        return false;
	      }

	      // @type {Object} - events.type:String: [listener:Function...]
	      var listeners = this.listeners();
	      if (!_Type2.default.hasKey(listeners, type)) {
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
	       * @returns {boolean} 成功・不成功の真偽値を返します, true: 空にした
	       */ }, { key: 'clean', value: function clean(
	    type, types) {
	      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	      // Array.some は 戻り値が true の時に走査を止めます
	      // types 配列に null 以外があるかを調べます
	      // @type {boolean} - listener list に 関数(typeof 'function')が存在すると true になります
	      var hasFunction = types.some(function (listener) {return _Type2.default.method(listener);});

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
	       * @returns {boolean} event type にリスナー関数が登録されているかの真偽値を返します
	       */ }, { key: 'has', value: function has(
	    type, listener) {
	      if (!_Type2.default.method(listener)) {
	        // listener が 関数でないので処理しない
	        return false;
	      }

	      // @type {Object} - events.type:String: [listener:Function...]
	      var listeners = this.listeners();

	      if (!_Type2.default.hasKey(listeners, type)) {
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
	       * @returns {boolean} 成功・不成功の真偽値を返します
	       */ }, { key: 'dispatch', value: function dispatch(
	    events) {var _this = this;
	      // @type {Object} - events.type:string: [listener:Function...]
	      var listeners = this.listeners();
	      // @type {string} - event type
	      var type = events.type;

	      if (!_Type2.default.hasKey(listeners, type)) {
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
	      listeners[type].
	      map(
	      // @param listener {Function}
	      function (listener) {
	        // null が混じっているのでタイプチェックを行い listener 関数を実行します
	        if (_Type2.default.method(listener)) {
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
	       * @returns {boolean} 成功・不成功の真偽値を返します
	       */ }, { key: 'addEventListener', value: function addEventListener(
	    type, listener) {
	      return this.on(type, listener);
	    }
	    /**
	       * **alias off**
	       * <p>event type からリスナー関数を remove します</p>
	       * @deprecated instead use off
	       * @param {string} type event type（種類）
	       * @param {Function} listener リスナー関数
	       * @returns {boolean} 成功・不成功の真偽値を返します
	       */ }, { key: 'removeEventListener', value: function removeEventListener(
	    type, listener) {
	      return this.off(type, listener);
	    }
	    /**
	       * **alias has**
	       * <p>event type にリスナー関数が登録されているかを調べます</p>
	       * @deprecated instead use has
	       * @param {string} type event type（種類）
	       * @param {Function} listener リスナー関数
	       * @returns {boolean} event type にリスナー関数が登録されているかの真偽値を返します
	       */ }, { key: 'hasEventListener', value: function hasEventListener(
	    type, listener) {
	      return this.has(type, listener);
	    }
	    /**
	       * **alias dispatch**
	       * <p>イベントを発生させリスナー関数を call します</p>
	       * @deprecated instead use dispatch
	       * @param {Events} events typeキー が必須です
	       * @returns {boolean} 成功・不成功の真偽値を返します
	       */ }, { key: 'dispatchEvent', value: function dispatchEvent(
	    events) {
	      return this.dispatch(events);
	    } }]);return EventDispatcher;}(); /**
	                                       * Copyright (c) 2011-2016 inazumatv.com, inc.
	                                       * @author (at)taikiken / http://inazumatv.com
	                                       * @date 2016/06/30 - 20:09
	                                       *
	                                       * Distributed under the terms of the MIT license.
	                                       * http://www.opensource.org/licenses/mit-license.html
	                                       *
	                                       * This notice shall be included in all copies or substantial portions of the Software.
	                                       *
	                                       */ // util
	exports.default = EventDispatcher;

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

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _keys = __webpack_require__(23);var _keys2 = _interopRequireDefault(_keys);var _isInteger = __webpack_require__(43);var _isInteger2 = _interopRequireDefault(_isInteger);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
	Type = function () {function Type() {(0, _classCallCheck3.default)(this, Type);}(0, _createClass3.default)(Type, null, [{ key: 'method',
	    /**
	                                                                                                                                          * 引数(target)が関数かを調べます
	                                                                                                                                          * @param {Function|*} target 調査対象
	                                                                                                                                          * @returns {boolean} 引数(target)が関数かを調べ結果を返します、true: 関数
	                                                                                                                                          */value: function method(
	    target) {
	      return typeof target === 'function';
	    }
	    /**
	       * 引数(target)を `!!` で調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} 引数(target)を `!!` で調べ結果を返します
	       */ }, { key: 'exist', value: function exist(
	    target) {
	      return !!target;
	    }
	    /**
	       * 引数(target)が number かを調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} 引数(target)が number かを調べ結果を返します、true: number
	       */ }, { key: 'number', value: function number(
	    target) {
	      // return typeof target === 'number';
	      // jQuery 2.x
	      return !Type.array(target) && target - parseFloat(target) + 1 >= 0;
	    }
	    /**
	       * 引数(target)が int かを調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} 引数(target)が int かを調べ結果を返します、true: int
	       */ }, { key: 'int', value: function int(
	    target) {
	      return (0, _isInteger2.default)(target);
	    }
	    /**
	       * 引数(target)が string かを調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} 引数(target)が string かを調べ結果を返します、true: string
	       */ }, { key: 'string', value: function string(
	    target) {
	      return typeof target === 'string';
	    }
	    /**
	       * 引数(target)を `Array.isArray` で配列かを調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} 引数(target)が 配列 かを調べ結果を返します、true: 配列
	       */ }, { key: 'array', value: function array(
	    target) {
	      return Array.isArray(target);
	    }
	    /**
	       * 引数(target)が null かを調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} 引数(target)が null かを調べ結果を返します、true: null
	       */ }, { key: 'nil', value: function nil(
	    target) {
	      return target === null;
	    }
	    /**
	       * Object型 引数 `object` は String型 引数 `key` を [key] として存在するかを調べます
	       * @param {Object} target 調査対象
	       * @param {string} key Object.key 名称
	       * @returns {boolean} 存在する時は true を返します
	       */ }, { key: 'hasKey', value: function hasKey(
	    target, key) {
	      return (0, _keys2.default)(target).indexOf(key) !== -1;
	    }
	    /**
	       * target が undefined かを調べます
	       * @param {*} target 調査対象
	       * @returns {boolean} true: undefined
	       * @since 2016-10-25
	       */ }, { key: 'undef', value: function undef(
	    target) {
	      return typeof target === 'undefined';
	    }
	    /**
	       * ファイル名から拡張子を取得します
	       * @param {string} fileName 取得したいファイル名称
	       * @returns {string} ファイル名の拡張子を返します
	       */ }, { key: 'getExtension', value: function getExtension(
	    fileName) {
	      // http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
	      var split = fileName.split('.');

	      if (split.length === 1 || split[0] === '' && split.length === 2) {
	        // console.warn(`not correct file name. ${fileName}`);
	        return '';
	      }

	      return split.pop().toLowerCase();
	    }
	    // ----------------------------------------------------------
	    // 画像パスが正規かチェックする
	    /**
	     * 使用可能なbase64 file かを調べます
	     * @param {string} fileName 調査対象ファイル名
	     * @returns {boolean} jpeg / png の時に true を返します
	     */ }, { key: 'base64', value: function base64(
	    fileName) {
	      if (!Type.exist(fileName)) {
	        return false;
	      }
	      return fileName.indexOf('data:image/jpeg;base64') !== -1 ||
	      fileName.indexOf('data:image/png;base64') !== -1 ||
	      fileName.indexOf('data:image/jpg;base64') !== -1 ||
	      fileName.indexOf('data:image/gif;base64') !== -1;
	    }
	    /**
	       * 拡張子から画像ファイルかを調べます
	       * @param {string} fileName 調査対象ファイル名
	       * @returns {Boolean} 'jpg', 'png', 'jpeg', 'gif' のいづれかに該当するかの真偽値を返します
	       */ }, { key: 'img', value: function img(
	    fileName) {
	      if (!Type.exist(fileName)) {
	        return false;
	      }
	      // base64
	      if (Type.base64(fileName)) {
	        return true;
	      }
	      // 拡張子チェック
	      return ['jpg', 'png', 'jpeg', 'gif'].indexOf(Type.getExtension(fileName)) !== -1;
	    } }]);return Type;}();exports.default = Type;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(9).Object.keys;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(26)
	  , $keys    = __webpack_require__(28);

	__webpack_require__(42)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(29)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(30)
	  , toIObject    = __webpack_require__(31)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');

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
/* 30 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32)
	  , defined = __webpack_require__(27);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31)
	  , toLength  = __webpack_require__(35)
	  , toIndex   = __webpack_require__(37);
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(39)('keys')
	  , uid    = __webpack_require__(40);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	module.exports = __webpack_require__(9).Number.isInteger;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(7);

	$export($export.S, 'Number', {isInteger: __webpack_require__(46)});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(15)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
	                                                                                                                                                                                                                                                                                                                     */var
	Events =
	/**
	          * custom Event Object
	          * @param {string} type イベント種類
	          * @param {*} [target=this] イベント発生インスタンス
	          * @param {*} [currentTarget=this] current イベント発生インスタンス
	          * */
	function Events(type) {var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;var currentTarget = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;(0, _classCallCheck3.default)(this, Events);
	  /**
	                                                                                                                                                                                                                                                        * イベント種類
	                                                                                                                                                                                                                                                        * @type {string}
	                                                                                                                                                                                                                                                        */
	  this.type = type;
	  /**
	                     * target instance
	                     * @type {*}
	                     */
	  this.target = target;
	  /**
	                         * currentTarget instance
	                         * @type {*}
	                         */
	  this.currentTarget = currentTarget;
	};exports.default = Events;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);












	var _EventDispatcher2 = __webpack_require__(1);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	/**
	                                                                                                                                                                                * new を許可しないための Symbol
	                                                                                                                                                                                * @type {Symbol}
	                                                                                                                                                                                * @private
	                                                                                                                                                                                */ /**
	                                                                                                                                                                                    * Copyright (c) 2011-2016 inazumatv.com, inc.
	                                                                                                                                                                                    * @author (at)taikiken / http://inazumatv.com
	                                                                                                                                                                                    * @date 2016/07/26 - 21:05
	                                                                                                                                                                                    *
	                                                                                                                                                                                    * Distributed under the terms of the MIT license.
	                                                                                                                                                                                    * http://www.opensource.org/licenses/mit-license.html
	                                                                                                                                                                                    *
	                                                                                                                                                                                    * This notice shall be included in all copies or substantial portions of the Software.
	                                                                                                                                                                                    *
	                                                                                                                                                                                    */ // event
	var singletonSymbol = (0, _symbol2.default)('Scroll singleton symbol'); /**
	                                                                         * singleton instance, nullable
	                                                                         * @type {?Scroll}
	                                                                         * @private
	                                                                         */var instance = null; /**
	                                                                                                 * private property key, bind 済み mouseWheel を保存するための Symbol
	                                                                                                 * @type {Symbol}
	                                                                                                 * @private
	                                                                                                 */var bindSymbol = (0, _symbol2.default)('bound mouseWheel symbol'); /**
	                                                                                                                                                                       * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
	                                                                                                                                                                       * @type {Symbol}
	                                                                                                                                                                       * @private
	                                                                                                                                                                       */var eventsSymbol = (0, _symbol2.default)('Cycle.UPDATE symbol'); /**
	                                                                                                                                                                                                                                           * scroll top 位置が変更になったかを確認するために前回値を保存するための Symbol
	                                                                                                                                                                                                                                           * @type {Symbol}
	                                                                                                                                                                                                                                           */var topSymbol = (0, _symbol2.default)('previous scroll top');
	/**
	                                                                                                                                                                                                                                                                                                            * scroll freeze timeout id
	                                                                                                                                                                                                                                                                                                            * @private
	                                                                                                                                                                                                                                                                                                            * @static
	                                                                                                                                                                                                                                                                                                            * @type {number}
	                                                                                                                                                                                                                                                                                                            */
	var timerId = 0;

	/**
	                  * scroll を止める時間
	                  * @private
	                  * @static
	                  * @type {number}
	                  * @default 200
	                  */
	var _freezeTime = 200;

	/**
	                        * window scroll event を監視し通知を行います
	                        * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
	                        *
	                        * ```
	                        * const instance = Scroll.factory();
	                        * ```
	                        */var
	Scroll = function (_EventDispatcher) {(0, _inherits3.default)(Scroll, _EventDispatcher);
	  /**
	                                                                                          * singleton です
	                                                                                          * @param {Symbol} checkSymbol singleton を保証するための private instance
	                                                                                          * @returns {Scroll} singleton instance を返します
	                                                                                          */
	  function Scroll(checkSymbol) {var _ret2;(0, _classCallCheck3.default)(this, Scroll);
	    // checkSymbol と singleton が等価かをチェックします
	    if (checkSymbol !== singletonSymbol) {
	      throw new Error('don\'t use new, instead use static factory method.');
	    }



	    // instance 作成済みかをチェックし instance が null の時 this を設定します
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Scroll.__proto__ || (0, _getPrototypeOf2.default)(Scroll)).call(this));if (instance !== null) {var _ret;
	      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    // onetime setting
	    instance = _this;

	    // event handler
	    // @type {function} - bound scroll function
	    _this[bindSymbol] = _this.scroll.bind(_this);
	    // @type {Events} - events instance
	    _this[eventsSymbol] = new _Events2.default(Scroll.SCROLL, _this, _this);
	    // @type {number} - scroll top 前回値を保存します
	    // @default -1
	    _this[topSymbol] = -1;

	    // 設定済み instance を返します
	    return _ret2 = instance, (0, _possibleConstructorReturn3.default)(_this, _ret2);
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * scroll で発生するイベントを取得します
	   * @event SCROLL
	   * @returns {string} event, scrollScroll を返します
	   * @default scrollScroll
	   */(0, _createClass3.default)(Scroll, [{ key: 'watch',




















































































	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * scroll event を監視します<br>
	     * 監視前に二重に addEventListener しないように unwatch を実行します
	     * @returns {Scroll} method chain 可能なように instance を返します
	     */value: function watch()
	    {
	      this.unwatch();

	      window.addEventListener('scroll', this.bindScroll, false);

	      return this;
	    }
	    /**
	       * scroll event を監視を止めます
	       * @returns {Scroll} method chain 可能なように instance を返します
	       */ }, { key: 'unwatch', value: function unwatch()
	    {
	      window.removeEventListener('scroll', this.bindScroll);

	      return this;
	    }
	    /**
	       * window scroll event handler<br>
	       * window scroll event 発生後に scroll top 位置をもたせた Scroll.SCROLL custom event を発火します
	       * @param {?Event} event window scroll event, nullable
	       * @returns {void}
	       */ }, { key: 'scroll', value: function scroll(
	    event) {
	      // @type {number} - scroll top
	      var y = Scroll.y;
	      // @type {number} - window height
	      var height = window.innerHeight;
	      // @type {number} - 前回の scroll top
	      var previous = this[topSymbol];

	      // @type {Events} - events
	      var events = this.events;
	      // @type {Event} - scroll event
	      events.original = event;
	      // @type {number} - scroll top
	      events.y = y;
	      // @type {number} - window height
	      events.height = height;
	      // @type {number} - window bottom(y + height)
	      events.bottom = y + height;
	      events.previous = previous;
	      // @type {boolean} - 前回の scroll top と比較し移動したかを真偽値で取得します, true: 移動した
	      events.changed = previous !== y;
	      // @type {number} - 移動量 +（正）: down, -（負）: up
	      events.moving = y - previous;
	      // event fire
	      this.dispatch(events);
	      this[topSymbol] = y;
	    }
	    // ----------------------------------------
	    // STATIC METHOD
	    // ----------------------------------------
	    /**
	     * y 位置に scroll top を即座に移動させます
	     * @param {number} [y=0] scroll top 目標値
	     * @param {number} [delay=0] time out 遅延 ms
	     * @returns {number} time out id
	     */ }, { key: 'bindScroll', // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------}
	    // scroll
	    /**
	     * bind 済み mouseWheel
	     * @returns {function} bind 済み mouseWheel を返します
	     */get: function get() {return this[bindSymbol];} // events
	    /**
	     * Events instance を取得します
	     * @returns {Events} Events instance
	     */ }, { key: 'events', get: function get() {return this[eventsSymbol];} /**
	                                                                              * Events instance を設定します
	                                                                              * @param {Events} events Events instance
	                                                                              */, set: function set(events) {this[eventsSymbol] = events;} }], [{ key: 'jump', value: function jump() {var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;return setTimeout(function () {window.scrollTo(0, y);}, delay);} // ----------------------------------------
	    /**
	     * scroll 動作を受付不能にします
	     * @returns {void}
	     */ }, { key: 'abort', value: function abort() {window.addEventListener('touchstart', Scroll.onScroll, false);window.addEventListener('touchmove', Scroll.onScroll, false);window.addEventListener('touchend', Scroll.onScroll, false);window.addEventListener('scroll', Scroll.onScroll, false);document.addEventListener('wheel', Scroll.onScroll, false);document.addEventListener('mousewheel', Scroll.onScroll, false);window.addEventListener('DOMMouseScroll', Scroll.onScroll, false);} /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * scroll 動作を回復します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @returns {void}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */ }, { key: 'activate', value: function activate()
	    {
	      window.removeEventListener('touchstart', Scroll.onScroll);
	      window.removeEventListener('touchmove', Scroll.onScroll);
	      window.removeEventListener('touchend', Scroll.onScroll);
	      window.removeEventListener('scroll', Scroll.onScroll);
	      document.removeEventListener('wheel', Scroll.onScroll);
	      document.removeEventListener('mousewheel', Scroll.onScroll);
	      window.removeEventListener('DOMMouseScroll', Scroll.onScroll);
	    }
	    /**
	       * window scroll event handler, バブリング・伝播全てキャンセルします
	       * @param {Event} event window scroll event
	       * @returns {boolean} event をキャンセルするために false を返します
	       */ }, { key: 'onScroll', value: function onScroll(
	    event) {
	      event.preventDefault();
	      event.stopPropagation();
	      return false;
	    }
	    /**
	       * scroll 操作を引数(delay)の間キャンセルします
	       * @param {number} [delay=100] 遅延時間(ms), pc: 100, mobile: 500
	       * @returns {number} time out id
	       */ }, { key: 'freeze', value: function freeze()
	    {var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Scroll.freezeTime();
	      clearTimeout(timerId);

	      Scroll.abort();
	      timerId = setTimeout(Scroll.activate, delay);
	      return timerId;
	    }
	    /**
	       * scroll 操作を不能にする時間間隔(ms)を取得します
	       * @returns {number} scroll 操作を不能にする時間間隔(ms)
	       */ }, { key: 'freezeTime', value: function freezeTime()
	    {
	      return _freezeTime;
	    }
	    /**
	       * scroll 操作を不能にする時間間隔(ms)を設定します
	       * @param {number} time scroll 操作を不能にする時間(ms)
	       * @returns {void}
	       */ }, { key: 'setFreezeTime', value: function setFreezeTime(
	    time) {
	      _freezeTime = time;
	    }
	    // ----------------------------------------
	    /**
	     * Scroll instance を singleton を保証し作成します
	     * @returns {Scroll} Scroll instance を返します
	     */ }, { key: 'factory', value: function factory()
	    {
	      return new Scroll(singletonSymbol);
	    } }, { key: 'SCROLL', get: function get() {return 'scrollScroll';} /**
	                                                                        * scroll motion start event
	                                                                        * @event START
	                                                                        * @returns {string} event, scrollStart を返します
	                                                                        * @default scrollStart
	                                                                        */ }, { key: 'START', get: function get() {return 'scrollStart';} /**
	                                                                                                                                           * scroll motion complete event
	                                                                                                                                           * @event COMPLETE
	                                                                                                                                           * @returns {string} event, scrollComplete を返します
	                                                                                                                                           * @default scrollComplete
	                                                                                                                                           */ }, { key: 'COMPLETE', get: function get() {return 'scrollComplete';} /**
	                                                                                                                                                                                                                    * [LINE UP] button 由来の Scroll Event, start
	                                                                                                                                                                                                                    * @event LINEUP_START
	                                                                                                                                                                                                                    * @returns {string} event, scrollLineupStart を返します
	                                                                                                                                                                                                                    */ }, { key: 'LINEUP_START', get: function get() {return 'scrollLineupStart';} /**
	                                                                                                                                                                                                                                                                                                    * [LINE UP] button 由来の Scroll Event, complete
	                                                                                                                                                                                                                                                                                                    * @event LINEUP_COMPLETE
	                                                                                                                                                                                                                                                                                                    * @returns {string} event, scrollLineupComplete を返します
	                                                                                                                                                                                                                                                                                                    */ }, { key: 'LINEUP_COMPLETE', get: function get() {return 'scrollLineupComplete';} // ----------------------------------------
	    // STATIC GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * scroll top 位置
	     * @returns {number} scroll top 位置を返します
	     * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
	     */ }, { key: 'y', get: function get() {return typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;} /**
	                                                                                                                                                                                                         * scroll top 位置 を設定します
	                                                                                                                                                                                                         * @param {number} top スクロール位置(px)
	                                                                                                                                                                                                         */, set: function set(top) {window.scrollTo(0, top);} }]);return Scroll;}(_EventDispatcher3.default);exports.default = Scroll;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(26)
	  , $getPrototypeOf = __webpack_require__(52);

	__webpack_require__(42)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(30)
	  , toObject    = __webpack_require__(26)
	  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(54);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(55);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(74);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	__webpack_require__(69);
	module.exports = __webpack_require__(73).f('iterator');

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(58)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(59)(String, 'String', function(iterated){
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(27);
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(60)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(61)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(30)
	  , Iterators      = __webpack_require__(62)
	  , $iterCreate    = __webpack_require__(63)
	  , setToStringTag = __webpack_require__(67)
	  , getPrototypeOf = __webpack_require__(52)
	  , ITERATOR       = __webpack_require__(68)('iterator')
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
/* 60 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(64)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(67)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(68)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(65)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(66).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(28);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(30)
	  , TAG = __webpack_require__(68)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(39)('wks')
	  , uid        = __webpack_require__(40)
	  , Symbol     = __webpack_require__(8).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	var global        = __webpack_require__(8)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(62)
	  , TO_STRING_TAG = __webpack_require__(68)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(71)
	  , step             = __webpack_require__(72)
	  , Iterators        = __webpack_require__(62)
	  , toIObject        = __webpack_require__(31);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(59)(Array, 'Array', function(iterated, kind){
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
/* 71 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(68);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(8)
	  , has            = __webpack_require__(30)
	  , DESCRIPTORS    = __webpack_require__(17)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(61)
	  , META           = __webpack_require__(77).KEY
	  , $fails         = __webpack_require__(18)
	  , shared         = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(67)
	  , uid            = __webpack_require__(40)
	  , wks            = __webpack_require__(68)
	  , wksExt         = __webpack_require__(73)
	  , wksDefine      = __webpack_require__(78)
	  , keyOf          = __webpack_require__(79)
	  , enumKeys       = __webpack_require__(80)
	  , isArray        = __webpack_require__(83)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(20)
	  , createDesc     = __webpack_require__(21)
	  , _create        = __webpack_require__(64)
	  , gOPNExt        = __webpack_require__(84)
	  , $GOPD          = __webpack_require__(86)
	  , $DP            = __webpack_require__(13)
	  , $keys          = __webpack_require__(28)
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
	  __webpack_require__(85).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(82).f  = $propertyIsEnumerable;
	  __webpack_require__(81).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(60)){
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(40)('meta')
	  , isObject = __webpack_require__(15)
	  , has      = __webpack_require__(30)
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(8)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(60)
	  , wksExt         = __webpack_require__(73)
	  , defineProperty = __webpack_require__(13).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(28)
	  , toIObject = __webpack_require__(31);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(28)
	  , gOPS    = __webpack_require__(81)
	  , pIE     = __webpack_require__(82);
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
/* 81 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 82 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(33);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(31)
	  , gOPN      = __webpack_require__(85).f
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(29)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(82)
	  , createDesc     = __webpack_require__(21)
	  , toIObject      = __webpack_require__(31)
	  , toPrimitive    = __webpack_require__(20)
	  , has            = __webpack_require__(30)
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
/* 87 */
/***/ function(module, exports) {

	

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)('asyncIterator');

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)('observable');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(91);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(95);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(54);

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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(94).set});

/***/ },
/* 94 */
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
	        set = __webpack_require__(10)(Function.call, __webpack_require__(86).f(Object.prototype, '__proto__').set, 2);
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97);
	var $Object = __webpack_require__(9).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(64)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);












	var _EventDispatcher2 = __webpack_require__(1);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	/**
	                                                                                                                                                                                * new を許可しないための Symbol
	                                                                                                                                                                                * @type {Symbol}
	                                                                                                                                                                                * @private
	                                                                                                                                                                                */ /**
	                                                                                                                                                                                    * Copyright (c) 2011-2016 inazumatv.com, inc.
	                                                                                                                                                                                    * @author (at)taikiken / http://inazumatv.com
	                                                                                                                                                                                    * @date 2016/07/26 - 19:12
	                                                                                                                                                                                    *
	                                                                                                                                                                                    * Distributed under the terms of the MIT license.
	                                                                                                                                                                                    * http://www.opensource.org/licenses/mit-license.html
	                                                                                                                                                                                    *
	                                                                                                                                                                                    * This notice shall be included in all copies or substantial portions of the Software.
	                                                                                                                                                                                    *
	                                                                                                                                                                                    */ // event
	var singletonSymbol = (0, _symbol2.default)('Scroll singleton symbol'); /**
	                                                                         * singleton instance, nullable
	                                                                         * @type {?Wheel}
	                                                                         * @private
	                                                                         */var instance = null; /**
	                                                                                                 * private property key, bind 済み mouseWheel を保存するための Symbol
	                                                                                                 * @type {Symbol}
	                                                                                                 * @private
	                                                                                                 */var wheelSymbol = (0, _symbol2.default)('bound mouseWheel Symbol'); /**
	                                                                                                                                                                        * mousewheel event を監視し通知を行います
	                                                                                                                                                                        * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
	                                                                                                                                                                        *
	                                                                                                                                                                        * ```
	                                                                                                                                                                        * const instance:Wheel = Wheel.factory();
	                                                                                                                                                                        * ```
	                                                                                                                                                                        */var Wheel = function (_EventDispatcher) {(0, _inherits3.default)(Wheel, _EventDispatcher); /**
	                                                                                                                                                                                                                                                                      * singleton です
	                                                                                                                                                                                                                                                                      * @param {Symbol} checkSymbol singleton を保証するための private instance
	                                                                                                                                                                                                                                                                      * @returns {Wheel} singleton instance を返します
	                                                                                                                                                                                                                                                                      */function Wheel(checkSymbol) {var _ret2;(0, _classCallCheck3.default)(this, Wheel); // checkSymbol と singleton が等価かをチェックします
	    if (checkSymbol !== singletonSymbol) {
	      throw new Error('don\'t use new, instead use static factory method.');
	    }



	    // instance 作成済みかをチェックし instance が null の時 this を設定します
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Wheel.__proto__ || (0, _getPrototypeOf2.default)(Wheel)).call(this));if (instance !== null) {var _ret;
	      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    // onetime setting
	    instance = _this;

	    // event handler
	    _this[wheelSymbol] = _this.mouseWheel.bind(_this);
	    /**
	                                                        * 閾値, wheel 移動量が閾値を超えたときにイベントを発生させます
	                                                        * @type {number}
	                                                        * @default 200
	                                                        */
	    _this.threshold = 200;
	    /**
	                            * wheelDelta 移動量が閾値を超えるかをチェックするための積算計算変数
	                            * @type {number}
	                            */
	    _this.moved = 0;
	    /**
	                      * firefox wheel event.detail 数値を他 Browser wheel 値と揃えるための係数
	                      * @type {number}
	                      */
	    _this.coefficient = -7.5;

	    // 設定済み instance を返します
	    return _ret2 = instance, (0, _possibleConstructorReturn3.default)(_this, _ret2);
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * wheel up で発生するイベントを取得します
	   * @event UP
	   * @returns {string} event, wheelUp を返します
	   * @default wheelUp
	   */(0, _createClass3.default)(Wheel, [{ key: 'watch',






















	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * mousewheel event を監視します<br>
	     * 監視前に二重に addEventListener しないように unwatch を実行します
	     * @returns {Wheel} method chain 可能なように instance を返します
	     */value: function watch()
	    {
	      this.unwatch();
	      window.addEventListener('wheel', this.boundWheel, false);
	      return this;
	    }
	    /**
	       * mousewheel event を監視を止めます
	       * @returns {Wheel} method chain 可能なように instance を返します
	       */ }, { key: 'unwatch', value: function unwatch()
	    {
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
	       */ }, { key: 'mouseWheel', value: function mouseWheel(
	    event) {
	      var wheelDelta = event.deltaY;
	      return this.moving(wheelDelta);
	    }
	    /**
	       * mouse delta から移動量を計算します
	       * @param {number} delta mouse delta 値
	       * @returns {number} 前回移動量に delta 値 を加算した値を返します
	       */ }, { key: 'moving', value: function moving(
	    delta) {
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
	       */ }, { key: 'up', value: function up(
	    moved) {
	      // @type {Events}
	      var events = new _Events2.default(Wheel.UP, this, this);
	      events.moved = moved;
	      this.dispatch(events);

	      return moved;
	    }
	    /**
	       * scroll down イベントを発火します
	       * @param {number} moved 移動量
	       * @returns {number} 加算移動量を返します
	       */ }, { key: 'down', value: function down(
	    moved) {
	      // @type {Events}
	      var events = new _Events2.default(Wheel.DOWN, this, this);
	      events.moved = moved;
	      this.dispatch(events);

	      return moved;
	    }
	    // ----------------------------------------
	    // STATIC METHOD
	    // ----------------------------------------
	    /**
	     * Wheel instance を singleton を保証し作成します
	     * @returns {Wheel} Wheel instance を返します
	     */ }, { key: 'boundWheel', // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * bind 済み mouseWheel
	     * @returns {function} bind 済み mouseWheel を返します
	     */get: function get() {return this[wheelSymbol];} }], [{ key: 'factory', value: function factory() {return new Wheel(singletonSymbol);} }, { key: 'UP', get: function get() {return 'wheelUp';} /**
	                                                                                                                                                                                                      * wheel  で発生するイベントを取得します
	                                                                                                                                                                                                      * @event DOWN
	                                                                                                                                                                                                      * @returns {string} event, wheelUp を返します
	                                                                                                                                                                                                      * @default wheelUp
	                                                                                                                                                                                                      */ }, { key: 'DOWN', get: function get() {return 'wheelDown';} }]);return Wheel;}(_EventDispatcher3.default);exports.default = Wheel;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _create = __webpack_require__(95);var _create2 = _interopRequireDefault(_create);var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);












	var _EventDispatcher2 = __webpack_require__(1);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);


	var _Type = __webpack_require__(22);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	// built-in function
	// Safari, IE はサポートしていないのでライブラリを使用すること
	var fetch = self.fetch; // util
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
	 */ // event
	var Request = self.Request; // const Headers = self.Headers;
	/**
	 * can（Ajax 実行可能かの真偽値）フラッグを保存するための Symbol
	 * @type {Symbol}
	 * @private
	 */var canSymbol = (0, _symbol2.default)('flag can ajax SYmbol'); /**
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
	                                                                   */var Ajax = function (_EventDispatcher) {(0, _inherits3.default)(Ajax, _EventDispatcher); /**
	                                                                                                                                                               * request 可能 / 不可能 flag を true に設定します
	                                                                                                                                                               */function Ajax() {(0, _classCallCheck3.default)(this, Ajax); /**
	                                                                                                                                                                                                                              * request 可能 / 不可能 flag
	                                                                                                                                                                                                                              * @type {boolean}
	                                                                                                                                                                                                                              * @private
	                                                                                                                                                                                                                              * @default true
	                                                                                                                                                                                                                              */var _this = (0, _possibleConstructorReturn3.default)(this, (Ajax.__proto__ || (0, _getPrototypeOf2.default)(Ajax)).call(this));_this[canSymbol] = true;return _this;
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * START event を取得します
	   * @event START
	   * @returns {string} リクエスト開始イベント, ajaxStart を返します
	   * @default ajaxStart
	   */(0, _createClass3.default)(Ajax, [{ key: 'start',






































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
	     * @returns {boolean} ajax request を開始したかどうかの真偽値を返します
	     */value: function start(
	    path, method) {var _this2 = this;var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
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
	      var startEvents = new _Events2.default(Ajax.START, this, this);
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
	        var events = new _Events2.default(Ajax.COMPLETE, _this2, _this2);
	        events.data = json;
	        // complete event fire
	        _this2.dispatch(events);
	        // flag true
	        _this2.enable();
	      })
	      // @param {Error} - Ajax something error
	      .catch(function (error) {
	        // @type {Evens} - Ajax.COMPLETE events Object
	        var events = new _Events2.default(Ajax.ERROR, _this2, _this2);
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
	       */ }, { key: 'enable', value: function enable()
	    {
	      this.can = true;
	      return this.can;
	    }
	    /**
	       * 実行可否 flag を false にします
	       * @returns {boolean} 現在の this.can property を返します
	       */ }, { key: 'disable', value: function disable()
	    {
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
	     * @returns {Request} fetch API へ送る Request instance を返します
	     */ }, { key: 'can', // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * request 可能 / 不可能 flag を取得します
	     * @returns {boolean} request 可能 / 不可能 flag を返します
	     */get: function get() {return this[canSymbol];} /**
	                                                      * request 可能 / 不可能 flag を設定します
	                                                      * @param {boolean} flag request 可能 / 不可能 flag
	                                                      */, set: function set(flag) {this[canSymbol] = flag;} }], [{ key: 'option', value: function option(path, method, headers, formData) {// request option
	      var option = (0, _create2.default)({ method: method, cache: 'no-cache', // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
	        credentials: 'same-origin' }); // headers option
	      if (_Type2.default.exist(headers)) {option.headers = headers;
	      }

	      // body へ FormData をセット
	      if (_Type2.default.exist(formData)) {
	        option.body = formData;
	      }

	      // https://developer.mozilla.org/ja/docs/Web/API/Request
	      return new Request(path, option);
	    } }, { key: 'START', get: function get() {return 'ajaxStart';} /**
	                                                                    * COMPLETE event を取得します
	                                                                    * @event COMPLETE
	                                                                    * @returns {string} リクエスト完了イベント, ajaxComplete を返します
	                                                                    * @default ajaxComplete
	                                                                    */ }, { key: 'COMPLETE', get: function get() {return 'ajaxComplete';} /**
	                                                                                                                                           * ERROR event を取得します
	                                                                                                                                           * @event ERROR
	                                                                                                                                           * @returns {string} リクエストエラー イベント, ajaxError を返します
	                                                                                                                                           * @default ajaxError
	                                                                                                                                           */ }, { key: 'ERROR', get: function get() {return 'ajaxError';} }]);return Ajax;}(_EventDispatcher3.default);exports.default = Ajax;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);













	var _EventDispatcher2 = __webpack_require__(1);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	/**
	                                                                                                                                                                                       * new を許可しないための Symbol
	                                                                                                                                                                                       * @type {Symbol}
	                                                                                                                                                                                       * @private
	                                                                                                                                                                                       */ /**
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
	                                                                                                                                                                                           */ // event
	var singletonSymbol = (0, _symbol2.default)('singleton instance'); /**
	                                                                    * singleton instance, nullable
	                                                                    * @type {?Cycle}
	                                                                    * @private
	                                                                    * @static
	                                                                    */var instance = null; /**
	                                                                                            * private property key, requestAnimationFrame ID を保存するための Symbol
	                                                                                            * @type {Symbol}
	                                                                                            * @private
	                                                                                            */var requestSymbol = (0, _symbol2.default)('requestAnimationFrame id'); /**
	                                                                                                                                                                      * private property key, this.update.bind(this) を保存するための Symbol
	                                                                                                                                                                      * @type {Symbol}
	                                                                                                                                                                      * @private
	                                                                                                                                                                      */var updateSymbol = (0, _symbol2.default)('bind update'); /**
	                                                                                                                                                                                                                                  * private property key, requestAnimationFrame を開始したかを表す真偽値を保存するための Symbol
	                                                                                                                                                                                                                                  * @type {Symbol}
	                                                                                                                                                                                                                                  * @private
	                                                                                                                                                                                                                                  */var startSymbol = (0, _symbol2.default)('is requestAnimationFrame started flag'); /**
	                                                                                                                                                                                                                                                                                                                       * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
	                                                                                                                                                                                                                                                                                                                       * @type {Symbol}
	                                                                                                                                                                                                                                                                                                                       * @private
	                                                                                                                                                                                                                                                                                                                       */var eventsSymbol = (0, _symbol2.default)('Cycle.UPDATE Events instance');

	/**
	                                                                                                                                                                                                                                                                                                                                                                                                    * <p>requestAnimationFrame を使用しループイベントを発生させます</p>
	                                                                                                                                                                                                                                                                                                                                                                                                    * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
	                                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                                    * ```
	                                                                                                                                                                                                                                                                                                                                                                                                    * const loop = Cycle.factory();
	                                                                                                                                                                                                                                                                                                                                                                                                    * ```
	                                                                                                                                                                                                                                                                                                                                                                                                    *
	                                                                                                                                                                                                                                                                                                                                                                                                    * <p>requestAnimationFrame は tab が active(focus) な時のみ発生します</p>
	                                                                                                                                                                                                                                                                                                                                                                                                    */var
	Cycle = function (_EventDispatcher) {(0, _inherits3.default)(Cycle, _EventDispatcher);
	  /**
	                                                                                        * singleton です
	                                                                                        * @param {Symbol} checkSymbol singleton を保証するための private instance
	                                                                                        * @returns {Cycle} singleton instance を返します
	                                                                                        */
	  function Cycle(checkSymbol) {var _ret2;(0, _classCallCheck3.default)(this, Cycle);
	    // checkSymbol と singleton が等価かをチェックします
	    if (checkSymbol !== singletonSymbol) {
	      throw new Error('don\'t use new, instead use static factory method.');
	    }
	    // instance 作成済みかをチェックし instance が null の時 this を設定します
	    if (instance !== null) {var _ret;
	      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }


	    // -------------------------------
	    // onetime setting
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Cycle.__proto__ || (0, _getPrototypeOf2.default)(Cycle)).call(this));instance = _this;
	    // @type {Events} - Events
	    _this[eventsSymbol] = new _Events2.default(Cycle.UPDATE, _this, _this);

	    // @type {number} - requestAnimationFrame return id
	    _this[requestSymbol] = 0;
	    // @type {function} - update bind function
	    _this[updateSymbol] = _this.update.bind(_this);
	    // @type {boolean} - started flag
	    _this[startSymbol] = false;

	    // 設定済み instance を返します
	    return _ret2 = instance, (0, _possibleConstructorReturn3.default)(_this, _ret2);
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * requestAnimationFrame 毎に発生するイベントを取得します
	   * @event UPDATE
	   * @returns {string} event, cycleUpdate を返します
	   * @default cycleUpdate
	   */(0, _createClass3.default)(Cycle, [{ key: 'start',













	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * loop(requestAnimationFrame) を開始します
	     * @returns {boolean} start に成功すると true を返します
	     */value: function start()
	    {
	      if (this[startSymbol]) {
	        // already start
	        // console.warn('Cycle.start already start', this[startSymbol]);
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
	       * @returns {boolean} stop に成功すると true を返します
	       */ }, { key: 'stop', value: function stop()
	    {var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this[requestSymbol];
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
	     * @returns {undefined} no-return
	     */ }, { key: 'update', value: function update()
	    {
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
	     * @returns {Cycle} Cycle instance を返します
	     */ }, { key: 'events', // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * Events instance を取得します
	     * @returns {Events} Events instance
	     */get: function get() {return this[eventsSymbol];} }], [{ key: 'factory', value: function factory() {if (instance === null) {return new Cycle(singletonSymbol);}return instance;} }, { key: 'UPDATE', get: function get() {return 'cycleUpdate';} }]);return Cycle;}(_EventDispatcher3.default);exports.default = Cycle;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);












	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);


	var _Polling2 = __webpack_require__(102);var _Polling3 = _interopRequireDefault(_Polling2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	/**
	                                                                                                                                                                                      * private property key, fps を保存するための Symbol
	                                                                                                                                                                                      * @type {Symbol}
	                                                                                                                                                                                      * @private
	                                                                                                                                                                                      */ /**
	                                                                                                                                                                                          * Copyright (c) 2011-2016 inazumatv.com, inc.
	                                                                                                                                                                                          * @author (at)taikiken / http://inazumatv.com
	                                                                                                                                                                                          * @date 2016/07/04 - 14:19
	                                                                                                                                                                                          *
	                                                                                                                                                                                          * Distributed under the terms of the MIT license.
	                                                                                                                                                                                          * http://www.opensource.org/licenses/mit-license.html
	                                                                                                                                                                                          *
	                                                                                                                                                                                          * This notice shall be included in all copies or substantial portions of the Software.
	                                                                                                                                                                                          *
	                                                                                                                                                                                          */ // event
	var fpsSymbol = (0, _symbol2.default)('Singleton Fps Symbol'); /**
	                                                                * フレームレート毎に UPDATE イベントを発生させます
	                                                                */ // tick
	var Fps = function (_Polling) {(0, _inherits3.default)(Fps, _Polling); /**
	                                                                        * 引数の frame rate に合わせ UPDATE イベントを発生させます
	                                                                        * @param {number} [fps=30] frame rate, default: 30
	                                                                        */function Fps() {var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;(0, _classCallCheck3.default)(this, Fps); // private property
	    // @type {number} - frame rate, default: 30
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Fps.__proto__ || (0, _getPrototypeOf2.default)(Fps)).call(this, 1000 / fps));_this[fpsSymbol] = fps; // @type {Events} - Events
	    var events = new _Events2.default(Fps.UPDATE, _this, _this);events.fps = fps; /**
	                                                                                   * Fps.UPDATE Events instance
	                                                                                   * @type {Events}
	                                                                                   */_this.events = events;return _this;
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * フレームレート毎に発生するイベントを取得します
	   * @event UPDATE
	   * @returns {string} event, fpsUpdate を返します
	   * @default fpsUpdate
	   */(0, _createClass3.default)(Fps, [{ key: 'fps',



	    // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    // fps
	    /**
	     * frame rate を取得します
	     * @returns {number} frame rate を返します
	     */get: function get()
	    {
	      return this[fpsSymbol];
	    }
	    /**
	       * frame rate を設定します, 1 ~ 60 の間で設定します
	       * @param {number} rate frame rate
	       */, set: function set(
	    rate) {
	      var events = this.events;
	      events.fps = rate;
	      this[fpsSymbol] = rate;
	      /**
	                               * interval milliseconds
	                               * @type {number}
	                               */
	      this.polling = 1000 / rate;
	    } }], [{ key: 'UPDATE', get: function get() {return 'fpsUpdate';} }]);return Fps;}(_Polling3.default);exports.default = Fps;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _assign = __webpack_require__(103);var _assign2 = _interopRequireDefault(_assign);var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);












	var _EventDispatcher2 = __webpack_require__(1);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);


	var _Cycle = __webpack_require__(100);var _Cycle2 = _interopRequireDefault(_Cycle);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	/**
	                                                                                                                                                                            * private property key, this.update.bind(this) を保存するための Symbol
	                                                                                                                                                                            * @type {Symbol}
	                                                                                                                                                                            * @private
	                                                                                                                                                                            */
	var updateSymbol = (0, _symbol2.default)('bound update');
	/**
	                                                           * private property key, Cycle.UPDATE 監視を開始したかを表す真偽値を保存するための Symbol
	                                                           * @type {Symbol}
	                                                           * @private
	                                                           */ // tick
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
	 */ // event
	var startSymbol = (0, _symbol2.default)('is started watch Cycle.UPDATE flag'); /**
	                                                                                * private property key, Fps.start 時間を保存するための Symbol
	                                                                                * @type {Symbol}
	                                                                                * @private
	                                                                                */var beginSymbol = (0, _symbol2.default)('start time'); /**
	                                                                                                                                          * private property key, polling を保存するための Symbol
	                                                                                                                                          * @type {Symbol}
	                                                                                                                                          * @private
	                                                                                                                                          */var pollingSymbol = (0, _symbol2.default)('polling duration'); /**
	                                                                                                                                                                                                            * Polling.UPDATE event を発火する時の Events instance を保存するための Symbol
	                                                                                                                                                                                                            * @type {Symbol}
	                                                                                                                                                                                                            * @private
	                                                                                                                                                                                                            */var eventsSymbol = (0, _symbol2.default)('Polling.UPDATE Events instance'); /**
	                                                                                                                                                                                                                                                                                           * 一定間隔毎に UPDATE イベントを発生させます
	                                                                                                                                                                                                                                                                                           */var Polling = function (_EventDispatcher) {(0, _inherits3.default)(Polling, _EventDispatcher); /**
	                                                                                                                                                                                                                                                                                                                                                                                             * 引数の polling に合わせ UPDATE イベントを発生させます
	                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} [polling=1000] polling milliseconds
	                                                                                                                                                                                                                                                                                                                                                                                             */function Polling() {var polling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;(0, _classCallCheck3.default)(this, Polling);

	    // @type {Cycle} - Cycle instance
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Polling.__proto__ || (0, _getPrototypeOf2.default)(Polling)).call(this));var cycle = _Cycle2.default.factory();
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
	    _this[eventsSymbol] = new _Events2.default(Polling.UPDATE, _this, _this);return _this;
	  }
	  // ----------------------------------------
	  // EVENT
	  // ----------------------------------------
	  /**
	   * 一定間隔(milliseconds)毎に発生するイベント type を取得します
	   * @returns {string} event, pollingUpdate を返します
	   */(0, _createClass3.default)(Polling, [{ key: 'change',




























































	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * polling 時間を変更します<br>
	     * 1. プロパティ polling 変更
	     * 1. update 実行
	     * @param {number} polling polling 時間
	     * @returns {boolean} `update` をコールし Polling.UPDATE event が発生すると true を返します
	     */value: function change(
	    polling) {
	      this.polling = polling;
	      return this.update();
	    }
	    /**
	       * started flag を反転させ現在の started flag 状態を取得します
	       * @returns {boolean} 現在の started flag 状態を返します
	       */ }, { key: 'turnOver', value: function turnOver()
	    {
	      this[startSymbol] = !this[startSymbol];
	      return this.started;
	    }
	    /**
	       * events object を発火前に作成します
	       * @param {number} begin 開始時間: 前回の発火時間
	       * @param {number} present 現在時間
	       * @returns {Events} アップデートした Events を返します
	       */ }, { key: 'updateEvents', value: function updateEvents(
	    begin, present) {
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
	       * @returns {Cycle} cycle ループを開始しインスタンスを返します
	       */ }, { key: 'initCycle', value: function initCycle()
	    {
	      // cycle
	      var cycle = this.cycle;
	      // bind Cycle.UPDATE
	      cycle.on(_Cycle2.default.UPDATE, this[updateSymbol]);
	      // cycle 開始
	      cycle.start();
	      return cycle;
	    }
	    /**
	       * polling を開始します
	       * @returns {boolean} start に成功すると true を返します
	       */ }, { key: 'start', value: function start()
	    {
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
	       * @returns {boolean} stop に成功すると true を返します
	       */ }, { key: 'stop', value: function stop()
	    {
	      if (!this.started) {
	        // not start
	        return false;
	      }
	      this.cycle.off(_Cycle2.default.UPDATE, this[updateSymbol]);
	      // this[startSymbol] = false;
	      this.turnOver();
	      return true;
	    }
	    /**
	       * Cycle.UPDATE event handler, polling を計測しイベントを発火するかを判断します
	       *
	       * @listens {Cycle.UPDATE} Cycle.UPDATE が発生すると実行されます
	       * @returns {boolean} Polling.UPDATE event が発生すると true を返します
	       */ }, { key: 'update', value: function update()
	    {
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
	       * @returns {void}
	       */ }, { key: 'fire', value: function fire(
	    events) {
	      this.dispatch(events);
	    } }, { key: 'polling', // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    // fps
	    /**
	     * polling(milliseconds) を取得します
	     * @returns {number} polling(milliseconds) を返します
	     */get: function get() {return this[pollingSymbol];} /**
	                                                          * polling(milliseconds) を設定します
	                                                          * @param {number} rate polling(milliseconds)
	                                                          */, set: function set(rate) {this[pollingSymbol] = rate;} // begin
	    /**
	     * 開始時間を取得します
	     * @returns {number} 開始時間を返します
	     */ }, { key: 'begin', get: function get() {return this[beginSymbol];} /**
	                                                                            * 開始時間を設定します
	                                                                            * @param {number} time 開始時間
	                                                                            */, set: function set(time) {this[beginSymbol] = time;} // events
	    /**
	     * Events instance を取得します
	     * @returns {Events} Events instance を返します
	     */ }, { key: 'events', get: function get() {return this[eventsSymbol];} /**
	                                                                              * Events instance を設定します
	                                                                              * @param {Events} events Events instance
	                                                                              */, set: function set(events) {this[eventsSymbol] = events;} // flag
	    /**
	     * started flag 状態を取得します
	     * @readonly
	     * @returns {boolean} 現在の started flag 状態を返します
	     */ }, { key: 'started', get: function get() {return this[startSymbol];} }], [{ key: 'UPDATE', get: function get() {return 'pollingUpdate';} }]);return Polling;}(_EventDispatcher3.default);exports.default = Polling;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(106)});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(28)
	  , gOPS     = __webpack_require__(81)
	  , pIE      = __webpack_require__(82)
	  , toObject = __webpack_require__(26)
	  , IObject  = __webpack_require__(32)
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(49);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(2);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(3);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(53);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(90);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(74);var _symbol2 = _interopRequireDefault(_symbol);













	var _Events = __webpack_require__(47);var _Events2 = _interopRequireDefault(_Events);


	var _Polling2 = __webpack_require__(102);var _Polling3 = _interopRequireDefault(_Polling2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	/**
	                                                                                                                                                                                      * private property key, fps を保存するための Symbol
	                                                                                                                                                                                      * @type {Symbol}
	                                                                                                                                                                                      * @private
	                                                                                                                                                                                      */ /**
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
	                                                                                                                                                                                          */ // event
	var rateSymbol = (0, _symbol2.default)('save fps'); /**
	                                                     * private property key, count を保存するための Symbol
	                                                     * @type {Symbol}
	                                                     * @private
	                                                     */ // tick
	var countSymbol = (0, _symbol2.default)('for update count'); /**
	                                                              * private property key, rates を保存するための Symbol
	                                                              * @type {Symbol}
	                                                              * @private
	                                                              */var ratesSymbol = (0, _symbol2.default)('save rate'); /**
	                                                                                                                       * 固定値を使用し fps を決定します
	                                                                                                                       *
	                                                                                                                       * 以下のフレームレートが設定可能です
	                                                                                                                       *
	                                                                                                                       * - 60: Rate.RATE_60
	                                                                                                                       * - 30: RATE_30
	                                                                                                                       * - 20: RATE_20
	                                                                                                                       * - 15: RATE_15
	                                                                                                                       * - 12: RATE_12
	                                                                                                                       * - 10: RATE_10
	                                                                                                                       * - 6: RATE_6
	                                                                                                                       * - 5: RATE_5
	                                                                                                                       *
	                                                                                                                       */var Rate = function (_Polling) {(0, _inherits3.default)(Rate, _Polling); /**
	                                                                                                                                                                                                   * 固定値フレームレート毎に UPDATE イベントを発生させます
	                                                                                                                                                                                                   * @param {number} rate fps, 固定値以外設定できません
	                                                                                                                                                                                                   */function Rate(rate) {(0, _classCallCheck3.default)(this, Rate); // @type {Events - Events
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Rate.__proto__ || (0, _getPrototypeOf2.default)(Rate)).call(this, 1));var events = new _Events2.default(Rate.UPDATE, _this, _this);events.rate = rate; /**
	                                                                                                                                                                                                                        * Rate.UPDATE Events instance
	                                                                                                                                                                                                                        * @type {Events}
	                                                                                                                                                                                                                        */
	    _this.events = events;

	    // @type {number} - count, rate に達したかを計測するための counter 変数
	    _this[countSymbol] = 0;

	    // correct rate list
	    // サポートするレートリスト
	    _this[ratesSymbol] = [
	    Rate.RATE_60,
	    Rate.RATE_30,
	    Rate.RATE_20,
	    Rate.RATE_15,
	    Rate.RATE_12,
	    Rate.RATE_10,
	    Rate.RATE_6,
	    Rate.RATE_5];


	    // frame rate
	    _this[rateSymbol] = 0;
	    _this.change(rate);return _this;
	  }
	  // ----------------------------------------
	  // CONST
	  // ----------------------------------------
	  /**
	   * fps 60 基準値を取得します
	   * @const RATE_60
	   * @returns {number} fps 60 基準値を返します
	   * @default 1
	   */(0, _createClass3.default)(Rate, [{ key: 'change',













































































































	    // ----------------------------------------
	    // METHOD
	    // ----------------------------------------
	    /**
	     * fps 基準値を設定します
	     * @throws {Error} 引数 rate が設定可能値以外の時に例外エラーが発生します
	     * @param {number} rate fps 基準値, <br>
	     * this.RATE_30, this.RATE_20, this.RATE_15, this.RATE_12, this.RATE_10, <br>
	     * this.RATE_6, this.RATE_5 の何れかが必須です
	     * @returns {undefined} no-return
	     */value: function change(
	    rate) {
	      if (this.rates.indexOf(rate) !== -1) {
	        this[rateSymbol] = rate;
	      } else {
	        throw new Error('illegal rate: ' + rate + '. use const RATE_NN');
	      }
	    }
	    /**
	       * loop(requestAnimationFrame) を開始します
	       * @returns {boolean} start に成功すると true を返します
	       */ }, { key: 'start', value: function start()
	    {
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
	       */ }, { key: 'update', value: function update()
	    {
	      // 余りが 0 の時にイベントを発火します
	      this.count += 1;
	      var reminder = this.count % this.rate;
	      if (reminder === 0) {
	        this.count = 0;
	        this.fire(this.updateEvents(0, 0));

	        return true;
	      }

	      return false;
	    } }, { key: 'rates', // ----------------------------------------
	    // GETTER / SETTER
	    // ----------------------------------------
	    /**
	     * fps 基準値リストを取得します
	     * @returns {number} fps 基準値リストを返します
	     */get: function get() {return this[ratesSymbol];} /**
	                                                        * fps 基準値を取得します
	                                                        * @returns {number} fps 基準値を返します
	                                                        */ }, { key: 'rate', get: function get() {return this[rateSymbol];} /**
	                                                                                                                             * rate に達したかを計測するための counter 変数を取得します
	                                                                                                                             * @returns {number} rate に達したかを計測するための counter 変数を返します
	                                                                                                                             */ }, { key: 'count', get: function get() {return this[countSymbol];} /**
	                                                                                                                                                                                                    * rate に達したかを計測するための counter 変数を設定します
	                                                                                                                                                                                                    * @param {number} step rate に達したかを計測するための counter 数
	                                                                                                                                                                                                    */, set: function set(step) {this[countSymbol] = step;} }], [{ key: 'RATE_60', get: function get() {return 1;} /**
	                                                                                                                                                                                                                                                                                                                   * fps 30 基準値を取得します
	                                                                                                                                                                                                                                                                                                                   * @const RATE_30
	                                                                                                                                                                                                                                                                                                                   * @returns {number} fps 30 基準値を返します
	                                                                                                                                                                                                                                                                                                                   * @default 2
	                                                                                                                                                                                                                                                                                                                   */ }, { key: 'RATE_30', get: function get() {return 2;} /**
	                                                                                                                                                                                                                                                                                                                                                                            * fps 20 基準値を取得します
	                                                                                                                                                                                                                                                                                                                                                                            * @const RATE_20
	                                                                                                                                                                                                                                                                                                                                                                            * @returns {number} fps 20 基準値を返します
	                                                                                                                                                                                                                                                                                                                                                                            * @default 3
	                                                                                                                                                                                                                                                                                                                                                                            */ }, { key: 'RATE_20', get: function get() {return 3;} /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                     * fps 15 基準値を取得します
	                                                                                                                                                                                                                                                                                                                                                                                                                                     * @const RATE_15
	                                                                                                                                                                                                                                                                                                                                                                                                                                     * @returns {number} fps 15 基準値を返します
	                                                                                                                                                                                                                                                                                                                                                                                                                                     * @default 4
	                                                                                                                                                                                                                                                                                                                                                                                                                                     */ }, { key: 'RATE_15', get: function get() {return 4;} /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * fps 12 基準値を取得します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @const RATE_12
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @returns {number} fps 12 基準値を返します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @default 5
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ }, { key: 'RATE_12', get: function get() {return 5;} /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * fps 10 基準値を取得します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @const RATE_10
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @returns {number} fps 10 基準値を返します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @default 6
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */ }, { key: 'RATE_10', get: function get() {return 6;} /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fps 6 基準値を取得します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @const RATE_6
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @returns {number} fps 6 基準値を返します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @default 10
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */ }, { key: 'RATE_6', get: function get() {return 10;} /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * fps 5 基準値を取得します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @const RATE_5
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @returns {number} fps 6 基準値を返します
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @default 12
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */ }, { key: 'RATE_5', get: function get() {return 12;} // ----------------------------------------
	    // EVENT
	    // ----------------------------------------
	    /**
	     * フレームレート毎に発生するイベント type を取得します
	     * @event UPDATE
	     * @returns {string} event, rateUpdate を返します
	     * @default rateUpdate
	     */ }, { key: 'UPDATE', get: function get() {return 'rateUpdate';} }]);return Rate;}(_Polling3.default);exports.default = Rate;

/***/ }
/******/ ]);