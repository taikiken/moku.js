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

/**
 * private property key, fps を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const fpsSymbol = Symbol('Singleton Fps Symbol');

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
    // private property
    // @type {number} - frame rate, default: 30
    this[fpsSymbol] = fps;
    // @type {Events} - Events
    const events = new Events(Fps.UPDATE, this, this);
    events.fps = fps;
    /**
     * Fps.UPDATE Events instance
     * @type {Events}
     */
    this.events = events;
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
  // GETTER / SETTER
  // ----------------------------------------
  // fps
  /**
   * frame rate を取得します
   * @returns {number} frame rate を返します
   */
  get fps() {
    return this[fpsSymbol];
  }
  /**
   * frame rate を設定します, 1 ~ 60 の間で設定します
   * @param {number} rate frame rate
   */
  set fps(rate) {
    const events = this.events;
    events.fps = rate;
    this[fpsSymbol] = rate;
    /**
     * interval milliseconds
     * @type {number}
     */
    this.polling = 1000 / rate;
  }
}
