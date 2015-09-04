define([
    'underscore',
    'jquery',
    'backbone',
    'models/race',
    'collections/racer'
], function(_,$,Backbone,  RaceModel, RacerCollection) {
  var raceCollection = Backbone.Collection.extend({
    cachemanId: 'racecollection',
    url: '/races',
    model:  RaceModel,

    initialize: function(){
      this.globalCh = Backbone.Wreqr.radio.channel('global');
    },

    comparator: function(race) {
      return race.get('date');
    },

    add: function(race){
      var _this = this;
      this.globalCh.reqres.request('cache-get', 'collections/racer').done(function(racerCollection){
        var racers = racerCollection.toJSON();
        race.racer = _.findWhere(racers, {id: race.get('racer_id')});
        Backbone.Collection.prototype.add.call(_this, race);
      });
    },

    fetch:function(){
      var dfd = new $.Deferred();
      var _this = this;

      Backbone.Collection.prototype.fetch.call(this).then(function(){
        _this.globalCh.reqres.request('cache-get', 'collections/racer').done(function(racerCollection){
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
