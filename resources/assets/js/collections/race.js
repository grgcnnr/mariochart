define([
    'jquery',
    'backbone',
    'models/race',
    'collections/racer'
], function($,Backbone, RaceModel, RacerCollection) {
  var raceCollection = Backbone.Collection.extend({
    url: '/races',
    model:  RaceModel,
    comparator: function(race) {
      return race.get('date');
    },

    racers: new RacerCollection(),

    fetch:function(){
      var dfd = new $.Deferred();
      var _this = this;

      Backbone.Collection.prototype.fetch.call(this).then(function(){
        if(!_this.racers.length) {
          _this.racers.fetch({
            success: function(){
              _this.addRacerData();
              dfd.resolve();
            }
          });
        }
      });

      return dfd.promise();
    },

    initialize: function() {
      var globalCh = Backbone.Wreqr.radio.channel('global');
      globalCh.vent.on('race:won', this.addRace, this);
    },

    addRacerData: function(){
      var racers = this.racers.toJSON();
      _.each(this.models, function(model){
        var rid = model.get('racer_id');
        model.racer = _.findWhere(racers, {id: rid});
      }, this);
    },

    // ERR IS THIS OK?
    //The collection is listening for a new race and adding a model to itself
    addRace: function(racerId) {
      console.log('addrace caught', racerId);
      var _this = this;
      var newRace = new this.model({racer_id: racerId}, {validate: true});
      newRace.save({},
        {success: function(model, response, options) {
          _this.add(model);
        },
      });
    },
  });

  return raceCollection;
});
