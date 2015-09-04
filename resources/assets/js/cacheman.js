
define([
    'jquery',
    'backbone',
    'marionette',
    'collections/racer',
    'collections/race'
], function($,Backbone, Marionette, RacerCollection, RaceCollection) {

  var Chacheman = Marionette.Object.extend({
    cache: {},
    map: {
      'collections/racer': RacerCollection,
      'collections/race': RaceCollection
    },

    initialize: function(){
      var _this = this
      this.globalCh = Backbone.Wreqr.radio.channel('global');

      this.globalCh.reqres.setHandler('cache-get', function(name) {
        return _this.get(name);
      });
    },

    get: function(name){
      var _this = this;
      var obj;
      var dfd = new $.Deferred();

      if (! this.map[name]) {
        return null;
      }

      if (!this.cache[name]) {
        obj = new this.map[name]();

        obj.fetch().done(function(){
          _this.cache[name] = obj;
          dfd.resolve(_this.cache[name]);
        });
      } else {
        dfd.resolve(this.cache[name]);
      };

      return dfd.promise();
    }

  });

  return Chacheman;
});
