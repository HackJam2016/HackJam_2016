angular.module('toxicApp', ['ngRoute', 'ngResource', 'ui.bootstrap'])
  .config(function($routeProvider, $urlRouterProvider, $locationProvider){
  	console.log("config");
  	$routeProvider
  		.when('/login', {
  			templateUrl: '/login'
  		})
  		.when('/home', {
  			templateUrl: '/home'
  		})
  		.when('/groupList', {
  			templateUrl: '/groupList'
  		})
  		.when('/groupChat', {
  			templateUrl: '/groupChat'
  		});
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/login');

	// $rootScope.$on('$stateChangeStart', function(event, toState, fromState, fromParams) {
	// 	if (toState.access.requiredLogin) {
	// 		$location.path('/home');
	// 	} else {
	// 		$location.path('/login');
	// 	}
	// });
  })
