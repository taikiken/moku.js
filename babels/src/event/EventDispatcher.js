/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/06/30 - 20:09
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// ObjectUtil
import { ObjectUtil } from '../util/ObjectUtil';
import { Type } from '../util/Type';

// Event
import { EventObject } from './EventObject';

/**
 * private property key, listeners Object
 * @type {Symbol}
 * @private
 */
const listenersKey = Symbol();

/**
 * <p>Custom Event を作成し Event 通知を行います</p>
 *
 * ```
 * const callback = () => {};
 *
 * const event:EventDispatcher = new EventDispatcher();
 * event.on('abc', callback);
 *
 * console.log(event.has('abc', callback));// true
 *
 * event.dispatch({type: 'abc'});
 *
 * event.off('abc', callback);
 * console.log(event.has('abc', callback));// false
 * ```
 */
export class EventDispatcher extends ObjectUtil {
  /**
   * listener property をイニシャライズします
   */
  constructor() {
    super();
    /**
     * リスナーリスト
     * @type {Object}
     * @private
     */
    this[listenersKey] = new ObjectUtil();
  }
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------
  /**
   * リスナーリストを取得します
   * @return {Object} リスナーリストを返します
   */
  get listeners():Object {
    return this[listenersKey];
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * 全てのリスナーを破棄します
   */
  destroy():void {
    this[listenersKey] = new ObjectUtil();
  }
  /**
   * event type に リスナー関数を bind します
   * @param {String} type event type（種類）
   * @param {Function} listener callback関数
   */
  on(type:String, listener:Function):void {
    if (!Type.method(listener)) {
      // listener が 関数でないので処理しない
      return;
    }

    const listeners = this.listeners;

    // listeners.type が存在するかを調べます
    if (!listeners.hasOwnProperty(type)) {
      // listeners.type が存在しない
      // listeners.type 新規配列を作成し
      // listener を配列へ登録します
      listeners[type] = [];
      listeners[type].push(listener);
    } else {
      // すでに listeners.type が存在する
      // listeners.type 配列に listener が存在しないならば登録します
      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
  }
  /**
   * <p>event type からリスナー関数を remove します<br>
   * 内部処理は一時的に null 設定にします</p>
   * @param {String} type event type（種類）
   * @param {Function} listener リスナー関数
   */
  off(type:String, listener:Function):void {
    if (!Type.method(listener)) {
      // listener が 関数でないので処理しない
      return;
    }

    const listeners:Object = this[listenersKey];

    if (!listeners.hasOwnProperty(type)) {
      // listener.type が存在しない
      // 処理しない
      return;
    }

    const types:Array = listeners[type];

    // listener の配列位置を調べる
    const index = types.indexOf(listener);

    if (index === -1) {
      // 配列位置が -1, 見つからなかった
      // 処理しない
      return;
    }

    // すぐに削除するのでは無く null 代入
    // loop(iterator) の中で off すると index 位置が変わりまずい
    types[index] = null;

    this.clean(type, types);
  }
  /**
   * <p>リスナー配列を調べ可能なら空にします<br>
   * リスナーリストが全て null の時に 空配列にします</p>
   * @param {String} type event type（種類）
   * @param {Array<Function>} types event type に登録されている配列（関数）
   */
  clean(type:String, types:Array):void {
    // let hasFunction:Boolean = false;

    // for (const listener:Function of types) {
    //   if (listener !== null) {
    //     hasFunction = true;
    //     break;
    //   }
    // }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const hasFunction = types.some((listener) => listener !== null);

    if (!hasFunction) {
      // null 以外が無いので空にする
      this.listeners[type] = [];
    }
  }
  /**
   * event type にリスナー関数が登録されているかを調べます
   * @param {String} type event type（種類）
   * @param {Function} listener リスナー関数
   * @return {Boolean} event type にリスナー関数が登録されているかの真偽値を返します
   */
  has(type:String, listener:Function):Boolean {
    if (!Type.method(listener)) {
      // listener が 関数でないので処理しない
      return false;
    }

    const listeners:Object = this.listeners;

    if (!listeners.hasOwnProperty(type)) {
      // listener.type が存在しない
      // 処理しない
      return false;
    }

    // 存在チェック
    return listeners[type].indexOf(listener) !== -1;
  }
  /**
   * イベントを発生させリスナー関数を call します
   * @param {EventObject|*} event 送信される Event Object.<br>
   *   type キーにイベント種類が設定されています、dispatch 時に target プロパティを追加し this を設定します
   */
  dispatch(event:EventObject):void {
    const listeners:Object = this.listeners;
    // event.target = this しようとすると
    // Assignment to property of function parameter 'event'  no-param-reassign
    // になるのでコピーし使用します
    // const eventObject:Object = event;
    const type:String = event.type;
    // typeof でなく hasOwnProperty で調べる
    if (!listeners.hasOwnProperty(type)) {
      // listener.type が存在しない
      // 処理しない
      return;
    }
    // const types:Array = listeners[eventObject.type];
    // eventObject.target = this;
    event.add('target', this);
    // callback を実行する
    // for (const listener:Function of types) {
    //   if (typeof listener === 'function') {
    //     // callback apply
    //     // 第二引数がObjectの時は call する
    //     listener.call(this, eventObject);
    //   }
    // }
    listeners[type]
      .map(
        (listener:Function) => {
          if (Type.method(listener)) {
            return listener.call(this, event);
          }

          return null;
        }
      );
  }
  /**
   * **alias on**
   * <p>event type に リスナー関数を bind します</p>
   * @param {String} type event type（種類）
   * @param {Function} listener callback関数
   */
  addEventListener(type:String, listener:Function):void {
    this.on(type, listener);
  }
  /**
   * **alias off**
   * <p>event type からリスナー関数を remove します</p>
   * @param {String} type event type（種類）
   * @param {Function} listener リスナー関数
   */
  removeEventListener(type:String, listener:Function):void {
    this.off(type, listener);
  }
  /**
   * **alias has**
   * <p>event type にリスナー関数が登録されているかを調べます</p>
   * @param {String} type event type（種類）
   * @param {Function} listener リスナー関数
   * @return {Boolean} event type にリスナー関数が登録されているかの真偽値を返します
   */
  hasEventListener(type:String, listener:Function):Boolean {
    return this.has(type, listener);
  }
  /**
   * **alias dispatch**
   * <p>イベントを発生させリスナー関数を call します</p>
   * @param {Object} event typeキー が必須です
   */
  dispatchEvent(event:Object):void {
    this.dispatch(event);
  }
}
