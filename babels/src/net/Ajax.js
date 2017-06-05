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

// util
import Type from '../util/Type';

// built-in function
// Safari, IE はサポートしていないのでライブラリを使用すること
/**
 * fetch [native code]
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @type {fetch}
 * @private
 * @static
 */
const fetch = self.fetch;
/**
 * fetch request instance を作成します
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @type {Request}
 * @private
 * @static
 */
const Request = self.Request;

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
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 */
export default class Ajax {
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------
  /**
   * request 可能 / 不可能 flag を true に設定します
   * @param {?function} [resolve=null] Promise success callback
   * @param {?function} [reject=null] Promise fail callback
   */
  constructor(resolve = null, reject = null) {
    /**
     * request 可能 / 不可能 flag, true: 実行可能
     * @type {boolean}
     */
    this.can = true;
    /**
     * Promise success callback
     * @type {Function}
     */
    this.resolve = resolve;
    /**
     * Promise fail callback
     * @type {Function}
     */
    this.reject = reject;
    /**
     * `Request` constructor に渡す option
     * - method: GET|POST|PUT|DELETE...
     * - cache: no-cache
     * - credentials: same-origin
     * @type {{method: ?string, cache: string, credentials: string}}
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
     */
    this.props = {
      method: null,
      cache: 'no-cache',
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      credentials: 'same-origin',
    };
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * <p>Ajax request 開始します</p>
   * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
   * true の時は false にしリクエストを開始します</p>
   *
   * resolve, reject 関数確認後実行します
   *
   * Promise instance を
   *
   * @param {string} path Ajax request path
   * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
   * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
   * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
   * @return {Promise} ajax request を開始し fetch Promise 返します
   */
  start(path, method = 'GET', headers = null, formData = null) {
    // ajax request 開始
    if (!this.can) {
      throw new Error(`Ajax request busy: ${this.can}`);
    }

    // flag off
    this.disable();

    // @type {Request} Request instance
    const request = this.option(path, method, headers, formData);

    // fetch start
    return fetch(request)
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
        // complete event fire
        if (Type.method(this.resolve)) {
          this.resolve(json);
        }
        // flag true
        this.enable();
      })
      // @param {Error} - Ajax something error
      .catch((error) => {
        // error event fire
        if (Type.method(this.reject)) {
          this.reject(error);
        }
        // flag true
        this.enable();
      });
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
  /**
   * <p>fetch API へ送るオプションを作成します</p>
   *
   * 必ず設定します
   * - method: GET, POST, PUT, DELETE...etc
   * - cache: 'no-cache'
   * - credentials: 'same-origin'
   *
   * headers, formData は存在すれば option に追加されます
   *
   * ```
   * var myRequest = new Request(input, init);
   * ```
   * <blockquote>
   * リクエストに適用するカスタム設定を含むオプションオブジェクト。設定可能なオプションは：
   *   method：リクエストメソッド、たとえば GET、POST。
   *   headers：Headers オブジェクトか ByteString を含む、リクエストに追加するヘッダー。
   *   body： リクエストに追加するボディー：Blob か BufferSource、FormData、URLSearchParams、USVString オブジェクトが使用できる。リクエストが GET か HEAD メソッドを使用している場合、ボディーを持てないことに注意。
   *   mode：リクエストで使用するモード。たとえば、cors か no-cors、same-origin。既定値は cors。Chrome では、47 以前は no-cors が既定値であり、 same-origin は 47 から使用できるようになった。
   *   credentials：リクエストで使用するリクエスト credential：omit か same-origin、include が使用できる。 既定値は omit。Chrome では、47 以前は same-origin が既定値であり、include は 47 から使用できるようになった。
   *   cache：リクエストで使用する cache モード：default か no-store、reload、no-cache、force-cache、only-if-cached が設定できる。
   *   redirect：使用するリダイレクトモード：follow か error、manual が使用できる。Chrome では、47 以前は既定値が follow であり、manual は 47 から使用できるようになった。
   *   referrer：no-referrer か client、URL を指定する USVString。既定値は client。
   * </blockquote>
   * @param {string|USVString|Request} path Ajax request path
   * @param {string} method GET, POST, PUT, DELETE...etc request method
   * @param {Headers|Object|null} headers Headers option
   * @param {FormData|null} formData 送信フォームデータオプション
   * @returns {*|Request} fetch API へ送る Request instance を返します
   *
   * @see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
   * @see https://developer.mozilla.org/ja/docs/Web/API/Request
   * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
   */
  option(path, method, headers, formData) {
    // request option
    const option = Object.assign({}, this.props);
    // const option = Object.create({
    //   method,
    //   cache: 'no-cache',
    //   // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    //   credentials: 'same-origin',
    // });
    option.method = method;

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
