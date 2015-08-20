define([
  'underscore',
  'marionette',
  'moment',
], function(_, Marionette, Moment) {
  var RaceView = Marionette.ItemView.extend({
    template: '#raceTpl',

    events: {
      'click [data-action="delete"]': 'raceDeleted',
    },

    onRender: function() {
      var _this = this;
      var timeLeft = this.model.timeLeftToDel();

      if (timeLeft > 0) {
        setTimeout(function() {
          _this.$('[data-action="delete"]').fadeOut().remove();
        }, timeLeft);
      }
    },

    serializeData: function() {
      var canDelete = this.model.timeLeftToDel() > 0; // 3 mins
      var niceDate =  new Moment(this.model.get('date')).format('dddd, MMM D YYYY');
      var opts = {
        niceDate: niceDate,
        canDelete: canDelete,
      };
      return _.extend(opts, this.model.toJSON(), {});
    },

    raceDeleted: function() {
      var globalCh = Backbone.Wreqr.radio.channel('global');
      globalCh.vent.trigger('race:destroyed', this.model);
      this.model.destroy();
    },
  });

  return RaceView;
});
