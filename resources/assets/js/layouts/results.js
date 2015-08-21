define([
  'underscore',
  'marionette',
  'text!tpl/resultsLayout.tpl',
], function(_, Marionette, resultsLayoutTpl) {
  var ResultsLayout = Marionette.LayoutView.extend({
    template: _.template(resultsLayoutTpl),
    regions: {
      history: '#history',
      chart: '#chart',
    },
  });

  return ResultsLayout;
});
