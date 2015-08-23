
define([
    'jquery',
    'backbone',
    'marionette',
], function($,Backbone, Marionette, RacerCollection, RaceCollection) {

  var chacheman = Marionette.Object.extend({
    cache: {},


    get: function(obj){
      var _this = this,
        name = obj.cachemanId,
        dfd = new $.Deferred();

      if (!this.cache[name]) {
        this.cache[name] = obj;
        this.cache[name].fetch().done(function(){
          console.log(_this.cache[name]);
          dfd.resolve(_this.cache[name]);
        });
      } else {
        dfd.resolve(this.cache[name]);
      };

      return dfd.promise();
    }

  });

  return new chacheman();
});
