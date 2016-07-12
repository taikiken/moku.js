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
import { EventObject } from '../event/EventObject';

/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
const singletonSymbol:Symbol = Symbol();
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
const requestSymbol:Symbol = Symbol();
/**
 * private property key, this.update.bind(this) を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const updateSymbol:Symbol = Symbol();
/**
 * private property key, requestAnimationFrame を開始したかを表す真偽値を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const startSymbol:Symbol = Symbol();
/**
 * Cycle.UPDATE event を発火する時の EventObject instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventSymbol:Symbol = Symbol();

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
  constructor(checkSymbol:Symbol) {
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
    // eventObject
    this[eventSymbol] = new EventObject(Cycle.UPDATE);
    // 設定済み instance を返します
    return instance;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * requestAnimationFrame 毎に発生するイベントを取得します
   * @return {String} event, cycleUpdate を返します
   */
  static get UPDATE():String {
    return 'cycleUpdate';
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
      console.warn('Cycle.start already start', this[startSymbol]);
      return;
    }
    this[startSymbol] = true;
    this.update();
  }
  /**
   * loop(cancelAnimationFrame) を止めます
   * @param {Number} [id] requestAnimationFrame id を使い cancelAnimationFrame をします
   */
  stop(id:Number = this[requestSymbol]):void {
    cancelAnimationFrame(id);
    this[startSymbol] = false;
  }
  // ----------------------------------------
  // PRIVATE METHOD
  // ----------------------------------------
  /**
   * loop(requestAnimationFrame)コールバック関数<br>Cycle.UPDATE event を発火します
   */
  update():void {
    // requestAnimationFrame id
    const id:Number = requestAnimationFrame(this[updateSymbol]);
    this[requestSymbol] = id;
    // event
    const event:EventObject = this[eventSymbol];
    event.id = id;
    // event fire
    this.dispatch(event);
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * Cycle instance を singleton を保証し作成します
   * @return {Cycle}
   */
  static factory():Cycle {
    return new Cycle(singletonSymbol);
  }
}
