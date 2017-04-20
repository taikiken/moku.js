/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/30 - 14:37
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// event
import { default as Scrolling } from './Scrolling';
import { default as Events } from './Events';
import { default as EventDispatcher } from './EventDispatcher';

// hit
import { default as Hit } from '../util/Hit';

/**
 * Scrolling class を使用しスクロールトップ位置をチェクし対象 element と window の衝突判定を行います
 */
export default class Rising extends EventDispatcher {
  /**
   * elements instance と scrolling instance を保存します
   * @param {Elements} elements 対象 element を Elements インスタンスに変換します
   * @param {Scrolling} scrolling スクロールトップ監視インスタンス
   */
  constructor(elements, scrolling = new Scrolling()) {
    super();
    /**
     * 対象 element を Elements インスタンスに変換します
     * @type {elements}
     */
    this.elements = elements;
    /**
     * スクロールトップ監視インスタンス
     * @type {Scrolling}
     */
    this.scrolling = scrolling;
    // const boundScroll = this.scroll.bind(this);
    /**
     * bound scroll, Rate.UPDATE event handler
     * @type {function}
     */
    this.boundScroll = this.scroll.bind(this);
    // this.boundScroll = boundScroll;
    /**
     * start 済みフラッグ
     * @type {boolean}
     * @default false
     */
    this.started = false;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * 衝突イベント
   * @event COLLISION
   * @return {string} risingCollision を返します
   */
  static get COLLISION() {
    return 'risingCollision';
  }
  /**
   * 衝突「していない」イベント
   * @event ALIEN
   * @return {string} risingAlien を返します
   */
  static get ALIEN() {
    return 'risingAlien';
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * fps を監視しスクロール位置を知らせます
   * @returns {Rising} method chain 可能なように instance を返します
   */
  start() {
    // flag check
    if (this.started) {
      return this;
    }
    this.started = true;
    // scrolling
    const scrolling = this.scrolling;
    scrolling.on(Scrolling.UPDATE, this.boundScroll);
    scrolling.start();
    return this;
  }
  /**
   * fps 監視を止めます
   * @returns {Rising} method chain 可能なように instance を返します
   */
  stop() {
    if (!this.started) {
      return this;
    }
    this.started = false;
    const scrolling = this.scrolling;
    scrolling.off(Scrolling.UPDATE, this.boundScroll);
    return this;
  }
  /**
   * Scrolling.UPDATE event handler
   * @param {ScrollEvents} scrollEvents scroll events object
   * @return {boolean} 衝突時に true を返します
   */
  scroll(scrollEvents) {
    if (!scrollEvents.changed) {
      return false;
    }
    // element offset
    const offset = this.elements.offset();
    // hit result
    const hit = Hit.test(scrollEvents.height, offset);
    // @type {?Elements}
    let events = null;
    if (hit.result) {
      events = new Events(Rising.COLLISION, this, this);
    } else {
      events = new Events(Rising.ALIEN, this, this);
    }
    // hit / original / offset を追加します
    events.hit = hit;
    events.original = scrollEvents;
    events.offset = offset;
    // 発火
    this.dispatch(events);
    return hit.result;
  }
}
