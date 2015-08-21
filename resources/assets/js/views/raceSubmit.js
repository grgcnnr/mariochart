define([
  'underscore',
  'marionette',
  'app',
  'text!tpl/raceSubmit.tpl',
], function(_,Marionette, App, raceSubmitTpl) {
  // The form that handles adding new races to the racesCollection
  var raceSubmitView = Marionette.ItemView.extend({
    template: _.template(raceSubmitTpl),
    events: {
      'click button': 'winnerAdded',
    },

    winnerAdded: function() {
      var racerId = (this.$('select option:selected').attr('value'));
      var globalCh = Backbone.Wreqr.radio.channel('global');
      globalCh.vent.trigger('race:won', racerId);
    },
  });

  return raceSubmitView;
});
