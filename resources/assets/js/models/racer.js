define([
  'backbone',
], function(Backbone) {
  var RacerModel = Backbone.Model.extend({
    urlRoot: '/racers',
  });
  return RacerModel;
});
