define([
    'backbone',
    'models/race',
], function(Backbone, RaceModel) {
  var raceCollection = Backbone.Collection.extend({
    url: '/races',
    model:  RaceModel,
    comparator: function(race) {
      return race.get('date');
    },

    initialize: function() {
      var globalCh = Backbone.Wreqr.radio.channel('global');
      globalCh.vent.on('race:won', this.addRace, this);
    },

    // ERR IS THIS OK?
    //The collection is listening for a new race and adding a model to itself
    addRace: function(racer) {
      var _this = this;
      var newRace = new this.model({racer: racer}, {validate: true});
      newRace.save({},
        {success: function(model, response, options) {
          _this.add(model);
        },
      });
    },
  });

  return raceCollection;
});
