/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/js/bundle";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*!
	 * Copyright (c) inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2016/06/30 - 17:54
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 * 0.0.1
	 * 2016-11-04 10:58:59
	 */
	// use strict は本来不要でエラーになる
	// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
	/* eslint strict: [0, "global"] */

	'use strict';

	// event
	import { default as EventDispatcher } from './event/EventDispatcher';
	import { default as Events } from './event/Events';
	import { default as Scroll } from './event/Scroll';
	import { default as Wheel } from './event/Wheel';

	// net
	import { default as Ajax } from './net/Ajax';

	// tick
	import { default as Cycle } from './tick/Cycle';
	import { default as Fps } from './tick/Fps';
	import { default as Polling } from './tick/Polling';
	import { default as Rate } from './tick/Rate';

	// util
	import { default as Type } from './util/Type';
	/**
	 * **MOKU**
	 * <p>global Object</p>
	 * <p>public な Class はここからアクセス可能です</p>
	 * @type {Object}
	 */
	const MOKU = {};
	/**
	 * version number を取得します
	 * @return {string} version number を返します
	 */
	MOKU.version = () => '0.0.1';
	/**
	 * build 日時を取得します
	 * @return {string}  build 日時を返します
	 */
	MOKU.build = () => '2016-11-04 10:58:59';
	/**
	 * MOKU.event
	 * @type {Object} MOKU.event object を返します
	 */
	MOKU.event = {
	  EventDispatcher,
	  Events,
	  Scroll,
	  Wheel,
	};
	/**
	 * MOKU.net
	 * @type {Object} MOKU.net object を返します
	 */
	MOKU.net = {
	  Ajax,
	};
	/**
	 * MOKU.tick
	 * @type {Object} MOKU.tick object を返します
	 */
	MOKU.tick = {
	  Cycle,
	  Fps,
	  Polling,
	  Rate,
	};
	/**
	 * MOKU.util
	 * @type {Object} MOKU.util object を返します
	 */
	MOKU.util = {
	  Type,
	};

	// export
	window.MOKU = MOKU;


/***/ }
/******/ ]);