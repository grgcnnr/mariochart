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



      cacheman.get( new RacerCollection() ).done(function(racerCollection){
        var raceSubmitView = new RaceSubmitView({collection: racerCollection});
        regionManager.get('addRegion').show(raceSubmitView);
      });

      cacheman.get( new RaceCollection()).done(function(raceCollection){
          var resultsLayout = new ResultsLayout(),
            racesView = new RacesView({collection: raceCollection});

          this.globalCh.vent.on('race:won', function(racerId){
            var newRace = new RaceModel({racer_id: racerId}, {validate: true});
            newRace.save(); // we dont actually care if the sync has finished
            raceCollection.add(newRace);
          });

          regionManager.get('mainRegion').show(resultsLayout);
          resultsLayout.showChildView('history', racesView);

      });
    },



    import: function() {
      regionManager.get('addRegion').reset();
      regionManager.get('mainRegion').show(new ImportView());
    },



  });

  return BaseController;
});
