var gulp = require('gulp');
var elixir = require('laravel-elixir');
var rjs = require('gulp-requirejs');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.extend('rjs', function() {
  gulp.task('rjs', function() {
      rjs(
        {
          name: '../lib/almond/almond',
          baseUrl: 'resources/assets/js',
          include: 'loader',
          out: 'app.js',
          mainConfigFile: 'resources/assets/js/loader.js',
        }
      ).pipe(gulp.dest('./public/js')); // pipe it to the output DIR
  });
  this.registerWatcher('rjs', 'resources/assets/js/**/*.js');

  return this.queueTask('rjs');
});

elixir(function(mix) {
    mix.sass('app.scss');
    mix.rjs();
});
