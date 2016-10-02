angular.module('toxicApp', ['ngRoute', 'ngResource', 'ui.bootstrap'])
  .config(function($routeProvider, $locationProvider){
  	$routeProvider
  		.when('/login', {
  			templateUrl: '/login',
  			controller: 'loginCtrl'
  		})
  		.when('/home', {
  			templateUrl: '/home',
  			controller: 'homeCtrl'
  		})
  		.when('/groupList', {
  			templateUrl: '/groupList',
  			controller: 'groupListCtrl'
  		})
  		.when('/groupChat', {
  			templateUrl: '/groupChat',
  			controller: 'groupChatCtrl'
  		});
	$locationProvider.html5Mode(true);

	// $rootScope.$on('$stateChangeStart', function(event, toState, fromState, fromParams) {
	// 	if (toState.access.requiredLogin) {
	// 		$location.path('/home');
	// 	} else {
	// 		$location.path('/login');
	// 	}
	// });
  })
