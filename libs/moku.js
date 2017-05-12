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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(91);

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(92);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(55);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(57);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(57);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(39)('wks')
  , uid        = __webpack_require__(26)
  , Symbol     = __webpack_require__(10).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
Events = function () {
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} [currentTarget=this] current イベント発生インスタンス
   * @param {*} [target=this] イベント発生インスタンス
   * */
  function Events(type) {var currentTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;(0, _classCallCheck3.default)(this, Events);
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
   * @returns {Events} 複製を返します
   */(0, _createClass3.default)(Events, [{ key: "clone", value: function clone()
    {
      return new Events(this.type, this.currentTarget, this.target);
    } }]);return Events;}();exports.default = Events;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);












var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
    // @type {Object}
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
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(10)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(31)
  , hide      = __webpack_require__(17)
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(60)
  , toPrimitive    = __webpack_require__(41)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _keys = __webpack_require__(56);var _keys2 = _interopRequireDefault(_keys);var _isInteger = __webpack_require__(90);var _isInteger2 = _interopRequireDefault(_isInteger);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
      // [参考] jQuery 2.x, jQuery 2 関数は文字列 "2" も true にするので type check を追加した
      return typeof target === 'number' && !Type.array(target) && target - parseFloat(target) + 1 >= 0;
    }
    /**
       * 引数(target)が int かを `Number.isInteger` を使用し調べます
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
       * Object型 引数 `object` は String型 引数 `key` を [key] として所持しているかを調べます
       * @deprecated instead use Type.has
       * @param {Object} target 調査対象
       * @param {string} key Object.key 名称
       * @returns {boolean} 存在する時は true を返します
       */ }, { key: 'hasKey', value: function hasKey(
    target, key) {
      return Type.has(target, key);
    }
    /**
       * Object型 引数 `object` は String型 引数 `key` を [key] として所持しているかを調べます
       * @param {Object} target 調査対象
       * @param {string} key Object.key 名称
       * @returns {boolean} 存在する時は true を返します
       */ }, { key: 'has', value: function has(
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
       * @deprecated instead use Type.extension
       * @param {string} fileName 取得したいファイル名称
       * @returns {string} ファイル名の拡張子を返します
       */ }, { key: 'getExtension', value: function getExtension(
    fileName) {
      return Type.extension(fileName);
    }
    /**
       * ファイル名から拡張子を取得します
       * @param {string} fileName 取得したいファイル名称
       * @returns {string} ファイル名の拡張子を返します
       */ }, { key: 'extension', value: function extension(
    fileName) {
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
      return ['jpg', 'png', 'jpeg', 'gif'].indexOf(Type.extension(fileName)) !== -1;
    } }]);return Type;}();exports.default = Type;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(112)
  , defined = __webpack_require__(32);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(11)
  , createDesc = __webpack_require__(22);
module.exports = __webpack_require__(14) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(66)
  , enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                */var
Text = function () {function Text() {(0, _classCallCheck3.default)(this, Text);}(0, _createClass3.default)(Text, null, [{ key: 'dash',
    /**
                                                                                                                                        * camel case を hyphenation に変換します
                                                                                                                                        * @param {string} str 操作対象文字列
                                                                                                                                        * @returns {string} キャメルケースをハイフネーションに変換後文字列を返します
                                                                                                                                        */value: function dash(
    str) {
      return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
    /**
       * camel case へ変換します
       * @param {string} str 操作対象文字列
       * @returns {*|void|string|XML} キャメルケース文字列を返します
       */ }, { key: 'camel', value: function camel(
    str) {
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
       */ }, { key: 'comma', value: function comma(
    number) {var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ja-JP';
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
       */ }, { key: 'replace', value: function replace(
    targetText, targetWord, replaceWord) {
      return targetText.split(targetWord).join(replaceWord);
    }
    /**
       * 文字列から単語を削除します
       * @param {string} targetText 置換え対象文字列
       * @param {string} targetWord 削除する単語
       * @returns {string} 削除後の文字列を返します
       */ }, { key: 'remove', value: function remove(
    targetText, targetWord) {
      return Text.replace(targetText, targetWord, '');
    }
    /**
       * 文字列の `&` を `&amp;` へ置換えます
       * @param {string} targetText 操作対象文字列
       * @returns {string} `&amp;` 置換え後の文字列を返します
       */ }, { key: 'amp', value: function amp(
    targetText) {
      return Text.replace(targetText, '&', '&amp;');
    }
    /**
       * 文字列の `&amp;` を `&` へ置換えます
       * @param {string} targetText 操作対象文字列
       * @returns {string} `&` 置換え後の文字列を返します
       */ }, { key: 'and', value: function and(
    targetText) {
      return Text.replace(targetText, '&amp;', '&');
    } }]);return Text;}();exports.default = Text;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(125)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(61)(String, 'String', function(iterated){
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

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);












var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
var _Events = __webpack_require__(7);var _Events2 = _interopRequireDefault(_Events);


var _Cycle = __webpack_require__(51);var _Cycle2 = _interopRequireDefault(_Cycle);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
                                                                                                                                                                            */var
Polling = function (_EventDispatcher) {(0, _inherits3.default)(Polling, _EventDispatcher);
  /**
                                                                                            * 引数の polling に合わせ UPDATE イベントを発生させます
                                                                                            * @param {number} [interval=1000] イベント発生間隔 milliseconds
                                                                                            */
  function Polling() {var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;(0, _classCallCheck3.default)(this, Polling);

    // @type {Cycle} - Cycle instance
    var _this = (0, _possibleConstructorReturn3.default)(this, (Polling.__proto__ || (0, _getPrototypeOf2.default)(Polling)).call(this));var cycle = _Cycle2.default.factory();
    var boundUpdate = _this.update.bind(_this);
    var events = new _Events2.default(Polling.UPDATE, _this, _this);
    /**
                                                                      * Cycle instance を取得します
                                                                      * @ty[e {Cycle}
                                                                      */
    _this.cycle = cycle;
    /**
                          * 間隔(ms)
                          * @type {number}
                          */
    _this.interval = interval;
    /**
                                * bound update, Cycle.UPDATE event handler
                                * @returns {function}
                                */
    _this.boundUpdate = boundUpdate;
    /**
                                      * Events instance - Polling.UPDATE Events object
                                      * @type {Events}
                                      */
    _this.events = events;
    /**
                            * polling event 発生時間, event を発火すると 0 にリセットされます
                            * @type {number}
                            */
    _this.begin = 0;
    /**
                      * Cycle 監視開始フラッグ
                      * @type {boolean}
                      */
    _this.started = false;return _this;
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
     * @param {number} interval polling 時間
     * @returns {boolean} `update` をコールし Polling.UPDATE event が発生すると true を返します
     */value: function change(
    interval) {
      this.interval = interval;
      return this.update();
    }
    /**
       * started flag を反転させ現在の started flag 状態を取得します
       * @returns {boolean} 現在の started flag 状態を返します
       */ }, { key: 'turnOver', value: function turnOver()
    {
      this.started = !this.started;
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
      events.interval = this.interval;
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
      cycle.on(_Cycle2.default.UPDATE, this.boundUpdate);
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
      this.cycle.off(_Cycle2.default.UPDATE, this.boundUpdate);
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
    /**
       * Polling.UPDATE event を発生します
       * @param {Events} events Polling.UPDATE event object
       * @returns {void}
       */ }, { key: 'fire', value: function fire(
    events) {
      this.dispatch(events);
    } }], [{ key: 'UPDATE', get: function get() {return 'pollingUpdate';} }]);return Polling;}(_EventDispatcher3.default); // tick
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
exports.default = Polling;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                */var
Vectors = function () {
  /**
                        * 座標と現在時間を元にインスタンスを作成します
                        * @param {number} [x=0] 座標 x
                        * @param {number} [y=0] 座標 y
                        * @param {number} [time=Date.now()] 時間 milli seconds
                        */
  function Vectors() {var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();(0, _classCallCheck3.default)(this, Vectors);
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
     */(0, _createClass3.default)(Vectors, [{ key: "reset", value: function reset()
    {
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
       */ }, { key: "update", value: function update(
    x, y) {var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
      this.x = x;
      this.y = y;
      this.time = time;

      return this;
    }
    /**
       * 引数 vectors 間の距離を測ります
       * @param {Vectors} vectors 計測したい対象 Vector instance
       * @returns {number} 距離を返します
       */ }, { key: "distance", value: function distance(
    vectors) {
      var distanceX = this.x - vectors.x;
      var distanceY = this.y - vectors.y;
      var sqrt = distanceX * distanceX + distanceY * distanceY;
      return Math.sqrt(sqrt);
    }
    /**
       * 引数 vectors との時間差を計算します
       * @param {Vectors} vectors 計測したい対象 Vector instance
       * @returns {number} 時間差(milli seconds) を返します
       */ }, { key: "duration", value: function duration(
    vectors) {
      return this.time - vectors.time;
    }
    /**
       * 複製を作成し返します
       * @returns {Vectors} 複製を返します
       */ }, { key: "clone", value: function clone()
    {
      var clone = new Vectors(this.x, this.y, this.time);
      clone.scrolling = this.scrolling;
      return clone;
    }
    /**
       * ベクトルの大きさの２乗の平方根を計算します
       * @returns {number} ベクトルの大きさの２乗の平方根を返します
       */ }, { key: "length", value: function length()
    {
      var x = this.x;
      var y = this.y;
      return Math.sqrt(x * x + y * y);
    }
    /**
       * ベクトルの値を scalar 値で除算します
       *
       * @param {number} scalar 除算母数
       * @returns {Vectors} 除算後の Vector を返します
       */ }, { key: "divideByScalar", value: function divideByScalar(
    scalar) {
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
       */ }, { key: "multiplyByScalar", value: function multiplyByScalar(
    scalar) {
      var clone = this.clone();
      clone.x *= scalar;
      clone.y *= scalar;
      return clone;
    }
    /**
       * 現在の Vectors を元に引数 `maxValue` 以下にした `Vectors` を取得します
       * @param {number} maxValue 最高目標値
       * @returns {Vectors} `maxValue` 以下にした `Vectors` を返します
       */ }, { key: "truncate", value: function truncate(
    maxValue) {
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
       */ }, { key: "normalize", value: function normalize()
    {
      return this.divideByScalar(this.length());
    }
    /**
       * ベクトルが正規化されているかを判定します
       * @returns {boolean} true: 正規化されている
       */ }, { key: "isNormalize", value: function isNormalize()
    {
      return this.length() === 1;
    }
    /**
       * 引数 vectors との X 値を減算します
       * @param {Vectors} vectors 計測したい対象 Vectors instance
       * @returns {number} X 値を減算し返します
       */ }, { key: "betweenX", value: function betweenX(
    vectors) {
      return this.x - vectors.x;
    }
    /**
       * 引数 vectors との Y 値を減算します
       * @param {Vectors} vectors 計測したい対象 Vectors instance
       * @returns {number} Y 値を減算し返します
       */ }, { key: "betweenY", value: function betweenY(
    vectors) {
      return this.y - vectors.y;
    }
    /**
       * 引数 vectors との time 値を減算します
       * @param {Vectors} vectors 計測したい対象 Vectors instance
       * @returns {number} time 値を減算し返します
       */ }, { key: "betweenTime", value: function betweenTime(
    vectors) {
      return this.time - vectors.time;
    }
    /**
       * 引数 vectors との x, y, time 値を減算します
       * @param {Vectors} vectors 計測したい対象 Vectors instance
       * @returns {Vectors} 引数 vectors との x, y, time 値を減算した clone を返します
       */ }, { key: "between", value: function between(
    vectors) {
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
       */ }, { key: "dot", value: function dot(
    vectors) {
      return this.x * vectors.x + this.y * vectors.y;
    }
    /**
       * 引数ベクトルの値(x, y)が等しいかを判定します
       * @param {Vectors} vectors 計測したい対象 Vectors instance
       * @returns {boolean} true: 等しい
       */ }, { key: "equals", value: function equals(
    vectors) {
      return vectors.x === this.x && vectors.y === this.y;
    }
    /**
       * 引数ベクトルとの角度を計算します
       * @param {Vectors} vectors 計測したい対象 Vectors instance
       * @returns {number} 角度を返します
       */ }, { key: "angle", value: function angle(
    vectors) {
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
    } }]);return Vectors;}();exports.default = Vectors;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(106);
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
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(13)
  , dPs         = __webpack_require__(122)
  , enumBugKeys = __webpack_require__(33)
  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(59)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(111).appendChild(iframe);
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
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f
  , has = __webpack_require__(15)
  , TAG = __webpack_require__(6)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(39)('keys')
  , uid    = __webpack_require__(26);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(10)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(34)
  , wksExt         = __webpack_require__(43)
  , defineProperty = __webpack_require__(11).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var global        = __webpack_require__(10)
  , hide          = __webpack_require__(17)
  , Iterators     = __webpack_require__(19)
  , TO_STRING_TAG = __webpack_require__(6)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _keys = __webpack_require__(56);var _keys2 = _interopRequireDefault(_keys);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);











var _Text = __webpack_require__(23);var _Text2 = _interopRequireDefault(_Text);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * CSS short hand pattern を管理します
                                                                                                                                                                              */var
Patterns = function () {function Patterns() {(0, _classCallCheck3.default)(this, Patterns);}(0, _createClass3.default)(Patterns, null, [{ key: 'settings',
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
                                                                                                                                                            */value: function settings()
    {
      return {
        padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
        margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
        'border-color': ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
        'border-style': ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
        'border-width': ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'] };

    }
    /**
       * 引数 `str` が調査対象 className かを判定します
       * @param {string} str CSS className
       * @returns {boolean} 調査対象の時に true を返します
       */ }, { key: 'match', value: function match(
    str) {
      // camel case を dash(hyphenation)へ変換します
      var key = _Text2.default.dash(str);
      // settings パターンキーと合致してるかを調査します
      return (0, _keys2.default)(Patterns.settings()).indexOf(key) !== -1;
    }
    /**
       * 引数 `str` をキーにした操作対象のリストを取得します
       * @param {string} str CSS className
       * @returns {Array<string>|undefined} 引数 `str` をキーにした操作対象のリスト
       */ }, { key: 'get', value: function get(
    str) {
      // camel case を dash(hyphenation)へ変換します
      var key = _Text2.default.dash(str);
      return Patterns.settings()[key];
    } }]);return Patterns;}(); /**
                                * Copyright (c) 2011-2016 inazumatv.com, inc.
                                * @author (at)taikiken / http://inazumatv.com
                                * @date 2016/11/22 - 13:26
                                *
                                * Distributed under the terms of the MIT license.
                                * http://www.opensource.org/licenses/mit-license.html
                                *
                                * This notice shall be included in all copies or substantial portions of the Software.
                                *
                                */exports.default = Patterns;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);












var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);
var _Text = __webpack_require__(23);var _Text2 = _interopRequireDefault(_Text);


var _Patterns = __webpack_require__(45);var _Patterns2 = _interopRequireDefault(_Patterns);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                        * Element の style を操作します
                                                                                                                                                                                        */var
Style = function () {
  /**
                      * 引数 element の初期 style 設定を保存し復元できるようにします
                      * @param {?Element} element 操作対象 Element
                      */
  function Style(element) {(0, _classCallCheck3.default)(this, Style);
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
  // STATIC METHOD
  // ----------------------------------------
  /**
   * インスタンス作成時の inline CSS を上書きします
   * @param {string} style 上書き用 CSS 設定
   * @returns {string} 上書きされた CSS
   */(0, _createClass3.default)(Style, [{ key: 'update', value: function update(
    style) {
      this.css = style;
      return style;
    }
    /**
       * element style を取得します, [getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) を使用します
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
       * @param {Object} view Document.defaultView @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
       * @param {Element} element 操作対象 Element
       * @param {string} [property] 調査対象 CSS property name, 省略すると `CSSStyleDeclaration` 全セットを返します
       * @returns {CssStyle|string|undefined} style value を返します
       */ }, { key: 'get',

































    // ----------------------------------------
    // METHOD
    // ----------------------------------------
    /**
     * style value を取得します
     * @param {string} [property] 調査する style property name
     * @return {string} style value を返します
     */value: function get(
    property) {
      var element = this.element;
      var ownerDocument = element.ownerDocument;
      var defaultView = ownerDocument.defaultView;
      var style = Style(defaultView, element, property);
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
       */ }, { key: 'set', value: function set(
    property, value) {
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
       */ }, { key: 'current', value: function current()
    {
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
       */ }, { key: 'restore', value: function restore()
    {
      var css = this.original;
      this.element.style.cssText = css;
      return css;
    }
    /**
       * `save` 実行時に設定されている inline style を default にします
       * @returns {string} 設定されている inline style を返します
       */ }, { key: 'save', value: function save()
    {
      var style = this.current();
      return this.update(style);
    } }], [{ key: 'compute', value: function compute(view, element, property) {var style = view.getComputedStyle(element, null);if (_Type2.default.exist(property)) {var props = property.replace(/([A-Z])/g, '-$1').toLowerCase();return style.getPropertyValue(props);}return style;} /**
                                                                                                                                                                                                                                                                                         * CSS 設定値の short hand をパターン {@link Patterns} から探し返します
                                                                                                                                                                                                                                                                                         * @param {Object} view Document.defaultView @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
                                                                                                                                                                                                                                                                                         * @param {Element} element 操作対象 Element
                                                                                                                                                                                                                                                                                         * @param {Array<string>} patterns 調査対象 CSS property name の配列
                                                                                                                                                                                                                                                                                         * @returns {CssStyle|string|undefined} style value を返します
                                                                                                                                                                                                                                                                                         */ }, { key: 'shortHand', value: function shortHand(view, element, patterns) {var top = Style.compute(view, element, patterns[0]);var right = Style.compute(view, element, patterns[1]);var bottom = Style.compute(view, element, patterns[2]);var left = Style.compute(view, element, patterns[3]);if (top === bottom) {if (right === left) {if (top === right) {return top;}return top + ' ' + right;}return top + ' ' + right + ' ' + bottom + ' ' + left;} else if (right === left) {return top + ' ' + right + ' ' + bottom;}return top + ' ' + right + ' ' + bottom + ' ' + left;} }]);return Style;}(); // css
/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 21:52
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */ // util
exports.default = Style;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMClientRect
                                                                                                                                                                                                                                                                                                                                                                                                                                                */var
Bounding = function () {
  /**
                         * 操作対象 Element を保存します
                         * @param {Element} element 操作対象 Element
                         */
  function Bounding(element) {(0, _classCallCheck3.default)(this, Bounding);
    /**
                                                                              * 操作対象 Element
                                                                              * @type {Element}
                                                                              */
    this.element = element;
  }
  /**
     * `getBoundingClientRect` を使用しプロパティ element の offset 値を取得します
     * @return {ClientRect} read only ClientRect を返します
     */(0, _createClass3.default)(Bounding, [{ key: "offset", value: function offset()
    {
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
       *  */ }, { key: "clone", value: function clone()
    {
      return Bounding.clone(this.offset());
    }
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
       */ }], [{ key: "offset", value: function offset(
    element) {
      return element.getBoundingClientRect();
    }
    /**
       * ClientRect の複製を Object 化し writable にします
       * @param {ClientRect} offset 複製元 ClientRect
       * @return {{
       *  top: number,
       *  right: number,
       *  bottom: number,
       *  left: number,
       *  width: number,
       *  height: number}} ClientRect の複製 (Object) を返します
       */ }, { key: "clone", value: function clone(
    offset) {
      return {
        top: offset.top,
        right: offset.right,
        bottom: offset.bottom,
        left: offset.left,
        width: offset.width,
        height: offset.height };

    } }]);return Bounding;}();exports.default = Bounding;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _from = __webpack_require__(87);var _from2 = _interopRequireDefault(_from);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */var
Classes = function () {
  /**
                        * 操作対象 Element を保持します
                        * @param {Element} element 操作対象 Element
                        */
  function Classes(element) {(0, _classCallCheck3.default)(this, Classes);
    /**
                                                                            * 操作対象 Element
                                                                            * @type {Element}
                                                                            */
    this.element = element;
  }
  /**
     * className を有するかを調べます
     * @param {string} className 調査対象 CSS class name
     * @returns {boolean} 存在すると true を返します
     */(0, _createClass3.default)(Classes, [{ key: 'has', value: function has(
    className) {
      return Classes.has(this.element, className);
    }
    /**
       * className を追加します
       * @param {string} className 追加対象 CSS class name
       * @returns {boolean} 追加に成功すると true を返します
       */ }, { key: 'add', value: function add(
    className) {
      return Classes.add(this.element, className);
    }
    /**
       * className を削除します
       * @param {string} className 削除対象 CSS class name
       * @returns {boolean} 削除に成功すると true を返します
       */ }, { key: 'remove', value: function remove(
    className) {
      return Classes.remove(this.element, className);
    }
    /**
       * Elementが引数 className を有するかを調べます
       * @param {Element} element 操作対象 Element
       * @param {string} className 調査対象 CSS class name
       * @returns {boolean} 存在すると true を返します
       */ }], [{ key: 'has', value: function has(
    element, className) {
      var elementClasses = element.classList ?
      (0, _from2.default)(element.classList) :
      Classes.convert(element);
      return elementClasses.indexOf(className) !== -1;
    }
    /**
       * Element へ引数 className を追加します
       * @param {Element} node 操作対象 Element
       * @param {string} className 追加対象 CSS class name
       * @returns {boolean} 追加に成功すると true を返します
       */ }, { key: 'add', value: function add(
    node, className) {
      // CSS class の存在チェック
      if (Classes.has(node, className)) {
        return false;
      }
      // argument copy
      var element = node;
      // @type {Array<string>} - element class を取得し配列へ変換
      var elementClasses = element.classList ?
      (0, _from2.default)(element.classList) :
      Classes.convert(element);
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
       */ }, { key: 'remove', value: function remove(
    node, className) {
      if (!Classes.has(node, className)) {
        return false;
      }
      // argument copy
      var element = node;
      // @type {Array<string>} - element class を取得し配列へ変換
      var elementClasses = element.classList ?
      (0, _from2.default)(element.classList) :
      Classes.convert(element);
      // 配列での削除対象 class の位置を取得します
      var index = elementClasses.indexOf(className);
      // 配列位置を元に削除実行します
      elementClasses.splice(index, 1);
      // 削除後配列を ' '（ワンスペース）でつなぎ文字列変換後に設定します
      element.className = elementClasses.join(' ');
      return true;
    }
    /**
       * 可哀相な IE のための配列コンバーター, .classList 代用します
       * @param {Element} element 操作対象 NodeList
       * @returns {Array} 配列にコンバートして返します
       */ }, { key: 'convert', value: function convert(
    element) {
      var arr = element.classList ?
      element.classList :
      element.className.split(' ');
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
    } }]);return Classes;}();exports.default = Classes;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(24);var _symbol2 = _interopRequireDefault(_symbol);












var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
var _ScrollEvents = __webpack_require__(54);var _ScrollEvents2 = _interopRequireDefault(_ScrollEvents);


var _Freeze = __webpack_require__(86);var _Freeze2 = _interopRequireDefault(_Freeze);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                      * new を許可しないための Symbol
                                                                                                                                                                                      * @type {Symbol}
                                                                                                                                                                                      * @private
                                                                                                                                                                                      */
var singletonSymbol = (0, _symbol2.default)('Scroll singleton symbol');
/**
                                                                         * singleton instance, nullable
                                                                         * @type {?Scroll}
                                                                         * @private
                                                                         */ // util
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
 */ // event
var instance = null; /**
                      * window scroll event を監視し通知を行います
                      * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
                      *
                      * ```
                      * const instance = Scroll.factory();
                      * ```
                      */var Scroll = function (_EventDispatcher) {(0, _inherits3.default)(Scroll, _EventDispatcher); /**
                                                                                                                      * singleton です
                                                                                                                      * @param {Symbol} checkSymbol singleton を保証するための private instance
                                                                                                                      * @returns {Scroll} singleton instance を返します
                                                                                                                      */function Scroll(checkSymbol) {var _ret2;(0, _classCallCheck3.default)(this, Scroll); // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {throw new Error('don\'t use new, instead use static factory method.');} // instance 作成済みかをチェックし instance が null の時 this を設定します
    if (instance !== null) {var _ret;return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);}
    // onetime setting
    var _this = (0, _possibleConstructorReturn3.default)(this, (Scroll.__proto__ || (0, _getPrototypeOf2.default)(Scroll)).call(this));
    instance = _this;

    // event handler
    // const boundScroll = this.scroll.bind(this);
    /**
     * bound scroll, window.onscroll event handler
     * @type {function}
     */
    _this.boundScroll = _this.scroll.bind(_this);
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
    /**
                          * start 済みフラッグ
                          * @type {boolean}
                          * @default false
                          */
    _this.started = false;

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
   */(0, _createClass3.default)(Scroll, [{ key: 'start',



    // ----------------------------------------
    // METHOD
    // ----------------------------------------
    /**
     * scroll event を監視します
     * @returns {Scroll} method chain 可能なように instance を返します
     */value: function start()
    {
      if (this.started) {
        return this;
      }
      this.started = true;
      window.addEventListener('scroll', this.boundScroll, false);
      return this;
    }
    /**
       * scroll event を監視を止めます
       * @returns {Scroll} method chain 可能なように instance を返します
       */ }, { key: 'stop', value: function stop()
    {
      if (!this.started) {
        return this;
      }
      this.started = false;
      window.removeEventListener('scroll', this.boundScroll);
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
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * y 位置に scroll top を即座に移動させます
     * @param {number} [y=0] scroll top 目標値
     * @param {number} [delay=0] time out 遅延 ms
     * @returns {number} time out id
     */ }], [{ key: 'jump', value: function jump()
    {var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return setTimeout(function () {window.scrollTo(0, y);}, delay);
    }
    /**
       * {@link Freeze}.freeze を実行し scroll 操作を一定期間不能にします
       * @returns {number} time out ID
       */ }, { key: 'freeze', value: function freeze()
    {
      return _Freeze2.default.freeze();
    }
    /**
       * scroll top 位置
       * @returns {number} scroll top 位置を返します
       * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
       */ }, { key: 'y', value: function y()
    {
      return typeof window.pageYOffset !== 'undefined' ?
      window.pageYOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    // ----------------------------------------
    /**
     * Scroll instance を singleton を保証し作成します
     * @returns {Scroll} Scroll instance を返します
     */ }, { key: 'factory', value: function factory()
    {
      if (instance !== null) {
        return instance;
      }
      return new Scroll(singletonSymbol);
    } }, { key: 'SCROLL', get: function get() {return 'scrollScroll';} }]);return Scroll;}(_EventDispatcher3.default);exports.default = Scroll;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);













var _Scroll = __webpack_require__(49);var _Scroll2 = _interopRequireDefault(_Scroll);
var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
var _ScrollEvents = __webpack_require__(54);var _ScrollEvents2 = _interopRequireDefault(_ScrollEvents);


var _Rate = __webpack_require__(52);var _Rate2 = _interopRequireDefault(_Rate);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * Scroll 位置
                                                                                                                                                                              * */ /**
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
                                                                                                                                                                                    */ // event
var Scrolling = function (_EventDispatcher) {(0, _inherits3.default)(Scrolling, _EventDispatcher); /**
                                                                                                    * @param {Rate} [rate=new Rate(Rate.Rate_5)] Rate instance, scroll 監視 fps を設定します
                                                                                                    */function Scrolling() {var rate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Rate2.default(_Rate2.default.RATE_5);(0, _classCallCheck3.default)(this, Scrolling); // @type {function}
    // const boundScroll = this.scroll.bind(this);
    /**
     * bound scroll, Rate.UPDATE event handler
     * @type {function}
     */var _this = (0, _possibleConstructorReturn3.default)(this, (Scrolling.__proto__ || (0, _getPrototypeOf2.default)(Scrolling)).call(this));_this.boundScroll = _this.scroll.bind(_this); // this.boundScroll = boundScroll;
    // @type {ScrollEvents}
    // const events = new ScrollEvents(Scrolling.UPDATE, this, this);
    /**
     * ScrollEvents instance, 発火時に使用します
     * @type {ScrollEvents}
     */_this.events = new _ScrollEvents2.default(Scrolling.UPDATE, _this, _this); // this.events = events;
    /**
     * 前回 scroll top 位置
     * @type {number}
     * @default -1
     */_this.previous = -1; /**
                             * start 済みフラッグ
                             * @type {boolean}
                             * @default false
                             */_this.started = false;
    /**
                                                       * Rate instance
                                                       * @type {?Rate}
                                                       */
    _this.rate = rate;return _this;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * fps で発生するイベントを取得します
   * @event SCROLL
   * @returns {string} event, scrollingScroll を返します
   * @default scrollingScroll
   */(0, _createClass3.default)(Scrolling, [{ key: 'start',



    // ----------------------------------------
    // METHOD
    // ----------------------------------------
    /**
     * fps を監視しスクロール位置を知らせます
     * @returns {Scrolling} method chain 可能なように instance を返します
     */value: function start()
    {
      // flag check
      if (this.started) {
        return this;
      }
      this.started = true;
      // loop start
      var rate = this.rate;
      rate.on(_Rate2.default.UPDATE, this.boundScroll);
      rate.start();
      return this;
    }
    /**
       * fps 監視を止めます
       * @returns {Scrolling} method chain 可能なように instance を返します
       */ }, { key: 'stop', value: function stop()
    {
      if (!this.started) {
        return this;
      }
      this.started = false;
      this.rate.off(_Rate2.default.UPDATE, this.boundScroll);
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
       * @param {?Event|?Events} event window scroll event, nullable
       * @returns {void}
       */ }, { key: 'scroll', value: function scroll(
    event) {
      // @type {number} - scroll top
      var y = _Scroll2.default.y();
      // @type {number} - window height
      var height = window.innerHeight;
      // @type {number} - window width
      var width = window.innerWidth;
      // @type {number} - previous scroll top
      var previous = this.previous;

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
      events.changed = event === null || previous !== y;
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
       * @returns {void}
       */ }, { key: 'fire', value: function fire()
    {
      this.scroll(null);
    } }], [{ key: 'UPDATE', get: function get() {return 'scrollingUpdate';} }]);return Scrolling;}(_EventDispatcher3.default); // tick
exports.default = Scrolling;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(24);var _symbol2 = _interopRequireDefault(_symbol);













var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
var _Events = __webpack_require__(7);var _Events2 = _interopRequireDefault(_Events);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
                                                                                            */var Cycle = function (_EventDispatcher) {(0, _inherits3.default)(Cycle, _EventDispatcher); /**
                                                                                                                                                                                          * singleton です
                                                                                                                                                                                          * @param {Symbol} checkSymbol singleton を保証するための private instance
                                                                                                                                                                                          * @returns {Cycle} singleton instance を返します
                                                                                                                                                                                          */function Cycle(checkSymbol) {var _ret2;(0, _classCallCheck3.default)(this, Cycle); // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {throw new Error('don\'t use new, instead use static factory method.');} // instance 作成済みかをチェックし instance が null の時 this を設定します
    if (instance !== null) {var _ret;
      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // -------------------------------
    // onetime setting
    var _this = (0, _possibleConstructorReturn3.default)(this, (Cycle.__proto__ || (0, _getPrototypeOf2.default)(Cycle)).call(this));instance = _this;
    var events = new _Events2.default(Cycle.UPDATE, _this, _this);
    var boundUpdate = _this.update.bind(_this);
    /**
                                                 * Cycle.UPDATE Events instance
                                                 * @type {Events}
                                                 */
    _this.events = events;
    /**
                            * bound update requestAnimationFrame callback
                            * @type {function}
                            */
    _this.boundUpdate = boundUpdate;
    /**
                                      * requestAnimationFrame ID
                                      * @type {number}
                                      */
    _this.id = 0;
    /**
                   * start 済みフラッグ
                   * @type {boolean}
                   */
    _this.started = false;
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
      if (this.started) {
        // already start
        return false;
      }
      this.started = true;
      this.update();

      // @return
      return true;
    }
    /**
       * loop(cancelAnimationFrame) を止めます
       * @param {number} [id] requestAnimationFrame id を使い cancelAnimationFrame をします
       * @returns {boolean} stop に成功すると true を返します
       */ }, { key: 'stop', value: function stop()
    {var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
      if (!this.started) {
        // not start
        return false;
      }

      cancelAnimationFrame(id);
      this.started = false;

      // @return
      return true;
    }
    // ----------------------------------------
    // PRIVATE METHOD
    // ----------------------------------------
    /**
     * loop(requestAnimationFrame)コールバック関数<br>Cycle.UPDATE event を発火します
     * @returns {number} requestAnimationFrame ID
     */ }, { key: 'update', value: function update()
    {
      // @type {number} - requestAnimationFrame id
      var id = requestAnimationFrame(this.boundUpdate);
      this.id = id;

      // @type {Events} - events
      var events = this.events;
      events.id = id;
      // event fire
      this.dispatch(events);
      return id;
    }
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * Cycle instance を singleton を保証し作成します
     * @returns {Cycle} Cycle instance を返します
     */ }], [{ key: 'factory', value: function factory()
    {
      if (instance === null) {
        return new Cycle(singletonSymbol);
      }
      return instance;
    } }, { key: 'UPDATE', get: function get() {return 'cycleUpdate';} }]);return Cycle;}(_EventDispatcher3.default);exports.default = Cycle;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);













var _Events = __webpack_require__(7);var _Events2 = _interopRequireDefault(_Events);


var _Polling2 = __webpack_require__(28);var _Polling3 = _interopRequireDefault(_Polling2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
var Rate = function (_Polling) {(0, _inherits3.default)(Rate, _Polling);(0, _createClass3.default)(Rate, null, [{ key: 'RATE_60', // ----------------------------------------
    // CONST
    // ----------------------------------------
    /**
     * fps 60 基準値を取得します
     * @const RATE_60
     * @returns {number} fps 60 基準値を返します
     * @default 1
     */get: function get() {return 1;} /**
                                       * fps 30 基準値を取得します
                                       * @const RATE_30
                                       * @returns {number} fps 30 基準値を返します
                                       * @default 2
                                       */ }, { key: 'RATE_30', get: function get() {return 2;} /**
                                                                                                * fps 20 基準値を取得します
                                                                                                * @const RATE_20
                                                                                                * @returns {number} fps 20 基準値を返します
                                                                                                * @default 3
                                                                                                */ }, { key: 'RATE_20', get: function get() {return 3;}
    /**
                                                                                                                                                         * fps 15 基準値を取得します
                                                                                                                                                         * @const RATE_15
                                                                                                                                                         * @returns {number} fps 15 基準値を返します
                                                                                                                                                         * @default 4
                                                                                                                                                         */ }, { key: 'RATE_15', get: function get()
    {
      return 4;
    }
    /**
       * fps 12 基準値を取得します
       * @const RATE_12
       * @returns {number} fps 12 基準値を返します
       * @default 5
       */ }, { key: 'RATE_12', get: function get()
    {
      return 5;
    }
    /**
       * fps 10 基準値を取得します
       * @const RATE_10
       * @returns {number} fps 10 基準値を返します
       * @default 6
       */ }, { key: 'RATE_10', get: function get()
    {
      return 6;
    }
    /**
       * fps 6 基準値を取得します
       * @const RATE_6
       * @returns {number} fps 6 基準値を返します
       * @default 10
       */ }, { key: 'RATE_6', get: function get()
    {
      return 10;
    }
    /**
       * fps 5 基準値を取得します
       * @const RATE_5
       * @returns {number} fps 6 基準値を返します
       * @default 12
       */ }, { key: 'RATE_5', get: function get()
    {
      return 12;
    }
    // ----------------------------------------
    // EVENT
    // ----------------------------------------
    /**
     * フレームレート毎に発生するイベント type を取得します
     * @event UPDATE
     * @returns {string} event, rateUpdate を返します
     * @default rateUpdate
     */ }, { key: 'UPDATE', get: function get()
    {
      return 'rateUpdate';
    }
    // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * 固定値フレームレート毎に UPDATE イベントを発生させます
     * @param {number} [rateValue=Rate.RATE_5] fps, 固定値以外設定できません
     */ }]);
  function Rate() {var rateValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Rate.RATE_5;(0, _classCallCheck3.default)(this, Rate);


    // @type {Events}
    var _this = (0, _possibleConstructorReturn3.default)(this, (Rate.__proto__ || (0, _getPrototypeOf2.default)(Rate)).call(this, 1000 / 60)); // 60fps で polling を行う
    var events = new _Events2.default(Rate.UPDATE, _this, _this); // 設定可能な rate list
    var rates = [
    Rate.RATE_60,
    Rate.RATE_30,
    Rate.RATE_20,
    Rate.RATE_15,
    Rate.RATE_12,
    Rate.RATE_10,
    Rate.RATE_6,
    Rate.RATE_5];

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
    // this.rate = rate;
    // /**
    //  * rate 値を設定します
    //  * @param {number} value rate 値
    //  * @returns {boolean} rate 設定に成功すると true を返します
    //  */
    // this.setRate = (value) => {
    //   if (this.validate(value)) {
    //     rate = value;
    //     return true;
    //   }
    //   return false;
    // };
    // init
    _this.setRate(rateValue);return _this;
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
   */(0, _createClass3.default)(Rate, [{ key: 'setRate', value: function setRate(
    value) {
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
       */ }, { key: 'validate', value: function validate(
    rate) {
      return this.rates.indexOf(rate) !== -1;
    }
    /**
       * fps 基準値を設定します
       * @throws {Error} 引数 rate が設定可能値以外の時に例外エラーが発生します
       * @param {number} rate fps 基準値, <br>
       * this.RATE_30, this.RATE_20, this.RATE_15, this.RATE_12, this.RATE_10, <br>
       * this.RATE_6, this.RATE_5 の何れかが必須です
       * @returns {boolean} rate 設定に成功すると true を返します
       */ }, { key: 'change', value: function change(
    rate) {
      var result = this.setRate(rate);
      this.update();
      return result !== null;
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
    } }]);return Rate;}(_Polling3.default); // tick
exports.default = Rate;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                */var
Hit = function () {function Hit() {(0, _classCallCheck3.default)(this, Hit);}(0, _createClass3.default)(Hit, null, [{ key: "test",
    /**
                                                                                                                                    * element と window.top(0) window.bottom(height) のヒットテストを行います
                                                                                                                                    * @param {number} height 衝突対象物の高さ window.innerHeight
                                                                                                                                    * @param {ClientRect|Object} offset 比較対象物の element ClientRect または同等の Object
                                                                                                                                    * @returns {{
                                                                                                                                    *  top: boolean,
                                                                                                                                    *  bottom: boolean,
                                                                                                                                    *  contain: boolean,
                                                                                                                                    *  include: boolean
                                                                                                                                    * }} hit check object を返します
                                                                                                                                    */value: function test(
    height, offset) {
      // hit test
      var hit = {
        result: false,
        top: false,
        bottom: false,
        contain: false,
        include: false };


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
      if (
      offset.top >= 0 && offset.top <= height &&
      offset.bottom >= 0 && offset.bottom <= height)
      {
        hit.include = true;
      }
      // return
      // return hit.top || hit.bottom || hit.contain || hit.include;
      hit.result = hit.top || hit.bottom || hit.contain || hit.include;
      return hit;
    } }]);return Hit;}();exports.default = Hit;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);











var _Events2 = __webpack_require__(7);var _Events3 = _interopRequireDefault(_Events2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                  * Scroll events 管理クラス
                                                                                                                                                                                  */var
ScrollEvents = function (_Events) {(0, _inherits3.default)(ScrollEvents, _Events);
  /**
                                                                                    * custom Event Object
                                                                                    * @param {string} type イベント種類
                                                                                    * @param {*} currentTarget current イベント発生インスタンス
                                                                                    * @param {*} [target=undefined] イベント発生インスタンス
                                                                                    * */
  function ScrollEvents(type, currentTarget) {var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;(0, _classCallCheck3.default)(this, ScrollEvents);

    /**
                                                                                                                                                                                             * scroll top 前回位置(px)
                                                                                                                                                                                             * @type {number}
                                                                                                                                                                                             */var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollEvents.__proto__ || (0, _getPrototypeOf2.default)(ScrollEvents)).call(this, type, currentTarget, target));
    _this.previous = -1;
    /**
                          * オリジナルイベント(.onscroll)
                          * @type {?Event}
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
    _this.moving = 0;return _this;
  }return ScrollEvents;}(_Events3.default); /**
                                             * Copyright (c) 2011-2016 inazumatv.com, inc.
                                             * @author (at)taikiken / http://inazumatv.com
                                             * @date 2016/11/20 - 10:54
                                             *
                                             * Distributed under the terms of the MIT license.
                                             * http://www.opensource.org/licenses/mit-license.html
                                             *
                                             * This notice shall be included in all copies or substantial portions of the Software.
                                             *
                                             */exports.default = ScrollEvents;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(93);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(24);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30)
  , TAG = __webpack_require__(6)('toStringTag')
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18)
  , document = __webpack_require__(10).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(59)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(34)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(68)
  , hide           = __webpack_require__(17)
  , has            = __webpack_require__(15)
  , Iterators      = __webpack_require__(19)
  , $iterCreate    = __webpack_require__(117)
  , setToStringTag = __webpack_require__(37)
  , getPrototypeOf = __webpack_require__(65)
  , ITERATOR       = __webpack_require__(6)('iterator')
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(36)
  , createDesc     = __webpack_require__(22)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(41)
  , has            = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(60)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(66)
  , hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(15)
  , toObject    = __webpack_require__(25)
  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(15)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(108)(false)
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

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(20);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(40)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(58)
  , ITERATOR  = __webpack_require__(6)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                * 確認用関数
                                                                                                                                                                                                                                                                                                                                                                                                                                                * - transition - @return {boolean}
                                                                                                                                                                                                                                                                                                                                                                                                                                                * - transform - @return {boolean}
                                                                                                                                                                                                                                                                                                                                                                                                                                                * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                * @static
                                                                                                                                                                                                                                                                                                                                                                                                                                                * @type {{transition: (()), transform: (())}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                */
var check = {
  transition: function transition() {
    var p = document.createElement('p');
    return typeof p.style.transition !== 'undefined' ||
    typeof p.style.WebkitTransition !== 'undefined' ||
    typeof p.style.MozTransition !== 'undefined' ||
    typeof p.style.msTransition !== 'undefined' ||
    typeof p.style.OTransition !== 'undefined';
  },
  transform: function transform() {
    var p = document.createElement('p');
    return typeof p.style.transform !== 'undefined' ||
    typeof p.style.WebkitTransform !== 'undefined' ||
    typeof p.style.MozTransform !== 'undefined' ||
    typeof p.style.msTransform !== 'undefined' ||
    typeof p.style.OTransform !== 'undefined';
  } };


/**
        * CSS3 transition 可能フラッグ
        * @type {boolean}
        * @private
        * @static
        */
var _transition = check.transition();
/**
                                       * CSS3 transform 可能フラッグ
                                       * @type {boolean}
                                       * @private
                                       * @static
                                       */
var _transform = check.transform();

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
                                     */var
Can = function () {function Can() {(0, _classCallCheck3.default)(this, Can);}(0, _createClass3.default)(Can, null, [{ key: 'transition',
    /**
                                                                                                                                          * CSS3 transition が使用可能かを調べます
                                                                                                                                          * @returns {boolean} true: 使用可能
                                                                                                                                          */value: function transition()
    {
      return _transition;
    }
    /**
       * CSS3 transform が使用可能かを調べます
       * @returns {boolean} true: 使用可能
       */ }, { key: 'transform', value: function transform()
    {
      return _transform;
    } }]);return Can;}();exports.default = Can;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);












var _Style = __webpack_require__(46);var _Style2 = _interopRequireDefault(_Style);


var _Bounding = __webpack_require__(47);var _Bounding2 = _interopRequireDefault(_Bounding);
var _Classes = __webpack_require__(48);var _Classes2 = _interopRequireDefault(_Classes);


var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * HTMLElement の操作を行います
                                                                                                                                                                              */ /**
                                                                                                                                                                                  * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                                  * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                                  * @date 2016/10/06 - 21:49
                                                                                                                                                                                  *
                                                                                                                                                                                  * Distributed under the terms of the MIT license.
                                                                                                                                                                                  * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                                  *
                                                                                                                                                                                  * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                                  *
                                                                                                                                                                                  */ // css
var Elements = function () {/**
                             * 操作対象 Element を保存します
                             * @param {Element|Node} element 操作対象 Element
                             */function Elements(element) {(0, _classCallCheck3.default)(this, Elements); /**
                                                                                                           * 対象 Element の CSS 操作を行う Style instance
                                                                                                           * @type {Style}
                                                                                                           */this.style = new _Style2.default(element); /**
                                                                                                                                                         * Element class 操作のために instance を作成します - Classes instance
                                                                                                                                                         * @type {Classes}
                                                                                                                                                         */this.classes = new _Classes2.default(element); /**
                                                                                                                                                                                                           * 操作対象 Element
                                                                                                                                                                                                           * @type {Element}
                                                                                                                                                                                                           */this.element = element; /**
                                                                                                                                                                                                                                      * Element class `ClientRect` 取得のために instance を作成します
                                                                                                                                                                                                                                      * @type {Bounding}
                                                                                                                                                                                                                                      */this.bounding = new _Bounding2.default(element);
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
   */(0, _createClass3.default)(Elements, [{ key: 'offset', value: function offset()
    {
      return this.bounding().offset();
    }
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * 引数の id attribute value で HTMLElement を `document.getElementById` で取得します
     * @param {string} idName id attribute value
     * @return {?Element} Element を返します, 取得できない時は null を返します
     */ }], [{ key: 'id', value: function id(
    idName) {
      var element = self.document.getElementById(idName);
      // 存在チェックを行います
      return _Type2.default.exist(element) ? element : null;
    }
    /**
       * querySelector を使用し Element を探します
       * @param {string} selector 探索 selector
       * @param {Element|*} [parentNode=document] 親 Node|Element
       * @return {?Element} Element or null
       */ }, { key: 'select', value: function select(
    selector) {var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.document;
      return parentNode.querySelector(selector);
    }
    /**
       * querySelectorAll を使用し Element を探します
       * @param {string} selector 探索 selector
       * @param {Element|*} [parentNode=document] 親 Node|Element
       * @return {?NodeList} NodeList or null
       */ }, { key: 'selects', value: function selects(
    selector) {var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.document;
      var elements = parentNode.querySelectorAll(selector);
      return elements.length > 0 ? elements : null;
    } }]);return Elements;}(); // util
// don
exports.default = Elements;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);












var _Scrolling = __webpack_require__(50);var _Scrolling2 = _interopRequireDefault(_Scrolling);
var _Events = __webpack_require__(7);var _Events2 = _interopRequireDefault(_Events);
var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);


var _Hit = __webpack_require__(53);var _Hit2 = _interopRequireDefault(_Hit);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                          * Scrolling class を使用しスクロールトップ位置をチェクし対象 element と window の衝突判定を行います
                                                                                                                                                                          */ /**
                                                                                                                                                                              * Copyright (c) 2011-2016 inazumatv.com, inc.
                                                                                                                                                                              * @author (at)taikiken / http://inazumatv.com
                                                                                                                                                                              * @date 2016/11/30 - 14:37
                                                                                                                                                                              *
                                                                                                                                                                              * Distributed under the terms of the MIT license.
                                                                                                                                                                              * http://www.opensource.org/licenses/mit-license.html
                                                                                                                                                                              *
                                                                                                                                                                              * This notice shall be included in all copies or substantial portions of the Software.
                                                                                                                                                                              *
                                                                                                                                                                              */ // event
var Rising = function (_EventDispatcher) {(0, _inherits3.default)(Rising, _EventDispatcher); /**
                                                                                              * elements instance と scrolling instance を保存します
                                                                                              * @param {Elements} elements 対象 element を Elements インスタンスに変換します
                                                                                              * @param {Scrolling} scrolling スクロールトップ監視インスタンス
                                                                                              */function Rising(elements) {var scrolling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Scrolling2.default();(0, _classCallCheck3.default)(this, Rising); /**
                                                                                                                                                                                                                                                                                       * 対象 element を Elements インスタンスに変換します
                                                                                                                                                                                                                                                                                       * @type {elements}
                                                                                                                                                                                                                                                                                       */var _this = (0, _possibleConstructorReturn3.default)(this, (Rising.__proto__ || (0, _getPrototypeOf2.default)(Rising)).call(this));_this.elements = elements; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                        * スクロールトップ監視インスタンス
                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @type {Scrolling}
                                                                                                                                                                                                                                                                                                                                                                                                                                                        */_this.scrolling = scrolling; // const boundScroll = this.scroll.bind(this);
    /**
     * bound scroll, Rate.UPDATE event handler
     * @type {function}
     */_this.boundScroll = _this.scroll.bind(_this); // this.boundScroll = boundScroll;
    /**
     * start 済みフラッグ
     * @type {boolean}
     * @default false
     */
    _this.started = false;return _this;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * 衝突イベント
   * @event COLLISION
   * @return {string} risingCollision を返します
   */(0, _createClass3.default)(Rising, [{ key: 'start',











    // ----------------------------------------
    // METHOD
    // ----------------------------------------
    /**
     * fps を監視しスクロール位置を知らせます
     * @returns {Rising} method chain 可能なように instance を返します
     */value: function start()
    {
      // flag check
      if (this.started) {
        return this;
      }
      this.started = true;
      // scrolling
      var scrolling = this.scrolling;
      scrolling.on(_Scrolling2.default.UPDATE, this.boundScroll);
      scrolling.start();
      return this;
    }
    /**
       * fps 監視を止めます
       * @returns {Rising} method chain 可能なように instance を返します
       */ }, { key: 'stop', value: function stop()
    {
      if (!this.started) {
        return this;
      }
      this.started = false;
      var scrolling = this.scrolling;
      scrolling.off(_Scrolling2.default.UPDATE, this.boundScroll);
      return this;
    }
    /**
       * Scrolling.UPDATE event handler
       * @param {ScrollEvents} scrollEvents scroll events object
       * @return {boolean} 衝突時に true を返します
       */ }, { key: 'scroll', value: function scroll(
    scrollEvents) {
      if (!scrollEvents.changed) {
        return false;
      }
      // element offset
      var offset = this.elements.offset();
      // hit result
      var hit = _Hit2.default.test(scrollEvents.height, offset);
      // @type {?Elements}
      var events = null;
      if (hit.result) {
        events = new _Events2.default(Rising.COLLISION, this, this);
      } else {
        events = new _Events2.default(Rising.ALIEN, this, this);
      }
      // hit / original / offset を追加します
      events.hit = hit;
      events.original = scrollEvents;
      events.offset = offset;
      // 発火
      this.dispatch(events);
      return hit.result;
    } }], [{ key: 'COLLISION', get: function get() {return 'risingCollision';} /**
                                                                                * 衝突「していない」イベント
                                                                                * @event ALIEN
                                                                                * @return {string} risingAlien を返します
                                                                                */ }, { key: 'ALIEN', get: function get() {return 'risingAlien';} }]);return Rising;}(_EventDispatcher3.default); // hit
exports.default = Rising;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);














var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
var _TouchingEvents = __webpack_require__(83);var _TouchingEvents2 = _interopRequireDefault(_TouchingEvents);


var _Vectors = __webpack_require__(29);var _Vectors2 = _interopRequireDefault(_Vectors);
var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * Touch event を監視し y方向移動が `threshold` 以内の時に `TOUCH` event を発火します
                                                                                                                                                                              */ // util
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
 * f
 */ // event
var Touching = function (_EventDispatcher) {(0, _inherits3.default)(Touching, _EventDispatcher); /**
                                                                                                  * 処理対象 element などを保存します
                                                                                                  * @param {Element} element 処理対象 Element
                                                                                                  * @param {boolean} [canceling=false] touchmove 中に `preventDefault` を行う
                                                                                                  * @param {number} [threshold=10] y 方向閾値
                                                                                                  */function Touching(element) {var canceling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;(0, _classCallCheck3.default)(this, Touching); /**
                                                                                                                                                                                                                                                                                                                                                                 * 処理対象 Element
                                                                                                                                                                                                                                                                                                                                                                 * @type {Element}
                                                                                                                                                                                                                                                                                                                                                                 */var _this = (0, _possibleConstructorReturn3.default)(this, (Touching.__proto__ || (0, _getPrototypeOf2.default)(Touching)).call(this));_this.element = element; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * touchmove 中に `preventDefault` を行うかのフラッグ
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @type {boolean}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @default false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */_this.canceling = canceling; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * y 方向閾値, default: 10px
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @type {number}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @default 10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */_this.threshold = threshold; // @type {function}
    // const boundStart = this.onStart.bind(this);
    /**
     * bound onStart
     * @type {function}
     */_this.boundStart = _this.onStart.bind(_this); // this.boundStart = () => boundStart;
    // const boundMove = this.onMove.bind(this);
    /**
     * bound onMove
     * @type {function}
     */_this.boundMove = _this.onMove.bind(_this);
    // this.boundMove = () => boundMove;
    // const boundEnd = this.onEnd.bind(this);
    /**
     * bound onEnd
     * @type {function}
     */
    _this.boundEnd = _this.onEnd.bind(_this);
    // this.boundEnd = () => boundEnd;
    // const boundCancel = this.onCancel.bind(this);
    /**
     * bound onCancel
     * @type {function}
     */
    _this.boundCancel = _this.onCancel.bind(_this);
    // this.boundCancel = () => boundCancel;
    // const boundBlur = this.onBlur.bind(this);
    /**
     * bound onBlur
     * @type {function}
     */
    _this.boundBlur = _this.onBlur.bind(_this);
    // this.boundBlur = () => boundBlur;
    var vectors = {
      start: new _Vectors2.default(),
      end: new _Vectors2.default(),
      moving: [].slice(0) };

    /**
                              * 位置管理を行う Vectors instance
                              * @returns {{start: Vectors, end: Vectors, moving: Array.<Vectors>}} vectors object
                              */
    _this.vectors = function () {return vectors;};return _this;
  }
  // ---------------------------------------------------
  //  EVENT
  // ---------------------------------------------------
  /**
   * touchstart event type
   * @event START
   * @returns {string} touchingStart を返します
   */(0, _createClass3.default)(Touching, [{ key: 'init',



































    // ---------------------------------------------------
    //  METHOD
    // ---------------------------------------------------
    /**
     * 初期処理<br>
     * element への `touchstart` と<br>
     * window.blur event をそれぞれ bind します
     * @returns {void}
     */value: function init()
    {
      this.element.addEventListener('touchstart', this.boundStart, false);
      window.addEventListener('blur', this.boundBlur, false);
    }
    /**
       * touchstart event handler
       * @param {Event} event touchstart event
       * @returns {void}
       */ }, { key: 'onStart', value: function onStart(
    event) {
      // event unbind <- 二重 bind にならないように
      this.dispose();
      // vectors を初期化
      this.reset();
      // 現在 position を保存
      var vectors = this.vectors();
      var point = Touching.point(event);
      vectors.start.update(point.x, point.y);
      vectors.moving.push(vectors.start);

      // キャンセル event 監視を開始
      var body = document.body;
      body.addEventListener('touchend', this.boundEnd, false);
      body.addEventListener('touchmove', this.boundMove, false);
      body.addEventListener('touchcancel', this.boundCancel, false);

      // Touching.START 発火
      this.dispatch(new _TouchingEvents2.default(
      Touching.START,
      this,
      event,
      vectors.start));

    }
    /**
       * touchmove event handler
       * @param {Event} event touchmove event
       * @returns {void}
       */ }, { key: 'onMove', value: function onMove(
    event) {
      // console.log('Touching.onMove', event);
      var vectors = this.vectors();
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
      this.dispatch(new _TouchingEvents2.default(
      Touching.MOVE,
      this,
      event,
      position,
      between,
      scrolling));

    }
    /**
       * touchend event handler
       * @param {Event} event touchend event
       * @returns {void}
       */ }, { key: 'onEnd', value: function onEnd(
    event) {
      // console.log('Touching.onEnd', event);
      var vectors = this.vectors();

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
      this.dispatch(new _TouchingEvents2.default(
      Touching.END,
      this,
      event,
      position,
      between,
      scrolling));


      // Touching.Touch 発火
      this.dispatch(new _TouchingEvents2.default(
      Touching.TOUCH,
      this,
      event,
      position,
      between,
      scrolling));

    }
    /**
       * touchcancel event handler<br>
       * 処理をキャンセルします
       * @param {Event} event touchend event
       * @returns {boolean} 正常終了時に true を返します
       */ }, { key: 'onCancel', value: function onCancel(
    event) {
      return this.abort(event);
    }
    /**
       * window.blur event handler<br>
       * 処理をキャンセルします
       * @param {Event} event window blur event
       * @returns {boolean} 正常終了時に true を返します
       */ }, { key: 'onBlur', value: function onBlur(
    event) {
      return this.abort(event);
    }
    /**
       * touch event での処理をキャンセルし、設定値を初期値に戻します
       * @param {Event} event touch / window.onblur Event
       * @returns {boolean} 正常終了時に true を返します
       */ }, { key: 'abort', value: function abort(
    event) {
      this.dispose();
      this.reset();
      this.dispatch(new _TouchingEvents2.default(
      Touching.CANCEL,
      this,
      event));

      return true;
    }
    /**
       * bind した event を unbind します
       * @returns {boolean} 正常終了時に true を返します
       */ }, { key: 'dispose', value: function dispose()
    {
      var body = document.body;

      body.removeEventListener('touchend', this.boundEnd);
      body.removeEventListener('touchmove', this.boundMove);
      body.removeEventListener('touchcancel', this.boundCancel);
      return true;
    }
    /**
       * 移動監視に使用した vectors instance を全て reset します
       * @returns {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
       * reset 後の vectors instance を返します
       */ }, { key: 'reset', value: function reset()
    {
      var vectors = this.vectors();
      vectors.start.reset();
      vectors.end.reset();
      vectors.moving = [].slice(0);

      return vectors;
    }
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * y 方向移動が threshold 以内か判定します
     * @param {Vectors} pointA スタートポイント(Vectors)
     * @param {Vectors} pointB エンドポイント(Vectors)
     * @param {number} threshold 閾値
     * @returns {boolean} true の時は閾値以上なのでスクロール判定になります
     */ }], [{ key: 'scrolling', value: function scrolling(
    pointA, pointB, threshold) {
      var y = pointA.betweenY(pointB);
      // 正数値にし閾値と比較
      return Math.abs(y) >= threshold;
    }
    /**
       * MouseEvent|TouchEvent から pageX / pageY 座標を取得します
       * @param {MouseEvent|TouchEvent} event down / move / up event object
       * @returns {{x: number, y: number}} pageX / pageY 座標を返します
       */ }, { key: 'point', value: function point(
    event) {
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
    } }, { key: 'START', get: function get() {return 'touchingStart';} /**
                                                                        * touchend event type
                                                                        * @event END
                                                                        * @returns {string} touchingEnd を返します
                                                                        */ }, { key: 'END', get: function get() {return 'touchingEnd';} /**
                                                                                                                                         * touchend event type
                                                                                                                                         * @event CANCEL
                                                                                                                                         * @returns {string} touchingCancel を返します
                                                                                                                                         */ }, { key: 'CANCEL', get: function get() {return 'touchingCancel';} /**
                                                                                                                                                                                                                * touchmove event type
                                                                                                                                                                                                                * @event MOVE
                                                                                                                                                                                                                * @returns {string} touchingMove を返します
                                                                                                                                                                                                                */ }, { key: 'MOVE', get: function get() {return 'touchingMove';} /**
                                                                                                                                                                                                                                                                                   * touch(click) event type
                                                                                                                                                                                                                                                                                   * @event TOUCH
                                                                                                                                                                                                                                                                                   * @returns {string} touchingTouch を返します
                                                                                                                                                                                                                                                                                   */ }, { key: 'TOUCH', get: function get() {return 'touchingTouch';} }]);return Touching;}(_EventDispatcher3.default);exports.default = Touching;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);var _symbol = __webpack_require__(24);var _symbol2 = _interopRequireDefault(_symbol);












var _EventDispatcher2 = __webpack_require__(8);var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
var _WheelEvents = __webpack_require__(84);var _WheelEvents2 = _interopRequireDefault(_WheelEvents);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
    if (checkSymbol !== singletonSymbol) {throw new Error('don\'t use new, instead use static factory method.');}



    // instance 作成済みかをチェックし instance が null の時 this を設定します
    var _this = (0, _possibleConstructorReturn3.default)(this, (Wheel.__proto__ || (0, _getPrototypeOf2.default)(Wheel)).call(this));if (instance !== null) {var _ret;
      return _ret = instance, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // onetime setting
    instance = _this;

    // event handler
    // const boundWheel = this.mouseWheel.bind(this);
    /**
     * bound mouseWheel
     * @type {function}
     */
    _this.boundWheel = _this.mouseWheel.bind(_this);
    // this.boundWheel = () => boundWheel;
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
                      * start flag
                      * @type {boolean}
                      */
    _this.started = false;
    var events = {
      up: new _WheelEvents2.default(Wheel.UP, _this),
      down: new _WheelEvents2.default(Wheel.DOWN, _this) };

    /**
                                                             * UP / DOWN Events instance
                                                             * @returns {{up: WheelEvents, down: WheelEvents}} UP / DOWN Events instance
                                                             */
    _this.events = function () {return events;};

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
   */(0, _createClass3.default)(Wheel, [{ key: 'start',












    // ----------------------------------------
    // METHOD
    // ----------------------------------------
    /**
     * mousewheel event を監視します
     * @returns {Wheel} method chain 可能なように instance を返します
     */value: function start()
    {
      if (this.started) {
        return this;
      }
      this.started = true;
      // this.unwatch();
      window.addEventListener('wheel', this.boundWheel, false);
      return this;
    }
    /**
       * mousewheel event を監視を止めます
       * @returns {Wheel} method chain 可能なように instance を返します
       */ }, { key: 'stop', value: function stop()
    {
      if (!this.started) {
        return this;
      }
      this.started = false;
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
        // scroll event を発火します
        if (moved > 0) {
          // scroll up
          this.up(moved);
        } else {
          this.down(moved);
        }

        // initialize moved, 発火後に積算移動変数を初期化します
        this.moved = 0;
        return moved;
      }
      // 閾値を超えていないので処理をしない
      return moved;
    }
    /**
       * scroll up イベントを発火します
       * @param {number} moved 移動量
       * @returns {number} 加算移動量を返します
       */ }, { key: 'up', value: function up(
    moved) {
      // @type {Events}
      var events = this.events().up;
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
      var events = this.events().down;
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
     */ }], [{ key: 'factory', value: function factory()
    {
      if (instance !== null) {
        return instance;
      }
      return new Wheel(singletonSymbol);
    } }, { key: 'UP', get: function get() {return 'wheelUp';} /**
                                                               * wheel  で発生するイベントを取得します
                                                               * @event DOWN
                                                               * @returns {string} event, wheelUp を返します
                                                               * @default wheelUp
                                                               */ }, { key: 'DOWN', get: function get() {return 'wheelDown';} }]);return Wheel;}(_EventDispatcher3.default);exports.default = Wheel;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _create = __webpack_require__(55);var _create2 = _interopRequireDefault(_create);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);












var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
                         */ /**
                             * Copyright (c) 2011-2016 inazumatv.com, inc.
                             * @author (at)taikiken / http://inazumatv.com
                             * @date 2016/07/01 - 19:41
                             *
                             * Distributed under the terms of the MIT license.
                             * http://www.opensource.org/licenses/mit-license.html
                             *
                             * This notice shall be included in all copies or substantial portions of the Software.
                             *
                             */ // util
var Request = self.Request; /**
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
                             * @see https://github.com/taylorhakes/promise-polyfill
                             * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
                             * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
                             * @see https://developer.mozilla.org/ja/docs/Web/API/Request
                             * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
                             * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
                             * @see https://developer.mozilla.org/ja/docs/Web/API/Body
                             */var Ajax = function () {/**
                                                        * request 可能 / 不可能 flag を true に設定します
                                                        * @param {Function} resolve Promise success callback
                                                        * @param {Function} reject Promise fail callback
                                                        */function Ajax(resolve, reject) {(0, _classCallCheck3.default)(this, Ajax); /**
                                                                                                                                      * request 可能 / 不可能 flag, true: 実行可能
                                                                                                                                      * @type {boolean}
                                                                                                                                      */this.can = true; /**
                                                                                                                                                          * Promise success callback
                                                                                                                                                          * @type {Function}
                                                                                                                                                          */this.resolve = resolve; /**
                                                                                                                                                                                     * Promise fail callback
                                                                                                                                                                                     * @type {Function}
                                                                                                                                                                                     */
    this.reject = reject;
  }
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
   * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
   * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
   * @return {boolean} ajax request を開始したかどうかの真偽値を返します
   */(0, _createClass3.default)(Ajax, [{ key: 'start', value: function start(
    path, method) {var _this = this;var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      // ajax request 開始
      if (!this.can) {
        // flag が off なので処理しない
        return false;
      }

      // flag off
      this.disable();

      // @type {Request} Request instance
      var request = Ajax.option(path, method, headers, formData);

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
        // complete event fire
        _this.resolve(json);
        // flag true
        _this.enable();
      })
      // @param {Error} - Ajax something error
      .catch(function (error) {
        // error event fire
        _this.reject(error);
        // flag true
        _this.enable();
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
     * 必ず設定します
     * - method: GET, POST, PUT, DELETE...etc
     * - cache: 'no-cache'
     * - credentials: 'same-origin'
     *
     * headers, formData は存在すれば option に追加されます
     *
     * @param {string|USVString|Request} path Ajax request path
     * @param {string} method GET, POST, PUT, DELETE...etc request method
     * @param {Headers|Object|null} headers Headers option
     * @param {FormData|null} formData 送信フォームデータオプション
     * @returns {*|Request} fetch API へ送る Request instance を返します
     *
     * @see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request
     */ }], [{ key: 'option', value: function option(
    path, method, headers, formData) {
      // request option
      var option = (0, _create2.default)({
        method: method,
        cache: 'no-cache',
        // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
        credentials: 'same-origin' });


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
    } }]);return Ajax;}();exports.default = Ajax;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                           */var
Cookie = function () {
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
  function Cookie(keyName) {var endValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var defaultPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';var defaultDomain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';var secureSetting = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;(0, _classCallCheck3.default)(this, Cookie);
    var key = keyName;
    var end = endValue;
    var path = defaultPath;
    var domain = defaultDomain;
    var secure = secureSetting;

    /**
                                 * cookie key を取得します
                                 * @returns {string} cookie key を返します
                                 */
    this.key = function () {return key;};
    /**
                                           * cookie key を設定します
                                           * @param {string} setting 設定する key name
                                           * @returns {string} 設定した key name を返します
                                           */
    this.setKey = function (setting) {key = setting;};
    /**
                                                        * cookie end を取得します
                                                        * @returns {?Date} cookie end Date instance
                                                        */
    this.end = function () {return end;};
    /**
                                           * cookie end を設定します
                                           * @param {Date} setting cookie end Date instance
                                           * @returns {Date} 設定した Date instance を返します
                                           */
    this.setEnd = function (setting) {end = setting;};
    /**
                                                        * cookie path を取得します
                                                        * @returns {string} cookie path を返します
                                                        */
    this.path = function () {return path;};
    /**
                                             * cookie path を設定します
                                             * @param {string} setting 設定する path name
                                             * @returns {string} 設定した path name を返します
                                             */
    this.setPath = function (setting) {path = setting;};
    /**
                                                          * cookie domain を取得します
                                                          * @returns {string} cookie domain を返します
                                                          */
    this.domain = function () {return domain;};
    /**
                                                 * cookie domain を設定します
                                                 * @param {string} setting 設定する domain name
                                                 * @returns {string} 設定した domain name を返します
                                                 */
    this.setDomain = function (setting) {domain = setting;};
    /**
                                                              * https 通信のときのみクッキー送信を行うかのフラッグを取得します
                                                              * @returns {boolean} https 通信のときのみクッキー送信を行うかのフラッグ
                                                              */
    this.secure = function () {return secure;};
    /**
                                                 * https 通信のときのみクッキー送信を行うかのフラッグを設定します
                                                 * @param {boolean} setting https 通信のときのみクッキー送信を行うかのフラッグ
                                                 * @returns {boolean} 設定した secure フラッグを返します
                                                 */
    this.setSecure = function (setting) {secure = setting;};
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * cookie value を取得します
   * @returns {string|null} cookie value を返します
   */(0, _createClass3.default)(Cookie, [{ key: 'get', value: function get()
    {
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
       */ }, { key: 'set', value: function set(
    value) {var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.end();var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.path();var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.domain();var secure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.secure();
      return Cookie.set(this.key(), value, end, path, domain, secure);
    }
    /**
       * cookie を削除します
       * @returns {boolean} true: cookie 削除成功
       */ }, { key: 'remove', value: function remove()
    {
      return Cookie.remove(this.key());
    }
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    /**
     * cookie value を取得します
     * @param {string} key 取得する cookie key 名称
     * @returns {string|null} cookie value
     */ }], [{ key: 'get', value: function get(
    key) {
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
       */ }, { key: 'set', value: function set(
    key, value) {var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';var domain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';var secure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
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
       */ }, { key: 'remove', value: function remove(
    key) {
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
       */ }, { key: 'has', value: function has(
    key) {
      return Cookie.get(key) !== null;
    } }]);return Cookie;}();exports.default = Cookie;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = __webpack_require__(94);var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);












var _Text = __webpack_require__(23);var _Text2 = _interopRequireDefault(_Text);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                              * URL query をパースします
                                                                                                                                                                              */var
Queries = function () {
  /**
                        * URL query を受取パースします
                        * @param {string} [queryString=location.search] パースする URL 文字列
                        */
  function Queries() {var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;(0, _classCallCheck3.default)(this, Queries);var _Queries$parse =
    Queries.parse(queryString),_Queries$parse2 = (0, _slicedToArray3.default)(_Queries$parse, 2),data = _Queries$parse2[0],keys = _Queries$parse2[1];
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
   */(0, _createClass3.default)(Queries, [{ key: 'has', value: function has(
    keyName) {
      return this.keys.indexOf(keyName) !== -1;
    }
    /**
       * key 値を取得します
       * @param {string} keyName 調査対象 key 名称
       * @returns {string|undefined} 見つかると文字列で返します, 見つからない時は undefined を返します
       */ }, { key: 'get', value: function get(
    keyName) {
      return this.data[keyName];
    }
    /**
       * key: value 形式を取得します
       * @returns {Object} URL query を key: value 形式で返します
       */ }, { key: 'getAll', value: function getAll()
    {
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
     */ }], [{ key: 'naked', value: function naked(
    targetText) {
      // const queryString = Queries.amp(targetText);
      var queryString = _Text2.default.and(targetText);
      return queryString.substr(0, 1) === '?' ? queryString.substring(1) : targetText;
    }
    /**
       * query を kye: value 形式にします
       * @param {string} targetText 操作対象文字列
       * @returns {[Object, Array]} data, keys を返します
       */ }, { key: 'parse', value: function parse(
    targetText) {
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
       */ }, { key: 'get', value: function get(
    keyName) {var targetText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;var _Queries$parse3 =
      Queries.parse(targetText),_Queries$parse4 = (0, _slicedToArray3.default)(_Queries$parse3, 1),data = _Queries$parse4[0];
      return data[keyName];
    }
    /**
       * URL query の key: value 形式を取得します
       * @param {string} targetText query
       * @returns {[Object, Array]} URL query を key: value 形式で返します
       */ }, { key: 'getAll', value: function getAll()
    {var targetText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;
      // const [data] = Queries.parse(targetText);
      return Queries.parse(targetText);
    } }]);return Queries;}(); /**
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
                               */exports.default = Queries;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);












var _Events = __webpack_require__(7);var _Events2 = _interopRequireDefault(_Events);


var _Polling2 = __webpack_require__(28);var _Polling3 = _interopRequireDefault(_Polling2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// /**
//  * private property key, fps を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const fpsSymbol = Symbol('Singleton Fps Symbol');

/**
 * フレームレート毎に UPDATE イベントを発生させます
 *
 * @example
 * // 2sec. interval
 * const fps = new Fps(0.5);
 * const update = () => {
 *  // code here, something do
 * };
 * fps.on(Fps.UPDATE, update);
 * fps.start();
 * */ /**
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
var Fps = function (_Polling) {(0, _inherits3.default)(Fps, _Polling);(0, _createClass3.default)(Fps, null, [{ key: 'UPDATE', // ----------------------------------------
    // EVENT
    // ----------------------------------------
    /**
     * フレームレート毎に発生するイベントを取得します
     * @event UPDATE
     * @returns {string} event, fpsUpdate を返します
     * @default fpsUpdate
     */get: function get() {return 'fpsUpdate';} // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------
    /**
     * 引数の frame rate に合わせ UPDATE イベントを発生させます
     * @param {number} [fps=30] frame rate, default: 30
     */ }]);function Fps() {var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;(0, _classCallCheck3.default)(this, Fps); // @type {Events} - Events
    var _this = (0, _possibleConstructorReturn3.default)(this, (Fps.__proto__ || (0, _getPrototypeOf2.default)(Fps)).call(this, 1000 / fps));var events = new _Events2.default(Fps.UPDATE, _this, _this); /**
                                                                                                                                                                                                           * Fps.UPDATE Events instance
                                                                                                                                                                                                           * @type {Events}
                                                                                                                                                                                                           */_this.events = events;
    /**
                                                                                                                                                                                                                                     * frame rate
                                                                                                                                                                                                                                     * @type {number}
                                                                                                                                                                                                                                     */
    _this.fps = fps;return _this;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * polling 時間を変更します<br>
   * 1. プロパティ polling 変更
   * 1. update 実行
   * @param {number} interval fps
   * @returns {boolean} `update` をコールし Polling.UPDATE event が発生すると true を返します
   */(0, _createClass3.default)(Fps, [{ key: 'change', value: function change(
    interval) {
      /**
                * polling 間隔
                * @type {number}
                */
      this.interval = 1000 / interval;
      this.fps = interval;
      return this.update();
    } }]);return Fps;}(_Polling3.default); // tick
exports.default = Fps;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                       */var
Iro = function () {function Iro() {(0, _classCallCheck3.default)(this, Iro);}(0, _createClass3.default)(Iro, null, [{ key: 'rgb2hsl',
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
     */value: function rgb2hsl(
    red, green, blue) {
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
          l: l };

      }
      // ---
      var d = maxValue - minValue;
      s = l > 0.5 ? d / (2 - maxValue - minValue) : d / (maxValue + minValue);
      switch (maxValue) {
        case r:{
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          }
        case g:{
            h = (b - r) / d + 2;
            break;
          }
        case b:{
            h = (r - g) / d + 4;
            break;
          }
        default:{
            h = 0;
            break;
          }}

      h /= 6;
      // return value
      return {
        h: h,
        s: s,
        l: l };

    } // rgb2hsl
    /**
     * HSL to RGB で `saturation !== 0` な時の R, G, B 変換 helper です
     * @param {number} point `(2 * l) - q`
     * @param {number} q `l < 0.5 ? l * (1 + s) : (l + s) - (l * s)`
     * @param {number} hue hue
     * @returns {number} 0 ~ 1 な値を返します
     */ }, { key: 'hue2rgb', value: function hue2rgb(
    point, q, hue) {
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
       */ }, { key: 'hsl2rgb', value: function hsl2rgb(
    h, s, l) {
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
        b: mathInt(b * 255, 10) };

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
     */ }, { key: 'rgb2hsv', value: function rgb2hsv(
    r, g, b) {
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
          v: v };

      }
      // ---
      switch (maxValue) {
        case red:{
            h = (green - blue) / d + (green < blue ? 6 : 0);
            break;
          }
        case green:{
            h = (blue - red) / d + 2;
            break;
          }
        case blue:{
            h = (red - green) / d + 4;
            break;
          }
        default:{
            h = 0;
            break;
          }}

      h /= 6;
      return {
        h: h,
        s: s,
        v: v };

    }
    /**
       * HSV(HSB) to RGB 変換します
       * @param {number} h hue 0 ~ 1
       * @param {number} s saturation 0 ~ 1
       * @param {number} v value(bright) 0 ~ 1
       * @returns {{r: Number, g: Number, b: Number}} 各 0 ~ 255
       */ }, { key: 'hsv2rgb', value: function hsv2rgb(
    h, s, v) {
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
          break;}

      // ---
      return {
        r: mathInt(r * 255, 10),
        g: mathInt(g * 255, 10),
        b: mathInt(b * 255, 10) };

    }
    // ----------------------------------------
    // HEX
    // ----------------------------------------
    /**
     * CSS shorthand 色指定をフル変換します
     * @param {string} hex `#f00` な CSS 色形式
     * @returns {?string} `ff0000` フル変換し返します
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     */ }, { key: 'shorthand', value: function shorthand(
    hex) {
      if (typeof hex !== 'string') {
        return null;
      }
      var pattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var color = hex.replace(pattern, function (m, r, g, b) {return '' + r + r + g + g + b + b;});
      return color.length === 7 ? color : '#' + color;
    }
    /**
       * CSS 色指定を RGB 変換します
       * @param {string} hex CSS 色形式 `#f00` or `#ff0000`
       * @returns {?{r: number, g: number, b: number}} nullable で返します
       */ }, { key: 'hex2rgb', value: function hex2rgb(
    hex) {
      var hexString = Iro.shorthand(hex);
      if (typeof hexString !== 'string') {
        return null;
      }
      // ---
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
      return Array.isArray(result) && result.length === 4 ?
      {
        r: mathInt(result[1], 16),
        g: mathInt(result[2], 16),
        b: mathInt(result[3], 16) } :
      null;
    }
    /**
       * 0 ~ 255 RGB color number を `00` な 16進形式に変換します
       * @param {number} colorNumber 変換する RGB color number
       * @returns {string} 2桁を保証し 16進 変換後文字列を返します
       */ }, { key: 'int16', value: function int16(
    colorNumber) {
      var hex = colorNumber.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }
    /**
       * RGB を CSS形式 hex 変換します
       * @param {number} r red 0 ~ 255
       * @param {number} g green 0 ~ 255
       * @param {number} b blue 0 ~ 255
       * @returns {string} CSS形式 hex `#ff0000` を返します
       */ }, { key: 'rgb2hex', value: function rgb2hex(
    r, g, b) {
      return '#' + Iro.int16(r) + Iro.int16(g) + Iro.int16(b);
    }
    /**
       * 0 ~ 16777215 数値を `#ffffff` な CSS 16進色形式に変換します
       * @param {number} rgb 0 ~ 16777215 名数値
       * @returns {string} `#ffffff` な CSS 16進色形式を返します
       */ }, { key: 'int2hex', value: function int2hex(
    rgb) {
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
       */ }, { key: 'hex2int', value: function hex2int(
    hex) {
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
       */ }, { key: 'toInt', value: function toInt(
    hex) {
      return parseInt(hex.replace('#', '0x'), 16);
    } }]);return Iro;}();exports.default = Iro;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);











var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                        * Array（配列）Utility
                                                                                                                                                                        */var
List = function () {function List() {(0, _classCallCheck3.default)(this, List);}(0, _createClass3.default)(List, null, [{ key: 'filling',
    /**
                                                                                                                                           * Array.prototype.fill, polyfill
                                                                                                                                           * @param {number} lengthData 配列長
                                                                                                                                           * @param {*} value fill する値
                                                                                                                                           * @returns {Array.<*>} fill 後の配列を返します
                                                                                                                                           * @private
                                                                                                                                           */value: function filling(
    lengthData, value) {
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
       */ }, { key: 'fill', value: function fill(
    length) {var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // 関数が使えない時は polyfill 関数を使用します
      if (!_Type2.default.method(Array.prototype.fill)) {
        return List.filling(length, value);
      }
      // native method
      return new Array(length).fill(value);
    } }]);return List;}(); /**
                            * Copyright (c) 2011-2016 inazumatv.com, inc.
                            * @author (at)taikiken / http://inazumatv.com
                            * @date 2016/10/26 - 14:57
                            *
                            * Distributed under the terms of the MIT license.
                            * http://www.opensource.org/licenses/mit-license.html
                            *
                            * This notice shall be included in all copies or substantial portions of the Software.
                            *
                            */exports.default = List;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
                             */var
Times = function () {function Times() {(0, _classCallCheck3.default)(this, Times);}(0, _createClass3.default)(Times, null, [{ key: "present",
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
     */value: function present()
    {
      return new Date();
    }
    /**
       * 指定分後の Date instance
       * @param {number} n 指定分
       * @returns {Date} 指定分後の Date instance
       */ }, { key: "minute", value: function minute(
    n) {
      return new Date(Date.now() + n * oneMinute);
    }
    /**
       * 指定時間後の Date instance
       * @param {number} n 指定時間
       * @returns {Date} 指定時間後の Date instance
       */ }, { key: "hour", value: function hour(
    n) {
      return new Date(Date.now() + n * oneHour);
    }
    /**
       * 指定日後の Date instance
       * @param {number} n 指定日
       * @returns {Date} 指定日後の Date instance
       */ }, { key: "day", value: function day(
    n) {
      return new Date(Date.now() + n * oneDay);
    }
    /**
       * 指定週後の Date instance
       * @param {number} n 指定週
       * @returns {Date} 指定週後の Date instance
       */ }, { key: "week", value: function week(
    n) {
      return new Date(Date.now() + n * oneWeek);
    }
    /**
       * 指定月後の Date instance
       * @param {number} n 指定月
       * @returns {Date} 指定月後の Date instance
       */ }, { key: "month", value: function month(
    n) {
      return new Date(Date.now() + n * oneMonth);
    } }]);return Times;}();exports.default = Times;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);














var _Events2 = __webpack_require__(7);var _Events3 = _interopRequireDefault(_Events2);


var _Vectors = __webpack_require__(29);var _Vectors2 = _interopRequireDefault(_Vectors);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                          * Touching events object
                                                                                                                                                                                          */ /**
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
                                                                                                                                                                                              */ // events
var TouchingEvents = function (_Events) {(0, _inherits3.default)(TouchingEvents, _Events); /**
                                                                                            * Touching events object 各プロパティを設定します
                                                                                            * @param {string} type event type
                                                                                            * @param {*} target イベント発生インスタンス
                                                                                            * @param {Event} origin 発生時のオリジナルイベント
                                                                                            * @param {Vectors} current 現在の位置
                                                                                            * @param {Vectors} between 前回位置との差
                                                                                            * @param {boolean} scrolling scroll したかの真偽値, true: scroll している
                                                                                            */function TouchingEvents(type, target, origin) {var current = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _Vectors2.default();var between = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _Vectors2.default();var scrolling = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;(0, _classCallCheck3.default)(this, TouchingEvents); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 発生時のオリジナルイベント
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @type {Event}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */var _this = (0, _possibleConstructorReturn3.default)(this, (TouchingEvents.__proto__ || (0, _getPrototypeOf2.default)(TouchingEvents)).call(this, type, target)); // super
    _this.origin = origin; /**
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
    _this.scrolling = scrolling;return _this;
  }return TouchingEvents;}(_Events3.default); // util
exports.default = TouchingEvents;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = __webpack_require__(3);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = __webpack_require__(5);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(4);var _inherits3 = _interopRequireDefault(_inherits2);











var _Events2 = __webpack_require__(7);var _Events3 = _interopRequireDefault(_Events2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                  * Wheel Events, mouse wheel で発生するイベントを管理します
                                                                                                                                                                                  */var
WheelEvents = function (_Events) {(0, _inherits3.default)(WheelEvents, _Events);
  /**
                                                                                  * custom Event Object
                                                                                  * @param {string} type イベント種類
                                                                                  * @param {*} currentTarget current イベント発生インスタンス
                                                                                  * @param {*} [target=undefined] イベント発生インスタンス
                                                                                  * */
  function WheelEvents(type, currentTarget) {var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;(0, _classCallCheck3.default)(this, WheelEvents);

    /**
                                                                                                                                                                                           * 移動距離(px)
                                                                                                                                                                                           * @type {number}
                                                                                                                                                                                           */var _this = (0, _possibleConstructorReturn3.default)(this, (WheelEvents.__proto__ || (0, _getPrototypeOf2.default)(WheelEvents)).call(this, type, currentTarget, target));
    _this.moved = 0;return _this;
  }return WheelEvents;}(_Events3.default); /**
                                            * Copyright (c) 2011-2016 inazumatv.com, inc.
                                            * @author (at)taikiken / http://inazumatv.com
                                            * @date 2016/11/20 - 12:11
                                            *
                                            * Distributed under the terms of the MIT license.
                                            * http://www.opensource.org/licenses/mit-license.html
                                            *
                                            * This notice shall be included in all copies or substantial portions of the Software.
                                            *
                                            */exports.default = WheelEvents;

/***/ }),
/* 85 */
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
 * 0.1.0
 * 2017-5-12 17:49:04
 */
// use strict は本来不要でエラーになる
// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
/* eslint strict: [0, "global"] */



// event
var _EventDispatcher = __webpack_require__(8);var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
var _Events = __webpack_require__(7);var _Events2 = _interopRequireDefault(_Events);
var _Rising = __webpack_require__(73);var _Rising2 = _interopRequireDefault(_Rising);
var _Scroll = __webpack_require__(49);var _Scroll2 = _interopRequireDefault(_Scroll);
var _Scrolling = __webpack_require__(50);var _Scrolling2 = _interopRequireDefault(_Scrolling);
var _Touching = __webpack_require__(74);var _Touching2 = _interopRequireDefault(_Touching);
var _Wheel = __webpack_require__(75);var _Wheel2 = _interopRequireDefault(_Wheel);


var _Ajax = __webpack_require__(76);var _Ajax2 = _interopRequireDefault(_Ajax);
var _Cookie = __webpack_require__(77);var _Cookie2 = _interopRequireDefault(_Cookie);
var _Queries = __webpack_require__(78);var _Queries2 = _interopRequireDefault(_Queries);


var _Cycle = __webpack_require__(51);var _Cycle2 = _interopRequireDefault(_Cycle);
var _Fps = __webpack_require__(79);var _Fps2 = _interopRequireDefault(_Fps);
var _Polling = __webpack_require__(28);var _Polling2 = _interopRequireDefault(_Polling);
var _Rate = __webpack_require__(52);var _Rate2 = _interopRequireDefault(_Rate);


var _Type = __webpack_require__(12);var _Type2 = _interopRequireDefault(_Type);
var _Hit = __webpack_require__(53);var _Hit2 = _interopRequireDefault(_Hit);
var _List = __webpack_require__(81);var _List2 = _interopRequireDefault(_List);
var _Text = __webpack_require__(23);var _Text2 = _interopRequireDefault(_Text);
var _Times = __webpack_require__(82);var _Times2 = _interopRequireDefault(_Times);
var _Vectors = __webpack_require__(29);var _Vectors2 = _interopRequireDefault(_Vectors);
var _Iro = __webpack_require__(80);var _Iro2 = _interopRequireDefault(_Iro);


var _Can = __webpack_require__(71);var _Can2 = _interopRequireDefault(_Can);
var _Patterns = __webpack_require__(45);var _Patterns2 = _interopRequireDefault(_Patterns);
var _Style = __webpack_require__(46);var _Style2 = _interopRequireDefault(_Style);


var _Bounding = __webpack_require__(47);var _Bounding2 = _interopRequireDefault(_Bounding);
var _Classes = __webpack_require__(48);var _Classes2 = _interopRequireDefault(_Classes);
var _Elements = __webpack_require__(72);var _Elements2 = _interopRequireDefault(_Elements);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                            * **MOKU**
                                                                                                                                                                                            * <p>global Object</p>
                                                                                                                                                                                            * <p>public な Class はここからアクセス可能です</p>
                                                                                                                                                                                            * @type {Object}
                                                                                                                                                                                            */ // css
// net
var MOKU = {}; /**
                * version number を取得します
                * @returns {string} version number を返します
                */ // dom
// util
// tick
MOKU.version = function () {return '0.1.0';}; /**
                                                   * build 日時を取得します
                                                   * @returns {string}  build 日時を返します
                                                   */MOKU.build = function () {return '2017-5-12 17:49:04';};
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
  Touching: _Touching2.default };

/**
                                   * MOKU.net
                                   * @type {Object} MOKU.net object を返します
                                   */
MOKU.net = {
  Ajax: _Ajax2.default,
  Cookie: _Cookie2.default,
  Queries: _Queries2.default };

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
  Type: _Type2.default,
  List: _List2.default,
  Text: _Text2.default,
  Times: _Times2.default,
  Vectors: _Vectors2.default,
  Hit: _Hit2.default,
  Iro: _Iro2.default };

/**
                         * MOKU.util
                         * @type {Object} MOKU.css object を返します
                         */
MOKU.css = {
  Patterns: _Patterns2.default,
  Style: _Style2.default,
  Can: _Can2.default };

/**
                         * MOKU.util
                         * @type {Object} MOKU.dom object を返します
                         */
MOKU.dom = {
  Bounding: _Bounding2.default,
  Classes: _Classes2.default,
  Elements: _Elements2.default };


// export
/**
 * global object `MOKU`
 * @type {Object}
 */
window.MOKU = MOKU;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = __webpack_require__(0);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(1);var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
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
var _duration = 200;

/**
                      * scroll 操作を強制的に不可能にします
                      */var
Freeze = function () {function Freeze() {(0, _classCallCheck3.default)(this, Freeze);}(0, _createClass3.default)(Freeze, null, [{ key: 'start',
    /**
                                                                                                                                                 * scroll 動作を受付不能にします
                                                                                                                                                 * @returns {void}
                                                                                                                                                 */value: function start()
    {
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
       */ }, { key: 'stop', value: function stop()
    {
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
       */ }, { key: 'onScroll', value: function onScroll(
    event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    /**
       * scroll 操作を引数(delay)の間キャンセルします
       * @param {number} [delay=200] 遅延時間(ms), 200
       * @returns {number} time out id
       */ }, { key: 'freeze', value: function freeze()
    {var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Freeze.duration();
      clearTimeout(timerId);
      // timerId = 0;
      Freeze.start();
      if (delay > 0) {
        timerId = setTimeout(Freeze.stop, delay);
      }
      return timerId;
    }
    /**
       * scroll 操作を不能にする時間間隔(ms)を取得します
       * @returns {number} scroll 操作を不能にする時間間隔(ms)
       */ }, { key: 'duration', value: function duration()
    {
      return _duration;
    }
    /**
       * scroll 操作を不能にする時間間隔(ms)を設定します
       * @param {number} time scroll 操作を不能にする時間(ms)
       * @returns {void}
       */ }, { key: 'setDuration', value: function setDuration(
    time) {
      _duration = time;
    } }]);return Freeze;}();exports.default = Freeze;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(89);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(88);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(129);
module.exports = __webpack_require__(2).Array.from;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(27);
module.exports = __webpack_require__(127);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(27);
module.exports = __webpack_require__(128);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(2).Number.isInteger;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(2).Object.getPrototypeOf;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(2).Object.setPrototypeOf;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
__webpack_require__(137);
__webpack_require__(139);
__webpack_require__(140);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(44);
module.exports = __webpack_require__(43).f('iterator');

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(69)
  , toIndex   = __webpack_require__(126);
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11)
  , createDesc      = __webpack_require__(22);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(21)
  , gOPS    = __webpack_require__(64)
  , pIE     = __webpack_require__(36);
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10).document && document.documentElement;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(19)
  , ITERATOR   = __webpack_require__(6)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(18)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(35)
  , descriptor     = __webpack_require__(22)
  , setToStringTag = __webpack_require__(37)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(17)(IteratorPrototype, __webpack_require__(6)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(6)('iterator')
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
/* 119 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(21)
  , toIObject = __webpack_require__(16);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(26)('meta')
  , isObject = __webpack_require__(18)
  , has      = __webpack_require__(15)
  , setDesc  = __webpack_require__(11).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(20)(function(){
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(11)
  , anObject = __webpack_require__(13)
  , getKeys  = __webpack_require__(21);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16)
  , gOPN      = __webpack_require__(63).f
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(18)
  , anObject = __webpack_require__(13);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(31)(Function.call, __webpack_require__(62).f(Object.prototype, '__proto__').set, 2);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40)
  , defined   = __webpack_require__(32);
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13)
  , get      = __webpack_require__(70);
module.exports = __webpack_require__(2).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(58)
  , ITERATOR  = __webpack_require__(6)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(2).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(31)
  , $export        = __webpack_require__(9)
  , toObject       = __webpack_require__(25)
  , call           = __webpack_require__(116)
  , isArrayIter    = __webpack_require__(113)
  , toLength       = __webpack_require__(69)
  , createProperty = __webpack_require__(109)
  , getIterFn      = __webpack_require__(70);

$export($export.S + $export.F * !__webpack_require__(118)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(107)
  , step             = __webpack_require__(119)
  , Iterators        = __webpack_require__(19)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(61)(Array, 'Array', function(iterated, kind){
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(9);

$export($export.S, 'Number', {isInteger: __webpack_require__(115)});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(35)});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(25)
  , $getPrototypeOf = __webpack_require__(65);

__webpack_require__(67)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(25)
  , $keys    = __webpack_require__(21);

__webpack_require__(67)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(124).set});

/***/ }),
/* 137 */
/***/ (function(module, exports) {



/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(10)
  , has            = __webpack_require__(15)
  , DESCRIPTORS    = __webpack_require__(14)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(68)
  , META           = __webpack_require__(121).KEY
  , $fails         = __webpack_require__(20)
  , shared         = __webpack_require__(39)
  , setToStringTag = __webpack_require__(37)
  , uid            = __webpack_require__(26)
  , wks            = __webpack_require__(6)
  , wksExt         = __webpack_require__(43)
  , wksDefine      = __webpack_require__(42)
  , keyOf          = __webpack_require__(120)
  , enumKeys       = __webpack_require__(110)
  , isArray        = __webpack_require__(114)
  , anObject       = __webpack_require__(13)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(41)
  , createDesc     = __webpack_require__(22)
  , _create        = __webpack_require__(35)
  , gOPNExt        = __webpack_require__(123)
  , $GOPD          = __webpack_require__(62)
  , $DP            = __webpack_require__(11)
  , $keys          = __webpack_require__(21)
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
  __webpack_require__(63).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(36).f  = $propertyIsEnumerable;
  __webpack_require__(64).f = $getOwnPropertySymbols;

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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');

/***/ })
/******/ ]);