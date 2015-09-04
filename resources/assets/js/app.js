define([
    'backbone',
    'marionette',
    'cacheman',
    'approuter',
], function(Backbone, Marionette, Cacheman, AppRouter) {

  var App = Marionette.Application.extend({
    onStart: function(){
      new AppRouter();
      new Cacheman();
      Backbone.history.start();
    },
  });

  return new App();
});
