(function () {
    'use strict'

    angular
        .module('login')
        .factory('Auth',authService);

        function authService($firebaseAuth) {
            var link = new Firebase('https://practicabatch10.firebaseio.com/');
            return $firebaseAuth(link)
        }
})();