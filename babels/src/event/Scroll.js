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
import { default as EventDispatcher } from './EventDispatcher';
import { default as Events } from './Events';

/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */
const singletonSymbol = Symbol('Scroll singleton symbol');
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
const bindSymbol = Symbol('bound mouseWheel symbol');
/**
 * Cycle.UPDATE event を発火する時の Events instance を保存するための Symbol
 * @type {Symbol}
 * @private
 */
const eventsSymbol = Symbol('Cycle.UPDATE symbol');
/**
 * scroll top 位置が変更になったかを確認するために前回値を保存するための Symbol
 * @type {Symbol}
 */
const topSymbol = Symbol('previous scroll top');

/**
 * scroll freeze timeout id
 * @private
 * @static
 * @type {number}
 */
let timerId = 0;

/**
 * scroll を止める時間
 * @private
 * @static
 * @type {number}
 * @default 200
 */
let freezeTime = 200;

/**
 * window scroll event を監視し通知を行います
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const instance = Scroll.factory();
 * ```
 */
export default class Scroll extends EventDispatcher {
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
    // @type {number} - scroll top 前回値を保存します
    // @default -1
    this[topSymbol] = -1;

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
  /**
   * scroll motion start event
   * @event START
   * @returns {string} event, scrollStart を返します
   * @default scrollStart
   */
  static get START() {
    return 'scrollStart';
  }
  /**
   * scroll motion complete event
   * @event COMPLETE
   * @returns {string} event, scrollComplete を返します
   * @default scrollComplete
   */
  static get COMPLETE() {
    return 'scrollComplete';
  }
  /**
   * [LINE UP] button 由来の Scroll Event, start
   * @event LINEUP_START
   * @returns {string} event, scrollLineupStart を返します
   */
  static get LINEUP_START() {
    return 'scrollLineupStart';
  }
  /**
   * [LINE UP] button 由来の Scroll Event, complete
   * @event LINEUP_COMPLETE
   * @returns {string} event, scrollLineupComplete を返します
   */
  static get LINEUP_COMPLETE() {
    return 'scrollLineupComplete';
  }
  // ----------------------------------------
  // STATIC GETTER / SETTER
  // ----------------------------------------
  /**
   * scroll top 位置
   * @returns {number} scroll top 位置を返します
   * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
   */
  static get y() {
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
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------}
  // scroll
  /**
   * bind 済み mouseWheel
   * @returns {function} bind 済み mouseWheel を返します
   */
  get bindScroll() {
    return this[bindSymbol];
  }
  // events
  /**
   * Events instance を取得します
   * @returns {Events} Events instance
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
   * @returns {void}
   */
  scroll(event) {
    // @type {number} - scroll top
    const y = Scroll.y;
    // @type {number} - window height
    const height = window.innerHeight;
    // @type {number} - 前回の scroll top
    const previous = this[topSymbol];

    // @type {Events} - events
    const events = this.events;
    // @type {Event} - scroll event
    events.original = event;
    // @type {number} - scroll top
    events.y = y;
    // @type {number} - window height
    events.height = height;
    // @type {number} - window bottom(y + height)
    events.bottom = y + height;
    events.previous = previous;
    // @type {boolean} - 前回の scroll top と比較し移動したかを真偽値で取得します, true: 移動した
    events.changed = previous !== y;
    // @type {number} - 移動量 +（正）: down, -（負）: up
    events.moving = y - previous;
    // event fire
    this.dispatch(events);
    this[topSymbol] = y;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * y 位置に scroll top を即座に移動させます
   * @param {number} [y=0] scroll top 目標値
   * @param {number} [delay=0] time out 遅延 ms
   * @returns {number} time out id
   */
  static jump(y = 0, delay = 0) {
    return setTimeout(() => { window.scrollTo(0, y); }, delay);
  }
  // ----------------------------------------
  /**
   * scroll 動作を受付不能にします
   * @returns {void}
   */
  static abort() {
    window.addEventListener('touchstart', Scroll.onScroll, false);
    window.addEventListener('touchmove', Scroll.onScroll, false);
    window.addEventListener('touchend', Scroll.onScroll, false);
    window.addEventListener('scroll', Scroll.onScroll, false);
    document.addEventListener('wheel', Scroll.onScroll, false);
    document.addEventListener('mousewheel', Scroll.onScroll, false);
    window.addEventListener('DOMMouseScroll', Scroll.onScroll, false);
  }
  /**
   * scroll 動作を回復します
   * @returns {void}
   */
  static activate() {
    window.removeEventListener('touchstart', Scroll.onScroll);
    window.removeEventListener('touchmove', Scroll.onScroll);
    window.removeEventListener('touchend', Scroll.onScroll);
    window.removeEventListener('scroll', Scroll.onScroll);
    document.removeEventListener('wheel', Scroll.onScroll);
    document.removeEventListener('mousewheel', Scroll.onScroll);
    window.removeEventListener('DOMMouseScroll', Scroll.onScroll);
  }
  /**
   * window scroll event handler, バブリング・伝播全てキャンセルします
   * @param {Event} event window scroll event
   * @returns {boolean} event をキャンセルするために false を返します
   */
  static onScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  /**
   * scroll 操作を引数(delay)の間キャンセルします
   * @param {number} [delay=100] 遅延時間(ms), pc: 100, mobile: 500
   * @returns {number} time out id
   */
  static freeze(delay = Scroll.freezeTime()) {
    clearTimeout(timerId);

    Scroll.abort();
    timerId = setTimeout(Scroll.activate, delay);
    return timerId;
  }
  /**
   * scroll 操作を不能にする時間間隔(ms)を取得します
   * @returns {number} scroll 操作を不能にする時間間隔(ms)
   */
  static freezeTime() {
    return freezeTime;
  }
  /**
   * scroll 操作を不能にする時間間隔(ms)を設定します
   * @param {number} time scroll 操作を不能にする時間(ms)
   * @returns {void}
   */
  static setFreezeTime(time) {
    freezeTime = time;
  }
  // ----------------------------------------
  /**
   * Scroll instance を singleton を保証し作成します
   * @returns {Scroll} Scroll instance を返します
   */
  static factory() {
    return new Scroll(singletonSymbol);
  }
}
