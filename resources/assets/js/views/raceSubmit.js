define([
  'marionette',
  'app',
], function(Marionette, App) {
  // The form that handles adding new races to the racesCollection
  var raceSubmitView = Marionette.ItemView.extend({
    template: '#raceSubmitTpl',

    events: {
      'click button': 'winnerAdded',
    },

    winnerAdded: function() {
      var winner = (this.$('select').val());
      var globalCh = Backbone.Wreqr.radio.channel('global');
      globalCh.vent.trigger('race:won', winner);
    },
  });

  return raceSubmitView;
});
