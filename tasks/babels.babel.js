/**
 * @license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/03
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

'use strict';

import { module } from '../gulp_setting.babel.js';

const gulp = module.gulp;
/**
 * gulp-load-plugins instance
 * ```
 * import gulpLoadPlugins from 'gulp-load-plugins';
 * const $ = gulpLoadPlugins();
 * ```
 * @type {*}
 */
const $ = module.$;
/**
 * @type {{
 *  del: function,
 *  runSequence: function,
 *  browserSync: function,
 *  reload: function,
 * }}
 */
const $$ = module.$$;

const dir = module.dir;

const wpk = module.wpk;

// --------------------------------------
//  TASK
// --------------------------------------

const files = [
  dir.babels.src + '/**/*.{js,jsx}',
];

// ESLint
// --------------------------------------
gulp.task('babels:eslint', () => {
  return gulp.src(files)
    .pipe($.eslint({ useEslintrc: true }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
    .pipe($.size({ title: '*** babels:eslint ***' }))
});
