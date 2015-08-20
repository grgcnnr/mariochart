define([
  'underscore',
  'marionette',
  'models/race',
], function(_, Marionette, RaceModel) {

  var ImportView = Marionette.ItemView.extend({
    template: function() {
      return _.template('<textarea id="importtext"></textarea><button>import</button>')();
    },

    events: {
      'click button': 'doImport',
    },

    doImport: function() {
      var raw = this.$('#importtext').val();
      var races;
      try {
        races = JSON.parse(raw);
      } catch (e) {
        alert(e);
      }

      if (races) {
        _.each(races, function(race) {
          var raceModel = new RaceModel(race);
          raceModel.save();
        });
      }
    },
  });

  return ImportView;
});
