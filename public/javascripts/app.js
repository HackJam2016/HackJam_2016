angular.module('m8viesApp', ['ngRoute'])
  .config(function($routeProvider){
  	$routeProvider
      .when('/movies', {
  		  templateUrl: '/movies'
  	   })
       .otherwise({
         templateUrl: '/movies'
       });
  });
