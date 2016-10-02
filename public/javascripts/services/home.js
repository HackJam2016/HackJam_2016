angular.module('toxicApp')
    .factory('Home', ['$resource', function ($resource) {
      return $resource('https://yts.ag/api/v2/list_movies.json')
    }])
