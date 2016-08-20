angular.module('m8viesApp')
  .controller('MoviesCtrl', ['$scope', 'Movie', function($scope, Movie) {
    const movies = Movie.get(function(res) {
        $scope.movies = res.data.movies
    })
  }])
