angular.module('m8viesApp')
        .factory('Movie', ['$resource', function ($resource) {
          return $resource('https://yts.ag/api/v2/list_movies.json')
        }])
