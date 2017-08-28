/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:36
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import devices from '../devices';
import Windows from './Windows';

let props = null;

const version = () => {
  const app = devices.app;
  const numbers = app.match(/android (\d+)\.(\d+)\.?(\d+)?/i);
  if (!Array.isArray(numbers)) {
    return;
  }
  const versions = numbers.map((number) => {
    const int = parseInt(number, 10);
    return isNaN(int) ? 0 : int;
  });
  props.build = versions.join('.');
  const major = parseInt(versions[0], 10);
  let minor = 0;
  if (versions.length >= 2) {
    minor = versions[1];
  }
  let build = '';
  if (versions.length >= 3) {
    build = versions[2];
  }
  props.major = major;
  props.version = parseFloat(`${major}.${minor}${build}`);
  props.numbers = versions;
};

/**
 * - Android standard browser
 * `Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13`,
 * `Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
 * - Windows phone
 * `Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.<OS build number>`
 * @see http://googlewebmastercentral.blogspot.jp/2011/03/mo-better-to-also-detect-mobile-user.html
 * @see https://msdn.microsoft.com/ja-jp/library/hh869301(v=vs.85).aspx
 */
const init = () => {
  if (props) {
    return;
  }
  props = Object.assign({}, devices.props);
  const ua = devices.ua;
  // windows phone ua に `Android` が入っている
  const android = !Windows.phone() && !!ua.match(/android/i);
  if (android) {
    props.android = true;
    props.phone = !!ua.match(/mobile/i);
    // phone / tablet
    if (!props.phone) {
      props.tablet = true;
    }
    // Android 標準 browser
    props.standard = devices.safari && (!!ua.match(/version/i) || !!ua.match(/samsungbrowser/i));
    // hd
    props.hd = Math.max(window.innerWidth, window.innerHeight) > 1024;
    // version check
    version();
  }
};

export default class Android {
  static is() {
    init();
    return props.android;
  }
  static standard() {
    init();
    return props.standard;
  }
  static phone() {
    init();
    return props.phone;
  }
  static tablet() {
    init();
    return props.tablet;
  }
  static hd() {
    init();
    return props.hd;
  }
  static version() {
    init();
    return props.version;
  }
  static major() {
    init();
    return props.major;
  }
  static build() {
    init();
    return props.build;
  }
  static numbers() {
    init();
    return props.numbers;
  }
  static bugEnd() {
    // no touchend - standard browser 4.3 ~ 4.4
    const v = Android.version();
    return Android.standard() && (v > 4.2 && v < 4.5);
  }
}
