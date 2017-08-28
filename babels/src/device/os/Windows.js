/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:50
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */


import devices from '../devices';

let props = null;

const init = () => {
  if (props) {
    return;
  }
  props = Object.assign({}, devices.props);
  const ua = devices.ua;
  const windows = !!ua.match(/windows/i);
  if (windows) {
    props.windows = true;
    props.phone = !!ua.match(/windows phone/i);
  }
};

export default class Windows {
  static is() {
    init();
    return props.windows;
  }
  static phone() {
    init();
    return props.phone;
  }
}
