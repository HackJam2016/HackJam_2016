angular.module('toxicApp', ['ngRoute', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
  	$stateProvider
  		.state('/home', {
  			url: '/home',
  			templateUrl: '/home',
  			controller: 'homeCtrl',
  			controllerAs: 'vm'

  		});
  		$locationProvider.html5Mode(true);
  });
