
define([
    'jquery',
    'backbone',
    'marionette',
    'collections/racer',
], function($,Backbone, Marionette, RacerCollectoion) {

  var chacheman = Marionette.Object.extend({
    cache: {},
    constructors: {
      racerCollection: RacerCollectoion
    },
    get: function(name){
      var _this = this;
      var dfd = new $.Deferred();

      if (!this.cache[name]) {
        this.cache[name] = new this.constructors[name]();
        this.cache[name].fetch().done(function(){
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
