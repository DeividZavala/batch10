(function () {
    'use strict'

    angular
        .module('chat')
        .factory('chatData',chatData);

    function chatData($firebaseArray) {
        var link = new Firebase('https://chatnegrabatch10.firebaseio.com/messages')
        return $firebaseArray(link)
    }
})();