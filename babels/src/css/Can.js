/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/30 - 16:47
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 確認用関数
 * @private
 * @static
 * @type {{transition: (()), transform: (())}}
 */
const check = {
  transition() {
    const p = document.createElement('div');
    return 'transition' in p ||
      'WebkitTransition' in p ||
      'MozTransition' in p ||
      'msTransition' in p ||
      'OTransition' in p;
  },
  transform() {
    const p = document.createElement('div');
    return 'transform' in p ||
      'WebkitTransform' in p ||
      'MozTransform' in p ||
      'OTransform' in p ||
      'msTransform' in p;
  },
};

/**
 * CSS3 transition
 * @type {boolean}
 * @private
 * @static
 */
const transition = check.transition();
/**
 * CSS3 transform
 * @type {boolean}
 * @private
 * @static
 */
const transform = check.transform();

/**
 * CSS3 機能使用可能かを調べます
 */
export default class Can {
  /**
   * CSS3 transition が使用可能かを調べます
   * @returns {boolean} true: 使用可能
   */
  static transition() {
    return transition;
  }
  /**
   * CSS3 transform が使用可能かを調べます
   * @returns {boolean} true: 使用可能
   */
  static transform() {
    return transform;
  }
}
