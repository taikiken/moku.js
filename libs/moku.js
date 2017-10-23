/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/js/bundle";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(35)
  , hide      = __webpack_require__(10)
  , redefine  = __webpack_require__(18)
  , ctx       = __webpack_require__(15)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(58)('wks')
  , uid        = __webpack_require__(21)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(81)
  , toPrimitive    = __webpack_require__(36)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(6)
  , createDesc = __webpack_require__(17);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:39
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * [native code] userAgent
 * `device/index.js`
 * @type {string}
 */
var ua = navigator.userAgent;
/**
 * [native code] appVersion
 * `device/index.js`
 * @type {string}
 */
var app = navigator.appVersion;
/**
 * Safari - userAgent に `Safari` が含まれる
 * - 【注意】Safari browser を保証しない
 * @type {boolean}
 */
var safari = !!ua.match(/safari/i);

/**
 * device property
 * `device/index.js`
 * @type {{
 * ios: boolean,
 * ipad: boolean,
 * ipod: boolean,
 * iphone: boolean,
 * windows: boolean,
 * android: boolean,
 * standard: boolean,
 * phone: boolean,
 * tablet: boolean,
 * hd: boolean,
 * webView: boolean,
 * standalone: boolean,
 * version: number,
 * major: number,
 * build: string,
 * numbers: [?number,?number,?number]
 * }}
 */
var props = {
  ios: false,
  ipad: false,
  ipod: false,
  iphone: false,
  windows: false,
  android: false,
  standard: false,
  phone: false,
  tablet: false,
  hd: false,
  webView: false,
  standalone: false,
  build: '',
  major: -1,
  numbers: [-1, -1, -1],
  version: -1
};

/**
 * browser property
 * `device/index.js`
 * @type {{
 *   safari: boolean,
 *   chrome: boolean,
 *   firefox: boolean,
 *   ie: boolean,
 *   ie6: boolean,
 *   ie7: boolean,
 *   ie8: boolean,
 *   ie9: boolean,
 *   ie10: boolean,
 *   ie11: boolean,
 *   edge: boolean,
 *   crios: boolean,
 *   fxios: boolean,
 *   standard: boolean,
 *   build: string,
 *   major: number,
 *   numbers: [null,null,null],
 *   version: number
 * }}
 */
var browsers = {
  safari: false,
  chrome: false,
  firefox: false,
  ie: false,
  ie6: false,
  ie7: false,
  ie8: false,
  ie9: false,
  ie10: false,
  ie11: false,
  edge: false,
  crios: false,
  fxios: false,
  standard: false,
  build: '',
  major: -1,
  numbers: [-1, -1, -1],
  version: -1
};

/**
 * devices object
 * `device/index.js`
 * ```
 * @import device from './device';
 * const property = Object.assign({}, device);
 * ```
 * @type {{
 *  ua: string,
 *  app: string,
 *  props: {ios: boolean, ipad: boolean, ipod: boolean, iphone: boolean, windows: boolean, android: boolean, standard: boolean, phone: boolean, tablet: boolean, hd: boolean, webView: boolean, standalone: boolean, version: number, major: number, build: number, numbers: Array.<number>},
 *  safari: boolean
 * }}
 */

/**
 * devices object
 * `device/index.js`
 * ```
 * @import device from './device';
 * const property = Object.assign({}, device);
 * ```
 * @type {{
 *    ua: string,
 *    app: string,
 *    props: {ios: boolean, ipad: boolean, ipod: boolean, iphone: boolean, windows: boolean, android: boolean, standard: boolean, phone: boolean, tablet: boolean, hd: boolean, webView: boolean, standalone: boolean, version: number, major: number, build: string, numbers: (number|number|number)[]},
 *    safari: boolean,
 *    browsers: {
 *      safari: boolean,
 *      chrome: boolean,
 *      firefox: boolean,
 *      ie: boolean,
 *      ie6: boolean,
 *      ie7: boolean,
 *      ie8: boolean,
 *      ie9: boolean,
 *      ie10: boolean,
 *      ie11: boolean,
 *      edge: boolean,
 *      crios: boolean,
 *      fxios: boolean,
 *      standard: boolean,
 *      build: string,
 *      major: number,
 *      numbers: [null,null,null],
 *      version: number
 *    }
 * }}
 */
var devices = {
  ua: ua,
  app: app,
  props: props,
  safari: safari,
  browsers: browsers
};

exports.default = devices;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(55)
  , defined = __webpack_require__(19);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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


var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 */
var EventDispatcher = function () {
  /**
   * listener property をイニシャライズします
   */
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);

    // // @type {Object}
    // let listeners = {};
    // /**
    //  * リスナーリストを取得します
    //  * @returns {Object} リスナーリストを返します
    //  */
    // this.listeners = () => listeners;
    // /**
    //  * 全てのリスナーを破棄します
    //  * @returns {boolean} 成功・不成功の真偽値を返します
    //  */
    // this.destroy = () => {
    //   listeners = Object.create({});
    //   return true;
    // };
    /**
     * リスナーリスト object,
     * event type {string} を key, 値は Array.<function> になります
     * @type {Object}
     */
    this.listeners = Object.create({});
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 全てのリスナーを破棄します
   */


  _createClass(EventDispatcher, [{
    key: 'destroy',
    value: function destroy() {
      this.listeners = Object.create({});
    }
    /**
     * event type に リスナー関数を bind します
     * @param {string} type event type（種類）
     * @param {Function} listener callback関数
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: 'on',
    value: function on(type, listener) {
      if (!_Type2.default.exist(type)) {
        // type が有効値ではないので処理しない
        return false;
      }
      if (!_Type2.default.method(listener)) {
        // listener が 関数でないので処理しない
        return false;
      }

      // type {Object} - {{eventType: array [listener: Function...]...}}
      var listeners = this.listeners;

      if (!_Type2.default.has(listeners, type)) {
        // listeners.type が存在しない場合は
        // listeners.type をキーに新規配列を作成し
        // listener {function} を配列へ追加（登録）します
        listeners[type] = [];
      }
      // すでに listeners.type が存在する
      listeners[type].push(listener);
      return true;
    }
    /**
     * <p>event type からリスナー関数を remove します<br>
     * 内部処理は一時的に null 設定にします</p>
     * @param {string} type event type（種類）
     * @param {Function} listener リスナー関数
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: 'off',
    value: function off(type, listener) {
      if (!_Type2.default.method(listener)) {
        // listener が 関数でないので処理しない
        return false;
      }

      // @type {Object} - events.type:String: [listener:Function...]
      var listeners = this.listeners;
      if (!_Type2.default.has(listeners, type)) {
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
     */

  }, {
    key: 'clean',
    value: function clean(type, types) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
      // Array.some は 戻り値が true の時に走査を止めます
      // types 配列に null 以外があるかを調べます
      // @type {boolean} - listener list に 関数(typeof 'function')が存在すると true になります
      var hasFunction = types.some(function (listener) {
        return _Type2.default.method(listener);
      });

      if (!hasFunction) {
        // null 以外が無いので空にする
        this.listeners[type] = [].slice(0);
      }

      // 空配列にしたかを hasFunction flag を反転させることで知らせます
      return !hasFunction;
    }
    /**
     * event type にリスナー関数が登録されているかを調べます
     * @param {string} type event type（種類）
     * @param {Function} listener リスナー関数
     * @returns {boolean} event type にリスナー関数が登録されているかの真偽値を返します
     */

  }, {
    key: 'has',
    value: function has(type, listener) {
      if (!_Type2.default.method(listener)) {
        // listener が 関数でないので処理しない
        return false;
      }

      // @type {Object} - events.type:String: [listener:Function...]
      var listeners = this.listeners;

      if (!_Type2.default.has(listeners, type)) {
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
     */

  }, {
    key: 'dispatch',
    value: function dispatch(events) {
      var _this = this;

      // @type {Object} - events.type:string: [listener:Function...]
      var listeners = this.listeners;
      // @type {string} - event type
      var type = events.type;

      if (!_Type2.default.has(listeners, type)) {
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
     * @returns {boolean} 成功・不成功の真偽値を返します
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
     * @returns {boolean} event type にリスナー関数が登録されているかの真偽値を返します
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
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(events) {
      return this.dispatch(events);
    }
  }]);

  return EventDispatcher;
}();

exports.default = EventDispatcher;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Events = function () {
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} [currentTarget=this] current イベント発生インスタンス
   * @param {*} [target=this] イベント発生インスタンス
   * */
  function Events(type) {
    var currentTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    _classCallCheck(this, Events);

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
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 複製を作成します
   * @returns {Events|*} 複製を返します
   */


  _createClass(Events, [{
    key: "clone",
    value: function clone() {
      // return new Events(this.type, this.currentTarget, this.target);
      return Object.assign({}, this);
    }
  }]);

  return Events;
}();

exports.default = Events;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if(__webpack_require__(9)){
  var LIBRARY             = __webpack_require__(25)
    , global              = __webpack_require__(1)
    , fails               = __webpack_require__(5)
    , $export             = __webpack_require__(0)
    , $typed              = __webpack_require__(43)
    , $buffer             = __webpack_require__(54)
    , ctx                 = __webpack_require__(15)
    , anInstance          = __webpack_require__(27)
    , propertyDesc        = __webpack_require__(17)
    , hide                = __webpack_require__(10)
    , redefineAll         = __webpack_require__(26)
    , toInteger           = __webpack_require__(28)
    , toLength            = __webpack_require__(8)
    , toIndex             = __webpack_require__(30)
    , toPrimitive         = __webpack_require__(36)
    , has                 = __webpack_require__(7)
    , same                = __webpack_require__(83)
    , classof             = __webpack_require__(62)
    , isObject            = __webpack_require__(3)
    , toObject            = __webpack_require__(23)
    , isArrayIter         = __webpack_require__(63)
    , create              = __webpack_require__(38)
    , getPrototypeOf      = __webpack_require__(39)
    , gOPN                = __webpack_require__(37).f
    , getIterFn           = __webpack_require__(64)
    , uid                 = __webpack_require__(21)
    , wks                 = __webpack_require__(4)
    , createArrayMethod   = __webpack_require__(40)
    , createArrayIncludes = __webpack_require__(56)
    , speciesConstructor  = __webpack_require__(61)
    , ArrayIterators      = __webpack_require__(65)
    , Iterators           = __webpack_require__(32)
    , $iterDetect         = __webpack_require__(45)
    , setSpecies          = __webpack_require__(44)
    , arrayFill           = __webpack_require__(60)
    , arrayCopyWithin     = __webpack_require__(88)
    , $DP                 = __webpack_require__(6)
    , $GOPD               = __webpack_require__(20)
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , hide      = __webpack_require__(10)
  , has       = __webpack_require__(7)
  , SRC       = __webpack_require__(21)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(35).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(41)
  , createDesc     = __webpack_require__(17)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(36)
  , has            = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(81)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Type = function () {
  function Type() {
    _classCallCheck(this, Type);
  }

  _createClass(Type, null, [{
    key: 'method',

    /**
     * 引数(target)が関数かを調べます
     * @param {Function|*} target 調査対象
     * @returns {boolean} 引数(target)が関数かを調べ結果を返します、true: 関数
     */
    value: function method(target) {
      return typeof target === 'function';
    }
    /**
     * 引数(target)を `!!` で調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)を `!!` で調べ結果を返します
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
      // [参考] jQuery 2.x, jQuery 2 関数は文字列 "2" も true にするので type check を追加した
      return typeof target === 'number' && !Type.array(target) && target - parseFloat(target) + 1 >= 0;
    }
    /**
     * 引数(target)が int かを `Number.isInteger` を使用し調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)が int かを調べ結果を返します、true: int
     */

  }, {
    key: 'int',
    value: function int(target) {
      return Number.isInteger(target);
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
    /**
     * 引数(target)が null かを調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)が null かを調べ結果を返します、true: null
     */

  }, {
    key: 'nil',
    value: function nil(target) {
      return target === null;
    }
    /**
     * Object型 引数 `object` は String型 引数 `key` を [key] として所持しているかを調べます
     * @deprecated instead use Type.has
     * @param {Object} target 調査対象
     * @param {string} key Object.key 名称
     * @returns {boolean} 存在する時は true を返します
     */

  }, {
    key: 'hasKey',
    value: function hasKey(target, key) {
      return Type.has(target, key);
    }
    /**
     * Object型 引数 `object` は String型 引数 `key` を [key] として所持しているかを調べます
     * @param {Object} target 調査対象
     * @param {string} key Object.key 名称
     * @returns {boolean} 存在する時は true を返します
     */

  }, {
    key: 'has',
    value: function has(target, key) {
      return Object.keys(target).indexOf(key) !== -1;
    }
    /**
     * target が undefined かを調べます
     * @param {*} target 調査対象
     * @returns {boolean} true: undefined
     * @since 2016-10-25
     */

  }, {
    key: 'undef',
    value: function undef(target) {
      return typeof target === 'undefined';
    }
    /**
     * ファイル名から拡張子を取得します
     * @deprecated instead use Type.extension
     * @param {string} fileName 取得したいファイル名称
     * @returns {string} ファイル名の拡張子を返します
     */

  }, {
    key: 'getExtension',
    value: function getExtension(fileName) {
      return Type.extension(fileName);
    }
    /**
     * ファイル名から拡張子を取得します
     * @param {string} fileName 取得したいファイル名称
     * @returns {string} ファイル名の拡張子を返します
     */

  }, {
    key: 'extension',
    value: function extension(fileName) {
      if (typeof fileName !== 'string') {
        return '';
      }
      var splits = fileName.split('.');
      if (splits.length === 1) {
        return '';
      }
      return splits.pop().toLowerCase();
    }
    // ----------------------------------------------------------
    // 画像パスが正規かチェックする
    /**
     * 使用可能なbase64 file かを調べます
     * @param {string} fileName 調査対象ファイル名
     * @returns {boolean} jpeg / png の時に true を返します
     */

  }, {
    key: 'base64',
    value: function base64(fileName) {
      if (!Type.exist(fileName)) {
        return false;
      }
      return fileName.indexOf('data:image/jpeg;base64') !== -1 || fileName.indexOf('data:image/png;base64') !== -1 || fileName.indexOf('data:image/jpg;base64') !== -1 || fileName.indexOf('data:image/gif;base64') !== -1;
    }
    /**
     * 拡張子から画像ファイルかを調べます
     * @param {string} fileName 調査対象ファイル名
     * @returns {Boolean} 'jpg', 'png', 'jpeg', 'gif' のいづれかに該当するかの真偽値を返します
     */

  }, {
    key: 'img',
    value: function img(fileName) {
      if (!Type.exist(fileName)) {
        return false;
      }
      // base64
      if (Type.base64(fileName)) {
        return true;
      }
      // 拡張子チェック
      return ['jpg', 'png', 'jpeg', 'gif'].indexOf(Type.extension(fileName)) !== -1;
    }
  }]);

  return Type;
}();

exports.default = Type;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(18);
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(82)
  , enumBugKeys = __webpack_require__(59);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(82)
  , hiddenKeys = __webpack_require__(59).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(2)
  , dPs         = __webpack_require__(124)
  , enumBugKeys = __webpack_require__(59)
  , IE_PROTO    = __webpack_require__(57)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(53)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(84).appendChild(iframe);
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


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(23)
  , IE_PROTO    = __webpack_require__(57)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(15)
  , IObject  = __webpack_require__(55)
  , toObject = __webpack_require__(23)
  , toLength = __webpack_require__(8)
  , asc      = __webpack_require__(125);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(21)('meta')
  , isObject = __webpack_require__(3)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(6).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(5)(function(){
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

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , hide   = __webpack_require__(10)
  , uid    = __webpack_require__(21)
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , dP          = __webpack_require__(6)
  , DESCRIPTORS = __webpack_require__(9)
  , SPECIES     = __webpack_require__(4)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(4)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(15)
  , call        = __webpack_require__(90)
  , isArrayIter = __webpack_require__(63)
  , anObject    = __webpack_require__(2)
  , toLength    = __webpack_require__(8)
  , getIterFn   = __webpack_require__(64)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__(1)
  , $export           = __webpack_require__(0)
  , redefine          = __webpack_require__(18)
  , redefineAll       = __webpack_require__(26)
  , meta              = __webpack_require__(42)
  , forOf             = __webpack_require__(46)
  , anInstance        = __webpack_require__(27)
  , isObject          = __webpack_require__(3)
  , fails             = __webpack_require__(5)
  , $iterDetect       = __webpack_require__(45)
  , setToStringTag    = __webpack_require__(31)
  , inheritIfRequired = __webpack_require__(137);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide     = __webpack_require__(10)
  , redefine = __webpack_require__(18)
  , fails    = __webpack_require__(5)
  , defined  = __webpack_require__(19)
  , wks      = __webpack_require__(4);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _ScrollEvents = __webpack_require__(74);

var _ScrollEvents2 = _interopRequireDefault(_ScrollEvents);

var _Freeze = __webpack_require__(231);

var _Freeze2 = _interopRequireDefault(_Freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


// util


/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
var singletonSymbol = Symbol('Scroll singleton symbol');
/**
 * singleton instance, nullable
 * @type {?Scroll}
 * @private
 */
var instance = null;

/**
 * window scroll event を監視し通知を行います
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const instance = Scroll.factory();
 * ```
 */

var Scroll = function (_EventDispatcher) {
  _inherits(Scroll, _EventDispatcher);

  _createClass(Scroll, null, [{
    key: 'jump',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * y 位置に scroll top を即座に移動させます
     * @param {number} [y=0] scroll top 目標値
     * @param {number} [delay=0] time out 遅延 ms
     * @returns {number} time out id
     */
    value: function jump() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return setTimeout(function () {
        window.scrollTo(0, y);
      }, delay);
    }
    /**
     * {@link Freeze}.freeze を実行し scroll 操作を一定期間不能にします
     * @returns {number} time out ID
     */

  }, {
    key: 'freeze',
    value: function freeze() {
      return _Freeze2.default.freeze();
    }
    /**
     * scroll top 位置
     * @returns {number} scroll top 位置を返します
     * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
     */

  }, {
    key: 'y',
    value: function y() {
      return typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    // ----------------------------------------
    /**
     * Scroll instance を singleton を保証し作成します
     * @returns {Scroll} Scroll instance を返します
     */

  }, {
    key: 'factory',
    value: function factory() {
      if (instance === null) {
        instance = new Scroll(singletonSymbol);
      }
      return instance;
    }
    // ----------------------------------------
    // EVENT
    // ----------------------------------------
    /**
     * scroll で発生するイベントを取得します
     * @event SCROLL
     * @returns {string} event, scrollScroll を返します
     * @default scrollScroll
     */

  }, {
    key: 'SCROLL',
    get: function get() {
      return 'scrollScroll';
    }
    // ---------------------------------------------------
    //  CONSTRUCTOR
    // ---------------------------------------------------
    /**
    /**
     * singleton です
     * @param {Symbol} checkSymbol singleton を保証するための private instance
     * @returns {Scroll} singleton instance を返します
     */

  }]);

  function Scroll(checkSymbol) {
    var _ret2;

    _classCallCheck(this, Scroll);

    // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {
      throw new Error('don\'t use new, instead use static factory method.');
    }
    // instance 作成済みかをチェックし instance が null の時 this を設定します
    if (instance !== null) {
      var _ret;

      return _ret = instance, _possibleConstructorReturn(_this, _ret);
    }
    // onetime setting

    // instance = this;

    // event handler
    // const boundScroll = this.scroll.bind(this);
    /**
     * bound onScroll, window.onscroll event handler
     * @type {function}
     */
    // this.boundScroll = this.scroll.bind(this);
    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this));

    _this.onScroll = _this.onScroll.bind(_this);
    // this.boundScroll = () => boundScroll;
    // @type {Events} - events instance
    // const events = new ScrollEvents(Scroll.SCROLL, this, this);
    /**
     * ScrollEvents instance, 発火時に使用します
     * @type {ScrollEvents}
     */
    _this.events = new _ScrollEvents2.default(Scroll.SCROLL, _this, _this);
    // this.events = () => events;
    /**
     * 前回 scroll top 位置
     * @type {number}
     * @default -1
     */
    _this.previous = -1;
    // /**
    //  * start 済みフラッグ
    //  * @type {boolean}
    //  * @default false
    //  */
    // this.started = false;

    // 設定済み instance を返します
    return _ret2 = _this, _possibleConstructorReturn(_this, _ret2);
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * scroll event を監視します
   * @returns {Scroll} method chain 可能なように instance を返します
   */


  _createClass(Scroll, [{
    key: 'start',
    value: function start() {
      // if (this.started) {
      //   return this;
      // }
      // this.started = true;
      this.stop();
      window.addEventListener('scroll', this.onScroll, false);
      return this;
    }
    /**
     * scroll event を監視を止めます
     * @returns {Scroll} method chain 可能なように instance を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      // if (!this.started) {
      //   return this;
      // }
      // this.started = false;
      window.removeEventListener('scroll', this.onScroll);
      return this;
    }
    /**
     * window scroll event handler<br>
     * window scroll event 発生後に scroll top 位置をもたせた Scroll.SCROLL custom event を発火します
     * @param {?Event} event window scroll event, nullable
     * @returns {void}
     */

  }, {
    key: 'onScroll',
    value: function onScroll(event) {
      // @type {number} - scroll top
      var y = Scroll.y();
      // @type {number} - window height
      var height = window.innerHeight;
      // @type {number} - 前回の scroll top
      var previous = this.previous;

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
      this.previous = y;
    }
  }]);

  return Scroll;
}(_EventDispatcher3.default);

exports.default = Scroll;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/22 - 13:53
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 文字列操作の utility
 */
var Text = function () {
  function Text() {
    _classCallCheck(this, Text);
  }

  _createClass(Text, null, [{
    key: 'dash',

    /**
     * camel case を hyphenation に変換します
     * @param {string} str 操作対象文字列
     * @returns {string} キャメルケースをハイフネーションに変換後文字列を返します
     */
    value: function dash(str) {
      return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
    /**
     * camel case へ変換します
     * @param {string} str 操作対象文字列
     * @returns {*|void|string|XML} キャメルケース文字列を返します
     */

  }, {
    key: 'camel',
    value: function camel(str) {
      // return str.replace(/^\s+|\s+$/g, '');
      return str.replace(/-([a-z])/g, function (g) {
        var first = g[1];
        return first.toUpperCase();
      });
    }
    /**
     * 数値に3桁区切りの `,` カンマを挿入します
     * @param {number} number カンマを挿入する数値
     * @param {string} [locale=js-JP] ロケール
     * @returns {string} カンマ挿入後の文字列, 小数点なし
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
     * @see http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
     */

  }, {
    key: 'comma',
    value: function comma(number) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ja-JP';

      var numbered = '';
      if (number.toLocaleString) {
        numbered = number.toLocaleString(locale);
      } else {
        numbered = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      // IE 8 `NN.00` にするので `.` 以下削除
      return numbered.split('.').shift();
    }
    /**
     * 文字列の単語を置き換えます
     * @param {string} targetText 置換え対象文字列
     * @param {string} targetWord 置換え元単語
     * @param {string} replaceWord 置換える単語
     * @returns {string} 置換え後の文字列を返します
     */

  }, {
    key: 'replace',
    value: function replace(targetText, targetWord, replaceWord) {
      return targetText.split(targetWord).join(replaceWord);
    }
    /**
     * 文字列から単語を削除します
     * @param {string} targetText 置換え対象文字列
     * @param {string} targetWord 削除する単語
     * @returns {string} 削除後の文字列を返します
     */

  }, {
    key: 'remove',
    value: function remove(targetText, targetWord) {
      return Text.replace(targetText, targetWord, '');
    }
    /**
     * 文字列の `&` を `&amp;` へ置換えます
     * @param {string} targetText 操作対象文字列
     * @returns {string} `&amp;` 置換え後の文字列を返します
     */

  }, {
    key: 'amp',
    value: function amp(targetText) {
      return Text.replace(targetText, '&', '&amp;');
    }
    /**
     * 文字列の `&amp;` を `&` へ置換えます
     * @param {string} targetText 操作対象文字列
     * @returns {string} `&` 置換え後の文字列を返します
     */

  }, {
    key: 'and',
    value: function and(targetText) {
      return Text.replace(targetText, '&amp;', '&');
    }
  }]);

  return Text;
}();

exports.default = Text;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(1)
  , DESCRIPTORS    = __webpack_require__(9)
  , LIBRARY        = __webpack_require__(25)
  , $typed         = __webpack_require__(43)
  , hide           = __webpack_require__(10)
  , redefineAll    = __webpack_require__(26)
  , fails          = __webpack_require__(5)
  , anInstance     = __webpack_require__(27)
  , toInteger      = __webpack_require__(28)
  , toLength       = __webpack_require__(8)
  , gOPN           = __webpack_require__(37).f
  , dP             = __webpack_require__(6).f
  , arrayFill      = __webpack_require__(60)
  , setToStringTag = __webpack_require__(31)
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(8)
  , toIndex   = __webpack_require__(30);
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

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(58)('keys')
  , uid    = __webpack_require__(21);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(23)
  , toIndex  = __webpack_require__(30)
  , toLength = __webpack_require__(8);
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(2)
  , aFunction = __webpack_require__(22)
  , SPECIES   = __webpack_require__(4)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(29)
  , TAG = __webpack_require__(4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(32)
  , ITERATOR   = __webpack_require__(4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(62)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(32);
module.exports = __webpack_require__(35).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(34)
  , step             = __webpack_require__(86)
  , Iterators        = __webpack_require__(32)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(87)(Array, 'Array', function(iterated, kind){
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

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(3)
  , anObject = __webpack_require__(2);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(15)(Function.call, __webpack_require__(20).f(Object.prototype, '__proto__').set, 2);
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

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(15)
  , invoke             = __webpack_require__(49)
  , html               = __webpack_require__(84)
  , cel                = __webpack_require__(53)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(29)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(96)
  , defined  = __webpack_require__(19);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(4)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6)
  , createDesc      = __webpack_require__(17);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scroll = __webpack_require__(51);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _ScrollEvents = __webpack_require__(74);

var _ScrollEvents2 = _interopRequireDefault(_ScrollEvents);

var _Rate = __webpack_require__(102);

var _Rate2 = _interopRequireDefault(_Rate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016/11/04
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2015 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// event


// tick


/**
 * fps: {@link Rate} new Rate(Rate.RATE_5)` で Scroll 位置を計算します
 *
 * @example
 * // 途中で rate を変更する
 * const scrolling = new Scrolling();
 * scrolling
 *    .start()
 *    .rate.setRate(Rate.RATE_12);
 * */
var Scrolling = function (_EventDispatcher) {
  _inherits(Scrolling, _EventDispatcher);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  /**
   * @param {Rate} [rate=new Rate(Rate.Rate_5)] Rate instance, scroll 監視 fps を設定します
   */
  function Scrolling() {
    var rate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Rate2.default(_Rate2.default.RATE_5);

    _classCallCheck(this, Scrolling);

    // @type {function}
    // const onUpdate = this.scroll.bind(this);
    /**
     * bound onUpdate, Rate.UPDATE event handler
     * @type {function}
     */
    var _this = _possibleConstructorReturn(this, (Scrolling.__proto__ || Object.getPrototypeOf(Scrolling)).call(this));

    _this.onUpdate = _this.onUpdate.bind(_this);
    // this.onUpdate = onUpdate;
    // @type {ScrollEvents}
    // const events = new ScrollEvents(Scrolling.UPDATE, this, this);
    /**
     * ScrollEvents instance, 発火時に使用します
     * @type {ScrollEvents}
     */
    _this.events = new _ScrollEvents2.default(Scrolling.UPDATE, _this, _this);
    // this.events = events;
    /**
     * 前回 scroll top 位置
     * @type {number}
     * @default -1
     */
    _this.previous = -1;
    // /**
    //  * start 済みフラッグ
    //  * @type {boolean}
    //  * @default false
    //  */
    // this.started = false;
    /**
     * Rate instance
     * @type {?Rate}
     */
    _this.rate = rate;
    /**
     * scrolling 監視開始 flag
     * @type {boolean}
     * @since 0.3.8
     */
    _this.watching = false;
    /**
     * bind onNativeEvent - window.onscroll|onresize event handler
     * @type {function}
     */
    _this.onNativeEvent = _this.onNativeEvent.bind(_this);
    return _this;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  // /**
  //  * fps で発生するイベントを取得します
  //  * @event SCROLL
  //  * @returns {string} event, scrollingScroll を返します
  //  * @default scrollingScroll
  //  */
  // static get UPDATE() {
  //   return 'scrollingUpdate';
  // }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * window.onscroll / window.onresize event handler,
   * `this.watching` flag を確認し `watch` を call します
   * @since 0.3.8
   */

  // ---------------------------------------------------
  //  CONSTANT / EVENT
  // ---------------------------------------------------
  /**
   * fps: {@link Rate} で発生するイベント - scrollingUpdate
   * @event UPDATE
   */


  _createClass(Scrolling, [{
    key: 'onNativeEvent',
    value: function onNativeEvent() {
      if (!this.watching) {
        this.watch();
      }
    }
    /**
     * window.onscroll / window.onresize 監視を開始します
     * @returns {Scrolling} method chain 可能なように instance を返します
     */

  }, {
    key: 'start',
    value: function start() {
      window.addEventListener('scroll', this.onNativeEvent, false);
      window.addEventListener('resize', this.onNativeEvent, false);
      return this;
    }
    /**
     * window.onscroll / window.onresize 監視を停止します
     * @returns {Scrolling} method chain 可能なように instance を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      window.removeEventListener('scroll', this.onNativeEvent);
      window.removeEventListener('resize', this.onNativeEvent);
      return this;
    }
    /**
     * fps を監視しスクロール位置を知らせます
     * @returns {Scrolling} method chain 可能なように instance を返します
     * @since 0.3.8
     */

  }, {
    key: 'watch',
    value: function watch() {
      this.unwatch();
      this.watching = true;
      var rate = this.rate;
      rate.on(_Rate2.default.UPDATE, this.onUpdate);
      rate.start();
      return this;
    }
    /**
     * fps 監視を止めます
     * @returns {Scrolling} method chain 可能なように instance を返します
     * @since 0.3.8
     */

  }, {
    key: 'unwatch',
    value: function unwatch() {
      this.rate.off(_Rate2.default.UPDATE, this.onUpdate);
      this.watching = false;
      return this;
    }
    /**
     * 指定 rate(fps) 毎にスクロール位置を<br>
     * scroll top 位置をもたせた Scrolling.UPDATE custom event を発火します
     *
     * 下記のプロパティをイベント・インスタンスに追加します
     *
     * - original {Events} - Rate Events instance
     * - y {number} - scroll top
     * - height {number} - window height
     * - width {number} - window width
     * - bottom {number} - window bottom 位置 (y + height)
     * - previous {number} - 前回の scroll top
     * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
     * - wide {boolean} - width が 768 以上の時に true
     * - changed {boolean} - scroll top が前回と変わっていたら true
     *
     * @param {?Events} event {@link Rate.UPDATE} Events instance
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(event) {
      // @type {number} - scroll top
      var y = _Scroll2.default.y();
      // @type {number} - previous scroll top
      var previous = this.previous;
      // @type {boolean} - 移動したかを表します,
      var changed = event === null || previous !== y;
      // 移動量 0 の時は rate 監視を停止する
      if (!changed) {
        this.unwatch();
      }
      // @type {number} - window height
      var height = window.innerHeight;
      // @type {number} - window width
      var width = window.innerWidth;

      // @type {ScrollEvents} - events
      var events = this.events;

      // @type {Event} - Rate Events instance
      events.original = event;
      // @type {number} - scroll top
      events.y = y;
      // @type {number} - window height
      events.height = height;
      // @type {number} - window width
      events.width = width;
      // @type {number} - window bottom(y + height)
      events.bottom = y + height;
      // @type {boolean} - 移動したかを表します,
      // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします
      events.changed = changed;
      // @type {number} - 前回の y 位置
      events.previous = previous;
      // @type {number} - 移動量 +: down, -: up
      events.moving = y - previous;
      // event fire
      // console.log('Scrolling.scroll', events);
      this.dispatch(events);

      // save scroll top -> previous
      this.previous = y;
    }
    /**
     * 強制的に Scrolling.SCROLL event を発火させます
     */

  }, {
    key: 'fire',
    value: function fire() {
      this.onUpdate(null);
    }
  }]);

  return Scrolling;
}(_EventDispatcher3.default);

Scrolling.UPDATE = 'scrollingUpdate';
exports.default = Scrolling;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016/11/20 - 10:54
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * {@link Scroll} Events
 */
var ScrollEvents = function (_Events) {
  _inherits(ScrollEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function ScrollEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, ScrollEvents);

    /**
     * scroll top 前回位置(px)
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (ScrollEvents.__proto__ || Object.getPrototypeOf(ScrollEvents)).call(this, type, currentTarget, target));

    _this.previous = -1;
    /**
     * オリジナルイベント(window.onscroll)
     * @type {?Events|Event}
     */
    _this.original = null;
    /**
     * scroll top 現在位置(px)
     * @type {number}
     */
    _this.y = 0;
    /**
     * window innerHeight
     * @type {number}
     */
    _this.height = 0;
    /**
     * window innerWidth
     * @type {number}
     */
    _this.width = 0;
    /**
     * window 下端位置(scroll top + window height)
     * @type {number}
     */
    _this.bottom = 0;
    /**
     * scroll top 位置が前回と違うかを表すフラッグ, true: 違う
     * @type {boolean}
     */
    _this.changed = false;
    /**
     * UP / DOWN と前回からの移動距離(px), 正(+): scroll down
     * @type {number}
     */
    _this.moving = 0;
    return _this;
  }

  return ScrollEvents;
}(_Events3.default);

exports.default = ScrollEvents;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _Cycle = __webpack_require__(103);

var _Cycle2 = _interopRequireDefault(_Cycle);

var _PollingEvents = __webpack_require__(104);

var _PollingEvents2 = _interopRequireDefault(_PollingEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

// import Events from '../event/Events';

// tick


// tick/events


/**
 * 一定間隔毎に UPDATE イベントを発生させます
 *
 * @example
 * // 3sec. interval
 * const polling = new Polling(1000 * 3);
 * const update = () => {
 *  // code here, something do
 * };
 * polling.on(Polling.UPDATE, update);
 * polling.start();
 */
var Polling = function (_EventDispatcher) {
  _inherits(Polling, _EventDispatcher);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * 引数の polling に合わせ UPDATE イベントを発生させます
   * @param {number} [interval=1000] イベント発生間隔 milliseconds
   */
  function Polling() {
    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

    _classCallCheck(this, Polling);

    /**
     * Cycle instance を取得します
     * @ty[e {Cycle}
     */
    var _this = _possibleConstructorReturn(this, (Polling.__proto__ || Object.getPrototypeOf(Polling)).call(this));

    _this.cycle = _Cycle2.default.factory();
    /**
     * 間隔(ms)
     * @type {number}
     */
    _this.interval = interval;
    /**
     * bound onUpdate, Cycle.UPDATE event handler
     * @returns {function}
     */
    _this.onUpdate = _this.onUpdate.bind(_this);
    /**
     * Events instance - Polling.UPDATE Events object
     * @type {Events}
     */
    _this.events = new _PollingEvents2.default(Polling.UPDATE, _this, _this);
    /**
     * polling event 発生時間, event を発火すると 0 にリセットされます
     * @type {number}
     */
    _this.begin = 0;
    return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * polling 時間を変更します<br>
   * 1. プロパティ polling 変更
   * 1. update 実行
   * @param {number} interval polling 時間
   * @returns {boolean} `update` をコールし Polling.UPDATE event が発生すると true を返します
   */

  // ----------------------------------------
  // STATIC EVENT
  // ----------------------------------------
  /**
   * 一定間隔(milliseconds)毎に発生するイベント - pollingUpdate
   * @event UPDATE
   * @type {string}
   */


  _createClass(Polling, [{
    key: 'change',
    value: function change(interval) {
      this.interval = interval;
      return this.start();
    }
    /**
     * polling を開始します
     * @returns {boolean} start に成功すると true を返します
     */

  }, {
    key: 'start',
    value: function start() {
      // event unbind
      this.stop();
      // @type {number} - 開始時間
      this.begin = Date.now();
      this.cycle.on(_Cycle2.default.UPDATE, this.onUpdate);
      return true;
    }
    /**
     * polling を止めます
     * @returns {boolean} stop に成功すると true を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.cycle.off(_Cycle2.default.UPDATE, this.onUpdate);
      return true;
    }
    /**
     * Cycle.UPDATE event handler, polling を計測しイベントを発火するかを判断します
     *
     * @listens {Cycle.UPDATE} Cycle.UPDATE が発生すると実行されます
     * @returns {boolean} Polling.UPDATE event が発生すると true を返します
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate() {
      // 現在時間
      // @type {number}
      var present = Date.now();
      // @type {number} - interval 間隔
      var interval = this.interval;
      // @type {number} - 開始時間
      var begin = this.begin;
      // 現在時間 が interval より大きくなったか
      if (present - begin >= interval) {
        // event 発火
        this.fire(this.updateEvents(begin, present));
        // 開始時間を update
        this.begin = present;
        // event 発生
        return true;
      }
      return false;
    }
    // -----
    // event create & fire
    /**
     * events object を発火前に作成します
     * @param {number} begin 開始時間: 前回の発火時間
     * @param {number} present 現在時間
     * @returns {Events} アップデートした Events を返します
     */

  }, {
    key: 'updateEvents',
    value: function updateEvents(begin, present) {
      this.begin = begin;
      // @type {Events} - start event
      var events = this.events;
      events.begin = begin;
      events.present = present;
      events.interval = this.interval;
      return events;
    }
    /**
     * Polling.UPDATE event を発生します
     * @param {Events} events Polling.UPDATE event object
     * @returns {void}
     */

  }, {
    key: 'fire',
    value: function fire(events) {
      this.dispatch(events);
    }
  }]);

  return Polling;
}(_EventDispatcher3.default);

Polling.UPDATE = 'pollingUpdate';
exports.default = Polling;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/08
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * Vectors
 */

/**
 * ある点の座標(x, y)と時間(time)を管理します
 */
var Vectors = function () {
  /**
   * 座標と現在時間を元にインスタンスを作成します
   * @param {number} [x=0] 座標 x
   * @param {number} [y=0] 座標 y
   * @param {number} [time=Date.now()] 時間 milli seconds
   */
  function Vectors() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();

    _classCallCheck(this, Vectors);

    /**
     * 座標 x
     * @type {number}
     */
    this.x = x;
    /**
     * 座標 y
     * @type {number}
     */
    this.y = y;
    /**
     * 時間 milli seconds
     * @type {number}
     */
    this.time = time;
    /**
     * スクロール中かのフラッグ, true: スクロール中
     * @type {boolean}
     */
    this.scrolling = false;
  }
  /**
   * x, y, time プロパティを全て `0` にします
   * @returns {Vectors} メソッドチェイン可能なようにインスタンスを返します
   */


  _createClass(Vectors, [{
    key: "reset",
    value: function reset() {
      this.x = 0;
      this.y = 0;
      this.time = 0;

      return this;
    }
    /**
     * x, y, time を更新します
     * @param {number} x 座標 x
     * @param {number} y 座標 y
     * @param {number} [time=Date.now] 時間 milli seconds
     * @returns {Vectors} メソッドチェイン可能なようにインスタンスを返します
     */

  }, {
    key: "update",
    value: function update(x, y) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();

      this.x = x;
      this.y = y;
      this.time = time;

      return this;
    }
    /**
     * 引数 vectors 間の距離を測ります
     * @param {Vectors} vectors 計測したい対象 Vector instance
     * @returns {number} 距離を返します
     */

  }, {
    key: "distance",
    value: function distance(vectors) {
      var distanceX = this.x - vectors.x;
      var distanceY = this.y - vectors.y;
      var sqrt = distanceX * distanceX + distanceY * distanceY;
      return Math.sqrt(sqrt);
    }
    /**
     * 引数 vectors との時間差を計算します
     * @param {Vectors} vectors 計測したい対象 Vector instance
     * @returns {number} 時間差(milli seconds) を返します
     */

  }, {
    key: "duration",
    value: function duration(vectors) {
      return this.time - vectors.time;
    }
    /**
     * 複製を作成し返します
     * @returns {Vectors} 複製を返します
     */

  }, {
    key: "clone",
    value: function clone() {
      var clone = new Vectors(this.x, this.y, this.time);
      clone.scrolling = this.scrolling;
      return clone;
    }
    /**
     * ベクトルの大きさの２乗の平方根を計算します
     * @returns {number} ベクトルの大きさの２乗の平方根を返します
     */

  }, {
    key: "length",
    value: function length() {
      var x = this.x;
      var y = this.y;
      return Math.sqrt(x * x + y * y);
    }
    /**
     * ベクトルの値を scalar 値で除算します
     *
     * @param {number} scalar 除算母数
     * @returns {Vectors} 除算後の Vector を返します
     */

  }, {
    key: "divideByScalar",
    value: function divideByScalar(scalar) {
      var clone = this.clone();
      if (scalar === 0) {
        clone.x = 0;
        clone.y = 0;
      } else {
        var x = clone.x;
        var y = clone.y;
        var inverse = 1 / scalar;
        clone.x = x * inverse;
        clone.y = y * inverse;
      }

      return clone;
    }
    /**
     * ベクトルの値を scalar 値で乗算します
     *
     * @param {number} scalar 乗算母数
     * @returns {Vectors} 乗算後の Vector を返します
     */

  }, {
    key: "multiplyByScalar",
    value: function multiplyByScalar(scalar) {
      var clone = this.clone();
      clone.x *= scalar;
      clone.y *= scalar;
      return clone;
    }
    /**
     * 現在の Vectors を元に引数 `maxValue` 以下にした `Vectors` を取得します
     * @param {number} maxValue 最高目標値
     * @returns {Vectors} `maxValue` 以下にした `Vectors` を返します
     */

  }, {
    key: "truncate",
    value: function truncate(maxValue) {
      var minValue = Math.min(maxValue, this.length());
      var oldLength = this.length();
      if (oldLength !== 0 && minValue !== oldLength) {
        return this.multiplyByScalar(minValue / oldLength);
      }
      return this.clone();
    }
    /**
     * ベクトルの大きさを正規化（大きさを1）した Vector を作成します
     * @returns {Vectors} ベクトルの大きさを正規化（大きさを1）した Vectors を返します
     */

  }, {
    key: "normalize",
    value: function normalize() {
      return this.divideByScalar(this.length());
    }
    /**
     * ベクトルが正規化されているかを判定します
     * @returns {boolean} true: 正規化されている
     */

  }, {
    key: "isNormalize",
    value: function isNormalize() {
      return this.length() === 1;
    }
    /**
     * 引数 vectors との X 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} X 値を減算し返します
     */

  }, {
    key: "betweenX",
    value: function betweenX(vectors) {
      return this.x - vectors.x;
    }
    /**
     * 引数 vectors との Y 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} Y 値を減算し返します
     */

  }, {
    key: "betweenY",
    value: function betweenY(vectors) {
      return this.y - vectors.y;
    }
    /**
     * 引数 vectors との time 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} time 値を減算し返します
     */

  }, {
    key: "betweenTime",
    value: function betweenTime(vectors) {
      return this.time - vectors.time;
    }
    /**
     * 引数 vectors との x, y, time 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {Vectors} 引数 vectors との x, y, time 値を減算した clone を返します
     */

  }, {
    key: "between",
    value: function between(vectors) {
      var clone = this.clone();
      clone.x = clone.betweenX(vectors);
      clone.y = clone.betweenY(vectors);
      clone.time = clone.betweenTime(vectors);

      return clone;
    }
    /**
     * 引数ベクトルの内積を計算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} 内積を返します
     */

  }, {
    key: "dot",
    value: function dot(vectors) {
      return this.x * vectors.x + this.y * vectors.y;
    }
    /**
     * 引数ベクトルの値(x, y)が等しいかを判定します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {boolean} true: 等しい
     */

  }, {
    key: "equals",
    value: function equals(vectors) {
      return vectors.x === this.x && vectors.y === this.y;
    }
    /**
     * 引数ベクトルとの角度を計算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} 角度を返します
     */

  }, {
    key: "angle",
    value: function angle(vectors) {
      var v1 = this.clone();
      var v2 = vectors.clone();
      if (!v1.isNormalize()) {
        v1 = v1.normalize();
      }
      if (!v2.isNormalize()) {
        v2 = v2.normalize();
      }
      // console.log('angle', v1, v2, v1.dot(v2), Math.acos(v1.dot(v2)));
      return Math.acos(v1.dot(v2));
    }
  }]);

  return Vectors;
}();

exports.default = Vectors;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/08/28 - 16:36
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

var _Windows = __webpack_require__(108);

var _Windows2 = _interopRequireDefault(_Windows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.props
 * {@link Android}
 * @type {?object}
 */
var props = null;

/**
 * version 情報を計算します
 * {@link Android}
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/android (\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭の Android 4.3 削除
  numbers.shift();
  var versions = numbers.map(function (number, index) {
    var int = parseInt(number, 10);
    if (index < 3) {
      return isNaN(int) ? 0 : int;
    }
    return null;
  });
  props.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  props.major = major;
  props.version = parseFloat(major + '.' + minor + build);
  props.numbers = versions;
};

/**
 * {@link Android}
 * - Android standard browser
 *   - `Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13`,
 *   - `Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
 * - Windows phone
 *   - `Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.OS_BUILD_NUMBER`
 * - #ref: `https://msdn.microsoft.com/ja-jp/library/hh869301(v=vs.85).aspx`
 * - @see http://googlewebmastercentral.blogspot.jp/2011/03/mo-better-to-also-detect-mobile-user.html
 */
var init = function init() {
  if (props) {
    return;
  }
  props = Object.assign({}, _devices2.default.props);
  var ua = _devices2.default.ua;
  // windows phone ua に `Android` が入っている
  var android = !_Windows2.default.phone() && !!ua.match(/android/i);
  if (android) {
    props.android = true;
    props.phone = !!ua.match(/mobile/i);
    // phone / tablet
    if (!props.phone) {
      props.tablet = true;
    }
    // Android 標準 browser
    props.standard = _devices2.default.safari && (!!ua.match(/version/i) || !!ua.match(/samsungbrowser/i));
    // hd
    props.hd = Math.max(window.innerWidth, window.innerHeight) > 1024;
    // version check
    version();
  }
};

/**
 * Android OS detector
 */

var Android = function () {
  function Android() {
    _classCallCheck(this, Android);
  }

  _createClass(Android, null, [{
    key: 'is',

    /**
     * Android OS
     * @returns {boolean} true: Android OS
     */
    value: function is() {
      init();
      return props.android;
    }
    /**
     * Android OS && standard browser
     * @returns {boolean} true: Android standard browser
     */

  }, {
    key: 'standard',
    value: function standard() {
      init();
      return props.standard;
    }
    /**
     * Android OS && phone
     * @returns {boolean} true: Android phone
     */

  }, {
    key: 'phone',
    value: function phone() {
      init();
      return props.phone;
    }
    /**
     * Android OS && tablet
     * @returns {boolean} true: Android tablet
     */

  }, {
    key: 'tablet',
    value: function tablet() {
      init();
      return props.tablet;
    }
    /**
     * Android OS && HD window
     * @returns {boolean} true: Android HD window
     */

  }, {
    key: 'hd',
    value: function hd() {
      init();
      return props.hd;
    }
    /**
     * Android OS version
     * @returns {number} Android OS version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return props.version;
    }
    /**
     * Android OS major version
     * @returns {number} Android OS major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return props.major;
    }
    /**
     * Android OS version `major.minor.build`
     * @returns {string} Android OS version NN.NN.NN 型（文字）で返します, not Android ''
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return props.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return props.numbers;
    }
    /**
     * Android 4.3 ~ 4.4 && standard browser
     * - touchend が未実装
     * @returns {boolean} true: Android 4.3 ~ 4.4
     */

  }, {
    key: 'kitKat',
    value: function kitKat() {
      // no touchend - standard browser 4.3 ~ 4.4
      var v = Android.version();
      return Android.standard() && v > 4.2 && v < 4.5;
    }
  }]);

  return Android;
}();

exports.default = Android;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scrolling2 = __webpack_require__(73);

var _Scrolling3 = _interopRequireDefault(_Scrolling2);

var _Scroll = __webpack_require__(51);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _ResizingEvents = __webpack_require__(109);

var _ResizingEvents2 = _interopRequireDefault(_ResizingEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/08/03 - 19:33
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// event


// event/events


/**
 * resize のみを監視します
 */
var Resizing = function (_Scrolling) {
  _inherits(Resizing, _Scrolling);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * events instance を準備します
   */
  function Resizing() {
    _classCallCheck(this, Resizing);

    // ------
    /**
     * Resizing event を準備します
     * @type {ScrollEvents}
     */
    var _this = _possibleConstructorReturn(this, (Resizing.__proto__ || Object.getPrototypeOf(Resizing)).call(this));

    _this.events = new _ResizingEvents2.default(Resizing.UPDATE, _this, _this);
    // console.log('Resizing events', this.events);
    /**
     * document.body size - clientWidth / clientHeight
     * @type {{width: number, height: number}}
     */
    _this.body = {
      width: -1,
      height: -1
    };
    /**
     * window innerWidth / innerHeight
     * @type {{width: number, height: number}}
     */
    _this.window = {
      width: -1,
      height: -1
    };
    /**
     * 前回スクロールトップ値
     * @type {number}
     */
    _this.previous = -1;
    return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 監視を開始します
   * - 常時監視します - document.body.onresize が作動しないため
   * @returns {*} method chain 可能なように instance を返します
   */

  // ----------------------------------------
  // STATIC PROPERTY
  // ----------------------------------------
  /**
   * Resizing event type - resizingUpdate
   * @event UPDATE
   * @type {string}
   */


  _createClass(Resizing, [{
    key: 'start',
    value: function start() {
      this.watch();
      return this;
    }
    /**
     * 監視を停止します
     * @returns {*} method chain 可能なように instance を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.unwatch();
      return this;
    }
    /**
     * 指定 rate(fps) 毎にスクロール位置を<br>
     * scroll top 位置をもたせた Scrolling.UPDATE custom event を発火します
     *
     * 下記のプロパティをイベント・インスタンスに追加します
     *
     * - original {Events} - Rate Events instance
     * - y {number} - scroll top
     * - height {number} - window height
     * - width {number} - window width
     * - bottom {number} - window bottom 位置 (y + height)
     * - previous {number} - 前回の scroll top
     * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
     * - wide {boolean} - width が 768 以上の時に true
     * - changed {boolean} - scroll top が前回と変わっていたら true
     *
     * @param {?Events} event {@link Rate.UPDATE} Events instance
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(event) {
      // @type {number} - scroll top
      var y = _Scroll2.default.y();
      // @type {number} - previous scroll top
      var previous = this.previous;
      // --- [window]
      // @type {number} - window width
      var width = window.innerWidth;
      // @type {number} - window height
      var height = window.innerHeight;
      // --- [body]
      var bodyWidth = document.body.clientWidth;
      var bodyHeight = document.body.clientHeight;
      // @type {boolean} - 移動したかを表します,
      var changed = event === null || previous !== y || height !== this.window.height || width !== this.window.width || bodyWidth !== this.body.width || bodyHeight !== this.body.height;
      // ----------------------------------------------
      // @type {ScrollEvents} - events
      var events = this.events.clone();
      // @type {Event} - Rate Events instance
      events.original = event;
      // @type {number} - scroll top
      events.y = y;
      // @type {number} - window height
      events.height = height;
      // @type {number} - window width
      events.width = width;
      // -- body
      events.bodyWidth = bodyWidth;
      events.bodyHeight = bodyHeight;
      // @type {number} - window bottom(y + height)
      events.bottom = y + height;
      // @type {boolean} - 移動したかを表します,
      // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします
      events.changed = changed;
      // @type {number} - 前回の y 位置
      events.previous = previous;
      // @type {number} - 移動量 +: down, -: up
      events.moving = y - previous;
      // event fire
      // console.log('Resizing.onUpdate', events);
      this.dispatch(events);
      // ----------------------------------------------
      this.window.width = width;
      this.window.height = height;
      this.body.width = bodyWidth;
      this.body.height = bodyHeight;
      // save scroll top -> previous
      this.previous = y;
      // // 移動量 0 の時は rate 監視を停止する
      // if (!changed) {
      //   this.unwatch();
      // }
    }
  }]);

  return Resizing;
}(_Scrolling3.default);

Resizing.UPDATE = 'resizingUpdate';
exports.default = Resizing;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/22 - 19:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link CriOS}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link CriOS}
 * @since 0.4.2
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/crios\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  // array
  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !isNaN(int);
  });
  _browsers.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  var option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  _browsers.major = major;
  _browsers.version = parseFloat(major + '.' + minor + build + option);
  _browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link CriOS}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var ua = _devices2.default.ua;
  var crios = !!ua.match(/crios/i);
  _browsers.crios = crios;
  if (crios) {
    version();
  }
};

/**
 * iOS Chrome detector
 * @since 0.4.2
 */

var CriOS = function () {
  function CriOS() {
    _classCallCheck(this, CriOS);
  }

  _createClass(CriOS, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Chrome 判定
     * @returns {boolean} true: iOS Chrome
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.crios;
    }
    /**
     * CriOS Browser version
     * @returns {number} CriOS version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * CriOS Browser major version
     * @returns {number} CriOS major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * CriOS Browser version `major.minor.build`
     * @returns {string} CriOS version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return CriOS;
}();

exports.default = CriOS;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/25 - 16:45
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link Edge}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link Edge}
 * @since 0.4.2
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/edge\/(\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  var versions = numbers.map(function (number, index) {
    var int = parseInt(number, 10);
    if (index <= 3) {
      return isNaN(int) ? 0 : int;
    }
    return null;
  });
  _browsers.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  var option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  _browsers.major = major;
  _browsers.version = parseFloat(major + '.' + minor + build + option);
  _browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link Edge}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var ua = _devices2.default.ua;
  var edge = !!ua.match(/edge/i);
  _browsers.edge = edge;
  if (edge) {
    version();
  }
};

/**
 * Edge detector
 * @since 0.4.2
 */

var Edge = function () {
  function Edge() {
    _classCallCheck(this, Edge);
  }

  _createClass(Edge, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * Edge 判定
     * @returns {boolean} true: Edge
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.edge;
    }
    /**
     * Edge Browser version
     * @returns {number} Edge version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Edge Browser major version
     * @returns {number} Edge major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Edge Browser version `major.minor.build`
     * @returns {string} Edge version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Edge;
}();

exports.default = Edge;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(5)(function(){
  return Object.defineProperty(__webpack_require__(53)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(56)(false)
  , IE_PROTO     = __webpack_require__(57)('IE_PROTO');

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

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(25)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(18)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(32)
  , $iterCreate    = __webpack_require__(127)
  , setToStringTag = __webpack_require__(31)
  , getPrototypeOf = __webpack_require__(39)
  , ITERATOR       = __webpack_require__(4)('iterator')
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

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(23)
  , toIndex  = __webpack_require__(30)
  , toLength = __webpack_require__(8);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(6).f
  , create      = __webpack_require__(38)
  , redefineAll = __webpack_require__(26)
  , ctx         = __webpack_require__(15)
  , anInstance  = __webpack_require__(27)
  , defined     = __webpack_require__(19)
  , forOf       = __webpack_require__(46)
  , $iterDefine = __webpack_require__(87)
  , step        = __webpack_require__(86)
  , setSpecies  = __webpack_require__(44)
  , DESCRIPTORS = __webpack_require__(9)
  , fastKey     = __webpack_require__(42).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(33)
  , gOPS     = __webpack_require__(48)
  , pIE      = __webpack_require__(41)
  , toObject = __webpack_require__(23)
  , IObject  = __webpack_require__(55)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function(){
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

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll       = __webpack_require__(26)
  , getWeak           = __webpack_require__(42).getWeak
  , anObject          = __webpack_require__(2)
  , isObject          = __webpack_require__(3)
  , anInstance        = __webpack_require__(27)
  , forOf             = __webpack_require__(46)
  , createArrayMethod = __webpack_require__(40)
  , $has              = __webpack_require__(7)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN     = __webpack_require__(37)
  , gOPS     = __webpack_require__(48)
  , anObject = __webpack_require__(2)
  , Reflect  = __webpack_require__(1).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(28)
  , defined   = __webpack_require__(19);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(3)
  , cof      = __webpack_require__(29)
  , MATCH    = __webpack_require__(4)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(3)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(33)
  , toIObject = __webpack_require__(12)
  , isEnum    = __webpack_require__(41).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(8)
  , repeat   = __webpack_require__(95)
  , defined  = __webpack_require__(19);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Events = __webpack_require__(14);

var _Events2 = _interopRequireDefault(_Events);

var _Polling2 = __webpack_require__(75);

var _Polling3 = _interopRequireDefault(_Polling2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


// tick


/**
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
 * @example
 * // 1sec interval
 * const rate = new Rate(Rate.Rate_60);
 * const update = () => {
 *  // code here, something do
 * };
 * rate.on(Rate.UPDATE, update);
 * rate.start();
 */
var Rate = function (_Polling) {
  _inherits(Rate, _Polling);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * 固定値フレームレート毎に UPDATE イベントを発生させます
   * @param {number} [rateValue=Rate.RATE_5] fps, 固定値以外設定できません
   */

  /**
   * fps 1 基準値
   * @type {number}
   */

  /**
   * fps 3 基準値
   * @type {number}
   */

  /**
   * fps 5 基準値
   * @type {number}
   */

  /**
   * fps 10 基準値
   * @type {number}
   */

  /**
   * fps 15 基準値
   * @type {number}
   */

  /**
   * fps 30 基準値
   * @type {number}
   */
  function Rate() {
    var rateValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Rate.RATE_5;

    _classCallCheck(this, Rate);

    // @type {Events}
    var _this = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, 1000 / 60));
    // 60fps で polling を行う


    var events = new _Events2.default(Rate.UPDATE, _this, _this);
    // 設定可能な rate list
    var rates = [Rate.RATE_60, Rate.RATE_30, Rate.RATE_20, Rate.RATE_15, Rate.RATE_12, Rate.RATE_10, Rate.RATE_6, Rate.RATE_5, Rate.RATE_4, Rate.RATE_3, Rate.RATE_2, Rate.RATE_1];
    /**
     * Rate 通知 Events instance
     * @type {Events}
     */
    _this.events = events;
    /**
     * 許容可能な rate
     * @type {Array<number>}
     */
    _this.rates = rates;
    /**
     * rate count, update 毎にカウントアップします<br>
     * 不正値の時は `Rate.RATE_5` を使用します
     * @type {number}
     */
    _this.count = 0;
    // let rate = this.validate(rateValue) ? rateValue : Rate.RATE_5;
    /**
     * rate 値
     * @type {?number}
     * @default Rate.RATE_5
     */
    _this.rate = _this.validate(rateValue) ? rateValue : Rate.RATE_5;
    return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * rate 値を設定します
   * - 正常値: `this.rate` 更新, value を返します
   * - 不正値: `this.rate` 更新しません, null を返します
   * @param {number} value rate 値
   * @returns {?number} 正しい rate は設定値を不正な時は null を返します
   */

  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * フレームレート毎に発生するイベント - rateUpdate
   * @event UPDATE
   * @type {string}
   */

  /**
   * fps 2 基準値
   * @type {number}
   */

  /**
   * fps 4 基準値
   * @type {number}
   */

  /**
   * fps 6 基準値
   * @type {number}
   */

  /**
   * fps 12 基準値
   * @type {number}
   */

  /**
   * fps 20 基準値
   * @type {number}
   */

  // ----------------------------------------
  // CONST
  // ----------------------------------------
  /**
   * fps 60 基準値
   * @type {number}
   */


  _createClass(Rate, [{
    key: 'setRate',
    value: function setRate(value) {
      if (this.validate(value)) {
        this.rate = value;
        return value;
      }
      return null;
    }
    /**
     * 正規な rate 値かをチェックします
     * @param {number} rate 対象 rate
     * @returns {boolean} 正しいと true を返します
     */

  }, {
    key: 'validate',
    value: function validate(rate) {
      return this.rates.indexOf(rate) !== -1;
    }
    /**
     * fps 基準値を設定します
     * @throws {Error} 引数 rate が設定可能値以外の時に例外エラーが発生します
     * @param {number} rate fps 基準値, <br>
     * RATE_60, RATE_30, RATE_20, RATE_15, RATE_12, RATE_10, <br>
     * RATE_6, RATE_5, RATE_4, RATE_3, RATE_2, RATE_1 の何れかが必須です
     * @returns {boolean} rate 設定に成功すると true を返します
     */

  }, {
    key: 'change',
    value: function change(rate) {
      this.setRate(rate);
      return this.start();
    }
    /**
     * {@link Polling}.UPDATE event handler
     *
     * count property を `+1` 加算後設定 rate で割り算し余りが `0` の時にイベント Rate.UPDATE を発生させます
     * @returns {boolean} Rate.UPDATE event が発生すると true を返します
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate() {
      // 余りが 0 の時にイベントを発火します
      this.count += 1;
      var reminder = this.count % this.rate;
      if (reminder === 0) {
        this.count = 0;
        this.fire(this.updateEvents(0, 0));
        return true;
      }
      return false;
    }
  }]);

  return Rate;
}(_Polling3.default);

Rate.RATE_60 = 1;
Rate.RATE_30 = 2;
Rate.RATE_20 = 3;
Rate.RATE_15 = 4;
Rate.RATE_12 = 5;
Rate.RATE_10 = 6;
Rate.RATE_6 = 10;
Rate.RATE_5 = 12;
Rate.RATE_4 = 15;
Rate.RATE_3 = 20;
Rate.RATE_2 = 30;
Rate.RATE_1 = 60;
Rate.UPDATE = 'rateUpdate';
exports.default = Rate;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _CycleEvents = __webpack_require__(232);

var _CycleEvents2 = _interopRequireDefault(_CycleEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

// import Events from '../event/Events';

// tick/events


/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
var singletonSymbol = Symbol('singleton instance');
/**
 * singleton instance, nullable
 * @type {?Cycle}
 * @private
 */
var instance = null;

/**
 * <p>requestAnimationFrame を使用しループイベントを発生させます</p>
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const loop = Cycle.factory();
 * const update = () => {
 *  // code here, something do
 * };
 * loop.on(Cycle.UPDATE, update);
 * loop.start();
 * ```
 *
 * <p>requestAnimationFrame は tab が active(focus) な時のみ発生します</p>
 */

var Cycle = function (_EventDispatcher) {
  _inherits(Cycle, _EventDispatcher);

  _createClass(Cycle, null, [{
    key: 'factory',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * Cycle instance を singleton を保証し作成します
     * @returns {Cycle} Cycle instance を返します
     */
    value: function factory() {
      if (instance === null) {
        instance = new Cycle(singletonSymbol);
      }
      return instance;
    }
    // ---------------------------------------------------
    //  CONSTRUCTOR
    // ---------------------------------------------------
    /**
     * singleton です
     * @param {Symbol} checkSymbol singleton を保証するための private instance
     * @returns {Cycle} singleton instance を返します
     */

    // ---------------------------------------------------
    //  CONSTANT / EVENT
    // ---------------------------------------------------
    /**
     * requestAnimationFrame 毎に発生するイベント - cycleUpdate
     * @event UPDATE
     * @type {string}
     */

  }]);

  function Cycle(checkSymbol) {
    var _ret2;

    _classCallCheck(this, Cycle);

    // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {
      throw new Error('don\'t use new, instead use static factory method.');
    }
    // instance 作成済みかをチェックし instance が null の時 this を設定します
    if (instance !== null) {
      var _ret;

      return _ret = instance, _possibleConstructorReturn(_this, _ret);
    }

    // -------------------------------
    // onetime setting
    /**
     * Cycle.UPDATE Events instance
     * @type {Events}
     */
    var _this = _possibleConstructorReturn(this, (Cycle.__proto__ || Object.getPrototypeOf(Cycle)).call(this));

    _this.events = new _CycleEvents2.default(Cycle.UPDATE, _this, _this);
    /**
     * bound update requestAnimationFrame callback
     * @type {function}
     */
    _this.onUpdate = _this.onUpdate.bind(_this);
    /**
     * requestAnimationFrame ID
     * @type {number}
     */
    _this.id = 0;
    // instance 作成時に自動スタートさせる
    _this.start(checkSymbol);
    // 設定済み instance を返します
    return _ret2 = _this, _possibleConstructorReturn(_this, _ret2);
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame) を開始します
   * @private
   * @param {Symbol} checkSymbol inner method 保証する inner Symbol
   */


  _createClass(Cycle, [{
    key: 'start',
    value: function start(checkSymbol) {
      // checkSymbol と singleton が等価かをチェックします
      if (checkSymbol !== singletonSymbol) {
        throw new Error('start is private method, dont call this.');
      }
      this.onUpdate();
    }
    /**
     * loop(cancelAnimationFrame) を止めます
     * @param {number} [id] requestAnimationFrame id を使い cancelAnimationFrame をします
     */

  }, {
    key: 'stop',
    value: function stop() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;

      cancelAnimationFrame(id);
    }
    // ----------------------------------------
    // PRIVATE METHOD
    // ----------------------------------------
    /**
     * loop(requestAnimationFrame)コールバック関数<br>Cycle.UPDATE event を発火します
     * @returns {number} requestAnimationFrame ID
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate() {
      // @type {number} - requestAnimationFrame id
      var id = requestAnimationFrame(this.onUpdate);
      this.id = id;

      // @type {Events} - events
      var events = this.events;
      events.id = id;
      // event fire
      this.dispatch(events);
      return id;
    }
  }]);

  return Cycle;
}(_EventDispatcher3.default);

Cycle.UPDATE = 'cycleUpdate';
exports.default = Cycle;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/06/02 - 15:42
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * {@link Polling} Events
 */
var PollingEvents = function (_Events) {
  _inherits(PollingEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function PollingEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, PollingEvents);

    // ---
    /**
     * polling event 発生時間
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (PollingEvents.__proto__ || Object.getPrototypeOf(PollingEvents)).call(this, type, currentTarget, target));

    _this.begin = 0;
    /**
     * 現在時間 - Date.now
     * @type {number}
     */
    _this.present = 0;
    /**
     * イベント間隔(ms)
     * @type {number}
     */
    _this.interval = 0;
    return _this;
  }

  return PollingEvents;
}(_Events3.default);

exports.default = PollingEvents;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/29 - 22:06
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 衝突判定を行います
 */
var Hit = function () {
  function Hit() {
    _classCallCheck(this, Hit);
  }

  _createClass(Hit, null, [{
    key: "test",

    /**
     * element と window.top(0) window.bottom(height) のヒットテストを行います
     * @param {number} height 衝突対象物の高さ window.innerHeight
     * @param {ClientRect|Object} offset 比較対象物の element ClientRect または同等の Object
     * @returns {{
     *  top: boolean,
     *  bottom: boolean,
     *  contain: boolean,
     *  include: boolean,
     *  result: boolean
     * }} hit check object を返します
     */
    value: function test(height, offset) {
      // hit test
      var hit = {
        result: false,
        top: false,
        bottom: false,
        contain: false,
        include: false
      };

      // top
      if (offset.top <= height && offset.top >= 0) {
        hit.top = true;
      }

      // bottom
      if (offset.bottom <= height && offset.bottom >= 0) {
        hit.bottom = true;
      }

      // contain check を行います
      if (offset.top <= 0 && offset.bottom >= height) {
        hit.contain = true;
      }

      // include check を行います
      if (offset.top >= 0 && offset.top <= height && offset.bottom >= 0 && offset.bottom <= height) {
        hit.include = true;
      }
      // return
      // return hit.top || hit.bottom || hit.contain || hit.include;
      hit.result = hit.top || hit.bottom || hit.contain || hit.include;
      return hit;
    }
  }]);

  return Hit;
}();

exports.default = Hit;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _TouchingEvents = __webpack_require__(234);

var _TouchingEvents2 = _interopRequireDefault(_TouchingEvents);

var _Vectors = __webpack_require__(76);

var _Vectors2 = _interopRequireDefault(_Vectors);

var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

var _Can = __webpack_require__(107);

var _Can2 = _interopRequireDefault(_Can);

var _Android = __webpack_require__(77);

var _Android2 = _interopRequireDefault(_Android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016/10/08
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2015 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * f
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// event


// util


// device


// device/os


// // touchevent 3rd argument
// /**
//  * addEventListener 第三引数 - { passive: true } | false
//  * {@link Touching}
//  * @private
//  * @type {*}
//  * @since 0.3.2
//  */
// const event3rd = Can.passive() ? { passive: true } : false;


/**
 * Touch event を監視し y方向移動が `threshold` 以内の時に `TOUCH` event を発火します
 */
var Touching = function (_EventDispatcher) {
  _inherits(Touching, _EventDispatcher);

  _createClass(Touching, null, [{
    key: 'scrolling',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * y 方向移動が threshold 以内か判定します
     * @param {Vectors} pointA スタートポイント(Vectors)
     * @param {Vectors} pointB エンドポイント(Vectors)
     * @param {number} threshold 閾値
     * @returns {boolean} true の時は閾値以上なのでスクロール判定になります
     */

    /**
     * touchmove event type - touchingMove
     * @constant MOVE
     * @type {string}
     */

    /**
     * touchend event type - touchingEnd
     * @constant END
     * @type {string}
     */

    /**
     * addEventListener 第三引数 - { passive: true } | false
     * {@link Touching}
     * @private
     * @type {*}
     * @since 0.3.2
     */
    value: function scrolling(pointA, pointB, threshold) {
      var y = pointA.betweenY(pointB);
      // 正数値にし閾値と比較
      return Math.abs(y) >= threshold;
    }
    /**
     * MouseEvent|TouchEvent から pageX / pageY 座標を取得します
     * @param {Event|MouseEvent|TouchEvent} event down / move / up event object
     * @returns {{x: number, y: number}} pageX / pageY 座標を返します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/changedTouches
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
     */

    /**
     * touch event type - touchingTouch
     * @constant TOUCH
     * @type {string}
     */

    /**
     * touchcancel event type - touchingCancel
     * @constant CANCEL
     * @type {string}
     */

    // ---------------------------------------------------
    //  CONSTANT / EVENT
    // ---------------------------------------------------
    /**
     * touchstart event type - touchingStart
     * @constant START
     * @type {string}
     */

  }, {
    key: 'point',
    value: function point(event) {
      var x = event.pageX;
      var y = event.pageY;

      // event.pageX / pageY があればそのまま値を返します
      // Android で pageX / pageY 存在しても 0, 0 しか返さない端末あり
      if (_Type2.default.number(x) && _Type2.default.number(y) && x !== 0 && y !== 0) {
        return { x: x, y: y };
      }

      // event.pageX / pageY がない時は TouchEvent の changedTouches から取得します
      // touch event
      // @type {TouchList}
      var touches = event.changedTouches || event.touches;
      // touches が取得できない時は 0 をセットし返します
      if (!_Type2.default.exist(touches) || touches.length === 0) {
        return { x: 0, y: 0 };
      }

      // changedTouches list の先頭データを取り出し pageX / pageY を取得します
      // @type {Touch}
      var touch = touches[0];
      return { x: touch.pageX, y: touch.pageY };
    }
    // ---------------------------------------------------
    //  CONSTRUCTOR
    // ---------------------------------------------------
    /**
     * 処理対象 element などを保存します
     * @param {Element} element 処理対象 Element
     * @param {boolean} [canceling=false] touchmove 中に `preventDefault` を行うフラッグ
     * false の時は {@link Can.passive} を調べ可能なら `{ passive: true }` します - since 0.3.2
     * @param {number} [threshold=10] y 方向閾値
     */

  }]);

  function Touching(element) {
    var canceling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Touching);

    /**
     * 処理対象 Element
     * @type {Element}
     */
    var _this = _possibleConstructorReturn(this, (Touching.__proto__ || Object.getPrototypeOf(Touching)).call(this));

    _this.element = element;
    /**
     * touchmove 中に `preventDefault` を行うかのフラッグ
     * @type {boolean}
     * @default false
     */
    _this.canceling = canceling;
    /**
     * y 方向閾値, default: 10px
     * @type {number}
     * @default 10
     */
    _this.threshold = threshold;
    /**
     * bound onStart
     * @type {function}
     */
    _this.onStart = _this.onStart.bind(_this);
    /**
     * bound onMove
     * @type {function}
     */
    _this.onMove = _this.onMove.bind(_this);
    /**
     * bound onEnd
     * @type {function}
     */
    _this.onEnd = _this.onEnd.bind(_this);
    /**
     * bound onCancel
     * @type {function}
     */
    _this.onCancel = _this.onCancel.bind(_this);
    /**
     * bound onBlur
     * @type {function}
     */
    _this.onBlur = _this.onBlur.bind(_this);
    /**
     * 位置管理を行う Vectors instance を含む object
     * @type {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
     */
    _this.vectors = {
      start: new _Vectors2.default(),
      end: new _Vectors2.default(),
      moving: [].slice(0)
    };
    /**
     * TouchEvent listener 3rd argument, option | useCapture
     * @type {boolean}
     * @since 0.3.2
     */
    _this.eventOption = canceling ? false : Touching.event3rd;
    /**
     * [native code] - document.body
     * @type {HTMLElement}
     */
    _this.body = document.body;
    /**
     * timer ID
     * - kitkat - touchend 強制実行
     * @type {{kitkat: number}}
     * @since v0.4.4
     */
    _this.timer = {
      kitkat: 0
    };
    /**
     * Android 4.3 ~ 4.4 && standard browser (webview) flag
     * @type {boolean}
     */
    _this.kitkat = _Android2.default.kitKat();
    return _this;
  }
  // ---------------------------------------------------
  //  METHOD
  // ---------------------------------------------------
  // event handlers
  // ---------------------------------------------------
  /**
   * touchstart event handler
   * @param {Event|TouchEvent} event touchstart event
   * @returns {void}
   */


  _createClass(Touching, [{
    key: 'onStart',
    value: function onStart(event) {
      // event unbind <- 二重 bind にならないように
      this.dispose();
      // vectors を初期化
      this.reset();
      // 現在 position を保存
      var vectors = this.vectors;
      var point = Touching.point(event);
      vectors.start.update(point.x, point.y);
      vectors.moving.push(vectors.start);

      // キャンセル event 監視を開始
      var eventOption = this.eventOption;
      var body = this.body;
      body.addEventListener('touchend', this.onEnd, eventOption);
      body.addEventListener('touchmove', this.onMove, eventOption);
      body.addEventListener('touchcancel', this.onCancel, eventOption);

      // Touching.START 発火
      this.dispatch(new _TouchingEvents2.default(Touching.START, this, event, vectors.start));
    }
    /**
     * touchmove event handler
     * @param {Event} event touchmove event
     * @returns {void}
     */

  }, {
    key: 'onMove',
    value: function onMove(event) {
      // console.log('Touching.onMove', event);
      var vectors = this.vectors;
      var movingArray = vectors.moving;

      // 現在 position
      var point = Touching.point(event);
      var position = new _Vectors2.default(point.x, point.y, Date.now());

      // 前回 position <- moving 配列最後
      var previous = movingArray.pop();
      // 戻す
      movingArray.push(previous);

      // scroll checked
      var scrolling = Touching.scrolling(position, previous, this.threshold);
      position.scrolling = scrolling;
      // 現在 position を配列後ろにセット
      movingArray.push(position);

      // global cancel と 閾値チェックで `preventDefault` を実行し scroll を止める
      if (this.canceling && !scrolling) {
        event.preventDefault();
      }

      // 移動量
      var between = position.between(previous);

      // Touching.MOVE 発火
      this.dispatch(new _TouchingEvents2.default(Touching.MOVE, this, event, position, between, scrolling));
      // kitkat(Android 4.3 ~ 4.4 && standard browser) - touchend 発火しないので check
      if (this.kitkat) {
        this.kitkatEnd(event);
      }
    }
    /**
     * Android 4.3 ~ 4.4 && standard browser - touchend 発火しない
     * `onEnd` を強制実行します
     * @param {Event} event touch event
     * @since v0.4.4
     */

  }, {
    key: 'kitkatEnd',
    value: function kitkatEnd(event) {
      var _this2 = this;

      clearTimeout(this.timer.kitkat);
      this.timer.kitkat = setTimeout(function () {
        _this2.onEnd(event);
      }, 32);
    }
    /**
     * touchend event handler
     * @param {Event} event touchend event
     * @returns {void}
     */

  }, {
    key: 'onEnd',
    value: function onEnd(event) {
      // console.log('Touching.onEnd', event);
      var vectors = this.vectors;

      // 現在 position
      var point = Touching.point(event);
      var position = new _Vectors2.default(point.x, point.y, Date.now());

      // 前回 position を touchstart 位置としチェックします
      var previous = vectors.start;
      var scrolling = Touching.scrolling(position, previous, this.threshold);
      position.scrolling = scrolling;

      // global cancel と 閾値チェックで `preventDefault` を実行し scroll を止める
      if (this.canceling && !scrolling) {
        event.preventDefault();
      }

      // 移動量
      var between = position.between(previous);

      // Touching.END 発火
      this.dispatch(new _TouchingEvents2.default(Touching.END, this, event, position, between, scrolling));

      // Touching.Touch 発火
      this.dispatch(new _TouchingEvents2.default(Touching.TOUCH, this, event, position, between, scrolling));
      // ---
      this.dispose();
    }
    /**
     * touchcancel event handler<br>
     * 処理をキャンセルします
     * @param {Event} event touchend event
     * @returns {boolean} 正常終了時に true を返します
     */

  }, {
    key: 'onCancel',
    value: function onCancel(event) {
      return this.abort(event);
    }
    /**
     * window.blur event handler<br>
     * 処理をキャンセルします
     * @param {Event} event window blur event
     * @returns {boolean} 正常終了時に true を返します
     */

  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      return this.abort(event);
    }
    // 処理
    // ---------------------------------------------------
    /**
     * touch event 監視を開始します
     * - `element`.ontouchstart
     * - window.onblur - cancel するため
     * @since 0.4.4
     */

  }, {
    key: 'start',
    value: function start() {
      this.stop();
      this.element.addEventListener('touchstart', this.onStart, this.eventOption);
      window.addEventListener('blur', this.onBlur, false);
    }
    /**
     * touch event 監視を停止します
     * @since 0.4.4
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.element.removeEventListener('touchstart', this.onStart);
      window.removeEventListener('blur', this.onBlur);
      this.dispose();
    }
    /**
     * @deprecated instead use `start`
     * 初期処理<br>
     * element への `touchstart` と<br>
     * window.blur event をそれぞれ bind します
     * @returns {void}
     */

  }, {
    key: 'init',
    value: function init() {
      // this.element.addEventListener('touchstart', this.onStart, this.eventOption);
      // window.addEventListener('blur', this.onBlur, false);
      this.start();
    }
    /**
     * touch event での処理をキャンセルし、設定値を初期値に戻します
     * @param {Event} event touch / window.onblur Event
     * @returns {boolean} 正常終了時に true を返します
     */

  }, {
    key: 'abort',
    value: function abort(event) {
      this.dispose();
      this.reset();
      this.dispatch(new _TouchingEvents2.default(Touching.CANCEL, this, event));
      return true;
    }
    /**
     * bind した event を unbind します
     * @returns {boolean} 正常終了時に true を返します
     */

  }, {
    key: 'dispose',
    value: function dispose() {
      var body = this.body;

      body.removeEventListener('touchend', this.onEnd);
      body.removeEventListener('touchmove', this.onMove);
      body.removeEventListener('touchcancel', this.onCancel);
      return true;
    }
    /**
     * 移動監視に使用した vectors instance を全て reset します
     * @returns {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
     * reset 後の vectors object を返します
     */

  }, {
    key: 'reset',
    value: function reset() {
      var vectors = this.vectors;
      vectors.start.reset();
      vectors.end.reset();
      vectors.moving = [].slice(0);

      return vectors;
    }
  }]);

  return Touching;
}(_EventDispatcher3.default);

Touching.event3rd = _Can2.default.passive() ? { passive: true } : false;
Touching.START = 'touchingStart';
Touching.END = 'touchingEnd';
Touching.CANCEL = 'touchingCancel';
Touching.MOVE = 'touchingMove';
Touching.TOUCH = 'touchingTouch';
exports.default = Touching;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/30 - 16:47
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * [native code] - document
 * @type {HTMLDocument}
 * @private
 * @static
 */
var document = self.document;
// /**
//  * CSS detector に使用する virtual CSSStyleDeclaration
//  * ```
//  * document.createElement('p').style
//  * ```
//  * @type {CSSStyleDeclaration}
//  * @private
//  * @static
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
//  */
// const style = document.createElement('p').style;
// /**
//  * vendor prefix list, CSS detector に使用します
//  * - '-webkit-',
//  * - '-moz-',
//  * - '-ms-',
//  * - '-o-',
//  * - ''
//  * @type {[string]}
//  * @private
//  * @static
//  */
// const vendors = [
//   '-webkit-',
//   '-moz-',
//   '-ms-',
//   '-o-',
//   '',
// ];

// /**
//  * CSS3 transition 可能フラッグ
//  * @type {boolean}
//  * @private
//  * @static
//  */
// const transition = vendors.some(prefix => typeof style[`${prefix}transition`] !== 'undefined');
// /**
//  * CSS3 transform 可能フラッグ
//  * @type {boolean}
//  * @private
//  * @static
//  */
// const transform = vendors.some(prefix => typeof style[`${prefix}transform`] !== 'undefined');

// /**
//  * touch event 使用可能フラッグ
//  * @type {boolean}
//  */
// const touch = 'ontouchstart' in document.documentElement;

// /**
//  * canvas detect flag
//  * @type {boolean}
//  */
// const canvas = !!window.CanvasRenderingContext2D;

// /**
//  * webgl detect flag
//  * @type {boolean}
//  */
// let webgl = false;
// if (canvas) {
//   try {
//     webgl = !!window.WebGLRenderingContext &&
//       !!document.createElement('canvas').getContext('experimental-webgl');
//   } catch (e) {
//     webgl = false;
//   }
// }

// /**
//  * addEventListener 第三引数 - { passive: true } : false するためのブラウザテスト・フラッグ
//  *
//  * TouchEvent#Using with addEventListener() and preventDefault()
//  * <pre>
//  * It's important to note that in many cases, both touch and mouse events get sent (in order to let non-touch-specific code still interact with the user). If you use touch events, you should call preventDefault() to keep the mouse event from being sent as well.
//  * The exception to this is Chrome, starting with version 56 (desktop, Chrome for android, and android webview), where the default value for touchstart and touchmove is true and calls to preventDefault() are not needed. To override this behavior, you simply set the passive option to false as shown in the example below. This change prevents the listener from blocking page rendering while a user is scrolling. A demo is available on the Google Developer site.
//  * </pre>
//  * @private
//  * @type {boolean}
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
//  * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
//  * @see https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html
//  * @since 0.3.2
//  */
// let supportsPassive = false;
// try {
//   const opts = Object.defineProperty({}, 'passive', {
//     get() {
//       supportsPassive = true;
//     },
//   });
//   window.addEventListener('test', null, opts);
// } catch (e) {
//   supportsPassive = false;
//   // console.warn('passive test', e);
// }

/**
 * 判定結果を保持します
 * @type {{transition: ?boolean, transform: ?boolean, touch: ?boolean, canvas: ?boolean, webgl: ?boolean, passive: ?boolean}}
 */
var can = {
  transition: null,
  transform: null,
  touch: null,
  canvas: null,
  webgl: null,
  passive: null
};

/**
 * CSS3 機能使用可能かを調べます
 * @example
 * if (Can.transition()) {
 *  // can CSS3 transition
 * }
 *
 * if (Can.transform()) {
 *  // can CSS3 transform
 * }
 */

var Can = function () {
  function Can() {
    _classCallCheck(this, Can);
  }

  _createClass(Can, null, [{
    key: 'transition',

    /**
     * CSS3 transition が使用可能かを調べます
     * @returns {?boolean} true: 使用可能
     */
    value: function transition() {
      if (can.transition === null) {
        var style = document.createElement('p').style;
        // eslint-disable-next-line max-len
        can.transition = Can.vendors.some(function (prefix) {
          return typeof style[prefix + 'transition'] !== 'undefined';
        });
      }
      return can.transition;
    }
    /**
     * CSS3 transform が使用可能かを調べます
     * @returns {?boolean} true: 使用可能
     */

    /**
     * vendor prefix list, CSS detector に使用します
     * - '-webkit-',
     * - '-moz-',
     * - '-ms-',
     * - '-o-',
     * - ''
     * @type {[string,string,string,string,string]}
     */

  }, {
    key: 'transform',
    value: function transform() {
      if (can.transform === null) {
        var style = document.createElement('p').style;
        // eslint-disable-next-line max-len
        can.transform = Can.vendors.some(function (prefix) {
          return typeof style[prefix + 'transform'] !== 'undefined';
        });
      }
      return can.transform;
    }
    /**
     * addEventListener 第三引数 - { passive: true } が使用できるかを調べます
     *
     * TouchEvent#Using with addEventListener() and preventDefault()
     * <pre>
     * It's important to note that in many cases, both touch and mouse events get sent (in order to let non-touch-specific code still interact with the user). If you use touch events, you should call preventDefault() to keep the mouse event from being sent as well.
     * The exception to this is Chrome, starting with version 56 (desktop, Chrome for android, and android webview), where the default value for touchstart and touchmove is true and calls to preventDefault() are not needed. To override this behavior, you simply set the passive option to false as shown in the example below. This change prevents the listener from blocking page rendering while a user is scrolling. A demo is available on the Google Developer site.
     * </pre>
     * @returns {?boolean} true: 使用可能
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     * @see https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html
     * @since 0.3.2
     */

  }, {
    key: 'passive',
    value: function passive() {
      if (can.passive === null) {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('test', null, opts);
        } catch (e) {
          supportsPassive = false;
          // console.warn('passive test', e);
        }
        can.passive = supportsPassive;
      }
      return can.passive;
    }
    /**
     * touch event 使用可能かを調べます
     * @returns {?boolean} true: 使用可能
     * @since 4.0.1
     */

  }, {
    key: 'touch',
    value: function touch() {
      if (can.touch === null) {
        can.touch = 'ontouchstart' in document.documentElement;
      }
      return can.touch;
    }
    /**
     * canvas 使用可能かを調べます
     * @returns {?boolean} true: canvas 使用可能
     * @since 4.0.1
     */

  }, {
    key: 'canvas',
    value: function canvas() {
      if (can.canvas === null) {
        can.canvas = !!window.CanvasRenderingContext2D;
      }
      return can.canvas;
    }
    /**
     * webgl 使用可能かを調べます
     * @returns {?boolean} true: webgl 使用可能
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat
     * @see https://qiita.com/tonkotsuboy_com/items/cdffcdd7bdccac371292
     * @since 4.0.1
     */

  }, {
    key: 'webgl',
    value: function webgl() {
      if (can.webgl === null) {
        var webgl = false;
        if (Can.canvas()) {
          var canvas = document.createElement('canvas');
          var webGLContext = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
          try {
            webgl = !!(window.WebGLRenderingContext && webGLContext && webGLContext.getShaderPrecisionFormat);
          } catch (e) {
            webgl = false;
          }
        }
        can.webgl = webgl;
      }
      return can.webgl;
    }
  }]);

  return Can;
}();

Can.vendors = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
exports.default = Can;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/08/28 - 16:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.props
 * {@link Windows}
 * @type {?object}
 */
var props = null;

/**
 * `userAgent` を解析します
 * {@link Windows}
 * @private
 */
var init = function init() {
  if (props) {
    return;
  }
  props = Object.assign({}, _devices2.default.props);
  var ua = _devices2.default.ua;
  var windows = !!ua.match(/windows/i);
  if (windows) {
    props.windows = true;
    props.phone = !!ua.match(/windows phone/i);
  }
};

/**
 * windows phone detector
 */

var Windows = function () {
  function Windows() {
    _classCallCheck(this, Windows);
  }

  _createClass(Windows, null, [{
    key: 'is',

    /**
     * windows OS
     * @returns {boolean} true; windows OS
     */
    value: function is() {
      init();
      return props.windows;
    }
    /**
     * windows phone
     * @returns {boolean} true: windows phone
     */

  }, {
    key: 'phone',
    value: function phone() {
      init();
      return props.phone;
    }
  }]);

  return Windows;
}();

exports.default = Windows;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollEvents2 = __webpack_require__(74);

var _ScrollEvents3 = _interopRequireDefault(_ScrollEvents2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/08/04 - 18:02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * {@link Resizing} Events
 */
var ResizingEvents = function (_ScrollEvents) {
  _inherits(ResizingEvents, _ScrollEvents);

  /**
   * {@link Resizing} Events
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   */
  function ResizingEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, ResizingEvents);

    // -----
    /**
     * body clientWidth
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (ResizingEvents.__proto__ || Object.getPrototypeOf(ResizingEvents)).call(this, type, currentTarget, target));

    _this.bodyWidth = 0;
    /**
     * body clientHeight
     * @type {number}
     */
    _this.bodyHeight = 0;
    return _this;
  }

  return ResizingEvents;
}(_ScrollEvents3.default);

exports.default = ResizingEvents;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scroll = __webpack_require__(51);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _Resizing = __webpack_require__(78);

var _Resizing2 = _interopRequireDefault(_Resizing);

var _ResizingEvents = __webpack_require__(109);

var _ResizingEvents2 = _interopRequireDefault(_ResizingEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/08/29 - 15:34
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// event


// event/events


/**
 * requestAnimationFrame が使えない奴のための resize 監視クラス
 * - {@link Scrolling}, {@link Resizing} class 代替します
 */
var NativeResizing = function (_EventDispatcher) {
  _inherits(NativeResizing, _EventDispatcher);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * events instance を準備します
   */
  function NativeResizing() {
    _classCallCheck(this, NativeResizing);

    // ------
    /**
     * Resizing event を準備します
     * @type {ScrollEvents}
     */
    var _this = _possibleConstructorReturn(this, (NativeResizing.__proto__ || Object.getPrototypeOf(NativeResizing)).call(this));

    _this.events = new _ResizingEvents2.default(_Resizing2.default.UPDATE, _this, _this);
    // console.log('Resizing events', this.events);
    /**
     * document.body size - clientWidth / clientHeight
     * @type {{width: number, height: number}}
     */
    _this.body = {
      width: -1,
      height: -1
    };
    /**
     * window innerWidth / innerHeight
     * @type {{width: number, height: number}}
     */
    _this.window = {
      width: -1,
      height: -1
    };
    /**
     * 前回スクロールトップ値
     * @type {number}
     */
    _this.previous = -1;
    /**
     * 500ms timeout timer id
     * @type {number}
     */
    _this.timer = 0;
    /**
     * bind onUpdate - scroll / resize / timer handler
     * @type {function}
     */
    _this.onUpdate = _this.onUpdate.bind(_this);
    return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 監視を開始します
   * - 常時監視します - document.body.onresize が作動しないため
   * @returns {*} method chain 可能なように instance を返します
   */


  _createClass(NativeResizing, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      this.stop();
      window.addEventListener('scroll', this.onUpdate, false);
      window.addEventListener('resize', this.onUpdate, false);
      this.timer = setTimeout(function () {
        _this2.onUpdate();
      }, 500);
      return this;
    }
    /**
     * 監視を停止します
     * @returns {*} method chain 可能なように instance を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      clearTimeout(this.timer);
      window.removeEventListener('scroll', this.onUpdate);
      window.removeEventListener('resize', this.onUpdate);
      return this;
    }
    /**
     * 下記のプロパティをイベント・インスタンスに追加します
     * - original {Events} - Rate Events instance
     * - y {number} - scroll top
     * - height {number} - window height
     * - width {number} - window width
     * - bottom {number} - window bottom 位置 (y + height)
     * - previous {number} - 前回の scroll top
     * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
     * - wide {boolean} - width が 768 以上の時に true
     * - changed {boolean} - scroll top が前回と変わっていたら true
     * @param {?Event} [event] scroll / resize Event
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(event) {
      // @type {number} - scroll top
      var y = _Scroll2.default.y();
      // @type {number} - previous scroll top
      var previous = this.previous;
      // --- [window]
      // @type {number} - window width
      var width = window.innerWidth;
      // @type {number} - window height
      var height = window.innerHeight;
      // --- [body]
      var bodyWidth = document.body.clientWidth;
      var bodyHeight = document.body.clientHeight;
      // @type {boolean} - 移動したかを表します,
      var changed = event === null || previous !== y || height !== this.window.height || width !== this.window.width || bodyWidth !== this.body.width || bodyHeight !== this.body.height;
      // ----------------------------------------------
      // @type {ScrollEvents} - events
      var events = this.events.clone();
      // @type {Event} - Rate Events instance
      events.original = event;
      // @type {number} - scroll top
      events.y = y;
      // @type {number} - window height
      events.height = height;
      // @type {number} - window width
      events.width = width;
      // -- body
      events.bodyWidth = bodyWidth;
      events.bodyHeight = bodyHeight;
      // @type {number} - window bottom(y + height)
      events.bottom = y + height;
      // @type {boolean} - 移動したかを表します,
      // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします
      events.changed = changed;
      // @type {number} - 前回の y 位置
      events.previous = previous;
      // @type {number} - 移動量 +: down, -: up
      events.moving = y - previous;
      // event fire
      // console.log('Resizing.onUpdate', events);
      this.dispatch(events);
      // ----------------------------------------------
      this.window.width = width;
      this.window.height = height;
      this.body.width = bodyWidth;
      this.body.height = bodyHeight;
      // save scroll top -> previous
      this.previous = y;
    }
    /**
     * 強制 update
     */

  }, {
    key: 'fire',
    value: function fire() {
      this.onUpdate(null);
    }
  }]);

  return NativeResizing;
}(_EventDispatcher3.default);

exports.default = NativeResizing;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

// util


var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// built-in function
// Safari, IE はサポートしていないのでライブラリを使用すること
/**
 * fetch [native code]
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @type {fetch}
 * @private
 * @static
 */
var fetch = self.fetch;
/**
 * fetch request instance を作成します
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @type {Request}
 * @private
 * @static
 */
var Request = self.Request;

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
 * thunk friendly - ES2017 async / await するために
 * - fetch Promise を返すように変更
 * - resolve / reject argument をオプション
 * - fetch.then から result / error を return
 *
 * [caution] resolve / reject を使用しない場合は {@link AjaxThunk} を使用する方が効率的です
 * @example
 * const ajax = new Ajax();
 * // async / await 1
 * async function request() {
 *  const json = await thunk.start('https://jsonplaceholder.typicode.com/posts');
 *  const pre = document.getElementById('pre');
 *  pre.innerHTML = JSON.stringify(json);
 * }
 * request();
 * // async / await 2
 * async function request() {
 *  return await thunk.start('https://jsonplaceholder.typicode.com/posts');
 * }
 * request()
 *  .then(json => {
 *    const pre = document.getElementById('pre');
 *    pre.innerHTML = JSON.stringify(json);
 *  });
 * // resolve / reject
 * const resolve = (json) => {
 *  const pre = document.getElementById('pre');
 *  pre.innerHTML = JSON.stringify(json);
 * };
 * const reject = (error) => {};
 * const ajax = new Ajax(resolve, reject);
 * ajax.start('https://jsonplaceholder.typicode.com/posts');
 *
 * @see http://caniuse.com/#feat=fetch
 * @see https://github.com/github/fetch
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * @see http://getmesh.io/Blog/Make%20AJAX-Requests%20Great%20Again
 * @since 0.3.4 - Thunk friendly
 */

var Ajax = function () {
  _createClass(Ajax, [{
    key: 'option',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * <p>fetch API へ送るオプションを作成します</p>
     *
     * 必ず設定します
     * - method: GET, POST, PUT, DELETE...etc
     * - cache: 'no-cache'
     * - credentials: 'same-origin'
     *
     * headers, formData は存在すれば option に追加されます
     *
     * ```
     * var myRequest = new Request(input, init);
     * ```
     * <blockquote>
     * リクエストに適用するカスタム設定を含むオプションオブジェクト。設定可能なオプションは：
     *   method：リクエストメソッド、たとえば GET、POST。
     *   headers：Headers オブジェクトか ByteString を含む、リクエストに追加するヘッダー。
     *   body： リクエストに追加するボディー：Blob か BufferSource、FormData、URLSearchParams、USVString オブジェクトが使用できる。リクエストが GET か HEAD メソッドを使用している場合、ボディーを持てないことに注意。
     *   mode：リクエストで使用するモード。たとえば、cors か no-cors、same-origin。既定値は cors。Chrome では、47 以前は no-cors が既定値であり、 same-origin は 47 から使用できるようになった。
     *   credentials：リクエストで使用するリクエスト credential：omit か same-origin、include が使用できる。 既定値は omit。Chrome では、47 以前は same-origin が既定値であり、include は 47 から使用できるようになった。
     *   cache：リクエストで使用する cache モード：default か no-store、reload、no-cache、force-cache、only-if-cached が設定できる。
     *   redirect：使用するリダイレクトモード：follow か error、manual が使用できる。Chrome では、47 以前は既定値が follow であり、manual は 47 から使用できるようになった。
     *   referrer：no-referrer か client、URL を指定する USVString。既定値は client。
     * </blockquote>
     * @param {string|USVString|Request} path Ajax request path
     * @param {string} method GET, POST, PUT, DELETE...etc request method
     * @param {Headers|Object|null} headers Headers option
     * @param {FormData|null} formData 送信フォームデータオプション
     * @returns {*|Request} fetch API へ送る Request instance を返します
     *
     * @see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
     */
    value: function option(path, method, headers, formData) {
      // request option
      var option = Object.assign({}, this.props);
      // const option = Object.create({
      //   method,
      //   cache: 'no-cache',
      //   // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      //   credentials: 'same-origin',
      // });
      option.method = method;

      // headers option
      if (_Type2.default.exist(headers)) {
        option.headers = headers;
      }

      // body へ FormData をセット
      if (_Type2.default.exist(formData)) {
        option.body = formData;
      }

      // https://developer.mozilla.org/ja/docs/Web/API/Request
      return new Request(path, option);
    }
    // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * request 可能 / 不可能 flag を true に設定します
     * @param {?function} [resolve=null] Promise success callback
     * @param {?function} [reject=null] Promise fail callback
     */

  }]);

  function Ajax() {
    var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Ajax);

    /**
     * request 可能 / 不可能 flag, true: 実行可能
     * @type {boolean}
     */
    this.can = true;
    /**
     * Promise success callback
     * @type {Function}
     */
    this.resolve = resolve;
    /**
     * Promise fail callback
     * @type {Function}
     */
    this.reject = reject;
    /**
     * `Request` constructor に渡す option
     * - method: GET|POST|PUT|DELETE...
     * - cache: no-cache
     * - credentials: same-origin
     * @type {{method: ?string, cache: string, credentials: string}}
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
     */
    this.props = {
      method: null,
      cache: 'no-cache',
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      credentials: 'same-origin'
    };
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * <p>Ajax request 開始します</p>
   * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
   * true の時は false にしリクエストを開始します</p>
   *
   * from v0.3.4
   * - resolve, reject 関数確認後実行します
   * - Promise instance を返します
   * - json / error を返します
   *
   * @param {string} path Ajax request path
   * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
   * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
   * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
   * @return {Promise} ajax request を開始し fetch Promise 返します
   */


  _createClass(Ajax, [{
    key: 'start',
    value: function start(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';

      var _this = this;

      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      // ajax request 開始
      if (!this.can) {
        throw new Error('Ajax request busy: ' + this.can);
      }

      // flag off
      this.disable();

      // @type {Request} Request instance
      var request = this.option(path, method, headers, formData);

      // fetch start
      return fetch(request)
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
        // complete event fire
        if (_Type2.default.method(_this.resolve)) {
          _this.resolve(json);
        }
        // flag true
        _this.enable();
        return json;
      })
      // @param {Error} - Ajax something error
      .catch(function (error) {
        // error event fire
        if (_Type2.default.method(_this.reject)) {
          _this.reject(error);
        }
        // flag true
        _this.enable();
        return error;
      });
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
  }]);

  return Ajax;
}();

exports.default = Ajax;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016/11/22 - 13:26
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Text = __webpack_require__(52);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * CSS short hand pattern を管理します
 */
var Patterns = function () {
  function Patterns() {
    _classCallCheck(this, Patterns);
  }

  _createClass(Patterns, null, [{
    key: 'settings',

    /**
     * パターン調査対象の CSS class リスト
     * ```
     * {
     *  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
     *  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
     *  'border-color': [
     *    'borderTopColor',
     *    'borderRightColor',
     *    'borderBottomColor',
     *    'borderLeftColor'],
     *  'border-style': [
     *    'borderTopStyle',
     *    'borderRightStyle',
     *    'borderBottomStyle',
     *    'borderLeftStyle'],
     *  'border-width': [
     *    'borderTopWidth',
     *    'borderRightWidth',
     *    'borderBottomWidth',
     *    'borderLeftWidth'],
     * }
     * ```
     * @returns {Object} パターン調査対象の CSS class list
     */
    value: function settings() {
      return {
        padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
        margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
        'border-color': ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
        'border-style': ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
        'border-width': ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth']
      };
    }
    /**
     * 引数 `str` が調査対象 className かを判定します
     * @param {string} str CSS className
     * @returns {boolean} 調査対象の時に true を返します
     */

  }, {
    key: 'match',
    value: function match(str) {
      // camel case を dash(hyphenation)へ変換します
      var key = _Text2.default.dash(str);
      // settings パターンキーと合致してるかを調査します
      return Object.keys(Patterns.settings()).indexOf(key) !== -1;
    }
    /**
     * 引数 `str` をキーにした操作対象のリストを取得します
     * @param {string} str CSS className
     * @returns {Array<string>|undefined} 引数 `str` をキーにした操作対象のリスト
     */

  }, {
    key: 'get',
    value: function get(str) {
      // camel case を dash(hyphenation)へ変換します
      var key = _Text2.default.dash(str);
      return Patterns.settings()[key];
    }
  }]);

  return Patterns;
}();

exports.default = Patterns;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016/10/06 - 21:52
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

// util


// css


var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

var _Text = __webpack_require__(52);

var _Text2 = _interopRequireDefault(_Text);

var _Patterns = __webpack_require__(112);

var _Patterns2 = _interopRequireDefault(_Patterns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Element の style を操作します
 */
var Style = function () {
  _createClass(Style, null, [{
    key: 'compute',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * element style を取得します,
     * [getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) を使用します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
     * @param {Object|Window} view Document.defaultView
     * @param {Element} element 操作対象 Element
     * @param {string} [property=''] 調査対象 CSS property name, 省略すると `CSSStyleDeclaration` 全セットを返します
     * @returns {CSSStyleDeclaration|CssStyle|string|undefined} style value を返します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
     */
    value: function compute(view, element) {
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var style = view.getComputedStyle(element, null);
      if (_Type2.default.exist(property)) {
        var props = property.replace(/([A-Z])/g, '-$1').toLowerCase();
        return style.getPropertyValue(props);
      }
      return style;
    }
    /**
     * CSS 設定値の short hand をパターン {@link Patterns} から探し返します
     * @param {Object|Window} view Document.defaultView
     * @param {Element} element 操作対象 Element
     * @param {Array<string>} patterns 調査対象 CSS property name の配列
     * @returns {CssStyle|string|undefined} style value を返します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
     */

  }, {
    key: 'shortHand',
    value: function shortHand(view, element, patterns) {
      var top = Style.compute(view, element, patterns[0]);
      var right = Style.compute(view, element, patterns[1]);
      var bottom = Style.compute(view, element, patterns[2]);
      var left = Style.compute(view, element, patterns[3]);
      if (!top && !right && !bottom && !left) {
        return undefined;
      } else if (top === bottom) {
        // top - bottom: same
        if (right === left) {
          // top - bottom: same
          if (top === right) {
            // right - left: same - all same
            return top;
          }
          // top-bottom, left-right
          return top + ' ' + right;
        }
        // separate 4
        return top + ' ' + right + ' ' + bottom + ' ' + left;
      } else if (right === left) {
        // top - bottom: different, left- right: same
        return top + ' ' + right + ' ' + bottom;
      }
      // separate 4
      return top + ' ' + right + ' ' + bottom + ' ' + left;
    }
    /**
     * 引数 `element` の css を書き換えます
     * @param {Element} element 操作対象 Element
     * @param {string} css `cssText` 設定する
     */

  }, {
    key: 'change',
    value: function change(element, css) {
      var style = element.style;
      style.cssText = css;
    }
    // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * 引数 element の初期 style 設定を保存し復元できるようにします
     * @param {?Element} element 操作対象 Element
     */

  }]);

  function Style(element) {
    _classCallCheck(this, Style);

    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
    // @type {string} - オリジナルの element.style.cssText を保持します
    var css = this.current();
    /**
     * 現在の inline CSS
     * @type {string}
     */
    this.css = css;
    /**
     * インスタンス作成時の inline CSS
     * @type {string}
     */
    this.original = css;
    // /**
    //  * インスタンス作成時の inline CSS を上書きします
    //  * @param {string} style 上書き用 CSS 設定
    //  * @returns {string} 上書きされた CSS
    //  */
    // this.update = (style) => {
    //   css = style;
    //   return style;
    // };
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * インスタンス作成時に保存した inline CSS を上書きします
   * @param {string} style 上書き用 CSS 設定
   * @returns {string} 上書きされた CSS
   */


  _createClass(Style, [{
    key: 'update',
    value: function update(style) {
      this.css = style;
      return style;
    }
    /**
     * style value を取得します
     * @param {string} [property=''] 調査する style property name
     * @return {string} style value を返します
     */

  }, {
    key: 'get',
    value: function get() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var element = this.element;
      var ownerDocument = element.ownerDocument;
      var defaultView = ownerDocument.defaultView;
      var style = Style.compute(defaultView, element, property);
      // firefox が css shorthand の取り扱いが違うので再度マッチテストする
      if (style === '' && property && _Patterns2.default.match(property)) {
        style = Style.shortHand(defaultView, element, _Patterns2.default.get(property));
      }
      return style;
    }
    /**
     * element へ css を設定します、設定済み css を上書きします
     * @param {string} property 設定する css property name
     * @param {string} value 設定する css value
     * @return {boolean} 変更されると true を返します
     */

  }, {
    key: 'set',
    value: function set(property, value) {
      // 存在チェック
      var element = this.element;
      if (!_Type2.default.exist(element)) {
        return false;
      }
      // 存在する時のみ処理を行います
      var prop = _Text2.default.camel(property);
      element.style[prop] = value;

      return true;
    }
    /**
     * element の inline style(style.cssText) を取得します
     * @return {string} style.cssText を返します
     */

  }, {
    key: 'current',
    value: function current() {
      var element = this.element;
      if (_Type2.default.exist(element)) {
        return element.style.cssText;
      }

      // this.element 不正の時は空文字を返します
      return '';
    }
    /**
     * element の style.cssText をインスタンス作成時点まで戻します
     * @return {string} 設定した css を返します
     */

  }, {
    key: 'restore',
    value: function restore() {
      var css = this.original;
      this.element.style.cssText = css;
      return css;
    }
    /**
     * `save` 実行時に設定されている inline style を default にします
     * @returns {string} 設定されている inline style を返します
     */

  }, {
    key: 'save',
    value: function save() {
      var style = this.current();
      return this.update(style);
    }
    /**
     * element の style.cssText を引数 `css` で書き換えます
     * @param {string} css 書き換える css
     */

  }, {
    key: 'change',
    value: function change(css) {
      Style.change(this.element, css);
    }
  }]);

  return Style;
}();

exports.default = Style;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/22 - 19:27
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

var _CriOS = __webpack_require__(79);

var _CriOS2 = _interopRequireDefault(_CriOS);

var _Edge = __webpack_require__(80);

var _Edge2 = _interopRequireDefault(_Edge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link Chrome}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link Chrome}
 * @since 0.4.2
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/chrome\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  var versions = numbers.map(function (number, index) {
    var int = parseInt(number, 10);
    if (index <= 3) {
      return isNaN(int) ? 0 : int;
    }
    return null;
  });
  _browsers.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  var option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  _browsers.major = major;
  _browsers.version = parseFloat(major + '.' + minor + build + option);
  _browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link Chrome}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var crios = _CriOS2.default.is();
  var edge = _Edge2.default.is();
  var chrome = false;
  if (!edge) {
    if (crios) {
      // iOS chrome
      chrome = true;
    } else {
      var ua = _devices2.default.ua;
      chrome = !!ua.match(/chrome/i);
    }
  }
  _browsers.chrome = chrome;
  if (chrome) {
    version();
  }
};

/**
 * Chrome detector
 * @since 0.4.2
 */

var Chrome = function () {
  function Chrome() {
    _classCallCheck(this, Chrome);
  }

  _createClass(Chrome, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * Chrome 判定
     * @returns {boolean} true: Chrome
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.chrome;
    }
    /**
     * Chrome Browser version
     * @returns {number} Chrome version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Chrome Browser major version
     * @returns {number} Chrome major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Chrome Browser version `major.minor.build`
     * @returns {string} Chrome version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Chrome;
}();

exports.default = Chrome;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/25 - 16:19
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link FxiOS}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link FxiOS}
 * @since 0.4.2
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/fxios\/(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  // array
  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !isNaN(int);
  });
  _browsers.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  var option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  _browsers.major = major;
  _browsers.version = parseFloat(major + '.' + minor + build + option);
  _browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link FxiOS}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var ua = _devices2.default.ua;
  var fxios = !!ua.match(/fxios/i);
  _browsers.fxios = fxios;
  if (fxios) {
    version();
  }
};

/**
 * iOS Firefox detector
 * @since 0.4.2
 */

var FxiOS = function () {
  function FxiOS() {
    _classCallCheck(this, FxiOS);
  }

  _createClass(FxiOS, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Firefox 判定
     * @returns {boolean} true: iOS Firefox
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.fxios;
    }
    /**
     * Firefox Browser version
     * @returns {number} Firefox OS version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Firefox Browser major version
     * @returns {number} Firefox OS major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Firefox Browser version `major.minor.build`
     * @returns {string} Firefox OS version NN.NN.NN.NN 型（文字）で返します, not Android ''
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return FxiOS;
}();

exports.default = FxiOS;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 22:02
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Element の ClientRect 取得します
 * - bottom: float
 * - height: float
 * - left: float
 * - right: float
 * - top: float
 * - width: float
 * - x: float
 * - y: float
 *
 * #ref: MSDN `https://msdn.microsoft.com/ja-jp/library/hh826029(v=vs.85).aspx`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */
var Bounding = function () {
  _createClass(Bounding, null, [{
    key: "offset",

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * `getBoundingClientRect` を使用し引数 element の offset 値を取得します
     *
     * ```
     * {{top: Number, right: Number, left: Number, bottom: Number, width: Number, height: Number}}
     * ```
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     *
     * @param {Element} element 調査対象 Element
     * @return {ClientRect} 引数 element の offset 値を返します
     */
    value: function offset(element) {
      return element.getBoundingClientRect();
    }
    /**
     * ClientRect の複製を Object 化し writable にします
     * @param {DOMRect|ClientRect} offset 複製元 ClientRect
     * @return {{
     *  top: number,
     *  right: number,
     *  bottom: number,
     *  left: number,
     *  width: number,
     *  height: number}} ClientRect の複製 (Object) を返します
     *  @see https://developer.mozilla.org/en-US/docs/Web/API/DOMRect
     *  @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     */

  }, {
    key: "clone",
    value: function clone(offset) {
      return {
        top: offset.top,
        right: offset.right,
        bottom: offset.bottom,
        left: offset.left,
        width: offset.width,
        height: offset.height
      };
    }
    // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * 操作対象 Element を保存します
     * @param {Element} element 操作対象 Element
     */

  }]);

  function Bounding(element) {
    _classCallCheck(this, Bounding);

    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * `getBoundingClientRect` を使用しプロパティ element の offset 値を取得します
   * @return {ClientRect} read only ClientRect を返します
   */


  _createClass(Bounding, [{
    key: "offset",
    value: function offset() {
      return Bounding.offset(this.element);
    }
    /**
     * writable な element の offset 値を取得します
     * @return {{
     *  top: number,
     *  right: number,
     *  bottom: number,
     *  left: number,
     *  width: number,
     *  height: number}} writable な element の offset
     *  */

  }, {
    key: "clone",
    value: function clone() {
      return Bounding.clone(this.offset());
    }
  }]);

  return Bounding;
}();

exports.default = Bounding;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/22 - 11:38
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Element の CSS class を操作します
 */
var Classes = function () {
  _createClass(Classes, null, [{
    key: 'get',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * 1. `classList` && `Array.from` - `Array.from(element.classList)`
     * 2. {@link Classes.convert}
     * @param {Element} element 操作対象 Element
     * @returns {Array.<string>} 引数 `element` の class を配列変換し返します
     */
    value: function get(element) {
      return element.classList && Array.from ? Array.from(element.classList) : Classes.convert(element);
    }
    /**
     * Elementが引数 className を有するかを調べます
     * @param {Element} element 操作対象 Element
     * @param {string} className 調査対象 CSS class name
     * @returns {boolean} 存在すると true を返します
     */

  }, {
    key: 'has',
    value: function has(element, className) {
      var elementClasses = Classes.get(element);
      return elementClasses.indexOf(className) !== -1;
    }
    /**
     * Element へ引数 className を追加します
     * - className 存在チェック
     * -
     * @param {Element} node 操作対象 Element
     * @param {string} className 追加対象 CSS class name
     * @returns {boolean} 追加に成功すると true を返します
     */

  }, {
    key: 'add',
    value: function add(node, className) {
      // CSS class の存在チェック
      if (Classes.has(node, className)) {
        return false;
      }
      // argument copy
      var element = node;
      // @type {Array<string>} - element class を取得し配列へ変換
      var elementClasses = Classes.get(element);
      // 置換え配列最後尾に新規 `className` を追加します
      elementClasses.push(className);
      // 配列を ' '（ワンスペース）でつなぎ文字列変換後に設定します
      element.className = elementClasses.join(' ');
      return true;
    }
    /**
     * Element から引数 className を削除します
     * @param {Element} node 操作対象 Element
     * @param {string} className 削除対象 CSS class name
     * @returns {boolean} 削除に成功すると true を返します
     */

  }, {
    key: 'remove',
    value: function remove(node, className) {
      if (!Classes.has(node, className)) {
        return false;
      }
      // argument copy
      var element = node;
      // @type {Array<string>} - element class を取得し配列へ変換
      var elementClasses = Classes.get(element);
      // 配列での削除対象 class の位置を取得します
      var index = elementClasses.indexOf(className);
      // 配列位置を元に削除実行します
      elementClasses.splice(index, 1);
      // 削除後配列を ' '（ワンスペース）でつなぎ文字列変換後に設定します
      element.className = elementClasses.join(' ');
      return true;
    }
    /**
     * 可哀相な IE のための配列コンバーター, `.classList` 代用します
     * @param {Element} element 操作対象 NodeList
     * @returns {Array} 配列にコンバートして返します
     */

  }, {
    key: 'convert',
    value: function convert(element) {
      var arr = element.className.split(' ');
      var i = 0;
      var limit = arr.length;
      var empty = [];
      for (; i < limit; i += 1) {
        var className = arr[i];
        if (!!className && className !== ' ') {
          empty.push(className);
        }
      }
      return empty;
    }
    // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * 操作対象 Element を保持します
     * @param {Element} element 操作対象 Element
     */

  }]);

  function Classes(element) {
    _classCallCheck(this, Classes);

    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * className を有するかを調べます
   * @param {string} className 調査対象 CSS class name
   * @returns {boolean} 存在すると true を返します
   */


  _createClass(Classes, [{
    key: 'has',
    value: function has(className) {
      return Classes.has(this.element, className);
    }
    /**
     * className を追加します
     * @param {string} className 追加対象 CSS class name
     * @returns {boolean} 追加に成功すると true を返します
     */

  }, {
    key: 'add',
    value: function add(className) {
      return Classes.add(this.element, className);
    }
    /**
     * className を削除します
     * @param {string} className 削除対象 CSS class name
     * @returns {boolean} 削除に成功すると true を返します
     */

  }, {
    key: 'remove',
    value: function remove(className) {
      return Classes.remove(this.element, className);
    }
  }]);

  return Classes;
}();

exports.default = Classes;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/06/30 - 17:54
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * 0.4.5
 * 2017-10-23 16:36:01
 */
// use strict は本来不要でエラーになる
// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
/* eslint strict: [0, "global"] */



// // fetch / promise
// import 'whatwg-fetch';
// import Promise from 'promise-polyfill';
// // for IE
// import 'babel-polyfill';

// polyfill
// - babel-polyfill
// - requestAnimationFrame
// - promise-polyfill
// - whatwg-fetch

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(119);

var _EventDispatcher = __webpack_require__(13);

var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);

var _Events = __webpack_require__(14);

var _Events2 = _interopRequireDefault(_Events);

var _Rising = __webpack_require__(230);

var _Rising2 = _interopRequireDefault(_Rising);

var _Scroll = __webpack_require__(51);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _Scrolling = __webpack_require__(73);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

var _Touching = __webpack_require__(106);

var _Touching2 = _interopRequireDefault(_Touching);

var _Wheel = __webpack_require__(235);

var _Wheel2 = _interopRequireDefault(_Wheel);

var _Resizing = __webpack_require__(78);

var _Resizing2 = _interopRequireDefault(_Resizing);

var _ResizingSingle = __webpack_require__(237);

var _ResizingSingle2 = _interopRequireDefault(_ResizingSingle);

var _Swipe = __webpack_require__(238);

var _Swipe2 = _interopRequireDefault(_Swipe);

var _NativeResizing = __webpack_require__(110);

var _NativeResizing2 = _interopRequireDefault(_NativeResizing);

var _NativeResizingSingle = __webpack_require__(240);

var _NativeResizingSingle2 = _interopRequireDefault(_NativeResizingSingle);

var _Ajax = __webpack_require__(111);

var _Ajax2 = _interopRequireDefault(_Ajax);

var _Cookie = __webpack_require__(241);

var _Cookie2 = _interopRequireDefault(_Cookie);

var _Queries = __webpack_require__(242);

var _Queries2 = _interopRequireDefault(_Queries);

var _AjaxThunk = __webpack_require__(243);

var _AjaxThunk2 = _interopRequireDefault(_AjaxThunk);

var _Cycle = __webpack_require__(103);

var _Cycle2 = _interopRequireDefault(_Cycle);

var _Fps = __webpack_require__(244);

var _Fps2 = _interopRequireDefault(_Fps);

var _Polling = __webpack_require__(75);

var _Polling2 = _interopRequireDefault(_Polling);

var _Rate = __webpack_require__(102);

var _Rate2 = _interopRequireDefault(_Rate);

var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

var _Hit = __webpack_require__(105);

var _Hit2 = _interopRequireDefault(_Hit);

var _List = __webpack_require__(246);

var _List2 = _interopRequireDefault(_List);

var _Text = __webpack_require__(52);

var _Text2 = _interopRequireDefault(_Text);

var _Times = __webpack_require__(247);

var _Times2 = _interopRequireDefault(_Times);

var _Vectors = __webpack_require__(76);

var _Vectors2 = _interopRequireDefault(_Vectors);

var _Iro = __webpack_require__(248);

var _Iro2 = _interopRequireDefault(_Iro);

var _Patterns = __webpack_require__(112);

var _Patterns2 = _interopRequireDefault(_Patterns);

var _Style = __webpack_require__(113);

var _Style2 = _interopRequireDefault(_Style);

var _Can = __webpack_require__(107);

var _Can2 = _interopRequireDefault(_Can);

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

var _Android = __webpack_require__(77);

var _Android2 = _interopRequireDefault(_Android);

var _Windows = __webpack_require__(108);

var _Windows2 = _interopRequireDefault(_Windows);

var _iOS = __webpack_require__(249);

var _iOS2 = _interopRequireDefault(_iOS);

var _Chrome = __webpack_require__(114);

var _Chrome2 = _interopRequireDefault(_Chrome);

var _CriOS = __webpack_require__(79);

var _CriOS2 = _interopRequireDefault(_CriOS);

var _Edge = __webpack_require__(80);

var _Edge2 = _interopRequireDefault(_Edge);

var _Firefox = __webpack_require__(250);

var _Firefox2 = _interopRequireDefault(_Firefox);

var _FxiOS = __webpack_require__(115);

var _FxiOS2 = _interopRequireDefault(_FxiOS);

var _IE = __webpack_require__(251);

var _IE2 = _interopRequireDefault(_IE);

var _Safari = __webpack_require__(252);

var _Safari2 = _interopRequireDefault(_Safari);

var _Bounding = __webpack_require__(116);

var _Bounding2 = _interopRequireDefault(_Bounding);

var _Classes = __webpack_require__(117);

var _Classes2 = _interopRequireDefault(_Classes);

var _Elements = __webpack_require__(253);

var _Elements2 = _interopRequireDefault(_Elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // ----------------------------------------------
// // promise
// // Promise: To add to window
// if (!window.Promise) {
//   window.Promise = Promise;
// }

/**
 * **MOKU**
 * <p>global Object</p>
 * <p>public な Class はここからアクセス可能です</p>
 * @type {Object}
 */


// device/browser


// util


// tick


// net


// event
var MOKU = {};
/**
 * version number を取得します
 * @returns {string} version number を返します
 */


// dom


// device/os


// device


// css
MOKU.version = function () {
  return '0.4.5';
};
/**
 * build 日時を取得します
 * @returns {string}  build 日時を返します
 */
MOKU.build = function () {
  return '2017-10-23 16:36:01';
};
/**
 * MOKU.event
 * @type {Object} MOKU.event object を返します
 */
MOKU.event = {
  EventDispatcher: _EventDispatcher2.default,
  Events: _Events2.default,
  Rising: _Rising2.default,
  Scroll: _Scroll2.default,
  Wheel: _Wheel2.default,
  Scrolling: _Scrolling2.default,
  Touching: _Touching2.default,
  Resizing: _Resizing2.default,
  ResizingSingle: _ResizingSingle2.default,
  Swipe: _Swipe2.default,
  NativeResizing: _NativeResizing2.default,
  NativeResizingSingle: _NativeResizingSingle2.default
};
/**
 * MOKU.net
 * @type {Object} MOKU.net object を返します
 */
MOKU.net = {
  Ajax: _Ajax2.default,
  Cookie: _Cookie2.default,
  Queries: _Queries2.default,
  AjaxThunk: _AjaxThunk2.default
};
/**
 * MOKU.tick
 * @type {Object} MOKU.tick object を返します
 */
MOKU.tick = {
  Cycle: _Cycle2.default,
  Fps: _Fps2.default,
  Polling: _Polling2.default,
  Rate: _Rate2.default
};
/**
 * MOKU.util
 * @type {Object} MOKU.util object を返します
 */
MOKU.util = {
  Type: _Type2.default,
  List: _List2.default,
  Text: _Text2.default,
  Times: _Times2.default,
  Vectors: _Vectors2.default,
  Hit: _Hit2.default,
  Iro: _Iro2.default
};
/**
 * MOKU.util
 * @type {Object} MOKU.css object を返します
 */
MOKU.css = {
  Patterns: _Patterns2.default,
  Style: _Style2.default,
  Can: _Can2.default
};
/**
 * MOKU.util
 * @type {Object} MOKU.dom object を返します
 */
MOKU.dom = {
  Bounding: _Bounding2.default,
  Classes: _Classes2.default,
  Elements: _Elements2.default
};

MOKU.device = {
  Can: _Can2.default,
  devices: _devices2.default,
  os: {
    Android: _Android2.default,
    Windows: _Windows2.default,
    iOS: _iOS2.default
  },
  browser: {
    Chrome: _Chrome2.default,
    CriOS: _CriOS2.default,
    Edge: _Edge2.default,
    Firefox: _Firefox2.default,
    FxiOS: _FxiOS2.default,
    IE: _IE2.default,
    Safari: _Safari2.default
  }
};

// export
/**
 * global object `MOKU`
 * @type {Object}
 */
window.MOKU = MOKU;

exports.default = MOKU;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(120);

__webpack_require__(222);

__webpack_require__(227);

var _animationFrame = __webpack_require__(229);

var _animationFrame2 = _interopRequireDefault(_animationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------


// fetch
/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 18:25
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// babel polyfill
(0, _animationFrame2.default)();

/**
 * 以下全てを読み込みます、一部だけ必要な時は個別に `import` します
 * - babel-polyfill - `./method/babel`
 *   - IE, Symbol 対応できない問題を解決するために...
 *   - https://babeljs.io/docs/usage/polyfill/
 *   - https://github.com/babel/babel-preset-env/issues/203
 *   - `babel-preset-env includes plugins by default. To include polyfill you need:, specify useBuiltIns: true in presets options (see more), include import "babel-polyfill" to your codebase.`
 * - promise-polyfill - `./method/promise`
 *   - https://github.com/taylorhakes/promise-polyfill
 *   - https://developers.google.com/web/fundamentals/getting-started/primers/promises
 *   - Chrome 32、Opera 19、Firefox 29、Safari 8、および Microsoft Edge - enabled
 * - whatwg-fetch - `./method/fetch`
 *   - https://github.com/whatwg/fetch
 *   - https://fetch.spec.whatwg.org/
 *   - https://github.github.io/fetch/
 * - animationFrame - `./method/animationFrame`
 *   - Android 4.3 以下, requestAnimationFrame 未実装なので polyfill する
 * @type {{animationFrame: function}}
 */


// promise
var polyfill = {
  animationFrame: _animationFrame2.default
};

exports.default = polyfill;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(121);

__webpack_require__(122);

__webpack_require__(123);

__webpack_require__(128);

__webpack_require__(129);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(132);

__webpack_require__(133);

__webpack_require__(134);

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(138);

__webpack_require__(139);

__webpack_require__(140);

__webpack_require__(141);

__webpack_require__(142);

__webpack_require__(144);

__webpack_require__(145);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(148);

__webpack_require__(149);

__webpack_require__(150);

__webpack_require__(151);

__webpack_require__(152);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(157);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(164);

__webpack_require__(165);

__webpack_require__(166);

__webpack_require__(167);

__webpack_require__(168);

__webpack_require__(170);

__webpack_require__(171);

__webpack_require__(172);

__webpack_require__(173);

__webpack_require__(174);

__webpack_require__(176);

__webpack_require__(177);

__webpack_require__(178);

__webpack_require__(179);

__webpack_require__(180);

__webpack_require__(181);

__webpack_require__(182);

__webpack_require__(183);

__webpack_require__(184);

__webpack_require__(185);

__webpack_require__(65);

__webpack_require__(186);

__webpack_require__(187);

__webpack_require__(188);

__webpack_require__(189);

__webpack_require__(190);

__webpack_require__(191);

__webpack_require__(192);

__webpack_require__(193);

__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(196);

__webpack_require__(197);

__webpack_require__(198);

__webpack_require__(199);

__webpack_require__(200);

__webpack_require__(201);

__webpack_require__(202);

__webpack_require__(203);

__webpack_require__(204);

__webpack_require__(205);

__webpack_require__(206);

__webpack_require__(207);

__webpack_require__(208);

__webpack_require__(209);

__webpack_require__(210);

__webpack_require__(211);

__webpack_require__(212);

__webpack_require__(213);

__webpack_require__(214);

__webpack_require__(215);

__webpack_require__(216);

__webpack_require__(219);

__webpack_require__(220);

__webpack_require__(221);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , $typed       = __webpack_require__(43)
  , buffer       = __webpack_require__(54)
  , anObject     = __webpack_require__(2)
  , toIndex      = __webpack_require__(30)
  , toLength     = __webpack_require__(8)
  , isObject     = __webpack_require__(3)
  , ArrayBuffer  = __webpack_require__(1).ArrayBuffer
  , speciesConstructor = __webpack_require__(61)
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(5)(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(44)(ARRAY_BUFFER);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(43).ABV, {
  DataView: __webpack_require__(54).DataView
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(6)
  , anObject = __webpack_require__(2)
  , getKeys  = __webpack_require__(33);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(126);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , isArray  = __webpack_require__(85)
  , SPECIES  = __webpack_require__(4)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(38)
  , descriptor     = __webpack_require__(17)
  , setToStringTag = __webpack_require__(31)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(89);

// 23.1 Map Objects
module.exports = __webpack_require__(47)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var isObject       = __webpack_require__(3)
  , setPrototypeOf = __webpack_require__(66).set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(89);

// 23.2 Set Objects
module.exports = __webpack_require__(47)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each         = __webpack_require__(40)(0)
  , redefine     = __webpack_require__(18)
  , meta         = __webpack_require__(42)
  , assign       = __webpack_require__(91)
  , weak         = __webpack_require__(92)
  , isObject     = __webpack_require__(3)
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(47)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(92);

// 23.4 WeakSet Objects
__webpack_require__(47)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = __webpack_require__(0)
  , aFunction = __webpack_require__(22)
  , anObject  = __webpack_require__(2)
  , rApply    = (__webpack_require__(1).Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(5)(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = __webpack_require__(0)
  , create     = __webpack_require__(38)
  , aFunction  = __webpack_require__(22)
  , anObject   = __webpack_require__(2)
  , isObject   = __webpack_require__(3)
  , fails      = __webpack_require__(5)
  , bind       = __webpack_require__(143)
  , rConstruct = (__webpack_require__(1).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction  = __webpack_require__(22)
  , isObject   = __webpack_require__(3)
  , invoke     = __webpack_require__(49)
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = __webpack_require__(6)
  , $export     = __webpack_require__(0)
  , anObject    = __webpack_require__(2)
  , toPrimitive = __webpack_require__(36);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(5)(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = __webpack_require__(0)
  , gOPD     = __webpack_require__(20).f
  , anObject = __webpack_require__(2);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(39)
  , has            = __webpack_require__(7)
  , $export        = __webpack_require__(0)
  , isObject       = __webpack_require__(3)
  , anObject       = __webpack_require__(2);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = __webpack_require__(20)
  , $export  = __webpack_require__(0)
  , anObject = __webpack_require__(2);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = __webpack_require__(0)
  , getProto = __webpack_require__(39)
  , anObject = __webpack_require__(2);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export       = __webpack_require__(0)
  , anObject      = __webpack_require__(2)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {ownKeys: __webpack_require__(93)});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export            = __webpack_require__(0)
  , anObject           = __webpack_require__(2)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = __webpack_require__(6)
  , gOPD           = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(39)
  , has            = __webpack_require__(7)
  , $export        = __webpack_require__(0)
  , createDesc     = __webpack_require__(17)
  , anObject       = __webpack_require__(2)
  , isObject       = __webpack_require__(3);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = __webpack_require__(0)
  , setProto = __webpack_require__(66);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(25)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(15)
  , classof            = __webpack_require__(62)
  , $export            = __webpack_require__(0)
  , isObject           = __webpack_require__(3)
  , aFunction          = __webpack_require__(22)
  , anInstance         = __webpack_require__(27)
  , forOf              = __webpack_require__(46)
  , speciesConstructor = __webpack_require__(61)
  , task               = __webpack_require__(67).set
  , microtask          = __webpack_require__(156)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(26)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(31)($Promise, PROMISE);
__webpack_require__(44)(PROMISE);
Wrapper = __webpack_require__(35)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(45)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(67).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(29)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(7)
  , DESCRIPTORS    = __webpack_require__(9)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(18)
  , META           = __webpack_require__(42).KEY
  , $fails         = __webpack_require__(5)
  , shared         = __webpack_require__(58)
  , setToStringTag = __webpack_require__(31)
  , uid            = __webpack_require__(21)
  , wks            = __webpack_require__(4)
  , wksExt         = __webpack_require__(94)
  , wksDefine      = __webpack_require__(158)
  , keyOf          = __webpack_require__(159)
  , enumKeys       = __webpack_require__(160)
  , isArray        = __webpack_require__(85)
  , anObject       = __webpack_require__(2)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(36)
  , createDesc     = __webpack_require__(17)
  , _create        = __webpack_require__(38)
  , gOPNExt        = __webpack_require__(161)
  , $GOPD          = __webpack_require__(20)
  , $DP            = __webpack_require__(6)
  , $keys          = __webpack_require__(33)
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
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f  = $propertyIsEnumerable;
  __webpack_require__(48).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(25)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(35)
  , LIBRARY        = __webpack_require__(25)
  , wksExt         = __webpack_require__(94)
  , defineProperty = __webpack_require__(6).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(33)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(33)
  , gOPS    = __webpack_require__(48)
  , pIE     = __webpack_require__(41);
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

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(37).f
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


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(91)});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {is: __webpack_require__(83)});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(66).set});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(6).f
  , createDesc = __webpack_require__(17)
  , has        = __webpack_require__(7)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || __webpack_require__(9) && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(8);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var $export        = __webpack_require__(0)
  , toIndex        = __webpack_require__(30)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $at     = __webpack_require__(169)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , defined   = __webpack_require__(19);
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

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(95)
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export     = __webpack_require__(0)
  , toLength    = __webpack_require__(8)
  , context     = __webpack_require__(68)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(69)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export   = __webpack_require__(0)
  , toLength  = __webpack_require__(8)
  , context   = __webpack_require__(68)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(69)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export  = __webpack_require__(0)
  , context  = __webpack_require__(68)
  , INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(69)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__(9) && /./g.flags != 'g')__webpack_require__(6).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(175)
});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(2);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(50)('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(50)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(50)('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = __webpack_require__(96)
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(50)('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(15)
  , $export        = __webpack_require__(0)
  , toObject       = __webpack_require__(23)
  , call           = __webpack_require__(90)
  , isArrayIter    = __webpack_require__(63)
  , toLength       = __webpack_require__(8)
  , createProperty = __webpack_require__(70)
  , getIterFn      = __webpack_require__(64);

$export($export.S + $export.F * !__webpack_require__(45)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export        = __webpack_require__(0)
  , createProperty = __webpack_require__(70);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(5)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {copyWithin: __webpack_require__(88)});

__webpack_require__(34)('copyWithin');

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(40)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(34)(KEY);

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(40)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(34)(KEY);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {fill: __webpack_require__(60)});

__webpack_require__(34)('fill');

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__(0)
  , _isFinite = __webpack_require__(1).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {isInteger: __webpack_require__(97)});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export   = __webpack_require__(0)
  , isInteger = __webpack_require__(97)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0)
  , log1p   = __webpack_require__(98)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0)
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0)
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0)
  , sign    = __webpack_require__(71);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0)
  , $expm1  = __webpack_require__(72);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export   = __webpack_require__(0)
  , sign      = __webpack_require__(71)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(5)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {log1p: __webpack_require__(98)});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {sign: __webpack_require__(71)});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(72)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(5)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(72)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export   = __webpack_require__(0)
  , $includes = __webpack_require__(56)(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(34)('includes');

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0)
  , $values = __webpack_require__(99)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__(0)
  , $entries = __webpack_require__(99)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = __webpack_require__(0)
  , ownKeys        = __webpack_require__(93)
  , toIObject      = __webpack_require__(12)
  , gOPD           = __webpack_require__(20)
  , createProperty = __webpack_require__(70);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(100);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(100);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__(1)
  , $export    = __webpack_require__(0)
  , invoke     = __webpack_require__(49)
  , partial    = __webpack_require__(217)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__(218)
  , invoke    = __webpack_require__(49)
  , aFunction = __webpack_require__(22);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , $task   = __webpack_require__(67);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators    = __webpack_require__(65)
  , redefine      = __webpack_require__(18)
  , global        = __webpack_require__(1)
  , hide          = __webpack_require__(10)
  , Iterators     = __webpack_require__(32)
  , wks           = __webpack_require__(4)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101)))

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promisePolyfill = __webpack_require__(223);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Promise 未実装ブラウザへ polyfill します
 * - Chrome 32、Opera 19、Firefox 29、Safari 8、および Microsoft Edge - enabled
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developers.google.com/web/fundamentals/getting-started/primers/promises
 */
var activate = function activate() {
  // Promise: To add to window
  if (!window.Promise) {
    window.Promise = _promisePolyfill2.default;
  }
}; /**
    * Copyright (c) 2011-2017 inazumatv.com, inc.
    * @author (at)taikiken / http://inazumatv.com
    * @date 2017/08/29 - 14:05
    *
    * Distributed under the terms of the MIT license.
    * http://www.opensource.org/licenses/mit-license.html
    *
    * This notice shall be included in all copies or substantial portions of the Software.
    *
    */

// @see https://github.com/taylorhakes/promise-polyfill
// @see https://developers.google.com/web/fundamentals/getting-started/primers/promises
// > Chrome 32、Opera 19、Firefox 29、Safari 8、および Microsoft Edge - enabled


activate();

exports.default = activate;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    var args = Array.prototype.slice.call(arr);

    return new Promise(function (resolve, reject) {
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(224).setImmediate))

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(225);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101), __webpack_require__(226)))

/***/ }),
/* 226 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(228);

/***/ }),
/* 228 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 18:26
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Android 4.3 以下
 * requestAnimationFrame 未実装なので polyfill する
 * babel-preset-env 補完しない？
 */
var animationFrame = function animationFrame() {
  // native code check
  if (self.requestAnimationFrame && self.cancelAnimationFrame) {
    return;
  }
  // vendor prefix
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  // add vendor prefix
  vendors.some(function (prefix) {
    self.requestAnimationFrame = self[prefix + 'RequestAnimationFrame'];
    self.cancelAnimationFrame = self[prefix + 'CancelAnimationFrame'] || self[prefix + 'CancelRequestAnimationFrame'];
    // return false;
    return !!self.requestAnimationFrame;
  });
  // ------------------------------------------------
  // still check
  if (!self.requestAnimationFrame) {
    var lastTime = 0;
    self.requestAnimationFrame = function (callback) {
      var currentTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currentTime - lastTime));
      var id = setTimeout(function () {
        callback(currentTime + timeToCall);
      }, timeToCall);
      lastTime = currentTime + timeToCall;
      return id;
    };
  }
  if (!self.cancelAnimationFrame) {
    self.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
};

exports.default = animationFrame;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Scrolling = __webpack_require__(73);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _RisingEvents = __webpack_require__(233);

var _RisingEvents2 = _interopRequireDefault(_RisingEvents);

var _Hit = __webpack_require__(105);

var _Hit2 = _interopRequireDefault(_Hit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016/11/30 - 14:37
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// event

// import Events from './Events';


// hit


/**
 * {@link Scrolling} class を使用しスクロールトップ位置をチェクし対象 element と window の衝突判定を {@link Hit.test} で行います
 */
var Rising = function (_EventDispatcher) {
  _inherits(Rising, _EventDispatcher);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * elements instance と scrolling instance を保存します
   * @param {Elements} elements 対象 element を Elements インスタンスに変換します
   * @param {Scrolling} scrolling スクロールトップ監視インスタンス
   */

  // ----------------------------------------
  // STATIC EVENT
  // ----------------------------------------
  /**
   * 衝突イベント - risingCollision
   * @event COLLISION
   * @type {string}
   */
  function Rising(elements) {
    var scrolling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Scrolling2.default();

    _classCallCheck(this, Rising);

    /**
     * 対象 element を Elements インスタンスに変換します
     * @type {elements}
     */
    var _this = _possibleConstructorReturn(this, (Rising.__proto__ || Object.getPrototypeOf(Rising)).call(this));

    _this.elements = elements;
    /**
     * スクロールトップ監視インスタンス
     * @type {Scrolling}
     */
    _this.scrolling = scrolling;
    // const boundScroll = this.scroll.bind(this);
    /**
     * bound onUpdate, Rate.UPDATE event handler
     * @type {function}
     */
    _this.onUpdate = _this.onUpdate.bind(_this);
    // this.boundScroll = boundScroll;
    // /**
    //  * start 済みフラッグ
    //  * @type {boolean}
    //  * @default false
    //  */
    // this.started = false;
    /**
     * Rising.[COLLISION|ALIEN] event instance
     * @type {RisingEvents}
     */
    _this.events = new _RisingEvents2.default(Rising.COLLISION, _this, _this);
    return _this;
  }
  // // ----------------------------------------
  // // EVENT
  // // ----------------------------------------
  // /**
  //  * 衝突イベント
  //  * @event COLLISION
  //  * @return {string} risingCollision を返します
  //  */
  // static get COLLISION() {
  //   return 'risingCollision';
  // }
  // /**
  //  * 衝突「していない」イベント
  //  * @event ALIEN
  //  * @return {string} risingAlien を返します
  //  */
  // static get ALIEN() {
  //   return 'risingAlien';
  // }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * scroll を監視します
   * @returns {Rising} method chain 可能なように instance を返します
   */

  /**
   * 衝突「していない」イベント - risingAlien
   * @event ALIEN
   * @type {string}
   */


  _createClass(Rising, [{
    key: 'start',
    value: function start() {
      // // flag check
      // if (this.started) {
      //   return this;
      // }
      // this.started = true;
      // // scrolling
      // const scrolling = this.scrolling;
      // scrolling.on(Scrolling.UPDATE, this.onUpdate);
      // scrolling.start();
      this.stop();
      this.scrolling.on(_Scrolling2.default.UPDATE, this.onUpdate);
      return this;
    }
    /**
     * scroll 監視を止めます
     * @returns {Rising} method chain 可能なように instance を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      // if (!this.started) {
      //   return this;
      // }
      // this.started = false;
      // const scrolling = this.scrolling;
      this.scrolling.off(_Scrolling2.default.UPDATE, this.onUpdate);
      return this;
    }
    /**
     * Scrolling.UPDATE event handler - {link Hit.test} 衝突判定を行います
     * @param {ScrollEvents} scrollEvents scroll events object
     * @return {boolean} 衝突時に true を返します
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(scrollEvents) {
      if (!scrollEvents.changed) {
        return false;
      }
      // element offset
      var offset = this.elements.offset();
      // hit result
      var hit = _Hit2.default.test(scrollEvents.height, offset);
      // // @type {?Elements}
      // let events = null;
      // if (hit.result) {
      //   events = new Events(Rising.COLLISION, this, this);
      // } else {
      //   events = new Events(Rising.ALIEN, this, this);
      // }
      var events = this.events;
      events.type = hit.result ? Rising.COLLISION : Rising.ALIEN;
      // hit / original / offset を追加します
      events.hit = hit;
      events.original = scrollEvents;
      events.offset = offset;
      // 発火
      this.dispatch(events);
      return hit.result;
    }
  }]);

  return Rising;
}(_EventDispatcher3.default);

Rising.COLLISION = 'risingCollision';
Rising.ALIEN = 'risingAlien';
exports.default = Rising;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/19 - 22:10
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * scroll 操作を強制的に不可能にします
 */
var Freeze = function () {
  function Freeze() {
    _classCallCheck(this, Freeze);
  }

  _createClass(Freeze, null, [{
    key: 'start',

    /**
     * scroll 動作を受付不能にします
     * @returns {void}
     */

    /**
     * scroll freeze timeout id
     * @type {number}
     */
    value: function start() {
      window.addEventListener('touchstart', Freeze.onScroll, false);
      window.addEventListener('touchmove', Freeze.onScroll, false);
      window.addEventListener('touchend', Freeze.onScroll, false);
      window.addEventListener('scroll', Freeze.onScroll, false);
      document.addEventListener('wheel', Freeze.onScroll, false);
      document.addEventListener('mousewheel', Freeze.onScroll, false);
      window.addEventListener('DOMMouseScroll', Freeze.onScroll, false);
    }
    /**
     * scroll 動作を回復します
     * @returns {void}
     */

    /**
     * scroll を止める時間
     * @type {number}
     * @default 200
     */

  }, {
    key: 'stop',
    value: function stop() {
      window.removeEventListener('touchstart', Freeze.onScroll);
      window.removeEventListener('touchmove', Freeze.onScroll);
      window.removeEventListener('touchend', Freeze.onScroll);
      window.removeEventListener('scroll', Freeze.onScroll);
      document.removeEventListener('wheel', Freeze.onScroll);
      document.removeEventListener('mousewheel', Freeze.onScroll);
      window.removeEventListener('DOMMouseScroll', Freeze.onScroll);
    }
    /**
     * window scroll event handler, バブリング・伝播全てキャンセルします
     * @param {Event} event window scroll event
     * @returns {boolean} event をキャンセルするために false を返します
     */

  }, {
    key: 'onScroll',
    value: function onScroll(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    /**
     * scroll 操作を引数(delay)の間キャンセルします
     * @param {number} [delay=200] 遅延時間(ms), 200
     * @returns {number} time out id
     */

  }, {
    key: 'freeze',
    value: function freeze() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Freeze.delay;

      clearTimeout(Freeze.timerId);
      // timerId = 0;
      Freeze.start();
      if (delay > 0) {
        Freeze.timerId = setTimeout(Freeze.stop, delay);
      }
      return Freeze.timerId;
    }
  }]);

  return Freeze;
}();

Freeze.timerId = 0;
Freeze.delay = 200;
exports.default = Freeze;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/06/02 - 15:42
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * requestAnimationFrame を singleton 実行する {@link Cycle} Events
 */
var CycleEvents = function (_Events) {
  _inherits(CycleEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function CycleEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, CycleEvents);

    // ---
    /**
     * requestAnimationFrame 戻り値
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (CycleEvents.__proto__ || Object.getPrototypeOf(CycleEvents)).call(this, type, currentTarget, target));

    _this.id = -1;
    return _this;
  }

  return CycleEvents;
}(_Events3.default);

exports.default = CycleEvents;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/06/02 - 15:02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * {@link Rising} Events
 */
var RisingEvents = function (_Events) {
  _inherits(RisingEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function RisingEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, RisingEvents);

    // ---
    /**
     * 衝突判定, true: 衝突
     * @type {boolean}
     */
    var _this = _possibleConstructorReturn(this, (RisingEvents.__proto__ || Object.getPrototypeOf(RisingEvents)).call(this, type, currentTarget, target));

    _this.hit = false;
    /**
     * original event
     * @type {?Event|*}
     */
    _this.original = null;
    /**
     * ClientRect
     * @type {?ClientRect}
     */
    _this.offset = null;
    return _this;
  }

  return RisingEvents;
}(_Events3.default);

exports.default = RisingEvents;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

var _Vectors = __webpack_require__(76);

var _Vectors2 = _interopRequireDefault(_Vectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016/10/08
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2015 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TouchingEvents
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// events


// util


/**
 * {@link Touching} Events
 */
var TouchingEvents = function (_Events) {
  _inherits(TouchingEvents, _Events);

  /**
   * Touching events object 各プロパティを設定します
   * @param {string} type event type
   * @param {*} target イベント発生インスタンス
   * @param {Event} origin 発生時のオリジナルイベント
   * @param {Vectors} current 現在の位置
   * @param {Vectors} between 前回位置との差
   * @param {boolean} scrolling scroll したかの真偽値, true: scroll している
   */
  function TouchingEvents(type, target, origin) {
    var current = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _Vectors2.default();
    var between = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _Vectors2.default();
    var scrolling = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, TouchingEvents);

    /**
     * 発生時のオリジナルイベント
     * @type {Event}
     */
    var _this = _possibleConstructorReturn(this, (TouchingEvents.__proto__ || Object.getPrototypeOf(TouchingEvents)).call(this, type, target));
    // super


    _this.origin = origin;
    /**
     * 現在の位置
     * @type {Vectors}
     */
    _this.current = current;
    /**
     * 前回位置との差
     * @type {Vectors}
     */
    _this.between = between;
    /**
     * scroll したかの真偽値
     * @type {boolean}
     */
    _this.scrolling = scrolling;
    return _this;
  }

  return TouchingEvents;
}(_Events3.default);

exports.default = TouchingEvents;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _WheelEvents = __webpack_require__(236);

var _WheelEvents2 = _interopRequireDefault(_WheelEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


// /**
//  * new を許可しないための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const singletonSymbol = Symbol('Scroll singleton symbol');
// /**
//  * singleton instance, nullable
//  * @type {?Wheel}
//  * @private
//  */
// let instance = null;

/**
 * mousewheel event を監視し通知を行います
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const wheel = new Wheel();
 * wheel.threshold = 500;
 * wheel.start();
 * ```
 */
var Wheel = function (_EventDispatcher) {
  _inherits(Wheel, _EventDispatcher);

  // // ----------------------------------------
  // // STATIC METHOD
  // // ----------------------------------------
  // /**
  //  * Wheel instance を singleton を保証し作成します
  //  * @returns {Wheel} Wheel instance を返します
  //  */
  // static factory() {
  //   if (instance === null) {
  //     instance = new Wheel(singletonSymbol);
  //   }
  //   return instance;
  // }
  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  // /**
  //  * singleton です
  //  * @param {Symbol} checkSymbol singleton を保証するための private instance
  //  * @returns {Wheel} singleton instance を返します
  //  */
  /**
   * wheel event を管理します
   * @param {number} [threshold=200] 閾値 - event を発生させる移動量(px)
   */

  /**
   * wheel down で発生するイベント - wheelDown
   * @type {string}
   */
  function Wheel() {
    var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

    _classCallCheck(this, Wheel);

    // onetime setting
    // instance = this;

    // event handler
    // const onMouseWheel = this.onMouseWheel.bind(this);
    /**
     * bound onMouseWheel
     * @type {function}
     */
    var _this = _possibleConstructorReturn(this, (Wheel.__proto__ || Object.getPrototypeOf(Wheel)).call(this));
    // // checkSymbol と singleton が等価かをチェックします
    // if (checkSymbol !== singletonSymbol) {
    //   throw new Error('don\'t use new, instead use static factory method.');
    // }
    // // instance 作成済みかをチェックし instance が null の時 this を設定します
    // if (instance !== null) {
    //   return instance;
    // }


    _this.onMouseWheel = _this.onMouseWheel.bind(_this);
    // this.onMouseWheel = () => onMouseWheel;
    /**
     * 閾値, wheel 移動量が閾値を超えたときにイベントを発生させます
     * @type {number}
     * @default 200
     */
    _this.threshold = threshold;
    /**
     * wheelDelta 移動量が閾値を超えるかをチェックするための積算計算変数
     * @type {number}
     */
    _this.moved = 0;
    // /**
    //  * start flag
    //  * @type {boolean}
    //  */
    // this.started = false;
    // const events = {
    //   up: new WheelEvents(Wheel.UP, this),
    //   down: new WheelEvents(Wheel.DOWN, this),
    // };
    /**
     * UP / DOWN Events instance
     * @returns {{up: WheelEvents, down: WheelEvents, update: WheelEvents}} UP / DOWN Events instance
     */
    _this.events = {
      up: new _WheelEvents2.default(Wheel.UP, _this, _this),
      down: new _WheelEvents2.default(Wheel.DOWN, _this, _this),
      update: new _WheelEvents2.default(Wheel.UPDATE, _this, _this)
    };

    // 設定済み instance を返します
    // return this;
    return _this;
  }
  // // ----------------------------------------
  // // EVENT
  // // ----------------------------------------
  // /**
  //  * wheel up で発生するイベントを取得します
  //  * @event UP
  //  * @returns {string} event, wheelUp を返します
  //  * @default wheelUp
  //  */
  // static get UP() {
  //   return 'wheelUp';
  // }
  // /**
  //  * wheel  で発生するイベントを取得します
  //  * @event DOWN
  //  * @returns {string} event, wheelUp を返します
  //  * @default wheelUp
  //  */
  // static get DOWN() {
  //   return 'wheelDown';
  // }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 移動量積算 property を `0` にします
   */

  /**
   * wheel move で発生するイベント - wheelUpdate
   * @type {string}
   */

  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * wheel up で発生するイベント - wheelUp
   * @type {string}
   */


  _createClass(Wheel, [{
    key: 'reset',
    value: function reset() {
      this.moved = 0;
    }
    /**
     * mousewheel event を監視します
     * @returns {Wheel} method chain 可能なように instance を返します
     */

  }, {
    key: 'start',
    value: function start() {
      // if (this.started) {
      //   return this;
      // }
      // this.started = true;
      // this.unwatch();
      this.stop();
      this.reset();
      window.addEventListener('wheel', this.onMouseWheel, false);
      return this;
    }
    /**
     * mousewheel event を監視を止めます
     * @returns {Wheel} method chain 可能なように instance を返します
     */

  }, {
    key: 'stop',
    value: function stop() {
      // if (!this.started) {
      //   return this;
      // }
      // this.started = false;
      window.removeEventListener('wheel', this.onMouseWheel);
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
    key: 'onMouseWheel',
    value: function onMouseWheel(event) {
      var wheelDelta = event.deltaY;
      return this.moving(wheelDelta);
    }
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
        // scroll event を発火します
        this.update(moved);
        // down / up
        if (moved > 0) {
          // scroll up
          this.up(moved);
        } else {
          this.down(moved);
        }

        // initialize moved, 発火後に積算移動変数を初期化します
        // this.moved = 0;
        this.reset();
        return moved;
      }
      // 閾値を超えていないので処理をしない
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
      var events = this.events.up;
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
      var events = this.events.down;
      events.moved = moved;
      this.dispatch(events);

      return moved;
    }
    /**
     * scroll update イベントを発火します
     * @param {number} moved 移動量
     * @returns {number} 加算移動量を返します
     */

  }, {
    key: 'update',
    value: function update(moved) {
      // @type {Events}
      var events = this.events.update;
      events.moved = moved;
      this.dispatch(events);

      return moved;
    }
  }]);

  return Wheel;
}(_EventDispatcher3.default);

Wheel.UP = 'wheelUp';
Wheel.DOWN = 'wheelDown';
Wheel.UPDATE = 'wheelUpdate';
exports.default = Wheel;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2016/11/20 - 12:11
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * {@link Wheel} Events, mouse wheel で発生するイベントを管理します
 */
var WheelEvents = function (_Events) {
  _inherits(WheelEvents, _Events);

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function WheelEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, WheelEvents);

    /**
     * 移動距離(px)
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (WheelEvents.__proto__ || Object.getPrototypeOf(WheelEvents)).call(this, type, currentTarget, target));

    _this.moved = 0;
    return _this;
  }

  return WheelEvents;
}(_Events3.default);

exports.default = WheelEvents;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/08/09 - 18:47
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Resizing = __webpack_require__(78);

var _Resizing2 = _interopRequireDefault(_Resizing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * singleton Resizing instance
 * @type {?Resizing}
 */
var instance = null;

/**
 * Resizing instance を singleton 提供します
 */

var ResizingSingle = function () {
  function ResizingSingle() {
    _classCallCheck(this, ResizingSingle);
  }

  _createClass(ResizingSingle, null, [{
    key: 'factory',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * Resizing instance を singleton 提供します
     * @returns {Resizing} Resizing instance
     */
    value: function factory() {
      if (!instance) {
        instance = new _Resizing2.default();
      }
      return instance;
    }
  }]);

  return ResizingSingle;
}();

exports.default = ResizingSingle;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(13);

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

var _Events = __webpack_require__(14);

var _Events2 = _interopRequireDefault(_Events);

var _DragEvents = __webpack_require__(239);

var _DragEvents2 = _interopRequireDefault(_DragEvents);

var _Touching = __webpack_require__(106);

var _Touching2 = _interopRequireDefault(_Touching);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/09/30 - 18:21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// event


// event/events


/**
 * touch 端末 swipe 監視を行います
 * @since v0.4.4
 */
var Swipe = function (_EventDispatcher) {
  _inherits(Swipe, _EventDispatcher);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * touch event 管理を行います
   * @param {Element} element touch target Element
   * @param {Touching} touching - 設定済み {@link Touching} instance
   * @param {number} [marginal=10] 閾値 X 方向 - 絶対値が超えると swipe event 発火します
   */

  /**
   * END - end
   * @type {string}
   */

  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * LEFT - left
   * @type {string}
   */
  function Swipe(element, touching) {
    var marginal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Swipe);

    // ---`
    /**
     * drag / swipe target Element
     * @type {Element}
     */
    var _this = _possibleConstructorReturn(this, (Swipe.__proto__ || Object.getPrototypeOf(Swipe)).call(this));

    _this.element = element;
    /**
     * touch event 管理
     * @type {Touching}
     */
    _this.touching = touching;
    /**
     * 閾値 X 方向
     * @type {number}
     */
    _this.marginal = marginal;
    /**
     * bound onStart - touchstart event handler
     * @type {function}
     */
    _this.onStart = _this.onStart.bind(_this);
    /**
     * bound onMove - touchmove event handler
     * @type {function}
     */
    _this.onMove = _this.onMove.bind(_this);
    /**
     * bound onEnd - touchend event handler
     * @type {function}
     */
    _this.onEnd = _this.onEnd.bind(_this);
    /**
     * bound onCancel - touchcancel event handler
     * @type {function}
     */
    _this.onCancel = _this.onCancel.bind(_this);
    /**
     * X 移動量を累積加算します
     * @type {number}
     */
    _this.dragging = 0;
    /**
     * Swipe Events
     * - left - swipe left
     * - right - swipe right
     * - end - drag end
     * - drag - dragging
     * @type {{left: Events, right: Events, end: Events, drag: DragEvents}}
     */
    _this.events = {
      left: new _Events2.default(Swipe.LEFT, _this, _this),
      right: new _Events2.default(Swipe.RIGHT, _this, _this),
      end: new _Events2.default(Swipe.END, _this, _this),
      drag: new _DragEvents2.default(Swipe.DRAG, _this, _this, 0)
    };
    return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * touchstart - event handler
   */

  /**
   * DRAG - drag'
   * @type {string}
   */

  /**
   * RIGHT - right
   * @type {string}
   */


  _createClass(Swipe, [{
    key: 'onStart',
    value: function onStart() {
      this.dispose();
      this.reset();
      // ----
      var touching = this.touching;
      touching.on(_Touching2.default.MOVE, this.onMove);
      touching.on(_Touching2.default.END, this.onEnd);
      touching.on(_Touching2.default.CANCEL, this.onCancel);
    }
    /**
     * touchmove {@link Touching}.MOVE - event handler
     * @param {TouchingEvents} events events.between.y で移動量を計算します
     */

  }, {
    key: 'onMove',
    value: function onMove(events) {
      // 移動量を累積する
      this.dragging += events.between.x;
      this.drag(this.dragging);
      if (this.swipeCheck()) {
        this.dispose();
        this.reset();
      }
    }
    /**
     * touchend {@link Touching}.END - event handler
     * @param {TouchingEvents} events events.between.y で移動量を計算します
     */

  }, {
    key: 'onEnd',
    value: function onEnd(events) {
      // 移動量を累積する
      this.dragging += events.between.x;
      this.drag(this.dragging);
      // ---
      var move = this.swipeCheck();
      if (!move) {
        this.dispatch(this.events.end);
      }
      // ---
      this.dispose();
      this.reset();
    }
    /**
     * touchend {@link Touching}.CANCEL - event handler
     * - 処理を中止します
     */

  }, {
    key: 'onCancel',
    value: function onCancel() {
      this.dispose();
      this.reset();
      this.dispatch(this.events.end);
    }
    /**
     * x 方向閾値(`marginal`)超えているかをチェックします
     * - 超えているときは swipe 方向を check し `swipe` event を発火します
     *   - 負数 - swipe left
     *   - 正数 - swipe right
     * @return {boolean} true: 超えている
     */

  }, {
    key: 'swipeCheck',
    value: function swipeCheck() {
      var move = Math.abs(this.dragging) > this.marginal;
      if (move) {
        if (this.dragging < 0) {
          this.dispatch(this.events.left);
        } else {
          this.dispatch(this.events.right);
        }
      }
      return move;
    }
    /**
     * {@link Touching}.[MOVE|END|CANCEL] unbind します
     */

  }, {
    key: 'dispose',
    value: function dispose() {
      var touching = this.touching;
      touching.off(_Touching2.default.MOVE, this.onMove);
      touching.off(_Touching2.default.END, this.onEnd);
      touching.off(_Touching2.default.CANCEL, this.onCancel);
    }
    /**
     * drag 量を `0` にします
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.dragging = 0;
    }
    /**
     * drag `x` value と共に通知します
     * @param {number} x 移動(px)
     */

  }, {
    key: 'drag',
    value: function drag(x) {
      var events = this.events.drag;
      events.x = x;
      this.dispatch(events);
    }
    /**
     * {@link Touching}.START 監視を始めます
     */

  }, {
    key: 'start',
    value: function start() {
      this.stop();
      var touching = this.touching;
      touching.on(_Touching2.default.START, this.onStart);
      touching.start();
    }
    /**
     * {@link Touching}.START 監視を停止します
     */

  }, {
    key: 'stop',
    value: function stop() {
      var touching = this.touching;
      touching.off(_Touching2.default.START, this.onStart);
      touching.stop();
      this.dispose();
    }
  }]);

  return Swipe;
}(_EventDispatcher3.default);

Swipe.LEFT = 'left';
Swipe.RIGHT = 'right';
Swipe.END = 'end';
Swipe.DRAG = 'drag';
exports.default = Swipe;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Events2 = __webpack_require__(14);

var _Events3 = _interopRequireDefault(_Events2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/09/30 - 18:19
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * drag events
 * @since v0.4.4
 */
var DragEvents = function (_Events) {
  _inherits(DragEvents, _Events);

  /**
   * drag events
   * @param {string} type event type
   * @param {*} currentTarget currentTarget instance
   * @param {*} target target instance
   * @param {number} x drag px
   */
  function DragEvents(type, currentTarget, target, x) {
    _classCallCheck(this, DragEvents);

    /**
     * drag px
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (DragEvents.__proto__ || Object.getPrototypeOf(DragEvents)).call(this, type, currentTarget, target));

    _this.x = x;
    return _this;
  }

  return DragEvents;
}(_Events3.default);

exports.default = DragEvents;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/08/09 - 18:47
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _NativeResizing = __webpack_require__(110);

var _NativeResizing2 = _interopRequireDefault(_NativeResizing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * singleton Resizing instance
 * @type {?NativeResizing}
 */
var instance = null;

/**
 * Resizing instance を singleton 提供します
 */

var ResizingSingle = function () {
  function ResizingSingle() {
    _classCallCheck(this, ResizingSingle);
  }

  _createClass(ResizingSingle, null, [{
    key: 'factory',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * NativeResizing instance を singleton 提供します
     * @returns {NativeResizing} NativeResizing instance
     */
    value: function factory() {
      if (!instance) {
        instance = new _NativeResizing2.default();
      }
      return instance;
    }
  }]);

  return ResizingSingle;
}();

exports.default = ResizingSingle;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/12/16 - 14:45
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// --------------------------------
// copy [native code]
/**
 * copy [native code] - decodeURIComponent
 * @type {function}
 */
var decodeURIComponent = self.decodeURIComponent;
/**
 * copy [native code] - encodeURIComponent
 * @type {function}
 */
var encodeURIComponent = self.encodeURIComponent;
/**
 * copy [native code] - RegExp
 * @type {function}
 */
var RegExp = self.RegExp;

/**
 * cookie を取得・保存・削除します
 */

var Cookie = function () {
  /**
   * cookie を処理します
   *
   * インスタンスは key 毎に作成します
   * @param {string} keyName cookie key
   * @param {?Date} [endValue=null] cookie end Date instance, null の時はプラウザ `quit` で削除されます
   * @param {string} [defaultPath='/'] cookie path
   * @param {string} [defaultDomain=''] cookie domain
   * @param {boolean} [secureSetting=false] true: https 通信のときのみ、クッキーが送信されます
   */
  function Cookie(keyName) {
    var endValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var defaultPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
    var defaultDomain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var secureSetting = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, Cookie);

    var key = keyName;
    var end = endValue;
    var path = defaultPath;
    var domain = defaultDomain;
    var secure = secureSetting;

    /**
     * cookie key を取得します
     * @returns {string} cookie key を返します
     */
    this.key = function () {
      return key;
    };
    /**
     * cookie key を設定します
     * @param {string} setting 設定する key name
     */
    this.setKey = function (setting) {
      key = setting;
    };
    /**
     * cookie end を取得します
     * @returns {?Date} cookie end Date instance
     */
    this.end = function () {
      return end;
    };
    /**
     * cookie end を設定します
     * @param {Date} setting cookie end Date instance
     */
    this.setEnd = function (setting) {
      end = setting;
    };
    /**
     * cookie path を取得します
     * @returns {string} cookie path を返します
     */
    this.path = function () {
      return path;
    };
    /**
     * cookie path を設定します
     * @param {string} setting 設定する path name
     */
    this.setPath = function (setting) {
      path = setting;
    };
    /**
     * cookie domain を取得します
     * @returns {string} cookie domain を返します
     */
    this.domain = function () {
      return domain;
    };
    /**
     * cookie domain を設定します
     * @param {string} setting 設定する domain name
     */
    this.setDomain = function (setting) {
      domain = setting;
    };
    /**
     * https 通信のときのみクッキー送信を行うかのフラッグを取得します
     * @returns {boolean} https 通信のときのみクッキー送信を行うかのフラッグ
     */
    this.secure = function () {
      return secure;
    };
    /**
     * https 通信のときのみクッキー送信を行うかのフラッグを設定します
     * @param {boolean} setting https 通信のときのみクッキー送信を行うかのフラッグ
     */
    this.setSecure = function (setting) {
      secure = setting;
    };
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * cookie value を取得します
   * @returns {string|null} cookie value を返します
   */


  _createClass(Cookie, [{
    key: 'get',
    value: function get() {
      return Cookie.get(this.key());
    }

    /**
     * cookie value を設定します
     * @param {string} value cookie value
     * @param {?Date} [end=null] cookie end Date instance, null の時はプラウザ `quit` で削除されます
     * @param {string} [path='/'] cookie path
     * @param {string} [domain=''] cookie domain
     * @param {boolean} [secure=false] true: https 通信のときのみ、クッキーが送信されます
     * @returns {string} 設定した cookie 文字列
     */

  }, {
    key: 'set',
    value: function set(value) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.end();
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.path();
      var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.domain();
      var secure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.secure();

      return Cookie.set(this.key(), value, end, path, domain, secure);
    }
    /**
     * cookie を削除します
     * @returns {boolean} true: cookie 削除成功
     */

  }, {
    key: 'remove',
    value: function remove() {
      return Cookie.remove(this.key());
    }
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * cookie value を取得します
     * @param {string} key 取得する cookie key 名称
     * @returns {string|null} cookie value
     */

  }], [{
    key: 'get',
    value: function get(key) {
      var cookie = document.cookie;
      var escapeKey = encodeURIComponent(key).replace(/[-.+*]/g, '\\$&');
      var exp = new RegExp('(?:(?:^|.*;)\\s*' + escapeKey + '\\s*\\=\\s*([^;]*).*$)|^.*$');
      return decodeURIComponent(cookie.replace(exp, '$1')) || null;
    }
    /**
     * cookie value を設定します
     * @param {string} key cookie key
     * @param {string} value cookie value
     * @param {?Date} [end=null] cookie end date Date instance
     * @param {string} [path=/] cookie path
     * @param {string} [domain=''] cookie domain
     * @param {boolean} [secure=false] true: https 通信のときのみ、クッキーが送信されます
     * @returns {string} 設定した cookie 文字列
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
      var domain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var secure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      var cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
      if (end) {
        cookie += '; expires=' + end.toUTCString();
      }
      if (path) {
        cookie += '; path=' + path;
      }
      if (domain) {
        cookie += '; domain=' + domain;
      }
      if (secure) {
        cookie += '; secure';
      }
      document.cookie = cookie;
      return cookie;
    }
    /**
     * cookie を削除します
     *
     * 現在時間より前の時刻を設定します
     * @param {string} key cookie key
     * @returns {boolean} true: 削除成功
     */

  }, {
    key: 'remove',
    value: function remove(key) {
      if (Cookie.has(key)) {
        Cookie.set(key, '', new Date());
        return true;
      }
      return false;
    }
    /**
     * cookie key が存在するかを調べます
     * @param {string} key cookie key
     * @returns {boolean} true: cookie key が存在します
     */

  }, {
    key: 'has',
    value: function has(key) {
      return Cookie.get(key) !== null;
    }
  }]);

  return Cookie;
}();

exports.default = Cookie;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016/12/23
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2015 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Text = __webpack_require__(52);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * URL query をパースします
 */
var Queries = function () {
  /**
   * URL query を受取パースします
   * @param {string} [queryString=location.search] パースする URL 文字列
   */
  function Queries() {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    _classCallCheck(this, Queries);

    var _Queries$parse = Queries.parse(queryString),
        _Queries$parse2 = _slicedToArray(_Queries$parse, 2),
        data = _Queries$parse2[0],
        keys = _Queries$parse2[1];

    var naked = Queries.naked(queryString);
    /**
     * query key を取得します - query key array
     * @type {Array<string>}
     */
    this.keys = keys;
    /**
     * key: value 形式を取得します - URL query を key: value 形式で返します
     * @type {Object}
     */
    this.data = data;
    /**
     * query 文字列を取得します - パースする query 文字列
     * @type {string}
     */
    this.queryString = queryString;
    /**
     * パースしやすいように正規化した query 文字列 - `?` 以降文字 + `&amp;` を `&` へ置換えます
     * @type {string}
     */
    this.naked = naked;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * key が存在するかを調べます
   * @param {string} keyName 調査対象 key 名称
   * @returns {boolean} true: 存在する
   */


  _createClass(Queries, [{
    key: 'has',
    value: function has(keyName) {
      return this.keys.indexOf(keyName) !== -1;
    }
    /**
     * key 値を取得します
     * @param {string} keyName 調査対象 key 名称
     * @returns {string|undefined} 見つかると文字列で返します, 見つからない時は undefined を返します
     */

  }, {
    key: 'get',
    value: function get(keyName) {
      return this.data[keyName];
    }
    /**
     * key: value 形式を取得します
     * @returns {Object} URL query を key: value 形式で返します
     */

  }, {
    key: 'getAll',
    value: function getAll() {
      return this.data;
    }
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    // /**
    //  * `&amp;` を `&` へ置換えます
    //  * @param {string} targetText 操作対象文字列
    //  * @returns {string} `&amp;` を `&` へ置換え返します
    //  */
    // static amp(targetText) {
    //   return targetText.split('&amp;').join('&');
    // }
    /**
     * 文字列先頭に `?` があればそれ以降の文字列を返し {@link Text.and} を実行し `&amp;` を `&` 変換します
     * @param {string} targetText 操作対象文字列
     * @returns {string} query を正規化します
     */

  }], [{
    key: 'naked',
    value: function naked(targetText) {
      // const queryString = Queries.amp(targetText);
      var queryString = _Text2.default.and(targetText);
      return queryString.substr(0, 1) === '?' ? queryString.substring(1) : targetText;
    }
    /**
     * query を kye: value 形式にします
     * @param {string} targetText 操作対象文字列
     * @returns {[Object, Array]} data, keys を返します
     */

  }, {
    key: 'parse',
    value: function parse(targetText) {
      var query = Queries.naked(targetText);
      var pairs = query.split('&');
      var data = {};
      var keys = [];
      pairs.map(function (pair) {
        var keyName = '';
        if (pair && pair.indexOf('=') !== -1) {
          // @type {Array<string>} - `key=value` を `=` で分割する
          var keyValue = pair.split('=');
          // @type {string} keyName
          var key = keyValue.shift();
          // data object へ keyName を key に値をセットする
          data[key] = keyValue.shift();
          keyName = key;
          // key 名称配列へ追加する
          keys.push(key);
        }
        return keyName;
      });

      return [data, keys];
    }
    /**
     * 引数 targetText (query) から引数 keyName 値を取得します
     * @param {string} keyName key 名称
     * @param {string} targetText query
     * @returns {string|undefined} 見つかると文字列で返します, 見つからない時は undefined を返します
     */

  }, {
    key: 'get',
    value: function get(keyName) {
      var targetText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;

      var _Queries$parse3 = Queries.parse(targetText),
          _Queries$parse4 = _slicedToArray(_Queries$parse3, 1),
          data = _Queries$parse4[0];

      return data[keyName];
    }
    /**
     * URL query の key: value 形式を取得します
     * @param {string} targetText query
     * @returns {[Object, Array]} URL query を key: value 形式で返します
     */

  }, {
    key: 'getAll',
    value: function getAll() {
      var targetText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

      // const [data] = Queries.parse(targetText);
      return Queries.parse(targetText);
    }
  }]);

  return Queries;
}();

exports.default = Queries;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Ajax2 = __webpack_require__(111);

var _Ajax3 = _interopRequireDefault(_Ajax2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/06/05 - 21:26
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * fetch API を使用し Ajax request を行います, ref: {@link Ajax}
 * @example
 * const ajax = new Ajax();
 * // async / await 1
 * async function request() {
 *  const json = await thunk.start('https://jsonplaceholder.typicode.com/posts');
 *  const pre = document.getElementById('pre');
 *  pre.innerHTML = JSON.stringify(json);
 * }
 * request();
 * // async / await 2
 * async function request() {
 *  return await thunk.start('https://jsonplaceholder.typicode.com/posts');
 * }
 * request()
 *  .then(json => {
 *    const pre = document.getElementById('pre');
 *    pre.innerHTML = JSON.stringify(json);
 *  });
 * @see http://caniuse.com/#feat=fetch
 * @see https://github.com/github/fetch
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * @see http://getmesh.io/Blog/Make%20AJAX-Requests%20Great%20Again
 * @since 0.3.4
 */
var AjaxThunk = function (_Ajax) {
  _inherits(AjaxThunk, _Ajax);

  function AjaxThunk() {
    _classCallCheck(this, AjaxThunk);

    return _possibleConstructorReturn(this, (AjaxThunk.__proto__ || Object.getPrototypeOf(AjaxThunk)).apply(this, arguments));
  }

  _createClass(AjaxThunk, [{
    key: 'start',

    // ----------------------------------------
    // METHOD
    // ----------------------------------------
    /**
     * <p>Ajax request 開始します</p>
     * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
     * true の時は false にしリクエストを開始します</p>
     *
     * - resolve, reject 関数確認後実行します
     * - Promise instance を返します
     * - json / error を返します
     *
     * @param {string} path Ajax request path
     * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
     * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
     * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
     * @return {Promise} ajax request を開始し fetch Promise 返します
     */
    value: function start(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      // ajax request 開始
      if (!this.can) {
        throw new Error('Ajax request busy: ' + this.can);
      }

      // flag off
      this.disable();

      // @type {Request} Request instance
      var request = this.option(path, method, headers, formData);

      // fetch start
      return fetch(request)
      // @param {Object} response - Ajax response
      .then(function (response) {
        // may be success
        if (response.status !== 200) {
          throw new Error('Ajax status error: (' + response.status + ')');
        }
        return response.json();
      });
    }
  }]);

  return AjaxThunk;
}(_Ajax3.default);

exports.default = AjaxThunk;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Polling2 = __webpack_require__(75);

var _Polling3 = _interopRequireDefault(_Polling2);

var _FpsEvents = __webpack_require__(245);

var _FpsEvents2 = _interopRequireDefault(_FpsEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
// import Events from '../event/Events';

// tick


// tick/events


/**
 * フレームレート毎に `UPDATE` イベントを発生させます
 *
 * @example
 * // 2sec. interval
 * const fps = new Fps(0.5);
 * const update = () => {
 *  // code here, something do
 * };
 * fps.on(Fps.UPDATE, update);
 * fps.start();
 * */
var Fps = function (_Polling) {
  _inherits(Fps, _Polling);

  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * 引数の frame rate に合わせ UPDATE イベントを発生させます
   * @param {number} [fps=30] frame rate, default: 30
   */
  function Fps() {
    var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

    _classCallCheck(this, Fps);

    // @type {Events} - Events
    var _this = _possibleConstructorReturn(this, (Fps.__proto__ || Object.getPrototypeOf(Fps)).call(this, 1000 / fps));

    var events = new _FpsEvents2.default(Fps.UPDATE, _this, _this);
    events.fps = fps;
    /**
     * Fps.UPDATE Events instance
     * @type {Events}
     */
    _this.events = events;
    /**
     * frame rate
     * @type {number}
     */
    _this.fps = fps;
    return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * fps を変更します
   * 1. プロパティ polling 変更
   * 1. 継承 method update 実行
   * @param {number} interval fps
   * @returns {boolean} 継承 method `update` をコールし UPDATE event が発生すると true を返します
   */

  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * フレームレート毎に発生するイベント - fpsUpdate
   * @event UPDATE
   * @type {string}
   */


  _createClass(Fps, [{
    key: 'change',
    value: function change(interval) {
      /**
       * polling 間隔
       * @type {number}
       */
      this.interval = 1000 / interval;
      this.fps = interval;
      this.events.fps = interval;
      // return this.update();
      return this.start();
    }
  }]);

  return Fps;
}(_Polling3.default);

Fps.UPDATE = 'fpsUpdate';
exports.default = Fps;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PollingEvents2 = __webpack_require__(104);

var _PollingEvents3 = _interopRequireDefault(_PollingEvents2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date 2017/06/02 - 15:42
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * {@link Fps} Events
 */
var FpsEvents = function (_PollingEvents) {
  _inherits(FpsEvents, _PollingEvents);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function FpsEvents(type, currentTarget) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, FpsEvents);

    // ---
    /**
     * fps - フレームレート値
     * @type {number}
     */
    var _this = _possibleConstructorReturn(this, (FpsEvents.__proto__ || Object.getPrototypeOf(FpsEvents)).call(this, type, currentTarget, target));

    _this.fps = -1;
    return _this;
  }

  return FpsEvents;
}(_PollingEvents3.default);

exports.default = FpsEvents;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016/10/26 - 14:57
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Array（配列）Utility
 */
var List = function () {
  function List() {
    _classCallCheck(this, List);
  }

  _createClass(List, null, [{
    key: 'filling',

    /**
     * Array.prototype.fill, polyfill
     * @param {number} lengthData 配列長
     * @param {*} value fill する値
     * @returns {Array.<*>} fill 後の配列を返します
     * @private
     */
    value: function filling(lengthData, value) {
      var length = lengthData;
      var arr = [].slice(0);
      while (length > 0) {
        arr.push(value);
        length -= 1;
      }
      return arr;
    }
    /**
     * Array.prototype.fill を行います
     * @param {number} length 配列長
     * @param {*} value fill する値
     * @returns {Array.<*>} fill 後の配列を返しますd
     */

  }, {
    key: 'fill',
    value: function fill(length) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // 関数が使えない時は polyfill 関数を使用します
      if (!_Type2.default.method(Array.prototype.fill)) {
        return List.filling(length, value);
      }
      // native method
      return new Array(length).fill(value);
    }
  }]);

  return List;
}();

exports.default = List;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/12/16 - 16:50
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// --------------------------------
// constant for calculate
/**
 * {@link Times}
 * 計算用定数 - 1 minute
 * ```
 * 1000 * 60
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneMinute = 1000 * 60;
/**
 * {@link Times}
 * 計算用定数 - 1 hour
 * ```
 * 1000 * 60 * 60
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneHour = oneMinute * 60;
/**
 * {@link Times}
 * 計算用定数 - 1 day
 * ```
 * 1000 * 60 * 60 * 24
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneDay = oneHour * 24;
/**
 * {@link Times}
 * 計算用定数 - 1 week
 * ```
 * 1000 * 60 * 60 * 24 * 7
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneWeek = oneDay * 7;
/**
 * {@link Times}
 * 計算用定数 - 1 month
 * ```
 * 1000 * 60 * 60 * 24 * 30
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneMonth = oneDay * 30;

/**
 * 指定時間を計算し Date instance を作成します
 */

var Times = function () {
  function Times() {
    _classCallCheck(this, Times);
  }

  _createClass(Times, null, [{
    key: "present",

    // /**
    //  * 1970-1-1 00:00
    //  * @returns {Date} 1970-1-1 00:00
    //  */
    // static standard() {
    //   return new Date();
    // }
    /**
     * 現在時間 Date instance
     * @returns {Date} 現在時間 Date instance
     */
    value: function present() {
      return new Date();
    }
    /**
     * 指定分後の Date instance
     * @param {number} n 指定分
     * @returns {Date} 指定分後の Date instance
     */

  }, {
    key: "minute",
    value: function minute(n) {
      return new Date(Date.now() + n * oneMinute);
    }
    /**
     * 指定時間後の Date instance
     * @param {number} n 指定時間
     * @returns {Date} 指定時間後の Date instance
     */

  }, {
    key: "hour",
    value: function hour(n) {
      return new Date(Date.now() + n * oneHour);
    }
    /**
     * 指定日後の Date instance
     * @param {number} n 指定日
     * @returns {Date} 指定日後の Date instance
     */

  }, {
    key: "day",
    value: function day(n) {
      return new Date(Date.now() + n * oneDay);
    }
    /**
     * 指定週後の Date instance
     * @param {number} n 指定週
     * @returns {Date} 指定週後の Date instance
     */

  }, {
    key: "week",
    value: function week(n) {
      return new Date(Date.now() + n * oneWeek);
    }
    /**
     * 指定月後の Date instance
     * @param {number} n 指定月
     * @returns {Date} 指定月後の Date instance
     */

  }, {
    key: "month",
    value: function month(n) {
      return new Date(Date.now() + n * oneMonth);
    }
  }]);

  return Times;
}();

exports.default = Times;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/01/19 - 15:13
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// --------------------------------
// copy [native code]
/**
 * copy [native code] - Math.floor
 * @type {function}
 * @private
 * @static
 */
var mathFloor = Math.floor;
/**
 * copy [native code] - Math.max
 * @type {function}
 * @private
 * @static
 */
var mathMax = Math.max;
/**
 * copy [native code] - Math.min
 * @type {function}
 * @private
 * @static
 */
var mathMin = Math.min;
/**
 * copy [native code] - parseInt
 * @type {function}
 * @private
 * @static
 */
var mathInt = self.parseInt;

// --------------------------------
// constant for calculate
/**
 * 計算定数
 * ```
 * 1 / 6
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneSix = 1 / 6;
/**
 * 計算定数
 * ```
 * 0.5
 * ```
 * @type {number}
 * @private
 * @static
 */
var half = 0.5;
/**
 * 計算定数
 * ```
 * 2 / 3
 * ```
 * @type {number}
 * @private
 * @static
 */
var twoThree = 2 / 3;
/**
 * 計算定数
 * ```
 * 1 / 3
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneThree = 1 / 3;
/**
 * 色変換ユーティリティーです
 */

var Iro = function () {
  function Iro() {
    _classCallCheck(this, Iro);
  }

  _createClass(Iro, null, [{
    key: 'rgb2hsl',

    // ----------------------------------------
    // HSL
    // ----------------------------------------
    /**
     * RGB を HSL 変換します
     * @see http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
     * @see http://www.rapidtables.com/convert/color/rgb-to-hsl.htm
     * @param {number} red RGB.red 0 ~ 255
     * @param {number} green RGB.green 0 ~ 255
     * @param {number} blue RGB.blue 0 ~ 255
     * @returns {{h: number, s: number, l: number}}
     * {hue, saturation, luminance} object を返します, それぞれ 0 ~ 1
     * hue: 0 ~ 360 を 360 で正規化されます
     */
    value: function rgb2hsl(red, green, blue) {
      var r = red / 255;
      var g = green / 255;
      var b = blue / 255;
      var maxValue = mathMax(r, g, b);
      var minValue = mathMin(r, g, b);
      // luminance
      var l = (maxValue + minValue) * 0.5;
      // hue
      var h = 0;
      // saturation
      var s = 0;
      if (maxValue === minValue) {
        // achromatic: 〘光学〙無色の; 色消しの
        return {
          h: h,
          s: s,
          l: l
        };
      }
      // ---
      var d = maxValue - minValue;
      s = l > 0.5 ? d / (2 - maxValue - minValue) : d / (maxValue + minValue);
      switch (maxValue) {
        case r:
          {
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          }
        case g:
          {
            h = (b - r) / d + 2;
            break;
          }
        case b:
          {
            h = (r - g) / d + 4;
            break;
          }
        default:
          {
            h = 0;
            break;
          }
      }
      h /= 6;
      // return value
      return {
        h: h,
        s: s,
        l: l
      };
    } // rgb2hsl
    /**
     * HSL to RGB で `saturation !== 0` な時の R, G, B 変換 helper です
     * @param {number} point `(2 * l) - q`
     * @param {number} q `l < 0.5 ? l * (1 + s) : (l + s) - (l * s)`
     * @param {number} hue hue
     * @returns {number} 0 ~ 1 な値を返します
     */

  }, {
    key: 'hue2rgb',
    value: function hue2rgb(point, q, hue) {
      var t = hue;
      if (t < 0) {
        t += 1;
      } else if (t > 1) {
        t -= 1;
      }
      if (t < oneSix) {
        return point + (q - point) * 6 * t;
      } else if (t < half) {
        return q;
      } else if (t < twoThree) {
        return point + (q - point) * (twoThree - t) * 6;
      }
      return point;
    }
    /**
     * HSL to RGB 変換します
     * @param {number} h hue 0 ~ 1 degree / 360 正規化
     * @param {number} s saturation 0 ~ 1
     * @param {number} l luminance 0 ~ 1
     * @returns {{r: number, g: number, b: number}} r, g, b: 0 ~ 255 object を返します
     */

  }, {
    key: 'hsl2rgb',
    value: function hsl2rgb(h, s, l) {
      var r = l;
      var g = l;
      var b = l;
      if (s !== 0) {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var point = 2 * l - q;
        r = Iro.hue2rgb(point, q, h + oneThree);
        g = Iro.hue2rgb(point, q, h);
        b = Iro.hue2rgb(point, q, h - oneThree);
      }
      return {
        r: mathInt(r * 255, 10),
        g: mathInt(g * 255, 10),
        b: mathInt(b * 255, 10)
      };
    }
    // ----------------------------------------
    // HSV
    // ----------------------------------------
    /**
     * RGB to HSV(HSB) 変換
     * @param {number} r RGB.red 0 ~ 255
     * @param {number} g RGB.green 0 ~ 255
     * @param {number} b RGB.blue 0 ~ 255
     * @returns {{h: number, s: number, v: number}} 各 0 ~ 1
     */

  }, {
    key: 'rgb2hsv',
    value: function rgb2hsv(r, g, b) {
      // 正規化
      var red = r / 255;
      var green = g / 255;
      var blue = b / 255;

      var maxValue = mathMax(red, green, blue);
      var minValue = mathMin(red, green, blue);
      var v = maxValue;
      var d = maxValue - minValue;
      var s = maxValue === 0 ? 0 : d / maxValue;
      var h = 0;
      if (maxValue === minValue) {
        // achromatic: 〘光学〙無色の; 色消しの
        return {
          h: h,
          s: s,
          v: v
        };
      }
      // ---
      switch (maxValue) {
        case red:
          {
            h = (green - blue) / d + (green < blue ? 6 : 0);
            break;
          }
        case green:
          {
            h = (blue - red) / d + 2;
            break;
          }
        case blue:
          {
            h = (red - green) / d + 4;
            break;
          }
        default:
          {
            h = 0;
            break;
          }
      }
      h /= 6;
      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * HSV(HSB) to RGB 変換します
     * @param {number} h hue 0 ~ 1
     * @param {number} s saturation 0 ~ 1
     * @param {number} v value(bright) 0 ~ 1
     * @returns {{r: Number, g: Number, b: Number}} 各 0 ~ 255
     */

  }, {
    key: 'hsv2rgb',
    value: function hsv2rgb(h, s, v) {
      var i = mathFloor(h * 6);
      var f = h * 6 - i;
      var point = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);
      var r = 0;
      var g = 0;
      var b = 0;
      // ---
      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = point;
          break;

        case 1:
          r = q;
          g = v;
          b = point;
          break;

        case 2:
          r = point;
          g = v;
          b = t;
          break;

        case 3:
          r = point;
          g = q;
          b = v;
          break;

        case 4:
          r = t;
          g = point;
          b = v;
          break;

        case 5:
          r = v;
          g = point;
          b = q;
          break;

        default:
          r = 0;
          g = 0;
          b = 0;
          break;
      }
      // ---
      return {
        r: mathInt(r * 255, 10),
        g: mathInt(g * 255, 10),
        b: mathInt(b * 255, 10)
      };
    }
    // ----------------------------------------
    // HEX
    // ----------------------------------------
    /**
     * CSS shorthand 色指定をフル変換します
     * @param {string} hex `#f00` な CSS 色形式
     * @returns {?string} `ff0000` フル変換し返します
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     */

  }, {
    key: 'shorthand',
    value: function shorthand(hex) {
      if (typeof hex !== 'string') {
        return null;
      }
      var pattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var color = hex.replace(pattern, function (m, r, g, b) {
        return '' + r + r + g + g + b + b;
      });
      return color.length === 7 ? color : '#' + color;
    }
    /**
     * CSS 色指定を RGB 変換します
     * @param {string} hex CSS 色形式 `#f00` or `#ff0000`
     * @returns {?{r: number, g: number, b: number}} nullable で返します
     */

  }, {
    key: 'hex2rgb',
    value: function hex2rgb(hex) {
      var hexString = Iro.shorthand(hex);
      if (typeof hexString !== 'string') {
        return null;
      }
      // ---
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
      return Array.isArray(result) && result.length === 4 ? {
        r: mathInt(result[1], 16),
        g: mathInt(result[2], 16),
        b: mathInt(result[3], 16)
      } : null;
    }
    /**
     * 0 ~ 255 RGB color number を `00` な 16進形式に変換します
     * @param {number} colorNumber 変換する RGB color number
     * @returns {string} 2桁を保証し 16進 変換後文字列を返します
     */

  }, {
    key: 'int16',
    value: function int16(colorNumber) {
      var hex = colorNumber.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }
    /**
     * RGB を CSS形式 hex 変換します
     * @param {number} r red 0 ~ 255
     * @param {number} g green 0 ~ 255
     * @param {number} b blue 0 ~ 255
     * @returns {string} CSS形式 hex `#ff0000` を返します
     */

  }, {
    key: 'rgb2hex',
    value: function rgb2hex(r, g, b) {
      return '#' + Iro.int16(r) + Iro.int16(g) + Iro.int16(b);
    }
    /**
     * 0 ~ 16777215 数値を `#ffffff` な CSS 16進色形式に変換します
     * @param {number} rgb 0 ~ 16777215 名数値
     * @returns {string} `#ffffff` な CSS 16進色形式を返します
     */

  }, {
    key: 'int2hex',
    value: function int2hex(rgb) {
      var hex = mathFloor(rgb).toString(16);
      var length = hex.length;
      if (length === 6) {
        return '#' + hex;
      }
      var step = 6 - length;
      while (step) {
        hex = '0' + hex;
        step -= 1;
      }
      return '#' + hex;
    }
    /**
     * `#ffffff` な CSS 16進色形式を 10進数変換します
     * @param {string} hex `#f00` or `#ff0000` な CSS 16進色形式
     * @returns {?number} 10進数へ変換し返します
     */

  }, {
    key: 'hex2int',
    value: function hex2int(hex) {
      var hexString = Iro.shorthand(hex);
      if (typeof hexString !== 'string') {
        return null;
      }
      return mathInt(hexString.replace('#', ''), 16);
    }
    /**
     * #FFFFFF な CSS 16進を 0xFFFFFF 変換し 10進数にします
     * @param {string} hex #FFFFFF な CSS 16進
     * @return {Number} 10進数変換後の色ナンバーを返します
     */

  }, {
    key: 'toInt',
    value: function toInt(hex) {
      return parseInt(hex.replace('#', '0x'), 16);
    }
  }]);

  return Iro;
}();

exports.default = Iro;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/08/28 - 17:39
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.props
 * {@link iOS}
 * @type {?object}
 */
var props = null;

/**
 * version 情報を計算します
 * {@link iOS}
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/os (\d+)_(\d+)_?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // iOS N.N.N 削除
  numbers.shift();
  var versions = numbers.map(function (number) {
    var int = parseInt(number, 10);
    return isNaN(int) ? 0 : int;
  });
  props.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  props.major = major;
  props.version = parseFloat(major + '.' + minor + build);
  props.numbers = versions;
};

/**
 * iOS 判定を行います
 * {@link iOS}
 */
var init = function init() {
  if (props) {
    return;
  }
  props = Object.assign({}, _devices2.default.props);
  var ua = _devices2.default.ua;
  var ipad = !!ua.match(/ipad/i);
  var ipod = !!ua.match(/ipod/i);
  var iphone = !!ua.match(/iphone/i) && !ipad && !ipod;
  var ios = ipad || ipod || iphone;
  if (!ios) {
    return;
  }
  var standalone = !!navigator.standalone;
  props.stanalone = standalone;
  props.ios = ios;
  props.ipad = ipad;
  props.ipod = ipod;
  props.iphone = iphone;
  props.phone = iphone || ipod;
  props.tablet = ipad;
  // アプリ内コンテンツ
  props.webView = ios && !standalone && !_devices2.default.safari;
  // version check
  version();
};

/**
 * iOS detector
 */

var iOS = function () {
  function iOS() {
    _classCallCheck(this, iOS);
  }

  _createClass(iOS, null, [{
    key: 'is',

    /**
     * iOS
     * @returns {boolean} true: iOS
     */
    value: function is() {
      init();
      return props.android;
    }
    /**
     * iOS && iPhone or iPod
     * @returns {boolean} true: iOS && iPhone or iPod
     */

  }, {
    key: 'phone',
    value: function phone() {
      init();
      return props.phone;
    }
    /**
     * iOS && iPad
     * @returns {boolean} true: iOS && iPad
     */

  }, {
    key: 'tablet',
    value: function tablet() {
      init();
      return props.tablet;
    }
    /**
     * iOS && iPhone
     * @returns {boolean} true: iOS && iPhone
     */

  }, {
    key: 'iphone',
    value: function iphone() {
      init();
      return props.iphone;
    }
    /**
     * iOS && iPad
     * @returns {boolean} true: iOS && iPad
     */

  }, {
    key: 'ipad',
    value: function ipad() {
      init();
      return props.ipad;
    }
    /**
     * iOS && iPod
     * @returns {boolean} true: iOS && iPod
     */

  }, {
    key: 'ipod',
    value: function ipod() {
      init();
      return props.ipod;
    }
    /**
     * iOS version
     * @returns {number} iOS version, not iOS -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return props.version;
    }
    /**
     * iOS major version
     * @returns {number} iOS major version, not iOS -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return props.major;
    }
    /**
     * iOS version `major.minor.build`
     * @returns {string} iOS version NN.NN.NN 型（文字）で返します, not iOS 空文字列
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return props.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return props.numbers;
    }
    /**
     * iOS webView - 標準 UA のみ対応
     * @returns {boolean} true: iOS webView
     */

  }, {
    key: 'webView',
    value: function webView() {
      init();
      return props.webView;
    }
    /**
     * iOS standalone - app mode
     * @returns {boolean} true: iOS app mode
     */

  }, {
    key: 'standalone',
    value: function standalone() {
      return props.standalone;
    }
  }]);

  return iOS;
}();

exports.default = iOS;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/22 - 19:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link Firefox}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link Firefox}
 * @since 0.4.2
 */
var version = function version() {
  var app = _devices2.default.ua;
  var numbers = app.match(/firefox\/(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  // array
  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !isNaN(int);
  });
  _browsers.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  var option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  _browsers.major = major;
  _browsers.version = parseFloat(major + '.' + minor + build + option);
  _browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link Firefox}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var ua = _devices2.default.ua;
  var firefox = !!ua.match(/firefox/i);
  _browsers.firefox = firefox;
  if (firefox) {
    version();
  }
};

/**
 * iOS Chrome detector
 * @since 0.4.2
 */

var Firefox = function () {
  function Firefox() {
    _classCallCheck(this, Firefox);
  }

  _createClass(Firefox, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Chrome 判定
     * @returns {boolean} true: iOS Chrome
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.firefox;
    }
    /**
     * Firefox Browser version
     * @returns {number} Firefox version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Firefox Browser major version
     * @returns {number} Firefox major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Firefox Browser version `major.minor.build`
     * @returns {string} Firefox version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Firefox;
}();

exports.default = Firefox;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/22 - 19:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link IE}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link IE}
 * @since 0.4.2
 */
var version = function version() {
  var major = -1;
  if (_browsers.ie) {
    if (_browsers.ie11) {
      major = 11;
    } else if (_browsers.ie10) {
      major = 10;
    } else if (_browsers.ie9) {
      major = 9;
    } else if (_browsers.ie8) {
      major = 8;
    } else if (_browsers.ie7) {
      major = 7;
    } else if (_browsers.ie6) {
      major = 6;
    }
  }
  _browsers.build = String(major);
  _browsers.major = major;
  _browsers.version = major;
  if (major >= 0) {
    _browsers.numbers = [major];
  }
};

/**
 * browser 判別します
 * {@link IE}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var ua = _devices2.default.ua;
  var ie = !!ua.match(/msie/i);
  _browsers.ie = ie;
  if (ie) {
    _browsers.ie10 = !!ua.match(/msie [10]/i);
    _browsers.ie9 = !!ua.match(/msie [9]/i);
    _browsers.ie8 = !!ua.match(/msie [8]/i);
    _browsers.ie7 = !!ua.match(/msie [7]/i);
    _browsers.ie6 = !!ua.match(/msie [6]/i);
  } else {
    var ie11 = !!ua.match(/trident\/[7]/i) && !!ua.match(/rv:[11]/i);
    ie = ie11;
    _browsers.ie = ie11;
    _browsers.ie11 = ie11;
  }
  if (ie) {
    version();
  }
};

/**
 * IE detector
 * @since 0.4.2
 */

var IE = function () {
  function IE() {
    _classCallCheck(this, IE);
  }

  _createClass(IE, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * IE 判定
     * @returns {boolean} true: IE
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.ie;
    }
    /**
     * IE 6 判定
     * @returns {boolean} true: IE 6
     */

  }, {
    key: 'is6',
    value: function is6() {
      init();
      return _browsers.ie6;
    }
    /**
     * IE 7 判定
     * @returns {boolean} true: IE 7
     */

  }, {
    key: 'is7',
    value: function is7() {
      init();
      return _browsers.ie7;
    }
    /**
     * IE 8 判定
     * @returns {boolean} true: IE 8
     */

  }, {
    key: 'is8',
    value: function is8() {
      init();
      return _browsers.ie8;
    }
    /**
     * IE 9 判定
     * @returns {boolean} true: IE 9
     */

  }, {
    key: 'is9',
    value: function is9() {
      init();
      return _browsers.ie9;
    }
    /**
     * IE 10 判定
     * @returns {boolean} true: IE 10
     */

  }, {
    key: 'is10',
    value: function is10() {
      init();
      return _browsers.ie10;
    }
    /**
     * IE 11 判定
     * @returns {boolean} true: IE 11
     */

  }, {
    key: 'is11',
    value: function is11() {
      init();
      return _browsers.ie11;
    }
    /**
     * IE Browser version
     * @returns {number} IE version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * IE Browser major version
     * @returns {number} IE major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * IE Browser version `major.minor.build`
     * @returns {string} IE version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return IE;
}();

exports.default = IE;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2017 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2017/09/22 - 19:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _devices = __webpack_require__(11);

var _devices2 = _interopRequireDefault(_devices);

var _CriOS = __webpack_require__(79);

var _CriOS2 = _interopRequireDefault(_CriOS);

var _Edge = __webpack_require__(80);

var _Edge2 = _interopRequireDefault(_Edge);

var _Chrome = __webpack_require__(114);

var _Chrome2 = _interopRequireDefault(_Chrome);

var _FxiOS = __webpack_require__(115);

var _FxiOS2 = _interopRequireDefault(_FxiOS);

var _Android = __webpack_require__(77);

var _Android2 = _interopRequireDefault(_Android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * {@link devices}.browsers
 * {@link Safari}
 * @type {?object}
 * @since 0.4.2
 */
var _browsers = null;

/**
 * version 情報を計算します
 * {@link Safari}
 * @since 0.4.2
 */
var version = function version() {
  var app = _devices2.default.app;
  var numbers = app.match(/version\/(\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  // array
  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !isNaN(int);
  });
  _browsers.build = versions.join('.');
  var major = parseInt(versions[0], 10);
  var minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  var build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  var option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  _browsers.major = major;
  _browsers.version = parseFloat(major + '.' + minor + build + option);
  _browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link Safari}
 * @since 0.4.2
 */
var init = function init() {
  if (_browsers) {
    return;
  }
  _browsers = Object.assign({}, _devices2.default.browsers);
  var safari = _devices2.default.safari;
  if (_CriOS2.default.is() || _Edge2.default.is() || _Chrome2.default.is() || _FxiOS2.default.is() || _Android2.default.standard()) {
    safari = false;
  }
  _browsers.safari = safari;
  if (safari) {
    version();
  }
};

/**
 * iOS Chrome detector
 * @since 0.4.2
 */

var Safari = function () {
  function Safari() {
    _classCallCheck(this, Safari);
  }

  _createClass(Safari, null, [{
    key: 'browsers',

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Chrome 判定
     * @returns {boolean} true: iOS Chrome
     */

  }, {
    key: 'is',
    value: function is() {
      init();
      return _browsers.safari;
    }
    /**
     * Safari Browser version
     * @returns {number} Safari version, not Android -1
     */

  }, {
    key: 'version',
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Safari Browser major version
     * @returns {number} Safari major version, not Android -1
     */

  }, {
    key: 'major',
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Safari Browser version `major.minor.build`
     * @returns {string} Safari version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: 'build',
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: 'numbers',
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Safari;
}();

exports.default = Safari;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016/10/06 - 21:49
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Distributed under the terms of the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

// css


// don


// util


var _Style = __webpack_require__(113);

var _Style2 = _interopRequireDefault(_Style);

var _Bounding = __webpack_require__(116);

var _Bounding2 = _interopRequireDefault(_Bounding);

var _Classes = __webpack_require__(117);

var _Classes2 = _interopRequireDefault(_Classes);

var _Type = __webpack_require__(24);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * HTMLElement の操作を行います。
 * 操作のために各種インスタンスを保持します
 * - {@link Classes}
 * - {@link Style}
 * - {@link Bounding}
 */
var Elements = function () {
  _createClass(Elements, null, [{
    key: 'id',

    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * 引数の id attribute value で HTMLElement を `document.getElementById` で取得します
     * @param {string} idName id attribute value
     * @return {?Element} Element を返します, 取得できない時は null を返します
     */
    value: function id(idName) {
      var element = self.document.getElementById(idName);
      // 存在チェックを行います
      return _Type2.default.exist(element) ? element : null;
    }
    /**
     * querySelector を使用し Element を探します
     * @param {string} selector 探索 selector
     * @param {Element|*} [parentNode=document] 親 Node|Element
     * @return {?Element} Element or null
     */

  }, {
    key: 'select',
    value: function select(selector) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.document;

      return parentNode.querySelector(selector);
    }
    /**
     * querySelectorAll を使用し Element を探します
     * @param {string} selector 探索 selector
     * @param {Element|*} [parentNode=document] 親 Node|Element
     * @return {?NodeList} NodeList or null
     */

  }, {
    key: 'selects',
    value: function selects(selector) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.document;

      var elements = parentNode.querySelectorAll(selector);
      return elements.length > 0 ? elements : null;
    }
    // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * 操作対象 Element を保存します
     * @param {Element|Node} element 操作対象 Element
     */

  }]);

  function Elements(element) {
    _classCallCheck(this, Elements);

    /**
     * 対象 Element の CSS 操作を行う Style instance
     * @type {Style}
     */
    this.style = new _Style2.default(element);
    /**
     * Element class 操作のために instance を作成します - Classes instance
     * @type {Classes}
     */
    this.classes = new _Classes2.default(element);
    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
    /**
     * Element class `ClientRect` 取得のために instance を作成します
     * @type {Bounding}
     */
    this.bounding = new _Bounding2.default(element);
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * `getBoundingClientRect` を使用し引数 element の offset 値を取得します
   *
   * ```
   * {{top: Number, right: Number, left: Number, bottom: Number, width: Number, height: Number}}
   * ```
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   *
   * @return {ClientRect} プロパティ element の offset 値を返します
   */


  _createClass(Elements, [{
    key: 'offset',
    value: function offset() {
      return this.bounding.offset();
    }
  }]);

  return Elements;
}();

exports.default = Elements;

/***/ })
/******/ ]);