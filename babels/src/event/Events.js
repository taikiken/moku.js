/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/12 - 19:07
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * custom Event のリスナー関数引数に送られる Event Object
 *
 * EventDispatcher.dispatch する時の引数として使用します
 *
 * 3つのプロパティは必須項目です、イベントにあわせプロパティを追加します
 *
 * - type: string, イベント種類
 * - target: *, イベント発生インスタンス
 * - currentTarget: *, current イベント発生インスタンス
 */
export default class Events {
  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} [target=this] イベント発生インスタンス
   * @param {*} [currentTarget=this] current イベント発生インスタンス
   * */
  constructor(type, target = this, currentTarget = this) {
    // https://github.com/esdoc/esdoc/issues/305
    /**
     * @property {string} this.type - イベント種類
     * @property {*} this.target - イベント発生インスタンス
     * @property {*} this.currentTarget - current イベント発生インスタンス
     */
    Object.assign(this, { type, target, currentTarget });
  }
}
