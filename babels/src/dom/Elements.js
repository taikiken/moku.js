/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 21:49
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// css
import { default as Style } from '../css/Style';

// don
import { default as Bounding } from './Bounding';
import { default as Classes } from './Classes';

// util
import { default as Type } from '../util/Type';

/**
 * HTMLElement の操作を行います
 */
export default class Elements {
  /**
   * 操作対象 Element を保存します
   * @param {Element|Node} element 操作対象 Element
   */
  constructor(element) {
    const style = new Style(element);
    const classes = new Classes(element);
    const bounding = new Bounding(element);
    /**
     * 対象 Element の CSS 操作を行う Style instance
     * @type {Style}
     */
    this.style = style;
    /**
     * Element class 操作のために instance を作成します - Classes instance
     * @type {Classes}
     */
    this.classes = classes;
    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
    /**
     * Element class `ClientRect` 取得のために instance を作成します
     * @type {Bounding}
     */
    this.bounding = bounding;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * `getBoundingClientRect` を使用し引数 element の offset 値を取得します
   *
   * ```
   * {{top: Number, right: Number, left: Number, bottom: Number, width: Number, height: Number}}
   * ```
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   *
   * @return {ClientRect} プロパティ element の offset 値を返します
   */
  offset() {
    return this.bounding().offset();
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * 引数の id attribute value で HTMLElement を `document.getElementById` で取得します
   * @param {string} idName id attribute value
   * @return {?Element} Element を返します, 取得できない時は null を返します
   */
  static id(idName) {
    const element = self.document.getElementById(idName);
    // 存在チェックを行います
    return Type.exist(element) ? element : null;
  }
  /**
   * querySelector を使用し Element を探します
   * @param {string} selector 探索 selector
   * @param {Element|*} [parentNode=document] 親 Node|Element
   * @return {?Element} Element or null
   */
  static select(selector, parentNode = self.document) {
    return parentNode.querySelector(selector);
  }

  /**
   * querySelectorAll を使用し Element を探します
   * @param {string} selector 探索 selector
   * @param {Element|*} [parentNode=document] 親 Node|Element
   * @return {?NodeList} NodeList or null
   */
  static selects(selector, parentNode = self.document) {
    const elements = parentNode.querySelectorAll(selector);
    return elements.length > 0 ? elements : null;
  }
}
