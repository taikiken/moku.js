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

// --------------------------------------
//  Node / Gulp plugins
// --------------------------------------
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import del from 'del';

// --------------------------------------
//  PKG(package.json)
// --------------------------------------
import pkg from './package.json';

// --------------------------------------
//  PORT SETTING
// --------------------------------------
import { port } from './gulp_port.babel';

// --------------------------------------
//  CONSTANT
// --------------------------------------
const $ = gulpLoadPlugins();

// plugins
const $$ = {};
$$.reload = browserSync.reload;
$$.browserSync = browserSync;
$$.runSequence = runSequence;
$$.webpack = webpack;
$$.del = del;

// --------------------------------------
//  DIRECTORY
// --------------------------------------
const root = '.';
const dir = {};

// app
const app = `${root}/app`;
const assets = `${app}/assets`;

dir.app = {
  app,
  assets,
  // alias app（後方互換）
  root: app,
  img: `${assets}/img`,
  css: `${assets}/css`,
  js: `${assets}/js`,
  libs: `${assets}/js/libs`,
  bundle: `${assets}/js/bundle`,
};

// scss
dir.scss = `${root}/scss`;

// sprite
dir.sprite = {
  root: `${root}/sprite`,
  css: `${dir.app.css}`,
  img: `${dir.app.img}/sprite`,
};

// bower
dir.bower = {
  components: `${root}/bower/bower_components`,
  exports: `${root}/bower/bower_exports`,
};

// babels
const babels = `${root}/babels`;
dir.babels = {
  src: `${babels}/src`,
  dependencies: `${babels}/dependencies`,
  compile: `${babels}/compile`,
  dist: `${babels}/dist`,
};

// dist
dir.dist = {
  root,
  libs: `${root}/libs`,
  docs: `${root}/docs`,
};

// --------------------------------------
//  WEBPACK CONFIG
// --------------------------------------
const wpk = {
  entry: __dirname,
  output: {
    path: dir.app.bundle,
    publicPath: 'assets/js/bundle',
    filename: 'moku.js',
    chunkFilename: '[chunkhash].bundle.js',
  },
};

// --------------------------------------
//  SASS PREFIX (Browser vendor prefix)
// --------------------------------------
const AUTO_PREFIX_BROWSERS = [
  'ie >= 11',
  'ie_mob >= 10',
  'ff >= 44',
  'chrome >= 48',
  'safari >= 9',
  'opera >= 34',
  'ios >= 8.4',
  'android >= 4.2',
  'bb >= 10',
];

// --------------------------------------
//  REPLACE PATTERN
// --------------------------------------
const patterns = [
  {
    match: 'buildTime',
    replacement: new Date().toLocaleString(),
  },
  {
    match: 'year',
    replacement: new Date().getFullYear(),
  },
  {
    match: 'version',
    replacement: pkg.version,
  },
  {
    match: 'copyright',
    replacement: 'inazumatv.com',
  },
];

// --------------------------------------
//  COMPRESSION
// --------------------------------------
const compress = {};

// img
compress.img = {
  optimizationLevel: 5,
  progressive: false,
  interlaced: false,
};

// html
compress.html = false;

// css
compress.css = true;


// --------------------------------------
//  SERVER (PORT / INDEXES)
// --------------------------------------
const server = {};

if (!port) {
  console.warn('*********************************');
  console.warn('* [404] port file not found *');
  console.warn('* port number: 61000 *');
  console.warn('*********************************');
  server.port = 61000;
} else {
  server.port = port;
}

server.indexes = true;

// --------------------------------------
//  EXPORT
// --------------------------------------
const module = {
  gulp,
  $,
  $$,
  dir,
  wpk,
  AUTO_PREFIX_BROWSERS,
  patterns,
  compress,
  server,
  pkg,
};

export default module;
