define([
  'backbone',
  'models/racer',
], function(Backbone, App, RacerModel) {
  RaceModel = Backbone.Model.extend({

    urlRoot: '/races',

    validate: function(attr) {
      if (!attr.racer_id) {
        return 'A racer id needs to be set';
      }
    },

    getDate: function(){
      var datestamp = parseInt(this.get('won_date'), 10) * 1000 || parseInt( new Date() /1000 , 10); // SQLite date is stored in seconds not ms
      return new Date(datestamp);
    },

    timeLeftToDel: function() {
      var date = this.getDate();
      var age =  new Date() - date; // time in MS between current time and created time
      return (1000 * 60 * 3) - age;
    },
  });

  return RaceModel;
});
