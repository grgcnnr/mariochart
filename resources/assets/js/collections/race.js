define([
    'underscore',
    'jquery',
    'backbone',
    'cacheman',
    'models/race',
    'collections/racer'
], function(_,$,Backbone, cacheman, RaceModel, RacerCollection) {
  var raceCollection = Backbone.Collection.extend({
    cachemanId: 'racecollection',
    url: '/races',
    model:  RaceModel,
    comparator: function(race) {
      return race.get('date');
    },

    add: function(race){
      var _this = this;
      cacheman.get( new racerCollection()).done(function(racerCollection){
        var racers = racerCollection.toJSON();
        race.racer = _.findWhere(racers, {id: race.get('racer_id')});
        Backbone.Collection.prototype.add.call(_this, race);
      });
    },

    fetch:function(){
      var dfd = new $.Deferred();
      var _this = this;

      Backbone.Collection.prototype.fetch.call(this).then(function(){
        cacheman.get('racerCollection').then(function(racerCollection){
          var racers = racerCollection.toJSON();
          _.each(_this.models, function(race){
            race.racer = _.findWhere(racers, {id: race.get('racer_id')});
          });
          dfd.resolve();
        });
      });

      return dfd.promise();
    },
  });

  return raceCollection;
});
