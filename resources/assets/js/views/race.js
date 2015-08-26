define([
  'underscore',
  'marionette',
  'moment',
  'text!tpl/race.tpl',
], function(_, Marionette, Moment, raceTpl) {
  var RaceView = Marionette.ItemView.extend({
    template: _.template(raceTpl),
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
      var niceDate =  new Moment(this.model.getDate()).format('dddd, MMM D YYYY');
      console.log(niceDate);
      var opts = {
        niceDate: niceDate,
        canDelete: canDelete,
        racer: this.model.racer,
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
