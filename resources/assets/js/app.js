define([
    'backbone',
    'marionette',
    'approuter',
    'collections/racer'
], function(Backbone, Marionette, AppRouter, RacerCollection) {

  var App = Marionette.Application.extend({
    onStart: function(){
      new AppRouter();
      Backbone.history.start();
    },
  });

  return new App();
});
