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
 * private property key, fps を milli seconds に変換した polling（interval） 時間を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const intervalSymbol = Symbol();
/**
 * private property key, fps を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const fpsSymbol = Symbol();
/**
 * Fps.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventsSymbol = Symbol();

/**
 * フレームレート毎に UPDATE イベントを発生させます
 */
export class Fps extends EventDispatcher {
  /**
   * 引数の frame rate に合わせ UPDATE イベントを発生させます
   * @param {Number} [fps=30] frame rate
   */
  constructor(fps = 30) {
    super();
    // @type {Cycle} - Cycle instance
    const cycle = Cycle.factory();
    // public property
    Object.assign(this, { cycle });
    // private property
    // frame rate
    this[fpsSymbol] = fps;
    // Cycle.UPDATE event handler
    this[updateSymbol] = this.update.bind(this);
    // started flag
    this[startSymbol] = false;
    // 開始時間
    this[beginSymbol] = 0;
    // interval
    this[intervalSymbol] = 1;
    // Events
    this[eventsSymbol] = new Events(Fps.UPDATE, this, this);
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * requestAnimationFrame 毎に発生するイベントを取得します
   * @event UPDATE
   * @return {String} event, fpsUpdate を返します
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
   * @return {Number} frame rate を返します
   */
  get fps() {
    return this[fpsSymbol];
  }
  /**
   * frame rate を設定します, 1 ~ 60 の間で設定します
   * @param {Number} rate frame rate
   */
  set fps(rate) {
    this[fpsSymbol] = rate;
    this[intervalSymbol] = 1000 / rate;
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
  // polling
  /**
   * interval time(milli seconds) を取得します
   * @return {Number} interval time(milli seconds) を返します
   */
  get interval() {
    return this[intervalSymbol];
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame) を開始します
   * @returns {Boolean} start に成功すると true を返します
   */
  start() {
    if (this[startSymbol]) {
      // already start
      console.warn('Fps.start already start', this[startSymbol]);
      return false;
    }
    this.init(fpsSymbol);
    // flag -> true
    this[startSymbol] = true;
    // cycle
    const cycle = this.cycle;
    cycle.on(Cycle.UPDATE, this[updateSymbol]);
    cycle.start();
    // 最初の 1 回目のイベントを強制発行します
    const fpsEvents = this[eventsSymbol];
    fpsEvents.time = this.begin;
    fpsEvents.begin = this.begin;
    fpsEvents.interval = this.interval;
    this.fire(fpsEvents);
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
    // flag -> false
    this[startSymbol] = false;
    return true;
  }
  /**
   * loop(requestAnimationFrame) します
   * @returns {Boolean} Fps.UPDATE event が発生すると true を返します
   */
  update() {
    // @type {Number} - 現在時間
    const present = Date.now();
    // @type {Number} - polling 間隔
    const interval = this.interval;
    // @type {Number} - 開始時間
    const begin = this.begin;
    // 現在時間と開始時間の差が interval より大きくなったらイベントを発生させます
    if ((present - begin) >= interval) {
      const events = this[eventsSymbol];
      events.time = present;
      events.begin = begin;
      events.interval = interval;
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
   * Fps.UPDATE event を発生します
   * @param {Events} events Fps.UPDATE event object
   */
  fire(events) {
    this.dispatch(events);
  }
  /**
   * Fps 開始初期処理を行います
   *
   * - fps(interval time) 設定
   * - 開始時間設定
   *
   * @param {Symbol} symbol private property fps を取得するための Symbol
   * @private
   */
  init(symbol) {
    this.fps = this[symbol];
    this.begin = Date.now();
  }
}
