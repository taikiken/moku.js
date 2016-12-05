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
//
// /**
//  * new を許可しないための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const singletonSymbol = Symbol('Scrolling singleton symbol');
// /**
//  * singleton instance, nullable
//  * @type {?Scrolling}
//  * @private
//  */
// let instance = null;

/**
 * Scroll 位置
 * */
export default class Scrolling extends EventDispatcher {
  /**
   * singleton です
   * @param {Rate} [rate=new Rate(Rate.Rate_5)] Rate instance, scroll 監視 fps を設定します
   * @returns {Scrolling} singleton instance を返します
   */
  constructor(rate = new Rate(Rate.RATE_5)) {
    // // checkSymbol と singleton が等価かをチェックします
    // if (checkSymbol !== singletonSymbol) {
    //   throw new Error('don\'t use new, instead use static factory method.');
    // }
    //
    // super();
    //
    // // instance 作成済みかをチェックし instance が null の時 this を設定します
    // if (instance !== null) {
    //   return instance;
    // }
    // // onetime setting
    // instance = this;
    super();
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
    /**
     * Rate instance
     * @type {?Rate}
     */
    this.rate = rate;
    //
    // // 設定済み instance を返します
    // return instance;
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
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  // /**
  //  * Rate instance を設定します
  //  * @param {Rate} [rate=new Rate(Rate.Rate_5)] Rate instance, scroll 監視 fps を設定します
  //  * @returns {Scrolling} method chain 可能なように instance を返します
  //  */
  // init(rate = new Rate(Rate.RATE_5)) {
  //   this.rate = rate;
  //   return this;
  // }
  /**
   * fps を監視しスクロール位置を知らせます
   * @returns {Scrolling} method chain 可能なように instance を返します
   */
  start() {
    const rate = this.rate;
    // if (rate === null) {
    //   throw new Error(`rate: ${rate} error. have to set rate, before start.`);
    // }
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
   * 指定 rate(fps) 毎にスクロール位置を<br>
   * scroll top 位置をもたせた Scrolling.UPDATE custom event を発火します
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
  // // ----------------------------------------
  // // STATIC METHOD
  // // ----------------------------------------
  // /**
  //  * Scrolling instance を singleton を保証し作成します
  //  * @returns {Scrolling} Scrolling instance を返します
  //  */
  // static factory() {
  //   if (instance !== null) {
  //     return instance;
  //   }
  //   return new Scrolling(singletonSymbol);
  // }
}
