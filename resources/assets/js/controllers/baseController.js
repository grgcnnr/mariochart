define([
    'jquery',
    'marionette',
    'cacheman',
    'regionManager',
    'layouts/results',
    'models/race',
    'collections/racer',
    'collections/race',
    'views/import',
    'views/raceSubmit',
    'views/races',

], function($, Marionette, cacheman, regionManager, ResultsLayout, RaceModel, RacerCollection, RaceCollection, ImportView, RaceSubmitView, RacesView) {

  var BaseController = Marionette.Object.extend({
    initialize: function(){
      this.globalCh = Backbone.Wreqr.radio.channel('global');
    },

    index: function() {
      var _this = this;
      this.globalCh.vent.on('race:won', function(racerId){
        var newRace = new RaceModel({racer_id: racerId}, {validate: true});
        newRace.save(); // we dont actually care if the sync has finished
        raceCollection.add(newRace);
      });

      var resultsLayout = new ResultsLayout(),
        racerCollection = new RacerCollection(),
        racerCollectionFetched = racerCollection.fetch(),
        raceCollection,
        raceCollectionFetched;

      $.when(racerCollectionFetched.then(function(){
        var raceSubmitView = new RaceSubmitView({collection: racerCollection});
        regionManager.get('addRegion').show(raceSubmitView);

        raceCollection = new RaceCollection(),
        raceCollectionFetched = raceCollection.fetch();

        // when set up races view
        $.when(raceCollectionFetched).then(function(){
          var racesView = new RacesView({collection: raceCollection});

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

  return BaseController;
});
