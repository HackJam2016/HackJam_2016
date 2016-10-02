angular.module('toxicApp')
  .controller('loginCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http) {
  	var vm = this;

  	vm.user = {};
  	vm.message = '';

  	vm.login = login;
  	vm.loginFB = loginFB;
  	vm.forgotPassword = forgotPassword;

  	function login(user) {
      if (user.email == 'toxic@mushroom.com' && user.password == '123456') {
        console.log('y89dwyhoi');
        $window.location.href = '/groupList';
      }
  	}
  	function loginFB(user) {
        $window.location.href = '/api/account/loginFB';
        return false;
    }
    function forgotPassword(user) {
        try {
            if (user.email.trim().length === 0) {
                vm.message = "Please enter a valid email address";
            } else {
                
            }
        } catch(ex) {
            vm.message = "Please enter a valid email address";
        }
    }

  }])
