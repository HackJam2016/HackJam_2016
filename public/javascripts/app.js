angular.module('m8viesApp', ['ngRoute', 'ngResource'])
  .config(function($routeProvider){
  	$routeProvider
      .when('/movies', {
  		  templateUrl: '/movies'
  	   })
       .otherwise({
         templateUrl: '/movies'
       });
  });
