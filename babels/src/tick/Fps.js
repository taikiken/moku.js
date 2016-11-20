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
import { default as Events } from '../event/Events';

// tick
import { default as Polling } from './Polling';

// /**
//  * private property key, fps を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const fpsSymbol = Symbol('Singleton Fps Symbol');

/**
 * フレームレート毎に UPDATE イベントを発生させます
 */
export default class Fps extends Polling {
  /**
   * 引数の frame rate に合わせ UPDATE イベントを発生させます
   * @param {number} [fps=30] frame rate, default: 30
   */
  constructor(fps = 30) {
    super(1000 / fps);
    // @type {Events} - Events
    const events = new Events(Fps.UPDATE, this, this);
    /**
     * Fps.UPDATE Events instance
     * @returns {Events} Fps.UPDATE Events instance
     */
    this.events = () => events;
    /**
     * frame rate
     * @type {number}
     */
    this.fps = fps;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * フレームレート毎に発生するイベントを取得します
   * @event UPDATE
   * @returns {string} event, fpsUpdate を返します
   * @default fpsUpdate
   */
  static get UPDATE() {
    return 'fpsUpdate';
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
   */
  change(interval) {
    /**
     * polling 間隔
     * @type {number}
     */
    this.interval = 1000 / interval;
    this.fps = interval;
    return this.update();
  }
}
