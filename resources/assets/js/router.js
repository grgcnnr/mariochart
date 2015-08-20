define([
    'backbone',
    'marionette',
    'regionManager',
    'collections/racer',
    'collections/race',
    'views/raceSubmit',
    'views/races',
    'views/import',
], function(Backbone, Marionette, regionManager, RacerCollection, RaceCollection, RaceSubmitView, RacesView, ImportView) {

  var router = Backbone.Router.extend({
    routes: {
      '': 'index',
      import: 'import',
    },

    index: function() {
      console.log('index route');
      var racerCollection = new RacerCollection([{name: 'Noel'},{name: 'Andy'},{name: 'George'}]);
      var raceSubmitView = new RaceSubmitView({collection: racerCollection});
      var raceCollection = new RaceCollection();
      raceCollection.fetch();
      var racesView = new RacesView({collection: raceCollection});
      regionManager.get('addRegion').show(raceSubmitView);
      regionManager.get('mainRegion').show(racesView);
    },

    import: function() {
      regionManager.get('addRegion').reset();
      regionManager.get('mainRegion').show(new ImportView());
    },

  });

  return router;

});
