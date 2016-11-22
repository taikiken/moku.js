/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 21:52
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

// util
import { default as Type } from '../util/Type';

// css
import { default as Patterns } from './Patterns';
//
// /**
//  * オリジナルの element.style.cssText を保持するための Symbol
//  * @private
//  * @type {Symbol}
//  */
// const cssSymbol = Symbol('original element style');
//
// // Sagen.Dom class
// const Dom = self.Sagen.Dom;

/**
 * Element の style を操作します
 */
export default class Style {
  /**
   * 引数 element の初期 style 設定を保存し復元できるようにします
   * @param {?Element} element 操作対象 Element
   */
  constructor(element) {
    // @type {string} - オリジナルの element.style.cssText を保持します
    let css = this.current();
    this.original = () => css;
    this.update = (style) => {
      css = style;
    };
    /**
     * 操作対象 Element
     * @returns {Element} 操作対象 Element
     */
    this.element = () => element;
  }
  // ----------------------------------------
  // STATIC METHOD
  // ----------------------------------------
  /**
   * element style を取得します, `getComputedStyle` を使用します
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
   * @param {Object} view, Document.defaultView @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
   * @param {Element} element 操作対象 Element
   * @param {string} property 調査対象 CSS property name
   * @returns {CssStyle|string|undefined} style value を返します
   */
  static compute(view, element, property) {
    const style = view.getComputedStyle(element, null);
    if (Type.exist(property)) {
      const props = property.replace(/([A-Z])/g, '-$1').toLowerCase();
      return style.getPropertyValue(props);
    }
    return style;
  }

  /**
   * CSS 設定値の short hand をパターン {@link Patterns} から探し返します
   * @param {Object} view, Document.defaultView @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
   * @param {Element} element 操作対象 Element
   * @param {Array<string>} patterns 調査対象 CSS property name の配列
   * @returns {CssStyle|string|undefined} style value を返します
   */
  static shortHand(view, element, patterns) {
    const top = Style.compute(view, element, patterns[0]);
    const right = Style.compute(view, element, patterns[1]);
    const bottom = Style.compute(view, element, patterns[2]);
    const left = Style.compute(view, element, patterns[3]);
    if (top === bottom) {
      if (right === left) {
        if (top === right) {
          return top;
        }
        return `${top} ${right}`;
      }
      return `${top} ${right} ${bottom} ${left}`;
    } else if (right === left) {
      return `${top} ${right} ${bottom}`;
    }
    return `${top} ${right} ${bottom} ${left}`;
  }
  // ----------------------------------------
  // METHOD
  // ----------------------------------------
  /**
   * style value を取得します
   * @param {string} property 調査する style property name
   * @return {string} style value を返します
   */
  get(property) {
    const element = this.element();
    const ownerDocument = element.ownerDocument;
    const defaultView = ownerDocument.defaultView;
    let style = Style.compute(defaultView, element, property);
    if (style === '' && Patterns.match(property)) {
      style = Style.shortHand(defaultView, element, Patterns.get(property));
    }
    return style;
  }
  /**
   * element へ css を設定します、設定済み css を上書きします
   * @param {string} css 設定する css
   * @param {boolean} [update=false] 保存済み css を上書きするか否かの真偽値, true: 上書き
   * @return {boolean} 保存済み css を上書きするか否かの真偽値を返します
   */
  set(css, update = false) {
    // 更新依頼ありの時のみ書換える
    if (update) {
      this.update(css);
    }
    // 存在チェック
    const element = this.element();
    if (!Type.exist(element)) {
      return update;
    }
    // 存在する時のみ処理を行います
    element.style.cssText = css;

    return update;
  }
  /**
   * element の style.cssText を取得します
   * @return {string} style.cssText を返します
   */
  current() {
    const element = this.element();
    if (Type.exist(element)) {
      return element.style.cssText;
    }

    // this.element 不正の時は空文字を返します
    return '';
  }
  /**
   * element の style.cssText を変更前まで戻します
   * @return {string} 設定した css を返します
   */
  restore() {
    const css = this.original();
    this.element.style.cssText = css;
    return css;
  }
}
