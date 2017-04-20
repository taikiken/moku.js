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
 * Scroll 位置
 * */
export default class Scrolling extends EventDispatcher {
  /**
   * @param {Rate} [rate=new Rate(Rate.Rate_5)] Rate instance, scroll 監視 fps を設定します
   */
  constructor(rate = new Rate(Rate.RATE_5)) {
    super();
    // @type {function}
    // const boundScroll = this.scroll.bind(this);
    /**
     * bound scroll, Rate.UPDATE event handler
     * @type {function}
     */
    this.boundScroll = this.scroll.bind(this);
    // this.boundScroll = boundScroll;
    // @type {ScrollEvents}
    // const events = new ScrollEvents(Scrolling.UPDATE, this, this);
    /**
     * ScrollEvents instance, 発火時に使用します
     * @type {ScrollEvents}
     */
    this.events = new ScrollEvents(Scrolling.UPDATE, this, this);
    // this.events = events;
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
  /**
   * fps を監視しスクロール位置を知らせます
   * @returns {Scrolling} method chain 可能なように instance を返します
   */
  start() {
    // flag check
    if (this.started) {
      return this;
    }
    this.started = true;
    // loop start
    const rate = this.rate;
    rate.on(Rate.UPDATE, this.boundScroll);
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
    this.rate.off(Rate.UPDATE, this.boundScroll);
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
    const events = this.events;

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
}
