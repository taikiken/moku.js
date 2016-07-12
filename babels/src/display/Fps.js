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
import { EventObject } from '../event/EventObject';

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
 * private property key, fps を milli seconds に変換した polling（interval） 時間を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const intervalSymbol:Symbol = Symbol();
/**
 * private property key, fps を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const fpsSymbol:Symbol = Symbol();

/**
 * フレームレート毎に UPDATE イベントを発生させます
 */
export class Fps extends EventDispatcher {
  /**
   * 引数の frame rate に合わせ UPDATE イベントを発生させます
   * @param {Number} [fps=30] frame rate
   */
  constructor(fps:Number = 30) {
    super();
    // Cycle instance
    const cycle:Cycle = Cycle.factory();
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
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * requestAnimationFrame 毎に発生するイベントを取得します
   * @return {String} event, fpsUpdate を返します
   */
  static get UPDATE():String {
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
  get fps():Number {
    return this[fpsSymbol];
  }
  /**
   * frame rate を設定します
   * @param {Number} rate frame rate
   */
  set fps(rate:Number):void {
    this[fpsSymbol] = rate;
    this[intervalSymbol] = 1000 / rate;
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
  // polling
  /**
   * interval time(milli seconds) を取得します
   * @return {Number} interval time(milli seconds) を返します
   */
  get interval():Number {
    return this[intervalSymbol];
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
      console.warn('Fps.start already start', this[startSymbol]);
      return;
    }
    this.init(fpsSymbol);
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
    if (strong || (present - this.begin) >= this.interval) {
      // event 発生
      this.dispatch({
        type: Fps.UPDATE,
        time: present,
        begin: this.begin,
        interval: this.interval,
      });
      // 開始時間を update
      this.begin = present;
    }
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
  init(symbol:Symbol):void {
    this.fps = this[symbol];
    this.begin = Date.now();
  }
}
