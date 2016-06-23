(function() {
  'use strict';

  angular
  .module('main')
  .config(mainRoutes);

  mainRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function mainRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('base', {
        templateUrl: 'modules/main/views/baseView.html'
      })
      .state('base.main', {
        url: '/',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        templateUrl: 'modules/main/views/mainView.html'
      })
      .state('base.nerd', {
        url: '/nerd',
        controller: 'nerdController',
        controllerAs: 'nerdCtrl',
        templateUrl: 'modules/main/views/nerdView.html',
        resolve: {
          nerds: ['nerdService', function(nerdService) {
            return nerdService.get()
              .then(function(data) {
                return data.data;
              });
          }]
        }
      });
  }
})();