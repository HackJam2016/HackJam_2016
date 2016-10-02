angular.module('toxicApp')
  .controller('loginCtrl', ['$scope', '$location', '$window', function($scope, $location, $window) {
  	var vm = this;

  	vm.user = {};
  	vm.message = '';

  	vm.login = login;
  	vm.loginFB = loginFB;
  	vm.forgotPassword = forgotPassword;

  	function login(user) {	
  		console.log("login!");
  		$location.path('/home');
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
