requirejs.config({
  paths: {
    text: '../lib/requirejs-text/text',
    jquery: '../lib/jquery/dist/jquery.min',
    underscore: '../lib/underscore/underscore-min',
    moment: '../lib/moment/moment',
    backbone: '../lib/backbone/backbone',
    marionette: '../lib/marionette/lib/backbone.marionette',
  },
});
//
require(['app'], function(App) {
  App.start();
});
