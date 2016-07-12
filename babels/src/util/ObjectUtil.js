/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/12 - 18:13
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Object 操作ヘルパークラス、本プロジェクトの基底クラスとして使用します
 */
export class ObjectUtil {
  // /**
  //  *  Object 操作ヘルパークラス
  //  */
  // constructor() {}
  /**
   * public プロパティを追加します
   * @param {String} propertyName プロパティ名称
   * @param {*} value プロパティ値
   */
  add(propertyName:String, value):void {
    Object.assign(this, { propertyName: value });
  }
  /**
   * 複製を作成します
   * @return {Object} 複製を返します
   */
  clone():Object {
    return Object.create(this);
  }
}
