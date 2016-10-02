angular.module('toxicApp')
  .controller('groupListCtrl', ['$scope', '$http', function($scope, $http) {
  	var vm = this;
  	console.log("group list here");

    vm.name = "";

  	vm.addGroup = addGroup;

    function addGroup() {
        console.log('addGroup()');
        var params = {
            method: 'POST',
            url: 'https://hackjam-145018.appspot.com/api/v1/groups',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'name': vm.name
            }
        }

        $http(params).then(function(response){
            console.log(response);
        }, function(e){
            console.log(e);
        });
    }  
    
  }])
