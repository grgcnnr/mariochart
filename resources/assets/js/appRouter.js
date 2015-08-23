define([
    'marionette',
    'controllers/baseController'
], function(Marionette, BaseController) {

  var AppRouter = Marionette.AppRouter.extend({
    controller: new BaseController(),
    appRoutes: {
      'import': 'import',
      '': 'index',
    },
  });

  return AppRouter;
});
