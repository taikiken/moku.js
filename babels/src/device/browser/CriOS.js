/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/22 - 19:29
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import devices from '../devices';

/**
 * {@link devices}.browsers
 * {@link CriOS}
 * @type {?object}
 */
let browsers = null;

/**
 * version 情報を計算します
 * {@link CriOS}
 */
const version = () => {
  const app = devices.app;
  const numbers = app.match(/crios\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  // 先頭 削除
  numbers.shift();
  const versions = numbers.map((number, index) => {
    const int = parseInt(number, 10);
    if (index <= 3) {
      return isNaN(int) ? 0 : int;
    }
    return null;
  });
  browsers.build = versions.join('.');
  const major = parseInt(versions[0], 10);
  let minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  let build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  let option = '';
  if (versions.length === 4) {
    option = versions[3];
  }
  browsers.major = major;
  browsers.version = parseFloat(`${major}.${minor}${build}${option}`);
  browsers.numbers = versions;
};

/**
 * browser 判別します
 * {@link CriOS}
 */
const init = () => {
  if (browsers) {
    return;
  }
  browsers = Object.assign({}, devices.browsers);
  const ua = devices.ua;
  browsers.crios = !!ua.match(/crios/i);
  version();
};

export default class CriOS {
  static is() {
    init();
    return browsers.crios;
  }
  /**
   * CriOS Browser version
   * @returns {number} Android OS version, not Android -1
   */
  static version() {
    init();
    return browsers.version;
  }
  /**
   * CriOS Browser major version
   * @returns {number} Android OS major version, not Android -1
   */
  static major() {
    init();
    return browsers.major;
  }
  /**
   * CriOS Browser version `major.minor.build`
   * @returns {string} Android OS version NN.NN.NN.NN 型（文字）で返します, not Android ''
   */
  static build() {
    init();
    return browsers.build;
  }
  /**
   * version を配列形式で取得します
   * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
   */
  static numbers() {
    init();
    return browsers.numbers;
  }
}
