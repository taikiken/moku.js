/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/12 - 19:07
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

import { ObjectUtil } from '../util/ObjectUtil';

/**
 * custom Event のリスナー関数引数に送られる Event Object
 */
export class EventObject extends ObjectUtil {
  /**
   * custom Event Object
   * @param {String} type イベント種類
   */
  constructor(type:String) {
    super();
    Object.assign(this, { type });
  }
}
