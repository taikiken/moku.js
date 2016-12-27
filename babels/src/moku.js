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

// event
import { default as EventDispatcher } from './event/EventDispatcher';
import { default as Events } from './event/Events';
import { default as Rising } from './event/Rising';
import { default as Scroll } from './event/Scroll';
import { default as Scrolling } from './event/Scrolling';
import { default as Touching } from './event/Touching';
import { default as Wheel } from './event/Wheel';

// net
import { default as Ajax } from './net/Ajax';
import { default as Cookie } from './net/Cookie';
import { default as Queries } from './net/Queries';

// tick
import { default as Cycle } from './tick/Cycle';
import { default as Fps } from './tick/Fps';
import { default as Polling } from './tick/Polling';
import { default as Rate } from './tick/Rate';

// util
import { default as Type } from './util/Type';
import { default as Hit } from './util/Hit';
import { default as List } from './util/List';
import { default as Text } from './util/Text';
import { default as Times } from './util/Times';
import { default as Vectors } from './util/Vectors';

// css
import { default as Can } from './css/Can';
import { default as Patterns } from './css/Patterns';
import { default as Style } from './css/Style';

// dom
import { default as Bounding } from './dom/Bounding';
import { default as Classes } from './dom/Classes';
import { default as Elements } from './dom/Elements';

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
};

MOKU.css = {
  Patterns,
  Style,
  Can,
};

MOKU.dom = {
  Bounding,
  Classes,
  Elements,
};

// export
window.MOKU = MOKU;
