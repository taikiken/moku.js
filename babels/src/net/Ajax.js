/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/01 - 19:41
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

// util
import { Type } from '../util/Type';

// built-in function
// Safari, IE はサポートしていないのでライブラリを使用すること
const fetch = self.fetch;
const Request = self.Request;
const Headers = self.Headers;

/**
 * can（Ajax 実行可能かの真偽値）フラッグを保存するための Symbol
 * @type {Symbol}
 * @private
 */
const canSymbol:Symbol = Symbol();

/**
 * <p>fetch API を使用し Ajax request を行います</p>
 * <p>Safari, IE はサポートしていないので polyfill ライブラリを使用します<br>
 * また、 fetch は Promise も必要としています。</p>
 *
 * ```
 * $ bower install fetch
 *
 * $ bower install es6-promise
 * ```
 *
 * @see http://caniuse.com/#feat=fetch
 * @see https://github.com/github/fetch
 * @see https://github.com/github/fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 */
export class Ajax extends EventDispatcher {
  /**
   * request 可能 / 不可能 flag を true に設定します
   */
  constructor() {
    super();
    /**
     * request 可能 / 不可能 flag
     * @type {Boolean}
     * @private
     * @default true
     */
    this[canSymbol] = true;
  }
  // ----------------------------------------
  // EVENT
  // ----------------------------------------
  /**
   * START event を取得します
   * @returns {String} リクエスト開始イベント, AjaxStart を返します
   */
  static get START():String {
    return 'AjaxStart';
  }
  /**
   * COMPLETE event を取得します
   * @returns {String} リクエスト完了イベント, AjaxComplete を返します
   */
  static get COMPLETE():String {
    return 'AjaxComplete';
  }
  /**
   * ERROR event を取得します
   * @returns {string} リクエストエラー イベント, AjaxError を返します
   */
  static get ERROR():String {
    return 'AjaxError';
  }
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------
  /**
   * request 可能 / 不可能 flag を取得します
   * @return {Boolean} request 可能 / 不可能 flag を返します
   */
  get can():Boolean {
    return this[canSymbol];
  }
  /**
   * request 可能 / 不可能 flag を設定します
   * @param {Boolean} flag request 可能 / 不可能 flag
   */
  set can(flag:Boolean):void {
    this[canSymbol] = flag;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * <p>Ajax request 開始します</p>
   * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
   * true の時は false にしリクエストを開始します</p>
   * <p>START, COMPLETE, ERROR イベントを発生させます</p>
   *
   * @param {String} path Ajax request path
   * @param {String} method GET, POST, PUT, DELETE...etc request method
   * @param {Headers} [headers=null] Headers option
   * @param {FormData} [formData=null] 送信フォームデータオプション
   */
  start(path:String, method:String, headers:Headers = null, formData:FormData = null):void {
    // ajax request 開始
    if (!this.can) {
      // flag が off なので処理しない
      return;
    }
    // flag off
    this.disable();

    const request:Object = Ajax.option(path, method, headers, formData);

    fetch(request)
      .then((response:Object) => {
        // may be success
        if (response.status !== 200) {
          throw new Error(`Ajax status error: (${response.status})`);
        }

        return response.json();
      })
      .then((json:Object) => {
        const event:Events = new Events(Ajax.COMPLETE);
        event.data = json;
        // complete event fire
        this.dispatch(event);
        // flag true
        this.enable();
      })
      .catch((error) => {
        const event:Events = new Events(Ajax.ERROR);
        event.data = null;
        event.error = error;
        // error event fire
        this.dispatch(event);
        // flag true
        this.enable();
      });
  }
  /**
   * 実行可否 flag を true にします
   */
  enable():void {
    this.can = true;
  }
  /**
   * 実行可否 flag を false にします
   */
  disable():void {
    this.can = false;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * <p>fetch API へ送るオプションを作成します</p>
   *
   * @param {String} path Ajax request path
   * @param {String} method GET, POST, PUT, DELETE...etc request method
   * @param {Headers} headers Headers option
   * @param {FormData} formData 送信フォームデータオプション
   * @return {Request} fetch API へ送る Request instance を返します
   */
  static option(path:String, method:String, headers:Headers, formData:FormData):Request {
    // request option
    const option:Object = Object.create({
      method,
      cache: 'no-cache',
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      credentials: 'same-origin',
    });

    // headers option
    if (Type.exist(headers)) {
      option.headers = headers;
    }

    // body へ FormData をセット
    if (Type.exist(formData)) {
      option.body = formData;
    }

    // https://developer.mozilla.org/ja/docs/Web/API/Request
    return new Request(path, option);
  }
}
