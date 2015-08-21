define([
    'backbone',
    'marionette',
    'regionManager',
    'collections/racer',
    'collections/race',
    'views/raceSubmit',
    'views/races',
    'views/import',
    'layouts/results',
], function(Backbone, Marionette, regionManager, RacerCollection, RaceCollection, RaceSubmitView, RacesView, ImportView, ResultsLayout) {
  var router = Backbone.Router.extend({
    routes: {
      '': 'index',
      import: 'import',
    },

    index: function() {


      var resultsLayout = new ResultsLayout(),
        racerCollection = new RacerCollection(),
        racerCollectionFetched = racerCollection.fetch(),
        raceCollection,
        raceCollectionFetched;

      $.when(racerCollectionFetched.then(function(){
        raceCollection = new RaceCollection(),
        raceCollectionFetched = raceCollection.fetch();

        // when set up races view
        $.when(raceCollectionFetched).then(function(){
          var raceSubmitView = new RaceSubmitView({collection: racerCollection});
          var racesView = new RacesView({collection: raceCollection});

          regionManager.get('addRegion').show(raceSubmitView);
          regionManager.get('mainRegion').show(resultsLayout);
          resultsLayout.showChildView('history', racesView);
          // resultsLayout.showChildView('chart', new WinsChartView({collection: raceCollection}));
        });

      }));
    },

    import: function() {
      regionManager.get('addRegion').reset();
      regionManager.get('mainRegion').show(new ImportView());
    },

  });

  return router;

});
