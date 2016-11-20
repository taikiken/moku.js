/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/08
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * f
 */

// event
import { default as EventDispatcher } from './EventDispatcher';
import { default as TouchingEvents } from './TouchingEvents';

// util
import { default as Vectors } from '../util/Vectors';
import { default as Type } from '../util/Type';

// // private
// /**
//  * bound start event handler
//  * @private
//  * @type {Symbol}
//  */
// const boundStart = Symbol('bound start event handler');
// /**
//  * bound move event handler
//  * @private
//  * @type {Symbol}
//  */
// const boundMove = Symbol('bound move event handler');
// /**
//  * bound end event handler
//  * @private
//  * @type {Symbol}
//  */
// const boundEnd = Symbol('bound end event handler');
// /**
//  * bound cancel event handler
//  * @private
//  * @type {Symbol}
//  */
// const boundCancel = Symbol('bound cancel event handler');
// /**
//  * bound blur event handler
//  * @private
//  * @type {Symbol}
//  */
// const boundBlur = Symbol('bound blur event handler');

/**
 * Touch event を監視し y方向移動が `threshold` 以内の時に `TOUCH` event を発火します
 */
export default class Touching extends EventDispatcher {
  /**
   * 処理対象 element などを保存します
   * @param {Element} element 処理対象 Element
   * @param {boolean} [canceling=false] touchmove 中に `preventDefault` を行う
   * @param {number} [threshold=10] y 方向閾値
   */
  constructor(element, canceling = false, threshold = 10) {
    super();

    /**
     * 処理対象 Element
     * @type {Element}
     */
    this.element = element;
    /**
     * touchmove 中に `preventDefault` を行うかのフラッグ
     * @type {boolean}
     * @default false
     */
    this.canceling = canceling;
    /**
     * y 方向閾値, default: 10px
     * @type {number}
     * @default 10
     */
    this.threshold = threshold;
    // /**
    //  * bind 済み `onStart`
    //  * @type {Function}
    //  */
    // this[boundStart] = this.onStart.bind(this);
    const boundStart = this.onStart.bind(this);
    /**
     * bound onStart
     * @returns {function} bound onStart
     */
    this.boundStart = () => boundStart;
    // /**
    //  * bind 済み `onMove`
    //  * @type {Function}
    //  */
    // this[boundMove] = this.onMove.bind(this);
    const boundMove = this.onMove.bind(this);
    /**
     * bound onMove
     * @returns {function} bound onMove
     */
    this.boundMove = () => boundMove;
    // /**
    //  * bind 済み `onEnd`
    //  * @type {Function}
    //  */
    // this[boundEnd] = this.onEnd.bind(this);
    const boundEnd = this.onEnd.bind(this);
    /**
     * bound onEnd
     * @returns {function} bound onEnd
     */
    this.boundEnd = () => boundEnd;
    // /**
    //  * bind 済み `onCancel`
    //  * @type {Function}
    //  */
    // this[boundCancel] = this.onCancel.bind(this);
    const boundCancel = this.onCancel.bind(this);
    /**
     * bound onCancel
     * @returns {function} onCancel onStart
     */
    this.boundCancel = () => boundCancel;
    // /**
    //  * bind 済み `onBlur`
    //  * @type {Function}
    //  */
    // this[boundBlur] = this.onBlur.bind(this);
    const boundBlur = this.onBlur.bind(this);
    /**
     * bound onBlur
     * @returns {function} bound onBlur
     */
    this.boundBlur = () => boundBlur;
    // /**
    //  * 位置管理を行う Vectors instance を管理します
    //  * @type {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
    //  */
    // this.vectors = {
    //   start: new Vectors(),
    //   end: new Vectors(),
    //   moving: [].slice(0),
    // };
    const vectors = {
      start: new Vectors(),
      end: new Vectors(),
      moving: [].slice(0),
    };
    /**
     * vectors object
     * @returns {{start: Vectors, end: Vectors, moving: Array.<Vectors>}} vectors object
     */
    this.vectors = () => vectors;
  }
  // ---------------------------------------------------
  //  EVENT
  // ---------------------------------------------------
  /**
   * touchstart event type
   * @event START
   * @returns {string} touchingStart を返します
   */
  static get START() {
    return 'touchingStart';
  }
  /**
   * touchend event type
   * @event END
   * @returns {string} touchingEnd を返します
   */
  static get END() {
    return 'touchingEnd';
  }
  /**
   * touchend event type
   * @event CANCEL
   * @returns {string} touchingCancel を返します
   */
  static get CANCEL() {
    return 'touchingCancel';
  }
  /**
   * touchmove event type
   * @event MOVE
   * @returns {string} touchingMove を返します
   */
  static get MOVE() {
    return 'touchingMove';
  }
  /**
   * touch(click) event type
   * @event TOUCH
   * @returns {string} touchingTouch を返します
   */
  static get TOUCH() {
    return 'touchingTouch';
  }
  // // ---------------------------------------------------
  // //  GETTER / SETTER
  // // ---------------------------------------------------
  // /**
  //  * bind 済み `onStart` 関数を取得します
  //  * @returns {function} bind 済み `onStart` 関数返します
  //  */
  // get boundStart() {
  //   return this[boundStart];
  // }
  // /**
  //  * bind 済み `onMove` 関数を取得します
  //  * @returns {function} bind 済み `onMove` 関数返します
  //  */
  // get boundMove() {
  //   return this[boundMove];
  // }
  // /**
  //  * bind 済み `onEnd` 関数を取得します
  //  * @returns {function} bind 済み `onEnd` 関数返します
  //  */
  // get boundEnd() {
  //   return this[boundEnd];
  // }
  // /**
  //  * bind 済み `onCancel` 関数を取得します
  //  * @returns {function} bind 済み `onCancel` 関数返します
  //  */
  // get boundCancel() {
  //   return this[boundCancel];
  // }
  // /**
  //  * bind 済み `onBlur` 関数を取得します
  //  * @returns {function} bind 済み `onBlur` 関数返します
  //  */
  // get boundBlur() {
  //   return this[boundBlur];
  // }
  // ---------------------------------------------------
  //  METHOD
  // ---------------------------------------------------
  /**
   * 初期処理<br>
   * element への `touchstart` と<br>
   * window.blur event をそれぞれ bind します
   * @returns {void}
   */
  init() {
    // console.log('Touching.init', this.element, this.boundStart);
    this.element.addEventListener('touchstart', this.boundStart(), false);
    window.addEventListener('blur', this.boundBlur(), false);
  }
  /**
   * touchstart event handler
   * @param {Event} event touchstart event
   * @returns {void}
   */
  onStart(event) {
    // event unbind <- 二重 bind にならないように
    this.dispose();
    // vectors を初期化
    this.reset();
    // 現在 position を保存
    const vectors = this.vectors;
    const point = Touching.point(event);
    vectors.start.update(point.x, point.y);
    vectors.moving.push(vectors.start);

    // キャンセル event 監視を開始
    const body = document.body;
    body.addEventListener('touchend', this.boundEnd(), false);
    body.addEventListener('touchmove', this.boundMove(), false);
    body.addEventListener('touchcancel', this.boundCancel(), false);

    // Touching.START 発火
    this.dispatch(new TouchingEvents(
      Touching.START,
      this,
      event,
      vectors.start
    ));
  }
  /**
   * touchmove event handler
   * @param {Event} event touchmove event
   * @returns {void}
   */
  onMove(event) {
    // console.log('Touching.onMove', event);
    const vectors = this.vectors();
    const movingArray = vectors.moving;

    // 現在 position
    const point = Touching.point(event);
    const position = new Vectors(point.x, point.y, Date.now());

    // 前回 position <- moving 配列最後
    const previous = movingArray.pop();
    // 戻す
    movingArray.push(previous);

    // scroll checked
    const scrolling = Touching.scrolling(position, previous, this.threshold);
    position.scrolling = scrolling;
    // 現在 position を配列後ろにセット
    movingArray.push(position);

    // global cancel と 閾値チェックで `preventDefault` を実行し scroll を止める
    if (this.canceling && !scrolling) {
      event.preventDefault();
    }

    // 移動量
    const between = position.between(previous);

    // Touching.MOVE 発火
    this.dispatch(new TouchingEvents(
      Touching.MOVE,
      this,
      event,
      position,
      between,
      scrolling,
    ));
  }
  /**
   * touchend event handler
   * @param {Event} event touchend event
   * @returns {void}
   */
  onEnd(event) {
    // console.log('Touching.onEnd', event);
    const vectors = this.vectors;

    // 現在 position
    const point = Touching.point(event);
    const position = new Vectors(point.x, point.y, Date.now());

    // 前回 position を touchstart 位置としチェックします
    const previous = vectors.start;
    const scrolling = Touching.scrolling(position, previous, this.threshold);
    position.scrolling = scrolling;

    // global cancel と 閾値チェックで `preventDefault` を実行し scroll を止める
    if (this.canceling && !scrolling) {
      event.preventDefault();
    }

    // 移動量
    const between = position.between(previous);

    // Touching.END 発火
    this.dispatch(new TouchingEvents(
      Touching.END,
      event,
      position,
      between,
      scrolling
    ));

    // Touching.Touch 発火
    this.dispatch(new TouchingEvents(
      Touching.TOUCH,
      event,
      position,
      between,
      scrolling
    ));
  }
  /**
   * touchcancel event handler<br>
   * 処理をキャンセルします
   * @param {Event} event touchend event
   * @returns {boolean} 正常終了時に true を返します
   */
  onCancel(event) {
  //   this.dispose();
  //   this.reset();
  //   // this.dispatch({
  //   //   type: Touching.CANCEL,
  //   //   originalEVent: event,
  //   // });
  //   this.dispatch(new TouchingEvents(
  //     Touching.CANCEL,
  //     this,
  //     event,
  // ));
    return this.abort(event);
  }
  /**
   * window.blur event handler<br>
   * 処理をキャンセルします
   * @param {Event} event window blur event
   * @returns {boolean} 正常終了時に true を返します
   */
  onBlur(event) {
    return this.abort(event);
  }
  /**
   * touch event での処理をキャンセルし、設定値を初期値に戻します
   * @param {Event} event touch / window.onblur Event
   * @returns {boolean} 正常終了時に true を返します
   */
  abort(event) {
    this.dispose();
    this.reset();
    this.dispatch(new TouchingEvents(
      Touching.CANCEL,
      this,
      event,
    ));
    return true;
  }
  /**
   * bind した event を unbind します
   * @returns {boolean} 正常終了時に true を返します
   */
  dispose() {
    const body = document.body;

    body.removeEventListener('touchend', this.boundEnd());
    body.removeEventListener('touchmove', this.boundMove());
    body.removeEventListener('touchcancel', this.boundCancel());
    return true;
  }
  /**
   * 移動監視に使用した vectors instance を全て reset します
   * @returns {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
   * reset 後の vectors instance を返します
   */
  reset() {
    const vectors = this.vectors();
    vectors.start.reset();
    vectors.end.reset();
    vectors.moving = [].slice(0);

    return vectors;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * y 方向移動が threshold 以内か判定します
   * @param {Vectors} pointA スタートポイント(Vectors)
   * @param {Vectors} pointB エンドポイント(Vectors)
   * @param {number} threshold 閾値
   * @returns {boolean} true の時は閾値以上なのでスクロール判定になります
   */
  static scrolling(pointA, pointB, threshold) {
    const y = pointA.betweenY(pointB);
    // 正数値にし閾値と比較
    return Math.abs(y) >= threshold;
  }
  /**
   * MouseEvent|TouchEvent から pageX / pageY 座標を取得します
   * @param {MouseEvent|TouchEvent} event down / move / up event object
   * @returns {{x: number, y: number}} pageX / pageY 座標を返します
   */
  static point(event) {
    const x = event.pageX;
    const y = event.pageY;

    // event.pageX / pageY があればそのまま値を返します
    if (Type.number(x) && Type.number(y)) {
      return { x, y };
    }

    // event.pageX / pageY がない時は TouchEvent の changedTouches から取得します
    // touch event
    // @type {TouchList}
    const touches = event.changedTouches;
    // touches が取得できない時は 0 をセットし返します
    if (!Type.exist(touches)) {
      return { x: 0, y: 0 };
    }

    // changedTouches list の先頭データを取り出し pageX / pageY を取得します
    // @type {Touch}
    const touch = touches[0];
    return { x: touch.pageX, y: touch.pageY };
  }
}
