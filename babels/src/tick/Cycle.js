/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/03
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

// event
import { EventDispatcher } from '../event/EventDispatcher';
import { Events } from '../event/Events';

/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
const singletonSymbol = Symbol();
/**
 * singleton instance
 * @type {null|Cycle}
 * @private
 */
let instance = null;

/**
 * private property key, requestAnimationFrame ID を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const requestSymbol = Symbol();
/**
 * private property key, this.update.bind(this) を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const updateSymbol = Symbol();
/**
 * private property key, requestAnimationFrame を開始したかを表す真偽値を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const startSymbol = Symbol();
/**
 * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventsSymbol = Symbol();

/**
 * <p>requestAnimationFrame でループイベントを発生させます</p>
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const loop:Cycle = Cycle.factory();
 * ```
 *
 * <p>requestAnimationFrame は tab が active(focus) な時のみ発生します</p>
 */
export class Cycle extends EventDispatcher {
  /**
   * singleton です
   * @param {Symbol} checkSymbol singleton を保証するための private instance
   * @return {Cycle}
   */
  constructor(checkSymbol) {
    // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {
      throw new Error('don\'t use new, instead use static factory method.');
    }
    super();
    // instance 作成済みかをチェックし instance が null の時 this を設定します
    if (instance !== null) {
      return instance;
    }
    // onetime setting
    instance = this;
    // requestAnimationFrame return id
    this[requestSymbol] = 0;
    // update bind function
    this[updateSymbol] = this.update.bind(this);
    // started flag
    this[startSymbol] = false;
    // Events
    this[eventsSymbol] = new Events(Cycle.UPDATE, this, this);
    // 設定済み instance を返します
    return instance;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * requestAnimationFrame 毎に発生するイベントを取得します
   * @event UPDATE
   * @return {string} event, cycleUpdate を返します
   * @default cycleUpdate
   */
  static get UPDATE() {
    return 'cycleUpdate';
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame) を開始します
   * @returns {boolean} start に成功すると true を返します
   */
  start() {
    if (this[startSymbol]) {
      // already start
      console.warn('Cycle.start already start', this[startSymbol]);
      return false;
    }
    this[startSymbol] = true;
    this.update();
    return true;
  }
  /**
   * loop(cancelAnimationFrame) を止めます
   * @param {number} [id] requestAnimationFrame id を使い cancelAnimationFrame をします
   * @returns {boolean} stop に成功すると true を返します
   */
  stop(id = this[requestSymbol]) {
    if (!this[startSymbol]) {
      // not start
      return false;
    }
    cancelAnimationFrame(id);
    this[startSymbol] = false;
    return true;
  }
  // ----------------------------------------
  // PRIVATE METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame)コールバック関数<br>Cycle.UPDATE event を発火します
   * @returns {Cycle} Cycle instance を返します
   */
  update() {
    // @type {number} - requestAnimationFrame id
    const id = requestAnimationFrame(this[updateSymbol]);
    this[requestSymbol] = id;
    // @type {Events} - event
    const events = this[eventsSymbol];
    events.id = id;
    // event fire
    this.dispatch(events);
    return this;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * Cycle instance を singleton を保証し作成します
   * @return {Cycle} Cycle instance を返します
   */
  static factory() {
    return new Cycle(singletonSymbol);
  }
}