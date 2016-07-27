/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/26 - 21:05
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

/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
const singletonSymbol = Symbol();
/**
 * singleton instance, nullable
 * @type {?Scroll}
 * @private
 */
let instance = null;

/**
 * private property key, bind 済み mouseWheel を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const bindSymbol = Symbol();
/**
 * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventsSymbol = Symbol();

/**
 * window scroll event を監視し通知を行います
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const instance:Scroll = Scroll.factory();
 * ```
 */
export class Scroll extends EventDispatcher {
  /**
   * singleton です
   * @param {Symbol} checkSymbol singleton を保証するための private instance
   * @returns {Scroll} singleton instance を返します
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
    // @type {function} - bound scroll function
    this[bindSymbol] = this.scroll.bind(this);
    // @type {Events} - events instance
    this[eventsSymbol] = new Events(Scroll.SCROLL, this, this);

    // 設定済み instance を返します
    return instance;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * scroll で発生するイベントを取得します
   * @event SCROLL
   * @returns {string} event, scrollScroll を返します
   * @default scrollScroll
   */
  static get SCROLL() {
    return 'scrollScroll';
  }
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------
  /**
   * bind 済み mouseWheel
   * @returns {function} bind 済み mouseWheel を返します
   */
  get bindScroll() {
    return this[bindSymbol];
  }
  /**
   * scroll top 位置
   * @returns {number} scroll top 位置を返します
   */
  static get y() {
    // https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
    return (typeof window.pageYOffset !== 'undefined') ?
      window.pageYOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }
  /**
   * scroll top 位置 を設定します
   * @param {number} top スクロール位置(px)
   */
  static set y(top) {
    window.scrollTo(0, top);
  }
  /**
   * Events instance を取得します
   * @returns {Events} Events instance
   */
  static get events() {
    return this[eventsSymbol];
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * scroll event を監視します<br>
   * 監視前に二重に addEventListener しないように unwatch を実行します
   * @returns {Scroll} method chain 可能なように instance を返します
   */
  watch() {
    this.unwatch();

    window.addEventListener('scroll', this.bindScroll, false);

    return this;
  }
  /**
   * scroll event を監視を止めます
   * @returns {Scroll} method chain 可能なように instance を返します
   */
  unwatch() {
    window.removeEventListener('scroll', this.bindScroll);

    return this;
  }
  /**
   * window scroll event handler<br>
   * window scroll event 発生後に scroll top 位置をもたせた Scroll.SCROLL custom event を発火します
   * @param {?Event} event window scroll event, nullable
   * @returns {undefined} no-return
   */
  scroll(event) {
    // @type {Events} - events
    const events = this.events;
    // @ttype {Event}
    events.original = event;
    events.y = Scroll.y;
    // event fire
    this.dispatch(events);
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * Wheel instance を singleton を保証し作成します
   * @returns {Scroll} Scroll instance を返します
   */
  static factory() {
    return new Scroll(singletonSymbol);
  }
}
