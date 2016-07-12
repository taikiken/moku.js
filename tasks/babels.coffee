###
  @author (at)taikiken / http://inazumatv.com
  Copyright (c) 2011-2015 inazumatv.com

  Licensed under the Apache License, Version 2.0 (the "License");
  https://www.apache.org/licenses/LICENSE-2.0
###

###
  Babels + Webpack
###

setting = require '../setting'

# gulp / module
gulp = setting.gulp

# load-plugins
$ = setting.$

# node module
$$ = setting.$$

# run-sequence
runSequence = $$.runSequence

# webpack
webpack = $$.webpack
wpk = setting.wpk

# prefix
#AUTO_PREFIX_BROWSERS = setting.AUTO_PREFIX_BROWSERS

# replace patterns
patterns = setting.patterns

# directory
dir = setting.dir
babels = dir.babels

# --------------------------------------------
# task
# --------------------------------------------

files = [
  babels.src + '/**/*.{js,jsx}'
  '!' + babels.src + '/**/_*.{js,jsx}'
]

# DEVELOP

# eslint
gulp.task 'babels:eslint', ->
  return gulp.src files
  .pipe $.eslint useEslintrc: true
  .pipe $.eslint.format()
  .pipe $.eslint.failAfterError()

# babel
gulp.task 'babels:babel', ->
  return gulp.src files
  .pipe $.babel presets: [ 'es2015', 'react', 'stage-0' ], plugins: ['transform-runtime']
  .pipe $.replaceTask patterns: patterns
  .pipe gulp.dest babels.compile
  .pipe $.size title: '*** babels:babel ***'

# BUILD

# --------------------------------------------
# task / webpack
# --------------------------------------------

# DEVELOP
gulp.task 'babels:webpack:dev', ( cb ) ->
  conf = Object.create wpk

  conf.plugins = [
    new webpack.optimize.DedupePlugin()
  ]
  conf.entry = conf.entry + '/babels/compile/main.js'

  webpack conf, ( err, stats ) ->
    if ( err )
      throw new $.util.PluginError( 'webpack', err )

    $.util.log '[webpack]', stats.toString colors: true, progress: true
    cb()
  return

# --------------------------------------------
  
###
  DEVELOP SEQUENCE
###
gulp.task 'babels:dev', (cb) ->
  runSequence(
    'babels:eslint'
    'babels:babel'
    'babels:webpack:dev'
    cb
  )
  return


# BUILD
gulp.task 'babels:webpack:build', ( cb ) ->
  conf = Object.create wpk

  conf.plugins = [
    new webpack.optimize.DedupePlugin()
    new webpack.optimize.UglifyJsPlugin compress: warnings: true
  ]
  conf.entry = conf.entry + '/babels/compile/main.js'

  webpack conf, ( err, stats ) ->
    if ( err )
      throw new $.util.PluginError( 'webpack', err )

    $.util.log '[webpack]', stats.toString colors: true, progress: true
  return

###
BUILD SEQUENCE
###
gulp.task 'babels:build', (cb) ->
  runSequence(
#    'scripts:eslint'
    'babels:babel'
    'babels:webpack:build'
    cb
  )
  return