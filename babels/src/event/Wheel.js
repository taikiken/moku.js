/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/26 - 19:12
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// event
import EventDispatcher from './EventDispatcher';
import WheelEvents from './WheelEvents';

/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
const singletonSymbol = Symbol('Scroll singleton symbol');
/**
 * singleton instance, nullable
 * @type {?Wheel}
 * @private
 */
let instance = null;

/**
 * mousewheel event を監視し通知を行います
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const instance:Wheel = Wheel.factory();
 * ```
 */
export default class Wheel extends EventDispatcher {
  /**
   * singleton です
   * @param {Symbol} checkSymbol singleton を保証するための private instance
   * @returns {Wheel} singleton instance を返します
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

    // event handler
    // const boundWheel = this.mouseWheel.bind(this);
    /**
     * bound mouseWheel
     * @type {function}
     */
    this.boundWheel = this.mouseWheel.bind(this);
    // this.boundWheel = () => boundWheel;
    /**
     * 閾値, wheel 移動量が閾値を超えたときにイベントを発生させます
     * @type {number}
     * @default 200
     */
    this.threshold = 200;
    /**
     * wheelDelta 移動量が閾値を超えるかをチェックするための積算計算変数
     * @type {number}
     */
    this.moved = 0;
    /**
     * start flag
     * @type {boolean}
     */
    this.started = false;
    const events = {
      up: new WheelEvents(Wheel.UP, this),
      down: new WheelEvents(Wheel.DOWN, this),
    };
    /**
     * UP / DOWN Events instance
     * @returns {{up: WheelEvents, down: WheelEvents}} UP / DOWN Events instance
     */
    this.events = () => events;

    // 設定済み instance を返します
    return instance;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * wheel up で発生するイベントを取得します
   * @event UP
   * @returns {string} event, wheelUp を返します
   * @default wheelUp
   */
  static get UP() {
    return 'wheelUp';
  }
  /**
   * wheel  で発生するイベントを取得します
   * @event DOWN
   * @returns {string} event, wheelUp を返します
   * @default wheelUp
   */
  static get DOWN() {
    return 'wheelDown';
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * mousewheel event を監視します
   * @returns {Wheel} method chain 可能なように instance を返します
   */
  start() {
    if (this.started) {
      return this;
    }
    this.started = true;
    // this.unwatch();
    window.addEventListener('wheel', this.boundWheel, false);
    return this;
  }
  /**
   * mousewheel event を監視を止めます
   * @returns {Wheel} method chain 可能なように instance を返します
   */
  stop() {
    if (!this.started) {
      return this;
    }
    this.started = false;
    window.removeEventListener('wheel', this.boundWheel);
    return this;
  }
  /**
   * window mousewheel event handler
   * <p>delta 値を取得し `this.moving` を実行します</p>
   *
   * @listens {WheelEvent} WheelEvent.wheel
   * @param {WheelEvent} event window wheel event
   * @returns {number} 前回移動量に delta 値 を加算した値を返します
   */
  mouseWheel(event) {
    const wheelDelta = event.deltaY;
    return this.moving(wheelDelta);
  }
  /**
   * mouse delta から移動量を計算します
   * @param {number} delta mouse delta 値
   * @returns {number} 前回移動量に delta 値 を加算した値を返します
   */
  moving(delta) {
    /**
     * 移動量が閾値を超えるかをチェックするための計算変数
     * @type {number}
     */
    this.moved += delta;
    // @type {number}
    const moved = this.moved;

    // 0 check
    if (moved === 0) {
      // 移動量が 0 なので処理をしない
      return moved;
    }

    // 閾値チェック
    if (Math.abs(moved) >= this.threshold) {
      // scroll event を発火します
      if (moved > 0) {
        // scroll up
        this.up(moved);
      } else {
        this.down(moved);
      }

      // initialize moved, 発火後に積算移動変数を初期化します
      this.moved = 0;
      return moved;
    }
    // 閾値を超えていないので処理をしない
    return moved;
  }
  /**
   * scroll up イベントを発火します
   * @param {number} moved 移動量
   * @returns {number} 加算移動量を返します
   */
  up(moved) {
    // @type {Events}
    const events = this.events().up;
    events.moved = moved;
    this.dispatch(events);

    return moved;
  }
  /**
   * scroll down イベントを発火します
   * @param {number} moved 移動量
   * @returns {number} 加算移動量を返します
   */
  down(moved) {
    // @type {Events}
    const events = this.events().down;
    events.moved = moved;
    this.dispatch(events);

    return moved;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * Wheel instance を singleton を保証し作成します
   * @returns {Wheel} Wheel instance を返します
   */
  static factory() {
    if (instance !== null) {
      return instance;
    }
    return new Wheel(singletonSymbol);
  }
}
