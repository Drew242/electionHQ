console.log('loading dollarRoutes')
angular.module('Dollar').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'main.html'
  })
  $routeProvider.when('/clinton', {
    templateUrl: 'clinton.html'
  })
  $routeProvider.when('/trump', {
    templateUrl: 'trump.html'
  })
  $routeProvider.when('/forecast', {
    templateUrl: 'forecast.html',
    controller: 'followCtrl',
  })

  $routeProvider
    .otherwise({
      redirectTo: '/'
    });
});
