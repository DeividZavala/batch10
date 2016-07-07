(function () {
    'use strict'

    var chat = {
        controller:chatCtrl,
        templateUrl:"app/chat_component/chat.html"
    }

    function chatCtrl(chatData) {
        var chat = this;

        chat.messages = chatData;

        chat.addMessage = addMessage;

        function addMessage() {
            chat.messages.$add({
                user:chat.user,
                message:chat.message
            })
            chat.message="";
        }

    }

    angular
        .module('chat')
        .component('chat',chat);
})();