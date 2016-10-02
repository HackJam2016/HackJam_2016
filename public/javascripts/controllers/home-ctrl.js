angular.module('toxicApp')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home) {
    const movies = Home.get(function(res) {
        $scope.movies = res.data.movies
    })
  }])
