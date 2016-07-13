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
 */
export class Events {
  /**
   * custom Event Object, Defines a generic model.
   * @param {String} type イベント種類
   * @param {*} target イベント発生インスタンス
   * @param {*} currentTarget イベント発生インスタンス
   * */
  constructor(type:String, target = this, currentTarget = this) {
    Object.assign(this, { type, target, currentTarget });
  }
}
