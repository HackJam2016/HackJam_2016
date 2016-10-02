angular.module('toxicApp', ['ngRoute', 'ngResource', 'ui.router'])
  .config(function($routeProvider){
  	$routeProvider
      .when('/home', {
  		  templateUrl: '/home'
  	   })
       .otherwise({
         templateUrl: '/home'
       });
  });
