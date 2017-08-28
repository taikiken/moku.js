/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:39
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

const ua = navigator.userAgent;
const app = navigator.appVersion;
const safari = !!ua.match(/safari/i);
const props = {
  ios: false,
  ipad: false,
  ipod: false,
  iphone: false,
  windows: false,
  android: false,
  standard: false,
  phone: false,
  tablet: false,
  hd: false,
  webView: false,
  standalone: false,
  version: -1,
  major: -1,
  build: -1,
  numbers: [-1, -1, -1],
};

const devices = {
  ua,
  app,
  props,
  safari,
};

export default devices;
