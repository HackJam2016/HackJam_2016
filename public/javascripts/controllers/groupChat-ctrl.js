angular.module('toxicApp')
  .controller('groupChatCtrl', ['$scope', function($scope) {
  	var vm = this;

  	vm.chatMessages = [];
  	vm.newChatMsg = "";

  	vm.formatChat = formatChat;
  	vm.addChat = addChat;

  	function formatChat(icon, username, text, origDt) {
  		var chat = {};
  		chat.icon = icon;
	    chat.username = username;
	    chat.text = text;
	    chat.origDt = origDt;
	    return chat;
  	}

  	function addChat() {
  		if (vm.newChatMsg != "") {
			var chat = formatChat("http://placehold.it/16x16", "steve", vm.newChatMsg, new Date(Date.now()));
			console.log("here: ", chat);
			vm.chatMessages.push(chat);
			console.log("here: ", vm.chatMessages);
			vm.newChatMsg = "";
		}
  	}

  }])
