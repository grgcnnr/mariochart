define([
  'backbone',
], function(Backbone) {
  RaceModel = Backbone.Model.extend({
    urlRoot: '/races',
    validate: function(attr) {
      if (!attr.racer) {
        return 'A racer name needs to be set';
      }
    },

    timeLeftToDel: function() {
      var date = new Date(this.get('date'));
      var age =  new Date() - date; // time in MS between current time and created time
      return (1000 * 60 * 3) - age;
    },
  });

  return RaceModel;
});
