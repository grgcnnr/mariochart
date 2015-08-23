define([
    'backbone',
    'models/racer',
], function(Backbone, RacerModel) {
  var RacerCollection = Backbone.Collection.extend({
    cachemanId: 'racercollection',
    url: '/racers',
    model:  RacerModel,
  });
  return RacerCollection;
});
