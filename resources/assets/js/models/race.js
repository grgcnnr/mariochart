define([
  'backbone',
  'models/racer',
], function(Backbone, App, RacerModel) {
  RaceModel = Backbone.Model.extend({
    urlRoot: '/races',

    addRacerData: function(){
      
    },

    validate: function(attr) {
      if (!attr.racer_id) {
        return 'A racer id needs to be set';
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
