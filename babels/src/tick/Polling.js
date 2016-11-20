/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/04 - 16:46
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// event
import { default as EventDispatcher } from '../event/EventDispatcher';
import { default as Events } from '../event/Events';

// tick
import { default as Cycle } from './Cycle';

// /**
//  * private property key, this.update.bind(this) を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const updateSymbol = Symbol('bound update');
// /**
//  * private property key, Cycle.UPDATE 監視を開始したかを表す真偽値を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const startSymbol = Symbol('is started watch Cycle.UPDATE flag');
// /**
//  * private property key, Fps.start 時間を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const beginSymbol = Symbol('start time');
// /**
//  * private property key, polling を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const pollingSymbol = Symbol('polling duration');
// /**
//  * Polling.UPDATE event を発火する時の Events instance を保存するための Symbol
//  * @type {Symbol}
//  * @private
//  */
// const eventsSymbol = Symbol('Polling.UPDATE Events instance');

/**
 * 一定間隔毎に UPDATE イベントを発生させます
 */
export default class Polling extends EventDispatcher {
  /**
   * 引数の polling に合わせ UPDATE イベントを発生させます
   * @param {number} [interval=1000] polling milliseconds
   */
  constructor(interval = 1000) {
    super();
    // @type {Cycle} - Cycle instance
    const cycle = Cycle.factory();
    // public property
    // /**
    //  * @property {Cycle} this.cycle - Cycle instance
    //  */
    // Object.assign(this, { cycle });

    // private property
    // @type {number} - polling rate(milliseconds), default: 1000(1 sec.)
    // this[pollingSymbol] = polling;
    // // @type {function} - Cycle.UPDATE event handler
    // this[updateSymbol] = this.update.bind(this);
    // // @type {boolean} - started flag
    // this[startSymbol] = false;
    // // @type {number} - 開始時間
    // this[beginSymbol] = 0;
    // // @type {Events} - Events
    // this[eventsSymbol] = new Events(Polling.UPDATE, this, this);
    const boundUpdate = this.update.bind(this);
    const events = new Events(Polling.UPDATE, this, this);
    this.cycle = () => cycle;
    this.interval = interval;
    this.boundUpdate = () => boundUpdate;
    this.events = () => events;
    this.begin = 0;
    this.started = false;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * 一定間隔(milliseconds)毎に発生するイベント type を取得します
   * @returns {string} event, pollingUpdate を返します
   */
  static get UPDATE() {
    return 'pollingUpdate';
  }
  // // ----------------------------------------
  // // GETTER / SETTER
  // // ----------------------------------------
  // // fps
  // /**
  //  * polling(milliseconds) を取得します
  //  * @returns {number} polling(milliseconds) を返します
  //  */
  // get polling() {
  //   return this[pollingSymbol];
  // }
  // /**
  //  * polling(milliseconds) を設定します
  //  * @param {number} rate polling(milliseconds)
  //  */
  // set polling(rate) {
  //   this[pollingSymbol] = rate;
  // }
  // // begin
  // /**
  //  * 開始時間を取得します
  //  * @returns {number} 開始時間を返します
  //  */
  // get begin() {
  //   return this[beginSymbol];
  // }
  // /**
  //  * 開始時間を設定します
  //  * @param {number} time 開始時間
  //  */
  // set begin(time) {
  //   this[beginSymbol] = time;
  // }
  // // events
  // /**
  //  * Events instance を取得します
  //  * @returns {Events} Events instance を返します
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
  // // flag
  // /**
  //  * started flag 状態を取得します
  //  * @readonly
  //  * @returns {boolean} 現在の started flag 状態を返します
  //  */
  // get started() {
  //   return this[startSymbol];
  // }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * polling 時間を変更します<br>
   * 1. プロパティ polling 変更
   * 1. update 実行
   * @param {number} interval polling 時間
   * @returns {boolean} `update` をコールし Polling.UPDATE event が発生すると true を返します
   */
  change(interval) {
    this.interval = interval;
    return this.update();
  }
  /**
   * started flag を反転させ現在の started flag 状態を取得します
   * @returns {boolean} 現在の started flag 状態を返します
   */
  turnOver() {
    this.started = !this.started;
    return this.started;
  }
  /**
   * events object を発火前に作成します
   * @param {number} begin 開始時間: 前回の発火時間
   * @param {number} present 現在時間
   * @returns {Events} アップデートした Events を返します
   */
  updateEvents(begin, present) {
    this.begin = begin;
    // @type {Events} - start event
    const events = this.events();
    events.begin = begin;
    events.present = present;
    events.polling = this.polling;
    return events;
  }
  // /**
  //  * cycle ループを開始します<br>
  //  * watch Cycle.UPDATE event
  //  * @returns {Cycle} cycle ループを開始しインスタンスを返します
  //  */
  // initCycle() {
  //   // cycle
  //   const cycle = this.cycle;
  //   // bind Cycle.UPDATE
  //   cycle.on(Cycle.UPDATE, this.boundUpdate());
  //   // cycle 開始
  //   cycle.start();
  //   return cycle;
  // }
  /**
   * polling を開始します
   * @returns {boolean} start に成功すると true を返します
   */
  start() {
    if (this.started) {
      // already start
      return false;
    }
    // flag -> true
    // this[startSymbol] = true;
    this.turnOver();
    // cycle
    // this.initCycle();
    const cycle = this.cycle;
    // bind Cycle.UPDATE
    cycle.on(Cycle.UPDATE, this.boundUpdate());
    // cycle 開始
    cycle.start();
    // @type {number} - 開始時間
    const present = Date.now();
    // 強制的に1回目を実行
    this.fire(this.updateEvents(present, present));

    return true;
  }
  /**
   * polling を止めます
   * @returns {boolean} stop に成功すると true を返します
   */
  stop() {
    if (!this.started) {
      // not start
      return false;
    }
    this.cycle.off(Cycle.UPDATE, this.boundUpdate());
    // this[startSymbol] = false;
    this.turnOver();
    return true;
  }
  /**
   * Cycle.UPDATE event handler, polling を計測しイベントを発火するかを判断します
   *
   * @listens {Cycle.UPDATE} Cycle.UPDATE が発生すると実行されます
   * @returns {boolean} Polling.UPDATE event が発生すると true を返します
   */
  update() {
    // 現在時間
    // @type {number}
    const present = Date.now();
    // @type {number} - polling 間隔
    const polling = this.polling;
    // @type {number} - 開始時間
    const begin = this.begin;
    // 現在時間 が interval より大きくなったか
    if ((present - begin) >= polling) {
      // event 発火
      this.fire(this.updateEvents(begin, present));
      // 開始時間を update
      this.begin = present;
      // event 発生
      return true;
    }
    return false;
  }
  /**
   * Polling.UPDATE event を発生します
   * @param {Events} events Polling.UPDATE event object
   * @returns {void}
   */
  fire(events) {
    this.dispatch(events);
  }
}
