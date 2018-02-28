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

import module from '../gulp_setting.babel';

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
 *  reload: function,
 *  browserSync: function,
 *  runSequence: function,
 *  webpack: function,
 *  del: function,
 * }}
 */
const $$ = module.$$;

const dir = module.dir;

const wpk = module.wpk;

const patterns = module.patterns;

// --------------------------------------
//  TASK
// --------------------------------------

const files = [
  `${dir.babels.src}/**/*.{js,jsx}`,
];

// ESLint
// --------------------------------------
gulp.task('babels:lint', () => gulp.src(files)
  .pipe($.eslint({ useEslintrc: true }))
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError())
  .pipe($.size({ title: '*** babels:eslint ***' }))
);

// babel
// --------------------------------------
gulp.task('babels:babel', () => gulp.src(files)
  // .pipe($.babel({
  //   presets: [
  //     'es2015',
  //     'react',
  //     'stage-0',
  //   ],
  //   plugins: ['transform-runtime'],
  // }))
  .pipe($.babel())
  .pipe($.replaceTask({ patterns }))
  .pipe(gulp.dest(dir.babels.compile))
  .pipe($.size({ title: '*** babels:babel ***' }))
);
console.log('Object.create', Object.create);
// webpack [DEV]
// --------------------------------------
gulp.task('babels:pack:dev', (callback) => {
  // const config = Object.create(wpk);
  const config = Object.assign({}, wpk);
  // config.plugins = [
  //   new $$.webpack.optimize.DedupePlugin(),
  // ];
  config.entry = `${config.entry}/babels/compile/moku.js`;
  config.output.path = `${wpk.entry}${dir.dist.libs.substr(1)}`;
  // console.log('config', config);
  // webpack
  return $$.webpack(config, (error, stats) => {
    if (error) {
      throw new $.util.PluginError('webpack', error);
    }
    $.util.log('[webpack:dev]', stats.toString({
      colors: true,
      progress: true,
    }));
    callback();
  });
});

// webpack [BUILD]
// --------------------------------------
gulp.task('babels:pack:build', (callback) => {
  // const config = Object.create(wpk);
  const config = Object.assign({}, wpk);
  config.plugins = [
    // new $$.webpack.optimize.DedupePlugin(),
    new $$.webpack.optimize.UglifyJsPlugin({ compress: { warnings: true } }),
    // https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
    new $$.webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ];
  config.entry = `${config.entry}/babels/compile/moku.js`;
  config.output.path = `${wpk.entry}${dir.dist.libs.substr(1)}`;
  config.output.filename = 'moku.min.js';
  // webpack
  return $$.webpack(config, (error, stats) => {
    if (error) {
      throw new $.util.PluginError('webpack', error);
    }
    $.util.log('[webpack:build]', stats.toString({
      colors: true,
      progress: true,
    }));
    callback();
  });
});

// --------------------------------------
//  TASK > SEQUENCE
// --------------------------------------
gulp.task('babels:dev', callback => (
  $$.runSequence(
    'babels:lint',
    'babels:babel',
    'babels:pack:dev',
    callback,
  )
));

gulp.task('babels:build', ['babels:dev'], (callback) => (
  $$.runSequence(
    // 'babels:lint',
    'babels:babel',
    'babels:pack:build',
    callback,
  )
));
