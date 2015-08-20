define([
    'backbone',
    'marionette',
], function(Backbone, Marionette) {

  var regionManager = new Marionette.RegionManager({
    regions: {
      addRegion: '#form',
      mainRegion: '#mainRegion',
    },
  });

  return regionManager;

});
