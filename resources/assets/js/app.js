define([
    'backbone',
    'marionette',
    'router',
], function(Backbone, Marionette, Router) {

  var App = new Backbone.Marionette.Application();

  App.on('start', function() {
    new Router();
    Backbone.history.start();
  });

  return App;
});
