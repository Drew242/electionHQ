angular
  .module('Dollar', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main/_main.html',
        controller: 'followCtrl'
      })
      .state('clinton', {
        url: '/clinton',
        templateUrl: 'main/_clinton.html',
        controller: 'followCtrl'
      })
      .state('trump', {
        url: '/trump',
        templateUrl: 'main/_trump.html',
        controller: 'followCtrl'
      })
      .state('forecast', {
        url: '/forecast',
        templateUrl: 'main/_forecast.html',
        controller: 'followCtrl'
      });
      $urlRouterProvider.otherwise('main');
    }])
