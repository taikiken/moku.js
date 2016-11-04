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
import { default as Events } from './Events';

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
/**
 * private property key, bind 済み mouseWheel を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const bindSymbol = Symbol('bound mouseWheel');
/**
 * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventsSymbol = Symbol('Cycle.UPDATE event');
/**
 * scroll top 位置が変更になったかを確認するために前回値を保存するための Symbol
 * @type {Symbol}
 */
const topSymbol = Symbol('previous scroll top');

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
   * @param {Rate} rate 使用する Rate instance
   * @return {Scrolling} singleton instance を返します
   */
  constructor(checkSymbol, rate) {
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
    this[bindSymbol] = this.scroll.bind(this);

    // @type {Events} - events instance
    this[eventsSymbol] = new Events(Scrolling.SCROLL, this, this);

    // @type {number} - scroll top 前回値を保存します
    // @default -1
    this[topSymbol] = -1;

    // /**
    //  * @property {Rate} this.rate - Rate instance
    //  */
    // Object.assign(this, { rate });
    /**
     * Rate instance
     * @type {Rate}
     */
    this.rate = rate;

    // 設定済み instance を返します
    return instance;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * fps で発生するイベントを取得します
   * @event SCROLL
   * @return {string} event, scrollingScroll を返します
   * @default scrollingScroll
   */
  static get SCROLL() {
    return 'scrollingScroll';
  }
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------
  /**
   * bind 済み mouseWheel
   * @return {function} bind 済み mouseWheel を返します
   */
  get bindScroll() {
    return this[bindSymbol];
  }
  // events
  /**
   * Events instance を取得します
   * @return {Events} Events instance
   */
  get events() {
    return this[eventsSymbol];
  }
  /**
   * Events instance を設定します
   * @param {Events} events Events instance
   */
  set events(events) {
    this[eventsSymbol] = events;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * fps を監視しスクロール位置を知らせます<br>
   * 二重に watch しない様に `this.unwatch()` 実行し開始します
   * @return {Scrolling} method chain 可能なように instance を返します
   */
  watch() {
    this.unwatch();

    const rate = this.rate;
    rate.on(Rate.UPDATE, this.bindScroll);
    rate.start();

    return this;
  }
  /**
   * fps 監視を止めます
   * @return {Scrolling} method chain 可能なように instance を返します
   */
  unwatch() {
    this.rate.off(Rate.UPDATE, this.bindScroll);

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
   * @return {undefined} no-return
   */
  scroll(event) {
    // @type {number} - scroll top
    const y = Scroll.y;
    // @type {number} - window height
    const height = window.innerHeight;
    // @type {number} - window width
    const width = window.innerWidth;
    // @type {number} - previous scroll top
    const previous = this[topSymbol];

    // @type {Events} - events
    const events = this.events;

    // @type {Event} - Rate Events instance
    events.original = event;
    // @type {number} - scroll top
    events.y = y;
    // @type {number} - window height
    events.height = height;
    // @type {number} - window width
    events.width = width;
    // @type {boolean} - window width が 768px 以上かを表す真偽値
    events.wide = width >= 768;
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
    this[topSymbol] = y;
  }
  /**
   * 強制的に Scrolling.SCROLL event を発火させます
   */
  fire() {
    this.scroll(null);
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * Scrolling instance を singleton を保証し作成します
   * @param {Rate} [rate=new Rate(Rate.RATE_12)] Rate instance
   * @return {Scrolling} Scrolling instance を返します
   */
  static factory(rate = new Rate(Rate.RATE_12)) {
    return new Scrolling(singletonSymbol, rate);
  }
}
