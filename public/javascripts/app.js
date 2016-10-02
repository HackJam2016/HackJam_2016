angular.module('toxicApp', ['ngRoute', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
  	console.log("config");
  	$stateProvider
  		.state('/login', {
  			url: '/login',
  			templateUrl: '/login',
  			controller: 'loginCtrl',
  			controllerAs: 'vm'
  		})
  		.state('/home', {
  			url: '/home',
  			templateUrl: '/home',
  			controller: 'HomeCtrl',
  			controllerAs: 'vm',
  			access: { requiredLogin: true }

  		});
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/home');

	// $rootScope.$on('$stateChangeStart', function(event, toState, fromState, fromParams) {
	// 	if (toState.access.requiredLogin) {
	// 		$location.path('/home');
	// 	} else {
	// 		$location.path('/login');
	// 	}
	// });
  })
