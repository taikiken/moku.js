/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/12 - 18:24
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 型チェックを行います
 * @static
 */
export class Type {
  /**
   * 引数(target)が関数かを調べます
   * @param {Function|*} target 調査対象
   * @return {boolean} 引数(target)が関数かを調べ結果を返します、true: 関数
   */
  static method(target) {
    return typeof target === 'function';
  }
  /**
   * 引数(target)を `!!` で調べます
   * @param {*} target 調査対象
   * @return {boolean} 引数(target)を `!!` で調べ結果を返します
   */
  static exist(target) {
    return !!target;
  }
  /**
   * 引数(target)が number かを調べます
   * @param {*} target 調査対象
   * @returns {boolean} 引数(target)が number かを調べ結果を返します、true: number
   */
  static number(target) {
    return typeof target === 'number';
  }
  /**
   * 引数(target)が string かを調べます
   * @param {*} target 調査対象
   * @returns {boolean} 引数(target)が string かを調べ結果を返します、true: string
   */
  static string(target) {
    return typeof target === 'string';
  }
  /**
   * 引数(target)を `Array.isArray` で配列かを調べます
   * @param {*} target 調査対象
   * @returns {boolean} 引数(target)が 配列 かを調べ結果を返します、true: 配列
   */
  static array(target) {
    return Array.isArray(target);
  }
}
