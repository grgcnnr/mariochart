define([
    'marionette',
    'views/race',
], function(Marionette, RaceView) {
  var RacesView = Marionette.CollectionView.extend({
    childView: RaceView,
  });

  return RacesView;
});
