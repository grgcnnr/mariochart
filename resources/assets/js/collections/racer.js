define([
    'backbone',
    'models/racer',
], function(Backbone, RacerModel) {
  var RacerCollection = Backbone.Collection.extend({
    url: '/racers',
    model:  RacerModel,
  });
  return RacerCollection;
});
