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
const updateSymbol:Symbol = Symbol();
/**
 * private property key, Cycle.UPDATE 監視を開始したかを表す真偽値を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const startSymbol:Symbol = Symbol();
/**
 * private property key, Fps.start 時間を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const beginSymbol:Symbol = Symbol();
/**
 * private property key, polling を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const pollingSymbol:Symbol = Symbol();
/**
 * Polling.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventSymbol:Symbol = Symbol();

/**
 * 一定間隔毎に UPDATE イベントを発生させます
 */
export class Polling extends EventDispatcher {
  /**
   * 引数の polling に合わせ UPDATE イベントを発生させます
   * @param {Number} [polling=1000] polling milliseconds
   */
  constructor(polling:Number = 1000) {
    super();
    // Cycle instance
    const cycle:Cycle = Cycle.factory();
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
    this[eventSymbol] = new Events(Polling.UPDATE);
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * requestAnimationFrame 毎に発生するイベントを取得します
   * @return {String} event, pollingUpdate を返します
   */
  static get UPDATE():String {
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
  get polling():Number {
    return this[pollingSymbol];
  }
  /**
   * polling(milliseconds) を設定します
   * @param {Number} rate polling(milliseconds)
   */
  set polling(rate:Number):void {
    this[pollingSymbol] = rate;
  }
  // begin
  /**
   * 開始時間を取得します
   * @return {Number} 開始時間を返します
   */
  get begin():Number {
    return this[beginSymbol];
  }
  /**
   * 開始時間を設定します
   * @param {Number} time 開始時間
   */
  set begin(time:Number):void {
    this[beginSymbol] = time;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame) を開始します
   */
  start():void {
    if (this[startSymbol]) {
      // already start
      console.warn('Polling.start already start', this[startSymbol]);
      return;
    }

    this.begin = Date.now();
    this[startSymbol] = true;
    this.cycle.on(Cycle.UPDATE, this[updateSymbol]);
    this.cycle.start();
    this.update({ strong: true });
  }
  /**
   * loop(cancelAnimationFrame) します
   */
  stop():void {
    this.cycle.off(Cycle.UPDATE, this[updateSymbol]);
    this[startSymbol] = false;
  }
  /**
   * loop(requestAnimationFrame) します
   * @param {Object} event Cycle.UPDATE event Object
   */
  update(event:Object):void {
    // 現在時間
    const present:Number = Date.now();
    // strong flag
    const strong = event.hasOwnProperty('strong') && !!event.strong;
    // 現在時間 が interval より大きくなったか
    if (strong || (present - this.begin) >= this.polling) {
      const events = this[eventSymbol];
      events.time = present;
      events.begin = this.begin;
      events.interval = this.interval;
      // event 発生
      this.dispatch(events);
      // 開始時間を update
      this.begin = present;
    }
  }
}
