/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/06/02 - 18:09
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import Ajax from './Ajax';

export default class AjaxThunk extends Ajax {
  start(path, method, headers = null, formData = null) {
    // ajax request 開始
    if (!this.can) {
      throw new Error(`Ajax request busy: ${this.can}`);
    }

    // flag off
    this.disable();

    // @type {Request} Request instance
    const request = this.option(path, method, headers, formData);
    return fetch(request)
      .then((response) => {
        // may be success
        this.enable();
        if (response.status !== 200) {
          throw new Error(`Ajax status error: (${response.status})`);
        }
        return response.json();
      });
  }
}
