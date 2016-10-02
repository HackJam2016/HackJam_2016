angular.module('toxicApp')
  .controller('groupChatCtrl', ['$scope', '$http', function($scope, $http) {
  	var vm = this;

  	vm.chatMessages = [
        {'username': 'WongYau', 'text': 'hello'},
        {'username': 'Sam Cheng', 'text': 'hello'},
        {'username': 'CY Kwong', 'text': 'hello'}
    ];
  	vm.newChatMsg = "";

  	vm.formatChat = formatChat;
  	vm.addChat = addChat;
    vm.getChat = getChat;
      
    vm.group_id = -1;

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
      
    function getChat() {
        console.log('getChat()');
        var params = {
            method: 'POST',
            url: 'https://hackjam-145018.appspot.com/api/v1/groups',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'id': 1//vm.group_id
            }
        }

        $http(params).then(function(response){
            console.log(response);
        }, function(e){
            console.log('Error');
            console.log(e);
        });
    }

  }])
