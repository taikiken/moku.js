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
import { default as EventDispatcher } from '../event/EventDispatcher';
import { default as Events } from '../event/Events';

// util
import { default as Type } from '../util/Type';

// built-in function
// Safari, IE はサポートしていないのでライブラリを使用すること
const fetch = self.fetch;
const Request = self.Request;
// const Headers = self.Headers;

/**
 * can（Ajax 実行可能かの真偽値）フラッグを保存するための Symbol
 * @type {Symbol}
 * @private
 */
const canSymbol = Symbol('flag can ajax SYmbol');

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
export default class Ajax extends EventDispatcher {
  /**
   * request 可能 / 不可能 flag を true に設定します
   */
  constructor() {
    super();
    /**
     * request 可能 / 不可能 flag
     * @type {boolean}
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
   * @event START
   * @returns {string} リクエスト開始イベント, ajaxStart を返します
   * @default ajaxStart
   */
  static get START() {
    return 'ajaxStart';
  }
  /**
   * COMPLETE event を取得します
   * @event COMPLETE
   * @returns {string} リクエスト完了イベント, ajaxComplete を返します
   * @default ajaxComplete
   */
  static get COMPLETE() {
    return 'ajaxComplete';
  }
  /**
   * ERROR event を取得します
   * @event ERROR
   * @returns {string} リクエストエラー イベント, ajaxError を返します
   * @default ajaxError
   */
  static get ERROR() {
    return 'ajaxError';
  }
  // ----------------------------------------
  // GETTER / SETTER
  // ----------------------------------------
  /**
   * request 可能 / 不可能 flag を取得します
   * @returns {boolean} request 可能 / 不可能 flag を返します
   */
  get can() {
    return this[canSymbol];
  }
  /**
   * request 可能 / 不可能 flag を設定します
   * @param {boolean} flag request 可能 / 不可能 flag
   */
  set can(flag) {
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
   * @param {string} path Ajax request path
   * @param {string} method GET, POST, PUT, DELETE...etc request method
   * @param {?Headers|?Object|null} [headers=null] Headers option, nullable
   * @param {?FormData|null} [formData=null] 送信フォームデータオプション, nullable
   * @returns {boolean} ajax request を開始したかどうかの真偽値を返します
   */
  start(path, method, headers = null, formData = null) {
    // ajax request 開始
    if (!this.can) {
      // flag が off なので処理しない
      return false;
    }

    // flag off
    this.disable();

    // @type {Request} Request instance
    const request = Ajax.option(path, method, headers, formData);

    // start event fire
    const startEvents = new Events(Ajax.START, this, this);
    startEvents.request = request;
    this.dispatch(startEvents);

    // fetch start
    fetch(request)
      // @param {Object} response - Ajax response
      .then((response) => {
        // may be success
        if (response.status !== 200) {
          throw new Error(`Ajax status error: (${response.status})`);
        }

        return response.json();
      })
      // @param {Object} - JSON パース済み Object
      .then((json) => {
        // @type {Evens} - Ajax.COMPLETE events Object
        const events = new Events(Ajax.COMPLETE, this, this);
        events.data = json;
        // complete event fire
        this.dispatch(events);
        // flag true
        this.enable();
      })
      // @param {Error} - Ajax something error
      .catch((error) => {
        // @type {Evens} - Ajax.COMPLETE events Object
        const events = new Events(Ajax.ERROR, this, this);
        events.data = null;
        events.error = error;
        // error event fire
        this.dispatch(events);
        // flag true
        this.enable();
      });

    return true;
  }
  /**
   * 実行可否 flag を true にします
   * @returns {boolean} 現在の this.can property を返します
   */
  enable() {
    this.can = true;
    return this.can;
  }
  /**
   * 実行可否 flag を false にします
   * @returns {boolean} 現在の this.can property を返します
   */
  disable() {
    this.can = false;
    return this.can;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * <p>fetch API へ送るオプションを作成します</p>
   *
   * @param {string} path Ajax request path
   * @param {string} method GET, POST, PUT, DELETE...etc request method
   * @param {Headers|Object|null} headers Headers option
   * @param {FormData|null} formData 送信フォームデータオプション
   * @returns {Request} fetch API へ送る Request instance を返します
   */
  static option(path, method, headers, formData) {
    // request option
    const option = Object.create({
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
