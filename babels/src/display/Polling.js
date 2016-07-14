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
 */

// event
import { EventDispatcher } from '../event/EventDispatcher';
import { Events } from '../event/Events';

// display
import { Cycle } from './Cycle';

/**
 * private property key, this.update.bind(this) を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const updateSymbol = Symbol();
/**
 * private property key, Cycle.UPDATE 監視を開始したかを表す真偽値を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const startSymbol = Symbol();
/**
 * private property key, Fps.start 時間を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const beginSymbol = Symbol();
/**
 * private property key, polling を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const pollingSymbol = Symbol();
/**
 * Polling.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventsSymbol = Symbol();

/**
 * 一定間隔毎に UPDATE イベントを発生させます
 */
export class Polling extends EventDispatcher {
  /**
   * 引数の polling に合わせ UPDATE イベントを発生させます
   * @param {Number} [polling=1000] polling milliseconds
   */
  constructor(polling = 1000) {
    super();
    // Cycle instance
    const cycle = Cycle.factory();
    // public property
    Object.assign(this, { cycle });
    // private property
    // polling rate(milliseconds)
    this[pollingSymbol] = polling;
    // Cycle.UPDATE event handler
    this[updateSymbol] = this.update.bind(this);
    // started flag
    this[startSymbol] = false;
    // 開始時間
    this[beginSymbol] = 0;
    // Events
    this[eventsSymbol] = new Events(Polling.UPDATE, this, this);
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * requestAnimationFrame 毎に発生するイベントを取得します
   * @return {String} event, pollingUpdate を返します
   */
  static get UPDATE() {
    return 'pollingUpdate';
  }
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------
  // fps
  /**
   * polling(milliseconds) を取得します
   * @return {Number} polling(milliseconds) を返します
   */
  get polling() {
    return this[pollingSymbol];
  }
  /**
   * polling(milliseconds) を設定します
   * @param {Number} rate polling(milliseconds)
   */
  set polling(rate) {
    this[pollingSymbol] = rate;
  }
  // begin
  /**
   * 開始時間を取得します
   * @return {Number} 開始時間を返します
   */
  get begin() {
    return this[beginSymbol];
  }
  /**
   * 開始時間を設定します
   * @param {Number} time 開始時間
   */
  set begin(time) {
    this[beginSymbol] = time;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame) を開始します
   * @return {Boolean} start に成功すると true を返します
   */
  start() {
    if (this[startSymbol]) {
      // already start
      console.warn('Polling.start already start', this[startSymbol]);
      return false;
    }
    // flag -> true
    this[startSymbol] = true;
    // 開始時間
    // @type {Number}
    this.begin = Date.now();
    // cycle
    const cycle = this.cycle;
    // bind Cycle.UPDATE
    cycle.on(Cycle.UPDATE, this[updateSymbol]);
    // cycle 開始
    cycle.start();
    // 強制的に1回目を実行
    const events = this[eventsSymbol];
    events.time = this.begin;
    events.begin = this.begin;
    events.polling = this.polling;
    this.fire(events);

    return true;
  }
  /**
   * loop(cancelAnimationFrame) します
   * @returns {Boolean} stop に成功すると true を返します
   */
  stop() {
    if (!this[startSymbol]) {
      // not start
      return false;
    }
    this.cycle.off(Cycle.UPDATE, this[updateSymbol]);
    this[startSymbol] = false;
    return true;
  }
  /**
   * loop(requestAnimationFrame) します
   * @returns {Boolean} Polling.UPDATE event が発生すると true を返します
   */
  update() {
    // 現在時間
    // @type {Number}
    const present = Date.now();
    // @type {Number} - polling 間隔
    const polling = this.polling;
    // @type {Number} - 開始時間
    const begin = this.begin;
    // 現在時間 が interval より大きくなったか
    if ((present - begin) >= polling) {
      const events = this[eventsSymbol];
      events.time = present;
      events.begin = begin;
      events.polling = polling;
      // event 発生
      this.fire(events);
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
   */
  fire(events) {
    this.dispatch(events);
  }
}
