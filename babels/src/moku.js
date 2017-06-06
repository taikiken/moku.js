/*!
 * Copyright (c) inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/06/30 - 17:54
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * @@version
 * @@buildTime
 */
// use strict は本来不要でエラーになる
// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
/* eslint strict: [0, "global"] */

'use strict';

// fetch / promise
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

// event
import EventDispatcher from './event/EventDispatcher';
import Events from './event/Events';
import Rising from './event/Rising';
import Scroll from './event/Scroll';
import Scrolling from './event/Scrolling';
import Touching from './event/Touching';
import Wheel from './event/Wheel';

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

// dom
import Bounding from './dom/Bounding';
import Classes from './dom/Classes';
import Elements from './dom/Elements';

// promise
// Promise: To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

/**
 * **MOKU**
 * <p>global Object</p>
 * <p>public な Class はここからアクセス可能です</p>
 * @type {Object}
 */
const MOKU = {};
/**
 * version number を取得します
 * @returns {string} version number を返します
 */
MOKU.version = () => '@@version';
/**
 * build 日時を取得します
 * @returns {string}  build 日時を返します
 */
MOKU.build = () => '@@buildTime';
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
};

// export
/**
 * global object `MOKU`
 * @type {Object}
 */
window.MOKU = MOKU;

export default MOKU;
