define([
    'backbone',
    'marionette',
    'router',
], function(Backbone, Marionette, Router) {

  var App = new Backbone.Marionette.Application();

  // App.addRegions({
  //   addRegion: '#form',
  //   mainRegion: '#mainRegion',
  // });

  App.on('start', function() {
    new Router();
    Backbone.history.start();
  });

  return App;
});
