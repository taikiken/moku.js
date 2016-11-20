/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/04
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

// event
import { default as Scroll } from './Scroll';
import { default as EventDispatcher } from './EventDispatcher';
import { default as ScrollEvents } from './ScrollEvents';

// tick
import { default as Rate } from '../tick/Rate';

/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
const singletonSymbol = Symbol('Scrolling singleton symbol');
/**
 * singleton instance, nullable
 * @type {?Scrolling}
 * @private
 */
let instance = null;
// /**
//  * private property key, bind 済み mouseWheel を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const bindSymbol = Symbol('bound mouseWheel');
// /**
//  * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const eventsSymbol = Symbol('Cycle.UPDATE event');
// /**
//  * scroll top 位置が変更になったかを確認するために前回値を保存するための Symbol
//  * @type {Symbol}
//  */
// const topSymbol = Symbol('previous scroll top');

/**
 * 引数 rate instance に設定した fps でスクロール位置を通知します
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const instance = Scrolling.factory();
 *
 * instance.mother = new Elements(Elements.id(js-tc_scanimation-motion))
 * ```
 * */
export default class Scrolling extends EventDispatcher {
  /**
   * singleton です
   * @param {Symbol} checkSymbol singleton を保証するための private instance
   * @returns {Scrolling} singleton instance を返します
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

    // @type {function} - bound scroll function
    // this[bindSymbol] = this.scroll.bind(this);
    //
    // // @type {Events} - events instance
    // this[eventsSymbol] = new ScrollEvents(Scrolling.SCROLL, this, this);
    const boundScroll = this.scroll.bind(this);
    /**
     * bound scroll, Rate.UPDATE event handler
     * @returns {function} bound scroll
     */
    this.boundScroll = () => boundScroll;
    const events = new ScrollEvents(Scrolling.UPDATE, this, this);
    /**
     * ScrollEvents instance, 発火時に使用します
     * @returns {ScrollEvents} ScrollEvents instance
     */
    this.events = () => events;

    // @type {number} - scroll top 前回値を保存します
    // @default -1
    // this[topSymbol] = -1;
    /**
     * 前回 scroll top 位置
     * @type {number}
     * @default -1
     */
    this.previous = -1;
    /**
     * start 済みフラッグ
     * @type {boolean}
     * @default false
     */
    this.started = false;

    // /**
    //  * @property {Rate} this.rate - Rate instance
    //  */
    // Object.assign(this, { rate });
    /**
     * Rate instance
     * @type {?Rate}
     */
    this.rate = null;

    // 設定済み instance を返します
    return instance;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * fps で発生するイベントを取得します
   * @event SCROLL
   * @returns {string} event, scrollingScroll を返します
   * @default scrollingScroll
   */
  static get UPDATE() {
    return 'scrollingUpdate';
  }
  // // ----------------------------------------
  // // GETTER / SETTER
  // // ----------------------------------------
  // /**
  //  * bind 済み mouseWheel
  //  * @returns {function} bind 済み mouseWheel を返します
  //  */
  // get bindScroll() {
  //   return this[bindSymbol];
  // }
  // // events
  // /**
  //  * Events instance を取得します
  //  * @returns {Events} Events instance
  //  */
  // get events() {
  //   return this[eventsSymbol];
  // }
  // /**
  //  * Events instance を設定します
  //  * @param {Events} events Events instance
  //  */
  // set events(events) {
  //   this[eventsSymbol] = events;
  // }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * Rate instance を設定します
   * @param {Rate} [rate=new Rate(Rate.Rate_5)] Rate instance, scroll 監視 fps を設定します
   * @returns {Scrolling} method chain 可能なように instance を返します
   */
  init(rate = new Rate(Rate.RATE_5)) {
    this.rate = rate;
    return this;
  }
  /**
   * fps を監視しスクロール位置を知らせます
   * @returns {Scrolling} method chain 可能なように instance を返します
   */
  start() {
    const rate = this.rate;
    if (rate === null) {
      throw new Error(`rate: ${rate} error. have to set rate, before start.`);
    }
    if (this.started) {
      return this;
    }
    this.started = true;
    rate.on(Rate.UPDATE, this.boundScroll());
    rate.start();
    return this;
  }
  /**
   * fps 監視を止めます
   * @returns {Scrolling} method chain 可能なように instance を返します
   */
  stop() {
    if (!this.started) {
      return this;
    }
    this.started = false;
    this.rate.off(Rate.UPDATE, this.boundScroll());
    return this;
  }
  /**
   * window scroll event handler<br>
   * window scroll event 発生後に scroll top 位置をもたせた Scroll.SCROLL custom event を発火します
   *
   * 下記のプロパティをイベント・インスタンスに追加します
   *
   * - original {Events} - Rate Events instance
   * - y {number} - scroll top
   * - height {number} - window height
   * - width {number} - window width
   * - bottom {number} - window bottom 位置 (y + height)
   * - previous {number} - 前回の scroll top
   * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
   * - wide {boolean} - width が 768 以上の時に true
   * - changed {boolean} - scroll top が前回と変わっていたら true
   *
   * @param {?Event|?Events} event window scroll event, nullable
   * @returns {void}
   */
  scroll(event) {
    // @type {number} - scroll top
    const y = Scroll.y();
    // @type {number} - window height
    const height = window.innerHeight;
    // @type {number} - window width
    const width = window.innerWidth;
    // @type {number} - previous scroll top
    const previous = this.previous;

    // @type {ScrollEvents} - events
    const events = this.events();

    // @type {Event} - Rate Events instance
    events.original = event;
    // @type {number} - scroll top
    events.y = y;
    // @type {number} - window height
    events.height = height;
    // @type {number} - window width
    events.width = width;
    // @type {number} - window bottom(y + height)
    events.bottom = y + height;
    // @type {boolean} - 移動したかを表します,
    // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします
    events.changed = event === null || previous !== y;
    // @type {number} - 前回の y 位置
    events.previous = previous;
    // @type {number} - 移動量 +: down, -: up
    events.moving = y - previous;
    // event fire
    // console.log('Scrolling.scroll', events);
    this.dispatch(events);

    // save scroll top -> previous
    this.previous = y;
  }
  /**
   * 強制的に Scrolling.SCROLL event を発火させます
   * @returns {void}
   */
  fire() {
    this.scroll(null);
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * Scrolling instance を singleton を保証し作成します
   * @returns {Scrolling} Scrolling instance を返します
   */
  static factory() {
    if (instance !== null) {
      return instance;
    }
    return new Scrolling(singletonSymbol);
  }
}
