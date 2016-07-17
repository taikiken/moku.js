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
import { EventDispatcher } from './event/EventDispatcher';
import { Events } from './event/Events';

// net
import { Ajax } from './net/Ajax';

// tick
import { Cycle } from './tick/Cycle';
import { Fps } from './tick/Fps';
import { Polling } from './tick/Polling';

// util
import { Type } from './util/Type';
/**
 * **MOKU**
 * <p>global Object</p>
 * <p>public な Class はここからアクセス可能です</p>
 * @type {Object}
 */
const MOKU = {};
/**
 * version number を取得します
 * @return {string} version number を返します
 */
MOKU.version = () => '@@version';
/**
 * build 日時を取得します
 * @return {string}  build 日時を返します
 */
MOKU.build = () => '@@buildTime';
/**
 * MOKU.event
 * @type {Object} MOKU.event object を返します
 */
MOKU.event = {
  EventDispatcher,
  Events,
};
/**
 * MOKU.net
 * @type {Object} MOKU.net object を返します
 */
MOKU.net = {
  Ajax,
};
/**
 * MOKU.tick
 * @type {Object} MOKU.tick object を返します
 */
MOKU.tick = {
  Cycle,
  Fps,
  Polling,
};
/**
 * MOKU.util
 * @type {Object} MOKU.util object を返します
 */
MOKU.util = {
  Type,
};

// export
window.MOKU = MOKU;
