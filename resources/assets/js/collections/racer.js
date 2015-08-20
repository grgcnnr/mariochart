define([
    'backbone',
    'models/racer',
], function(Backbone, RacerModel) {
  var RacerCollection = Backbone.Collection.extend({
    model:  RacerModel,
  });
  return RacerCollection;
});
