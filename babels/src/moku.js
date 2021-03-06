/*!
 * Copyright (c) inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/06/30 - 17:54
 *
 * @license MIT
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

// 'use strict';

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
import './polyfill';

// event
import EventDispatcher from './event/EventDispatcher';
import Events from './event/Events';
import Rising from './event/Rising';
import Scroll from './event/Scroll';
import Scrolling from './event/Scrolling';
import Touching from './event/Touching';
import Wheel from './event/Wheel';
import Resizing from './event/Resizing';
import ResizingSingle from './event/ResizingSingle';
import Swipe from './event/Swipe';
import NativeResizing from './event/NativeResizing';
import NativeResizingSingle from './event/NativeResizingSingle';

// net
import Ajax from './net/Ajax';
import Cookie from './net/Cookie';
import Queries from './net/Queries';
import AjaxThunk from './net/AjaxThunk';

// tick
import Cycle from './tick/Cycle';
import Fps from './tick/Fps';
import Polling from './tick/Polling';
import Rate from './tick/Rate';

// util
import Type from './util/Type';
import Hit from './util/Hit';
import List from './util/List';
import Text from './util/Text';
import Times from './util/Times';
import Vectors from './util/Vectors';
import Iro from './util/Iro';

// css
import Patterns from './css/Patterns';
import Style from './css/Style';

// device
import Can from './device/Can';
import devices from './device/devices';

// device/os
import Android from './device/os/Android';
import Windows from './device/os/Windows';
import iOS from './device/os/iOS';

// device/browser
import Chrome from './device/browser/Chrome';
import CriOS from './device/browser/CriOS';
import Edge from './device/browser/Edge';
import Firefox from './device/browser/Firefox';
import FxiOS from './device/browser/FxiOS';
import IE from './device/browser/IE';
import Safari from './device/browser/Safari';

// dom
import Bounding from './dom/Bounding';
import Classes from './dom/Classes';
import Elements from './dom/Elements';

// // ----------------------------------------------
// // promise
// // Promise: To add to window
// if (!window.Promise) {
//   window.Promise = Promise;
// }

/**
 * **MOKU**
 * - global Object
 * - public な Class はここからアクセス可能です
 * @type {Object}
 */
const MOKU = {};
/**
 * version number を取得します
 * @returns {string} version number を返します
 */
MOKU.version = () => (process.env.BUILD_VERSION);
/**
 * build 日時を取得します
 * @returns {string}  build 日時を返します
 */
MOKU.buildTime = () => (process.env.BUILD_TIME);
/**
 * MOKU.event
 * @type {Object} MOKU.event object を返します
 */
MOKU.event = {
  EventDispatcher,
  Events,
  Rising,
  Scroll,
  Wheel,
  Scrolling,
  Touching,
  Resizing,
  ResizingSingle,
  Swipe,
  NativeResizing,
  NativeResizingSingle,
};
/**
 * MOKU.net
 * @type {Object} MOKU.net object を返します
 */
MOKU.net = {
  Ajax,
  Cookie,
  Queries,
  AjaxThunk,
};
/**
 * MOKU.tick
 * @type {Object} MOKU.tick object を返します
 */
MOKU.tick = {
  Cycle,
  Fps,
  Polling,
  Rate,
};
/**
 * MOKU.util
 * @type {Object} MOKU.util object を返します
 */
MOKU.util = {
  Type,
  List,
  Text,
  Times,
  Vectors,
  Hit,
  Iro,
};
/**
 * MOKU.util
 * @type {Object} MOKU.css object を返します
 */
MOKU.css = {
  Patterns,
  Style,
  Can,
};
/**
 * MOKU.util
 * @type {Object} MOKU.dom object を返します
 */
MOKU.dom = {
  Bounding,
  Classes,
  Elements,
};

MOKU.device = {
  Can,
  devices,
  os: {
    Android,
    Windows,
    iOS,
  },
  browser: {
    Chrome,
    CriOS,
    Edge,
    Firefox,
    FxiOS,
    IE,
    Safari,
  },
};

// export
/**
 * global object `MOKU`
 * @type {Object}
 */
window.MOKU = MOKU;

export default MOKU;
