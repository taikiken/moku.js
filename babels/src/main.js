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

import { EventDispatcher } from './event/EventDispatcher';
import { Ajax } from './net/Ajax';
import { Cycle } from './display/Cycle';
import { Fps } from './display/Fps';
import { Polling } from './display/Polling';

/**
 * **BABEL_TASK_FILE**
 * <p>global Object</p>
 * <p>public な Class はここからアクセス可能です</p>
 * @type {Object}
 */
const BABEL_TASK_FILE = {};

/**
 * version number を取得します
 * @return {string} version number を返します
 */
BABEL_TASK_FILE.version = ():String => '@@version';
/**
 * build 日時を取得します
 * @return {string}  build 日時を返します
 */
BABEL_TASK_FILE.build = ():String => '@@buildTime';
/**
 * BABEL_TASK_FILE.net
 * @type {Object} BABEL_TASK_FILE.net object を返します
 */
BABEL_TASK_FILE.net = {
  Ajax,
};
/**
 * BABEL_TASK_FILE.event
 * @type {Object} BABEL_TASK_FILE.event object を返します
 */
BABEL_TASK_FILE.event = {
  EventDispatcher,
};
/**
 * BABEL_TASK_FILE.display
 * @type {Object} BABEL_TASK_FILE.display object を返します
 */
BABEL_TASK_FILE.display = {
  Cycle,
  Fps,
  Polling,
};

// export
window.BABEL_TASK_FILE = BABEL_TASK_FILE;
