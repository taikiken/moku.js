/*!
 * Copyright (c) 2011-2016 inazumatv.com, inc.
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

// event
import { EventDispatcher } from './event/EventDispatcher';
import { EventObject } from './event/EventObject';

// net
import { Ajax } from './net/Ajax';
// import { Cycle } from './display/Cycle';
// import { Fps } from './display/Fps';
// import { Polling } from './display/Polling';

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
MOKU.version = ():String => '@@version';
/**
 * build 日時を取得します
 * @return {string}  build 日時を返します
 */
MOKU.build = ():String => '@@buildTime';
/**
 * MOKU.event
 * @type {Object} MOKU.event object を返します
 */
MOKU.event = {
  EventDispatcher,
  EventObject,
};
/**
 * MOKU.net
 * @type {Object} MOKU.net object を返します
 */
MOKU.net = {
  Ajax,
};
// /**
//  * MOKU.display
//  * @type {Object} MOKU.display object を返します
//  */
// MOKU.display = {
//   Cycle,
//   Fps,
//   Polling,
// };

// export
window.MOKU = MOKU;
