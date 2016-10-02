angular.module('toxicApp')
  .controller('groupListCtrl', ['$scope', '$uibModal', '$location', '$window', function($scope, $uibModal, $location, $window) {
  	var vm = this;

  	vm.group = {title: '', description: '', population: '1 people'};
  	vm.groups = [{title: 'Group 1', description: 'Toxic Mushroom message 1', timeLeft: '23mins left', population: '384 peoples'}, {title: 'Group 2', description: 'Toxic Mushroom message 2', timeLeft: '1h32mins left', population: '23 peoples' }, {title: 'Group 3', description: 'Toxic Mushroom message 3', timeLeft: '3hrs13mins left', population: '151 peoples' }];
  	vm.showModal = false;

  	vm.addGroup = addGroup;
  	vm.createGroup = createGroup;
  	vm.viewGroup = viewGroup;

  	function addGroup() {
  		vm.showModal = !vm.showModal;
  	}

  	function createGroup() {
  		vm.group.timeLeft = "1 day left";
  		vm.groups.push(vm.group);
  		vm.showModal = false;
  		viewGroup();
  	}

  	function viewGroup() {
  		$window.location.href = '/groupChat';
  	}

  }])

