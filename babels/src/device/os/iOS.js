/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 17:39
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import devices from '../devices';

let props = null;

const version = () => {
  const app = devices.app;
  const numbers = app.match(/os (\d+)_(\d+)_?(\d+)?/i);
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

const init = () => {
  if (props) {
    return;
  }
  props = Object.assign({}, devices.props);
  const ua = devices.ua;
  const ipad = !!ua.match(/ipad/i);
  const ipod = !!ua.match(/ipod/i);
  const iphone = !!ua.match(/iphone/i) && !ipad && !ipod;
  const ios = ipad || ipod || iphone;
  if (!ios) {
    return;
  }
  const standalone = !!navigator.standalone;
  props.stanalone = standalone;
  props.ios = ios;
  props.ipad = ipad;
  props.ipod = ipod;
  props.iphone = iphone;
  props.phone = iphone || ipod;
  props.tablet = ipad;
  // アプリ内コンテンツ
  props.webView = ios && !standalone && !devices.safari;
  // version check
  version();
};

export default class iOS {
  static is() {
    init();
    return props.android;
  }
  static phone() {
    init();
    return props.phone;
  }
  static tablet() {
    init();
    return props.tablet;
  }
  static iphone() {
    init();
    return props.iphone;
  }
  static ipad() {
    init();
    return props.ipad;
  }
  static ipod() {
    init();
    return props.ipod;
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
  static webView() {
    init();
    return props.webView;
  }
}
